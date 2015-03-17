Demo:


![http://i48.servimg.com/u/f48/16/58/45/96/611.jpg](http://i48.servimg.com/u/f48/16/58/45/96/611.jpg)


Bước 1 : Vào Vew\_Topic\_body tìm đoạn code sau

```

{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}

```

Sau đó thay thế code trên = code sau

```

<div class=chupy>
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}


Unknown end tag for &lt;/div&gt;



```


Bước 2 : Vào Css thêm code này vào :

```

/* đóng khung trong vew */
.chupy {
margin-left: 18px;
background-color: #ffffff;
border: 1px solid #dfdfdf;
color: #3a3a3a;
margin-top: 2px;
padding-bottom: 3px;
padding-left: 10px;
padding-right: 3px;
padding-top: 3px;
text-align: left;
width: 154px;
}

```