![http://img27.imageshack.us/img27/3605/democx.png](http://img27.imageshack.us/img27/3605/democx.png)
Tự làm Mouse. Không biết có ai làm chưa nửa. Cái này dễ ko có khó khăn gì nên đừng ném gach em nha


Vào Viewtopic chèn code

```

<br><div class="boctem">

Unknown end tag for &lt;/div&gt;

<div class="nguoiboctem">{postrow.displayed.POSTER_NAME}

Unknown end tag for &lt;/div&gt;

<br>

```
vào sau
```

<div class="post"{postrow.displayed.THANK_BGCOLOR}>
```
Thay

```

<div class="main-content topic">
```
bằng
```

<div class="main-content topic"><div class="trang">

```

Thêm 

Unknown end tag for &lt;/div&gt;

 trên

```

<hr id="first-post-br" />


```
Thay

```

<div class="main-content topic">
<!-- END first_post_br -->
<!-- END displayed -->
<!-- BEGIN hidden -->
<p class="p-hidden">{postrow.hidden.MESSAGE}

Unknown end tag for &lt;/p&gt;


<!-- END hidden -->
<!-- END postrow -->


Unknown end tag for &lt;/div&gt;




```
Bằng

```

<div class="main-content topic"><div class="trangan">
<!-- END first_post_br -->
<!-- END displayed -->
<!-- BEGIN hidden -->
<p class="p-hidden">{postrow.hidden.MESSAGE}

Unknown end tag for &lt;/p&gt;


<!-- END hidden -->
<!-- END postrow -->

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




```

CSS:

```

.trang :nth-child(2) .boctem{
background:#FFF8DC url(https://lh5.googleusercontent.com/-lz1jdeGnzTE/UQSY5o_2Q7I/AAAAAAAABVc/BnTq6uuBkw8/s875/boctem.png) no-repeat;
height:200px;
}
.trang .nguoiboctem, .trangan .nguoiboctem{ display:none;height:0px;}
.trang :nth-child(2) .nguoiboctem { display:block;
margin-left:470px;margin-top:-130px;height:120px;font-size:20px;}



```