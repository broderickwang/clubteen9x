![http://img543.imageshack.us/img543/3405/demoview.png](http://img543.imageshack.us/img543/3405/demoview.png)
Có chức năng hiển thị số người đang xem diễn đàn.
Ngày trước đã từng có code có chức năng như thế này nhưng dùng radom hiển thị số ngẫu nhiên nên không chính xác và hiệu quả
Với tip này sẽ hiển thị số người đang xem chuyên mục , đồng thời xem được cả tên người đó nữa
Phiên bản PunBB
Phân tích : Lấy từ /viewonline, sử dụng hàm đếm count và vị trí
Hướng dẫn : Đã ẩn
Bước 1 : Cho code sau vào Javascript và chọn ô : In the homepage


```

$(function() {
$.get('/viewonline',
function(tviews) {
for  (
var tview = $('.main-content tbody tr',
tviews.substring(tviews.indexOf('<body'),
tviews.indexOf('

Unknown end tag for &lt;/body&gt;

'))),
tnum = 0,
tinfor = {},
thairows;
(thairows = tview[tnum++]); ) {
var tclass = thairows.getElementsByTagName('td'),
username = tclass[0].innerHTML.replace(/<.*?>/g, ''),
tadd = tclass[2].getElementsByTagName('a')[0];
if(tadd&& tadd.href.match(/\/f[0-9]+-/)) {
var fcnt = tadd.href.match(/\/f[0-9]+-/)[0];
if(fcnt in tinfor) {
tinfor[fcnt].count++;
tinfor[fcnt].users.push(username);
}
else {
tinfor[fcnt] = {count : 1, users : [username] };
}
}
}
for(var o= 0, place = $('#main-content  .forumtitle'), m; (
m = place[o++]); ) {
var f = m.href.match(/\/f[0-9]+-/);
m.parentNode.innerHTML += (f && f in tinfor) ? '<span class="t-views" title="' + tinfor[f].users.join(', ') + '">(' + tinfor[f].count + ' người xem)

Unknown end tag for &lt;/span&gt;

' : '<span class="t-views">(0 người xem)

Unknown end tag for &lt;/span&gt;

';
}
});
});


```

Bước 2 : Cho vô CSS


```

.t-views {cursor: pointer; }
.t-views {
margin-left: 6px;
color: #000;
font-style: italic;
font-weight: normal;
}

```

Thế là đã xong
Vui lòng ghi