```
<script type="text/javascript">
$(function () {
if ($("#i_icon_mini_new_message").length) {
var pm = $("#i_icon_mini_new_message").attr("alt").match(/\d+/);
if (confirm("Bạn có " + pm + " tin nhắn mới.Bạn có muốn đến hộp thư.")) location.href = '/privmsg?folder=inbox'
};
});


Unknown end tag for &lt;/script&gt;

```