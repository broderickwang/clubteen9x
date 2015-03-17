![http://i44.servimg.com/u/f44/15/64/85/86/420.jpg](http://i44.servimg.com/u/f44/15/64/85/86/420.jpg)
Demo: http://ckeditor.com/demo
Bước 1:
Administration Panel\Modules\JavaScript Codes Management:
Title: Posting CKEditor
Placement: In all pages

Javascript Code: Dán đoạn code sau vào:

```

jQuery.getScript('http://goo.gl/BFDfd');

```

Bước 2: Ẩn menu posting cũ
Administration Panel\Display\Colors\CSS: thêm vào đoạn code tương ứng sau:
phpBB2:

```

#quick_reply .row2 {
clear: both;
margin-left: auto;
margin-right: auto;
width: 95% !important;
height: 50% !important;
}

#text_editor_controls {
display: none !important;
}


```
phpBB3 & PunBB:

```

#quick_reply #textarea_content {
clear: both;
margin-left: auto;
margin-right: auto;
width: 95% !important;
height: 50% !important;
}

#text_editor_controls {
display: none !important;
}
```


Invision

```

.qreply {
clear: both;
margin-left: auto;
margin-right: auto;
width: 95% !important;
height: auto !important;
}

#text_editor_controls {
display: none !important;
}
```
```
<!--hide
/*CKEditor integration for all Forumotion boards. &copy; fmQuery 2012.*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g 1g(){8 a=1.m("1h").1i("1j");8 b=1.e("W");b.A("X","Y");b.I=\'<a B="k:Z(0)" J="\'+a+\'"><10 11="K L M" o="9://1k.1l.h/N/1m/1n/16/1o.1p" 12="K L M"></a>\';1.m("13").14("15")[0].f(b);8 c=1.e("W");c.A("X","Y");c.I=\'<a B="k:Z(0)" J="17(18,\\\'1q\\\')"><10 19="2G-1a:2H" 12="1r" 11="1r" o="9://2I.h/2J/2K/2L.2M"></a>\';1.m("13").14("15")[0].f(c)}g 1s(){8 a=1.m("1h").1i("1j");8 b=1.e("W");b.A("X","Y");b.I=\'<a B="k:Z(0)" J="\'+a+\'"><10 11="K L M" o="9://1k.1l.h/N/1m/1n/16/1o.1p" 12="K L M"></a>\';1.m("13").14("15")[0].f(b)}g 1t(){1.m("2N").A("J","17(18, \'2O\');")}$(g(){C(1.i("O")[0]){$(\'O[P="1u"]\').Q().R(\'<S 1v="1w" 19="1x: 1y 1z; d-1a: 1A;"><T N="9://1B.1C/2P"j="d/R"P="1u" 1D="2Q"></T></S>\');C(w.D.E.F("/u")==0){$(\'O[P="1E"]\').Q().R(\'<S 1v="1w" 19="1x: 1y 1z; d-1a: 1A;"><T N="9://1B.1C/2R"j="d/R"P="1E" 1D="2S"></T></S>\')}}});C(w.D.E.F("/t")==0){8 q=1.e("x");q.j="d/k";q.o="9://7.h/r/7/3.6.2/7.y";1.i("p")[0].f(q);8 s=1.e("x");s.j="d/k";s.o="9://7.h/r/7/3.6.2/1F/1G.y";1.i("p")[0].f(s);8 v=1.e("x");v.j="d/k";v.o="9://7.h/r/7/3.6.2/1H/z/z/1I.y";1.i("p")[0].f(v);8 l=1.e("1J");l.B="9://7.h/r/7/3.6.2/1K/1L/1M.U";l.1N="1O";l.j="d/U";1.i("p")[0].f(l);g 1P(a){G.1b.H.1c(a)}w.1d=g(){8 a=1e("1t()",1f);8 b=1e("1s()",1f);G.1Q("H",{1R:"1S",1T:[{4:"1",5:["1U","-","1V","1W","-","1X"]},{4:"1Y",5:["1Z","20","21","22","-","23"]},{4:"24",5:["25","26","27","28"]},{4:"z",5:["29","2a"]},{4:"2b",5:["2c"]},{4:"2d",5:["2e","2f","-","2g"]},{4:"2h",5:["2i","2j","-","2k","-","2l","2m"]},"/",{4:"2n",5:["2o","2p"]},{4:"2q",5:["2r","2T","2s","2t"]},{4:"2u",5:["2v","2w","2x","2y","2z","-","2A","2B"]}]})}}2U C(w.D.E.F("/2V")==0||w.D.E.F("/2W")==0||w.D.E.F("/2X")==0){8 q=1.e("x");q.j="d/k";q.o="9://7.h/r/7/3.6.2/7.y";1.i("p")[0].f(q);8 s=1.e("x");s.j="d/k";s.o="9://7.h/r/7/3.6.2/1F/1G.y";1.i("p")[0].f(s);8 v=1.e("x");v.j="d/k";v.o="9://7.h/r/7/3.6.2/1H/z/z/1I.y";1.i("p")[0].f(v);8 l=1.e("1J");l.B="9://7.h/r/7/3.6.2/1K/1L/1M.U";l.1N="1O";l.j="d/U";1.i("p")[0].f(l);$(g(){C(1.m("V-2C")){1.m("V-2C").i("O")[0].A("1d","2D();\\n\\t\\t\\t")}});g 2Y(a){a=1.m("2Z").30;G.1b.H.1c("[2E]"+a+"[/2E]");17(18,"1q")}g 2D(){8 a=Q.2F.1.e("x");a.I="g 1P(V) \\n\\t\\t\\t{\\n\\t\\t\\31.G.1b.H.1c(V);\\n\\t\\t}\\n\\t\\t";a.j="d/k";Q.2F.1.i("p")[0].f(a)}w.1d=g(){8 a=1e("1g()",1f);G.1Q("H",{1R:"1S",1T:[{4:"1",5:["1U","-","1V","1W","-","1X"]},{4:"1Y",5:["1Z","20","21","22","-","23"]},{4:"24",5:["25","26","27","28"]},{4:"z",5:["29","2a"]},{4:"2b",5:["2c"]},{4:"2d",5:["2e","2f","-","2g"]},{4:"2h",5:["2i","2j","-","2k","-","2l","2m"]},"/",{4:"2n",5:["2o","2p"]},{4:"2q",5:["2r","2s","2t"]},{4:"2u",5:["2v","2w","2x","2y","2z","-","2A","2B"]}]})}}',62,188,'|document|||name|items||ckeditor|var|http||||text|createElement|appendChild|function|com|getElementsByTagName|type|javascript|ss1|getElementById||src|head|js1|apps|js3|||js4|window|script|js|styles|setAttribute|href|if|location|pathname|indexOf|CKEDITOR|text_editor_textarea|innerHTML|onClick|Host|an|image|data|iframe|width|parent|html|div|object|css|smiley|span|class|cke_button|void|img|alt|title|cke_40|getElementsByClassName|cke_toolgroup||selectWysiwyg|this|style|align|instances|insertHtml|onload|setTimeout|1550|addButtonsFR|servimg|getAttribute|onclick|cdn1|iconfinder|icons|blackblue|iPhoto|png|video|YouTube|addButtonsQR|changeSMFunc|728|id|ads|margin|0px|auto|center|goo|gl|height|300|lang|en|plugins|default|link|skins|kama|editor|rel|stylesheet|emoticonp|replace|extraPlugins|bbcode|toolbar|Source|DocProps|Preview|About|basicstyles|Bold|Italic|Underline|Strike|RemoveFormat|paragraph1|JustifyLeft|JustifyCenter|JustifyRight|JustifyBlock|Font|FontSize|colors|TextColor|paragraph2|NumberedList|BulletedList|Blockquote|editing|Find|Replace|SelectAll|SpellChecker|Scayt|links|Link|Unlink|insert|Image|Table|SpecialChar|clipboard|Cut|Copy|Paste|PasteText|PasteFromWord|Undo|Redo|box|sortSmilies|youtube|smilies|vertical|middle|illiweb|fa|wysiwyg|logo_youtube|gif|cke_42|sel_smilies|3NjVs|90|yJtSQ|250|Smiley|else|privmsg|post|profile|BBcodeVideo|video_url|value|tparent'.split('|'),0,{}));
//-->```
Nguon: