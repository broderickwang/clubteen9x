Do ngày mai mình bận cho nên hôm nay mình sẽ share shop gunny ver4 sớm hơn dự kiến nhé Evil or Very Mad
Như ở topic trước http://thpthoaiduca.forumvi.com/t515p15-topic
Để thực hiện lời hứa của mình. Hôm nay mình chính thức share shop gunny ver 4 cho mọi người dùng.
Mình cố gắng sẽ viết chi tiết hướng dẫn. Do thời gian sau này mình bận cho nên bạn nào không làm được hãy hỏi người làm được rồi
nhé try
demo
![http://i39.servimg.com/u/f39/16/49/44/04/untitl16.png](http://i39.servimg.com/u/f39/16/49/44/04/untitl16.png)
![http://i39.servimg.com/u/f39/16/49/44/04/untitl17.png](http://i39.servimg.com/u/f39/16/49/44/04/untitl17.png)

demo online http://teenviet8.forumvi.com/h161-shop-gunny
Hướng dẫn
sleep hờ :hid:
Bước 1: ACP - Ganeral - Forum - Categories and forums
Click vào nút Add để tạo một chuyên mục mới để lưu hóa đơn mua nhân vật gunny.


Choose the kind of forum you want : forum
Forum name : Hóa đơn mua nhân vật gunny


Sau khi tạo xong chuyên mục, bạn ghi nhớ số thự tự chuyên mục đó để thực hiện các bước tiếp theo.

![http://r19.imgfast.net/users/1914/13/79/90/smiles/2109348208.gif](http://r19.imgfast.net/users/1914/13/79/90/smiles/2109348208.gif)  tiếp theo vào ACP - Modules - Points system - General options
chỉnh như trong hình

![http://i39.servimg.com/u/f39/16/49/44/04/untitl20.png](http://i39.servimg.com/u/f39/16/49/44/04/untitl20.png)

I love you vào ACP - Modules - Points system - Points management

tìm đến tên chuyên mục và điền vào ô per subject -500 (bạn có thể thay đổi vì đây là số points khi mua sẽ bị trừ )
Bước 2: ACP - Users & Groups - Users - Profiles - Profile fields
Click vào nút Add để tạo khung dữ liệu cho gunny.

Field edit
Type : Text field
Name : dulieuava
Necessarily filled ? : No
Display : Messages
Display type : Text
Who can modify the profile field value ? : Moderators & Member himself
Display this field for users that are at least : Guests

Text field

Default content :1|0|1|0|0|0|0|1|

Sau đó sắp xếp profile như sau
![http://i39.servimg.com/u/f39/16/49/44/04/untitl18.png](http://i39.servimg.com/u/f39/16/49/44/04/untitl18.png)

Sau khi làm xong bước này, các bạn vào trang chỉnh sửa Profile

( Ví dụ http://thpthoaiduca.forumvi.com/profile?mode=editprofile ).

Tìm id của input dulieuava bằng cách:


Tìm id bằng cách view mã nguồn (Ctrl U) và tìm dulieuava (Ctrl F)
ví dụ

```

<span style="color:#000000;">dulieuava

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;

<dd><input type="text" class="inputbox" id="profile_field_13_5" name="profile_field_13_5" style="width:250px" value="1|0|1|0|0|0|0|1|" />
```



Hoặc có thể Dùng chức năng Kiểm tra phần tử của Chrome hoặc firebug cho Firefox (add-on) với chức năng Thăm dò phần tử hoặc Kiểm tra thành phần của Opera trong menu chuột phải.
ghi nhớ dòng chữ đằng sau id=" như ở ví dụ trên là profile\_field\_13\_5 để thực hiện các bước tiếp theo nhé

Bước 3
Vào trang thông tin của một thành viên bất kỳ.
Ví dụ http://thpthoaiduca.forumvi.com/u1
chúng ta cũng tìm id bằng cách view mã nguồn (Ctrl U) và tìm dulieuava (Ctrl F)

ví dụ

```

<dl id="field_id5"><dt><span style="color:#000000;">dulieuava

Unknown end tag for &lt;/span&gt;

: 

Unknown end tag for &lt;/dt&gt;

<dd><div class="field_uneditable">1|0|1|0|0|0|0|1|

Unknown end tag for &lt;/div&gt;

<span class="field_editable invisible"><input type="text" class="inputbox" id="profile_field_13_5" name="profile_field_13_5" style="width:250px" value="1|0|1|0|0|0|0|1|" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/dd&gt;



```

hãy ghi nhớ cái id ( như của diễn đàn THPT Hoài Đức A là field\_id5)

Bước 4ACP - Display - Templates - Ganeral - viewtopic\_body
Bước này sẽ sửa templates của forum, vì thế các bạn cần cẩn lưu lại code gốc trước khi thao tác.
Tìm đoạn code sau ( Ctrl+F ) ( hoặc tương tự ):

```

<script type="text/javascript">//<![CDATA[
var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}', multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}', _atr = '{JS_DIR}addthis/', _ati = '{PATH_IMG_FA}addthis/'{ADDTHIS_LANG}, addthis_localize = { share_caption: "{L_SHARE_CAPTION}", email: "{L_EMAIL}", email_caption: "{L_EMAIL_CAPTION}", favorites: "{L_SHARE_BOOKMARKS}", print: "{L_PRINT}", more: "{L_MORE}" };
$(function(){
_atc.cwait = 0;
$('.addthis_button').mouseup(function(){
if ($('#at15s').css('display') == 'block') {
addthis_close();
addthis_close();
}
});
});
//]]>


Unknown end tag for &lt;/script&gt;



```

thay thành

```

<script type="text/javascript">//<![CDATA[
var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}', multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}', _atr = '{JS_DIR}addthis/', _ati = '{PATH_IMG_FA}addthis/'{ADDTHIS_LANG}, addthis_localize = { share_caption: "{L_SHARE_CAPTION}", email: "{L_EMAIL}", email_caption: "{L_EMAIL_CAPTION}", favorites: "{L_SHARE_BOOKMARKS}", print: "{L_PRINT}", more: "{L_MORE}" };
$(function(){
_atc.cwait = 0;
$('.addthis_button').mouseup(function(){
if ($('#at15s').css('display') == 'block') {
addthis_close();
addthis_close();}});$(".user-info:contains('Status:'),.user-info:contains('dulieuava: ')").remove();$(".coin").each(function () {$(this).html($(this).find("div:contains('Status:') div").html());});});
function shop(a, c, st, s, v, x) {
var rip = ('ban quyen thuoc ve thpthoaiduca.forumvi.com or thpthoaiduca.com');
var rua = (v*10+x*5);
var can = (rua/3000);
var hda = Math.floor(can+parseInt(1));
if(hda>60){(hda="60")};
if (a.substr(a.indexOf('title="')+7,3) != 'Nam' && a.substr(a.indexOf('title="')+7,2) != 'Nữ') {var b = a.split('|');
if (c.substr(c.indexOf('title="')+7,3) == 'Nam') {var dir = 'm';} else {var dir = 'f';}document.write('<embed src="http://fanta6.net/forum/cngavst/avatar.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar" menu="true" allowfullscreen="false" allowscriptaccess="always" salign="" flashvars="wp=' + b[7] + '&_face=equip/' + dir + '/face/face' + b[0] + '/&_hair=equip/' + dir + '/hair/hair' + b[3] + '/&_cloth=equip/' + dir + '/cloth/cloth' + b[2] + '/&_eff=equip/' + dir + '/eff/eff' + b[5] + '/&_hat=equip/' + dir + '/head/head' + b[4] + '/&_glass=equip/' + dir + '/glass/glass' + b[1] + '/&_hide1=2&_hide2=1&_hide3=1&_hidewings=&_wing=wing' + b[6] + '&_cng=cng1&_circle=circle' + b[8] + '&_suit=equip/' + dir + '/suits/suits120/&lvl=' + hda + '" type="application/x-shockwave-flash" height="180px" width="186px" align="middle">');}}

//]]>

Unknown end tag for &lt;/script&gt;



```

Tiếp tục tìm

```

<!-- BEGIN profile_field -->
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}
<!-- END profile_field -->

```
thay thành

```

<!-- BEGIN profile_field --><div class="user-info">


{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}



Unknown end tag for &lt;/div&gt;

<!-- END profile_field -->
```


Tiếp tục để đoạn sau vào nơi muốn hiện nhân vật gunny trong viewtopic\_body

```

<div class="user-pet" style="margin-left: 15px;margin-top: -20px;"><div class="huanchuong"><script>shop(<!-- BEGIN profile_field -->'{postrow.displayed.profile_field.CONTENT}',<!-- END profile_field -->1);

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



```



Bước 5 ACP - Display - Templates - Ganeral - overall\_header
các bạn tìm (Ctrl+F)

```

<body>
```

và thêm ngay sau nó đoạn sau

```

<!-- BEGIN switch_desc -->

<div style="display:none" class="depgiaiketao">{switch_desc.SITE_DESCRIPTION}

Unknown end tag for &lt;/div&gt;



<!-- END switch_desc -->
```

I love you Tiếp sau đó vào ACP - Quản lý tổng thể - Cấu hình diễn đàn
các bạn thêm

```

{USERLINK}
```

vào mô tả.
Giống như trong hình

![http://i39.servimg.com/u/f39/16/49/44/04/untitl19.png](http://i39.servimg.com/u/f39/16/49/44/04/untitl19.png)


Bước 6: ACP - Modules - HTML & JAVASCRIPT - HTML pages management

Tạo 11 trang HTML để làm nguồn lấy dữ liệu cho shop nhé:
Trang HTML 1
Title **: cánh
HTML source** :

```

<div alt="canh">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing1.png" alt="1">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing2.png" alt="2">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing3.png" alt="3">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing4.png" alt="4">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing5.png" alt="5">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing6.png" alt="6">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing7.png" alt="7">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing8.png" alt="8">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing9.png" alt="9">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing10.png" alt="10">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing11.png" alt="11">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing12.png" alt="12">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing13.png" alt="13">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing14.png" alt="14">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing15.png" alt="15">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing16.png" alt="16">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing17.png" alt="17">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing18.png" alt="18">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing19.png" alt="19">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing20.png" alt="20">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing21.png" alt="21">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing22.png" alt="22">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing23.png" alt="23">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing24.png" alt="24">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing25.png" alt="25">
<img src="http://i794.photobucket.com/albums/yy227/o0o_mr79/wing/wing35.png" alt="35">



Unknown end tag for &lt;/div&gt;


```


Trang HTML 2
Title **: Trang sức
HTML source** :

```

<div alt="suc"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff70/icon_1.png" alt="70"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff71/icon_1.png" alt="71"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff72/icon_1.png" alt="72"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff73/icon_1.png" alt="73"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff74/icon_1.png" alt="74"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff75/icon_1.png" alt="75"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff76/icon_1.png" alt="76"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff78/icon_1.png" alt="78"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff79/icon_1.png" alt="79"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff80/icon_1.png" alt="80"><img src="http://img.zing.vn/union/armory/gunny/equip/m/eff/eff81/icon_1.png" alt="81">

Unknown end tag for &lt;/div&gt;


```


Trang HTML 3
Title **: nón
HTML source** :

```


<div alt="non"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head65/icon_1.png" alt="65"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head66/icon_1.png" alt="66"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head67/icon_1.png" alt="67"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head68/icon_1.png" alt="68"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head69/icon_1.png" alt="69"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head70/icon_1.png" alt="70"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head71/icon_1.png" alt="71"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head72/icon_1.png" alt="72"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head73/icon_1.png" alt="73"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head74/icon_1.png" alt="74"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head75/icon_1.png" alt="75"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head78/icon_1.png" alt="78"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head81/icon_1.png" alt="81"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head82/icon_1.png" alt="82"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head84/icon_1.png" alt="84"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head85/icon_1.png" alt="85"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head86/icon_1.png" alt="86"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head89/icon_1.png" alt="89"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head91/icon_1.png" alt="91"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head92/icon_1.png" alt="92"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head94/icon_1.png" alt="94"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head95/icon_1.png" alt="95"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head96/icon_1.png" alt="96"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head97/icon_1.png" alt="97"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head98/icon_1.png" alt="98"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head99/icon_1.png" alt="99"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head101/icon_1.png" alt="101">



<img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head102/icon_1.png" alt="102"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head103/icon_1.png" alt="103"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head104/icon_1.png" alt="104"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head105/icon_1.png" alt="105"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head106/icon_1.png" alt="106"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head107/icon_1.png" alt="107"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head108/icon_1.png" alt="108"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head109/icon_1.png" alt="109"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head110/icon_1.png" alt="110"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head111/icon_1.png" alt="111"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head112/icon_1.png" alt="112"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head113/icon_1.png" alt="113"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head114/icon_1.png" alt="114"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head115/icon_1.png" alt="115"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head116/icon_1.png" alt="116"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head117/icon_1.png" alt="117"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head118/icon_1.png" alt="118"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head119/icon_1.png" alt="119"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head120/icon_1.png" alt="120"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head121/icon_1.png" alt="121"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head122/icon_1.png" alt="122"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head123/icon_1.png" alt="123"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head124/icon_1.png" alt="124"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head125/icon_1.png" alt="125"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head126/icon_1.png" alt="126"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head127/icon_1.png" alt="127"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head128/icon_1.png" alt="128"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head129/icon_1.png" alt="129"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head130/icon_1.png" alt="130"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head131/icon_1.png" alt="131"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head132/icon_1.png" alt="132"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head134/icon_1.png" alt="134"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head135/icon_1.png" alt="135"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head136/icon_1.png" alt="136"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head137/icon_1.png" alt="137"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head138/icon_1.png" alt="138"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head139/icon_1.png" alt="139"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head140/icon_1.png" alt="140"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head141/icon_1.png" alt="141"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head142/icon_1.png" alt="142"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head143/icon_1.png" alt="143"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head144/icon_1.png" alt="144"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head145/icon_1.png" alt="145"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head146/icon_1.png" alt="146"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head147/icon_1.png" alt="147"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head148/icon_1.png" alt="148"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head149/icon_1.png" alt="149"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head150/icon_1.png" alt="150"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head151/icon_1.png" alt="151"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head152/icon_1.png" alt="152"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head153/icon_1.png" alt="153"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head154/icon_1.png" alt="154"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head155/icon_1.png" alt="155"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head156/icon_1.png" alt="156"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head157/icon_1.png" alt="157"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head158/icon_1.png" alt="158"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head159/icon_1.png" alt="159"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head160/icon_1.png" alt="160"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head161/icon_1.png" alt="161">



<img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head162/icon_1.png" alt="162"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head163/icon_1.png" alt="163"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head164/icon_1.png" alt="164"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head165/icon_1.png" alt="165"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head166/icon_1.png" alt="166"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head167/icon_1.png" alt="167"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head168/icon_1.png" alt="168"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head169/icon_1.png" alt="169"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head170/icon_1.png" alt="170"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head171/icon_1.png" alt="171">


<img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head172/icon_1.png" alt="172"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head173/icon_1.png" alt="173"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head174/icon_1.png" alt="174"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head175/icon_1.png" alt="175"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head176/icon_1.png" alt="176"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head177/icon_1.png" alt="177"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head178/icon_1.png" alt="178"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head179/icon_1.png" alt="179"><img src="http://img.zing.vn/union/armory/gunny/equip/m/head/head180/icon_1.png" alt="180">





Unknown end tag for &lt;/div&gt;


```



Trang HTML 4
Title **: Mắt kính
HTML source** :

```


<div alt="kinh"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass65/icon_1.png" alt="65"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass66/icon_1.png" alt="66"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass67/icon_1.png" alt="67"><img src="http://img.zing.vn/union/armory/gunny/equip/f/glass/glass68/icon_1.png" alt="68">

Unknown end tag for &lt;/div&gt;



```

Trang HTML 5
Title **: Vũ khí
HTML source** :

```


<div alt="vkhi">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/1.png" alt="1">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/2.png" alt="2">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/3.png" alt="3">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/4.png" alt="4">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/5.png" alt="5">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/6.png" alt="6">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/7.png" alt="7">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/8.png" alt="8">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/9.png" alt="9">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/10.png" alt="10">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/11.png" alt="11">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/12.png" alt="12">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/13.png" alt="13">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/14.png" alt="14">
<img src="http://i1231.photobucket.com/albums/ee517/thpthoaiduca/vukhi/15.png" alt="15">




Unknown end tag for &lt;/div&gt;



```

Trang HTML 6
Title **: Tóc nam
HTML source** :

```


<div alt="toc"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair65/icon_1.png" alt="65"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair66/icon_1.png" alt="66"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair67/icon_1.png" alt="67"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair68/icon_1.png" alt="68"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair69/icon_1.png" alt="69"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair70/icon_1.png" alt="70"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair71/icon_1.png" alt="71"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair72/icon_1.png" alt="72"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair73/icon_1.png" alt="73"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair74/icon_1.png" alt="74"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair75/icon_1.png" alt="75"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair77/icon_1.png" alt="77"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair78/icon_1.png" alt="78"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair79/icon_1.png" alt="79"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair80/icon_1.png" alt="80"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair81/icon_1.png" alt="81"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair82/icon_1.png" alt="82"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair83/icon_1.png" alt="83"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair84/icon_1.png" alt="84"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair85/icon_1.png" alt="85"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair86/icon_1.png" alt="86"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair88/icon_1.png" alt="88"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair89/icon_1.png" alt="89"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair90/icon_1.png" alt="90"><img src="http://img.zing.vn/union/armory/gunny/equip/m/hair/hair91/icon_1.png" alt="91">

Unknown end tag for &lt;/div&gt;



```


Trang HTML 7
Title **: áo nam
HTML source** :

```


<div alt="ao"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth65/icon_1.png" alt="65"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth66/icon_1.png" alt="66"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth67/icon_1.png" alt="67"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth68/icon_1.png" alt="68"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth69/icon_1.png" alt="69"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth70/icon_1.png" alt="70"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth71/icon_1.png" alt="71"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth72/icon_1.png" alt="72"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth73/icon_1.png" alt="73"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth74/icon_1.png" alt="74"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth75/icon_1.png" alt="75"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth76/icon_1.png" alt="76"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth77/icon_1.png" alt="77"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth78/icon_1.png" alt="78"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth79/icon_1.png" alt="79"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth80/icon_1.png" alt="80"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth81/icon_1.png" alt="81"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth82/icon_1.png" alt="82"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth84/icon_1.png" alt="84"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth85/icon_1.png" alt="85"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth87/icon_1.png" alt="87"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth88/icon_1.png" alt="88"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth89/icon_1.png" alt="89"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth90/icon_1.png" alt="90"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth91/icon_1.png" alt="91"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth92/icon_1.png" alt="92"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth93/icon_1.png" alt="93"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth94/icon_1.png" alt="94"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth95/icon_1.png" alt="95"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth96/icon_1.png" alt="96"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth97/icon_1.png" alt="97"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth98/icon_1.png" alt="98"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth99/icon_1.png" alt="99"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth100/icon_1.png" alt="100"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth101/icon_1.png" alt="101"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth102/icon_1.png" alt="102"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth103/icon_1.png" alt="103"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth104/icon_1.png" alt="104"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth105/icon_1.png" alt="105"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth106/icon_1.png" alt="106"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth107/icon_1.png" alt="107"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth108/icon_1.png" alt="108"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth109/icon_1.png" alt="109"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth110/icon_1.png" alt="110"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth111/icon_1.png" alt="111"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth112/icon_1.png" alt="112"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth113/icon_1.png" alt="113"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth114/icon_1.png" alt="114"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth115/icon_1.png" alt="115"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth116/icon_1.png" alt="116"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth117/icon_1.png" alt="117"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth118/icon_1.png" alt="118"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth119/icon_1.png" alt="119"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth120/icon_1.png" alt="120"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth121/icon_1.png" alt="121"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth122/icon_1.png" alt="122"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth123/icon_1.png" alt="123"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth124/icon_1.png" alt="124"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth125/icon_1.png" alt="125"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth126/icon_1.png" alt="126"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth127/icon_1.png" alt="127"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth128/icon_1.png" alt="128"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth129/icon_1.png" alt="129"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth130/icon_1.png" alt="130"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth131/icon_1.png" alt="131"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth132/icon_1.png" alt="132"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth134/icon_1.png" alt="134"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth135/icon_1.png" alt="135"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth136/icon_1.png" alt="136"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth137/icon_1.png" alt="137"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth138/icon_1.png" alt="138"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth139/icon_1.png" alt="139"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth140/icon_1.png" alt="140"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth141/icon_1.png" alt="141"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth142/icon_1.png" alt="142"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth143/icon_1.png" alt="143"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth144/icon_1.png" alt="144"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth145/icon_1.png" alt="145"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth146/icon_1.png" alt="146"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth147/icon_1.png" alt="147"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth148/icon_1.png" alt="148"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth149/icon_1.png" alt="149"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth150/icon_1.png" alt="150"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth151/icon_1.png" alt="151"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth152/icon_1.png" alt="152"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth153/icon_1.png" alt="153"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth154/icon_1.png" alt="154"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth155/icon_1.png" alt="155"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth156/icon_1.png" alt="156"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth157/icon_1.png" alt="157"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth158/icon_1.png" alt="158"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth159/icon_1.png" alt="159"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth160/icon_1.png" alt="160"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth161/icon_1.png" alt="161">



<img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth162/icon_1.png" alt="162"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth163/icon_1.png" alt="163"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth164/icon_1.png" alt="164"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth165/icon_1.png" alt="165"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth166/icon_1.png" alt="166"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth167/icon_1.png" alt="167"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth168/icon_1.png" alt="168"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth169/icon_1.png" alt="169"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth170/icon_1.png" alt="170"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth171/icon_1.png" alt="171">


<img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth172/icon_1.png" alt="172"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth173/icon_1.png" alt="173"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth174/icon_1.png" alt="174"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth175/icon_1.png" alt="175"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth176/icon_1.png" alt="176"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth177/icon_1.png" alt="177"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth178/icon_1.png" alt="178"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth179/icon_1.png" alt="179"><img src="http://img.zing.vn/union/armory/gunny/equip/m/cloth/cloth180/icon_1.png" alt="180">




Unknown end tag for &lt;/div&gt;




```

Trang HTML 8
Title **: Khuôn mặt nam
HTML source** :

```


<div alt="mat"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face53/icon_1.png" alt="53">
<img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/m/face/face59/icon_1.png" alt="59">



Unknown end tag for &lt;/div&gt;



```
Trang HTML 9
Title **: tóc nữ
HTML source** :

```


<div alt="toc"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair65/icon_1.png" alt="65"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair66/icon_1.png" alt="66"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair67/icon_1.png" alt="67"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair68/icon_1.png" alt="68"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair69/icon_1.png" alt="69"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair70/icon_1.png" alt="70"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair71/icon_1.png" alt="71"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair72/icon_1.png" alt="72"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair73/icon_1.png" alt="73"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair74/icon_1.png" alt="74"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair75/icon_1.png" alt="75"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair77/icon_1.png" alt="77"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair78/icon_1.png" alt="78"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair79/icon_1.png" alt="79"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair80/icon_1.png" alt="80"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair81/icon_1.png" alt="81"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair82/icon_1.png" alt="82"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair83/icon_1.png" alt="83"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair84/icon_1.png" alt="84"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair85/icon_1.png" alt="85"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair86/icon_1.png" alt="86"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair88/icon_1.png" alt="88"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair89/icon_1.png" alt="89"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair90/icon_1.png" alt="90"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair91/icon_1.png" alt="91">


<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair92/icon_1.png" alt="92"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair93/icon_1.png" alt="93"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair94/icon_1.png" alt="94"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair95/icon_1.png" alt="95"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair96/icon_1.png" alt="96"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair97/icon_1.png" alt="97"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair98/icon_1.png" alt="98"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair99/icon_1.png" alt="99"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair100/icon_1.png" alt="100">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair101/icon_1.png" alt="101">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair102/icon_1.png" alt="102"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair103/icon_1.png" alt="103"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair104/icon_1.png" alt="104"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair105/icon_1.png" alt="105"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair106/icon_1.png" alt="106"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair107/icon_1.png" alt="107"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair108/icon_1.png" alt="108"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair109/icon_1.png" alt="109"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair110/icon_1.png" alt="110">


<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair111/icon_1.png" alt="111">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair112/icon_1.png" alt="112"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair113/icon_1.png" alt="113"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair114/icon_1.png" alt="114"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair115/icon_1.png" alt="115"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair116/icon_1.png" alt="116"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair117/icon_1.png" alt="117"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair118/icon_1.png" alt="118"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair119/icon_1.png" alt="119"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair120/icon_1.png" alt="120">


<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair121/icon_1.png" alt="121">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair122/icon_1.png" alt="122"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair123/icon_1.png" alt="123"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair124/icon_1.png" alt="124"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair125/icon_1.png" alt="125"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair126/icon_1.png" alt="126"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair127/icon_1.png" alt="127"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair128/icon_1.png" alt="128"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair129/icon_1.png" alt="129">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair130/icon_1.png" alt="130">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair131/icon_1.png" alt="131">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair132/icon_1.png" alt="132"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair133/icon_1.png" alt="133"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair134/icon_1.png" alt="134"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair135/icon_1.png" alt="135"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair136/icon_1.png" alt="136"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair137/icon_1.png" alt="137"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair138/icon_1.png" alt="138"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair139/icon_1.png" alt="139"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair140/icon_1.png" alt="140">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair141/icon_1.png" alt="141">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair142/icon_1.png" alt="142"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair143/icon_1.png" alt="143"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair144/icon_1.png" alt="144"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair145/icon_1.png" alt="145"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair146/icon_1.png" alt="146"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair147/icon_1.png" alt="147"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair148/icon_1.png" alt="148"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair149/icon_1.png" alt="149"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair150/icon_1.png" alt="150"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair151/icon_1.png" alt="151">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair152/icon_1.png" alt="152"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair153/icon_1.png" alt="153"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair154/icon_1.png" alt="154"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair155/icon_1.png" alt="155"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair156/icon_1.png" alt="156"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair157/icon_1.png" alt="157"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair158/icon_1.png" alt="158"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair159/icon_1.png" alt="159"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair160/icon_1.png" alt="160"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair161/icon_1.png" alt="161">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair162/icon_1.png" alt="162"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair163/icon_1.png" alt="163"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair164/icon_1.png" alt="164"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair165/icon_1.png" alt="165"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair166/icon_1.png" alt="166"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair167/icon_1.png" alt="167"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair168/icon_1.png" alt="168"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair169/icon_1.png" alt="169"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair170/icon_1.png" alt="170">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair171/icon_1.png" alt="171">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair172/icon_1.png" alt="172"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair173/icon_1.png" alt="173"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair174/icon_1.png" alt="174"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair175/icon_1.png" alt="175"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair176/icon_1.png" alt="176"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair177/icon_1.png" alt="177"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair178/icon_1.png" alt="178"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair179/icon_1.png" alt="179"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair180/icon_1.png" alt="180">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair181/icon_1.png" alt="181">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair182/icon_1.png" alt="182"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair183/icon_1.png" alt="183"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair184/icon_1.png" alt="184"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair185/icon_1.png" alt="185"><img src="http://img.zing.vn/union/armory/gunny/equip/f/hair/hair186/icon_1.png" alt="186">






Unknown end tag for &lt;/div&gt;



```


Trang HTML 10
Title **: áo nữ
HTML source** :

```


<div alt="ao"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth53/icon_1.png" alt="53"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth58/icon_1.png" alt="58"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth59/icon_1.png" alt="59"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth60/icon_1.png" alt="60"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth61/icon_1.png" alt="61"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth62/icon_1.png" alt="62"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth63/icon_1.png" alt="63"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth64/icon_1.png" alt="64"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth65/icon_1.png" alt="65"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth66/icon_1.png" alt="66"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth67/icon_1.png" alt="67"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth68/icon_1.png" alt="68"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth69/icon_1.png" alt="69"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth70/icon_1.png" alt="70"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth71/icon_1.png" alt="71"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth72/icon_1.png" alt="72"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth73/icon_1.png" alt="73"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth74/icon_1.png" alt="74"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth75/icon_1.png" alt="75"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth76/icon_1.png" alt="76"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth77/icon_1.png" alt="77"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth78/icon_1.png" alt="78"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth79/icon_1.png" alt="79"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth80/icon_1.png" alt="80"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth81/icon_1.png" alt="81"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth82/icon_1.png" alt="82"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth84/icon_1.png" alt="84"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth85/icon_1.png" alt="85"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth87/icon_1.png" alt="87"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth88/icon_1.png" alt="88"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth89/icon_1.png" alt="89"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth90/icon_1.png" alt="90"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth91/icon_1.png" alt="91"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth92/icon_1.png" alt="92"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth93/icon_1.png" alt="93"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth94/icon_1.png" alt="94"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth95/icon_1.png" alt="95"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth96/icon_1.png" alt="96"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth97/icon_1.png" alt="97"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth98/icon_1.png" alt="98"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth99/icon_1.png" alt="99"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth100/icon_1.png" alt="100"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth101/icon_1.png" alt="101"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth102/icon_1.png" alt="102"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth103/icon_1.png" alt="103"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth104/icon_1.png" alt="104"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth105/icon_1.png" alt="105"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth106/icon_1.png" alt="106"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth107/icon_1.png" alt="107"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth108/icon_1.png" alt="108"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth109/icon_1.png" alt="109"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth110/icon_1.png" alt="110"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth111/icon_1.png" alt="111"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth112/icon_1.png" alt="112"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth113/icon_1.png" alt="113"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth114/icon_1.png" alt="114"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth115/icon_1.png" alt="115"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth116/icon_1.png" alt="116"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth117/icon_1.png" alt="117"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth118/icon_1.png" alt="118"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth119/icon_1.png" alt="119"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth120/icon_1.png" alt="120"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth121/icon_1.png" alt="121"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth122/icon_1.png" alt="122"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth123/icon_1.png" alt="123"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth124/icon_1.png" alt="124"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth125/icon_1.png" alt="125"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth126/icon_1.png" alt="126"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth127/icon_1.png" alt="127"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth128/icon_1.png" alt="128"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth129/icon_1.png" alt="129"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth130/icon_1.png" alt="130"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth131/icon_1.png" alt="131"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth132/icon_1.png" alt="132"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth134/icon_1.png" alt="134"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth135/icon_1.png" alt="135"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth136/icon_1.png" alt="136"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth137/icon_1.png" alt="137"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth138/icon_1.png" alt="138"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth139/icon_1.png" alt="139"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth140/icon_1.png" alt="140"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth141/icon_1.png" alt="141"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth142/icon_1.png" alt="142"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth143/icon_1.png" alt="143"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth144/icon_1.png" alt="144"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth145/icon_1.png" alt="145"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth146/icon_1.png" alt="146"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth147/icon_1.png" alt="147"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth148/icon_1.png" alt="148"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth149/icon_1.png" alt="149"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth150/icon_1.png" alt="150"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth151/icon_1.png" alt="151"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth152/icon_1.png" alt="152"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth153/icon_1.png" alt="153"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth154/icon_1.png" alt="154"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth155/icon_1.png" alt="155"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth156/icon_1.png" alt="156"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth157/icon_1.png" alt="157"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth158/icon_1.png" alt="158"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth159/icon_1.png" alt="159"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth160/icon_1.png" alt="160"><img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth161/icon_1.png" alt="161">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth162/icon_1.png" alt="162">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth163/icon_1.png" alt="163">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth164/icon_1.png" alt="164">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth165/icon_1.png" alt="165">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth166/icon_1.png" alt="166">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth167/icon_1.png" alt="167">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth168/icon_1.png" alt="168">

<img src="http://img.zing.vn/union/armory/gunny/equip/f/cloth/cloth169/icon_1.png" alt="169">



Unknown end tag for &lt;/div&gt;



```

Trang HTML 11
Title **: Khuôn mặt nữ
HTML source** :

```


<div alt="mat"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face1/icon_1.png" alt="1"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face2/icon_1.png" alt="2"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face3/icon_1.png" alt="3"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face4/icon_1.png" alt="4"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face5/icon_1.png" alt="5"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face6/icon_1.png" alt="6"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face7/icon_1.png" alt="7"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face8/icon_1.png" alt="8"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face9/icon_1.png" alt="9"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face10/icon_1.png" alt="10"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face11/icon_1.png" alt="11"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face12/icon_1.png" alt="12"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face13/icon_1.png" alt="13"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face14/icon_1.png" alt="14"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face15/icon_1.png" alt="15"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face16/icon_1.png" alt="16"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face17/icon_1.png" alt="17"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face18/icon_1.png" alt="18"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face19/icon_1.png" alt="19"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face20/icon_1.png" alt="20"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face21/icon_1.png" alt="21"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face22/icon_1.png" alt="22"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face23/icon_1.png" alt="23"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face24/icon_1.png" alt="24"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face25/icon_1.png" alt="25"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face26/icon_1.png" alt="26"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face27/icon_1.png" alt="27"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face28/icon_1.png" alt="28"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face29/icon_1.png" alt="29"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face30/icon_1.png" alt="30"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face31/icon_1.png" alt="31"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face32/icon_1.png" alt="32"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face33/icon_1.png" alt="33"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face34/icon_1.png" alt="34"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face35/icon_1.png" alt="35"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face36/icon_1.png" alt="36"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face37/icon_1.png" alt="37"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face38/icon_1.png" alt="38"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face39/icon_1.png" alt="39"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face40/icon_1.png" alt="40"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face41/icon_1.png" alt="41"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face42/icon_1.png" alt="42"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face43/icon_1.png" alt="43"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face44/icon_1.png" alt="44"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face45/icon_1.png" alt="45"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face46/icon_1.png" alt="46"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face47/icon_1.png" alt="47"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face48/icon_1.png" alt="48"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face49/icon_1.png" alt="49"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face50/icon_1.png" alt="50"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face51/icon_1.png" alt="51"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face52/icon_1.png" alt="52"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face53/icon_1.png" alt="53">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face54/icon_1.png" alt="54"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face55/icon_1.png" alt="55"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face56/icon_1.png" alt="56"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face57/icon_1.png" alt="57"><img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face58/icon_1.png" alt="58">
<img src="http://img.zing.vn/union/armory/gunny/equip/f/face/face59/icon_1.png" alt="59">


Unknown end tag for &lt;/div&gt;


```
Bước 7: Tạo 3 HTML trang shop nam, Shop nữ và trang Đăng nhập shop ( đến bước này là các bạn có thể yên tâm rằng mình sắp thành công rồi nha Laughing )
I love you Trang Đăng nhập Shop
Title **: Đăng nhập shop gunny
Do you wish to use your forum header and footer ? có
HTML source** :

```

<div class="module main"><div class="main-head subforum">


<h3>Chào mừng bạn đến với Shop Nhân Vật Gunny Version.4 ♫

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;

<div class="main-contentr">

<center>
<a  href="#" ltip="Bấm vào đây để vào shop" class="chanchua" style="display:none"><img src="http://i43.servimg.com/u/f43/16/03/04/56/shop10.jpg" width="500">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/center&gt;





Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="dulieu" style="display:none">

Unknown end tag for &lt;/div&gt;


<script>
$(function () {
$(".dulieu").load('/u' + $(".depgiaiketao a").attr("href").split('u=')[1] + ' #field_id-7 .field_uneditable img', function () {
if ($(".dulieu img").attr("alt") == 'Nam') {
$(".chanchua").attr("href", "Link HTML Shop nam").fadeIn();
} else {
$(".chanchua").attr("href", "Link HTML Shop nữ").fadeIn();
}
});
});


Unknown end tag for &lt;/script&gt;


```


I love you Trang Shop nam
Title **: Shop nam
Do you wish to use your forum header and footer ? có
HTML source** :

```

<style>
#hi {
margin-bottom:-5px
}
.dulieu {
height: 397px;
overflow:auto
}
.tabs {
margin-bottom:-6px;
min-width:532px;
}
.tabs ul li.activetab a, .tabs ul li.activetab a:hover {
text-decoration:none;
border:1px solid #E8E8E8;
background-color:#fff;
border-bottom:1px solid #fff;
color:#333
}
.tabs ul li a {
font-size:.9em;
border:1px solid #E8E8E8;
text-decoration:none;
-webkit-border-radius:5px 5px 0 0;
-moz-border-radius:5px 5px 0 0;
border-radius:5px 5px 0 0;
padding: 4px 12px 4px 12px;
margin: 2px;
background:#FBFBFB
}
.tabs ul li {
float:left;
}
.tabs ul {
list-style:none
}
img:hover {
cursor:pointer;
border:2px solid #ccc!important;
}
img {
border:2px solid #FBFBFB!important;
}
img.chon {
cursor:pointer;
border:2px solid #ccc!important;
}
.field_uneditable {
float: right;
}


Unknown end tag for &lt;/style&gt;




<script type="text/javascript">

var rank = '';
$.post("/u" + $(".depgiaiketao a").attr("href").split('u=')[1], function (a) {
if (a.indexOf('—♥Administrator') > 0) {
rank = 4
} else if (a.indexOf('—♥smod') > 0) {
rank = 3
} else if (a.indexOf('—♥Mod') > 0) {
rank = 2
} else if (a.indexOf('—♥member tích cực') > 0) {
rank = 1
} else {
rank = 0
}
});
var banquyen = 'Bản quyền viết bởi notme. design bởi Super Ròm™ và được phát triển  thêm bới thpthoaiduca.frumvi.com ';
$(function () {
$(".points").load("/u" + $(".depgiaiketao a").attr("href").split('u=')[1] + " #field_id-13 .field_uneditable");
$(".dulieucu").load("/u" + $(".depgiaiketao a").attr("href").split('u=')[1] + " #field_id5 .field_uneditable", function () {
var b = $(this).text().split('|');
if (b[2] >= 0) {
$("input.mat").val(b[0]);
$("input.kinh").val(b[1]);
$("input.ao").val(b[2]);
$("input.toc").val(b[3]);
$("input.non").val(b[4]);
$("input.suc").val(b[5]);
$("input.canh").val(b[6]);
$("input.vkhi").val(b[7]);
thaydoi()
}
});
$(".muahang").click(function () {
if (500 <= Number($(".points").text())) {
var b = "Hóa đơn mua hàng của " + $(".c3username").text();
var e = "Ðã tính tiền";
$.post("/post?f=50&mode=newtopic", {
subject: b,
message: e,
post: 1
});
var f = $("input.mat").val() + '|' + $("input.kinh").val() + '|' + $("input.ao").val() + '|' + $("input.toc").val() + '|' + $("input.non").val() + '|' + $("input.suc").val() + '|' + $("input.canh").val() + '|' + $("input.vkhi").val() + '|' + rank;
var g = $(".depgiaiketao a").attr("href").split("u=")[1];
var c = "active=1&user=" + g,
d = document.getElementById("logout").href,
d = d.substring(d.indexOf("tid=") + 4, d.indexOf("&key")),
c = c + ('&tid=' + d + '&content=[["profile_field_13_5", "' + f + '"]]&id=1');
jQuery.post("/ajax_profile.forum?jsoncallback=jQuery1", c, function (a) {
0 < a.indexOf("1") ? (alert('Mua thành công'), location.href = 'http://' + location.host) : alert('Có lỗi vui lòng F5')
})
} else {
alert("Xin lỗi bạn không đủ tiền mua")
}
});
$(".macdinh").click(function () {
$("input.mat").val(1);
$("input.kinh").val(0);
$("input.ao").val(1);
$("input.toc").val(0);
$("input.non").val(0);
$("input.suc").val(0);
$("input.canh").val(0);
$("input.vkhi").val(0)
$(".main-contentr td").html('');
thaydoi()
});

function click() {
$("img").click(function () {
$("img").each(function () {
$(this).removeClass("chon")
});
$(this).addClass("chon");
$("input." + $(this).parent().attr("alt")).val($(this).attr("alt"));
$("#" + $(this).parent().attr("alt")).html('<img width="20px" src="' + $(this).attr("src") + '" alt="' + $(this).parent().attr("alt") + '"/>');
thaydoi()
})
}
function thaydoi() {
var a = $("input.mat").val();
var b = $("input.kinh").val();
var c = $("input.ao").val();
var d = $("input.toc").val();
var e = $("input.non").val();
var f = $("input.suc").val();
var g = $("input.canh").val();
var k = $("input.vkhi").val();
$(".chanssssss").html('<embed src="http://fanta6.net/forum/cngavst/avatar.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar" menu="true" allowfullscreen="false" allowscriptaccess="always" salign="" flashvars="wp=' + k + '&_face=equip/m/face/face' + a + '/&_hair=equip/m/hair/hair' + d + '/&_cloth=equip/m/cloth/cloth' + c + '/&_eff=equip/m/eff/eff' + f + '/&_hat=equip/m/head/head' + e + '/&_glass=equip/m/glass/glass' + b + '/&_hide1=2&_hide2=1&_hide3=1&_hidewings=&_wing=wing' + g + '&_cng=cng&_circle=circle&_suit=equip/m/suits/suits120/&lvl" type="application/x-shockwave-flash" height="180px" width="186px" align="middle">')
}
$(".dulieu").load("link HTML 1", function () {
click()
});
$(".tabs a").click(function () {
$(".tabs li").each(function () {
$(this).removeClass("activetab")
});
$(this).parent().addClass("activetab");
$(".dulieu").load($(this).attr("href") + " div", function () {
click()
});
return false
})
});


Unknown end tag for &lt;/script&gt;


<div class="dulieucu" style="display: none">

Unknown end tag for &lt;/div&gt;


<table width="100%" cellspacing="1" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td height="1" width="25%" class="column">

Unknown end tag for &lt;/td&gt;


<td width="1%">

Unknown end tag for &lt;/td&gt;


<td width="63%" class="column">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td colspan="3" width="100%">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<table width="100%" cellspacing="0" border="0" align="center" class="portal">
<tbody>
<tr>
<td valign="top" width="25%" class="column">
<div id="hi" class="clearfix">
<ul>
<li> 

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-eye-open"> 

Unknown end tag for &lt;/i&gt;

Xem trước |
<a class="macdinh" href="javascript:void(0);">Mặc định

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">
<input value="1" class="mat" type="hidden">
<input value="0" class="kinh" type="hidden">
<input value="1" class="ao" type="hidden">
<input value="0" class="toc" type="hidden">
<input value="0" class="non" type="hidden">
<input value="0" class="suc" type="hidden">
<input value="0" class="canh" type="hidden">
<input value="0" class="vkhi" type="hidden">
<div class="chanssssss">
<embed src="http://9xinh.ucoz.com/avatar.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer"
play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar"
menu="true" allowfullscreen="false" allowscriptaccess="always" salign=""
flashvars="_face=equip/m/face/face1/&_hair=equip/m/hair/hair0/&_cloth=equip/m/cloth/cloth1/&_eff=equip/m/eff/eff0/&_hat=equip/m/head/head0/&_glass=equip/m/glass/glass0/&_hide1=2&_hide2=1&_hide3=1&_hidewings=&_wing=wing0&_circle=&_suit=equip/m/suits/suits102/"
type="application/x-shockwave-flash" height="180px" width="186px" align="middle">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-eye-close"> 

Unknown end tag for &lt;/i&gt;

Item đã chọn

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-contentr clearfix" style="background: #FBFBFB;">
<table width="100%">
<tbody>
<tr>
<td valign="top" width="25px" height="30px" id="mat">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="kinh">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="ao">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="toc">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="canh">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="suc">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="non">

Unknown end tag for &lt;/td&gt;

<td valign="top" width="25px" height="30px" id="vkhi">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-user">

Unknown end tag for &lt;/i&gt;

Thông tin cá nhân

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">Nick name:
<a class="c3userlink" href="#"><b class="c3username" style="float:right">

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;


<br />Số points:
<b class="points">

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-bullhorn">

Unknown end tag for &lt;/i&gt;

Thông tin sản phẩm

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">
Written by: <a href="http://www.9xstudio.biz/u500 " title="Các chức năng
được thực hiện bởi notme "><b>notme

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

 | <a href="http://www.9xstudio.biz/u1
" title="Giao diện bởi Super Ròm "><b>Ròm™

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<br> <a href="http://Thpthoaiduca.forumvi.com
" title="Phát triển thêm bởi Diễn đàn Thpt Hoài Đức A "><b>ThptHoaiDucA.Forumvi.Com

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<br>
<i class="i-barcode ">

Unknown end tag for &lt;/i&gt;

 Copyright © 2012
<a href="http://www.9xstudio.biz" target="_blank
" data-original-title="Bản quyền thuộc 9XSTUDIO "> 9XSTUDIO

Unknown end tag for &lt;/a&gt;






Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;


<td valign="top" width="1%">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="63%" class="column">
<div class="tabs clearfix" style="margin-left: 70px;">
<ul>
<li class="activetab">
<a href="link HTML 1"><span>Cánh

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 2"><span>Trang sức

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 3"><span>Nón

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 6"><span>Tóc

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 7"><span>Áo

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 4"><span>Mắt kiếng

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 8"><span>Khuôn mặt

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 5"><span>Vũ khí

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div class="main" style="display: block; margin-top: 1px;">
<div class="main-head">
<div class="h3">Item:
<i style="float: right" class="i-shopping-cart">

Unknown end tag for &lt;/i&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix dulieu">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<div class="main" style="display: block; margin-top: -4px;">
<div class="main-head">
<div class="h3">Mua Item:
<i style="float: right" class="i-shopping-cart">

Unknown end tag for &lt;/i&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix ">
Chọn kỹ trước khi mua, không mất tiền ráng chịu nhé <img src="http://r20.imgfast.net/users/2012/10/88/45/smiles/876762964.gif">
<span style="float: right; margin-bottom: 4px;">
<input value="Mua Hàng" class="muahang  btn btn-primary" type="submit" title="Xác nhận mua item"/>
<a href="/" title="Quay về trang chủ"><input value="Hủy"  class="btn btn-primary" type="submit" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;







Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


```



I love you Trang Shop nữ
Title **: Shop nữ
Do you wish to use your forum header and footer ? có
HTML source** :

```

<style>
#hi {
margin-bottom:-5px
}
.dulieu {
height: 397px;
overflow:auto
}
.tabs {
margin-bottom:-6px;
min-width:532px;
}
.tabs ul li.activetab a, .tabs ul li.activetab a:hover {
text-decoration:none;
border:1px solid #E8E8E8;
background-color:#fff;
border-bottom:1px solid #fff;
color:#333
}
.tabs ul li a {
font-size:.9em;
border:1px solid #E8E8E8;
text-decoration:none;
-webkit-border-radius:5px 5px 0 0;
-moz-border-radius:5px 5px 0 0;
border-radius:5px 5px 0 0;
padding: 4px 12px 4px 12px;
margin: 2px;
background:#FBFBFB
}
.tabs ul li {
float:left;
}
.tabs ul {
list-style:none
}
img:hover {
cursor:pointer;
border:2px solid #ccc!important;
}
img {
border:2px solid #FBFBFB!important;
}
img.chon {
cursor:pointer;
border:2px solid #ccc!important;
}
.field_uneditable {
float: right;
}


Unknown end tag for &lt;/style&gt;




<script type="text/javascript">

var rank = '';
$.post("/u" + $(".depgiaiketao a").attr("href").split('u=')[1], function (a) {
if (a.indexOf('—♥Administrator') > 0) {
rank = 4
} else if (a.indexOf('—♥smod') > 0) {
rank = 3
} else if (a.indexOf('—♥Mod') > 0) {
rank = 2
} else if (a.indexOf('—♥member tích cực') > 0) {
rank = 1
} else {
rank = 0
}
});
var banquyen = 'Bản quyền viết bởi notme. design bởi Super Ròm™ và được phát triển  thêm bới thpthoaiduca.frumvi.com ';
$(function () {
$(".points").load("/u" + $(".depgiaiketao a").attr("href").split('u=')[1] + " #field_id-13 .field_uneditable");
$(".dulieucu").load("/u" + $(".depgiaiketao a").attr("href").split('u=')[1] + " #field_id5 .field_uneditable", function () {
var b = $(this).text().split('|');
if (b[2] >= 0) {
$("input.mat").val(b[0]);
$("input.kinh").val(b[1]);
$("input.ao").val(b[2]);
$("input.toc").val(b[3]);
$("input.non").val(b[4]);
$("input.suc").val(b[5]);
$("input.canh").val(b[6]);
$("input.vkhi").val(b[7]);
thaydoi()
}
});
$(".muahang").click(function () {
if (500 <= Number($(".points").text())) {
var b = "Hóa đơn mua hàng của " + $(".c3username").text();
var e = "Ðã tính tiền";
$.post("/post?f=50&mode=newtopic", {
subject: b,
message: e,
post: 1
});
var f = $("input.mat").val() + '|' + $("input.kinh").val() + '|' + $("input.ao").val() + '|' + $("input.toc").val() + '|' + $("input.non").val() + '|' + $("input.suc").val() + '|' + $("input.canh").val() + '|' + $("input.vkhi").val() + '|' + rank;
var g = $(".depgiaiketao a").attr("href").split("u=")[1];
var c = "active=1&user=" + g,
d = document.getElementById("logout").href,
d = d.substring(d.indexOf("tid=") + 4, d.indexOf("&key")),
c = c + ('&tid=' + d + '&content=[["profile_field_13_5", "' + f + '"]]&id=1');
jQuery.post("/ajax_profile.forum?jsoncallback=jQuery1", c, function (a) {
0 < a.indexOf("1") ? (alert('Mua thành công'), location.href = 'http://' + location.host) : alert('Có lỗi vui lòng F5')
})
} else {
alert("Xin lỗi bạn không đủ tiền mua")
}
});
$(".macdinh").click(function () {
$("input.mat").val(1);
$("input.kinh").val(0);
$("input.ao").val(1);
$("input.toc").val(0);
$("input.non").val(0);
$("input.suc").val(0);
$("input.canh").val(0);
$("input.vkhi").val(0)
$(".main-contentr td").html('');
thaydoi()
});

function click() {
$("img").click(function () {
$("img").each(function () {
$(this).removeClass("chon")
});
$(this).addClass("chon");
$("input." + $(this).parent().attr("alt")).val($(this).attr("alt"));
$("#" + $(this).parent().attr("alt")).html('<img width="20px" src="' + $(this).attr("src") + '" alt="' + $(this).parent().attr("alt") + '"/>');
thaydoi()
})
}
function thaydoi() {
var a = $("input.mat").val();
var b = $("input.kinh").val();
var c = $("input.ao").val();
var d = $("input.toc").val();
var e = $("input.non").val();
var f = $("input.suc").val();
var g = $("input.canh").val();
var k = $("input.vkhi").val();
$(".chanssssss").html('<embed src="http://fanta6.net/forum/cngavst/avatar.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar" menu="true" allowfullscreen="false" allowscriptaccess="always" salign="" flashvars="wp=' + k + '&_face=equip/f/face/face' + a + '/&_hair=equip/f/hair/hair' + d + '/&_cloth=equip/f/cloth/cloth' + c + '/&_eff=equip/f/eff/eff' + f + '/&_hat=equip/f/head/head' + e + '/&_glass=equip/f/glass/glass' + b + '/&_hide1=2&_hide2=1&_hide3=1&_hidewings=&_wing=wing' + g + '&_cng=cng&_circle=circle&_suit=equip/f/suits/suits120/&lvl" type="application/x-shockwave-flash" height="180px" width="186px" align="middle">')
}
$(".dulieu").load("link HTML 1", function () {
click()
});
$(".tabs a").click(function () {
$(".tabs li").each(function () {
$(this).removeClass("activetab")
});
$(this).parent().addClass("activetab");
$(".dulieu").load($(this).attr("href") + " div", function () {
click()
});
return false
})
});


Unknown end tag for &lt;/script&gt;


<div class="dulieucu" style="display: none">

Unknown end tag for &lt;/div&gt;


<table width="100%" cellspacing="1" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td height="1" width="25%" class="column">

Unknown end tag for &lt;/td&gt;


<td width="1%">

Unknown end tag for &lt;/td&gt;


<td width="63%" class="column">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td colspan="3" width="100%">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<table width="100%" cellspacing="0" border="0" align="center" class="portal">
<tbody>
<tr>
<td valign="top" width="25%" class="column">
<div id="hi" class="clearfix">
<ul>
<li> 

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-eye-open"> 

Unknown end tag for &lt;/i&gt;

Xem trước |
<a class="macdinh" href="javascript:void(0);">Mặc định

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">
<input value="1" class="mat" type="hidden">
<input value="0" class="kinh" type="hidden">
<input value="1" class="ao" type="hidden">
<input value="0" class="toc" type="hidden">
<input value="0" class="non" type="hidden">
<input value="0" class="suc" type="hidden">
<input value="0" class="canh" type="hidden">
<input value="0" class="vkhi" type="hidden">
<div class="chanssssss">
<embed src="http://fanta6.net/forum/cngavst/avatar.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer"
play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar"
menu="true" allowfullscreen="false" allowscriptaccess="always" salign=""
flashvars="_face=equip/f/face/face1/&_hair=equip/f/hair/hair0/&_cloth=equip/f/cloth/cloth1/&_eff=equip/f/eff/eff0/&_hat=equip/f/head/head0/&_glass=equip/f/glass/glass0/&_hide1=2&_hide2=1&_hide3=1&_hidewings=&_wing=wing0&_circle=&_suit=equip/f/suits/suits102/"
type="application/x-shockwave-flash" height="180px" width="186px" align="middle">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-eye-close"> 

Unknown end tag for &lt;/i&gt;

Item đã chọn

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-contentr clearfix" style="background: #FBFBFB;">
<table width="100%">
<tbody>
<tr>
<td valign="top" width="25px" height="30px" id="mat">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="kinh">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="ao">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="toc">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="canh">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="suc">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="25px" height="30px" id="non">

Unknown end tag for &lt;/td&gt;

<td valign="top" width="25px" height="30px" id="vkhi">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-user">

Unknown end tag for &lt;/i&gt;

Thông tin cá nhân

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">Nick name:
<a class="c3userlink" href="#"><b class="c3username" style="float:right">

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;


<br />Số points:
<b class="points">

Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<div class="module main">
<div class="main-head">
<div class="h3">
<i class="i-bullhorn">

Unknown end tag for &lt;/i&gt;

Thông tin sản phẩm

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix">
Written by: <a href="http://www.9xstudio.biz/u500 " title="Các chức năng
được thực hiện bởi notme "><b>notme

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

 | <a href="http://www.9xstudio.biz/u1
" title="Giao diện bởi Super Ròm "><b>Ròm™

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<br> <a href="http://Thpthoaiduca.forumvi.com
" title="Phát triển thêm bởi Diễn đàn Thpt Hoài Đức A "><b>ThptHoaiDucA.Forumvi.Com

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/a&gt;

<br>
<i class="i-barcode ">

Unknown end tag for &lt;/i&gt;

 Copyright © 2012
<a href="http://www.9xstudio.biz" target="_blank
" data-original-title="Bản quyền thuộc 9XSTUDIO "> 9XSTUDIO

Unknown end tag for &lt;/a&gt;






Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/td&gt;


<td valign="top" width="1%">

Unknown end tag for &lt;/td&gt;


<td valign="top" width="63%" class="column">
<div class="tabs clearfix" style="margin-left: 70px;">
<ul>
<li class="activetab">
<a href="link HTML 1"><span>Cánh

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 2"><span>Trang sức

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 3"><span>Nón

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 9"><span>Tóc

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 10"><span>Áo

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 4"><span>Mắt kiếng

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 11"><span>Khuôn mặt

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="link HTML 5"><span>Vũ khí

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div class="main" style="display: block; margin-top: 1px;">
<div class="main-head">
<div class="h3">Item:
<i style="float: right" class="i-shopping-cart">

Unknown end tag for &lt;/i&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix dulieu">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




<div class="main" style="display: block; margin-top: -4px;">
<div class="main-head">
<div class="h3">Mua Item:
<i style="float: right" class="i-shopping-cart">

Unknown end tag for &lt;/i&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content clearfix ">
Chọn kỹ trước khi mua, không mất tiền ráng chịu nhé <img src="http://r20.imgfast.net/users/2012/10/88/45/smiles/876762964.gif">
<span style="float: right; margin-bottom: 4px;">
<input value="Mua Hàng" class="muahang  btn btn-primary" type="submit" title="Xác nhận mua item"/>
<a href="/" title="Quay về trang chủ"><input value="Hủy"  class="btn btn-primary" type="submit" />

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;







Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


```
- Thay link trang HTML Shop nam và Shop nữ đã tạo vào trong trang đăng nhập shop
- Thay link trang HTML tương ứng ở bước 6 vào trang Shop nam và Shop nữ ở bước 7
- Hãy để ý đoạn sau trong trang Shop nam và Shop nữ :

```

$.post("/u" + $(".depgiaiketao a").attr("href").split('u=')[1], function (a) {
if (a.indexOf('—♥Administrator') > 0) {
rank = 4
} else if (a.indexOf('—♥smod') > 0) {
rank = 3
} else if (a.indexOf('—♥Mod') > 0) {
rank = 2
} else if (a.indexOf('—♥member tích cực') > 0) {
rank = 1
} else {
rank = 0
}
```

đây là đoạn code để tự động setup vòng sáng cho nhân vật theo cấp bậc
các bạn hãy thay tên cấp bậc của forum mình vào các vị trí tương ứng

( như ở forum Hoài Đức A thì các cấp bậc được setup là —♥Administrator, —♥smod, —♥Mod, —♥member tích cực. còn các cấp bậc khác sẽ không có vòng sáng Idea )

- Tiếp tục các bạn tìm đoạn sau trong Shop nam và Shop nữ

```

field_id5
```

rồi thay bằng id tìm được ở buớc 3 nhé

- tìm tiếp đoạn sau

```

profile_field_13_5
```

rồi thay bằng id đã tìm được ở bước 2 Laughing
- tìm đoạn sau

```

if (500 <= Number($(".points").text())
```

sửa số 500 thành số points bạn mốn trừ tiền
- cuối cùng tìm đoạn

```

$.post("/post?f=50&mode=newtopic",

```
Thay số 50 bằng số thứ tự chuyên mục trong bước 1

I love you như vậy là đã xong rồi đó. các bạn vào link shop hoặc topic để kiểm tra xem được chưa nhé. nếu vẫn có lỗi các bạn làm lại lần lượt các bước.

> Note 1 do mình chưa fix được lỗi trừ tiền nên bạn nào fix được rồi thì chỉ cho mọi người biết nhé Laughing
> Note 2 Đợt này mình bận cho nên bạn nào làm được rồi hãy giúp đỡ các bạn chưa làm được , có thắc mắc gì thì cứ gửi thắc mắc theo topic sau http://thpthoaiduca.forumvi.com/t520-topic để mọi người giải đáp @



Chúc thành công ! I love you