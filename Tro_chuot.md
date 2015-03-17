Như ở bài Thay trỏ chuột cho 4rum đã đề cập - trỏ chuột chỉ hiển thị trên IE.

Để hiển thị trên Firefox, cần thêm 1 trỏ chuột .gif (file ảnh động) vào CSS

```

cursor: url(link trỏ chuột .cur), url(link trỏ chuột .gif), auto;```


file .cur hoặc .ani chỉ hiển thị trên IE, còn file .gif hiển thị trên FF - vì thế có thể ứng dụng tạo 2 trỏ chuột khác nhau khi duyệt bằng các trình duyệt khác nhau.
Có thể vào http://www.totallyfreecursors.com/ để lấy trỏ chuột - có cả 2 dạng file .cur và .gif


Tương tự, để hiện trỏ chuột khác khi rê vào link. Vào CSS tìm a:hover (nếu chọn có ở Deactivate the basic CSS)
chèn đoạn sau vào ngay sau dấu {

```


cursor: url("link trỏ chuột .cur"), url("link trỏ chuột .gif"), auto;
```


Nếu không dùng Deactivate the basic CSS, chèn cả code sau vào css

```


a:hover {cursor: url("link trỏ chuột .cur"), url("link trỏ chuột .gif"), auto;}```