![http://i69.servimg.com/u/f69/18/13/87/17/111.png](http://i69.servimg.com/u/f69/18/13/87/17/111.png)
JS
```

$(function () {
$('.entry-content').html($('.entry-content').html().replace(/\[fshare\](.*?)\[\/fshare\]/gi, '<div class="download_button"><div class="download_title"><img alt="download" src="http://begood.vn/images/bbcode/fshare.png" title="download">

Unknown end tag for &lt;/div&gt;

<div class="download_content">$1

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

'));
});
```

CSS
```

.download_button {
margin: 5px auto;
width: 500px;
}
.download_title {
position: relative;
text-align: center;
width: 100%;
}
.download_content {
border: 1px solid #CCCCCC;
border-radius: 10px 10px 10px 10px;
margin-top: -57px;
padding: 35px 10px 10px;
position: relative;
text-align: left !important;
}

```
Demo
http://jsfiddle.net/creepyzero/ftGDr/5/