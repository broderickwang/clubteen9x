![http://i44.servimg.com/u/f44/15/64/85/86/cp1810.png](http://i44.servimg.com/u/f44/15/64/85/86/cp1810.png)

demo:

Enlarge this image Click to see fullsize

**Tính năng:
- Đánh stt tự động
- Có thêm thành cuộn tiện lợi
- Có khung top post cho bớt tính đơn điệu
- CSS đã tối ưu hơn bản trước
- Không chiếm hết cột #left bạn vẫn sử dụng được phần bên dưới của nó**

**Cài đặt:**

Bước 1
Đặt widget như hình

```

http://i44.servimg.com/u/f44/15/64/85/86/cp1911.png
```

Bạn có thể tùy chọn cái Widget sau thay cho Top postin users this week (nếu thích)

```

http://i44.servimg.com/u/f44/15/64/85/86/cp2011.png

```


Bước 2
Chèn code sau vào CSS

```

/*Last topic cho Invision ver.2*/
#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt}
#left .module.borderwrap:nth-child(1){margin-right:2px;width:220px;float:left}
#left .module.borderwrap:nth-child(1) .box-content{background:white}
#left .module.borderwrap:nth-child(3){width:705px;float:left}
#left .module.borderwrap:nth-child(3) a + br,#left [style="height:11px"]{display:none}
#left .module.borderwrap:nth-child(3) .box-content{overflow:hidden;height:281px;background:white}
#left .module.borderwrap:nth-child(3) .box-content:hover{overflow:auto}
#left .module.borderwrap:nth-child(3) .box-content a[href^="/t"]{margin-bottom:15px;width:342px;float:left;overflow:hidden;height:14px}
#left .module.borderwrap:nth-child(3) .box-content a[href*="/u"]{margin-bottom:15px;margin-left:-30px;background:white;width:157px;display:inline-block;padding-left:15px}
#left .module.borderwrap:nth-child(3) .box-content a[href*="/u"] img{margin-top:-16px}
#left .module.borderwrap:nth-child(3) .box-content a[href^="/t"]::before{content:counter(stt)".";counter-increment:stt;width:20px;display: inline-block;text-align:right}
[summary*="Top post"] tr{height:25px}
[summary*="Top post"] td{background:#FFF!important;border:0!important}
#left .module.borderwrap{width:937px;float:left}
```

**Riêng đối với skin Chinh phục mới
Tìm trong CSS đoạn này và xóa đi**

```

#left{clear:none!important;width:100%!important;float:none!important;counter-reset:stt;}
#left .box-content > a[href*="/t"]::before{content: counter(stt)".";counter-increment: stt;float: left;position: absolute;text-align: right;width: 25px!important;margin-left: -25px;}
#left a[href*="/t"]{width:450px;float:left;margin-right:164px;height:14px;overflow:hidden;padding-left: 16px;}
#left a[href*="/t"]:hover::after{content:"☺ (xem ngay)"}
#left a[href*="/u"]{width:160px;position:absolute;margin-left:-164px;background:#FFF;}


```
Xong rồi đấy Mọi góp ý, báo lỗi vui lòng gửi tại đây