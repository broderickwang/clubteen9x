Chèn vào nơi muốn nó hiển thị (gồm nút like và send)

```

<div class="fb-like" data-href="{FORUM_URL}{TOPIC_URL}" data-send="true" data-layout="button_count" data-width="450" data-show-faces="true">

Unknown end tag for &lt;/div&gt;



```
Chèn code này vào footer hoặc hearder hoặc bất cứ nơi nào hỗ trợ JS (đặt trong thẻ BODY)

```

<div id="fb-root">

Unknown end tag for &lt;/div&gt;


<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1&appId=271827022848335";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

Unknown end tag for &lt;/script&gt;




```

Coment Facebook
http://developers.facebook.com/docs/reference/plugins/comments/
điền địa chỉ trang của bạn sau đó get code
Thay địa chỉ của bạn trong code vừa tạo bằng địa chỉ {FORUM\_URL}{TOPIC\_URL}

Được code phía dưói, chèn code này vào nơi muốn hiển thị

```

<div class="fb-comments" data-href="{FORUM_URL}{TOPIC_URL}" data-num-posts="2" data-width="800">

Unknown end tag for &lt;/div&gt;


```


và code này vào nơi hỗ trợ JS
```


(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1&appId=271827022848335";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


```



trả lời để thấy nội dung cuoi