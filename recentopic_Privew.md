Demo online: http://teen9x123.forumvi.com

Thực hiện:

CSS:


```


.accordion .postprofile { display: none }
.accordion { text-align: left; font: 'Helvetica Neue', Verdana, Arial, sans-serif }
.accordion > ol { position: relative; overflow: hidden; height: 100%; margin: 0; padding: 0; list-style-type: none }
.accordion .slide > h2 {
color: black;
font-size: 16px;
font-weight: normal;
margin: 0;
z-index: 100;
position: absolute;
top: 0;
left: 0;
-webkit-transform: translateX(-100%) rotate(-90deg);
-webkit-transform-origin: right top;
-moz-transform: translateX(-100%) rotate(-90deg);
-moz-transform-origin: right top;
-o-transform: translateX(-100%) rotate(-90deg);
-o-transform-origin: right top;
transform: translateX(-100%) rotate(-90deg);
transform-origin: right top;
-ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.accordion .slide > h2 span {
display: block;
padding-right: 8%;
text-align: right;
height: 90%;
margin-top: 5px;
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;
font-size: 10px;
}
.accordion .slide > h2 b {
display: inline-block;
position: absolute;
top: 13%;
left: 10%;
text-align: center;
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-o-transform: rotate(90deg);
transform: rotate(90deg);
-ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
}
.accordion .slide > h2:hover { cursor: pointer }
.accordion .slide > div { height: 100%; position: absolute; top: 0; z-index: 10; overflow: hidden; background: white; overflow: auto; }
.accordion noscript p { padding: 10px; margin: 0; background: white }
/****************************************** Basic */
.basic .slide > h2 { background: #333; color: white; line-height: 225% }
/****************************************** Dark */
.dark {
border: 9px solid #353535;
border-bottom-width: 8px;
padding: 5px 5px 6px 0;
background: #030303;
-webkit-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
-moz-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
-ms-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
-o-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
}
.dark .slide > h2 { background: #030303; text-shadow: 0 -1px 0 #030303; line-height: 265% }
.dark .slide > h2 span { background: #353535; color: white }
.dark .slide > h2 b { background: #353535; color: #030303; text-shadow: -1px 1px 0 #5b5b5b }
.dark .slide > h2.selected span, .dark .slide > h2.selected span:hover {
background: #353535;
background: -moz-linear-gradient(left, #353535 0%, #555555 100%);
background: -webkit-gradient(linear, left top, right top, color-stop(0%,#353535), color-stop(100%,#555555));
background: -webkit-linear-gradient(left, #353535 0%,#555555 100%);
background: -o-linear-gradient(left, #353535 0%,#555555 100%);
background: -ms-linear-gradient(left, #353535 0%,#555555 100%);
background: linear-gradient(left, #353535 0%,#555555 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#353535', endColorstr='#555555',GradientType=1 );
}
.dark .slide > h2.selected b {
background: #383838;
background: -moz-linear-gradient(top, #3a3a3a 0%, #363636 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#3a3a3a), color-stop(100%,#363636));
background: -webkit-linear-gradient(top, #3a3a3a 0%,#363636 100%);
background: -o-linear-gradient(top, #3a3a3a 0%,#363636 100%);
background: -ms-linear-gradient(top, #3a3a3a 0%,#363636 100%);
background: linear-gradient(top, #3a3a3a 0%,#363636 100%);
}
.dark .slide > div { background: #030303; margin-left: 5px }
/***************************************** Light */
.light {
border: 9px solid white;
border-bottom-width: 8px;
padding: 5px 5px 6px 0;
background: #a0a0a0;
-webkit-box-shadow: -1px -1px 0 #c0c0c0, 1px 1px 0 #c0c0c0, 0 5px 15px rgba(0, 0, 0, 0.4);
-moz-box-shadow: -1px -1px 0 #c0c0c0, 1px 1px 0 #c0c0c0, 0 5px 15px rgba(0, 0, 0, 0.4);
-ms-box-shadow: -1px -1px 0 #c0c0c0, 1px 1px 0 #c0c0c0, 0 5px 15px rgba(0, 0, 0, 0.4);
-o-box-shadow: -1px -1px 0 #c0c0c0, 1px 1px 0 #c0c0c0, 0 5px 15px rgba(0, 0, 0, 0.4);
box-shadow: -1px -1px 0 #c0c0c0, 1px 1px 0 #c0c0c0, 0 5px 15px rgba(0, 0, 0, 0.4);
}
.light .slide > h2 { background: #a0a0a0; text-shadow: 0 -1px 0 white; line-height: 265% }
.light .slide > h2 span {
background: #fcfcfc;
background: -moz-linear-gradient(left, #fcfcfc 0%, #ededed 100%);
background: -webkit-gradient(linear, left top, right top, color-stop(0%,#fcfcfc), color-stop(100%,#ededed));
background: -webkit-linear-gradient(left, #fcfcfc 0%,#ededed 100%);
background: -o-linear-gradient(left, #fcfcfc 0%,#ededed 100%);
background: -ms-linear-gradient(left, #fcfcfc 0%,#ededed 100%);
background: linear-gradient(left, #fcfcfc 0%,#ededed 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfcfc', endColorstr='#ededed',GradientType=1 );
-webkit-box-shadow: -1px -1px 0 #909090 inset, 1px 1px 0 #909090 inset;
-moz-box-shadow: -1px -1px 0 #909090 inset, 1px 1px 0 #909090 inset;
-o-box-shadow: -1px -1px 0 #909090 inset, 1px 1px 0 #909090 inset;
box-shadow: -1px -1px 0 #909090 inset, 1px 1px 0 #909090 inset;
color: #909090;
}
.light .slide > h2 b { background: #ffffff; color: #909090; text-shadow: -1px 1px 0 white }
.light .slide > h2.selected span, .light .slide h2.selected span:hover, .light .slide > h2.selected b { background: #ffffff }
.light .slide > div { background: #a0a0a0; margin-left: 5px }
/**************************************** Stitch */
.stitch {
position: relative;
padding: 5px 0 5px 5px;
border: 11px solid #353535;
background: #353535;
-webkit-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
-moz-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
-o-box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
box-shadow: 0 -1px 0 #5b5b5b inset, 0 5px 15px rgba(0, 0, 0, 0.4);
}
.stitch:before {
content: '';
width: 100%;
height: 100%;
position: absolute;
top: -9px;
left: -9px;
background: #353535;
border-width: 9px;
-webkit-border-image: url('bg_stitch.png') 9 repeat;
-moz-border-image: url('bg_stitch.png') 9 repeat;
-o-border-image: url('bg_stitch.png') 9 repeat;
border-image: url('bg_stitch.png') 9 repeat;
}
.stitch .slide > h2 { background: #353535 }
.stitch .slide > h2 span {
height: auto;
padding-right: 5%;
color: white;
text-shadow: -1px 1px 0 #5b5b5b;
border-width: 9px;
background-image: url('bg_noise.png');
margin-top: 0;
-webkit-border-image: url('bg_stitch.png') 9 repeat;
-moz-border-image: url('bg_stitch.png') 9 repeat;
-o-border-image: url('bg_stitch.png') 9 repeat;
border-image: url('bg_stitch.png') 9 repeat;
}
.stitch .slide > h2.selected:after {
content: '';
display: block;
height: 11px;
width: 11px;
position: absolute;
bottom: -3px;
right: 38px;
-webkit-transform: rotate(45deg);
-moz-transform: rotate(45deg);
-o-transform: rotate(45deg);
transform: rotate(45deg);
-ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
border-width: 9px;
border-top: 0;
border-left: 0;
-webkit-border-image: url('bg_stitch.png') 9 repeat;
-moz-border-image: url('bg_stitch.png') 9 repeat;
-o-border-image: url('bg_stitch.png') 9 repeat;
border-image: url('bg_stitch.png') 9 repeat;
background-image: url('bg_noise.png');
}
.stitch .slide:nth-child(1) > h2 span, .stitch .slide:nth-child(1) > h2:after { background-color: #c25252 }
.stitch .slide:nth-child(2) > h2 span, .stitch .slide:nth-child(2) > h2:after { background-color: #ca9859 }
.stitch .slide:nth-child(3) > h2 span, .stitch .slide:nth-child(3) > h2:after { background-color: #96ba5f }
.stitch .slide:nth-child(4) > h2 span, .stitch .slide:nth-child(4) > h2:after { background-color: #59abb7 }
.stitch .slide:nth-child(5) > h2 span, .stitch .slide:nth-child(5) > h2:after { background-color: #bb6098 }
.stitch .slide > h2 b { top: 19%; color: white; text-shadow: 1px 1px 0 #5b5b5b }
.stitch .slide > div { margin-right: 6px }
.stitch.rounded > ol { -webkit-border-radius: 0; -moz-border-radius: 0; -ms-border-radius: 0; border-radius: 0 }
/*************************************** Rounded */
.rounded, .rounded > ol { -webkit-border-radius: 6px; -moz-border-radius: 6px; -ms-border-radius: 6px; border-radius: 6px }
.rounded .slide > h2 span { -webkit-border-radius: 4px; -moz-border-radius: 4px; -ms-border-radius: 4px; border-radius: 4px }
/******************************************** IE */
.ie .slide > h2 b { top: 42%; left: 5% }
.ie9 .slide > h2 { filter: none; -ms-transform: translateX(-100%) rotate(-90deg); -ms-transform-origin: right top }
.ie.dark .slide > h2 b, .ie.light .slide > h2 b { top: 44% }
.ie9.dark .slide > h2.selected span, .ie9.dark .slide > h2.selected span:hover, .light .slide > h2 span { filter: none }
.ie9.stitch { box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4); }
.ie.stitch .slide > h2 { line-height: 265% }
.ie.stitch .slide > h2 span { height: 89%; padding-right: 8% }
.ie.stitch .slide > h2 b { top: 33% }
.ie.stitch .slide > h2.selected:after { display: none }
.ie.stitch .slide-0 > h2 span { background-color: #c25252 }
.ie.stitch .slide-1 > h2 span { background-color: #ca9859 }
.ie.stitch .slide-2 > h2 span { background-color: #96ba5f }
.ie.stitch .slide-3 > h2 span { background-color: #59abb7 }
.ie.stitch .slide-4 > h2 span { background-color: #bb6098 }


```
HTML: Nhét vào bất kì chỗ nào hỗ trợ HTML, nhét vào Annoucement ý :


```

<div id="LGtopic_slider">
<ol>
<li>
<h2><span id="LGts_title0" onclick="loadRecentTopic(0)">Slide One

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="LGts_topic0">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span id="LGts_title1" onclick="loadRecentTopic(1)">Slide Two

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="LGts_topic1">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span id="LGts_title2" onclick="loadRecentTopic(2)">Slide Three

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="LGts_topic2">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span id="LGts_title3" onclick="loadRecentTopic(3)">Slide Four

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="LGts_topic3">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;


<li>
<h2><span id="LGts_title4" onclick="loadRecentTopic(4)">Slide Five

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/h2&gt;


<div id="LGts_topic4">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;


<script>
jQuery('#LGtopic_slider').liteAccordion({
theme: 'dark',
});


Unknown end tag for &lt;/script&gt;



```

Javascript:


```


(function(b){var a=function(g,l){var i={containerWidth:960,containerHeight:320,headerWidth:48,activateOn:"click",firstSlide:1,slideSpeed:800,onTriggerSlide:function(){},onSlideAnimComplete:function(){},autoPlay:false,pauseOnHover:false,cycleSpeed:6000,easing:"swing",theme:"basic",rounded:false,enumerateSlides:false,linkable:false},h=b.extend({},i,l),c=g.children("ol").children("li"),j=c.children(":first-child"),k=c.length,f=h.containerWidth-k*h.headerWidth,e={play:function(m){var n=d.nextSlide(m&&m);if(d.playing){return}d.playing=setInterval(function(){j.eq(n()).trigger("click.liteAccordion")},h.cycleSpeed)},stop:function(){clearInterval(d.playing);d.playing=0},next:function(){e.stop();j.eq(d.currentSlide===k-1?0:d.currentSlide+1).trigger("click.liteAccordion")},prev:function(){e.stop();j.eq(d.currentSlide-1).trigger("click.liteAccordion")},destroy:function(){e.stop();b(window).unbind(".liteAccordion");g.attr("style","").removeClass("accordion basic dark light stitch").removeData("liteAccordion").unbind(".liteAccordion").find("li > :first-child").unbind(".liteAccordion").filter(".selected").removeClass("selected").end().find("b").remove();c.removeClass("slide").children().attr("style","")},debug:function(){return{elem:g,defaults:i,settings:h,methods:e,core:d}}},d={setStyles:function(){g.width(h.containerWidth).height(h.containerHeight).addClass("accordion").addClass(h.rounded&&"rounded").addClass(h.theme);c.addClass("slide").children(":first-child").width(h.containerHeight).height(h.headerWidth).eq(h.firstSlide-1).addClass("selected");j.each(function(m){var p=b(this),o=m*h.headerWidth,n=j.first().next(),q=parseInt(n.css("marginLeft"),10)||parseInt(n.css("marginRight"),10)||0;if(m>=h.firstSlide){o+=f}p.css("left",o).next().width(f-q).css({left:o,paddingLeft:h.headerWidth});h.enumerateSlides&&p.append("<b>"+(m+1)+"</b>")})},bindEvents:function(){if(h.activateOn==="click"){j.bind("click.liteAccordion",d.triggerSlide)}else{if(h.activateOn==="mouseover"){j.bind({"mouseover.liteAccordion":d.triggerSlide,"click.liteAccordion":d.triggerSlide})}}if(h.pauseOnHover&&h.autoPlay){g.bind("mouseover.liteAccordion",function(){d.playing&&e.stop()}).bind("mouseout.liteAccordion",function(){!d.playing&&e.play(d.currentSlide)})}},linkable:function(){var m=(function(){var o=[];c.each(function(){if(b(this).attr("name")){o.push((b(this).attr("name")).toLowerCase())}});return m=o})();var n=function(p){var o;if(p.type==="load"&&!window.location.hash){return}if(p.type==="hashchange"&&d.playing){return}o=b.inArray((window.location.hash.slice(1)).toLowerCase(),m);if(o>-1&&o<m.length){j.eq(o).trigger("click.liteAccordion")}};b(window).bind({"hashchange.liteAccordion":n,"load.liteAccordion":n})},currentSlide:h.firstSlide-1,nextSlide:function(m){var n=m+1||d.currentSlide+1;return function(){return n++%k}},playing:0,animSlideGroup:function(m,o,n){var p=n?":lt("+(m+1)+")":":gt("+m+")";c.filter(p).each(function(){var r=b(this),q=c.index(r);r.children().stop(true).animate({left:(n?0:f)+q*h.headerWidth},h.slideSpeed,h.easing,function(){if(!d.slideAnimCompleteFlag){h.onSlideAnimComplete.call(o);d.slideAnimCompleteFlag=true}})})},slideAnimCompleteFlag:false,triggerSlide:function(p){var o=b(this),m=j.index(o),n=o.next();d.currentSlide=m;d.slideAnimCompleteFlag=false;j.removeClass("selected").filter(o).addClass("selected");if(p.originalEvent&&h.autoPlay){e.stop();e.play(m)}if(h.linkable&&!d.playing){window.location.hash=o.parent().attr("name")}h.onTriggerSlide.call(n);d.animSlideGroup(m,n,true);d.animSlideGroup(m,n)},ieClass:function(){var m=+(b.browser.version).charAt(0);if(m<7){e.destroy()}if(m===7||m===8){c.each(function(n){b(this).addClass("slide-"+n)})}g.addClass("ie ie"+m)},init:function(){if(b.browser.msie){d.ieClass()}d.setStyles();d.bindEvents();if(h.cycleSpeed<h.slideSpeed){h.cycleSpeed=h.slideSpeed}if(h.linkable&&"onhashchange" in window){d.linkable()}h.autoPlay&&e.play()}};d.init();return e};b.fn.liteAccordion=function(e){var d=this,c=d.data("liteAccordion");if(typeof e==="object"||!e){return d.each(function(){var f;if(c){return}f=new a(d,e);d.data("liteAccordion",f)})}else{if(typeof e==="string"&&c[e]){if(e==="debug"){return c[e].call(d)}else{c[e].call(d);return d}}}}})(jQuery);
var LGslider_URLStore = [];
var sidebar_side = 'left';
var recent_topics_position = 0;
function loadRecentTopic(i) {
var holder = document.getElementById('LGts_topic'+i);
if(holder.innerHTML == '') {
var url = LGslider_URLStore[i];
$(holder).load(url+ ' .post:first');
}
}
$(function(){
var rt = $('#'+sidebar_side+' .module')[recent_topics_position-1];
var rta = rt.getElementsByTagName('a');
for(var i=0,l=rta.length; i<l; i++) {
if(/.*\/t(\d+)(p|-).*/.test(rta[i].href)) {
LGslider_URLStore.push(rta[i].href);
document.getElementById('LGts_title'+(LGslider_URLStore.length-1)).innerHTML=rta[i].innerHTML;
}
}
loadRecentTopic(0);
});

```


Hướng dẫn tùy chỉnh:
Trong HTML có dòng này:


```

theme: 'dark'

```
bạn có thể thay dark bằng light hoặc stitch để đổi giao diện, bạn cũng có thể thêm từ rounded để bo tròn nó lại.. Ví dụ như dark rounded hay stitch rounded chẳng hạn..
Tiếp theo, bạn tìm trong js dòng này:


```


var sidebar_side = 'left';

```

Thay left bằng right nếu bạn muốn nó là thanh bên phải
Tiếp, bạn để ý dòng này:

```

var recent_topics_position = 0;

```
Bạn đổi số 0 thành vị trí mà widget Recent topics được đặt, ví dụ như bạn đặt 2 widget, widget Recent topics ở dưới widget top posters chẳng hạn, thì bạn đổi số 0 thành số 2.
CHÚ Ý: Những widget mà bạn không chọn Có cho sự lựa chọn User a table type thì không tính vào thứ tự.
Ok và bây giờ bạn test thử đi... :y2: