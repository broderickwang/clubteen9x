Ưu điểm: Cái gì củng bỏ vào được
Nhược điểm: Dị ứng với Invision và PhpBB3
Up cho ae phát triển làm ra cái gì đó đệp đệp
B0: Demo: http://jerm.help-out.net/h2-page
B1: Thêm thẻ

```

<span class="the-tooltip">Nội dung tooltip

Unknown end tag for &lt;/span&gt;


```

Vào ngay sau thẻ mở đầu của thẻ <a> và<br>
<br>
<pre><code><br>
class="thetooltip"<br>
</code></pre>
vào trong thẻ <a>
VD: "<a href='#'><span>Nội dung tooltip</span>Tên link</a>"<br>
B2:Thêm đoạn này vô CSS và có thể tùy chỉnh hình dạng tooltip<br>
<br>
<pre><code><br>
/*  Coded by Juskteez  */<br>
.the-tooltip {background: white;width: 200px;padding: 10px;position: absolute;opacity: 0.8;<br>
margin-top:-40px;display: none;color: black;font-weight: 400;border: 1px solid #666666;box-shadow: 0 1px 5px }<br>
.thetooltip:hover .the-tooltip {display: inline;}<br>
.thetooltip:hover .the-tooltip:hover {display: none;}<br>
</code></pre>


-Lưu ý: thẻ <a> mà có phần class rồi thì thêm tên class trên vào ngày sau tên class có sẵn và để cách nhau bằng khoảng trắng!<br>
VD: <a href='#'>
