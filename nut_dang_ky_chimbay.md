Cái này có thể làm thành nhiều thứ khác
Demo luôn: http://deezsign.forumotion.com/h2-page
Cuộn từ trên xuống dưới nhá hehe

Code:
-Javascript(bỏ vô "Javascript codes management"):

```

$(window).scroll(function(){var scrollTop=((window.scrollY-0));
if ( $(this).scrollTop() > 0 ){
$("[id='reg-bird']").css('margin-right',(-177+scrollTop*2));
$("[id='reg-bird']").css('margin-top',(0+scrollTop/4))
}
});```


-HTML(Lần này có đặt đâu cũng dc cÆ°Æ¡Ì€i lÆ¡Ìn)

```

<img src="http://i33.servimg.com/u/f33/17/73/03/65/bird10.gif" id="reg-bird" style="position: fixed;width:80px;top:20%;right:-300px;z-index: 98;">
<img src="http://i33.servimg.com/u/f33/17/73/03/65/bird10.gif" id="reg-bird" style="position: fixed;top:30%;right:-177px;z-index: 99;">
<a href="register" id="reg-bird" style="position: fixed;top:30%;width:130px;right:-300px;z-index: 101;"><img src="http://i33.servimg.com/u/f33/17/73/03/65/reg-bu10.png" alt="Đăng ký" title="Tham gia ngay!"/>

Unknown end tag for &lt;/a&gt;


<img src="http://i33.servimg.com/u/f33/17/73/03/65/bird10.gif" id="reg-bird" style="position: fixed;width:100px;top:40%;right:-250px;z-index: 100;">
<div style="height:3000px">

Unknown end tag for &lt;/div&gt;



```

Cảnh báo: Bạn nào có hình con chim bay nào đẹp đẹp share mình với Váº«y tay