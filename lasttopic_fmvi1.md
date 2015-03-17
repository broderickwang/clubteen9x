Demo : http://chienthan28.forumvi.com/

Giao diện Tiếng Việt:
![http://i48.servimg.com/u/f48/16/58/89/73/vilast10.png](http://i48.servimg.com/u/f48/16/58/89/73/vilast10.png)

Chức năng:

Hoạt động trên hầu hết các trình duyệt.
Hỗ trợ hai ngôn ngữ: Anh - Việt
Thống kê thành viên và bài viết
Icon trạng thái chủ đề
Chuyển đổi vị trí hai khối thống kê
Chức năng cập nhật bài viết mới
Tooltip hiển thị thông tin chi tiết của chủ đề:
Tiêu đề
Người tạo chủ đề
Người gửi cuối
Thời gian gửi
Tên chuyên mục
Trạng thái chủ đề
Lượt xem
Lượt trả lời
Ghi chú cho người xem

Bắt đầu làm nào :

mod\_most\_active\_starters

```

<div id="topstarters" class="main-content">
<!-- BEGIN POSTER -->
<div class="newposter">
<span>
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span class="rightlFMvi">
{POSTER.NB_TOPICS}


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/div&gt;



```
mod\_most\_active\_topics

```

<div id="activeTopics" class="main-content">
<!-- BEGIN TOPIC -->
<div class="newltopic">
<span style="margin-right: 3px" class="topicstatus">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/post_o10.gif" />


Unknown end tag for &lt;/span&gt;


<span class="ltitletopic">
<a href="{TOPIC.LINK}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<span style="display:none">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/div&gt;



```
mod\_most\_viewed\_topics

```

<div id="viewedTopics" class="main-content">
<!-- BEGIN TOPIC -->
<div class="newltopic">
<span style="margin-right: 3px" class="topicstatus">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/post_o10.gif" />


Unknown end tag for &lt;/span&gt;


<span class="ltitletopic">
<a href="{TOPIC.LINK}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<span style="display:none">{TOPIC.TITLE}

Unknown end tag for &lt;/span&gt;


<!-- END TOPIC -->


Unknown end tag for &lt;/div&gt;


```

mod\_recent\_topics

```



Unknown end tag for &lt;/div&gt;


<div style="display: block; margin: 5px; float: left; width: 687px" class="module main">
<!-- BEGIN classical_row -->
<div class="main-head">
<select name="selectTopic" style="padding: 0; margin: -4px; width: 250px">
<option value="latestTopics">
Latest topics


Unknown end tag for &lt;/option&gt;


<option value="activeTopics">
Most active topics


Unknown end tag for &lt;/option&gt;


<option value="viewedTopics">
Most viewed topics


Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;


<span style="cursor: pointer; position: absolute; right: 10px; top: 5px;" id="reloadlFMvi">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/load10.png"/>
<img style="display:none" src="http://farm04.go.vn/photo/data/20111012/10798851/946D73AB7E9F949624C2BF756D1ED794.gif"/>


Unknown end tag for &lt;/span&gt;


<span style="position: absolute; cursor: pointer; right: 40px; top: 5px;" id="togglelFMvi">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/toggle10.png"/>
<img style="display:none" src="http://i48.servimg.com/u/f48/16/58/89/73/edit10.png"/>


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="latestTopics" class="main-content">
<!-- BEGIN recent_topic_row -->
<div class="newltopic">
<span style="margin-right: 3px" class="topicstatus">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/post_o10.gif" />


Unknown end tag for &lt;/span&gt;


<span class="ltitletopic">
<a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<span style="display:none">{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->
```

mod\_top\_post\_users\_month

```

<div id="monthPoster" class="main-content">
<!-- BEGIN POSTER -->
<div class="newposter">
<span>
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span class="rightlFMvi">
{POSTER.NB_POSTS}


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/div&gt;



```
mod\_top\_post\_users\_week

```

<div id="weekPoster" class="main-content">
<!-- BEGIN POSTER -->
<div class="newposter">
<span>
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span class="rightlFMvi">
{POSTER.NB_POSTS}


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/div&gt;



```
mod\_top\_posters

```

<div class="main-head">
<select name="selectPoster" style="padding: 0; margin: -4px; width: 250px">
<option value="topPoster">
Top posters


Unknown end tag for &lt;/option&gt;


<option value="topstarters">
Most active topic starters


Unknown end tag for &lt;/option&gt;


<option value="weekPoster">
Top posting users this week


Unknown end tag for &lt;/option&gt;


<option value="monthPoster">
Top posting users this month


Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/div&gt;


<div id="topPoster" class="main-content">
<!-- BEGIN POSTER -->
<div class="newposter">
<span>
{POSTER.NAME}


Unknown end tag for &lt;/span&gt;


<span class="rightlFMvi">
{POSTER.NB_POSTS}


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/last-topic-for-punBB-by-FMvi-group.js">


Unknown end tag for &lt;/script&gt;



```

Vào Header tìm đoạn code sau và xóa nó đi :

```

<div id="{ID_LEFT}">
<div style="display: block; float:left; width: 260px" class="module main">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
Vào index\_body thêm vào dưới {JAVASCRIPT} :

```

<div id="{ID_LEFT}">
<div style="display: block; float:left; width: 260px" class="module main">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<!-- END saut -->
<!-- END giefmod_index1 -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



```
Thêm đoạn sau vào css :

```

.tooltipFMvi{background-color:#131313;border:5px solid #000;border-radius:5px 5px 5px 5px;box-shadow:2px 2px 3px #818181;color:#FFF;display:none;font-family:cursive;font-size:13px;line-height:18px;position:absolute;z-index: 999;width:290px;padding:5px}
.tiplFMvi{color:threedface;font-family:Verdana;padding:2px 3px 2px 0}
#main,#left,.module,.module>div{overflow:visible !important}
.newltopic,.newposter,#left .main-head{position:relative}
.rightlFMvi{position:absolute;top:0px;right:2px;}
#content-container div#left{margin-bottom:30px;width:100%;border:1px solid #1E1E1D;border-radius:0;box-shadow:0 0 1px #000}
.newltopic,.newposter{font-family:Comic Sans MS;line-height:22px;font-size:14px;}
#latestTopics,#activeTopics,#viewedTopics,#topPoster,#weekPoster,#monthPoster,#topstarters{display:none;height:210px;}

```



Cách đặt widgets :
![http://i48.servimg.com/u/f48/16/58/45/96/anh_ch11.png](http://i48.servimg.com/u/f48/16/58/45/96/anh_ch11.png)


Nguồn FMvi.org