demo: http://chienthan30.forumvi.com/

![http://www.marcofbb.com.ar/wp-content/uploads/2010/11/SlideOutNav.png](http://www.marcofbb.com.ar/wp-content/uploads/2010/11/SlideOutNav.png)

Cho code sau vào Footer Begin :

```

<script type="text/javascript" src="http://www.marcofbb.com.ar/wp-content/uploads/2010/11/jquery-1.3.2.js">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
$(function() {
$('#navigation a').stop().animate({'marginLeft':'-85px'},1000);

$('#navigation > li').hover(
function () {
$('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
},
function () {
$('a',$(this)).stop().animate({'marginLeft':'-85px'},200);
}
);
});


Unknown end tag for &lt;/script&gt;


<ul id="navigation">
<li class="home"><a href="" title="Home">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li class="about"><a href="" title="About">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li class="search"><a href="" title="Search">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li class="photos"><a href="" title="Photos">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li class="rssfeed"><a href="" title="Rss Feed">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li class="podcasts"><a href="" title="Podcasts">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li class="contact"><a href="" title="Contact">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;



```
Tiếp theo cho code sau vào Css :

```

ul#navigation {
position: fixed;
margin: 0px;
padding: 0px;
top: 10px;
left: 0px;
list-style: none;
z-index: 999;
}
ul#navigation li {
width: 100px;
}
ul#navigation li a {
display: block;
margin-left: -2px;
width: 100px;
height: 70px;
background-color:#CFCFCF;
background-repeat:no-repeat;
background-position:center center;
border:1px solid #AFAFAF;
-moz-border-radius:0px 10px 10px 0px;
-webkit-border-bottom-right-radius: 10px;
-webkit-border-top-right-radius: 10px;
-khtml-border-bottom-right-radius: 10px;
-khtml-border-top-right-radius: 10px;
/*-moz-box-shadow: 0px 4px 3px #000;
-webkit-box-shadow: 0px 4px 3px #000;
*/
opacity: 0.6;
filter:progid:DXImageTransform.Microsoft.Alpha(opacity=60);
}
ul#navigation .home a{
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/home.png);
}
ul#navigation .about a      {
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/id_card.png);
}
ul#navigation .search a      {
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/search.png);
}
ul#navigation .podcasts a      {
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/ipod.png);
}
ul#navigation .rssfeed a  {
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/rss.png);
}
ul#navigation .photos a    {
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/camera.png);
}
ul#navigation .contact a    {
background-image: url(http://tympanus.net/Tutorials/FixedNavigationTutorial/images/mail.png);
}
```

Link gốc :
http://www.marcofbb.com.ar/menu-deslizante-css-y-jquery/