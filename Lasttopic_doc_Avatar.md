![http://i31.servimg.com/u/f31/17/71/02/24/grav_b10.png](http://i31.servimg.com/u/f31/17/71/02/24/grav_b10.png)
> Thực hiện:
> > Cài đặt, sắp xếp Widget: (phần bên phải í)


> Tạo 1 file javascript mới cho chạy In all the pages với nội dung như sau:
![http://i34.servimg.com/u/f34/15/64/85/86/grav_w10.png](http://i34.servimg.com/u/f34/15/64/85/86/grav_w10.png)
```


$(function () {
$('#right .module:eq(1)').addClass('recent');
$('#right .module:eq(1) a[href^="/t"]').addClass('lastpost');
});
$(document).on('ready', function () {
$('#right .module.borderwrap:last .box-content a.lastpost').prepend('<div class="avatar-index"><div>');
$('#right .module.borderwrap:last .box-content a.lastpost .avatar-index').each(function () {
var profileUser = $(this).parent('a').attr('href');
$(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="No Avatar" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(profileUser + ' .postprofile-details.postdetails dt:eq(0) img:eq(0)');
});
});



```