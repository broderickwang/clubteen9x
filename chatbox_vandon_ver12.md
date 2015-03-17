Ghi chú: Code được viết bởi baivong, dựa trên mẫu Chatbox Vân Đồn Star Ver 1.1 (đã xin phép tác giả). Những chức năng đã thực hiện không khác nhiều so với ver 1.1:

> Code ngắn hơn 1000 ký tự so với ver 1.1
> Chức năng auto login hoạt động hiệu quả hơn, lưu cookie cho lựa chọn(ở ver 1.1 thì dù check hay ko nó vẫn chạy).
> 3 thông số new mess - online - away vẫn cho kết quả tương tự ver 1.1, chỉ khác một ít ở việc thể hiện kết quả. Nếu thành viên bị disconnected hoặc chưa đăng nhập thì nó sẽ hiện 3 chữ X.
> Khi thành viên mở chatbox thì new mess sẽ về 0, khi thành viên đóng chatbox thì new mess bắt đầu được tính, nếu mod xóa chatbox lúc này thì một chữ X sẽ hiện lên trong 1s và chuyển new mess về 0, bắt đầu tính lại, nếu thành viên mới đăng nhập thì new mess là số tin đang có trong chatbox.
> Thông số online - away tính theo số nick hiển thị trong chatbox.



Hướng dẫn:
Bước 1: ACP - Modules - Chatbox - Configuration:
ChatBox configuration

> Activate the ChatBox: Yes
> ChatBox display: Do not display



Bước 2: ACP - Display - Templates
Đặt code dưới đây vào index\_body hoặc overall\_footer

```


<style type="text/css">#chatvds_menu{cursor:pointer;display:inline}#autologinchat{display:none}#chatvds_menu:hover{background-color:#333;color:#ff0}#thongdiep_chat{position:fixed;bottom:30px;right:80px}#chatvds_menu,#autologinchat{background:none repeat scroll 0 0 #000;border:1px solid #999;float:left;margin:-6px 5px;padding:5px}#tuychinh_chat{display:none;z-index:999;height:20px;position:fixed;bottom:-1px;right:0;font-family:Tahoma, Arial;font-size:12px;font-weight:700}#chatfmvi{background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/mainco13.png);z-index:999;position:fixed;right:5px;bottom:30px;width:65%;height:50%;display:none;border:1px solid #999;margin:0;padding:0}#mes_chat,#onl_chat,#away_chat{color:red}

Unknown end tag for &lt;/style&gt;


<div id="tuychinh_chat" onmouseover="hien_tuychinh();" onmouseout="an_tuychinh();">
<div id="autologinchat">
<input type="checkbox" checked="checked" />
<span class="gensmall">Auto Login

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="chatvds_menu"><strong style="float:left">New message [
<span id="mes_chat">0

Unknown end tag for &lt;/span&gt;

] Online [
<span id="onl_chat">0

Unknown end tag for &lt;/span&gt;

] Away [
<span id="away_chat">0

Unknown end tag for &lt;/span&gt;

]

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<iframe id="chatfmvi" onload="firstchatfmvi()" src="/chatbox/index.forum?archives=1" onerror="firstchatfmvi)">

Unknown end tag for &lt;/iframe&gt;


<script type="text/javascript">
function firstchatfmvi() {
setInterval(function () {
if (-1 == $("#chatfmvi").contents().find("#chatbox p:first").text().indexOf("You are disconnected") && -1 == $("#chatfmvi").contents().find("p:first").text().indexOf("You must be connected to use the ChatBox")) {
var c = $("#chatfmvi").contents().find("#chatbox_members .away").next("ul").find("li").length,
d = $("#chatfmvi").contents().find("#chatbox_members .online").next("ul").find("li").length,
a, b;
"block" == $("#chatfmvi").css("display") && (null == my_getcookie("old_messenger") ? my_setcookie("old_messenger", 0, !0) : my_setcookie("old_messenger", $("#chatfmvi").contents().find("#chatbox p").length, !0));
a = Number($("#chatfmvi").contents().find("#chatbox p").length);
b = Number(my_getcookie("old_messenger"));
a < b ? (a = "X", my_setcookie("old_messenger", 0, !0)) : a -= b
} else c = d = a = "X";
0!=$("#pun-head a.mainmenu[href='/login']").length&&my_setcookie("old_messenger",0,!0);
$("#mes_chat").text(a);
$("#onl_chat").text(d);
$("#away_chat").text(c)
}, 1E3);
$("#tuychinh_chat").fadeIn(1E3);
$("#autologinchat").click(function () {
0 != $("#autologinchat input:checked").length ? my_setcookie("check_loginchat", "yes", !0) : my_setcookie("check_loginchat", "no", !0)
});
"no" == my_getcookie("check_loginchat") && $("#autologinchat input").attr("checked", !1);
$("#chatvds_menu").click(function () {
$("#chatfmvi").slideToggle();
0 != $("#autologinchat input:checked").length && "none" != $("#chatfmvi").contents().find("#chatbox_option_co").css("display") && $("#chatfmvi")[0].contentWindow.CB_disconnect()
})
}
function hien_tuychinh() {
$("#autologinchat").show()
}
function an_tuychinh() {
$("#autologinchat").hide()
};


Unknown end tag for &lt;/script&gt;



```

[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org