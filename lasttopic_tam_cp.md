Tình hình là skin FMVI3 bị lỗi nên trong thời gian chờ mình tranh thủ làm cái last.
Cảm ơn anh handsomevip007 đã giúp em căn lề 1 số thứ Good good
Demo:http://c7bungno.tk
Demo ảnh :
![http://i76.servimg.com/u/f76/15/64/85/86/demola10.png](http://i76.servimg.com/u/f76/15/64/85/86/demola10.png)


Đây là cái last đầu tay của em , mong các bác ném đá vừa vừa Lo lắng . Trong last có sử dụng simple tooltip của C3Zone ( Cho nó simple )
Ưu điểm: dễ cài đặt , hình thức cũng khá gọn , bố cục cân đối Good good , Nhẹ , nhanh vì chả có gì nhiều lắm ... Dễ dàng tháo bỏ , phù hợp cho các bạn nào đang dùng skin FMVI ver 3 và đợi last mới ...
Mà mình chỉ hướng dẫn thay cho skin FMVI3 thôi nhé , các skin khác xài last của mình làm gì cho nó phí cười lớn
Đối với skin FMVI v3 . Các bạn hãy thêm vào index\_body
dưới ```

{JAVASCRIPT}```
> :

```



<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- END giefmod_index1 -->
<br />
<!-- BEGIN switch_user_logged_in -->
<div style="border: 1px solid #DDD;overflow:none;height:300px;"><iframe src="/h13-page" style="border:0" scrolling="yes" width="99.99%" height="100%" type="text/html">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;

<!-- END switch_user_logged_in -->
```


Trong đó thay số 13 = link HTML full-chat fmvi .
Các bạn nào không dùng Skin FMVI v3 thì thôi , ko cần thêm . Ngoài ra , khi nào fmvi sửa xong thì chỉ cần xóa cái code đấy thôi là chạy được Vui
--- Đoạn Tooltip simple của C3Zone, bác nào đã làm rồi thì thôi ---
Thêm vô CSS :

```



/* C3Tip */
#c3tip {
z-index: 999; /*Vị trí, trạng thái mặc định*/
left: -300px; top:0px;
visibility: hidden;
position: absolute;
padding: 15px;
text-align:left;
-moz-opacity: 0.8; /* Độ trong suốt 80% */
opacity: 0.8;
filter: alpha(opacity=80);
border: #000000 0px solid; /* Màu viền, bo tròn viền */
border-radius: 6px;
-moz-border-radius: 6px;
-webkit-border-radius: 6px;
font-size: 9pt; font-weight:bold; /* Kiểu, cỡ, màu chữ mặc định */
font-family: Arial; color:#fff;
background-color: #000; /* Màu nền mặc định */
width: auto; /* Chiều rộng tối đa */
max-width: 340px;
width:expression(document.body.clientWidth > 340? "340px": "auto");
}
/* End */

```

Tạo 1 javascript mới :
Title**:Tooltip C3
Placement:In all the pages**

```



document.write('<div id="c3tip">

Unknown end tag for &lt;/div&gt;

');
var enablec3tip = false;
var tipob = document.getElementById("c3tip");
function c3tip(ob,cont,color,bgcolor) {
var cd = FindXY(ob);
overFlowX = cd['x'] + tipob.offsetWidth - document.body.offsetWidth;
cd['x'] = overFlowX > 0 ? cd['x'] - overFlowX : cd['x'];
tipob.style.left = (cd['x']+30) + 'px';
tipob.style.top = (cd['y'] + ob.offsetHeight + 10) + 'px';
if (typeof color!= "undefined" && color!= "")
cont=cont.fontcolor(color);
if (typeof bgcolor!= "undefined" && bgcolor!= "")
tipob.style.backgroundColor = bgcolor;
tipob.innerHTML = cont;
enablec3tip = true;
tipob.style.visibility = "visible";
return false;
}
function c3untip() {
enablec3tip = false;
tipob.style.visibility = "hidden";
tipob.style.left = "-1000px";
tipob.style.backgroundColor = '';
tipob.style.width = '';
}
```


--- Kết Thúc Đoạn tooltip C3Zone ---
Tiếp , thay thế lần lượt các mod :
mod\_recent\_topics

```



<style>
.titlerecent::before{content:counter(stt)".";counter-increment:stt;width:20px;display: inline-block;text-align:right}

Unknown end tag for &lt;/style&gt;


<!-- BEGIN classical_row -->
<div class="module main" style="counter-reset:stt;width:650px;">
<div class="main-head"><h3>{L_RECENT_TOPICS}

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content" style="height:250px;max-height:250px;overflow:auto;">
<!-- BEGIN recent_topic_row -->
<a href="{classical_row.recent_topic_row.U_TITLE}" style="width:300px;float:left;overflow: hidden; height: 16px;" class="titlerecent" onmouseover="c3tip(this,'Tiêu đề: {classical_row.recent_topic_row.L_TITLE}<br />Thời gian: {classical_row.recent_topic_row.S_POSTTIME}')" onmouseout="c3untip()">

{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;



<!-- BEGIN switch_poster -->
<a href="{classical_row.recent_topic_row.switch_poster.U_POSTER}" style="width:100px;float:right;overflow: hidden; height: 16px;">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->

<!-- BEGIN switch_poster_guest -->
<span style="float:right">{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}

Unknown end tag for &lt;/span&gt;


<!-- END switch_poster_guest -->

<center>{ON} {classical_row.recent_topic_row.S_POSTTIME}

Unknown end tag for &lt;/center&gt;

<br />

<!--
<a href="{classical_row.recent_topic_row.U_POSTER}">{classical_row.recent_topic_row.S_POSTER}

Unknown end tag for &lt;/a&gt;

 {ON} {classical_row.recent_topic_row.S_POSTTIME}<br /><br />
-->
<!-- END recent_topic_row -->


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->
```


mod\_top\_post\_users\_month

```


<div class="module main" style="float:right;width:280px;padding-left:1px;">
<div class="main-head"><div class="h3">{L_TOP_POST_USERS_MONTH}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content" style="height:100px;max-height:100px;overflow:auto;">
<table summary="{L_TOP_POST_USERS_MONTH}" width="100%" style="table-layout:auto;">
<!-- BEGIN POSTER -->
<tr>
<td class="{POSTER.ROW_CLASS}" width="30%">{POSTER.NAME}

Unknown end tag for &lt;/td&gt;


<td class="{POSTER.ROW_CLASS}" nowrap="nowrap" title="{POSTER.NB_POSTS}">{POSTER.BARRE}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/table&gt;


<br class="clear" />


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




mod_top_post_users_week

Code: Chọn nội dung CODE
<div class="module main" style="width:280px;float:right;margin-top:-164px!important;">
<div class="main-head"><div class="h3">{L_TOP_POST_USERS_WEEK}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content" style="height:100px;max-height:100px;overflow:auto;">
<table summary="{L_TOP_POST_USERS_WEEK}" width="100%" style="table-layout:auto;">
<!-- BEGIN POSTER -->
<tr>
<td class="{POSTER.ROW_CLASS}" width="30%">{POSTER.NAME}

Unknown end tag for &lt;/td&gt;


<td class="{POSTER.ROW_CLASS}" nowrap="nowrap">{POSTER.BARRE}

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END POSTER -->


Unknown end tag for &lt;/table&gt;


<br class="clear" />


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


```


Và sắp xếp Forum widgets management theo thứ tự :

![http://i76.servimg.com/u/f76/15/64/85/86/widget10.png](http://i76.servimg.com/u/f76/15/64/85/86/widget10.png)

Và bước cuối cùng ,bước quan trọng nhất, không làm bước này coi như vứt đi :

Bấm dấu ![http://illiweb.com/fa/admin/icones/ajouter.png](http://illiweb.com/fa/admin/icones/ajouter.png) vào những mod vừa thay


Lưu ý : Đối với skin FMVI3 anh em nào bị lỗi chatbox thì tìm trong index\_body:

```


{CHATBOX_TOP}

```

và xóa nó đi. Vị trí mặc định của nó là ở trên

```


{BOARD_INDEX}
```

Khi nào fmvi sửa được last thì thêm lại code ```

{CHATBOX_TOP} ```
vào trên ```

{BOARD_INDEX}```

nhé !