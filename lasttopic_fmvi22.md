Demo hình :
![http://i45.servimg.com/u/f45/17/45/78/42/110.jpg](http://i45.servimg.com/u/f45/17/45/78/42/110.jpg)

Demo online đã tách : http://sontq123.forumvi.com/


ACP >> Modules >> Portal & Widgets >> Forum widgets management:
![http://i48.servimg.com/u/f48/16/58/89/73/511.jpg](http://i48.servimg.com/u/f48/16/58/89/73/511.jpg)
![http://i48.servimg.com/u/f48/16/58/89/73/210.jpg](http://i48.servimg.com/u/f48/16/58/89/73/210.jpg)
![http://i48.servimg.com/u/f48/16/58/89/73/310.jpg](http://i48.servimg.com/u/f48/16/58/89/73/310.jpg)

Bước 1 : Vào index\_body chèn đọan code này dưới {JAVASCRIPT}

```


<div id="left" class="boxfmvi main">
<div class="main-head">
<div class="page-title">
<h2>Tình hình diễn đàn

Unknown end tag for &lt;/h2&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content" style="margin: 2px; width: 926px;">
<!-- BEGIN giefmod_index1 -->{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
var u;
for (u = 0; u < 20; u++) {
var numelat = $(".rightnumber:eq(" + u + ")");
numelat.text(numelat.text().slice(numelat.text().lastIndexOf("-") + 1))
}
$("#left").fadeIn(1000);
$("#changeviewrep").change(function () {
$(".viewrep").hide();
$("#" + $(this).val()).show()
});
$("#changeposter").change(function () {
$(".top-vi").hide();
$("#" + $(this).val()).show()
})


Unknown end tag for &lt;/script&gt;



```

Bước 2 : Vào header tìm và xóa đọan này đi:

```


<div id="{ID_LEFT}">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;



```

Bước 3 : Thay các templates ở Portal:
mod\_most\_active\_starters

```


<div class="module main">
<div id="active_starters" class="main-content top-vi" style="display:none">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;



<span style="float:
right">{POSTER.NB_TOPICS}

Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```


mod\_most\_active\_topics

```


<div class="module main">
<div class="starsTitle">
<span style="float: right; padding-right: 10px;">
<select id="changeviewrep">
<option value="most_viewed">Xem nhiều nhất

Unknown end tag for &lt;/option&gt;


<option value="most_active">Trả lời nhiều nhất

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="most_active" class="main-content viewrep">
<ul class="latest_topics">
<!-- BEGIN TOPIC -->
<li>
<span class="leftrecent" style="width:200px!important">
<a href="{TOPIC.LINK}" title="{TOPIC.NAME}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;



<span class="rightnumber">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




```
mod\_most\_viewed\_topics

```


<div class="module main">
<div id="most_viewed" class="main-content viewrep" style="border-bottom-width: 0pt;">
<ul class="latest_topics">
<!-- BEGIN TOPIC -->
<li>
<span class="leftrecent" style="width:200px!important">
<a href="{TOPIC.LINK}" title="{TOPIC.NAME}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;



<span class="rightnumber">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/li&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```

mod\_recent\_topics

```


<!-- BEGIN classical_row -->
<div class="module main recentWidth" style="border-right: 1px solid #DDDDDD">
<div class="starsTitle" style="position: relative;">
<h3>Thống kê bài viết mới

Unknown end tag for &lt;/h3&gt;




Unknown end tag for &lt;/div&gt;



<div id="recentnew" class="main-content" style="border-bottom:0
none;border-left:0 none;border-right:1px solid
#DDD!important;border-top:0 none;min-height:363px">
<ul class="latest_topics" style="padding-left: 20px ! important;">
<!-- BEGIN recent_topic_row -->
<li>
<span class="leftrecent">
<a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<span class="imgstatus">
<img width="10px" src="http://i48.servimg.com/u/f48/16/58/89/73/post_o10.png" />


Unknown end tag for &lt;/span&gt;


<span class="rightrecent">
<!-- BEGIN switch_poster -->

<a
href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->
<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->


Unknown end tag for &lt;/span&gt;


<span class="showpost">
<a href="javascript:vol(0)" class="firstTopic"> ►

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;


<span class="lastcate">
{classical_row.recent_topic_row.S_POSTTIME}


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->

```

mod\_top\_post\_users\_month

```


<div class="module main">
<div id="users_month" class="main-content top-vi" style="display:none">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;



<span style="float:
right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```

mod\_top\_post\_users\_week

```


<div class="module main">
<div id="users_week" class="main-content top-vi" style="display:none">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;



<span style="float:
right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




```
mod\_top\_posters

```


<div class="module main">
<div class="starsTitle">
<span style="float: right; padding-right: 10px;">
<select id="changeposter">
<option value="top_posters">Thành viên tích cực nhất

Unknown end tag for &lt;/option&gt;


<option value="active_starters">Tạo chủ đề nhiều nhất

Unknown end tag for &lt;/option&gt;


<option value="users_week">Gửi bài nhiều trong tuần

Unknown end tag for &lt;/option&gt;


<option value="users_month">Gửi bài nhiều trong tháng

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="top_posters" class="main-content top-vi">
<ul class="latest_topics">
<!-- BEGIN POSTER -->
<li>
<span class="leftrecent">
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;



<span style="float:
right">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;





Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```

Bước 4 :
ACP >> Display >> Templates >> QLTT >> index\_body: Thêm vào cuối bằng code sau:

```


<script type="text/javascript">
var u;
for (u = 0; u < 20; u++) {
var numelat = $(".rightnumber:eq(" + u + ")");
numelat.text(numelat.text().slice(numelat.text().lastIndexOf("-") + 1))
}
$("#left").fadeIn(1000);
$("#changeviewrep").change(function () {
$(".viewrep").hide();
$("#" + $(this).val()).show()
});
$("#changeposter").change(function () {
$(".top-vi").hide();
$("#" + $(this).val()).show()
})


Unknown end tag for &lt;/script&gt;




```
Cuối cùng cho đọan sau zô CSS:

```


#content-container div#main{overflow:visible!important}
#chatbox_members,#chatbox,#chatbox_footer{background-color:#FFF}
.main-content.standalone{border-color:#000 #c7c7c7 #c7c7c7 #000;border-style:solid;border-width:1px;padding:10px 15px}
a,a:link,a:hover{text-decoration:none!important}
a.mainmenu[href='/register']{color:yellow!important}
.chatbox-options li,.chatbox-options li a,.chatbox-options li label{color:#000}
#left .module.main{border:0 none!important;margin:0!important}
#pun-title{color:#FFF!important;font-family:"Comic
Sans
Ms";font-size:33px;font-style:normal;font-variant:normal;font-weight:700;text-shadow:3px
3px 3px #000;text-transform:uppercase;z-index:1;padding:15px}
.pun .sig-content img{max-width:600px}
.pun .sig-content{clear:none;max-height:150px;overflow:hidden}
.pun .sig-content:hover{max-height:100%}
/* Latest topic */
.boxFMvi{margin:0!important}
.top-vi,.viewrep{padding:10px!important;min-height:162px}
#most_active,#active_starters,#users_week,#users_month{display:none}
.lastcate{overflow:hidden;position:absolute;right:0;text-align:right;text-overflow:ellipsis;white-space:nowrap;width:150px}
.showpost{line-height:18px;font-size:9px;position:absolute;right:166px}
.rightnumber{position:absolute;right:0pt;text-align:right;}
.leftrecent{width:240px;white-space:nowrap;position:absolute;overflow:hidden;text-overflow:ellipsis}
.rightrecent{position: absolute; right: 180px}
.imgstatus{background-color:#FFF;left:-30px;position:absolute;padding:2px 7px}
#content-container div#left{border:0 none;float:none;width:930px;margin:0}
*+ html #content-container div#main{margin-left:0}
* html #content-container #main-content{overflow:visible;margin-right:0}
* html #content-container div#main{margin-right:-99%;width:100%;float:none}
.latest_topics{list-style:decimal-leading-zero outside none;text-align:left;margin:0!important;padding:0 5px 0 30px}
.latest_topics li{line-height:16.1px;position:relative}
.toppost_width{float:left; width: 200px}
.recentWidth{float: left; width: 600px}
.recentWidth .main-head{position: relative; height: 1.3em;overflow: hidden;}
.recentWidth h3{marign-left: 10px}
.pun{background-color:#FFF;padding:12px;border:3px double #000;min-width:931px!important;width:931px;margin:0 auto}
.loaddinng{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/loadin12.gif);background-position:center
center;background-repeat:no-repeat;height:150px;width:180px}
#checktip{position:absolute;right:10px;top:3px;z-index:300}
#numRecent{display:none;position:absolute;right:12px;top:7px}

.leftStats{float:left;margin-left:-71px;position:absolute;vertical-align:middle;width:60px}
.rightStats{border-left:2px solid #CFC9C9;min-height:50px;padding-left:10px;width:846px;margin:5px 10px 5px 70px}
.starsTitle{background-color:#E3E3E3;border:1px
solid #DDD;color:#F8FF04;font-family:Comic Sans
MS;font-variant:small-caps;font-weight:700;height:18px;text-shadow:1px
1px 1px #000;padding:5px}

```

Shocked

Thank bác bai vong tạo ra last & Bim la người đã tách last này ra nhé