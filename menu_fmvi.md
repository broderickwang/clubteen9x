code này ở bên fmvi nhưng chưa ai share cười nhăn răng cả cười nhăn răng
hiệu ứng này sẽ nhấc thanh nav ra khỏi forum và cho nó lên trên cùng của forum , khi bạn đi xuống nó cũng đi theo bạn cười nhăn răng rất tiên lợi
demo: http://chienthan35.forumvi.com/

![http://i43.servimg.com/u/f43/15/93/33/76/45645610.jpg](http://i43.servimg.com/u/f43/15/93/33/76/45645610.jpg)
CÁch làm :

ACP - Display - Pictures and Colors - Colors - CSS Stylesheet: Thêm vào CSS code sau (Nên xóa đoạn CSS liên quan đến navlinks cũ)


```

#pun-title{padding: 15px;color:#FFF!important;font-family:"Comic Sans Ms";font-size:33px;font-style:normal;font-variant:normal;font-weight:700;text-shadow:3px 3px 3px #000;text-transform:uppercase;z-index:1}
#pun-head #pun-navlinks{background-color:rgba(0, 68, 99, 0.73);background-origin:padding-box;background-position:0 0;background-repeat:repeat-x;border:1px solid #1E2831;box-shadow:0 0 0 1px rgba(255,255,255,0.2) inset;height:28px}
#pun-navlinks ul{list-style:none outside none;text-align:center}
#pun-navlinks li{display:inline;font-size:15px;line-height:30px}
#pun-navlinks a:active,#pun-navlinks a:focus,#pun-navlinks a:hover{background-color:rgba(0,0,0,0.2);background-image:url(http://i40.servimg.com/u/f40/17/10/12/79/76120810.gif);color:#FFF;text-decoration:none;text-shadow:0 0 4px rgba(255,255,255,0.7);padding:12px 14px 10px}
#pun-navlinks li a{color:#FFF;font-family:tahoma,helvetica,arial,sans-serif;margin-left:-8px;margin-right:-8px;text-shadow:1px 1px 1px #000;padding:12px 14px 10px}

```

ACP - Modules - HTML & JAVASCRIPT - Javascript codes management
Click vào nút dấu + Create a new javascript, để tạo file javascript.
Title **: Slide nav
Placement : In all the pages
Javascript Code** :


```

$(function () {
$("#pun-navlinks  a.mainmenu[href='/search']").removeAttr("onclick").click(function () {
$(this).parent().css("position", "relative");
$("#search_menu").css({
"top": "30px",
"left": "-7px"
}).slideToggle();
return false;
});
});

```

Lưu ý: Để sử dụng Javascript codes management bạn phải cập nhật Templates (nếu chưa): http://help.forumotion.com/t92693-new-update-javascript-code-management

[+] Nếu không muốn thanh navlinks trượt, bạn xóa 2 dòng sau trong code trên:


```

body{padding-top:43px}
#pun-head{left:0;position:fixed;top:0;width:100%;z-index:999}



```