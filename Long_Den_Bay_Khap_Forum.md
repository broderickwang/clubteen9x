demo : http://newbiefm.forumvi.com/forum

```

<script language="javascript">

var sinhvienit=0;

function SVIT_ADS_GetCookie(Name){

var re=new RegExp(Name+"=[^;]+", "i");

if (document.cookie.match(re))

return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]);

return ""

}



function SVIT_ADS_SetCookie(name, value, days){

if (typeof days!="undefined"){

var expireDate = new Date()

var expstring=expireDate.setDate(expireDate.getDate()+days)

document.cookie = name+"="+decodeURIComponent(value)+"; expires="+expireDate.toGMTString()

}

else document.cookie = name+"="+decodeURIComponent(value);

}



function vtlai_popup()

{



var cookie_popup_ads = SVIT_ADS_GetCookie('sinhvienit_popup_ads');

if (cookie_popup_ads=='') {

if(sinhvienit==0)

{

sinhvienit=1;

var Time_expires = 24 * 3600 * 1000;

SVIT_ADS_SetCookie('sinhvienit_popup_ads','true',Time_expires);

var params = 'width=' + '600';

params += ', height=' + '400';

params += ',scrollbars=yes,status=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1';



}



}

}



Unknown end tag for &lt;/script&gt;





Unknown end tag for &lt;/head&gt;



<body onclick="vtlai_popup();">

<body onclick="vtlai_popup();" id="body_id">
<div id="fb-root">

Unknown end tag for &lt;/div&gt;



<script>(function(d, s, id) {

var js, fjs = d.getElementsByTagName(s)[0];

if (d.getElementById(id)) return;

js = d.createElement(s); js.id = id;

js.src = "//connect.facebook.net/vi_VN/all.js#xfbml=1";

fjs.parentNode.insertBefore(js, fjs);

}(document, 'script', 'facebook-jssdk'));

Unknown end tag for &lt;/script&gt;



<script type="text/javascript" src="http://loveteen.vn/denlong-trungthu/moveobj.js"> 

Unknown end tag for &lt;/script&gt;



<script type="text/javascript">

var flyimage1, flyimage2

function pagestart(){

flyimage1=new Chip("flyimage1",47,68);

flyimage2=new Chip("flyimage2",47,68);

flyimage3=new Chip("flyimage3",47,68);

movechip("flyimage1");

movechip("flyimage2");

movechip("flyimage3");

}

if (window.addEventListener)

window.addEventListener("load", pagestart, false)

else if (window.attachEvent)

window.attachEvent("onload", pagestart)

else if (document.getElementById)

window.onload=pagestart



Unknown end tag for &lt;/script&gt;


<DIV ID="flyimage1" STYLE="position:absolute; left: -500px; width:47; height:68;z-index:1000000">

<IMG src="http://loveteen.vn/denlong-trungthu/tb_balloon.gif" BORDER=0>



Unknown end tag for &lt;/DIV&gt;


<DIV ID="flyimage2" STYLE="position:absolute; left: -500px; width:47; height:68;z-index:1000000">

<IMG src="http://loveteen.vn/denlong-trungthu/tb_balloon2.gif" BORDER=0>



Unknown end tag for &lt;/DIV&gt;


<DIV ID="flyimage3" STYLE="position:absolute; left: -500px; width:47; height:68;z-index:1000000">

<IMG src="http://loveteen.vn/denlong-trungthu/tb_balloon2.gif" BORDER=0>



Unknown end tag for &lt;/DIV&gt;


```

hướng dẫn : ACP -> Display -> Homepage -> Generalities
cho code vào : Message content rồi ấn chấp nhận.