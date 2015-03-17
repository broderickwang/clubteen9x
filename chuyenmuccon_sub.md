http://code-forumotion.forumvi.com/

Sắp xếp lại forum con cho phiên bản phpbb2 và punbb.

1. Tìm trong index\_box :
```

{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}
```
Thay bằng :
```

<div class="sub-forum">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

Unknown end tag for &lt;/div&gt;


```
2. Thêm vào CSS đoạn : ```
.sub-forum a.gensmall{
display:inline-block;width:45%; /*đặt chiều rộng, tăng giảm số 45% cho phù hợp*/
white-space:nowrap;overflow:hidden;text-overflow:ellipsis; /*thu gọn tên sub-forum dài*/}
.sub-forum{color:transparent;margin-top:6px}```
Đọc Description để thay đổi thông số cho thích hợp.
Hình ảnh: Sắp xếp lại forum con cho phiên bản phpbb2 và punbb. 1. Tìm trong index\_box :

![https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/c3.0.403.403/p403x403/48133_468839546519613_286671631_n.png](https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/c3.0.403.403/p403x403/48133_468839546519613_286671631_n.png)
```
div.forum-name+p a.gensmall,div.mods+p a.gensmall{
display:inline-block;width:45%; /*đặt chiều rộng, tăng giảm số 45% cho phù hợp*/
white-space:nowrap;overflow:hidden;text-overflow:ellipsis; /*thu gọn tên sub-forum dài*/}
div.forum-name+p,div.mods+p{color:transparent;margin-top:6px}```