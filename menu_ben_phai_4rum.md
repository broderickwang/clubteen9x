Demo: http://invision.chinhphuc.info/
Thực hiện:

> CSS:

```

/* Sidebar--------------------------------------------------- */
#sidebar_container{float:right;width:270px;margin-bottom:3em;padding:17px 0}
#sidebar_container > ul{background:#ECF1E2 url(http://i34.servimg.com/u/f34/15/64/85/86/top-hi10.png) repeat-x left top;border:1px solid #D2DBC0;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;-moz-box-shadow:-2px 2px 2px #C8C8C8;-webkit-box-shadow:-2px 2px 2px #C8C8C8;box-shadow:-2px 2px 2px #C8C8C8;float:left;width:100%;list-style:none;padding:0}
#sidebar_container .block{margin-bottom:4px;border-top-right:5px;border-top-left:5px;padding:6px}
#sidebar_container .blocksubhead{background:transparent none;height:16.76px;color:#424242;border:none;outline:none;font-weight:700;padding:5px 6px}
#sidebar_container a.collapse{position:static}
#sidebar_container .blocksubhead a img{vertical-align:middle;float:right}
.widget_content{color:#424242;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background:#FFF url(http://i34.servimg.com/u/f34/15/64/85/86/gradie10.png) repeat-x;border:1px solid #DADADA;_background-image:none;padding:10px 6px}
#sidebar_container .blockbody{color:#424242;border:1px solid #DADADA;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background:#FFF;_background-image:none;padding:0}
#sidebar_container .underblock{height:9px;background:transparent url(http://i34.servimg.com/u/f34/15/64/85/86/bottom10.png) repeat-x left bottom}
/* Sidebar--------------------------------------------------- */

```
> Javascript:
> > Title: Menu bên phải
> > Placement: In the homepage (hoặc In all the pages)
> > Javascript Code: Hide rồi hihi Reply để coi js nhá Nháy mắt
```

$(function () {
$('<div id="sidebar_home">
<div id="sidebar_container">

<ul id="sidebar">

<li><div class="block smaller"><div class="blocksubhead"><a class="collapse" id="collapse_block_newthreads_1" href="#top"><img alt="" src="http://westlifevn.net/forum/images/styles/GamerGreen/buttons/collapse_40b.png" id="collapseimg_newthreads_1">

Unknown end tag for &lt;/a&gt;

<span class="blocktitle">♥ Musik ♥

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="widget_content blockbody floatcontainer">
<div align="center">
<iframe height="178" width="243" src="http://www.youtube.com/embed/Mwg3GB9UHEs" frameborder="0" allowfullscreen>

Unknown end tag for &lt;/iframe&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="underblock">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/li&gt;




<li><div class="block smaller"><div class="blocksubhead"><a class="collapse" id="collapse_block_newthreads_1" href="#top"><img alt="" src="http://westlifevn.net/forum/images/styles/GamerGreen/buttons/collapse_40b.png" id="collapseimg_newthreads_1">

Unknown end tag for &lt;/a&gt;

<span class="blocktitle">Liên kết bạn bè ♥

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="widget_content blockbody floatcontainer">
<div align="center">
<a href="http://hollyland.forumvi.com/" class="postlink" target="_blank"><img src="http://i46.servimg.com/u/f46/16/16/16/68/images14.jpg" width="243" height="110" border="0">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

<div class="underblock">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/li&gt;






Unknown end tag for &lt;/ul&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<style type="text/css">

#main {
width: 100%;
float: left;
margin-right: -290px;
padding: 10px 0;
}
#main {
margin-right: 290px;
}
#main {
width: 72%;
padding:0;
padding-bottom: 10px;
}
#main {
margin: 20px 0px 0px 0px;
padding-left: 0px;
float: left;
}


Unknown end tag for &lt;/style&gt;

').insertAfter("#main");
});


```