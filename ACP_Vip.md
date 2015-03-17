![http://i71.servimg.com/u/f71/17/59/85/75/acp310.png](http://i71.servimg.com/u/f71/17/59/85/75/acp310.png)
CSS:

```

#menu
{
width: 100%;
margin: 0;
padding: 10px 0 0 0;
list-style: none;
background: #111;
background: -moz-linear-gradient(#444, #111);
background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #111),color-stop(1, #444));
background: -webkit-linear-gradient(#444, #111);
background: -o-linear-gradient(#444, #111);
background: -ms-linear-gradient(#444, #111);
background: linear-gradient(#444, #111);


-moz-box-shadow: 0 2px 1px #9c9c9c;
-webkit-box-shadow: 0 2px 1px #9c9c9c;
box-shadow: 0 2px 1px #9c9c9c;
}

#menu li
{
float: left;
padding: 0 0 10px 0;
position: relative;
line-height: 0;
}

#menu a
{
float: left;
height: 25px;
padding: 0 25px;
color: #999;
text-transform: uppercase;
font: bold 12px/25px Arial, Helvetica;
text-decoration: none;
text-shadow: 0 1px 0 #000;
}

#menu li:hover > a
{
color: #fafafa;
}

*html #menu li a:hover /* IE6 */
{
color: #fafafa;
}

#menu li:hover > ul
{
display: block;
}

/* Menu phụ */

#menu ul
{
list-style: none;
margin: 0;
padding: 0;
display: none;
position: absolute;
top: 35px;
left: 0;
z-index: 999;
background: #444;
background: -moz-linear-gradient(#444, #111);
background: -webkit-gradient(linear,left bottom,left top,color-stop(0, #111),color-stop(1, #444));
background: -webkit-linear-gradient(#444, #111);
background: -o-linear-gradient(#444, #111);
background: -ms-linear-gradient(#444, #111);
background: linear-gradient(#444, #111);
-moz-box-shadow: 0 0 2px rgba(255,255,255,.5);
-webkit-box-shadow: 0 0 2px rgba(255,255,255,.5);
box-shadow: 0 0 2px rgba(255,255,255,.5);
-moz-border-radius: 5px;
border-radius: 5px;
}

#menu ul ul
{
top: 0;
left: 150px;
}

#menu ul li
{
float: none;
margin: 0;
padding: 0;
display: block;
-moz-box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
-webkit-box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
box-shadow: 0 1px 0 #111111, 0 2px 0 #777777;
}

#menu ul li:last-child
{
-moz-box-shadow: none;
-webkit-box-shadow: none;
box-shadow: none;
}

#menu ul a
{
padding: 10px;
height: 10px;
width: 130px;
height: auto;
line-height: 1;
display: block;
white-space: nowrap;
float: none;
text-transform: none;
}

*html #menu ul a /* IE6 */
{
height: 10px;
}

*:first-child+html #menu ul a /* IE7 */
{
height: 10px;
}

#menu ul a:hover
{
background: #0186ba;
background: -moz-linear-gradient(#04acec,  #0186ba);
background: -webkit-gradient(linear, left top, left bottom, from(#04acec), to(#0186ba));
background: -webkit-linear-gradient(#04acec,  #0186ba);
background: -o-linear-gradient(#04acec,  #0186ba);
background: -ms-linear-gradient(#04acec,  #0186ba);
background: linear-gradient(#04acec,  #0186ba);
}

#menu ul li:first-child > a
{
-moz-border-radius: 5px 5px 0 0;
border-radius: 5px 5px 0 0;
}

#menu ul li:first-child > a:after
{
content: '';
position: absolute;
left: 30px;
top: -8px;
width: 0;
height: 0;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-bottom: 8px solid #444;
}

#menu ul ul li:first-child a:after
{
left: -8px;
top: 12px;
width: 0;
height: 0;
border-left: 0;
border-bottom: 5px solid transparent;
border-top: 5px solid transparent;
border-right: 8px solid #444;
}

#menu ul li:first-child a:hover:after
{
border-bottom-color: #04acec;
}

#menu ul ul li:first-child a:hover:after
{
border-right-color: #04acec;
border-bottom-color: transparent;
}

#menu ul li:last-child > a
{
-moz-border-radius: 0 0 5px 5px;
border-radius: 0 0 5px 5px;
}

/* Clear 2 bên */
#menu:after
{
visibility: hidden;
display: block;
font-size: 0;
content: " ";
clear: both;
height: 0;
}

```
FOOTER END:
**bản phpbb2:**

```

<div name="{L_LOGIN_LOGOUT}">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
var inputString = $('div.gen strong a:eq(0)').attr('href');
var parts = inputString.split("tid=");
$(function(){
$('div[name="Thoát [ Tuấn Anh ]"]').after('<div style="position: fixed; width: 100px; left: 10px; top: 100px;">
<ul id="menu">
<li>
<a href="admin/index.forum?tid='+parts[1]+'" target="_blank">ACP

Unknown end tag for &lt;/a&gt;


<ul>
<li>
<a href="/admin/index.forum?part=themes&tid='+parts[1]+'" target="_blank">Display

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?mode=main&part=themes&sub=templates&tid='+parts[1]+'" target="_blank">Templates

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=110&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Idex_body

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=111&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Idex_box

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=133&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Footer_end

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=116&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Header

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=127&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Viewtopic

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=logos&mode=css&extended_admin=1&tid='+parts[1]+'" target="_blank">CSS

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?mode=portal&part=themes&sub=templates&tid='+parts[1]+'" target="_blank">Lasttopic

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_portal&t=904&l=portal&extended_admin=1&tid='+parts[1]+'">Recent_topic

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_portal&t=912&l=portal&extended_admin=1&tid='+parts[1]+'">Topposter

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="/admin/index.forum?part=modules&tid='+parts[1]+'" target="_blank">Module

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=modules&sub=html&tid='+parts[1]+'" target="_blank">HTML

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?mode=js&part=modules&sub=html&tid='+parts[1]+'" target="_blank">Javarscript

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="/admin/index.forum?part=users_groups&tid='+parts[1]+'" target="_blank">QLND và QLN

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=users_groups&sub=users&tid='+parts[1]+'" target="_blank">Xem thành viên

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?mode=avatar_profil2&part=users_groups&sub=users&tid='+parts[1]+'" target="_blank">Profile

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;





Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;

')
}) 

Unknown end tag for &lt;/script&gt;




bản punbb:

Code:              Chọn Toàn Bộ
<div name="{L_LOGIN_LOGOUT}">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
var inputString = $('p.center strong a:eq(0)').attr('href');
var parts = inputString.split("tid=");
$(function(){
$('div[name="Thoát [ Tuấn Anh ]"]').after('<div style="position: fixed; width: 100px; left: 10px; top: 100px;">
<ul id="menu">
<li>
<a href="admin/index.forum?tid='+parts[1]+'" target="_blank">ACP

Unknown end tag for &lt;/a&gt;


<ul>
<li>
<a href="/admin/index.forum?part=themes&tid='+parts[1]+'" target="_blank">Display

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?mode=main&part=themes&sub=templates&tid='+parts[1]+'" target="_blank">Templates

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=110&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Idex_body

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=111&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Idex_box

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=133&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Footer_end

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=116&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Header

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_main&t=127&l=main&extended_admin=1&tid='+parts[1]+'" target="_blank">Viewtopic

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=logos&mode=css&extended_admin=1&tid='+parts[1]+'" target="_blank">CSS

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?mode=portal&part=themes&sub=templates&tid='+parts[1]+'" target="_blank">Lasttopic

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_portal&t=904&l=portal&extended_admin=1&tid='+parts[1]+'">Recent_topic

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?part=themes&sub=templates&mode=edit_portal&t=912&l=portal&extended_admin=1&tid='+parts[1]+'">Topposter

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="/admin/index.forum?part=modules&tid='+parts[1]+'" target="_blank">Module

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=modules&sub=html&tid='+parts[1]+'" target="_blank">HTML

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?mode=js&part=modules&sub=html&tid='+parts[1]+'" target="_blank">Javarscript

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="/admin/index.forum?part=users_groups&tid='+parts[1]+'" target="_blank">QLND và QLN

Unknown end tag for &lt;/a&gt;


<ul>
<li><a href="/admin/index.forum?part=users_groups&sub=users&tid='+parts[1]+'" target="_blank">Xem thành viên

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/admin/index.forum?mode=avatar_profil2&part=users_groups&sub=users&tid='+parts[1]+'" target="_blank">Profile

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;





Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;

')
}) 

Unknown end tag for &lt;/script&gt;



```
Tìm:

```

Thoát [ Tuấn Anh ]

```
Thay:

```

Thoát [ tên lick của bạn ]
```

Lưu ý phải có khoảng trắng 2 đầu nha :4: :4: :4: