Chả biết có ai post cái này chưa nhờ nóng trog ngừi MC thấy nó khá là đáng yêu nên post nhá hehe Có rồi phiền Mod sọt hộ :$:
Đây là 1 đoạn js lấy từ code media bbcode của Vượng (baivong) ra cười lớn rất là hữu ích khi bổ sung thêm dc bbcode button vào quickrep + editor của bạn Cười nhe răng

• ACP ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png)  MODULES ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png)  HTML & JAVASCRIPT ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Javascript codes management ![http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png](http://r26.imgfast.net/users/2615/25/32/47/smiles/93149.png) Creat A New Javascript

• Title : BBCode

• Placement :
- Chỉ hiện ở quickreply : Tích vào ô <In the topics>
- Hiện ở cả quickreply + Editor : Tích vào ô <In all the pages>

•Javascript Code:
```

$(function(){ $("<button class=\"button2\" onclick=\"bbfontstyle('[youtube]','[/youtube]');return false\"><img src=\"http://vietcanh.com/diendan/images/mmohut/youtube.jpg\" height=\"16px\"/></button> ").insertBefore("span#text_edit input.button2[value='Others']");});
```


Trong đó: - [youtube](youtube.md) [/youtube] (màu đỏ) là bbcode bạn cần hiện lúc ấn vào
- vietcanh.com/diendan/images/mmohut/youtube.jpg : link ảnh button muốn hiện ( nên là 16px cho cùng kích cỡ với các button của FM )

• Save lại và thưởng thức thành quả mặt gian

• Muốn thêm 1 nút nữa thì thêm đoạn này

```

<button class=\"button2\" onclick=\"bbfontstyle('[color=red][youtube][/color]','[color=red][/youtube][/color]');return false\"><img src=\"[color=blue]http://vietcanh.com/diendan/images/mmohut/youtube.jpg[/color]\" height=\"16px\"/></button>

```

Vào sau 

Unknown end tag for &lt;/button&gt;

 Cười nhe răng


• Code viết bởi baivong - tì mần tách ra chơi bởi MC cười lớn