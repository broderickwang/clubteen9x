Mình đưa một code ví dụ lên, mình sẽ chú thích từng phần trong code luôn, rồi các bạn có thể tự ság chế style cho mình nhé Nháy mắt

Chèn vào CSS:

```


blockquote {border:2px solid #DDD;border-radius:10px;background:#FFF;box-shadow:2px 2px 5px #EBEADD;font-family:Georgia!important;} /*Tạo style cho nội dung bên trong khung quote*/
blockquote cite {background:#FFF;margin:0;border-bottom:2px solid #F40;padding:0;font-style:italic!important;} /*Tạo style cho nội dung bên trong khung quote*/
.spoiler{background:#FFF;border:2px solid #DDD;border-radius:10px;box-shadow:2px 2px 5px #EBEADD;} /*Tạo style cho tên người trích dẫn trong khung quote*/
.spoiler dt{background:transparent;border-bottom:2px solid #F40;color:#F40;} /*Tạo style cho nội dung bên trong khung spoiler*/
.spoiler>dt:after{content:"▼ Click để xem";float:right;} /*Thêm chữ Click để xem*/
.codebox.contcode{padding:5px 0 5px 0;border:2px solid #DDD;border-radius:10px;max-width:680px;box-shadow:2px 2px 5px #EBEADD} /*Tạo style cho cả khung code*/
.codebox dt{background: #fff;border-bottom:2px solid #F40;} /*Tạo style cho cái phần có chữ CODE í x_x*/
.codebox dd{border:0;} /*Tạo style cho nội dung bên trong khung code*/
```

Nhiêu đó thôi.... Khi nào rảnh mình chế mấy style rồi chia sẻ tiếp cho các bạn.
Àh quên, đây là style của CP nhé