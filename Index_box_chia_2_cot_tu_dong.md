**Giới thiệu
Trước mắt mình chia sẻ các bạn mẫu index\_box mình tạo trước. Sau này nếu có điều kiện sẽ hướng dẫn các bạn chỉnh ngay trên forum các bạn**

**Demo:     ![http://i44.servimg.com/u/f44/15/64/85/86/cp11410.jpg](http://i44.servimg.com/u/f44/15/64/85/86/cp11410.jpg)**

**Index\_box**

```

<div class="pun-crumbs">
<p class="crumbs"><a href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;

<strong>{NAV_CAT_DESC}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div class="main">
<!-- BEGIN catrow -->
<!-- BEGIN tablehead -->
<div class="main-head">
<div class="page-title">{catrow.tablehead.L_FORUM}

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<table cellspacing="0" class="table">
<tbody class="statused">
<tr>
<td>
<!-- END tablehead -->

<!-- BEGIN forumrow -->
<div class="box">
<h{catrow.forumrow.LEVEL} class="hierarchy"><a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}

Unknown end tag for &lt;/a&gt;

</h{catrow.forumrow.LEVEL}>
<br />
<div class="box1">{catrow.forumrow.FORUM_DESC}

Unknown end tag for &lt;/div&gt;


<div class="box2">
<!-- BEGIN switch_topic_title -->
<a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_topic_title -->
{catrow.forumrow.USER_LAST_POST}


Unknown end tag for &lt;/div&gt;


<center><div class="box3"><strong>{catrow.forumrow.TOPICS}

Unknown end tag for &lt;/strong&gt;

 chủ đề | <strong>{catrow.forumrow.POSTS}

Unknown end tag for &lt;/strong&gt;

 số bài

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/center&gt;


{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}
<strong>{forumrow.L_SUBFORUM_STR}

Unknown end tag for &lt;/strong&gt;

 {forumrow.SUBFORUMS}


Unknown end tag for &lt;/div&gt;


<!-- END forumrow -->

<!-- BEGIN tablefoot -->


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<!-- END tablefoot -->
<!-- END catrow -->


Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_on_index -->
<div class="main-box clearfix">
<ul>
<li><a href="{U_TODAY_ACTIVE}">Chủ đề hôm nay

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="{U_TODAY_POSTERS}">Tích cực hôm nay

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="{U_OVERALL_POSTERS}">Thành viên tích cực

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<!-- BEGIN switch_delete_cookies -->
<p class="right">
<a href="{switch_on_index.switch_delete_cookies.U_DELETE_COOKIES}">Xóa Cookies

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;


<!-- END switch_delete_cookies -->


Unknown end tag for &lt;/div&gt;


<!-- END switch_on_index -->```



**CSS**

```

.box{width:47%;float:left;border:2px solid #7D2252;border-top:4px solid #7D2252;margin:5px;padding:2px}
a.forumtitle{background:#7D2252;padding:1px 15px 1px 5px;border-radius:0 0 10px 0}
.box1{width:64px;max-height:64px;float:right}
.box2{margin-left:10px}
.box3{background:#7D2252;color:#FFF;padding:4px;margin-bottom:0}


```
**Hiệu ứng phụ
Làm nổi bật tên box cần thiết (Demo: Box "Nhật kí lớp" hình trên)
Chèn code sau vào CSS thay bằng link box cần làm nổi bật**

```

a[href="/f14-forum"].forumtitle{background:#F6358A;color:#FFF}
```


**Lưu ý
-Index\_box này không có phần mô tả vì phần mô tả được dùng để chứa biểu tượng cho box. Chèn code sau vào phần mô tả để tạo icon box**

```

<img src="link ảnh" />
```

-Index\_box này không có phần Status của box. Tức là không có những cái như thế này         ![http://i44.servimg.com/u/f44/15/64/85/86/cp11510.png](http://i44.servimg.com/u/f44/15/64/85/86/cp11510.png)