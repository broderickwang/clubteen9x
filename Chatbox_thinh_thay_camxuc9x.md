<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;



&lt;head&gt;



&lt;meta http-equiv="content-type" content="text/html; charset=utf-8" /&gt;



&lt;title&gt;

Shoutbox - c3zone.net

&lt;/title&gt;



&lt;meta http-equiv="content-script-type" content="text/javascript" /&gt;



&lt;meta http-equiv="content-style-type" content="text/css" /&gt;



&lt;style type="text/css"&gt;


body,th,td,p {
> font-family:Verdana,Arial,Helvetica,sans-serif;
> font-size:11px
}
a:link,a:active,a:visited,a:hover {
> color:#5D401E;
> text-decoration:none;
}
.thead,td.cat,td.catHead,td.catSides,td.catLeft,td.catRight,td.catBottom,td.rowpic {
> background:#bfec92;
> color:#1a540f;
> padding:3px;
> font:bold 11px tahoma,verdana,geneva,lucida,'lucida grande',arial,helvetica,sans-serif;
}
td.cat,td.catHead,td.catBottom {
> border-width:0;
}
th.thHead,th.thSides,th.thTop,th.thLeft,th.thRight,th.thBottom,th.thCornerL,th.thCornerR {
> font-weight:bold;
> border:#ffffff;
> border-style:solid;
}
.genmed {
> font-size:11px;
}
th.thBottom,td.catBottom {
> border-width:0 1px 1px 1px;
}
a.gen,a.genmed,a.gensmall {
> color:#006699;
> text-decoration:none;
}
.cattitle,td .t-title {
> font-weight:bold;
> font-size:12px;
> letter-spacing:1px;
> color:#006699
}
a.cattitle {
> text-decoration:none;
> color:#844A21;
> font-size:12px;
}
a.cattitle:hover {
> text-decoration:underline;
}
input[type=submit] {
> padding:0 5px;
> font-size:11px;
> cursor:pointer;
> background-color:#fff;
> border:1px solid #a6a6a6;
> color:#000;
> font-weight: bold
}
/**Chatbox**/
#frame\_chatbox {
> border:none !important;
}
body.chatbox {
> min-width:550px !important;
> background-image:none;
> padding:0;
> margin:0;
> background-color:#fff;
}
#chatbox\_members {
> float:left;
> top:28px;
> bottom:30px;
> width:110px;
> overflow:auto;
> border-right:1px solid #E5E5E5;
}
#chatbox {
> position:absolute;
> top:25px;
> left:0;
> right:0;
> bottom:30px;
> overflow:auto;
> line-height:10px;
}
.chatbox\_row\_1,.chatbox\_row\_2,.chatbox\_row\_3 {
> font-size:12px;
}
.chatbox-options {
> text-align:right;
}
#chatbox\_messenger\_form .text-field,#chatbox\_messenger\_form,#chatbox\_messenger\_form .gen {
> float:left;
}
#chatbox\_footer {
> position:absolute;
> bottom:0;
> left:0;
> right:0;
> height:30px;
}
#chatbox\_footer table.text-styles {
> float:right;
}
#chatbox\_footer .text-field {
> float:left;
}
#chatbox\_header {
> background-color:#e5e5e5;
}
#chatbox p {
> line-height:1.2em;
}
.chatbox\_row\_1 {
> padding:4px;
> background-color:#fff;
}
.chatbox\_row\_2 {
> padding:4px;
> background-color:#FFDFDF;
}
.chatbox\_row\_3 {
> padding:4px;
> background-color:#CFE9FF;
}
.memberlist\_row\_1 {
> padding:2px 2px 2px 10px;
> background-color:#fff;
}
#chatbox\_members .member-title {
> text-align:center;
> padding:0.5em 0.25em;
> background-image:none;
> font-size:12px;
> background-color:#9FE6FF;
> color:#222F03;
> font-family:Verdana,Arial,Helvetica,sans-serif;
}
#chatbox\_members ul {
> list-style:none;
> margin:0 0 0 10px;
}
#chatbox\_members ul li {
> margin:2px 2px 2px 0;
}
#message,#submit\_button {
> border-width:1px;
}
.fontbutton {
> padding:1px;
> cursor:pointer;
> text-align:left;
}
.fontbutton\_normal {
> background:transparent;
}
.fontbutton\_selected {
> background:#0AAF11;
> border:1px solid #22229C;
}
.fontbutton\_clicked {
> background:#1BACDF;
> border:1px solid #22229C;
}
.fontbutton\_hover {
> background:#8F0000;
> border:1px solid #22229C;
}
#chatbox .user {
> font-weight:bold;
}
div#chatbox {
> color:#000;background:#fff;
}
#chatbox\_contextmenu {
> background-color:#d1d7dc;
> border:1px solid #aaa;
}
#chatbox\_contextmenu p {
> margin:0;
> padding:1px 4px;
> font-family:verdana,arial,sans-serif;
> background:#;
> border-bottom:1px solid #777;
}
#chatbox\_contextmenu p.hover {
> background:#;
}
#chatbox\_contextmenu p.close {
> background:#ddd;
> padding:1px;
> font-size:70%;
> color:#fff;
}
#chatbox\_contextmenu p.close img {
> vertical-align:middle;
> padding-left:20px;
}
#chatbox\_contextmenu a {
> color:#;
> text-decoration:none;
> font-size:70%;
}
#chatbox\_contextmenu a:hover {
> color:#;
}
.fontbutton {
> border: 0;
}
**html #chatbox-members {
> /** IE expressions helping IE work in Standards mode **/
> height:expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize)** 1.3333333 **3)+(parseInt(document.body.currentStyle.fontSize)** 1.3333333 **2)+(parseInt(document.body.currentStyle.fontSize)** 1.3333333 **2** 0) )+"px");
}
**html #chatbox {
> /** IE expressions helping IE work in Standards mode **/
> height:expression(( document.documentElement.clientHeight ? document.documentElement.clientHeight:document.body.clientHeight) - ( (parseInt(document.body.currentStyle.fontSize)** 1.3333333 **3)+(parseInt(document.body.currentStyle.fontSize)** 1.3333333 **2)+(parseInt(document.body.currentStyle.fontSize)** 1.3333333 **2** 0) )+"px");
> width:expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) **1.3333333** 10)+(parseInt(document.body.currentStyle.fontSize) **1.3333333** 1)+(parseInt(document.body.currentStyle.fontSize) **1.3333333** 2 **1.3) )+"px");
}** html #chatbox-footer {
> /**IE expressions helping IE work in Standards mode**/
> width:expression(( document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body.clientWidth) - ( (parseInt(document.body.currentStyle.fontSize) **1.3333333** 0)+(parseInt(document.body.currentStyle.fontSize) **1.3333333** 0)+(parseInt(document.body.currentStyle.fontSize) **1.3333333** 2 **0) )+"px")
}
.date-and-time {font-size:8px}
.msg img {vertical-align:middle}
.msg>strong {   font-size: 11px}


&lt;/style&gt;**

&lt;script src="http://illiweb.com/rsc/16/frm/lang/notutf8-vi.js" type="text/javascript"&gt;



&lt;/script&gt;






&lt;script type='text/javascript'&gt;


function getfunction()
{var r = Math.random();

kkk=prompt("Hôm nay con muốn hỏi gì?","");

if (kkk != null )
{
str=kkk;

outt=1500;
traloi = new Array(
"Bây giờ thì có, nhưng sau này thì chưa chắc.",
"Bây giờ thì chưa, nhưng cũng sắp sửa",
"Bây giờ thì chưa, nhưng sau này thì có",
"Cái này cũng còn tùy ",
"Cái này khó à nha. Nhưng 80% là có ",
"Cẩn thận. Không được đâu ",
"Có gái không giới thiệu cho thầy một em rồi tính típ",
"Có. Nhưng sau này phải cẩn thận. Thầy nhìn thấy có sự thay đổi.",
"Con chưa đủ tuổi để hỏi câu hỏi này đâu, đừng liều",
"Con đang phê à, hay tính chơi nhau đấy?",
"Cũng được đấy nhưng phải cẩn thận",
"Cũng được. Nhưng đợi đến tết Công-gô thì mong ước sẽ thành.",
"Cũng ngang chuẩn quốc tế đấy",
"Kute mà sao hỏi khó qua dzậy?",
"Chiến hết con ạ!",
"Chơi luôn đi tại sao phải xoắn",
"Chuẩn không cần chỉnh!",
"Dân châu Phi cũng phải mê con ạ",
"Để mai tính",
"Đưa thầy ít tiền đi rồi thầy nói cho nghe",
"Hỏi gì mà ngu thế con?",
"Hỏi khó quá coi chừng ra đường chó cắn à nha",
"Hỏi thế thì bố thầy cũng hem dám trả lời",
"Khó đó à nha",
"Không",
"Mi đi chết đi. Dám đánh đố thầy à?",
"Mọi việc chỉ có 50% như mong muốn thôi",
"Nghe muốn ói quá",
"Nghĩ sao mà hỏi vậy? Định thử thầy à",
"Nhiều khách, thầy đang bận quá. Lát thầy trả lời",
"Ôi giời! Tất nhiên là có",
"Sao giống thầy dzậy",
"Thầy con mê nữa huống chi ai",
"Thầy đang đông khách quá, để lúc khác",
"Thầy thần thông quảng đại lắm cái gì cũng biết hết",
"Theo thầy tính là không",
"Theo thầy thì chắc chắn là không.",
"Thích thì chiều thôi",
"Trả tiền đây đi rồi hỏi tiếp",
"Uhm uhm, điều đó chắc chắn sẽ xảy ra",
"Việc này tưởng dễ nhưng mà khó đấy",
"Yên tâm đi, chắc chắn là có",
"Tùy, thiên thời địa lợi đủ cả, chỉ chờ lòng người ủng hộ là được con ạ",
"Thầy bấm đốt thì ra tầm dăm hôm nữa con ạ",
"Cái này thì mẹ con biết rõ hơn thầy",
"Câu này thầy phải hỏi con mới đúng",
"Quẻ nói con cứ chờ 10 năm khắc biết",
"Thầy bấm ra ít lắm con ạ",
"Con vứt cái máy tính đi là vừa",
"Cũng được, nếu con muốn vậy",
"Nói có thì thày áy náy lắm >.< ",
"Cũng không sớm, nhưng con cũng không việc gì phải vội",
"Cũng có lẽ là nên thế",
"Tầm mấy hôm nữa con ạ, cứ yên tâm",
"Cái này á, cũng khó nghĩ, nhưng có vẻ là có",
"Thầy phán: Chơi xoáy nhau àh, hỏi vậy bố thầy cũng ko trả lời được"
);
function phangi(str){
if (str == " " || str == "")
> return "Chơi xoáy nhau àh, con không hỏi bố thầy cũng không trả lời được";
else if((rec=/xấu|dâm|xàm|nhảm|nhảm nhí|điên|dở hơi|hâm|khùng|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/i.exec(str))!=null)
> return "Ta thấy con còn "+rec+" hơn";
else if(/hello|helu|chào|thầy ơi/.test(str))
> return "Chào con! Hôm nay con muốn hỏi cái chi ?";
else if(/Thầy phán:/.test(str))
> return "Tự sướng hả con? Trình gì mà đòi giả danh thầy??";
else if(/thầy bị chó cắn|thầy bị té giếng|thầy bị xe đụng|thầy bị xe tông|thầy bị xe hun|thầy bị sét đánh|xe đụng thầy|xe tông thầy|xe hun thầy/.test(str))
> return "Muốn hại người tốt ko dễ đâu con, thầy cũng cầu cho con bị té giếng!";
else if(/**|đụ|cặc|**|cac|con cu|**|loz|lon|nhậu/.test(str))
> return "Cái đấy chỉ dành cho người lớn thôi, tuổi của con chưa đụng vào được đâu!";
else if(/thầy có đẹp trai|thầy đẹp trai ko|đẹp trai ko thầy|thầy có đẹp zai|thầy đẹp zai/.test(str))
> return "Trời đất, ko phải khoe chứ có khối cô chết vì thầy đấy :x";
else if(/admin|BQT|BQT lethanhton/.test(str))
> return "Đỗ Thịnh phát triển lethanhton.tk";
else if(/số con có giàu|số con có hên|số con có may|số con có chết|số con sống lâu|số con giàu|số con hên/.test(str))
> return "Con phải là girl thì thầy mới trả lời câu này ah` nha :x";
else if(/hám gái|mê gái|khoái gái/.test(str))
> return "Gái thì tất nhiên thằng nào cũng khoái rồi con ạ ;))";
else if(/bồ|người yêu/.test(str))
> return "Con còn nhỏ lắm, quan tâm mấy chuyện này làm gì?";
else if(/con có bạn trai|bạn trai của con|bạn trai con|con có bạn zai|bạn zai của con|bạn zai con/.test(str))
> return "Bọn con trai bây giờ ko tốt đâu con ạ, nếu mà con vừa ý thì... thầy đây con thấy sao? ;))";
else if(/thầy có vợ/.test(str))
> return "Con lo thân con trước đi rồi hãy hỏi đến thầy ;))";
else if(/thầy có bạn gái|con có bạn gái|bạn gái của con|bạn gái con/.test(str))
> return "Con nên từ bỏ ý định thì hơn, con gái bây giờ ghê lắm. Nó dụ người ta có bầu rồi... nó bỏ =))";**

else if(/con có vợ|con vợ con|vợ của con|vợ con/.test(str))
> return "Nói đến vợ thì thầy khuyên con nên đi tu là vừa =))";

else if(/xạo/.test(str))
> return "Chưa thấy ai xạo nhưng ở đây thầy thấy con xạo rồi 8-|";

else if(/Thịnh|Đỗ Thịnh|dothinh|thinh|đỗ thịnh|do thinh/.test(str))
> return "Con nói Thịnh hả, thầy yêu lắm cơ :x";

else if(/thầy tuổi gì|thầy tuổi gì|thầy tuổi gì|thầy nhiêu tuổi|thầy nhiu tuổi/.test(str))
> return "Thế con mấy tuổi mà hỏi thầy câu đó ;))";

else if(/thầy có mấy vợ|vợ của thầy|vợ thầy|thầy có mấy con|con của thầy|thầy có mấy đứa con/.test(str))
> return "Xoi mói chuyện riêng tư của người khác là ko tốt đâu nha con, coi chừng sét đánh đó ;))";

else if(/con đẹp|con có đẹp|đẹp hơn thầy/.test(str))
> return "Tất nhiên là con xấu rồi, nhìn thầy mà làm hình tượng đi con ;))";

else if(/thầy có xấu trai ko|thầy có xấu trai k|thầy có xấu trai không|chắc thầy xấu trai lắm nhỉ|thầy thì chắc là xấu trai rồi|thầy có đẹp ko mà bảo thế|thầy có đẹp ko mà nói thế|thầy có đẹp không mà bảo thế|thầy có đẹp không mà nói thế/.test(str))
> return "Thầy thì ko biết có đẹp ko chứ con thì chắc chắn là xấu rồi :))";
else if(/thầy tên gì|tên thầy/.test(str))
> return "Tên ko quan trọng, con muốn cho là gì cũng dc :))";
else if(/đẹp hơn|xấu hơn|đẹp không|xấu không|đẹp ko|xấu ko|đẹp k|xấu k/.test(str))
> return "Con ko nên hỏi câu này vì ở đây ngoài thầy ra ai cũng xấu cả :))";
else if(/ngu hơn|ngu không|ngu ko|ngu k/.test(str))
> return "Nói về khoản ngu thì ở đây thầy... thông minh nhất ;))";
else if(/**|dis|shit|dis|fuk|vl|VKL|mịa|DKM|mie|fucking|**|nồn|đít|đĩ/.test(str))
> return "Nói bậy àh? Coi chừng ra đường chó cắn nha con";
else if(/alo|hello|helu|chào|ê thầy/i.test(str))
> return "Chào con! Hôm nay con muốn hỏi cái chi :S";
else if(/chém|đánh|quýnh|chem|danh|quynh|đá|đập|chó|láo|cún/.test(str))
> return "Muốn chơi àh ? Thích thì chiều thôi";
else if(/dâm|ngu|ngốc|xàm|nhảm|nhảm nhí|điên|dở hơi|hâm|khùng|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/.exec(str)!=null)
{rec=/dâm|ngu|ngốc|xàm|nhảm|nhảm nhí|điên|dở hơi|hâm|khùng|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/.exec(str);
return "Ta thấy con còn " + rec + " hơn !"}
else if(/buồn|chán|bùn/.exec(str)!=null)
{rec=/buồn|chán|bùn/.exec(str);
return "Ta còn " + rec + " hơn còn nhiều, than thở làm gì? :("}
else if(/thay|admin|thầy/.test(str) && /bố|mẹ|cắn|gay|bede|pede|đàn bà|đi đâu|làm gì|ở đâu/.test(str))
> return "Con chưa đủ tuổi để hỏi câu đó đâu, coi chừng đấy !";

else if(str.substr(str.length-1)!="?")
> return "Con đang hỏi thầy àh? Sao không thấy dấu chấm hỏi";
else
> return traloi[Math.round(r\*56)];
}
sss= " [color=blue]" + str + "[/color] \n  [color=red]Thầy[/color] phán: " + phangi(str) ;
document.post.sent.value=sss;document.post.message.focus();ajax\_submit\_chatbox(params);return false;
}}


&lt;/script&gt;






&lt;script type="text/javascript"&gt;

//<![CDATA[
var params = '?archives=1';var smilies\_sid = '';//]]>

&lt;/script&gt;



&lt;script src="http://illiweb.com/fa/js/chatbox3.js" type="text/javascript"&gt;



&lt;/script&gt;




&lt;style type="text/css"&gt;

**{margin: 0px;padding: 0;}html, body {overflow: hidden;}body {background-color: #efefef;}

&lt;/style&gt;



&lt;/head&gt;**

&lt;body class="chatbox" onload="CB\_disconnect();ajax\_refresh\_chatbox('?archives=100', 1);if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');"&gt;

<div><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td><table width='100%' border='0'><tr><td><strong>SHOUTBOX - <a href='#'>Ai đang chat ?</a></strong></td><td valign='top'><div><a href='javascript:void(0)'>Refresh</a> | <span><a href='/chatbox/chatbox.forum?archives=1'>Archives</a> | </span><span><a href='/chatbox/chatbox.forum?archives=0'>Without archives</a> | </span><span>

<label for="refresh_auto">

Auto refresh <br>
<br>
</label><br>
<br>
<br>
<br>
<input type="checkbox" name="refresh_auto" id="refresh_auto" checked="checked" style="background: transparent;" /><br>
<br>
 | </span><a href='javascript:void(0)'><span><strong>Đăng Nhập</strong></span><span>Thoát</span></a>  </div></td></tr></table></td></tr></table></div><div></div><div></div><div><div>

<form name="post" action="/chatbox/chatbox.forum" method="post" onsubmit="submitmsg('?archives=1');refresh_chatbox('?archives=1');return false;">

<table cellpadding='0' width='100%' cellspacing='0'><tr><td><div><table cellpadding='0' width='100%' cellspacing='0' height='24'><tr><td width='100%' align='right'><table cellpadding='0' cellspacing='2' border='0'><tr><td><div><img src='http://illiweb.com/fa/subsilver/wysiwyg/bold.gif' alt='Bold' title='Bold' width='21' height='20' /></div></td><td><div><img src='http://illiweb.com/fa/subsilver/wysiwyg/italic.gif' alt='Ital.' title='Ital.' width='21' height='20' /></div></td><td><div><img src='http://illiweb.com/fa/subsilver/wysiwyg/underline.gif' alt='Underl.' title='Underl.' width='21' height='20' /></div></td><td><div><img src='http://illiweb.com/fa/subsilver/wysiwyg/strike.gif' alt='Strike' title='Strike' width='21' height='20' /></div></td><td width='10'> </td><td><div><img src='http://illiweb.com/fa/subsilver/wysiwyg/color.gif' alt='Màu font' title='Màu font' width='21' height='16' /><img src='http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif' alt='Màu font' title='Màu font' width='11' height='16' />
<img src='http://illiweb.com/fa/subsilver/wysiwyg/clear.gif' alt='Màu font' height='4' width='21' title='Màu font' /></div></td><td><div><img src='http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif' alt='Biểu tượng' title='Biểu tượng' width='21' height='20' /><img src='http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif' alt='Biểu tượng' title='Biểu tượng' width='11' height='20' /></div>
</td>
<td><div><img src='http://c3zone.net/users/2315/72/47/45/smiles/3783939235.gif' alt='Buzz' title='Buzz' /></div>
</td>
<td width='10'> </td><td>

<input type="hidden" name="sbold" value="0">

<br>
<br>
<input type="hidden" name="sitalic" value="0"><br>
<br>
<br>
<br>
<input type="hidden" name="sunderline" value="0"><br>
<br>
<br>
<br>
<input type="hidden" name="sstrike" value="0"><br>
<br>
<br>
<br>
<input type="hidden" name="scolor" id="scolor" value="#000000"><br>
<br>
<span>

<label>

Thông điệp : <br>
<br>
<input type="text" id="message" name="message" size="35" maxlength="1024" class="post" autocomplete="off" onkeydown="number_of_refresh=0;" /><br>
<br>
<br>
<br>
</label><br>
<br>
 <br>
<br>
<input type="hidden" name="sent" value="" /><br>
<br>
<br>
<br>
<input type="submit" name="submit_button" value="Gửi" id="submit_button" /><br>
<br>
 </span>

Unknown end tag for </td>

<td>

<input type="submit" value="Thỉnh Thầy!" onclick="getfunction()" name="xxxxx">

<br>
<br>
Unknown end tag for </td><br>
<br>
<br>
<br>
<br>
<br>
Unknown end tag for </tr><br>
<br>
<br>
<br>
Unknown end tag for </table><br>
<br>
<br>
<br>
Unknown end tag for </td><br>
<br>
<br>
<br>
Unknown end tag for </tr><br>
<br>
<br>
<br>
Unknown end tag for </table><br>
<br>
<br>
<br>
Unknown end tag for </div><br>
<br>
<br>
<br>
Unknown end tag for </td><br>
<br>
<br>
<br>
Unknown end tag for </tr><br>
<br>
<br>
<br>
Unknown end tag for </table><br>
<br>
<br>
<br>
Unknown end tag for </form><br>
<br>
<br>
<br>
Unknown end tag for </div><br>
<br>
<br>
<br>
Unknown end tag for </div><br>
<br>
<br>
<br>
<script type="text/javascript"><br>
<br>
//<![CDATA[<br>
function showh(){<br>
if (document.getElementById('chatbox').offsetLeft!="0")<br>
<blockquote>document.getElementById('chatbox').style.left = "0";<br>
else<br>
document.getElementById('chatbox').style.left = "113px";<br>
}<br>
function buzz(){ document.post.sent.value=":buzz:";document.post.message.focus();ajax_submit_chatbox(params);return false;}<br>
function CB_disconnect(){if ( connected ){ajax_connect('?archives=0', 'disconnect');clearInterval(refresh_interval);}else{ajax_connect('?archives=1', 'connect');try {refresh_interval = setInterval("refresh_chatbox('?archives=1')", 5000);} catch (err) {}}}if ( document.location.href.indexOf('chatbox', 1) == -1 ){$('#divcolor').css('display', '');$('#divsmilies').css('display', '');}var connected = false;var chatbox_updated = 1260633294;var chatbox_last_update = 1260633294;var template_color = '#000000';var refresh_interval;window.setTimeout("document.getElementById('chatbox').scrollTop = 999999; Init_pref();", 200);window.setTimeout("document.getElementById('chatbox').scrollTop = 999999;", 1000);if ( connected ){try {refresh_interval = setInterval("refresh_chatbox('?archives=1')", 5000);} catch (err) {}}else{try {refresh_chatbox('?archives=1');} catch (err) { }}//]]><br>
<br>
</script><br>
<br>
<br>
<br>
Unknown end tag for </body><br>
<br>
<br>
<br>
Unknown end tag for </html><br>
<br>
<br>
<br>
Unknown end tag for </code><br>
<br>
