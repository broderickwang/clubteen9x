Chức năng: Hướng dẫn này sẽ giúp forum bạn có bộ 34 hình nền giáng sinh cực đẹp, hiển thị ngẫu nhiên mỗi khi tải trang. Ảnh nền kích thước 1920 x 1200px, được up lên host go.vn với ưu thế về tốc độ và sự ổn định.

Demo: ```
http://www.FMvi.org<code>
Link download:<code> http://mediafire.com/?ra3w8r92ar8otaa
```
Hướng dẫn: ACP - Modules - HTML & JAVASCRIPT - Javascript codes management:

> Title **: Xmas theme
> Placement : In all the pages
> Javascript Code** :
> punBB: Chọn một trong 6 cách sau

> Cách 1
> Cách 2
> Cách 3
> Cách 4
> Cách 5
> Cách 6
> Truy cập lần đầu
> > Ngẫu nhiên
> > Ngẫu nhiên
> > Ngẫu nhiên
> > Không áp dụng
> > Ngẫu nhiên
> > Không áp dụng

> Truy cập lần sau
> > Ngẫu nhiên
> > Không thay đổi
> > Ngẫu nhiên
> > Ngẫu nhiên (nếu bật)
> > Không thay đổi	Không thay đổi(nếu bật)

> Bât/tắt giao diện
> > Không
> > Không	Có
> > Có	Có	Có


> Cách 1: Luôn áp dụng giao diện Xmas khi truy cập. Hình nền không được lưu lại cho lần truy cập sau.

```


$(function() {
var b = Math.floor(34 * Math.random()), a = $("div.pun"), c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
a.css("opacity", "0.9");
a.hover(function() {
$(this).css("opacity", "0.9")
}, function() {
$(this).css("opacity", "0.5")
})
});
```

> Cách 2: Luôn áp dụng giao diện Xmas khi truy cập. Hình nền được lưu lại cho lần truy cập sau.

```


$(function () {
var a = $("div.pun");
function k() {
a.css("opacity", "0.9");
a.hover(function () {
$(this).css("opacity", "0.9")
}, function () {
$(this).css("opacity", "0.5")
})
}
if (my_getcookie("giaodienxmas") == null) {
var b = Math.floor(34 * Math.random()),
c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
k();
my_setcookie("giaodienxmas", c[b], !0)
} else {
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + my_getcookie("giaodienxmas") + ".jpg) repeat fixed 0 0 transparent");
k()
};
});```


> Cách 3: Giao diện Xmas được áp dụng tự động khi truy cập, hình ảnh nền hiển thị ngẫu nhiên mỗi lần truy cập. Người dùng có thể bật/tắt giao diện Xmas bằng cách click vào Icon ở góc dưới, bên trái.

```


$(function () {
var a = $("div.pun");
function h() {
var b = Math.floor(34 * Math.random()),
c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
a.css("opacity", "0.95");
a.hover(function () {
a.css("opacity", "0.95")
}, function () {
a.css("opacity", "0.55")
});
$("#xMasmenu img[alt='on']").show();
$("#xMasmenu img[alt='off']").hide();
}
a.before('<div id="xMasmenu" style="background: none repeat scroll 0pt 0pt padding-box rgba(0, 0, 0, 0.65); border-radius: 4px 4px 4px 4px; color: rgb(255, 255, 255); left: 10px; bottom: 10px; padding: 5px; position: fixed; z-index: 10"><span style="font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10">X

Unknown end tag for &lt;/span&gt;

<div align="center"><img alt="on" style="cursor:pointer;width: 80px;display:none" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s10.png"/><img alt="off" style="cursor:pointer;width: 80px" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s11.png"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
if (null == my_getcookie("giaodienxmas") || "Xmastheme" == my_getcookie("giaodienxmas")) {
h()
};
"remove" == my_getcookie("xMasmenu") && $("#xMasmenu").remove();
$("#xMasmenu span").click(function () {
$("#xMasmenu").remove();
my_setcookie("xMasmenu", "remove", !0)
});
$("#xMasmenu img").hover(function () {
$("#xMasmenu img").toggle()
}, function () {
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='on']").click(function () {
h();
my_setcookie("giaodienxmas", "Xmastheme", !0);
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='off']").click(function () {
my_setcookie("giaodienxmas", "none", !0);
a.css("opacity", "1");
a.hover(function () {
a.css("opacity", "1")
}, function () {
a.css("opacity", "1")
});
$("body").removeAttr("style");
$("#xMasmenu img").toggle()
})
});```


> Cách 4: Giao diện Xmas không tự áp dụng khi truy cập, người dùng nếu muốn sử dụng phải bật giao diện Xmas bằng cách click vào Icon ở góc dưới, bên trái. Hình ảnh nền hiển thị ngẫu nhiên mỗi lần truy cập. Người dùng có thể tắt/bật giao diện Xmass bằng Icon góc dưới bên trái.

```


$(function () {
var a = $("div.pun");
function h() {
var b = Math.floor(34 * Math.random()),
c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
a.css("opacity", "0.95");
a.hover(function () {
a.css("opacity", "0.95")
}, function () {
a.css("opacity", "0.55")
});
$("#xMasmenu img[alt='on']").show();
$("#xMasmenu img[alt='off']").hide();
}
a.before('<div id="xMasmenu" style="background: none repeat scroll 0pt 0pt padding-box rgba(0, 0, 0, 0.65); border-radius: 4px 4px 4px 4px; color: rgb(255, 255, 255); left: 10px; bottom: 10px; padding: 5px; position: fixed; z-index: 10"><span style="font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10">X

Unknown end tag for &lt;/span&gt;

<div align="center"><img alt="on" style="cursor:pointer;width: 80px;display:none" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s10.png"/><img alt="off" style="cursor:pointer;width: 80px" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s11.png"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
"Xmastheme" == my_getcookie("giaodienxmas") && h();
"remove" == my_getcookie("xMasmenu") && $("#xMasmenu").remove();
$("#xMasmenu span").click(function () {
$("#xMasmenu").remove();
my_setcookie("xMasmenu", "remove", !0)
});
$("#xMasmenu img").hover(function () {
$("#xMasmenu img").toggle()
}, function () {
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='on']").click(function () {
h();
my_setcookie("giaodienxmas", "Xmastheme", !0);
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='off']").click(function () {
my_setcookie("giaodienxmas", "none", !0);
a.css("opacity", "1");
a.hover(function () {
a.css("opacity", "1")
}, function () {
a.css("opacity", "1")
});
$("body").removeAttr("style");
$("#xMasmenu img").toggle()
})
});

```
> Cách 5: Giao diện Xmas được áp dụng tự động khi truy cập, hình ảnh nền hiển thị ngẫu nhiên và được lưu lại cho lần truy cập sau. Người dùng có thể tắt giao diện Xmas bằng cách click vào Icon Off ở góc dưới, bên trái và có thể bật lại giao diện Xmas bằng Icon on. Nếu người dùng muốn thay đổi ảnh nền phải click vào Icon Off để tắt giao diện Xmass rồi bật lại.

```


$(function () {
var a = $("div.pun");
a.before('<div id="xMasmenu" style="background: none repeat scroll 0pt 0pt padding-box rgba(0, 0, 0, 0.65); border-radius: 4px 4px 4px 4px; color: rgb(255, 255, 255); left: 10px; bottom: 10px; padding: 5px; position: fixed; z-index: 10"><span style="font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10">X

Unknown end tag for &lt;/span&gt;

<div align="center"><img alt="on" style="cursor:pointer;width: 80px;display:none" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s10.png"/><img alt="off" style="cursor:pointer;width: 80px" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s11.png"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
function k() {
a.css("opacity", "0.95");
a.hover(function () {
a.css("opacity", "0.95")
}, function () {
a.css("opacity", "0.55")
});
$("#xMasmenu img[alt='on']").show();
$("#xMasmenu img[alt='off']").hide();
}
function h() {
var b = Math.floor(34 * Math.random()),
c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
my_setcookie("giaodienxmas", c[b], !0);
k();
}
if (null == my_getcookie("giaodienxmas")) {
var b = Math.floor(34 * Math.random()),
c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
my_setcookie("giaodienxmas", c[b], !0);
k()
} else {
10 < my_getcookie("giaodienxmas").length && ($("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + my_getcookie("giaodienxmas") + ".jpg) repeat fixed 0 0 transparent"), k())
};
"remove" == my_getcookie("xMasmenu") && $("#xMasmenu").remove();
$("#xMasmenu span").click(function () {
$("#xMasmenu").remove();
my_setcookie("xMasmenu", "remove", !0)
});
$("#xMasmenu img").hover(function () {
$("#xMasmenu img").toggle()
}, function () {
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='on']").click(function () {
h();
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='off']").click(function () {
my_setcookie("giaodienxmas", "none", !0);
a.css("opacity", "1");
a.hover(function () {
a.css("opacity", "1")
}, function () {
a.css("opacity", "1")
});
$("body").removeAttr("style");
$("#xMasmenu img").toggle()
});
});
```

> Cách 6: Giao diện Xmas không tự áp dụng khi truy cập, người dùng nếu muốn sử dụng phải bật giao diện Xmas bằng cách click vào Icon On ở góc dưới, bên trái. Hình ảnh nền hiển thị ngẫu nhiên và được lưu lại cho lần truy cập sau. Nếu người dùng muốn thay đổi ảnh nền phải click vào Icon Off để tắt giao diện Xmass rồi bật lại.

```


$(function () {
var a = $("div.pun");
function k() {
a.css("opacity", "0.95");
a.hover(function () {
a.css("opacity", "0.95")
}, function () {
a.css("opacity", "0.55")
})
}
a.before('<div id="xMasmenu" style="background: none repeat scroll 0pt 0pt padding-box rgba(0, 0, 0, 0.65); border-radius: 4px 4px 4px 4px; color: rgb(255, 255, 255); left: 10px; bottom: 10px; padding: 5px; position: fixed; z-index: 10"><span style="font-family:Tahoma;font-size:18px;color:red;position:absolute;cursor:pointer;z-index:10">X

Unknown end tag for &lt;/span&gt;

<div align="center"><img alt="on" style="cursor:pointer;width: 80px;display:none" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s10.png"/><img alt="off" style="cursor:pointer;width: 80px" border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/xmas_s11.png"/>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

');
null != my_getcookie("giaodienxmas") && "none" != my_getcookie("giaodienxmas") && ($("#xMasmenu img[alt='off']").hide(), $("#xMasmenu img[alt='on']").show(), k(), $("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + my_getcookie("giaodienxmas") + ".jpg) repeat fixed 0 0 transparent"));
"remove" == my_getcookie("xMasmenu") && $("#xMasmenu").remove();
$("#xMasmenu span").click(function () {
$("#xMasmenu").remove();
my_setcookie("xMasmenu", "remove", !0)
});
$("#xMasmenu img").hover(function () {
$("#xMasmenu img").toggle()
}, function () {
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='on']").click(function () {
var b = Math.floor(34 * Math.random()),
c = "C8E7BB58251C9611B92EC82237F0465E,0BD5CFEAFCE4826C46DB6A184E6313A7,AB5E9200FB695E7CB1E066BA332C2EBA,178483B7EF57DE3BFF49ABE7264A21A7,31449EFD84C524684A09B696755C8003,62CE597DD9DC347360D0E8DCB405F830,610DB6ED81E6A0E91383EBB5BF50DDDF,8A9CB6EB592304120C5EA7B9E0D8D46E,A9326E0E8C40A891EC477EE4A13B92EB,DBD84021832D560B363E7E6421071D3B,6550312CCD4D19042A3AECC3CAB2DA37,0BBDBEDF074E3C18D630CA6C847E5C5A,0F96B26CD58E0D4AB1518A1B1EBABEB3,B8848D563BE90569BA92F68F3C54EFBF,E04141CB62E3027DAEA62200982E5247,91713A97B6919C507FDEC637B31CF089,DBC3005AF345466087C1D630852CA811,065B403B077760992469A2AC4F2A5BA3,CD613403531C8CB78D9DBE00827AC91E,025F5F8569C95D17D7FA9EDE9C9CD4F1,EA38C20949A18D369945E1E0B9917FD0,53C512A1CFCCD8F91D83BCEB07BA363E,EEF0540EBD0A32E308A638051822F2D7,E843A47F7CD2A09861D3748A7EFA0F7E,56C31CC362D9B02AE9FFC50DA7C6D87E,57C320B04D4A14C23FF3BCD20F63DFB9,9351B61DC5B952582E3413ED06BF0ED0,6E568BDD241BBC6EDEECD4B5E91FCB09,088590B46B5F5E6EB42043C5F6CDFFAD,920FC872E2C3EC39C6DD175DCFBB9774,8C99B1651FB6F6A7B47AE4B540E64B94,6793C4CCCBADE34FD7B5A091536998E2,83A52C4A8EB0A629EC4F4CAEAA25B5F8,BF34719D68FCFD3C4C48CFE606FDE76B".split(",");
$("body").css("background", "url(http://farm04.go.vn/photo/data/20111207/10798851/" + c[b] + ".jpg) repeat fixed 0 0 transparent");
my_setcookie("giaodienxmas", c[b], !0);
k();
$("#xMasmenu img").toggle()
});
$("#xMasmenu img[alt='off']").click(function () {
my_setcookie("giaodienxmas", "none", !0);
a.css("opacity", "1");
a.hover(function () {
a.css("opacity", "1")
}, function () {
a.css("opacity", "1")
});
$("body").removeAttr("style");
$("#xMasmenu img").toggle()
})
});
```

> Với các phiên bản khác punBB các bạn tìm trong code trên div.pun và thay nó bằng đoạn mã tương ứng:
> phpBB2: table.bodylinewidth
> phpBB3: div#wrap
> Invision: div#ipbwrapper



Ghi chú: Trong code trên, có đoạn

```


a.css("opacity", "0.9");
a.hover(function() {
$(this).css("opacity", "0.9")
}, function() {
$(this).css("opacity", "0.5")
})```


Đây là phần làm trong suốt nội dung của forum, nếu không dùng, bạn có thể xóa nó đi. Bạn có thể thay đổi các thông số về độ trong suốt theo ý mình.
Phần code còn lại là hình nền, nếu muốn bạn có thể thay thế các link ảnh khác. Link ảnh cuối cùng thứ 34 mang tính Echi nên mình khuyến cáo các bạn thay bằng ảnh khác nếu thấy không hợp nội dung forum.

Lưu ý: Để sử dụng Javascript codes management bạn phải cập nhật Templates: http://help.forumotion.com/t92693-new-update-javascript-code-management

[+] Nếu bạn muốn sao chép hướng dẫn này đi nơi khác vui lòng không thay đổi bất kỳ thành phần nào trong code và phải ghi bản quyền thuộc www.FMvi.org