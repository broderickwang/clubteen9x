![http://i77.servimg.com/u/f77/16/58/45/96/112.jpg](http://i77.servimg.com/u/f77/16/58/45/96/112.jpg)
forum đang dùng ^^


> Thông tin :
> Khi rê chuột vào tên thành viên gửi bài cuối cùng ngoài index\_box sẽ hiện Tooltip
> Nhóm , bài viết , tham gia , điểm , Avatar ^^




Cách làm :



Bước 1 : Vào Css thêm đoạn này lên đầu :

```

.perfilInfo {
background: url(http://i77.servimg.com/u/f77/16/58/45/96/bottom10.png) no-repeat 98% 0;
float: left;
height: 177px;
left: -40em;
padding: 16px 0 38px 5px;
top: 13px;
width: 510px;
z-index: 999;
}
.setPerfil > span {
background: #f9f9f9;
border: 1px solid #999;
border-radius: 3px;
display: block;
height: 100%;
padding: 3px;
}

.sprite-icon_topic_latest {
background: url(http://illiweb.com/fa/sprite_icons.png) no-repeat top left;
background-position: -1083px 0;
height: 9px;
width: 11px;
}
.setPerfil {
background: rgba(0,0,0,0.3);
border-radius: 3px;
display: block;
height: 100%;
padding: 5px 5px 10px;
}
.setPerfil .PerfilInfoImg {
-moz-box-shadow: 0 2px 2px rgba(0,0,0,0.1);
-webkit-box-shadow: 0 2px 2px rgba(0,0,0,0.1);
background: #fff;
border: 1px solid #D5D5D5;
box-shadow: 0 2px 2px rgba(0,0,0,0.1);
display: table;
float: left;
height: 91px;
padding: 1px;
width: 91px;
}
.setPerfil h2 {
background: #E1E1E1;
border-radius: 0 10px 0 0;
box-shadow: 1px 1px 0 #CCC;
display: block;
float: left;
font-family: "Trebuchet MS";
font-size: 19px;
font-style: normal;
font-variant: normal;
font-weight: bold;
margin-bottom: 10px;
padding: 5px;
text-shadow: 1px 1px 0 #fff;
width: 382px;
}
.setPerfil p {
-moz-transition: all .2s ease-in-out;
-o-transition: all .2s ease-in-out;
-webkit-transition: all .2s ease-in-out;
background: #F1F1F1;
border-left: 3px solid #333;
border-top: 1px solid #333;
box-shadow: 1px 1px 0 #CCC;
display: block;
float: right;
font-weight: 400;
margin: 2px 5px;
padding: 5px;
text-align: left;
width: 350px;
}
.setPerfil p {
font-weight: 400;
text-align: left;
}
.linkPrf {
-moz-transition: all .2s ease-in-out;
-o-transition: all .2s ease-in-out;
-webkit-transition: all .2s ease-in-out;
background: #F6F6F6;
border: 1px solid #DBDBDB;
border-radius: 0 0 4px 4px;
border-top: none;
bottom: -7px;
box-shadow: 0 1px 0 rgba(255,255,255,1) inset, 0 1px 0 rgba(0,0,0,0.3);
color: #616161;
float: left;
height: 14px;
left: 13.8em;
margin: 2px;
padding: 2px;
text-align: center;
text-decoration: none!important;
transition: all .2s ease-in-out;
width: 8em;
}
.linkPrf a {
color: #616161!important;
font-size: 12px;
font-style: normal;
font-variant: normal;
font-weight: normal;
text-decoration: none;
}

.setPerfil p:hover {
box-shadow: 1px 1px 0 #9A9A9A;
}.setPerfil p div {
display: inline;
}
```


Bước 2 : Thêm js này vào Footer\_begin

```

<script type="text/javascript" src="http://www.cntt-k3.org/14642.js">

Unknown end tag for &lt;/script&gt;


```
> ```
$(document).ready(function(){$('.tcr a[href*="/u"]').mouseover(function(){$(this).parents('strong').css('position','relative');$('.perfilInfo').remove();$(this).parents('.tcr').css('overflow','visible');$(this).before('<div class="perfilInfo"style="position:absolute;"><span class="setPerfil"><span><img class="PerfilInfoImg"src="http://r25.imgfast.net/users/2517/28/07/20/avatars/1-82.png"/><h2>'+$(this).html()+'</h2><p><b>Nhóm:</b> <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><b>Bài viết:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><b>Tham gia:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><b>Điểm:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<span class="linkPrf"><a href="/privmsg?mode=post&u='+$(this).attr('href').replace('/u','')+'">Gửi tin nhắn

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span class="linkPrf"><a href="'+$(this).attr('href')+'">Lý lịch

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

');$.get($(this).attr('href'),function(retornoMembro){var avtPrf=$('#profile-advanced-right img:first',retornoMembro).attr('src');$('.PerfilInfoImg').attr('src',avtPrf);var perfil_rank=$('#profile-advanced-right .module .main-content img:eq(1)',retornoMembro).attr('alt');var perfil_post=$('#field_id-6 dd',retornoMembro).html();var perfil_cad=$('#field_id-4 dd',retornoMembro).html();var perfil_lastV=$('#field_id-13 dd',retornoMembro).html();$('.setPerfil p:eq(0) span').html(perfil_rank);$('.setPerfil p:eq(1) span').html(perfil_post);$('.setPerfil p:eq(2) span').html(perfil_cad);$('.setPerfil p:eq(3) span').html(perfil_lastV)});$('.perfilInfo').mouseleave(function(){$(this).remove()})})});```
```
          <style> .perfilInfo {background: url(http://i77.servimg.com/u/f77/16/58/45/96/bottom10.png) no-repeat 21% 0;float: left;height: 177px;left: -6em;padding: 16px 0 38px 5px;top: 13px;width: 320px;z-index: 999;}.setPerfil > span {background: #f9f9f9;border: 1px solid #999;border-radius: 3px;display: block;height: 100%;padding: 3px;}.sprite-icon_topic_latest {background: url(http://illiweb.com/fa/sprite_icons.png) no-repeat top left;background-position: -1083px 0;height: 9px;width: 11px;}.setPerfil {background: rgba(0,0,0,0.3);border-radius: 3px;display: block;height: 100%;padding: 5px 5px 10px;}.setPerfil .PerfilInfoImg {-moz-box-shadow: 0 2px 2px rgba(0,0,0,0.1);-webkit-box-shadow: 0 2px 2px rgba(0,0,0,0.1);background: #fff;border: 1px solid #D5D5D5;box-shadow: 0 2px 2px rgba(0,0,0,0.1);display: table;float: left;height: 91px;padding: 1px;width: 91px;}.setPerfil h2 {background: #E1E1E1;border-radius: 0 10px 0 0;box-shadow: 1px 1px 0 #CCC;display: block;float: left;font-family: "Trebuchet MS";font-size: 19px;font-style: normal;font-variant: normal;font-weight: bold;margin-bottom: 10px;padding: 5px;text-shadow: 1px 1px 0 #fff;width: 192px;}.setPerfil p {-moz-transition: all .2s ease-in-out;-o-transition: all .2s ease-in-out;-webkit-transition: all .2s ease-in-out;background: #F1F1F1;border-left: 3px solid #333;border-top: 1px solid #333;box-shadow: 1px 1px 0 #CCC;display: block;float: right;font-weight: 400;margin: 2px 5px;padding: 5px;text-align: left;width: 170px;}.setPerfil p {font-weight: 400;text-align: left;}.linkPrf {-moz-transition: all .2s ease-in-out;-o-transition: all .2s ease-in-out;-webkit-transition: all .2s ease-in-out;background: #F6F6F6;border: 1px solid #DBDBDB;border-radius: 0 0 4px 4px;border-top: none;bottom: -7px;box-shadow: 0 1px 0 rgba(255,255,255,1) inset, 0 1px 0 rgba(0,0,0,0.3);color: #616161;float: left;height: 14px;left: 13.8em;margin: 2px;padding: 2px;text-align: center;text-decoration: none!important;transition: all .2s ease-in-out;width: 8em;}.linkPrf a {color: #616161!important;font-size: 12px;font-style: normal;font-variant: normal;font-weight: normal;text-decoration: none;}.setPerfil p:hover {box-shadow: 1px 1px 0 #9A9A9A;}.setPerfil p div {display: inline;} 

Unknown end tag for &lt;/style&gt;


<script type="text/javascript"> $(document).ready(function(){$('tbody.statused .box2 a[href*="/u"]').mouseover(function(){$(this).parents('strong').css('position','relative');$('.perfilInfo').remove();$(this).parents('.tcr').css('overflow','visible');$(this).before('<div class="perfilInfo"style="position:absolute;"><span class="setPerfil"><span><img class="PerfilInfoImg" src="http://www.hotrofm.com/users/1416/39/08/64/avatars/gallery/123_bm10.jpg"/><h2>'+$(this).html()+'

Unknown end tag for &lt;/h2&gt;

<p><b>Nhóm:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><b>Bài viết:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><b>Tham gia:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p><b>Điểm:

Unknown end tag for &lt;/b&gt;

 <span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<span class="linkPrf"><a href="/privmsg?mode=post&u='+$(this).attr('href').replace('/u','')+'">Gửi tin nhắn

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span class="linkPrf"><a href="'+$(this).attr('href')+'">Lý lịch

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

');$.get($(this).attr('href'),function(retornoMembro){var avtPrf=$('#profile-advanced-right img:first',retornoMembro).attr('src');$('.PerfilInfoImg').attr('src',avtPrf);var perfil_rank=$('#profile-advanced-right .module .main-content img:eq(1)',retornoMembro).attr('alt');var perfil_post=$('#field_id-6 dd',retornoMembro).html();var perfil_cad=$('#field_id-4 dd',retornoMembro).html();var perfil_lastV=$('#field_id-13 dd',retornoMembro).html();$('.setPerfil p:eq(0) span').html(perfil_rank);$('.setPerfil p:eq(1) span').html(perfil_post);$('.setPerfil p:eq(2) span').html(perfil_cad);$('.setPerfil p:eq(3) span').html(perfil_lastV)});$('.perfilInfo').mouseleave(function(){$(this).remove()})})});

Unknown end tag for &lt;/script&gt;

```
Thế là xong ^^