![http://i43.servimg.com/u/f43/15/93/33/76/untitl23.jpg](http://i43.servimg.com/u/f43/15/93/33/76/untitl23.jpg)


Mới rip được nhưng c3zone mã hóa ông thầy nên ông thầy ko sử dụng được
chat box nhẹ và tiện lợi , dùng được cho mọi phiên bản
có nut buzz phát tiếng như trong yahoo

Hướng dẫn :

Bước 1 :
MODULES >> HTML pages management tạo 1 HTML mới


Title **: Chatbox c3zone
Do you wish to use your forum header and footer ? : Không
Use this page as homepage ? : Không
HTML source** : Cho code sau vào

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>c3zone

Unknown end tag for &lt;/title&gt;

<meta http-equiv="content-script-type" content="text/javascript" /><meta http-equiv="content-style-type" content="text/css" /><script src="http://illiweb.com/fa/js_16/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://illiweb.com/rsc/17/frm/chatbox/chatbox4.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<style type="text/css">
* {margin: 0px;padding: 0;}
html, body {overflow: hidden;}
body {background-color: #efefef;}
body,th,td,p {
font-family:Verdana,Arial,Helvetica,sans-serif;
font-size:11px
}
a:link,a:active,a:visited,a:hover {
color:#5D401E;
text-decoration:none;
}
.thead,td.cat,td.catHead,td.catSides,td.catLeft,td.catRight,td.catBottom,td.rowpic {
background:#bfec92;
color:#1a540f;
padding:3px;
font:bold 11px tahoma,verdana,geneva,lucida,'lucida grande',arial,helvetica,sans-serif;
}
td.cat,td.catHead,td.catBottom {
border-width:0;
}
th.thHead,th.thSides,th.thTop,th.thLeft,th.thRight,th.thBottom,th.thCornerL,th.thCornerR {
font-weight:bold;
border:#ffffff;
border-style:solid;
}
.genmed {
font-size:11px;
}
th.thBottom,td.catBottom {
border-width:0 1px 1px 1px;
}
a.gen,a.genmed,a.gensmall {
color:#006699;
text-decoration:none;
}
.cattitle,td .t-title {
font-weight:bold;
font-size:12px;
letter-spacing:1px;
color:#006699
}
a.cattitle {
text-decoration:none;
color:#844A21;
font-size:12px;
}
a.cattitle:hover {
text-decoration:underline;
}
input[type=submit] {
padding:0 5px;
font-size:11px;
cursor:pointer;
background-color:#fff;
border:1px solid #a6a6a6;
color:#000;
font-weight: bold
}
/* Chatbox */
#frame_chatbox {
border:none !important;
}
body.chatbox {
min-width:550px !important;
background-image:none;
padding:0;
margin:0;
background-color:#fff;
}
#chatbox_members {
float:left;
top:28px;
bottom:30px;
width:110px;
overflow:auto;
border-right:1px solid #E5E5E5;
}
#chatbox::-webkit-scrollbar,#chatbox_members::-webkit-scrollbar {
height: 2ex; width: 2.7ex;
-webkit-border-radius: 1.8ex;
}
#chatbox::-webkit-scrollbar-thumb,#chatbox_members::-webkit-scrollbar-thumb {
border-top: 0px solid #fff;
background: #ccc -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(240, 240, 240)), to(rgb(210, 210, 210)));
-webkit-border-radius: 1.8ex;
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
}
#chatbox {
position:absolute;
top:25px;
left:0;
right:0;
bottom:30px;
overflow:auto;
line-height:10px;
}
#chatbox ul {
list-style-type:none;
margin:5px 10px 10px 100px;
border-bottom:2px #3A3A3A dotted;
border-left:2px #3A3A3A dotted;
}
#chatbox li {
line-height:14px;
padding:3px 3px 3px 7px;
}
.chatbox_row_1,.chatbox_row_2,.chatbox_row_3 {
font-size:12px;
}
.chatbox-options {
text-align:right;
}
#chatbox_messenger_form .text-field,#chatbox_messenger_form,#chatbox_messenger_form .gen {
float:left;
}
#chatbox_footer {
position:absolute;
bottom:0;
left:0;
right:0;
height:30px;
}
#chatbox_footer table.text-styles {
float:right;
}
#chatbox_footer .text-field {
float:left;
}
#chatbox_header {
background-color:#e5e5e5;
}
#chatbox p {
line-height:1.2em;
}
.chatbox_row_1 {
padding:4px;
background-color:#fff;
}
.chatbox_row_2 {
padding:4px;
background-color:#FFDFDF;
}
.chatbox_row_3 {
padding:4px;
background-color:#CFE9FF;
}
.memberlist_row_1 {
padding:2px 2px 2px 10px;
background-color:#fff;
}
#chatbox_members .member-title {
text-align:center;
padding:0.5em 0.25em;
background-image:none;
font-size:12px;
background-color:#9FE6FF;
color:#222F03;
font-family:Verdana,Arial,Helvetica,sans-serif;
}
#chatbox_members ul {
list-style:none;
margin:0 0 0 10px;
}
#chatbox_members ul li {
margin:2px 2px 2px 0;
}
#message,#submit_button {
border-width:1px;
}
.fontbutton {
padding:1px;
cursor:pointer;
text-align:left;
}
.fontbutton_normal {
background:transparent;
}
.fontbutton_selected {
background:#0AAF11;
border:1px solid #22229C;
}
.fontbutton_clicked {
background:#1BACDF;
border:1px solid #22229C;
}
.fontbutton_hover {
background:#8F0000;
border:1px solid #22229C;
}
#chatbox .user {
font-weight:bold;
}
div#chatbox {
color:#000;background:#fff;
}
#chatbox_contextmenu {
background-color:#d1d7dc;
border:1px solid #aaa;
}
#chatbox_contextmenu p {
margin:0;
padding:1px 4px;
font-family:verdana,arial,sans-serif;
background:#;
border-bottom:1px solid #777;
}
#chatbox_contextmenu p.hover {
background:#;
}
#chatbox_contextmenu p.close {
background:#ddd;
padding:1px;
font-size:70%;
color:#fff;
}
#chatbox_contextmenu p.close img, label img {
vertical-align:middle;
padding-left:20px;
}
#chatbox_contextmenu a {
color:#;
text-decoration:none;
font-size:70%;
}
#chatbox_contextmenu a:hover {
color:#;
}
.fontbutton {
border: 0;
}
* html #chatbox-members {
/* IE expressions helping IE work in Standards mode */
height:expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 3)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) )+"px");
}
* html #chatbox {
/* IE expressions helping IE work in Standards mode */
height:expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 3)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) )+"px");
width:expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 10)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 1)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 1.3) )+"px");
}
* html #chatbox-footer {
/* IE expressions helping IE work in Standards mode */
width:expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 0)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 0)+(parseInt(document.body.currentStyle.fontSize) * 1.3333333 * 2 * 0) )+"px")
}
.date-and-time {font-size:8px}
#chatbox_option_disco,#chatbox_option_with_archives,#chatbox_option_without_archives,.online-users a[href="/u1"],.online-users a[href="/u31"] {display:none!important}
.msg img {vertical-align:middle}
.msg>strong {   font-size: 11px}


Unknown end tag for &lt;/style&gt;


<script src="/18705.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">//<![CDATA[
var params = '?archives=1';var smilies_sid = '';
$(document).ready(function(){
$('#buzz').click(function(){$("#c3buzz")[0].play();
$("div").vibrate({
frequency: 5000,
spread: 5,
duration: 600
});
});
});
//]]>

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
function login_cb(){if(!connected){CB_disconnect();}setTimeout("login_cb()",1000);}
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2r=2M 2z("[q=Y][w=20]2♥[/w][/q] Để 1ầy F...1p, một Iân bài rất tốt. Nó báo 13ệu rằ0 j sẽ được 0ười yêu 1dặc một 0ười mến mộ ủ0 hộ và Xúp đỡ. Wế nên là 1B tâm j fá, có Eó Eăn gì 1ì 0ười ấy cũ0 1ô0 cảm và Xúp j mà.","[q=Y][w=20]2♦[/w][/q] Để 1ầy F...1W, Iân này nó có Eá 15ều ý Uĩa đấy. Có 1ể là điềm báo về đối tác làm ăn, cũ0 có 1m là 1i đổi 1j 1c hệ. Wày Uĩ j nên nói 11ện với bạn bè và đồ0 1xệp để 13ểu rõ hơn 11ện gì đ1g xảy 1n j ạ.","[q=Z][w=20]2♣[/w][/q] Để 1ầy F...1W, Iân này báo 13ệu Oở 0ại j ạ. 19 sẽ có vài Eó Eăn Oước 1m 1àf cô0, và Hải đề Hò0 có kẻ 2U 1e đồn xấu 1F. Wày Uĩ là j Hải kín đáo hơn, làm mọi 17ệc một cáz cẩn 1ận và 1V đáo.","[q=Z][w=20]2♠[/w][/q] Để 1ầy F...1bậc…. 16ân này nó ứ0 với dối lừa, đổ vỡ 1c hệ. Sắp tới j có 1ể sẽ Hải tạm dừ0 một 17ệc 1c Oọ0, một mối 1c hệ 1c Oọ0 nào đó. Điều đó có 1ể làm j 1Uồn fư0 là nó cần 1yết. Nếu j đ1g băn 2Tăn về một mối tìf, 1ì Iân này nó là điềm báo j sắp Hải 2j 2i 1dặc 0ười ấy làm j 1ất vọ0. Wày Uĩ j nên 1z xếp để được Uỉ 0ơi và 1ư Xãn một 1ời 18, rồi j sẽ ổn.","[q=Y][w=20]3♥[/w][/q] Để 1ầy F...1bà, Iân này à, Eó đây. Nó 1ườ0 báo 13ệu 11ện tìf 2e 2d j ạ. 19 sẽ 1ấy Eó zọn lựa tìf yêu đíz 1ực của mìf. Tìf cảm Eô0 gượ0 ép được, 1ế nên j hãy 1ư Xãn và để 14 11ện gì đến sẽ đến.","[q=Y][w=20]3♦[/w][/q] Để 1ầy F...1bà… 16ân này nó 1Yên 1c đến Háp 1Gật j ạ. Wời 18 này 1ì j Hải cẩn 1ận, Oáf cãi vã, 2t đột fé. Nếu j cư xử Eéo léo, 1hết Oước 1hết 2c 1ì 1ày Uĩ cũ0 sẽ Eô0 có vấn đề gì đâu..","[q=Z][w=20]3♣[/w][/q] Để 1ầy F...1R, một Iân bài báo 13ệu tìf yêu và hạf Húc. Nếu j 1lốn cầu hôn 1t 1ì đây là 1ời điểm 1íz hợp đấy. 24ài 1n, nó còn 1a ý Uĩa là cơ hội 1ứ 2B nữa. Vậy nên nếu có 17ệc gì Oước đây zưa 1àf, mà j 1lốn 1ử lại 1ì hãy 12ến lên fé.","[q=Z][w=20]3♠[/w][/q] Để 1ầy F...1p, Iân này Eô0 được tốt, nó tượ0 Oư0 14 1c hệ đổ vỡ j ạ. Wày Uĩ là có 1ể có đứa địf 1M 1L vào mối 1c hệ của j. 1P 1ời 18 này j nên cẩn 1ận, Oáf 2w zạm 1f cãi cọ làm đổ vỡ tỉf cảm.","[q=Y][w=20]4♥[/w][/q] Để 1ầy F...26, Iân này báo 13ệu 1i đổi 1j cô0 tác, fà cửa j ạ. Có 1ể sắp tới j sẽ có 2Fên 11ển nơi cô0 tác 1dặc là 11ển fà. Wày Uĩ là j cứ nên dự tíf Oước Eô0 nó lại cập rập.. ","[q=Y][w=20]4♦[/w][/q] Để 1ầy F...Ấy, Iân bài tốt j ạ, nó báo điềm tài zíf j sắp Hất đến nơi rồi. 1v 1ày tíf 1ì j 1ấy ư0 vụ làm ăn nào là 1Dến 1Gôn j ạ. Wêm nữa là j sẽ fận được lời 1uên tốt từ 0ười một 0ười đứ0 1Eổi. Nếu j zú ý lắ0 1o 1ì sẽ rất có lợi đấy.","[q=Z][w=20]4♣[/w][/q] Để 1ầy F...Đây là một Iân bài cảf báo. 1v 1ày tíf 1ì 1ời 18 này j Hải cẩn 1ận Eô0 có đứa 18 dối, Hản bội đấy. Nếu j mà kí cọt gì cũ0 Hải đọc lại, Eô0 zủ 1c 1o zưa. 1búc j 1q mắn!","[q=Z][w=20]4♠[/w][/q] Để 1ầy F...19 à, Iân này nó 1f đi 1Yền với cả 1lộn 21ền, rắc rối. Wày Uĩ j nên cẩn 1ận 1j 1D 12êu, với cả đề Hò0 mất của. Nói 1H 1ì cũ0 Eô0 có gì 1K 13ểm lắm, j cứ 1B tâm đừ0 1I Uĩ 15ều, mấy hôm nữa vận 11ển 25 dời mọi 1ứ sẽ đâu vào đấy 1ôi.","[q=Y][w=20]5♥[/w][/q] Để 1ầy F...26, Iân này báo j 1hết là có đứa đ1g 1s với j đấy. Cũ0 Hải, 0ười đá0 yêu 1ì 2b Xờ zả có đứa 1s tức hả j. Wày Uĩ là j cứ đề Hò0 một tí, cũ0 zả hại gì.","[q=Y][w=20]5♦[/w][/q] Để 1ầy F...À, Iân bài báo 13ệu 1àf cô0 và hạf Húc đấy j ạ. 1v 1ày tíf 1ì sắp tới j sẽ có vài 1i đổi 2m hướ0 tốt. Wày Uĩ là 1ời 18 này rất 1íz hợp để có 2n bé 1dặc là làm dự án mới.","[q=Z][w=20]5♣[/w][/q] Để 1ầy F...16ân này báo điềm làf j ạ. Sắp tới j sẽ có 15ều bạn mới, 15ều 0ười Xúp đõ, 15ều bằ0 hữu tốt bụ0. Wày tíf 1ì j nên bỏ 15ều 1ời 18 2p lưu bạn bè, mở rộ0 1c hệ và 1yết zặt tìf bạn cũ. Điều đó sẽ làm j 1k vẻ và 2Dải mái.","[q=Z][w=20]5♠[/w][/q] Để 1ầy F...À, j này cũ0 Eá được j ạ. 1v 1ày Uĩ 1ì j hơi 1h 1c với tìf hìf 1ôi. 1Zên đâu nó có đấy, Eó Eăn bây Xờ zỉ là tạm 1ời 1ôi j ạ. 19 cứ lạc 1c mà 1k số0 fé!","[q=Y][w=20]6♥[/w][/q] Để 1ầy F...Ái zà, Iân này báo 13ệu 1q mắn j ạ. 2J mắn này 12ếp 1q mắn 2K. Có 0ười 1lốn zăm sóc 14 j. Có 0ười yêu mến j. 19 sẽ 1ấy ấm áp và Oàn đầy hạf Húc. Mỗi tội là j đừ0 nên đáf bạc lúc này, đỏ tìf 1ì đ2a bạc mà.","[q=Y][w=20]6♦[/w][/q] Để 1ầy F...1p… Iân này à, báo điềm Oục Oặc, cãi vã, 2j 2i j ạ. Wời 18 này 11ện tìf cảm dễ xảy 1n mâu 1zẫn, 1ế nên 1ày Uĩ là j cứ Hải bìf tĩf, điềm đạm vào. Có 11ện gì xảy 1n cũ0 đừ0 nổi Xận mà tổn hại sức Eỏe, 32 sắc fé.","[q=Z][w=20]6♣[/w][/q] Để 1ầy F...1W, Iân này nó báo rằ0 j sắp có 1àf cô0 1j tài zíf. Wày tíf 1ì j sắp được 1t đó 14 12ền, tài Oợ 1dặc Xúp đỡ tài zíf rồi. Cố gắ0 làm 17ệc và học hàf zăm zỉ fé!","[q=Z][w=20]6♠[/w][/q] Để 1ầy F...1p... 1ày Uĩ là sắp tới j có vài 1i đổi fỏ 1a tíf tíz cực. 2l 15ên cũ0 Eô0 lớn lắm j ạ. Wày tíf sắp tới mọi 11ện sẽ ổn địf và 1B làf, j 1B tâm fé!","[q=Y][w=20]7♥[/w][/q] Để 1ầy F...1bậc, Iân này tượ0 Oư0 14 0ười Eô0 1H 1ủy, tìf cảm 1f 1i đổi. Có 1ể sắp tới j sẽ 1ấy hơi bị \'1ất tìf\' một tí, fớ 2v 0ười 1A 15ều một tí mà fận lại zả được 2b 15êu... 1Nư0 Eô0 25, bôi 1X sẽ Eỏi, 1ày Uĩ là 11ện đó 1O cũ0 1J 1ôi j ạ. Lúc này tâm Oạ0 0ười 1A cũ0 Eô0 ổn địf, fư0 rồi dần dà 1ì tỉf cảm cũ0 sẽ zắc zắn hơn...","[q=Y][w=20]7♦[/w][/q] Để 1ầy F...1bậc zậc…. 16ân này nó báo điềm là sắp tới j sẽ Hải cãi 2H về 11ện 12ền bạc 1dặc cô0 17ệc. Wày Uĩ là j nên 1Vẩn bị Oước 2I 1ần với cả lý lẽ một zút. Wườ0 là 11ện này cũ0 sẽ êm 1ắm đâu 1n đấy 1ôi j ạ, Eô0 cần 1I lắ0 lắm đâu.","[q=Z][w=20]7♣[/w][/q] Để 1ầy F...Ấy, Iân này báo 13ệu cô0 17ệc làm ăn, học hàf 1zận lợi j ạ. Wày tíf là zẳ0 mấy zốc mà j sẽ 1ă0 zức 1dặc tă0 lươ0. 2l 15ên j có 1ể có vài rắc rối 22 fỏ với 0ười Eác Xới.","[q=Z][w=20]7♠[/w][/q] Để 1ầy F...1bà zà, để 1ày Uĩ đã... 19 bảy bíz này nó là điềm báo rằ0 j sắp có zút Eó Eăn. Có 1ể là j Eô0 1o lời 0ười Eác 1uên nên mất đi cơ hội. 23ó Eăn xảy 1n cũ0 zỉ 2L j 1Vốc lấy 1ôi. Wế nên 1ày Uĩ zỉ cần cẩn 1ận và zịu lắ0 1o 1ì sẽ ổn j ạ.","[q=Y][w=20]8♥[/w][/q] Để 1ầy F...2N, Iân này báo rằ0 j sắp được tặ0 Ià 1dặc được rủ đi zơi. 2Q lên j fá, 1ày Uĩ là j sắm sửa Iần áo, zỉf 2S đầu tóc đi, sắp được đi zơi rồi mà.","[q=Y][w=20]8♦[/w][/q] Để 1ầy F...1p… 16ân này nó là điềm báo 1i đổi 1j cô0 17ệc j ạ. Có 1ể là j sẽ tìm 1ấy một cô0 17ệc mới, 1dặc là tìf hìf cô0 17ệc bây Xờ sẽ Eác. Nếu j đi 2q lịz 1f cô0 tác 1j 1ời 18 này 1ì rất có 1ể sẽ tìm 1ấy một 0ười Eác Xới hấp dẫn. Nói 1H 1ày Uĩ là j sẽ 1ấy một vài 1i đổi 22 fỏ và dễ zịu đấy.","[q=Z][w=20]8♣[/w][/q] Để 1ầy F...1bà, Iân này Eô0 được tốt j ạ. 19 Hải cẩn 1ận có kẻ 1s 1Qét 1j cô0 17ệc. Cô0 17ệc của j có 1ể sẽ Eô0 được 1zận lợi lắm, fư0 đừ0 1I lắ0 Iá vì zỉ cần j tỉf táo 1ì sẽ ổn.","[q=Z][w=20]8♠[/w][/q] Để 1ầy F...1bẹc, tám bíz à, để 1ày Uĩ... 19 này nó Uĩa là sự 27 35, Eô0 1q, 1K 13ểm, 1Uồn rầu. Nếu j đ1g 28 tíf 11ện gì 1ì cũ0 nên 2s fớ mìf Hải cẩn 1ận hơn 29. Wày Uĩ là có gì cản Oở 1ì cũ0 sẽ 1O, 2uễn là j 28 Uĩ 1ấu đáo và zấp fận Eó Eăn.","[q=Y][w=20]9♥[/w][/q] Để 1ầy F...16ân bài của mơ mộ0, ước 1S, 2xềm 2y vọ0. Gặp Iân 9 cơ là điềm báo ước mơ 1àf 13ện 1ực j ạ. Wày tíf rồi, j zỉ cần cố gắ0 hết sức rồi 11ện gì cũ0 sẽ đạt được. Ước 1S đ2A đáu 1j lò0, 1bỉ cần 12ến tới 1ì Eô0 sợ gì.","[q=Y][w=20]9♦[/w][/q] Để 1ầy F...Để 1ày F… 16ân này nó 1a điềm báo là j sắp có 1ươ0 vụ mới, có 1ể sẽ Hải đi cô0 tác 1F fà. Wời 18 này zắc j sẽ Eá bận rộn, 1Gôn zân 1Gôn 2e và có 1ể Hải 11ển nơi ở một 1ời 18.","[q=Z][w=20]9♣[/w][/q] Để 1ầy F...1p, Iân này 1a điềm báo 1àf cô0. Nếu mà j zưa kết hôn 1ì 1ày Uĩ rất có 1ể là j sắp cưới j fà đại 1C j ạ, Eô0 1ì 0ười yêu j cũ0 sắp Oú0 số lớn đấy. 24ài 1n 1ì nó cũ0 báo rằ0 j sắp gặp của Oời 14, 12ền bạc từ đâu rơi 2Cố0.","[q=Z][w=20]9♠[/w][/q] Để 1ầy F...1p, zín bíz Eô0 Hải là Iân bài tốt làf 14 lắm j ạ. Wời điểm này có 1ể nói là vận hạn của j đ1g đến, 1ế nên 1ày 1uên j nên Xữ gìn sức Eỏe, cẩn 1ận đườ0 xá, Eô0 12êu 15ều 12ền. Rồi mấy hôm nữa điềm dữ nó bơn bớt đi 1ì j sẽ lại vô tư 1ôi j ạ. Wày zúc j 1q mắn 15ều hơn.","[q=Y][w=20]10♥[/w][/q] Để 1ầy F...Ấy, Iân bài này tượ0 Oư0 14 1q mắn và 1àf cô0 j ạ. Gặp Iân 10 cơ 1ì đíz 1ị là 1dạn nạn sẽ vượt 1O, 2E 2d là j 1lỗi. Nếu vừa gặp Eó Eăn 17ệc gì 1ì j cứ yên tâm là sẽ ổn. Làm ăn, học hàf, cô0 2f sự 1xệp sẽ tấn tới. Mười cơ là dấu điềm làf, 23ó Eăn đến mấy cũ0 Xàf vẻ 2G. Dẫu 14 cơ sự 2g tàf, Vượt lên Hút zốc Oở 1àf đại 1C.","[q=Y][w=20]10♦[/w][/q] Để 1ầy F...À, Iân bài tốt đây. 1bất rô vốn tượ0 Oư0 14 12ền tài 2f vọ0, điểm mười 1ườ0 báo 1e tốt đẹp. Gặp Iân này 1ì 1ày Uĩ là j sắp có 1i đổi 11ện 12ền bạc, 1ườ0 là tốt j ạ. 1v 1ày tíf 1ì túi 12ền rủ0 rỉf đến nơi rồi. 1Nớ zăm zỉ làm ăn và tíf 2hán 1D 12êu một zút fé, cơ hội đ1g đến đấy.","[q=Z][w=20]10♣[/w][/q] Để 1ầy F...16ân bài tốt j ạ. Báo 13ệu làm ăn 1q mắn 1àf đạt. Nếu j đi 2q lịz 1f làm ăn 1F fà bây Xờ 1ì rất có 1ể sẽ gặp được bạn mới, nếu zưa có 0ười yêu 1ì có 1m tìm được 0ười yêu đấy.","[q=Z][w=20]10♠[/w][/q] Để 1ầy F...1bẹp, j mười bíz này Eô0 được tốt lắm j ạ. 19 có điều ưu tư, có 1ể sẽ fận được 1e Eô0 tốt lắm. Wày Uĩ là 1ời 18 này j nên Uỉ 0ơi, 1ư Xãn, đừ0 Iá 1I lắ0 rồi sẽ ổn 1ôi j ạ.","[q=Y][w=20]A♥[/w][/q] Để 1ầy F...16ân này nó báo điềm làf về tìf yêu đó j. Vốn dĩ nó là tượ0 Oư0 14 1C đìf mới cả 1ư tìf. Bắt được Iân này 1ì 2kểu gì 1ì rắc rối 1lộn 21ền cũ0 đều 2g 1hến, 1e 1k tới tấp đưa về j ạ. Nếu mà zưa có 1t yêu, gặp 1T 0ười ấy 1Uổi 1Dều hôm 2c. Nếu mà tìf ái u sầu, 17ệc 1q sẽ đến rơi đầu j 1T.","[q=Y][w=20]A♦[/w][/q] Để 1ầy F...À, Iân này 1ườ0 báo 1e tốt j ạ. Nó tượ0 2O 14 sự 1i đổi, một 1ô0 điệp tốt, 1ườ0 là về 12ền bạc. Wày tíf 1ì có 1ể j sắp được tă0 lươ0 đấy. Cứ cố gắ0 học hàf làm 17ệc zăm zỉ fé, rồi j sẽ fận được 1e 1k sớm 1ôi.","[q=Z][w=20]A♣[/w][/q] Để 1ầy F...Ái zà, j này hên lắm j ạ. Bốc được Iân này 1ày Uĩ j nên đáf xổ số đi. Nó báo 13ệu Xàu 2P, 1rền Iý, của cải 2kếm được bất 0ờ. 1Nư0 mà cù0 Hải fớ, cái gì đến 1J 1ì có 1ể đi cũ0 1J lắm, j Hải 1hết 12êu 2R cẩn 1ận đấy.","[q=Z][w=20]A♠[/w][/q] Để 1ầy F...1bậc, Iân này 1w lắm j ạ. Wời 18 này, j Hải đề Hò0 vấn đề sức Eỏe của bản 1ân, 1C đìf và 0ười 1ân. 1Zện làm ăn, học hàf cũ0 nên cẩn Oọ0. Nói 1H Eô0 nên đi đâu 1F. Cần Hải zú ý mọi lúc mọi nơi từ 1m đi đườ0 đến 1m lên Xườ0 j ạ.","[q=Y][w=20]J♥[/w][/q] Để 1ầy F...16ân bài 1a hìf 0ười bạn tốt, đôi 1m ám zỉ một 0ười mến mộ Oẻ 1Eổi. Gặp Iân bài này, 1ày Uĩ j sắp gặp được một 0ười có tíf cáz rất 1f 1d, 1k tíf và 1ân 1yện. 2oười này có vẻ mến mộ j. Nếu j là nữ Xới đ1g 1lốn có 0ười yêu, rất có 1ể đây là cơ hội tốt. Nếu là 2V Xới, j sắp gặp một 0ười bạn zơi được. 2oười ái mộ Oẻ 1Eổi, 2W bô0 hồ0 và cả Oái 2X, Gặp j một 0ày Eô0 đợi, Là 2Y kỉ và có 1ể tìf yêu.","[q=Y][w=20]J♦[/w][/q] Để 1ầy F...Để 1ày 2Z… J Rô à, một zà0 30 Oẻ zỉf tề fư0 cũ0 có 1ể là một j 0ười đố kỵ Eô0 đá0 1e tưở0. Wày tíf 1ì j sắp có 0ười báo 1e Eô0 được tốt làf, fư0 mà cũ0 Eô0 có gì 1c Oọ0 2h tát lắm. 19 nên tỉf táo 1m 1o lời 0ười Eác vào 1ời 18 này fé.","[q=Z][w=20]J♣[/w][/q] Để 1ầy F...J fép, một 0ười bạn 1L 1Eổi tíf tìf sốc nổi fư0 1k vẻ và tốt bụ0. Wày tíf là j sắp có dịp đi zơi 1k vẻ rồi, nếu zưa có 0ười yêu 1ì đây cũ0 là cơ hội tốt đấy.","[q=Z][w=20]J♠[/w][/q] Để 1ầy F...16ân bài 1a hìf tượ0 của một kẻ 1ù địz và 1f 1s tị. Wày Uĩ là 1ời 18 này j nên cảf Xác hơn 1j 11ện 12ền 31 cũ0 fư tìf cảm, đề Hò0 fữ0 kẻ 12ểu fân 1s 1Qét, 1ù địz.","[q=Y][w=20]K♥[/w][/q] Để 1ầy F...A, Iân này nó 1a hìf ô0 Xà tốt bụ0, Uĩa 13ệp, 1ô0 1ái, 13ểu 1hết. Gặp Iân bài này báo điềm làf rằ0 j có Iý fân Hù Oợ, Xúp đỡ j 1T cả 1m j zưa cần fờ vả gì. 1bờ 1e tốt 29 j! Ô0 Xà 1a đến 1e 1k, Eó Eăn Xúp đỡ vận 1w sẻ cù0. Dẫu Eó Eăn đến 1lôn Où0, có ô0 gìa béo đỡ cù0 với j.","[q=Y][w=20]K♦[/w][/q] Để 1ầy F...1p, 1ày F nào…. 16ân này nó 1a hìf một 0ười đàn ô0 1ố0 Oị 1rền lực của Đất, một 0ười đầy 1rền lực, địa vị và ảf hưở0. Bốc được Iân bài này, j sẽ sớm có 1e tốt làf, 1ườ0 là được 1ă0 zức j ạ. Wời 18 này j nên đối tốt với các sếp Oên cũ0 fư đồ0 1xệp, sẽ dễ có cơ hội lắm đấy.","[q=Z][w=20]K♣[/w][/q] Để 1ầy F...1R, Iân này 1a hìf một ô0 Xà tốt bụ0, hào sả0, 15ệt tìf. 19 sẽ gặp được Xúp đỡ từ cấp Oên, 1ày cô, bố mẹ 1f họ hà0 zú bác đấy. Wày Uĩ có 1ể là j sắp được 17ệc làm mới có lươ0 1X hơn, 1ă0 zức 1f 0ười Eác 14 12ền.","[q=Z][w=20]K♠[/w][/q] Để 1ầy F...33, 1ày F nào.... 16ân bài này tượ0 Oư0 14 0ười Xàu 27 vọ0 và có 1ể íz kỷ. Nó là điềm báo 14 j 1hết Hải đề Hò0 kẻ 12ểu fân Oáf sự 1s 1Qét, 34 1M. 19 nên fườ0 fịn 11ện fỏ, fư0 đừ0 để 1t độ0 đến 1rền lợi của mìf.","[q=Y][w=20]Q♥[/w][/q] Để 1ầy F...16ân này nó 1a hìf 0ười đàn bà 13ền làf, tốt bụ0 đó j ạ. Wày Uĩ là j sắp fận được fữ0 lời 1uên tốt từ một 0ười Hụ nữ ấm áp và tìf cảm. Đôi lúc 1ì j bài này ám zỉ hìf mẫu của 0ười mẹ, 0ười zị 1dặc 0ười bạn tâm 2p nữ Xới. Gặp 0ười Hụ nữ tốt tâm, lắ0 1o lời nói sẽ làm j 1k. Nếu mà đ1g gặp 11ện 1w, có 0ười Hụ nữ 1hến 1w hóa làf. P/s: 36 1ày nói này, nếu mà j đ1g 1lốn cưa 1t ý, 1ì Hải cưa mẹ, zị gái, 2n gái 1f bạn gái 1ân của 0ười 1A Oước 1o Eô0, sẽ lợi đủ đườ0 đấy j ạ.","[q=Y][w=20]Q♦[/w][/q] Để 1ầy F...À, Iân này nó 1a hìf một 0ười Hụ nữ 1ố0 Oị 1rền lực của Đất, 1a ý Uĩa là có 11ện đ1g xảy 1n j ạ. 37 đồn 1ì 1f 1ất 1yệt, fư0 mà cũ0 Hải nói rằ0 có lửa 1ì mới có Eói. Wày Uĩ là j nên Oò 11ện 15ều hơn với bạn bè, đồ0 1xệp mà 1hết 0ười 1A đ1g bàn tán cái gì, sẽ có lợi 14 j.","[q=Z][w=20]Q♣[/w][/q] Để 1ầy F...1R, Iân này 1a hìf một Hụ nữ tốt bụ0, 15ệt tìf và cởi mở. 19 sẽ gặp được Xúp đỡ từ một 0ười Hụ nữ đấy. Wày Uĩ có 1ể là j sẽ fận được một lời 1uên bổ íz từ 0ười ấy, fớ lắ0 1o j fé.","[q=Z][w=20]Q♠[/w][/q] Để 1ầy F...16ân bài tượ0 Oư0 14 một góa Hụ áo đ2a. Một Iân bài 1K 13ểm. 19 Hải Oáf bẫy tìf và đề Hò0 fữ0 kẻ 1M 1L. 1P 11ện tìf cảm, cần Hải mềm mỏ0 fư0 tỉf táo. 1P cô0 17ệc, j Hải sá0 38ốt Eô0 1rết địf 2m tìf cảm 39ê0.","[q=Y][w=20]3a[/w][/q] Để 1ầy F...3bă0 3c. 16ân bài của số mệf. Nó Eô0 Hải là một điềm gở cũ0 fư điềm làf j ạ. Ý Uĩa của nó là 11ện gì đến sẽ đến, nếu j 1S zờ một điều gì đó 1ì cũ0 Eô0 Hải sổt 3dột. Wày Uĩ là j hãy để mọi 1ứ tự 15ên, đừ0 gượ0 ép.");',62,200,'ng|th||||||||||||||nh||||con|||||||color||||||size|||ch|||||kh|xem||ph|qu||||||tr||||||ngh||Th|gi|red|black||chuy|ti|hi|cho|nhi|Qu|vi|gian|Con|mang|Ch|quan|ho|tin|hay|ang|bi|thay|trong|vui|mu|khi|ra|nghe|Uhmm|may|quy|ghen|ai|khuy|Theo|xui|nghi|thi|thu|ta|an|gia|chi|tu|xa|lu|chung|lo|nhanh|nguy|ngang|chen|Nh|qua|Trong|gh|Oh|mong|ngay|bu|chu|Hmm|cao|li|Chuy||phi|nho|Kh|Ngo|sao|Hmmm|tham|suy|nha|en|bao|sau|ba|tay|danh|tan|to|ly|chia|ki|Tuy|theo|em|Ng|giao|du|bai|ghi|xung|mi|nhung|va|ni|hy|Array|au|hai|xu|tho|phong|thuy|vang|nhau|tinh|May|kia|do|new|Hehe|trung|sang|Vui|pha|trang|kho|tung|nam|Mang|tim|tri|coi|trai|nong|nhan|Uhm|bon|lam|Nghe|Tin|su|ri|JOKER|Ph|teo|ru'.split('|'),0,{}));
// c3zone
outt = 1010;
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1c=2w 2f("Bây zờ 2ì có, 4ư0 1d này 2ì 3ưa 3ắc.","Bây zờ 2ì 3ưa, 4ư0 cũ0 sắp sửa","Bây zờ 2ì 3ưa, 4ư0 1d này 2ì có","Cái này cũ0 còn tùy ","Nếu 2í3 5 cứ 4í3","Cái này 6ó à 14. Aư0 2E% là có ","Cẩn 2ận. Zô0 được đâu ","Có gái 6ô0 zới 1Jệu 1I 2ầy một 2Q rồi tí4 típ","Có. Aư0 1d này wải cẩn 2ận. jầy 4ìn 2ấy có sự 17 đổi.","Tươ0 1W tươi sá0 rạ0 rỡ lắm","Q đ16 wê à, 2G tí4 3ơi 1m đấy?","Cũ0 được đấy 4ư0 wải cẩn 2ận","Cũ0 được. Aư0 đợi đến tết Cô0-gô 2ì 1H ước sẽ 2à4.","Cũ0 1T 1aẩn Gốc tế đấy","2p mà 1G hỏi 6ó 2N 1Fậy?","2Rến hết 5 ạ!","Pơi 1Rôn đi! 1j wải 1lắn!!","20ẩn 6ô0 cần 3ỉ4! 3ỉ4 là 26","Dân 3âu 2i cũ0 wải mê 5 ạ","Để 2j tí4 :D","Đưa 2ầy ít Fền đi rồi 2ầy nói 1I 2u","Hỏi gì mà 1b 2ế 5?","Hỏi 6ó Gá 1E 3ừ0 O đườ0 3ó cắn à 14","Hỏi 2ế 2ì bố 2ầy cũ0 2Z dám Eả lời","Zó đó à 14","1S đi 3ết đi. Dám đá4 đố 2ầy à?","Mọi Rệc 3ỉ có 1U% 4ư 1H 11ốn 2ôi","1X 11ốn ói Gá :-&","1Yĩ 1G mà hỏi vậy? Đị4 2ử 2ầy à","22ều 6á3, 2ầy đ16 bận Gá. Lát 2ầy Eả lời","Ôi zời! Tất 1Bên là có","1j zố0 2ầy 1Fậy","jầy 5 mê nữa 2cố0 U 19","jầy đ16 đô0 6á3 Gá, để lúc 6ác","jầy 2ần 2ô0 Gả0 đại lắm cái gì cũ0 13ết hết","1z 2ầy tí4 là 6ô0","1z 2ầy 2ì 3ắc 3ắn là 6ô0.","jí3 2ì Uều 2ôi","1tả Fền đây đi rồi hỏi Fếp","2v 2y, điều đó 3ắc 3ắn sẽ xảy O","qệc này tưở0 dễ 4ư0 mà 6ó đấy","Yên tâm đi, 3ắc 3ắn là có","2H 1f 2Oàn 0ười tài zỏi cả","Câu này 2ầy wải hỏi 5 mới đú0","Pơi 1láy 1m àh, hỏi vậy bố 2ầy cũ0 2P Eả lời được","Pỉ có một 3út xíu 2ôi 5 ạ","Zô0 4ư 5 1rĩ đâu","Cái này á, cũ0 6ó 1rĩ, 4ư0 có vẻ là có","Sẽ ổn 5 ạ!","1pẻ nói hết 2á0 này 5 ạ","Zôồồ2T!","Tất 1Bên là 2ế, 1aẩn 6ô0 cần 3ỉ4!","Pắc cũ0 có wần nào 4ư 2ế","Tùy, 3c 2ì Uều 5 ạ","Cũ0 được, nếu 5 11ốn vậy","Nói có 2ì 2ày áy náy lắm >.< ","Cũ0 6ô0 sớm, 4ư0 5 cũ0 6ô0 Rệc gì wải vội","Cũ0 có lẽ là nên 2ế","Tầm mấy hôm nữa 5 ạ, cứ yên tâm","Q vứt cái máy tí4 đi là vừa","jầy bấm O ít lắm 5 ạ","1pẻ nói 5 cứ 3ờ 10 năm 6ắc 13ết","Tùy, 1Jên 2ời địa lợi đủ cả, 3ỉ 3ờ lò0 0ười ủ0 hộ là được 5 ạ","jầy bấm đốt 2ì O tầm dăm hôm nữa 5 ạ","Cái này 2ì mẹ 5 13ết rõ hơn 2ầy");4o 1P(a){e(a.1i<8)9"Pơi 1láy 1m à :| 5 6ô0 hỏi bố 2ầy cũ0 6ô0 Eả lời được :1k:";f e(/\\/1V được/i.7(a)&&/2ầy wán/i.7(a))9"Tự sướ0 hả 5! 1tì4 gì mà đòi zả 1o 2ầy :1k:";f e(/1A|lấy|1Z|3ôm/i.7(a)&&/V/i.7(a))9"Đợi tí 2ầy mò 21 túi 1q ... :23: à! đây: [1g]24://1g.25.1s.27/V.28?29="+a.2a(a.2b(\' \')+1)+"[/1g]";f e(/2d|2e/i.7(a))9"Hướ0 dẫn :[1u][*]Aập cú wáp [u]/17[/u](2gặc [u]@2ầy[/u])-2hả0 Eắ0-câu hỏi để \\"2ỉ4\\" jầy[*]Aấn [u]1v+X[/u](1v+2k+X với 2l) 2m 4ập 2ô0 điệp để gọi \\"jầy\\" 2n.[*]Aập [u]1A V + 2o[/u] để lấy V 1s.[*]Aập [u]bói bài[/u] để được \\"jầy\\" bói bài.[*]Aập [u]1w[/u] để đó0 mở 2q 2r 2s - 2t.[*]Aập [u]1x[/u] để 1q 2ô0 1y \\"jầy\\".[*]Dù0 Fế0 qệt 1aẩn - hạn 3ế Rết tắt, dù0 Fế0 nước 4Sài.[/1u]";f e(/1x|19 Rết|19 bảo/i.7(a)||2x)9" ~ \\"jầy\\" được Rết bởi qệt K - 2z.1f.2A :2B:";f e(/1w/i.7(a)){2C();9"đã đó0/mở :!:"}f e(/2D|bói/i.7(a)&&/1n|bài/i.7(a))9 2F(W.1C(W.1D()*(1n.1i-1)));f e(/2I|2J|2K|3ào|ê 2ầy|2ầy ơi|2ầy 2L/i.7(a))9"Pào 5 :!: Hôm 2M 5 11ốn hỏi cái U :?:";f e(/J|qệt|1h|J K|qệt K|15/i.7(a)&&(18=/đẹp|ẹp 12|đẹp 12/i.1e(a)))9"Đừ0 2S tị với vẻ "+18+" của 0ười 6ác 1K 5 :!:";f e(/5/i.7(a)&&(18=/đẹp|ẹp 12|đẹp 12/i.1e(a)))9"2U :o Eên đời có đứa tự 1y hơn cả 2ầy tròn mắt";f e(/đụ|cứt|5 2V|2W|2X|2Y|1L|30|31|1L|32|lồn|cặc|đéo|33|34|mịa|35|36|37|địt|nồn|đít|đĩ/i.7(a))9"Nói bậy àh? 38 3ừ0 O đườ0 3ó cắn 14 5";f e(/J|qệt|17|1f|2ầy|2ằ0|J K|qệt K|15/i.7(a)&&/3ém|đá4|Gý4|39|1o|3a|đá|đập|3ó|láo|cún/i.7(a))9"3bốn 3ơi à? jí3 2ì Uều 2ôi";f e(1M=/xấu|dâm|1b|0ốc|xàm|4ảm|4ảm 4í|điên|dở hơi|hâm|6ù0|2ần 3d|đần độn|kìn|6ìn|dở 0ười|1b 3e|dê|đê Fện|bệ4|tũn|dại gái|bã đậu|tâm 2ần/i.1e(a))9"3f 2ấy 5 còn "+1M+" hơn :1k:";f e(/J|qệt|17|1h|2ầy|J K|qệt K|15/i.7(a)&&/bố|mẹ|cắn|3gổi|vợ|bồ|0ười yêu|3h|3i|3j|tên gì|đàn bà|đi đâu|làm gì|ở đâu|xạo|bị gì/i.7(a))9"3k mói Gá 1E 3ừ0 O đườ0 sét đá4 Eú0 1K 5!";f e(/J K|qệt K|15|1h/i.7(a))9"Q nói 3l qệt K à? jần tượ0 của zới Eẻ đó ;)";f e(/3m|3n|3o|3p|3q|3r|3s|3t|3u|3v|3w|3x|3y|3z|3A|3B|3C|3D|3E|3F|3G|3H|3I|3J|3K|3L|3M|3N|3O|3P|3Q|3R|3S|3T|3U|3V|3W|3X|3Y|3Z|40|41|42|43|44|45|46|47|48|49|4a|4b|4c|4d|4e|4f|4g|4h|1N|1N|4i|4j|4k|4l|4m|4n|1O|1O|4p|4q|4r|4s|4t|4u|4v|4w|4x|4y|4z|4A|4B|4C|4D|4E|4F|4G|4H|4I|4J|4K|4L|4M|4N|4O|4P|4Q/i.7(a))9"Q nói Fế0 4R à? jầy 3ỉ 13ết Fế0 I-rắc 2ôi tròn mắt";f e(a.1Q(\'?\')==-1)9"Q đ16 hỏi 2ầy à? 1j 6ô0 2ấy dấu 3ấm hỏi";f 9 1c[W.1C(W.1D()*(1c.1i-1))]}',62,303,'ng||th|ch|nh|con|kh|test||return|||||if|else||||Th|||||||Vi||||||ph|||gi|Nh||||tr|ti|qu|||Viet|||||ra|Ch|Con|vi|||chi|avatar|Math|||Kh||mu|trai|bi|nha|VK|ang|thay|dt|ai|chu|ngu|traloi|sau|exec|c3zone|img|admin|length|Sao|suspect|xo|nhau|bai|danh|Qu|xem|ngh|yahoo|Tr|list|Alt|who|about|tin|Theo|get|nhi|round|random|coi|dz|sao|mong|cho|thi|nghen|dis|rec|za|qp|phangi|indexOf|lu|Mi|ngang|50|me|lai|Nghe|Ngh|xin|Chu|trong|Nhi|idea|http|msg|sai|com|php|yids|substr|lastIndexOf|hu|help|how|Array|ho|kho|Phi|mai|Shift|FF|khi|nhanh|nickyahoo|Cutie|khung|Member|Online|Away|nghe|Uhm|new|thinh|uhm|www|net|67|showh|boi|80|boibai|hay|BQT|alo|hello|helu|ui|nay|qua|to|ko|em|Chi|ganh|nngg|OMG|cu|cac|lon|loz|hem|shit|fuck|fuk|vl|VKL|DKM|mie|fucking|Coi|chem|quynh|Mu|thik|kinh|si|Ta|tu|gay|bede|pede|Xoi|anh|qq|ww|ee|rr|tt|yy|uu|ii|oo|ty|yt|yu|hg|aa|ff|gg|hh|jj|kk|ll|zz|cc|vv|nn|mm|fa|af|sd|ds|df|fd|kl|lk|hj|jh|qw|wr|hs|bm|xc|zx|xz|cx|cb|bv|bc|ar|er|dg|gd|hd|dh|fk|dj|fl|sw|wh|rt|mz|zm|mx|xm|tv|cw|function|sl|lc|cl|ql|lz|hb|bh|cg|gc|fg|gf|ad|fc|cf|zl|lt|tl|sp|ol|py|mq|qm|rm|mr|cp|pc|fz|zf|Campuchia|ngo'.split('|'),0,{}));
var _0x826a=["\x71\x3D\x31\x30\x2E\x53\x2E\x31\x39\x28\x29\x2E\x66\x28\x27\x55\x27\x29\x3D\x3D\x2D\x31\x7C\x7C\x56\x5B\x58\x5D\x2E\x66\x28\x27\x51\x27\x29\x3D\x3D\x2D\x31\x3B\x6A\x20\x31\x31\x28\x29\x7B\x67\x28\x28\x42\x28\x27\x77\x27\x29\x3D\x3D\x30\x7C\x7C\x42\x28\x27\x77\x27\x29\x3D\x3D\x4A\x29\x26\x26\x21\x71\x29\x32\x2E\x72\x28\x22\x73\x22\x29\x2E\x76\x2E\x75\x3D\x22\x30\x22\x3B\x6D\x20\x32\x2E\x72\x28\x22\x73\x22\x29\x2E\x76\x2E\x75\x3D\x22\x46\x22\x7D\x6A\x20\x52\x28\x29\x7B\x67\x28\x32\x2E\x72\x28\x22\x73\x22\x29\x2E\x31\x38\x21\x3D\x30\x26\x26\x21\x71\x29\x7B\x32\x2E\x72\x28\x22\x73\x22\x29\x2E\x76\x2E\x75\x3D\x22\x31\x37\x22\x3B\x41\x28\x27\x77\x27\x2C\x30\x29\x7D\x6D\x7B\x32\x2E\x72\x28\x22\x73\x22\x29\x2E\x76\x2E\x75\x3D\x22\x46\x22\x3B\x41\x28\x27\x77\x27\x2C\x31\x29\x7D\x7D\x6A\x20\x31\x36\x28\x29\x7B\x67\x28\x21\x71\x29\x7B\x64\x3D\x32\x2E\x33\x2E\x39\x2E\x34\x3B\x61\x3D\x64\x2E\x70\x28\x29\x2E\x66\x28\x27\x2F\x4F\x27\x29\x3B\x62\x3D\x64\x2E\x70\x28\x29\x2E\x66\x28\x27\x40\x6B\u1EA7\x79\x27\x29\x3B\x63\x3D\x64\x2E\x70\x28\x29\x2E\x66\x28\x27\x2F\x7A\x20\u0111\u01B0\u1EE3\x63\x20\x5B\x68\x3D\x23\x43\x5D\x6B\u1EA7\x79\x20\x44\xE1\x6E\x5B\x2F\x68\x5D\x27\x29\x3B\x67\x28\x61\x21\x3D\x30\x26\x26\x61\x21\x3D\x31\x26\x26\x62\x21\x3D\x30\x26\x26\x62\x21\x3D\x31\x26\x26\x63\x21\x3D\x30\x26\x26\x63\x21\x3D\x31\x26\x26\x64\x2E\x54\x3E\x30\x29\x32\x2E\x33\x2E\x39\x2E\x34\x3D\x22\x40\x6B\u1EA7\x79\x20\x22\x2B\x64\x7D\x7D\x6A\x20\x4D\x28\x29\x7B\x32\x2E\x33\x2E\x6F\x2E\x34\x3D\x22\x3A\x4D\x3A\x22\x3B\x32\x2E\x33\x2E\x39\x2E\x34\x3D\x27\x27\x3B\x32\x2E\x33\x2E\x39\x2E\x45\x28\x29\x3B\x74\x28\x4E\x29\x7D\x6A\x20\x5A\x28\x64\x29\x7B\x38\x3D\x32\x2E\x33\x2E\x39\x2E\x34\x3B\x61\x3D\x38\x2E\x70\x28\x29\x2E\x66\x28\x27\x2F\x4F\x27\x29\x3B\x62\x3D\x38\x2E\x70\x28\x29\x2E\x66\x28\x27\x40\x6B\u1EA7\x79\x27\x29\x3B\x63\x3D\x38\x2E\x70\x28\x29\x2E\x66\x28\x27\x2F\x7A\x20\u0111\u01B0\u1EE3\x63\x20\x5B\x68\x3D\x23\x43\x5D\x6B\u1EA7\x79\x20\x44\xE1\x6E\x5B\x2F\x68\x5D\x27\x29\x3B\x67\x28\x28\x61\x3D\x3D\x30\x7C\x7C\x61\x3D\x3D\x31\x7C\x7C\x62\x3D\x3D\x30\x7C\x7C\x62\x3D\x3D\x31\x7C\x7C\x63\x3D\x3D\x30\x7C\x7C\x63\x3D\x3D\x31\x29\x26\x26\x21\x71\x29\x7B\x67\x28\x63\x3D\x3D\x30\x7C\x7C\x63\x3D\x3D\x31\x29\x32\x2E\x33\x2E\x6F\x2E\x34\x3D\x38\x3B\x6D\x20\x67\x28\x38\x2E\x66\x28\x27\x20\x27\x29\x3D\x3D\x37\x7C\x7C\x38\x2E\x66\x28\x27\x3A\x27\x29\x3D\x3D\x37\x29\x32\x2E\x33\x2E\x6F\x2E\x34\x3D\x22\x40\x6B\u1EA7\x79\x3A\x20\x5B\x69\x5D\x22\x2B\x38\x2E\x48\x28\x35\x29\x2B\x22\x5B\x2F\x69\x5D\x22\x3B\x6D\x20\x32\x2E\x33\x2E\x6F\x2E\x34\x3D\x22\x40\x6B\u1EA7\x79\x3A\x20\x5B\x69\x5D\x22\x2B\x38\x2E\x48\x28\x36\x29\x2B\x22\x5B\x2F\x69\x5D\x22\x3B\x32\x2E\x33\x2E\x39\x2E\x34\x3D\x27\x27\x3B\x74\x28\x64\x29\x3B\x57\x28\x22\x47\x28\x38\x29\x22\x2C\x59\x29\x3B\x78\x20\x50\x7D\x6D\x7B\x32\x2E\x33\x2E\x6F\x2E\x34\x3D\x38\x3B\x32\x2E\x33\x2E\x39\x2E\x34\x3D\x27\x27\x3B\x32\x2E\x33\x2E\x39\x2E\x45\x28\x29\x3B\x74\x28\x64\x29\x3B\x78\x20\x50\x7D\x7D\x6A\x20\x47\x28\x65\x29\x7B\x32\x2E\x33\x2E\x6F\x2E\x34\x3D\x22\x2F\x7A\x20\u0111\u01B0\u1EE3\x63\x20\x5B\x68\x3D\x23\x43\x5D\x31\x32\u1EA7\x79\x20\x44\xE1\x6E\x3A\x20\x5B\x2F\x68\x5D\x5B\x68\x3D\x23\x31\x33\x5D\x22\x2B\x31\x34\x28\x65\x29\x2B\x22\x5B\x2F\x68\x5D\x22\x3B\x32\x2E\x33\x2E\x39\x2E\x34\x3D\x27\x27\x3B\x32\x2E\x33\x2E\x39\x2E\x45\x28\x29\x3B\x74\x28\x4E\x29\x7D\x6A\x20\x31\x35\x28\x61\x29\x7B\x67\x28\x28\x62\x3D\x42\x28\x27\x4C\x27\x29\x29\x21\x3D\x4A\x29\x7B\x78\x22\x49\x20\x62\u1ED1\x63\x20\u0111\u01B0\u1EE3\x63\x20\x6C\xE1\x20\x22\x2B\x4B\x5B\x62\x5D\x7D\x6D\x7B\x41\x28\x27\x4C\x27\x2C\x61\x29\x3B\x78\x22\x49\x20\x62\u1ED1\x63\x20\u0111\u01B0\u1EE3\x63\x20\x6C\xE1\x20\x22\x2B\x4B\x5B\x61\x5D\x7D\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x70\x6F\x73\x74\x7C\x76\x61\x6C\x75\x65\x7C\x7C\x7C\x7C\x79\x6D\x65\x73\x7C\x6D\x65\x73\x73\x61\x67\x65\x7C\x7C\x7C\x7C\x7C\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x69\x66\x7C\x63\x6F\x6C\x6F\x72\x7C\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x74\x68\x7C\x7C\x65\x6C\x73\x65\x7C\x7C\x73\x65\x6E\x74\x7C\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65\x7C\x74\x68\x69\x6E\x68\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x7C\x63\x68\x61\x74\x62\x6F\x78\x7C\x61\x6A\x61\x78\x5F\x73\x75\x62\x6D\x69\x74\x5F\x63\x68\x61\x74\x62\x6F\x78\x7C\x6C\x65\x66\x74\x7C\x73\x74\x79\x6C\x65\x7C\x73\x62\x6D\x65\x6D\x7C\x72\x65\x74\x75\x72\x6E\x7C\x7C\x6D\x65\x7C\x53\x65\x74\x43\x6F\x6F\x6B\x69\x65\x7C\x6D\x79\x5F\x67\x65\x74\x63\x6F\x6F\x6B\x69\x65\x7C\x38\x33\x31\x32\x34\x32\x7C\x70\x68\x7C\x66\x6F\x63\x75\x73\x7C\x31\x31\x33\x70\x78\x7C\x74\x68\x61\x79\x70\x68\x61\x6E\x7C\x73\x75\x62\x73\x74\x72\x7C\x43\x6F\x6E\x7C\x6E\x75\x6C\x6C\x7C\x62\x61\x69\x7C\x62\x6F\x69\x7C\x62\x75\x7A\x7A\x7C\x70\x61\x72\x61\x6D\x73\x7C\x74\x68\x61\x79\x7C\x66\x61\x6C\x73\x65\x7C\x33\x7A\x7C\x73\x68\x6F\x77\x68\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x63\x33\x7C\x74\x72\x61\x6C\x6F\x69\x7C\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x7C\x34\x32\x7C\x6F\x75\x74\x74\x7C\x73\x75\x62\x6D\x69\x74\x6D\x73\x67\x7C\x74\x68\x69\x73\x7C\x73\x68\x6D\x65\x6D\x7C\x54\x68\x7C\x34\x38\x34\x31\x34\x42\x7C\x70\x68\x61\x6E\x67\x69\x7C\x62\x6F\x69\x62\x61\x69\x7C\x74\x74\x68\x61\x79\x7C\x30\x70\x78\x7C\x6F\x66\x66\x73\x65\x74\x4C\x65\x66\x74\x7C\x74\x6F\x53\x74\x72\x69\x6E\x67","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0x5dafx1,_0x5dafx2,_0x5dafx3,_0x5dafx4,_0x5dafx5,_0x5dafx6){_0x5dafx5=function (_0x5dafx3){return (_0x5dafx3<_0x5dafx2?_0x826a[4]:_0x5dafx5(parseInt(_0x5dafx3/_0x5dafx2)))+((_0x5dafx3=_0x5dafx3%_0x5dafx2)>35?String[_0x826a[5]](_0x5dafx3+29):_0x5dafx3.toString(36));} ;if(!_0x826a[4][_0x826a[6]](/^/,String)){while(_0x5dafx3--){_0x5dafx6[_0x5dafx5(_0x5dafx3)]=_0x5dafx4[_0x5dafx3]||_0x5dafx5(_0x5dafx3);} ;_0x5dafx4=[function (_0x5dafx5){return _0x5dafx6[_0x5dafx5];} ];_0x5dafx5=function (){return _0x826a[7];} ;_0x5dafx3=1;} ;while(_0x5dafx3--){if(_0x5dafx4[_0x5dafx3]){_0x5dafx1=_0x5dafx1[_0x826a[6]]( new RegExp(_0x826a[8]+_0x5dafx5(_0x5dafx3)+_0x826a[8],_0x826a[9]),_0x5dafx4[_0x5dafx3]);} ;} ;return _0x5dafx1;} (_0x826a[0],62,72,_0x826a[3][_0x826a[2]](_0x826a[1]),0,{}));


Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/head&gt;


<body class="chatbox" onload="login_cb();ajax_refresh_chatbox('?archives=100', 1);if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');shmem();"><div id="chatbox_header"><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td class="catBottom" nowrap="nowrap"><table border="0" width="100%"><tr><td nowrap="nowrap"><strong>SHOUTBOX<a href="#" onclick="showh();return false"> 

Unknown end tag for &lt;/a&gt;

 - VUI LÒNG XEM NỘI QUY Ở TRÊN.

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/td&gt;

<td valign="top" class="chatbox-options"><div class="genmed" id="chatbox_main_options"><a href="javascript:void(0)" onclick="ajax_refresh_chatbox('?archives=1', 1);">Refresh

Unknown end tag for &lt;/a&gt;

 | <span id="chatbox_option_with_archives" style="display:none ;"><a href="/chatbox/chatbox.forum?archives=1">Archives

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_without_archives" style="display: ;"><a href="/chatbox/chatbox.forum?archives=0">Without archives

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_autorefresh" style="display: ;" onclick="refresh_chatbox('?archives=1');"><label for="refresh_auto">Auto refresh 

Unknown end tag for &lt;/label&gt;

<input type="checkbox" name="refresh_auto" id="refresh_auto" checked="checked" style="background: transparent;" />  

Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_co" style="display:none;"><a href="#reload" onclick="location.reload();"><strong>Đăng Nhập

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="display:none ;">Thoát

Unknown end tag for &lt;/span&gt;

  

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;

<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144" increment="10">

Unknown end tag for &lt;/div&gt;

<div id="chatbox">

Unknown end tag for &lt;/div&gt;

<div id="chatbox_footer" style="display:;"><div id="chatbox_messenger"><form id="c3sbox" name="post" action="/chatbox/chatbox.forum" method="post" onsubmit="submitmsg('?archives=1');refresh_chatbox('?archives=1');return false;"><table width="100%" cellspacing="0" cellpadding="0"><tr><td class="catBottom"><div id="chatbox_messenger_form"><table cellspacing="0" cellpadding="0" height="24" width="100%" class="chatfootertable"><tr><td width="100%" align="right"><table cellspacing="2" cellpadding="0" border="0" style="line-height: 0px;" class="text-styles" ><tr><td><div id="divbold" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sbold.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('bold');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sbold.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" width="21" height="20" alt="Bold" title="Bold" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divitalic" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sitalic.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('italic');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sitalic.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif" width="21" height="20" alt="Ital." title="Ital." />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divunderline" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sunderline.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('underline');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sunderline.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif" width="21" height="20" alt="Underl." title="Underl." />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divstrike" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className=( document.post.sstrike.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'" onclick="do_style('strike');" onmousedown="this.className='fontbutton fontbutton_clicked';" onmouseup="this.className=( document.post.sstrike.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"><img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif" width="21" height="20" alt="Strike" title="Strike" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td width="10"> 

Unknown end tag for &lt;/td&gt;

<td><div id="divcolor" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectcolor(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/color.gif" width="21" height="16" alt="Màu font" title="Màu font" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="16" alt="Màu font" title="Màu font" /><br /><img src="http://illiweb.com/fa/subsilver/wysiwyg/clear.gif" id="show_color" alt="Màu font" title="Màu font" width="21" height="4" />

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;

<td><div id="divsmilies" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectsmilies(event);"><img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21" height="20" alt="Biểu tượng" title="Biểu tượng" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="20" alt="Biểu tượng" title="Biểu tượng" />

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td><div id="buzz" onclick="buzz();"><img src="http://www.c3zone.net/users/2315/72/47/45/smiles/3783939235.gif" alt="Buzz" title="Buzz" />

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td width="6"> 

Unknown end tag for &lt;/td&gt;

<td><input type="hidden" name="sbold" value="0"><input type="hidden" name="sitalic" value="0"><input type="hidden" name="sunderline" value="0"><input type="hidden" name="sstrike" value="0"><input type="hidden" name="scolor" id="scolor" value="#000000"><span class="gen" onclick="document.post.message.focus();"><label>Chat : <input type="text" id="message" name="message" size="35" maxlength="1024" class="post" autocomplete="off" onkeydown="number_of_refresh=0;" />

Unknown end tag for &lt;/label&gt;

 <input type="hidden" name="sent" value="" /><input type="submit" name="submit_button" value="Trò chuyện" id="submit_button" /> <input id="thay" type="submit" name="submit_button" value="@Thầy" onclick="tthay()" accesskey="X" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<script type="text/javascript">//<![CDATA[
function ajax_connect(params, mode){if ( params == '' || params == undefined ){params = '?achives=0';}if (window.XMLHttpRequest){var http_request = new XMLHttpRequest();}else if (window.ActiveXObject){var http_request = new ActiveXObject("Microsoft.XMLHTTP");}http_request.onreadystatechange = function(){if (http_request.readyState == 4 && http_request.status == 200){var parsed_text = http_request.responseText;if ( parsed_text ){if ( mode == 'connect' ){document.getElementById('chatbox_option_co').style.display = 'none';document.getElementById('chatbox_option_disco').style.display = '';document.getElementById('refresh_auto').checked = true;document.getElementById('chatbox_option_autorefresh').style.display = '';document.getElementById('chatbox_messenger_form').style.display = '';document.getElementById('chatbox_footer').style.display = 'block';connected = 1;number_of_refresh = 0;}else if ( mode == 'disconnect' ){document.getElementById('chatbox_option_co').style.display = '';document.getElementById('chatbox_option_disco').style.display = 'none';document.getElementById('chatbox_option_autorefresh').style.display = 'none';document.getElementById('chatbox_messenger_form').style.display = 'none';document.getElementById('chatbox_footer').style.display = 'none';connected = 0;}refresh_chatbox(params);}}};http_request.open('GET','/chatbox/chatbox_actions.forum'+params+'&mode='+mode+my_getcookie('mytid').substr(my_getcookie('mytid').indexOf('&tid='),37),true);http_request.send(null);}function CB_disconnect(){if ( connected ){ajax_connect('?archives=1', 'disconnect');clearInterval(refresh_interval);}else{ajax_connect('?archives=1', 'connect');try {refresh_interval = setInterval("refresh_chatbox('?archives=1');", 2000);} catch (err) {}}}if ( document.location.href.indexOf('chatbox', 1) == -1 ){$('#divcolor').css('display', 'none');$('#divsmilies').css('display', 'none');}var connected = false;var chatbox_updated = 1310441470;var chatbox_last_update = 1310441470;var template_color = '#000000';var refresh_interval;window.setTimeout("document.getElementById('chatbox').scrollTop = 999999; Init_pref();", 200);window.setTimeout("document.getElementById('chatbox').scrollTop = 999999;", 1000);if ( connected ){try {refresh_interval = setInterval("refresh_chatbox('?archives=1');", 2000);} catch (err) {}}else{try {refresh_chatbox('?archives=1');} catch (err) { }}//]]>

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/body&gt;


<div style="display:none">
<audio id="c3buzz" controls="controls" preload="auto">
<source src="http://dl.dropbox.com/u/8039292/c3zone/buzz.ogg">
<source src="http://dl.dropbox.com/u/8039292/c3zone/buzz.mp3">


Unknown end tag for &lt;/audio&gt;


<!--<audio id="c3mess" controls="controls" preload="auto">
<source src="http://dl.dropbox.com/u/8039292/c3zone/ding.ogg">
<source src="http://dl.dropbox.com/u/8039292/c3zone/ding.mp3">


Unknown end tag for &lt;/audio&gt;

-->

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/html&gt;


```



```
jQuery.fn.vibrate=function(conf){var config=jQuery.extend({speed:30,duration:2000,frequency:10000,spread:100},conf);return this.each(function(){var t=jQuery(this);var vibrate=function(){var rotate=Math.floor(Math.random()*config.spread-(config.spread-1)/2);t.css({'-webkit-transform':'rotate('+rotate+'deg)','-moz-transform':'rotate('+rotate+'deg)','-ms-transform':'rotate('+rotate+'deg)','-o-transform':'rotate('+rotate+'deg)'})};var doVibration=function(){var vibrationInterval=setInterval(vibrate,config.speed);var stopVibration=function(){clearInterval(vibrationInterval);t.css({'-webkit-transform':'rotate(0deg)','-moz-transform':'rotate(0deg)','-ms-transform':'rotate(0deg)','-o-transform':'rotate(0deg)'})};setTimeout(stopVibration,config.duration)};doVibration()})};```
Làm lại nhiều lần nếu lỗi
Bước 2 : vào index\_body cho đoạn code này lên đầu

```


<script type="text/javascript">
jQuery(document).ready(function(){my_setcookie('mytid',jQuery("#logout").attr("href"),1,0);});


Unknown end tag for &lt;/script&gt;


<iframe src="http://nachopro.forumvi.com/h4-page-chatbox" scrolling="no" width="100%" height="340" style="border-width:0" marginwidth="0" marginheight="0">

Unknown end tag for &lt;/iframe&gt;


```

Chú ý thay link : http://nachopro.forumvi.com/h4-page-chatbox = link chat box bạn vừa tạo ở bước 1

Bước 3 : kick hoạt chat box : MODULES >> Chatbox >> ChatBox configuration >>
Activate the ChatBox : Chọn có
ChatBox display : Do not display

ok cười nhăn răng hoàn thành , ai ko làm được cứ reply nhá cười nhăn răng
thấy hay thì thank mình cái