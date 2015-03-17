Demo: Nhìn luôn topic này này

Tiếp tục ẩn, reply để coi nào
Tạo 1 js, đặt In the topics :

```


$(function () {
$(".popmenubutton-new-out.popmenubutton a").each(function () {
if($(this).find("img").length == 0) {
$(this).prepend('<img title="Offline" alt="Offline" src="http://i40.servimg.com/u/f40/17/70/31/89/untit210.png" />')
};
});
$(".postdetails>dt>a>img,.postdetails dd:last").mouseover(function () {
$(this).parents('.postprofile-details').children('dd:last').show()
});
$(".postdetails>dt>a>img,.postdetails dd:last").mouseout(function () {
$(this).parents('.postprofile-details').children('dd:last').hide()
});
});




```