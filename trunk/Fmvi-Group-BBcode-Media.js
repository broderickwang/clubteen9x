$(function(){$("a[href$='[/media]']").each(function(){var bbcodemedia=$(this).html().slice($(this).html().indexOf("http://"),$(this).html().indexOf("[/media]"));$(this).before('<a rel="BBcodeMedia" href="'+bbcodemedia+'">Loading...</a>');$(this).remove()});$("<button class=\"button2\" onclick=\"bbfontstyle('[media]','[/media]');return false\"><img src=\"http://media.vina365.biz/images/media_icon.gif\" height=\"16px\"/></button> <img src=\"http://illiweb.com/fa/wysiwyg/separator.png\" style=\"vertical-align: middle;\"> ").insertBefore("span#text_edit input.button2[value='Others']");$("a[href*=zippyshare.com][href$=file.html][rel='BBcodeMedia']").each(function(){var zippy=this.href.slice(7,this.href.indexOf("/v/"));var share=this.href.slice(this.href.indexOf("/v/")+3,this.href.indexOf("/file.html"));var zippyShare='height=50&width=300&file=http://'+zippy+'/downloadMusic%3Fkey%3D'+share+'%26time%3D1314532144&volume=80&autostart=false&frontcolor=0x000000&backcolor=0xffffff&lightcolor=0x000000&type=flv';$('<div align="center"><object id="mpl" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="300" height="50"><param name="flashvars" value="'+zippyShare+'"><param name="src" value="http://'+zippy+'/swf/player.swf"><param name="wmode" value="transparent" /><embed flashvars="'+zippyShare+'" allowfullscreen="false" quality="high" name="mpl" id="mpl" style="" src="http://'+zippy+'/swf/player.swf" type="application/x-shockwave-flash" width="300" wmode="transparent" height="50"></object></div>').insertAfter(this);$(this).remove()});$("a[href*=www.youtube.com/watch][rel='BBcodeMedia']").each(function(){var youtube=this.href.slice(this.href.indexOf("v=")+2,this.href.indexOf("v=")+13);var linkytb='http://www.youtube.com/v/'+youtube+'?version=3&hl=en_US&rel=0';$('<div align="center"><object width="480" height="390"><param name="movie" value="'+linkytb+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="'+linkytb+'" type="application/x-shockwave-flash" width="480" height="390" allowscriptaccess="always" allowfullscreen="true"></embed></object><br/><img style="padding: 5px;" src="http://img.youtube.com/vi/'+youtube+'/1.jpg"/>    <img style="padding: 5px;" src="http://img.youtube.com/vi/'+youtube+'/2.jpg"/>    <img style="padding: 5px;" src="http://img.youtube.com/vi/'+youtube+'/3.jpg"/></div>').insertAfter(this);$(this).remove()});$("a[href*=www.dailymotion.com/video][rel='BBcodeMedia']").each(function(){var dailymotion=this.href.slice(this.href.indexOf("/video/")+7,this.href.indexOf("_"));var linkdlm='http://www.dailymotion.com/embed/video/'+dailymotion+'?width=560';$('<div align="center"><iframe frameborder="0" width="560" height="420" src="'+linkdlm+'"></iframe><br /></div>').insertAfter(this);$(this).remove()});$("a[href*='nhaccuatui.com/nghe?L='][rel='BBcodeMedia']").each(function(){var xlistnct=this.href.slice(33,45);var listnct='http://www.nhaccuatui.com/l/'+xlistnct;$('<div align="center"><object width="300" height="400">  <param name="movie" value="'+listnct+'" />  <param name="quality" value="high" />  <param name="wmode" value="transparent" />  <embed src="'+listnct+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="300" height="400"></embed></object></div>').insertAfter(this);$(this).remove()});$("a[href*='nhaccuatui.com/nghe?M='][rel='BBcodeMedia']").each(function(){var imgnct=this.href.slice(33,43);var linknct='http://www.nhaccuatui.com/m/'+imgnct;$('<div align="center"><object width="300" height="50"><param name="movie" value="'+linknct+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed src="'+linknct+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="300" height="50"></embed></object></div>').insertAfter(this);$(this).remove()});$("a[href*='http://www.nhaccuatui.com/mv4u/xem-clip/'][rel='BBcodeMedia']").each(function(){var zimgnct=this.href.slice(40,52);var zlinknct='http://www.nhaccuatui.com/mv/xem-clip/'+zimgnct;$('<div align="center"><object width="640" height="410"><param name="movie" value="'+zlinknct+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed src="'+zlinknct+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" width="640" height="410"></embed></object></div>').insertAfter(this);$(this).remove()});$("a[href^='http://'][href*='photobucket.com/albums/'][rel='BBcodeMedia']").each(function(){var bucketcheck=this.href+'?';var photobucket=bucketcheck.slice(8,bucketcheck.indexOf("?"));var slidebucket='rssFeed=http://feed'+photobucket+'feed.rss';$('<div align="center"><div style="width:480px;text-align:right;"><embed width="480" height="360" src="http://static.pbsrc.com/flash/rss_slideshow.swf" flashvars="'+slidebucket+'" type="application/x-shockwave-flash" wmode="transparent" /><a href="http://photobucket.com/redirect/album?showShareLB=1" target="_blank"><img src="http://pic.photobucket.com/share/icons/embed/btn_geturs.gif" style="border:none;" /></a><a href="'+this.href+'" target="_blank"><img src="http://pic.photobucket.com/share/icons/embed/btn_viewall.gif" style="border:none;" /></a></div></div>').insertAfter(this);$(this).remove()});$("a[href^='http://www.nhacvn.net/nghe-bai-hat'][href$='html'][rel='BBcodeMedia']").each(function(){var nhacvnngan=this.href.slice(22);var nhacvnmaso=nhacvnngan.indexOf("/");var ximgnhacvn=nhacvnngan.slice(13,nhacvnmaso);var xlinknhacvn='file=http://www.nhacvn.net/'+ximgnhacvn+'.xml&skin=http://www.nhacvn.net/player/stylish.swf&autostart=false&repeat=always';$("<div align='center'><embed width='436' height='300' flashvars='"+xlinknhacvn+"' wmode='opaque' allowscriptaccess='always' allowfullscreen='true' quality='high' name='mpl' id='mpl' src='http://www.nhacvn.net/player/player.swf' type='application/x-shockwave-flash'></div>").insertAfter(this);$(this).remove()});$("a[href^='http://www.nhacvn.net/nghe-album'][href$='html'][rel='BBcodeMedia']").each(function(){var xnhacvnngan=this.href.slice(22);var xnhacvnmaso=xnhacvnngan.indexOf("/");var imgnhacvn=xnhacvnngan.slice(11,xnhacvnmaso);var linknhacvn='playlistfile=http://www.nhacvn.net/playalbum_'+imgnhacvn+'.xml&playlist=bottom&autostart=true&repeat=list&backcolor=000000&frontcolor=ED1556&lightcolor=333333';$("<div align='center'><embed width='434' height='450' flashvars='"+linknhacvn+"' wmode='opaque' allowscriptaccess='always' allowfullscreen='true' quality='high' name='mpl' id='mpl' src='http://www.nhacvn.net/player/player.swf' type='application/x-shockwave-flash'></div>").insertAfter(this);$(this).remove()});$("a[href^='http://nhacso.net/nghe-album'][href$='html'][rel='BBcodeMedia'], a[href^='http://nhacso.net/nghe-playlist'][href$='html'][rel='BBcodeMedia']").each(function(){var xhtmlnhacso=this.href.indexOf(".html");var xnhacsohtml=this.href.slice(29,xhtmlnhacso);var xxoanhacso=xnhacsohtml.indexOf(".");var xlengthso=xxoanhacso.length;var xnhacso=xnhacsohtml.slice(xxoanhacso+1,xlengthso);var xlinksovn='http://st.nhacso.net/flash/v55/embedPlaylistjs.swf?xmlPath=http://nhacso.net/flash/album/xnl/1/uid/1178050012,'+xnhacso+',1310888945&adsLink=&colorAux=0x0099ff&colorBorder=0x666666&typePlayer=playlist&autoPlay=false';$('<div align="center"><object width="400" height="195"><param name="allowScriptAccess" value="always" /><param name="movie" value="'+xlinksovn+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="400" height="195" src="'+xlinksovn+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>').insertAfter(this);$(this).remove()});$("a[href^='http://nhacso.net/nghe-nhac'][href$='html'][rel='BBcodeMedia']").each(function(){var htmlnhacso=this.href.indexOf(".html");var nhacsohtml=this.href.slice(28,htmlnhacso);var xoanhacso=nhacsohtml.indexOf(".");var lengthso=xoanhacso.length;var nhacso=nhacsohtml.slice(xoanhacso+1,lengthso);var linksovn='http://st.nhacso.net/flash/v55/embedPlaylistjs.swf?xmlPath=http://nhacso.net/flash/song/xnl/1/id/'+nhacso+'&adsLink=&colorAux=0x0099ff&colorBorder=0x666666&typePlayer=single&autoPlay=false';$('<div align="center"><object width="400" height="60"><param name="allowScriptAccess" value="always" /><param name="movie" value="'+linksovn+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="400" height="60" src="'+linksovn+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>').insertAfter(this);$(this).remove()});$("a[href*='nhac.vui.vn'][href*='-clip'][href*='html'][rel='BBcodeMedia']:not('a[href*=-popupa]')").each(function(){var ynhacvuithieu=this.href.slice(29,this.href.length);var ymasonhacvui=/\d{3,}/g;var yanhacso=ynhacvuithieu.match(ymasonhacvui)+",";var yhtmlnhacso=yanhacso.indexOf(",");var yimgvui=yanhacso.slice(0,yhtmlnhacso);var ylinkvui='playlistfile=http://nhac.vui.vn/asx2.php%3Ftype%3D1%26id%3D'+yimgvui+'autostart=true&repeat=always&controlbar=bottom&';$('<div align="center"><embed type="application/x-shockwave-flash" src="http://nhac.vui.vn/upload/nhacvui-player.swf" style="" id="mpl" name="mpl" quality="high" allowfullscreen="true" allowscriptaccess="always" wmode="opaque" flashvars="'+ylinkvui+'" width="508" height="400"></div>').insertAfter(this);$(this).remove()});$("a[href*='nhac.vui.vn'][href*='-m'][href*='html'][rel='BBcodeMedia']:not('a[href*=-clip], a[href*=-popupa][rel='BBcodeMedia']')").each(function(){var xnhacvuithieu=this.href.slice(29,this.href.length);var xmasonhacvui=/\d{3,}/g;var xanhacso=xnhacvuithieu.match(xmasonhacvui)+",";var xhtmlnhacso=xanhacso.indexOf(",");var ximgvui=xanhacso.slice(0,xhtmlnhacso);var xlinkvui='playlistfile=http://nhac.vui.vn%2Fasx2.php%253Ftype%253D1%2526id%253D'+ximgvui+'&frontcolor=3333FF&lightcolor=3333FF&screencolor=2A2A2A&bufferlength=10&item=0&volume=100&playlistsize=40&autostart=true&repeat=always&controlbar=bottom&dock=false&plugins=http://nhac.vui.vn/upload/players/spectrumvisualizer-1.swf,gapro-1&spectrumvisualizer.effect=reflection&';$('<div align="center"><embed type="application/x-shockwave-flash" src="http://nhac.vui.vn/upload/nhacvui-player.swf" style="" id="mpl" name="mpl" quality="high" allowfullscreen="true" allowscriptaccess="always" wmode="opaque" flashvars="'+xlinkvui+'" width="508" height="60"></div>').insertAfter(this);$(this).remove()});$("a[href^='http://www.nhincuoi.com'][rel='BBcodeMedia']").each(function(){var linknhincuoi='http://www.nhincuoi.com/html/flash/player.swf?file='+this.href+'/export&controlbar=over&stretching=exactfit&backcolor=0x000000&frontcolor=0xCCCCCC&lightcolor=0x557722&autostart=false&skin=http://www.nhincuoi.com/html/flash/skin.swf&shuffle=false&repeat=list&image=http://i48.servimg.com/u/f48/16/58/89/73/logofm11.jpg&enablejs=true';$('<div align="center"><embed src="'+linknhincuoi+'" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="480" height="385" quality="High" scale="NoBorder" wmode="transparent"></embed></div>').insertAfter(this);$(this).remove()});$("a[href^='http://vimeo.com'][rel='BBcodeMedia']").each(function(){var imgvimeo=this.href.slice(17);var linkvimeo='http://player.vimeo.com/video/'+imgvimeo+'?title=0&byline=0&portrait=0';$('<div align="center"><iframe src="'+linkvimeo+'" width="480" height="385" frameborder="0"></iframe></div>').insertAfter(this);$(this).remove()});$("a[href^='http://clip.vn/watch'][rel='BBcodeMedia']").each(function(){var cipvn=this.href+"?";var imgclipvn=cipvn.slice(cipvn.indexOf(",")+1,cipvn.indexOf("?"));var linkclipvn='http://clip.vn/w/'+imgclipvn;$("<div align='center'><object width='480' height='385'><param name='movie' value='"+linkclipvn+"'/><param name='allowFullScreen' value='true'/><param name='allowScriptAccess' value='always'/><embed type='application/x-shockwave-flash' allowFullScreen='true' allowScriptAccess='always' width='480' height='385' src='"+linkclipvn+"' ></embed></object></div>").insertAfter(this);$(this).remove()});$("a[href^='http://www.metacafe.com/watch/'][rel='BBcodeMedia']").each(function(){var metavn=this.href+"?";var imgacafe=metavn.slice(30,metavn.indexOf("?")-2);var linkacafe='http://www.metacafe.com/fplayer/'+imgacafe+'.swf';$('<div align="center"><embed flashVars="playerVars=autoPlay=no" src="'+linkacafe+'" width="540" height="304" wmode="transparent" allowFullScreen="true" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>').insertAfter(this);$(this).remove()});$("a[href^='http://megavideo.com/?v'][rel='BBcodeMedia']").each(function(){var imgmega=this.href.slice(24,32);var linkmega='http://wwwstatic.megavideo.com/mv_player3.swf?image=http://i48.servimg.com/u/f48/16/58/89/73/logofm11.jpg&v='+imgmega;$('<div align="center"><object width="450" height="330"><param name="movie" value="'+linkmega+'"></param><param name="allowFullScreen" value="true"></param><embed src="'+linkmega+'" type="application/x-shockwave-flash" allowfullscreen="true" width="450" height="330"></embed></object></div>').insertAfter(this);$(this).remove()});$("a[href^='http://mp3.zing.vn/bai-hat'][rel='BBcodeMedia']").each(function(){var baihatzing=this.href.slice(this.href.indexOf(".html")-8,this.href.indexOf(".html"));var musiczing='http://static.mp3.zing.vn/skins/mp3_main/flash/mp3Player_new.swf?songID=0&autoplay=flase&xmlURL=http://mp3.zing.vn/play/?pid='+baihatzing+'||4';$('<div align="center"><object width="505" height="80"><param name="movie" value="'+musiczing+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="505" height="80" src="'+musiczing+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>').insertAfter(this);$(this).remove()});$("a[href^='http://mp3.zing.vn/video-clip'][rel='BBcodeMedia']").each(function(){var videozing=this.href.slice(this.href.indexOf(".html")-8,this.href.indexOf(".html"));var clipzing='http://static.mp3.zing.vn/skins/mp3_main/flash/channelzPlayer.swf?xmlURL=http://mp3.zing.vn/play/?pid='+videozing+'||6?autoplay=false&wmode=transparent&1';$('<div align="center"><object width="505" height="318"><param name="movie" value="'+clipzing+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="505" height="315" src="'+clipzing+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>').insertAfter(this);$(this).remove()});$("a[href^='http://mp3.zing.vn/album'][rel='BBcodeMedia'], a[href^='http://mp3.zing.vn/playlist'][rel='BBcodeMedia']").each(function(){var albumzing=this.href.slice(this.href.indexOf(".html")-8,this.href.indexOf(".html"));var playlistzing='http://static.mp3.zing.vn/skins/mp3_main/flash/mp3playlist.swf?xmlURL=http://mp3.zing.vn/play/?pid='+albumzing+'||1?autoplay=false&wmode=transparent';$('<div align="center"><object width="430" height="430"><param name="movie" value="'+playlistzing+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><embed width="430" height="430" src="'+playlistzing+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>').insertAfter(this);$(this).remove()});$("a[href^='http://photo.apps.zing.vn/'][href*='/slide/id/'][rel='BBcodeMedia']").each(function(){var slidezing=this.href.replace("/slide/slide/","/slide/get-slide/");var srcslidezing='xml_path='+slidezing;$('<div align="center"><embed height="400" width="500" wmode="transparent" flashvars="'+srcslidezing+'" allowfullscreen="true" quality="high" bgcolor="#333333" name="flickr_lung" id="flickr_lung" style="" src="http://img-photo.apps.zing.vn/swf/slideshow.swf" type="application/x-shockwave-flash"></div>').insertAfter(this);$(this).remove()});$("a[href^='http://photo.tamtay.vn/'][href*='/view/'][rel='BBcodeMedia']").each(function(){var phototamtay=this.href.slice(this.href.indexOf("/view/")+6);var slidetamtay=phototamtay.slice(0,phototamtay.indexOf("/")+1);var srctamtay='http://photo.tamtay.vn/misc/slideshow.swf?ver=1.2&file=http://photo.tamtay.vn/slide/'+slidetamtay+'&overstretch=none&enablejs=false&linkfromdisplay=true';$('<div align="center"><embed type="application/x-shockwave-flash" src="'+srctamtay+'" quality="high" allowfullscreen="true" allowsciptaccess="always" height="420" width="550"></div>').insertAfter(this);$(this).remove()});$("a[href^='http://music.tamtay.vn/play/'][rel='BBcodeMedia']").each(function(){var musictamtay=this.href.slice(this.href.indexOf("/play/")+6);var playtamtay=musictamtay.slice(0,musictamtay.indexOf("/")+1);var srcplaytamtay='http://music.tamtay.vn/tool/embed/song/'+playtamtay+'?width=460';$('<div align="center"><iframe title="Tamtay music player" width="460" height="24" src="'+srcplaytamtay+'" frameborder="0"></iframe>').insertAfter(this);$(this).remove()})});