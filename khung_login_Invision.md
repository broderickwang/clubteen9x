Demo: http://invision.chinhphuc.info/h95-

Chèn code sau vào 1 widget, học bất kì chỗ nào hỗ trợ HTML:
```



<style>#StickyWin{border-radius:5px 5px 5px 5px;display:none;left:50%;margin-left:-160px;margin-top:-70px;opacity:0;position:absolute;top:50%;visibility:visible;z-index:9000}
.modalWrap{background:url(http://jsfiddle.net/img/modal/bg.png) repeat scroll 0 0 transparent;border-radius:4px 4px 4px 4px;font-size:.8em;z-index:300;padding:10px}
.modal_jslint{width:auto}
.modalWrap .modalHeading{border-radius:2px 2px 2px 2px;height:38px;position:relative}
.modalWrap .modalHeading .close{background:url(http://jsfiddle.net/img/modal/close.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;left:0;position:absolute;text-indent:-9000em;top:5px;width:15px}
.modalWrap .modalBody{cursor:default;background:none repeat scroll 0 0 #FFF;border-radius:2px 2px 2px 2px;color:#000;font-family:Helvetica, "Lucida Sans", "Lucida Sans Unicode", "Luxi Sans", Tahoma, sans-serif;font-size:1.2em;position:relative;padding:10px}
.modalWrap .modalHeading h3{font-variant:normal;letter-spacing:0;color:#FFF;cursor:move;font-size:1.2em;text-align:center;text-shadow:0 1px 0 #183048;padding:6px 0}
.active{background-color:#FF0;border-color:#ADA}


Unknown end tag for &lt;/style&gt;


<p align="center" class="closeWIndowF"><a href="/login">Click Vào Đây Hoặc Login Trên Thanh Navlinks

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;


<div id="StickyWin">
<div class="modalWrap modal_jslint show jqDrag">
<div class="modalHeading">
<h3>Thông báo

Unknown end tag for &lt;/h3&gt;


<span onclick="$('#StickyWin').css('opacity','0').hide();" class="close">Close

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div class="modalBody">
<div id="alertFMvi">
<p>Có lỗi xảy ra, refresh trang để thử lại!

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://invision.chinhphuc.info/h96-page">

Unknown end tag for &lt;/script&gt;



```


Xong ^^~

```
(function(E){E.fn.drag=function(L,K,J){if(K){this.bind("dragstart",L)}if(J){this.bind("dragend",J)}return!L?this.trigger("drag"):this.bind("drag",K?K:L)};var A=E.event,B=A.special,F=B.drag={not:":input",distance:0,which:1,dragging:false,setup:function(J){J=E.extend({distance:F.distance,which:F.which,not:F.not},J||{});J.distance=I(J.distance);A.add(this,"mousedown",H,J);if(this.attachEvent){this.attachEvent("ondragstart",D)}},teardown:function(){A.remove(this,"mousedown",H);if(this===F.dragging){F.dragging=F.proxy=false}G(this,true);if(this.detachEvent){this.detachEvent("ondragstart",D)}}};B.dragstart=B.dragend={setup:function(){},teardown:function(){}};function H(L){var K=this,J,M=L.data||{};if(M.elem){K=L.dragTarget=M.elem;L.dragProxy=F.proxy||K;L.cursorOffsetX=M.pageX-M.left;L.cursorOffsetY=M.pageY-M.top;L.offsetX=L.pageX-L.cursorOffsetX;L.offsetY=L.pageY-L.cursorOffsetY}else{if(F.dragging||(M.which>0&&L.which!=M.which)||E(L.target).is(M.not)){return}}switch(L.type){case"mousedown":E.extend(M,E(K).offset(),{elem:K,target:L.target,pageX:L.pageX,pageY:L.pageY});A.add(document,"mousemove mouseup",H,M);G(K,false);F.dragging=null;return false;case!F.dragging&&"mousemove":if(I(L.pageX-M.pageX)+I(L.pageY-M.pageY)<M.distance){break}L.target=M.target;J=C(L,"dragstart",K);if(J!==false){F.dragging=K;F.proxy=L.dragProxy=E(J||K)[0]}case"mousemove":if(F.dragging){J=C(L,"drag",K);if(B.drop){B.drop.allowed=(J!==false);B.drop.handler(L)}if(J!==false){break}L.type="mouseup"}case"mouseup":A.remove(document,"mousemove mouseup",H);if(F.dragging){if(B.drop){B.drop.handler(L)}C(L,"dragend",K)}G(K,true);F.dragging=F.proxy=M.elem=false;break}return true}function C(M,K,L){M.type=K;var J=E.event.handle.call(L,M);return J===false?false:J||M.result}function I(J){return Math.pow(J,2)}function D(){return(F.dragging===false)}function G(K,J){if(!K){return}K.unselectable=J?"off":"on";K.onselectstart=function(){return J};if(K.style){K.style.MozUserSelect=J?"":"none"}}})(jQuery);function alertFMvi(tieude,noidung){$("#StickyWin .modalHeading h3").text(tieude);$("#StickyWin #alertFMvi").html(noidung);$("#StickyWin").css("opacity",1).show()}

$(function () {
$('#StickyWin').bind('dragstart', function (event) {
if (!$(event.target).is('h3')) return false;
return $(this).css('opacity', .5).clone().addClass('active').insertAfter(this);
}).bind('drag', function (event) {
$(event.dragProxy).css({
top: event.offsetY + 70,
left: event.offsetX + 150
});
}).bind('dragend', function (event) {
$(event.dragProxy).remove();
$(this).animate({
top: event.offsetY + 70,
left: event.offsetX + 150,
opacity: 1
})
});
$("a[href^='/login']").click(function () {
alertFMvi('Bảng đăng nhập', '<div style="width: 305px; height:75px; padding: 0pt ! important; margin: -5px -5px -17px;"><form action="/login" method="post" name="form_login"><div style="text-align: left;" class="user_login_form main-box center"><p style="padding: 5px; position: relative;"><label><span class="genmed" style="">Tài khoản :

Unknown end tag for &lt;/span&gt;

<input type="text" class="post" size="10" name="username" style="position: absolute; left: 80px;">

Unknown end tag for &lt;/label&gt;

&nbsp;<label style="float:right"><input type="checkbox" class="radio" name="autologin" checked="checked"><span class="gensmall">Ghi nhớ?

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/p&gt;

<p style="padding: 5px; position: relative;"><label><span class="genmed">Mật khẩu :&nbsp;

Unknown end tag for &lt;/span&gt;

<input type="password" class="post" size="10" name="password" style="position: absolute; left: 80px;">

Unknown end tag for &lt;/label&gt;

&nbsp;<input type="hidden" name="redirect" value="' + location.href + '"><input type="submit" style="float: right ! important; padding: 4px 7px! important; border: 0;font-style: normal!important;font-weight: 500;border-radius: 0;margin-top: -5px;" class="mainoption" name="login" value="Đăng nhập" />

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;

'); $('#StickyWin').show(); return false;
})
})```