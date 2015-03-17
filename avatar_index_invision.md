![http://i34.servimg.com/u/f34/17/54/30/53/chaa_c11.png](http://i34.servimg.com/u/f34/17/54/30/53/chaa_c11.png)
Avatar người gửi cuối hiện ở Index\_box.
By: giObanii - avac (phpbb2)
Convert: miamor (Invision)


Tạo một file js:

> Title**: Avatar in index
> Placement: In the homepage
> Content:**```

// Avatar in index by giObanii (phpbb2)
// Convert by miamor (Invision)
// Do not delete those lines, please.
$(document).on('ready', function() {
$('.ipbtable.index-box tr .row1').prepend('<div class="avatar-index"><div>');
$('.ipbtable.index-box tr .row1 .avatar-index').each(function () {
var profileUser = $(this).parent().children('span').children('strong').children('a').attr('href');
$(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="No Avatar" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(profileUser + ' .box-content.profile.center:eq(0) img:eq(0)');
});
});
```

CSS:

```

.avatar-index { float: left; }
.avatar-index img { width: 40px; height: 40px; padding: 1px; border: 1px solid #DDD; margin: 0 5px; }

```
Nguồn: http://invision.forum.st/

P/s: Lần đầu tiên pót bài chia sẻ ở cntt thấy hồi hộp quá hi hi