Các bạn thay codes tooltip cũ trong css = codes này nha !
```

/* tooltip-------------------------------------------------------------*/

#dhtmlpointer, #dhtmltooltip
{
z-index: 999;
left: -300px; top:0px;
visibility: hidden;
position: absolute;
}
#dhtmltooltip {
background: #fff url(http://i1130.photobucket.com/albums/m536/liikeriv/2dua/alt2.gif) repeat;
padding: 2px;
opacity: 0.9;
border-radius: 6px;
border: 5px solid rgba(0, 0, 0, 0.5);
width: auto;
max-width: 340px;
width: expression( document.body.clientWidth > 340? "340px": "auto" );
text-align: left;
border-width: 15px 25px 25px 17px;
-moz-border-image: url(http://i1130.photobucket.com/albums/m536/liikeriv/ligervv.jpg) 15 25 25 17 repeat;
-webkit-border-image: url(http://i1130.photobucket.com/albums/m536/liikeriv/ligervv.jpg) 15 25 25 17 repeat;
-o-border-image: url(http://i1130.photobucket.com/albums/m536/liikeriv/ligervv.jpg) 15 25 25 17 repeat;
border-image: url(http://i1130.photobucket.com/albums/m536/liikeriv/ligervv.jpg) 15 25 25 17 repeat;
}
```
Nếu còn gì thiếu sót xin vlt chỉ bảo :k: