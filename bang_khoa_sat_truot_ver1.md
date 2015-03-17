Hướng dẫn:

Bước 1: ACP - Display - Templates - Ganeral - overall\_footer: Thêm vào bên dưới {PROTECT\_FOOTER} (hoặc trước ) đoạn code sau

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


<div id="danhgiaFMvi">
<span>
X


Unknown end tag for &lt;/span&gt;


<img src="http://i48.servimg.com/u/f48/16/58/89/73/stock_10.png" alt="poll FMvi"
/>


Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
if (my_getcookie("pollFMvi") == "remove") {
$("#danhgiaFMvi, #poll").remove();
};
$("#danhgiaFMvi span").click(function() {
$("#danhgiaFMvi").remove();
my_setcookie("pollFMvi", "remove", true);
});
$("#poll span").click(function() {
$("#poll").hide();
});
$("#danhgiaFMvi img").click(function() {
$("#poll").show().find("#polls").load("/portal #pollFMvi", function() {
$("a[href$='vote=viewresult']").click(function() {
$("#polls").html('<div align="center"><img border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/vtlai_10.gif"/><br/>Đang tải dữ liệu....

Unknown end tag for &lt;/div&gt;

').load($(this).attr("href") + " #pollFMvi");
return false;
});
});
});


Unknown end tag for &lt;/script&gt;



```


Bước 2: ACP - Display - Templates - Portal - mod\_poll: Thay toàn bộ bằng code sau

```

<div id="pollFMvi" class="module main">
<div class="main-head">
<a name="sondage">

Unknown end tag for &lt;/a&gt;


<h2>Bảng khảo sát

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
{POLL_DISPLAY}


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```



Bước 3: ACP - Display - Pictures and Colors - Color - CSS Stylesheet: Thêm vào đoạn CSS sau

```

#pollFMvi p, #pollFMvi h4{margin-bottom:10px}
#pollFMvi fieldset{border:0}
#pollFMvi h2{font-size:18px;background-color:transparent;border:0 none;color:#FF0;font-family:Comic Sans Ms;font-variant:small-caps;font-weight:500;letter-spacing:-1px;opacity:1;padding-left:10px;padding-right:5px;text-decoration:none;text-shadow:1px 1px 1px #444;text-transform:capitalize}
#pollFMvi .main-content{background-color:background;color:#FFF;float:left;line-height:18px;width:274px;padding:15px}
#poll{display:none;background:none repeat scroll 0 0 padding-box rgba(0,0,0,0.65);border-radius:4px 4px 4px 4px;font-family:Tahoma;font-size:12px;left:50%;top:50%;color:#fff;position:fixed;margin-top:-150px;height:auto;width:306px;margin-left:-150px;padding:5px}
#poll span{font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10;margin-left:280px;margin-top:10px}
#danhgiaFMvi{background:none repeat scroll 0 0 padding-box rgba(0,0,0,0.65);border-radius:4px 4px 4px 4px;left:20px;top:20px;color:#fff;position:fixed;padding:5px}
#danhgiaFMvi span{font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10}
#pollFMvi .main-head{background-color:#069;color:#DEDFDF;font-weight:400;padding:.7em 1.3em}
#pollFMvi input[name=submit]{-moz-border-bottom-colors:none;-moz-border-image:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;border-radius:3px 3px 3px 3px;box-shadow:0 0 1px #FFF inset;color:#555;font-size:11px;font-weight:700;height:2.95em;text-shadow:0 1px 0 #FFF;border-color:#CCC #CCC #AAA;border-style:solid;border-width:1px;padding:0 .91em}


```

Bước 4: Bật portal và đặt widget Polls vào vị trí bất kỳ. Khi người dùng Click vào bảng khảo sát thì dữ liệu sẽ được lấy từ đây.

Lưu ý: Để mod\_poll hoạt động bạn phải tạo bài viết có bảng khảo sát, và phải lựa chọn bảng khảo sát trong widget polls.

[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org