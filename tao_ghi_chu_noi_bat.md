![http://i43.servimg.com/u/f43/14/73/12/96/demooo10.png](http://i43.servimg.com/u/f43/14/73/12/96/demooo10.png)
Cho vào CSS:

```


.info, .success, .warning, .error, .mes, .tips, .chat, .cnb {
margin: 10px 0px;
padding: 10px 10px 15px 50px;
background-repeat: no-repeat;
background-position: 10px center;
border-radius: 4px 4px 4px;
}

.info {
background-color: #d1e4f3;
background-image: url("http://cdn1.iconfinder.com/data/icons/musthave/24/Information.png");
color: #00529B;
border: 1px solid #4d8fcb;
}

.success {
background-color: #effeb9;
background-image: url("http://cdn3.iconfinder.com/data/icons/fatcow/32x32_0020/accept.png");
color: #4F8A10;
border: 1px solid #9ac601;
}
.warning {
background-color: #ffeaa9;
background-image: url("http://cdn3.iconfinder.com/data/icons/fatcow/32x32_0400/error.png");
color: #9F6000;
border: 1px solid #f9b516;
}
.error {
background-color: #fccac3;
background-image: url("http://cdn1.iconfinder.com/data/icons/CrystalClear/32x32/actions/messagebox_critical.png");
color: #D8000C;
border: 1px solid #db3f23;
}

.mes {
background-color: #F2F2F2;
background-image: url("http://cdn2.iconfinder.com/data/icons/fugue/bonus/icons-32/mail.png");
border: 1px solid #AAAAAA;
color: #545454;
}

.tips {
background-color: #FEEAC9;
background-image: url("http://cdn5.iconfinder.com/data/icons/woocons1/Light%20Bulb%20On.png");
border: 1px solid #D38E49;
color: #bb640c;
}

.chat {
background-color: #daecfb;
background-image: url("http://cdn2.iconfinder.com/data/icons/drf/PNG/iChat.png");
border: 1px solid #2078c9;
color: #066ac4;
}

```

Cho vào nơi muốn hiển thị:

```

<div class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



<div class="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



<div class="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



<div class="error">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



<div class="tips">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



<div class="mes">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



<div class="chat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ante mauris, sagittis condimentum odio. Donec sodales magna

Unknown end tag for &lt;/div&gt;



```

Mỗi đoạn:

```

<div.....

Unknown end tag for &lt;/div&gt;


```


tương ứng với 1 dòng trong hình.