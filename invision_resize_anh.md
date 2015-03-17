code rezie ảnh quá cỡ
demo: http://buonthungpro5.forumvi.com/t2-topic#3
cho hết vào css:

```

post body image-------------------------------------------------------------------*/
.postbody img{max-width:550px;}
.postbody img:hover{
max-width:800px;
overflow:auto;
}
.postbody img:before { content: ".";
display: block;
height: 30px;
width: auto;
}



```