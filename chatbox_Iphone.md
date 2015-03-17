Tạo trang html nội dung sau:

```



<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;




<style>.slide_likebox {
float:right;
width:720px;

background: url(slide.png) no-repeat !important;

display:block;
right:-205px;
padding:0;
position:fixed;
top: 200px;
z-index:1002;
}

.slide_text {
font-family: Geneva, Verdana, sans-serif;
font-size: 8px;
padding-left: 10px;
text-decoration: none;
color: #FFF;
}

Unknown end tag for &lt;/style&gt;



<script type="text/javascript">

//jQuery.noConflict();

jQuery(function (){

jQuery(".slide_likebox").hover(function(){

jQuery(".slide_likebox").stop(true, false).animate({left:"0"},"medium");

},function(){

jQuery(".slide_likebox").stop(true, false).animate({left:"-602"},"medium");

},500);

return false;

});



Unknown end tag for &lt;/script&gt;



<div style="left: -602px; " class="slide_likebox">

<div style="color: rgb(255, 255, 255); padding: 20px 25px 25pt 00px;">

<span>

<h2>

<center><span class="forumtitle">Khu vực để các Ninja chém gió

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/center&gt;




Unknown end tag for &lt;/h2&gt;

<table width="505px" style="margin-left:98px;background:white;margin-top:0px">
<tbody><tr><td style="padding: 6px;">
<div id="fcb_smilieboxmain" style="display: none;">

<div id="fcb_smiliebox" align="center" style="margin-top: 3px; margin-bottom: 3px;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




<tr><td style="padding: 6px; border-top: 1px solid #f4f4f4; border-bottom: 1px solid #f4f4f4;">

<iframe name="fcb_frame" src="/chatbox" frameborder="0" style="width: 100%; height: 200px;">

Unknown end tag for &lt;/iframe&gt;





Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;






Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/div&gt;







Unknown end tag for &lt;/div&gt;



```

Chèn vào footer hoặc index\_body

```

<iframe name="chat" id="chat" src="link trang html vừa tạo" width="100%" frameborder="0" height="330">

Unknown end tag for &lt;/iframe&gt;


```

[/hide]
demo tạm: http://camxuc9x.yourme.net/h73-page