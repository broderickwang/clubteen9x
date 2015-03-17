**TUT viết bởi miamor dựa trên top posters và recent topics 1 hàng cho bb3 của vk và recent topics của handsomevip.**


I, Style 1
Demo:
Pic: ![http://i44.servimg.com/u/f44/15/64/85/86/lastin10.png](http://i44.servimg.com/u/f44/15/64/85/86/lastin10.png)

Thực hiện:
CSS:

```

#content-container div#left {float: none;width: 100%}
#left .topposterc3z {float: left; width: 250px; margin-right:10px;}
#left .recent {float: right; margin-left:-100px; width:680px;}
#left .module .box-content a {margin:2px 0}
#left .module .box-content .postercp{float:right;}
#left a[href*="/t"]::before{content:counter(stt)".";counter-increment:stt;float:left;position:absolute;text-align: right;width:25px!important;margin-left:-25px;}
#left a[href*="/t"]{float:left;margin-right:264px;height:14px;overflow:hidden;padding-left:16px;}
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
```

Javascript: Tạo 1 file javascript mới, đặt In all the pages với nội dung như sau:

```

$(function(){
$('#left .module:eq(0)').addClass('topposterc3z').next().remove();
$('#left .module:eq(1)').addClass('recent').next().remove();
$('#left .module:eq(1) a[href^="/t"]').addClass('topiccp').next().remove();
$('#left .module:eq(1) a[href^="/u"]').addClass('postercp').next().remove();
$('#left .module:eq(1) .box-content').css('color',$('#left .module:eq(1) .box-content').css('background-color'));
$('#left .module:eq(1) br').addClass('clear');
});

```
Widget: ![http://i44.servimg.com/u/f44/15/64/85/86/widget15.png](http://i44.servimg.com/u/f44/15/64/85/86/widget15.png)


II, Style 2
Demo:
Pic: ![http://i44.servimg.com/u/f44/15/64/85/86/lastin11.png](http://i44.servimg.com/u/f44/15/64/85/86/lastin11.png)

Thực hiện:
CSS:

```

/*recent topics cho invision------------------------------*/
#content-container div#left {float: none;width: 100%}
#left .module .box-content a {margin:2px 0}
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
/*top posters*/
.topposter {float: left; width: 250px; margin-right:10px;} /*hiển thị top posters*/
/*most active topics*/
.hottest {float: left; width:250px; margin-left:-265px; margin-top:230px;} /*hiển thị most active topics*/
.topichot{float:left;height:14px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap; max-width:220px;}
/*recent topics*/
.recent {float: right; margin-left:-100px; width:680px;} /*hiển thị recent topics, bạn có thể chỉnh sửa chiều rộng 680px cho phù hợp với 4r*/
.topicc3z::before{content:counter(stt)".";counter-increment:stt;float:left;position:absolute;text-align: right;width:25px!important;margin-left:-25px;} /*stt trước tiêu đề bài viết, có thể xóa dòng này đi*/
.topicc3z{float:left;margin-right:262px;height:14px;overflow:hidden;padding-left:16px;text-overflow:ellipsis; white-space:nowrap; position:absolute; max-width:400px;} /*tiêu đề bài viết*/
.postercp{float:right;} /*tên người gửi cuối*/
/*recent topics cho invision------------------------------*/

```
Javascript: Tạo 1 file javascript mới, đặt In all the pages với nội dung như sau:

```

$(function(){
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(1)').addClass('hottest').next().remove();
$('#left .module:eq(1) a[href^="/t"]').addClass('topichot').next().remove();
$('#left .module:eq(2)').addClass('recent').next().remove();
$('#left .module:eq(2) a[href^="/t"]').addClass('topicc3z').next().remove();
$('#left .module:eq(2) a[href^="/u"]').addClass('postercp').next().remove();
$('#left .module:eq(2) .box-content').css('color',$('#left .module:eq(1) .box-content').css('background-color'));
$('#left .module:eq(2) br').addClass('clear');
});
```

Widget: ![http://i44.servimg.com/u/f44/15/64/85/86/widget14.png](http://i44.servimg.com/u/f44/15/64/85/86/widget14.png)


III, Style 3
Demo:
Pic: ![http://i44.servimg.com/u/f44/15/64/85/86/lastin12.png](http://i44.servimg.com/u/f44/15/64/85/86/lastin12.png)

Thực hiện:
CSS:

```

/*recent topics cho invision------------------------------*/
#content-container div#left {float: none;width: 100%}
#left .module .box-content a {margin:2px 0}
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
/*top posters*/
.topposter {float: left; width: 250px; margin-right:10px;} /*hiển thị top posters*/
/*top starters*/
.topstarter {float: right; width: 250px;} /*hiển thị top starters*/
/*most active topics*/
.hottest {float: left; width:250px; margin-left:-265px; margin-top:225px;} /*hiển thị most active topics*/
.topichot{float:left;height:14px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap; max-width:220px;} /*tên topics*/
/*most viewed topics*/
.viewed {float: right; width:250px;} /*hiển thị most viewed topics*/
.vieww{float:left;height:14px;overflow:hidden;text-overflow:ellipsis; white-space:nowrap; max-width:220px;} /*tên topics*/
/*recent topics*/
.recent {float: left; width:418px;} /*hiển thị recent topics, bạn có thể chỉnh sửa chiều rộng 680px cho phù hợp với 4r*/
.topicc3z::before{content:counter(stt)".";counter-increment:stt;float:left;position:absolute;text-align: right;width:25px!important;margin-left:-25px;} /*stt trước tiêu đề bài viết, có thể xóa dòng này đi*/
.topicc3z{float:left;margin-right:262px;height:14px;overflow:hidden;padding-left:16px;text-overflow:ellipsis; white-space:nowrap; position:absolute; max-width:180px;} /*tiêu đề bài viết*/
.postercp{float:right;} /*tên người gửi cuối*/
/*recent topics cho invision------------------------------*/
```

Javascript: Tạo 1 file javascript mới, đặt In all the pages với nội dung như sau:

```

$(function(){
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(1)').addClass('hottest').next().remove();
$('#left .module:eq(1) a[href^="/t"]').addClass('topichot').next().remove();
$('#left .module:eq(2)').addClass('recent').next().remove();
$('#left .module:eq(2) a[href^="/t"]').addClass('topicc3z').next().remove();
$('#left .module:eq(2) a[href^="/u"]').addClass('postercp').next().remove();
$('#left .module:eq(2) .box-content').css('color',$('#left .module:eq(1) .box-content').css('background-color'));
$('#left .module:eq(2) br').addClass('clear');
$('#left .module:eq(3)').addClass('topstarter').next().remove();
$('#left .module:eq(4)').addClass('viewed').next().remove();
$('#left .module:eq(4) a[href^="/t"]').addClass('vieww').next().remove();
});

```
Widget: ![http://i44.servimg.com/u/f44/15/64/85/86/widget13.png](http://i44.servimg.com/u/f44/15/64/85/86/widget13.png)

> Last style 1 hiển thị đẹp nhất khi top posters, recent topics đủ 10.
> Last style 2 3 hiển thị đẹp nhất khi top posters, top starters, most active topics, most viewed topics đủ 10, recent topics đủ 23.


> Note: Nhữg ai dùg skin CP, thay toàn bộ CSS mặc định của skin bằng cái này:

```

#forum_rules .maintitle,[href="#"]::before,.post img[src="http://illiweb.com/fa/empty.gif"],#chatbox_top+script+div img,.row1.centered + .row1.centered,#userlinks p,a[href="/u"]+br+a[href="/u"],dt+dd+dd>br,td[colspan="2"],.row1 span a+br+br,.ipbtable thead{display:none}
a:link,a:active,a:visited{text-decoration:none!important}
a[href*="/t22454"],.cp7color{color:#F00;animation:svcolor 1s infinite;-moz-animation:svcolor 1s infinite;-webkit-animation:svcolor 1s infinite;}
@keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-moz-keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-webkit-keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
.post-entry a:before{padding-right:2px;content:url(http://i44.servimg.com/u/f44/12/24/45/65/link-i10.png)}
.post-entry [href$=".jpg"]:before,.post-entry [href$=".jpeg"]:before,.post-entry [href$=".png"]:before,.post-entry [href$=".gif"]:before{padding-right:2px;content:url(http://i44.servimg.com/u/f44/12/24/45/65/links-10.png)}
.post-entry [href="/"]:before,.post-entry [href="http://diendan.chinhphuc.info"]:before{padding-right:2px;content:url(http://i44.servimg.com/u/f44/12/24/45/65/insert10.png)!important}
h3.chatbox-title{width:550px;}
h3.chatbox-title:after {content:" - không hỗ trợ trên chatbox :)";color:#F40;}
body{background:#DDD url('http://i44.servimg.com/u/f44/12/24/45/65/backgr10.png') fixed;}
#userlinks {float:right;margin-right:40px;border:2px solid #DDD;border-bottom:0;border-radius:10px 10px 0 0;}
#ipbwrapper{width:948px;min-width:0px!important;padding-top:175px;}
.row2.centered, .row1.centered {float: right;background: transparent;text-align: right;height:8px;white-space: nowrap;border: 0!important;font-size:11px;color:#8B8B8B;}
.ipbtable.index-box tr td {background:#FFF}
.ipbtable.index-box tbody tr:hover td{background:#F2E3E1}
.row2.icon{width:60%;height:52px;}
.row2.icon+td+td+.row1{width:40%;border-left:1px solid #DDD;}
.row2.icon+td+td+.row1,.row2.icon{border-bottom:1px solid #DDD!important}
.row2.icon+.row1.centered::after{content:" chủ đề"}
.row2.icon+td+.row2.centered::after{content:" bài gửi";}
.row1 span a+br+br+strong::before{content:" bởi "}
div.maintitle .contract,div.maintitle .expand{height:22px!important;width:32px!important;opacity:0;}
div.maintitle .contract{background:url(http://i45.servimg.com/u/f45/16/55/88/76/cat_mi10.png) no-repeat!important;}
div.maintitle .expand{background:url(http://i45.servimg.com/u/f45/16/55/88/76/cat_ma10.png) no-repeat!important;}
div.maintitle:hover .contract,div.maintitle:hover .expand{opacity:1}
td[colspan="4"]{border-radius:0 0 10px 10px;}
.activeusers,div[id*="ptrafic"],.module.module-advert,#qpost,.borderwrap{border-radius:10px;border:2px solid #DDD;padding:3px!important;}
#navstrip a{border-radius:0 0 10px 10px;border:2px solid #DDD;background:#FFF;border-top:0;padding:5px;}
#navstrip a:hover {background:#F40;color:#FFF!important;}
#qpost{border-bottom:2px solid #DDD!important}
#chatbox_header,.maintitle{background:#FFF!important;border-bottom:2px solid #F40!important;color:#F40!important;margin-bottom: 5px;height:22px!important}
#chatbox_header a{color:#F40!important}
#chatbox_footer{background:whiteSmoke!important;color:#FFF!important;}
#chatbox_members{height:276px;margin-top:-6px;border:0;box-shadow:0 10px 10px black;}
#chatbox_members:empty{box-shadow:none;}
.post{border-bottom:2px solid #F40!important}
#right{height:0!important;width:0!important}
#content{margin-right:0!important}
.topic-footer.clearfix {background:#FFF;}
.postprofile-details.postdetails a[href*="/u"] img{width:100px;height:100px;box-shadow:0 0 5px #000;border-radius:5px;}
.postprofile-head.post-header,.postprofile-details.postdetails{text-align:center;}
.avatar+ul{text-align:left;}
#logostrip {background:#FFF!important;border:2px solid #DDD;border-radius:0 0 10px 10px;color:#F40!important;margin:22px 0px 0px 46px;position:absolute;text-align:center!important;width:215px;top:0;}
#submenu{position:absolute;top:0;width:948px;border:2px solid #DDD;border-radius:0 0 10px 10px;border-top:0;}
#submenu ul li a:hover{background-color:#F40!important;color:#FFF!important;padding-top:10px;padding-bottom:10px;}
#submenu .clearfix{text-align:center;}
.clearfix a{color:#F40!important}
.postprofile .blog_cal-border{position:absolute;}
.row2.centered.blog_icon+.row2.centered.blog_icon+.row2,.row1.centered.blog_icon+.row1.centered.blog_icon+.row1{width:100%!important}
.box-content{border:0!important}
#navstrip li{background:none!important;}
#gfooter{border:2px solid #DDD;background:#FFF;color:#F40;border-radius:10px;padding:15px;}
#gfooter a{color:#F40!important}
#gfooter .footer-links{overflow:hidden;width:570px!important;}
.privmsg.clearfix{margin-left:25px;}
.pagination.topic-options{color:transparent;}
.pagination.topic-options a{border-radius:10px;padding:2px 5px;border:1px solid #DDD;background:#FFF;}
.pagination.topic-options a:hover{background:#F40;color:#FFF;}
div.pagination b {padding: 2px 5px;border-radius: 10px;border:1px solid #DDD;background:#F40!important;}
.dd-textarea textarea {border:1px solid #DDD!important;}
.qreply .dd-textarea{margin-left:-113px!important;width:927px!important;}
.qreply #text_editor_controls {border-radius:5px 5px 0 0;margin-bottom: -6px;margin-left: -113px;width: 917px;background: whiteSmoke;border: 1px solid #DDD;padding: 5px;}
.qreply .button2{margin-right:-7px!important;border:1px solid #DDD!important;background-image:none!important;padding:4px!important;}
.qreply .button2:hover {background:#DDD;}
#mudimPanel{background:#FFF url('http://i45.servimg.com/u/f45/16/55/88/76/bogo11.png') no-repeat right center!important;border:2px solid #DDD!important;border-radius:0 10px 10px 0;position:fixed!important;width:295px!important;height:35px;padding:11px 25px 11px 4px!important;font-size:9px!important;vertical-align: middle;bottom:100px!important;left:-302px!important;}
#mudimPanel:hover{left:-2px!important}
#right div+div+div{position:absolute;top:40px;margin-left:-348px;}
.centerer.footer-links{width:582px!important;}
.post-footer.clearfix,.postprofile-head.post-header,.postbody-head.postdetails.post-header,.post-container{background-color:transparent!important}
.post-footer.clearfix{border-top:0!important}
.left.rtl-inversion-left{width: 50%;line-height: 25px;}
#blog_comments div[id*="p"][style="background-color:#ffe5cf;"], div[class="post-container"][style="background-color:#ffe5cf;"]{background:url(http://i45.servimg.com/u/f45/16/55/88/76/medal-10.png) no-repeat center right;}
#blog_comments div[id*="p"][style="background-color:#ffe5cf;"]{background-position:top center!important;}
.post.clearfix.re-Admin{background:#FFF url(http://i44.servimg.com/u/f44/12/24/45/65/adbg1010.png) repeat-y center left}
.post.clearfix.re-Mod{background:#FFF url(http://i44.servimg.com/u/f44/12/24/45/65/mobg1010.png) repeat-y center left}
.post.clearfix.re-Security{background:#FFF url(http://i44.servimg.com/u/f44/12/24/45/65/scbg1111.png) repeat-y center left}
.forum-desc{width:420px!important;}
#qjump fieldset select {width:115px;}
.codebox.contcode{padding:5px 0 5px 0;border:2px solid #DDD;border-radius:10px;max-width:680px;box-shadow:2px 2px 5px #EBEADD}
.codebox dt{background:#FFF!important;border-bottom:2px solid #F40;}
.codebox dd{border:0;}
blockquote {border:2px solid #DDD;border-radius:10px;background:#FFF;box-shadow:2px 2px 5px #EBEADD}
blockquote cite {background:#FFF;margin:0;border-bottom:2px solid #F40;padding:0;}
.spoiler{background:#FFF;border:2px solid #DDD;border-radius:10px;box-shadow:2px 2px 5px #EBEADD}
.spoiler dt{background:transparent;border-bottom:2px solid #F40;color:#F40;}
.spoiler>dt:after{content:"▼ Click để xem";float:right;}
.thin + div{color:#FFF;margin-left:-72px;}
.thin+div a{margin:0 -12px 0 0;}
#fo_stat{text-align:justify;}
.mods+p{padding:0.4em 1em;margin:3px 1px;width:415px;color:#FFF;}
.mods+p a.gensmall{text-align:left;width:188px;display:inline-block;}
#scroll{position:fixed;right:0;top:40%;}
.msg span{line-height:14px;}
.member{border:2px solid #DDD;height:150px;border-radius:10px;}
.member p{height:105px;}
.memberlist fieldset{width:160px;float:left;}
.chatbox_row_2,.chatbox_row_1{background:transparent;}
#divcolor{width:32px;}
[id^="div"]{border:1px solid #DDD;background:#FFF!important;}
[id^="div"]:hover{background:#DDD!important;}
#chatbox_footer label{font-size:0}
.right.style-buttons #message{width:625px;}
.right.style-buttons #message:focus{height:26px!important;}
.right.style-buttons + .right{width:235px;float:left!important;}
#forum_rules .logo{vertical-align:middle;text-align:center;}
#forum_rules{border-radius:10px;color:white;text-shadow: 1px 1px 1px #000;background:#FF6161;margin-bottom:4px;font-size:14px;font-weight:bold;}
input[id="find_user"],input[type="submit"]{font-family:inherit;font-size:11px;font-weight: bold;color: white;padding: 0 8px;height: 29px;min-width: 54px;border: 1px solid #666;border-radius: 2px;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-color: #3079ED;background-color: #4D90FE;background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#4787ED));background-image: -webkit-linear-gradient(top,#4D90FE,#4787ED);background-image: -moz-linear-gradient(top,#4D90FE,#4787ED);background-image: -ms-linear-gradient(top,#4D90FE,#4787ED);background-image: -o-linear-gradient(top,#4D90FE,#4787ED);background-image: linear-gradient(top,#4D90FE,#4787ED);filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#4787ed');}
input[id="find_user"]:hover,input[type="submit"]:hover{border-color: #2F5BB7;background-color: #357AE8;background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#357AE8));background-image: -webkit-linear-gradient(top,#4D90FE,#357AE8);background-image: -moz-linear-gradient(top,#4D90FE,#357AE8);background-image: -ms-linear-gradient(top,#4D90FE,#357AE8);background-image: -o-linear-gradient(top,#4D90FE,#357AE8);background-image: linear-gradient(top,#4D90FE,#357AE8);filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#4d90fe',EndColorStr='#357ae8');}
/*CSS hóa button*/
#scroll a,.post-icon>a[href*="/privmsg?mode=post"],a[href*="topic?thank"],.post a[href="#top"],a[href*="mode=post_profile"],a[href*="mode=reply"],a[href*="mode=newtopic"],a[href*="merge?t="],a[href*="cp?mode=split"],a[href*="cp?mode=lock"],a[href*="cp?mode=move"],a[href*="cp?mode=trash"],a[href*="cp?mode=delete"],a[href*="cp?mode=unlock"],a[href*="mode=unlock&p"],a[href*="mode=lock&p"],a[href*="mode=report"],a[href*="&mode=delete"],a[href*="mode=editpost"],a[href*="mode=quote"]{font-family: Arial, Helvetica, sans-serif;font-size: 11px;white-space:nowrap; color: #6b6b6b;padding: 5px;margin: 3px;  background: -moz-linear-gradient(top,#fcfcfc 0%,#e3e4e4);background: -webkit-gradient(linear, left top, left bottom, from(#fcfcfc),to(#e3e4e4));border-radius:2px;border: 0px solid #bebebe;box-shadow:-1px 1px 1px rgba(000,000,000,0.3),inset 0px 0px 0px rgba(190,190,190,0.9);text-shadow:0px 0px 0px rgba(000,000,000,0),0px 0px 0px rgba(255,255,255,0);}
#scroll a:hover,.post-icon>a[href*="/privmsg?mode=post"]:hover,a[href*="topic?thank"]:hover,.post a[href="#top"]:hover,a[href*="mode=post_profile"]:hover,a[href*="mode=reply"]:hover,a[href*="mode=newtopic"]:hover,a[href*="cp?mode=unlock"]:hover,a[href*="merge?t="]:hover,a[href*="cp?mode=split"]:hover,a[href*="cp?mode=lock"]:hover,a[href*="cp?mode=move"]:hover,a[href*="cp?mode=trash"]:hover,a[href*="cp?mode=delete"]:hover,a[href*="mode=unlock&p"]:hover,a[href*="mode=lock&p"]:hover,a[href*="mode=report"]:hover,a[href*="&mode=delete"]:hover,a[href*="mode=editpost"]:hover,a[href*="mode=quote"]:hover{color:#fff!important;  background: -moz-linear-gradient(top,#ff4400 0%,#ff4400);background: -webkit-gradient(linear, left top, left bottom,from(#ff4400),to(#ff4400));}
.post-icon>a[href*="/privmsg?mode=post"],a[href*="mode=reply"],a[href*="mode=newtopic"]{font:bold 14px Arial,sans-serif!important}
a[href*="mode=quote"]:before{content:"Trích dẫn"}
a[href*="mode=editpost"]:before{content:"Sửa"}
a[href*="&mode=delete"]:before{content:"Xóa"}
a[href*="mode=report"]:before{content:"Báo xấu"}
a[href*="mode=lock&p"]:before{content:"Chặn"}
a[href*="mode=unlock&p"]:before{content:"Cho phép báo xấu"}
a[href*="cp?mode=delete"]:before{content:"Xóa chủ đề"}
a[href*="cp?mode=trash"]:before{content:"Cho vào sọt"}
a[href*="cp?mode=move"]:before{content:"Di chuyển"}
a[href*="cp?mode=lock"]:before{content:"Khóa chủ đề"}
a[href*="cp?mode=split"]:before{content:"Tách bài viết"}
a[href*="merge?t="]:before{content:"Gộp bài viết"}
a[href*="cp?mode=unlock"]:before{content:"Mở khóa chủ đề"}
a[href*="mode=post_profile"]:before{content:"//Viết lên tường"}
a[href*="mode=newtopic"]:before{content:"* Tạo chủ đề mới"}
a[href*="mode=reply"]:before{content:"+ Trả lời chủ đề"}
.post a[href="#top"]:before{content:"▲ Lên"}
a[href*="topic?thank"]:before{content:"★ Chọn làm câu trả lời hay nhất ❤"}
.post-icon>a[href*="/privmsg?mode=post"]:before{content:"+ Viết thư mới"}
.borderwrap a,.posting-buttons a,.post a,#mudimPanel{-webkit-transition:All .3s ease;-moz-transition:All .3s ease;-o-transition:All .3s ease;}
.post-footer {padding:4px}
.post-icon a {padding: 12px 25px!important;margin:7px}
.posting-options {margin: 2.5em 0}
#left .module:first-child{margin-bottom:10px}
form .row2.centered, form .row1.centered {float:none}
.imageshackiframe {width:542px!important;height:232px!important}
.topic-desc{max-width: 500px;}
a.nav:empty{display:none}

```
> Hoặc bạn có thể vào CSS tìm

```

.row1 span a+br+br,.ipbtable thead,#left .box-content>a+br{display:none}
```
> thay bằng

```

.row1 span a+br+br,.ipbtable thead{display:none}
```
> và xóa đoạn này đi

```

#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt;}
#left .box-content > a[href*="/t"]::before{content: counter(stt)".";counter-increment: stt;float: left;position: absolute;text-align: right;width: 25px!important;margin-left: -25px;}
#left a[href*="/t"]{width:450px;float:left;margin-right:164px;height:14px;overflow:hidden;padding-left: 16px;}
#left a[href*="/t"]:hover::after{content:"☺ (xem ngay)"}
#left a[href*="/u"]{width:160px;position:absolute;margin-left:-164px;background:#FFF;}
```
> sau đó làm tiếp các bước như trên.