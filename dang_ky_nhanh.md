![http://i12.servimg.com/u/f12/17/70/81/78/12-27-11.png](http://i12.servimg.com/u/f12/17/70/81/78/12-27-11.png)

**ACP >> General >> Forum >> Security >> Security Administration**
Giới hạn số tài khoản có thể tạo trong 24h cho một IP:
IP address accounts creation limit, for each 24 hours : 10

**ACP >> Users & Groups >> Users >> Users options**
Cho phép tự kích hoạt tài khoản:
New accounts activation : Automatic activation
Bỏ yêu cầu nhập mã captcha:
Confirmation code : No
Cho phép đăng ký thành viên:
Allow new members : Yes

**ACP >> Users & Groups >> Users >> Profiles >> Profile fields >> Modify**
Bỏ hết các field bắt buộc khi đăng ký:
Necessarily filled ? No

**ACP >> Display >> Templates >> General >> overall\_footer\_begin**
Tìm:```
    <div id="pun-foot">```
Đặt trước nó:```
    <!-- BEGIN switch_user_logged_out -->
<div id="qick_reg" class="main">
<div id="reg_loder">Đang kiểm tra dữ liệu...

Unknown end tag for &lt;/div&gt;


<p id="reg_tip">Bạn phải điền đầy đủ thông tin đăng ký.

Unknown end tag for &lt;/p&gt;


<a href="javascript:void(0)" class="modal_close">

Unknown end tag for &lt;/a&gt;


<form onsubmit="submit_reg(); return false" action="/register?agreed=true&step=2" method="post" name="post" id="ucp">
<div class="main-content frm" style="border: 0px none;">
<fieldset class="frm-set multi" style="border: 0px none; margin:0;background-color: #FFF;">
<dl><dt><label>Tên tài khoản :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" type="text" id="username_reg" name="username" value="" size="25" maxlength="25" />
<div id="name_reg" class="check_reg">
<div class="pwd_img reg_er kytu">Số ký tự phải từ 6 trở lên

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_er loi">Hãy chọn tài khoản khác

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_ok">Có thể dùng tài khoản này

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl><dt><label>Địa chỉ E-mail :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" class="ltr" type="text" id="email" name="email" value="" size="25" maxlength="64" />
<div id="email_reg" class="check_reg">
<div class="pwd_img reg_er">Không sử dụng địa chỉ này

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_wa">E-mail sẽ được kiểm sau

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl><dt><label>Mật khẩu :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" class="ltr" type="password" id="password_reg" name="password" value="" size="25" maxlength="25" />
<div class="check_reg" id="cont_pwd">
<div class="pwd_img reg_er kytu">Số ký tự phải từ 6 trở lên

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_er trung">Trùng tên đăng nhập

Unknown end tag for &lt;/div&gt;


<div class="pwd_img" id="pwd_bad" style="display: none;">Quá đơn giản

Unknown end tag for &lt;/div&gt;


<div class="pwd_img" id="pwd_middle" style="display: none;">Tạm ổn

Unknown end tag for &lt;/div&gt;


<div class="pwd_img" id="pwd_good" style="display: none;">Vãi

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl><dt><label>Gõ lại mật khẩu :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input autocomplete="off" type="password" id="password_confirm" size="25" maxlength="25" name="password_confirm" class="inputbox narrow" />
<div id="pass_co" class="check_reg">
<div class="pwd_img reg_er">Chưa đúng

Unknown end tag for &lt;/div&gt;


<div class="pwd_img reg_ok">Chính xác

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl class="frm-buttons">
<p style="padding: 10px 0px 0px; text-align: center;">
<input class="button2" type="submit" name="submit" value="Đăng ký" />
<input class="button2" type="reset" name="reset" value="Làm mới" />


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://baivong.forumclan.com/12848.js">

Unknown end tag for &lt;/script&gt;


<!-- END switch_user_logged_out -->```

http://baivong.forumclan.com/12848.js
```
var shortPass="bad",badPass="bad",goodPass="good",strongPass="strong";function passwordStrength(a,b){score=0;if(""==a)return null;if(4>a.length)return shortPass;if(void 0!=b&&a.toLowerCase()==b.toLowerCase())return badPass;score+=4*a.length;score+=1*(checkRepetition(1,a).length-a.length);score+=1*(checkRepetition(2,a).length-a.length);score+=1*(checkRepetition(3,a).length-a.length);score+=1*(checkRepetition(4,a).length-a.length);a.match(/(.*[0-9].*[0-9].*[0-9])/)&&(score+=5);a.match(/(.*[!,@,#,$,%,,&,*,?,_,~].*[!,@,#,$,%,,&,*,?,_,~])/)&&(score+=5);a.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(score+=10);a.match(/([a-zA-Z])/)&&a.match(/([0-9])/)&&(score+=15);a.match(/([!,@,#,$,%,,&,*,?,_,~])/)&&a.match(/([0-9])/)&&(score+=15);a.match(/([!,@,#,$,%,,&,*,?,_,~])/)&&a.match(/([a-zA-Z])/)&&(score+=15);if(a.match(/\w+$/)||a.match(/\d+$/))score-=10;0>score&&(score=0);100<score&&(score=100);return 34>score?badPass:68>score?goodPass:strongPass}function checkRepetition(a,b){res="";for(i=0;i<b.length;i++){repeated=!0;for(j=0;j<a&&j+i+a<b.length;j++)repeated=repeated&&b.charAt(j+i)==b.charAt(j+i+a);j<a&&(repeated=!1);repeated?(i+=a-1,repeated=!1):res+=b.charAt(i)}return res}function submit_reg(){$("#reg_tip").text("\u0110ang ki\u1ec3m tra d\u1eef li\u1ec7u...");$("#qick_reg .reg_er").each(function(){"block"==$(this).css("display")&&$(this).parent().parent().addClass("error")});$("#qick_reg input").each(function(){""==$(this).val()&&$(this).parent().addClass("error")});$("#qick_reg .error").length?$("#reg_tip").text("L\u1ed7i th\u00f4ng tin \u0111\u0103ng k\u00fd."):($("#reg_loder").show(),$.post("/register?agreed=true&step=2",{username:$("#qick_reg #username_reg").val(),email:$("#qick_reg #email").val(),"profile_field_3_-10":$("#qick_reg #profile_field_3_-10").val(),password:$("#qick_reg #password_reg").val(),submit:"Save"},function(a){if($(a).find("p.message").length)$("#reg_tip").text("Qu\u1ea3n tr\u1ecb vi\u00ean \u0111\u00e3 gi\u1edbi h\u1ea1n s\u1ed1 l\u1ea7n t\u1ea1o t\u00e0i kho\u1ea3n h\u00f4m nay."),$("#reg_loder").fadeOut(500),$("#qick_reg #ucp").hide();else if($("#reg_tip").text("\u0110ang ki\u1ec3m tra t\u00e0i kho\u1ea3n, m\u1eadt kh\u1ea9u..."),$(a).find("#form_confirm").length)$("#qick_reg .frm-buttons input[name='confirm_pass'], #qick_reg .frm-buttons input[name='auth[]']").remove(),$(a).find("input[name='confirm_pass'], input[name='auth[]']").prependTo("#qick_reg .frm-buttons"),$("#reg_tip").text("\u0110ang ki\u1ec3m tra E-mail..."),$.post("/register?agreed=true&step=2",{password_confirm:$("#qick_reg #password_confirm").val(),"auth[]":$("#qick_reg input[name='auth[]']:first").val(),username:$("#qick_reg #username_reg").val(),email:$("#qick_reg #email").val(),"profile_field_3_-10":$("#qick_reg #profile_field_3_-10").val(),password:$("#qick_reg #password_reg").val(),confirm_pass:$("#qick_reg input[name='confirm_pass']").val(),submit:"Save"},function(a){if($(a).find("p.message a").length)$("#reg_tip").text("\u0110\u0103ng k\u00fd th\u00e0nh c\u00f4ng."),$.post("/login",{username:$("#qick_reg #username_reg").val(),password:$("#qick_reg #password_reg").val(),login:"true"},function(){window.location.reload()});else if(-1!=$(a).find("p.center:first span").text().indexOf("e-mail address")||-1!=$(a).find("p.center:first span").text().indexOf("\u0111\u1ecba ch\u1ec9 email"))$("#reg_tip").text("\u0110\u1ecba ch\u1ec9 E-mail kh\u00f4ng h\u1ee3p l\u1ec7 ho\u1eb7c \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng."),$("#reg_loder").fadeOut(500),$("#qick_reg #email").parent().addClass("error"),$("#email_reg .reg_er").show().next().hide()});else if(0==$(a).find("p.center:first span").text().indexOf("Sorry, but this username has")||-1!=$(a).find("p.center:first span").text().indexOf("\u00ean truy c\u1eadp"))$("#reg_tip").text("T\u00e0i kho\u1ea3n \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ho\u1eb7c b\u1ecb c\u1ea5m."),$("#reg_loder").fadeOut(500),$("#qick_reg #username_reg").parent().addClass("error"),$("#name_reg div").hide(),$("#name_reg .reg_er.loi").show();else if(0==$(a).find("p.center:first span").text().indexOf("Your password")||0==$(a).find("p.center:first span").text().indexOf("M\u1eadt kh\u1ea9u"))$("#reg_tip").text("M\u1eadt kh\u1ea9u ph\u1ea3i t\u1eeb 6 - 32 k\u00fd t\u1ef1 v\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c tr\u00f9ng t\u00e0i kho\u1ea3n."),$("#reg_loder").fadeOut(500),$("#qick_reg #password_reg, #qick_reg #password_confirm").val("").parent().addClass("error"),$("#qick_reg #cont_pwd div, #qick_reg #pass_co div").hide()}))}function conpass(){""!=$("#qick_reg #password_confirm").val()?($("#qick_reg #password_confirm").parent().removeClass("error"),$("#password_reg").val()!=$("#qick_reg #password_confirm").val()?$("#pass_co .reg_er").show().next().hide():$("#pass_co .reg_er").hide().next().show()):$("#pass_co div").hide()}function check_ma_reg(){""!=$("#qick_reg #email").val()?($("#qick_reg #email").parent().removeClass("error"),isEmail($("#qick_reg #email").val())?$("#email_reg .reg_er").hide().next().show():$("#email_reg .reg_er").show().next().hide()):$("#email_reg div").hide()}function check_un_reg(){setTimeout(function(){""!=$("#qick_reg #username_reg").val()?($("#qick_reg #username_reg").parent().removeClass("error"),6>$("#qick_reg #username_reg").val().length?($("#name_reg .reg_er.kytu").show(),$("#name_reg .reg_er.loi, #name_reg .reg_ok").hide()):$.get("/search?mode=searchuser&fieldname=username",{search_username:$("#qick_reg #username_reg").val(),time:timestamp()},function(a){$("#name_reg div").hide();$(a).find("#username_list").val()==$("#qick_reg #username_reg").val()?$("#name_reg .reg_er.loi").show():$("#name_reg .reg_ok").show()})):$("#name_reg div").hide()},1500)}function isEmail(a){return/((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\_{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(a)}(function(a){a.fn.extend({leanModal:function(b){function f(b){a("#lean_overlay").fadeOut(200);a(b).css({display:"none"})}var e=a("<div id='lean_overlay'>

Unknown end tag for &lt;/div&gt;

");a("body").append(e);b=a.extend({top:100,overlay:0.5,closeButton:null},b);return this.each(function(){var d=b;a(this).click(function(b){var c=a(this).attr("href");a("#lean_overlay").click(function(){f(c)});a(d.closeButton).click(function(){f(c)});a(c).outerHeight();var e=a(c).outerWidth();a("#lean_overlay").css({display:"block",opacity:0});a("#lean_overlay").fadeTo(200,d.overlay);a(c).css({display:"block",position:"fixed",opacity:0,"z-index":999,left:"50%","margin-left":-(e/2)+"px",top:d.top+"px"});a(c).fadeTo(200,1);b.preventDefault()})})}})})(jQuery);$("a[href='/register']").attr({"class":"fmvi_register",href:"#qick_reg"});$(".fmvi_register").leanModal({top:200,overlay:0.4,closeButton:".modal_close"});$("#qick_reg input[name='reset']").click(function(){$("#reg_tip").text("B\u1ea1n ph\u1ea3i \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\u00f4ng tin \u0111\u0103ng k\u00fd.");$("#qick_reg dd").removeClass("error");$("#qick_reg .pwd_img").hide()});$("#qick_reg #username_reg").keyup(function(){check_un_reg();$("#qick_reg #username_reg").focus(function(){check_un_reg()})});$("#qick_reg #email").keyup(function(){check_ma_reg();$("#qick_reg #email").focus(function(){check_ma_reg()})});$("#qick_reg #password_confirm").keyup(function(){conpass()});$("#qick_reg #password_reg, #qick_reg #username_reg").keyup(function(){if(""!=$("#qick_reg #password_reg").val())if($("#qick_reg #password_reg").parent().removeClass("error"),6>$("#qick_reg #password_reg").val().length)$("#cont_pwd div").hide(),$("#cont_pwd .reg_er.kytu").show();else if($("#cont_pwd .reg_er.kytu").hide(),$("#qick_reg #password_reg").val()==$("#qick_reg #username_reg").val())$("#cont_pwd div").hide(),$("#cont_pwd .reg_er.trung").show();else switch($("#cont_pwd .reg_er.trung").hide(),passwordStrength($("#qick_reg #password_reg").val(),$("#qick_reg #username_reg").val())){case"bad":$("#pwd_middle,#pwd_good").hide();$("#pwd_bad").show();break;case"good":$("#pwd_good,#pwd_bad").hide();$("#pwd_middle").show();break;case"strong":$("#pwd_middle,#pwd_bad").hide(),$("#pwd_good").show()}else $("#cont_pwd div, #pass_co div").hide(),$("#qick_reg #password_confirm").val("");""!=$("#qick_reg #password_confirm").val()&&conpass()});```
**ACP >> Display >> Pictures and Colors >> Colors >> CSS Stylesheet**
```
    /* Quick register - www.fmvi.vn */
#qick_reg #cont_pwd, #qick_reg .check_reg{float:none;height:24px;width:180px;padding:2px 0!important}
#pwd_bad, .reg_er{background:url(http://i15.servimg.com/u/f15/16/58/89/73/001_3010.png) no-repeat scroll left center transparent;color:red}
#pwd_middle, .reg_wa{background:url(http://i15.servimg.com/u/f15/16/58/89/73/alert_10.png) no-repeat scroll left center transparent;color:blue}
#pwd_good, .reg_ok{background:url(http://i15.servimg.com/u/f15/16/58/89/73/001_0610.png) no-repeat scroll left center transparent;color:green}
#qick_reg .pwd_img{float:left;height:24px;line-height:24px;text-align:left;width:180px;padding:0 0 0 30px}
#qick_reg  dd{padding:0}
#reg_tip{background-color:#FCF8E3;color:#C09853;border-color:#FBEED5;margin-bottom:20px;border:1px solid;padding:5px 7px}
#reg_loder{background:url(http://i15.servimg.com/u/f15/16/58/89/73/ajax-l11.gif) no-repeat scroll center 130px rgba(255, 255, 255, 0.65);color:#086CC5;display:none;font-family:Comic Sans MS;font-weight:700;height:100%;left:0;line-height:350px;position:absolute;text-align:center;top:0;width:100%}
#qick_reg{box-sizing:border-box;-o-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;background-color:#FFF;border:1px solid rgba(0,0,0,0.333);box-shadow:0 4px 16px rgba(0,0,0,0.2);color:#000;outline:0 none;position:absolute;width:500px;display:none;padding:40px}
.modal_close{background:url(http://i40.servimg.com/u/f40/17/70/81/78/close-10.png) repeat scroll 0 0 transparent;content:"";height:11px;position:absolute;right:17px;top:17px;width:11px}
#lean_overlay{position:fixed;z-index:700;top:0;left:0;height:100%;width:100%;background:#666;display:none}
.error input{border:1px solid #F5A7A7;background-color:#F2DEDE}```