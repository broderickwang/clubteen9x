![http://i.imgur.com/Mbcy7.jpg](http://i.imgur.com/Mbcy7.jpg)
Mặc định Forumotion không cho phép bật chế độ fullscreen khi chèn flash. Điều này làm mình thấy hơi khó khăn khi đọc ebook hay xem video qua flash, khi người dùng có nhu cầu cuộn trang hoặc cần xem rõ nét hơn. Đoạn javascript dưới đây giúp khắc phục vấn đề này.

```


$(function(){
$("embed").replaceWith(function(){return $(this).clone().attr("allowfullscreen","true")});
});```