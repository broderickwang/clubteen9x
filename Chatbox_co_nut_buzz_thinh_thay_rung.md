Chat box tự đăng nhập + có nút buzz làm rung màn hình + có ông thầy pro cười nhăn răng

Hướng dẫn :

Bước 1 :
MODULES >> HTML pages management tạo 1 HTML mới


Title **: Chatbox pro
Do you wish to use your forum header and footer ? : Không
Use this page as homepage ? : Không
HTML source** : Cho code sau vào


Vì code chat box dài quá nên các bạn vào đây để dow code:


```
<script src="http://diendan.clublh.us.to/11828.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<meta http-equiv="Content-Type" content="text/html; charset=utf-8">



<body class="chatbox" onload="CB_disconnect();ajax_refresh_chatbox('?archives=1');if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');">




<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="content-type" content="text/html; charset=utf-8"><title>-‘๑’ Chat Room -‘๑’-

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-script-type" content="text/javascript"><meta http-equiv="content-style-type" content="text/css">
<style type="text/css"> body {
background:#51a1d5 url("http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/Untitled-1-1.png") repeat-x top left;
color: #ac0808;
}
* html {
scrollbar-face-color: #;
scrollbar-highlight-color: #;
scrollbar-shadow-color: #;
scrollbar-3dlight-color: #;
scrollbar-arrow-color: #;
scrollbar-track-color: #;
scrollbar-darkshadow-color: #;
}
*+ html {
scrollbar-face-color: #;
scrollbar-highlight-color: #;
scrollbar-shadow-color: #;
scrollbar-3dlight-color: #;
scrollbar-arrow-color: #;
scrollbar-track-color: #;
scrollbar-darkshadow-color: #;
}
th,td,p {
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;}
a img {
border: none;
}

/* Links */

/* a:link,a:active,a:visited {
color : #2eb300;
}
*/
a:link{
color: #2eb300;
}
a:visited{
color: #2eb300;
}
a:active{
color: #2eb300}
a:hover{
text-decoration: none!important;
color : blue;
}
a{text-decoration: none!important;}
hr{
height: 0;
border: solid #d1d7dc 0;
border-top-width: 1px;
}
.bodyline{
background-color: #;width: 1007px;
}
#page-body{background: transparent url(http://i23.servimg.com/u/f23/16/03/04/56/body_b10.png) repeat-y top left;padding: 0 50px;}
.forumline{
background-color: #daffe3;border: 2px solid #008bff;-moz-border-radius: 4px; border-radius: 4px;padding-left: 10px; padding-right: 10px; padding-top:10px; padding-bottom: 10px;
}
td.row1,td.row3.over:hover {
background-color: #fff;border-radius: 2px;-moz-border-radius: 2px;
}
td.row2,td.row1.over:hover {
background-color: #fff;border-radius: 2px;-moz-border-radius: 2px;
}
td.row3{
background: #fff url(http://i1196.photobucket.com/albums/aa406/duy0307/a10.jpg);border: 1px solid #fff; border-radius: 2px;-moz-border-radius: 2px;
}
td.rowpic {
background-color: #f30000;height: 24px!important;
background-image: url("http://i36.servimg.com/u/f36/11/96/49/61/head210.png");
css}
th {
color: yellow!important;
font-size: 11px;
font-weight : bold;
background-color: #006699;
height: 24px;
background-image: url("http://i36.servimg.com/u/f36/11/96/49/61/head210.png");
padding: 0px 3px;border: 1px #fff solid;
}
th .genmed{color: yellow!important;}th .gen{color: yellow!important;}th .gensmall{color: yellow!important;}
td.cat,td.catHead,td.catSides,td.catLeft,td.catRight,td.catBottom {
background-image: url("http://i36.servimg.com/u/f36/11/96/49/61/head210.png");
background-color:#dee3e7;
height: 24px!important;color: yellow!important;border: 1px #fff solid!important;
}
td.cat,td.catHead,td.catBottom {
height: 24px;border: 1px #fff solid!important;
}
th.thHead,th.thSides,th.thTop,th.thLeft,th.thRight,th.thBottom,th.thCornerL,th.thCornerR {
font-weight: bold;
color: yellow!important;
border: 1px #fff solid!important;background-image: url(http://i36.servimg.com/u/f36/11/96/49/61/head210.png);

/*height: 20px;
*/
}
ul.profile_field_list li {
float: left;
width: 100px !important; /*chieu rong tuy y nhe*/
}
td.row3Right,td.spaceRow {
background-color: #fff;border-radius: 2px;-moz-border-radius: 2px;
}
td.pourcentback {
background-color : #e5e5e5;
}
th.thHead,td.catHead {
font-size: 11px;
}
.maintitle, .maintitle h1{
font-weight: bold;
font-size: 22px;
font-family: TrebuchetMS,Tahoma,Verdana,Arial,Helvetica,sans-serif;
text-decoration: none;
line-height : 120%;
color : #000000;
}
.forumline .row1,.forumline .row2,.forumline .row3,.forumline .row3Right {
padding: 2px 3px;
}
.forumline td.pagination {
padding:0;
}
td.pagination span{
padding:5px; background-image: url("http://i43.servimg.com/u/f43/15/23/22/46/firesh10.png");
border: 1px #fff solid;color: #045BA3;display: inline-block;
}
td.pagination a{background-color: white;
border: 1px solid white;
color: red;
padding: 0px 3px;}
td.pagination b{color: #fff;}
.maintitle h1 {
margin: 0;
padding: 0;
display: inline;
}
.gen {
font-size : 12px;
}
.genmed {
font-size : 12px;
}
.gensmall {
font-size : 11px;
}
.gen,.genmed,.gensmall {
color : #ac0808;
}
a.gen,a.genmed,a.gensmall {
color: #2eb300;
text-decoration: none;
}
a.gen:hover,a.genmed:hover,a.gensmall:hover{
color: blue;
text-decoration: underline;
}
.mainmenu{
font-size : 11px;
color : #000000 }
a.mainmenu{
text-decoration: none;
color : #ac0808;font-weight: bold;
}
#nav a.mainmenu{padding: 8px 3px 8px 0px; background-color: #81bbe1;-moz-border-radius: 3px; border-radius: 3px;}
a.mainmenu:hover{
text-decoration: none;
color : yellow;
}
.cattitle{
font-weight: bold;
font-size: 12px ;
letter-spacing: 1px;
color : #fff}
h1.cattitle {
margin:0;
padding: 0;
display:inline;
}
a.cattitle{
text-decoration: none;
color : #2eb300;
}
a.cattitle:hover{
text-decoration: underline;
}
.forumlink{
font-weight: bold;
font-size: 12px;
color : #750000;
}
a.forumlink {
text-decoration: none;
color : #2eb300;
}
a.forumlink:link {
color : #2eb300;
}
a.forumlink:visited {
color : #2eb300;
}
a.forumlink:active {
color : #2eb300;
}
a.forumlink:hover{
text-decoration: underline;
color : yellow;
}
.nav{
font-weight: bold;
font-size: 11px;
color : #000000;
}
a.nav{
text-decoration: none;
color : #2eb300;
}
a.nav:hover{
text-decoration: underline;
}
.topictitle,h1,h2{
font-weight: bold;
font-size: 11px;
color : #000000;
}
div.topictitle {
display: inline;
}
h2.topic-title {
display: inline;
margin: 0;
padding: 0;
}
a.topictitle:link{
text-decoration: none;
color : #2eb300;
}
a.topictitle:visited{
text-decoration: none;
color : #2eb300;
}
a.topictitle:active{
text-decoration: none;
color : #2eb300;
}
a.topictitle:hover{
text-decoration: underline;
}
.name{
font-size : 11px;
color : #000000;
}
.name a{
text-decoration:none;
}
.postdetails{
font-size : 10px;
color : #000000;
}
.postbody{
font-size : 12px;
line-height: 18px}
a.postlink:link{
text-decoration: none;
color : #750000}
a.postlink:visited{
text-decoration: none;
color : #5493b4;
}
a.postlink:active{
text-decoration: none;
color : #5493b4;
}
a.postlink:hover{
text-decoration: underline;
color : #dd6900}
.code{background-color: #FAFAFA;
font-family: Courier,Courier New,sans-serif;
font-size: 11px;
color: #006600;}
.code div.cont_code {
max-height:200px;
overflow:auto;
}
.code div{color:#2E8B57;font-family:Courier,CourierNew,sans-serif;font-size:.9em;font-style:normal;font-variant:normal;font-weight:normal;line-height:1.3em;margin:2px 0;max-height:400px;max-width:1000px;overflow-x:auto;overflow-y:auto;padding-top:5px;white-space:pre!important;width:700px!important}
.quote{
background-color: #FAFAFA;
color: #444;
font-family: Tahoma, Verdana, Arial, Helvetica, sans-serif;
font-size: 11px;
line-height: 125%;
padding: 7px;}
.quote .quote table{display:none;height: 0px;}
.quote table{width: 100%;}
a.copyright{
color: #006699;
text-decoration: none;
}
a.copyright:hover {
color: #dd6900;
text-decoration: underline;
}
.coloradmin {
color: #ffa34f}
.colormod {
color: #006600}
.vote {
margin-left: 0px;
}


.vote .vote-button {
text-align: left;
font-weight: bold;
margin-left: 1px;
}

.vote .vote-button a {
text-decoration: none !important;
}


.vote .vote-bar {
height: 18px;
margin-left:-2px;
margin-top:-2px;
border: 0px solid transparent;
font-size: 0;

}


.vote .vote-no-bar {
letter-spacing:0px;
margin-left:0px;
white-space:nowrap;
}


.vote .vote-bar-plus {
width: 63px;
height: 19px;
background: url(http://i23.servimg.com/u/f23/16/03/04/56/thanke10.gif) no-repeat 0px 1px;

border: 0px solid transparent;
font-size: 0;

}


.vote .vote-bar-minus {
background-color: transparent;
}

div.postbody table{background: #FFFBC3 none;
border: 1px dashed #FF9C00;}
div.postbody table span.genmed{color:#777777;display:block;padding: 6px 30px 13px 30px;background: #fffbc3 url(http://i23.servimg.com/u/f23/16/03/04/56/folder10.png) no-repeat 5px 8px;font: bold 18px Courier New}

h1.pagetitle {
display: inline;
margin: 0;
padding: 0;
font-size: 12px;
color: #ffa34f;
}
h1.title2 {
font-size: 11px;
}
.secondarytitle,.secondarytitle h2 {
margin: 0;
padding: 0;
color: #ffa34f;
}
.secondarytitle h2 {
display:inline;
}
.nav h1 {
display: inline;
}
.hierarchy {
display: inline;
margin: 0;
padding: 0;
text-transform: none;
border: none;
font-size: 10px;
}
.mod-text {
font-weight: bold;
}
img{
border:0}
input,textarea,select,#text_editor_iframe,textarea.inputbox{
border: 1px solid #A9B8C2 !important;
-moz-border-radius: 3px; border-radius: 3px;font-size: 11px;
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;padding: 1px 4px;}
.button:hover, .mainoption:hover, input[type=submit]:hover, input[type=button]:hover, input[type=reset]:hover{border: 1px solid #00C6D4 !important;
color: #00C6D4;background-position: 0px 100%;}
.button, .mainoption, input[type=submit], input[type=button], input[type=reset]{background: #F4F5F4 url(http://i1196.photobucket.com/albums/aa406/duy0307/tabbg111.png);padding: 2px 5px;}
.post-options {
text-align: right;
}
.post-options img {
cursor: pointer;
vertical-align: middle;
}
input {
text-indent : 2px;
}
input.mainoption {
background-color : #fafafa;
font-weight : bold;
}
input.liteoption {
background-color : #fafafa;
font-weight : normal;
}
.helpline {
background-color: #dee3e7;
border-style: none;
}
button.button2, input.button2 {
font-size: 0.7em;
border: 1px solid #BCBCBC;
width: auto !important;
padding: 1px 0;
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;
color: #000000;
background-repeat: repeat-x;
background-color: #FAFAFA;
background-image: url('http://illiweb.com/fa/prosilver/bg_button.gif');
background-position: top;
overflow: visible;
vertical-align:middle;
}
button.button2:hover, input.button2:hover {
border: 1px solid #dd6900;
color: #dd6900;
background-position: 0 100%;
}
* html button.button2, * html input.button2 {
padding-bottom: 0;
margin-bottom: 1px;
height: 24px;
padding-right: 3px;
padding-left: 3px;
}
*+html button.button2, *+html input.button2 {
height: 24px;
padding-right: 3px;
padding-left: 3px;
}
*+html button.button2 img {
vertical-align: middle;
}
* html button.button2 img {
vertical-align: middle;
}
button.bbcode {
border: 1px solid #e3adad;
background-image: url("http://illiweb.com/fa/wysiwyg/bg_button.png");
}
.select {
background-color: #FFF;
border: 1px solid #BCBCBC;
position: absolute;
z-index: 999;
top: 0;
left: 0;
overflow: hidden;
width: 0;
}
.select p {
padding: 4px 6px;
font-size: 0.7em;
margin: 0;
white-space: nowrap;
text-align: left;
}
.select button {
padding: 4px;
font-size: 0.9em;
margin: 0;
background-color: #FFF;
border: none;
text-align:left;
}
.select button.button2 {
border:1px solid #BCBCBC;
padding: 0;
}
* html .select button.button2 {
padding-right: 3px;
padding-left: 3px;
}
.select button.button2:hover {
border: 1px solid #dd6900;
color: #dd6900;
background-position: 0 100%;
}
.select button:hover,.selectHover {
cursor: pointer;
background-color: #EEE;
}
textarea#text_editor_textarea {
width: 98% !important;
}
iframe#text_editor_iframe {
width: 98%;
height: 200px;
}
form#quick_reply textarea#text_editor_textarea {
width: 98% !important;
height: 100%;
}
form#quick_reply iframe#text_editor_iframe {
width: 100%;
}
* html form#quick_reply iframe#text_editor_iframe {
width: 600px;
}
*+html form#quick_reply iframe#text_editor_iframe {
width: 600px;
}
#page-footer .gen strong {
font-weight: normal;
}

/*@import url("form_ie.css");
*/
input {
text-indent: 2px}
.postbody {
line-height: 18px}
@media print {
body {
background-image: none;
background-color: #fff;
color: #000;
}
table.bodylinewidth span.maintitle {
display: block;
text-align: left;
}
table.bodylinewidth img#i_logo,.browse-arrows,.noprint,.messaging,.post-options,.poster-profile,img.i_icon_online,table.bodylinewidth .mainmenu,table.bodylinewidth .nav,table.bodylinewidth .gensmall,span.postdetails img,table.bodylinewidth .sig,table.bodylinewidth .catbottom,#info_open {
display:none;
}
td.catHead, .t-title {
text-align: left;
}
table.bodylinewidth .cattitle {
letter-spacing: normal;
font-size: 1em;
}
.thLeft,.thRight {
color: #000;
border: none;
text-align:left;
}
.hr hr {
visibility: hidden;
}
.hr {
border-top: 1px dotted #ddd !important;
}
tr.post td {
vertical-align: top;
border-bottom: 1px solid #ccc;
}
tr.post td td {
border: none;
}
span.gen {
display: none;
}
}
ul.abuse {
list-style: none;
line-height: 1.5em;
font-size: 0.9em;
}
.rtl-spacer:before {
content: " ";
white-space: pre;
}
.rtl-spacer:after {
content: " ";
white-space: pre;
}
.warning {
color:#ff3333;
}
.captcha div.captcha-img {
float: left;
margin: 0 1em 0 0;
}
.captcha .inputbox {
margin-top: 0.5em;
}
.align_gauche {
text-align: left;
}
.center {
text-align: center;
}
.align_droite {
text-align: right;
}
.right {
float: right;
}
.left {
float: left;
}

/* TGF Clearfix */
.clearfix:after {
content: ".";
display: block;
height: 0;
clear: both;
visibility: hidden;
}
*+ html .clearfix {
min-height: 1px;
}
* html .clearfix {
position: relative;
height: 1%;
clear: both;
}
#page-footer, .clear {
clear: both;
}
#page-footer h3 {
margin-top: 20px;
}
#content-container #left {
width: 0px;
margin-right: px;
}
#content-container #right {
width: 0px;
margin-left: px;
}
.module-title {
font-weight: bold;
margin: 0 auto;
text-align: center;
display: block;
}
/* Chatbox */
#frame_chatbox {
border: none !important;
}
body.chatbox {
min-width: 550px !important;
background-image: none;
padding: 0;
margin: 0;background: white url();
}
#chatbox_members {
bottom: 52px;
overflow: auto;
padding: 3px 2px;
position: absolute;
top: 54px;
width: 163px;
}
#chatbox {
bottom: 52px;
left: 165px;
line-height: 10px;
overflow: auto;
position: absolute;
right: 0px;
top: 54px;
}
.chatbox_row_1,.chatbox_row_2,.chatbox_row_3 {
font-size: 11px;padding: 0px 5px;
}
.chatbox-options {
text-align:right;
}
#chatbox_messenger_form .gen,#chatbox_messenger_form .text-field,#chatbox_messenger_form {
white-space : nowrap;
}
#chatbox_footer {
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 53px;display: inline!important;
}
#chatbox_footer table.text-styles {
float: none;
}
#chatbox_footer .text-field {
float: left;
}
#chatbox_header {
height: 53px;
background-color: #e5e5e5;
}
#chatbox p {
line-height: 1.2em;
}
.memberlist_row_1 {
padding: 2px 2px 2px 10px;
}
#chatbox_members .member-title {
text-align: center;
padding: 0.5em 0.25em;
background-image: none;
font-size: 12px;
font-family: Verdana,Arial,Helvetica,sans-serif;
}
#chatbox_members ul {
list-style: none;
margin: 0 0 0 10px;font-size: 11px;
}
#chatbox_members ul li {
margin: 2px 2px 2px 0;
}
#message,#submit_button{
border-width: 1px;
}
.fontbutton{
cursor: pointer;
text-align: left;
border: 1px solid #A9B8C2 !important;
-moz-border-radius: 3px; border-radius: 3px;font-size: 11px;
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;background: #F4F5F4 url(http://i23.servimg.com/u/f23/16/03/04/56/tabbg112.png);
}
.fontbutton_normal {
background: #F4F5F4 url(http://i23.servimg.com/u/f23/16/03/04/56/tabbg113.png);
}
.fontbutton_selected {
border: 1px solid #00C6D4 !important;
color: #00C6D4;background: #fff url(http://i23.servimg.com/u/f23/16/03/04/56/tile_b10.gif);
}
.fontbutton_clicked {
background: #959595;
border: 1px solid #22229C;
}
#chatbox .user {
font-weight: bold;
}
div#chatbox {
color: blue;
}
#chatbox_contextmenu {
background-color: white;
border: 1px dashed #AAA;
padding: 4px;
}
#chatbox_contextmenu p {
border-top: 1px dashed #AAA;
font-family: verdana, arial, sans-serif;
margin: 0px;
padding: 1px 4px;
}
#chatbox_contextmenu p.hover {
border: 1px dashed #00C6D4;
}
#chatbox_contextmenu p.close {
border: none;
color: blue;
font-size: 70%;
font-weight: bold;
padding: 1px;
}
#chatbox_contextmenu p.close img {
vertical-align: middle;
padding-left: 25px;
}
#chatbox_contextmenu a {
color: #;
text-decoration: none;
font-size: 70%;
}
#chatbox_contextmenu a:hover {
color: #;
}
.fontbutton{
border:0;
}
* html #chatbox-members {

/* IE expressions helping IE work in Standards mode */
height: expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 3) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) ) + "px");
}
* html #chatbox {

/* IE expressions helping IE work in Standards mode */
height: expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 3) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) ) + "px");
width: expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 10) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 1) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 1.3) ) + "px");
}
* html #chatbox-footer {

/* IE expressions helping IE work in Standards mode */
width: expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 0) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 0) + (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) ) + "px");
}
.date-and-time{font-size: 10px; color: gray;}
span[style="color: rgb(191, 0, 255);"],span[style="color:#BF00FF"],span[style="color: rgb(255, 102, 0);"],span[style="color:#FF6600"],span[style="color: rgb(0, 191, 0);"],span[style="color:#00BF00"],span[style="color: rgb(250, 0, 0);"],span[style="color:#FA0000"],span[style="color: rgb(89, 89, 89);"],span[style="color:#595959"]{color:#fff;text-shadow: 0 0 .2em black, 0 0 .2em black, 0 0 .3em black;}
span[style="color: rgb(255, 255, 255);"],span[style="color:#FFFFFF"]{color:#fff;text-shadow: 0 0 .2em red, 0 0 .2em red, 0 0 .3em red;}


/* poll */
.poll-result td {
padding: 2px 4px;
text-align: left;
}
.poll-result td.poll-title,.poll-result td.poll-results {
text-align: center;
}
.progress-bar td {
padding: 0 !important;
}
.poll-ballot {
text-align: left;
}

/* Advanced profile */
#profile-advanced-avatar .module, #profile-advanced-points .module, #profile-advanced-reputation .module, #profile-advanced-details {
margin-right: 3px;
}
#profile-advanced-avatar .module, #profile-advanced-points .module, #profile-advanced-reputation .module, #profile-advanced-right .module {
margin-bottom: 3px;
}
#profile-advanced-button {
padding: 1px;
}
#profile-advanced-details {
overflow: hidden;
}
#profile-advanced-details ol {
margin: 0;
padding: 0;
list-style: none;
}
#profile-advanced-details ol li {
display: block;
margin-bottom: 4px;
}
#profile-advanced-details .avatar {
float: left;
}
.avatar {
width: 50px;
border: 1px solid #006699;
background-color: #fff;
}
.avatar img {
width: 50px;
}
.friend-block .avatar {
margin: 0 auto;
cursor:pointer;
}
.avatar.mini, .avatar.mini img {
width: 38px;
height: 38px;
}
.friend-block {
float: left;
width: 70px;
margin: 1px;
text-align: center;
overflow: hidden;
}
.friend_list_online_status {
line-height: 11px;
font-size: .9em;
}
.friend_list_online_status img {
vertical-align: middle;
}
.friends-foes-list {
float: left;
width: 200px;
height: 2em;
}
#profile-advanced-details .message-block {
margin-left: 57px;
}
#profile-advanced-details .message-header {
border-top: 1px solid #d1d7dc;
background: #dee3e7;
padding: 4px;
margin-bottom: 4px;
}
#profile-advanced-details .message-date {
float: right;
}
#profile-advanced-details .message-body {
margin-bottom: 4px;
}
#profile-advanced-details .message-footer {
text-align: right;
}
#profile-advanced-details .message-footer li {
display: inline;
margin: 0 0.25em;

/* Spacing between generation dot */
}
#profile-advanced-details .message-footer li:after {
content: ' .';

/* Beware of character: can create a whitepage in IE6 if char does not exist in lang. */
}
#profile-advanced-details .message-footer li a {
margin-right: 0.25em;

/* Spacing between generation dot */
text-decoration: underline;
}
#profile-advanced-details .message-footer li.last:after {
content: normal;
}
#profile-advanced-add {
margin-right: 4px;
padding: 8px 0;
text-align: right;
}
#profile-advanced-details .stats-field {
margin: 4px 0 10px 4px;
padding: 0 10px 6px;
}
#profile-advanced-details .stats-field legend {
font-weight: bold;
}
#profile-advanced-details .stats-field ul {
list-style-type:none;
text-indent: 10px;
padding: 0;
}
#profile-advanced-details .stats-field li {
margin: 4px 0;
}
#login_popup {
position: absolute;
z-index: 999;
display: none;
}
#login_popup_buttons {
position: absolute;
height:19px;
bottom: 6px;
right: 6px;
}
#login_popup_buttons input {
margin-left: 6px;
}
ul.profile_field_list {
padding:0;
margin:0}
html ul.profile_field_list li {
list-style-type: none;
}
ul.profile_field_list > li {
list-style-type: none;
}
.inputURL {
font-size:10px;
font-family:"Courier New", "Times New roman";
letter-spacing:-1px;
}
.middleline {
line-height:2em;
}
.invisible{
display:none;
visibility:hidden;
}
.visible{
display:block;
visibility:visible;
}
div.postbody{
background: transparent url(http://i23.servimg.com/u/f23/16/03/04/56/box-sh10.gif) no-repeat 0% 100%;
font-size: 12px;
padding-bottom: 9px;
line-height: 18px}
div.postbody dl{background: white;
border: 1px solid #E0E0E0;
display: block;
list-style: none;
margin: 0px;
padding: 4px;}
/* ajax profil */
.ajax-profil_hover{
background:transparent}
.ajax-profil_parent{
position:relative;
zoom:1;
}
.ajax-profil_edit{
cursor:pointer;
position:absolute;
top:0;
left:-18px}
.ajax-profil_edit img{
margin-left:4px}
.ajax-profil_valid{
cursor:pointer;
margin-left:4px;
vertical-align:middle}
#profile-advanced-details dl{
padding:8px 10 8px 0;
width:98%;
margin:10px 0 0;
}
#profile-advanced-details dl dt{
float:left;
display:block;
width:10em;
}
#profile-advanced-details dl dd{
margin-left:10em;
padding-left:12px;
}
#profile-advanced-details div.separator{
clear:both;
font-size:1px;
line-height:1px;
border-bottom:1px solid #dcdcdc;
padding-top:10px;
}
#profile-advanced-details .ajax-profil_edit{
left:-4px;
}

/* jqModal */
.jqmWindow {
display: none;
position: fixed;
left: 50%;
width: 450px;
margin-left: -225px;
top: 50%;
margin-top: -125px;
background-color: #e5e5e5;
border: 1px solid #006699;
}
.jqmOverlay {
background-color: #000;
}
.jqDrag {
cursor: move;
}

/* Blog */
.blog_cal-border {
display: inline;
float: left;
border: 1px solid #006699;
background: #efefef;
padding: 1px;
font-size: 0.9em;
margin-right: 10px;
}
.blog_cal-content {
width: 2.9em;
background: #006699;
padding: 1px;
line-height: 1.4em;
text-align: center;
font-family: "Lucida Grande","Lucida Sans Unicode",Arial,Sans-Serif;
color: #ffffff;
}
.blog_cal-content span {
display: block;
}
.blog_cal-day {
padding-left: 0.2em;
font-size: 1.6em;
letter-spacing: 0.2em;
}
.blog_cal-month {
line-height: 0.7em;
font-size: 2em;
font-weight: bold;
}
.blog_cal-year {
line-height: 1.2em;
font-size: 0.8em;
}
.blog_title {
padding-top: 5px;
font-size: 16px;
}
.blog_title img {
vertical-align: middle;
}
.blog_title .topictitle {
font-size: 16px;
}
.blog_message {
margin-top: 12px;
font-size: 12px;
}
.blog_comments {
margin-bottom: 2px;
text-align: right;
}
.blog_comments img {
vertical-align: middle;
}
#blog_comments {
width: 90%;
margin: 0 auto;
}
#blog_comments .postbody {
width: 96%;
}
.blog_comment-avatar {
float: left;
}
.blog_comment-avatar img {
background-color: #fff;
border: 1px solid #006699;
vertical-align: middle;
width: 38px;
margin: 5px 5px 0 0;
}
#blog_comments table {
margin-bottom: 2px;
}
#blog_comments .h3 {
overflow: hidden;
margin-top: 0;
margin-left: 45px;
padding: 0;
min-height: 22px;
}
.blog_comment-title {
float: left;
min-height: 12px;
margin-top: 7px;
}
.blog_comment-title a {
text-decoration: none;
}
#blog_comments .profile-icons {
float: right;
margin-bottom: 5px;
}

/* Social bookmarking */
#bookmarks {
float: right;
}
#bookmarks a img {
width: 20px;
height: 20px;
background: url(http://illiweb.com/fa/social_bookmarking/social_bookmarking.png) no-repeat scroll;
vertical-align: middle;
}
#bookmarks a img.twitter {
width: 16px;
height: 16px;
margin: 2px;
background: url(http://illiweb.com/fa/social_bookmarking/twitter.png) no-repeat scroll;
}
#bookmarks img.delicious {
background-position: -10px -10px;
}
#bookmarks img.digg {
background-position: -10px -50px;
}
#bookmarks img.excite {
background-position: -9px -90px;
}
#bookmarks img.facebook {
background-position: -9px -128px;
}
#bookmarks img.furl {
background-position: -10px -166px;
}
#bookmarks img.google {
background-position: -10px -206px;
}
#bookmarks img.live {
background-position: -9px -246px;
}
#bookmarks img.netscape {
background-position: -9px -284px;
}
#bookmarks img.newsvine {
background-position: -9px -322px;
}
#bookmarks img.reddit {
background-position: -10px -360px;
}
#bookmarks img.slashdot {
background-position: -10px -400px;
}
#bookmarks img.smarking {
background-position: -9px -440px;
}
#bookmarks img.stumbleupon {
background-position: -10px -478px;
}
#bookmarks img.technorati {
background-position: -10px -518px;
}
#bookmarks img.yahoo {
background-position: -10px -558px;
}
.msg span[style="color: rgb(191, 0, 255);"]:before,.msg span[style="color:#BF00FF"]:before,.msg span[style="color: rgb(255, 102, 0);"]:before,.msg span[style="color:#FF6600"]:before,.msg span[style="color: rgb(0, 191, 0);"]:before,.msg span[style="color:#00BF00"]:before,.msg span[style="color: rgb(250, 0, 0);"]:before,.msg span[style="color:#FA0000"]:before,.msg span[style="color: rgb(89, 89, 89);"]:before,.msg span[style="color:#595959"]:before,.msg span[style="color: rgb(0, 4, 255);"]:before,.msg span[style="color:#0004FF"]:before{display:none!important;}.msg span[style="color: rgb(191, 0, 255);"],.msg span[style="color:#BF00FF"],.msg span[style="color: rgb(255, 102, 0);"],.msg span[style="color:#FF6600"],.msg span[style="color: rgb(0, 191, 0);"],.msg span[style="color:#00BF00"],.msg span[style="color: rgb(250, 0, 0);"],.msg span[style="color:#FA0000"],.msg span[style="color: rgb(89, 89, 89);"],.msg span[style="color:#595959"],.msg span[style="color: rgb(0, 4, 255);"],.msg span[style="color:#0004FF"]{display:inline!important;}#chatbox_members ul li a span:before{display: none!important;}
/* wysiwyg */
.mceContentBody{
background: #dee3e7;
color: #000000;
}
.align_right{
text-align: right;
}

/* resize image */
.resize_process .resizebox {
display: none;
}
.resize_process img.resize_img {
display: none;
}
.resizebox a.enlarge, .resizebox.showfull a.fullsize, .resizebox.enlarged a.resize {
display: inline-block;
zoom: 1;
*display: inline;
}
.resizebox.enlarged a.enlarge, .resizebox a.fullsize, .resizebox a.resize {
display: none;
}
.resizebox {
background-color: #fafafa;
max-width: 100%;
line-height: 1.1em;
cursor: default;
font-weight: normal;
font-style: normal;
margin: 0;
text-align: left;
display: inline-block;
}
.resizebox div {
font-weight: normal;
font-style: normal;
margin: 0;
}
.resizebox .resize_border {
border: 1px solid #d1d7dc;
display: block;
}
.resizebox .resize_content {
padding: 5px 10px;
display: inline-block;
zoom: 1;
*display: inline;
}
.resizebox .resize_filler {
border: none;
padding: 0;
width: 40px;
display: inline-block;
zoom: 1;
*display: inline;
}
.attachbox {
background-color:#fafafa;
border:1px dashed #d1d7dc;
clear:left;
float:left;
margin:5px 5px 5px 0;
padding:6px;
width:auto;
color:#000000;
}
.attachbox dt {
font-family:Arial,Helvetica,sans-serif;
text-transform:uppercase;
}
.attachbox dd {
border-top:1px solid #d1d7dc;
clear:left;
font-size:0.9em;
margin-left:10px;
padding:0;
}
dl.file {
display:block;
font-family:Tahoma,Verdana,Arial,Helvetica,sans-serif;
margin-bottom:10px;
}
dl.file dt {
font-family:Tahoma,Verdana,Arial,Helvetica,sans-serif;
font-weight:bold;
margin:0;
padding:0;
text-transform:none;
}
dl.file dt img {
vertical-align:middle}
.info {
font-size:10px;
font-style:italic;
}

/* Spoiler */
.spoiler_closed {
display:block;
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;
font-size: 11px;
color: #444444;
line-height: 125%;
background-color: #fafafa;
}
.spoiler_closed.hidden {
display:none;
}
.spoiler_content {
display:block;
font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;
font-size: 11px;
color: #444444;
line-height: 125%;
background-color: #fafafa;padding: 7px;max-height:400px;max-width:1000px;overflow-x:auto;overflow-y:auto;padding-top:5px;white-space:pre!important;width:800px!important;
}
.spoiler_content.hidden {
display:none;
}
span[style="color: rgb(199, 80, 151);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/member10.gif);padding-right:2px;}
span[style="color:#C75097"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/member10.gif);padding-right:2px;}
span[style="color: rgb(0, 4, 255);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/member11.gif);padding-right:2px;}
span[style="color:#0004FF"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/member11.gif);padding-right:2px;}
span[style="color: rgb(250, 0, 0);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/admin410.gif);padding-right:2px;}
span[style="color:#FA0000"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/admin410.gif);padding-right:2px;}
span[style="color: rgb(255, 102, 0);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/mod1010.gif);padding-right:2px;}
span[style="color:#FF6600"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/mod1010.gif);padding-right:2px;}
span[style="color: rgb(138, 95, 58);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/smod1010.gif);padding-right:2px;}
span[style="color:#8A5F3A"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/smod1010.gif);padding-right:2px;}
span[style="color: rgb(191, 0, 255);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/post_n12.gif);padding-right:2px;}
span[style="color:#BF00FF"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/post_n12.gif);padding-right:2px;}
span[style="color: rgb(3, 3, 3);"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/banned10.gif);padding-right:2px;}
span[style="color:#030303"]:before{content: url(http://i23.servimg.com/u/f23/16/03/04/56/banned10.gif);padding-right:2px;}

/* Styles Facebook */
.user_login_form {
margin-bottom:5px;
}
.fb_or {
background-color:#d1d7dc;
border:2px solid #006699;
font-weight:bold;
padding:5px;
color:#444444;
height : 16px;
line-height : 16px;
width  : 26px;
display  : block;
}
#cont_pwd {
width:150px;
height:21px;
float:left;
padding:0 0 0 20px;
}
.pwd_img {
padding : 4px 0 3px 0;
width : 150px;
height : 14px;
line-height : 14px;
font-size : 11px;
font-weight : bold;
text-align : center;
color : #000000;
display : none;
}
#pwd_good {
background:url('http://illiweb.com/fa/p_strength/pwd_good.png');
}
#pwd_middle {
background:url('http://illiweb.com/fa/p_strength/pwd_middle.png');
}
#pwd_bad {
background:url('http://illiweb.com/fa/p_strength/pwd_bad.png');
}
#fb_explain td {
padding : 5px 0 5px 0;
vertical-align : top;
}
.row1.fb {
padding: 5px 2px 4px 2px;
}
.row2.fb {
padding: 2px 3px 2px 8px;
}
#cont_fb_invit iframe {
width: 760px !important;
}

/*


Module social_bookmarking


*/
.mod_bookmarks a img {
width: 20px;
height: 20px;
background: url(http://illiweb.com/fa/social_bookmarking/social_bookmarking_fa.png) no-repeat scroll;
vertical-align: middle;
}
.mod_bookmarks img.digg {
background-position:-10px -47px;
}
.mod_bookmarks img.delicious {
background-position:-10px -8px;
}
.mod_bookmarks img.reddit {
background-position:-10px -359px;
}
.mod_bookmarks img.slashdot {
background-position:-10px -398px;
}
.mod_bookmarks img.stumbleupon {
background-position:-10px -476px;
}
.mod_bookmarks img.furl {
background-position:-10px -163px;
}
.mod_bookmarks img.yahoo {
background-position:-10px -554px;
}
.mod_bookmarks img.google {
background-position:-10px -204px;
}
.mod_bookmarks img.blinklist {
background-position:-10px -665px;
}
.mod_bookmarks img.blogmarks {
background-position:-10px -630px;
}
.mod_bookmarks img.technorati {
background-position:-10px -516px;
}

/*


Module rss_feeds


*/
.mod_rss_feeds a img {
width: 91px;
height: 17px;
background: url(http://illiweb.com/fa/rss_mod/sprite_rss_feeds.png) no-repeat scroll;
vertical-align: middle;
padding-bottom:2px;
}
.mod_rss_feeds img.yahoo {
background-position:0 0;
}
.mod_rss_feeds img.google-reader {
background-position:-100px 0;
}
.mod_rss_feeds img.msn {
background-position:-199px 0;
}
.mod_rss_feeds img.aol {
background-position:-299px 0;
}
.mod_rss_feeds img.newsgator {
background-position:-399px 0;
}
.mod_rss_feeds img.rojo {
background-position:-498px 0;
}
.mod_rss_feeds img.bloglines {
background-position:-598px 0;
}

/*


Sprite CSS


*/
.sprite-arrow_prosilver_down{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:0 0;
width:6px;
height:6px;
}
.sprite-arrow_prosilver_left{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-56px 0;
width:4px;
height:6px;
}
.sprite-arrow_prosilver_right{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-110px 0;
width:4px;
height:6px;
}
.sprite-arrow_prosilver_up{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-164px 0;
width:6px;
height:6px;
}
.sprite-arrow_subsilver_down{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-220px 0;
width:9px;
height:9px;
}
.sprite-arrow_subsilver_left{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-279px 0;
width:9px;
height:9px;
}
.sprite-arrow_subsilver_right{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-338px 0;
width:9px;
height:9px;
}
.sprite-arrow_subsilver_up{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-397px 0;
width:9px;
height:9px;
}
.sprite-icon_minipost{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-456px 0;
width:12px;
height:9px;
}
.sprite-icon_minipost_new{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-518px 0;
width:12px;
height:9px;
}
.sprite-icon_minipost_participate{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-580px 0;
width:12px;
height:9px;
}
.sprite-icon_miniposted{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-642px 0;
width:12px;
height:9px;
}
.sprite-icon_pages{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-704px 0;
width:11px;
height:12px;
}
.sprite-icon_post_target{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-765px 0;
width:11px;
height:9px;
}
.sprite-icon_post_target_unread{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-826px 0;
width:11px;
height:9px;
}
.sprite-icon_reply{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-887px 0;
width:18px;
height:9px;
}
.sprite-icon_reply_new{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-955px 0;
width:18px;
height:9px;
}
.sprite-icon_tiny_topic{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1023px 0;
width:10px;
height:11px;
}
.sprite-icon_topic_latest{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1083px 0;
width:11px;
height:9px;
}
.sprite-icon_topic_newest{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1144px 0;
width:11px;
height:9px;
}
.sprite-subforum_read{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1205px 0;
width:11px;
height:9px;
}
.sprite-subforum_unread{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1266px 0;
width:11px;
height:9px;
}
.sprite-tabs_less{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1327px 0;
width:9px;
height:9px;
}
.sprite-tabs_more{
background:url("http://illiweb.com/fa/sprite_icons.png") no-repeat top left;
background-position:-1386px 0;
width:9px;
height:9px;
}
.sprite-icon_calendar{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 0;
width:14px;
height:13px;
}
.sprite-icon_faq{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -63px;
width:16px;
height:14px;
}
.sprite-icon_gallery{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -127px;
width:14px;
height:14px;
}
.sprite-icon_groups{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -191px;
width:16px;
height:14px;
}
.sprite-icon_home{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -255px;
width:13px;
height:12px;
}
.sprite-icon_logout{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -317px;
width:16px;
height:14px;
}
.sprite-icon_members{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -381px;
width:16px;
height:14px;
}
.sprite-icon_message{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -445px;
width:16px;
height:14px;
}
.sprite-icon_portal{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -509px;
width:14px;
height:14px;
}
.sprite-icon_register{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -573px;
width:16px;
height:14px;
}
.sprite-icon_search{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -637px;
width:16px;
height:14px;
}
.sprite-icon_textbox_search{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -701px;
width:16px;
height:14px;
}
.sprite-icon_ucp{
background:url("http://illiweb.com/fa/sprite_prosilver_navbar.png") no-repeat top left;
background-position:0 -765px;
width:16px;
height:14px;
}
.sprite-icon_mini_calendar{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:0 0;
width:12px;
height:13px;
}
.sprite-icon_mini_faq{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-62px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_gallery{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-124px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_groups{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-186px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_index{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-248px 0;
width:13px;
height:13px;
}
.sprite-icon_mini_login{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-311px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_members{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-373px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_message{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-435px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_portal{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-497px 0;
width:13px;
height:13px;
}
.sprite-icon_mini_profile{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-560px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_register{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-622px 0;
width:12px;
height:13px;
}
.sprite-icon_mini_search{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-684px 0;
width:12px;
height:13px;
}
#search_menu a img{
background:url("http://illiweb.com/fa/sprite_subsilver_menu.png") no-repeat top left;
background-position:-684px 0;
width:12px;
height:13px;
}

/*


Addthis


*/
#at16lb{
display:none;
position:absolute;
top:0%;
left:0%;
width:100%;
height:100%;
z-index: 999;
background-color:black;
opacity:0.001;
}
#at20mc, #at_email, #at16pib, #at16pc, #at16pi, #at_share, #at_complete, #at_success, #at_error {
position:static!important;
}
#at20mc {
position:absolute;
left:0px;
top:0px;
}
#at20mc a {
color:#3366BB;
}
.at15a{
border:0px;
height:0px;
margin:0px;
padding:0px;
width:100%;
width:230px}
.atnt {
text-align:center!important;
padding:6px 0px 0px 0px!important;
height:24px!important}
.atnt a {
text-decoration:none;
color:#3366bb}
.atnt a:hover {
text-decoration:underline}
#at_msg,#at16p label,#at16nms,#at_share .at_item,#at16p,#at15s,#at16p form input,#at16p form textarea {
font-family:arial,helvetica,Tahoma,Verdana,sans-serif!important;
font-size:12px!important;
outline-style:none;
outline-width:0px;
line-height:1em}
* html #at15s.mmborder {
position:absolute!important}
#at15s.mmborder {
border:10px solid #7f7f7f!important;
position:fixed!important}
#at15s.mmborder {
width:240px!important}
#at15s{
background-color:#fff;
border:1px solid #ccc;
color:#4c4c4c!important;
float:none!important;
line-height:1em!important;
margin:0px!important;
overflow:visible!important;
padding:1px!important;
text-align:left!important;
width:230px!important;
position:absolute!important}
#at15s_head{
position:relative;
background:#f2f2f2;
padding:4px;
cursor:default;
border-bottom:1px solid #e5e5e5}
#at15s_brand,#at16_brand{
position:absolute}
#at15s_brand {
top:4px;
right:4px}
#at16_brand{
top:5px;
right:30px;
cursor:default}
#at_hover{
padding:4px}
#at_hover .at_item, #at_share .at_item{
background:#fff!important;
float:left!important;
color:#4c4c4c !important}
#at16nms {
padding:4px 5px}
#at_hover .at_item{
width:102px!important;
padding:2px 3px!important;
margin:1px}
#at_hover .at_item.atiemode2 {
width:104px!important}
#at_hover .at_item:hover,#at_hover .at_item.athov {
margin:0px!important}
#at_hover .at_item:hover,#at_hover .at_item.athov,#at_share .at_item:hover,#at_share .at_item.athov{
background:#f2f2f2!important;
border:1px solid #e5e5e5;
color:#000!important}
* html #at_hover .at_item {
border:1px solid #fff}
* html #at_hover .at_item.athov {
border:1px solid #e5e5e5!important;
margin:1px!important}
#at_email15{
padding-top:5px}
.at15e_row{
height:28px}
.at15e_row label,.at15e_row span{
padding-left:10px!important;
display:block!important;
width:60px!important;
float:left!important}
.at15e_row input,.at15e_row textarea{
display:block!important;
width:150px!important;
float:left!important;
background:#fff!important;
border:1px solid #ccc!important;
color:#333!important;
font-size:11px!important;
font-weight:normal!important;
padding:0pt!important}
#at_email label,#at_email input,#at_email textarea {
font-size:11px!important}
.at15t{
display:block!important;
height:16px!important;
line-height:16px!important;
padding-left:20px!important;
background:url(http://illiweb.com/fa/addthis/widget04.png) no-repeat left;
cursor:pointer}
.addthis_button {
cursor:pointer}
.addthis_toolbox.addthis_default_style span {
line-height:16px}
.addthis_default_style .addthis_separator {
margin:0px 5px;
display:inline}
div.atclear {
clear:both}
.addthis_default_style .addthis_separator,.addthis_default_style .at300b,.addthis_default_style .at300m,.addthis_default_style .at300bs {
float: left}
.at300b img {
border:0}
.addthis_default_style .at300b,.addthis_default_style .at300m {
padding:0px 2px}
.at300b,.at300m,.at300bs {
cursor:pointer}
.at300bs {
background:url(http://illiweb.com/fa/addthis/widget04.png) no-repeat left;
overflow:hidden;
display:block;
height:16px;
width:16px;
line-height:16px!important}
.at300bs.at15t_expanded,.at300bs.at15t_compact {
background:url(http://illiweb.com/fa/addthis/logo1414.gif) no-repeat left;
margin-right:4px}
.at15t_more{
background:url(http://illiweb.com/fa/addthis/logo1414.gif) no-repeat left !important}
.at15t_000{
background-position:0px -0px}
.at15t_aim{
background-position:0px -16px!important}
.at15t_amazonwishlist{
background-position:0px -32px!important}
.at15t_ask{
background-position:0px -48px!important}
.at15t_backflip{
background-position:0px -64px!important}
.at15t_ballhype{
background-position:0px -80px!important}
.at15t_bebo{
background-position:0px -96px!important}
.at15t_blogger{
background-position:0px -112px!important}
.at15t_blogmarks{
background-position:0px -128px!important}
.at15t_buzz{
background-position:0px -144px!important}
.at15t_delicious{
background-position:0px -160px!important}
.at15t_digg{
background-position:0px -176px!important}
.at15t_diigo{
background-position:0px -192px!important}
.at15t_email{
background-position:0px -208px!important}
.at15t_facebook{
background-position:0px -224px!important}
.at15t_fark{
background-position:0px -240px!important}
.at15t_faves{
background-position:0px -256px!important}
.at15t_favorites{
background-position:0px -272px!important}
.at15t_friendfeed{
background-position:0px -288px!important}
.at15t_friendster{
background-position:0px -304px!important}
.at15t_google{
background-position:0px -320px!important}
.at15t_hatena{
background-position:0px -336px!important}
.at15t_hi5{
background-position:0px -352px!important}
.at15t_kaboodle{
background-position:0px -368px!important}
.at15t_kirtsy{
background-position:0px -384px!important}
.at15t_linkagogo{
background-position:0px -400px!important}
.at15t_linkedin{
background-position:0px -416px!important}
.at15t_live{
background-position:0px -432px!important}
.at15t_meneame{
background-position:0px -448px!important}
.at15t_misterwong{
background-position:0px -464px!important}
.at15t_mixx{
background-position:0px -480px!important}
.at15t_multiply{
background-position:0px -496px!important}
.at15t_myaol{
background-position:0px -512px!important}
.at15t_myspace{
background-position:0px -528px!important}
.at15t_netvibes{
background-position:0px -544px!important}
.at15t_netvouz{
background-position:0px -560px!important}
.at15t_newsvine{
background-position:0px -576px!important}
.at15t_nujij{
background-position:0px -592px!important}
.at15t_orkut{
background-position:0px -608px!important}
.at15t_plaxo{
background-position:0px -624px!important}
.at15t_print{
background-position:0px -640px!important}
.at15t_propeller{
background-position:0px -656px!important}
.at15t_reddit{
background-position:0px -672px!important}
.at15t_segnalo{
background-position:0px -688px!important}
.at15t_simpy{
background-position:0px -704px!important}
.at15t_slashdot{
background-position:0px -720px!important}
.at15t_spurl{
background-position:0px -736px!important}
.at15t_stumbleupon{
background-position:0px -752px!important}
.at15t_stylehive{
background-position:0px -768px!important}
.at15t_tailrank{
background-position:0px -784px!important}
.at15t_technorati{
background-position:0px -800px!important}
.at15t_thisnext{
background-position:0px -816px!important}
.at15t_tipd{
background-position:0px -832px!important}
.at15t_tumblr{
background-position:0px -848px!important}
.at15t_twitter{
background-position:0px -864px!important}
.at15t_typepad{
background-position:0px -880px!important}
.at15t_wordpress{
background-position:0px -896px!important}
.at15t_yahoobkm{
background-position:0px -912px!important}
.at15t_yardbarker{
background-position:0px -928px!important}
.at15t_netscape{
background-position:0px -656px!important}
#at16clb {
font-size:16pt;
font-family:"Tahoma, bold", Tahoma,Verdana, arial, sans-serif}
#at_share .at_item {
width:123px !important;
padding:4px;
margin-right:2px;
border:1px solid #ffffff}
#at16pm {
background:#fff;
width:298px;
height:360px;
text-align:left;
border-right:1px solid #ccc;
position:static}
#at16pcc {
position:fixed;
top:0px;
left:0px;
width:100%;
margin:0 auto;
font-size:10px!important;
color:#4c4c4c;
padding:0px;
z-index: 999;
overflow:visible}
* html #at16pcc {
position:absolute}
#at16abifc {
overflow:hidden;
margin:0;
top:10px;
left:10px;
height:335px;
width:492px;
position:absolute;
border:0}
#at16abifc iframe {
border:0;
position:absolute;
height:360px;
width:516px;
top:-10px;
left:-10px}
* html div#at16abifc.atiemode2 {
height:354px;
width:482px}
* html #at16abifc iframe {
height:348px;
left:-10px;
top:-10px;
overflow:hidden}
#at16p {
background:url(http://illiweb.com/fa/addthis/atbkg.png)}
#at16p, #atie6ifh {
position:absolute;
top:50%;
left:50%;
width:300px;
padding:10px;
margin:0 auto;
margin-top:-185px;
margin-left:-155px;
font-family:arial,helvetica,tahoma,Tahoma,Verdana,sans-serif;
font-size:12px;
color:#5e5e5e;
z-index:10000001}
#atie6ifh {
width:322px;
padding:0px;
height:381px;
margin-left:-165px}
#at_share {
margin:0;
padding:0}
#at16ps {
overflow-y:scroll;
height:284px;
padding:5px}
a#at16pit {
position:absolute;
top:37px;
right:10px;
display:block;
background:url(http://illiweb.com/fa/addthis/tab00.gif) no-repeat;
width:16px;
height:20px;
line-height:19px;
margin-right:-17px;
text-align:center;
overflow:hidden;
color:#3366bb;
}
#at16pi {
background:#e5e5e5;
text-align:left;
border:1px solid #ccc;
border-bottom:0}
#at16pi a {
text-decoration:none;
color:#3366bb}
#at16pi a:hover {
text-decoration:underline}
#at16pt {
position:relative;
background:#f2f2f2;
height:13px;
padding:5px 10px}
#at16pt h4, #at16pt a{
font-weight:bold}
#at16pt h4 {
display:inline;
margin:0;
padding:0;
font-size:12px;
color:#4c4c4c;
cursor:default}
#at16pt a {
position:absolute;
top:5px;
right:10px;
color:#4c4c4c;
text-decoration:none}
#at16pc form{
margin:0}
#at16pc form label {
display:block;
font-size:11px;
font-weight:bold;
padding-bottom:4px;
float:none;
text-align:left}
#at16pc form label span {
font-weight:normal;
color:#4c4c4c;
display:inline}
#at_email form .abif {
width:272px !important}
#at_email textarea{
height:55px !important;
word-wrap:break-word}
* html #at_email textarea {
height:42px !important}
*:first-child+html #at_email textarea {
height:42px !important}
#at_email form input,#at_email form textarea {
background:#fff;
border:1px solid #bbb;
width:272px;
margin:0px;
margin-bottom:8px;
font-weight:normal;
padding:3px;
font-family:arial,helvetica,tahoma,Tahoma,Verdana,sans-serif;
font-size:11px;
line-height:1.4em;
color:#333}
#at_email form .atfxmode2 {
width:279px}
#at16pc form .at_ent {
color:#333!important}
#at16pc form textarea {
height:48px}
#at16pc form input:focus,#at16pc form textarea:focus {
background:#fffff0;
color:#333}
#at16p .atbtn {
background:#fff;
border:1px solid #b5b5b5;
width:60px;
padding:2px 4px;
margin:0 2px !important;
font-size:11px !important;
font-weight:bold;
color:#333;
cursor:pointer}
#at16p .atbtn:hover {
border-color:#444;
color:#06c}
#at_email #ateml {
text-align:right;
font-size:10px;
color:#999}
#at16pc {
height:323px;
font-size:11px;
text-align:left;
color:#4c4c4c}
#at_email {
padding:5px 10px}
#at16pc .tmsg {
padding:4px 2px;
text-align:right}
#at16psf {
position:relative;
background:#f2f2f2 url(http://illiweb.com/fa/addthis/atf02.png) no-repeat center center;
border-bottom:1px solid #ccc;
height:20px;
padding:4px 10px;
text-align:center}
* html #at16psf input {
padding:0}
#at16psf input {
background:#fff;
border:none;
width:220px;
margin:2px 0 0;
color:#666;
outline-style:none;
outline-width:0px;
padding:2px 0 0;
font-family:arial,helvetica,tahoma,Tahoma,Verdana,sans-serif;
font-size:12px}
#at16pcc .at_error {
background:#f26d7d;
border-bottom:1px solid #df5666;
padding:5px 10px;
color:#fff}
#at16pcc #at_success {
background:#d0fbda;
border-bottom:1px solid #a8e7b7;
padding:5px 10px;
color:#4c4c4c}
#at16pf {
position:relative;
background:#f2f2f2;
ht:12px;
border-top:1px solid #e5e5e5}
#at16pf a {
position:absolute;
outline:none;
padding:0;
margin:0;
overflow:hidden;
font-size:10px;
color:#4c4c4c;
font-family:Arial, Helvetica, Sans-Serif;
text-decoration:none}
#at16pf a:hover {
text-decoration:underline}
#at16pf a#at-whatsthis {
width:60px;
left:10px}
#at16pf a#at-privacy {
width:39px;
left:90px}
#at_complete {
font-size:13pt;
color:#47731d;
text-align:center;
padding-top:130px;
height:208px!important;
width:472px}
#at_s_msg {
margin-bottom:10px}
#at16pf a#at-logo {
background:url(http://illiweb.com/fa/addthis/logo88.gif) no-repeat left;
padding-left:10px;
right:10px}
.at_baa {
display:block;
overflow:hidden;
outline:none}
#at15s #at16pf a {
top:1px}
#at16pc form #at_send {
width:80px !important;
}
#at_feed {
display:none;
padding:10px;
height:300px}
#at_feed span {
margin-bottom:10px;
font-size:12px}
#at_feed div {
width:102px!important;
height:26px!important;
line-height:26px!important;
float:left!important;
margin-right:68px}
#at_feed div.at_litem {
margin-right:0px}
#at_feed a {
margin:10px 0px;
height:17px;
line-height:17px}
.fbtn{
background:url(http://illiweb.com/fa/addthis/feed00.png) no-repeat;
float:left;
width:102px;
cursor:pointer;
text-indent:-9000px}
.fbtn.bloglines{
background-position:0 0;
width:94px;
height:20px !important;
line-height:20px !important;
margin-top:8px !important}
.fbtn.yahoo{
background-position:0 -20px}
.fbtn.newsgator,.fbtn.newsgator-on{
background-position:0 -37px}
.fbtn.technorati{
background-position:0 -71px}
.fbtn.netvibes{
background-position:0 -88px}
.fbtn.pageflakes{
background-position:0 -141px}
.fbtn.feedreader{
background-position:0 -172px}
.fbtn.newsisfree{
background-position:0 -207px}
.fbtn.google{
background-position:0 -54px;
width:104px}
.fbtn.winlive{
background-position:0 -105px;
width:100px;
height:19px !important;
line-height:19px;
margin-top:9px !important}
.fbtn.mymsn{
background-position:0 -158px;
width:71px;
height:14px !important;
line-height:14px !important;
margin-top:12px !important}
.fbtn.aol {
background-position:0 -189px;
width:92px;
height:18px !important;
line-height:18px !important}
#at16pp {
color:#4c4c4c;
position:absolute;
top:12px;
right:12px;
font-size:11px}
#at16pp label {
font-size:11px !important}
#at16ppc {
padding:10px;
width:179px;
}
#at16pph {
padding:5px 0 10px 0}
#at16pph select {
margin:5px 0 8px 0}
#at16pp .atinp {
width:156px;
}
html>body #at16pp .atinp {
width:176px;
}
#at16ppb {
background:#fff;
border:1px solid #ccc;
height:274px}
#at16ep {
height:16px;
padding:8px}
#at16ep a {
display:block;
height:16px;
line-height:16px;
padding-left:22px;
margin-bottom:8px;
font-size:12px}
#at16ep a.at_gmail {
background:url(http://illiweb.com/fa/addthis/gmail.gif) no-repeat left}
#at16ep a.at_hotmail {
background:url(http://illiweb.com/fa/addthis/hotmail.gif) no-repeat left}
#at16ep a.at_yahoo {
background:url(http://illiweb.com/fa/addthis/yahoo.gif) no-repeat left}
#at16ppf p#atsb {
padding-top:20px;
font-size:10px}
#at16abr {
margin-top:10px}
#at16abr input {
padding:0;
margin:0;
margin-right:5px}
#at16ppso {
display:none;
text-align:right;
margin-top:2px}
#at16ppa {
background:#fff;
border:1px solid #ccc;
height:228px;
width:178px;
overflow:auto}
#at16ppa a {
display:block;
white-space:nowrap;
padding:4px 8px;
font-size:12px!important}
#at16eatdr {
position:absolute;
background: #fff;
border-top:0px;
max-height:110px;
overflow: auto;
z-index: 999;
top:129px;
left:21px;
width:277px}
* html #at_email #at16eatdr {
top:115px!important;
width:272px!important}
*:first-child+html #at_email #at16eatdr {
top:115px!important;
width:272px!important}
html>body #at_email form #at16eatdr.abif {
top:137px;
width:278px!important}
#at16eatdr a {
display: block;
overflow: hidden;
border-bottom: 1px dotted #eee;
padding: 4px 8px}
#at16eatdr a:hover, #at16eatdr a.hover {
background: #e0eefa;
text-decoration: none;
color: #333}
#at_promo {
font-size:12px;
display:none}
#at_promo button {
background:#ee6a44;
border-top:1px solid #ffa389;
border-left:1px solid #ffa389;
border-right:1px solid #d4522c;
border-bottom:1px solid #d4522c;
color:#fff}
#at_promo .at-promo-content {
margin-top:12px}
#at_promo .at-promo-btn {
padding-top:10px}
#at_promo .at-promo-top {
background:url(http://illiweb.com/fa/addthis/60x60_atn_logo.jpg) no-repeat 0 0;
padding:10px 0 5px 70px}
#at_promo h4 {
font-size:14px;
font-weight:bold;
margin:0 0 4px}
#at_promo h4 sup {
font-size:11px;
color:#ee6a44}
#at_promo span {
display:block}
#at_promo .at-promo-btm-ffx {
background:url(http://illiweb.com/fa/addthis/60x60_at_firefox_toolbar.jpg) no-repeat 0 0;
padding:6px 0 0 70px}
#at_promo .at-promo-btm-ie {
background:url(http://illiweb.com/fa/addthis/60x60_at_ie_toolbar.png) no-repeat 0 0;
padding:6px 0 0 70px}
.headbox{background: transparent url(http://i23.servimg.com/u/f23/16/03/04/56/title110.png) no-repeat center center; height:68px;}
.headbox h2{font-size: 13px; color: #5b0000; padding: 13px 30px;margin-bottom: -7px;}
h4.away{background-color: #fff;-moz-border-radius: 4px; border-radius: 4px;border: 1px dotted #e7e7e7; color: gray;}
h4.online{background-color: #fff;-moz-border-radius: 4px; border-radius: 4px;border: 1px dotted yellow;color : orange;}
#khung{margin: 3px 5px;
padding: 2px; font-size: 11px; border: 1px #8c8c8c dashed;}
#smallrum{padding: 0.4em 1em;margin: 3px 1px;
background: #FFEB90 none;
-moz-box-shadow: -2px 2px 2px #c8c8c8;
-webkit-box-shadow: -2px 2px 2px #c8c8c8;box-shadow: -2px 2px 2px #c8c8c8;color: #FFEB90;}.modnew img{max-width: 50px; max-height: 30px;}
#smallrum a.gensmall {
display: inline-block;
text-align: left;
width: 200px;
}
.modnew br, .modnew hr{display: none;}
.modnew {font-size:11px;}
#a1pro span a {
display: inline-block;
font-weight: bold;
text-align: left;
width: 270px;padding: 0.5em 0em;
}#a1pro a.last-post-icon{width: 16px;padding:6px 0px;}#a1pro span a.gensmall {text-align: right;} ul.yt{display:none;}
.forumlines{background-color: #fff;}
.online-users a[href="/u1"]{display:none}
embed {min-width: 650px; min-height: 390px;}

Unknown end tag for &lt;/style&gt;

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">jQuery.fn.vibrate=function(conf){var config=jQuery.extend({speed:30,duration:2000,frequency:10000},conf);return this.each(function(){var t=jQuery(this);var vibrate=function(){var rotate=Math.floor((Math.random()*10)-5);t.css({'-webkit-transform':'rotate('+rotate+'deg)','-moz-transform':'rotate('+rotate+'deg)','-o-transform':'rotate('+rotate+'deg)','-ms-transform':'rotate('+rotate+'deg)'})};var doVibration=function(){var vibrationInterval=setInterval(vibrate,config.speed);var stopVibration=function(){clearInterval(vibrationInterval);t.css({'-webkit-transform':'rotate(0deg)','-ms-transform':'rotate(0deg)','-moz-transform':'rotate(0deg)','-o-transform':'rotate(0deg)'})};setTimeout(stopVibration,config.duration)};doVibration()})};

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">function buzz(){ document.post.sent.value=":buzz:";document.post.message.focus();ajax_submit_chatbox(params);return false;}

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">function tthay(){ document.post.sent.value = "/thay " + document.post.message.value;document.post.message.focus();ajax_submit_chatbox(params);return false;}

Unknown end tag for &lt;/script&gt;


<script src="http://illiweb.com/rsc/17/frm/lang/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://illiweb.com/rsc/20/frm/chatbox/chatbox4.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://www.cntt-k3.biz/23557.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;

<script type="text/javascript">//<![CDATA[
var params = '?archives=1';var smilies_sid = '';//]]>

Unknown end tag for &lt;/script&gt;

<style type="text/css">* {margin: 0px;padding: 0;}html, body {overflow: hidden;}body {background-color: #efefef;}#mudimPanel {display: none;}div#mudimPanel{left: 76px !important;position: absolute !important;width: 690px !important;top: 26px!important;border:0px!important;background: none!important;height: 26px!important;}span.msg{display: inline-block;
font-family: 'Comic Sans MS';
font-size: 13px;
padding: 4px 1px;}span[style="color: rgb(191, 0, 255);"],span[style="color:#BF00FF"],span[style="color: rgb(255, 102, 0);"],span[style="color:#FF6600"],span[style="color: rgb(0, 191, 0);"],span[style="color:#00BF00"],span[style="color: rgb(250, 0, 0);"],span[style="color:#FA0000"],span[style="color: rgb(89, 89, 89);"],span[style="color:#595959"],span[style="color: rgb(0, 4, 255);"],span[style="color:#0004FF"]{display:none;}a span[style="color: rgb(191, 0, 255);"],a span[style="color:#BF00FF"],a span[style="color: rgb(255, 102, 0);"],a span[style="color:#FF6600"],a span[style="color: rgb(0, 191, 0);"],a span[style="color:#00BF00"],a span[style="color: rgb(250, 0, 0);"],a span[style="color:#FA0000"],a span[style="color: rgb(89, 89, 89);"],a span[style="color:#595959"],a span[style="color: rgb(0, 4, 255);"],a span[style="color:#0004FF"]{display:inline!important;}
#chatbox_members{display:none;}
#chatbox {
bottom: 52px;
left: 0px;
line-height: 10px;
overflow: auto;
position: absolute;
right: 0px;
top: 54px;
}


Unknown end tag for &lt;/style&gt;



Unknown end tag for &lt;/head&gt;



<body onload="if(!connected){CB_disconnect();}ajax_refresh_chatbox('?archives=100', 1);" class="chatbox" id="captcha">
<div style="-moz-transform: rotate(0deg);" id="chatbox_header" class="buzza1"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><th style="border-bottom: 1px solid rgb(219, 219, 219);" colspan="2" nowrap="nowrap"><table border="0" width="100%"><tbody><tr><td align="left" nowrap="nowrap"><div class="genmed" id="chatbox_main_options"><a href="javascript:void(0)" onclick="CB_disconnect();"><span id="chatbox_option_co" style="color: rgb(255, 255, 255); font-family: Tahoma; font-size: 11px; display: none;"><input value="Đăng nhập" title="Đăng nhập" type="button">

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="color: rgb(255, 255, 255); font-family: Tahoma; font-size: 11px;"><input value="Thoát" title="Thoát" type="button">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><span class="gen">

<marquee><font color="white"><b>Cấm đưa link quảng cáo,bậy bạ lên CB!

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;                                   <font color="white"><b>Nghiêm cấm nói tục, chửi bậy trong CB!

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;   <font color="white"><b>Cấm đả kích các thành viên khác trên CB!

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/marquee&gt;



<script language="JavaScript1.2">
// === 1 === FONT, COLORS, EXTRAS...
v_font='verdana';
v_fontSize='12px';
v_fontSizeNS4='12px';
v_fontWeight='normal';
v_fontColor='#000000';
v_textDecoration='none';
v_fontColorHover='#333333';//       | won't work
v_textDecorationHover='none';// | in Netscape4
v_bgColor='transparent';
// set [='transparent'] for transparent
// set [='url(image_source)'] for image
v_top=0
v_left=0;// | defining
v_width=400;//  | the box
v_height=14;//  |
v_paddingTop=-20;
v_paddingLeft=0;
v_position='relative';// absolute/relative
v_timeout=4000;//1000 = 1 second
v_slideSpeed=1;
v_slideDirection=0;//0=down-up;1=up-down
v_pauseOnMouseOver=true;
// v2.2+ new below
v_slideStep=3;//pixels
v_textAlign='center';// left/center/right
v_textVAlign='middle';// top/middle/bottom - won't work in Netscape4

// === 2 === THE CONTENT - ['href','text','target']
// Use '' for href to have no link item
v_content = v_content;
// ===
v_ua=navigator.userAgent;v_nS4=document.layers?1:0;v_iE=document.all&&!window.innerWidth&&v_ua.indexOf("MSIE")!=-1?1:0;v_oP=v_ua.indexOf("Opera")!=-1&&document.clear?1:0;v_oP7=v_oP&&document.appendChild?1:0;v_oP4=v_ua.indexOf("Opera")!=-1&&!document.clear;v_kN=v_ua.indexOf("Konqueror")!=-1&&parseFloat(v_ua.substring(v_ua.indexOf("Konqueror/")+10))<3.1?1:0;v_count=v_content.length;v_cur=1;v_cl=0;v_d=v_slideDirection?-1:1;v_TIM=0;v_fontSize2=v_nS4&&navigator.platform.toLowerCase().indexOf("win")!=-1?v_fontSizeNS4:v_fontSize;v_canPause=0;function v_getOS(a){return v_iE?document.all[a].style:v_nS4?document.layers["v_container"].document.layers[a]:document.getElementById(a).style};function v_start(){var o,px;o=v_getOS("v_1");px=v_oP&&!v_oP7||v_nS4?0:"px";if(parseInt(o.top)==v_paddingTop){v_canPause=1;if(v_count>1)v_TIM=setTimeout("v_canPause=0;v_slide()",v_timeout);return}o.top=(parseInt(o.top)-v_slideStep*v_d)*v_d>v_paddingTop*v_d?parseInt(o.top)-v_slideStep*v_d+px:v_paddingTop+px;if(v_oP&&o.visibility.toLowerCase()!="visible")o.visibility="visible";setTimeout("v_start()",v_slideSpeed)};function v_slide(){var o,o2,px;o=v_getOS("v_"+v_cur);o2=v_getOS("v_"+(v_cur<v_count?v_cur+1:1));px=v_oP&&!v_oP7||v_nS4?0:"px";if(parseInt(o2.top)==v_paddingTop){if(v_oP)o.visibility="hidden";o.top=v_height*v_d+px;v_cur=v_cur<v_count?v_cur+1:1;v_canPause=1;v_TIM=setTimeout("v_canPause=0;v_slide()",v_timeout);return}if(v_oP&&o2.visibility.toLowerCase()!="visible")o2.visibility="visible";if((parseInt(o2.top)-v_slideStep*v_d)*v_d>v_paddingTop*v_d){o.top=parseInt(o.top)-v_slideStep*v_d+px;o2.top=parseInt(o2.top)-v_slideStep*v_d+px}else{o.top=-v_height*v_d+px;o2.top=v_paddingTop+px}setTimeout("v_slide()",v_slideSpeed)};if(v_nS4||v_iE||v_oP||document.getElementById&&!v_kN&&!v_oP4){
document.write("<style>.vnewsticker,a.vnewsticker{font-family:"+v_font+";font-size:"+v_fontSize2+";color:"+v_fontColor+";text-decoration:"+v_textDecoration+";font-weight:"+v_fontWeight+"}a.vnewsticker:hover{font-family:"+v_font+";font-size:"+v_fontSize2+";color:"+v_fontColorHover+";text-decoration:"+v_textDecorationHover+"}

Unknown end tag for &lt;/style&gt;

");v_temp="<div "+(v_nS4?"name":"id")+"=v_container style='position:"+v_position+";top:"+v_top+"px;left:"+v_left+"px;width:"+v_width+"px;height:"+v_height+"px;background:"+v_bgColor+";layer-background"+(v_bgColor.indexOf("url(")==0?"-image":"-color")+":"+v_bgColor+";clip:rect(0,"+v_width+","+v_height+",0);overflow:hidden'>"+(v_iE?"<div style='position:absolute;top:0px;left:0px;width:100%;height:100%;clip:rect(0,"+v_width+","+v_height+",0)'>":"");for(v_i=0;v_i<v_count;v_i++)
v_temp+="<div "+(v_nS4?"name":"id")+"=v_"+(v_i+1)+" style='position:absolute;top:"+(v_height*v_d)+"px;left:"+v_paddingLeft+"px;width:"+(v_width-v_paddingLeft*2)+"px;height:"+(v_height-v_paddingTop*2)+"px;clip:rect(0,"+(v_width-v_paddingLeft*2)+","+(v_height-v_paddingTop*2)+",0);overflow:hidden"+(v_oP?";visibility:hidden":"")+";text-align:"+v_textAlign+"' class=vnewsticker>"+(!v_nS4?"<table width="+(v_width-v_paddingLeft*2)+" height="+(v_height-v_paddingTop*2)+" cellpadding=0 cellspacing=0 border=0><tr><td width="+(v_width-v_paddingLeft*2)+" height="+(v_height-v_paddingTop*2)+" align="+v_textAlign+" valign="+v_textVAlign+" class=vnewsticker>":"")+(v_content[v_i][0]!=""?"<a href='"+v_content[v_i][0]+"' target='"+v_content[v_i][2]+"' class=vnewsticker"+(v_pauseOnMouseOver?" onmouseover='if(v_canPause&&v_count>1){clearTimeout(v_TIM);v_cl=1}' onmouseout='if(v_canPause&&v_count>1&&v_cl)v_TIM=setTimeout(\"v_canPause=0;v_slide();v_cl=0\","+v_timeout+")'":"")+">":"<span"+(v_pauseOnMouseOver?" onmouseover='if(v_canPause&&v_count>1){clearTimeout(v_TIM);v_cl=1}' onmouseout='if(v_canPause&&v_count>1&&v_cl)v_TIM=setTimeout(\"v_canPause=0;v_slide();v_cl=0\","+v_timeout+")'":"")+">")+v_content[v_i][1]+(v_content[v_i][0]!=""?"</a>":"</span>")+(!v_nS4?"</td></tr></table>":"")+"</div>";v_temp+=(v_iE?"</div>":"")+"</div>";document.write(v_temp);setTimeout("v_start()",1000);if(v_nS4)onresize=function(){location.reload()}}</script><style>.vnewsticker,a.vnewsticker{font-family:verdana;font-size:12px;color:#000000;text-decoration:none;font-weight:normal}a.vnewsticker:hover{font-family:verdana;font-size:12px;color:#333333;text-decoration:none}</style><div id="v_container" style="position: relative; top: 0px; left: 0px; width: 400px; height: 14px; background: none repeat scroll 0% 0% transparent; clip: rect(0pt, 400px, 14px, 0pt); overflow: hidden;"><div id="v_1" style="position: absolute; top: 14px; left: 0px; width: 400px; height: 54px; clip: rect(0pt, 400px, 54px, 0pt); overflow: hidden; text-align: center;" class="vnewsticker"><table border="0" cellpadding="0" cellspacing="0" height="54" width="400"><tbody><tr><td class="vnewsticker" align="center" height="54" valign="middle" width="400"><span onmouseover="if(v_canPause&amp;&amp;v_count>1){clearTimeout(v_TIM);v_cl=1}" onmouseout='if(v_canPause&amp;&amp;v_count>1&amp;&amp;v_cl)v_TIM=setTimeout("v_canPause=0;v_slide();v_cl=0",4000)'><font color="white"><b>Cấm đưa link quảng cáo,bậy bạ lên CB!

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div id="v_2" style="position: absolute; top: -20px; left: 0px; width: 400px; height: 54px; clip: rect(0pt, 400px, 54px, 0pt); overflow: hidden; text-align: center;" class="vnewsticker"><table border="0" cellpadding="0" cellspacing="0" height="54" width="400"><tbody><tr><td class="vnewsticker" align="center" height="54" valign="middle" width="400"><span onmouseover="if(v_canPause&amp;&amp;v_count>1){clearTimeout(v_TIM);v_cl=1}" onmouseout='if(v_canPause&amp;&amp;v_count>1&amp;&amp;v_cl)v_TIM=setTimeout("v_canPause=0;v_slide();v_cl=0",4000)'><font color="white"><b>Nghiêm cấm nói tục, chửi bậy trong CB!

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div id="v_3" style="position: absolute; top: 14px; left: 0px; width: 400px; height: 54px; clip: rect(0pt, 400px, 54px, 0pt); overflow: hidden; text-align: center;" class="vnewsticker"><table border="0" cellpadding="0" cellspacing="0" height="54" width="400"><tbody><tr><td class="vnewsticker" align="center" height="54" valign="middle" width="400"><span onmouseover="if(v_canPause&amp;&amp;v_count>1){clearTimeout(v_TIM);v_cl=1}" onmouseout='if(v_canPause&amp;&amp;v_count>1&amp;&amp;v_cl)v_TIM=setTimeout("v_canPause=0;v_slide();v_cl=0",4000)'><font color="white"><b>Cấm đả kích các thành viên khác trên CB!

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;






<img src="http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif"> Chú ý :
<a href="http://www.cntt-k3.biz/f7-forum" target="_blank"><strong><blink><font color="blue"/>Kick ----> Để xem hướng dẫn toàn tập về sử dụng diễn đàn

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/blink&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;

<img src="http://i1196.photobucket.com/albums/aa406/duy0307/279489.gif">






Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div style="-moz-transform: rotate(0deg);" id="chatbox_members" class="buzza1" curpos="0" maxpos="460" pageincrement="1404" increment="10">

Unknown end tag for &lt;/div&gt;

<div style="-moz-transform: rotate(0deg);" class="buzza1" id="chatbox">

Unknown end tag for &lt;/div&gt;

<div id="chatbox_footer" class="buzza1" style="display: block; -moz-transform: rotate(0deg);"><div id="chatbox_messenger"><form name="post" action="/chatbox/chatbox.forum" method="post" onsubmit="submitmsg('?archives=1');refresh_chatbox('?archives=1');return false;"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="row3"><div id="chatbox_messenger_form" style=""><table class="chatfootertable" cellpadding="0" cellspacing="0" height="24" width="100%"><tbody><tr><td style="padding-left: 4px;" align="left" width="100%"><p id="chatboxt" style="display: none;">

Unknown end tag for &lt;/p&gt;

<label><input id="message" name="message" size="35" maxlength="1024" class="post" autocomplete="off" style="width: 100%; background: url(&quot;http://i62.servimg.com/u/f62/14/52/40/23/notice10.png&quot;) no-repeat scroll 0% 0% rgb(255, 255, 255); font-weight: bold; color: rgb(0, 102, 0);" onfocus="if(this.style.background!='none'){this.style.background=''}" onblur="if((this.style.background=='') &amp;&amp; (this.value=='')){this.style.background='#fff url(http://i62.servimg.com/u/f62/14/52/40/23/notice10.png) no-repeat'}" type="text">

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td align="left" width="100%"><table style="line-height: 0px;" class="text-styles" border="0" cellpadding="0" cellspacing="7"><tbody><tr><td><input name="sbold" value="1" type="hidden"><input name="sitalic" value="0" type="hidden"><input name="sunderline" value="0" type="hidden"><input name="sstrike" value="0" type="hidden"><input name="scolor" id="scolor" value="006600" type="hidden"><span class="gen" onclick="document.post.message.focus();"><input name="sent" value="/me được [color=brown]Thầy phán[/color]: [color=blue]Chơi xoáy nhau àh, con không hỏi bố thầy cũng không trả lời được[/color]" onclick="submittb();" type="hidden"><input name="submit_button" value="SEND" id="submit_button" style="font-weight: bold; height: 22px;" onclick="submittb();" type="submit"><input name="submit_button" value="Thỉnh Thầy" id="submit_button" style="font-weight: bold; height: 22px;" onclick="set_solved(this.form.elements['message'],'/thay ')" type="submit"><input name="submit_button" value="Clear ChatBox" id="submit_button" style="font-weight: bold; height: 22px;" onclick="set_solved(this.form.elements['message'],'/clear ')" type="submit">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td><div style="font-weight: bold;" id="divbold" class="fontbutton fontbutton_selected" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sbold.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('bold');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sbold.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" alt="Bold" title="Bold" height="20" width="21">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divitalic" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sitalic.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('italic');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sitalic.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif" alt="Ital." title="Ital." height="20" width="21">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divunderline" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sunderline.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('underline');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sunderline.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif" alt="Underl." title="Underl." height="20" width="21">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divstrike" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sstrike.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('strike');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sstrike.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif" alt="Strike" title="Strike" height="20" width="21">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divcolor" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectcolor(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/color.gif" alt="Màu font" title="Màu font" height="16" width="21"><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" alt="Màu font" title="Màu font" height="16" width="11"><br><img src="http://illiweb.com/fa/subsilver/wysiwyg/clear.gif" id="show_color" alt="Màu font" title="Màu font" style="background-color: rgb(0, 102, 0);" height="4" width="21">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divsmilies" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectsmilies(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" alt="Biểu tượng" title="Biểu tượng" height="20" width="21"><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" alt="Biểu tượng" title="Biểu tượng" height="20" width="11">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td class="gen"><input onclick="buzz();" value="BUZZ!!!" title="buzz" style="font-weight: bold; color: red; height: 22px;" id="submit_butt" type="button">

Unknown end tag for &lt;/td&gt;

<td class="gen"><input onclick="ajax_refresh_chatbox('?archives=1', 1);" value="Refresh" title="Refresh" style="font-weight: bold; height: 22px;" type="button">

Unknown end tag for &lt;/td&gt;

<td class="chatbox-options"><div class="gen" id="chatbox_main_options"><span id="chatbox_option_autorefresh" onclick="refresh_chatbox('?archives=1');" style=""><label for="refresh_auto">Auto refresh&nbsp;

Unknown end tag for &lt;/label&gt;

<input type="checkbox" name="refresh_auto" id="refresh_auto" checked="checked" style="background: transparent;" />&nbsp;&nbsp;

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<script type="text/javascript">//<![CDATA[
function buzz(){ document.post.sent.value=":buzz:";document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);return false;}
function ajax_connect(params, mode){if ( params == '' || params == undefined ){params = '?achives=0';}if (window.XMLHttpRequest){var http_request = new XMLHttpRequest();}else if (window.ActiveXObject){var http_request = new ActiveXObject("Microsoft.XMLHTTP");}http_request.onreadystatechange = function(){if (http_request.readyState == 4 && http_request.status == 200){var parsed_text = http_request.responseText;if ( parsed_text ){if ( mode == 'connect' ){document.getElementById('chatbox_option_co').style.display = 'none';document.getElementById('chatbox_option_disco').style.display = '';document.getElementById('refresh_auto').checked = true;document.getElementById('chatbox_option_autorefresh').style.display = '';document.getElementById('chatbox_messenger_form').style.display = '';document.getElementById('chatbox_footer').style.display = 'block';connected = 1;number_of_refresh = 0;}else if ( mode == 'disconnect' ){document.getElementById('chatbox_option_co').style.display = '';document.getElementById('chatbox_option_disco').style.display = 'none';document.getElementById('chatbox_option_autorefresh').style.display = 'none';document.getElementById('chatbox_messenger_form').style.display = 'none';document.getElementById('chatbox_footer').style.display = 'none';connected = 0;}refresh_chatbox(params);}}};http_request.open('GET','/chatbox/chatbox_actions.forum'+params+'&mode='+mode+my_getcookie('mytid').substr(my_getcookie('mytid').indexOf('&tid='),37),true);http_request.send(null);}function CB_disconnect(){if ( connected ){ajax_connect('?archives=1', 'disconnect');clearInterval(refresh_interval);}else{ajax_connect('?archives=1', 'connect');try {refresh_interval = setInterval("refresh_chatbox('?archives=1');", 5000);} catch (err) {}}}if ( document.location.href.indexOf('chatbox', 1) == -1 ){$('#divcolor').css('display', '');$('#divsmilies').css('display', '');}var connected = false;var chatbox_updated = 1260633294;var chatbox_last_update = 1260633294;var template_color = '#000000';var refresh_interval;window.setTimeout("document.getElementById('chatbox').scrollTop = 999999; Init_pref();", 400);window.setTimeout("document.getElementById('chatbox').scrollTop = 999999;", 2000);if ( connected ){try {refresh_interval = setInterval("refresh_chatbox('?archives=1')", 10000);} catch (err) {}}else{try {refresh_chatbox('?archives=1');} catch (err) { }}//]]>

Unknown end tag for &lt;/script&gt;


<div style="">

Unknown end tag for &lt;/div&gt;

<script>$("input#message").keyup(function () {var valuet = $(this).val();$("p#chatboxt").text(valuet);});$("#submit_butt").click( function() {var conf = {frequency: 5000,duration: 600};$("div.buzza1").vibrate(conf);});

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/body&gt;



Unknown end tag for &lt;/html&gt;





<script>
function Refresh()
{
var t=setTimeout("location.reload(true)",100);
}


Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/head&gt;


<body onload="Refresh()">
```


```
function toSpans(span){var str=span.firstChild.data;var a=str.length;span.removeChild(span.firstChild);for(var i=0;i<a;i++){var theSpan=document.createElement("SPAN");theSpan.appendChild(document.createTextNode(str.charAt(i)));span.appendChild(theSpan)}}function RainbowSpan(span,hue,deg,brt,spd,hspd){this.deg=(deg==null?360:Math.abs(deg));this.hue=(hue==null?0:Math.abs(hue)%360);this.hspd=(hspd==null?3:Math.abs(hspd)%360);this.length=span.firstChild.data.length;this.span=span;this.speed=(spd==null?50:Math.abs(spd));this.hInc=this.deg/this.length;this.brt=(brt==null?255:Math.abs(brt)%256);this.timer=null;toSpans(span);this.moveRainbow()}RainbowSpan.prototype.moveRainbow=function(){if(this.hue>359)this.hue-=360;var color;var b=this.brt;var a=this.length;var h=this.hue;for(var i=0;i<a;i++){if(h>359)h-=360;if(h<60){color=Math.floor(((h)/60)*b);red=b;grn=color;blu=0}else if(h<120){color=Math.floor(((h-60)/60)*b);red=b-color;grn=b;blu=0}else if(h<180){color=Math.floor(((h-120)/60)*b);red=0;grn=b;blu=color}else if(h<240){color=Math.floor(((h-180)/60)*b);red=0;grn=b-color;blu=b}else if(h<300){color=Math.floor(((h-240)/60)*b);red=color;grn=0;blu=b}else{color=Math.floor(((h-300)/60)*b);red=b;grn=0;blu=b-color}h+=this.hInc;this.span.childNodes[i].style.color="rgb("+red+", "+grn+", "+blu+")"}this.hue+=this.hspd}```

```
function submitmsg(params){document.post.sent.value=document.post.message.value;kkk=document.post.sent.value;if(kkk.slice(0,6)=="/thay "){var r=Math.random();str=kkk.slice(6,1024);document.post.sent.value="@Thầy:"+str;document.post.message.focus();ajax_submit_chatbox(params);outt=1500;traloi=new Array("Bây giờ thì có, nhưng sau này thì chưa chắc.","Bây giờ thì chưa, nhưng cũng sắp sửa","Bây giờ thì chưa, nhưng sau này thì có","Cái này cũng còn tùy ","Cái này khó à nha. Nhưng 80% là có ","Cẩn thận. Không được đâu ","Có gái không giới thiệu cho thầy một em rồi tính típ","Có. Nhưng sau này phải cẩn thận. Thầy nhìn thấy có sự thay đổi.","Con chưa đủ tuổi để hỏi câu hỏi này đâu, đừng liều","Con đang phê à, hay tính chơi nhau đấy?","Cũng được đấy nhưng phải cẩn thận","Cũng được. Nhưng đợi đến tết Công-gô thì mong ước sẽ thành.","Cũng ngang chuẩn quốc tế đấy","Kute mà sao hỏi khó qua dzậy?","Chiến hết con ạ!","Chơi luôn đi tại sao phải xoắn","Chuẩn không cần chỉnh!","Dân châu Phi cũng phải mê con ạ","Để mai tính","Đưa thầy ít tiền đi rồi thầy nói cho nghe","Hỏi gì mà ngu thế con?","Hỏi khó quá coi chừng ra đường chó cắn à nha","Hỏi thế thì bố thầy cũng hem dám trả lời","Khó đó à nha","Không","Mi đi chết đi. Dám đánh đố thầy à?","Mọi việc chỉ có 50% như mong muốn thôi","Nghe muốn ói quá","Nghĩ sao mà hỏi vậy? Định thử thầy à","Nhiều khách, thầy đang bận quá. Lát thầy trả lời","Ôi giời! Tất nhiên là có","Sao giống thầy dzậy","Thầy con mê nữa huống chi ai","Thầy đang đông khách quá, để lúc khác","Thầy thần thông quảng đại lắm cái gì cũng biết hết","Theo thầy tính là không","Theo thầy thì chắc chắn là không.","Thích thì chiều thôi","Trả tiền đây đi rồi hỏi tiếp","Uhm uhm, điều đó chắc chắn sẽ xảy ra","Việc này tưởng dễ nhưng mà khó đấy","Yên tâm đi, chắc chắn là có","Tùy, thiên thời địa lợi đủ cả, chỉ chờ lòng người ủng hộ là được con ạ","Thầy bấm đốt thì ra tầm dăm hôm nữa con ạ","Cái này thì mẹ con biết rõ hơn thầy","Câu này thầy phải hỏi con mới đúng","Quẻ nói con cứ chờ 10 năm khắc biết","Thầy bấm ra ít lắm con ạ","Con vứt cái máy tính đi là vừa","Cũng được, nếu con muốn vậy","Nói có thì thày áy náy lắm >.< ","Cũng không sớm, nhưng con cũng không việc gì phải vội","Cũng có lẽ là nên thế","Tầm mấy hôm nữa con ạ, cứ yên tâm","Cái này á, cũng khó nghĩ, nhưng có vẻ là có","Chơi xoáy nhau àh, hỏi vậy bố thầy cũng ko trả lời được");boibai=new Array("Con bốc được lá [color=red][size=20]6♦[/size][/color] Để thầy xem...Uhmm… quân này à, báo điềm trục trặc, cãi vã, chia ly con ạ. Thời gian này chuyện tình cảm dễ xảy ra mâu thuẫn, thế nên thày nghĩ là con cứ phải bình tĩnh, điềm đạm vào. Có chuyện gì xảy ra cũng đừng nổi giận mà tổn hại sức khỏe, nhan sắc nhé.","Con bốc được lá [color=red][size=20]5♦[/size][/color] Để thầy xem...À, quân bài báo hiệu thành công và hạnh phúc đấy con ạ. Theo thày tính thì sắp tới con sẽ có vài thay đổi theo hướng tốt. Thày nghĩ là thời gian này rất thích hợp để có em bé hoặc là làm dự án mới.","Con bốc được lá [color=red][size=20]5♥[/size][/color] Để thầy xem...Hmmm, quân này báo con biết là có đứa đang ghen với con đấy. Cũng phải, người đáng yêu thì bao giờ chả có đứa ghen tức hả con. Thày nghĩ là con cứ đề phòng một tí, cũng chả hại gì.","Con bốc được lá [color=black][size=20]5♠[/size][/color] Để thầy xem...À, con này cũng khá được con ạ. Theo thày nghĩ thì con hơi bi quan với tình hình thôi. Chuyên đâu nó có đấy, khó khăn bây giờ chỉ là tạm thời thôi con ạ. Con cứ lạc quan mà vui sống nhé!","Con bốc được lá [color=red][size=20]Q♥[/size][/color] Để thầy xem...Quân này nó mang hình người đàn bà hiền lành, tốt bụng đó con ạ. Thày nghĩ là con sắp nhận được những lời khuyên tốt từ một người phụ nữ ấm áp và tình cảm. Đôi lúc thì con bài này ám chỉ hình mẫu của người mẹ, người chị hoặc người bạn tâm giao nữ giới. Gặp người phụ nữ tốt tâm, lắng nghe lời nói sẽ làm con vui. Nếu mà đang gặp chuyện xui, có người phụ nữ biến xui hóa lành. P/s: Nghe thày nói này, nếu mà con đang muốn cưa ai ý, thì phải cưa mẹ, chị gái, em gái hay bạn gái thân của người ta trước nghe không, sẽ lợi đủ đường đấy con ạ.","Con bốc được lá [color=black][size=20]2♣[/size][/color] Để thầy xem...Hmm, quân này báo hiệu trở ngại con ạ. Con sẽ có vài khó khăn trước khi thành công, và phải đề phòng có kẻ tung tin đồn xấu xa. Thày nghĩ là con phải kín đáo hơn, làm mọi việc một cách cẩn thận và chu đáo.","Con bốc được lá [color=red][size=20]A♦[/size][/color] Để thầy xem...À, quân này thường báo tin tốt con ạ. Nó tượng trung cho sự thay đổi, một thông điệp tốt, thường là về tiền bạc. Thày tính thì có thể con sắp được tăng lương đấy. Cứ cố gắng học hành làm việc chăm chỉ nhé, rồi con sẽ nhận được tin vui sớm thôi.","Con bốc được lá [color=black][size=20]J♣[/size][/color] Để thầy xem...J nhép, một người bạn ngang tuổi tính tình sốc nổi nhưng vui vẻ và tốt bụng. Thày tính là con sắp có dịp đi chơi vui vẻ rồi, nếu chưa có người yêu thì đây cũng là cơ hội tốt đấy.","Con bốc được lá [color=black][size=20]3♣[/size][/color] Để thầy xem...Oh, một quân bài báo hiệu tình yêu và hạnh phúc. Nếu con muốn cầu hôn ai thì đây là thời điểm thích hợp đấy. Ngoài ra, nó còn mang ý nghĩa là cơ hội thứ hai nữa. Vậy nên nếu có việc gì trước đây chưa thành, mà con muốn thử lại thì hãy tiến lên nhé.","Con bốc được lá [color=red][size=20]Q♦[/size][/color] Để thầy xem...À, quân này nó mang hình một người phụ nữ thống trị quyền lực của Đất, mang ý nghĩa là có chuyện đang xảy ra con ạ. Tin đồn thì hay thất thiệt, nhưng mà cũng phải nói rằng có lửa thì mới có khói. Thày nghĩ là con nên trò chuyện nhiều hơn với bạn bè, đồng nghiệp mà biết người ta đang bàn tán cái gì, sẽ có lợi cho con.","Con bốc được lá [color=black][size=20]Q♣[/size][/color] Để thầy xem...Oh, quân này mang hình một phụ nữ tốt bụng, nhiệt tình và cởi mở. Con sẽ gặp được giúp đỡ từ một người phụ nữ đấy. Thày nghĩ có thể là con sẽ nhận được một lời khuyên bổ ích từ người ấy, nhớ lắng nghe con nhé.","Con bốc được lá [color=black][size=20]7♣[/size][/color] Để thầy xem...Ấy, quân này báo hiệu công việc làm ăn, học hành thuận lợi con ạ. Thày tính là chẳng mấy chốc mà con sẽ thăng chức hoặc tăng lương. Tuy nhiên con có thể có vài rắc rối nho nhỏ với người khác giới.","Con bốc được lá [color=red][size=20]2♦[/size][/color] Để thầy xem...Hmm, quân này nó có khá nhiều ý nghĩa đấy. Có thể là điềm báo về đối tác làm ăn, cũng có khi là thay đổi trong quan hệ. Thày nghĩ con nên nói chuyện với bạn bè và đồng nghiệp để hiểu rõ hơn chuyện gì đang xảy ra con ạ.","Con bốc được lá [color=red][size=20]7♦[/size][/color] Để thầy xem...Chậc chậc…. Quân này nó báo điềm là sắp tới con sẽ phải cãi nhau về chuyện tiền bạc hoặc công việc. Thày nghĩ là con nên chuẩn bị trước tinh thần với cả lý lẽ một chút. Thường là chuyện này cũng sẽ êm thắm đâu ra đấy thôi con ạ, không cần lo lắng lắm đâu.","Con bốc được lá [color=black][size=20]4♣[/size][/color] Để thầy xem...Đây là một quân bài cảnh báo. Theo thày tính thì thời gian này con phải cẩn thận không có đứa gian dối, phản bội đấy. Nếu con mà kí cọt gì cũng phải đọc lại, không chủ quan nghe chưa. Chúc con may mắn!","Con bốc được lá [color=black][size=20]10♠[/size][/color] Để thầy xem...Chẹp, con mười bích này không được tốt lắm con ạ. Con có điều ưu tư, có thể sẽ nhận được tin không tốt lắm. Thày nghĩ là thời gian này con nên nghỉ ngơi, thư giãn, đừng quá lo lắng rồi sẽ ổn thôi con ạ.","Con bốc được lá [color=red][size=20]3♥[/size][/color] Để thầy xem...Chà, quân này à, khó đây. Nó thường báo hiệu chuyện tình tay ba con ạ. Con sẽ thấy khó chọn lựa tình yêu đích thực của mình. Tình cảm không gượng ép được, thế nên con hãy thư giãn và để cho chuyện gì đến sẽ đến.","Con bốc được lá [color=red][size=20]10♦[/size][/color] Để thầy xem...À, quân bài tốt đây. Chất rô vốn tượng trưng cho tiền tài danh vọng, điểm mười thường báo tin tốt đẹp. Gặp quân này thì thày nghĩ là con sắp có thay đổi chuyện tiền bạc, thường là tốt con ạ. Theo thày tính thì túi tiền rủng rỉnh đến nơi rồi. Nhớ chăm chỉ làm ăn và tính toán chi tiêu một chút nhé, cơ hội đang đến đấy.","Con bốc được lá [color=black][size=20]3♣[/size][/color] Để thầy xem...Oh, một quân bài báo hiệu tình yêu và hạnh phúc. Nếu con muốn cầu hôn ai thì đây là thời điểm thích hợp đấy. Ngoài ra, nó còn mang ý nghĩa là cơ hội thứ hai nữa. Vậy nên nếu có việc gì trước đây chưa thành, mà con muốn thử lại thì hãy tiến lên nhé.","Con bốc được lá [color=black][size=20]7♠[/size][/color] Để thầy xem...Chà chà, để thày nghĩ đã... Con bảy bích này nó là điềm báo rằng con sắp có chút khó khăn. Có thể là con không nghe lời người khác khuyên nên mất đi cơ hội. Khó khăn xảy ra cũng chỉ do con chuốc lấy thôi. Thế nên thày nghĩ chỉ cần cẩn thận và chịu lắng nghe thì sẽ ổn con ạ.","Con bốc được lá [color=red][size=20]4♥[/size][/color] Để thầy xem...Hmmm, quân này báo hiệu thay đổi trong công tác, nhà cửa con ạ. Có thể sắp tới con sẽ có thuyên chuyển nơi công tác hoặc là chuyển nhà. Thày nghĩ là con cứ nên dự tính trước không nó lại cập rập.. ","Con bốc được lá [color=red][size=20]6♥[/size][/color] Để thầy xem...Ái chà, quân này báo hiệu may mắn con ạ. May mắn này tiếp may mắn kia. Có người muốn chăm sóc cho con. Có người yêu mến con. Con sẽ thấy ấm áp và tràn đầy hạnh phúc. Mỗi tội là con đừng nên đánh bạc lúc này, đỏ tình thì đen bạc mà.","Con bốc được lá [color=black][size=20]9♠[/size][/color] Để thầy xem...Uhmm, chín bích không phải là quân bài tốt lành cho lắm con ạ. Thời điểm này có thể nói là vận hạn của con đang đến, thế nên thày khuyên con nên giữ gìn sức khỏe, cẩn thận đường xá, không tiêu nhiều tiền. Rồi mấy hôm nữa điềm dữ nó bơn bớt đi thì con sẽ lại vô tư thôi con ạ. Thày chúc con may mắn nhiều hơn.","Con bốc được lá [color=black][size=20]6♠[/size][/color] Để thầy xem...Uhmm... thày nghĩ là sắp tới con có vài thay đổi nhỏ mang tính tích cực. Tuy nhiên cũng không lớn lắm con ạ. Thày tính sắp tới mọi chuyện sẽ ổn định và an lành, con an tâm nhé!","Con bốc được lá [color=red][size=20]A♥[/size][/color] Để thầy xem...Quân này nó báo điềm lành về tình yêu đó con. Vốn dĩ nó là tượng trưng cho gia đình mới cả thư tình. Bắt được quân này thì kiểu gì thì rắc rối muộn phiền cũng đều tan biến, tin vui tới tấp đưa về con ạ. Nếu mà chưa có ai yêu, gặp ngay người ấy buổi chiều hôm sau. Nếu mà tình ái u sầu, việc may sẽ đến rơi đầu con ngay.","Con bốc được lá [size=20][color=black]3♠[/color][/size] Để thầy xem...Uhmm, quân này không được tốt, nó tượng trưng cho quan hệ đổ vỡ con ạ. Thày nghĩ là có thể có đứa định chen ngang vào mối quan hệ của con. Trong thời gian này con nên cẩn thận, tránh va chạm hay cãi cọ làm đổ vỡ tỉnh cảm.","Con bốc được lá [size=20][color=black]4♣[/color][/size] Để thầy xem...Đây là một quân bài cảnh báo. Theo thày tính thì thời gian này con phải cẩn thận không có đứa gian dối, phản bội đấy. Nếu con mà kí cọt gì cũng phải đọc lại, không chủ quan nghe chưa. Chúc con may mắn!","Con bốc được lá [size=20][color=black]4♠[/color][/size] Để thầy xem...Con à, quân này nó hay đi liền với cả muộn phiền, rắc rối. Thày nghĩ con nên cẩn thận trong chi tiêu, với cả đề phòng mất của. Nói chung thì cũng không có gì nguy hiểm lắm, con cứ an tâm đừng lo nghĩ nhiều, mấy hôm nữa vận chuyển sao dời mọi thứ sẽ đâu vào đấy thôi.","Con bốc được lá [size=20][color=black]5♣[/color][/size] Để thầy xem...Quân này báo điềm lành con ạ. Sắp tới con sẽ có nhiều bạn mới, nhiều người giúp đõ, nhiều bằng hữu tốt bụng. Thày tính thì con nên bỏ nhiều thời gian giao lưu bạn bè, mở rộng quan hệ và thiết chặt tình bạn cũ. Điều đó sẽ làm con vui vẻ và thoải mái.","Con bốc được lá [size=20][color=black]6♣[/color][/size] Để thầy xem...Hmm, quân này nó báo rằng con sắp có thành công trong tài chính. Thày tính thì con sắp được ai đó cho tiền, tài trợ hoặc giúp đỡ tài chính rồi. Cố gắng làm việc và học hành chăm chỉ nhé!","Con bốc được lá [size=20][color=red]7♥[/color][/size] Để thầy xem...Chậc, quân này tượng trưng cho người không chung thủy, tình cảm hay thay đổi. Có thể sắp tới con sẽ thấy hơi bị 'thất tình' một tí, nhớ nhung người ta nhiều một tí mà nhận lại chả được bao nhiêu... Nhưng không sao, bôi cao sẽ khỏi, thày nghĩ là chuyện đó qua cũng nhanh thôi con ạ. Lúc này tâm trạng người ta cũng không ổn định, nhưng rồi dần dà thì tỉnh cảm cũng sẽ chắc chắn hơn...","Con bốc được lá [size=20][color=red]8♥[/color][/size] Để thầy xem...Hehe, quân này báo rằng con sắp được tặng quà hoặc được rủ đi chơi. Vui lên con nhá, thày nghĩ là con sắm sửa quần áo, chỉnh trang đầu tóc đi, sắp được đi chơi rồi mà.","Con bốc được lá [size=20][color=red]8♦[/color][/size] Để thầy xem...Uhmm… Quân này nó là điềm báo thay đổi trong công việc con ạ. Có thể là con sẽ tìm thấy một công việc mới, hoặc là tình hình công việc bây giờ sẽ khác. Nếu con đi du lịch hay công tác trong thời gian này thì rất có thể sẽ tìm thấy một người khác giới hấp dẫn. Nói chung thày nghĩ là con sẽ thấy một vài thay đổi nho nhỏ và dễ chịu đấy.","Con bốc được lá [size=20][color=black]8♣[/color][/size] Để thầy xem...Chà, quân này không được tốt con ạ. Con phải cẩn thận có kẻ ghen ghét trong công việc. Công việc của con có thể sẽ không được thuận lợi lắm, nhưng đừng lo lắng quá vì chỉ cần con tỉnh táo thì sẽ ổn.","Con bốc được lá [size=20][color=black]8♠[/color][/size] Để thầy xem...Chẹc, tám bích à, để thày nghĩ... Con này nó nghĩa là sự tham lam, không may, nguy hiểm, buồn rầu. Nếu con đang suy tính chuyện gì thì cũng nên ghi nhớ mình phải cẩn thận hơn nha. Thày nghĩ là có gì cản trở thì cũng sẽ qua, miễn là con suy nghĩ thấu đáo và chấp nhận khó khăn.","Con bốc được lá [size=20][color=red]9♥[/color][/size] Để thầy xem...Quân bài của mơ mộng, ước mong, niềm hy vọng. Gặp quân 9 cơ là điềm báo ước mơ thành hiện thực con ạ. Thày tính rồi, con chỉ cần cố gắng hết sức rồi chuyện gì cũng sẽ đạt được. Ước mong đau đáu trong lòng, Chỉ cần tiến tới thì không sợ gì.","Con bốc được lá [size=20][color=red]9♦[/color][/size] Để thầy xem...Để thày xem… Quân này nó mang điềm báo là con sắp có thương vụ mới, có thể sẽ phải đi công tác xa nhà. Thời gian này chắc con sẽ khá bận rộn, luôn chân luôn tay và có thể phải chuyển nơi ở một thời gian.","Con bốc được lá [size=20][color=black]9♣[/color][/size] Để thầy xem...Uhmm, quân này mang điềm báo thành công. Nếu mà con chưa kết hôn thì thày nghĩ rất có thể là con sắp cưới con nhà đại gia con ạ, không thì người yêu con cũng sắp trúng số lớn đấy. Ngoài ra thì nó cũng báo rằng con sắp gặp của trời cho, tiền bạc từ đâu rơi xuống.","Con bốc được lá [size=20][color=red]10♥[/color][/size] Để thầy xem...Ấy, quân bài này tượng trưng cho may mắn và thành công con ạ. Gặp quân 10 cơ thì đích thị là hoạn nạn sẽ vượt qua, phong ba là con muỗi. Nếu vừa gặp khó khăn việc gì thì con cứ yên tâm là sẽ ổn. Làm ăn, học hành, công danh sự nghiệp sẽ tấn tới. Mười cơ là dấu điềm lành, Khó khăn đến mấy cũng giành vẻ vang. Dẫu cho cơ sự tan tành, Vượt lên phút chốc trở thành đại gia.","Con bốc được lá [size=20][color=black]10♣[/color][/size] Để thầy xem...Quân bài tốt con ạ. Báo hiệu làm ăn may mắn thành đạt. Nếu con đi du lịch hay làm ăn xa nhà bây giờ thì rất có thể sẽ gặp được bạn mới, nếu chưa có người yêu thì có khi tìm được người yêu đấy.","Con bốc được lá [size=20][color=red]J♥[/color][/size] Để thầy xem...Quân bài mang hình người bạn tốt, đôi khi ám chỉ một người mến mộ trẻ tuổi. Gặp quân bài này, thày nghĩ con sắp gặp được một người có tính cách rất hay ho, vui tính và thân thiện. Người này có vẻ mến mộ con. Nếu con là nữ giới đang muốn có người yêu, rất có thể đây là cơ hội tốt. Nếu là nam giới, con sắp gặp một người bạn chơi được. Người ái mộ trẻ tuổi, Mang bông hồng và cả trái tim, Gặp con một ngày không đợi, Là tri kỉ và có thể tình yêu.","Con bốc được lá [size=20][color=red]J♦[/color][/size] Để thầy xem...Để thày coi… J Rô à, một chàng trai trẻ chỉnh tề nhưng cũng có thể là một con người đố kỵ không đáng tin tưởng. Thày tính thì con sắp có người báo tin không được tốt lành, nhưng mà cũng không có gì quan trọng to tát lắm. Con nên tỉnh táo khi nghe lời người khác vào thời gian này nhé.","Con bốc được lá [size=20][color=black]J♠[/color][/size] Để thầy xem...Quân bài mang hình tượng của một kẻ thù địch và hay ghen tị. Thày nghĩ là thời gian này con nên cảnh giác hơn trong chuyện tiền nong cũng như tình cảm, đề phòng những kẻ tiểu nhân ghen ghét, thù địch.","Con bốc được lá [size=20][color=black]Q♠[/color][/size] Để thầy xem...Quân bài tượng trưng cho một góa phụ áo đen. Một quân bài nguy hiểm. Con phải tránh bẫy tình và đề phòng những kẻ chen ngang. Trong chuyện tình cảm, cần phải mềm mỏng nhưng tỉnh táo. Trong công việc, con phải sáng suốt không quyết định theo tình cảm riêng.","Con bốc được lá [size=20][color=red]K♥[/color][/size] Để thầy xem...A, quân này nó mang hình ông già tốt bụng, nghĩa hiệp, thông thái, hiểu biết. Gặp quân bài này báo điềm lành rằng con có quý nhân phù trợ, giúp đỡ con ngay cả khi con chưa cần nhờ vả gì. Chờ tin tốt nha con! Ông già mang đến tin vui, khó khăn giúp đỡ vận xui sẻ cùng. Dẫu khó khăn đến muôn trùng, có ông gìa béo đỡ cùng với con.","Con bốc được lá [size=20][color=red]K♦[/color][/size] Để thầy xem...Uhmm, thày xem nào…. Quân này nó mang hình một người đàn ông thống trị quyền lực của Đất, một người đầy quyền lực, địa vị và ảnh hưởng. Bốc được quân bài này, con sẽ sớm có tin tốt lành, thường là được thăng chức con ạ. Thời gian này con nên đối tốt với các sếp trên cũng như đồng nghiệp, sẽ dễ có cơ hội lắm đấy.","Con bốc được lá [size=20][color=black]K♣[/color][/size] Để thầy xem...Oh, quân này mang hình một ông già tốt bụng, hào sảng, nhiệt tình. Con sẽ gặp được giúp đỡ từ cấp trên, thày cô, bố mẹ hay họ hàng chú bác đấy. Thày nghĩ có thể là con sắp được việc làm mới có lương cao hơn, thăng chức hay người khác cho tiền.","Con bốc được lá [size=20][color=black]K♠[/color][/size] Để thầy xem...Uhm, thày xem nào.... Quân bài này tượng trưng cho người giàu tham vọng và có thể ích kỷ. Nó là điềm báo cho con biết phải đề phòng kẻ tiểu nhân tránh sự ghen ghét, bon chen. Con nên nhường nhịn chuyện nhỏ, nhưng đừng để ai động đến quyền lợi của mình.","Con bốc được lá [size=20][color=black]2♠[/color][/size] Để thầy xem...Chậc…. Quân này nó ứng với dối lừa, đổ vỡ quan hệ. Sắp tới con có thể sẽ phải tạm dừng một việc quan trọng, một mối quan hệ quan trọng nào đó. Điều đó có thể làm con buồn nhưng là nó cần thiết. Nếu con đang băn khoăn về một mối tình, thì quân này nó là điềm báo con sắp phải chia ly hoặc người ấy làm con thất vọng. Thày nghĩ con nên thu xếp để được nghỉ ngơi và thư giãn một thời gian, rồi con sẽ ổn.","Con bốc được lá [size=29][color=red]2♥[/color][/size] Để thầy xem...Uhmm, một quân bài rất tốt. Nó báo hiệu rằng con sẽ được người yêu hoặc một người mến mộ ủng hộ và giúp đỡ. Thế nên là an tâm con nhá, có khó khăn gì thì người ấy cũng thông cảm và giúp con mà","Con bốc được lá [size=20][color=red]2♦[/color][/size] Để thầy xem...Hmm, quân này nó có khá nhiều ý nghĩa đấy. Có thể là điềm báo về đối tác làm ăn, cũng có khi là thay đổi trong quan hệ. Thày nghĩ con nên nói chuyện với bạn bè và đồng nghiệp để hiểu rõ hơn chuyện gì đang xảy ra con ạ.","Con bốc được lá [size=20][color=red]A♦[/color][/size] Để thầy xem...À, quân này thường báo tin tốt con ạ. Nó tượng trung cho sự thay đổi, một thông điệp tốt, thường là về tiền bạc. Thày tính thì có thể con sắp được tăng lương đấy. Cứ cố gắng học hành làm việc chăm chỉ nhé, rồi con sẽ nhận được tin vui sớm thôi.");function phangi(str){if(str==" "||str=="")return"Chơi xoáy nhau àh, con không hỏi bố thầy cũng không trả lời được";else if(/mở/.test(str)){jQuery("#chatbox_members").toggle("slow");jQuery("#chatbox").animate({left:168},1000);return"Đã mở!"}else if(/tắt/.test(str)){jQuery("#chatbox_members").toggle("slow");jQuery("#chatbox").animate({left:0},1000);return"Đã tắt!"}else if(/bói|boi/i.test(str)&&/bài|bai/i.test(str))return boibai[Math.round(r*51)];else if(/bye|tạm biệt|g9|good night|Good night|pye|ngủ ngon/.test(str))return"Ừ, phắn ra khỏi Shoutbox cho đẹp trời đi con ;))";else if(/cứt|cức|shit|Cứt|Cức|Shit|mông|thúi|thối|bứt lông/.test(str))return"Con phê thuốc à? Nói năng mất vệ sinh";else if(/yêu thầy|iu thầy|love thầy/.test(str))return"Thầy có bạn gái rồi, con quỳ xuống cầu xin thì may ra thầy cho con 1 chân.... xách dép :P";else if(/bồ|người yêu|người iu/.test(str))return"Con còn nhỏ lắm, quan tâm chuyện bồ bịch làm chi? ;))";else if(/dep trai|xinh gái|đáng iu/.test(str))return"Nói về khoản đấy thì thầy là nhất rồi, các con tuổi gì ;))";else if(/sex|tình dục|phim sex/.test(str))return"Cái đó đến con cũng thích còn hỏi thầy . Mà con hỏi thầy làm chi dzậy ?";else if(/14 tuoi|14 tuổi|15 tuoi|16 tuoi|17 tuoi|18 tuoi|19 tuoi|15 tuổi|16 tuổi|17 tuổi|18 tuổi|19 tuổi/.test(str))return"Tuổi còn teen lắm con, ráng mà học cho bớt ngu nhé :))";else if(/20 tuoi|21 tuoi|22 tuoi|23 tuoi|24 tuoi/.test(str))return"Cũng thanh niên rồi đấy , giang sơn ở trong tay các con , cứ thế mà vùng vẫy";else if(/25 tuoi|26 tuoi|27 tuoi|28 tuoi|29 tuoi/.test(str))return"Kiếm lấy con vợ , ở nhá nó hầu hạ cho , cứ như thầy , chả có con nào thèm hầu hạ :(";else if(/view|viewsource/.test(str))return"Thầy đang view mà view ko ra đây nè, tránh sang 1 bên để thầy view tiếp coi, cái này khó wá à! @@";else if(/get|chôm|xin/i.test(str)&&/avatar|ava/i.test(str))return"Đợi tí thầy mò trong túi xem ...  :idea: À! Đây: [img]http://img.msg.yahoo.com/avatar.php?yids="+str.substr(str.lastIndexOf(' ')+1)+"[/img]";else if(/kute|cute|cutie|kutie/.test(str))return"Nói thật nha con, thầy mà chết đi thì trên đời chả còn ai kute nữa đấy con ạ ;))";else if(/lồn|đụ|cặc|địt|cac|con cu|fuck|loz|nhậu/.test(str))return"Cái đấy chỉ dành cho người lớn thôi, tuổi của con chưa đụng vào được đâu!";else if(/mù|đui|câm|điếc/.exec(str)!=null){rec=/mù|đui|câm|điếc/.exec(str);return"Ta thấy con mới "+rec+" đấy :|"}else if(/buzz|BUZZ|Buzz|buz|Buz/.test(str))return"Buzz quá thì ban nick thôi, có gì mà phải xoắn ;))";else if(/help/.test(str))return"Hướng dẫn :[list][*]Nhập cú pháp [u]/thay[/u]-khoảng trắng-câu hỏi để \"thỉnh\" Thầy[*]Nhập [u]/thay get avatar + nickyahoo[/u] để lấy avatar yahoo.[*]Nhập [u]/thay bói bài[/u] để được \"Thầy\" bói bài.[*]Nhập [u]/about[/u] để xem thông tin \"Thầy\"[/list]";else if(/hám gái|mê gái|khoái gái/.test(str))return"Gái thì tất nhiên thằng nào cũng khoái rồi con ạ ;))";else if(/qq|ww|ee|rr|tt|yy|uu|ii|oo|pp|yt|yu|hg|aa|dd|ff|gg|hh|jj|kk|ll|zz|cc|vv|bb|nn|mm|fa|af|sd|ds|df|fd|kl|lk|hj|jh|qw|wr|hs|bm|vd|xc|zx|xz|cx|cb|bv|bc|ar|er|dg|gd|hd|dh|fk|dj|fl|sw|wh|rt|net|mz|zm|mx|xm|vm|mv|tv|cw|67|ls|sl|lx|xl|lc|cl|ql|lz|hb|bh|cg|gc|fg|gf|ad|fc|cf|zl|lt|ps|sp|ol|py|px|xp|mq|qm|rm|mr|cp|pc|fz|zf|sm|ms/.test(str))return"Con nói tiếng Campuchia đấy à? Thầy chỉ biết tiếng I-rắc thôi 8-|";else if(/con có đẹp|đẹp hơn thầy|con có ẹp|con đẹp|con ẹp/.test(str))return"Tất nhiên là xấu rồi, nhìn thầy mà làm hình tượng đi con ;))";else if(/đẹp trai nhất|đẹp trai hơn|đẹp nhất|đẹp hơn|xấu trai hơn|xấu trai nhất|xấu hơn|xấu nhất|đẹp không|xấu không|đẹp ko|xấu ko|đẹp k|xấu k|thầy xấu|Thầy xấu/.test(str))return"Đừng hỏi câu đó thêm đau lòng con ạ, ở đây chỉ có mỗi thầy là đẹp nhất thôi :))";else if(/hello|helu|chào/.test(str))return"Chào con! Hôm nay con muốn hỏi cái chi ?";else if(/thầy có đẹp|thầy đẹp trai|Thầy có đẹp|Thầy đẹp trai|đẹp trai ko thầy|Thầy đẹp zai|thầy đẹp zai/.test(str))return"Sao? Con ghen tị với vẻ đẹp của ta à??";else if(/số/.test(str)&&/con|Con/.test(str)&&/giàu|hên|chết|may|sống lâu/.test(str))return"Con phải là girl thì thầy mới trả lời câu này ah nha :x";else if(/số có giàu|số có hên|số có may|số có chết|sốcó sống lâu|số giàu|số hên|số may|số chết/.test(str))return"Không đâu con ạ :))";else if(/bạn trai|bạn zai/.test(str)&&/con|Con/.test(str))return"Bọn con trai bây giờ ko tốt đâu con ạ, nếu mà con vừa ý thì... thầy đây con thấy sao? ;))";else if(/thầy có vợ/.test(str))return"Con lo thân con trước đi rồi hãy hỏi đến thầy ;))";else if(/bạn gái/.test(str)&&/con|Con/.test(str))return"Con nên từ bỏ ý định thì hơn, con gái bây giờ ghê lắm. Nó dụ người ta có bầu rồi... nó bỏ =))";else if(/vợ|Vợ/.test(str)&&/con|Con/.test(str))return"Nói đến vợ thì thầy khuyên con nên đi tu là vừa =))";else if(/con có chồng|chồng của con|Chồng của con|Chồng con|chồng con|chồng tương lai con|chồng tương lai của con/.test(str))return"Chồng con gì hở con?? Đàn ông toàn 1 lũ như thầy cả thôi, thế con có muốn lấy không?";else if(/thầy biết không|Thầy biết không|thầy bít không|Thầy bít không|thầy biết ko|Thầy biết ko|thầy bít ko|Thầy bít ko|thầy biết k|Thầy biết k|thầy bít k|Thầy bít k/.test(str))return"Thầy thần thông quảng đại lắm, gì cũng biết hết, nhưng có điều ko nói cho con biết đâu ;))";else if(/gà|pro|Pro/.test(str)&&/thằng|thằg|tên|Thằng|Thằg|admin|Admin|Thịnh|Đỗ Thịnh|thịnh|dothinh|đỗ thịnh/.test(str))return"Nhìn qua nhìn lại, ở đây có mình con là gà thôi :))";else if(/ban|ban nick/.test(str)&&/thầy|Thầy/.test(str))return"Ấy ấy, ban ai thì ban, đừng ban nick thầy con nhé :|";else if(/ban nick/.test(str))return"Cứ thẳng tay đi con, chả tiếc gì chúng nó đâu con ạ ;))";else if(/gà|pro|Pro/.test(str)&&/thầy|Thầy|con|Con/.test(str))return"Quẻ nói Thầy pờ-dzồ nhất 4rum này đấy con ạ ;))";else if(/xạo/.test(str))return"Chưa thấy ai xạo nhưng ở đây thầy thấy con xạo rồi 8-|";else if(/mặt thầy|mặt của thầy|mặt Thầy|mặt của Thầy/.test(str))return"Ít ra thì ta cũng đẹp hơn con ;))";else if(/Thầy tuổi gì|thầy tuổi gì|thầy nhiêu tuổi|Thầy nhiêu tuổi|thầy nhiu tuổi|Thầy nhiu tuổi|thầy mấy tuổi|Thầy mấy tuổi|thầy mấy tủi|Thầy mấy tủi/.test(str))return"Thế con mấy tuổi mà hỏi thầy câu đó ;))";else if(/nhiêu tuổi|nhiu tuổi|nhiêu tủi|nhiu tủi|mấy tủi|mấy tuổi/.test(str))return"Kute mà sao hỏi khó wá zậy? :|";else if(/tụt quần thầy/.test(str))return"Để thầy mặc quần vào đã rồi con hãy tụt!";else if(/tụt quần/.test(str))return"Con cứ tụt đi, thầy tin là này nó sắp lộ hàng rồi =))";else if(/thầy có mấy|Thầy có mấy|vợ của thầy|vợ thầy|Vợ thầy|Vợ của thầy|Con thầy|Con của thầy|con của thầy|con thầy/.test(str))return"Xoi mói quá coi chừng ra đường sét đánh trúng nghen con!";else if(/ngu|điên|khùng|stupid/.test(str)&&/tên|thằng|đứa|bố|mẹ|má/.test(str))return"Nói có thì thầy ngại lắm @@";else if(/thầy dâm|thầy ngu|thầy stupid|Thầy stupid|thầy ngốc|thầy điên|thầy khùng|Thầy dâm|Thầy ngu|Thầy ngốc|Thầy điên|Thầy khùng|Thầy điên/.test(str))return"Con phê à? Tát cho 1 cái bây giờ, dám dỗn với thầy??";if(/dâm|ngu|stupid|ngốc|điên|khùng/.test(str)&&/Thầy có bị|thầy có bị|Thầy bị|thầy bị/.test(str))return"Đá xoáy nhau ah? Hỏi câu này đến ông nội thầy cũng ko dám trả lời";else if(/gay|pede|bede|bd|pd|gay|pêđê|les/.test(str))return"Trước khi hỏi người khác, con hãy hỏi lại mình đi đã =))";else if(/thầy kỳ|Thầy kỳ/.test(str))return"Kì gì con, thầy tắm rồi, sạch lắm, có bẩn đầu mà kì??? =))";else if(/thầy tên gì|tên thầy|Thầy tên gì|tên Thầy/.test(str))return"Tên ko quan trọng, con muốn cho là gì cũng dc :))";else if(/vô duyên|dô diên|dzô dziên|vô dziên/.test(str))return"Con xem lại mình đi, có duyên đâu mà nói người khác :))";else if(/ngu hơn|ngu không|ngu ko|ngu k|ngu nhất|stupid/.test(str))return"Nói về khoản ngu thì ở đây thầy... thông minh nhất ;))";else if(/thông minh|thôg minh/.test(str))return"Sao? Con bảo ta thông minh à? Ngại quá đi mất :> :>";else if(/thầy bị chó cắn|thầy bị té giếng|thầy bị xe đụng|thầy bị xe tông|thầy bị xe hun|thầy bị sét đánh|xe đụng thầy|xe tông thầy|xe hun thầy/.test(str))return"Muốn hại người tốt ko dễ đâu con, thầy cũng cầu cho con bị té giếng!";else if(/dis|shit|dis|fuk|vl|VKL|vkl|vcl|mịa|DKM|dkm|dm|dcm|mie|fucking|địt|nồn|đít|đĩ|chó|láo|phắc du|phắc zu|fắc du|fắc zu|lông/.test(str))return"Nói bậy àh? Coi chừng ra đường chó cắn nha con";else if(/Shoutbox|shoutbox|chatbox|Sbox|SBox|Chatbox|Cbox|CBox/.test(str)&&/thầy|Thầy/.test(str))return"Shoutbox là lãnh địa của thầy, ko hỏi thì đi chỗ khác chơi cho thầy làm ăn nhá :|";else if(/yêu Thịnh|iu Thịnh|yêu thịnh|iu thịnh|iu đỗ thịnh|yêu đỗ thịnh|yêu Đỗ Thịnh|iu Đỗ Thịnh/.test(str))return"Con hỏi gì thầy nghe ko rõ? À, con yêu Thịnh hả? Tốt thôi con ạ ;))";else if(/Thịnh|Đỗ Thịnh|dothinh|thinh|đỗ thịnh|do thinh/.test(str))return"Con nói Thịnh hả, thầy yêu lắm cơ :x";else if(/alo|hello|helu|chào|ê thầy|chào thầy/i.test(str))return"Chào con! Hôm nay con muốn hỏi cái chi :S";else if(/chém|đánh|oánh|quýnh|chem|danh|quynh|đá|đập|cắn|tát|đạp/i.test(str))return"Chơi luôn đi con, có gì đâu mà phải xoắn? ;))";else if(/Ngu|Dốt|dâm|điên|khùng|ngu|ngốc|xàm|nhảm|nhảm nhí|dở hơi|hâm|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/.exec(str)!=null){rec=/Ngu|Dốt|dâm|điên|khùng|ngu|ngốc|xàm|nhảm|nhảm nhí|dở hơi|hâm|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/.exec(str);return"Ta thấy con còn "+rec+" hơn !"}else if(/buồn|chán|bùn|nản/.exec(str)!=null){rec=/buồn|chán|bùn|nản/.exec(str);return"Ta còn "+rec+" hơn con nhiều, than thở làm gì? :("}else if(/thay|admin|thầy/.test(str)&&/bố|mẹ|cắn|đi đâu|làm gì|ở đâu/.test(str))return"Con chưa đủ tuổi để hỏi câu đó đâu, coi chừng đấy !";else if(/yêu|iu/.test(str))return"Con tuổi gì mà hỏi câu này? Lớn thêm tí nữa hãy hỏi câu này nha con :))";else if(str.substr(str.length-1)!="?")return"Con đang hỏi thầy àh? Sao không thấy dấu chấm hỏi";else return traloi[Math.round(r*56)]}sss="/me được [color=brown]Thầy phán[/color]: "+"[color=blue]"+phangi(str)+"[/color]";document.post.message.value='';setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}else if(/được thầy phán|được Thầy phán/.test(kkk)){sss="/me được thầy phán: Tự sướng hả con? Trình gì mà đòi giả danh thầy? :))";document.post.sent.value=kkk;document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}else if(/ngu|láo|dốt|hâm|dâm/.test(kkk)&&/thầy|Thầy/.test(kkk)){sss="/me được thầy phán: Tát cho 1 cái bây giờ, dám hỗn với thầy ah`???";document.post.sent.value=kkk;document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}else if(/thầy|Thầy/.test(kkk)){sss="/me được thầy phán: Con vừa nhắc đến thầy đấy à?";document.post.sent.value=kkk;document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}if(kkk.slice(0,5)=="/help"){document.post.sent.value="@Thầy:help";sss="/me được [color=brown]Thầy phán[/color]: [color=blue]Hướng dẫn :[list][*]Nhập cú pháp [u]/thay[/u]-khoảng trắng-câu hỏi để \"thỉnh\" Thầy[*]Nhập [u]/thay get avatar + nickyahoo[/u] để lấy avatar yahoo.[*]Nhập [u]/thay bói bài[/u] để được \"Thầy\" bói bài.[*]Nhập [u]/about[/u] để xem thông tin \"Thầy\"[/list][/color]";document.post.message.value='';ajax_submit_chatbox(params);setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}if(kkk.slice(0,6)=="/about"){document.post.sent.value="@Thầy:about";sss="/me được [color=brown]Thầy phán[/color]: [color=blue]Thầy được viết bởi anh chupy đẹp zai[color=red][/color]  [color=orange][/color]. Bản quyền của Cntt-k3[/color]";document.post.message.value='';ajax_submit_chatbox(params);setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}else{document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);return false}}```
Bước 2 : vào index\_body cho đoạn code này lên đầu

```


<script type="text/javascript">
jQuery(document).ready(function(){my_setcookie('mytid',jQuery("#logout").attr("href"),1,0);});


Unknown end tag for &lt;/script&gt;


<iframe src="http://nachopro.forumvi.com/h2-page-chatbox" scrolling="no" width="100%" height="340" style="border-width:0" marginwidth="0" marginheight="0">

Unknown end tag for &lt;/iframe&gt;



```
Chú ý thay link : http://nachopro.forumvi.com/h4-page-chatbox = link chat box bạn vừa tạo ở bước 1
Bước 3 : kick hoạt chat box : MODULES >> Chatbox >> ChatBox configuration >>
Activate the ChatBox : Chọn có
ChatBox display : Do not display
ok hoàn thành cười nhăn răng