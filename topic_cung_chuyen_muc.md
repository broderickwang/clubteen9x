![http://img254.imageshack.us/img254/6778/21020258.png](http://img254.imageshack.us/img254/6778/21020258.png)

```
    <script>
$(function () {
$.ajax({
url: "/feed/?f={FORUM_ID}",
success: function (a) {
$(".post-entry:first").after('<div style="width:400px;background:#eee;padding:1px;margin-top:221px;"><div id="cungchuyenmuc" style="padding:10px 20px;background:#fff;border:1px solid #ddd;"><div class="title">B\u00e0i g\u1eedi c\u00f9ng chuy\u00ean m\u1ee5c

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
12 < $(a).find("title").length ? so = 7 : so = $(a).find("title").length;
for (i = 2; i < so; i++) $('<a href="' + $(a).find("link:eq(" + i + ")").text() + '" style="overflow: hidden; position: absolute; text-overflow: ellipsis; white-space: nowrap; width: 34%;" >' + $(a).find("title:eq(" + i + ")").text() + "

Unknown end tag for &lt;/a&gt;

<br/>").appendTo("#cungchuyenmuc")
}
})
});


Unknown end tag for &lt;/script&gt;




```





![http://i16.servimg.com/u/f16/17/22/61/18/05439f10.jpg](http://i16.servimg.com/u/f16/17/22/61/18/05439f10.jpg)


```
    <script>$(function () {
$.ajax({url: "/feed/?f={FORUM_ID}",success: function (a) {
$(".post-entry:first").after('<ul id="cungchuyenmuc"><a href="/f{FORUM_ID}-forum" style="color:#333;text-decoration:none!important;font:bold 13px tahoma">Bài viết cùng chuyên mục :

Unknown end tag for &lt;/a&gt;

<div style="height:1px;background:url(http://i16.servimg.com/u/f16/16/18/15/10/113.png)repeat-x left;margin:10px 0px;width:97%">

Unknown end tag for &lt;/div&gt;

');
22 < $(a).find("title").length ? so = 22 : so = $(a).find("title").length;for (i = 2; i < so; i++)
$('<li><span><a href="' + $(a).find("link:eq(" + i + ")").text() + '">' + $(a).find("title:eq(" + i + ")").text() + "

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;

").appendTo("#cungchuyenmuc")}})});

Unknown end tag for &lt;/script&gt;


<style>
ul#cungchuyenmuc{margin-top:3px;}
#cungchuyenmuc li{margin-left: 40px;list-style: decimal-leading-zero outside none;margin-top:2px;width:45%;float:left}
#cungchuyenmuc span{position: absolute;display:inline-block;width:380px;height:16px;overflow:hidden;margin-bottom:-3px;}
#cungchuyenmuc a{text-decoration:none!important;color:#333;font: 12px Tahoma;}
#cungchuyenmuc a:hover{color:#ba3814;}

Unknown end tag for &lt;/style&gt;

```