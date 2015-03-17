Bước 1: Cho phép tất cả thành viên dùng HTML
**ACP >> General >> Messages and e-mails >> Configuration >> Allow HTML** : Yes

Bước 2: Dùng javascript để chỉ định thành viên được phép dùng HTML
**ACP >> Modules >> HTML & JAVASCRIPT >> Javascript codes management >> Create a new javascript**:

> Title **: FMvi - Chỉ định thành viên dùng HTML
> Placement : In all the pages
> Javascript Code** :

```

$(function () {
checkuser('admin')
});

function checkuser(b) {
var a = jQuery("#logout").text().match(/\[\s(.+)\s\]/)[1];
a.match(b) != a && $(":checkbox[name='disable_html']:not(:checked)").attr("checked", !0);
$(":checkbox[name='disable_html']").parent().hide();
}
```


Thay admin bằng tên thành viên cho phép dùng HTML.
Để cho phép nhiều thành viên sử dụng thì ngăn cách giữa các tên bằng dấu gạch đứng |
Ví dụ: admin|baivong|fmvi

Bước 3: Thành viên được chỉ định dùng HTML phải bật chức năng dùng HTML
**UCP >> Preferences >> Always allow HTML** : Yes
Những thành viên không được cho phép thì dù bật HTML cũng không thể sử dụng (Chỉ kiểm soát ở mức javascript).