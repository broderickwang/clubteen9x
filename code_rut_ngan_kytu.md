Hướng dẫn:

color=blue]Chèn thêm vào cuối overall\_footer\_end[/color]
- ACP> Display> Templates> QLTT> Overall\_footer\_end
- copy và dán script sau vô cuối

```


<script>$("a.krokodil").each(function(){
if ($(this).text().length > 65) {$(this).text($(this).text().substr(0, 62));$(this).append('...');
}
});

Unknown end tag for &lt;/script&gt;



```

- thay đổi số 65 với 62 tùy theo độ dài muốn rút ngắn !
- bấm save rùi

Thêm trong recent\_topic,
- ACP> Display> Templates> Portal > Recent\_topics
- tìm chỗ hiểm thị link muốn rút ngắn thêm class này vào:

```


class="krokodil"

```

- bấm save rùi

ví dụ: rút ngắn tiêu đề
thì tìm :

```


{classical_row.recent_topic_row.L_TITLE}

```

thay bằng:

```


<span class="krokodil">
{classical_row.recent_topic_row.L_TITLE}


Unknown end tag for &lt;/span&gt;




```
Demo:
http://chinhphuc.123.st

Nguồn: Chinhphuc.info