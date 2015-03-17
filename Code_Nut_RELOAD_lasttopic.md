vì chỉ có 1 số last tương thích thui


Đầu tiên bạn nhét code này vào recent topic
```

<script>jQuery("#ca3chatbox").click(function(){jQuery("#ca3rules").toggle("slow");});function reloadlast() {jQuery(document).ready(function(){jQuery("#loadoday").empty();jQuery('<span class="abcd" />').load('/forum #loadoday', function() {jQuery(this).appendTo('#loadoday');});}

Unknown end tag for &lt;/script&gt;

<script>
function reloadlast() {
jQuery(document).ready(function(){
jQuery("#loadoday").empty();
jQuery('<span class="abcd" />').load('/forum #loadoday', function() {
jQuery(this).appendTo('#loadoday');
jQuery(".c3zonee:contains('»')").remove();});});}


Unknown end tag for &lt;/script&gt;


```
tìm trong recent
```

<!-- BEGIN recent_topic_row --><table class="c3zonee" width="100%" border="0" cellspacing="0" cellpadding="0" style="height:20px">
```
hoặc code tựa tựa như nó
Thêm vào trước nó
```

<div class="test" id="loadoday">
```
tìm
```



Unknown end tag for &lt;/table&gt;

<!-- END classical_row -->
```
thêm vào sau nó
```



Unknown end tag for &lt;/div&gt;


```
việc cuối cùng chèn
```

<input type="submit" onmouseover="showtip('Click Để Reload Topic.')" onmouseout="hidetip()" value="Reload" onclick="reloadlast();" />
```
vào chỗ nào bạn cần hiện nút reload
Nguồn:MTMY by Notme