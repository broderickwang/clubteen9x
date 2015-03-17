Bạn mở một cửa sổ ra, ngoài định kích thước, đóng...bạn cũng có thể quyết định xem nó sẽ xuất hiện ở chỗ nào trên màn hình, cũng như từ từ duy chuyễn nó.

```

window.open("http://xclub.ace.st","new_win","width=300,height=400");
new_win.moveTo(50,50);
```

Ken phân tích cho dễ hỉu yêu thế

Với đoạn code trên, công việc được miêu tả như sau:
1 Mở của sổ mới có địa chỉ :http://xclub.ace.st, tên: new\_win, chiều rộng 300, cao 400
2 Di chuyễn new\_win tới điểm cách lề tar1i màn hình 50, lề trên 50
**moveTo chuyễn cửa sổ tới một địa điểm cố định trên màn hình cười nhăn răng**

moveBy()
Với moveBy() bạn sẽ di chuyễn cửa sổ tới một vị trí so với vị trí hiện tại của nó.
VD:

```

new_win.moveBy(50,50);

```

Kết hợp hàm trên với hàm hẹn giờ(để giảm tốc độ mọi thứ xuống) bạn có thể kiến một cửa sổ di chuyễn trong màn hình.

Ở đây ta hãy dùng một phương pháp như thế này:
hàm tự gọi hàm và nội dung hàm là duy chuyễn cửa số chứa nó


```

<script language="javascript">
function move()
{
window.moveBy(50,50)
setTimeout('move();',1000);
}
move();


Unknown end tag for &lt;/script&gt;


```


Đặt đoạn code này trong trang chứa cửa sổ được mở ra, ở đây mình đạt tên cho file này là new\_win


Good rồi đó chụt chụt .... Ai 0 hỉu thì ken chịu thôi ... nhíu mày Những kiến thức là trong các đoạn sc