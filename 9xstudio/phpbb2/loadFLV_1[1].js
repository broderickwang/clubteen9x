﻿function VanLuong_1(src,width,height){
	if(width>screen.width-100 || height>screen.height-100){
		SCwidth=screen.width-100;
		SCheight=screen.height-100;
		scrollbar="scrollbars=yes";
	}else{
		SCwidth=width;
		SCheight=height;
		scrollbar="scrollbars=no";
	}
	img_origin=window.open("","","width="+SCwidth+",height="+SCheight+",status=no,toolbar=no,"+scrollbar+",resizable=no");
	img_origin.document.write(""
+"<HTML>"
+"<HEAD>"
+"<meta http-equiv='Content-Language' content='en-us'>"
+"<TITLE>wWw.BauTroiDem.Kiss.Vn - Free Music & Download</TITLE>"
+"<META HTTP-EQUIV='Content-Type' CONTENT='text/html; charset=windows-1252'>"

+"</HEAD>"
+"<BODY BGCOLOR=#FFFFFF topmargin=5 background=images/clear.gif>"
+"<style>"
+"a:link {color: #000000; text-decoration: none;}"
+"a:visited {color: #000000; text-decoration: none;}"
+"a:hover, a:active {color: #FF0000; text-decoration: none;}"
+"</style>"

+"<p align=center>"
+"<table align=center border=0 cellpadding=6 cellspacing=1 class=tborder width=100% background=bg.gif>"
+"	<thead>"
+"		<tr>"
+"			<td class=tcat colspan=0>"
+"			<span><center><strong><FONT style='FONT-SIZE: 17pt' face='Comic Sans MS' color=#FF3333><B> [ wWw.BauTroiDem.Kiss.Vn ] </B></FONT></strong></center></span></td>"
+"		</tr>"
+"	</thead>"
+"	<tbody id=collapseobj_module_4_5342>"
+"	<tr>"
+"	<td align=center class=alt1 valign=top height=350>"
+"<center><B><font size=1 face=Tahoma>Các B&#7841;n Ch&#7901; Chút &#272;&#7875; Phim &#272;&#432;&#7907;c T&#7843;i V&#7873;...</b></p>"
+"<object classid=clsid:D27CDB6E-AE6D-11CF-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0 border=0 width=420 height=340>"
+"<param name=movie value='flvplayer.swf?autostart=true&showfsbutton=true&file="+src+"'>"
+"<param name=quality value=High>"
+"<PARAM NAME=stretchToFit VALUE=0>"
+"<PARAM NAME=volume VALUE=80>"
+"<PARAM NAME=EnableContextMenu VALUE=0>"
+"<PARAM NAME=rate VALUE=1>"
+"<PARAM NAME=balance VALUE=0>"
+"<PARAM NAME=currentPosition VALUE=0>"
+"<PARAM NAME=defaultFrame VALUE=>"
+"<PARAM NAME=playCount VALUE=10>"
+"<PARAM NAME=autoStart VALUE=-1>"
+"<PARAM NAME=currentMarker VALUE=0>"
+"<PARAM NAME=invokeURLs VALUE=-1>"
+"<PARAM NAME=baseURL VALUE=>"
+"<PARAM NAME=mute VALUE=0>"
+"<PARAM NAME=windowlessVideo VALUE=0>"
+"<PARAM NAME=enabled VALUE=-1>"
+"<PARAM NAME=fullScreen VALUE=0>"
+"<PARAM NAME=SAMIStyle VALUE=>"
+"<PARAM NAME=SAMILang VALUE=>"
+"<PARAM NAME=SAMIFilename VALUE=>"
+"<PARAM NAME=captioningID VALUE=>"
+"<PARAM NAME=enableErrorDialogs VALUE=0>"
+"<PARAM NAME=_cx VALUE=4604><PARAM NAME=_cy VALUE=3493>"
+"<embed src='flvplayer.swf?autostart=true&showfsbutton=true&file=http://bautroidem.kiss.vn/"+src+"' pluginspage=http://www.macromedia.com/go/getflashplayer type=application/x-shockwave-flash name=obj2 width=100% height=340 quality=High wmode=transparent></object>"
+"</td>"
+"	</tr>"
+"</tbody>"
+"</table>"
+"<b><font color=red>Copy đoạn mã bên đưới để đưa vào Blog của bạn ^^!</b><br><center><textarea name='Addthisgametoyourwebsite' rows='5' cols='40' onfocus='this.select()'>"
+"<table bgcolor=#ffffff border=0 height=290 width=366> <tbody><tr> <td background=images/bg_play.gif height=26 width=393><strong><font color='#000000'>Hệ thống chia sẻ nhạc trên blog của wWw.letrieuthien.com</font></strong></td> </tr> <tr> <td height=256 width=393><p align=center><embed src=flvplayer.swf width=420 height=330 type=application/x-shockwave-flash pluginspage=http://www.macromedia.com/go/getflashplayer flashvars=file=http://letrieuthien.com/"+src+"&displayheight=295&repeat=true /></p>"
+"<p style= align=center><font face=Arial size=1><font color=#ff66ff><A href=http://letrieuthien.com/>wWw.letrieuthien.com Copyright © 2010 </A></font><strong><font color=#000000></font></strong></font></p>"
+"</td> </tr></tbody></table> "
+"</textarea>"
+"<br><b><font color=red>Copy đoạn mã bên đưới gửi tặng cho bạn bè</b><br><center><textarea name='Addthisgametoyourwebsite' rows='1' cols='40' onfocus='this.select()'>"
+"flvplayer.swf?autostart=true&showfsbutton=true&file=http://letrieuthien.com/"+src+" "
+"</textarea>"
+"</BODY>"
+"</HTML>"
);
}
