![http://i41.servimg.com/u/f41/14/31/98/91/demo_b11.jpg](http://i41.servimg.com/u/f41/14/31/98/91/demo_b11.jpg)
Hướng dẫn:
B1:
Tìm trong viewtopic

```

{postrow.displayed.POSTER_NAME}
```

thay thành

```

<span id="proflie_1">{postrow.displayed.POSTER_NAME}

Unknown end tag for &lt;/span&gt;


```

B2:
Thêm vào đầu của Viewtopic\_body

```

<style>
#proflie_1 {font-size:14px;line-height:normal;display:inline-block;text-align:center;}#proflie_1 span strong{background:url(http://i48.servimg.com/u/f48/16/18/15/10/member12.png) no-repeat left top;margin-top:-4px;margin-left:-4px;padding-left:30px;display:inline-block;padding-top:10px;height:35px;width:140px;}


Unknown end tag for &lt;/style&gt;


```

Nếu mún set cho 1 thành viên nào đó icon riêng chỉ cần thêm 1 đoạn css này vào đoạn css bên trên

```

#proflie_1 a[href="(1)"] span strong {background:url((2)) no-repeat left top;}

```
+ Thay phần (1) thành link của thành viên
+ Thay phần màu (2) thành hình ảnh của icon