Demo :
![http://img213.imageshack.us/img213/4924/bngthngk.png](http://img213.imageshack.us/img213/4924/bngthngk.png)
Bảng thông kê diễn đàn dạng tab "đa chức năng"
Demo online: http://codefm1.forumvi.com/


Bước 1 : Cho code sau vào CSS:

```

#thai_tab {border-bottom: 1px solid #ccc;}
#stabs {list-style: none;padding: 5px 0 4px 0;margin: 0 0 0 10px;font-family: Verdana,Arial,Helvetica,sans-serif;font-size: 13px;}
#stabs li {
display: inline;}
#stabs li a:hover {
background-color: #dddddd;
padding: 4px 6px;
}
#stabs li.active a {
border-bottom: 1px solid #fff;
background-color: #fff;
padding: 4px 6px 5px 6px;
border-bottom: none;
}
#stabs li.active a:hover {
background-color: #eeeeee;
padding: 4px 6px 5px 6px;
border-bottom: none;
}
.hotrofm_tab {
display: none;
}
#stabs li a {
border: 1px solid #ccc;
padding: 4px 6px;
text-decoration: none;
background-color: #eeeeee;
border-bottom: none;
outline: none;
border-radius: 5px 5px 0 0;
-moz-border-radius: 5px 5px 0 0;
-webkit-border-top-left-radius: 5px;
-webkit-border-top-right-radius: 5px;
}
#thai_tab_content {
border: 1px solid #ccc;
border-top: none;
padding: 10px;
}
```

Bước 2: Vào index\_body tìm

```

<!-- BEGIN disable_viewonline -->
ĐẾN
....
<!-- END disable_viewonline -->

```

Xóa nó đi

Và thay bằng code

```

<!-- BEGIN disable_viewonline -->
<div id="pun-info" class="main">


<div id="thai_tab">
<ul id="stabs">
<li class="active"><a href="#tab1">Ai đang trực tuyến

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab2">Sự kiện

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab3">Thống kê

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="#tab4">Liên kết

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div id="thai_tab_content">
<div id="tab1" class="hotrofm_tab" style="display: block;">
<p>{TOTAL_USERS_ONLINE}
<br />{LOGGED_IN_USER_LIST} {L_ONLINE_USERS} {L_CONNECTED_MEMBERS}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab2" class="hotrofm_tab">
<p>{NEWEST_USER}

Unknown end tag for &lt;/p&gt;


<p>{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/p&gt;


<p>{LEGEND} : {GROUP_LEGEND}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab3" class="hotrofm_tab">
<p>{RECORD_USERS}
<br />{TOTAL_POSTS}
<br />{TOTAL_USERS}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="tab4" class="hotrofm_tab">
<p><img src="http://r14.imgfast.net/users/1416/39/08/64/avatars/gallery/123_bm10.jpg" />

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;






Unknown end tag for &lt;/div&gt;




<!-- END disable_viewonline -->
```


Bước 3 : Tạo 1 Javascript mới
Title : Bảng thống kê dạng tab
Placement : In the homepage
Code :

```

$(document).ready(function(){
$("#stabs li").click(function() {
$("#stabs li").removeClass('active');
$(this).addClass("active");
$(".hotrofm_tab").hide();
var selected_tab = $(this).find("a").attr("href");
$(selected_tab).fadeIn();
return false;
});
});

```

Chú ý nếu các bạn muốn xóa tab bất kỳ thì làm theo các bước
Vào index\_body tìm <li><a href='#tabsố tab muốn xóa'>
Thay số tab mà bạn muốn xóa vào và xóa code đó đi<br>
Tiếp theo tìm<br>
<blockquote><div>
Và xóa đi</blockquote>

Hướng dẫn thêm tab:<br>
<pre><code><br>
VD : thêm tab với code nguyên phía trên vào tìm :&lt;li&gt;&lt;a href="#tab4"&gt;Liên kết<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/li&gt;<br>
<br>
<br>
và thêm sau nó  &lt;li&gt;&lt;a href="#tab5"&gt;Tên tab<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/li&gt;<br>
<br>
<br>
Và tìm<br>
</code></pre>
<pre><code><br>
&lt;div id="tab4" class="hotrofm_tab"&gt;<br>
&lt;p&gt;&lt;img src="http://r14.imgfast.net/users/1416/39/08/64/avatars/gallery/123_bm10.jpg" /&gt;<br>
<br>
Unknown end tag for &lt;/p&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
</code></pre>
thêm sau nó cấu trúc:<br>
<br>
<pre><code><br>
&lt;div id="tab5" class="hotrofm_tab"&gt;<br>
&lt;p&gt;Nội dung<br>
<br>
Unknown end tag for &lt;/p&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
</code></pre>


Thế là xong