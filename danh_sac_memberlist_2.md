![http://i14.servimg.com/u/f14/17/53/19/32/dsds10.png](http://i14.servimg.com/u/f14/17/53/19/32/dsds10.png)

```
    <div class="main frm">
<a name="fmvimem">

Unknown end tag for &lt;/a&gt;


<div class="main-head Sname">
<h1 style="float: left;" class="page-title">Danh sách thành viên

Unknown end tag for &lt;/h1&gt;


<a href="?username=A">A

Unknown end tag for &lt;/a&gt;


<a href="?username=B">B

Unknown end tag for &lt;/a&gt;


<a href="?username=C">C

Unknown end tag for &lt;/a&gt;


<a href="?username=D">D

Unknown end tag for &lt;/a&gt;


<a href="?username=E">E

Unknown end tag for &lt;/a&gt;


<a href="?username=F">F

Unknown end tag for &lt;/a&gt;


<a href="?username=G">G

Unknown end tag for &lt;/a&gt;


<a href="?username=H">H

Unknown end tag for &lt;/a&gt;


<a href="?username=I">I

Unknown end tag for &lt;/a&gt;


<a href="?username=J">J

Unknown end tag for &lt;/a&gt;


<a href="?username=K">K

Unknown end tag for &lt;/a&gt;


<a href="?username=L">L

Unknown end tag for &lt;/a&gt;


<a href="?username=M">M

Unknown end tag for &lt;/a&gt;


<a href="?username=N">N

Unknown end tag for &lt;/a&gt;


<a href="?username=O">O

Unknown end tag for &lt;/a&gt;


<a href="?username=P">P

Unknown end tag for &lt;/a&gt;


<a href="?username=Q">Q

Unknown end tag for &lt;/a&gt;


<a href="?username=R">R

Unknown end tag for &lt;/a&gt;


<a href="?username=S">S

Unknown end tag for &lt;/a&gt;


<a href="?username=T">T

Unknown end tag for &lt;/a&gt;


<a href="?username=U">U

Unknown end tag for &lt;/a&gt;


<a href="?username=V">V

Unknown end tag for &lt;/a&gt;


<a href="?username=W">W

Unknown end tag for &lt;/a&gt;


<a href="?username=X">X

Unknown end tag for &lt;/a&gt;


<a href="?username=Y">Y

Unknown end tag for &lt;/a&gt;


<a href="?username=Z">Z

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;


<div class="paged-foot clearfix" id="sapxepFMvi">
<form action="{S_MODE_ACTION}" method="get" class="form-frm">
<span>{L_USER_SELECT}

Unknown end tag for &lt;/span&gt;


<input type="text" class="inputbox" name="username" maxlength="25" size="20" value="{L_USER_SELECT_VALUE}" />
<span>{L_SELECT_SORT_METHOD}

Unknown end tag for &lt;/span&gt;

{S_MODE_SELECT}
<span>{L_ORDER}

Unknown end tag for &lt;/span&gt;

{S_ORDER_SELECT} {S_HIDDEN_SID}
<input type="submit" value="Tìm thành viên" name="submit" style="margin: 8px 40px; float: right ! important;" />


Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-content">
<fieldset class="frm-set clearfix">
<!-- BEGIN memberrow -->
<div class="memberM">
<p class="nameM">
<a class="gen" href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/p&gt;


<span class="linkM">{memberrow.PM_IMG}{memberrow.WWW_IMG}

Unknown end tag for &lt;/span&gt;


<p class="avatarM">{memberrow.AVATAR_IMG}

Unknown end tag for &lt;/p&gt;


<dl class="infoM">
<!-- BEGIN switch_td_group -->
<dt>Groups:

Unknown end tag for &lt;/dt&gt;


<dd>{memberrow.GROUPS}

Unknown end tag for &lt;/dd&gt;


<!-- END switch_td_group -->
<dt>Join:

Unknown end tag for &lt;/dt&gt;


<dd>{memberrow.JOINED}

Unknown end tag for &lt;/dd&gt;


<dt>Last visit:

Unknown end tag for &lt;/dt&gt;


<dd>{memberrow.LASTVISIT}

Unknown end tag for &lt;/dd&gt;


<dt>Posts:

Unknown end tag for &lt;/dt&gt;


<dd>{memberrow.POSTS}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<span class="zoom-out">

Unknown end tag for &lt;/span&gt;


<span class="zoom-in">

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<!-- END memberrow -->


Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<div class="main-head greenBgT" style="position: relative;">
<!-- BEGIN switch_pagination -->
<p class="paging memlist" style="margin: 0;">{PAGINATION}

Unknown end tag for &lt;/p&gt;


<!-- END switch_pagination -->
<h1 style="position: absolute; top: 8px; right: 10px;">
<a style="color:#FFF" href="#fmvimem" id="chimlX">Danh sách chi tiết

Unknown end tag for &lt;/a&gt;


<a style="display:none; color:#FFF" href="#fmvimem" id="rutmlX">Danh sách rút gọn

Unknown end tag for &lt;/a&gt;


<img src="http://i48.servimg.com/u/f48/16/58/89/73/stock_11.png" />


Unknown end tag for &lt;/h1&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;


<div id="memberShow">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
$(".zoom-in").click(function () {
$(this).parents(".memberM").wrap('<div id="popipUser">

Unknown end tag for &lt;/div&gt;

');
$("#memberShow").show().css("opacity", "0.5");
});

$(".zoom-out").click(function () {
$(this).parents(".memberM").unwrap();
$("#memberShow").hide();
});

if (my_getcookie("memberlist") != null) {
$(".memberM").height(210);
$(".greenBgT h1 a").toggle();
}
$(".greenBgT h1 a").click(function () {
$(".greenBgT h1 a").toggle();
if ($(this).attr("id") == "chimlX") {
$(".memberM").height(210);
my_setcookie("memberlist", "full")
} else {
$(".memberM").height(30);
document.cookie = "memberlist=; expires=Monday, December 1, 2010 0:0:0 AM;"
}
});


Unknown end tag for &lt;/script&gt;



<style>
.Sname a{background-color:#FFF;border:1px solid #DDD;margin:2px;padding:1px 5px}
.Sname a:hover,.Sname a:active{background-color:#2F98D9;color:#FFF}
.Sname{text-align:right}
.rutgonML img{background-color:#000;border:3px double;border-radius:7px 7px 7px 7px;height:75px;width:72%;margin:10px}
.rutgonML{float:left;width:10%}
.rutgonML p{background-color:#C2BFBF;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 2px;padding:2px 5px}
.rutgonML:hover{box-shadow:0 0 10px 5px #000}
.memberM{overflow:hidden;border:3px double #666666;float:left;height:30px;position:relative;width:151px;margin:10px;}
.avatarM{overflow:hidden;background-color:transparent;height:180px;position:absolute;top:30px;width:100%;}
.infoM dt{clear:left;float:left!important;text-align:left!important;width:auto!important;margin:0!important;padding:0 5px!important;}
.infoM dd{width:85px;color:#2159FF;margin:0!important;padding:0!important;}
.nameM{background-color:#666;height:20px;left:0;line-height:20px;position:absolute;right:0;text-shadow:1px 1px #000;top:0;width:100%;z-index:150;padding:5px 10px}
.linkM{position:absolute;right:0;z-index:200;display:none;margin:7px;}
.linkM > a{padding:0 5px;}
.avatarM > img{bottom:0;position:absolute;width:100%;}
.infoM{background-color:rgba(255,255,255,0.77);bottom:0;font-size:10px;font-weight:700;left:0;position:absolute;right:0;z-index:100;display:none;padding:5px 0;}
.memberM:hover .infoM,.memberM:hover .linkM,.memberM:hover .zoom-in{display:block;}
.infoM dd,.nameM{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#popipUser{border-radius:5px;left:50%;z-index:999;background-color:#FFF;top:50%;position:fixed;margin-top:-180px;margin-left:-140px;}
#popipUser .memberM{height:334px!important;width:254px;}
#popipUser .avatarM{height:304px;}
#popipUser:hover .zoom-out{display:block}
#popipUser:hover .zoom-in{display:none!important}
#popipUser dd{width:150px;}
.zoom-in,.zoom-out{cursor:pointer;background:url(http://i15.servimg.com/u/f15/16/58/89/73/zoom10.png) no-repeat scroll 0 0 transparent;display:none;left:50%;margin-left:-24px;margin-top:-24px;position:absolute;top:50%;z-index:120;}
.zoom-in{background-position:0 0;width:48px;height:48px;}
.zoom-out{background-position:0 -48px;width:48px;height:48px;}


Unknown end tag for &lt;/style&gt;

```