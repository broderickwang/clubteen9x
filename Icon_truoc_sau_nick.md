hình như mình thấy diễn đàn chưa có code icon sau nick nên mạo muội post lên mọng các bác pro chém nhẹ tay cho em , con nếu được thì thank cho em lấy hên nhé !!

1/ tạo icon sau nick cho 1 nhóm

```

span[style="color:#FF0000"]:after{content: url(http://i41.servimg.com/u/f41/16/41/29/13/admin111.gif);}
```


Trong đó
+#FF0000 : là màu của nhóm
+after : chắc cái này ai cũng biết

2/ Tạo icon sau nick cho từng thành viên

```

a[href="/u1"] span:after{content: url(http://i41.servimg.com/u/f41/16/41/29/13/admin111.gif);}
```


Trong đó /u1 là số thứ tự thành viên trong forum của bạn (chèn cho đúng nhá hihihi)

Xong rồi ! nếu có sai sót j thì mấy bác pro sửa lại dùm em nha! đừng chén em tội nghiệp

DEMO http://teenqnam.forumvi.com/forum