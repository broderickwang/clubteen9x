![http://i43.servimg.com/u/f43/17/53/02/68/110.jpg](http://i43.servimg.com/u/f43/17/53/02/68/110.jpg)
Miêu tả :
Dạng Tooltip này sẽ giúp chúng ta hiển thị thông tin khi rê chuột vào 1 chỗ nào đó : ví dụ như Gửi bài mới , Trả lời , Trích dẫn , BBcode ...

Cách làm :

Bước 1 :Cho đoạn sau vào Css :

```


.score{padding-top:20px}.pnsmall{font-size:10px;font-style:italic;margin-top:-5px}.tipsy{font-size:10px;padding:5px;position:absolute;z-index:999}
.tipsy-inner{
-moz-border-radius:3px;
-webkit-border-radius:3px;
background-color:#000;
border-radius:3px;color:#FFF;
max-width:200px;padding:5px 8px 4px;text-align:center}
.tipsy-arrow{border:5px dashed #000;height:0;line-height:0;position:absolute;width:0}
.tipsy-arrow-n{border-bottom-color:#000}
.tipsy-arrow-s{border-top-color:#000}
.tipsy-arrow-e{border-left-color:#000}
.tipsy-arrow-w{border-right-color:#000}
.tipsy-n .tipsy-arrow{border-bottom-style:solid;
border-left-color:transparent;
border-right-color:transparent;
border-top:none;left:50%;
margin-left:-5px;top:0}
.tipsy-nw .tipsy-arrow{border-bottom-style:solid;
border-left-color:transparent;
border-right-color:transparent;
border-top:none;left:10px;top:0}
.tipsy-ne .tipsy-arrow{border-bottom-style:solid;
border-left-color:transparent;
border-right-color:transparent;
border-top:none;right:10px;top:0}
.tipsy-s .tipsy-arrow{border-bottom:none;
border-left-color:transparent;
border-right-color:transparent;
border-top-style:solid;
bottom:0;left:50%;margin-left:-5px}
.tipsy-sw .tipsy-arrow{border-bottom:none;border-left-color:transparent;
border-right-color:transparent;
border-top-style:solid;bottom:0;left:10px}
.tipsy-se .tipsy-arrow{border-bottom:none;border-left-color:transparent;
border-right-color:transparent;
border-top-style:solid;bottom:0;right:10px}
.tipsy-e .tipsy-arrow{border-bottom-color:transparent;
border-left-style:solid;border-right:none;
border-top-color:transparent;margin-top:-5px;right:0;top:50%}
.tipsy-w .tipsy-arrow{border-bottom-color:transparent;
border-left:none;border-right-style:solid;
border-top-color:transparent;left:0;margin-top:-5px;top:50%}


```

Bước 2 : vào MODULES >> HTML & JAVASCRIPT >> Javascript codes management
Tạo 1 Javascript mới
Title **: Tipsy
Placement : Không chọn gì cả
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
Bước 3 : Cho đoạn sau vào Footer

```

<script src='Link Js vừa tạo ở trên'type='text/javascript'>

Unknown end tag for &lt;/script&gt;


```

Nhớ thay link js vừa tạo ở trên

> Lưu Ý :
> COde bên trên mình hướng dẫn Tooltip chỉ hiện thị ở những chỗ : Trên lasttopic , BBcode , các nút ở Lí lịch thành viên


Thế là xong

Chú ý : Thêm 1 Code hiển thị Tooltip đầy đủ hơn cười nhăn răng

Cũng giống hệt các Bước trên Nhưng đến chỗ thay code ở : Javascript codes management
thì các bạn thay = Code sau

```

(function($){function fixTitle($ele){if($ele.attr('title')||typeof($ele.attr('original-title'))!='string'){$ele.attr('original-title',$ele.attr('title')||'').removeAttr('title')}}function Tipsy(element,options){this.$element=$(element);this.options=options;this.enabled=true;fixTitle(this.$element)}Tipsy.prototype={show:function(){var title=this.getTitle();if(title&&this.enabled){var $tip=this.tip();$tip.find('.tipsy-inner')[this.options.html?'html':'text'](title);$tip[0].className='tipsy';$tip.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var pos=$.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;var gravity=(typeof this.options.gravity=='function')?this.options.gravity.call(this.$element[0]):this.options.gravity;var tp;switch(gravity.charAt(0)){case'n':tp={top:pos.top+pos.height+this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case's':tp={top:pos.top-actualHeight-this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case'e':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth-this.options.offset};break;case'w':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width+this.options.offset};break}if(gravity.length==2){if(gravity.charAt(1)=='w'){tp.left=pos.left+pos.width/2-15}else{tp.left=pos.left+pos.width/2-actualWidth+15}}$tip.css(tp).addClass('tipsy-'+gravity);if(this.options.fade){$tip.stop().css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:this.options.opacity})}else{$tip.css({visibility:'visible',opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){$(this).remove()})}else{this.tip().remove()}},getTitle:function(){var title,$e=this.$element,o=this.options;fixTitle($e);var title,o=this.options;if(typeof o.title=='string'){title=$e.attr(o.title=='title'?'original-title':o.title)}else if(typeof o.title=='function'){title=o.title.call($e[0])}title=(''+title).replace(/(^\s*|\s*$)/,"");return title||o.fallback},tip:function(){if(!this.$tip){this.$tip=$('<div class="tipsy">

Unknown end tag for &lt;/div&gt;

').html('<div class="tipsy-arrow">

Unknown end tag for &lt;/div&gt;

<div class="tipsy-inner"/>

Unknown end tag for &lt;/div&gt;

')}return this.$tip},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};$.fn.tipsy=function(options){if(options===true){return this.data('tipsy')}else if(typeof options=='string'){return this.data('tipsy')[options]()}options=$.extend({},$.fn.tipsy.defaults,options);function get(ele){var tipsy=$.data(ele,'tipsy');if(!tipsy){tipsy=new Tipsy(ele,$.fn.tipsy.elementOptions(ele,options));$.data(ele,'tipsy',tipsy)}return tipsy}function enter(){var tipsy=get(this);tipsy.hoverState='in';if(options.delayIn==0){tipsy.show()}else{setTimeout(function(){if(tipsy.hoverState=='in')tipsy.show()},options.delayIn)}};function leave(){var tipsy=get(this);tipsy.hoverState='out';if(options.delayOut==0){tipsy.hide()}else{setTimeout(function(){if(tipsy.hoverState=='out')tipsy.hide()},options.delayOut)}};if(!options.live)this.each(function(){get(this)});if(options.trigger!='manual'){var binder=options.live?'live':'bind',eventIn=options.trigger=='hover'?'mouseenter':'focus',eventOut=options.trigger=='hover'?'mouseleave':'blur';this[binder](eventIn,enter)[binder](eventOut,leave)}return this};$.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:'',gravity:'n',html:false,live:false,offset:0,opacity:0.8,title:'title',trigger:'hover'};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?'s':'n'};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?'e':'w'}})(jQuery);$(document).ready(function(){$(function(){$('#text_edit button').tipsy({fade:true,gravity:'s'});$('dl .icon').tipsy({fade:true,gravity:'s'});$('.dterm').tipsy({fade:true,gravity:'s'});$('.i_icon_quote').tipsy({fade:true,gravity:'s'});$('.i_icon_edit').tipsy({fade:true,gravity:'s'});$('.i_icon_delete').tipsy({fade:true,gravity:'s'});$('.i_icon_ip').tipsy({fade:true,gravity:'s'});$('.i_icon_profile').tipsy({fade:true,gravity:'n'});$('.i_icon_pm').tipsy({fade:true,gravity:'n'});$('.topic-title').tipsy({fade:true,gravity:'s'});$('.i_post').tipsy({fade:true,gravity:'s'});$('.i_reply').tipsy({fade:true,gravity:'s'});$('img[src="http://illiweb.com/fa/prosilver/icon_contact_skype.gif"]').tipsy({fade:true,gravity:'s'});$('img[src="http://cdn2.iconfinder.com/data/icons/fugue/icon/mail.png"]').tipsy({fade:true,gravity:'n'});$('img[src="http://cdn1.iconfinder.com/data/icons/silk2/world_link.png"]').tipsy({fade:true,gravity:'n'});$('img[src="http://illiweb.com/fa/prosilver/icon_post_report.gif"]').tipsy({fade:true,gravity:'s'});$('img[src="http://illiweb.com/fa/prosilver/icon_report_close.png"]').tipsy({fade:true,gravity:'s'});$('td.tcr a').tipsy({fade:true,gravity:'s'});$('.status img').tipsy({fade:true,gravity:'e'});$('#r img').tipsy({fade:true,gravity:'s'})})});var CopyrightNotice='Friend request notification for forumotion phpBB3 and IPB2/Invision boards. Copyright Â© 2011 by Dion Designs. All Rights Reserved. Use and/or modification of this script is allowed, provided this entire copyright notice remains in the original or modified script. Distribution is not allowed without written consent from Dion Designs.';var Modification="Slight Modification from LGforum @ AvacWeb.com, for PunBB. Credits to Dion";function setupbox(){var z=document.getElementById('newfriend');var x=z.firstChild.lastChild.previousSibling.previousSibling.innerHTML;if(x.indexOf('title="Accept"')>0){z.innerHTML='<a href="/profile?mode=editprofile&page_profil=friendsfoes">You have a new friend request

Unknown end tag for &lt;/a&gt;

';document.getElementById('ddrequest').style.display='block'}else{z.innerHTML=""}}$(function(){x=document.createElement('div');x.id='ddrequest';x.style.display='none';x.innerHTML='<div id="newfriend">

Unknown end tag for &lt;/div&gt;

<a style="cursor:pointer" class="button2" onclick="$(\'#ddrequest\').fadeOut()">Close

Unknown end tag for &lt;/a&gt;

';document.body.insertBefore(x,document.body.firstChild);$('#newfriend').load('/profile?mode=editprofile&page_profil=friendsfoes #main-content .main',function(){setupbox()})});function getcookie(name){cname=name+'=';cpos=document.cookie.indexOf(cname);if(cpos!=-1){cstart=cpos+cname.length;cend=document.cookie.indexOf(';',cstart);return unescape(document.cookie.substring(cstart,cend))}else{return null}}function setcookie(name,value,sticky){expires='';if(sticky){expires=' expires=Wed, 1 Jan 2020 00:00:00 GMT;'}document.cookie=name+"="+value+'; path=/;'+expires}var sec_inter=60;function cook_no_new_message(){my_setcookie("new_message",-new Date(),1,0);no_new_message()}function no_new_message(){$('#new_message').remove()}function cook_new_message(){my_setcookie("new_message",+new Date(),1,0);new_message()}function new_message(){$("body").append('<div id="new_message" style="position:fixed;bottom:0;left:0"><a href="/privmsg?folder=inbox" onClick="cook_no_new_message();return true;"><span style="background: white;border: 1px solid #C4CDE0;border-bottom-width: 2px;-webkit-border-radius: 3px;padding: 4px;">You have new messages

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

')}function new_message_update(){var dnew_message=my_getcookie("new_message");var enew_message=dnew_message>0;if(($('#new_message').length>0)==enew_message){if(!enew_message)dnew_message*=-1;if(dnew_message<+new Date()-1000*sec_inter)$.get('http://'+document.location.host+'/privmsg?mode=newpm',function(data){if(!data.match("No new private messages are waiting for you")!=enew_message){if(enew_message)cook_no_new_message();else cook_new_message()}})}else{if(enew_message)new_message();else no_new_message()}}$(function(){if($('#i_icon_mini_new_message').length)cook_new_message();else cook_no_new_message();setInterval("new_message_update()",5000)});

```


> Code trên hiển thị tooltip ở các chỗ như : BBcode , Gửi + trả lời bài mới , Trích dẫn , edit , xóa .... , Tooltip ở bài viết đầu tiên mỗi box ...



Ok Thế là xong cười nhăn răng
Ai làm không được thì Reply tại topic này
Dùng được cho cả Phpbb2 và Pun