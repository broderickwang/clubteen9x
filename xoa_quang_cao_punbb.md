```


$(function () {
if (my_getcookie('deladsFMvi') == 'yes') {
$("#main-content div:first, #add-google-bottom").remove();
};
$("#zzadclose").click(function () {
$("#main-content div:first, #add-google-bottom").remove();
my_setcookie('deladsFMvi', 'yes', true);
});
});
```
```
#zzadcontent {
display: none;
}
#zzadfooter {
display: none;

#pun-about{display: none;}

.module-advert{display:none;}a{text-decoration: none;}

}```
Tác dụng của nó là khi click vào nút đóng quảng cáo ở footer thì nó sẽ xóa cả 2 quảng cáo và lưu lại trong cookie, vì thế khi bạn chuyển sang trang khác cũng sẽ ko bị quảng cáo nữa.
Về việc có bị xóa 4r ko thì mình ko chắc, chỉ làm 1 cái cho punBB.

Cách tối ưu, sao chép bài này và hướng dẫn cho mem:
http://www.fmvi.vn/t568-dung-add-on-adblock-e-truy-cap-dien-an-nhanh-hon?showpost=4642