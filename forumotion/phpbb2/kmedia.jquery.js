$(document).ready(function(){kmedia.add()});var kmedia={add:function(){var a=$('.postlink');$.each(a,function(key,value){value.href="javascript: kmedia.leech(\'"+value.href+"\');"})},leech:function(url){leech_url='http://plugin.hnsv.com/sinhvat/media/media.php?mode=iframe&media='+url;query="http://query.yahooapis.com/v1/public/yql?"+"q=select%20*%20from%20html%20where%20url%3D%22"+encodeURIComponent(leech_url)+"%22&format=xml'&callback=?";$.getJSON(query,function(data){if(data.results[0]){var data=data.results[0];data=htmlspecialchars_decode(data,0);kmedia.show(data,url)}})},show:function(data,link){var elem=$('<div>',{id:'media',html:'<b>kMedia by la.sinhvat</b><img id="close" onclick="kmedia.close();" title="Đóng (X)" style="float:right;cursor:pointer" src="http://plugin.hnsv.com/sinhvat/media/x.png" />'+data+'<a href="'+link+'" target="_blank">Xem tại trang chủ</a>'});kmedia.close();elem.hide().appendTo('body').slideDown()},close:function(){$('#media').remove()}};function htmlspecialchars_decode(string,quote_style){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'){quote_style=2}string=string.toString().replace(/&lt;/g,'<').replace(/&gt;/g,'>');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true}if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true}else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]]}}quote_style=optTemp}if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/&#0*39;/g,"'")}if(!noquotes){string=string.replace(/&quot;/g,'"')}string=string.replace(/&amp;/g,'&');return string}