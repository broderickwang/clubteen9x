Bản quyền:
Fancybox v2.0.4 © fancyapps (http://fancyapps.com/fancybox/)
Mousewheel 3.0.6 © 2011 Brandon Aaron (http://brandonaaron.net)
Ứng dụng cho phpBB2 - forumotion bởi baivong © (http://www.fmvi.org/)

Chức năng:

> Trình diễn loạt ảnh:
> > Trình diễn loạt ảnh theo từng bài viết
> > Loại bỏ ảnh lỗi,
> > Trình diễn ảnh hoặc liên kết ảnh.
> > Sử dụng các nút chức năng, bàn phím hoặc nút cuộn chuột để điều khiển.
> > Kích thước ảnh tự điều chỉnh theo kích thước cửa sổ, có chức năng xem kích thước thật.


> Phát video youtube từ liên kết trực tiếp:
> > Chuyển liên kết thành ảnh thu nhỏ của video.
> > Phát video đơn hoặc playlist.


> Thông báo khi có tin nhắn mới



Hướng dẫn:
Bước 1: Thêm vào CSS
ACP - Display - Pictures and Colors - Colors - CSS Stylesheet:

```


/* Fancybox2 - www.FMvi.org */
.fancybox-tmp iframe,.fancybox-tmp object{vertical-align:top;margin:0;padding:0}
.fancybox-wrap{position:absolute;top:0;left:0;z-index:1002}
.fancybox-outer{background:#f9f9f9;color:#444;text-shadow:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin:0;padding:0}
.fancybox-opened{z-index:1003}
.fancybox-opened .fancybox-outer{-webkit-box-shadow:0 10px 25px rgba(0,0,0,0.5);-moz-box-shadow:0 10px 25px rgba(0,0,0,0.5);box-shadow:0 10px 25px rgba(0,0,0,0.5)}
.fancybox-inner{width:100%;height:100%;position:relative;outline:none;overflow:hidden;margin:0;padding:0}
.fancybox-error{color:#444;font:14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;margin:0;padding:10px}
.fancybox-image,.fancybox-iframe{display:block;width:100%;height:100%;border:0;vertical-align:top;margin:0;padding:0}
.fancybox-image{max-width:100%;max-height:100%}
#fancybox-loading{position:fixed;top:50%;left:50%;margin-top:-21px;margin-left:-21px;width:42px;height:42px;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancyb10.gif);opacity:0.8;cursor:pointer;z-index:1010}
.fancybox-close,.fancybox-prev span,.fancybox-next span{background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/fancyb10.png)}
.fancybox-close{position:absolute;top:-18px;right:-18px;width:36px;height:36px;cursor:pointer;z-index:1004}
.fancybox-prev,.fancybox-next{position:absolute;top:0;width:40%;height:100%;cursor:pointer;background:transparent url(http://i48.servimg.com/u/f48/16/58/89/73/blank10.gif);z-index:1003}
.fancybox-prev{left:0}
.fancybox-next{right:0}
.fancybox-prev span,.fancybox-next span{position:absolute;top:50%;left:-9999px;width:36px;height:36px;margin-top:-18px;cursor:pointer;z-index:1003}
.fancybox-prev span{background-position:0 -36px}
.fancybox-next span{background-position:0 -72px}
.fancybox-prev:hover span{left:20px}
.fancybox-next:hover span{left:auto;right:20px}
.fancybox-tmp{position:absolute;top:-9999px;left:-9999px;overflow:visible;visibility:hidden;padding:0}
#fancybox-overlay{position:absolute;top:0;left:0;overflow:hidden;display:none;z-index: 999;background:#000}
.fancybox-title{display:none}
.fancybox-title-float-wrap{position:absolute;bottom:0;right:50%;margin-bottom:-35px;z-index: 999;text-align:center}
.fancybox-title-float-wrap .child{display:inline-block;margin-right:-100%;background:rgba(0,0,0,0.8);-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;text-shadow:0 1px 2px #222;color:#FFF;font-weight:700;line-height:24px;white-space:nowrap;padding:2px 20px}
.fancybox-title-outside-wrap{position:relative;margin-top:10px;color:#fff}
.fancybox-title-inside-wrap{margin-top:10px}
.fancybox-title-over-wrap{position:absolute;bottom:0;left:0;color:#fff;background:rgba(0,0,0,.8);padding:10px}
#fancybox-buttons{position:fixed;left:0;width:100%;z-index:1005}
#fancybox-buttons.top{top:10px}
#fancybox-buttons.bottom{bottom:10px}
#fancybox-buttons ul{display:block;width:170px;height:30px;list-style:none;-webkit-box-shadow:0 1px 3px #000,0 0 0 1px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.05);-moz-box-shadow:0 1px 3px #000,0 0 0 1px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,255,255,.05);background:#111 0 0 50% 50% 100%;border-radius:3px;margin:0 auto;padding:0}
#fancybox-buttons ul li{float:left;margin:0;padding:0}
#fancybox-buttons a{display:block;width:30px;height:30px;text-indent:-9999px;background-image:url(http://i48.servimg.com/u/f48/16/58/89/73/fancyb11.png);background-repeat:no-repeat;outline:none}
#fancybox-buttons a.btnPrev{width:32px;background-position:6px 0}
#fancybox-buttons a.btnNext{background-position:-33px 0;border-right:1px solid #3e3e3e}
#fancybox-buttons a.btnPlay{background-position:0 -30px}
#fancybox-buttons a.btnPlayOn{background-position:-30px -30px}
#fancybox-buttons a.btnToggle{background-position:3px -60px;border-left:1px solid #111;border-right:1px solid #3e3e3e;width:35px}
#fancybox-buttons a.btnToggleOn{background-position:-27px -60px}
#fancybox-buttons a.btnClose{border-left:1px solid #111;width:38px;background-position:-57px 0}
#fancybox-buttons a.btnDisabled{opacity:0.5;cursor:default}
.fancybox-prev:hover,.fancybox-next:hover,.fancybox-opened .fancybox-title{visibility:visible}
.postbody img{max-width:350px}
.signature_div img{max-width:100%}
.iconPlayer{background:url(//ssl.gstatic.com/s2/tt/images/play-overlay.png) no-repeat scroll center center transparent;left:140px;opacity:0.8;position:absolute;top:-155px;z-index:99;padding:40px !important}

```

Bước 2: Thêm vào cuối overall\_footer\_begin
ACP - Display - Templates - Ganeral - overall\_footer\_begin

```


<script type="text/javascript" src="http://fmvi-group.googlecode.com/files/fancybox2-phpBB2-FMvi.js">

Unknown end tag for &lt;/script&gt;




```
Viết bởi baivong - www.fmvi.org