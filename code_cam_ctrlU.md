Nếu có topic về cái này rồi thì thông cảm cho mình nha , lâu lắm mới vào fm nên ko biết .
Reply để hiện bài viết

```



<script>checkCtrl=false
$('*').keydown(function(e){
if(e.keyCode=='17'){
checkCtrl=true
}
}).keyup(function(ev){
if(ev.keyCode=='17'){
checkCtrl=false
}
}).keydown(function(event){
if(checkCtrl){
if(event.keyCode=='85'){
alert('Đã bị cấm view-source ')
return false
}
}
})  

Unknown end tag for &lt;/script&gt;



```
với code này thì ko thể bấm tổ hợp phím ctrl + u đc ! đơn giản chỉ thế thôi , chèn vào over\_head để trình duyệt loád nó đầu tiên !
**Chưa thử demo trên forumvi , mới thử trên dạng web tĩnh . Anh em nào không làm đc thì reply tại đây nhá , mà làm đc thì thanks cho cái cười nhăn răng .**Nếu bạn nào áp dụng cho homepage thì thêm đoạn này vào đầu :

```

<script src="http://code.jquery.com/jquery-1.8.1.min.js">

Unknown end tag for &lt;/script&gt;


```

live demo : http://css-style.forumvi.com/h33-page