Nếu từng sử dụng qua phiên bản Invision, các bạn thấy nút + - bên phải mỗi box
Click -
![http://img535.imageshack.us/img535/7965/65865961.jpg](http://img535.imageshack.us/img535/7965/65865961.jpg)
![http://img535.imageshack.us/img535/7965/65865961.jpg](http://img535.imageshack.us/img535/7965/65865961.jpg)
Click +

http://design.wow3.info/forum.htm

Bài viết này hướng dẫn các bạn đối với phiên bản phpbb2 và punbb.
Nhưng không sử dụng nút + - mà click vào thanh tcat chứa tiêu đề của box.
Và dựa trên index\_box mặc định

**Đối với PHPBB2:
Temp > QLTT > Index\_box :
Tìm :**

```


<!-- BEGIN catrow --><!-- BEGIN tablehead --><table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr>
```

thay bằng

```


<script type="text/javascript">var num= 0;

Unknown end tag for &lt;/script&gt;


<!-- BEGIN catrow --><!-- BEGIN tablehead --><table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr id="currenttr" onClick="i= 0; e=this.parentNode.childNodes; while(++i<e.length) if(e[i].tagName=='TR') e[i].style.display=(e[i].style.display=='none')?'':'none'; retour=(my_getcookie(this.id)=='true')?'false':'true'; my_setcookie(this.id,retour, 1, 0);"  style="cursor:pointer;">

```

Tìm tiếp:

```


<!-- BEGIN tablefoot -->


Unknown end tag for &lt;/table&gt;



```
Thay bằng:
```


<!-- BEGIN tablefoot -->


Unknown end tag for &lt;/table&gt;

<script type="text/javascript"> document.getElementById('currenttr').id='trfrm'+num; if(my_getcookie('trfrm'+num)=='true') { i= 0; e=document.getElementById('trfrm'+num).parentNode.childNodes; while(++i<e.length) if(e[i].tagName=='TR')e[i].style.display='none'; } num++;

Unknown end tag for &lt;/script&gt;



```

**Đối với PUNBB:
Temp > QLTT > Index\_box :
Tìm:**

```


<div class="main">
<!-- BEGIN catrow -->
<!-- BEGIN tablehead -->
<div class="main-head">
<div class="page-title">{catrow.tablehead.L_FORUM}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">

```
Thay bằng:

```


<div class="main"><script type="text/javascript">var num= 0; var curc;

Unknown end tag for &lt;/script&gt;


<!-- BEGIN catrow -->
<!-- BEGIN tablehead -->
<div class="main-head" onClick=" if(this.nextSibling.style.display=='none') {my_setcookie(this.firstChild.id,'0',0,0); this.nextSibling.style.display='block';} else {my_setcookie(this.firstChild.id,'1',1,0); this.nextSibling.style.display='none'; }"  style="cursor:pointer;">
<div class="page-title" id="cret">{catrow.tablehead.L_FORUM}

Unknown end tag for &lt;/div&gt;

<script type="text/javascript">curc= document.getElementById('cret'); curc.id+=(++num)+'_'+escape(curc.innerHTML);

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<script type="text/javascript">if(my_getcookie(curc.id)=='1') curc.parentNode.nextSibling.style.display='none';

Unknown end tag for &lt;/script&gt;



```