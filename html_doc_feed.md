Demo : http://www.c3zone.net/h13-c3zone-new-feeds
Tạo một trang HTML với nội dung :

```


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>C3 NEW FEEDs

Unknown end tag for &lt;/title&gt;


<link rel="stylesheet" type="text/css" href="http://www.coo.me/out/users/c3vietk/css/c3_FeedReader.css" media="all" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript" src="//c3zone.forumj.net/35033.js">

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<body>
<p id="learn">
<img src="http://illiweb.com/fa/empty.gif" height="40" />


Unknown end tag for &lt;/p&gt;


<h1 id="feedTitle">

Unknown end tag for &lt;/h1&gt;


<br />
<div id="heading">
Bài gửi mới nhất :
<span style="float:right">Cập nhật lúc : <span id="update">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="items">
<ul id="itemsUl">



Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<!-- FM Feed Reader - Written by Việt K (vui lòng không xóa dòng này) -->
<div id="footer">
Layout : Opera -  Copyright © 2012 <a href="http://www.c3zone.net">C3ZONE

Unknown end tag for &lt;/a&gt;

.


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;


```

Chấp nhận và Hết Smile

```
$(function(){var feed,f=GetParam("f");if(isNaN(f)||f==null)f='';else f=("?f="+f);feed="/feed"+f;$.ajax({type:"GET",url:feed,dataType:"xml",success:function(xml){var c3=$(xml).find('image:first');$("#learn img").attr("src",c3.find('url').text());$("#update").text($(xml).find('lastBuildDate:first').text());$("#feedTitle").text(c3.find('title').text());$(xml).find('item').each(function(){var title=$(this).find('title').text();var link=$(this).find('link ').text();var creator=$(this).find('dc\\:creator,creator').text();var pubDate=$(this).find('pubDate').text();var category=$(this).find('category').text();var comments=$(this).find('comments').text();var description=$(this).find('description').text();if(description=="")description="(empty)";$("#itemsUl").append("<li><h2><a href='"+link+"'><b>"+title+"

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/h2&gt;

<p>Khởi tạo lúc : <b>"+pubDate+"

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/p&gt;

<p class='creator'>Người khởi tạo : <b>"+creator+"

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/p&gt;

<div>"+description+"

Unknown end tag for &lt;/div&gt;

<p class='cat'>Category : <b>"+category+"

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/p&gt;

<p><a class='newpost' href='"+comments+"'>Xem bài cuối

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/li&gt;

")})}})});function GetParam(name){var match=new RegExp(name+"=([^&]+)","i").exec(location.search);if(match==null){match=new RegExp(name+"=(.+)","i").exec(location.search)}if(match==null){return null}match=match+"";result=match.split(",");return result[1]}```
```
html,body {
margin:0;
padding:0;
border:0;
}
body {
color:#000;
background:#fff;
text-align:center;
font:normal normal .9em/1.5em sans-serif;
padding:2em 0;
}
body[class]:after {
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:#fff;
content:attr(class);
text-transform:uppercase;
padding-top:30%;
text-align:center;
}
h1 {
margin:0;
font-size:1.5em;
line-height:1.5em;
display:inline;
}
h1:before {
display:inline;
overflow:hidden;
vertical-align:middle;
content:-o-skin('Mail Newsfeeds');
margin-right:.2em;
line-height:1.5em;
}
#learn {
color:#fff;
float:right;
font-size:.75em;
padding:0; margin:0;
margin-right:2em;
}
#heading {
margin-top:30px;
background-color: #2C2C2C;
background-image: -moz-linear-gradient(top, #333, #222);
background-image: -ms-linear-gradient(top, #333, #222);
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#333), to(#222));
background-image: -webkit-linear-gradient(top, #333, #222);
background-image: -o-linear-gradient(top, #333, #222);
background-image: linear-gradient(top, #333, #222);
background-repeat: repeat-x;
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#333333',endColorstr='#222222', GradientType=0);
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25),inset 0 -1px 0 rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25),inset 0 -1px 0 rgba(0, 0, 0, 0.1);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25),inset 0 -1px 0 rgba(0, 0, 0, 0.1);
color:#fff;
text-align:left;
padding:6px 20px 6px 30px;
}
#heading select,#heading button {
margin:0 2ex;
min-width:16ex;
}
a {
text-decoration:none;
}
a:hover {
text-decoration:underline;
}
#items {
display:block;
clear:both;
text-align:center;
margin:2em 0;
padding:0;
overflow:hidden;
}
#items>ul {
position:relative;
list-style:none;
margin:0;
padding:0;
border:0;
width:auto;
display:inline-block;
text-align:left;
}
#items>ul>li {
vertical-align:top;
font:normal normal .8em/1.6em sans-serif;
display:inline-block;
margin:1em;
padding:0;
width:50ex;
position:relative;
}
#items>ul>li>h2 {
font:normal lighter 1.66em/1.1em sans-serif;
margin:0;
color:#000;
overflow:hidden;
-o-text-overflow:ellipsis;
border-bottom:1px solid #ccc;
}
#items>ul>li>h2>a {
display:block;
color:inherit;
padding:0.5em;
}
#items>ul>li>h2>a:hover {
background:#eee;
text-decoration:none;
}
#items>ul>li>p {
color:#999;
text-align:right;
margin:1.1ex;
font-size:.9em;
line-height:1.3em;
white-space:pre-wrap;
}
#items>ul>li a {
color:#b00;
}
#items>ul>li>div {
text-align:justify;
max-height:250px;
margin:0;
padding:0 1ex;
color:#555;
vertical-align:top;
-o-text-overflow:ellipsis;
overflow-x:auto;
}
#items>ul>li>div pre {
font:.9em/.9em monospace;
background:#eee;
overflow:auto;
border:1px solid #999;
border-width:1px 0;
padding:1em;
clear:both;
}
#items>ul>li>div pre a {
font-style:normal;
}
#items>ul>li>div p {
clear:both;
margin:0 0 2em 0;
}
#items>ul>li>div a {
font-style:italic;
margin-right:.25em;
}
#items>ul>li>div img {
position:relative;
display:inline-block;
vertical-align:middle;
max-width:100%;
max-height:50ex;
padding:.5ex;
box-sizing:border-box;
;
}
#items>ul>li>div h1,#items>ul>li>div h2,#items>ul>li>div h3,#items>ul>li>div h4,#items>ul>li>div h5,#items>ul>li>div h6,#items>ul>li>div div {
display:block;
clear:both;
}
#footer {
font-size:.85em;
}
#footer a {
color:#b00;
}
@media handheld {
body {
font:normal normal 1em/1.5em sans-serif;
padding:1em 0;
}
#heading>button {
display:inline;
width:auto;
margin:0 .5em;
height:auto;
}
#items {
margin:1em 0;
}
#items>ul {
display:block;
}
#items>ul>li {
font:normal normal 1em/1.5em sans-serif;
display:block;
padding:1em;
margin:0;
width:auto;
background:#fff;
}
#items>ul>li:nth-child(2n) {
background:#eee;
}
#items>ul>li>h2 {
font:normal bold 1.33em/1.2em sans-serif;
}
#items>ul>li>h2>a:hover {
background:#ddd;
}
#items>ul>li>div {
border:0;
padding:0;
margin:0;
}
#items>ul>li>div:after {
clear:both;
content:' ';
display:block;
}
#items>ul>li>div pre {
font:1em/1em monospace;
background:#ddd;
}
#items>ul>li>div a {
font-style:normal;
}
#footer a {
font-size:1em;
}
}
embed,img,table {
max-width: 300px
}```