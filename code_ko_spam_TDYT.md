```



div.jGrowl-notification {

float:          right;

margin-left:    6px;

}

div.jGrowl {
padding:          10px;
z-index:          9999;
color:             #fff;
font-size:          11px;
}

/** Special IE6 Style Positioning **/
div.ie6 {
position:          absolute;
}

div.ie6.top-right {
right:             auto;
bottom:          auto;
left:             expres​sion( ( 0 - jGrowl.offsetWidth + ( document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth ) + ( ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ) ) + 'px' );
top:             expres​sion( ( 0 + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) ) + 'px' );
}

div.ie6.top-left {
left:             expres​sion( ( 0 + ( ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ) ) + 'px' );
top:             expres​sion( ( 0 + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) ) + 'px' );
}

div.ie6.bottom-right {
left:             expres​sion( ( 0 - jGrowl.offsetWidth + ( document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth ) + ( ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ) ) + 'px' );
top:             expres​sion( ( 0 - jGrowl.offsetHeight + ( document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) ) + 'px' );
}

div.ie6.bottom-left {
left:             expres​sion( ( 0 + ( ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ) ) + 'px' );
top:             expres​sion( ( 0 - jGrowl.offsetHeight + ( document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) ) + 'px' );
}

div.ie6.center {
left:             expres​sion( ( 0 + ( ignoreMe2 = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ) ) + 'px' );
top:             expres​sion( ( 0 + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ) ) + 'px' );
width:             100%;
}

/** Normal Style Positions **/
div.jGrowl {
position:         absolute;
}

body > div.jGrowl {
position:         fixed;
}

div.jGrowl.top-left {
left:             0px;
top:             0px;
}

div.jGrowl.top-right {
right:             0px;
top:             0px;
}

div.jGrowl.bottom-left {
left:             0px;
bottom:            0px;
}

div.jGrowl.bottom-right {
right:             0px;
bottom:          0px;
}

div.jGrowl.center {
top:             0px;
width:             50%;
left:             25%;
}

/** Cross Browser Styling **/
div.center div.jGrowl-notification, div.center div.jGrowl-closer {
margin-left:       auto;
margin-right:       auto;
}

div.jGrowl div.jGrowl-notification, div.jGrowl div.jGrowl-closer {
background-color:       #000;
opacity:             .85;
-ms-filter:          "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
filter:             progid:DXImageTransform.Microsoft.Alpha(Opacity=85);
zoom:                1;
width:                235px;
padding:             10px;
margin-top:          5px;
margin-bottom:          5px;
font-family:          Tahoma, Arial, Helvetica, sans-serif;
font-size:             1em;
text-align:          left;
display:             none;
-moz-border-radius:    5px;
-webkit-border-radius:   5px;
}

div.jGrowl div.jGrowl-notification {
min-height:          40px;
}

div.jGrowl div.jGrowl-notification div.jGrowl-header {
font-weight:          bold;
font-size:            .85em;
}

div.jGrowl div.jGrowl-notification div.jGrowl-close {
z-index:            99;
float:                right;
font-weight:          bold;
font-size:             1em;
cursor:               pointer;
}

div.jGrowl div.jGrowl-closer {
padding-top:          4px;
padding-bottom:       4px;
cursor:             pointer;
font-size:            .9em;
font-weight:          bold;
text-align:          center;
}

/** Hide jGrowl when printing **/
@media print {
div.jGrowl {
display:          none;
}
}```


bước 2: download file js ở phần Attach file giải nén rùi up lên host của bạn rồi lấy link chèn vàolink file Attach mới up lên host trong script



1.
```

<script type="text/javascript" src="link file Attach mới up lên host">

Unknown end tag for &lt;/script&gt;


```

bước 3: tạo 1 trang html với nội dung


```

(function($){

$(document).ready(function(){

$.jGrowl.defaults.closer = false;

if ( !$.browser.safari ) {

$.jGrowl.defaults.animateOpen = {

width: 'show'

};

$.jGrowl.defaults.animateClose = {

width: 'hide'

};

}

$.jGrowl("thông báo của bạn", { life:5000 });



});

})(jQuery);```
với phần thông báo của bạn là thông báo mà bạn muốn hiển thị và life:5000 là thời gian hiển thị thong báo tính bằng micro giây 5000 = 5 giây
save trang tml lại lấy link chèn vào script sau

2.
```

<script type="text/javascript" src="link trang html">

Unknown end tag for &lt;/script&gt;



```
bước 4:
vào overall\_header tìm
```



Unknown end tag for &lt;/head&gt;


```
chèn 2 script số 1 và số 2 ở trên vào trước thẻ
```



Unknown end tag for &lt;/head&gt;

```
.xong


bạn có thể dùng link file js giống của 4all nhưng đây là link lấy từ rum khác nên có thể die bất cứ lúc nào , muốn dùng lâu dài thì mọi ng up lên host để chắc ăn nhé link file js : http://cankimloai.com/forum/vd2j_jgrowl/jquery.jgrowl.js