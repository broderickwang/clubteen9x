CSS khung code :
```


.code div.cont_code {
background:#f7f7f7 url(http://illiweb.com/bl/spirale.png) no-repeat;
border:1px solid #8F8F8F;
display:block;
font-family:Courier,CourierNew,sans-serif;
font-size:1em;
font-style:normal;
font-variant:normal;
font-weight:normal;
line-height:1.3em;
margin:2px auto;
max-height:200px;
overflow:auto;
padding:4px;
white-space:pre!important;
width: 460px!important
}

```
CSS thanh cuộn khung code :
```


.cont_code::-webkit-scrollbar {
-webkit-border-radius:1ex;
height:2ex;
width:2ex
}
.cont_code::-webkit-scrollbar-thumb {
-webkit-border-radius:1ex;
-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);
background:#ccc -webkit-gradient(linear,0%0%,0%100%,from(rgb(240,240,240)),to(rgb(210,210,210)));
border-top:1px solid #fff
}

```