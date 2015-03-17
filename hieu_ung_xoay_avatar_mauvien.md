![http://i32.servimg.com/u/f32/17/72/94/89/avatar10.png](http://i32.servimg.com/u/f32/17/72/94/89/avatar10.png)
Hướng dẫn:
Bước 1 :
Vào viewtopic\_body tìm :

```

{postrow.displayed.POSTER_AVATAR}


```
thay bằng

```

<span class="cubimtq">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/span&gt;



```

Bước 2 :
cho đoạn code này vào cuối CSS

```

.cubimtq img{
max-width:100px;
-webkit-transition:all 0.5s ease;
-moz-transition:all 0.5s ease;transition:all 0.5s ease;
background-color: #fff;
border: 1px solid #a9a9a9;
display: block;

padding: 4px;
position: relative;
display:inline;
box-shadow: 0 0 6px #666;

}
.cubimtq img:hover {
-moz-transform: scale(1.2) rotate(-350deg);
-webkit-transform: scale(1.2) rotate(-350deg);
-o-transform: scale(1.2) rotate(-350deg);
-ms-transform: scale(1.2) rotate(-350deg);
transform: scale(1.2) rotate(-350deg);
-webkit-box-shadow: 0 0 20px rgba(255,0,0,.4), inset 0 0 20px rgba(255,0,0,.4);
-moz-box-shadow: 0 0 20px rgba(255,0,0,.4), inset 0 0 20px rgba(255,0,0,.4);
}
```


Xong lun.hehe