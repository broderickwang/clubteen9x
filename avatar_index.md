mình ko edit lại và bản quyền j về code vì nó thuộc http://help.forum2x2.ru/t26946-topic
là forum hỗ trợ của NGA bạn nào copy thì ghi nguồn nước ngoài nhé
đừng có tự ý ghi forum mình naz hihi
code mình ko để ẩn đâu :D


Khi Click vào Avatar sẽ hiện ra thông tin thành viên.

punbb
![http://savepic.su/2284460m.jpg](http://savepic.su/2284460m.jpg)


1.Trước tiên, bạn cần phải cho phép khách truy cập để xem hồ sơ (nếu không thì không có nơi nào để tải lên hình đại diện). acp>>quan ly nhom>>Quản lý người dùng>>Profiles>>genera>>Activate advanced profile : có

2. tìm index box

```

<td class="tcr">
<span>
<!-- BEGIN switch_topic_title -->
<a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_topic_title -->
{catrow.forumrow.USER_LAST_POST}


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




```
thay bằng

```

<td class="tcr">
<div class="avs"><span>
<!-- BEGIN switch_topic_title -->
<a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_topic_title -->
{catrow.forumrow.USER_LAST_POST}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


```


3.CSS

```

.avs a.inx img {
float: left;
width: 40px;
height: 40px;
padding: 1px;
border: 1px solid #DDD;
margin: 0 5px;
-webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
-moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
}
```


4.
Javascript :

```

$(document).on('ready', function() {
$('.avs').each(function () {
var touser = $(this).children('span').children('strong').children('a').attr('href');
$(this).prepend('<a href="' + touser + '" class="inx"><img src="http://i34.servimg.com/u/f34/16/54/26/99/female10.png" alt="нет аватара" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(touser + ' div.main-content.clearfix.center img:eq(0)');
});
});


```




phpbb2

![http://i34.servimg.com/u/f34/16/54/26/99/snap0013.jpg](http://i34.servimg.com/u/f34/16/54/26/99/snap0013.jpg)

1.Trước tiên, bạn cần phải cho phép khách truy cập để xem hồ sơ (nếu không thì không có nơi nào để tải lên hình đại diện). acp>>quan ly nhom>>Quản lý người dùng>>Profiles>>genera>>Activate advanced profile : có

2. vào index box tìm

```

<tr>
<th colspan="{catrow.tablehead.INC_SPAN}" nowrap="nowrap" width="100%" class="secondarytitle"> {catrow.tablehead.L_FORUM} 

Unknown end tag for &lt;/th&gt;


<th nowrap="nowrap" width="50">{L_TOPICS}

Unknown end tag for &lt;/th&gt;


<th nowrap="nowrap" width="50">{L_POSTS}

Unknown end tag for &lt;/th&gt;


<th nowrap="nowrap" width="150"><div style="width:150px;">{L_LASTPOST}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;



```
thay bằng

```

<tr>
<th colspan="4" nowrap="nowrap" width="100%" class="secondarytitle"> {catrow.tablehead.L_FORUM} 

Unknown end tag for &lt;/th&gt;




Unknown end tag for &lt;/tr&gt;



```

ngay bên dưới

```

<td class="row3" align="center" valign="middle" height="50">
<span class="gensmall">{catrow.forumrow.TOPICS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td class="row2" align="center" valign="middle" height="50">
<span class="gensmall">{catrow.forumrow.POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td class="row3 over" align="center" valign="middle" height="50">
<span class="gensmall">{catrow.forumrow.LAST_POST}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


```


thay bằng

```

<td class="row3" align="right" valign="middle">
<div style="width: 120px"><span class="gensmall">{catrow.forumrow.TOPICS} тем

Unknown end tag for &lt;/span&gt;

<br /><span class="gensmall">{catrow.forumrow.POSTS} сообщений

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td class="row3 over" align="left" valign="middle">
<div class="avs" style="width: 220px"><span class="gensmall">{catrow.forumrow.LAST_POST}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




```

3. css

```

.avs a.inx img {
float: left;
width: 40px;
height: 40px;
padding: 1px;
border: 1px solid #DDD;
margin: 0 5px;
-webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
-moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.75);
}
```


js

```

$(document).on('ready', function() {
$('.forumline tr .row3.over .avs').each(function () {
var touser = $(this).children('span').children('span').children('strong').children('a').attr('href');
$(this).prepend('<a href="' + touser + '" class="inx"><img src="http://i34.servimg.com/u/f34/16/54/26/99/female10.png" alt="нет аватара" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(touser + ' .forumline .row1.gensmall[align="center"]:eq(0) img:eq(0)');
});
});


```



Được sửa bởi Đã giải đáp ngày 30/11/2012, 8:48 pm; sửa lần 1.