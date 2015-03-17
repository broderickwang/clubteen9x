![http://i40.servimg.com/u/f40/17/90/42/71/vew10.png](http://i40.servimg.com/u/f40/17/90/42/71/vew10.png)
cách 1: có thể làm bằng js

```




<script type="text/javascript" src="http://hotro.4forum.biz/38180.js">

Unknown end tag for &lt;/script&gt;


<div class="module main" style="margin-top: 2em! important;">
<div class="main-head">
<div class="page-title"><h2>Forum Statistics

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">
<div class="pairsJustified" original-title="">
<dl class="discussionCount"><dt>Số bài :

Unknown end tag for &lt;/dt&gt;


<dd><span class="FORUMCOUNTUSER">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="messageCount"><dt>Chủ đề:

Unknown end tag for &lt;/dt&gt;


<dd><span class="FORUMCOUNTOPIC">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="memberCount"><dt>Thành viên:

Unknown end tag for &lt;/dt&gt;


<dd><span class="FORUMCOUNTPOST">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl><dt>Thành viên mới:

Unknown end tag for &lt;/dt&gt;


<dd><span class="FORUMLASTUSERLINK">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;





<!-- slot: forum_stats_extra -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;



```

cách 2: sử dụng Generalities
bằng cách acp>>>display>> Generalities
phần Message content : cho đoạn code dưới vào
an

```

<div class="module main" style="margin-top: 2em! important;">
<div class="main-head">
<div class="page-title"><h2>Forum Statistics

Unknown end tag for &lt;/h2&gt;



Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">
<div class="pairsJustified" original-title="">
<dl class="discussionCount"><dt>Số bài :

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMCOUNTPOST}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="messageCount"><dt>Chủ đề:

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMCOUNTOPIC}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl class="memberCount"><dt>Thành viên:

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMCOUNTUSER}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


<dl><dt>Thành viên mới:

Unknown end tag for &lt;/dt&gt;


<dd>{FORUMLASTUSERLINK}

Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;





<!-- slot: forum_stats_extra -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;





Unknown end tag for &lt;/div&gt;



```
tiếp theo cho code này vào vị trí cần hiện

```

<!-- BEGIN message_admin_txt -->
<div id="pun-announcement">
<p>{message_admin_index.message_admin_txt.MES_TXT}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END message_admin_txt -->

```

```
function treatvar(nom){var trouve=xhr.responseText.replace(RegExp("^.+<li style=\"margin-bottom:5px;direction:ltr;text-align:left;\"><strong>&#123;"+nom+"&#125;<\\/strong>&nbsp;:&nbsp;(.*?)&nbsp;<span style='direction:ltr'>\\(.*?\\)<\\/span><br \\/><\\/li>.+$"),'$1');if(xhr.responseText==trouve)return;var children=document.getElementsByTagName('*')||document.all;var v=new Array();var i=-1;while(++i<children.length){var child=children[i];var classNames=child.className.split(' ');for(var j=0;j<classNames.length;j++){if(classNames[j]==nom){v.push(child);break}}}i=-1;while(++i!=v.length)if(v[i].tagName=='INPUT'||v[i].tagName=='TEXTAREA')v[i].value+=trouve;else v[i].innerHTML+=trouve};if(window.ActiveXObject){var xhr=new ActiveXObject("Microsoft.XMLHTTP")}else if(window.XMLHttpRequest){var xhr=new XMLHttpRequest()}if(xhr!=null){xhr.onreadystatechange=function(){if(xhr.readyState==4){treatvar('FORUMURL');treatvar('FORUMURLINK');treatvar('FORUMNAME');treatvar('FORUMNAMELINK');treatvar('FORUMDESC');treatvar('FORUMBIRTHDAY');treatvar('FORUMAGE');treatvar('FORUMCOUNTFORUM');treatvar('FORUMCOUNTOPIC');treatvar('FORUMCOUNTPOST');treatvar('FORUMCOUNTUSER');treatvar('FORUMONLINEUSER');treatvar('FORUMONLINEDATE');treatvar('FORUMLASTUSER');treatvar('FORUMLASTUSERLINK');treatvar('USERNAME');treatvar('USERLINK');treatvar('USERBIRTHDAY');treatvar('USERAGE');treatvar('USERREGDATE');treatvar('USERLASTVISIT');treatvar('USERCOUNTPOST')}};xhr.open("GET","/popup_help.forum?l=miscvars",true);xhr.send(null)}```
thông thường mọi người hay để cột bên trái lên phải chỉnh css tùy thuộc mỗi forum naz :d