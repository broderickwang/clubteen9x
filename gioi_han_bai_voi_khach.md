Giới hạn bài viết cho khách
Viết bởi Việt K - http://c3zone.net
Nguồn: http://diendan.chinhphuc.info/forum


Bước 1: Tạo một trang HTML mới, copy đoạn code này vào (hoặc thay đổi style khác đi nếu bạn muốn)

```

<div class="borderwrap">
<div class="maintitle floated clearfix">
<h2>Bạn đã hết quyền xem bài viết

Unknown end tag for &lt;/h2&gt;


<div class="contract" id="bfguest" onclick="toggleCategory('fguest');">   

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<table cellpadding="0" cellspacing="0" id="fguest" class="ipbtable">
<thead>
<tr>
<th class="foruma">Thông báo

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/thead&gt;


<tfoot>
<tr>
<td colspan="4">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tfoot&gt;


<tbody>
<tr>
<td class="row2 icon" style="padding-right: 0px; padding-left: 45px;">
<div style="padding:5px;margin: 5px;font-weight:bold">Chào bạn ! <img src="http://www.c3zone.net/users/2315/72/47/45/smiles/996190.gif"><br>Có vẻ bạn thích xem những topic từ IFC a~~~ ^^ . Cảm ơn bạn đã ghé thăm, nhưng đã quá số lượt xem cho phép rồi. Sao bạn không <a href="/register"><font color="red">đăng ký một tài khoản

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/a&gt;

 và hoạt động ủng hộ forum chứ, chỉ 30 giây thôi !! Chúc bạn có những giây phút vui vẻ <img src="http://www.c3zone.net/users/2315/72/47/45/smiles/269539.gif"><br>
<a style="float:right;padding-left:10px" title="Click vào đây để đăng ký ^^" href="/register"><img width="200" src="http://www.spybubblereviewscam.com/wp-content/uploads/2010/10/SpyBubble-Register.gif">

Unknown end tag for &lt;/a&gt;


<a style="float:right;padding-left:10px" title="Click vào đây để đăng nhập ^^" href="/login"><img width="200" src="http://i44.servimg.com/u/f44/15/64/85/86/login10.png">

Unknown end tag for &lt;/a&gt;


<br>
Đăng nhập vào IFC, bạn sẽ được hưởng nhiều quyền lợi hơn là chỉ một vị khách viếng bình thường i~~~ <img src="http://r26.imgfast.net/users/2615/25/32/47/smiles/103263.gif"/> <br><br>Nếu bạn đã là thành viên xin vui lòng <a href="/login">đăng nhập

Unknown end tag for &lt;/a&gt;

 để tắt thông báo này <img src="http://illiweb.com/fa/i/smiles/icon_exclaim.gif">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<script>
$(function () {
$('.module').remove()
});


Unknown end tag for &lt;/script&gt;



```

Bước 2: Tạo 1 file js đặt In the topics, copy code này vào:

```


$(function () {
if ($("#logout").length < 1) {
count = parseInt(my_getcookie("count")) || 0;
count < 5 ? my_setcookie("count", ++count) : location.href = '/h133-page';
}
});

```

> Thay số 5 trong code trên bằng số bài viết bạn muốn cho khách xem.
> Thay /h133-page trong code trên bằng link dẫn đến trang HTML bạn vừa tạo ở bước 1.