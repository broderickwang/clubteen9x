![http://a.imageshack.us/img684/3434/demo1pf.jpg](http://a.imageshack.us/img684/3434/demo1pf.jpg)



Bước 1 : Vào Forum widgets management đặt widget theo hình sau :


![http://a.imageshack.us/img233/305/demo2uz.jpg](http://a.imageshack.us/img233/305/demo2uz.jpg)


Bước 2 : Vào Javascript codes management tạo Javascript mới :
• Title **: tùy ý
• Placement : In all the pages.
• Javascript Code** :

```

$(function(){
$('#left .module:eq(0)').addClass('topposter').next().remove();
$('#left .module:eq(1) .inner').css('color',$('#left .module:eq(1)').css('background-color'));
$('#left .module:eq(1) a[href^=/t]').addClass('c3topic').next().remove();
$('#left .module:eq(1) a[href^=/u]').addClass('c3poster').next().remove();
$('#left .module:eq(1) br').addClass('clear');
});
```


Bước 3 : VàoDisplay ~> Colors ~> CSS Stylesheet . Chèn đoạn sau vào CSS

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


Tùy chỉnh: với CSS
◘ 250px là chiều rộng khung Top posters . tùy ý thay đổi cho phù hợp.
◘ 10px là là khoảng cách giữa khung Top posters và khung Latest topics
◘ Trang trí cho tiêu đề bài viết bằng cách thay các thuộc tính css cho đoạn /**style cho tiêu đề bài viết**/
◘ Tương tự cho tên người gửi ~ /**style cho tên người gửi**/