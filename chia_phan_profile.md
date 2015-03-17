![http://i.imm.io/aANp.png](http://i.imm.io/aANp.png)


Cách Làm :
ACP --> Display --> Templates -->Viewtopic\_body :
Tìm Đoạn Này :

```

{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}

```
Thay = Đoạn Này :

```

<div class=toibigay>{postrow.displayed.profile_field.LABEL}{postrow.displayed.profile_field.CONTENT}</div>

```

AP--> Display --> Colors --> CSS :

```


.toibigay {
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
}```



ACP --> Modules --> JS managment

```

$(function(){
$('.toibigay').next('br').hide();
});
```