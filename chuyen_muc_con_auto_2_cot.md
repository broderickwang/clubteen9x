![http://i44.servimg.com/u/f44/17/54/30/53/chaa_c14.png](http://i44.servimg.com/u/f44/17/54/30/53/chaa_c14.png)
Bước 1:
-ACP-> Display-> Homepage-> Structure and hierarchy-> Split categories on index
chọn Medium

-ACP-> Display-> Homepage-> Structure and hierarchy-> Hierarchy
tùy chỉnh như hình sau:



Bước 2 vào index\_box
Tìm:

```

{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}
```
```


<div id="smallrum">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

Unknown end tag for &lt;/div&gt;


```
Bước 3: Thêm vào css:
-Có background: (code dưới có background màu xanh da trời với mã màu là #ccf0ff các bạn có thể thay màu tùy ý)
Demo:![http://i44.servimg.com/u/f44/17/54/30/53/chaa_c15.png](http://i44.servimg.com/u/f44/17/54/30/53/chaa_c15.png)


```

#smallrum{padding: 0.4em 1em;margin: 3px 1px;
background: #ccf0ff none;
-moz-box-shadow: -2px 2px 2px #c8c8c8;
-webkit-box-shadow: -2px 2px 2px #c8c8c8;box-shadow: -2px 2px 2px #c8c8c8;color: #ccf0ff;width: 375px;}
#smallrum a img{vertical-align: middle; padding-right: 2px;}
#smallrum a.gensmall {
display: inline-block;
text-align: left;
width: 160px;
}
```


-Không có background:
Demo:
![http://i44.servimg.com/u/f44/17/54/30/53/chaa_c16.png](http://i44.servimg.com/u/f44/17/54/30/53/chaa_c16.png)


```

#smallrum{padding: 0.8em 1em; margin: 3px 1px;
color: #FFFFFF; width: 375px;}
#smallrum a img{vertical-align: middle; padding-right: 2px;}
#smallrum a.gensmall {
display: inline-block;
text-align: left;
width: 160px;
}



```