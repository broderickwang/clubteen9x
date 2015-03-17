FM cập nhật vì rứa TDYT nhà 4ALL
http://diendan.4allvn.biz/t2441-topic#12862
cũng... tiêu.
tiêu tức là gửi thông điệp đi bị báo lỗi
và k sử dụng được hình vui
tạm nói rứa cho đơn giản. hehe

làm TDYT cũng nhờ supho
sửa lỗi TDYT cũng nhờ supho
vì rứa hôm ni viết cái ni thì....
xin gửi lời thankiu tới supho iu dấu
4ALL nói chung, vlt nói riêng
tankiu thiệt nhềiu
thankiu vì tất cả những chi đã làm cho 4ALL
đã làm cho vlt ni.
chúc supho ở nơi xa zui zẻ và hạnh phúc nghen.
hehe

rùi bi chừ bắt tay vô.

bước 1. tạo 1 trang javascript tên là tdyt
Spoiler:
- ACP> Modules> HTML & Javascript> Javascript codes mananegement
- Enable Javascript code management: chọn có rùi bấm save
- Create a javascript:
. title: tdyt
. placement: kích chọn in the portal
. javascript code:
```


$(function(){
$('iframe').parent().remove();
$(".anprotal").remove();
});
```
. bấm save


bước 2. tạo trang Portal tên GỬI TDYT
Spoiler:
- ACP> Modules> Portal & Widgets> Portal & management
- Portals page lists
- Create a new page: GỪI TDYT
- bấm "tạo mới"
vậy là có 1 trang Portal tên là GỬI TDYT
- bấm Structure> bấm tất cả ![http://illiweb.com/fa/admin/icones/supprimer.png](http://illiweb.com/fa/admin/icones/supprimer.png) xóa sạch tất cả Widgets> bấm save.


bước 3. tạo 2 Widgets: TDYT và ĐĂNG NHẬP trong trang Portal gửi TDYT
Spoiler:

**1. tạo Widget TDYT
- bấm Create a new widget:
. Widget name: TDYT
. Use a table type: chọn Có
. Widget title: Gửi tdyt
. Widget source: copy codes sau vô khung**```


<form action="/posting.forum" method="post" name="post" onsubmit="return vB_Editor['text_editor'].prepare_submit(0,0)" enctype="multipart/form-data" align="center"><table width="700px" border="0" cellspacing="1" cellpadding="0" align="center" id="posting">
<tr>

<td width="100px">
<div style="width:100px;">
<span class="gen">
<b><font color="green">{USERNAME} gửi đến :

Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/b&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



<td style="border: 1px solid #dcdcdc;">
<span class="gen">
<input class="postgen" style="width:450px; height:22px; display:inline" type="text" value="Tất cả thành viên" onblur="if(this.value=='') this.value='Tất cả thành viên';" onfocus="if(this.value=='Tất cả thành viên') this.value='';" tabindex="2" title="" onkeypress="if (event.keyCode==13){return false}" id="username" name="subject" maxlength="50" size="20">


Unknown end tag for &lt;/span&gt;



<a href="javascript:toggleemo('emo4all')" onmouseover="helpline('z')" onmouseout="helpline('
')"><img src="http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif" alt="thèm nhỏ dãi">

Unknown end tag for &lt;/a&gt;



<input onclick="set_solved(this.form.elements['subject'],'»')" class="mainoption" style="font-weight: bold;height:22px;" type="submit" name="post" value="Gửi" tabindex="6" accesskey="s">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td valign="top">
<table width="100%" border="0" cellspacing="0" cellpadding="1">
<tr>
<td>
<span class="gen">
<font color="Green"><b>Nội dung:

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;



<td valign="top">
<span class="genmed">

Unknown end tag for &lt;/span&gt;


<table border="0" cellspacing="0" cellpadding="0" width="100%">
<tr>
<td colspan="9">
<span class="gensmall" style="width:450px;font-size:10px" id="helpbox">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td colspan="9">
<span class="gen">
<textarea class="gen" id="c3z_lovemess" style="width: 594px; height: 100px; display: inline-block; " onclick="storeCaret(this)" onkeyup="storeCaret(this)" name="message" rows="1" cols="35" tabindex="3" onselect="storeCaret(this)" wrap="virtual">


Unknown end tag for &lt;/textarea&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;



<div id="security">

Unknown end tag for &lt;/div&gt;


<div class="emohidden" id="emo4all">
<div id="emo4mes" style="display: block; height: auto; margin-top: 6px; width: 100%; ">
<style>.emolm img{height:25px}

Unknown end tag for &lt;/style&gt;


<span class="emolm">

<a href="javascript:emoticon(':D')"><img title="Very Happy" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/594403.gif" alt="Very Happy" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':lol!:')"><img title="lol!" src="http://illiweb.com/fa/i/smiles/lol.gif" alt="lol!" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':18:')"><img title="018" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/283238.gif" alt="018" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':ha:')"><img title="he he ha ha" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/916139.gif" alt="he he ha ha" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':2:')"><img title="2 one" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/845951.gif" alt="2 one" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':chụp ảnh:')"><img title="tách tách" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/134511.gif" alt="tách tách" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':d:')"><img title=":d:" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/174396.gif" alt=":d:" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':k:')"><img title=":k:" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/318583.gif" alt=":k:" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':c:')"><img title=":c:" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/846909.gif" alt=":c:" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':4.gif:')"><img title="viết thư" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/500826.gif" alt="viết thư" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':cua2:')"><img title="2" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/424897.gif" alt="2" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':cua11:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/906694.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':cua12:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/39364.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':cua14:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/260649.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':cua15:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/440737.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (1):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/441157.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':orion_ (3):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/555723.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (6):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/180110.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (16):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/160653.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (18):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/570489.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (22):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/707857.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (24):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/696447.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (28):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/665336.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (37):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/425536.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':orion_ (66):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/817501.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (76):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/14596.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (82):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/203810.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':orion_ (86):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/467862.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':4 (1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/403930.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':1 (1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/100214.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':7(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/62643.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':23 (1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/561241.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':33 (1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/469266.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':42(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/638960.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':51(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/731482.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':62.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/833785.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':62(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/154633.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':77.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/64685.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':84.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/55752.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':85.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/266422.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':86.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/334627.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':ngonzô:')"><img title="ngon tới đây" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/277557.gif" alt="ngon tới đây" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':lêulêu:')"><img title="lêu lêu" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/651840.gif" alt="lêu lêu" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':zổm:')"><img title="zổm" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/95422.gif" alt="zổm" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':suncuoi:')"><img title="cười sún" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/340999.gif" alt="cười sún" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':oaoa:')"><img title="oa hic" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/127342.gif" alt="oa hic" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':laymu:')"><img title="lạy mụ" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/168532.gif" alt="lạy mụ" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':hayquá:')"><img title="hay quá" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/180298.gif" alt="hay quá" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':♥♥♥:')"><img title="♥♥♥" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/60400.gif" alt="♥♥♥" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':bụp:')"><img title="bụp chừ" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/229426.gif" alt="bụp chừ" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':bùmbùm:')"><img title="bùmbùm" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/939956.gif" alt="bùmbùm" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon('no')"><img title="no" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/667725.gif" alt="no" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon('thè lưỡi')"><img title="thè lưỡi" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/473204.gif" alt="thè lưỡi" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon('mêtơi')"><img title="mêtơi" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/894212.gif" alt="mêtơi" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon('lộn cười')"><img title="lộn cười" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/158858.gif" alt="lộn cười" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':love:')"><img title="love" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/354976.gif" alt="love" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon('nung nẩy')"><img title="nung nẩy" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/3515.gif" alt="nung nẩy" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':quay:')"><img title="quay" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/61840.gif" alt="quay" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':thank:')"><img title="thank-iu" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/453899.gif" alt="thank-iu" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':happy:')"><img title="happy" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/87772.gif" alt="happy" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':hurray:')"><img title="hurray" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/734263.gif" alt="hurray" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':party:')"><img title="party" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/446535.gif" alt="party" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':bongbong:')"><img title="bong bóng" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/2960.gif" alt="bong bóng" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':bơi:')"><img title="bơi" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/334771.gif" alt="bơi" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':viết:')"><img title="viết" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/18753.gif" alt="viết" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':111.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/342270.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':alô:')"><img title="alô" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/541706.gif" alt="alô" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':98(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/975916.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':108.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/884247.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':macco:')"><img title="mắc cở" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/12394.gif" alt="mắc cở" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':aaaa:')"><img title="aaaa" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/916706.gif" alt="aaaa" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':răng:')"><img title="răng" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/318821.gif" alt="răng" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':để coi:')"><img title="để coi" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/506290.gif" alt="để coi" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':ngậm họng:')"><img title="ngậm họng" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/670729.gif" alt="ngậm họng" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':No-Idea:')"><img title="No-idea" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/25599.gif" alt="No-idea" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':21:')"><img title="112" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/705191.gif" alt="112" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':lan:')"><img title="^-^" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/473187.gif" alt="^-^" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':hip hop:')"><img title="hiphop" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/850412.gif" alt="hiphop" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':ht:')"><img title="hết ttiền" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/60413.gif" alt="hết ttiền" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':dd:')"><img title="kiếm" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/228735.gif" alt="kiếm" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':ănđĩa:')"><img title="ănđĩa" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/48745.gif" alt="ănđĩa" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':lạy:')"><img title="lạy" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/103909.gif" alt="lạy" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':cờ:')"><img title="cờ" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/229998.gif" alt="cờ" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':124.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/75274.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':tkiu:')"><img title="thkiu" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/466560.gif" alt="thkiu" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':2.gif:')"><img title="I love you 2" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/715317.gif" alt="I love you 2" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':6.gif:')"><img title="cho hun cái" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/7687.gif" alt="cho hun cái" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':7.gif:')"><img title="hun em nè" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/968910.gif" alt="hun em nè" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':8.gif:')"><img title="tặng hoa" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/717310.gif" alt="tặng hoa" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':9.gif:')"><img title="thôi trái tim" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/8754.gif" alt="thôi trái tim" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':10.gif:')"><img title="Sweet Heart" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/835556.gif" alt="Sweet Heart" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':11.gif:')"><img title="Quỳ Xuống Xin nụ hôn" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/204123.gif" alt="Quỳ Xuống Xin nụ hôn" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':12.gif:')"><img title="trao trái tim" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/620285.gif" alt="trao trái tim" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':13.gif:')"><img title="không muốn nghe" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/826618.gif" alt="không muốn nghe" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':14.gif:')"><img title="Tặng em iu" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/910692.gif" alt="Tặng em iu" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':15.gif:')"><img title="chào cả nhà" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/467287.gif" alt="chào cả nhà" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':16.gif:')"><img title="hút thuốt" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/130434.gif" alt="hút thuốt" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':17.gif:')"><img title="bất ngờ" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/234624.gif" alt="bất ngờ" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':18.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/247810.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':19.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/391605.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':20.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/371866.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':21.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/721624.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':22.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/148597.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':23.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/3822.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':36.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/296735.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':32.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/965573.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':39.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/360487.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':31.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/387285.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':33.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/675645.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':35.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/474430.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':40.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/368548.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':42.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/676645.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':41.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/212997.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':25.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/4260.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':24.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/241299.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':28.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/144228.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':43.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/857674.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':44.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/856429.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':45.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/488380.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':46.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/749311.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':49.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/237195.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':51.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/442500.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':52.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/458146.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':56.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/82639.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':58.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/195691.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':59.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/195783.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':60.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/267667.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':61.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/120622.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':63.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/690239.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':64.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/490888.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':71.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/158501.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':71 (1):')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/121212.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':73.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/79478.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':74.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/906876.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':75.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/423654.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':80.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/52503.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':81.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/467990.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':82.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/392405.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':87.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/828795.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':92.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/234447.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':93.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/420525.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':94.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/138314.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':95.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/67438.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':98.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/118821.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

    <a href="javascript:emoticon(':113.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/362833.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':121(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/3864.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':70.gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/307867.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;

 <a href="javascript:emoticon(':86(1).gif:')"><img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/98491.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<input type="hidden" name="lt" value="0">
<input type="hidden" name="mode" value="newtopic">
<input type="hidden" name="f" value="99">


Unknown end tag for &lt;/form&gt;


```
. bấm save

**2. tạo Widget ĐĂNG NHẬP
- trở lại trang Portal GỬI TDYT
- bấm Structure
- Create a new widget:
. Widget name: ĐĂNG NHẬP
. Use a table type: chọn Có
. Widget title: ĐĂNG NHẬP
. Widget source: copy codes sau vô khung**```

<form action="/login?redirect=/portal?pid=2" method="post" name="form_login"><table class="forumline" width="100%" border="0" cellspacing="0" cellpadding="4" align="center"><tr><th colspan="3" class="thHead" nowrap="nowrap" height="25">Xin vui lòng đăng nhập trước khi gửi thông điệp

Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td width="100%" align="center" class="row1"><table cellpadding="0" cellspacing="0" border="0"><tr><td class="row1 align_gauche"><table width="100%" border="0" cellspacing="1" cellpadding="0"><tr><td colspan="2" align="center"> 

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="align_droite" width="50%"><span class="gen">Tên truy cập:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td width="50%"><input type="text" name="username" value="" size="25" maxlength="40">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td class="align_droite"><span class="gen">Mật khẩu:

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td><input type="password" name="password" size="25" maxlength="32">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2"><span class="gen">Đăng nhập tự động mỗi khi truy cập: <input type="checkbox" name="autologin" checked="checked">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2"><input class="mainoption" type="submit" name="login" value="Đăng Nhập">

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2"><br><span class="gensmall"><a class="gensmall" href="/register">:: Đăng ký

Unknown end tag for &lt;/a&gt;

  |  <a class="gensmall" href="/profile?mode=sendpassword">:: Quên mật khẩu

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;


```
. bấm save


bước 4. Sét quyền gửi tdyt
Spoiler:
trong mục này sẽ phân quyền cho phép thành viên gửi tdyt
muốn gửi tdyt thì phải đăng nhập

- ACP> Modules> Portal & Widgets> Portal & management
- trang Potal GỬI TDYT
- bấm Structure
- Addition/deletion of personal widgets
. Widgets: kéo chọn TDYT
. Location: header
. Rights: kích chọn tất cả TRỪ guests Không chọn

- ACP> Modules> Portal & Widgets> Portal & management
- trang Potal GỬI TDYT
- bấm Structure
- Addition/deletion of personal widgets
. Widgets: kéo chọn ĐĂNG NHẬP
. Location: header
. Rights: chỉ kích chọn mục guests

4. thay giá trị trong widget TDYT
Spoiler:
- ACP> Modules> Portal & Widgets> Portal & management
- trang Potal GỬI TDYT
- bấm Structure
- Widget TDYT> ![http://illiweb.com/fa/admin/icones/editer.png](http://illiweb.com/fa/admin/icones/editer.png)
. tìm:
```

<input type="hidden" name="f" value="99">
```
. thay số 99 bằng STT box gửi tdyt
(tức là chuyên mục chứa các tdyt của forum bạn
muốn biết thì bấm vào chuyên mục đó
rùi nhìn lên thanh address sẽ thấy)
. bấm save


bước 5. hình vui

- trong link dưới đây,
http://diendan.4allvn.biz/smilies.forum?mode=smilies_frame
thay
http://diendan.4allvn.biz
bằng link forum của bạn
- rùi bấm vô link đó ra 1 trang hình vui
- bấm CTRL U (view source) ra một trang codes hình vui
- bấm nút Start (của PC)> Progams> Accessories> Notepad
- copy toàn bộ trang codes hình vui vô khung Notepad
- bấm CTRL H
. Find what: điền
```

<a href="javascript:emoticonp
```
. Replace with: điền
```

<a href="javascript:emoticon
```
. bấm Replace all
- copy toàn bộ codes trong notepad đó


bước 6. thay codes hình vui Notepad vô Widget TDYT

- trong đoạn codes Widget TDYT ở bước 3,
tìm và thay:
```

<a href="javascript:emoticon(':D')"><img title="Very Happy"
......
......
<img title="" src="http://r22.imgfast.net/users/2213/24/46/69/smiles/98491.gif" alt="" border="0">

Unknown end tag for &lt;/a&gt;


```
bằng đoạn codes trong Notepad bước 5 vô.

bước 7. lấy link trang Portal GỬI TDYT
Spoiler:
- ACP> Modules> Portal & Widgets> Portal management>
> GỬI TDYT> bấm Portal preview
- nhìn lên thanh address, thấy link có dạng:
http://diendan.4allvn.biz/portal?pid=2


bước 8. thay codes trong mod\_news
Spoiler:
- ACP> Display> Templates> Portal> Mod\_news
- tìm:
```

<a onmouseover="showtip('<font size=5>GỬI THÔNG ĐIỆP - CLICK !!</font><br>Chỉ dành cho thành viên có <font color=#FF5F5F>nick màu</font> hoặc <font color=#C2FFAF>trên 30 bài viết</font> ...');" onmouseout="hidetip();" class='c3luvmes' href="http://.../h2-tdyt"><img src="http://i23.servimg.com/u/f23/15/13/67/04/tdyt2110.png" /><img src="http://i23.servimg.com/u/f23/15/13/67/04/tdyt_s10.png" />

Unknown end tag for &lt;/a&gt;


```
thay:
http://.../h2-tdyt
bằng link trang Portal GỦI TDYT ở bước 7.
(ví dụ: http://ripskin.forumotion.net/portal?pid=2)
- bấm save rùi dấu cộng màu xanh


bước 9: thêm script trong overall\_header
Spoiler:
- ACP> Display> Templates> QLTT> Overall\_header
- tìm:
```

<script src="{JQUERY_PATH}" type="text/javascript">

Unknown end tag for &lt;/script&gt;


```
- ngay sau đó, chèn script sau:
```

<script type="text/javascript"> $(function() { jQuery("#security").load("http://diendan.4allvn.biz/post?f=60&mode=newtopic input[name^=auth]"); }); 

Unknown end tag for &lt;/script&gt;


```
- trong script trên, cái dòng
http://diendan.4allvn.biz/post?f=60
. thay http://diendan.4allvn.biz bằng link forum của bạn
. thay số 60 bằng STT chuyên mục box TDYT