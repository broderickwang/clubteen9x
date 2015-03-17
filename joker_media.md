Các trang hỗ trợ:
```

mp3.zing.vn
nhaccuatui.com
nhacso.net
nhac.vui.vn
youtube
star.zing.vn
clip.vn
music.go.vn
nhacvn.net
nhincuoi.com
vimeo.com
dailymotion.com
```
và tất cả các link có đuôi swf


JMedia dc tạo ra nhằm mục đích đơn giản hóa các thao tác của người dùng trên forum. Nên việc chèn cũng rất đơn giản, với hầu hết các link dc hỗ trợ bên trên,


nhạc không hình
các bạn chỉ cần dán link trực tiếp vào bài viết thì nó sẽ chạy.

với dạng video
Nhưng với 1 số link, cụ thể là video và playlist từ mp3.zing.vn, tất cả link từ nhac.vui.vn thì dán link trực tiếp nó ko chạy, và ở đây phải hiểu nó là 1 link có đuôi dạng swf. Cách chèn như sau: Trong phần chia sẻ, bạn copy phần Nhúng Forum, sau đó dán vào bài viết, xóa bỏ 2 thẻ [FLASH](FLASH.md) và [/FLASH] ở 2 đầu đi, thế là xong.


hướng dẫn cho code sau vào cuối vewtopic
```
<script src="http://www.hotrofm.com/h29-page" type="text/javascript">

Unknown end tag for &lt;/script&gt;

```
```

function getNhacvnID(b){a=b.split("/");a.pop();return a.pop().split("-").pop()}function getZingID(b){return b.split("/").pop().split(".")[0]}function getGoID(b){return b.split("/").pop().split(".")[0]}function getNhacsoID(b){a=b.split(".");a.pop();return a.pop()}function getClipID(b){return b.split(",").pop().split("?")[0]}function getStarID(b){a=b.split(".");a.pop();return a.pop()}function getNhacvuiID(b){return b.split("/").pop()}function getWidth(b){a = b.split("width").pop();return a.slice(1, 4);}function getHeight(b){a = b.split("height").pop();return a.slice(1, 4);}function getNCTmvID(b){a=b.split("/").pop().split(".")[1];return a;}function getDailyID(b){a=b.split("/").pop().split("_")[0];return a;}

$(function(){$(".content a[href='http://www.youtube.com/watch?v=']").each(function () {var link = $(this).attr('href').replace('watch?v=','v/');if($("a[href*='width'], a[href*='height']").length){var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));}else {var width = 425;var height = 350;};$(this).replaceWith('<center><iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/' + link.slice(25,36) + '" frameborder="0" allowfullscreen></iframe><br/><img src="http://img.youtube.com/vi/' + link.slice(25,36) + '/1.jpg"/><img src="http://img.youtube.com/vi/' + link.slice(25,36) + '/2.jpg"/><img src="http://img.youtube.com/vi/' + link.slice(25,36) + '/3.jpg"/></center>');});$("a[href='http://youtu.be/']").each(function () {var link = $(this).attr('href');if($("a[href*='width'], a[href*='height']").length){var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));}else {var width = 425;var height = 350;};$(this).replaceWith('<center><iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/' + link.slice(16,27) + '" frameborder="0" allowfullscreen>

Unknown end tag for &lt;/iframe&gt;

<br/><img src="http://img.youtube.com/vi/' + link.slice(16, 27) + '/1.jpg"/><img src="http://img.youtube.com/vi/' + link.slice(16, 27) + '/2.jpg"/><img src="http://img.youtube.com/vi/' + link.slice(16, 27) + '/3.jpg"/>

Unknown end tag for &lt;/center&gt;

');});$("a[href='http://www.dailymotion.com/video/']").each(function(){if ($("a[href*='width'], a[href*='height']").length) {var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));} else {var width = 480;var height = 324;};$(this).replaceWith('<center><iframe frameborder="0" width="'+width+'" height="'+height+'" src="http://www.dailymotion.com/embed/video/'+getDailyID($(this).attr('href'))+'?theme=pink_paradise&foreground=%23E02C72&highlight=%23BF4B78&background=%23260F18"></iframe></center>');});$("a[href*='http://www.nhaccuatui.com/mv/']").each(function(){if ($("a[href*='width'], a[href*='height']").length) {var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));} else {var width = 640;var height = 385;};$(this).replaceWith('<center><embed src="http://www.nhaccuatui.com/mv/xem-clip/'+getNCTmvID($(this).attr("href"))+'" flashvars="target=blank&autostart=false" allowscriptaccess="always" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="'+width+'" height="'+height+'"></embed></center>');});$("a[href='http://vimeo.com/']").each(function(){if ($("a[href*='width'], a[href*='height']").length) {var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));} else {var width = 500;var height = 281;};var b=$(this).attr("href").split("/").pop();$(this).replaceWith('<center><iframe src="http://player.vimeo.com/video/'+b+'" width="'+width+'" height="'+height+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen>

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/center&gt;

');});$("a[href*='.swf'],a[href*='doc.php']").each(function(){if ($("a[href*='width'], a[href*='height']").length) {var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));} else {var width = 425;var height = 350;};var c=$(this).attr("href").split("&")[0];$(this).replaceWith('<center><EMBED src="'+
c+'" WIDTH="'+width+'" bgcolor="#000000" HEIGHT="'+height+'" MENU="false" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">

Unknown end tag for &lt;/EMBED&gt;



Unknown end tag for &lt;/center&gt;

');});$("a[href='http://clip.vn/watch/']").each(function(){if ($("a[href*='width'], a[href*='height']").length) {var width = getWidth($(this).attr("href"));var height = getHeight($(this).attr("href"));} else {var width = 640;var height = 389;};$(this).replaceWith('<center><iframe width="'+width+'" height="'+height+'" src="http://clip.vn/embed/'+getClipID($(this).attr("href"))+'" frameborder="0" allowfullscreen></iframe><center>');});$("a[href='http://www.nhaccuatui.com/nghe?L=']").each(function(){$(this).replaceWith('<center><embed src="http://www.nhaccuatui.com/l/'+$(this).attr('href').slice(33)+'" flashvars="target=blank&autostart=false" allowscriptaccess="always" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="300" height="400">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

');});$("a[href^='http://www.nhincuoi.com/']").each(function(){var b=$(this).attr("href");$(this).replaceWith('<center><embed src="http://www.nhincuoi.com/html/flash/player.swf?file='+b+'/export&controlbar=over&stretching=exactfit&backcolor=0x000000&frontcolor=0xCCCCCC&lightcolor=0x557722&autostart=false&skin=http://www.nhincuoi.com/html/flash/skin.swf&shuffle=false&repeat=list&image=http://www.nhincuoi.com/hinh/2012/09/09/_2012090903231215MPj.thumb.jpg&logo=http://www.nhincuoi.com/html/images/client/vlogo.png&enablejs=true" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="400" height="300" quality="High" scale="NoBorder" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

')});
$("a[href='http://www.nhacvn.net/nghe-bai-hat-']").replaceWith(function(){return"<center><embed width='436' height='300' flashvars='file=http://www.nhacvn.net/"+getNhacvnID($(this).attr("href"))+".xml&skin=http://www.nhacvn.net/player/stylish.swf&autostart=false&repeat=always' wmode='opaque' allowscriptaccess='always' allowfullscreen='true' quality='high' name='mpl' id='mpl' src='http://www.nhacvn.net/player/player.swf' type='application/x-shockwave-flash'></center>"});$("a[href='http://www.nhaccuatui.com/nghe?M=']").each(function(){$(this).replaceWith('<center><embed src="http://www.nhaccuatui.com/m/'+$(this).attr("href").slice(33)+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" flashvars="&autostart=false" width="300" height="300">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

')});$("a[href^='http://mp3.zing.vn/bai-hat/']").replaceWith(function(){return'<center><embed height="80" quality="high" src="http://static.mp3.zdn.vn/skins/mp3_main/flash/zing_mp3_player_v2.7_test.swf?xmlURL=http://mp3.zing.vn/play/?pid='+
getZingID($(this).attr("href"))+'||4&amp;songID=0&amp;_mp3=&amp;autoplay=false&amp;wmode=transparent" type="application/x-shockwave-flash" width="430" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

'});$("a[href^='http://music.go.vn/ca-khuc/']").replaceWith(function(){return'<center><embed height="180" quality="high" src="http://music.go.vn/Players/V2/Playlist/Embed/app.swf?dataURL=http://music.go.vn/Ajax/RenderXmlHandler.ashx?sid='+getGoID($(this).attr("href"))+'&assetURL=http://music.go.vn/Players/V2/Playlist/Embed/defaultSkin.swf&playingMode=http&autoPlay=false" width="430" wmode="transparent">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

'});
$("a[href^='http://nhacso.net/nghe-nhac/']").replaceWith(function(){return'<center><embed width="400" height="60" src="http://st.nhacso.net/flash/v57/embedPlaylistjs.swf?xmlPath=http://nhacso.net/flash/song/xnl/1/id/'+
getNhacsoID($(this).attr("href"))+'&adsLink=&colorAux=0x0099ff&colorBorder=0x666666&typePlayer=single&autoPlay=false" quality="high" wmode="transparent" type="application/x-shockwave-flash">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

'});$("a[href='http://star.zing.vn/star/phong-thu/'], a[href='http://star.zing.vn/star/san-dien/']").replaceWith(function(){return"<center><embed src='http://star.zing.vn/flash/zingStarPlayer.swf?username=&status=karaoke&song_id="+
getStarID($(this).attr("href"))+"&recorder_id=&urlDemo=http://image.star.zing.vn/flash/&domain=http://star.zing.vn' type='application/x-shockwave-flash' wmode='transparent' width='530' height='410'>

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/center&gt;

"});});```
code được viết bới joker team


VD :mp3.zing
link trực tiếp
```
http://mp3.zing.vn/bai-hat/Anh-Se-Ra-Di-Ho-Quang-Hieu/ZW6WB9D8.html
```

hiện