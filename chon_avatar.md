Bạn vào QLTT --> Announcement:

> Activate announcements : Có
> Announcements display : Homepage
> (nhớ là chỉ Homepage thôi nhé, cái này lỗi với shop avatar với lại Shop Auto đấy Wink )
> Scrolling : Deactivate
> Tạo một trang mới, chèn code này vào:
```
                <script type="text/javascript">jQuery(function(){jQuery('img.thikthiclick').click(function(){var srcavatar=jQuery(this).attr('src');jQuery("input[name='avatarurl']").val(srcavatar);jQuery('#testest img').removeClass().hide();jQuery("#areysure").fadeIn(1000);jQuery('#testest p.1').hide();jQuery('#keduocchon').attr("src",srcavatar).fadeIn(1)});jQuery("#yesavatar").click(function(){jQuery("#register").submit().fadeIn(1);jQuery("#areysure").hide();jQuery('#testest p.2').show()});jQuery("#noavatar").click(function(){jQuery('#testest img').addClass("thikthiclick").fadeIn(1);jQuery('img#keduocchon').hide();jQuery("#areysure").hide();jQuery('#testest p.1').show()});jQuery('#thongbaoavatar').html('<p id="loadingfmviavatar"><img border="0" alt="Loading" src="http://i43.servimg.com/u/f43/16/03/04/56/13x13p10.gif" title="Loading"> Đang tải dữ liệu...

Unknown end tag for &lt;/p&gt;

');jQuery('<span class="dueytavatar"/>').load('/profile?mode=editprofile&page_profil=avatars input[name="username"]',{limit:25},function(){jQuery(this).hide().appendTo("#testest").fadeIn(1);var usernamemem=jQuery("#testest .dueytavatar input[name='username']").val();jQuery('<input type="hidden" value="'+usernamemem+'" name="username">').appendTo("#register")});jQuery('<span class="dueytavatar"/>').load('/profile?mode=editprofile&page_profil=avatars input[name="user_id"]',{limit:25},function(){jQuery(this).hide().appendTo("#testest").fadeIn(1);var useridmem=jQuery("#testest .dueytavatar input[name='user_id']").val();jQuery('<input type="hidden" value="'+useridmem+'" name="user_id">').appendTo("#register")});jQuery('<span class="dueytavatar"/>').load('/profile?mode=editprofile&page_profil=avatars input[name="email"]',{limit:25},function(){jQuery(this).hide().appendTo("#testest").fadeIn(1);var emailmem=jQuery("#testest .dueytavatar input[name='email']").val();jQuery('<input type="hidden" value="'+emailmem+'" name="email"><input type="hidden" value="'+emailmem+'" name="current_email">').appendTo("#register");jQuery('p#loadingfmviavatar').remove();jQuery("#testest").fadeIn(3000)});jQuery('#testest p.2 a').click(function(){jQuery("#testest, #thongbaoavatar").remove();my_setcookie('dongavatar',0,1,1)});if(my_getcookie('dongavatar')=="0"){jQuery("#testest, #thongbaoavatar").remove()};jQuery("a.mainmenu[rel='nofollow'][href*='/login']:not('a#logout')").each(function(){jQuery("#testest, #thongbaoavatar").remove();});});

Unknown end tag for &lt;/script&gt;

<div align="center" id="testest" style="display:none;position: fixed; top: 20px; left:10px; background: #195f9c; color: white; padding: 2px 5px;border-radius: 3px;font-size: 11px;font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;"><span style="display:block;"><img style="display:none;" id="keduocchon" border="2" alt="avatarhoangsa" title="Avatar " width="180px" height="238px" >

Unknown end tag for &lt;/span&gt;







<span style="display:block;">



<img class="thikthiclick" border="0" alt="avatarhoangsa1" src="http://i50.servimg.com/u/f50/12/70/14/53/2710.gif" title="Avatar 1" width="90px" height="100px">



<img class="thikthiclick" border="0" alt="avatarhoangsa2" src="http://i50.servimg.com/u/f50/12/70/14/53/3610.gif" title="Avatar 2" width="90px" height="100px" style="display:inline;">





Unknown end tag for &lt;/span&gt;









<span style="display:block;">



<img class="thikthiclick" border="0" alt="avatarhoangsa3" src="http://i50.servimg.com/u/f50/12/70/14/53/5310.gif" title="Avatar 3" width="90px" height="100px" >



<img class="thikthiclick" border="0" alt="avatarhoangsa4" src="http://i50.servimg.com/u/f50/12/70/14/53/3310.gif" title="Avatar 4" width="90px" height="100px" style="display:inline;">





Unknown end tag for &lt;/span&gt;







<iframe name="avatarreload" height="0px" width="0px" frameborder="0">

Unknown end tag for &lt;/iframe&gt;

<form target="avatarreload" name="register" id="register" method="post" enctype="multipart/form-data" action="/profile"><input type="hidden" value="" name="avatarurl" class="post"><input type="hidden" value="avatars" name="page_profil"><input type="hidden" value="editprofile" name="mode"><input type="hidden" value="true" name="agreed"><input type="hidden" value="" name="coppa"><div style="display:none; padding: 5px" id="areysure"><input type="submit" name="submit" value="Chấp nhận" id="yesavatar">    <input type="button" value="Hủy bỏ" id="noavatar">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/form&gt;

<p class="1">Chọn avatar <br>Always smile, my friend <img src="http://r18.imgfast.net/users/1813/30/30/34/smiles/650269930.gif"/>

Unknown end tag for &lt;/p&gt;

<p style="display:none;" class="2">Đã chọn ảnh đại diện này. <a style='color:red' href='#avatar-2/9'>[Đóng]

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/div&gt;

<div align="center" id="thongbaoavatar" style="width:180px;position: fixed; top: 20px; left:10px; background: #195f9c; color: white; magin: 5px;border-radius: 3px;font-size: 11px;font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;">

Unknown end tag for &lt;/div&gt;

```