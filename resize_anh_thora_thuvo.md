đây là một trong những cách
để khắc phục tình trạng ảnh post vào rum kích thứơc to quá.
hehe. thông cảm. hehe


1. ACP> Display> Templates> Viewtopic\_body
- tìm và thay:

```

{postrow.displayed.MESSAGE}

```

bằng:

```

<div class="postbody">{postrow.displayed.MESSAGE}

Unknown end tag for &lt;/div&gt;



```

bấm save rùi

2. ACP> Display> Pics and Colors> CSS stylesheet
- copy và dán đoạn codes duới đây vào CSS
- ấm nút Submit. xong.
```

/*post body image-------------------------------------------------------------------*/
.postbody img{max-width:550px;}
.postbody img:hover{
max-width:800px;
overflow:auto;
}
.postbody img:before { content: ".";
display: block;
height: 30px;
width: auto;
}```