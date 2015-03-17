miêu tả chức năng gửi 1 link vào bài viết thì nó rút gọn thành [Link](Link.md)


![http://i45.servimg.com/u/f45/14/65/61/19/click_10.jpg](http://i45.servimg.com/u/f45/14/65/61/19/click_10.jpg)
Cho vào CSS:

punbb

```

.post-entry a:after {
content: '[Link]';
font-size: 12px !important;
}
.post-entry a:link {
font-size: 0px;
display: inline-block;
}

```

phpbb2

```

.postbody a:after {
content: '[Link]';
font-size: 12px !important;
}
.postbody a:link {
font-size: 0px;
display: inline-block;
}


```
nguồn chinhphuc

Xem lý lịch thành viên Gửi tin nhắn
Trả lời với trích dẫn nội dung bài viết này