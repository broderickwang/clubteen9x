Mod
như tiêu đề hiệu ứng này giúp chúng ta ẩn khung Quick reply và khi rê chuột vào thì nó lại hiện ra :>
demo :
Xem 2 bức ảnh để thấy rõ cười nhăn răng

![http://i43.servimg.com/u/f43/15/93/33/76/116.png](http://i43.servimg.com/u/f43/15/93/33/76/116.png)



![http://i43.servimg.com/u/f43/15/93/33/76/213.png](http://i43.servimg.com/u/f43/15/93/33/76/213.png)

Cho đoạn code sau vào đầu Css :


```

form#quick_reply #textarea_content textarea#text_editor_textarea, form#quick_reply #textarea_content iframe#text_editor_iframe {
color: #666;
resize: none;
overflow: auto;
background-color: #3B9205 !important;
border: transparent !important;
background-image: -moz-linear-gradient(top,#3B9205 0%,#2D8700 100%);
background-image: -ms-linear-gradient(top,#3B9205 0%,#2D8700 100%);
background-image: -o-linear-gradient(top,#3B9205 0%,#2D8700 100%);
background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#3B9205),color-stop(100%,#2D8700));
background-image: -webkit-linear-gradient(top,#3B9205 0%,#2D8700 100%);
background-image: linear-gradient(top,#3B9205 0%,#2D8700 100%);
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#3B9205,EndColorStr=#2D8700);
-moz-border-radius-topleft: 0;
}
#quick_reply {
padding: 2px;
}
#quick_reply:focus, #quick_reply:hover, #quick_reply:active {
height: 300px;
-moz-transition: all 0.518s;
-ms-transition: all 0.518s;
-o-transtion: all 0.518s;
-webkit-transition: all 0.518s;
transition: all 0.518s;
}
#quick_reply {
height: 30px;
-moz-transition: all 0.518s;
-ms-transition: all 0.518s;
-o-transtion: all 0.518s;
-webkit-transition: all 0.518s;
transition: all 0.518s;
}





#quick_reply {
z-index: 999;
border: 1px solid #CCC;
overflow: hidden;
-moz-border-radius: 3px;
-webkit-border-radius: 3px;
border-radius: 3px;
background-image: -moz-linear-gradient(top,#6AE51D 0%,#43AF00 100%);
background-image: -ms-linear-gradient(top,#6AE51D 0%,#43AF00 100%);
background-image: -o-linear-gradient(top,#6AE51D 0%,#43AF00 100%);
background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#6AE51D),color-stop(100%,#43AF00));
background-image: -webkit-linear-gradient(top,#6AE51D 0%,#43AF00 100%);
background-image: linear-gradient(top,#6AE51D 0%,#43AF00 100%);
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#6AE51D,EndColorStr=#43AF00);
-moz-border-radius-topleft: 0;
-webkit-border-top-left-radius: 0;
border-top-left-radius: 0;
-moz-box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
-ms-box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
-o-box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
-webkit-box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
}




form#quick_reply #textarea_content textarea#text_editor_textarea:focus{
background-image: -moz-linear-gradient(top,#ffffff 0%,#ffffff 100%);
background-image: -ms-linear-gradient(top,#ffffff 0%,#ffffff 100%);
background-image: -o-linear-gradient(top,#ffffff 0%,#ffffff 100%);
background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#ffffff),color-stop(100%,#ffffff));
background-image: -webkit-linear-gradient(top,#ffffff 0%,#ffffff 100%);
background-image: linear-gradient(top,#ffffff 0%,#ffffff 100%);
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr=#ffffff,EndColorStr=#ffffff);
}
```



Chú ý : các bạn có thể chỉnh sửa lại màu cho phù hợp với forum bạn cười nhăn răng
Css này dùng được trên cả 4 phiên bản của forumotion
thấy hay thì Thank nhá cười nhăn răng