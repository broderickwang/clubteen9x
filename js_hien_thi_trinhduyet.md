Đầu tiên bạn lập 1 new javascript
Title: tự sử
Placement: in all the pages
Javascript code:

```



function browserName(){
var Browser = navigator.userAgent;
if (Browser.indexOf( 'MSIE' ) >= 0){
Browser = 'MSIE' ;
}
else if (Browser.indexOf( 'Firefox' ) >= 0){
Browser = 'Firefox' ;
}
else if (Browser.indexOf( 'Chrome' ) >= 0){
Browser = 'Chrome' ;
}
else if (Browser.indexOf( 'Safari' ) >= 0){
Browser = 'Safari' ;
}
else if (Browser.indexOf( 'Opera' ) >= 0){
Browser = 'Opera' ;
}
else {
Browser = 'UNKNOWN' ;
}
return Browser;
}

```

Tiếp theo bạn muốn đặt ở đâu thì đặt với code hiển thị sau(Nơi hiển thị được html)

```


document.write(browserName());
```

Xong.
Nguồn: Pokemoner.forumvi.com by Admin