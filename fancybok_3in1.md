![http://i38.servimg.com/u/f38/16/58/45/96/311.jpg](http://i38.servimg.com/u/f38/16/58/45/96/311.jpg)
![http://i38.servimg.com/u/f38/16/58/45/96/118.jpg](http://i38.servimg.com/u/f38/16/58/45/96/118.jpg)
![http://i38.servimg.com/u/f38/16/58/45/96/215.jpg](http://i38.servimg.com/u/f38/16/58/45/96/215.jpg)
MODULES >> HTML & JAVASCRIPT
Javascript codes management : Tạo 1 js mới :

Title **: Fancybox 3 in 1
Placement : In all the pages
Javascript Code** :

```

// Tipo de fancyBox: "all" o "images"
var typefancyBox='all';

eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1.2(\'<g h="i" j="3://4-5.6.7/8/9/0/a-b.0" c="d/0" />\\n\');1.2(\'<e k="3://4-5.6.7/8/9/f/a-b-\'+l+\'.f" c="d/m">

Unknown end tag for &lt;/e&gt;

\\n\');',24,24,'css|document|write|http|scripts|giobanii|googlecode|com|svn|trunk|forumotion|facybox|type|text|script|js|link|rel|stylesheet|href|src|typefancyBox|javascript|'.split('|'),0,{}))

```

Tiếp theo vào css thêm đoạn code này :

```


.fancybox-tmp iframe,.fancybox-tmp object {
vertical-align:top;
margin:0;
padding:0;
}

.fancybox-wrap {
position:absolute;
top:0;
left:0;
z-index: 999;
}

.fancybox-outer {
background:#f9f9f9;
color:#444;
text-shadow:none;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
margin:0;
padding:0;
}

.fancybox-opened {
z-index: 999;
}

.fancybox-opened .fancybox-outer {
-webkit-box-shadow:0 10px 25px rgba(0,0,0,0.5);
-moz-box-shadow:0 10px 25px rgba(0,0,0,0.5);
box-shadow:0 10px 25px rgba(0,0,0,0.5);
}

.fancybox-inner {
width:100%;
height:100%;
position:relative;
outline:0;
overflow:hidden;
margin:0;
padding:0;
}

.fancybox-error {
color:#444;
font:14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
margin:0;
padding:10px;
}

.fancybox-image,.fancybox-iframe {
display:block;
width:100%;
height:100%;
border:0;
vertical-align:top;
margin:0;
padding:0;
}

.fancybox-image {
max-width:100%;
max-height:100%;
}

#fancybox-loading {
position:fixed;
top:50%;
left:50%;
margin-top:-21px;
margin-left:-21px;
width:42px;
height:42px;
background:url(http://www.9xstudio.biz/users/2012/10/88/45/album/fancyb10.gif);
opacity:.8;
cursor:pointer;
z-index: 999;
}

.fancybox-close,.fancybox-prev span,.fancybox-next span {
background-image:url(http://www.9xstudio.biz/users/2012/10/88/45/album/fancyb10.png);
}

.fancybox-close {
position:absolute;
top:-18px;
right:-18px;
width:36px;
height:36px;
cursor:pointer;
z-index: 999;
}

.fancybox-prev,.fancybox-next {
position:absolute;
top:0;
width:40%;
height:100%;
cursor:pointer;
background:transparent url(http://www.9xstudio.biz/users/2012/10/88/45/album/blank110.gif);
z-index: 999;
}

.fancybox-next {
right:0;
}

.fancybox-prev span,.fancybox-next span {
position:absolute;
top:50%;
left:-9999px;
width:36px;
height:36px;
margin-top:-18px;
cursor:pointer;
z-index: 999;
}

.fancybox-prev span {
background-position:0 -36px;
}

.fancybox-next span {
background-position:0 -72px;
}

.fancybox-prev:hover span {
left:20px;
}

.fancybox-next:hover span {
left:auto;
right:20px;
}

.fancybox-tmp {
position:absolute;
top:-9999px;
left:-9999px;
overflow:visible;
visibility:hidden;
padding:0;
}

#fancybox-overlay {
position:absolute;
top:0;
left:0;
overflow:hidden;
display:none;
z-index:999;
background:#000;
}

.fancybox-title-float-wrap {
position:absolute;
bottom:0;
right:50%;
margin-bottom:-35px;
z-index:999;
text-align:center;
}

.fancybox-title-float-wrap .child {
display:inline-block;
margin-right:-100%;
background:rgba(0,0,0,0.8);
-webkit-border-radius:15px;
-moz-border-radius:15px;
border-radius:15px;
text-shadow:0 1px 2px #222;
color:#FFF;
font-weight:700;
line-height:24px;
white-space:nowrap;
padding:2px 20px;
}

.fancybox-title-outside-wrap {
position:relative;
margin-top:10px;
color:#fff;
}

.fancybox-title-inside-wrap {
margin-top:10px;
}

.fancybox-title-over-wrap {
position:absolute;
bottom:0;
left:0;
color:#fff;
background:rgba(0,0,0,.8);
padding:10px;
}

#fancybox-buttons {
position:fixed;
left:0;
width:100%;
z-index: 999;
}

#fancybox-buttons.top {
top:10px;
}

#fancybox-buttons.bottom {
bottom:10px;
}

#fancybox-buttons ul {
display:block;
width:170px;
height:30px;
list-style:none;
-webkit-box-shadow:0 1px 3px #000,0 0 0 1px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.05);
-moz-box-shadow:0 1px 3px #000,0 0 0 1px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.05);
background:#111 0 0 50% 50% 100%;
border-radius:3px;
margin:0 auto;
padding:0;
}

#fancybox-buttons ul li {
float:left;
margin:0;
padding:0;
}

#fancybox-buttons a {
display:block;
width:30px;
height:30px;
text-indent:-9999px;
background-image:url(http://www.9xstudio.biz/users/2012/10/88/45/album/fancyb11.png);
background-repeat:no-repeat;
outline:0;
}

#fancybox-buttons a.btnPrev {
width:32px;
background-position:6px 0;
}

#fancybox-buttons a.btnNext {
background-position:-33px 0;
border-right:1px solid #3e3e3e;
}

#fancybox-buttons a.btnPlay {
background-position:0 -30px;
}

#fancybox-buttons a.btnPlayOn {
background-position:-30px -30px;
}

#fancybox-buttons a.btnToggle {
background-position:3px -60px;
border-left:1px solid #111;
border-right:1px solid #3e3e3e;
width:35px;
}

#fancybox-buttons a.btnToggleOn {
background-position:-27px -60px;
}

#fancybox-buttons a.btnClose {
border-left:1px solid #111;
width:38px;
background-position:-57px 0;
}

#fancybox-buttons a.btnDisabled {
opacity:.5;
cursor:default;
}

.fancybox-prev:hover,.fancybox-next:hover,.fancybox-opened .fancybox-title {
visibility:visible;
}

.iconPlayer {
background:url(http://www.9xstudio.biz/users/2012/10/88/45/album/play-o10.png) no-repeat scroll center center transparent;
left:140px;
opacity:.8;
position:absolute;
margin-top:85px;
z-index:99;
padding:40px!important;
}

.fancyimg-fmvi {
cursor:0;
}

#tooltip .tiplFMvi {
border-bottom:2px dotted #ddd;
padding-bottom:5px;
margin-bottom:5px;
}

#tooltip {
max-width:550px;
position:absolute;
border-radius:3px;
color:#000;
z-index:99;
border:1px solid #ddd;
font:12px tahoma,verdana,geneva,lucida,'lucida grande',arial,helvetica,sans-serif;
background:#fff url(http://i43.servimg.com/u/f43/16/03/04/56/white_10.png);
padding:0;
}

.entry-content img {
max-width:350px;
}
```

Xong yêu thế