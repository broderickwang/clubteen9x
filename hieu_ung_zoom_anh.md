Demo:
Như tiêu đề, chắc là các bạn hiểu

Cho code sau vào css:

```

.myphuong img{
border-radius:5px;
background-color: #FFFFFF;
margin:1px 3px 3px 1px;
padding:3px;
border:1px solid #d4d4d4;
box-shadow: 3px 3px 3px #8A8A8A;
transform:rotate(0deg); -moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);
transition: all 0.2s ease; -webkit-transition: all 0.2s ease; -moz-transition: all 0.2s ease;
}
.myphuong img:hover {
transition: all 0.2s ease; -webkit-transition: all 0.2s ease; -moz-transition: all 0.2s ease;
transform:rotate(0deg); -moz-transform:rotate(0deg); -webkit-transform:rotate(0deg);
transform: scale(1.5); -webkit-transform: scale(1.5); -moz-transform: scale(1.5);
position:relative;
}
```


Bước 2: Vào Viewtopic\_body: ACP--> Display-->Templates--> viewtopic\_body: Tìm

```

{postrow.displayed.MESSAGE}

```

Thay bằng:

```

<span class="myphuong">{postrow.displayed.MESSAGE}

Unknown end tag for &lt;/span&gt;



```
![http://r14.imgfast.net/users/1416/39/08/64/smiles/3400923477.jpg](http://r14.imgfast.net/users/1416/39/08/64/smiles/3400923477.jpg)