Vẫn thế, phải chắc chắn rằng chúng ta không sử dụng chatbox mặc định !
Vào bài thôi nào!
Chatbox with sound effect

1.Lợi thế đối với các bạn đã ứng dụng tâm tít Đảo ngược chatbox và smilies trượt :
+Nếu đã làm theo hướng dẫn ở bài Đảo ngược chatbox và smilies trượt thì công việc của chúng ta đơn giản hơn nhiều, chỉ cần làm theo các bước sau thì có thể có sound effect nhanh chóng !
Bước 1: Vào mycomputer: C:\Program Files\Yahoo!\Messenger\Media:
Nhìn đống sound: online.wav, offline.wav, buzz.wav, message.wav .
Xong chưa nào ?
Sau khi nhìn vào đóng sound, rê chuột đến dấu chéo như hình bên dưới:
www.fmvi.vn
Click vô dấu chéo là xong bước 1 ) (Rãnh rãnh thì up sound lên nha bà con)

![http://i30.servimg.com/u/f30/16/00/79/58/untitl11.png](http://i30.servimg.com/u/f30/16/00/79/58/untitl11.png)

Sau khi kết thúc bước 1 lừa tình, ta chuyển sang bước 2:
Vào trang html của cái chatbox (là cái html1 ở bài trước):
Tìm:

```




Unknown end tag for &lt;/head&gt;


```

Thêm bên dưới nó:

```


<audio controls preload="auto" id='bid'>
<source src="http://diendan.a20tpo.info/buzz.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<audio controls preload="auto" id='bid1'>
<source src="http://diendan.a20tpo.info/online.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<audio controls preload="auto" id='bid2'>
<source src="http://diendan.a20tpo.info/offline.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<audio controls preload="auto" id='bid3'>
<source src="http://diendan.a20tpo.info/message.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


```

Thêm bên trên 

Unknown end tag for &lt;/head&gt;

:

```


<style>
#bid,#bid1,#bid2,#bid3{display:none;}


Unknown end tag for &lt;/style&gt;


```

> Chú giải:
> Công việc chúng ta vừa làm đó là gì?
> Công việc chúng ta vừa làm là thêm các sound vào trong html chứa chatbox, rồi dùng css ẩn nó đi.


Cũng tiếp tục tìm trong html đó:

```



function buzz() {
document.post.sent.value = ":buzz:";
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false;
}
```

Thêm ngay bên dưới nó:

```


function zoo() {
document.post.sent.value = ":login:";
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false;
}
function raa() {
document.post.sent.value = ":logout:";
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false;
}

```
Tiếp tục tìm:

```


<span id="chatbox_option_co" style="display: ;"><strong>Đăng Nhập

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="display: none;">Thoát

Unknown end tag for &lt;/span&gt;


```

Thay lại thành:

```


<span id="chatbox_option_co" style="display: ;" onclick="zoo();"><strong>Đăng Nhập

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="display: none;" onclick="raa();">Thoát

Unknown end tag for &lt;/span&gt;


```

> Gắn liền nút thoát, đăng nhập với function


Xong bước 2.
Bước 3:
Tìm trong js của chatbox (html2 ở bài trước), nó chính là cái html chứa:

```



function Init_pref() {
if (document.getElementById('divbold')) {
if (my_getcookie('CB_bold') == 1) {
pref = my_getcookie('CB_bold');
document.post.sbold.value = pref;
document.getElementById('divbold').className = 'fontbutton fontbutton_selected';
document.post.message.style.fontWeight = 'bold'
}
if (my_getcookie('CB_italic') == 1) {
pref = my_getcookie('CB_italic');
document.post.sitalic.value = pref;
document.getElementById('divitalic').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.fontStyle = 'italic'
}
if (my_getcookie('CB_under') == 1) {
pref = my_getcookie('CB_under');
document.post.sunderline.value = pref;
document.getElementById('divunderline').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.textDecoration = 'underline'
}
if (my_getcookie('CB_strike') == 1) {
pref = my_getcookie('CB_strike');
document.post.sstrike.value = pref;
document.getElementById('divstrike').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.textDecoration = document.post.message.style.textDecoration + ' line-through'
}
if (show_color = document.getElementById('show_color')) {
if (pref = my_getcookie('CB_color')) {
show_color.style.backgroundColor = '#' + pref;
document.post.scolor.value = pref;
document.post.message.style.color = '#' + pref
} else if (template_color.length > 2) {
show_color.style.backgroundColor = template_color
}
}
}
}
function daonguoc(){
for (i=1; i<=parseInt(jQuery("#chatbox p").length/2); i++)
{
a=i-1;
n=jQuery("#chatbox p").length-i;
text=jQuery('#chatbox p')[n].innerHTML;
jQuery('#chatbox p')[n].innerHTML=jQuery('#chatbox p')[a].innerHTML;
jQuery('#chatbox p')[a].innerHTML=text

};
}

function submitmsg(params) {
document.post.sent.value = document.post.message.value;
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false
}
function do_style(dostyle) {
switch (dostyle) {
case 'bold':
{
document.getElementById('divbold').style.fontWeight = (document.post.sbold.value == '0') ? 'bold' : '';
document.post.message.style.fontWeight = document.getElementById('divbold').style.fontWeight;
document.post.sbold.value = (document.post.sbold.value == '0') ? '1' : '0';
SetCookie('CB_bold', document.post.sbold.value);
break
}
case 'italic':
{
document.getElementById('divitalic').style.fontStyle = (document.post.sitalic.value == '0') ? 'italic' : '';
document.post.message.style.fontStyle = document.getElementById('divitalic').style.fontStyle;
document.post.sitalic.value = (document.post.sitalic.value == '0') ? '1' : '0';
SetCookie('CB_italic', document.post.sitalic.value);
break
}
case 'underline':
{
document.getElementById('divunderline').style.textDecoration = (document.post.sunderline.value == '0') ? document.post.message.style.textDecoration + ' underline' : document.post.message.style.textDecoration.replace('underline', '');
document.post.message.style.textDecoration = document.getElementById('divunderline').style.textDecoration;
document.post.sunderline.value = (document.post.sunderline.value == '0') ? '1' : '0';
SetCookie('CB_under', document.post.sunderline.value);
break
}
case 'strike':
{
document.getElementById('divstrike').style.textDecoration = (document.post.sstrike.value == '0') ? document.post.message.style.textDecoration + ' line-through' : document.post.message.style.textDecoration.replace('line-through', '');
document.post.message.style.textDecoration = document.getElementById('divstrike').style.textDecoration;
document.post.sstrike.value = (document.post.sstrike.value == '0') ? '1' : '0';
SetCookie('CB_strike', document.post.sstrike.value);
break
}
}
}
function fetch_object(obj) {
return document.getElementById(obj)
}
function do_selectcolor(event) {
var scrX = (event.screenX - 270);
var scrY = (event.screenY - 270);
window.open('/chatbox/chatbox_selectcolor.htm', 'color', 'toolbar=no,menubar=no,personalbar=no,width=250,height=200,scrollbars=no,resizable=yes,left=' + scrX + ',top=' + scrY)
}
function do_selectsmilies(event) {
var scrX = (event.screenX - 270);
var scrY = (event.screenY - 380);
if (window.open) {
window.open('/post.forum?mode=smilies_chatbox' + smilies_sid, 'chatbox_smilies', 'toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY)
} else {}
}
function SetCookie(name, value) {
var expire = '';
var path = "/";
var domain = '';
document.cookie = name + "=" + value + "; path=" + path + expire + domain + ';'
}
function copy_user_name(user_name) {
if (document.post.message) {
document.post.message.value += user_name;
document.post.message.focus()
}
return false
}
function js_urlencode(text) {
text = text.toString();
var matches = text.match(/[\x90-\xFF]/g);
if (matches) {
for (var matchid = 0; matchid < matches.length; matchid++) {
var char_code = matches[matchid].charCodeAt(0);
text = text.replace(matches[matchid], '%u00' + (char_code & 0xFF).toString(16).toUpperCase())
}
}
return escape(text).replace(/\+/g, "%2B")
}
function ajax_submit_chatbox(params) {
number_of_refresh = 0;
var msg_sent = document.post.sent.value;
if (params == '' || params == undefined) {
params = '?achives=0'
}
while (msg_sent.indexOf('&') >= 0) {
msg_sent = msg_sent.replace('&', '%26')
};
while (msg_sent.indexOf('+') >= 0) {
msg_sent = msg_sent.replace('+', '%2B')
};
var data = '&mode=send';
data += '&sent=' + msg_sent;
data += '&sbold=' + document.post.sbold.value;
data += '&sitalic=' + document.post.sitalic.value;
data += '&sunderline=' + document.post.sunderline.value;
data += '&sstrike=' + document.post.sstrike.value;
data += '&scolor=' + document.post.scolor.value;
if ((msg_sent.indexOf('/away') == 0) || (msg_sent.indexOf('/abs') == 0)) {
document.getElementById('refresh_auto').checked = false
}
if (document.post.sent.value == '/banlist') {
window.open('/chatbox/chatbox_banlist.forum' + params, 'banlist', 'toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=yes,resizable=yes');
return false
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP")
}
http_request.onreadystatechange = function() {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
eval(parsed_text);
if (chatbox_last_update > chatbox_updated) {
document.getElementById('chatbox').innerHTML = chatbox_messages;
document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
daonguoc();
chatbox_updated = chatbox_last_update
}
}
};
http_request.open('POST', '/chatbox/chatbox_actions.forum' + params, true);
http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
http_request.send(data)
}
chatbox_messages_old = '';

function ajax_refresh_chatbox(params, force) {
if (params == '' || params == undefined) {
params = '?achives=0'
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP")
}
http_request.onreadystatechange = function() {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
eval(parsed_text);
if (chatbox_last_update > chatbox_updated || force) {
if (document.getElementById('chatbox').innerHTML != null) {
if (chatbox_messages_old != chatbox_messages) {
document.getElementById('chatbox').innerHTML = chatbox_messages;
chatbox_messages_old = chatbox_messages;
daonguoc()
}
}
if (document.getElementById('chatbox_members').innerHTML != null) document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
chatbox_updated = chatbox_last_update
}
}
};
http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=refresh', true);
http_request.send(null)
}
number_of_refresh = 0;

function refresh_chatbox(params) {
if (params == '' || params == undefined) {
params = '?achives=0'
}
if (document.getElementById('refresh_auto').checked == true) {
ajax_refresh_chatbox(params)
}
}
```

Bây giờ thay tất cả lại thành:

```



function Init_pref() {
if (document.getElementById('divbold')) {
if (my_getcookie('CB_bold') == 1) {
pref = my_getcookie('CB_bold');
document.post.sbold.value = pref;
document.getElementById('divbold').className = 'fontbutton fontbutton_selected';
document.post.message.style.fontWeight = 'bold'
}
if (my_getcookie('CB_italic') == 1) {
pref = my_getcookie('CB_italic');
document.post.sitalic.value = pref;
document.getElementById('divitalic').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.fontStyle = 'italic'
}
if (my_getcookie('CB_under') == 1) {
pref = my_getcookie('CB_under');
document.post.sunderline.value = pref;
document.getElementById('divunderline').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.textDecoration = 'underline'
}
if (my_getcookie('CB_strike') == 1) {
pref = my_getcookie('CB_strike');
document.post.sstrike.value = pref;
document.getElementById('divstrike').className = (pref == '1') ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
document.post.message.style.textDecoration = document.post.message.style.textDecoration + ' line-through'
}
if (show_color = document.getElementById('show_color')) {
if (pref = my_getcookie('CB_color')) {
show_color.style.backgroundColor = '#' + pref;
document.post.scolor.value = pref;
document.post.message.style.color = '#' + pref
} else if (template_color.length > 2) {
show_color.style.backgroundColor = template_color
}
}
}
}
function daonguoc(){
for (i=1; i<=parseInt(jQuery("#chatbox p").length/2); i++)
{
a=i-1;
n=jQuery("#chatbox p").length-i;
text=jQuery('#chatbox p')[n].innerHTML;
jQuery('#chatbox p')[n].innerHTML=jQuery('#chatbox p')[a].innerHTML;
jQuery('#chatbox p')[a].innerHTML=text

};
}

function bid() {
if (jQuery("#chatbox p:eq(0) img").attr('src') == 'http://r20.imgfast.net/users/2012/10/88/45/smiles/2270249841.gif') {
$("#bid")[0].play();
}
else{$("#bid3")[0].play();}
}

function lin() {
if (jQuery("#chatbox p:eq(0) img").attr('src') == 'http://r20.imgfast.net/users/2012/10/88/45/smiles/699312721.png') {
$("#bid1")[0].play();
}
}

function lout() {
if (jQuery("#chatbox p:eq(0) img").attr('src') == 'http://r20.imgfast.net/users/2012/10/88/45/smiles/1403619377.gif') {
$("#bid2")[0].play();
}
}

function submitmsg(params) {
document.post.sent.value = document.post.message.value;
document.post.message.value = '';
document.post.message.focus();
ajax_submit_chatbox(params);
return false
}
function do_style(dostyle) {
switch (dostyle) {
case 'bold':
{
document.getElementById('divbold').style.fontWeight = (document.post.sbold.value == '0') ? 'bold' : '';
document.post.message.style.fontWeight = document.getElementById('divbold').style.fontWeight;
document.post.sbold.value = (document.post.sbold.value == '0') ? '1' : '0';
SetCookie('CB_bold', document.post.sbold.value);
break
}
case 'italic':
{
document.getElementById('divitalic').style.fontStyle = (document.post.sitalic.value == '0') ? 'italic' : '';
document.post.message.style.fontStyle = document.getElementById('divitalic').style.fontStyle;
document.post.sitalic.value = (document.post.sitalic.value == '0') ? '1' : '0';
SetCookie('CB_italic', document.post.sitalic.value);
break
}
case 'underline':
{
document.getElementById('divunderline').style.textDecoration = (document.post.sunderline.value == '0') ? document.post.message.style.textDecoration + ' underline' : document.post.message.style.textDecoration.replace('underline', '');
document.post.message.style.textDecoration = document.getElementById('divunderline').style.textDecoration;
document.post.sunderline.value = (document.post.sunderline.value == '0') ? '1' : '0';
SetCookie('CB_under', document.post.sunderline.value);
break
}
case 'strike':
{
document.getElementById('divstrike').style.textDecoration = (document.post.sstrike.value == '0') ? document.post.message.style.textDecoration + ' line-through' : document.post.message.style.textDecoration.replace('line-through', '');
document.post.message.style.textDecoration = document.getElementById('divstrike').style.textDecoration;
document.post.sstrike.value = (document.post.sstrike.value == '0') ? '1' : '0';
SetCookie('CB_strike', document.post.sstrike.value);
break
}
}
}
function fetch_object(obj) {
return document.getElementById(obj)
}
function do_selectcolor(event) {
var scrX = (event.screenX - 270);
var scrY = (event.screenY - 270);
window.open('/chatbox/chatbox_selectcolor.htm', 'color', 'toolbar=no,menubar=no,personalbar=no,width=250,height=200,scrollbars=no,resizable=yes,left=' + scrX + ',top=' + scrY)
}
function do_selectsmilies(event) {
var scrX = (event.screenX - 270);
var scrY = (event.screenY - 380);
if (window.open) {
window.open('/post.forum?mode=smilies_chatbox' + smilies_sid, 'chatbox_smilies', 'toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY)
} else {}
}
function SetCookie(name, value) {
var expire = '';
var path = "/";
var domain = '';
document.cookie = name + "=" + value + "; path=" + path + expire + domain + ';'
}
function copy_user_name(user_name) {
if (document.post.message) {
document.post.message.value += user_name;
document.post.message.focus()
}
return false
}
function js_urlencode(text) {
text = text.toString();
var matches = text.match(/[\x90-\xFF]/g);
if (matches) {
for (var matchid = 0; matchid < matches.length; matchid++) {
var char_code = matches[matchid].charCodeAt(0);
text = text.replace(matches[matchid], '%u00' + (char_code & 0xFF).toString(16).toUpperCase())
}
}
return escape(text).replace(/\+/g, "%2B")
}
function ajax_submit_chatbox(params) {
number_of_refresh = 0;
var msg_sent = document.post.sent.value;
if (params == '' || params == undefined) {
params = '?achives=0'
}
while (msg_sent.indexOf('&') >= 0) {
msg_sent = msg_sent.replace('&', '%26')
};
while (msg_sent.indexOf('+') >= 0) {
msg_sent = msg_sent.replace('+', '%2B')
};
var data = '&mode=send';
data += '&sent=' + msg_sent;
data += '&sbold=' + document.post.sbold.value;
data += '&sitalic=' + document.post.sitalic.value;
data += '&sunderline=' + document.post.sunderline.value;
data += '&sstrike=' + document.post.sstrike.value;
data += '&scolor=' + document.post.scolor.value;
if ((msg_sent.indexOf('/away') == 0) || (msg_sent.indexOf('/abs') == 0)) {
document.getElementById('refresh_auto').checked = false
}
if (document.post.sent.value == '/banlist') {
window.open('/chatbox/chatbox_banlist.forum' + params, 'banlist', 'toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=yes,resizable=yes');
return false
}
if (window.XMLHttpRequest) {
var http_request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP")
}
http_request.onreadystatechange = function() {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
eval(parsed_text);
if (chatbox_last_update > chatbox_updated) {
document.getElementById('chatbox').innerHTML = chatbox_messages;
document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
daonguoc();lin();lout();bid();
chatbox_updated = chatbox_last_update
}
}
};
http_request.open('POST', '/chatbox/chatbox_actions.forum' + params, true);
http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
http_request.send(data)
}
chatbox_messages_old = '';

function ajax_refresh_chatbox(params, force) {
if (params == '' || params == undefined) {
params = '?achives=0'
}
if (window.XMLHttpRequest) {

var http_request = new XMLHttpRequest()
} else if (window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP")
}
http_request.onreadystatechange = function() {
if (http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
eval(parsed_text);
if (chatbox_last_update > chatbox_updated || force) {
if (document.getElementById('chatbox').innerHTML != null) {
if (chatbox_messages_old != chatbox_messages) {
document.getElementById('chatbox').innerHTML = chatbox_messages;
chatbox_messages_old = chatbox_messages;
daonguoc();lin();lout();
if(my_getcookie('uname')!=jQuery('#chatbox p:eq(0) .user a strong').html()){
bid();
}
}
}
if (document.getElementById('chatbox_members').innerHTML != null) document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
chatbox_updated = chatbox_last_update
}
}
};
http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=refresh', true);
http_request.send(null)
}
number_of_refresh = 0;

function refresh_chatbox(params) {
if (params == '' || params == undefined) {
params = '?achives=0'
}
if (document.getElementById('refresh_auto').checked == true) {
ajax_refresh_chatbox(params)
}
}```


Giữ nguyên trang này lại, mở thêm 1 tab mới:
Vào Acp -> display -> Avatars -> Hình vui -> kéo xuống click vô : thêm hình vui nhộn.
Chúng ta sẽ phải thêm tất cả là 3 hình.
Hình 1 log in (khi thành viên vào chatbox thì nó phăng cái hình này ra).
Hình 2 log out (khi thành viên thoát chatbox thì nó phăng cái hình này ra).
Hình 3 buzz (khi bấm vào buzz nó phăng hình này ra).
Bắt đầu hình 1, lên google tìm đại 3 hình:

![http://leeds.netimpact.org.uk/wp-content/themes/newscast/images/skin1/login.png](http://leeds.netimpact.org.uk/wp-content/themes/newscast/images/skin1/login.png)
![http://strong-bag.ucoz.org/logout-1-.gif](http://strong-bag.ucoz.org/logout-1-.gif)
![http://c3zone.net/users/2315/72/47/45/smiles/3783939235.gif](http://c3zone.net/users/2315/72/47/45/smiles/3783939235.gif)


Lưu cả 3 hình này về máy tính.
Xong lần lượt:
Đối với hình đầu tiên: mã hình vui là:

```


:login:
```

Đối với hình 2: mã hình vui là:

```


:logout:

```
Đối với hình 3: mã hình vui là:

```


:buzz:
```

Xong up lên phát.
Rồi giờ cũng ở Hình vui tìm 3 cái hình vừa up lên.
Lần lượt lấy link của 3 tấm hình.
Tìm lần lượt trong html2:


```


Link này: http://r20.imgfast.net/users/2012/10/88/45/smiles/699312721.png
Link này: http://r20.imgfast.net/users/2012/10/88/45/smiles/1403619377.gif
Link này: http://r20.imgfast.net/users/2012/10/88/45/smiles/2270249841.gif
```

thay lần lượt bằng link của 3 hình vừa up, login logout buzz.
Xong, tận hưởng đê...........................
2.Rất rất không lợi thế đối với các bạn cố chấp sử dụng cái chatbox mà nó cứ giật giật, giật tít cả người :
Còn tiếp
Clip chi tiết sẽ up sau!