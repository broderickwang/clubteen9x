Demo:

http://www.hotrofm.com/t930-topic
(Trên cùng)
![http://i35.servimg.com/u/f35/14/65/61/19/adasda10.jpg](http://i35.servimg.com/u/f35/14/65/61/19/adasda10.jpg)


Cho vào CSS:

```

#loginbox1 {
-moz-border-radius:5px;
-moz-box-shadow:0 0 20px #222;
-webkit-border-radius:5px;
-webkit-box-shadow:0 0 20px #222;
border-radius:5px;
box-shadow:0 0 20px #222;
font-family:Arial, tahoma, Sans-Serif;
font-size:13px;
height:470px;
left:50%!important;
position:fixed;
top:40%!important;
width:600px;
margin:-200px auto auto -300px !important;
}

#funybox{background-color:rgba(0,0,0,0.84);display:none;height:100%;position:fixed;width:100%;z-index:999}
.loginbox_content{-webkit-transition:5s;background:#F8F8F8;height:100%;width:100%}.loginbox_head{background:#EEE url(http://i.imgur.com/x1C6p.png) repeat-x 0 0;border-bottom:1px solid #DDD;display:inline-block;height:35px;line-height:35px;vertical-align:middle;width:100%}.loginbox_head strong{padding-left:20px}.loginbox_head span a{-moz-border-radius:4px;-webkit-border-radius:4px;background:#999;border:1px solid #777;border-radius:2px;color:#fff;display:inline-block;float:right;font-weight:bolder;height:16px;line-height:14px;margin-right:10px;margin-top:7px;position:relative;text-align:center;width:16px}.loginbox_username{float:left;font-weight:700;margin-top:10px;padding:10px 20px;width:250px}#quick_login_password,#quick_login_username{-moz-box-shadow:inset 0 2px 5px #f0f0f0;-moz-transition:.4s;-ms-transition:.4s;-o-transition:.4s;-webkit-box-shadow:inset 0 2px 5px #F0F0F0;-webkit-transition:.4s;background:#F9F9F9;border:1px solid #CCC;box-shadow:inset 0 2px 5px #F0F0F0;font-size:13px;margin:5px 0;outline:0;padding:5px;transition:.4s;width:260px}.loginbox_password{float:right;margin-top:10px;padding:10px 40px 10px 0;width:250px}.loginbox_password label{font-weight:700}.forgot.right{float:right;position:relative;top:-65px}.forgot.right a{color:#666;display:inline-block;font-size:11px;position:relative;right:-25px;top:2px;width:120px}.loginbox_submit{left:-273px;padding-left:16px;position:relative;top:72px}.loginbox_submit_button{float:right;margin-right:20px;margin-top:50px;position:absolute;right:0}#signin_submit_remember:hover{background:#555 url(http://i.imgur.com/h9h0Y.png) repeat-x}#signin_submit_remember{-moz-border-radius:2px;-moz-box-shadow:inset 0 0 2px #ccc;-moz-transition:0.5s,box-shadow 0;-ms-transition:0.5s,box-shadow 0;-o-transition:0.5s,box-shadow 0;-webkit-border-radius:2px;-webkit-box-shadow:inset 0 0 2px #CCC;-webkit-transition:0.5s,box-shadow 0;background:#777 url(http://i.imgur.com/Db0w3.png) repeat-x;border:1px solid #555;border-radius:2px;box-shadow:inset 0 0 2px #CCC;color:#fff;cursor:pointer;padding:10px 50px;transition:0.5s,box-shadow 0}.loginbox_submit label{margin-left:5px;position:absolute;top:0}

.kingforuser{float:right}

```

Cho vào Viewtopic\_body:

```

<style>
.pt_xemthem{top: 0px;clip: inherit;position: fixed;border:1px solid #999;border-top:0px;padding:5px 15px; background: #ffffff;font-family:Georgia;font-size:14px;;-moz-border-radius-bottomright: 5px;-moz-border-radius-bottomleft: 5px;color:#000;-moz-opacity:0.9;opacity:0.9;}
.pt_xemthem:hover{-moz-opacity:1.0;opacity:1.0;}
.pt_xemthem a:visited,.pt_xemthem a:link {color:#000}
.pt_xemthem a:hover{text-decoration: none!important;color:red}

Unknown end tag for &lt;/style&gt;


<div class="pt_xemthem"><a href="javascript:displaymenu('#funybox','center')">Xem thêm 

Unknown end tag for &lt;/a&gt;

| <a href="/f{FORUM_ID}-">Quay lại chuyên mục

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;







<div id="funybox" style="left: 0px; display: none; "><div id="loginbox1" class="window login_menu"><div class="loginbox_content"><div class="loginbox_head"><strong><img src="http://i1212.photobucket.com/albums/cc445/darkno1/th_user.gif"/>Xem thêm bài viết

Unknown end tag for &lt;/strong&gt;

<span><a href="javascript:displaymenu('#funybox','detrik')" title="Đóng ">x

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;

<div style="height: 530px; overflow: auto;">
<div class="fmviToggle">
<div class="main">
<div class="main-head clearfix">
<p class="h2">
Bài viết mới cùng chuyên mục
<span id="chuyenmucnay">


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<ol style="list-style-type:decimal-leading-zero; padding: 10px 40px" id="cungchuyenmuc"
class="main-content frm">


Unknown end tag for &lt;/ol&gt;


<div class="main-head clearfix">
<p class="h2">
Bài viết liên quan với
<a href="{TOPIC_URL}">{TOPIC_TITLE}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<ol style="list-style-type:decimal-leading-zero; padding: 10px 40px" id="bailienquan"
class="main-content frm">


Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
$('.crumbs:first a.nav[href^="/f"]:last').clone().appendTo('#chuyenmucnay');
var cungchuyenmuc = '.tdtopics:not(".tdtopics:contains(\"{TOPIC_TITLE}\"), .tdtopics:contains(\"Announcement\"), .tdtopics:contains(\"Sticky\"), .tdtopics:contains(\"Global announcement\")") .topic-title a.topictitle:lt(10)';
$.ajax({
url: '/f{FORUM_ID}-forum',
success: function(data) {
if ($(data).find(cungchuyenmuc).length == 0) {
$('#cungchuyenmuc').prev().remove();
$('#cungchuyenmuc').remove();
} else {
$(data).find(cungchuyenmuc).appendTo('#cungchuyenmuc');
$('#cungchuyenmuc a.topictitle').wrap("<li>

Unknown end tag for &lt;/li&gt;

");
};
},
error: function(jqXHR, textStatus, errorThrown) {
$('#cungchuyenmuc').html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

');
}
});
var topictitleFMvi = '{TOPIC_TITLE}';
var fmviTopictitle = topictitleFMvi.replace(/ /gi, '+');
var bailienquan = '.tdtopics:not(".tdtopics:contains(\"{TOPIC_TITLE}\"), .tdtopics:contains(\"Announcement\"), .tdtopics:contains(\"Sticky\"), .tdtopics:contains(\"Global announcement\")") .topic-title a.topictitle:lt(10)';
$.ajax({
url: '/search?mode=searchbox&search_keywords=' + fmviTopictitle + '&show_results=topics',
success: function(data) {
if ($(data).find(bailienquan).length == 0) {
$('#bailienquan').prev().remove();
$('#bailienquan').remove();
} else {
$(data).find(bailienquan).appendTo('#bailienquan');
$('#bailienquan a.topictitle').wrap("<li>

Unknown end tag for &lt;/li&gt;

");
$('#bailienquan a.topictitle').each(function() {
$(this).replaceWith('<a href="' + $(this).attr("href").slice(0, $(this).attr("href").indexOf("?")) + '" class="topictitle">' + $(this).text() + '

Unknown end tag for &lt;/a&gt;

');
});
};
},
error: function(jqXHR, textStatus, errorThrown) {
$('#bailienquan').html('<p><font face="Courier New"><font color="red">Có lỗi xảy ra trong quá trình tải dữ liệu.

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/p&gt;

');
}
});


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<script>jQuery(document).ready( function() {jQuery(".NAMBUSER15").load("/profile?mode=editprofile&page_profil=avatars #pun-visit p strong");});

Unknown end tag for &lt;/script&gt;

<script>function displaymenu(id,lr){ if(lr=="detrik"){var detrik=(($(document).width()/2)-($("#pun-navlinks").width()/3));$(id).css({"detrik":detrik}).slideToggle("slow")}else if(lr=="center"){var left=(($(document).width()-$(id).width())/2);$(id).css({"left":left}).slideToggle("slow")}}

Unknown end tag for &lt;/script&gt;

<script>jQuery(document).ready( function() {jQuery(".POSTERCOUNTSOUR").load("#fa_ticker_block .countpostredfami strong");});

Unknown end tag for &lt;/script&gt;

<script>jQuery(document).ready( function() {jQuery(".VISITELASWINERAD").load("#fa_ticker_block .lasvisitewarriner strong");});

Unknown end tag for &lt;/script&gt;


```


an