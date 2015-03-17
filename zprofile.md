Giới thiệu: Upgrade từ mod WallCSS viết cho Chinhphuc. Ai nói ăn cắp = ban .
Tác giả: Zero
Quyền lợi: Bạn được quyền sử dụng miễn phí mod nếu bạn tôn trọng công sức của tác giả

Chức năng:
- Tuỳ chỉnh giao diện của profile bằng css và html
- Giao diện đẹp, thân thiện, và dễ sử dụng
- Cập nhật css và html không chuyển trang (live editing)
- Khoá javascript cho html vì lý do bảo mật và an toàn
- Xoá quảng cáo cho member

Chức năng sắp tới:
- Không chuyển trang khi xem trang khác của profile
- Hỗ trợ Invision, phpBB3 và skin FMVI
- Rút gọn js

Demo:
![http://i75.servimg.com/u/f75/16/28/30/49/firesh10.png](http://i75.servimg.com/u/f75/16/28/30/49/firesh10.png)


Hướng dẫn: (Chỉ hỗ trợ cho punbb mặc định profile chưa chỉnh sửa, mấy phiên bản khác chưa có thời gian)
- ACP -> General -> Forum -> Configuration -> Site description: <span>
- ACP -> Users & Groups -> Profiles -> Tạo 2 fields mới -> Tên gì cũng được, Type: Text zone, Necessarily filled ?: No, Display: Profile, Who can modify the profile field value ?: Member himself, Default content:<br>
Cho CSS<br>
<br>
<pre><code><br>
body{background-color:#F1F1F1;font-family:'lucida grande',tahoma,verdana,arial,sans-serif}<br>
#tabs li a,.main-head,#pun-intro{background-color:#312A1E!important;font:15px/20px'Open Sans Condensed',sans-serif;color:#F0F0F0;text-align:center;font-weight:bold!important;border:0!important}#pun-intro a,#pun-head a{color:#F0F0F0!important;text-decoration:none}#tabs li a{padding:10px!important;margin-left:-4px;background:url("http://2.bp.blogspot.com/-IfiIwt0iR5c/UL4zzUjtGyI/AAAAAAAABho/rlYYH1q2iCY/s1600/sec-sep.gif")no-repeat scroll left top transparent}#tabs{top:-32px}.pun{background-color:#FAFAFA;width:auto;padding:30px}#pun-intro{padding:5px;display:inline;border-bottom-right-radius:4px;left:0px;position:absolute;top:0px}#pun-head{background-color:#227264;margin-top:45px;margin-bottom:15px;padding:10px}#profile-advanced-details{margin-top:80px}#profile-advanced-right{margin-top:100px}#profile-advanced-details a:link,#profile-advanced-right a:link{color:#626262!important;text-decoration:none;transition:color 0.2s ease-in-out 0s}#profile-advanced-details a:hover,#profile-advanced-right a:hover{color:#8F8F8F!important}.field_uneditable{border:1px solid#DDDDDD;max-height:60px;overflow:auto;padding:5px}#profile-advanced-details textarea{resize:none}#copyright a{color:#000;text-decoration:none}<br>
<br>
</code></pre>
Cho HTML<br>
<br>
<pre><code><br>
&lt;font color="white"&gt;&lt;center&gt;&lt;b&gt;Thank you for using &lt;a href="www.fmvi.vn/t880-"&gt;zProfile<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
<br>
&lt;br&gt;© 2013 &lt;a href="mailto:mark.polo.nguyen@gmail.com"&gt;Mark Nguyen<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
&lt;a href="http://www.fmvi.vn/u27"&gt; (Zero)<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
. All rights reserved<br>
<br>
Unknown end tag for &lt;/b&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/center&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/font&gt;<br>
<br>
<br>
<br>
</code></pre>
- Bước này quan trọng -> Rê chuột vào -> Trình duyệt sẽ hiện lên url của cái đó nằm trong tooltip -> Nhớ số nằm sau &id= cho 2 cái fields vừa tạo<br>
- ACP -> Modules -> Create a new javascript -> Tên gì cũng được, Placement: In all the pages<br>
<br>
<pre><code><br>
var htmlID = '3';<br>
var cssID = '2';<br>
var guest = 'yes'; // yes or no<br>
var cssDefault = 'body{background-color:#F1F1F1;font-family:\'lucida grande\',tahoma,verdana,arial,sans-serif}#tabs li a,.main-head,#pun-intro{background-color:#312A1E!important;font:15px/20px\'Open Sans Condensed\',sans-serif;color:#F0F0F0;text-align:center;font-weight:bold!important;border:0!important}#pun-intro a,#pun-head a{color:#F0F0F0!important;text-decoration:none}#tabs li a{padding:10px!important;margin-left:-4px;background:url("http://2.bp.blogspot.com/-IfiIwt0iR5c/UL4zzUjtGyI/AAAAAAAABho/rlYYH1q2iCY/s1600/sec-sep.gif")no-repeat scroll left top transparent}#tabs{top:-32px}.pun{background-color:#FAFAFA;width:auto;padding:30px}#pun-intro{padding:5px;display:inline;border-bottom-right-radius:4px;left:0px;position:absolute;top:0px}#pun-head{background-color:#227264;margin-top:45px;margin-bottom:15px;padding:10px}#profile-advanced-details{margin-top:80px}#profile-advanced-right{margin-top:100px}#profile-advanced-details a:link,#profile-advanced-right a:link{color:#626262!important;text-decoration:none;transition:color 0.2s ease-in-out 0s}#profile-advanced-details a:hover,#profile-advanced-right a:hover{color:#8F8F8F!important}.field_uneditable{border:1px solid#DDDDDD;max-height:60px;overflow:auto;padding:5px}#profile-advanced-details textarea{resize:none}';<br>
////////////////////////////////////////////////////////////<br>
$(document).ready(function () {<br>
var x = document.getElementById('unl');<br>
uid = x.childNodes[0].href.substring(x.childNodes[0].href.indexOf('&amp;u=') + 3);<br>
uname = x.childNodes[0].innerHTML;<br>
if (document.getElementsByTagName('title')[0].childNodes[0].nodeValue == 'Profile - ' + uname) {<br>
if (guest == 'yes' &amp;&amp; uid == '-1') {<br>
alert('Please login to use this feature');<br>
location.href = 'http://' + location.host<br>
}<br>
$('body').append('&lt;span id="copyright"&gt;&lt;b&gt;&lt;a href="www.fmvi.vn/t880-"&gt;zProfile<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
 © 2013 &lt;a href="mailto:mark.polo.nguyen@gmail.com"&gt;Mark Nguyen<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
&lt;a href="http://www.fmvi.vn/u27"&gt; (Zero)<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
. All rights reserved<br>
<br>
Unknown end tag for &lt;/b&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
');<br>
$('#pun-head &gt; *, #pun-intro &gt; *, #pun-foot, #pun-visit').remove();<br>
$('#pun-intro').html('&lt;a href="http://' + location.host + '/forum"&gt;Back to forum<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
');<br>
if (uid != '-1') {<br>
$('#profile-advanced-right .module.main:nth-child(2)').remove();<br>
}<br>
$('#profile-advanced-details .main-head').first().remove();<br>
$('#profile-advanced-details textarea').attr({<br>
'cols': '95',<br>
'rows': '4'<br>
});<br>
}<br>
setInterval("$(function () {$('#field_id'+cssID+' img.ajax-profil_valid').attr('onclick','zprofile.css()');$('#field_id'+htmlID+' img.ajax-profil_valid').attr('onclick','zprofile.html()')});", 1000);<br>
$('head').append('&lt;style&gt;' + $("#field_id" + cssID + " .field_uneditable").text() + '<br>
<br>
Unknown end tag for &lt;/style&gt;<br>
<br>
');<br>
$('#profile_field_2_' + cssID).after('&lt;a style="cursor:pointer" onclick="zprofile.default()"&gt;Default<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
');<br>
$('#pun-head').append($('#field_id' + htmlID + ' .field_uneditable').text());<br>
if (uname != $('#profile-advanced-right .h3 span').first().text()) {<br>
$('#field_id' + htmlID + ', #field_id' + cssID).next().remove();<br>
$('#field_id' + htmlID + ', #field_id' + cssID).remove();<br>
}<br>
});<br>
$(window).keyup(function () {<br>
var y = document.getElementById('profile_field_2_' + htmlID).value;<br>
if (y.indexOf('&lt;script&gt;') &gt;= 0 || y.indexOf('<br>
<br>
Unknown end tag for &lt;/script&gt;<br>
<br>
') &gt;= 0) {<br>
alert('No script allowed');<br>
$('#profile_field_2_' + htmlID).val(y.replace('&lt;script&gt;', '').replace('<br>
<br>
Unknown end tag for &lt;/script&gt;<br>
<br>
', ''));<br>
}<br>
});<br>
var zprofile = {<br>
css: function () {<br>
$('head style').html($('#profile_field_2_' + cssID).val())<br>
},<br>
html: function () {<br>
$('#pun-head').html($('#profile_field_2_' + htmlID).val())<br>
},<br>
default: function () {<br>
$('#profile_field_2_' + cssID).val(cssDefault);<br>
}<br>
}<br>
</code></pre>

- Thay giá trị của var htmlID và var cssID trong javascript bằng 2 số mà mình kêu nhớ ở bước trên.<br>
Giá trị var guest là dùng để cho khách viếng thăm xem profile hay không<br>
Giá trị var cssDefault là css mặc định của profile. Button này sẽ hiện lên khi chỉnh sửa css. Dành cho mấy bạn mà thích 'phá' mà quên backup