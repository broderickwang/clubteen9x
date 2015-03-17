Demo: http://www.Độtkích.tk/h314-Forumotion

Bước 1: Tạo bản tin RSS
Tạo feed cho forum

Link feed của forum sẽ có dạng http://linkforum/feed/?f=xx , với xx là số của forum tương ứng, ví dụ http://www.FMvi.tk/feed/?f=2
--> Copy link đó.
Vào http://feedburner.com , có thể log in bằng account google, dán link feed đó vào ô Burn a feed right this instant
Nhấn Next qua bước đặt tên cho feed mới, nên đặt ngắn gọn dễ hiểu, mà thật ra chẳng cần đặt làm gì, nhấn Next luôn.
.... sau đó nhấn Skip directly to feed management
![http://i21.servimg.com/u/f21/16/41/91/75/2_bmp13.jpg](http://i21.servimg.com/u/f21/16/41/91/75/2_bmp13.jpg)

Tiếp theo vào Publicize >> Buzzboost >> Tùy chỉnh (như trong hình) rồi click active.
![http://i21.servimg.com/u/f21/16/41/91/75/all10.png](http://i21.servimg.com/u/f21/16/41/91/75/all10.png)
... bạn không check vào ô nào cả, còn Number of items to display: All

![http://i21.servimg.com/u/f21/16/41/91/75/4_bmp11.jpg](http://i21.servimg.com/u/f21/16/41/91/75/4_bmp11.jpg)

...sau khi làm xong, bạn sẽ có 1 đoạn Script, bây giờ chỉ cần coppy và dán vào nơi muốn hiển thị thôi.
![http://i21.servimg.com/u/f21/16/41/91/75/coppy10.png](http://i21.servimg.com/u/f21/16/41/91/75/coppy10.png)

... và lấy đoạn mã mà FeedBurner đưa ra. Bây giờ ta sẽ dùng nó để tạo một danh sách tìm kiếm.
Bước 2: Thêm CSS và Script
Nếu dùng trên forum thì bạn thêm vào CSS:

```


@charset "utf-8";@media screen,projection {.feedburnerFeedBlock{color:#FFF;width:500px;margin:0 auto;padding:0 0 30px;}#page_wrapper input.filter{width:488px;height:30px;border:1px solid #2a5d9c;font-size:16px;color:#fff;background:#112f55;margin:0 0 10px;padding:0 5px;}#page_wrapper ul.live_filter{list-style:none;margin:0;padding:0;}#page_wrapper ul.live_filter li{width:498px;height:30px;border-bottom:1px solid #061220;margin:0;}#page_wrapper ul.live_filter li   a{display:block;width:490px;height:23px;color:#fff;text-decoration:none;padding:7px 0 0 7px;}
.feedburnerFeedBlock>ul.live_filter>li a:hover{background:#000;text-decoration:none;}.bvcode{padding-right:0;background:#5f1d69 url(http://www.baivong.tk/users/1911/13/87/62/album/th/baivie10.png) no-repeat right center;border:0.5px solid #B59E94;}.newcode{padding-right:0;background:#125214 url(http://www.baivong.tk/users/1911/13/87/62/album/th/i_icon10.gif) no-repeat right center;border:0.5px solid #B59E94;}
```



Thêm vào bên dưới:

```


<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```

...bằng code này:

```


<script type="text/javascript" src="http://www.www.fmvi.tk/h1-script-livefilter">

Unknown end tag for &lt;/script&gt;


```

Nếu dùng ngoài trang HTML thì thêm :

```


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js">

Unknown end tag for &lt;/script&gt;


```

... vào giữa CSS và Script
Bước 3: Tạo danh sách tìm kiếm
Bây giờ bạn muốn đặt danh sách tìm kiếm ở đâu chỉ cần bao quanh đoạn Script của feedburner bằng:

Code: Chọn nội dung
```


<div id="page_wrapper">
<!-- Đoạn mã của feedburner -->


Unknown end tag for &lt;/div&gt;



```
Demo: Danh sách tim kiếm RSS của box Quán bar

![http://i21.servimg.com/u/f21/16/41/91/75/beta_t10.png](http://i21.servimg.com/u/f21/16/41/91/75/beta_t10.png)