```

.postbody span[style="color:#f00"], .postbody span[style="color:red"]  {
font-size: 0px;display: inline-block;
}
.postbody span[style="color:#f00"]::before, .postbody span[style="color:red"]::before {
content: "[ Bạn cần ";
font-size: 12px;
}
.postbody span[style="color:#f00"]::after, .postbody span[style="color:red"]::after {
content: " để xem được liên kết. ]";
font-size: 12px;
}.postbody span[style="color:#f00"] a, .postbody span[style="color:red"] a {
display: inline-block;
}
.postbody span[style="color:#f00"] a[href*="/register"]::before, .postbody span[style="color:red"] a[href*="/register"]::before {
content: "Đăng ký";
font-size: 12px;border-bottom: 1px dotted red;
}
.postbody span[style="color:#f00"] a[href*="/login"]::before, .postbody span[style="color:red"] a[href*="/login"]::before {
content: "\0000a0 hoặc\0000a0";
font-size: 12px;
color: red;
}
.postbody span[style="color:#f00"] a[href*="/login"]::after, .postbody span[style="color:red"] a[href*="/login"]::after {
content: "Đăng nhập";
font-size: 12px;border-bottom: 1px dotted red;
}
```