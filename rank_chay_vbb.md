Demo trước nhé:

![http://i47.servimg.com/u/f47/17/57/29/64/111.png](http://i47.servimg.com/u/f47/17/57/29/64/111.png)

tại mình chụp hình lên nó ko chạy.
các bạn xem thêm Demo sống nè: http://kimdong.forum.st/t35-topic#36

Các làm:

vào Viewtopic\_body tìm:

```

{postrow.displayed.POSTER_RANK_NEW}

```

Xóa nó đi và nhét code dưới đây vào nơi bạn muốn đạt. nếu ko có kinh nghiệm thì các bạn nên thay luôn vào code vừa xóa.

```

<fieldset style="width: 125px; border: 1px solid; margin: 5px; padding: 5px 10px;"><legend>Danh hiệu

Unknown end tag for &lt;/legend&gt;

<font size="4" face="Times New Roman"><b><font size="3" color="#ffffff" style="text-shadow: 0px 0px 6px rgb(800, 0, 100), 0px 0px 5px rgb(800, 0,100), 0px 0px 5px rgb(800, 0,100);"><marquee scrollamount="4">{postrow.displayed.POSTER_RANK_NEW}<br />

Unknown end tag for &lt;/marquee&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/fieldset&gt;


```

bạn
Còn đối vs các bạn dùng last có Menu avatar Drom thì nên chèn sau đoạn

```

<div onmouseover="show_user({postrow.displayed.U_POST_ID})" class="useravatar" style="padding: 15px 0 15px 9px">{postrow.displayed.POSTER_AVATAR}

Unknown end tag for &lt;/div&gt;



```

Chú ý: tùy chỉnh

```

width: 125px```

cho phù hợp vs viewtopic của bạn