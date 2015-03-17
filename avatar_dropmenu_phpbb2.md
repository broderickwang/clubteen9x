Demo Online:

![http://i17.servimg.com/u/f17/13/76/18/07/hi10.jpg](http://i17.servimg.com/u/f17/13/76/18/07/hi10.jpg)
http://www.bombclub.tk/t323-topic#462
chỉ chuột vào avatar sẽ thấy.
Demo ảnh :

Vào viewtopic\_body:
Chèn code này vào cuối:

```

<style>
.fmviMenu div{background-color:#FFF;border:1px;font-size:.9em;margin:0;padding:4px;text-align:left}.fmviMenu div>span{display: block!important;line-height:20px!important;padding:2px5px!important;}.fmviMenu div>span:hover{border:2px dashed #ccc!important;}.fmviMenu>div>span img{background-color:#FFF!important;border:0px!important;border-radius:0px!important;padding:2px3px!important;}


Unknown end tag for &lt;/style&gt;



```

Sau đó tìm :
```

{postrow.displayed.POSTER_AVATAR}
```
Thay thế bằng:

```


<div class="fmviShowP5" style="background: #FFF; height: auto;width: auto;border: 0px;"
align="center">
<div class="userData" style="display: none;">
<span class="name">
<strong>
{postrow.displayed.POSTER_NAME}


Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;


<!-- BEGIN profile_field -->
<span class="pro5list">
{postrow.displayed.profile_field.LABEL}{postrow.di splayed.profile_field.CONTENT}{postrow.displayed.p rofile_field.SEPARATOR}


Unknown end tag for &lt;/span&gt;


<!-- END profile_field -->


Unknown end tag for &lt;/div&gt;


<div class="bvavatar">
{postrow.displayed.POSTER_AVATAR}  

Unknown end tag for &lt;/div&gt;




```
Tạo 1 js
Title: Wall
Placement : in the topic

JS CODE:

```

$(function(){
$(".fmviShowP5 .bvavatar a").mouseover(function(){
var hbv = $(this).parent().height()-2;
var x = $(this).position().left +170;
var y = $(this).position().top +hbv;
var userlink = $(this).attr("href").slice(2);
$(".fmviMenu").remove();
$(this).after('<div class="fmviMenu" style="width: auto; center: '+ x +'px; top: '+ y +'px; padding: 5px; position: fixed; background-color: #FFFFFF; border: 2px solid #BCBCBC; overflow: hidden; z-index: 999;float:center; margin: auto;"><div style="float:center; margin: 2px 5px;">'+ $(this).html()+'

Unknown end tag for &lt;/div&gt;

<div style="float:center; width: 94px; margin: 2px 5px;">
<br><br><br><br><br><br><br><br><span id="showTtin" style="background-color: #2078b3; color: #fff; border: 2px solid #0f4e78;border-radius: 2px">

Unknown end tag for &lt;/span&gt;

<span><a target="_blank" href="/u'+ userlink +'wall">Tường nhà

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span><a target="_blank" href="/u'+ userlink +'stats">Thống kê

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span><a target="_blank" href="/u'+ userlink +'friends">List bạn bè

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span><a target="_blank" href="/postp/'+ userlink +'">Gửi tin nhắn

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div>');
$(".fmviMenu").mouseleave(function(){
$(this).remove();
});
$("#showTtin").mouseleave(function(){
$(this).parent().next().hide();
});
$("#showTtin").mouseover(function(){
$(this).parent().next().show();});
});
});

```

Thế là xong.Ai thích thì like nha.