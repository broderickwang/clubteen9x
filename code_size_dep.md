chào các bạn chắc cái này ai cũng biết mình sẽ share cho các bạn 1 doạn code js giúp thêm xem ảnh được dẹp hơn.
demo:

```

http://camxucfan9x.one-forum.net/t679-topic#1247
```


```
var CopyrightNotice='Better Image Resizer script for Forumotion Boards. Copyright © by LGforum. All Rights Reserved. Use and  modification of this script is not allowed without this entire copyright notice in the original, copied, or modified script. No distribution without consent.';var img_maxHeight=400;var img_maxWidth=400;function initImgSort(img){if(img.height>img_maxHeight||img.width>img_maxWidth){img.style.maxHeight=img_maxHeight+"px";img.style.maxWidth=img_maxWidth+"px";var holder=document.createElement('DIV');holder.className="LGimageBox";holder.style.width=img.width+20+'px';holder.innerHTML='<a onclick="showFullImg(this,this.parentNode)">Xem kích cỡ 600x600

Unknown end tag for &lt;/a&gt;

';img.parentNode.insertBefore(holder,img);holder.appendChild(img)}}function showFullImg(elem,holder){var img=elem.nextSibling;if(img.style.maxWidth==img_maxWidth+"px"){img.style.maxWidth="";img.style.maxHeight="";elem.innerHTML=" về kích cỡ 400x400 "}else{img.style.maxWidth=img_maxWidth+"px";img.style.maxHeight=img_maxHeight+"px";elem.innerHTML="Xem kích cỡ 600x600"}holder.style.width=img.width+20+'px'}$(function(){var post=$('.post .entry-content');for(var i=0,l=post.length;i<l;i++){var imgs=post[i].getElementsByTagName('img');for(var k=0;k<imgs.length;k++){initImgSort(imgs[k])}}});```


Mr.Logic