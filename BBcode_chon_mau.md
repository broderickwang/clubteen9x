![http://i34.servimg.com/u/f34/15/64/85/86/114.png](http://i34.servimg.com/u/f34/15/64/85/86/114.png)

Vào Css Thêm đoạn code sau

```


/* trang màu */
.colorpicker {
width: 356px;
height: 176px;
overflow: hidden;
position: absolute;
background: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp11.png);
font-family: Arial, Helvetica, sans-serif;
display: none;
}
.colorpicker_color {
width: 150px;
height: 150px;
left: 14px;
top: 13px;
position: absolute;
background: #f00;
overflow: hidden;
cursor: crosshair;
}
.colorpicker_color div {
position: absolute;
top: 0;
left: 0;
width: 150px;
height: 150px;
background: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp12.png);
}
.colorpicker_color div div {
position: absolute;
top: 0;
left: 0;
width: 11px;
height: 11px;
overflow: hidden;
background: url(http://i46.servimg.com/u/f46/16/56/73/62/select10.gif);
margin: -5px 0 0 -5px;
}
.colorpicker_hue {
position: absolute;
top: 13px;
left: 171px;
width: 35px;
height: 150px;
cursor: n-resize;
}
.colorpicker_hue div {
position: absolute;
width: 35px;
height: 9px;
overflow: hidden;
background: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp10.gif) left top;
margin: -4px 0 0 0;
left: 0px;
}
.colorpicker_new_color {
position: absolute;
width: 60px;
height: 30px;
left: 213px;
top: 13px;
background: #f00;
}
.colorpicker_current_color {
position: absolute;
width: 60px;
height: 30px;
left: 283px;
top: 13px;
background: #f00;
}
.colorpicker input {
background-color: transparent;
border: 1px solid transparent;
position: absolute;
font-size: 10px;
font-family: Arial, Helvetica, sans-serif;
color: #898989;
top: 4px;
right: 11px;
text-align: right;
margin: 0;
padding: 0;
height: 11px;
}
.colorpicker_hex {
position: absolute;
width: 72px;
height: 22px;
background: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp13.png) top;
left: 212px;
top: 142px;
}
.colorpicker_hex input {
right: 6px;
}
.colorpicker_field {
height: 22px;
width: 62px;
background-position: top;
position: absolute;
}
.colorpicker_field span {
position: absolute;
width: 12px;
height: 22px;
overflow: hidden;
top: 0;
right: 0;
cursor: n-resize;
}
.colorpicker_rgb_r {
background-image: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp14.png);
top: 52px;
left: 212px;
}
.colorpicker_rgb_g {
background-image: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp15.png);
top: 82px;
left: 212px;
}
.colorpicker_rgb_b {
background-image: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp16.png);
top: 112px;
left: 212px;
}
.colorpicker_hsb_h {
background-image: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp17.png);
top: 52px;
left: 282px;
}
.colorpicker_hsb_s {
background-image: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp18.png);
top: 82px;
left: 282px;
}
.colorpicker_hsb_b {
background-image: url(http://i46.servimg.com/u/f46/16/56/73/62/colorp19.png);
top: 112px;
left: 282px;
}
.colorpicker_submit {
position: absolute;
width: 22px;
height: 22px;
background: url(http://i46.servimg.com/u/f46/16/56/73/62/aceita10.png) top;
left: 322px;
top: 142px;
overflow: hidden;
}
.colorpicker_focus {
background-position: center;
}
.colorpicker_hex.colorpicker_focus {
background-position: bottom;
}
.colorpicker_submit.colorpicker_focus {
background-position: bottom;
}
.colorpicker_slider {
background-position: bottom;
}

```

Vào MODULES >> HTML & JAVASCRIPT >> Javascript codes management
Tạo 1 JavaScripts mới

Title **: Color
Placement : Chọn In all the pages
Javascript Code** :

```


$(function(){$("#color").length!=0&&(function(c){var e=function(){var e=65,j={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},i=function(a,b){var d=h(a);c(b).data("colorpicker").fields.eq(1).val(d.r).end().eq(2).val(d.g).end().eq(3).val(d.b).end()},n=function(a,b){c(b).data("colorpicker").fields.eq(4).val(a.h).end().eq(5).val(a.s).end().eq(6).val(a.b).end()},l=function(a,b){c(b).data("colorpicker").fields.eq(0).val(k(h(a))).end()},o=function(a,b){c(b).data("colorpicker").selector.css("backgroundColor","#"+k(h({h:a.h,s:100,b:100})));c(b).data("colorpicker").selectorIndic.css({left:parseInt(150*a.s/100,10),top:parseInt(150*(100-a.b)/100,10)})},p=function(a,b){c(b).data("colorpicker").hue.css("top",parseInt(150-150*a.h/360,10))},r=function(a,b){c(b).data("colorpicker").currentColor.css("backgroundColor","#"+k(h(a)))},q=function(a,b){c(b).data("colorpicker").newColor.css("backgroundColor","#"+k(h(a)))},D=function(a){a=a.charCode||a.keyCode||-1;if(a>e&&a<=90||a==32)return!1;c(this).parent().parent().data("colorpicker").livePreview===!0&&g.apply(this)},g=function(a){var b=c(this).parent().parent(),d;if(this.parentNode.className.indexOf("_hex")>0){d=b.data("colorpicker");var f=this.value,e=6-f.length;if(e>0){for(var g=[],j=0;j<e;j++)g.push("0");g.push(f);f=g.join("")}f=m(s(f));d.color=d=f}else this.parentNode.className.indexOf("_hsb")>0?b.data("colorpicker").color=d=t({h:parseInt(b.data("colorpicker").fields.eq(4).val(),10),s:parseInt(b.data("colorpicker").fields.eq(5).val(),10),b:parseInt(b.data("colorpicker").fields.eq(6).val(),10)}):(d=b.data("colorpicker"),f={r:parseInt(b.data("colorpicker").fields.eq(1).val(),10),g:parseInt(b.data("colorpicker").fields.eq(2).val(),10),b:parseInt(b.data("colorpicker").fields.eq(3).val(),10)},d.color=d=m({r:Math.min(255,Math.max(0,f.r)),g:Math.min(255,Math.max(0,f.g)),b:Math.min(255,Math.max(0,f.b))}));a&&(i(d,b.get(0)),l(d,b.get(0)),n(d,b.get(0)));o(d,b.get(0));p(d,b.get(0));q(d,b.get(0));b.data("colorpicker").onChange.apply(b,[d,k(h(d)),h(d)])},E=function(){c(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")},F=function(){e=this.parentNode.className.indexOf("_hex")>0?70:65;c(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus");c(this).parent().addClass("colorpicker_focus")},G=function(a){var b=c(this).parent().find("input").focus(),a={el:c(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:a.pageY,field:b,val:parseInt(b.val(),10),preview:c(this).parent().parent().data("colorpicker").livePreview};c(document).bind("mouseup",a,u);c(document).bind("mousemove",a,v)},v=function(a){a.data.field.val(Math.max(0,Math.min(a.data.max,parseInt(a.data.val+a.pageY-a.data.y,10))));a.data.preview&&g.apply(a.data.field.get(0),[!0]);return!1},u=function(a){g.apply(a.data.field.get(0),[!0]);a.data.el.removeClass("colorpicker_slider").find("input").focus();c(document).unbind("mouseup",u);c(document).unbind("mousemove",v);return!1},H=function(){var a={cal:c(this).parent(),y:c(this).offset().top};a.preview=a.cal.data("colorpicker").livePreview;c(document).bind("mouseup",a,w);c(document).bind("mousemove",a,x)},x=function(a){g.apply(a.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,a.pageY-a.data.y)))/150,10)).get(0),[a.data.preview]);return!1},w=function(a){i(a.data.cal.data("colorpicker").color,a.data.cal.get(0));l(a.data.cal.data("colorpicker").color,a.data.cal.get(0));c(document).unbind("mouseup",w);c(document).unbind("mousemove",x);return!1},I=function(){var a={cal:c(this).parent(),pos:c(this).offset()};a.preview=a.cal.data("colorpicker").livePreview;c(document).bind("mouseup",a,y);c(document).bind("mousemove",a,z)},z=function(a){g.apply(a.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,a.pageY-a.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,a.pageX-a.data.pos.left))/150,10)).get(0),[a.data.preview]);return!1},y=function(a){i(a.data.cal.data("colorpicker").color,a.data.cal.get(0));l(a.data.cal.data("colorpicker").color,a.data.cal.get(0));c(document).unbind("mouseup",y);c(document).unbind("mousemove",z);return!1},J=function(){c(this).addClass("colorpicker_focus")},K=function(){c(this).removeClass("colorpicker_focus")},L=function(a){var b=c(this).parent(),d=b.data("colorpicker").color;b.data("colorpicker").origColor=d;r(d,b.get(0));b.data("colorpicker").onSubmit(d,k(h(d)),h(d),b.data("colorpicker").el,a)},B=function(){var a=c("#"+c(this).data("colorpickerId"));a.data("colorpicker").onBeforeShow.apply(this,[a.get(0)]);var b=c(this).offset(),d;d=document.compatMode=="CSS1Compat";d={l:window.pageXOffset||(d?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(d?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(d?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(d?document.documentElement.clientHeight:document.body.clientHeight)};var f=b.top+this.offsetHeight,b=b.left;f+176>d.t+d.h&&(f-=this.offsetHeight+176);b+356>d.l+d.w&&(b-=356);a.css({left:b+"px",top:f+"px"});a.data("colorpicker").onShow.apply(this,[a.get(0)])!=!1&&a.show();c(document).bind("mousedown",{cal:a},A);return!1},A=function(a){M(a.data.cal.get(0),a.target,a.data.cal.get(0))||(a.data.cal.data("colorpicker").onHide.apply(this,[a.data.cal.get(0)])!=!1&&a.data.cal.hide(),c(document).unbind("mousedown",A))},M=function(a,b,d){if(a==b)return!0;if(a.contains)return a.contains(b);if(a.compareDocumentPosition)return!!(a.compareDocumentPosition(b)&16);for(b=b.parentNode;b&&b!=d;){if(b==a)return!0;b=b.parentNode}return!1},t=function(a){return{h:Math.min(360,Math.max(0,a.h)),s:Math.min(100,Math.max(0,a.s)),b:Math.min(100,Math.max(0,a.b))}},s=function(a){a=parseInt(a.indexOf("#")>-1?a.substring(1):a,16);return{r:a>>16,g:(a&65280)>>8,b:a&255}},m=function(a){var b={h:0,s:0,b:0},d=Math.max(a.r,a.g,a.b),c=d-Math.min(a.r,a.g,a.b);b.b=d;b.s=d!=0?255*c/d:0;b.h=b.s!=0?a.r==d?(a.g-a.b)/c:a.g==d?2+(a.b-a.r)/c:4+(a.r-a.g)/c:-1;b.h*=60;b.h<0&&(b.h+=360);b.s*=100/255;b.b*=100/255;return b},h=function(a){var b={},d=Math.round(a.h),c=Math.round(a.s*255/100),a=Math.round(a.b*255/100);if(c==0)b.r=b.g=b.b=a;else{var c=(255-c)*a/255,e=(a-c)*(d%60)/60;d==360&&(d=0);d<60?(b.r=a,b.b=c,b.g=c+e):d<120?(b.g=a,b.b=c,b.r=a-e):d<180?(b.g=a,b.r=c,b.b=c+e):d<240?(b.b=a,b.r=c,b.g=a-e):d<300?(b.b=a,b.g=c,b.r=c+e):d<360?(b.r=a,b.g=c,b.b=a-e):(b.r=0,b.g=0,b.b=0)}return{r:Math.round(b.r),g:Math.round(b.g),b:Math.round(b.b)}},k=function(a){var b=[a.r.toString(16),a.g.toString(16),a.b.toString(16)];c.each(b,function(a,c){c.length==1&&(b[a]="0"+c)});return b.join("")},N=function(){var a=c(this).parent(),b=a.data("colorpicker").origColor;a.data("colorpicker").color=b;i(b,a.get(0));l(b,a.get(0));n(b,a.get(0));o(b,a.get(0));p(b,a.get(0));q(b,a.get(0))};return{init:function(a){a=c.extend({},j,a||{});if(typeof a.color=="string")a.color=m(s(a.color));else if(a.color.r!=void 0&&a.color.g!=void 0&&a.color.b!=void 0)a.color=m(a.color);else if(a.color.h!=void 0&&a.color.s!=void 0&&a.color.b!=void 0)a.color=t(a.color);else return this;return this.each(function(){if(!c(this).data("colorpickerId")){var b=c.extend({},a);b.origColor=a.color;var d="collorpicker_"+parseInt(Math.random()*1E3);c(this).data("colorpickerId",d);d=c('<div class="colorpicker"><div class="colorpicker_color"><div><div>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hue"><div>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_new_color">

Unknown end tag for &lt;/div&gt;

<div class="colorpicker_current_color">

Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hex"><input type="text" maxlength="6" size="6" />

Unknown end tag for &lt;/div&gt;

<div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hsb_s colorpicker_field"><input type="text" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_hsb_b colorpicker_field"><input type="text" size="3" /><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div class="colorpicker_submit">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').attr("id",d);b.flat?d.appendTo(this).show():d.appendTo(document.body);b.fields=d.find("input").bind("keyup",D).bind("change",g).bind("blur",E).bind("focus",F);d.find("span").bind("mousedown",G).end().find(">div.colorpicker_current_color").bind("click",N);b.selector=d.find("div.colorpicker_color").bind("mousedown",I);b.selectorIndic=b.selector.find("div div");b.el=this;b.hue=d.find("div.colorpicker_hue div");d.find("div.colorpicker_hue").bind("mousedown",H);b.newColor=d.find("div.colorpicker_new_color");b.currentColor=d.find("div.colorpicker_current_color");d.data("colorpicker",b);d.find("div.colorpicker_submit").bind("mouseenter",J).bind("mouseleave",K).bind("click",L);i(b.color,d.get(0));n(b.color,d.get(0));l(b.color,d.get(0));p(b.color,d.get(0));o(b.color,d.get(0));r(b.color,d.get(0));q(b.color,d.get(0));b.flat?d.css({position:"relative",display:"block"}):c(this).bind(b.eventName,B)}})},showPicker:function(){return this.each(function(){c(this).data("colorpickerId")&&B.apply(this)})},hidePicker:function(){return this.each(function(){c(this).data("colorpickerId")&&c("#"+c(this).data("colorpickerId")).hide()})},setColor:function(a){if(typeof a=="string")a=m(s(a));else if(a.r!=void 0&&a.g!=void 0&&a.b!=void 0)a=m(a);else if(a.h!=void 0&&a.s!=void 0&&a.b!=void 0)a=t(a);else return this;return this.each(function(){if(c(this).data("colorpickerId")){var b=c("#"+c(this).data("colorpickerId"));b.data("colorpicker").color=a;b.data("colorpicker").origColor=a;i(a,b.get(0));n(a,b.get(0));l(a,b.get(0));p(a,b.get(0));o(a,b.get(0));r(a,b.get(0));q(a,b.get(0))}})}}}();c.fn.extend({ColorPicker:e.init,ColorPickerHide:e.hidePicker,ColorPickerShow:e.showPicker,ColorPickerSetColor:e.setColor})}(jQuery),$("#wcolor,#color").html("<div>

Unknown end tag for &lt;/div&gt;

"),defaulColor=my_getcookie("defaultColor")?my_getcookie("defaultColor"):"000000",$("#color div").ColorPicker({color:defaulColor,flat:!0,onSubmit:function(c,e,C,j){my_setcookie("defaultColor",e,1,0);bbfontstyle("[color=#"+e+"]","[/color]");selectWysiwyg(j,"color");return!1}}),$("#wcolor div").ColorPicker({color:defaulColor,flat:!0,onSubmit:function(c,e,C,j,i){my_setcookie("defaultColor",e,1,0);vB_Editor.text_editor.format(i,"constructBBcode_select_color_#"+e,!1,!0)}}))});

```

Code này ko bik ai viết ra nhưng nhìu skin Invision bị lệch dòng cho nên Ruby đã edit lại khỏi lệch dòng nữa !!!!