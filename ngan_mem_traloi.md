chẳng biết demo thế nào đọc theo tiêu đề thì hiểu cách này làm ẩn nút gửi bài mới hihi
lên mình cho nó vào loại ko cho thành viên gửi bài nhưng vẫn trả lời bằng khung quick reply dc :D

đầu tiên vào
acp>>modules>>Portal & Widgets>>Forum widgets management>>
click vào Create a widget

Widget name : ngăn thành viên gửi bài
Widget source **:**

```

<style>
.pun .paged .posting {
display: none;
}


Unknown end tag for &lt;/style&gt;



```

tạo xong kéo xuống cuối cùng
phần Addition/deletion of personal widgets

chọn Widgets : ngăn thành viên gửi bài
Rights : chọn thành viên với khách :D
add wiget hihi


tiếp theo
vewtopic và topics\_list\_box
cho code này vào cuối

```

<div style="display:none">
<!-- BEGIN giefmod_index1 -->
{giefmod_index1.MODVAR}
<!-- BEGIN saut -->
<div style="height:{SPACE_ROW}px">

Unknown end tag for &lt;/div&gt;


<!-- END saut -->
<!-- END giefmod_index1 --> 

Unknown end tag for &lt;/div&gt;



```
vậy là xong :D