$(function(){$("a[href*=zippyshare.com][href$=file.html]").each(function(){var zippy = this.href.slice(7,this.href.indexOf("/v/"));var share = this.href.slice(this.href.indexOf("/v/")+3,this.href.indexOf("/file.html"));var zippyShare='height=50&width=300&file=http://'+zippy+'/downloadMusic%3Fkey%3D'+share+'%26time%3D1314532144&volume=80&autostart=false&frontcolor=0x000000&backcolor=0xffffff&lightcolor=0x000000&type=flv';$('<div align="center"><object id="mpl" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="300" height="50"><param name="flashvars" value="'+zippyShare+'"><param name="src" value="http://'+zippy+'/swf/player.swf"><param name="wmode" value="transparent" /><embed flashvars="'+zippyShare+'" allowfullscreen="false" quality="high" name="mpl" id="mpl" style="" src="http://'+zippy+'/swf/player.swf" type="application/x-shockwave-flash" width="300" wmode="transparent" height="50"></object></div>').insertAfter(this);$(this).remove();});});