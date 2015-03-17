Chèn đoạn code vào cuối cùng vewtopic

```

<style>
#triangles{
margin:6em;
width:0; /*set dimensions of DIV to 0 so its borders collapse and touch one
another*/
height:0;
border-color: red blue green yellow; /*top, right, bottom, and left border*/
border-style: solid;
border-width: 50px; /*width of each border*/
}
.uparrowdiv, .downarrowdiv, .leftarrowdiv, .rightarrowdiv{
width:95%;
min-height:100%;
background: #ffffff;
background-image: url(http://i16.servimg.com/u/f16/17/97/23/90/mhp10.png);
background-position: top right;
background-repeat: no-repeat;
border:2px solid #3dbbff;
-moz-border-radius:8px;
box-shadow: 0 0 1em #b6b6b6;
-webkit-border-radius:8px;
position: relative;
}

.uparrowdiv:after{
content:'';
display:block;
position:absolute;
top:-20px;
left:30px;
width:0;
height:0;
border-color: transparent transparent #3dbbff transparent;
border-style: solid;
border-width: 10px;
}
```


Tiếp tục tìm trong vewtopic đoạn sau

```

{postrow.displayed.MESSAGE}

```

Thay bằng đoạn sau

```

<div class="uparrowdiv" style="padding: 10px;">
{postrow.displayed.MESSAGE}


Unknown end tag for &lt;/div&gt;



```

Demo ol : http://www.hanhphuc.mobi/t35-topic

con đây là hình ảnh con dấu :