Dùng được cho cả Phpbb2 và Punbb cười nhăn răng

Bắt đầu làm nào

Bước 1 : Thêm đoạn sau vào Css

```

/*STATISTICI-------------------------------------------------*/

#title1{margin-left: -26px;}

#title2{margin-right: -26px;}

.title_center{
font-family: arial;
color: white;
font-weight: bold;
text-shadow: black 1px 1px 5px;
height: 43px;
padding-top: 12px;
font-size: 14px;
background: url(http://i46.servimg.com/u/f46/11/96/49/61/title_15.png) repeat-x;}

.title_center a{color: white !important;}

.title_left{
float: left;
width: 19px;
height: 50px;
background: WHITE url(http://i46.servimg.com/u/f46/11/96/49/61/title_20.png) no-repeat;}

.title_end_left{
float: right;
width: 103px;
height: 43px;
background: WHITE url(http://i46.servimg.com/u/f46/11/96/49/61/title_16.png) no-repeat;}

.title_right{
float: right;
width: 19px;
height: 50px;
background: WHITE url(http://i46.servimg.com/u/f46/11/96/49/61/title_21.png) no-repeat;
margin-right: -26px;}

.title_end_right{
float: left;
width: 103px;
height: 43px;
background: WHITE url(http://i46.servimg.com/u/f46/11/96/49/61/title_19.png) no-repeat;
margin-right: -55px;}

.cine_e_online{
padding-left: 26px;
background: url(http://i46.servimg.com/u/f46/11/96/49/61/fade_l10.png) repeat-y left;}

.statistici{
padding-right: 26px;
background: url(http://i46.servimg.com/u/f46/11/96/49/61/fade_r10.png) repeat-y right;}

.fade_end_left{
float: left;
width: 19px;
height: 20px;;
background: url(http://i46.servimg.com/u/f46/11/96/49/61/fade_e10.png) no-repeat;}

.fade_end_right{
float: right;
width: 19px;
height: 20px;
background: url(http://i46.servimg.com/u/f46/11/96/49/61/fade_e11.png) no-repeat;}

#forum_stats{margin-top: 5px;}

/*SFARSIT---STATISTICI-------------------------------------------------*/
```


Bước 2 : vào Index\_body tìm đoạn code sau :

```


<!-- BEGIN disable_viewonline -->
....
Đến
....
<!-- END disable_viewonline -->
```


Xóa đi và thay thế đoạn code sau :

```

<!-- BEGIN disable_viewonline -->



<div id="statistics">
<table align="center" cellpadding="1" cellspacing="10">
<tr>

<td width="70%" valign="top">
<div class="cine_e_online">

<div id="title1"> <div class="title_left">

Unknown end tag for &lt;/div&gt;

  <div class="title_end_left">

Unknown end tag for &lt;/div&gt;

 <div class="title_center">
<img src="{L_ONLINE_IMG}" alt="{L_WHO_IS_ONLINE}" /><a href="{U_VIEWONLINE}" rel="nofollow">{L_WHO_IS_ONLINE}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/div&gt;


{TOTAL_USERS_ONLINE}<br>{LOGGED_IN_USER_LIST}<br><br><p style="border-bottom: 1px solid #DDDDDD; padding: 5px; margin-top: -5px;">{L_CONNECTED_MEMBERS}

Unknown end tag for &lt;/p&gt;

<br><p style="padding: 5px; margin-top: 0px;"><div align="center">{LEGEND} : {GROUP_LEGEND}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;

 <div class="fade_end_left">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;





<td width="30%" valign="top">
<div class="statistici">
<div class="title_right">

Unknown end tag for &lt;/div&gt;

 <div id="title2"> <div class="title_end_right">

Unknown end tag for &lt;/div&gt;

 <div class="title_center" id="2">Statistici...

Unknown end tag for &lt;/p&gt;

 

Unknown end tag for &lt;/div&gt;

 

Unknown end tag for &lt;/div&gt;

  <p style="border-bottom: 1px solid #DDDDDD; padding: 5px; margin-top: -5px;">{TOTAL_POSTS}

Unknown end tag for &lt;/p&gt;

<br><p style="border-bottom: 1px solid #DDDDDD; padding: 5px; margin-top: -5px;">{TOTAL_USERS}
<br><p style="border-bottom: 1px solid #DDDDDD; padding: 5px; margin-top: -5px;">{NEWEST_USER}

Unknown end tag for &lt;/p&gt;

<br><p style="padding: 5px; margin-top: -5px;">{RECORD_USERS}

Unknown end tag for &lt;/p&gt;





Unknown end tag for &lt;/div&gt;

 <div class="fade_end_right">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;





Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;





<!-- END disable_viewonline -->
```

Ok thế là xong