![http://i34.servimg.com/u/f34/16/54/92/12/untitl11.jpg](http://i34.servimg.com/u/f34/16/54/92/12/untitl11.jpg)
ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title: Trích dẫn bài viết
> Placement: In the topics
> Javascript Code:


Phiên bản phpbb3

```

/* Avatar in index by giObanii phpbb3*/
$(document).on('ready', function() {
$('.topiclist.forums .row .lastpost').prepend('<div class="avatar-index"><div>');
$('.topiclist.forums .row .lastpost .avatar-index').each(function () {
var profileUserURL = $(this).parent().children('span').children('strong').children('a').attr('href');
$(this).html('<a href="' + profileUserURL + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="No Avatar" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(profileUserURL + ' .module:eq(0) img:eq(0)')
});
});
```

Phiên bản phpbb2

```

// Avatar in index by giObanii phpbb2
$(document).on('ready', function() {
$('.forumline tr .row3.over').prepend('<div class="avatar-index"><div>');
$('.forumline tr .row3.over .avatar-index').each(function () {
var profileUser = $(this).parent().children('span').children('span').children('strong').children('a').attr('href');
$(this).html('<a href="' + profileUser + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="No Avatar" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(profileUser + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
});
});
```


Chèn thêm vào css:

```

/* Avatar in index by giObanii phpbb3 và phpbb2 */
.avatar-index { float: left; }
.avatar-index img { width: 40px; height: 40px; padding: 1px; border: 1px solid #DDD; margin: 0 5px; }```

dành cho punbb nè.hihi
Đầu tiên, bạn tạo 1 trang js để lấy link với code sau:
ACP > Modules > HTML & JAVASCRIPT > Javascript codes management > Create a new javascript.
Trong đó :
Title **: Avatar hiện ngoài index\_box
Placement : không chọn gì hết (bỏ tất cả dấu tick đi)
Javascript Code** :
```

var versionForum='punbb';eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2.3(\'<0 4="5://6-7.8.9/a/b/1/c-d-e-\'+f+\'.1" g="h/i">

Unknown end tag for &lt;/0&gt;

\\j\');',20,20,'script|js|document|write|src|http|scripts|giobanii|googlecode|com|svn|trunk|forumotion|avatar|index|versionForum|type|text|javascript|n'.split('|'),0,{}))
```

Sau đó cầm link js vừa tạo vào Footer Begin cho code này vào :
Code:CHỌN TOÀN BỘ


&lt;script src="LINK JS CỦA BẠN" type="text/javascript"&gt;



&lt;/script&gt;




Tiếp theo vào Css cho cái này vào đầu
```

/* Avatar in index */
.avatar-index {float: left;}
.avatar-index img {width: 40px;height: 40px;background: #F4F4F4;border: 1px solid #DDD;margin: 0 5px;padding: 1px;}
.avatar-index img:hover {border: 1px dashed #CCC;}

```
Thế là xong
Chú ý : nếu xung đột Js các bạn hãy cho code ở bước 1 vào Footer End hoặc Header

Invision:```
$(document).on('ready', function() {
$('.ipbtable.index-box tbody td:last-child').prepend('<div class="avatar-index">');
$('.ipbtable.index-box tbody td:last-child .avatar-index').each(function () {
var profileUserURL = $(this).parent().children('span').children('strong').children('a').attr('href');
$(this).html('<a href="' + profileUserURL + '" class="avatar-index-enlace"><img src="http://cdn1.iconfinder.com/data/icons/basicset/user_64.png" alt="No Avatar" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(profileUserURL + ' #profile-advanced-right .box-content.profile img:eq(0)')
});
});```