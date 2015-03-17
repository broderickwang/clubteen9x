Uư điểm : Nhẹ gọn , style đẹp

Khuyết điểm : Khi full size nếu khung forum nhỏ có thể bị mất hình

```


var CopyrightNotice='Better Image Resizer script for Forumotion Boards. Copyright © by LGforum. All Rights Reserved. Use and  modification of this script is not allowed without this entire copyright notice in the original, copied, or modified script. No distribution without consent.';
var img_maxHeight=400;
var img_maxWidth=400;
function initImgSort(img){
if(img.height > img_maxHeight || img.width > img_maxWidth) {
img.style.maxHeight=img_maxHeight+"px"; img.style.maxWidth=img_maxWidth+"px";
var holder=document.createElement('DIV'); holder.className="LGimageBox";
holder.style.width=img.width+20+'px';
holder.innerHTML='<a onclick="showFullImg(this,this.parentNode)">Show Full Size

Unknown end tag for &lt;/a&gt;

';
img.parentNode.insertBefore(holder,img); holder.appendChild(img);
}
}
function showFullImg(elem,holder){
var img=elem.nextSibling;
if (img.style.maxWidth == img_maxWidth+"px") {
img.style.maxWidth=""; img.style.maxHeight="";
elem.innerHTML="Return to Normal";
}
else { img.style.maxWidth=img_maxWidth+"px";  img.style.maxHeight=img_maxHeight+"px"; elem.innerHTML="Show Full Size"; }
holder.style.width=img.width+20+'px';
}
$(function(){
var post=$('.post .post-entry');
for(var i=0, l=post.length; i<l; i++){
var imgs=post[i].getElementsByTagName('img');
for(var k=0;k<imgs.length;k++){ initImgSort(imgs[k]) }
}
});

```

Css :

```


.LGimageBox {
background: #e1ebf2;
border: 1px solid #c05;
padding: 5px;
box-shadow: 3px 3px 3px #888;
border-radius: 4px;
margin: 10px;
}
.LGimageBox img {
display: block;
margin: 2px auto;
}
.LGimageBox a {
cursor: pointer;
color: #105289;
}
.LGimageBox a:hover {
color: #c05;
}
```


Ai biết dùng rồi thì thôi không biết thì reply xem hướng dẫn Huýt sáo

> Javascript : Vào Moduels > Javascript code management > tạo file javascrip > Title: Better Imge Ruby
> Placement : In the Topic
> Content**: Đoạn thứ nhất**

> Vào Displays > COlor > css stylesheet > Past đoạn css vào



Write : LG