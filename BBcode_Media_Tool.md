Tự làm và tận hưởng thành quả, ko có demo nhé!

Các trang hỗ trợ:

> mp3.zing.vn, nhaccuatui.com, nhacso.net, nhac.vui.vn, youtube, star.zing.vn, clip.vn, music.go.vn, nhacvn.net, nhincuoi.com, vimeo.com, trochoiviet.com, trochoivui.com, online.print2flash.com



Cách sử dụng: Dán trực tiếp link từ các trang trên vào forum.

**Tạo bbcode với html thay thế:**

Update ver 3.0: Đã bắt đầu hỗ trợ các trang game và 1 trang nhỏ khác (code dc SONGOKU phát triển thêm): trochoiviet.com, trochoivui.com, online.print2flash.com
HTML thay thế:

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="http://songoku.googlecode.com/files/Joker-media-tool-ver-300.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```


**Từ ver 3.0 trở đi mình sẽ hỗ trợ link mà forum mình đang dùng. Ai dùng link này thì sẽ dc update và fix lỗi mà ko cần làm j thêm.**

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script src="http://12b6.forum-viet.com/h15-page" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

**Hoặc sử dụng code trực tiếp:**

```

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script>function getNhacvnID(b){a=b.split("/");a.pop();return a.pop().split("-").pop()}function getZingID(b){return b.split("/").pop().split(".")[0]}function getGoID(b){return b.split("/").pop().split(".")[0]}function getNhacsoID(b){a=b.split(".");a.pop();return a.pop()}function getClipID(b){return b.split(",").pop().split("?")[0]}function getStarID(b){a=b.split(".");a.pop();return a.pop()}function getNhacvuiID(b){return b.split("/").pop()}
$(function(){$(".content a[href^='http://www.youtube.com/watch?v=']").each(function(){var b=this.href.replace(/watch\?v=/i,"v/");$(this).replaceWith('<center><embed pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+b+'" width="425" height="350" type="application/x-shockwave-flash" wmode="transparent" quality="high" scale="exactfit">

Unknown end tag for &lt;/embed&gt;

<br/><img src="http://img.youtube.com/vi/'+b.slice(25,36)+'/1.jpg"/><img src="http://img.youtube.com/vi/'+b.slice(25,36)+'/2.jpg"/><img src="http://img.youtube.com/vi/'+
b.slice(25,36)+'/3.jpg"/>

Unknown end tag for &lt;/center&gt;

')});$("a[href^='http://www.nhincuoi.com/']").each(function(){var b=$(this).attr("href");$(this).replaceWith('<center><embed src="http://www.nhincuoi.com/html/flash/player.swf?file='+b+'/export&controlbar=over&stretching=exactfit&backcolor=0x000000&frontcolor=0xCCCCCC&lightcolor=0x557722&autostart=true&skin=http://www.nhincuoi.com/html/flash/skin.swf&shuffle=false&repeat=list&image=http://www.nhincuoi.com/hinh/2012/09/09/_2012090903231215MPj.thumb.jpg&logo=http://www.nhincuoi.com/html/images/client/vlogo.png&enablejs=true" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="400" height="300" quality="High" scale="NoBorder" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

')});
$("a[href='http://www.nhacvn.net/nghe-bai-hat-']").replaceWith(function(){return"<center><embed width='436' height='300' flashvars='file=http://www.nhacvn.net/"+getNhacvnID($(this).attr("href"))+".xml&skin=http://www.nhacvn.net/player/stylish.swf&autostart=true&repeat=always' wmode='opaque' allowscriptaccess='always' allowfullscreen='true' quality='high' name='mpl' id='mpl' src='http://www.nhacvn.net/player/player.swf' type='application/x-shockwave-flash'></object></center>"});$("a[href='http://www.nhaccuatui.com/nghe?M=']").each(function(){$(this).replaceWith('<center><object width="300" height="300"><param name="movie" value="http://www.nhaccuatui.com/m/'+
$(this).attr("href").slice(33)+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="&autostart=false" /><embed src="http://www.nhaccuatui.com/m/'+$(this).attr("href").slice(33)+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" flashvars="&autostart=false" width="300" height="300">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;



Unknown end tag for &lt;/center&gt;

')});$("a[href^='http://mp3.zing.vn/bai-hat/']").replaceWith(function(){return'<center><embed height="80" quality="high" src="//static.mp3.zing.vn/skins/gentle/flash/mp3player.swf?xmlURL=http://mp3.zing.vn/play/?pid='+
getZingID($(this).attr("href"))+'||4&amp;songID=0&amp;_mp3=&amp;autoplay=false&amp;wmode=transparent" type="application/x-shockwave-flash" width="430" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

'});$("a[href^='http://music.go.vn/ca-khuc/']").replaceWith(function(){return'<center><embed height="180" quality="high" src="http://music.go.vn/Players/V2/Playlist/Embed/app.swf?dataURL=http://music.go.vn/Ajax/RenderXmlHandler.ashx?sid='+getGoID($(this).attr("href"))+'&assetURL=http://music.go.vn/Players/V2/Playlist/Embed/defaultSkin.swf&playingMode=http&autoPlay=true" width="430" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

'});
$("a[href^='http://nhacso.net/nghe-nhac/']").replaceWith(function(){return'<center><object width="400" height="60"><param name="allowScriptAccess" value="always"/><param name="movie" value="http://st.nhacso.net/flash/v57/embedPlaylistjs.swf?xmlPath=http://nhacso.net/flash/song/xnl/1/id/'+getNhacsoID($(this).attr("href"))+'&adsLink=&colorAux=0x0099ff&colorBorder=0x666666&typePlayer=single&autoPlay=false" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="400" height="60" src="http://st.nhacso.net/flash/v57/embedPlaylistjs.swf?xmlPath=http://nhacso.net/flash/song/xnl/1/id/'+
getNhacsoID($(this).attr("href"))+'&adsLink=&colorAux=0x0099ff&colorBorder=0x666666&typePlayer=single&autoPlay=false" quality="high" wmode="transparent" type="application/x-shockwave-flash">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;



Unknown end tag for &lt;/center&gt;

'});$("a[href='http://clip.vn/watch/']").replaceWith(function(){return'<iframe width="640" height="389" src="http://clip.vn/embed/'+getClipID($(this).attr("href"))+'" frameborder="0" allowfullscreen></iframe>'});$("a[href='http://star.zing.vn/star/phong-thu/'], a[href^='http://star.zing.vn/star/san-dien/']").replaceWith(function(){return"<center><embed src='http://star.zing.vn/flash/zingStarPlayer.swf?username=&status=karaokeshow&song_id=5006&recorder_id="+
getStarID($(this).attr("href"))+"&urlDemo=http://image.star.zing.vn/flash/&domain=http://star.zing.vn' type='application/x-shockwave-flash' wmode='transparent' width='530' height='410'>

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

"});$("a[href^='http://hcm.nhac.vui.vn/']").replaceWith(function(){return'<object tabindex="0" name="mediaplayer" id="mediaplayer" bgcolor="#000000" data="http://nhac.vui.vn//images/player.swf" type="application/x-shockwave-flash" height="60" width="670"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="true" name="seamlesstabbing"><param value="opaque" name="wmode"><param value="netstreambasepath='+
getNhacvuiID($(this).attr("href"))+'&amp;id=mediaplayer&amp;playlistfile=http%3A%2F%2Fnhac.vui.vn%2Fasx2.php%3Ftype%3D1%26id%3D256279&amp;bufferlength=5&amp;mute=false&amp;repeat=list&amp;volume=100&amp;quality=false&amp;lightcolor=3333FF&amp;screencolor=2A2A2A&amp;frontcolor=3333FF&amp;backcolor=FFFFFF&amp;shownavigation=true&amp;autostart=true&amp;item=0&amp;controlbar.position=bottom&amp;display.showmute=false&amp;logo.file=http%3A%2F%2Fnhac.vui.vn%2Fimages%2Fnhac-vui-vn.png&amp;logo.hide=false&amp;logo.position=top-right" name="flashvars">

Unknown end tag for &lt;/object&gt;

'});
$("a[href^='https://vimeo.com/']").each(function(){var b=$(this).attr("href").split("/").pop();$(this).replaceWith('<center><iframe src="http://player.vimeo.com/video/'+b+'" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen>

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/center&gt;

')});$(".content a[href*='online.print2flash.com/content']").each(function(){var b=$(this).attr("href");$(this).replaceWith('<center><EMBED src="'+b+'" allowFullScreen="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="600" height="525">

Unknown end tag for &lt;/EMBED&gt;



Unknown end tag for &lt;/center&gt;

')});
$(".content a[href*='trochoivui.com/game'], .content a[href*='trochoivui.com/giaitri']").each(function(){var b=$(this).attr("href");$(this).replaceWith('<center><EMBED src="'+b+'" quality=high bgcolor=00CCFF WIDTH="600" HEIGHT="500" NAME="game" MENU=false TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">

Unknown end tag for &lt;/EMBED&gt;



Unknown end tag for &lt;/center&gt;

')});$(".content a[href*='trochoiviet.com/game']").each(function(){var b=$(this).attr("href");$(this).replaceWith('<center><EMBED src="'+
b+'" WIDTH="600" bgcolor="#000000" HEIGHT="480" MENU="false" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">

Unknown end tag for &lt;/EMBED&gt;



Unknown end tag for &lt;/center&gt;

')})});

Unknown end tag for &lt;/script&gt;


```


Rồi dán vào mod thông báo chung -> done