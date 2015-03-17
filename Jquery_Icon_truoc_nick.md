đã nói rồi , tự động , xuất hiện mọi nơi Cười nhe răng

đây là file js :    http://a1tg3.googlecode.com/files/test3.js

mở ra :
```


function changeImg(){
x = document.getElementsByTagName('span')
for(i=0;i<x.length;i++){
if ((x[i].style.color=="rgb(250, 0, 0)")||(x[i].style.color=="#fa0000")) {newHTML = "<img src='http://s1036.photobucket.com/albums/a449/a1tinhgia3/admin.gif'>" + x[i].innerHTML}

else if((x[i].style.color=='rgb(255, 102, 0)')||(x[i].style.color=='#ff6600')) {newHTML = "<img src='http://s1036.photobucket.com/albums/a449/a1tinhgia3/smod.gif'>" + x[i].innerHTML}

else {newHTML= x[i].innerHTML}
x[i].innerHTML = newHTML;
}
}
window.onload = changeImg();
```

Cách làm:
Trích dẫn:

nếu forum nào muốn mem cũng có rank icon thì phải cho mem vào 1 nhóm
Để tạo nhóm member thì các bạn vào QLND-QLN ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png)  quản lý nhóm ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png)  tạo nhóm mới
làm như hình

![http://a.imageshack.us/img828/2703/82637703.jpg](http://a.imageshack.us/img828/2703/82637703.jpg)

Sau đó
hãy xác định mã màu HEX của từng nhóm

![http://a.imageshack.us/img225/9091/51024140.jpg](http://a.imageshack.us/img225/9091/51024140.jpg)

rồi các bạn chuyển mã màu của từng nhóm về mã RGB lưu vào 1 chỗ nhé (notepad) (ai biết r thì thôi)
mình thì dùng PS
![http://a.imageshack.us/img594/6789/65884903.png](http://a.imageshack.us/img594/6789/65884903.png)
VD:
rgb(255, 0, 0) ~ #ff0000 -> admin
rgb(0, 200, 14) ~ #00c80e -> mod
. . .
forum bao nhiêu nhóm thống kê như trên hết

Trích dẫn:

sau đó thay lên ở những vị trí
```


(x[i].style.color=="rgb(255, 102, 0)")||(x[i].style.color=="#ff6600")
```
nhìn là thấy r nhỉ hehe (lưu ý mã hex khi thay lên trên phải là chữ thường VD: "#ff0000" không được dùng "#FF0000"). bên cạnh là link ảnh nhóm nhé

Muốn thêm nhóm nào thì các bạn thêm 1 đoạn code như thê này
```

else if(x[y].style.color=="rgb(163, 16, 116)") {newHTML = "<img src='http://i795.photobucket.com/albums/yy235/tg3sv/vip3.gif'>" + x[y].innerHTML}
```

sau khi xong up lên host , lấy link chèn
rồi chèn vào overall\_footer


1 đoạn jQ mới cho Icon trước nick


Cái này cho những bạn đã từng làm được và cố gắng làm nhưng không được ở topic Muiten .../t12258-topic
Mình cũng k có thời gian để giải thích thêm nữa Roll eye
đây là đoạn jQ:
```

$('span').each(function() {
var iconr = $(this);
var color = iconr.css('color');
if (color == 'rgb(250, 0, 0)' || color == '#fa0000') {
iconr.before("<img src=/users/2211/12/43/96/album/admin10.gif> ");
}
//thêm nhóm có icon bằng cách paste dưới đây
})

```
thêm nhóm = cách thêm 1 đoạn như thế này

```

if (color == 'rgb(250, 0, 0)' || color == '#fa0000') {
iconr.before("<img src=/users/2211/12/43/96/album/admin10.gif> ");
}
```