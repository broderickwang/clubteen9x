Chuẩn bị 4 tấm image1.jpg, image2.jpg, image3.jpg, và image4.jpg.
Trong 1 html page có dòng này

```


<img name = "my" src = "images/image1.jpg" />
```

Sau đó ném js này vô page html đó với nội dung sau:

```

<script type= "text/javascript" >
window.onload = function (){
setTimeout( "switchImage()" , 3000);
}
var current = 1;
var numIMG = 4;
function switchImage(){
current++;
document.images[ 'my' ].src = 'images/image' + current + '.jpg' ;
if (current < numIMG){
setTimeout( "switchImage()" , 3000);
}
}


Unknown end tag for &lt;/script&gt;


```

Xong. Nó rất đơn giản. Bạn có thể sáng tạo thêm.