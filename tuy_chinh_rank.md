![http://i14.servimg.com/u/f14/16/58/45/96/122.jpg](http://i14.servimg.com/u/f14/16/58/45/96/122.jpg)
Note:
Thu nhỏ kick cỡ rank sao cho phù hợp với vewtopic\_body bạn đang dùng
rất đơn giản chỉ làm theo 2 bước sau





Bước 1 : Vào Vewtopic\_body tìm

```

{postrow.displayed.RANK_IMAGE}

```
thay thế nó bằng :

```

<div class="rank2">{postrow.displayed.RANK_IMAGE}

Unknown end tag for &lt;/div&gt;



```

Bước 2 : Vào css để chỉnh sửa độ rộng dài của nó
thêm cái này vào css

```

.rank2 img{
width: 100px;
height: 100px;
}
```


> ở đây Width là độ rộng
> height là chiều cao
> thay đổi cho phù hợp nhá :d
> và có thể thêm nhiều hiệu ứng cho ảnh của rank
> chúc các bạn thành công
> !