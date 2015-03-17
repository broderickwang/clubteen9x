Demo:
![http://img706.imageshack.us/img706/6584/18796083.jpg](http://img706.imageshack.us/img706/6584/18796083.jpg)

Temp > Post & Tin nhắn > posting\_body:
Tìm

```


<!-- BEGIN switch_attachment_list -->
.....................
..........đến .....
<!-- END switch_attachment -->
```

Thay bằng đoạn :

```


<!-- BEGIN switch_attachment_list -->
<div id="attachments">
<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr><th class="thHead" colspan="2">
<table width="100%"><tr>
<td width="10">

Unknown end tag for &lt;/td&gt;

<td align="center"><span class="gen"><b>File đính kèm

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td width="10">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;


<!-- BEGIN attachments -->
<tr>
<td width="22%" class="row1">
<span class="gen"><b>Tên file :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;

<br />


Unknown end tag for &lt;/td&gt;


<td width="78%" class="row2">
<!-- BEGIN switch_is_orphan -->
<span class="gen">{switch_attachment_list.attachments.switch_is_orphan.FILENAME}

Unknown end tag for &lt;/span&gt;


<!-- END switch_is_orphan -->
<!-- BEGIN switch_is_not_orphan -->
<a href="{switch_attachment_list.attachments.switch_is_not_orphan.U_ATTACH_URL}" class="gen">{switch_attachment_list.attachments.switch_is_not_orphan.FILENAME}

Unknown end tag for &lt;/a&gt;


<!-- END switch_is_not_orphan -->
<!-- BEGIN switch_can_delete -->
<input type="submit" value="{L_ATTACHMENT_DELETE}" name="delete_file[{switch_attachment_list.attachments.ATTACH_POS}]" /><br />
<!-- END switch_can_delete -->


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<tr>
<td width="22%" class="row1">
<span class="gen"><b>Ghi chú :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/td&gt;


<td width="78%" class="row2">
<!--textarea name="comment_list[{switch_attachment_list.attachments.ATTACH_POS}]" cols="35" rows="3" style="width:100%">{switch_attachment_list.attachments.ATTACH_COMMENT}

Unknown end tag for &lt;/textarea&gt;

<br />
<a href="{switch_attachment_list.attachments.U_ATTACH_URL}" class="gen">{switch_attachment_list.attachments.FILENAME}

Unknown end tag for &lt;/a&gt;

&amp;nbsp;&amp;nbsp;<input class="liteoption" type="submit" value="{L_ATTACHMENT_DELETE}" name="delete_file[{switch_attachment_list.attachments.ATTACH_POS}]" /-->
<input class="post" type="text" id="filecomment{switch_attachment_list.attachments.ATTACH_POS}" name="comment_list[{switch_attachment_list.attachments.ATTACH_POS}]" value="{switch_attachment_list.attachments.ATTACH_COMMENT}" maxlength="255" style="width: 450px" />
<input type="hidden" value="{switch_attachment_list.attachments.ATTACH_ID}" name="attachment_data[{switch_attachment_list.attachments.ATTACH_POS}][attach_id]" />
<input type="hidden" value="{switch_attachment_list.attachments.IS_ORPHAN}" name="attachment_data[{switch_attachment_list.attachments.ATTACH_POS}][is_orphan]" />
<input type="hidden" value="{switch_attachment_list.attachments.REAL_FILENAME}" name="attachment_data[{switch_attachment_list.attachments.ATTACH_POS}][real_filename]" />
<input type="hidden" value="{switch_attachment_list.attachments.ATTACH_COMMENT}" name="attachment_data[{switch_attachment_list.attachments.ATTACH_POS}][attach_comment]" />


Unknown end tag for &lt;/tr&gt;



<!-- END attachments -->


Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_attachment_list -->

<!-- BEGIN switch_attachment -->
<div id="attachment" style="display:{ATTACHMENT_CLOSE}">
<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr><th class="thHead">
<table width="100%"><tr>
<td width="10">

Unknown end tag for &lt;/td&gt;

<td align="center"><span class="gen"><b>Đính kèm file

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;

<td width="10"><a href="javascript:ShowHideLayernew('attachment')"><img src="{TABS_MORE_IMG}" alt="+" align="middle" border="0">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



<div id="attachment_show" style="display:{ATTACHMENT_OPEN}">
<table class="forumline" width="100%" border="0" cellspacing="1" cellpadding="0">
<tr><th class="thHead" colspan="2">
<table width="100%"><tr>
<td width="10">

Unknown end tag for &lt;/td&gt;

<td align="center"><span class="gen"><b>Đính kèm file

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td width="10"><a href="javascript:ShowHideLayernew('attachment')">
<img src="{TABS_LESS_IMG}" alt="-" align="middle" border="0">

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/th&gt;



Unknown end tag for &lt;/tr&gt;


<tr>
<td class="row1">

<table class="forumline" width="100%" cellspacing="1" cellpadding="0" border="0">
<tr>
<td class="row1" colspan="2"><span class="gen">Bạn có thể đính kèm một hay nhiều file với các định dạng sau:

Unknown end tag for &lt;/span&gt;

<br /><span class="info">{EXT_LIST}

Unknown end tag for &lt;/span&gt;

<br />

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td class="row1" width="22%"><span class="gen"><b>Tên file :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row2" width="78%"><span class="genmed"><input class="post" type="file" id="fileupload" name="fileupload" value="" /><input value="Gửi file" type="submit" name="add_file" /> (Dung lượng mỗi file không quá 1MB)

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<tr>
<td class="row1" width="22%"><span class="gen"><b>Ghi chú :

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;


<td class="row2" width="78%"><span class="genmed"><input class="post" type="text" style="width:450px" id="filecomment" name="filecomment" value="" maxlength="255" />

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;



<!-- BEGIN modif_dav_08032010 -->
<tr>
<td valign="top" width="15%"><label class="gen" for="fileupload">Tên file :

Unknown end tag for &lt;/label&gt;

<br /><br />
<label class="gen" for="filecomment">Ghi chú :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/td&gt;


<td width="80%"><input type="file" id="fileupload" name="fileupload" /><input type="submit" name="add_file" /> (Dung lượng mỗi file không quá 1MB)<br />
<textarea id="filecomment" name="filecomment" cols="35" rows="3" style="width:100%">

Unknown end tag for &lt;/textarea&gt;



Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;


<!-- END modif_dav_08032010 -->



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;



<!-- END switch_attachment -->
```

Thay 1MB bằng giới hạn của 4rum bạn.