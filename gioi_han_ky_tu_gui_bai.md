tìm trong viewtopic\_body code:
![http://i1053.photobucket.com/albums/s479/lythuongkiet/2-3.jpg](http://i1053.photobucket.com/albums/s479/lythuongkiet/2-3.jpg)
```

{QUICK_REPLY_FORM}

```

Thay bằng code:

```

<a name="quickreply">

Unknown end tag for &lt;/a&gt;


<iframe style="display:none;" class="post_vds" name="guinhanhz">

Unknown end tag for &lt;/iframe&gt;


<div class="tbpost">

Unknown end tag for &lt;/div&gt;


<div  class="imgloadpost"  style="display:none;"><img src="http://i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"/>Đang gửi....

Unknown end tag for &lt;/div&gt;


{QUICK_REPLY_FORM}

```

Chèn cuối viewtopic\_body code:

```

<script type="text/javascript">
var banquyen= "Giới Hạn Ký Tự Style TeenLyThuongKiet.Net";
$('.imgloadpost').clone().appendTo('.frm-buttons');
$('input[name=preview]').one('click', function () {
ktgui = 0;
$("form[action='/post']").submit(function () {
if (kiemtragui()) {
$("input[type='submit']").hide();
$('.frm-buttons .imgloadpost').show();
setTimeout('xemtruoc();', 200);
} else {
return false;
};
});
});
$("input.xoabai").click(function(){
$(this).parents(".baigui").html('<div id=tbpost align=center>Đã xóa khỏi cơ sở dữ liệu

Unknown end tag for &lt;/div&gt;

');

});

function xemtruoc() {
if (ktgui == 0) {
if ($('.post_vds').contents().find('.post').length) {
$('.tbpost').html('<br><hr>');
$('.post_vds').contents().find('.post:first').appendTo('.tbpost');
$('.post_vds').contents().empty();
$('.tbpost').css({
'color': 'black',
'background-color': 'white'
}).slideDown();
$('.frm-buttons .imgloadpost').hide();
$('input[name=post],input[name=preview]').show();
return false;
} else setTimeout('xemtruoc();', 200);
};
};

$('input[name=post]').one('click', function () {
ktgui = 1;
$("form[action='/post']").submit(function () {
if (kiemtragui()) {
guibainhanh();
} else {
return false;
};
});
});
$("form[action='/post']").attr('target','guinhanhz');
function kiemtragui() {
min = 10;
kt = $('textarea#text_editor_textarea').val().replace('<br>', '').replace(/ /gi, '').length;
if (kt < min) {
$('.tbpost').html('Bài viết quá ngắn!<br>Số ký tự tối thiểu là ' + min + ' ký tự.<br>Bạn cần viết thêm ' + (min - kt) + ' ký tự nữa mới có thể gửi bài.');
$('.tbpost').slideDown();
$('textarea#text_editor_textarea').focus();
return false;
} else {
return true;
};
};

function guibainhanh() {
$("input[type='submit']").hide();
$('.tbpost').slideUp();
$('.frm-buttons .imgloadpost').show();
setTimeout('guibaiviet(ktgui);', 200);
};

function guibaiviet(ktgui) {
if (ktgui == 1) {
if ($('.post_vds').contents().find('.message:contains(Bài của bạn đã được chuyển)').length || $('.post_vds').contents().find('.message:contains(Your message has been entered successfully)').length) {
chenbai();
$("form[action='/post']").hide();
$('.tbpost').text('Thành công, Bài viết của bạn đã được gửi. Ấn F5 Load lại để xem lại cảm nhận bạn vừa viết ^^');
$('.tbpost').slideDown().css('color', 'green');
$('.post_vds').remove();
return false;
} else if ($('.post_vds').contents().find("form[action='/post']").length && $('.post_vds').contents().find('.p-hidden:contains(A new message has been posted while you were writing your response. Please)').length) {
chenbai();
$('.main-content.frm:first').empty();
$('.post_vds').contents().find("form[action='/post']").appendTo('.main-content.frm:first');
$("form[action='/post']").attr('target', 'guinhanhz');
$('.imgloadpost').clone().appendTo('.frm-buttons');
$('.tbpost').text('Thông báo, Chủ đề này vừa có người gửi bài trước bạn. Bạn có muốn tiếp tục gửi bài?');
$('.post_vds').contents().empty();
$('.tbpost').css({
'color': 'red',
'background-color': 'wheat'
}).slideDown();
$('input[name=prevent_modif]').hide();
$("form[action='/post']").focus().submit(function () {
guibainhanh();
});
return false;
} else if ($('.post_vds').contents().find('.main .main-content p:contains(Flood control is active on this forum, please wait)').length) {
$('.tbpost').text($('.post_vds').contents().find('.main .main-content p:contains(Flood control is active on this forum, please wait)').text());
$('.post_vds').contents().empty();
$('.tbpost').text($('.tbpost').text().replace('second(s) before replying or posting', 'giây(s) trước khi trả lời hoặc gửi bài').replace('Flood control is active on this forum, please wait', 'Phát hiện bạn gửi bài quá nhanh, xin đợi'));
$('.tbpost').css({
'color': 'red',
'background-color': 'wheat'
}).slideDown();
$('.frm-buttons .imgloadpost').hide();
$('input[name=post]').show();
return false;
} else {
setTimeout('guibaiviet(ktgui);', 200);
};
};
};


function chenbai() {
if ($('.main-head.clearfix:contains(Thông điệp) strong:eq(0)').text() == $('.main-head.clearfix:contains(Thông điệp) strong:eq(1)').text()) {
gtlink = $('.baigui:last .posthead h2 strong:eq(0)').text();
} else {
gtlink = parseInt($('.main-head.clearfix:contains(Thông điệp) strong:eq(1)').text()) * 10 - 9;
};
link = location.href.replace('http://a1-annhon3.forumvi.com', '').split("-")[0].split("p")[0] + 'p' + gtlink + '-topic';
$('<div class=postcuoi><div  align=center><img src="http://i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"/>Đang gửi bài viết.....

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

').appendTo('.toanbo:last').load(link + ' .toanbo .baigui:last',function(){ hehe();});
};



Unknown end tag for &lt;/script&gt;






```





Mọi người muốn thay đổi số ký tự giới hạn thì thay số 10 thành số tương ứng:

```

min = 10;

```

Cái này mình dùng từ khi mới tập tọe tách code FM nên cũng ko nhớ ai là tác giả của Tút này nữa, ai bik bảo mình để mình bổ sung nhé. nhưng nhìn code hình như do http://Vandonstar.com là tác giả.