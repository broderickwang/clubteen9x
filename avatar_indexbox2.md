Code này dành cho PunBB nhá
nó khác với Ver 1 là có thể kick vào được
Ver 1 hiện avatar nhưng ko kick vào dc
thế thôi lè lưỡi

![http://i46.servimg.com/u/f46/17/86/50/63/111.jpg](http://i46.servimg.com/u/f46/17/86/50/63/111.jpg)

Bước 1 : Vào css thêm đoạn này vào

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
max-width: 200px;
max-height: 200px;
}
```


Bước 2 : Vào Index\_box tìm

```

<span>
<!-- BEGIN switch_topic_title -->
<a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_topic_title -->
{catrow.forumrow.USER_LAST_POST}


Unknown end tag for &lt;/span&gt;


```



Thay bằng


```

<div class="avs"><span>
<!-- BEGIN switch_topic_title -->
<a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}

Unknown end tag for &lt;/a&gt;

<br />
<!-- END switch_topic_title -->
{catrow.forumrow.USER_LAST_POST}


Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;





```
Bước 3 : Vào MODULES >> HTML & JAVASCRIPT >> Javascript codes management >>> Change a Javascript Code


Title **: Avatar index ver 2
Placement : In the home page
Javascript Code** :

```

$(document).on('ready', function() {
$('.avs').each(function () {
var touser = $(this).children('span').children('strong').children('a').attr('href');
$(this).prepend('<a href="' + touser + '" class="inx"><img src="http://illiweb.com/fa/invision/pp-blank-thumb-38px.png" alt="No avatar" />

Unknown end tag for &lt;/a&gt;

');
$(this).children('a').load(touser + ' div.main-content.clearfix.center img:eq(0)');
});
});

```

Thế là xong ^^