Fancybox.
By baivong.
Convert by miamor.

Cực kì đơn giản, chỉ cần tạo 1 file js với nội dung như sau:
Ẩn đi rồi Bạn muốn xem thì reply bài viết này nhé

```


(function (u, q, e) {
var l = e(u),
r = e(q),
a = e.fancybox = function () {
a.open.apply(this, arguments)
},
s = !1,
t = null;
e.extend(a, {
version: "2.0.4",
defaults: {
padding: 15,
margin: 20,
width: 600,
height: 600,
minWidth: 200,
minHeight: 200,
maxWidth: 9999,
maxHeight: 9999,
autoSize: !0,
fitToView: !0,
aspectRatio: !1,
topRatio: 0.5,
fixed: !e.browser.msie || 6 < e.browser.version || !q.documentElement.hasOwnProperty("ontouchstart"),
scrolling: "auto",
wrapCSS: "fancybox-default",
arrows: !0,
closeBtn: !0,
closeClick: !1,
nextClick: !1,
mouseWheel: !0,
autoPlay: !1,
playSpeed: 3E3,
modal: !1,
loop: !0,
ajax: {},
keys: {
next: [13, 32, 34, 39, 40],
prev: [8, 33, 37, 38],
close: [27]
},
tpl: {
wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

',
image: '<img class="fancybox-image" src="{href}" alt="" />',
iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" ' + (e.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="{scrolling}" src="{href}">

Unknown end tag for &lt;/iframe&gt;

',
swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;

',
error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.

Unknown end tag for &lt;/p&gt;

',
closeBtn: '<div title="Close" class="fancybox-item fancybox-close">

Unknown end tag for &lt;/div&gt;

',
next: '<a title="Next" class="fancybox-item fancybox-next"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

',
prev: '<a title="Previous" class="fancybox-item fancybox-prev"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;

'
},
openEffect: "fade",
openSpeed: 250,
openEasing: "swing",
openOpacity: !0,
openMethod: "zoomIn",
closeEffect: "fade",
closeSpeed: 250,
closeEasing: "swing",
closeOpacity: !0,
closeMethod: "zoomOut",
nextEffect: "elastic",
nextSpeed: 300,
nextEasing: "swing",
nextMethod: "changeIn",
prevEffect: "elastic",
prevSpeed: 300,
prevEasing: "swing",
prevMethod: "changeOut",
helpers: {
overlay: {
speedIn: 0,
speedOut: 300,
opacity: 0.8,
css: {
cursor: "pointer"
},
closeClick: !0
},
title: {
type: "float"
}
}
},
group: {},
opts: {},
coming: null,
current: null,
isOpen: !1,
isOpened: !1,
wrap: null,
outer: null,
inner: null,
player: {
timer: null,
isActive: !1
},
ajaxLoad: null,
imgPreload: null,
transitions: {},
helpers: {},
open: function (b, c) {
e.isArray(b) || (b = [b]);
if (b.length) a.close(!0),
a.opts = e.extend(!0, {},
a.defaults, c),
a.group = b,
a._start(a.opts.index || 0)
},
cancel: function () {
if (! (a.coming && !1 === a.trigger("onCancel")) && (a.coming = null, a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload)) a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null
},
close: function (b) {
a.cancel();
if (a.current && !1 !== a.trigger("beforeClose")) a.unbindEvents(),
!a.isOpen || b && !0 === b[0] ? (e(".fancybox-wrap").stop().trigger("onReset").remove(), a._afterZoomOut()) : (a.isOpen = a.isOpened = !1, e(".fancybox-item").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.closeMethod]())
},
play: function (b) {
var c = function () {
clearTimeout(a.player.timer)
},
d = function () {
c();
if (a.current && a.player.isActive) a.player.timer = setTimeout(a.next, a.current.playSpeed)
},
g = function () {
c();
e("body").unbind(".player");
a.player.isActive = !1;
a.trigger("onPlayEnd")
};
if (a.player.isActive || b && !1 === b[0]) g();
else if (a.current && (a.current.loop || a.current.index < a.group.length - 1)) a.player.isActive = !0,
e("body").bind({
"afterShow.player onUpdate.player": d,
"onCancel.player beforeClose.player": g,
"beforeLoad.player": c
}),
d(),
a.trigger("onPlayStart")
},
next: function () {
a.current && a.jumpto(a.current.index + 1)
},
prev: function () {
a.current && a.jumpto(a.current.index - 1)
},
jumpto: function (b) {
a.current && (b = parseInt(b, 10), 1 < a.group.length && a.current.loop && (b >= a.group.length ? b = 0 : 0 > b && (b = a.group.length - 1)), "undefined" !== typeof a.group[b] && (a.cancel(), a._start(b)))
},
reposition: function (b) {
a.isOpen && a.wrap.css(a._getPosition(b))
},
update: function () {
a.isOpen && (s || (t = setInterval(function () {
if (s && (s = !1, clearTimeout(t), a.current)) {
if (a.current.autoSize) a.inner.height("auto"),
a.current.height = a.inner.height();
a._setDimension();
a.current.canGrow && a.inner.height("auto");
a.reposition();
a.trigger("onUpdate")
}
},
100)), s = !0)
},
toggle: function () {
if (a.isOpen) a.current.fitToView = !a.current.fitToView,
a.update()
},
hideLoading: function () {
e("#fancybox-loading").remove()
},
showLoading: function () {
a.hideLoading();
e('<div id="fancybox-loading">

Unknown end tag for &lt;/div&gt;

').click(a.cancel).appendTo("body")
},
getViewport: function () {
return {
x: l.scrollLeft(),
y: l.scrollTop(),
w: l.width(),
h: l.height()
}
},
unbindEvents: function () {
a.wrap && a.wrap.unbind(".fb");
r.unbind(".fb");
l.unbind(".fb")
},
bindEvents: function () {
var b = a.current,
c = b.keys;
b && (l.bind("resize.fb, orientationchange.fb", a.update), c && r.bind("keydown.fb", function (b) {
var g;
if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey && 0 > e.inArray(b.target.tagName.toLowerCase(), ["input", "textarea", "select", "button"])) g = b.keyCode,
-1 < e.inArray(g, c.close) ? (a.close(), b.preventDefault()) : -1 < e.inArray(g, c.next) ? (a.next(), b.preventDefault()) : -1 < e.inArray(g, c.prev) && (a.prev(), b.preventDefault())
}), e.fn.mousewheel && b.mouseWheel && 1 < a.group.length && a.wrap.bind("mousewheel.fb", function (b, c) {
var f = e(b.target).get(0);
if (0 === f.clientHeight || f.scrollHeight === f.clientHeight) b.preventDefault(),
a[0 < c ? "prev" : "next"]()
}))
},
trigger: function (b) {
var c, d = a[-1 < e.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"];
if (d) {
e.isFunction(d[b]) && (c = d[b].apply(d, Array.prototype.slice.call(arguments, 1)));
if (!1 === c) return !1;
d.helpers && e.each(d.helpers, function (c, f) {
if (f && "undefined" !== typeof a.helpers[c] && e.isFunction(a.helpers[c][b])) a.helpers[c][b](f, d)
});
e.event.trigger(b + ".fb")
}
},
isImage: function (a) {
return a && a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)
},
isSWF: function (a) {
return a && a.match(/\.(swf)(.*)?$/i)
},
_start: function (b) {
var c = {},
d = a.group[b] || null,
g, f, k;
if ("object" === typeof d && (d.nodeType || d instanceof e)) g = !0,
e.metadata && (c = e(d).metadata());
c = e.extend(!0, {},
a.opts, {
index: b,
element: d
},
e.isPlainObject(d) ? d : c);
e.each(["href", "title", "content", "type"], function (b, f) {
c[f] = a.opts[f] || g && e(d).attr(f) || c[f] || null
});
if ("number" === typeof c.margin) c.margin = [c.margin, c.margin, c.margin, c.margin];
c.modal && e.extend(!0, c, {
closeBtn: !1,
closeClick: !1,
nextClick: !1,
arrows: !1,
mouseWheel: !1,
keys: null,
helpers: {
overlay: {
css: {
cursor: "auto"
},
closeClick: !1
}
}
});
a.coming = c;
if (!1 === a.trigger("beforeLoad")) a.coming = null;
else {
f = c.type;
b = c.href;
if (!f) g && (k = e(d).data("fancybox-type"), !k && d.className && (f = (k = d.className.match(/fancybox\.(\w+)/)) ? k[1] : null)),
!f && b && (a.isImage(b) ? f = "image" : a.isSWF(b) ? f = "swf" : b.match(/^#/) && (f = "inline")),
f || (f = g ? "inline" : "html"),
c.type = f;
"inline" === f || "html" === f ? (c.content = c.content || ("inline" === f && b ? e(b) : d), c.content.length || (f = null)) : (c.href = b || d, c.href || (f = null));
c.group = a.group;
"image" === f ? a._loadImage() : "ajax" === f ? a._loadAjax() : f ? a._afterLoad() : a._error("type")
}
},
_error: function (b) {
e.extend(a.coming, {
type: "html",
autoSize: !0,
minHeight: "0",
hasError: b,
content: a.coming.tpl.error
});
a._afterLoad()
},
_loadImage: function () {
a.imgPreload = new Image;
a.imgPreload.onload = function () {
this.onload = this.onerror = null;
a.coming.width = this.width;
a.coming.height = this.height;
a._afterLoad()
};
a.imgPreload.onerror = function () {
this.onload = this.onerror = null;
a._error("image")
};
a.imgPreload.src = a.coming.href;
a.imgPreload.complete || a.showLoading()
},
_loadAjax: function () {
a.showLoading();
a.ajaxLoad = e.ajax(e.extend({},
a.coming.ajax, {
url: a.coming.href,
error: function (b, c) {
"abort" !== c ? a._error("ajax", b) : a.hideLoading()
},
success: function (b, c) {
if ("success" === c) a.coming.content = b,
a._afterLoad()
}
}))
},
_preload: function () {
var b = a.group,
c = a.current.index,
d = function (b) {
if (b && a.isImage(b))(new Image).src = b
};
1 < b.length && (d(e(b[c + 1] || b[0]).attr("href")), d(e(b[c - 1] || b[b.length - 1]).attr("href")))
},
_afterLoad: function () {
a.hideLoading(); ! a.coming || !1 === a.trigger("afterLoad", a.current) ? a.coming = !1 : (a.isOpened ? (e(".fancybox-item").remove(), a.wrap.stop(!0).removeClass("fancybox-opened"), a.inner.css("overflow", "hidden"), a.transitions[a.current.prevMethod]()) : (e(".fancybox-wrap").stop().trigger("onReset").remove(), a.trigger("afterClose")), a.unbindEvents(), a.isOpen = !1, a.current = a.coming, a.coming = !1, a.wrap = e(a.current.tpl.wrap).addClass("fancybox-tmp " + a.current.wrapCSS).appendTo("body"), a.outer = e(".fancybox-outer", a.wrap).css("padding", a.current.padding + "px"), a.inner = e(".fancybox-inner", a.wrap), a._setContent(), a.trigger("beforeShow"), a._setDimension(), a.wrap.hide().removeClass("fancybox-tmp"), a.bindEvents(), a._preload(), a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]())
},
_setContent: function () {
var b, c, d = a.current,
g = d.type;
switch (g) {
case "inline":
case "ajax":
case "html":
b = d.content;
"inline" === g && b instanceof e && (b = b.show().detach(), b.parent().hasClass("fancybox-inner") && b.parents(".fancybox-wrap").trigger("onReset").remove(), e(a.wrap).bind("onReset", function () {
b.appendTo("body").hide()
}));
if (d.autoSize) c = e('<div class="fancybox-tmp">

Unknown end tag for &lt;/div&gt;

').appendTo(e("body")).append(b),
d.width = c.outerWidth(),
d.height = c.outerHeight(!0),
b = c.contents().detach(),
c.remove();
break;
case "image":
b = d.tpl.image.replace("{href}", d.href);
d.aspectRatio = !0;
break;
case "swf":
b = d.tpl.swf.replace(/\{width\}/g, d.width).replace(/\{height\}/g, d.height).replace(/\{href\}/g, d.href);
break;
case "iframe":
b = d.tpl.iframe.replace("{href}", d.href).replace("{scrolling}", d.scrolling).replace("{rnd}", (new Date).getTime())
}
if (-1 < e.inArray(g, ["image", "swf", "iframe"])) d.autoSize = !1,
d.scrolling = !1;
a.inner.append(b)
},
_setDimension: function () {
var b = a.wrap,
c = a.outer,
d = a.inner,
g = a.current,
f = a.getViewport(),
k = g.margin,
i = 2 * g.padding,
h = g.width + i,
j = g.height + i,
l = g.width / g.height,
o = g.maxWidth,
m = g.maxHeight,
n = g.minWidth,
p = g.minHeight;
f.w -= k[1] + k[3];
f.h -= k[0] + k[2]; - 1 < h.toString().indexOf("%") && (h = f.w * parseFloat(h) / 100); - 1 < j.toString().indexOf("%") && (j = f.h * parseFloat(j) / 100);
g.fitToView && (o = Math.min(f.w, o), m = Math.min(f.h, m));
n = Math.min(h, n);
p = Math.min(h, p);
o = Math.max(n, o);
m = Math.max(p, m);
g.aspectRatio ? (h > o && (h = o, j = (h - i) / l + i), j > m && (j = m, h = (j - i) * l + i), h < n && (h = n, j = (h - i) / l + i), j < p && (j = p, h = (j - i) * l + i)) : (h = Math.max(n, Math.min(h, o)), j = Math.max(p, Math.min(j, m)));
h = Math.round(h);
j = Math.round(j);
e(b.add(c).add(d)).width("auto").height("auto");
d.width(h - i).height(j - i);
b.width(h);
k = b.height();
if (h > o || k > m) for (;
(h > o || k > m) && h > n && k > p;) j -= 10,
g.aspectRatio ? (h = Math.round((j - i) * l + i), h < n && (h = n, j = (h - i) / l + i)) : h -= 10,
d.width(h - i).height(j - i),
b.width(h),
k = b.height();
g.dim = {
width: h,
height: k
};
g.canGrow = g.autoSize && j > p && j < m;
g.canShrink = !1;
g.canExpand = !1;
if (h - i < g.width || j - i < g.height) g.canExpand = !0;
else if ((h > f.w || k > f.h) && h > n && j > p) g.canShrink = !0;
b = k - i;
a.innerSpace = b - d.height();
a.outerSpace = b - c.height()
},
_getPosition: function (b) {
var c = a.current,
d = a.getViewport(),
e = c.margin,
f = a.wrap.width() + e[1] + e[3],
k = a.wrap.height() + e[0] + e[2],
i = {
position: "absolute",
top: e[0] + d.y,
left: e[3] + d.x
};
if (c.fixed && (!b || !1 === b[0]) && k <= d.h && f <= d.w) i = {
position: "fixed",
top: e[0],
left: e[3]
};
i.top = Math.ceil(Math.max(i.top, i.top + (d.h - k) * c.topRatio)) + "px";
i.left = Math.ceil(Math.max(i.left, i.left + 0.5 * (d.w - f))) + "px";
return i
},
_afterZoomIn: function () {
var b = a.current;
a.isOpen = a.isOpened = !0;
a.wrap.addClass("fancybox-opened").css("overflow", "visible");
a.update();
a.inner.css("overflow", "auto" === b.scrolling ? "auto" : "yes" === b.scrolling ? "scroll" : "hidden");
if (b.closeClick || b.nextClick) a.inner.css("cursor", "pointer").bind("click.fb", b.nextClick ? a.next : a.close);
b.closeBtn && e(b.tpl.closeBtn).appendTo(a.wrap).bind("click.fb", a.close);
b.arrows && 1 < a.group.length && ((b.loop || 0 < b.index) && e(b.tpl.prev).appendTo(a.wrap).bind("click.fb", a.prev), (b.loop || b.index < a.group.length - 1) && e(b.tpl.next).appendTo(a.wrap).bind("click.fb", a.next));
a.trigger("afterShow");
if (a.opts.autoPlay && !a.player.isActive) a.opts.autoPlay = !1,
a.play()
},
_afterZoomOut: function () {
a.trigger("afterClose");
a.wrap.trigger("onReset").remove();
e.extend(a, {
group: {},
opts: {},
current: null,
isOpened: !1,
isOpen: !1,
wrap: null,
outer: null,
inner: null
})
}
});
a.transitions = {
getOrigPosition: function () {
var b = a.current.element,
c = {},
d = 50,
g = 50,
f;
b && b.nodeName && e(b).is(":visible") ? (f = e(b).find("img:first"), f.length ? (c = f.offset(), d = f.outerWidth(), g = f.outerHeight()) : c = e(b).offset()) : (b = a.getViewport(), c.top = b.y + 0.5 * (b.h - g), c.left = b.x + 0.5 * (b.w - d));
return c = {
top: Math.ceil(c.top) + "px",
left: Math.ceil(c.left) + "px",
width: Math.ceil(d) + "px",
height: Math.ceil(g) + "px"
}
},
step: function (b, c) {
var d, e, f;
if ("width" === c.prop || "height" === c.prop) e = f = Math.ceil(b - 2 * a.current.padding),
"height" === c.prop && (d = (b - c.start) / (c.end - c.start), c.start > c.end && (d = 1 - d), e -= a.innerSpace * d, f -= a.outerSpace * d),
a.inner[c.prop](e),
a.outer[c.prop](f)
},
zoomIn: function () {
var b = a.wrap,
c = a.current,
d, g;
d = c.dim;
if ("elastic" === c.openEffect) {
g = e.extend({},
d, a._getPosition(!0));
delete g.position;
d = this.getOrigPosition();
if (c.openOpacity) d.opacity = 0,
g.opacity = 1;
b.css(d).show().animate(g, {
duration: c.openSpeed,
easing: c.openEasing,
step: this.step,
complete: a._afterZoomIn
})
} else b.css(e.extend({},
d, a._getPosition())),
"fade" === c.openEffect ? b.fadeIn(c.openSpeed, a._afterZoomIn) : (b.show(), a._afterZoomIn())
},
zoomOut: function () {
var b = a.wrap,
c = a.current,
d;
if ("elastic" === c.closeEffect) {
"fixed" === b.css("position") && b.css(a._getPosition(!0));
d = this.getOrigPosition();
if (c.closeOpacity) d.opacity = 0;
b.animate(d, {
duration: c.closeSpeed,
easing: c.closeEasing,
step: this.step,
complete: a._afterZoomOut
})
} else b.fadeOut("fade" === c.closeEffect ? c.closeSpeed : 0, a._afterZoomOut)
},
changeIn: function () {
var b = a.wrap,
c = a.current,
d;
"elastic" === c.nextEffect ? (d = a._getPosition(!0), d.opacity = 0, d.top = parseInt(d.top, 10) - 200 + "px", b.css(d).show().animate({
opacity: 1,
top: "+=200px"
},
{
duration: c.nextSpeed,
complete: a._afterZoomIn
})) : (b.css(a._getPosition()), "fade" === c.nextEffect ? b.hide().fadeIn(c.nextSpeed, a._afterZoomIn) : (b.show(), a._afterZoomIn()))
},
changeOut: function () {
var b = a.wrap,
c = a.current,
d = function () {
e(this).trigger("onReset").remove()
};
b.removeClass("fancybox-opened");
"elastic" === c.prevEffect ? b.animate({
opacity: 0,
top: "+=200px"
},
{
duration: c.prevSpeed,
complete: d
}) : b.fadeOut("fade" === c.prevEffect ? c.prevSpeed : 0, d)
}
};
a.helpers.overlay = {
overlay: null,
update: function () {
var a, c;
this.overlay.width(0).height(0);
e.browser.msie ? (a = Math.max(q.documentElement.scrollWidth, q.body.scrollWidth), c = Math.max(q.documentElement.offsetWidth, q.body.offsetWidth), a = a < c ? l.width() : a) : a = r.width();
this.overlay.width(a).height(r.height())
},
beforeShow: function (b) {
if (!this.overlay) this.overlay = e('<div id="fancybox-overlay">

Unknown end tag for &lt;/div&gt;

').css(b.css || {
background: "black"
}).appendTo("body"),
this.update(),
b.closeClick && this.overlay.bind("click.fb", a.close),
l.bind("resize.fb", e.proxy(this.update, this)),
this.overlay.fadeTo(b.speedIn || "fast", b.opacity || 1)
},
onUpdate: function () {
this.update()
},
afterClose: function (a) {
this.overlay && this.overlay.fadeOut(a.speedOut || "fast", function () {
e(this).remove()
});
this.overlay = null
}
};
a.helpers.title = {
beforeShow: function (b) {
var c;
if (c = a.current.title) c = e('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + c + "

Unknown end tag for &lt;/div&gt;

").appendTo("body"),
"float" === b.type && (c.width(c.width()), c.wrapInner('<span class="child">

Unknown end tag for &lt;/span&gt;

'), a.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))),
c.appendTo("over" === b.type ? a.inner : "outside" === b.type ? a.wrap : a.outer)
}
};
e.fn.fancybox = function (b) {
function c(b) {
var c = [],
i, h = this.rel;
if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey) b.preventDefault(),
b = e(this).data("fancybox-group"),
"undefined" !== typeof b ? i = b ? "data-fancybox-group" : !1 : h && "" !== h && "nofollow" !== h && (b = h, i = "rel"),
i && (c = g.length ? e(g).filter("[" + i + '="' + b + '"]') : e("[" + i + '="' + b + '"]')),
c.length ? (d.index = c.index(this), a.open(c.get(), d)) : a.open(this, d)
}
var d = b || {},
g = this.selector || "";
g ? r.undelegate(g, "click.fb-start").delegate(g, "click.fb-start", c) : e(this).unbind("click.fb-start").bind("click.fb-start", c);
return this
}
})(window, document, jQuery);
(function ($) {
var F = $.fancybox;
F.helpers.buttons = {
tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnPlay" title="Start slideshow" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnNext" title="Next" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnToggle" title="Toggle size" href="javascript:;">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;



Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;

',
list: null,
buttons: {},
update: function () {
var a = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');
if (F.current.canShrink) {
a.addClass('btnToggleOn')
} else if (!F.current.canExpand) {
a.addClass('btnDisabled')
}
},
beforeLoad: function (a) {
if (F.group.length < 2) {
F.coming.helpers.buttons = false;
F.coming.closeBtn = true;
return
}
F.coming.margin[a.position === 'bottom' ? 2 : 0] += 30
},
onPlayStart: function () {
if (this.list) {
this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn')
}
},
onPlayEnd: function () {
if (this.list) {
this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn')
}
},
afterShow: function (a) {
var b;
if (!this.list) {
this.list = $(a.tpl || this.tpl).addClass(a.position || 'top').appendTo('body');
this.buttons = {
prev: this.list.find('.btnPrev').click(F.prev),
next: this.list.find('.btnNext').click(F.next),
play: this.list.find('.btnPlay').click(F.play),
toggle: this.list.find('.btnToggle').click(F.toggle)
}
}
b = this.buttons;
if (F.current.index > 0 || F.current.loop) {
b.prev.removeClass('btnDisabled')
} else {
b.prev.addClass('btnDisabled')
}
if (F.current.loop || F.current.index < F.group.length - 1) {
b.next.removeClass('btnDisabled');
b.play.removeClass('btnDisabled')
} else {
b.next.addClass('btnDisabled');
b.play.addClass('btnDisabled')
}
this.update()
},
onUpdate: function () {
this.update()
},
beforeClose: function () {
if (this.list) {
this.list.remove()
}
this.list = null;
this.buttons = {}
}
}
} (jQuery));
(function (d) {
function e(a) {
var b = a || window.event,
c = [].slice.call(arguments, 1),
f = 0,
e = 0,
g = 0,
a = d.event.fix(b);
a.type = "mousewheel";
b.wheelDelta && (f = b.wheelDelta / 120);
b.detail && (f = -b.detail / 3);
g = f;
b.axis !== void 0 && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f);
b.wheelDeltaY !== void 0 && (g = b.wheelDeltaY / 120);
b.wheelDeltaX !== void 0 && (e = -1 * b.wheelDeltaX / 120);
c.unshift(a, f, e, g);
return (d.event.dispatch || d.event.handle).apply(this, c)
}
var c = ["DOMMouseScroll", "mousewheel"];
if (d.event.fixHooks) for (var h = c.length; h;) d.event.fixHooks[c[--h]] = d.event.mouseHooks;
d.event.special.mousewheel = {
setup: function () {
if (this.addEventListener) for (var a = c.length; a;) this.addEventListener(c[--a], e, false);
else this.onmousewheel = e
},
teardown: function () {
if (this.removeEventListener) for (var a = c.length; a;) this.removeEventListener(c[--a], e, false);
else this.onmousewheel = null
}
};
d.fn.extend({
mousewheel: function (a) {
return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
},
unmousewheel: function (a) {
return this.unbind("mousewheel", a)
}
})
})(jQuery);
var CopyrightNoticeEn = 'Copyright ©  by FmVi. All Rights Reserved. Use, modification, and/or distribution of this script is not allowed without direct permission from baivong (gialangsangai2000@yahoo.com). This entire copyright notice must remain in the original, copied, or modified script';
var CopyrightNoticeVi = 'Bản quyền © FmVi. Giữ toàn quyền. Việc sử dụng, sửa đổi , và / hoặc phân phối mã này mà không được phép trực tiếp từ baivong (gialangsangai2000@yahoo.com) là không được phép. Toàn bộ thông báo bản quyền này phải được giữ nguyên khi sao chép, hoặc sửa đổi';
$("img[src*='imageshack.us']").each(function () {
$(this).replaceWith('<img src="http://a.' + $(this).attr("src").slice($(this).attr("src").indexOf("imageshack")) + '"/>')
});
$("a[href*='imageshack.us']").each(function () {
var a = 'http://a.' + $(this).attr("href").slice($(this).attr("href").indexOf("imageshack"));
$(this).replaceWith('<a href="' + a + '">' + a + '

Unknown end tag for &lt;/a&gt;

')
});
$('img').error(function () {
$(this).replaceWith('<img src="http://i46.servimg.com/u/f46/16/16/16/68/images16.jpg" alt="Image Error" />')
});
$(".post-entry").find("a[href$='jpeg'], a[href$='bmp'],  a[href$='jpg'], a[href$='png'], a[href$='gif']").addClass("fancyimg-fmvi");
fancydata();
fancyImg();
$(window).load(function () {
$(".post-entry").find("img").not("img[src*='imgfast.net/users'], .signature_div img").each(function () {
if (($(this).attr("class") != "not-fancyImg") && ($(this).attr("src") != "http://i48.servimg.com/u/f48/16/58/89/73/errorf10.jpg") && ($(this).attr("src") != "http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png")) {
var a = $(this).attr("src");
$(this).replaceWith('<a class="fancyimg-fmvi" href="' + a + '"><img src="' + a + '" />

Unknown end tag for &lt;/a&gt;

')
} else {
$(this).show()
}
});
fancydata();
fancyImg();
$("img[src^='http://r20.imgfast.net/users']").show();
$(".fancyimg-fmvi img").fadeIn(300)
});
function fancydata() {
$(".post").each(function (a) {
$(this).find(".fancyimg-fmvi").attr("data-fancybox-group", "FMvi-img" + a)
})
}
function fancyImg() {
$(".fancyimg-fmvi").fancybox({
prevEffect: 'fade',
nextEffect: 'fade',
closeBtn: false,
helpers: {
title: {
type: 'inline'
},
buttons: {}
}
})
}
$(".post-entry a[href^='http://www.youtube'][href*='v=']").each(function () {
var a = $(this);
var b = a.attr("href").slice(a.attr("href").indexOf("v=") + 2, a.attr("href").indexOf("v=") + 13);
if (a.attr("href").indexOf("list=") != -1) {
var c = a.attr("href").slice(a.attr("href").indexOf("list=") + 5) + "&";
var d = c.slice(0, c.indexOf("&"));
a.replaceWith('<p align="center"><a style="position: relative" class="fancy-ytbFmvi fancybox.iframe" href="http://www.youtube.com/embed/videoseries?list=' + d + '&hl=vi_VN&autoplay=1"><img class="not-fancyImg" src="http://i1.ytimg.com/vi/' + b + '/0.jpg" /><span class="iconPlayer">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;

')
} else {
a.replaceWith('<p align="center"><a style="position: relative" class="fancy-ytbFmvi fancybox.iframe" href="http://www.youtube.com/v/' + b + '&hl=vi_VN&autoplay=1"><img class="not-fancyImg" src="http://i1.ytimg.com/vi/' + b + '/0.jpg" /><span class="iconPlayer">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;

')
}
});
$(".not-fancyImg, .signature_div img").fadeIn(300);
$(".fancy-ytbFmvi").fancybox({
width: 640,
height: 390,
fitToView: false,
autoSize: false,
closeClick: false,
openEffect: 'none',
closeEffect: 'none'
});
if ($("a.mainmenu #i_icon_mini_new_message").length != 0) {
var tinmoi = $("a.mainmenu #i_icon_mini_new_message").attr("alt").match(/[0-9]+/);
$.fancybox('<div id="FMvi-pm" style="width: 220px;text-align: center"><a href="/privmsg?folder=inbox"><img style="cursor:pointer" width="154" height="178" onmouseout="this.src=\'http://i48.servimg.com/u/f48/16/58/89/73/e-mail11.png\'" src="http://i48.servimg.com/u/f48/16/58/89/73/e-mail11.png" onmouseover="this.src=\'http://i48.servimg.com/u/f48/16/58/89/73/email_11.png\'" />

Unknown end tag for &lt;/a&gt;

<p style="padding-top: 10px" class="closeWIndowF">Bạn có <font color="blue">' + tinmoi + '

Unknown end tag for &lt;/font&gt;

 tin nhắn mới

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

')
}```


Và đoạn này vào CSS:

```


/* Fancyox2-------------------------------------------------------------*/
.fancybox-tmp iframe,.fancybox-tmp object{vertical-align:top;margin:0;padding:0}
.fancybox-wrap{position:absolute;top:0;left:0;z-index:1002}
.fancybox-outer{background:#f9f9f9;color:#444;text-shadow:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin:0;padding:0}
.fancybox-opened{z-index:1003}
.fancybox-opened .fancybox-outer{-webkit-box-shadow:0 10px 25px rgba(0,0,0,0.5);-moz-box-shadow:0 10px 25px rgba(0,0,0,0.5);box-shadow:0 10px 25px rgba(0,0,0,0.5)}
.fancybox-inner{width:100%;height:100%;position:relative;outline:none;overflow:hidden;margin:0;padding:0}
.fancybox-error{color:#444;font:14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;margin:0;padding:10px}
.fancybox-image,.fancybox-iframe{display:block;width:100%;height:100%;border:0;vertical-align:top;margin:0;padding:0}
.fancybox-image{max-width:100%;max-height:100%}
#fancybox-loading{position:fixed;top:50%;left:50%;margin-top:-21px;margin-left:-21px;width:42px;height:42px;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancyb10.gif);opacity:0.8;cursor:pointer;z-index:1010}
.fancybox-close,.fancybox-prev span,.fancybox-next span{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/fancyb10.png)}
.fancybox-close{position:absolute;top:-18px;right:-18px;width:36px;height:36px;cursor:pointer;z-index:1004}
.fancybox-prev,.fancybox-next{position:absolute;top:0;width:40%;height:100%;cursor:pointer;background:transparent url(http://i48.servimg.com/u/f48/16/58/89/73/blank10.gif);z-index:1003}
.fancybox-prev{left:0}
.fancybox-next{right:0}
.fancybox-prev span,.fancybox-next span{position:absolute;top:50%;left:-9999px;width:36px;height:36px;margin-top:-18px;cursor:pointer;z-index:1003}
.fancybox-prev span{background-position:0 -36px}
.fancybox-next span{background-position:0 -72px}
.fancybox-prev:hover span{left:20px}
.fancybox-next:hover span{left:auto;right:20px}
.fancybox-tmp{position:absolute;top:-9999px;left:-9999px;overflow:visible;visibility:hidden;padding:0}
#fancybox-overlay{position:absolute;top:0;left:0;overflow:hidden;display:none;z-index: 999;background:#000}
.fancybox-title{display:none}
.fancybox-title-float-wrap{position:absolute;bottom:0;right:50%;margin-bottom:-35px;z-index: 999;text-align:center}
.fancybox-title-float-wrap .child{display:inline-block;margin-right:-100%;background:rgba(0,0,0,0.8);-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;text-shadow:0 1px 2px #222;color:#FFF;font-weight:700;line-height:24px;white-space:nowrap;padding:2px 20px}
.fancybox-title-outside-wrap{position:relative;margin-top:10px;color:#fff}
.fancybox-title-inside-wrap{margin-top:10px}
.fancybox-title-over-wrap{position:absolute;bottom:0;left:0;color:#fff;background:rgba(0,0,0,.8);padding:10px}
#fancybox-buttons{position:fixed;left:0;width:100%;z-index:1005}
#fancybox-buttons.top{top:10px}
#fancybox-buttons.bottom{bottom:10px}
#fancybox-buttons ul{display:block;width:170px;height:30px;list-style:none;-webkit-box-shadow:0 1px 3px #000,0 0 0 1px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.05);-moz-box-shadow:0 1px 3px #000,0 0 0 1px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.05);background:#111 0 0 50% 50% 100%;border-radius:3px;margin:0 auto;padding:0}
#fancybox-buttons ul li{float:left;margin:0;padding:0}
#fancybox-buttons a{display:block;width:30px;height:30px;text-indent:-9999px;background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/fancyb11.png);background-repeat:no-repeat;outline:none}
#fancybox-buttons a.btnPrev{width:32px;background-position:6px 0}
#fancybox-buttons a.btnNext{background-position:-33px 0;border-right:1px solid #3e3e3e}
#fancybox-buttons a.btnPlay{background-position:0 -30px}
#fancybox-buttons a.btnPlayOn{background-position:-30px -30px}
#fancybox-buttons a.btnToggle{background-position:3px -60px;border-left:1px solid #111;border-right:1px solid #3e3e3e;width:35px}
#fancybox-buttons a.btnToggleOn{background-position:-27px -60px}
#fancybox-buttons a.btnClose{border-left:1px solid #111;width:38px;background-position:-57px 0}
#fancybox-buttons a.btnDisabled{opacity:0.5;cursor:default}
.fancybox-prev:hover,.fancybox-next:hover,.fancybox-opened .fancybox-title{visibility:visible}
.post-entry img{max-width:350px}
.iconPlayer{background:url(//ssl.gstatic.com/s2/tt/images/play-overlay.png) no-repeat scroll center center transparent;left:140px;opacity:0.8;position:absolute;top:-155px;z-index:99;padding:40px !important}
/* Fancyox2-------------------------------------------------------------*/
```

Cái trên mình chưa edit kĩ, tại đêm rồi, buồn gnủ quá...
Mai mình sẽ xem xét colorbox cho Invison xem có được k nhé Smile