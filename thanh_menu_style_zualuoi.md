demo: http://www.thedesignforums.net/
cách làm:
chèn vào css:

```


#nav_top {
background: url("http://i45.servimg.com/u/f45/14/65/46/14/nav-im10.png") repeat-x scroll 50% 0 transparent;
box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
height: 47px;
left: 0;
position: fixed;
top: 0;
width: 100%;
z-index: 999;
}
#logo {
float: left;
}
#logo a {
color: #FFFFFF;
display: block;
font-family: Oswald,"Trebuchet MS",Arial,Helvetica,sans-serif;
font-size: 24px;
height: 40px;
line-height: 40px;
padding: 6px 12px 0;
text-decoration: none;
text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
text-transform: uppercase;
margin-left: 137px;
}
#logo a:hover {
background: none repeat scroll 0 0 rgba(255, 255, 255, 0.1);
}
#fd_nav {
float: left;
font-size: 13;
font-weight: normal;
font-family: "Abel",arial,serif;
letter-spacing: 0.2px;
z-index: 999;
}
#fd_nav li {
margin: 0;
position: relative;
list-style: none;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8)
}
#fd_nav a {
color: #FFFFFF;
display: block;
height: 40px;
line-height: 40px;
outline: medium none;
padding: 6px 15px 0;
text-decoration: none;
}
#fd_nav a:hover, #fd_nav a.menu_active {
background: none repeat scroll 0 0 rgba(255, 255, 255, 0.1);
color: #FFFFFF;
text-decoration: none;
}
#fd_nav .active a {
background: none repeat scroll 0 0 rgba(255, 255, 255, 0.1);
color: #fff;
position: relative;
}

```
vào header tìm code

```

<div id="pun-navlinks">
<ul class="clearfix">
<li>{GENERATED_NAV_BAR}

Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


```



thay bằng code

```

<div id="nav_top" style="background-color: rgb(50, 106, 148);"> <div id='logo'><a href='#' title='' rel="home" accesskey='1'>Forum Design

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;


<div id="nav_top" style="background-color: rgb(50, 106, 148);"> <div id="logo"><a href="#" title="" rel="home" accesskey="1">Forum Design

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;

<div id="fd_nav"><ul><li id="nav_home" class="left"><a href="/" rel="home">Home

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li id="nav_forum" class="left active"><a href="/forum">Forum

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li id="nav_skins" class="left "><a href="http://www.thedesignforums.net/h10-skins">TDF Skins

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

 <li id="nav_help" class="left "><a href="/faq">Help

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li id="nav_members" class="left "><a href="/memberlist">Members

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li id="nav_donate" class="left "><a href="/donate">Donate

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

                            <li id="nav_pm" class="left "><a href="/privmsg?folder=inbox" class="mailbox">Mailbox

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

  <li id="nav_profail" class="left "><a href="/profile?mode=editprofile">User CP

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<!-- BEGIN switch_user_logged_out --><li id='nav_signin' class="left "><a href='/login'>Sign In »

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

<li id='nav_register' class="left "><a href='/register'>Register Now!

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

 <!-- END switch_user_logged_out -->
<!-- BEGIN switch_user_logged_in --><li id="nav_logout" class="left "><a href="/login?logout">Log out

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;

  <!-- END switch_user_logged_in -->


Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

```



vào thăm trang của tui và like hộ phát nhé :)