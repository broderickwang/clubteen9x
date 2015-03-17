demo :        ![http://i43.servimg.com/u/f43/15/93/33/76/untitl28.jpg](http://i43.servimg.com/u/f43/15/93/33/76/untitl28.jpg)

Hiệu ứng này giúp chúng ta có 1 khung trả lời nhanh và hiệu ứng đẹp cười nhăn răng
Khi ấn vào Chữ Gửi Trả lời sẽ hiện ra 1 khung trả lời như Demo
nó sẽ làm ẩn đi khung trả lời nhanh ở cuối forum

Bắt đầu làm nào :


Bước 1 :
Cho đoạn sau vào Css :

```

/* -- BEGIN Pop-up reply box --*/
#quick_reply{
position:fixed;
top:30%;
left:35%;
background:#FFFFFF;
padding:10px;
border:1px solid #BCBCBC;
border-radius:4px;
-moz-border-radius:4px;
-webkit-border-radius:4px;
z-index:100;
box-shadow:0px 0px 3px rgba(0,0,0,0.2);
-webkit-box-shadow:0px 0px 3px rgba(0,0,0,0.2);
-moz-box-shadow:0px 0px 3px rgba(0,0,0,0.2);
display:none;
}

.raspunde{
position:fixed !important;
top:0px !important;
left:0px !important;
height:100%;
width:100%;
z-index:20;
opacity:0.7;
background:#000;
display:none;
}
/* -- END Pop-up reply box --*/
```


Bước 2 :
Module > HTML & Javascript :
```



$(function() {
// Modificari si adaugare buton inchidere
$('.copyright').append('<div class="raspunde">

Unknown end tag for &lt;/div&gt;

');
$('#quick_reply .right-box').append('    <button class="button2 closeqr" type="button"><img src="http://i44.servimg.com/u/f44/15/54/81/90/cross10.png" title="Inchide"/>

Unknown end tag for &lt;/button&gt;

');

// Efecte
if($('#quick_reply').length){
$('div.topic-actions .buttons a:nth-child(2)').attr('href', 'javascript:void(0);');
$('div.topic-actions .buttons a:nth-child(2)').click(function() {
$('.raspunde').fadeIn(500);
$('#quick_reply').fadeIn(500);
});

$('.button2.closeqr').click(function() {
$('.raspunde').fadeOut(250);
$('#quick_reply').fadeOut(250);
});
}
});

```

Bước 4 : Kick hoạt khung trả lời nhanh :
QLTL >> Messages and e-mails >> Cấu hình diễn đàn
Allow Quick Reply : Chọn có
thế là xong và ra chiêm ngưỡng cười nhăn răng