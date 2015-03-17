How to create that kind of index :

![http://i48.servimg.com/u/f48/17/28/34/19/cap110.png](http://i48.servimg.com/u/f48/17/28/34/19/cap110.png)

![http://i48.servimg.com/u/f48/17/28/34/19/capt210.png](http://i48.servimg.com/u/f48/17/28/34/19/capt210.png)



This tutorial is available for all the versions !

Attention : you have to follow this tutorial step by step ! Mr. Green


2. First step : Create 2 javascript pages:

To create the 2 javascript pages :

Administration Panel ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Modules ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) HTML & Javascript ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Javascript codes management


Click on "create a new javascript"

> First page :

> - Chose a title

> - Chose the position : in the index

> - Paste this code :

```


/*************************************************
*
*  project:    liteAccordion - horizontal accordion plugin for jQuery
*  author:    Nicola Hibbert
*  url:        http://nicolahibbert.com/horizontal-accordion-jquery-plugin
*  demo:        http://www.nicolahibbert.com/demo/liteAccordion
*
*  Version:    1.1.3
*  Copyright:    (c) 2010-2011 Nicola Hibbert
*
/*************************************************/
(function($) {

$.fn.liteAccordion = function(options) {

// defaults
var defaults = {
containerWidth : 960,
containerHeight : 320,
headerWidth : 48,

firstSlide : 1,
onActivate : function() {},
slideSpeed : 800,
slideCallback : function() {},

autoPlay : false,
pauseOnHover : false,
cycleSpeed : 6000,

theme : 'basic', // basic, light*, dark, stitch*
rounded : false,
enumerateSlides : false
},

// merge defaults with options in new settings object
settings = $.extend({}, defaults, options),

// define key variables
$accordion = this,
$slides = $accordion.find('li'),
slideLen = $slides.length,
slideWidth = settings.containerWidth - (slideLen * settings.headerWidth),
$header = $slides.children('h2'),

// core utility and animation methods
utils = {
getGroup : function(pos, index) {
if (this.offsetLeft === pos.left) {
return $header.slice(index + 1, slideLen).filter(function() { return this.offsetLeft === $header.index(this) * settings.headerWidth });
} else if (this.offsetLeft === pos.right) {
return $header.slice(0, index + 1).filter(function() { return this.offsetLeft === slideWidth + ($header.index(this) * settings.headerWidth) });
}
},
nextSlide : function(slideIndex) {
var slide = slideIndex + 1 || settings.firstSlide;

// get index of next slide
return function() {
return slide++ % slideLen;
}
},
play : function(slideIndex) {
var getNext = utils.nextSlide((slideIndex) ? slideIndex : ''), // create closure
start = function() {
$header.eq(getNext()).click();
};

utils.playing = setInterval(start, settings.cycleSpeed);
},
pause : function() {
clearInterval(utils.playing);
},
playing : 0,
sentinel : false
};

// set container heights, widths, theme & corner style
$accordion
.height(settings.containerHeight)
.width(settings.containerWidth)
.addClass(settings.theme)
.addClass(settings.rounded && 'rounded');

// set tab width, height and selected class
$header
.width(settings.containerHeight)
.height(settings.headerWidth)
.eq(settings.firstSlide - 1).addClass('selected');

// ie :(
if ($.browser.msie) {
if ($.browser.version.substr(0,1) > 8) {
$header.css('filter', 'none');
} else if ($.browser.version.substr(0,1) < 7) {
return false;
}
}

// set initial positions for each slide
$header.each(function(index) {
var $this = $(this),
left = index * settings.headerWidth;

if (index >= settings.firstSlide) left += slideWidth;

$this
.css('left', left)
.next()
.width(slideWidth)
.css({ left : left, paddingLeft : settings.headerWidth });

// add number to bottom of tab
settings.enumerateSlides && $this.append('<b>' + (index + 1) + '

Unknown end tag for &lt;/b&gt;

');

});

// bind event handler for activating slides
$header.click(function(e) {
var $this = $(this),
index = $header.index($this),
$next = $this.next(),
pos = {
left : index * settings.headerWidth,
right : index * settings.headerWidth + slideWidth,
newPos : 0
},
$group = utils.getGroup.call(this, pos, index);

// set animation direction
if (this.offsetLeft === pos.left) {
pos.newPos = slideWidth;
} else if (this.offsetLeft === pos.right) {
pos.newPos = -slideWidth;
}

// check if animation in progress
if (!$header.is(':animated')) {

// activate onclick callback with slide div as context
if (e.originalEvent) {
if (utils.sentinel === this) return false;
settings.onActivate.call($next);
utils.sentinel = this;
} else {
settings.onActivate.call($next);
utils.sentinel = false;
}

// remove, then add selected class
$header.removeClass('selected').filter($this).addClass('selected');

// get group of tabs & animate
$group
.animate({ left : '+=' + pos.newPos }, settings.slideSpeed, function() { settings.slideCallback.call($next) })
.next()
.animate({ left : '+=' + pos.newPos }, settings.slideSpeed);

}
});

// pause on hover
if (settings.pauseOnHover) {
$accordion.hover(function() {
utils.pause();
}, function() {
utils.play($header.index($header.filter('.selected')));
});
}

// start autoplay, call utils with no args = start from firstSlide
settings.autoPlay && utils.play();

return $accordion;

};

})(jQuery);
```


> And save !
> Arrow


> Second page :

> - Chose the title

> - Chose the position : in the index

> - Paste this code :

```

$(document).ready(function(){
$('#one').liteAccordion({
onActivate : function() {
this.find('figcaption').fadeOut();
},
slideCallback : function() {
this.find('figcaption').fadeIn();
},
autoPlay : true,
pauseOnHover : true,
theme : 'dark',
rounded : true,
enumerateSlides : true
}).find('figcaption:first').show();
});

```

> And save !
> Arrow

> By the way, remember to enable the javascript management Wink


> 3. Enter the HTML code in the homepage of the forum :

> Go to :

> Administration Panel ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Display ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Homepage ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Generalities ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Homepage message


> Paste this code :

```

<div id="one" class="accordion">
<ol>
<li>
<h2><span>Slide One

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="s1">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span>Slide Two

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="s2">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span>Slide Three

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="s3">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span>Slide Four

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="s4">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span>Slide Five

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="s5">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ol&gt;


<noscript>
<p>Please enable JavaScript to get the full experience.

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/noscript&gt;




Unknown end tag for &lt;/div&gt;




```
And now you can change the slides and add as many div as you want ! You can also add HTML codes as you want (with links for example) Wink


4. Add the CSS code :

Go to :

Administration Panel ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Display ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Pictures and colors ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) Colors ![http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif](http://i62.servimg.com/u/f62/09/02/12/09/arrow10.gif) CSS Stylesheet


Paste this code :

```

.accordion {
text-align:left;
font:'Helvetica Neue', Verdana, Arial, sans-serif;
}
.accordion ol {
position: relative;
overflow: hidden;
height: 100%;
margin: 0;
padding: 0;
list-style-type: none;
}
.accordion li > h2 {
color: black;
font-weight: normal;
margin: 0;
z-index: 2;
position: absolute;
top: 0;
left: 0;
-webkit-transform: translateX(-100%) rotate(-90deg);
-webkit-transform-origin: right top;
-moz-transform: translateX(-100%) rotate(-90deg);
-moz-transform-origin: right top;
-o-transform: translateX(-100%) rotate(-90deg);
-o-transform-origin: right top;
-ms-transform: translateX(-100%) rotate(-90deg);
-ms-transform-origin: right top;
transform: translateX(-100%) rotate(-90deg);
transform-origin: right top;
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.accordion li > h2 span { display: block; padding-right: 8%; text-align: right; height: 90%; margin-top: 5px; }
.accordion li > h2 b { display: inline-block; position: absolute; top: 10%; top: 42%9; left: 10%; left: 5%9; text-align: center; -webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg); transform: rotate(90deg); filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1); }
.accordion li > h2:hover { cursor: pointer; }
.accordion li > div { height: 100%; position: absolute; top: 0; z-index: 1; overflow: hidden; background: white; }
.accordion noscript p { padding: 10px; margin: 0; background: white; }

/****************************************** Basic */
.basic li > h2 { background: #333; color: white; line-height: 1.8em; }
.basic li > div h3 { margin: 15px 10px; }
.basic li > div p { margin: 10px; font-size: 14px; }

/****************************************** Dark */
.dark { border: 9px solid #353535; border-bottom-width: 8px; padding: 5px 5px 6px 0; background: #030303; -webkit-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4); -moz-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4); -o-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4); }
.dark li > h2 { background: #030303; font-size: 16px; line-height: 2.7em; text-shadow: 0 -1px 0 #030303; }
.dark li > h2 span { background: #353535; color: white; }
.dark li > h2 b { background: #353535; color: #030303; font-size: 20px; text-shadow: -1px 1px 0 #5b5b5b; }
.dark h2.selected span, .dark h2.selected span:hover { background: #434343; background: -webkit-gradient(linear, left top, right top, color-stop(0, #353535), color-stop(1, #555555)); background: -moz-linear-gradient(top left, #353535 0%, #555555 100%); }
.dark h2.selected b { background: #434343; }
.dark li > div { background: #030303; margin-left: 5px; }

/*************************************** Rounded */
.rounded { -webkit-border-radius: 6px; -moz-border-radius: 6px; border-radius: 6px; }
.rounded li > h2 span { -webkit-border-radius: 4px; -moz-border-radius: 4px; border-radius: 4px; }

/***************************************** Light */
/**************************************** Stitch */

#s1 {
background:url("http://url de l'image.jpg") no-repeat #030303;
}
#s2 {
background:url("http://url de l'image.jpg") no-repeat #030303;
}
#s3 {
background:url("http://url de l'image.jpg") no-repeat #030303;
}

#s4 {
background:url("http://url de l'image.jpg") no-repeat #030303;
}

#s5 {
background:url("http://url de l'image.jpg") no-repeat #030303;
}

```

You just have to put the URL of the images in each div :

```

#s1 {
background:url("http://url de l'image.jpg")
}
```


You can add as many div as you want ! Very Happy
You can change the aspect of the slides by using the CSS Wink


... And congratulations, you've made your own personnalized index !
cheers