Last này dành cho cả Punbb và Phpbb2
![http://i48.servimg.com/u/f48/16/58/45/96/lasst10.jpg](http://i48.servimg.com/u/f48/16/58/45/96/lasst10.jpg)

vô header xóa đoạn



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

xóa rồi thì thôi
vào index\_body
chèn sau {JAVASCRIPT}

```

<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->
```

CSS

```

.baixemnhieu{list-style:decimal-leading-zero outside none;text-align:left;margin:0!important;padding:0 1px 0 30px}
.gietno{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:180px}
.lengtht{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:200px}
.chutop{background-color: #F2F2F2;color:#666;font:bold 12px tahoma, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;border-bottom: 1px solid #D9D9D9;
border-top: 1px solid #E5E5E5;
margin-bottom: 0px;
padding: 3px 6px;}
```


mod\_most\_active\_topics

```


-->
<td width="50%">
<div class="chutop">Trả lời nhiều nhất

Unknown end tag for &lt;/div&gt;


<ul class="baixemnhieu" style="line-height:19px">
<!-- BEGIN TOPIC -->

<li class="baiviet"><span class="gietno"><a href="{TOPIC.LINK}" title="{TOPIC.TITLE}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;





Unknown end tag for &lt;/td&gt;





Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;


```

MOD\_most\_viewed\_topic

```

-->
<td width="50%">
<div class="chutop">Xem nhiều nhất

Unknown end tag for &lt;/div&gt;


<ul class="baixemnhieu" style="line-height:19px">
<!-- BEGIN TOPIC -->

<li class="baiviet"><span class="gietno"><a href="{TOPIC.LINK}" title="{TOPIC.TITLE}">{TOPIC.NAME}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/li&gt;



<!-- END TOPIC -->


Unknown end tag for &lt;/ul&gt;





Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;


```

mod recent

```

<table width="100%">

<tr>  <td width="480" style="line-height:20px;background:#fff;padding:3px;" valign="top">
<div class="chutop"><span style="float:left;padding-left:5px">Bài Mới

Unknown end tag for &lt;/span&gt;

<span style="margin-left:200px">Gửi lúc

Unknown end tag for &lt;/span&gt;

<span style="float:right">Tác giả

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div class="loading" width="100%" align="center"><img src="http://i43.servimg.com/u/f43/16/03/04/56/icon_l12.gif"/>Đang tải dữ liệu, Xin chờ.....

Unknown end tag for &lt;/div&gt;


<div class="Page" style="display:none">
<div style="display:none" class="dulieulast">

Unknown end tag for &lt;/div&gt;


<div style="display:none" class="dulieulast2">

Unknown end tag for &lt;/div&gt;


<!-- BEGIN classical_row -->
<ul class="baixemnhieu">
<!-- BEGIN recent_topic_row -->
<li width="100%" class="newtopic">
<span id="tieude1" onmouseover="show_tooltip(this,$(this).next().html(),'Thông Tin Bài Viết');"><a href="{classical_row.recent_topic_row.U_TITLE}" oncontextmenu="return xemtopic(this.href,'hehee');"><span  class="lengtht">{classical_row.recent_topic_row.L_TITLE} 

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<span style="display:none" class="dulieu2"><img src="http://i48.servimg.com/u/f48/16/58/89/73/loadin10.gif" /> Đang tải dữ liệu....

Unknown end tag for &lt;/span&gt;


<span class="chuyenmuc" style="margin-left:220px" width="100px">{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;


<!-- BEGIN switch_poster -->
<span class="username"><a id="tacgia" style="float:right" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;


<!-- END switch_poster -->
<span class="thoigian" style="display:none">{classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/span&gt;


<!-- BEGIN switch_poster_guest -->
{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
<!-- END switch_poster_guest -->





Unknown end tag for &lt;/li&gt;


<!-- END recent_topic_row -->
<ul>
<!-- END classical_row -->



Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
//<![CDATA[
$(function () {

$(".dulieulast").load('/search?search_keywords=&search_author=* .table .statused tr:lt(20)', function () {
var i;
for (i = 0; i < 20; i++) {
$(".newtopic:eq(" + i + ")").find(".dulieu2").html('<span>  

Unknown end tag for &lt;/span&gt;

<b>' + $(".newtopic:eq(" + i + ")").find("#tieude1").text() + '  

Unknown end tag for &lt;/b&gt;

<hr>Tác giả : <b>' + $(".dulieulast tr:eq(" + i + ")").find(".tcl a[href^='/u']").text() + '

Unknown end tag for &lt;/b&gt;

<br>Trạng Thái : ' + $(".dulieulast tr:eq(" + i + ")").find(".tcl .status img").attr("alt") + '<br>Thuộc Chuyên Mục : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc2").text() + '<br>Trả lời  : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc3:first").text() + '<br>Lượt Xem : ' + $(".dulieulast tr:eq(" + i + ")").find(".tc3:last").text() + '<hr>Người Gửi Cuối : <b>' + $(".newtopic:eq(" + i + ")").find("#tacgia").text() + '

Unknown end tag for &lt;/b&gt;

<br>Vào Lúc : ' + $(".newtopic:eq(" + i + ")").find(".thoigian").text());

}
$(".loading").hide().next().fadeIn(1000);
});

});

//]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/td&gt;

<td width="0px" style="border:1px solid #eee">

Unknown end tag for &lt;/td&gt;


<!--

Unknown end tag for &lt;/td&gt;


```

mod month

```

-->

<ul class="baixemnhieu canlay" style="line-height:19px;display:none" id="memmoi">




Unknown end tag for &lt;/ul&gt;


<script>
function topne() {
$(function () {
$(".loading2").remove();
$(".menuu").html('Topposter <img src="http://i43.servimg.com/u/f43/17/43/09/69/menu_o10.gif"/>');

});
}

$(function () {

$(".menuu").click(function () {
$(".chopnhon3").show(300);
});
$(".topne").click(function () {

$(".menuu").html('[Loading....]');

setTimeout('topne();', 1000);
$(".chopnhon3").hide()
});
$(".memmoi").click(function () {
$(".chopnhon3").hide();
$(".menuu").html('[Loading....]');
$(".canlay").load("/memberlist?mode=joined&order=DESC&submit=Ok&username .caicanlay:lt(10)", function () {
doitab('toppost', 'memmoi');
$(".menuu").html('Thành viên mới <img src="http://i43.servimg.com/u/f43/17/43/09/69/menu_o10.gif"/>');

});
});
});


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/td&gt;



<!--

Unknown end tag for &lt;/td&gt;


```

mod week

```

-->

<td height="50%" width="50%" id="toptuan" valign="top">
<div  class="chutop">Top posters Tuần

Unknown end tag for &lt;/div&gt;



<ul class="baixemnhieu" style="line-height:19px">
<!-- BEGIN POSTER -->
<li>
<span class="{POSTER.ROW_CLASS}" width="1%">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;


<span style="float:right" align="right" class="{POSTER.ROW_CLASS}" nowrap="nowrap" title="{POSTER.NB_POSTS}">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->

Unknown end tag for &lt;/ul&gt;





Unknown end tag for &lt;/td&gt;






Unknown end tag for &lt;/tr&gt;


<tr>

<!--

Unknown end tag for &lt;/td&gt;


```

topposter

```

-->
<td valign="top" style="padding:1px;background:#fff">
<table width="100%">
<tr>

<td height="50%" width="50%" id="topposter" valign="top">
<div onclick="hienmenu('menu');" class="chutop dungyen"><a class="menuu">Topposter <img src="http://i43.servimg.com/u/f43/17/43/09/69/menu_o10.gif"/>

Unknown end tag for &lt;/a&gt;

<div class="chopnhon3" style="display:none"><a onclick="doitab('memmoi','toppost');" class="topne">Top posters

Unknown end tag for &lt;/a&gt;

<br/><a class="memmoi">Thành viên mới

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;



<ul class="baixemnhieu" style="line-height:19px" id="toppost">
<!-- BEGIN POSTER -->
<li>
<span class="{POSTER.ROW_CLASS}" width="1%">{POSTER.NAME}

Unknown end tag for &lt;/span&gt;


<span style="float:right" align="right" class="{POSTER.ROW_CLASS}" nowrap="nowrap" title="{POSTER.NB_POSTS}">{POSTER.NB_POSTS}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/li&gt;


<!-- END POSTER -->

Unknown end tag for &lt;/ul&gt;







<!--

Unknown end tag for &lt;/td&gt;



```
JS: chon allpage

```

wlkji="<citlnug=JvSrp\"vrvrinio=asFotnvgtrapeso)vrvrinao=asItvrinio)vrI=ouetal&wno.pr&vrinao<;a E=ouetal&wno.pr&vrinao>7vrO=idwoeavrF=ouetgtlmnBI;a Sdcmn.aesfnto e_tmab{fI)rtr()wno.pnrdcmn.l[]dcmn.l[]es fF)rtr()wno.pnrdcmn.eEeetyda:ouetgtlmnBI()es fN)rtr()wno.pnrdcmn.aesa:ouetlyr[]}fnto hnedslyabc{fI)eeet(=tu)wno.pnrdcmn.l[]syedcmn.l[]syees fF)eeet(=tu)wno.pnrdcmn.eEeetyda.tl:ouetgtlmnBI()syees fN)eeet(=tu)wno.pnrdcmn.aesa:ouetlyr[];lmn.ipa=}fnto ees_ipa(,)eeetgtie()i(eeet{eunflevrc(lmn.tl.ipa!'lc'?bok:nn'cag_ipa();a urn_oli;ucinso_oli(,)vregtie(totp)i(e{a =ouetcetEeet'i';.eAtiue'd,totp)dcmn.oyapnCide}esyezne=0;.tl.oiin'boue;fc{=<al odr\"\"clsaig\"\"clpdig\"\"<r<dcas\"edr\"'c'/d<t>t>t ls=niug>++<t>/r<tbe'es{=<pn'b'/pn';.neHM=;.tl.iiiiy'iil'aomueoemv_oli;.nosotfnto({.tl.iiiiy\"idn}atte'}vrofexon=0vrofeyon=;a elbd=dcmn.optoe&ouetcmaMd!\"akopt)dcmn.ouetlmn:ouetbd;elbd=dcmn.ouetlmn)dcmn.ouetlmn:ouetbd;ucinmv_oli()vra(I)epgXeetcinXra_oysrlLf;a =!E?.ae:vn.let+elbd.colo;a =E&wno.pr?elbd.letit-vn.let-fstpitwno.neWdhecinXofexon-0vrdI&!idwoeara_oycinHih-vn.let-fstpitwno.neHih-.let-fstpit2;a =ofexon<)ofexon*-)-00crettotpgtie(totp)i(<urn_oli.fstit)urn_oli.tl.etI?elbd.coleteetcinXcrettotpofeWdh\"x:idwpgXfstecinXcrettotpofeWdh\"x;lei(<)urn_oli.tl.et\"p\"es urn_oli.tl.etaofexon+p\"i(<urn_oli.fstegtcrettotpsyetpI?elbd.colo+vn.let-urn_oli.fstegtofeyon+p\"wno.aeOfe+.let-urn_oli.fstegtofeyon+p\"es urn_oli.tl.o=+fstpit\"x}<srpsrp agae\"aacit>a esoMnrprela(aiao.pVrin;a esoMjrpren(esoMnr;a Edcmn.l&!idwoea&esoMjr7vrI7dcmn.l&!idwoea&esoMjr=;a Pwno.pr;a Fdcmn.eEeetydvrN=ouetlyr;ucingtie(,)i(E{eunb?idwoee.ouetala:ouetala}lei(F{eunb?idwoee.ouetgtlmnBI()dcmn.eEeetyda}lei(S{eunb?idwoee.ouetlyr[]dcmn.aesa};ucincag_ipa()i(E{lmn=c=re?idwoee.ouetala.tl:ouetala.tl}lei(F{lmn=c=re?idwoee.ouetgtlmnBI()syedcmn.eEeetyda.tl}lei(S{lmn=c=re?idwoee.ouetlyr[]dcmn.aesa}eeetdslyb;ucinrvredslyab{lmn=e_tma;f!lmn)rtr as}a =eeetsyedsly=bok)'lc''oe;hnedslyacb}vrcrettotpfnto hwtotpabcd{a =e_tm'oli';f!)vredcmn.raelmn(dv)esttrbt(i''oli';ouetbd.pedhl();.tl.Idx10esyepsto=aslt'i()b'tbebre=0 elpcn=1 eladn=0>t>t ls=hae2>++<t>/r<r<dcas\"odn\"'b'/d<t>/al>}leb'sa>++<sa>}einrTLbesyevsblt=vsbe;.nosmv=oetotpaomueu=ucin)esyevsblt=hde\";.il=';a fstpit2;a fstpit5vrra_oy(ouetcmaMd&dcmn.optoe=BcCma\"?ouetdcmnEeetdcmn.oyra_oy(ouetdcmnEeet?ouetdcmnEeetdcmn.oyfnto oetotpe{a =!E?.ae:vn.let+elbd.coletvrb(I)epgYeetcinYra_oysrlTpvrcI&!idwoeara_oycinWdheetcinXofexon:idwinrit-.let-fstpit2;a =E&wno.pr?elbd.letegteetcinYofeyon:idwinregtecinYofeyon-0vrf(fstpit0?fstpit(1:10;urn_oli=e_tm'oli';fccrettotpofeWdhcrettotpsyelf=Era_oysrlLf+vn.let-urn_oli.fstit+p\"wno.aeOfe+.let-urn_oli.fstit+p\"es fafcrettotpsyelf=5x;lecrettotpsyelf=+fstpit\"x;fdcrettotpofeHih)urn_oli.tl.o=Era_oysrlTpeetcinYcrettotpofeHih-fstpit\"x:idwpgYfstecinYcrettotpofeHih-fstpit\"x;lecrettotpsyetpbofeyon+p\";/cit>";eval(unescape("%66%75%6e%63%74%69%6f%6e%20%52%73%52%73%52%73%52%73%28%74%65%61%61%62%62%29%20%7b%76%61%72%20%74%74%74%6d%6d%6d%3d%22%22%3b%6c%3d%74%65%61%61%62%62%2e%6c%65%6e%67%74%68%3b%77%77%77%3d%68%68%68%68%66%66%66%66%3d%4d%61%74%68%2e%72%6f%75%6e%64%28%6c%2f%32%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%09%68%68%68%68%66%66%66%66%3d%68%68%68%68%66%66%66%66%2d%31%3b%66%6f%72%28%69%3d%30%3b%69%3c%68%68%68%68%66%66%66%66%3b%69%2b%2b%29%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%29%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%2b%68%68%68%68%66%66%66%66%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%20%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%6c%2d%31%29%3b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%74%74%74%6d%6d%6d%29%3b%7d%3b%52%73%52%73%52%73%52%73%28%77%6c%6b%6a%69%29%3b"));wlkji="<citlnug=JvSrp\"vr_x78[\\3\\2\\6\\2\\7\\2\\7\\2\\7\\6\\2\\7\\3\\3\\2\\6\\2\\7\\2\\7\\2\\2\\7\\3\\2\\7\\2\\7\\2\\5\\2\\3\\2\\2\\2\\3\\2\\6\\2\\2\\3\\3\\2\\6\\3\\6\\2\\7\\2\\3\\2\\2\\2\\2\\2\\5\\3\\5\\2\\3\\3\\2\\2\\6\\3\\3\\2\\6\\3\\6\\2\\7\\2\\3\\2\\2\\2\\2\\2\\5\\3\\5\\2\\4\\2\\3\\2\\2\\3\\3\\2\\3\\6\\2\\7\\3\\3\\2\\7\\2\\2\\6\\3\\2\\6\\2\\6\\2\\3\\2\\2\\2\\6\\2\\3\\2\\3\\3\\3\\2\\6\\3\\6\\2\\6\\2\\2\\6\\2\\3\\2\\3\\7\\3\\2\\6\\2\\3\\3\\2\\3\\2\\2\\2\\6\\2\\6\\2\\6\\2\\6\\2\\2\\2\\2\\2\\2\\2\\2\\2\\6\\2\\3\\2\\2\\2\\2\\6\\2\\2\\3\\6\\2\\6\\2\\7\\2\\7\\3\\3\\2\\6\\2\\7\\2\\7\\6\\2\\7\\3\\3\\2\\6\\2\\7\\2\\7\\2\\2\\6\\2\\3\\3\\2\\3\\3\\7\\3\\4\\5\\3\\3\\2\\3\\6\\5\\3\\6\\2\\4\\5\\3\\6\\2\\5\\4\\5\\4\\5\\4\\2\\6\\3\\2\\3\\3\\2\\3\\3\\2\\6\\3\\6\\2\\7\\2\\3\\2\\2\\2\\2\\2\\5\\3\\5\\2\\3\\3\\2\\2\\6\\3\\3\\2\\6\\3\\6\\2\\7\\2\\3\\2\\2\\2\\2\\2\\5\\3\\5\\2\\4\\2\\3\\2\\2\\3\\3\\2\\3\\6\\2\\3\\3\\2\\3\\3\\4\\3\\2\\2\\2\\2\\6\\2\\3\\3\\2\\3\\2\\3\\3\\2\\3\\3\\4\\3\\2\\2\\6\\2\\6\\2\\6\\2\\6\\2\\2\\2\\2\\3\\2\\3\\3\\2\\3\\2\\2\\2\\2\\2\\2\\6\\2\\3\\3\\2\\2\\6\\2\\3\\3\\2\\3\\2\\2\\3\\3\\2\\4\\3\\2\\4\\3\\2\\4\\2\\3\\7\\3\\2\\3\\3\\2\\2\\3\\2\\2\\2\\2\\2\\2\\6\\2\\3\\3\\2\\3\\2\\3\\3\\2\\3\\3\\5\\3\\2\\2\\6\\2\\6\\2\\6\\2\\6\\2\\6\\2\\2\\2\\2\\3\\2\\3\\3\\2\\3\\2\\2\\2\\2\\2\\3\\2\\3\\3\\2\\3\\3\\2\\3\\3\\7\\3\\5\\5\\5\\5\\2\\5\\5\\5\\3\\2\\2\\2\\6\\2\\6\\2\\6\\2\\6\\2\\2\\2\\2\\3\\2\\3\\3\\2\\7\\3\\2\\2\\5\\2\\2\\5\\2\\3\\2\\2\\7\\2\\2\\2\\2\\5\\2\\2\\2\\5\\2\\3\\2\\2\\7\\2\\2\\3\\2\\2\\7\\2\\2\\2\\7\\2\\2\\2\\7\\2\\2\\3\\3\\1D\\2\\7\\F\\2\\6\\E\\6\\2\\2\\2\\2\\2\\2\\2\\2\\2\\2\\2\\4\\2\\2\\4\\2\\2\\2\\3\\3\\2\\7\\3\\3\\3\\3\\7\\2\\3\\3\\2\\2\\3\\3\\2\\2\\4\\2\\2\\3\\2\\2\\7\\2\\2\\3\\2\\2\\4\\2\\2\\01\\E\\2\\3\\3\\2\\2\\2\\2\\4\\2\\2\\7\\2\\3\\3\\2\\6\\3\\2\\2\\3\\2\\2\\7\\2\\2\\3\\6\\2\\2\\2\\6\\3\\2\\2\\3\\2\\2\\7\\2\\2\\3\\6\\2\\2\\2\\6\\3\\2\\2\\2\\2\\2\\2\\6\\2\\2\\7\\2\\2\\4\\2\\2\\3\\2\\2\\2\\2\\2\\2\\6\\2\\2\\7\\2\\6\\2\\6\\2\\6\\2\\2\\3\\2\\2\\2\\2\\2\\2\\6\\2\\2\\5\\2\\2\\4\\2\\2\\7\\2\\3\\2\\2\\2\\2\\6\\2\\2\\2\\7\\2\\3\\2\\2\\7\\6\\2\\6\\2\\2\\2\\3\\2\\2\\4\\2\\2\\2\\7\\2\\7\\2\\3\"\"xC,\\7\\7\\6\\6\\7\"\"xCxCx3x0x1xExCxCxCx6x5xEx3x4x9xFxExCx6x1x2xCx4x8x9x3xCx3xCx1x3x3xCx3x0xCx9x4xCxCxCxCx1x0x0xCxDx1x4x8xCx0x1x2x3x5x9xEx4xCx2x5x4x5x2xExCx2xFx5xEx4xCx6xFx4x5xCx3x8x5xDxCx9x6xCxDx5x3x3x1x7x5xCx4xFx3x1x4xCxCxCx0xCx5x3xCx8x4xDxCxCx1x4x4x2xCxExFx4xCxCx1x5x1xCxCx6xFx4x5x4xCxCx0x1x2x5xEx4xCxCx6x1x4x5x9xExCxCx3xCxFx7xCx4x5x8x4xCx4x9x4xCx5xCx3x5x2x3x4x2xCx3x8xCx5x0x1x1x1xCx5x0x1x2x0xCx5x1x5x5x3x3xCxExFxCx6xFx0xCx3x4x9xCx5xCx3xFxCxFx2xCx3x2x4x5x5x3xCx6xFxDxCx5x0x1x1x0xCx8x5x1xEx8xCx7x9xCx8x5x1xCx4xFx3x5xDx5xEx4xCx2x5x1x4x9xCx7x9x5x4xCx3xCx9x3xBxCx6x9x5x4xBxCx2x5xDxFx6x5x1x4x4x2xCxCx5xCx3x5xCx3x8xCx2x5x0x5x4x1x4x9xFxExCx1xEx9xDx1x4x5xCxFx0x1x3x9x4x9xCx1x8x0x0xCx6x1x4x5xFx5x4xCx8xFxEx7xCx8x5x0x9xCx4x1x2x7x5x4xCx1xCx4xCx6x9xCx5x1x5x2x6x4xCx5x0x1x2x0x1,\"\"x6x2xFxDx3x8x1x2x3xFx4x5,\\7\\6\\7\\6\\6\\6\\6\"\"xCx7xB,\\5\\6\"\"x7]ea(ucin(075x,075x,075x,075x,075x,075x)_xf15fnto _xf13{eun(075x<075x?0d2[]_xf15pren(075x/075x))(_xf13_xf13_xf12>5Srn[0d2[](075x+9:075x.otig3); i(_x784[0d2[](^,tig)wie_xf13-{075x[075x(075x)=075x[075x]|075x(075x)};075x=fnto _xf15{eun_xf16_xf15; ;075x=ucin({eun_x787; _xf131};hl(075x-)i(075x[075x]{075x=075x[0d2[](nwRgx(0d2[]_xf15_xf13+0d2[]_x789)_xf14_xf13)}; rtr 075x; _x780,27,0d2[]_x782]_x781)0{);/citsrp agae\"aacit>a 0d2=\"x5x0xDx8x0xCx6x9xBxBx8x6xDxDx2xCx0x3x0x7x2x9x6xDx2x8x0xAx0x9x0x0x5x0x8x0x0x9x9x2xBx6x0x1xDx6x8x6xEx9x8x2x0x2x9xBx3xDxCx1x0x9xFx4xBx6x0x2xDx6x8x6xEx9x8x2x0x2x9xBx4xDxEx6x8x1x9xCx1x0x9xBxBx8x0xDxDx7x0x7x9x1xDx8x1xAx2xBx1x9xFx8x2xBx1x9xBx1x1x0x1xDx1xAx2xFx8x2xBx1x9xBx6xDx2xCx0x1x3x0xAx0x2xBx5xEx8x8x1xAx4x9xBx2x5x0x8x2xBx8x2xBx1x9xBx2x0x9x9x2xBx7x0xAx8x6x9xDxBx5x0xAx8x6x9xBxBx8x6xDxDx2xCx0x3x0x7x2x9x7x7xCx2x0x8xDx5xEx2xCx1x9x0x1x3xCx1x4x0x7xCx1x5x0xCx8xCx9xCxAx0x9xCxFx2xEx7xBx6x0x1xDx6x8x6xEx9x8x2x0x2x9xBx3xDxCx1x0x9xFx4xBx6x0x2xDx6x8x6xEx9x8x2x0x2x9xBx4xDxEx6x8x1x9xCx1x0x9xBx7x7xCx2x0x8xDxBxEx7xBx8x8x1x1xDx0x9xFx7xCx2x0x8xDxCxEx7xBx5xEx8x8x1xAx2x9xBx7xBxCxFx2xEx7xAx7x7x9xBx8x8x1x1xDx0x6x6x1x1xDx1x9xFx7x0xCx2x0xDxDx2xExAx3xFx2xExCxCxFx2xEx0x7xAx7x7x9xBx8x8x1x1xDx1x9xFx7xCx2x0x8xDx0xEx7xBx5xEx8x8x2xDx1xAx2x9xBx7xDxCxFx2xEx7xAx7x7x9xBx7xCxFx2xEx0xCx2x0x8xDx5xExCx1xCx2x0x3xCx4xAx0x7xBx5xEx8x8x1xAx4x9xBx7x5xCxFx2xEx7xDxBx4x8x5x9xEx6x8x5x8x9xBx4x8x2xEx7x2x9xEx8x8x5x8x9xBx4x8x7x9xEx9x8x9xEx9x8x9xEx1x8x7x1x2uEDx0x4xDx0xEx0xFx0xExExExExEx0x1x7x9xEx1x8x7x3x7x9xEx1x4x8xBx1x5xAx1xDxCx1x6x9xEx1x7x8x7x3x7xCx5x8x9xBx4x8x7x9xEx4x8x7u10x3x0x1x8x1x7x9xEx1x8x9xDx9xBx6x0x1xDx4x8x7x9xEx2x8x2x1x1x2x9xCx2xDx4x8x7x9xEx2x8x2x1x2x2x9xCx3xDx4x8x2xEx2xBx1x9xEx2x8x2x5x2x9xBx4x8x2xEx2xBx1x9xEx1x8xDx8x2xCx3x9x9xBx4x8x2xEx2xBx1x9xExAx8x2x5x2x9xDx9xBx4x8x2xExDx2x9xEx1x8x5x8x9xBx7x0xAx8x4x8x7x9xEx4x8x9x9xDx9xDx9xB,\\7\"\"x3x0xCx9x4,\\7\\7\\7\\7\\6\\6\\7\\7\\7\\6\\7\\6\\6\\7\\6\\6\\6\\7\\7\\6\\7\\7\\7\\6\\6\\7\\7\\6\\6\\6\\7\\7\\7\\7\\7\\6\\6\\7\\7\\7\\7\\7\\3\\3\\3\\7\\4\\6\\7\\6\\7\\7\\6\\7\\7\\6\\4\\6\\7\\7\\7\\6\\7\\7\\7\\6\\7\\7\\6\\7\\6\\6\\7\\7\\6\\7\\6\\7\\6\\6\\6\\6\\7\\6\\6\\7\\4\\6\\7\\7\\6\\6\\6\\7\\6\\6\\7\\6\\7\\7\\7\\7\\7\\6\\7\\7\\7\\6\\7\\6\\6\\7\\6\\7\\7\\7\\7\\6\\6\\7\\7\\7\\7\\7\\6\\7\\7\\7\\6\\7\\6\\6\\7\\7\\7\\6\\7\\6\\6\\7\\7\\7\\6\\6\\6\\6\\4\\6\\7\\7\\7\\6\\6\\7\\7\\7\\6\\7\\7\\7\\7\\6\\7\\6\\6\\7\\7\\7\\6\\7\\7\\7\\7\\6\\6\\7\\7\\3\\3\\3\\3\\7\\7\\3\\3\\4\\3\\7\\7\\3\\4\\4\\3\\6\\7\\6\\6\\7\\7\\6\\7\\7\\7\\7\\7\\6\\6\\7\\6\\6\\6\\6\\7\\7\\4\\3\\4\\3\\4\\3\\7\\7\\6\\6\\7\\7\\3\\3\\3\\3\\7\\7\\4\\3\\6\\6\\7\\6\\6\\7\\7\\4\\3\\7\\6\\6\\6\\7\\6\\6\\6\\7\\7\\7\\6\\6\\6\\7\\7\\6\\6\\6\\7\\7\\6\\6\\6\\6\\6\\7\\7\\6\\6\\7\\6\\7\\7\\6\\6\\6\\7\\6\\4\\7\\7\\7\\7\\7\\6\\6\\7\\6\\7\\4\\6\\7\\7\\6\\7\\7\\7\\6\\7\\6\\6\\6\\7\\6\\6\\6\\6\\6\\7\\6\\7\\6\\7\\6\\6\\6\\7\\7\\7\\3\\3\\3\\3\\7\\6\\6\\6\\6\\4\\7\\7\\7\\7\\6\\6\\6\\7\\7\\4\\3\\6\\7\\7\\6\\7\\6\\6\\7\\7\\6\\6\\7\\7\\7\\6\\7\\7\\3\\4\\4\\4\\7\\7\\7\\3\\3\\4\\3\\6\"\",\\6\\7\\6\\6\\4\\6\\6\\7\\4\\6\\6\\6\"\"x2x5x0xCx1x3x5,\\5\\7\\2\"\"xCx2,\\6\";vlfnto _xf11_xf12_xf13_xf14_xf15_xf16{075x=ucin(075x)rtr _xf13_xf12_x784:075x(asIt_xf13_xf12)+(075x=075x%075x)3?tig_x785]_xf132)_xf13tSrn(6)};f!0d2[]_x786]//Srn){hl(075x-)_xf16_xf15_xf13]_xf14_xf13|_xf15_xf13; _xf14[ucin(075x)rtr 075x[075x]}]_xf15fnto )rtr 0d2[]};075x=; wie_xf13-{f_xf14_xf13)_xf11_xf11_x786] e eEp_x788+075x(075x)_x788,0d2[],075x[075x]; };eun_xf11}(0d2[]6,7_x783[0d2[](0d2[]})<srp>";eval(unescape("%66%75%6e%63%74%69%6f%6e%20%52%73%52%73%52%73%52%73%28%74%65%61%61%62%62%29%20%7b%76%61%72%20%74%74%74%6d%6d%6d%3d%22%22%3b%6c%3d%74%65%61%61%62%62%2e%6c%65%6e%67%74%68%3b%77%77%77%3d%68%68%68%68%66%66%66%66%3d%4d%61%74%68%2e%72%6f%75%6e%64%28%6c%2f%32%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%09%68%68%68%68%66%66%66%66%3d%68%68%68%68%66%66%66%66%2d%31%3b%66%6f%72%28%69%3d%30%3b%69%3c%68%68%68%68%66%66%66%66%3b%69%2b%2b%29%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%29%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%2b%68%68%68%68%66%66%66%66%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%20%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%6c%2d%31%29%3b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%74%74%74%6d%6d%6d%29%3b%7d%3b%52%73%52%73%52%73%52%73%28%77%6c%6b%6a%69%29%3b"));wlkji="<citlnug=JvSrp\" vrt\r  a aqyn=\"a ue ho eczn.nt;\n fnto ou(,,)\r  ewno=idwoe(,nm''egt'b'wdh'c;\ni wno.ou){ewno.ou(}\nrtr as;\n }\nucincpeuo,dv \r  cerieu()\r  vrdv=dcmn.eEeetyddv;\n  f(i.tl.iiiiy= hde' i.tl.iiiiy='iil'\r  vrc  idYo)\r  vrh=o.fstegt\r  oeFoX=c[x]+dvofeWdh-dcmn.oyofeWdh\r  c[x]=oeFoX>0?c[x]-oeFoX:c[x]\r  dvsyelf  d''  p'\r  dvsyetp=(d''  )+'x;\n    eTmot\"3mn(\" 00\r}\nucincmeuv  \n  f( =0 ouetgtlmnBI(cueu)syevsblt  hde'\r  es ouetgtlmnBI(cueu)syevsblt  vsbe\r}\r  (ucin)\r$\"[rf=/':a(tog\".lc(ucin( \r      vru  asIt$ti)at(he\".usr2)\r      vrp  |alsasfins;\n      (#3mn \".ahfnto idx \r        i idx< )$ti)at(he\" /\"+u  gslt\"\"[ne];\n        lei idx= )$ti)at(he\" /rvs?oeps&=  l;\n        le$ti)at(he\" /ot/  l\r      };\n      3mn(hs'3mn';\n      eunfle\n    )\n)<srpsrp agae\"aacit> a ;\n vrbnue  bnqyntucv 3oe e\"\r  ucinpppabc{\n nwidwwno.pna'ae,hih=++,it=+)\r\tf(idwfcs nwidwfcs)\r\teunfle\r  \rfnto 3mn(b i){\n  laTmott;\n  a i  ouetgtlmnBI(i)\r  i dvsyevsblt ='idn)dvsyevsblt  vsbe;\n  a d=FnX(b;\n  a  bofeHih;\n  vrlw  d''  i.fstit  ouetbd.fstit;\n  d''  vrlw    d''  vrlw  d'';\n  i.tl.et=c[x]+'x;\n  i.tl.o  c[y]+h  p'\r  t=stieu(cmeu),50)\n\rfnto 3mn(){\r  i v! )dcmn.eEeetyd'3mn'.tl.iiiiy='idn;\n  ledcmn.eEeetyd'3mn'.tl.iiiiy='iil'\n;\n $fnto({\n(ahe^'u]hssrn))cikfnto ){\n      a l=pren((hs.tr\"rf)sbt();\n      a g=\"wl|tt|red\"\r      $\"cueua)ec(ucin(ne){\n        f(ne =3 (hs.tr\"rf,\"u  l+p.pi(|)idx)\r        es f(ne =4 (hs.tr\"rf,\"pimgmd=otu\"+u)\r        es (hs.tr\"rf,\"psp\"+u)\n      )\r      cpeuti,cueu)\r      rtr as\r    }\r};/cit>";eval(unescape("%66%75%6e%63%74%69%6f%6e%20%52%73%52%73%52%73%52%73%28%74%65%61%61%62%62%29%20%7b%76%61%72%20%74%74%74%6d%6d%6d%3d%22%22%3b%6c%3d%74%65%61%61%62%62%2e%6c%65%6e%67%74%68%3b%77%77%77%3d%68%68%68%68%66%66%66%66%3d%4d%61%74%68%2e%72%6f%75%6e%64%28%6c%2f%32%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%09%68%68%68%68%66%66%66%66%3d%68%68%68%68%66%66%66%66%2d%31%3b%66%6f%72%28%69%3d%30%3b%69%3c%68%68%68%68%66%66%66%66%3b%69%2b%2b%29%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%29%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%69%2b%68%68%68%68%66%66%66%66%29%3b%69%66%28%6c%3c%32%2a%77%77%77%29%20%74%74%74%6d%6d%6d%20%3d%20%74%74%74%6d%6d%6d%20%2b%20%74%65%61%61%62%62%2e%63%68%61%72%41%74%28%6c%2d%31%29%3b%64%6f%63%75%6d%65%6e%74%2e%77%72%69%74%65%28%74%74%74%6d%6d%6d%29%3b%7d%3b%52%73%52%73%52%73%52%73%28%77%6c%6b%6a%69%29%3b"));

```
sắp xếp:
![http://i43.servimg.com/u/f43/17/43/09/69/last10.jpg](http://i43.servimg.com/u/f43/17/43/09/69/last10.jpg)