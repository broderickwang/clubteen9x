![http://i77.servimg.com/u/f77/16/58/45/96/6711.jpg](http://i77.servimg.com/u/f77/16/58/45/96/6711.jpg)


Bước 1 cho cái này vào CSS
```

#content-container div#left {float: none;width: 100%}
#left .topposter {float: left; width: 250px; margin-right:10px}
#left .module .inner a {margin:2px 0}
#left .module .inner .c3topic{
/*style cho tiêu đề bài viết*/
}
#left .module .inner .c3poster{
float:right;
/*style cho tên người gửi*/
}
```


Tiếp theo vào : MODULES >> HTML & JAVASCRIPT >>
Javascript codes management
Tạo 1 js mới
Title **: Lasttopic 3 cột
Placement : In all the pages
Javascript Code** :

```

$(function(){
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(1) .inner').css('color',$('#left .module:eq(1)').css('background-color'));
$('#left .module:eq(1) a[href^="/t"]').addClass('c3topic').next().remove();
$('#left .module:eq(1) a[href^="/u"]').addClass('c3poster').next().remove();
$('#left .module:eq(1) br').addClass('clear');
var tp = $('#left .module:eq(0)');
$('#left .module:eq(2)').css({"position":"absolute","top":tp.offset().top+tp.height()+9,"width":tp.width()});
});

```

Sắp xếp Widgets như hình dưới

![http://i77.servimg.com/u/f77/16/58/45/96/untitl10.jpg](http://i77.servimg.com/u/f77/16/58/45/96/untitl10.jpg)
Thế là ok