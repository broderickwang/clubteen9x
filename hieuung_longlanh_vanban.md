Đây là 1 đoạn mã đơn giản, vì mình mới học nên cũng chỉ có thể làm được tới đây :twisted: - Các bạn có thể biên chế thêm tùy theo ý tưởng và khả năng của bạn và các bạn cũng có thể thêm 1 số hiệu ứng khác

---

Bước 1: Các bạn tìm 1 bức hình làm hiệu ứng ---
Ở đây mình dùng hình này -->
> ![http://i22.servimg.com/u/f22/15/42/72/40/bling110.gif](http://i22.servimg.com/u/f22/15/42/72/40/bling110.gif)



Bước 2: Các bạn chèn vô CSS

```

.fmvi-text {background: url(http://i22.servimg.com/u/f22/15/42/72/40/bling110.gif);float:left;}
```


Bước 3:
Các bạn nhập văn bản và chèn code sau vô văn bản

```

<div class="fmvi-text">Nội dung văn bản

Unknown end tag for &lt;/div&gt;


```


Bước 4: XEM KẾT QUẢ


---

Bước biên chế theo nếu thích. : Cái này làm để giúp cho việc nhanh hơn thui.
_Bước 1 - 2 như trên_Bước 2.1
Các bạn vô "posting\_body" tìm

```

<img src="{PATH_IMG_FA}wysiwyg/font_delete.png" alt="{REMOVE_TEXT_FORMATTING}" />

Unknown end tag for &lt;/button&gt;

&nbsp;


Unknown end tag for &lt;/span&gt;



```

Chèn vô đằng sau nó:

```

<button class="button2" onclick="bbfontstyle('<div class=fmvi-text>','</div>');return false" type="button"><img src="http://i29.servimg.com/u/f29/11/79/54/63/buzz10.png" />

Unknown end tag for &lt;/button&gt;


```


-Bước 2.3: nhập nội dung văn bản, chọn khối và bấm button có hình

trên thanh công cụ bài viết.      ![http://i29.servimg.com/u/f29/11/79/54/63/buzz10.png](http://i29.servimg.com/u/f29/11/79/54/63/buzz10.png)

Bước 3: XEM KẾT QUẢ