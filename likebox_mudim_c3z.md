Điều đầu tiên mình muốn nói đó là " Viewsource là một nghệ thuật / Người view cũng là một nghệ sỹ" . Nhưng để tôn trọng quyền tác giả mình vẫn ghi nguồn gốc bài viết là c3zone ha.

Demo : c3zone.net

Bắt đầu làm nào :

Bước 1 : chèn vào CSS code sau

```

.slide_likebox{background:url(http://c3zone.net/users/2611/10/63/87/album/c3zfb210.png) no-repeat!important;display:block;float:right;height:385px;padding:0;position:fixed;right:-205px;top:170px;width:247px;z-index:999}.slide_text{color:#FFF;font-family:Geneva, Verdana, sans-serif;font-size:8px;padding-left:10px;text-decoration:none}


#mudimPanel{-moz-box-shadow:5px 5px 5px #000;-moz-opacity:.9;-moz-transition:all 2s ease;-webkit-box-shadow:5px 5px 5px #000;-webkit-transition:all 2s ease;background:#FFF url(http://c3zone.net/users/2611/10/63/87/album/go10.jpg) no-repeat right center!important;bottom:9px!important;box-shadow:5px 5px 5px #000;filter:alpha(opacity=90);font-size:9px!important;font-weight:700;height:47px!important;left:-333px!important;opacity:.9;padding:4px 26px 4px 4px !important;vertical-align:middle;width:330px!important}#mudimPanel:hover{-moz-opacity:1;-moz-transition:all 1s ease;-webkit-transition:all 1s ease;filter:alpha(opacity=100);left:0!important;opacity:1}#divInput{bottom:2px;padding:2px;position:fixed;right:3px;z-index:50}#AVIMControl{background-color:#EEE;border:1px solid #999;bottom:-1px;display:none;padding:1px 1px 2px;position:fixed;right:0;z-index:50}#AVIMControl input,#AVIMControl span{font-size:11px;vertical-align:middle}

```

Bước 2 : chèn cái này vào index\_body nha.



```


<script type="text/javascript">
jQuery(function (){
jQuery(".slide_likebox").hover(function(){
jQuery(".slide_likebox").stop(true, false).animate({right:"0"},"medium");
},function(){
jQuery(".slide_likebox").stop(true, false).animate({right:"-205"},"medium");
},500);
return false;
});


Unknown end tag for &lt;/script&gt;

<div class="slide_likebox"> <div style="color: rgb(255, 255, 255); padding: 8px 5px 0pt 50px;"><div class="FB_Loader">

Unknown end tag for &lt;/div&gt;

<span><iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FC3zone%2F177695108939974&width=222&colorscheme=light&show_faces=true&stream=false&header=false&height=364" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:222px; height:364px;background:#fff" allowTransparency="true">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;




```


Bước 3 : chèn vào "overall\_footer" code sau :

```

<script type="text/javascript" src="http://quangtrung.googlecode.com/files/mudim-0.8-r142.js">

Unknown end tag for &lt;/script&gt;


```

Vậy là xong.

Lưu ý : up lại ảnh, file js và edit lại cho phù hợp với 4rum của bạn. Mọi thắc mắc vui lòng reply tại đây.