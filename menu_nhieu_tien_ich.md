![http://i70.servimg.com/u/f70/18/14/82/31/111.jpg](http://i70.servimg.com/u/f70/18/14/82/31/111.jpg)

Cho cái này vào Css :
```

#conectFor * {
font-size: 12px;
}
#conectFor{
padding: 13px;

padding-right : 20px;
text-align: right;
background: url(http://i.imgur.com/tKiSR.png);
border-bottom: 2px solid #0099FF;
font: 15px Tahoma;
height: 15px;
display: block;
color: #F1F1F1;
position: relative;
top: 0;
left: 0;
right: 0;
}
#conectFor a{
color:#0099FF;
font-family:Arial;
padding:8px 5px ;
margin:0 1px;
text-decoration:none;
}
#conectFor a:hover{
color:#111;
border-radius:5px 5px 0 0;
-moz-border-radius:5px 5px 0 0;
-webkit-border-radius:5px 5px 0 0;
-o-border-radius:5px 5px 0 0;
background:#0099FF;
}
#conectFor a:hover ul{display:inline;}
#conectFor ul {
margin-top: -1px;
z-index:1;
border-radius: 0px 0px 5px 5px;
-moz-border-radius: 0px 0px 5px 5px;
-webkit-border-radius: 0px 0px 5px 5px;
-o-border-radius: 0px 0px 5px 5px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
-o-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
top: 100%;
width: 390px;
padding:20px 13px;
color: #333;
background: #161616 url(URL_BACKGROUND) no-repeat bottom right;
border-bottom: 1px solid #0099FF;
list-style: none;
display: none;
float: left;
right: 0em;
position: absolute;
}
#conectFor ul li{
float: left;
width: 47%;
display: inline;
text-align:left;
margin:5px;
}
#conectFor ul li a{color:#0099FF; background-image:none !important;}
#conectFor ul li a:hover{color:#8F8F8F; background:transparent;}

#conectFor a[href="/profile?mode=editprofile"] {
background-position: right;
background-repeat: no-repeat;
padding-right: 10px;
background-image: url(http://i42.servimg.com/u/f42/17/32/13/00/dropdo10.png);
}

#conectFor a[href="/profile?mode=editprofile"]:hover {
background-image: url(http://i42.servimg.com/u/f42/17/32/13/00/dropdo11.png);
}



```

Tiếp theo
MODULES >> HTML & JAVASCRIPT >>Javascript codes management
tạo 1 js mới
Title **: Menu
Placement : In all the pages
Javascript Code** :

```

$(document).ready(function(){
var nick = ($('#logout').length) ? $('#logout img').attr('alt').replace('Sair', '').replace('[', '').replace(']', '') : '' ;
var con=($('#logout').length)?'<a href="/profile?mode=editprofile" style="position: relative;">Xin chào  <b> '+nick+'

Unknown end tag for &lt;/b&gt;

<ul>

Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/a&gt;

<a href="/login?logout=1">Thoát

Unknown end tag for &lt;/a&gt;

' : 'Chào bạn, hãy!<a href="/login"style="position: relative;">Login

Unknown end tag for &lt;/a&gt;

<a href="/register">Đăng ký

Unknown end tag for &lt;/a&gt;

';$('body').prepend('<span id="conectFor"> '+con+'

Unknown end tag for &lt;/span&gt;

');$('#conectFor ul').prepend('<li><a href="/profile?mode=editprofile">Thông tin

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/profile?mode=editprofile&page_profil=preferences">Tùy chọn

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/profile?mode=editprofile&page_profil=signature">Chữ ký

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/search?search_id=draftsearch">Nháp

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/profile?mode=editprofile&page_profil=friendsfoes">Bạn bè

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/profile?mode=editprofile&page_profil=attachments">Phụ lục

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/profile?mode=editprofile&page_profil=avatars">Thay avatar

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/search?search_id=watchsearch"class="offp">Chủ đề chưa trả lời

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/search?search_id=favouritesearch"target="_blank">Chủ đề yêu thích

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li><a href="/search?search_id=newposts"target="_blank">Bài viết mới

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

')});

```

Xong !