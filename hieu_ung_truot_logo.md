demo:
![http://i45.servimg.com/u/f45/17/45/29/75/110.png](http://i45.servimg.com/u/f45/17/45/29/75/110.png)
![http://i45.servimg.com/u/f45/17/45/29/75/211.jpg](http://i45.servimg.com/u/f45/17/45/29/75/211.jpg)

Hiệu ứng này tạo nên 1 logo trượt trên forum ( khi bạn rê chuột vào logo của bạn nó sẽ trượt sang 1 bên )

Cách làm :


Chèn đoạn sau vào Css
phpBB2

```

#i_logo {
-moz-transition-duration: 1.5s;
-webkit-transition-duration: 1.5s;
-o-transition-duration: 1.5s;
}
#i_logo:hover{
margin-left:100px;
}

```
Punbb

```

#pun-logo {
-moz-transition-duration: 1.5s;
-webkit-transition-duration: 1.5s;
-o-transition-duration: 1.5s;
}
#pun-logo:hover{
margin-left:100px;
}

```
Phpbb3

```

#logo-desc {
-moz-transition-duration: 1.5s;
-webkit-transition-duration: 1.5s;
-o-transition-duration: 1.5s;
}
#logo-desc:hover{
margin-left:100px;
}
```

Invision

```

div#logostrip #logo {
-moz-transition-duration: 1.5s;
-webkit-transition-duration: 1.5s;
-o-transition-duration: 1.5s;
}
div#logostrip:hover #logo:hover {
margin-left:100px;
}



```