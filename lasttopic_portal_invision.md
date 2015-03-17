Demo: http://invision.chinhphuc.info
(Trang Portal nhé, trong 4r dùng hàng mặc định ._.)
Cái này chả có gì nhiều đâu, chỉ là dùng feed xml load dữ liệu ra thôi sợ quá đi thôi
ai tinh í cx có thể chau chuốt hơn bằng cách nhét vào last mặc định để lấy thêm tên người gửi cuối và thời gian gửi cuối, nhưng nếu thế thì riêng cái recent sẽ phải load 2 cái sợ quá đi thôi load đừng hỏi sợ quá đi thôi_

Nói chung là ai thích làm thì làm thôi~ Tương đối đơn giản, mọi người nhét code này vào 1 widget rồi nhét vàođâu tùy thích: Ẩn bài viết

```

<div id="items">
<div id="itemsUl">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://invision.chinhphuc.info/h56-">

Unknown end tag for &lt;/script&gt;



```


```
$(function () {
var feed, f = GetParam("f");;
if (isNaN(f) || f == null) f = '';
else f = ("?f=" + f);
feed = "/feed" + f;
$.ajax({
type: "GET",
url: feed,
dataType: "xml",
success: function (xml) {
var c3 = $(xml).find('image:first');
$("#learn img").attr("src", c3.find('url').text());
$("#update").text($(xml).find('lastBuildDate:first').text());
$("#feedTitle").text(c3.find('title').text());
$(xml).find('item:lt(10)').each(function () {
var title = $(this).find('title').text();
var link = $(this).find('link ').text();
var creator = $(this).find('dc\\:creator,creator').text();
var pubDate = $(this).find('pubDate').text();
var category = $(this).find('category').text();
var comments = $(this).find('comments').text();
var description = $(this).find('description').text().trim();
if (description == "") description = "(empty)";
$("#itemsUl").append("<div class='mimi'><mi class='titmi'><a href='" + comments + "' title='" + title + "'>" + title + "

Unknown end tag for &lt;/a&gt;

<div class='des'><top>Thông tin

Unknown end tag for &lt;/top&gt;

<bod><br><br><h3>" + title + "

Unknown end tag for &lt;/h3&gt;

<br>" + description + "<br><br><hr><br><div class='time'>Khởi tạo lúc : <b>" + pubDate + "

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<div class='creator'>Người khởi tạo : <b>" + creator + "

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<div class='cat'>Category : <b>" + category + "

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/bod&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/mi&gt;

 - [<i>Created by

Unknown end tag for &lt;/i&gt;

 <a href='http://invision.chinhphuc.info/profile.forum?mode=viewprofile&u=" + creator + "'>" + creator + "

Unknown end tag for &lt;/a&gt;

]<span style='float:right'>" + category + "

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

");
/*                $(".topiccp").before("<a class='titmi' href='" + comments + "' title='" + title + "'>" + title + "<div class='des'><top>Thông tin

Unknown end tag for &lt;/top&gt;

<body>" + description + "<hr><div class='time'>Khởi tạo lúc : <b>" + pubDate + "

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<div class='creator'>Người khởi tạo : <b>" + creator + "

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;

<div class='cat'>Category : <b>" + category + "

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/a&gt;

<br>");*/
})
}
})
});



function GetParam(name) {
var match = new RegExp(name + "=([^&]+)", "i").exec(location.search);
if (match == null) {
match = new RegExp(name + "=(.+)", "i").exec(location.search)
}
if (match == null) {
return null
}
match = match + "";
result = match.split(",");
return result[1]
}```

Thế là xong phần chức năng. Nếu ai có muốn tạo style thêm chút thì sẽ cần đến CSS, trong code mình đã add sẵn tương đối đủ class & id rồi cười nhăn răng
Ai lười thì cx không cần thiết phải thay script mà vẫn làm đẹp được cười nhăn răng
Nhưng tốt nhất mn nên đem script về thay vào host riêng của mình cười nhăn răng

Đây là demo style của IFC :

```

.mimi{height:22px!important}
.mimi i{font-size:10px;color:#575757}
#itemsUl{font-size:11px}
.des{display:none}
.titmi:hover>.des{display:block;position:absolute;color:#111;border:1px solid #ddd;border-radius:4px;background:#FFF;padding:6px;max-width:350px;opacity:.95;margin-top:18px}
.des top{background:url(http://i15.servimg.com/u/f40/17/70/31/89/tcatbg10.gif) repeat-x;color:#fff;padding:10px;font-weight:700!important;border:0 solid #000;border-radius:4px 4px;margin-top:-16px!important;position:absolute;opacity:.9}

```
Nguồn: http://invision.chinhphuc.info .