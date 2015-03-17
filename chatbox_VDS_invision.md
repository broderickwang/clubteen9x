Demo: http://invision.chinhphuc.info/forum (Chỉ hiện với thành viên, cái màu đen đen vàng vàng ở góc phải í... lười chụp ảnh quá _"__)_

Code này phần lớn không cần chỉnh sửa gì từ code cho bb2 của vandonstar, mình cx chả để hide nữa Mắc cỡ
Tạo 1 widget mới, nhét cái này vào (phân quyền cho members trở lên) :
```


<script type="text/javascript" src="http://invision.chinhphuc.info/h102-">

Unknown end tag for &lt;/script&gt;

<div class="tuychinh_chat" onmouseover="hien_tuychinh();" onmouseout="an_tuychinh();"><div class="anhientuychinh_chat">
<input class="autologinchatvds" type="checkbox" checked="checked" /><span class="gensmall"> Auto Login

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;

<div class="chatvds_menu" style="display:inline;" onclick="chatvds_login();">Chatbox IFC [<span id="mes_chatvds">Off

Unknown end tag for &lt;/span&gt;

] - Online [<span id="onl_chatvds">?

Unknown end tag for &lt;/span&gt;

] Away [<span id="away_chatvds">?

Unknown end tag for &lt;/span&gt;

]

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<iframe id="chatvds" src="/chatbox/index.forum?archives=1">

Unknown end tag for &lt;/iframe&gt;



```
Cái này nhét vào CSS:

```


.chatvds_menu{display:inline;cursor:pointer;background-color:#333;color:#ff0;text-align:center;border:1px solid #999;padding:5px;font-size:12px}
.chatvds_menu:hover{background-color:#000}
.chatvds_menu span{font-weight:700}
.thongdiep_chat{position:fixed;bottom:30px;right:80px}
.anhientuychinh_chat{display:none;margin-right:5px;background:#000;border:1px solid #999;padding:5px;color:#fff;font-size:11px}
.tuychinh_chat{z-index:999;height:20px;position:fixed;bottom:-1px;right:5px;font-family:Tahoma, Arial;font-size:12px}
#chatvds{background:url(http://i48.servimg.com/u/f48/13/58/60/43/mainco13.png);z-index:999;position:fixed;right:5px;bottom:30px;width:70%;height:53%;display:none;border:1px solid #999;border-top-left-radius:6px 6px!important;border-top-right-radius:6px 6px!important;margin:0;padding:0}
#mes_chatvds,#onl_chatvds,#away_chatvds{color:#fff}
#mes_chat,#onl_chat,#away_chat{color:red}
#show_color{display:block}
.iwest img{max-height:50px}```
```
if (my_getcookie('check_loginchat') != 'off') {
setTimeout('chatvds_login_on();', 2000);
} else {
$('.autologinchatvds').removeAttr('checked');
};

function trangthai_chatvds() {

old_tn = my_getcookie('old_messenger');
new_tn = $('#chatvds').contents().find('#chatbox p').length;

new_messenger = parseInt(new_tn) - parseInt(old_tn);
if ($('#chatvds').contents().find('#chatbox_option_co').css('display') != 'none') {
new_messenger = 'Off';
} else if ((new_messenger < 0) || ($('#chatvds').css('display') != 'none')) {
new_messenger = '?';
};

$('#mes_chatvds').html(new_messenger);

onl = $('#chatvds').contents().find('#chatbox_members ul.online-users:eq(0) li');
away = $('#chatvds').contents().find('#chatbox_members ul.online-users:eq(1) li');
if (away[0]) {
$('#onl_chatvds').html(onl.length);
$('#away_chatvds').html(away.length);
} else {
tt = $('#chatvds').contents().find('#chatbox_members h4').text();
if (tt == 'Online') {
$('#onl_chatvds').html(onl.length);
$('#away_chatvds').html('0');
};
if (tt == 'Away') {
$('#onl_chatvds').html('0');
$('#away_chatvds').html(onl.length);
};
};

if ($('#chatvds').css('display') != 'none' && $('#chatvds').contents().find('#chatbox_option_disco').css('display') != 'none') {
luutru_tn();
};

if (new_messenger != 'Off') {
setTimeout('trangthai_chatvds();', 3000);
};
};

function chatvds_login() {
$('#chatvds').slideToggle(function () {
if ($('#chatvds').css('display') != 'none') {
chatvds_login_on();
};
if ($('#chatvds').contents().find('#chatbox_option_disco').css('display') != 'none') {
luutru_tn();
};
});
};

function chatvds_login_on() {
if ($('#chatvds').contents().find('#chatbox_option_co').css('display') != 'none') {
$('#chatvds')[0].contentWindow.CB_disconnect();
};
setTimeout('trangthai_chatvds();', 2000);
};

function luutru_tn() {
old_messenger = $('#chatvds').contents().find('#chatbox p').length;
my_setcookie('old_messenger', old_messenger, 1);
};

function hien_tuychinh() {
$('.anhientuychinh_chat').css('display', 'inline');
if ($('.autologinchatvds').attr('checked')) {
my_setcookie('check_loginchat', 'on', 1);
} else {
my_setcookie('check_loginchat', 'off', 1);
};
};

function an_tuychinh() {
$('.anhientuychinh_chat').css('display', 'none');
};```