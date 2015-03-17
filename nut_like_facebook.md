Member
Bài viết Bài viết: 116
Thanks Thanks: 143
1.đối với forum dùng giao diện mặc định có dùngùng widget phải hoặc
trái ,bạn vào ACp >> MODULES >> Portal & Widgets
>> Forum widgets management >>Personal widgets
tìm widget Share kéo và thả lên vị trí thích hợp trên widget của forum bạn


![http://i44.servimg.com/u/f44/15/64/85/86/adsad10.png](http://i44.servimg.com/u/f44/15/64/85/86/adsad10.png)
![http://i44.servimg.com/u/f44/15/64/85/86/qwwqwq10.png](http://i44.servimg.com/u/f44/15/64/85/86/qwwqwq10.png)
cách 2.demo


chèn đoạn code dưới đây vào overrall\_footer

```



<style>
#FM_widget_share div {
width: 60px !important;
}
#FM_widget_share {
width: 200px;
position: fixed;
bottom: 0;
right: -2px;
padding: 4px;
background: white;
-moz-border-radius-top-left: 6px;
border: 5px solid #0F528F;
border-right-width: 0;
text-align: center !important;
border-top-left-radius: 6px 6px;
border-bottom: 0px;
}
#FM_widget_share iframe {
padding-left: 5px;
}



Unknown end tag for &lt;/style&gt;


<div align="center" id="FM_widget_share">

Unknown end tag for &lt;/div&gt;


```

hoặc có thể chèn đoạn này ở view topic hoặc bất cứ đâu bạn muốn hiện 3 nút đó

```

<div align="center" id="FM_widget_share">

Unknown end tag for &lt;/div&gt;


```