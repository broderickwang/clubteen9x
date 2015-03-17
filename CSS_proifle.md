CSS thay đổi trang Lý Lịch cho Invision, PunBB, PhpBB3 & PhpBB2

Bài gửi by Juskteez on Mon Aug 06, 2012 7:30 pm
Đây là TUT mình vừa làm lúc chiều, tại đang bận thiết kế theme wordpress và business card nên ko có nhiều tg cho FM. Dựa vào các thẻ table(phpbb2) và div(Invision) để tùy biến CSS. Mình chỉ làm cơ bản thôi, bạn nào thích thì copy xem kỹ rồi tùy chỉnh sao cho hợp với Skin của các bạn. Có phiên bản mới thì mình sẽ update cho các bạn 67
-Có gì thắc mắc hỏi luôn, khi nào mình onl trả lời Cười nhe răng
Demo Invision: http://diendan.dbzworld.org/u1
Code CSS:

```

/*
.
Plugin Name: Style Wall
Plugin URI: http://localhost/jerm
Author: Juskteez
Description: A CSS3 Trick.
Version: 0.1
Tags: css, css3, css trick, tut, jerm, creative, forumotion, invision.
Install: ACP -> Display -> Pics & Colors -> Colors -> CSS Stylesheet
.
*/

/* Các nút điều khiển trên đỉnh */
.privmsg {
float: right !important;/* Ném nút điều khiển sang phải */
margin-right: 20px;/* Khoảng cách 20px từ bên phải */
margin-top: -33px;/* Khoảng cách từ trên đỉnh 33px */}
.privmsg li {border-radius: 8px 8px 0px 0px;/* Khỏi nói */}
.tabitem a {
padding: 5px;/* Căn lề 5px */
border-radius: 5px 5px 0px 0px;/* Khỏi nói */
}
/* Bảng thông tin VD: bài viết, point, ngày tham gia,...*/
#profile-advanced-details {
height: 100%;/* Chiều cao bảng */
padding: 0px;/* Căn lề, hiện là 0 pixel */
margin-top: 174px;/* Khoảng cách từ trên đỉnh, hiện là 195 pixel */
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 5 pixel */
}
#profile-advanced-details .box-content{
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 10 pixel */
}
#profile-advanced-details .maintitle{
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 10 pixel */
position: absolute;/* Định lại vị trí */
margin-left: 300px;/* Khoảng cách từ bên trái, hiện là 300 pixel */
margin-top: -15px;/* Khoảng cách từ trên đỉnh, hiện là -20 pixel */
}
#profile-advanced-details .separator{
display: none;/* Ẩn hàng ngăn cách giữa các field trong bảng thông tin, ko thích thì xoá đoạn này đi */
}
#profile-advanced-details dl {
margin: 10px 0 0;/* Khoảng cách từ đỉnh 10px */
padding: 0px 0px 0px 0; /* Căn lề đã cho về 0 */
width: 98%; /* Độ rộng mặc định */
}
/* Kết thúc Bảng thông tin VD: bài viết, point, ngày tham gia,...*/

/* Bảng tên, avatar, online/offline, rank*/
.borderwrap:nth-of-type(1) {
padding: 0px;/* Căn lề, hiện 0 căn lề */
float: left;/* Đặt vị trí, hiện tại là bên trái */
margin-left: -833px;/* Khoảng cách từ bên trái, hiện là -793px */
min-width: 827px;/* Chiều ngang, hiện là 790px */
border-radius: 5px;/* Bo tròn cái này khỏi nói */
}
.borderwrap:nth-of-type(1) .maintitle {border-radius: 3px 3px 0 0;/* Khỏi nói */}
.borderwrap:nth-of-type(1) img{float: left;/* Ném avatar sang bên trái */}
.borderwrap:nth-of-type(1) div[class="box-content profile center"] {
text-align: left;/* Đặt vị trí rank sang bên trái */
font-size: 18px;/* Kích cỡ font */
border-radius: 10px;/* Căn lề @@ */
background-color: #ffffff;/* Màu nền của cả bảng, nên để trùng màu với Skin */}
.borderwrap:nth-of-type(1) h3 strong:before{content: "Chào mừng bạn đến Wall của ";/* Câu chào mừng trước tên thành viên */}
.borderwrap:nth-of-type(1) h3 strong:after{content: "!";/* Dấu ! ở cuối tên thành viên */}
.borderwrap:nth-of-type(1) h3 strong{
float: right !important;/* Ném dòng Chào mừng sang bên phải */
font-size: 18px;/* Cỡ chữ */
color: #000000;/* Màu của câu chào mừng và tên thành viên */}
.borderwrap:nth-of-type(1) h3 td em{float: left !important;/* Ném chữ online sang bên trái */}
/* Kết thúc Bảng tên, avatar, online/offline, rank*/

/* Bảng quảng cáo */
.borderwrap:nth-of-type(2) {margin-top: 208px;/* Khoảng cách từ đỉnh 192px */}
/* Kết thúc Bảng quảng cáo */

/* Bảng Bạn/thù */
.borderwrap:nth-of-type(3) {margin-top: -466px;height: 192px;/* Khoảng cách từ đỉnh -702px */padding: 5px;/* Căn lề 3px ở bảng bạn/thù */}
.borderwrap:nth-of-type(3) .box-content {min-height: 160px}
/* Kết thúc Bảng Bạn/thù */

```

Demo phpBB2: http://diendan.onediscussion.net/u1
Code CSS:

```

/*
.
Plugin Name: Style Wall
Plugin URI: http://localhost/jerm
Author: Juskteez
Description: A CSS3 Trick.
Version: 0.1
Tags: css, css3, css trick, tut, jerm, creative, forumotion, phpbb3.
Install: ACP -> Display -> Pics & Colors -> Colors -> CSS Stylesheet
.
*/

/* Các nút điều khiển trên đỉnh */
.gen {color: #ffffff;/* màu chữ(trắng */
margin-right:2px;/* khoảng cách 2px bên phải */}
.gen strong {color: black;/* màu chữ (đen) */}
.gen a.mainmenu {
padding: 5px;/* căn lề 5px */
background-color: #069;/* màu nền */
color: #ffffff;/* màu chữ(trắng) */
border-radius: 5px 5px 0px 0px;/* Khỏi nói */

}
/* Bảng thông tin VD: bài viết, point, ngày tham gia,...*/
td[valign="top"]:nth-of-type(1) table[class="forumline"]:nth-of-type(1) {
padding: 0px;/* Căn lề, hiện là 0 pixel */
margin-top: 195px;/* Khoảng cách từ trên đỉnh, hiện là 195 pixel */
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 5 pixel */
}
td[valign="top"]:nth-of-type(1) table[class="forumline"]:nth-of-type(1) td{
border-radius: 10px;/* Bo tròn góc của bảng, hiện là 10 pixel */
}
td[valign="top"]:nth-of-type(1) table[class="forumline"]:nth-of-type(1) tr:nth-of-type(1){
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 10 pixel */
position: absolute;/* Định lại vị trí */
margin-left: 300px;/* Khoảng cách từ bên trái, hiện là 300 pixel */
margin-top: -20px;/* Khoảng cách từ trên đỉnh, hiện là -20 pixel */
}
td[valign="top"]:nth-of-type(1) table[class="forumline"]:nth-of-type(1) .separator{
display: none;/* Ẩn hàng ngăn cách giữa các field trong bảng thông tin, ko thích thì xoá đoạn này đi */
}
/* Kết thúc Bảng thông tin VD: bài viết, point, ngày tham gia,...*/

/* Bảng tên, avatar, online/offline, rank*/
td[width="300"] table[class="forumline"]:nth-of-type(1) {
padding: 0px;/* Căn lề, hiện 0 căn lề */
float: left;/* Đặt vị trí, hiện tại là bên trái */
margin-left: -793px;/* Khoảng cách từ bên trái, hiện là -793px */
min-width: 790px;/* Chiều ngang, hiện là 790px */
border-radius: 5px;/* Bo tròn cái này khỏi nói */
}
td[width="300"] table[class="forumline"]:nth-of-type(1) td img{float: left;/* Ném avatar sang bên trái */}
td[width="300"] table[class="forumline"]:nth-of-type(1) td {
text-align: left;/* Đặt vị trí rank sang bên trái */
font-size: 18px;/* Kích cỡ font */
border-radius: 10px;/* Căn lề @@ */
background-color: #ffffff;/* Màu nền của cả bảng, nên để trùng màu với Skin */}
td[width="300"] table[class="forumline"]:nth-of-type(1) td strong:before{content: "Chào mừng bạn đến Wall của ";/* Câu chào mừng trước tên thành viên */}
td[width="300"] table[class="forumline"]:nth-of-type(1) td strong:after{content: "!";/* Dấu ! ở cuối tên thành viên */}
td[width="300"] table[class="forumline"]:nth-of-type(1) td strong{
float: right !important;/* Ném dòng Chào mừng sang bên phải */
font-size: 25px;/* Cỡ chữ */
color: #000000;/* Màu của câu chào mừng và tên thành viên */}
td[width="300"] table[class="forumline"]:nth-of-type(1) td em{float: left !important;/* Ném chữ online sang bên trái */}
/* Kết thúc Bảng tên, avatar, online/offline, rank*/

/* Bảng quảng cáo */
td[width="300"] table[class="forumline"]:nth-of-type(2) {margin-top: 192px;/* Khoảng cách từ đỉnh 192px */}
/* Kết thúc Bảng quảng cáo */

/* Bảng Bạn/thù */
td[width="300"] table[class="forumline"]:nth-of-type(3) {margin-top: -452px;height: 192px;/* Khoảng cách từ đỉnh -702px */padding: 5px;/* Căn lề 3px ở bảng bạn/thù */}
/* Kết thúc Bảng Bạn/thù */


```
Update 2 Pb còn
lại

Demo PunBB: http://forum.freeforum.name/u1
Code CSS:

```

/*
.
Plugin Name: Style Wall
Plugin URI: http://localhost/jerm
Author: Juskteez
Description: A CSS3 Trick.
Version: 0.1
Tags: css, css3, css trick, tut, jerm, creative, forumotion, invision.
Install: ACP -> Display -> Pics & Colors -> Colors -> CSS Stylesheet
.
*/

/* Các nút điều khiển trên đỉnh */
#tabs li a {border-radius: 8px 8px 0px 0px;/* Khỏi nói */}

/* Bảng thông tin VD: bài viết, point, ngày tham gia,...*/
#profile-advanced-details {
height: 100%;/* Chiều cao bảng */
padding: 0px;/* Căn lề, hiện là 0 pixel */
margin-top: 223px;/* Khoảng cách từ trên đỉnh, hiện là 195 pixel */
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 5 pixel */
}
#profile-advanced-details .main-content{
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 10 pixel */
}
#profile-advanced-details .main-head{
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 10 pixel */
position: absolute;/* Định lại vị trí */
margin-left: 300px;/* Khoảng cách từ bên trái, hiện là 300 pixel */
margin-top: -15px;/* Khoảng cách từ trên đỉnh, hiện là -20 pixel */
z-index: 999;
}
#profile-advanced-details .separator{
display: none;/* Ẩn hàng ngăn cách giữa các field trong bảng thông tin, ko thích thì xoá đoạn này đi */
}
/* Kết thúc Bảng thông tin VD: bài viết, point, ngày tham gia,...*/

/* Bảng tên, avatar, online/offline, rank*/
#profile-advanced-right .module:nth-of-type(1) {
padding: 0px;/* Căn lề, hiện 0 căn lề */
position: absolute;/* Đặt vị trí, hiện tại là bên trái */
margin-left: 0;/* Khoảng cách từ bên trái, hiện là -793px */
min-width: 718px;/* Chiều ngang, hiện là 790px */
border-radius: 5px;/* Bo tròn cái này khỏi nói */
-ms-transform:translate(-722px,19px); /* IE 9 */
-moz-transform:translate(-722px,19px); /* Firefox */
-webkit-transform:translate(-722px,19px); /* Safari and Chrome */
-o-transform:translate(-722px,19px); /* Opera */
}
#profile-advanced-right .module:nth-of-type(1) .main-head {border-radius: 3px 3px 0 0;/* Khỏi nói */}
#profile-advanced-right .module:nth-of-type(1) img{float: left;/* Ném avatar sang bên trái */}
#profile-advanced-right .module:nth-of-type(1) .main-content {
text-align: left;/* Đặt vị trí rank sang bên trái */
font-size: 18px;/* Kích cỡ font */
border-radius: 0px 0px 5px 5px;/* Khỏi nói */
}
#profile-advanced-right .module:nth-of-type(1) .h3 strong:before{content: "Chào mừng bạn đến Wall của ";/* Câu chào mừng trước tên thành viên */}
#profile-advanced-right .module:nth-of-type(1) .h3 strong:after{content: "!";/* Dấu ! ở cuối tên thành viên */}
#profile-advanced-right .module:nth-of-type(1) .h3 strong{
float: right !important;/* Ném dòng Chào mừng sang bên phải */
font-size: 18px;/* Cỡ chữ */
color: #000000;/* Màu của câu chào mừng và tên thành viên */
}
#profile-advanced-details dl {
margin: 10px 0 0;
padding: 0px 0px 0px 0;
width: 98%;
}
/* Kết thúc Bảng tên, avatar, online/offline, rank*/

/* Bảng quảng cáo */
#profile-advanced-right .module:nth-of-type(2) {
border-radius: 5px;/* Bo góc @@ */
-ms-transform:translate(0px,243px); /* IE 9 *//* Thay đổi vị trí*/
-moz-transform:translate(0px,243px); /* Firefox *//* Thay đổi vị trí*/
-webkit-transform:translate(0px,243px); /* Safari and Chrome *//* Thay đổi vị trí*/
-o-transform:translate(0px,243px); /* Opera *//* Thay đổi vị trí*/
}
#profile-advanced-right .module:nth-of-type(2) .main-content {border-radius: 5px;/* Bo góc @@ */}
/* Kết thúc Bảng quảng cáo */

/* Bảng Bạn/thù */
#profile-advanced-right .module:nth-of-type(3) {
height: 100%;/* Khoảng cách từ đỉnh -702px */
border-radius: 5px;/* Bo góc @@ */
-ms-transform:translate(0px,-237px); /* IE 9 *//* Thay đổi vị trí*/
-moz-transform:translate(0px,-237px); /* Firefox *//* Thay đổi vị trí*/
-webkit-transform:translate(0px,-237px); /* Safari and Chrome *//* Thay đổi vị trí*/
-o-transform:translate(0px,-237px); /* Opera *//* Thay đổi vị trí*/
}
#profile-advanced-right .module:nth-of-type(3) .main-content {min-height: 179px;border-radius: 0px 0px 5px 5px;/* Khỏi nói */}
/* Kết thúc Bảng Bạn/thù */

```

Demo PhpBB3: http://international-lvoe.hotgoo.net/u1
Code CSS:
```

/*
.
Plugin Name: Style Wall
Plugin URI: http://localhost/jerm
Author: Juskteez
Description: A CSS3 Trick.
Version: 0.1
Tags: css, css3, css trick, tut, jerm, creative, forumotion, invision.
Install: ACP -> Display -> Pics & Colors -> Colors -> CSS Stylesheet
.
*/

/* Các nút điều khiển trên đỉnh */
#tabs li a {border-radius: 8px 8px 0px 0px;/* Khỏi nói */}

/* Bảng thông tin VD: bài viết, point, ngày tham gia,...*/
#profile-advanced-details {
height: 100%;/* Chiều cao bảng */
padding: 0px;/* Căn lề, hiện là 0 pixel */
margin-top: 204px;/* Khoảng cách từ trên đỉnh, hiện là 195 pixel */
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 5 pixel */
}
#profile-advanced-details .main-content{
border-radius: 5px;/* Bo tròn góc của bảng, hiện là 10 pixel */
}

#profile-advanced-details .separator{
display: none;/* Ẩn hàng ngăn cách giữa các field trong bảng thông tin, ko thích thì xoá đoạn này đi */
}
/* Kết thúc Bảng thông tin VD: bài viết, point, ngày tham gia,...*/

/* Bảng tên, avatar, online/offline, rank*/
#profile-advanced-right .module:nth-of-type(1) {
padding: 0px;/* Căn lề, hiện 0 căn lề */
position: absolute;/* Đặt vị trí, hiện tại là bên trái */
margin-left: 0;/* Khoảng cách từ bên trái, hiện là -793px */
min-width: 718px;/* Chiều ngang, hiện là 790px */
border-radius: 5px;/* Bo tròn cái này khỏi nói */
-ms-transform:translate(-722px,19px); /* IE 9 */
-moz-transform:translate(-722px,19px); /* Firefox */
-webkit-transform:translate(-722px,19px); /* Safari and Chrome */
-o-transform:translate(-722px,19px); /* Opera */
}
#profile-advanced-right .module:nth-of-type(1) .main-head {border-radius: 3px 3px 0 0;/* Khỏi nói */}
#profile-advanced-right .module:nth-of-type(1) img{float: left;/* Ném avatar sang bên trái */}
#profile-advanced-right .module:nth-of-type(1) .main-content {
text-align: left;/* Đặt vị trí rank sang bên trái */
font-size: 18px;/* Kích cỡ font */
border-radius: 0px 0px 5px 5px;/* Khỏi nói */
}
#profile-advanced-right .module:nth-of-type(1) .h3 strong:before{content: "Chào mừng bạn đến Wall của ";/* Câu chào mừng trước tên thành viên */}
#profile-advanced-right .module:nth-of-type(1) .h3 strong:after{content: "!";/* Dấu ! ở cuối tên thành viên */}
#profile-advanced-right .module:nth-of-type(1) .h3 strong{
float: right !important;/* Ném dòng Chào mừng sang bên phải */
font-size: 18px;/* Cỡ chữ */
color: #000000;/* Màu của câu chào mừng và tên thành viên */
}
#profile-advanced-details dl {
margin: 10px 0 0;
padding: 0px 0px 0px 0;
width: 98%;
}
#cp-main {
float: left;
margin-left: 8px;
width: 98%;
}
/* Kết thúc Bảng tên, avatar, online/offline, rank*/
/* Bảng Bạn/thù */
#profile-advanced-right .module:nth-of-type(2) {
height: 179px;/* Chiều cao */
border-radius: 5px;/* Bo góc @@ */
-ms-transform:translate(0px,-237px); /* IE 9 *//* Thay đổi vị trí*/
-moz-transform:translate(0px,20px); /* Firefox *//* Thay đổi vị trí*/
-webkit-transform:translate(0px,30px); /* Safari and Chrome *//* Thay đổi vị trí*/
-o-transform:translate(0px,-237px); /* Opera *//* Thay đổi vị trí*/
}
#profile-advanced-right .module:nth-of-type(2) .main-content {min-height: 179px;border-radius: 0px 0px 5px 5px;/* Khỏi nói */}
/* Kết thúc Bảng Bạn/thù */
```


p/s Hai code PunBB và phpBB3 có thẻ và class rất giống nhau