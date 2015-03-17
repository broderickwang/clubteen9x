![http://i15.servimg.com/u/f15/17/70/31/89/ifc1110.png](http://i15.servimg.com/u/f15/17/70/31/89/ifc1110.png)
```


function fmvisuer() {
$("#adduser img").attr("src", "http://i12.servimg.com/u/f12/17/70/81/78/loadin11.gif");
$.get("/memberlist?username=" + $("#sUser").val(), function (e) {
if($(e).find(".member-header.clearfix").length) {
var $zn = $(e).find(".membername:first");
var $znz = $(e).find(".popupmenu-item:first");
$("#text_editor_textarea").val($("#text_editor_textarea").val() + "[url=http://" + location.host + $znz.find("a").attr("href") + "][b][color=" + $zn.find("span").attr("style").slice(6) + "]" + $zn.text() + "[/color][/b][/url]");
} else {
$.fancybox("<p style='font-weight: 700; line-height: 30px; padding: 20px 0px;'>Không tìm thấy thành viên <font color='red'>" + $("#sUser").val() + "

Unknown end tag for &lt;/font&gt;

<br />Vui lòng kiểm tra lại.

Unknown end tag for &lt;/p&gt;

")
}
$("#sUser").val("");
$("#adduser img").attr("src", "http://r19.imgfast.net/users/1911/13/87/62/album/th/andanh10.png");
})
}
$(function () {
$("<div style=\"display:inline!important\" id=\"text_editor_select_controls\"> <div style=\"visibility: hidden; width: auto; left: 361px; top: 658px\" class=\"select\" id=\"ulink\"><p><img src=\"http://illiweb.com/fa/wysiwyg/font.png\" alt=\"Search user\" title=\"Search user\" style=\"vertical-align:middle\"> <input type=\"text\" autocomplete=\"off\" class=\"inputbox\" style=\"width:150px\" id=\"sUser\" title=\"Search user\" onkeypress=\"if (event.keyCode==13){fmvisuer();selectWysiwyg(this,'ulink');return false}\">

Unknown end tag for &lt;/p&gt;

<p style=\"text-align:center\"><input type=\"button\" class=\"button2\" onclick=\"fmvisuer();selectWysiwyg(this,'ulink')\" value=\"Ok\"></p></div> 

Unknown end tag for &lt;/div&gt;

  <button class=\"button2\" onclick=\"selectWysiwyg(this,'ulink')\" onmouseover=\"helpline('hls')\" type=\"button\" id=\"helpline('adduser')\" accesskey=\"p\" title=\"Search user\"><img src=\"http://r19.imgfast.net/users/1911/13/87/62/album/th/andanh10.png\" alt=\"Search user\" title=\"Search user\">

Unknown end tag for &lt;/button&gt;

 <img src=\"http://illiweb.com/fa/wysiwyg/separator.png\" style=\"vertical-align: middle;\">").insertBefore("span#text_edit input.button2[value='Others']");
});
```

Hay thì cho một phiếu like nhé


Được sửa bởi Tiểu Phi Lang ngày Tue Jan 08, 2013 10:29 am; sửa lần 2. (Reason for editing : Quên nguồn =v=)