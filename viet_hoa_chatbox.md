Đây là 1 mini tút giúp bạn thay đổi dòng thông báo trong chatbox.
Hoạt động tốt trên Punbb,các ver khác chưa test.

"You are disconnected."

Chèn vào CSS CODE:

```

#chatbox [style="font-style:italic"] {
font-size: 0;
}
#chatbox [style="font-style:italic"]::after {
content: "Ngắt kết nối tới máy chủ! Click [Đăng nhập] ở góc để thử lại :)";
font-size: 14px;
}

```

"You must be connected to use the chat box."

```


#chatbox a:hover *::before,#chatbox a:hover *::after{display:none}
body > table:first-child span:before {
content: "Bạn phải đăng nhập để tham gia Chatbox";
visibility: visible;
}
body > table:first-child span {
visibility: hidden;
}


```