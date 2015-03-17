demo :



![http://i16.servimg.com/u/f16/17/22/61/18/90720810.png](http://i16.servimg.com/u/f16/17/22/61/18/90720810.png)
nó có 1 số ưu và nhược điểm mà mình nói ra thì dài lắm :D
thui bạn nào dùng thì dùng khác biết ưu nhược của nó hí hí

ở đây mình chỉ làm thành viên đang online thui
sợ làm cả cái đã online 24h và sinh nhật thì sợ nó lag :D

đầu tiên vào index body tìm

```

{LOGGED_IN_USER_LIST}

```

sửa thành
```

<div class="avatarondav">    {LOGGED_IN_USER_LIST} 

Unknown end tag for &lt;/div&gt;



<style>

.avatarondav .davx img {
border: 1px solid #DDD;
height: 25px;
margin: 0 5px;
padding: 1px;
width: 25px;
}
.avatarondav .davx:hover img {
cursor: pointer;
position: absolute;
width: 150px;
height: 150px;
background-color: white;
}


Unknown end tag for &lt;/style&gt;



<script type="text/javascript">
$(document).on('ready',function(){$('.avatarondav a').each(function(){var rondav=$(this).attr('href');$(this).prepend('<a href="'+rondav+'" class="davx"><img src="http://www.hotrofm.com/users/1416/39/08/64/avatars/gallery/123_bm10.jpg"  />

Unknown end tag for &lt;/a&gt;

');$(this).children('a').load(rondav+' div.main-content.clearfix.center img:eq(0)')})});


Unknown end tag for &lt;/script&gt;



```


thế là xong đọc gì nữa :D



Copy vui lòng ghi nguồn http://www.hotrofm.com