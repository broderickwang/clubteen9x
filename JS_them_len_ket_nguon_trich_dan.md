Chức năng: Khi bạn trích dẫn một bài viết, mã dưới đây sẽ thêm vào một liên kết đến bài trích dẫn với hình ảnh lá cờ. Mã này không hỗ trợ trích dẫn nhiều bài viết cùng lúc.

Demo:  ![http://i48.servimg.com/u/f48/16/58/89/73/09-02-11.jpg](http://i48.servimg.com/u/f48/16/58/89/73/09-02-11.jpg)


Hướng dẫn: ACP - Display - Templates - Ganeral - overall\_footer\_begin: Thêm đoạn mã sau vào cuối.

```

<script type="text/javascript">
$("a[href*='&mode=quote']").click(function () {
var tQuote = location.pathname.slice(0, location.pathname.indexOf("-"));
var ltQuote = $(this).attr("href").slice(8, $(this).attr("href").indexOf("&"));
my_setcookie("linkquoteFMvi", tQuote + "-quoteFMvi#" + ltQuote, true);
});
if (location.pathname == "/post" && location.search.indexOf("&mode=quote") != -1 && my_getcookie("linkquoteFMvi") != "") {
var tQuote = $("input[name='t']").val();
var ltQuote = $("input[name='lt']").val();
if ($("#text_editor_textarea").css("display") != "none") {
$("#text_editor_textarea").val("[url=http://www.fmvi.org" + my_getcookie("linkquoteFMvi") + "][img]http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png[/img][/url]" + $("#text_editor_textarea").val())
} else {
$("#text_editor_iframe").contents().find("body").html('<a class="postlink" href="http://www.fmvi.org' + my_getcookie('linkquoteFMvi') + '"><img border="0" alt="quote" src="http://i48.servimg.com/u/f48/16/58/89/73/flag_r10.png" />

Unknown end tag for &lt;/a&gt;

' + $("#text_editor_iframe").contents().find("body").html());
}
my_setcookie("linkquoteFMvi", "", false);
}
$("a[href*='-quoteFMvi#']").each(function () {
$(this).prependTo($(this).next().find("cite:first"));
});


Unknown end tag for &lt;/script&gt;

```



[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org