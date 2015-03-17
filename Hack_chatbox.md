Các bạn đều biết là Eazy chỉ cung cấp ứng dụng chatbox cho phiên bản pro. Đó cũng không phải là vấn đề gì to tát vì bạn dễ dàng đăng ký 1 dịch vụ chatbox bên ngoài rất dễ dàng, như Shoutmix, Meebo, xat... và cbox. Tuy nhiên tài khoản dùng trên các dịch vụ đó phải đăng ký riêng.
Dịch vụ Cbox có 2 phiên bản miễn phí và trả phí. Mình hướng dẫn ở đây là trên phiên bản miễn phí, bạn nào có tiền chắc cũng mua luôn cái mini-chatbox của Eazy rồi.
Sau khi xem xét cbox mình phát hiện ra một lỗi ở key - dùng để kiểm soát tin nhắn gửi đi, tuy nhiên có vẻ như nó không hoạt động vì khi xóa key đi vẫn gửi tin vô tư, còn phần javascript kiểm tra location cũng chẳng làm được gì hơn khi bị xóa.
Và bây giờ mình sẽ hướng dẫn các bạn cài ứng dụng Cbox cho Eazy và cách để có thể sử dụng tài khoản Eazy để gửi tin trên Cbox.

Bản quyền:
Plugin Cbox (http://www.cbox.ws)
Mod & Style by fmvi - Chipteam (http://chip.eazy.vn/)

Demo:
![http://i15.servimg.com/u/f15/16/58/89/73/1-11-213.jpg](http://i15.servimg.com/u/f15/16/58/89/73/1-11-213.jpg)
http://design.eazy.vn/index.php

Hướng dẫn:

Bước 1: Đăng ký một tài khoản Cbox tại: http://cbox.ws/getone.php
![http://i15.servimg.com/u/f15/16/58/89/73/1-11-211.jpg](http://i15.servimg.com/u/f15/16/58/89/73/1-11-211.jpg)
Cbox sẽ gửi mail kích hoạt cho bạn, sau khi kích thoạt thành công bạn sẽ được chuyển đến trang lấy code Cbox. Nếu không yêu cầu gì cao bạn có thể dừng ở bước này là đã có Cbox để chém gió rồi, còn chưa thỏa mãn thì tiếp tục nào.
Tại trang http://cbox.ws/admin.php?snippet bạn sẽ thấy đoạn code HTML để sử dụng. Đây là đoạn code của mình.

```

<!-- BEGIN CBOX - www.cbox.ws - v001 -->
<div id="cboxdiv" style="text-align: center; line-height: 0">
<div><iframe frameborder="0" width="200" height="305" src="http://www7.cbox.ws/box/?boxid=709077&amp;boxtag=ey8f4t&amp;sec=main" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes" name="cboxmain7-709077" style="border:#ababab 1px solid;" id="cboxmain7-709077">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;


<div><iframe frameborder="0" width="200" height="75" src="http://www7.cbox.ws/box/?boxid=709077&amp;boxtag=ey8f4t&amp;sec=form" marginheight="2" marginwidth="2" scrolling="no" allowtransparency="yes" name="cboxform7-709077" style="border:#ababab 1px solid;border-top:0px" id="cboxform7-709077">

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END CBOX -->
```

Bạn không cần quan tâm đến các lựa chọn sử dụng mà hãy để ý các vị trí sau (xem ảnh):
![http://i15.servimg.com/u/f15/16/58/89/73/1-11-212.jpg](http://i15.servimg.com/u/f15/16/58/89/73/1-11-212.jpg)
Boxtag: của mình là ey8f4t
Sever: của mình là www7
Boxid: của mình là 709077
Name: của mình là cboxmain7-709077
Sẽ có vài vị trí trong code như vậy, bạn xem code của mình và lấy code của bạn thay vào vị trí tương ứng trong code dưới đây:

```

<div id="hack-cbox" style="margin: 0px;">
<div>
<ul>
<li>
<dl>
<dt style="text-align: left; width: 96%; line-height: 26px;"><a href="http://{SEVER}.cbox.ws/box/index.php?boxid={BOXID}&amp;boxtag={BOXTAG}&amp;sec=main" target="{NAME}" onclick="return do_refresh();" style="float: right; height: 16px; line-height: 16px;">Cập nhật

Unknown end tag for &lt;/a&gt;

<a href="javascript:;" onclick="$('#hack-cbox .topiclist.forums').slideToggle();" style="height: 16px; line-height: 16px;">Khu vực tán gẫu

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/dt&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<ul>
<li>
<div style="margin-right: 2px;">
<iframe frameborder="0" width="100%" height="305" src="http://{SEVER}.cbox.ws/box/?boxid={BOXID}&amp;boxtag={BOXTAG}&amp;sec=main" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes" name="{NAME}" style="border:#ababab 1px solid;" id="{NAME}" onload="clsmess()">

Unknown end tag for &lt;/iframe&gt;




Unknown end tag for &lt;/div&gt;


<div id="zm-emo-list" style="border: 1px solid rgb(153, 153, 153); margin: 5px 0px; display: none;"><span title=":)"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/1.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":~"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/2.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":B"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/3.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":|"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/4.jpg">

Unknown end tag for &lt;/span&gt;

<span title="8-)"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/5.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-(("><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/6.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":$"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/7.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":X"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/8.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":Z"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/9.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":(("><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/10.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-|"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/11.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-H"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/12.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":P"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/13.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":D"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/14.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":o"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/15.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":("><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/16.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":+"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/17.jpg">

Unknown end tag for &lt;/span&gt;

<span title="--B"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/18.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":Q"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/19.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":T"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/20.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";P"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/21.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";-D"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/22.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";D"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/23.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";O"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/24.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";G"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/25.jpg">

Unknown end tag for &lt;/span&gt;

<span title="|-)"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/26.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":!"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/27.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":L"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/28.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":&gt;"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/29.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":;"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/30.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";F"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/31.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";-S"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/32.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";?"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/33.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";-X"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/34.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-F"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/35.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";8"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/36.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";!"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/37.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";-!"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/38.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";XX"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/39.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-BYE"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/40.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":WIPE"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/41.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-DIG"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/42.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":handclap"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/43.jpg">

Unknown end tag for &lt;/span&gt;

<span title="&amp;-("><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/44.jpg">

Unknown end tag for &lt;/span&gt;

<span title="B-)"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/45.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-L"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/46.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-R"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/47.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":-O"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/48.jpg">

Unknown end tag for &lt;/span&gt;

<span title="&gt;-|"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/49.jpg">

Unknown end tag for &lt;/span&gt;

<span title="P-("><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/50.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":--|"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/51.jpg">

Unknown end tag for &lt;/span&gt;

<span title="X-)"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/52.jpg">

Unknown end tag for &lt;/span&gt;

<span title=":*"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/53.jpg">

Unknown end tag for &lt;/span&gt;

<span title=";-A"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/54.jpg">

Unknown end tag for &lt;/span&gt;

<span title="8*"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/55.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-showlove"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/56.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-rose"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/57.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-fade"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/58.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-heart"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/59.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-break"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/60.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-coffee"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/61.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-cake"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/62.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-li"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/63.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-bome"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/64.jpg">

Unknown end tag for &lt;/span&gt;

<span title="/-bd"><img onclick="fmvismile(this.src)" src="http://static.me.zing.vn/v3/images/smilley/default/65.jpg">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<div style="border: 1px solid rgb(153, 153, 153); margin: 5px 0px; position: relative; text-align: right; padding: 5px 7px;">
<p style="position: absolute; margin: 10px 0px;">
<img style="width: 16px; height: 16px;" src="http://static.me.zing.vn/v3/images/smilley/default/1.jpg" onclick="$('#zm-emo-list').slideToggle()" title="Biểu tượng vui" style="vertical-align: middle;" />
<img title="Bold" onclick="fmvi_r('[b]','[/b]');" src="http://design.eazy.vn/images/editor/text_bold.gif" />
<img title="Underline" onclick="fmvi_r('[u]','[/u]');" src="http://design.eazy.vn/images/editor/text_underline.gif" />
<img title="Italic" onclick="fmvi_r('[i]','[/i]');" src="http://design.eazy.vn/images/editor/text_italic.gif" />
<img title="strike" onclick="fmvi_r('[s]','[/s]');" src="http://design.eazy.vn/images/editor/strike.gif" />
<img title="Superscript" onclick="fmvi_r('[sup]','[/sup]');" src="http://design.eazy.vn/images/editor/superscript.gif" />
<img title="Subscript" onclick="fmvi_r('[sub]','[/sub]');" src="http://design.eazy.vn/images/editor/subscript.gif" />
<img title="Link" onclick="fmvi_r('[url]','[/url]');" src="http://design.eazy.vn/images/editor/world_link.gif" />
<img title="Small" onclick="fmvi_r('[small]','[/small]');" src="http://i15.servimg.com/u/f15/16/58/89/73/icon-f11.png" />
<img title="Big" onclick="fmvi_r('[big]','[/big]');" src="http://i15.servimg.com/u/f15/16/58/89/73/icon-f10.png" />
<img title="Scroll" onclick="fmvi_r('[scroll]','[/scroll]');" src="http://i15.servimg.com/u/f15/16/58/89/73/scroll10.png" />
<img title="Red" onclick="fmvi_r('[color=red]','[/color]');" style="background:none repeat scroll 0 0 red!important;display:inline-block;height:16px;width:16px" src="http://design.eazy.vn/images/editor/spacer.gif" />
<img title="Blue" onclick="fmvi_r('[color=blue]','[/color]');" style="background:none repeat scroll 0 0 blue!important;display:inline-block;height:16px;width:16px" src="http://design.eazy.vn/images/editor/spacer.gif" />
<img title="Green" onclick="fmvi_r('[color=green]','[/color]');" style="background:none repeat scroll 0 0 green!important;display:inline-block;height:16px;width:16px" src="http://design.eazy.vn/images/editor/spacer.gif" />
<img title="Violet" onclick="fmvi_r('[color=violet]','[/color]');" style="background:none repeat scroll 0 0 violet!important;display:inline-block;height:16px;width:16px" src="http://design.eazy.vn/images/editor/spacer.gif" />


Unknown end tag for &lt;/p&gt;


<form method="post" action="http://{SEVER}.cbox.ws/box/index.php?boxid={BOXID}&amp;boxtag={BOXTAG}&amp;sec=submit" target="{NAME}" name="cbox">
<input type="hidden" id="huser" name="nme" value="fmvi" maxlength="25" />
<input type="hidden" id="luser" value="http://www.fmvi.vn" name="eml" />
<p style="margin: 7px 0px 10px;">
<input id="cboxmess" type="text" value="" size="50" autocomplete="off" name="pst" maxlength="200" />
<input type="submit" name="sub" value="Gửi tin" />


Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript" src="http://chip-byn.googlecode.com/svn/hack-cbox.js">

Unknown end tag for &lt;/script&gt;


```

Tìm {BOXTAG} thay bằng Boxtag của bạn.
Tìm {SEVER} thay bằng Sever của bạn.
Tìm {BOXID} thay bằng Boxid của bạn.
Tìm {NAME} thay bằng Name của bạn.
Trong code trên mình có dùng một file javascript http://chip-byn.googlecode.com/svn/hack-cbox.js nó có thể bị xóa bất kỳ lúc nào nên bạn hãy download nó về và upload lên host của bạn.
http://chip-byn.googlecode.com/svn/hack-cbox.js


Unknown end tag for &lt;/code&gt;


Bước 2: Tạo BBcode chatbox
ACP >> Gửi bài viết >> Tùy biến thẻ BBCode >> Tạo thẻ BBcode mới
Cách sử dụng thẻ BBCode:

```

[CBOX][/CBOX]

```
Mã HTML thay thế: Sử dụng code đã chỉnh sửa ở bước 1
Không check vào Hiện trên trang gửi bài

Bước 3: Sử dụng BBcode cho thành viên và khách
ACP >> MOD >> Thông báo chung:
Thêm BBcode cbox vào Nội dung thông báo

```

[CBOX][/CBOX]
```

Chỉnh Cấu hình thông báo chung:

> Hiện thông báo chung: Có
> Chỉ hiện thông báo chung ở trang chủ: Không
> Hiển thị thông báo khác tới khách: Có
> Hiện thông báo chung tới: Mọi người


Bước 4: Thêm biểu tượng vui cho chatbox, trong code này mình dùng biểu tượng vui của zingme.
Tuy cập quản lý hình vui tại: http://www.cbox.ws/admin.php?smilies
Use smilie set: Chọn custom và nhấn apply
Bạn dùng luôn link ảnh của zingme cho tiện và nhập như sau:

> Code:

```

:1:
```
> URL:
```

http://static.me.zing.vn/v3/images/smilley/default/1.jpg
```
Cứ thế bạn nhập từ 1 đến 65 là xong, chỉ cần thay số thứ tự mà thôi.

Ghi chú:
Ngoài trang chủ thì Chatbox mặc định ẩn, bạn Click vào nút Khu vực tán gẫu để Mở/Đóng Cbox.
Tin nhắn trên chatbox được quản lý tại trang tài khoản của bạn trên Cbox http://www.cbox.ws/admin.php
Để sử dụng BBcode, bạn bôi đen đoạn tin nhắn và Click vào nút tương ứng. Các BBcode có thể sử dụng trên Cbox:
Chữ đậm , nghiêng [i](i.md), gạch ngang [s](s.md), gạch dưới [u](u.md), trên [sup](sup.md), dưới [sub](sub.md), liên kết [url](url.md), nhỏ [small](small.md), lớn [big](big.md), chạy trái <- phải [scroll](scroll.md), màu [color](color.md).