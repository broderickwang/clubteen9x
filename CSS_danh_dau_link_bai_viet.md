**Mô tả: Mỗi một loại link trong bài viết sẽ hiện một biểu tượng nhỏ nhỏ phía trước để làm dấu**Demo: ![http://i44.servimg.com/u/f44/15/64/85/86/cp14210.png](http://i44.servimg.com/u/f44/15/64/85/86/cp14210.png)
**Ứng dụng: Các bạn có thể ứng dụng để đánh dấu các link nghe nhạc, link download, hoặc một số link của một số website, forum nhất định.**

**CSS**

```

.post-entry a:before{padding-right:2px;content:url(http://i44.servimg.com/u/f44/12/24/45/65/link-i10.png)}
.post-entry [href$=".jpg"]:before,.post-entry [href$=".jpeg"]:before,.post-entry [href$=".png"]:before,.post-entry [href$=".gif"]:before{padding-right:2px;content:url(http://i44.servimg.com/u/f44/12/24/45/65/links-10.png)}
.post-entry [href="/"]:before,.post-entry [href="http://diendan.chinhphuc.info"]:before{padding-right:2px;content:url(http://i44.servimg.com/u/f44/12/24/45/65/insert10.png)!important}
```

**Lưu ý: Sửa class .post-entry lại cho phù hợp với từng phiên bản và cấu trúc forum. Code trên viết cho Invision**

**PunBB,**phpBB2: Sửa .post-entry thành .postbody