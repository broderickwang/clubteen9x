demo : http://vn-answer.123.st/t680p15-share-muc-last-online-ben-cot-phai-forum#2561
cách làm

> :hide ẩn rồi rep ly để xem


chèn vào css

```

/* viewtopic_body */
.postprofile-details dt {
background-color: #F0F7FC;
padding: 10px;
border-radius: 4px;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
-khtml-border-radius: 4px;
width: 104px;
margin-left: -11px;
margin-top: -11px;
}
.post-header,.postprofile{
background: #D7EDFC url('http://c.gocmobile.net/styles/default/xenforo/gradients/tab-selected-light.png') repeat-x bottom;
border: 1px solid #D7EDFC;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-khtml-border-radius: 5px;
position: relative;

}
.postprofile {
float: left;
margin-left: -11em;
width: 124px;
}.post-container {
background-color: #EFF1F3;
margin-left: 12em;
}.post{
background-color: #FCFCFF;


border-bottom: 1px solid #D7EDFC;
}
.postbody,.post .post-header{background-color: #FCFCFF;}

.postprofile-details img{
max-width: 96px;
max-height: 96px;
}
.postprofile-details a span {padding: 0px 30px;}
.post-footer {
clear: both;
width: 83%;
float: right;
background-color : #FCFCFF;
border-top:0px;
}
.foxy {
margin-left: -5px;
}
.foxy {
position: absolute;
top: 10px;
right: -11px;
display: block;
width: 0px;
height: 0px;
line-height: 0px;
border: 10px solid transparent;
border-left-color: #D7EDFC;
border-right: none;
_display: none;
}.foxy {
left: 104%;
margin-left: -5px;
}
.foxy span{border-top-color:rgb(252, 252, 255);top: -6px;left: -5px}
.foxy span {
position: absolute;
top: -10px;
left: -12px;
display: block;
width: 0px;
height: 0px;
line-height: 0px;
border: 10px solid transparent;
border-left-color: #F0F7FC;
border-right: none;
}
.post1a{margin-left:0!important}
.post1{background:#F6F6F6;border-bottom:6px solid #EAEAEA;clear:initial;float:initial;margin-left:0!important;min-height:100px;text-shadow:#fff 0 1px 0;width:100%}
.post1b a img {
border-radius: 3px;
box-shadow: 0 0 4px black;
float: left;
margin: 4px 18px;
}
.post1b img{max-height:60px}
.post1b dt{float:left;}

.post1c {
clear: both;
width: 100%;
float:left;
background-color: #FCFCFF;
border-top: 0px;
}
.post1b dd+dd+dd{float:right;margin-right:50px;margin-top:-80px;}
.post1c li{
float: left;
list-style: none;
}
.post1c ul.posting-icons {
float: right;
list-style: none;
margin: 5px;
}
.postprofile-details dd{text-align: center;}
.post1d{
margin: 1em;
overflow: hidden;
min-height: 60px;
border-bottom: 1px solid #D7EDFC;
}
.post1e{max-width:150px;}

```
tạo 1 js in the topic

```

$(function () {
$('.postprofile-details dt').after('<span class="foxy"><span>

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;

');
});
$(function () {
$('div.postprofile:eq(0)').addClass('post1').removeClass('postprofile');
});
$(function () {
$('.post1b dt a span:eq(0)').addClass('post1e');
});

$(function () {
$('div.post-container:eq(0)').addClass('post1a').removeClass('post-container');
});

$(function () {
$('.postprofile-details.postdetails:eq(0)').addClass('post1b').removeClass('postdetails').removeClass('postprofile-details');
});


$(function () {
$('.post-footer:eq(0)').addClass('post1c').removeClass('post-footer');
});
$(function () {
$('.post-entry:eq(0)').addClass('post1d').removeClass('post-entry');
});

```

[quote](quote.md)Vui lòng không copy skin dưới các hình thức trừ các forum
+ http://invision.chinhphuc.info
+ http://www.cntt-k3.org
+ http://vna.us.to
+ http://www.maikhongquen.com/
+ http://vnagame.123.st/
5 forum nhớ ghi rõ nguồn http://vnagame.123.st/