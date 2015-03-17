![http://i15.servimg.com/u/f15/13/82/55/09/color_10.png](http://i15.servimg.com/u/f15/13/82/55/09/color_10.png)
Bước 1 : Vào Vew\_Topic\_body tìm đoạn code sau

```

{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}

```

Sau đó thay thế code trên = code sau

```

<div class=khung>
{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}{postrow.displayed.profile_field.SEPARATOR}


Unknown end tag for &lt;/div&gt;


```


Bước 2 : Vào Css thêm code này vào :

```

/* đóng khung trong vew */
.khung {
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


Nguồn: http://www.hotrofm.com/t895-topic#ixzz2EvtqUwos
Copyright: hotrofm - bùng cháy đam mê