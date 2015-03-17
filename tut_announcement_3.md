demo:
![http://i81.servimg.com/u/f81/11/91/65/81/untitl14.png](http://i81.servimg.com/u/f81/11/91/65/81/untitl14.png)
Code này giúp chúng ta tạo ra 1 bảng thông báo khẩn tách riêng với topic\_list\_box
Cách làm :


Với Phpbb2
Vào : display >> Templates >> Quản Lý Tổng Thể >> topics\_list\_box >> tìm code sau :

```



Unknown end tag for &lt;/script&gt;


<!-- END multi_selection -->

```
Thêm vào ngay sau nó code sau

```


<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr><th colspan="{topics_list_box.row.header_table.COLSPAN}" align="center" nowrap="nowrap">Global Announcement

Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>Global Message must be inserted here

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;


```

bạn có thể tùy chỉnh dòng :Global Message must be inserted here theo ý của bạn

Với Punbb
Vào : display >> Templates >> Quản Lý Tổng Thể >> topics\_list\_box >> tìm code sau :

```



Unknown end tag for &lt;/script&gt;


<!-- END multi_selection -->
```

Thêm vào ngay sau nó code sau

```

<div class="main-head">

<h1 class="page-title">Global Announcement

Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">
<tbody class="statused">
Global Message must be inserted here


Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


```


bạn có thể tùy chỉnh dòng :Global Message must be inserted here theo ý của bạn

Thế là xong cười nhăn răng :> :>