Reply bài viết nhanh dưới dạng Pop-up...
By: Không rõ nữa hừm Ruby đưa cho mình code luôn, trong code không thấy ghi tên bản quyền x\_x
Phiên bản gốc: phpbb3.
Convert: miamor.
Phiên bản: Invision.


> CSS:

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

> Tạo một file Javascript:
> > Title: Reply bài viết dưới dạng Pop-up...
> > Placement: In the topic
> > Content: Í.... Ẩn mất rồi hihi Reply để coi nhá hihi


> ```

$(function() {
// Reply bài viết dưới dạng Pop-up... Convert by miamor. Do not remove this line.
$('p.center').append('<div class="raspunde">

Unknown end tag for &lt;/div&gt;

');
$('#quick_reply .right').append('<button class="button2 closeqr" type="button"><img src="http://i44.servimg.com/u/f44/15/54/81/90/cross10.png" title="Inchide"/>

Unknown end tag for &lt;/button&gt;

');
if($('#quick_reply').length){
$('.posting-options .posting-buttons li:nth-child(2) a').attr('href', 'javascript:void(0);');
$('.posting-options .posting-buttons li:nth-child(2)').click(function() {
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

P/s: Cái này mà kết hợp rep quote k chuyển thì quá tuyệt luôn í hihi
Một lần nữa thank bi đã đưa ss code này nhé