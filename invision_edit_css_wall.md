Code:

> CSS:

```

#field_id-20 .field_uneditable{opacity:0}
```

> Javascript:

```

$(document).ready(function () {
jQuery("#field_id-20 .field_uneditable br").remove();
var css = $("#field_id-20 .field_uneditable").html();
setInterval("$(function () {$('#field_id-20 img.ajax-profil_valid').attr('onclick','changecssClick();')});", 1000);
$('head').append('<style>' + css + '

Unknown end tag for &lt;/style&gt;

')
});

function changecss() {
var bcss = $('#profile_field_2_-20 .field_uneditable').val();
$('head style').html(bcss)
};

function changecssClick() {
var bcss = $('#profile_field_2_-20').val();
$('head style').html(bcss)
};

```
Thế thôi... Smile

P/s: Code trên chỉ cho phép thành viên chỉnh sửa profile của mình bằng cách nhập CSS vào mục comment, KHÔNG bao gồm Banner và Status Smile