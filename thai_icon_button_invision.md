![http://i44.servimg.com/u/f44/15/64/85/86/post_a10.png](http://i44.servimg.com/u/f44/15/64/85/86/post_a10.png)
Bước 1: Vào Display >> Color >> Css (trong css mình đã note lại cho các bạn dễ chỉnh)

```


/*Style của tất cả button*/
#text_edit .button2, #html_edit .button2 {
-moz-border-bottom-colors: none;
-moz-border-image: none;
-moz-border-left-colors: none;
-moz-border-right-colors: none;
-moz-border-top-colors: none;
background-color: #343434;
background-image: -moz-linear-gradient(#FFF, #A50100); /*Màu trên, màu dưới của button*/
border-color: #C8C8C8 #414141 #9D9C9C #666666;
border-radius: 4px 4px 4px 4px;
border-style: solid;
border-width: 0 1px;
box-shadow: 0 1px 0 0 #AAAAAA;
color: black; /*Màu chữ*/
cursor: pointer;
height: 20px; /*Chiều cao button*/
margin-left: -10px;
padding: 0 5px;
vertical-align: middle;
white-space: nowrap;
width: 50px !important; /*Chiều dài button*/
}
#text_edit .button2:hover, #html_edit .button2:hover, #text_editor_cmd_switchmode:hover {
background-color: #4E4E4E;
background-image: -moz-linear-gradient(#F4EBDA, #F4EBDA); /*Màu trên, màu dưới của button sau khi rê chuột vào*/
text-decoration: none;
}
/*Style của a/A*/
#text_editor_cmd_switchmode {
-moz-border-bottom-colors: none;
-moz-border-image: none;
-moz-border-left-colors: none;
-moz-border-right-colors: none;
-moz-border-top-colors: none;
background-color: #343434;
background-image: -moz-linear-gradient(#FFF, #A50100); /*Màu trên, màu dưới của button*/
border-color: #C8C8C8 #414141 #9D9C9C #666666;
border-radius: 4px 4px 4px 4px;
border-style: solid;
border-width: 0 1px;
box-shadow: 0 1px 0 0 #AAAAAA;
color: black; /*Màu chữ*/
cursor: pointer;
height: 20px;
margin-left: -10px;
padding: 0 5px;
vertical-align: middle;
white-space: nowrap;
width: 38px !important;
}
#addbbcode0, #addbbcode6, #servimg, #text_editor_cmd_bold, #text_editor_cmd_wrap0_quote, #wimageshack {
border-bottom-left-radius: 4px;
border-top-left-radius: 4px;
}
#addbbcode4, #addbbcode8, #addbbcode16, #text_editor_cmd_underline, #text_editor_cmd_wrap0_code, #bbcodewurl, #addbbcode34, #addbbcode46, button[title="Insert a line break"], #addbbcodetable, button[title="Video"], button[title="Font"] {
border-bottom-left-radius: 0 !important;
border-bottom-right-radius: 4px;
border-top-left-radius: 0 !important;
border-top-right-radius: 4px;
}
#addbbcode2, #addbbcode14, #text_editor_cmd_italic, #bbcodewimg, #addbbcode12, #addbbcode30, #addbbcode32, button[title="flash"], button[title="Color"] {
border-radius: 0 0 0 0 !important;
}
input.button2 {
border-radius: 4px 4px 4px 4px;
}
```

Bước 2: Nhét cái này vào 1 Widget (hoặc Mô tả, hoặc Annoucement, hoặc Generalities)

```

<script src="http://fmvi-group.googlecode.com/files/FMvi-replace-icon.js">

Unknown end tag for &lt;/script&gt;



```
Bước 3: Xong

Nguồn: http://www.fmvi.vn