Ghi chú: BBcode notes được Việt K phát triển dựa trên plugin WP-Note cho Wordpress của tác giả Luke : http://geeklu.com/2009/01/wp-note/ và bây giờ, được baivong chuyển sang script để sử dụng cho mọi phiên bản của Forumotion.
Code giúp tạo ra một ghi chú nổi bật trong bài viết, dựa vào BBcode table.

Demo: bbcode10.png

Hướng dẫn: ACP - Modules - HTML & JAVASCRIPT - Javascript codes management - Create a new javascript:

> Title **: BBcode Notes
> Placement : In all the pages
> Javascript Code** :

```


$(function () {
$("<div style=\"display:inline!important\" id=\"text_editor_select_controls\"><div style=\"visibility:hidden\" class=\"select\" id=\"notes\"><button onclick=\"bbfontstyle('[table class=noteclassic][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"/users/2611/10/63/87/album/note10.png\">Classic note

Unknown end tag for &lt;/button&gt;

<br /><button onclick=\"bbfontstyle('[table class=notetip][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"/users/2611/10/63/87/album/tip10.png\">Tip note

Unknown end tag for &lt;/button&gt;

<br /><button onclick=\"bbfontstyle('[table class=notewarning][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"/users/2611/10/63/87/album/warn10.png\">Warning note

Unknown end tag for &lt;/button&gt;

<br /><button onclick=\"bbfontstyle('[table class=noteimportant][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"/users/2611/10/63/87/album/imp10.png\">Important note

Unknown end tag for &lt;/button&gt;

<br /><button onclick=\"bbfontstyle('[table class=notehelp][tr][td]','[/td][/tr][/table]');selectWysiwyg(this,'notes');return false\"><img src=\"/users/2611/10/63/87/album/help10.png\">Help note

Unknown end tag for &lt;/button&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<button class=\"button2\" onclick=\"selectWysiwyg(this,'notes')\" onmouseover=\"helpline('BBcode notes')\" type=\"button\"><img src=\"/users/2611/10/63/87/album/inote10.gif\" />

Unknown end tag for &lt;/button&gt;

 <img src=\"http://illiweb.com/fa/wysiwyg/separator.png\" style=\"vertical-align: middle;\"> ").insertBefore("span#text_edit input.button2[value='Others']");
$(".noteclassic, .noteimportant, .notewarning, .notetip, .notehelp").css({
"width": "95%",
"border-radius": "10px 10px",
"-moz-border-radius": "10px 10px",
"-webkit-border-radius": "10px 10px",
"padding": "25px 20px 15px 80px",
"margin": "10px 0px 15px 5px",
"-webkit-box-shadow": "2px 2px 3px #999",
"-moz-box-shadow": "2px 2px 3px #999",
"min-height": "40px",
"height": "auto !important",
"height": "40px",
"overflow": "visible",
"position": "relative",
"top": "6px",
"left": "5px",
"border": "1px solid #999999",
"background-position": "20px 50%",
"background-repeat": "no-repeat",
"text-align": "justify"
});
$(".noteclassic").css({
"background-color": "#EEF",
"background-image": "url(http://i20.servimg.com/u/f20/14/50/49/34/note10.png)"
});
$(".noteimportant").css({
"background-color": "#FFC",
"background-image": "url(http://i20.servimg.com/u/f20/14/50/49/34/import10.png)"
});
$(".notewarning").css({
"background-color": "#FDD",
"background-image": "url(http://i20.servimg.com/u/f20/14/50/49/34/warnin10.png)"
});
$(".notetip").css({
"background-color": "#E4F6F8",
"background-image": "url(http://i20.servimg.com/u/f20/14/50/49/34/tip10.png)"
});
$(".notehelp").css({
"background-color": "#D8F3C9",
"background-image": "url(http://i20.servimg.com/u/f20/14/50/49/34/help10.png)"
})
});


```