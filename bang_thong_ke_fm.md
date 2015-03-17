demo

![http://img24.imageshack.us/img24/156/26987517.png](http://img24.imageshack.us/img24/156/26987517.png)
http://www.xaydungthanhhoa.com/


cách làm:
vào index body tìm code

```

<!-- BEGIN disable_viewonline -->
<div id="pun-info" class="main">
<div class="main-content">
<div id="stats">
<p class="right">{TOTAL_POSTS}

Unknown end tag for &lt;/p&gt;


<p>{TOTAL_USERS}

Unknown end tag for &lt;/p&gt;


<p>{NEWEST_USER}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<div id="onlinelist">
<img src="{L_ONLINE_IMG}" alt="{L_WHO_IS_ONLINE}" />
<p class="right">
<!-- BEGIN switch_viewonline_link -->
<a href="{U_VIEWONLINE}" rel="nofollow">{L_WHO_IS_ONLINE}

Unknown end tag for &lt;/a&gt;


<!-- END switch_viewonline_link -->
<!-- BEGIN switch_viewonline_nolink -->
{L_WHO_IS_ONLINE}
<!-- END switch_viewonline_nolink -->


Unknown end tag for &lt;/p&gt;


<p>{TOTAL_USERS_ONLINE}<br />
{RECORD_USERS}

<br />
{LOGGED_IN_USER_LIST}

{L_ONLINE_USERS}
{L_CONNECTED_MEMBERS}<br />
{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/p&gt;


<div class="clear">

Unknown end tag for &lt;/div&gt;



<p>{LEGEND}&nbsp;:&nbsp;{GROUP_LEGEND}

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;


<!-- BEGIN switch_chatbox_activate -->
<div id="onlinechat">
<p class="page-bottom">
{TOTAL_CHATTERS_ONLINE}&nbsp;:&nbsp;
{CHATTERS_LIST}<br />
<!-- BEGIN switch_chatbox_popup -->
<div id="chatbox_popup">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');


Unknown end tag for &lt;/script&gt;


<!-- END switch_chatbox_popup -->


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_chatbox_activate -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END disable_viewonline -->


```
thay bằng code

```

<!-- BEGIN disable_viewonline -->


<br/>



<table id="general-stats" cellspacing="0" cellpadding="0">

<td id="online">

<div class="on-title"> <a href="{U_VIEWONLINE}" rel="nofollow"> <img class="globe" src="http://i36.servimg.com/u/f36/11/96/49/61/earth10.png"/> {L_WHO_IS_ONLINE} 

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/div&gt;



<div class="online-content">

{TOTAL_USERS_ONLINE}
<br/>
{LOGGED_IN_USER_LIST}
<br/>

{L_CONNECTED_MEMBERS}



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;





<td id="statistics">

<div class="stats-title"> <a href="#" rel="nofollow"> <img class="chart" src="http://i36.servimg.com/u/f36/11/96/49/61/partie10.png"/> STATISTICS

Unknown end tag for &lt;/a&gt;

 

Unknown end tag for &lt;/div&gt;



<div class="stats-content">

{TOTAL_POSTS}
<br/>
{TOTAL_USERS}
<br/>
{NEWEST_USER}
<br/>
{RECORD_USERS}



Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/table&gt;



<br/>


<div class="main-box" id="legend">
<div align="left" class="legend">{LEGEND} : {GROUP_LEGEND}

Unknown end tag for &lt;/div&gt;



<a href="/groups" class="groups" align="right">Groups

Unknown end tag for &lt;/a&gt;





Unknown end tag for &lt;/div&gt;



<!-- BEGIN switch_chatbox_activate -->
<div id="onlinechat">
<p class="page-bottom">
{TOTAL_CHATTERS_ONLINE}&nbsp;:&nbsp;
{CHATTERS_LIST}<br />
<!-- BEGIN switch_chatbox_popup -->
<div id="chatbox_popup">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');


Unknown end tag for &lt;/script&gt;


<!-- END switch_chatbox_popup -->


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_chatbox_activate -->

<!-- END disable_viewonline -->

```

tiếp theo cho code này vào css

```


#general-stats{
width: 100%;
text-shadow: 1px 1px 0 white;
background: #f5f5f5;
-moz-box-shadow: 0px 0px 7px 0px #dcdcdc;
-webkit-box-shadow: 0px 0px 7px 0px #dcdcdc;
box-shadow: 0px 0px 7px 0px #dcdcdc;
border: 1px solid white;}

#statistics{
vertical-align: top;
padding-bottom: 15px;
border-left: 1px solid white;
width: 100%;
float: right;}

#statistics .stats-title{background: #e3e3e3;}

.stats-content{
border-top: 1px solid #d9d9d9;
padding: 15px;}

#online{
vertical-align: top;
border-right: 2px solid #d2d2d2;
background: #eaeaea;
width: 60%;}

#online .on-title{background: #f3f3f3;}

#online .on-title, #statistics .stats-title{
height: 70px;
padding 0 0 0 20px;
text-transform: uppercase;
font-size: 30px;
border-bottom: 1px solid white;}

#online .on-title a, #statistics .stats-title a{
font-family: Century Gothic !important;
bottom: -23px;
position: relative;
left: 20px;}


.online-content{
border-top: 1px solid #d9d9d9;
padding: 15px;}
#legend{margin: 25px 0;}

.groups{
background: url(http://i36.servimg.com/u/f36/11/96/49/61/custom10.png) no-repeat left;
padding: 5px 0 5px 18px;
float: right;
margin-top: -22px;}


```