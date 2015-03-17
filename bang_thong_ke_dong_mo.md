dùng được cho cả Punbb và phpbb2 lè lưỡi
demo :
http://bucoi11.forumvi.com/




Hướng dẫn làm :

Bước 1 cho đoạn code sau vào Css :

```

h2.acc_trigger {
padding: 0;
background: #45484d; /* Old browsers */
background: -moz-linear-gradient(top, #45484d 0%, #000000 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#45484d), color-stop(100%,#000000)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, #45484d 0%,#000000 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, #45484d 0%,#000000 100%); /* Opera11.10+ */
background: -ms-linear-gradient(top, #45484d 0%,#000000 100%); /* IE10+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
background: linear-gradient(top, #45484d 0%,#000000 100%); /* W3C */
height: 46px;  line-height: 46px;
width: 500px;
font-size: 2em;
font-weight: normal;
margin-align:center; margin: 0 0 5px 0;
-o-border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
}
h2.acc_trigger a {
color: #fff;
text-decoration: none;
display: block;
padding: 0 0 0 50px;
}
h2.acc_trigger a:hover {
color: #ccc;
}
h2.active {background-position: left bottom;}
.acc_container {
padding: 0;
overflow: hidden;
font-size: 1.2em;
width: 500px;
clear: both;
background: #f0f0f0;
border: 1px solid #d6d6d6;
-webkit-border-bottom-right-radius: 5px;
-webkit-border-bottom-left-radius: 5px;
-moz-border-radius-bottomright: 5px;
-moz-border-radius-bottomleft: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
margin-align:center; margin: 0 0 5px 0;
}
.acc_container .block {
padding: 20px;
}
.acc_container img {
float: left;
margin: 10px 15px 15px 0;
padding: 5px;
background: #ddd;
border: 1px solid #ccc;
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
-o-border-radius: 15px;
-moz-box-shadow: 0px 0px 5px black;
-webkit-box-shadow: 0px 0px 5px black;
-o-box-shadow: 0px 0px 5px black;
box-shadow: 0px 0px 5px black;
}
<code>

Bước 2 vào Index_body tìm code sau :

<code>
<!-- BEGIN disable_viewonline -->
...
đến
...
<!-- END disable_viewonline -->

```
Thay thế nó = code sau

```

<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript" src="http://pruebasdesign.foro-mexico.net/h13-acordeonjoet"> 

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;



<body>
<center>
<div class="container">

<h2 class="acc_trigger"><a href="#">Ai đang online

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;


<div class="acc_container">
<div class="block">
<h3>Ai đang online

Unknown end tag for &lt;/h3&gt;


<img src="http://cdn2.iconfinder.com/data/icons/origami/PNG/48%20x%2048/discussion.png" alt="" />

Unknown end tag for &lt;/a&gt;


<p>{TOTAL_USERS_ONLINE}


{LOGGED_IN_USER_LIST}

{L_ONLINE_USERS}



Unknown end tag for &lt;/p&gt;


<p>{RECORD_USERS}

Unknown end tag for &lt;/p&gt;


<p>{L_CONNECTED_MEMBERS}

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<h2 class="acc_trigger"><a href="#">Thống kê

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;


<div class="acc_container">
<div class="block">
<h3>Thống kê

Unknown end tag for &lt;/h3&gt;


<img src="http://www.haikuob.com/catalystimages/a64/statistic.png" alt="" />

Unknown end tag for &lt;/a&gt;


<p>{TOTAL_POSTS}


{TOTAL_USERS}


{NEWEST_USER}                

Unknown end tag for &lt;/p&gt;


{TOTAL_USERS_ONLINE}

<p> {LEGEND} : {GROUP_LEGEND}



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<h2 class="acc_trigger"><a href="#">Liên kết

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;


<div class="acc_container">
<div class="block">
<h3>Liên kết

Unknown end tag for &lt;/h3&gt;


<a href="http://cntt-k3.biz/"><img src="http://r20.imgfast.net/users/2015/12/67/35/avatars/gallery/210.png" alt="" />

Unknown end tag for &lt;/a&gt;


<p>Liên Kết tại đây 

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



<h2 class="acc_trigger"><a href="#">Bản quyền

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;


<div class="acc_container">
<div class="block">
<h3>Bản quyền

Unknown end tag for &lt;/h3&gt;


<a href="http://cntt-k3.biz/"><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Commons-emblem-copyright.svg/64px-Commons-emblem-copyright.svg.png" alt="" />

Unknown end tag for &lt;/a&gt;


<p>bản quyền ???

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/center&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;




Unknown end tag for &lt;/table&gt;





<!-- END disable_viewonline -->
```

Ok thế là xong