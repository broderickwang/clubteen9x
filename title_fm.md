Tạo 1 js:
Title **: Title punbb
Placement : In all the pages
Javascript Code** :
```

(function($){function fixTitle(jQueryele){if(jQueryele.attr('title')||typeof(jQueryele.attr('original-title'))!='string'){jQueryele.attr('original-title',jQueryele.attr('title')||'').removeAttr('title')}}function Tipsy(element,options){this.jQueryelement=$(element);this.options=options;this.enabled=true;fixTitle(this.jQueryelement)}Tipsy.prototype={show:function(){var title=this.getTitle();if(title&&this.enabled){var jQuerytip=this.tip();jQuerytip.find('.tipsy-inner')[this.options.html?'html':'text'](title);jQuerytip[0].className='tipsy';jQuerytip.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var pos=$.extend({},this.jQueryelement.offset(),{width:this.jQueryelement[0].offsetWidth,height:this.jQueryelement[0].offsetHeight});var actualWidth=jQuerytip[0].offsetWidth,actualHeight=jQuerytip[0].offsetHeight;var gravity=(typeof this.options.gravity=='function')?this.options.gravity.call(this.jQueryelement[0]):this.options.gravity;var tp;switch(gravity.charAt(0)){case'n':tp={top:pos.top+pos.height+this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case's':tp={top:pos.top-actualHeight-this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case'e':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth-this.options.offset};break;case'w':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width+this.options.offset};break}if(gravity.length==2){if(gravity.charAt(1)=='w'){tp.left=pos.left+pos.width/2-15}else{tp.left=pos.left+pos.width/2-actualWidth+15}}jQuerytip.css(tp).addClass('tipsy-'+gravity);if(this.options.fade){jQuerytip.stop().css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:this.options.opacity})}else{jQuerytip.css({visibility:'visible',opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){$(this).remove()})}else{this.tip().remove()}},getTitle:function(){var title,jQuerye=this.jQueryelement,o=this.options;fixTitle(jQuerye);var title,o=this.options;if(typeof o.title=='string'){title=jQuerye.attr(o.title=='title'?'original-title':o.title)}else if(typeof o.title=='function'){title=o.title.call(jQuerye[0])}title=(''+title).replace(/(^\s*|\s*$)/,"");return title||o.fallback},tip:function(){if(!this.jQuerytip){this.jQuerytip=$('<div class="tipsy">

Unknown end tag for &lt;/div&gt;

').html('<div class="tipsy-arrow">

Unknown end tag for &lt;/div&gt;

<div class="tipsy-inner"/>

Unknown end tag for &lt;/div&gt;

')}return this.jQuerytip},validate:function(){if(!this.jQueryelement[0].parentNode){this.hide();this.jQueryelement=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};$.fn.tipsy=function(options){if(options===true){return this.data('tipsy')}else if(typeof options=='string'){return this.data('tipsy')[options]()}options=$.extend({},$.fn.tipsy.defaults,options);function get(ele){var tipsy=$.data(ele,'tipsy');if(!tipsy){tipsy=new Tipsy(ele,$.fn.tipsy.elementOptions(ele,options));$.data(ele,'tipsy',tipsy)}return tipsy}function enter(){var tipsy=get(this);tipsy.hoverState='in';if(options.delayIn==0){tipsy.show()}else{setTimeout(function(){if(tipsy.hoverState=='in')tipsy.show()},options.delayIn)}};function leave(){var tipsy=get(this);tipsy.hoverState='out';if(options.delayOut==0){tipsy.hide()}else{setTimeout(function(){if(tipsy.hoverState=='out')tipsy.hide()},options.delayOut)}};if(!options.live)this.each(function(){get(this)});if(options.trigger!='manual'){var binder=options.live?'live':'bind',eventIn=options.trigger=='hover'?'mouseenter':'focus',eventOut=options.trigger=='hover'?'mouseleave':'blur';this[binder](eventIn,enter)[binder](eventOut,leave)}return this};$.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:true,fallback:'',gravity:'n',html:false,live:false,offset:0,opacity:1.0,title:'title',trigger:'hover'};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?'s':'n'};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?'e':'w'}})($);$(function(){$('a.lastt').tipsy({gravity:'w',opacity:0.8,html:true});$('a, .button2 img, .user-contact img').tipsy({gravity:'s',opacity:0.8,html:true});$('.icoon').tipsy({gravity:'e',opacity:0.8})});

```
css:

```

/* Title */
.tipsy{font-size:12px;padding:5px;position:absolute;text-shadow:none;z-index:999}.tipsy-inner{-moz-border-radius:3px;-moz-box-shadow:0 1px 3px rgba(0,0,0,.4);-webkit-border-radius:3px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);background:#0066FF url(http://cuul.tk/img/gradient.png) repeat-x 0 -150px;background-color:#00457D;border-radius:3px;color:#fff;max-width:200px;padding:8px;text-align:center}.tipsy-arrow{background:url(http://i.imm.io/oP2d.jpeg) no-repeat top left;height:5px;position:absolute;width:9px}.tipsy-n .tipsy-arrow{left:50%;margin-left:-4px;top:0}.tipsy-nw .tipsy-arrow{left:10px;top:0}.tipsy-ne .tipsy-arrow{right:10px;top:0}.tipsy-s .tipsy-arrow{background-position:bottom left;bottom:0;left:50%;margin-left:-4px}.tipsy-sw .tipsy-arrow{background-position:bottom left;bottom:0;left:10px}.tipsy-se .tipsy-arrow{background-position:bottom left;bottom:0;right:10px}.tipsy-e .tipsy-arrow{background-position:top right;height:9px;margin-top:-4px;right:0;top:50%;width:5px}.tipsy-w .tipsy-arrow{height:9px;left:0;margin-top:-4px;top:50%;width:5px}```