Cho vào CSS:
![http://i45.servimg.com/u/f45/14/65/61/19/click_10.jpg](http://i45.servimg.com/u/f45/14/65/61/19/click_10.jpg)
punbb

```

.post-entry a:after {
content: '[Link]';
font-size: 12px !important;
}
.post-entry a:link {
font-size: 0px;
display: inline-block;
}
```


phpbb2

```

.postbody a:after {
content: '[Link]';
font-size: 12px !important;
}
.postbody a:link {
font-size: 0px;
display: inline-block;
}

```

nguồn chinhphuc