Chức năng:



> Làm bảng khảo sát trượt dọc forum, chỉ hiển thị một Icon bên trái, không chiếm nhiều diện tích diễn đàn.
> Bảng khảo sát chỉ được hiển thị khi người dùng Click, không làm chậm diễn đàn khi khởi động.
> Xem trước kết quả mà không cần tải lại trang không làm ảnh hưởng đến hoạt động của người dùng.
> Có thể tắt bảng khảo sát vĩnh viễn do được lưu cookie nên không gây khó chịu cho người xem.
> Sử dụng ajax lấy bảng khảo sát trực tiếp từ bài viết, không sử dụng mod\_polls nên có thể làm nhiều bảng khảo sát cùng lúc.



Hướng dẫn:

Bước 1: ACP - Display - Templates - Ganeral - overall\_footer: Thêm vào bên dưới  	`{PROTECT_FOOTER`} 	 (hoặc trước ` </body> 	`) đoạn code sau

```


<div id="poll">
<span>
X


Unknown end tag for &lt;/span&gt;


<div id="polls">
<div align="center">
<img border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/vtlai_10.gif"
/>
<br/>
Đang tải dữ liệu....


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="poll">
<span>
X


Unknown end tag for &lt;/span&gt;


<div id="polls">
<div align="center">
<img border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/vtlai_10.gif"
/>
<br/>
Đang tải dữ liệu....


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="danhgiaFMvi">
<span>
X


Unknown end tag for &lt;/span&gt;


<img src="http://i48.servimg.com/u/f48/16/58/89/73/stock_10.png" alt="poll FMvi"
/>


Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
var y = "/t77-topic";
"remove" == my_getcookie("pollFMvi") && $("#danhgiaFMvi, #poll").remove();
$("#danhgiaFMvi span").click(function () {
$("#danhgiaFMvi").remove();
my_setcookie("pollFMvi", "remove", !0)
});
$("#poll span").click(function () {
$("#poll").hide()
});
$("#danhgiaFMvi img").click(function () {
$("#poll").show().find("#polls").load(y + " #pollTopic", function () {
$("a[href$='?vote=viewresult']").click(function () {
$("#polls").html('<div align="center"><img border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/vtlai_10.gif"/><br/>\u0110ang t\u1ea3i d\u1eef li\u1ec7u....

Unknown end tag for &lt;/div&gt;

').load($(this).attr("href") + " #pollTopic");
return !1
})
})
});


Unknown end tag for &lt;/script&gt;


```

Chú ý: Thay /t77-topic trong code trên bằng liên kết đến bài khảo sát của bạn.

Bước 2: ACP - Display - Templates - Ganeral - viewtopic\_body: Tìm {POLL\_DISPLAY} và thay nó bằng code sau

```


<div id="pollTopic">
{POLL_DISPLAY}


Unknown end tag for &lt;/div&gt;




```

Bước 3: ACP - Display - Pictures and Colors - Color - CSS Stylesheet: Thêm vào đoạn CSS sau

```


#poll{display:none;background:none repeat scroll 0 0 padding-box rgba(0,0,0,0.65);border-radius:4px 4px 4px 4px;font-family:Tahoma;font-size:12px;left:50%;top:50%;color:#fff;position:fixed;margin-top:-150px;height:auto;width:406px;margin-left:-200px;padding: 5px 5px 15px;}
#poll span{font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10;margin-left:380px;margin-top:5px}
#poll .options{display:none}
#poll dt{width:160px!important}
#poll dd{width:100%!important}
#poll .main-head{background-color: rgb(24, 64, 94); font-size: 14px; padding: 5px;}
#poll .frm-buttons{padding: 10px 0 0 90px}
#poll .h2{background-color:transparent;border:0 none;color:#FF0;font-family:Comic Sans Ms;font-variant:small-caps;font-weight:500;letter-spacing:-1px;opacity:1;padding-left:10px;padding-right:5px;text-decoration:none;text-shadow:1px 1px 1px #444;text-transform:capitalize}
#poll input[name=submit]{-moz-border-bottom-colors:none;-moz-border-image:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;-moz-transition:all .218s ease 0;background-image:0;border-radius:3px 3px 3px 3px;box-shadow:0 0 1px #FFF inset;color:#555;font-size:11px;font-weight:700;height:2.95em;text-shadow:0 1px 0 #FFF;border-color:#CCC #CCC #AAA;border-style:solid;border-width:1px;padding:0 .91em}
#pollFMvi p, #pollFMvi h4{margin-bottom:10px}
#pollFMvi fieldset{border:0;margin:5px;padding:0}
#danhgiaFMvi{background:none repeat scroll 0 0 padding-box rgba(0,0,0,0.65);border-radius:4px 4px 4px 4px;left:20px;top:20px;color:#fff;position:fixed;padding:5px}
#danhgiaFMvi span, #xMasmenu span{font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10}

```

[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org