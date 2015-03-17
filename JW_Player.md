Trang chủ và demo: http://www.longtailvideo.com/players/
Phiên bản: 1.0
Tính năng:
- Hỗ trợ skin
- Tuỳ chỉnh width và height
- Tuỳ chỉnh fullscreen

Cài đặt:
Vào Modules >> Javascript codes management >> Tạo mới >> Chọn In the topics

```

var skin = 'http://content.longtailvideo.com/skins/glow/glow.zip';
width = '480';
height = '360';
allowfullscreen = 'true'; //true or false
$.getScript('http://jw-player-for-forumotion.googlecode.com/files/jwplayer1.js');
$.getScript('http://player.longtailvideo.com/jwplayer.js');
```


Hướng dẫn chỉnh sửa:
- skin: vào đây , chọn skin bạn thích, lấy link download rồi thay giá trị của skin bằng link download đó
- width: độ rộng của player (tính theo px)
- height: độ cao của player (tính theo px)
- allowfullscreen: chế độ xem toàn màn hình (true: có, false:không)

Tính năng của phiên bản kế tiếp:
- Hỗ trợ plugin
- Tuỳ chỉnh auto start
- Tạo playlist

Lưu ý: Chỉ hỗ trợ duy nhất youtube, nên đừng hỏi mình làm sao làm cho dailymotion.