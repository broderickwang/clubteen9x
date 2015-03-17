Hiện nay, để làm viền trong suốt, cách dùng phổ biến là dùng ảnh trong suốt. Phương pháp này có ưu điểm là hiển thị tốt trên mọi trình duyệt.
Ví dụ: Ảnh nền 4all -
```

http://www.fmvi.org/users/2213/24/46/69/album/bg_4al10.jpg```
Nhược điểm:

> Khó thay đổi: Để làm được ảnh nền này, bạn cần có vốn nho nhỏ về photoshop, tuy nhiên trên mạng thì ảnh nền dạng này cũng không hiếm.
> Cố định: Chiều rộng của forum sẽ phải cố định khi dùng ảnh nền này, đối với desktop tỉ lệ 4:3 thì phần cuối trang sẽ mất ảnh nền (Nếu tỷ lệ ảnh không phù hợp).


Sẵn tiện có một bạn nhờ mình làm viền nên mình viết dẫn luôn, tạm thời thì dò trên google vẫn chưa tìm thấy hướng dẫn dạng này.

Hướng dẫn chung:
Cách 1: Tạo khung viền toàn bộ

Code:
> <div>
<blockquote><!-- Nội dung cần viền --><br>
</div></blockquote>


Cách 2: Tạo khung viền dọc 2 bên

Code:
> <div>
<blockquote><!-- Nội dung cần viền --><br>
</div></blockquote>



Demo: http://www.fmvi.org/h106-vien-trong-suot-dung-css

Hướng dẫn cho punBB:
ACP >> Display >> Templates >> Ganeral >> overall\_header:
Bước 1: Tìm:

```

<div class="pun">

```
và thêm vào đằng trước nó một trong 2 code sau:
1 - Viền khung:

```

<div style="border-style: solid; border-color: rgb(137, 137, 137); border-radius: 5px;  border-width: 2px; background-color: rgba(255, 254, 254, 0); box-shadow: 3px 3px 7px 2px; padding: 10px; width: 968px; margin: 10px auto;">
```

2 - Viền dọc:

```

<div style="border-style: solid; border-color: rgb(137, 137, 137);  border-width: 0pt 2px; background-color: rgba(255, 254, 254, 0); box-shadow: 3px 3px 7px 2px; padding: 0 10px; width: 968px; margin: 0 auto;">
```


Bước 2: Thêm vào trước:

```



Unknown end tag for &lt;/body&gt;


```

bằng code sau:

```



Unknown end tag for &lt;/div&gt;



```

Chú ý: Thay đổi thuộc tính width theo chiều rộng forum bạn

```

width: 968px;

```

Nếu muốn tăng/giảm độ dày của viền thì thay đổi thuộc tính padding

```

padding: 10px;
```