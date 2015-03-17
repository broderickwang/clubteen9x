/forum-f18/topic-t921.htm
đọc bài trên để biết cách chèn bộ gõ
sau đó chèn bộ gõ AVIM thay thế cho bộ Mudim:
Link bộ gõ: http://vinabb.com/styles/prosilver/template/avim.js

1.Có thể download file avim.js về thì up lên host của mình (Hoặc dùng link đó luôn cho tiện) - chèn vào forum

2.Template >> Viewtopic\_body:

```

{QUICK_REPLY_FORM}

```
thêm ngay phía trước đoạn:

```


<!-- bo go AVIM --> <div align="right"> <span class="gensmall">Chọn kiểu gõ: <input id="him_auto" onclick="setMethod(0);" type="radio" name="viet_method">AUTO<input id="him_telex" onclick="setMethod(1);" type="radio" name="viet_method">TELEX<input id="him_vni" onclick="setMethod(2);" type="radio" name="viet_method">VNI<input id="him_off" onclick="setMethod(-1);" type="radio" name="viet_method">Off

Unknown end tag for &lt;/div&gt;

 <!--/bo go AVIM -->{QUICK_REPLY_FORM}


```
3. Template >> Post & Tin nhắn >> posting\_body:

Tìm:

```


<div id="text_editor_select_controls">

```
thêm vào trước nó đoạn:

```


<!-- bo go AVIM --> <div align="right"> <span class="gensmall">Chọn kiểu gõ: <input id="him_auto" onclick="setMethod(0);" type="radio" name="viet_method">AUTO<input id="him_telex" onclick="setMethod(1);" type="radio" name="viet_method">TELEX<input id="him_vni" onclick="setMethod(2);" type="radio" name="viet_method">VNI<input id="him_off" onclick="setMethod(-1);" type="radio" name="viet_method">Off

Unknown end tag for &lt;/div&gt;

 <!--/bo go AVIM -->{QUICK_REPLY_FORM}```