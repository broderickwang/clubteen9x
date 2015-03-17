demo: dê chuột vào avata trong demo và xem
http://www.xaydungthanhhoa.com/t986-topic#2012
vao viewtopic body tìm code
```

{postrow.displayed.POSTER_AVATAR}
```
thay bằng code
```

<div id="Avatar">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/div&gt;


```

bước 2 vào css thêm code

```

/* Xoay avata*/
#Avatar {
-webkit-transition: -webkit-transform 1s,opacity 1s,background 1s,width 1s,height 1s;
-o-transition-property: width,height,-o-transform,background,font-size,opacity;
-o-transition-duration: 1s,1s,1s,1s,1s,1s;
-moz-transition-property: width,height,-o-transform,background,font-size,opacity;
-moz-transition-duration: 1s,1s,1s,1s,1s,1s;
transition-property: width,height,transform,background,font-size,opacity;
transition-duration: 1s,1s,1s,1s,1s,1s;
opacity: 0.5;
}
#Avatar:hover {
-moz-transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-o-transform: rotate(360deg);
transform: rotate(360deg);
opacity: 1;
}
/* Xoay avata */

```
xong rồi đấy: ai ủng hộ thì like hộ cái. và nhớ ghi nguồn vào nếu bê đi đâu nhé
http://www.xaydungthanhhoa.com/