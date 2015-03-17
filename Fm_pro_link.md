Trước đây, khi bạn có một file Mp3, Mp4 muốn đưa vào diễn đàn chỉ có một cách là bật HTML và chèn và dùng Embed code để chèn vào. Việc này sẽ tạo điều kiện cho kẻ gian đặt mã độc vào diễn đàn bạn.
Một số host video như Youtube/Dailymotion lại không hỗ trợ BBcode, Forumotion có hỗ trợ BBcode cho 2 host này, nhưng với một số liên kết dạng đặc biệt thì không hiển thị được. Ví dụ:

```


http://www.dailymotion.com/video/xjeimv_japan-tsunami-shot-by-a-car-driver_news
http://youtu.be/Mos3gD5W_DA
http://www.youtube-nocookie.com/v/Mos3gD5W_DA?version=3&amp;hl=vi_VN
```

Hoặc như trang nhacvn.net hỗ trợ BBcode, nhưng khi Click là bị popup quảng cáo, rất khó chịu.

Nhằm giải quyết các vấn đề trên, mình đã phát triển một phiên bản Forumotion Pro Link với 2 tính năng nổi bật là hỗ trợ Direct link và Link Address. Tuy mình phát triển trước nhưng vì để cập nhật thêm link Address mà nó được công bố chậm hơn Forumotion Media Center. Thông tin thêm:

> Về đối tượng: Image, Music, Video, Playlist
> Về cách chèn: Link, BBcode, HTML
> Về host file:
> > Direct link: mp3 |mp4 |mov |3gp |swf
> > Link Address: Youtube.com |Dailymotion.com |nhaccuatui.com |music.go.vn |mp3.zing.vn |nhac.vui.vn |amnhac.yume.vn |nhacvn.net |nhacso.net
> > Link flash |BBcode |Embed |Iframe : Hỗ trợ hầu hết các host phổ biến ở Việt Nam


> Về hiệu ứng:Ẩn / Hiện ứng dụng


Thông tin chi tiết về link Address:

> youtube.com
> > youtube.com
> > youtu.be
> > youtube-nocookie.com


> dailymotion.com
> nhaccuatui.com
> > Bài hát
> > Playlist
> > Video


> music.go.vn
> > Bài hát (Radio)
> > Playlist (Rank)
> > Video


> mp3.zing.vn
> > Bài hát (Karaoke)
> > Playlist
> > Video


> nhac.vui.vn
> > Bài hát
> > Playlist
> > Video


> amnhac.yume.vn
> > Bài hát
> > Playlist
> > Video


> nhacvn.net
> > Bài hát
> > Playlist
> > Video


> nhacso.net
> > Bài hát
> > Playlist
> > Video



Hướng dẫn: Display - Templates - Ganeral - Viewtopic\_body:
Chèn vào đầu Viewtopic\_body bằng code sau:

```


<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/Forumotion-Pro-Link.js">

Unknown end tag for &lt;/script&gt;



```
Chú ý: Forumotion Pro Link sẽ hiển thị các ứng dụng Media trên diễn đàn dưới dạng liên kết, khi bạn rê chuột vào thì ứng dụng mới được thực thi. Sau đó bạn có thể bật tắt ứng dụng bằng nút +/-