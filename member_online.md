Cho punBB
Hì thấy các trang mạng lớn , yahoo ... vừa đăng nhập vào cái thấy đã có tên ngay trong danh sách online mà không cần chuyển trang thấy hay, lấy ý tưởng
Xin giới thiệu một tut tự động cập nhật thành viên online và thoát ra thường xuyên khoảng từ 1-3 giây mà không phải F5 lại trang,
Hướng dẫn 1 bước rất đơn giản
Đây là tut khó diễn tả bằng demo ảnh nên dùng demo online các bạn có thể thử nghiệm bằng 2 trình duyệt
Demo online: http://codefm1.forumvi.com/

Cho code sau vào Javascript:
Tittle : t-online
Place : In all the pages
Code :

```

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(2(){3.f()});(2(){j 3={h:2(){$.i(\'/k\',2(9){a(6.5(\'l\')||6.5(\'4\')){a(c.g=="e"){a(6.5(\'4\').8.1.1.7!=$(9).d(\'#4\')[0].8.1.1.7)6.5(\'4\').8.1.1.7=$(9).d(\'#4\')[0].8.1.1.7}}})},f:2(){m(2(){3.h()},n)}};b.3=3})();(2(){b.c={g:\'e\'}})();',24,24,'|nextSibling|function|thailogin|onlinelist|getElementById|document|innerHTML|firstChild|tlogin|if|window|thailogin_config|find|hotrofm|init|codeprotect|check|get|var|forum|i_whosonline|setInterval|1000'.split('|'),0,{}))
```

**Chú ý; cái này mình viết ở hotrofm nên khi share các bạn nhớ gốc nhé**


```
    function thailogin() {
$.get('/', function (tlogin) {
if (document.getElementById('i_whosonline') || document.getElementById('onlinelist') && $('#pun-info').html() != $(tlogin).find('#pun-info')) {
$('#pun-info').html($(tlogin).find('#pun-info'))
}
})
};
setInterval(thailogin, 5000);```

```

function thailogin() {
$.get("/", function(a) {
$("#pun-info").html($(a).find("#pun-info"));
setTimeout("thailogin()", 3E3)
})
}
thailogin();```


Cho punBB
Hì thấy các trang mạng lớn , yahoo ... vừa đăng nhập vào cái thấy đã có tên ngay trong danh sách online mà không cần chuyển trang thấy hay, lấy ý tưởng
Xin giới thiệu một tut tự động cập nhật thành viên online và thoát ra thường xuyên khoảng từ 1-3 giây mà không phải F5 lại trang,
Hướng dẫn 1 bước rất đơn giản
Đây là tut khó diễn tả bằng demo ảnh nên dùng demo online các bạn có thể thử nghiệm bằng 2 trình duyệt
Demo online: http://codefm1.forumvi.com/

Cho code sau vào Javascript:
Tittle : t-online
Place : In all the pages
Code :

Code: Chọn nội dung CODE
> eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c](c.md)|c.toString(a)}k=[function(e){return d[e](e.md)}];e=function(){return'\\w+'};c=1};while(c--){if(k[c](c.md)){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c](c.md))}}return p}('5 7(){$.9(\'/\',5(2){a(4.3(\'e\')||4.3(\'c\')&&$(\'#1-0\').6()!=$(2).8(\'#1-0\')){$(\'#1-0\').6($(2).8(\'#1-0\'))}})};b(7,d);',15,15,'info|pun|tlogin|getElementById|document|function|html|thailogin|find|get|if|setInterval|onlinelist|5000|i\_whosonline'.split('|'),0,{}))|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|



Update cho Invision

Code: Chọn nội dung CODE
> eval(function(p,a,c,k,e,d){while(c--){if(k[c](c.md)){p=p.replace(new RegExp('\\b'+c+'\\b','g'),k[c](c.md))}}return p}('$(2(){3.15()});(2(){19 3={17:2(){$.18(\'/20\',2(9){10(5.6(\'4\')||5.6(\'21\')){10(11.12=="16"){10(5.6(\'4\').1.1.8.7!=$(9).14(\'#4\')[0](0.md).1.1.8.7)5.6(\'4\').1.1.8.7=$(9).14(\'#4\')[0](0.md).1.1.8.7}}})},15:2(){23(2(){3.17()},22)}};13.3=3})();(2(){13.11={12:\'16\'}})();',10,24,'|parentNode|function|thailogin|i\_whosonline|document|getElementById|innerHTML|nextSibling|tlogin|if|thailogin\_config|codeprotect|window|find|init|hotrofm|check|get|var|forum|onlinelist|5000|setInterval'.split('|')))



