**Chức năng:**

  1. Resize ảnh, tránh vỡ khung.
  1. Xem kích cỡ thật của ảnh với Colorbox.
  1. Sự lựa chọn Slideshow cho ảnh.
  1. Xem Video với Colorbox.
  1. Chuyển link video youtube thành đoạn mã hiển thị Video, không cần phải sử dụng bbcode.
  1. Khung nền style xanh da trời cho Video trên.
  1. Sự lựa chọn đọc mã link, mã bbcode, mã html của video.
  1. Ẩn, hiện video.
  1. Thu nhỏ, phóng to video.
  1. Xem video toàn màn hình tại tab mới.



**Demo:**



![http://i1.ytimg.com/vi/Mi7RJBjAJ7A/0.jpg](http://i1.ytimg.com/vi/Mi7RJBjAJ7A/0.jpg)




**Thực hiện:**

> Tạo một file javascript:
> > Title **: Colorbox
> > Placement : Tùy bạn.
> > Javascript Code** : [Đã ẩn. Reply để thấy Mắc cỡ]

```

// ColorBox v1.3.16 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function ($, document, window) {
var
// ColorBox Default Settings.
// See http://colorpowered.com/colorbox for details.
defaults = {
transition: "elastic",
speed: 300,
width: false,
initialWidth: "600",
innerWidth: false,
maxWidth: false,
height: false,
initialHeight: "450",
innerHeight: false,
maxHeight: false,
scalePhotos: true,
scrolling: true,
inline: false,
html: false,
iframe: false,
fastIframe: true,
photo: false,
href: false,
title: false,
rel: false,
opacity: 0.9,
preloading: true,
current: "image {current} of {total}",
previous: "previous",
next: "next",
close: "close",
open: false,
returnFocus: true,
loop: true,
slideshow: false,
slideshowAuto: true,
slideshowSpeed: 2500,
slideshowStart: "start slideshow",
slideshowStop: "stop slideshow",
onOpen: false,
onLoad: false,
onComplete: false,
onCleanup: false,
onClosed: false,
overlayClose: true,
escKey: true,
arrowKey: true
},
// Abstracting the HTML and event identifiers for easy rebranding
colorbox = 'colorbox',
prefix = 'cbox',
// Events
event_open = prefix + '_open',
event_load = prefix + '_load',
event_complete = prefix + '_complete',
event_cleanup = prefix + '_cleanup',
event_closed = prefix + '_closed',
event_purge = prefix + '_purge',
// Special Handling for IE
isIE = $.browser.msie && !$.support.opacity, // feature detection alone gave a false positive on at least one phone browser and on some development versions of Chrome.
isIE6 = isIE && $.browser.version < 7,
event_ie6 = prefix + '_IE6',
// Cached jQuery Object Variables
$overlay,
$box,
$wrap,
$content,
$topBorder,
$leftBorder,
$rightBorder,
$bottomBorder,
$related,
$window,
$loaded,
$loadingBay,
$loadingOverlay,
$title,
$current,
$slideshow,
$next,
$prev,
$close,
$groupControls,
// Variables for cached values or use across multiple functions
settings = {},
interfaceHeight,
interfaceWidth,
loadedHeight,
loadedWidth,
element,
index,
photo,
open,
active,
closing = false,
publicMethod,
boxElement = prefix + 'Element';
// ****************
// HELPER FUNCTIONS
// ****************
// jQuery object generator to reduce code size
function $div(id, cssText) {
var div = document.createElement('div');
if(id) {
div.id = prefix + id;
}
div.style.cssText = cssText || false;
return $(div);
}
// Convert % values to pixels
function setSize(size, dimension) {
dimension = dimension === 'x' ? $window.width() : $window.height();
return(typeof size === 'string') ? Math.round((/%/.test(size) ? (dimension / 100) * parseInt(size, 10) : parseInt(size, 10))) : size;
}
// Checks an href to see if it is a photo.
// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
function isImage(url) {
return settings.photo || /\.(gif|png|jpg|jpeg|bmp)(?:\?([^#]*))?(?:#(\.*))?$/i.test(url);
}
// Assigns function results to their respective settings.  This allows functions to be used as values.
function process(settings) {
for(var i in settings) {
if($.isFunction(settings[i]) && i.substring(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
settings[i] = settings[i].call(element);
}
}
settings.rel = settings.rel || element.rel || 'nofollow';
settings.href = $.trim(settings.href || $(element).attr('href'));
settings.title = settings.title || element.title;
}
function trigger(event, callback) {
if(callback) {
callback.call(element);
}
$.event.trigger(event);
}
// Slideshow functionality
function slideshow() {
var timeOut,
className = prefix + "Slideshow_",
click = "click." + prefix,
start,
stop,
clear;
if(settings.slideshow && $related[1]) {
start = function () {
$slideshow.text(settings.slideshowStop)
.unbind(click)
.bind(event_complete, function () {
if(index < $related.length - 1 || settings.loop) {
timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
}
})
.bind(event_load, function () {
clearTimeout(timeOut);
})
.one(click + ' ' + event_cleanup, stop);
$box.removeClass(className + "off").addClass(className + "on");
timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
};
stop = function () {
clearTimeout(timeOut);
$slideshow.text(settings.slideshowStart)
.unbind([event_complete, event_load, event_cleanup, click].join(' '))
.one(click, start);
$box.removeClass(className + "on").addClass(className + "off");
};
if(settings.slideshowAuto) {
start();
} else {
stop();
}
}
}
function launch(elem) {
if(!closing) {
element = elem;
process($.extend(settings, $.data(element, colorbox)));
$related = $(element);
index = 0;
if(settings.rel !== 'nofollow') {
$related = $('.' + boxElement).filter(function () {
var relRelated = $.data(this, colorbox).rel || this.rel;
return(relRelated === settings.rel);
});
index = $related.index(element);
// Check direct calls to ColorBox.
if(index === -1) {
$related = $related.add(element);
index = $related.length - 1;
}
}
if(!open) {
open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
$box.show();
if(settings.returnFocus) {
try {
element.blur();
$(element).one(event_closed, function () {
try {
this.focus();
} catch(e) {
// do nothing
}
});
} catch(e) {
// do nothing
}
}
// +settings.opacity avoids a problem in IE when using non-zero-prefixed-string-values, like '.5'
$overlay.css({
"opacity": +settings.opacity,
"cursor": settings.overlayClose ? "pointer" : "auto"
}).show();
// Opens inital empty ColorBox prior to content being loaded.
settings.w = setSize(settings.initialWidth, 'x');
settings.h = setSize(settings.initialHeight, 'y');
publicMethod.position(0);
if(isIE6) {
$window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
$overlay.css({
width: $window.width(),
height: $window.height(),
top: $window.scrollTop(),
left: $window.scrollLeft()
});
}).trigger('resize.' + event_ie6);
}
trigger(event_open, settings.onOpen);
$groupControls.add($title).hide();
$close.html(settings.close).show();
}
publicMethod.load(true);
}
}
// ****************
// PUBLIC FUNCTIONS
// Usage format: $.fn.colorbox.close();
// Usage from within an iframe: parent.$.fn.colorbox.close();
// ****************
publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
var $this = this,
autoOpen;
if(!$this[0] && $this.selector) { // if a selector was given and it didn't match any elements, go ahead and exit.
return $this;
}
options = options || {};
if(callback) {
options.onComplete = callback;
}
if(!$this[0] || $this.selector === undefined) { // detects $.colorbox() and $.fn.colorbox()
$this = $('<a/>');
options.open = true; // assume an immediate open
}
$this.each(function () {
$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
$(this).addClass(boxElement);
});
autoOpen = options.open;
if($.isFunction(autoOpen)) {
autoOpen = autoOpen.call($this);
}
if(autoOpen) {
launch($this[0]);
}
return $this;
};
// Initialize ColorBox: store common calculations, preload the interface graphics, append the html.
// This preps colorbox for a speedy open when clicked, and lightens the burdon on the browser by only
// having to run once, instead of each time colorbox is opened.
publicMethod.init = function () {
// Create & Append jQuery Objects
$window = $(window);
$box = $div().attr({
id: colorbox,
'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE') : ''
});
$overlay = $div("Overlay", isIE6 ? 'position:absolute' : '').hide();
$wrap = $div("Wrapper");
$content = $div("Content").append(
$loaded = $div("LoadedContent", 'width:0; height:0; overflow:hidden'),
$loadingOverlay = $div("LoadingOverlay").add($div("LoadingGraphic")),
$title = $div("Title"),
$current = $div("Current"),
$next = $div("Next"),
$prev = $div("Previous"),
$slideshow = $div("Slideshow").bind(event_open, slideshow),
$close = $div("Close"));
$wrap.append( // The 3x3 Grid that makes up ColorBox
$div().append(
$div("TopLeft"),
$topBorder = $div("TopCenter"),
$div("TopRight")),
$div(false, 'clear:left').append(
$leftBorder = $div("MiddleLeft"),
$content,
$rightBorder = $div("MiddleRight")),
$div(false, 'clear:left').append(
$div("BottomLeft"),
$bottomBorder = $div("BottomCenter"),
$div("BottomRight"))).children().children().css({
'float': 'left'
});
$loadingBay = $div(false, 'position:absolute; width:9999px; visibility:hidden; display:none');
$('body').prepend($overlay, $box.append($wrap, $loadingBay));
$content.children()
.hover(function () {
$(this).addClass('hover');
}, function () {
$(this).removeClass('hover');
}).addClass('hover');
// Cache values needed for size calculations
interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height(); //Subtraction needed for IE6
interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
loadedHeight = $loaded.outerHeight(true);
loadedWidth = $loaded.outerWidth(true);
// Setting padding to remove the need to do size conversions during the animation step.
$box.css({
"padding-bottom": interfaceHeight,
"padding-right": interfaceWidth
}).hide();
// Setup button events.
$next.click(function () {
publicMethod.next();
});
$prev.click(function () {
publicMethod.prev();
});
$close.click(function () {
publicMethod.close();
});
$groupControls = $next.add($prev).add($current).add($slideshow);
// Adding the 'hover' class allowed the browser to load the hover-state
// background graphics.  The class can now can be removed.
$content.children().removeClass('hover');
$('.' + boxElement).live('click', function (e) {
// checks to see if it was a non-left mouse-click and for clicks modified with ctrl, shift, or alt.
if(!((e.button !== 0 && typeof e.button !== 'undefined') || e.ctrlKey || e.shiftKey || e.altKey)) {
e.preventDefault();
launch(this);
}
});
$overlay.click(function () {
if(settings.overlayClose) {
publicMethod.close();
}
});
// Set Navigation Key Bindings
$(document).bind('keydown.' + prefix, function (e) {
var key = e.keyCode;
if(open && settings.escKey && key === 27) {
e.preventDefault();
publicMethod.close();
}
if(open && settings.arrowKey && $related[1]) {
if(key === 37) {
e.preventDefault();
$prev.click();
} else if(key === 39) {
e.preventDefault();
$next.click();
}
}
});
};
publicMethod.remove = function () {
$box.add($overlay).remove();
$('.' + boxElement).die('click').removeData(colorbox).removeClass(boxElement);
};
publicMethod.position = function (speed, loadedCallback) {
var animate_speed,
// keeps the top and left positions within the browser's viewport.
posTop = Math.max(document.documentElement.clientHeight - settings.h - loadedHeight - interfaceHeight, 0) / 2 + $window.scrollTop(),
posLeft = Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2 + $window.scrollLeft();
// setting the speed to 0 to reduce the delay between same-sized content.
animate_speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed;
// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
// it can invoke an obscure IE bug when using iframes.
$wrap[0].style.width = $wrap[0].style.height = "9999px";
function modalDimensions(that) {
// loading overlay height has to be explicitly set for IE6.
$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
$loadingOverlay[0].style.height = $loadingOverlay[1].style.height = $content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height;
}
$box.dequeue().animate({
width: settings.w + loadedWidth,
height: settings.h + loadedHeight,
top: posTop,
left: posLeft
}, {
duration: animate_speed,
complete: function () {
modalDimensions(this);
active = false;
// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
if(loadedCallback) {
loadedCallback();
}
},
step: function () {
modalDimensions(this);
}
});
};
publicMethod.resize = function (options) {
if(open) {
options = options || {};
if(options.width) {
settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
}
if(options.innerWidth) {
settings.w = setSize(options.innerWidth, 'x');
}
$loaded.css({
width: settings.w
});
if(options.height) {
settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
}
if(options.innerHeight) {
settings.h = setSize(options.innerHeight, 'y');
}
if(!options.innerHeight && !options.height) {
var $child = $loaded.wrapInner("<div style='overflow:auto'>

Unknown end tag for &lt;/div&gt;

").children(); // temporary wrapper to get an accurate estimate of just how high the total content should be.
settings.h = $child.height();
$child.replaceWith($child.children()); // ditch the temporary wrapper div used in height calculation
}
$loaded.css({
height: settings.h
});
publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
}
};
publicMethod.prep = function (object) {
if(!open) {
return;
}
var speed = settings.transition === "none" ? 0 : settings.speed;
$window.unbind('resize.' + prefix);
$loaded.remove();
$loaded = $div('LoadedContent').html(object);
function getWidth() {
settings.w = settings.w || $loaded.width();
settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
return settings.w;
}
function getHeight() {
settings.h = settings.h || $loaded.height();
settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
return settings.h;
}
$loaded.hide()
.appendTo($loadingBay.show()) // content has to be appended to the DOM for accurate size calculations.
.css({
width: getWidth(),
overflow: settings.scrolling ? 'auto' : 'hidden'
})
.css({
height: getHeight()
}) // sets the height independently from the width in case the new width influences the value of height.
.prependTo($content);
$loadingBay.hide();
// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
//$(photo).css({'float': 'none', marginLeft: 'auto', marginRight: 'auto'});
$(photo).css({
'float': 'none'
});
// Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
if(isIE6) {
$('select').not($box.find('select')).filter(function () {
return this.style.visibility !== 'hidden';
}).css({
'visibility': 'hidden'
}).one(event_cleanup, function () {
this.style.visibility = 'inherit';
});
}
function setPosition(s) {
publicMethod.position(s, function () {
var prev, prevSrc, next, nextSrc, total = $related.length,
iframe, complete;
if(!open) {
return;
}
complete = function () {
$loadingOverlay.hide();
trigger(event_complete, settings.onComplete);
};
if(isIE) {
//This fadeIn helps the bicubic resampling to kick-in.
if(photo) {
$loaded.fadeIn(100);
}
}
$title.html(settings.title).add($loaded).show();
if(total > 1) { // handle grouping
if(typeof settings.current === "string") {
$current.html(settings.current.replace(/\{current\}/, index + 1).replace(/\{total\}/, total)).show();
}
$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
prev = index ? $related[index - 1] : $related[total - 1];
next = index < total - 1 ? $related[index + 1] : $related[0];
if(settings.slideshow) {
$slideshow.show();
}
// Preloads images within a rel group
if(settings.preloading) {
nextSrc = $.data(next, colorbox).href || next.href;
prevSrc = $.data(prev, colorbox).href || prev.href;
nextSrc = $.isFunction(nextSrc) ? nextSrc.call(next) : nextSrc;
prevSrc = $.isFunction(prevSrc) ? prevSrc.call(prev) : prevSrc;
if(isImage(nextSrc)) {
$('<img/>')[0].src = nextSrc;
}
if(isImage(prevSrc)) {
$('<img/>')[0].src = prevSrc;
}
}
} else {
$groupControls.hide();
}
if(settings.iframe) {
iframe = $('<iframe/>').addClass(prefix + 'Iframe')[0];
if(settings.fastIframe) {
complete();
} else {
$(iframe).load(complete);
}
iframe.name = prefix + (+new Date());
iframe.src = settings.href;
if(!settings.scrolling) {
iframe.scrolling = "no";
}
if(isIE) {
iframe.frameBorder = 0;
iframe.allowTransparency = "true";
}
$(iframe).appendTo($loaded).one(event_purge, function () {
iframe.src = "//about:blank";
});
} else {
complete();
}
if(settings.transition === 'fade') {
$box.fadeTo(speed, 1, function () {
$box[0].style.filter = "";
});
} else {
$box[0].style.filter = "";
}
$window.bind('resize.' + prefix, function () {
publicMethod.position(0);
});
});
}
if(settings.transition === 'fade') {
$box.fadeTo(speed, 0, function () {
setPosition(0);
});
} else {
setPosition(speed);
}
};
publicMethod.load = function (launched) {
var href, setResize, prep = publicMethod.prep;
active = true;
photo = false;
element = $related[index];
if(!launched) {
process($.extend(settings, $.data(element, colorbox)));
}
trigger(event_purge);
trigger(event_load, settings.onLoad);
settings.h = settings.height ? setSize(settings.height, 'y') - loadedHeight - interfaceHeight : settings.innerHeight && setSize(settings.innerHeight, 'y');
settings.w = settings.width ? setSize(settings.width, 'x') - loadedWidth - interfaceWidth : settings.innerWidth && setSize(settings.innerWidth, 'x');
// Sets the minimum dimensions for use in image scaling
settings.mw = settings.w;
settings.mh = settings.h;
// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
if(settings.maxWidth) {
settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
}
if(settings.maxHeight) {
settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
}
href = settings.href;
$loadingOverlay.show();
if(settings.inline) {
// Inserts an empty placeholder where inline content is being pulled from.
// An event is bound to put inline content back when ColorBox closes or loads new content.
$div().hide().insertBefore($(href)[0]).one(event_purge, function () {
$(this).replaceWith($loaded.children());
});
prep($(href));
} else if(settings.iframe) {
// IFrame element won't be added to the DOM until it is ready to be displayed,
// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
prep(" ");
} else if(settings.html) {
prep(settings.html);
} else if(isImage(href)) {
$(photo = new Image())
.addClass(prefix + 'Photo')
.error(function () {
settings.title = false;
prep($div('Error').text('This image could not be loaded'));
})
.load(function () {
var percent;
photo.onload = null; //stops animated gifs from firing the onload repeatedly.
if(settings.scalePhotos) {
setResize = function () {
photo.height -= photo.height * percent;
photo.width -= photo.width * percent;
};
if(settings.mw && photo.width > settings.mw) {
percent = (photo.width - settings.mw) / photo.width;
setResize();
}
if(settings.mh && photo.height > settings.mh) {
percent = (photo.height - settings.mh) / photo.height;
setResize();
}
}
if(settings.h) {
photo.style.marginTop = Math.max(settings.h - photo.height, 0) / 2 + 'px';
}
if($related[1] && (index < $related.length - 1 || settings.loop)) {
photo.style.cursor = 'pointer';
photo.onclick = function () {
publicMethod.next();
};
}
if(isIE) {
photo.style.msInterpolationMode = 'bicubic';
}
setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
prep(photo);
}, 1);
});
setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
photo.src = href;
}, 1);
} else if(href) {
$loadingBay.load(href, function (data, status, xhr) {
prep(status === 'error' ? $div('Error').text('Request unsuccessful: ' + xhr.statusText) : $(this).contents());
});
}
};
// Navigates to the next page/image in a set.
publicMethod.next = function () {
if(!active && $related[1] && (index < $related.length - 1 || settings.loop)) {
index = index < $related.length - 1 ? index + 1 : 0;
publicMethod.load();
}
};
publicMethod.prev = function () {
if(!active && $related[1] && (index || settings.loop)) {
index = index ? index - 1 : $related.length - 1;
publicMethod.load();
}
};
// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
publicMethod.close = function () {
if(open && !closing) {
closing = true;
open = false;
trigger(event_cleanup, settings.onCleanup);
$window.unbind('.' + prefix + ' .' + event_ie6);
$overlay.fadeTo(200, 0);
$box.stop().fadeTo(300, 0, function () {
$box.add($overlay).css({
'opacity': 1,
cursor: 'auto'
}).hide();
trigger(event_purge);
$loaded.remove();
setTimeout(function () {
closing = false;
trigger(event_closed, settings.onClosed);
}, 1);
});
}
};
// A method for fetching the current element ColorBox is referencing.
// returns a jQuery object.
publicMethod.element = function () {
return $(element);
};
publicMethod.settings = defaults;
// Initializes ColorBox when the DOM has loaded
$(publicMethod.init);
}(jQuery, document, this));
$(document).ready(function () {
var CopyrightNoticeEn = 'Copyright ©  by . All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from miamor (miamorwest@yahoo.com). This entire copyright notice must remain in the original, copied, or modified script';
var CopyrightNoticeVi = 'Bản quyền © . Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ miamor (miamorwest@yahoo.com) là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi';
$(".post-entry, .postbody-entry, .blog_message").find("img").not("img[src*='imgfast.net/users'], .signature_div img").slideDown(1, function () {
$(this).replaceWith('<center><a href="' + $(this).attr('src') + '" title="Invision Forumotion Community"><img title="Click vào ảnh xem kích thước thật" src="' + $(this).attr('src') + '">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;

');
});
$(".post-entry a[href]").filter(function () {
return /\.(gif|png|jpg|jpeg|bmp)$/i.test(this.href);
}).attr('rel', 'imgifc');
$(".postbody a[href^='http://www.youtube'][href*='v=']").each(function () {
var a = $(this);
var b = a.attr("href").slice(a.attr("href").indexOf("v=") + 2, a.attr("href").indexOf("v=") + 13);
if(a.attr("href").indexOf("list=") != -1) {
var c = a.attr("href").slice(a.attr("href").indexOf("list=") + 5) + "&";
var d = c.slice(0, c.indexOf("&"));
a.replaceWith('<p align="center"><a style="position: relative" class="-youtube" href="http://www.youtube.com/embed/videoseries?list=' + d + '&hl=vi_VN&autoplay=1"><img class="not-colorbox" src="http://i1.ytimg.com/vi/' + b + '/0.jpg" /><span class="iconPlayer">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;

')
} else {
a.replaceWith('<a style="position: relative" class="-youtube" href="http://www.youtube.com/v/' + b + '&hl=vi_VN&autoplay=1"><img class="not-colorbox" src="http://i1.ytimg.com/vi/' + b + '/0.jpg" /><span class="iconPlayer">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

')
}
});
$("a[href='#anvideo']").click(function () {
$(this).parent().parent().next().children().hide();
$(this).next().toggle();
$(this).toggle()
});
$("a[href='#hienvideo']").click(function () {
$(this).parent().parent().next().children().show();
$(this).prev().toggle();
$(this).toggle()
});
$("a[href='#phongvideo']").click(function () {
$(this).parent().parent().next().children().children().children('img').css({
'width': '640px'
});
$(this).prev().toggle();
$(this).toggle()
});
$("a[href='#thuvideo']").click(function () {
$(this).parent().parent().next().children().children().children('img').css({
'width': '450px'
});
$(this).next().toggle();
$(this).toggle()
});
$("img[rel='linkfmvi']").click(function () {
$(this).next().show();
$(this).next().next().hide();
$(this).next().next().next().hide();
$(this).next().next().next().next().show();
$(this).next().next().next().next().next().hide();
$(this).hide()
});
$("img[rel='bbfmvi']").click(function () {
$(this).prev().hide();
$(this).next().show();
$(this).next().next().hide();
$(this).next().next().next().hide();
$(this).next().next().next().next().show();
$(this).hide()
});
$("img[rel='htmlfmvi']").click(function () {
$(this).prev().hide();
$(this).prev().prev().show();
$(this).next().show();
$(this).next().next().hide();
$(this).next().next().next().hide();
$(this).hide()
});
$("a[rel='imgifc']").colorbox({
slideshow: true
});
$("a[class='-youtube']").colorbox({
iframe:true, innerWidth:825, innerHeight:550
})
})
```


> Chèn vào CSS:

```

/* ---Colorbox - by miamor []--- */
#cboxOverlay,#cboxWrapper,#colorbox{left:0;overflow:hidden;position:absolute;top:0;z-index:999}
#cboxOverlay{background:#000;height:100%;position:fixed;width:100%}
#cboxBottomLeft,#cboxMiddleLeft{clear:left}
#cboxContent{background:#fff;overflow:visible;position:relative}
#cboxLoadedContent{margin-bottom:5px;overflow:auto}
#cboxLoadedContent iframe{border:0;display:block;height:100%;width:100%}
#cboxTitle{bottom:-25px;color:#7C7C7C;font-weight:700;left:0;position:absolute;text-align:center;width:100%;margin:0}
#cboxLoadingGraphic,#cboxLoadingOverlay{left:0;position:absolute;top:0;width:100%}
#cboxClose,#cboxNext,#cboxPrevious,#cboxSlideshow{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat 0 0;bottom:-29px;cursor:pointer;height:23px;position:absolute;text-indent:-9999px;width:23px}
#cboxTopLeft{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat 0 0;height:14px;width:14px}
#cboxTopCenter{background:url(http://i27.servimg.com/u/f27/15/67/36/41/border10.png) repeat-x top left;height:14px}
#cboxTopRight{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat -36px 0;height:14px;width:14px}
#cboxBottomLeft{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat 0 -32px;height:43px;width:14px}
#cboxBottomCenter{background:url(http://i27.servimg.com/u/f27/15/67/36/41/border10.png) repeat-x bottom left;height:43px}
#cboxBottomRight{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) no-repeat -36px -32px;height:43px;width:14px}
#cboxMiddleLeft{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) repeat-y -175px 0;width:14px}
#cboxMiddleRight{background:url(http://i27.servimg.com/u/f27/15/67/36/41/contro10.png) repeat-y -211px 0;width:14px}
#cboxLoadingOverlay{background:url(http://i27.servimg.com/u/f27/15/67/36/41/loadin10.png) no-repeat center center}
#cboxLoadingGraphic{background:url(http://i27.servimg.com/u/f27/15/67/36/41/loadin10.gif) no-repeat center center}
#cboxCurrent{bottom:-25px;color:#7C7C7C;font-weight:700;left:58px;position:absolute}
#cboxPrevious{background-position:-51px -25px;left:0}
#cboxPrevious.hover{background-position:-51px 0}
#cboxNext{background-position:-75px -25px;left:27px}
#cboxNext.hover{background-position:-75px 0}
#cboxClose{background-position:-100px -25px;right:0}
#cboxClose.hover{background-position:-100px 0}
.cboxSlideshow_off #cboxSlideshow{background-position:-125px -25px;right:27px}
.cboxSlideshow_off #cboxSlideshow.hover{background-position:-150px 0}
.cboxSlideshow_on #cboxSlideshow{background-position:-150px -25px;right:27px}
.cboxSlideshow_on #cboxSlideshow.hover{background-position:-125px 0}
.post-entry img{max-width:450px;vertical-align:middle}
.post-entry img.not-colorbox{max-width:650px!important;vertical-align:middle}
.iconPlayer{background:url(http://i40.servimg.com/u/f40/17/70/31/89/play-o10.png) no-repeat scroll center center transparent;left:140px;top:-55px;opacity:0.8;position:absolute;z-index:99;padding:40px!important}

```

**Vui lòng để lại nguồn khi sao chép**