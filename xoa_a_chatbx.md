Sau đây là bài hướng dẫn ngại quá Trả lời bài viết này để xem đầy đủ

> B1: Chèn vào CSS

```


#chatbox_members li span + a span,#chatbox_members a span + span,#chatbox .user > span + a {margin-left:-4px}
#chatbox_members li span + a span {display:inline-block!important}
#chatbox_members li > span,#chatbox .user > span,#chatbox_members a[href="/u1"] span:first-child{display:none}
```


B2: Tùy chỉnh CSS
Trong code trên có đoạn ẩn @ đối với Admin (/u1) là
```


#chatbox_members a[href="/u1"] span:first-child
```

Bây h muốn ẩn @ của thành viên có link là (/u2) thì bạn sửa thành như sau
```


#chatbox_members a[href="/u1"] span:first-child,#chatbox_members a[href="/u2"] span:first-child
```

Cứ thế muốn thêm mấy người thì các bạn theo đó mà mần tiếp ngại quá
