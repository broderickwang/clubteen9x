![http://i49.servimg.com/u/f49/17/39/61/74/anh_ch10.png](http://i49.servimg.com/u/f49/17/39/61/74/anh_ch10.png)

```
    <script type="text/javascript">
$(function(){
if (Number($("a.mainmenu[href^='/privmsg'] strong").text()) > 0){
var a = $("a.mainmenu[href^='/privmsg'] strong").text();
var b = confirm("Bạn có "+a+" tin nhắn mới.Bạn có muốn đến hộp thư.");
if( b == true){location.href = '/privmsg?folder=inbox'};
};
});


Unknown end tag for &lt;/script&gt;

```




notme
```


<script type="text/javascript">
$(function () {
if (Number($("a.mainmenu[href^='/privmsg'] strong").text()) > 0) {
var a = $("a.mainmenu[href^='/privmsg'] strong").text();
var b = confirm("Bạn có " + a + " tin nhắn mới.Bạn có muốn đến hộp thư.");
if (b == true) {
location.href = '/privmsg?folder=inbox'
};
};
});


Unknown end tag for &lt;/script&gt;



```


ViệtK:

```



<script type="text/javascript">
$(function () {
if ($("#i_icon_mini_new_message").length) {
var pm = $("#i_icon_mini_new_message").attr("alt").match(/\d+/);
if (confirm("Bạn có " + pm + " tin nhắn mới.Bạn có muốn đến hộp thư.")) location.href = '/privmsg?folder=inbox'
};
});


Unknown end tag for &lt;/script&gt;


```


**Demo : Khi có tin nhắn mới code này sẽ làm hiện 1 hộp thoại rắc rối. Ấn ôk để vô xem thư ko có nó sẽ ko tha bạn đâu** Demoonline: Khamphait.vn

nguồn fmvi.vn