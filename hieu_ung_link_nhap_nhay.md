Muốn làm hiệu ứng link nhấp nháy ở last như Chinhphuc thì các bạn chèn code dưới vào CSS:

Demo: http://tbd2605.5forum.net/

Nhớ thay link topic của bạn vào đoạn /t5-topic

```

a[href*="/t5-topic"],.showcolor{color:#F00;animation:svcolor 1s infinite;-moz-animation:svcolor 1s infinite;-webkit-animation:svcolor 1s infinite;}
@keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-moz-keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-webkit-keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-webkit-keyframes blink{0%{opacity:1}100%{opacity:.1}}@-moz-keyframes blink{0%{opacity:1}100%{opacity:.1}}@-ms-keyframes blink{0%{opacity:1}100%{opacity:.1}}@keyframes blink{0%{opacity:1}100%{opacity:.1}}
```



Enjoy! :x