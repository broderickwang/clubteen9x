Demo:
![http://i1243.photobucket.com/albums/gg552/Valbatos/untitled-2.jpg](http://i1243.photobucket.com/albums/gg552/Valbatos/untitled-2.jpg)
bỏ vào Display>Colors>CSS Stylesheet

```

/*rank forum*/
span[style="color:#00FA11"]:before{content: "[Founder]";font-weight:bold;padding-right:2px;}
span[style="color:#EA00FF"]:before{content: "[Admin]";font-weight:bold;padding-right:2px;}
span[style="color:#F7FF00"]:before{content: "[S-Mod]";font-weight:bold;padding-right:2px;}
span[style="color:#0900FF"]:before{content: "[Mod]";font-weight:bold;padding-right:2px;}
span[style="color:#169E71"]:before{content: "[CTV]";font-weight:bold;padding-right:2px;}
span[style="color:#8B00FC"]:before{content: "[V.I.P 2]";font-weight:bold;padding-right:2px;}
span[style="color:#FA0303"]:before{content: "[V.I.P 1]";font-weight:bold;padding-right:2px;}
span[style="color:#000000"]:before{content: "[Banned]";font-weight:bold;padding-right:2px;}
span[style="color:#00F7FF"]:before{content: "[Mem]";font-weight:bold;padding-right:2px;}


```

chỉnh mã màu cho phù hợp với các nhóm trong forum nhé

**Mô tả: Nghe tên là biết rồi khỏi cần mô tả ha Nhưng cũng phải mô tả tí cho nó ... dài dòng Ý là cài vô nick sẽ đổi màu liên tục giống giống cầu vồng thôi**

**Ưu điểm: Nhẹ, gọn.**Khuyết điểm: Không thật sự là cầu vòng

**Yêu cầu tối thiểu:
-Trình duyệt hỗ trợ CSS3
-Biết link của thành viên là gì**

```
    a[href="/u6290"] span{color:#F00;animation:svcolor 1s infinite;-moz-animation:svcolor 1s infinite;-webkit-animation:svcolor 1s infinite;}
@keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}/*TUT by handsomevip007*/60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-moz-keyframes svcolor{10%{color:#F00}/*diendan.chinhphuc.info*/20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}
@-webkit-keyframes svcolor{10%{color:#F00}20%{color:#F80}30%{color:#FF0}40%{color:#5F0}50%{color:#0F0}60%{color:#0FD}70%{color:#09F}80%{color:#00F}90%{color:#A0F}100%{color:#F0F}}```



