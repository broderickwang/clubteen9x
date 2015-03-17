Trang chủ và demo: http://www.longtailvideo.com/players/
Phiên bản: Final - Hot fix
Tính năng:
- Hỗ trợ skin
- Hỗ trợ plugin
- Tuỳ chỉnh độ dài và rộng
- Tuỳ chỉnh chế độ xem toàn màn hình
- Tuỳ chỉnh tự động play
- Tuỳ chỉnh stretching
- Tuỳ chỉnh volume
- Tuỳ chỉnh nơi hoạt động
- Tuỳ chỉnh center hoặc không

Cài đặt:
Vào Modules >> Javascript codes management >> Tạo mới >> Chọn In the topics

```

var skin = 'http://content.longtailvideo.com/skins/glow/glow.zip';
plugin = 'fbit-1'; // Use coma to separate each plugin
width = '480';
height = '360';
allowfullscreen = 'true'; // true or false
autostart = 'false'; // true or false
stretching = 'uniform'; // none or exactfit or unifrom or fill
volume = '90'; // from 0 to 100
centered = 'true'; // true of false
where = 'body'; // body or .post
$.getScript('http://jw-player-for-forumotion.googlecode.com/files/jwplayer-final-hotfix.js');
$.getScript('http://player.longtailvideo.com/jwplayer.js');
```


Hướng dẫn chỉnh sửa:
- skin: vào đây , chọn skin bạn thích, lấy link download rồi thay giá trị của skin bằng link download đó
- plugin: vào đây, chọn plugin mà bạn thích, chọn setup instructions, trong đó có dòng configuration option, lấy cái code ở đằng sau plugin =, ngăn cách mỗi plugin bằng dấu phẩy. Ví dụ mình muốn plugin facebook và twitter, thì mình sẽ có được code fbit-1,tweetit-1
- width: độ rộng của player (tính theo px)
- height: độ cao của player (tính theo px)
- allowfullscreen: chế độ xem toàn màn hình (true: có, false:không)
- autostart: tự độ play video (true: có, false:không)
- stretching: tuỳ chỉnh video phù hợp với độ dài rộng của player (none, exactfit, uniform, fill)
- volume: tuỳ chỉnh volume (từ 0 đến 100)
- centered: căn giữa player (true: có, false: không)
- where: nơi hoạt động của player (body: toàn bộ [phải ở in all the pages](script.md), .post: ở topic [phải ở in the topics](script.md))

Lưu ý: Chỉ hỗ trợ duy nhất youtube, nên đừng hỏi mình làm sao làm cho dailymotion