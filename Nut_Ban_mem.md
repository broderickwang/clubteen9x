Với đoạn code này bạn có thể nên nút Ban nhanh thành viên ở dưới thông tin cá nhân của thành viên trong bài viết.
Bước 1
phpBB3
**Admin Panel -> Modules -> Forum Widgets Management -> Create New ->
Title: Quick Ban
Use as table type: No
Name: Có thể để trống
Widget source:**```


<script type="text/javascript">$(function() {
var x = document.getElementsByClassName('postprofile');
for (i=0;i<x.length;i++) {
var y = x[i].getElementsByTagName('dt')[0].getElementsByTagName('a')[1];
var uid=y.href.substring(y.href.indexOf('/u')+2);
var ban = document.createElement('a');
ban.href="/modcp?mode=ban&user_id="+uid+"";
ban.innerHTML = "Ban this member";
x[i].appendChild(ban);
}
});

Unknown end tag for &lt;/script&gt;


```


phpBB2
**Admin Panel -> Modules -> Forum Widgets Management -> Create New ->
Title: Quick Ban
Use as table type: No
Name: Có thể để trống
Widget source:**

```

<script type="text/javascript">$(function() {
var a = document.getElementsByClassName('name');
var x = document.getElementsByClassName('poster-profile');
for (i=0;i<a.length;i++){
var g = a[i].getElementsByTagName('a')[1];
var uid = g.href.substring(g.href.indexOf('/u')+2);
var ban = document.createElement('a');
ban.href="/modcp?mode=ban&user_id="+uid+"";
ban.innerHTML = "Ban this member";
x[i].appendChild(ban);
}
});

Unknown end tag for &lt;/script&gt;



```

punBB
**Admin Panel -> Modules -> Forum Widgets Management -> Create New ->
Title: Quick Ban
Use as table type: No
Name: Có thể để trống
Widget source:**

```

<script type="text/javascript">$(function() {
var x = document.getElementsByClassName('username');
var prof = document.getElementsByClassName('user-info');
for (i=0;i<x.length;i++) {
var y = x[i].firstChild;
var uid=y.href.substring(y.href.indexOf('/u')+2);
var ban = document.createElement('a');
ban.href="/modcp?mode=ban&user_id="+uid+"";
ban.innerHTML = "Ban this member";
prof[i].appendChild(ban);
}
});

Unknown end tag for &lt;/script&gt;




```
Invision
**Admin Panel -> Modules -> Forum Widgets Management -> Create New ->
Title: Quick Ban
Use as table type: No
Name: Có thể để trống
Widget source:**```

<script type="text/javascript">$(function() {
var a = document.getElementsByClassName('postprofile-details');
for (i=0;i<a.length;i++){
var g = a[i].getElementsByTagName('a')[0];
var uid = g.href.substring(g.href.indexOf('/u')+2);
var ban = document.createElement('a');
ban.href="/modcp?mode=ban&user_id="+uid+"";
ban.innerHTML = "Ban this member";
a[i].appendChild(ban);
}
});

Unknown end tag for &lt;/script&gt;



```
Bước 2
1.Chọn Chấp nhận
2.Cho hiệu lực widget bạn vừa tạo.
3.Phân quyền chức năng này bằng cách nhấn vào hình
4.Chọn Administrators & Moderators,sau đó chấp nhận.