Demo :

![http://i48.servimg.com/u/f48/16/58/45/96/1212.jpg](http://i48.servimg.com/u/f48/16/58/45/96/1212.jpg)
Ghi chú :
Khi có tin nhắn mới đến , nó sẽ hiển thị ngay trên code tin nhắn của forum số tin nhắn màu đỏ cười nhăn răng
Bạn nào dùng Menu tự tạo mà muốn hiển thi tin nhắn như trên thì làm như sau

```

<a href="{U_PRIVATEMSGS}" onmouseover="mouseoversound.playclip()" onclick="clicksound.playclip()">{PRIVATE_MESSAGE_INFO}

Unknown end tag for &lt;/a&gt;


```

Bên trên là code hiển thị tin nhắn của Menu tự tạo



Cách làm :


Bước 1 : cho cái này vào Css


```


/* Thông báo tin nhắn mới */
[data-counter]:after {
background-color: #FF6969;
background-image: -webkit-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: -moz-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: -o-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: -ms-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: linear-gradient(#FF6969 0%, #ff0000 100%);
content: attr(data-counter);
position: absolute;
padding: 0px 1px;
border: 1px solid #D83722;
border-bottom: 1px solid #C0311E;
border-top: 1px solid #E23923;
box-shadow: 0 1px 2px rgba(0,0,0,.5), 0 1px 4px rgba(0,0,0,.4), 0 0 1px rgba(0,0,0,.7) inset, 0 10px 0px rgba(255,255,255,.11) inset;
background-clip: padding-box;
font:bold 10px "Helvetica Neue", sans-serif;
color: white;
text-decoration: none;
text-shadow: 0 -1px 0 rgba(0,0,0,.6);
margin-left: 0px;
margin-top: -10px;
}
```

Bước 2 :
Vào : overall\_footer\_begin cho code sau vào cuối nó

```

<script type="text/javascript" async="" src="http://chupy.googlecode.com/files/Cntt-k3%20tinnhan.js">

Unknown end tag for &lt;/script&gt;


```


Thế là ok rồi
Style thứ 2
Demo :
![http://i48.servimg.com/u/f48/16/58/45/96/1310.jpg](http://i48.servimg.com/u/f48/16/58/45/96/1310.jpg)



Thay css bên trên = css sau

```


/* Thông báo tin nhắn mới */
[data-counter]:after {
background-color: #FF6969;
background-image: -webkit-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: -moz-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: -o-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: -ms-linear-gradient(#FF6969 0%, #ff0000 100%);
background-image: linear-gradient(#FF6969 0%, #ff0000 100%);
content: attr(data-counter);
position: absolute;
padding: 2px 6px;
border: 2px solid white;
border-radius:100px;
box-shadow: 0 1px 2px rgba(0,0,0,.5), 0 1px 4px rgba(0,0,0,.4), 0 0 1px rgba(0,0,0,.7) inset, 0 10px 0px rgba(255,255,255,.11) inset;
background-clip: padding-box;
font:bold 10px "Helvetica Neue", sans-serif;
color: white;
text-decoration: none;
text-shadow: 0 -1px 0 rgba(0,0,0,.6);
margin-left: -3px;
margin-top: -15px;
}​```


Thế là xong ^^
ai muốn tùy chỉnh vị trí của nó thì chỉnh ở 2 dòng

```

margin-left: -3px;
margin-top: -15px;

```