1- Định nghĩa: Khi làm theo các bài trong hướng dẫn này bạn có thể tạo được một nút nhấn giúp ẩn hiện các widget bên phải và bên trái của diễn đàn bạn.
![http://i22.servimg.com/u/f22/11/22/70/40/show_h10.png](http://i22.servimg.com/u/f22/11/22/70/40/show_h10.png)
2- Cách thức hoạt động:
Hoạt động cho tất cả các phiên bản, tùy thuộc vào vị trí widget của diễn đàn bạn mà ap dụng cho phù hợp.
Các tùy chọn mỗi người dùng đã chọn được lưu cho đến khi họ click vào mũi tên một lần nữa hoặc cho đến khi họ có bộ nhớ cache của trình duyệt.
3- Hướng dẫn cài đặt:
Để cài đặt nó, bạn cần phải tạo ra hai widget tùy chỉnh trên diễn đàn của bạn.

Bạn có thể làm điều này bằng cách vào Admin panel -> Modules -> Portal & Widgets -> Forum widgets management. Tại đây bạn nhấp vào nút Create a widget như hình dưới đây:

![http://i22.servimg.com/u/f22/11/22/70/40/show_h11.png](http://i22.servimg.com/u/f22/11/22/70/40/show_h11.png)
Bạn sẽ cần phải thêm một widget ở trên và một ở phía dưới của các ứng dụng khác đã có trên diễn đàn của bạn.

Sau khi bạn nhấp vào nút Create a widget, bạn sẽ thấy trang này:

![http://i22.servimg.com/u/f22/11/22/70/40/show_h12.png](http://i22.servimg.com/u/f22/11/22/70/40/show_h12.png)
Đây là thông tin bạn cần điền vào:
Widget name - Bạn có thể thêm bất cứ tên nào bạn muốn, nhưng vì lợi ích của sự đơn giản trong hướng dẫn này, tôi sẽ đặt tên các widget đó sẽ là "Top Widget Left" và "Bottom Widget Left"
Use a table type - Chọn Không cho tùy chọn này.
Widget title - Để trống trường này
Widget source - Trong ô này bạn sẽ thêm các code theo như hướng dẫn dưới đây.

a/Đối với bên trái:
Thêm mã này trong Widget source của Top Widget Left:

```

<div id="forum-widget" style="height: 13px; width: 16px; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; cursor: pointer; position: absolute; background: #f5ebf7  url(http://i42.tinypic.com/vg54yu.png) no-repeat 0 -13px;" onClick="jQuery('#left').animate({width:'toggle',height:'toggle',opacity:'toggle'},1000); if(my_getcookie('forum-widget')=='0') { my_setcookie('forum-widget','1',0,0); jQuery('#forum-widget').css('background-position','0 -13px'); } else { my_setcookie('forum-widget','0',1,0); jQuery('#forum-widget').css('background-position','0 0px'); }">

Unknown end tag for &lt;/div&gt;


```

Nếu biết cách bạn có thể chỉnh sửa lại link ảnh và màu nền cho phù hợp với phông nền của diễn đàn bạn.
Bây giờ Thêm mã này trong Widget source của Bottom Widget Left:

```

<script type="text/javascript"> jQuery('#forum-widget').insertBefore('#left'); if(my_getcookie('forum-widget')=='0') {jQuery('#left').animate({width:'toggle',height:'toggle',opacity:'toggle'},0); jQuery('#forum-widget').css('background-position','0 0px'); } 

Unknown end tag for &lt;/script&gt;



```

b/Tương tự đối với các bên phải:
Bạn tạo ra 2 widget đặt tên là "Top Widget Right" và "Bottom Widget Right"
Thêm mã này trong Widget source của Top Widget Right:

```

<div id="forum-widget" style="cursor: pointer; height: 13px; width: 16px; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; position: relative; bottom: -15px; float: right; background: #f5ebf7 url(http://i42.tinypic.com/vg54yu.png) no-repeat 0 -13px;" onClick="jQuery('#right').animate({width:'toggle',height:'toggle',opacity:'toggle'},1000); if(my_getcookie('forum-widget')=='0') { my_setcookie('forum-widget','1',0,0); jQuery('#forum-widget').css('background-position','0 -13px'); jQuery('#content-container div#content').css('margin-right','189px');} else { my_setcookie('forum-widget','0',1,0); jQuery('#forum-widget').css('background-position','0 0px'); jQuery('#content-container div#content').css('margin-right','0px'); }">

Unknown end tag for &lt;/div&gt;


```

Như đã giải thích trên những phần Link ảnh và màu nền có thể được tùy chỉnh theo ý thích của bạn.
Bây giờ Thêm mã này trong Widget source của Bottom Widget Right:

```

<script type="text/javascript"> jQuery('#forum-widget').insertBefore('#right'); if(my_getcookie('forum-widget')=='0') {jQuery('#right').animate({width:'toggle',height:'toggle',opacity:'toggle'},0); jQuery('#forum-widget').css('background-position','0 0px');  jQuery('#content-container div#content').css('margin-right','0px');} 

Unknown end tag for &lt;/script&gt;


```

4- Cách thêm các widget:
Sau khi bạn đã tạo ra công cụ mà bạn cần phải thêm chúng vào diễn đàn của bạn. Nếu bạn chưa biết làm thế nào để làm được điều này thì đây là cách làm: Admin panel -> Modules -> Portal & Widgets -> Forum widgets management
Trên trang đó vào tab "Personal widgets". Từ đó bạn chỉ cần kéo và thả các widget vừa tạo vào "Forum widgets management" Theo thứ tự như trong hình dưới đây. Đừng quên bấm vào nút "Chấp nhận"
![http://i22.servimg.com/u/f22/11/22/70/40/show_h13.png](http://i22.servimg.com/u/f22/11/22/70/40/show_h13.png)
Thế là xong
Link gốc: http://help.forumotion.com/tricks-tips-f32/show-hide-widgets-script-t78898.htm