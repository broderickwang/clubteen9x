Demo là forum đang dùng nhé. (15/10)

Cho vào footer: _italic_

```

<script src="http://illiweb.com/rsc/24/frm/admin/admin.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

Cho vào css:

```

<style>
#tooltip .header{display:none}
#tooltip .tiplFMvi{border-bottom:1px dashed;margin-bottom:5px;padding-bottom:5px}#tooltip{background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/opacit10.png);border:0;border-radius:3px;color:#FFF;max-width:550px;padding:0;position:absolute;z-index:99}
.entry-content img {
max-width:350px;
}


Unknown end tag for &lt;/style&gt;

```



Muốn khi chỉ tên vào chuyên mục hiện ra phần giới thiệu chuyên mục thì
vào index box

```



<a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}

Unknown end tag for &lt;/a&gt;


```



```


Code: -------------------------------------------Chọn Nội Dung
<h{catrow.forumrow.LEVEL} onmouseover="show_tooltip(this, $(this).next().html(), 'FMvi.Org')" class="hierarchy">
<a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}

Unknown end tag for &lt;/a&gt;


</h{catrow.forumrow.LEVEL}><div style="padding:19px; display: none;">{catrow.forumrow.FORUM_DESC} <br> ```



an