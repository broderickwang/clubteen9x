﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="vi" xml:lang="vi">
<head>

<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-style-type" content="text/css" />
<meta http-equiv="content-language" content="vi" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="resource-type" content="document" />
<meta name="distribution" content="global" />
<meta name="copyright" content="2000, 2002, 2005, 2007 phpBB Group" />
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />

<title>CÙNG NHAU HỌC TẬP &bull; </title>



<!--
	phpBB style name: Supernova
	Based on style:   prosilver (this is the default phpBB3 style)
	Original author:  Tom Beddard ( http://www.subBlue.com/ )
	Modified by: Christian Bullock ( http://www.ChristianBullock.com )

	NOTE: This page was generated by phpBB, the free open-source bulletin board package.
	      The phpBB Group is not responsible for the content of this page and forum. For more information
	      about phpBB please visit http://www.phpbb.com
-->

<script type="text/javascript">
// <![CDATA[
	var jump_page = 'Nhập vào số trang bạn muốn chuyển đến.:';
	var on_page = '';
	var per_page = '';
	var base_url = '';
	var style_cookie = 'phpBBstyle';
	var style_cookie_settings = '; path=/; domain=forum-win.com';
	var onload_functions = new Array();
	var onunload_functions = new Array();

	

	/**
	* Find a member
	*/
	function find_username(url)
	{
		popup(url, 760, 570, '_usersearch');
		return false;
	}

	/**
	* New function for handling multiple calls to window.onload and window.unload by pentapenguin
	*/
	window.onload = function()
	{
		for (var i = 0; i < onload_functions.length; i++)
		{
			eval(onload_functions[i]);
		}
	}

	window.onunload = function()
	{
		for (var i = 0; i < onunload_functions.length; i++)
		{
			eval(onunload_functions[i]);
		}
	}

// ]]>
</script>
<script type="text/javascript" src="http://baivong.googlecode.com/files/styleswitcher.js"></script>
<script type="text/javascript" src="http://baivong.googlecode.com/files/forum_fn.js"></script>

<script type="text/javascript" src="http://baivong.googlecode.com/files/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="http://baivong.googlecode.com/files/jquery.tipsy.js"></script>
<script type="text/javascript" src="http://baivong.googlecode.com/files/colour-switcher.js"></script>

<script type="text/javascript" src="http://baivong.googlecode.com/files/ui.js"></script>
<script type="text/javascript" src="http://baivong.googlecode.com/files/cookie.js"></script>
<script type="text/javascript" src="http://baivong.googlecode.com/files/cats.js"></script>


<script type="text/javascript">
$(document).ready(function() {
	$('#sn-not-logged-in').mouseenter(function() {
		$('#sn-not-logged-in-hover').fadeIn('medium');
	});
	$('#sn-not-logged-in-hover').mouseleave(function() {
		$('#sn-not-logged-in-hover').fadeOut('medium');
	});
});
</script>
<script type="text/javascript">
$(document).ready(function(){
	$("input:checkbox").each( function() {
		(this.checked) ? $("#fake"+this.id).addClass('fakechecked') : $("#fake"+this.id).removeClass('fakechecked');
	});
	$(".fakecheck").click(function(){
		($(this).hasClass('fakechecked')) ? $(this).removeClass('fakechecked') : $(this).addClass('fakechecked');
		$(this.hash).trigger("click");
		return false;
	});
});
</script>

<script type='text/javascript'>
	$(function() {
		$('div.colour-block').tipsy({fade: true, gravity: 's'});
	});
</script>


<link href="http://forum-win.com/styles/supernova/theme/print.css" rel="stylesheet" type="text/css" media="print" title="printonly" />

<link href="http://forum-win.com/style.php?id=2&amp;lang=en&amp;sid=e5e0890898b71cba0baf71da96b99a55" rel="stylesheet" type="text/css" media="screen, projection" />

<!-- Blank stylesheet connection ** Do not delete ** -->
<link rel="stylesheet" href="http://forum-win.com/styles/supernova/theme/colour-switcher.css" type="text/css" class="colour-switcher" />
<!-- End of blank stylesheet --><!-- This javascript needs to be after the blank stylesheet for it to work properly -->
<script type="text/javascript">
      if($.cookie("sn_board_style")) {
         $("link.colour-switcher").attr("href",$.cookie("sn_board_style"));
      }
   $(document).ready(function() { 
      $("div.colour-block span a").click(function() { 
         $("link.colour-switcher").attr("href",$(this).attr('rel'));
         $.cookie("sn_board_style",$(this).attr('rel'), {expires: 365, path: '/'});
         return false;
      });
   });
</script>

<!--[if IE]>
	<link rel="stylesheet" type="text/css" href="http://forum-win.com/styles/supernova/theme/ie.css" />
<![endif]-->
</head>

<body id="phpbb" class="section-index ltr">


<div id="sn-header">
<a id="top" name="top" accesskey="t"></a>
<div id="sn-header-content">

<a id="sn-logo" href="http://forum-win.com/index.php"><img src="http://forum-win.com/styles/supernova/theme/images/logo-text-only.png" width="484" height="100" alt="" /></a>

<div id="sn-controlbox">


<div id="sn-not-logged-in"></div>
<div id="sn-not-logged-in-hover">
<div id="sn-nli-content">

<form method="post" action="http://forum-win.com/ucp.php?mode=login">
<fieldset style="margin-top: -5px;">
<span class="sn-form-label">Tên thành viên:</span><br />
<input type="text" name="username" class="sn-nli-form" title="Tên thành viên" />
<span class="sn-form-label">Mật khẩu:</span><br />
<input type="password" name="password" class="sn-nli-form" title="Mật khẩu" />

<a href="ucp.php?mode=sendpassword">Quên mật khẩu</a> | <a href="http://forum-win.com/ucp.php?mode=register">Đăng ký</a>
<br /><br />
<a href="#autologin2" class="fakecheck" id="fakeautologin2">Đăng nhập tự động</a><input type="checkbox" name="autologin" id="autologin2" style="display: none;" />
<div style="clear: both;"><a href="#hidestatus" class="fakecheck" id="fakehidestatus">Ẩn trạng thái trực tuyến của tôi</a><input type="checkbox" name="viewonline" id="hidestatus" style="display: none;" /></div>
<input type="submit" name="login" value="" id="sn-nli-button" />
</fieldset>
</form>
</div><!-- /sn-nli-content -->
</div><!-- /sn-not-logged-in-hover --><!-- /s-user-not-logged-in --><!-- /s-user-logged-in-->

</div><!-- /sn-controlbox -->

</div><!-- /sn-header-content -->
</div><!-- /sn-header -->

<div id="sn-navbar">
<div id="sn-navbar-content">

<div style="float: left;">
<img src="http://forum-win.com/styles/supernova/theme/images/house.png" width="16" height="16" alt="" /><a href="http://forum-win.com/index.php">Trang chủ</a> &nbsp;
<img src="http://forum-win.com/styles/supernova/theme/images/information.png" width="16" height="16" alt="" /><a href="http://forum-win.com/faq.php">Trợ giúp</a> &nbsp;
<img src="http://forum-win.com/styles/supernova/theme/images/magnifier.png" width="16" height="16" alt="" /><a href="http://forum-win.com/search.php">Tìm kiếm</a> &nbsp;

</div><!-- /float left -->
<div class="colour-block" title="Choose Style Colour">
<span>
<a href="#" rel="http://forum-win.com/styles/supernova/theme/colours/red.css"><img src="http://forum-win.com/styles/supernova/theme/images/red-cube.png" width="12" height="12" alt="" class="colour-block" /></a>
<a href="#" rel="http://forum-win.com/styles/supernova/theme/colours/green.css"><img src="http://forum-win.com/styles/supernova/theme/images/green-cube.png" width="12" height="12" alt="" class="colour-block" /></a>
<a href="#" rel="http://forum-win.com/style.php?id=2&amp;lang=en&amp;sid=e5e0890898b71cba0baf71da96b99a55"><img src="http://forum-win.com/styles/supernova/theme/images/blue-cube.png" width="12" height="12" alt="" class="colour-block" /></a>


<script type="text/javascript">
	$('div.colour-block span a').styleSwitcher();
</script>


</span>
</div><!-- /colour-block -->

<div style="float: right;">
<img src="http://forum-win.com/styles/supernova/theme/images/add.png" width="16" height="16" alt="" /><a href="http://forum-win.com/ucp.php?mode=register">Đăng ký</a>&nbsp; <img src="http://forum-win.com/styles/supernova/theme/images/key.png" width="16" height="16" alt="" /><a href="http://forum-win.com/ucp.php?mode=login">Đăng nhập</a>

</div>

</div><!-- /sn-navbar-content -->
</div><!-- /sn-navbar -->



<div id="sn-shadows">
<div class="sn-breadcrumbs">
<img src="http://forum-win.com/styles/supernova/theme/images/house.png" width="16" height="16" alt="" /><a href="http://forum-win.com/index.php" accesskey="h">Trang chủ</a> 
</div>
<div class="sn-options sn-search-links">

<a href="http://forum-win.com/search.php?search_id=unanswered">Xem bài viết chưa trả lời</a> &bull; <a href="http://forum-win.com/search.php?search_id=active_topics">Xem chủ đề đang hoạt động</a><!-- /script-name-eq-index -->

</div>
<div style="clear: both; height: 1px;" class="annoying-ie-spacing-issue"></div>
<a name="start_here"></a><div id="page-body"><div id="forumlist">

    <div id="sn-category-1" class="iewidth">
		<div class="sn-cat-header">
        
        	<ul class="topiclist">
				<li class="header">
					<dl class="icon">
						<dt>

                        	<div class="cat-name">
            					<span><a href="http://forum-win.com/viewforum.php?f=1">..: HƯỚNG DẪN ..:</a></span>
           					</div>
                        </dt>
						<dd class="topics sn-cat-header-label">Chủ đề</dd>
						<dd class="posts sn-cat-header-label">Bài viết</dd>
						<dd class="lastpost sn-cat-header-label"><span>Bài viết mới nhất</span></dd>

                        <dd class="sn-forumlist-controls">
                        	<div class="sn-move-icon" ></div>
                        </dd>
					</dl>
				</li>
			</ul>
        </div><!-- /cat-header -->
                <div class="sn-cat-row" id="sn-row-1">
			<ul class="topiclist forums">

	
		<li class="row">
			<dl class="icon sn-index-icon" style="background-image: url(http://forum-win.com/styles/supernova/imageset/forum_read.png); background-repeat: no-repeat; padding-left: 40px;">
				<dt title="Không có bài viết mới">
				
					<a href="http://forum-win.com/viewforum.php?f=2" class="forumtitle">PHOTOSHOP</a><br />
					<span class="sn-forum-description">HƯỚNG DẪN PHOTOSHOP<br />NHỮNG THỦ THUẬT HAY VỀ PHOTOSHOP</span>
					
				</dt>
				
					<dd class="topics"><span class="sn-big-stat">3</span> <dfn>Chủ đề</dfn></dd>

					<dd class="posts"><span class="sn-big-stat">3</span> <dfn>Bài viết</dfn></dd>
					<dd class="lastpost"><span class="sn-forum-description">
						<dfn>Bài viết mới nhất</dfn> <a href="http://forum-win.com/viewtopic.php?f=2&t=34" title="Nâng Vòng 1 Tuyệt Vời Bằng PS">Nâng Vòng 1 Tuyệt Vờ...</a><br />gửi bởi <a href="http://forum-win.com/memberlist.php?mode=viewprofile&amp;u=66">PS.pro</a>
						<a href="http://forum-win.com/viewtopic.php?f=2&amp;p=41#p41"><img src="http://forum-win.com/styles/supernova/imageset/icon_topic_latest.gif" width="11" height="9" alt="Xem bài viết mới nhất vừa gửi" title="Xem bài viết mới nhất vừa gửi" /></a> <br />Thứ 5 Tháng 11 11, 2010 1:36 am</span>

					</dd>
				
			</dl>
		</li>
	
		<li class="row">
			<dl class="icon sn-index-icon" style="background-image: url(http://forum-win.com/styles/supernova/imageset/forum_read.png); background-repeat: no-repeat; padding-left: 40px;">
				<dt title="Không có bài viết mới">
				
					<a href="http://forum-win.com/viewforum.php?f=10" class="forumtitle">FORUM PHPBB</a><br />
					<span class="sn-forum-description"><img src="http://i87.servimg.com/u/f87/14/17/42/10/subfor10.gif" alt="Hình ảnh" />  <a href="http://forum-win.com/viewforum.php?f=19" class="postlink">CHIA SẺ CODE Forumotion</a> | <img src="http://i87.servimg.com/u/f87/14/17/42/10/subfor10.gif" alt="Hình ảnh" /> <a href="http://forum-win.com/viewforum.php?f=25" class="postlink">Share Skin Forumotion</a><br /><img src="http://i87.servimg.com/u/f87/14/17/42/10/subfor10.gif" alt="Hình ảnh" /> <a href="http://forum-win.com/viewforum.php?f=30" class="postlink">Yêu Cầu Rip Skin Forumotion</a></span>

					
				</dt>
				
					<dd class="topics"><span class="sn-big-stat">9</span> <dfn>Chủ đề</dfn></dd>
					<dd class="posts"><span class="sn-big-stat">19</span> <dfn>Bài viết</dfn></dd>
					<dd class="lastpost"><span class="sn-forum-description">
						<dfn>Bài viết mới nhất</dfn> <a href="http://forum-win.com/viewtopic.php?f=10&t=46" title="C4u4m0nlin3 cho xin cac phan da chinh sua trong dislay:D">C4u4m0nlin3 cho xin ...</a><br />gửi bởi <a href="http://forum-win.com/memberlist.php?mode=viewprofile&amp;u=75">Mr.Key</a>

						<a href="http://forum-win.com/viewtopic.php?f=19&amp;p=65#p65"><img src="http://forum-win.com/styles/supernova/imageset/icon_topic_latest.gif" width="11" height="9" alt="Xem bài viết mới nhất vừa gửi" title="Xem bài viết mới nhất vừa gửi" /></a> <br />Thứ 7 Tháng 11 13, 2010 1:54 pm</span>
					</dd>
				
			</dl>
		</li>
	
		<li class="row">
			<dl class="icon sn-index-icon" style="background-image: url(http://forum-win.com/styles/supernova/imageset/forum_read.png); background-repeat: no-repeat; padding-left: 40px;">
				<dt title="Không có bài viết mới">
				
					<a href="http://forum-win.com/viewforum.php?f=11" class="forumtitle">WORDPRESS</a><br />

					<span class="sn-forum-description"></span>
					
				</dt>
				
					<dd class="topics"><span class="sn-big-stat">2</span> <dfn>Chủ đề</dfn></dd>
					<dd class="posts"><span class="sn-big-stat">4</span> <dfn>Bài viết</dfn></dd>
					<dd class="lastpost"><span class="sn-forum-description">
						<dfn>Bài viết mới nhất</dfn> <a href="http://forum-win.com/viewtopic.php?f=11&t=12" title="WORDPRESS TOÀN TẬP">WORDPRESS TOÀN ...</a><br />gửi bởi <a href="http://forum-win.com/memberlist.php?mode=viewprofile&amp;u=2" style="color: #AA0000;" class="username-coloured">mr.hoang</a>

						<a href="http://forum-win.com/viewtopic.php?f=11&amp;p=26#p26"><img src="http://forum-win.com/styles/supernova/imageset/icon_topic_latest.gif" width="11" height="9" alt="Xem bài viết mới nhất vừa gửi" title="Xem bài viết mới nhất vừa gửi" /></a> <br />Thứ 7 Tháng 10 02, 2010 3:22 pm</span>
					</dd>
				
			</dl>
		</li>
	
			</ul>
		</div><!-- /sn-cat-row -->
		<div class="sn-cat-footer"></div><!-- /sn-cat-footer -->
    


     </div><!-- sn-category-forumID -->

    <div id="sn-category-3" class="iewidth">
		<div class="sn-cat-header">
        
        	<ul class="topiclist">
				<li class="header">
					<dl class="icon">
						<dt>
                        	<div class="cat-name">
            					<span><a href="http://forum-win.com/viewforum.php?f=3">__: TEMPLATE FREE :__</a></span>

           					</div>
                        </dt>
						<dd class="topics sn-cat-header-label">Chủ đề</dd>
						<dd class="posts sn-cat-header-label">Bài viết</dd>
						<dd class="lastpost sn-cat-header-label"><span>Bài viết mới nhất</span></dd>
                        <dd class="sn-forumlist-controls">
                        	<div class="sn-move-icon" ></div>

                        </dd>
					</dl>
				</li>
			</ul>
        </div><!-- /cat-header -->
                <div class="sn-cat-row" id="sn-row-3">
			<ul class="topiclist forums">
	
		<li class="row">
			<dl class="icon sn-index-icon" style="background-image: url(http://forum-win.com/styles/supernova/imageset/forum_read.png); background-repeat: no-repeat; padding-left: 40px;">

				<dt title="Không có bài viết mới">
				
					<a href="http://forum-win.com/viewforum.php?f=9" class="forumtitle">..: WORDPRESS :..</a><br />
					<span class="sn-forum-description"></span>
					
				</dt>
				
					<dd class="topics"><span class="sn-big-stat">5</span> <dfn>Chủ đề</dfn></dd>
					<dd class="posts"><span class="sn-big-stat">7</span> <dfn>Bài viết</dfn></dd>

					<dd class="lastpost"><span class="sn-forum-description">
						<dfn>Bài viết mới nhất</dfn> <a href="http://forum-win.com/viewtopic.php?f=9&t=36" title="Abis WordPress Template">Abis WordPress Templ...</a><br />gửi bởi <a href="http://forum-win.com/memberlist.php?mode=viewprofile&amp;u=67">wordpress</a>
						<a href="http://forum-win.com/viewtopic.php?f=9&amp;p=43#p43"><img src="http://forum-win.com/styles/supernova/imageset/icon_topic_latest.gif" width="11" height="9" alt="Xem bài viết mới nhất vừa gửi" title="Xem bài viết mới nhất vừa gửi" /></a> <br />Thứ 5 Tháng 11 11, 2010 2:09 am</span>
					</dd>
				
			</dl>

		</li>
	
		<li class="row">
			<dl class="icon sn-index-icon" style="background-image: url(http://forum-win.com/styles/supernova/imageset/forum_read.png); background-repeat: no-repeat; padding-left: 40px;">
				<dt title="Không có bài viết mới">
				
					<a href="http://forum-win.com/viewforum.php?f=4" class="forumtitle">..: HTML &amp; CSS :..</a><br />
					<span class="sn-forum-description"></span>
					
				</dt>

				
					<dd class="topics"><span class="sn-big-stat">2</span> <dfn>Chủ đề</dfn></dd>
					<dd class="posts"><span class="sn-big-stat">2</span> <dfn>Bài viết</dfn></dd>
					<dd class="lastpost"><span class="sn-forum-description">
						<dfn>Bài viết mới nhất</dfn> <a href="http://forum-win.com/viewtopic.php?f=4&t=35" title="Enterprise- Child Theme for the Genesis">Enterprise- Child Th...</a><br />gửi bởi <a href="http://forum-win.com/memberlist.php?mode=viewprofile&amp;u=55">themescss</a>

						<a href="http://forum-win.com/viewtopic.php?f=4&amp;p=42#p42"><img src="http://forum-win.com/styles/supernova/imageset/icon_topic_latest.gif" width="11" height="9" alt="Xem bài viết mới nhất vừa gửi" title="Xem bài viết mới nhất vừa gửi" /></a> <br />Thứ 5 Tháng 11 11, 2010 2:06 am</span>
					</dd>
				
			</dl>
		</li>
	
			</ul>
		</div><!-- /sn-cat-row -->
		<div class="sn-cat-footer"></div><!-- /sn-cat-footer -->
    


     </div><!-- sn-category-forumID -->


</div><!-- sn-category-forumID -->
</div><!-- /#forumlist -->




<div id="page-footer">

	<div class="navbar">
		<div class="inner"><span class="corners-top"><span></span></span>

		<ul class="linklist">
			<li class="icon-home"><a href="http://forum-win.com/index.php" accesskey="h">Trang chủ</a></li>
				
			<li class="rightside"><a href="http://forum-win.com/memberlist.php?mode=leaders">Ban điều hành</a> &bull; <a href="http://forum-win.com/ucp.php?mode=delete_cookies">Xoá cookie của website</a> &bull; Thời gian được tính theo giờ UTC </li>

		</ul>

		<span class="corners-bottom"><span></span></span></div>
	</div>

<!--
	We request you retain the full copyright notice below including the link to www.phpbb.com.
	This not only gives respect to the large amount of time given freely by the developers
	but also helps build interest, traffic and use of phpBB3. If you (honestly) cannot retain
	the full copyright we ask you at least leave in place the "Powered by phpBB" line, with
	"phpBB" linked to www.phpbb.com. If you refuse to include even this then support on our
	forums may be affected.

	The phpBB Group : 2006
//-->

	<div class="copyright">Powered by <a href="http://www.phpbb.com/">phpBB</a> &copy; 2000, 2002, 2005, 2007 phpBB Group<br />

    
    <!-- Style Released under Creative Commons Attribution 3.0 Unported License - NOT GPL!. Therefore removing the following copyright breaks intellectual copyright laws -->
    <span style="letter-spacing: 0.1px;">&copy; Supernova Style by <a href="http://www.christianbullock.com">Christian Bullock</a></span><br />
    <!-- For permission to remove the Copyright, please contact me via my website: www.christianbullock.com. Thanks :) --><br />Vietnamese language pack for phpBB 3.0.x <a href="http://www.phpbb.com/community/viewtopic.php?f=66&t=2101639" target="_blank">download and support</a>.
	</div>
</div>


<div>

	<a id="bottom" name="bottom" accesskey="z"></a>
	
</div>

</div><!-- /sn-shadows -->



</body>
</html>