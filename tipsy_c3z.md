cơ bản thì chỉ cần thêm đoạn này vào overall\_header trước ```


Unknown end tag for &lt;/head&gt;

``` để chạy tipsy cho những thẻ chứa title mặc định.



```




<script type="text/javascript" src="http://onehackoranother.com/projects/jquery/tipsy/javascripts/jquery.tipsy.js">

Unknown end tag for &lt;/script&gt;


<link rel="stylesheet" type="text/css" href="http://onehackoranother.com/projects/jquery/tipsy/stylesheets/tipsy.css" media="all" />
<script type="text/javascript">
$(function(){
$('[title]').tipsy({fade: true,gravity:'s'});
// hiệu ứng fade khi ẩn hiện, vị trí ở trên.
});


Unknown end tag for &lt;/script&gt;




```

```
        $(function(){
$("[title]").not(":has([title])").tooltip();
$("[tip]").tooltip({
placement: 'bottom',
title: function() {return $(this).attr("tip");}
});
});```
muốn tùy chỉnh nâng cao hơn thì đọc thêm document :
http://onehackoranother.com/projects/jquery/tipsy/
http://diendan.chinhphuc.info/t24792-topic?highlight=tipsy

Tải về tự upload : https://github.com/jaz303/tipsy