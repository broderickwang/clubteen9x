**THÔNG TIN
- CSS bởi handsomevip007 - A14 Tôi yêu
- Phiên bản Forum: Invision, phpBB2, phpBB3, punBB (ý là toàn bộ đều dc đó )
- Phiên bản sản phẩm: 1.0**

**TÍNH NĂNG
- lượt chat chia làm 2 bên như cuộc đối thoại
- phông cảnh làm nền
- Khắc phục tình trạng giật chatbox
- ... (mọi người góp ý tính năng để mần tiếp ver sau nhé )**

**DEMO ![http://i44.servimg.com/u/f44/15/64/85/86/cp5310.jpg](http://i44.servimg.com/u/f44/15/64/85/86/cp5310.jpg)**

**CSS: Nhét vào cuối CSS**

```

.chatbox_row_2.clearfix,.chatbox_row_2.clearfix .date-and-time {float:right}
.chatbox_row_1.clearfix{float:left}
.chatbox_row_1.clearfix,.chatbox_row_2.clearfix{
clear:both;
max-width:50%;
margin:10px 2px 0 2px;
background:rgba(250, 250, 250, 0.79);
display:block;
min-height:30px;
border-radius:5px;
}
[class^="chatbox_row_"]:last-child{margin-bottom:10px}
.date-and-time{
float:left;
margin:-21px 0 0 -7px;
background:url(http://i44.servimg.com/u/f44/15/64/85/86/app-cl10.png);
font-size:0;
display:inline-block;
width:16px;
height:16px;
}
.user{font-size:0}
.user a{
text-shadow:0 0 13px white,0 0 13px white,0 0 13px white,0 0 13px white,0 0 13px white,0 0 13px white,0 0 13px white,0 0 13px white;
margin:0 5px;
font-size:12px
}
.chatbox_row_1.clearfix .user{margin:-18px 0 0 7px;float:left}
.chatbox_row_2.clearfix .user{margin:-18px 14px 0 0;float:right}
#chatbox{background:url(http://i44.servimg.com/u/f44/15/64/85/86/bien-j10.jpg)}
#chatbox_bottom{height:412px!important}
#chatbox [style="font-style"]{font-size:0}
#chatbox [style="font-style"]::after{
content:"Ngắt kết nối tới máy chủ! Click [Đăng nhập] ở góc để thử lại :)";
font-size:14px;
}
```


**LƯU Ý:**

- Code có thể ảnh hưởng hoặc không ảnh hưởng đến các code chatbox đã share trước đó
- Khi gặp lỗi yêu cầu hỗ trợ vui lòng cung cấp thêm cái nick test để mình có thể thấy được cái chatbox
- Không ẩn code, hide, hay làm bất cứ trò gì khi sao chép đi nơi khác

