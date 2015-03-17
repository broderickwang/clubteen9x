**Như thông tin trong những ngày gần đây thì host ảnh Imageshack đã bắt đầu chặn ip tại Việt Nam. Hiện tượng ếch ngồi trên màn hình xảy ra khá nhiều với các diễn đàn.** Thủ thuật này giúp bạn thay thế frame upload ảnh sử dụng Imageshack mặc định của forum bằng frame của host khác.
**Trong bài viết mình hướng dẫn thay thế bằng Imagechip và Upanh.com, các bạn có thể thay thế bằng host khác bằng cách thay iframe trong script.**


Demo : click nút tại khung viết bài hoặc trả lời nhanh ở Cntt-k3


Cách làm : Chèn đoạn script sau vào overall\_header trước /head hoặc chèn vào Widget đối với invision hoặc phpbb3


Imageschip

```

<script type="text/javascript">function display_upload_imageshack(button){var container=document.getElementById('servimg_upload_gui');if(!document.getElementById('obj_servimg')){container.innerHTML='<p><iframe src="http://www.imageschip.com/if1.php" scrolling="no" allowtransparency="true" frameborder="0" width="500" height="132">Update your browser for Imageschip!

Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/p&gt;

'}var div=document.getElementById('servimg_upload_gui');var visible=div.style.visibility;if(visible=='hidden'){var window_w=(document.body)?document.body.clientWidth:window.innerWidth;var cd=FindXY(button);var h=button.offsetHeight;var i=0;while(i<selectId.length){if(document.getElementById(selectId[i])){document.getElementById(selectId[i]).style.visibility='hidden'}i++}var sub=((window_w-cd['x'])<555)?(555-window_w+cd['x']):0;div.style.visibility='visible';div.style.width='auto';div.style.left=(cd['x']-sub)+'px';div.style.top=(cd['y']+h)+'px'}else{div.style.visibility='hidden'}}

Unknown end tag for &lt;/script&gt;




```

Upanh.com

```

<script type="text/javascript">function display_upload_imageshack(button){var container=document.getElementById('servimg_upload_gui');if(!document.getElementById('obj_servimg')){container.innerHTML='<p><iframe src="http://www.upanh.com/iframe2.php?skin=green" width="440" height="120" target="_ifrupload" name ="_ifrupload" style="overflow-x: hidden;overflow-y: hidden;" frameborder="0"><p>Your browser does not support iframes.

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/iframe&gt;



Unknown end tag for &lt;/p&gt;

'}var div=document.getElementById('servimg_upload_gui');var visible=div.style.visibility;if(visible=='hidden'){var window_w=(document.body)?document.body.clientWidth:window.innerWidth;var cd=FindXY(button);var h=button.offsetHeight;var i=0;while(i<selectId.length){if(document.getElementById(selectId[i])){document.getElementById(selectId[i]).style.visibility='hidden'}i++}var sub=((window_w-cd['x'])<555)?(555-window_w+cd['x']):0;div.style.visibility='visible';div.style.width='auto';div.style.left=(cd['x']-sub)+'px';div.style.top=(cd['y']+h)+'px'}else{div.style.visibility='hidden'}}

Unknown end tag for &lt;/script&gt;




```
(host Upanh sẽ bật 1 cửa số mới để lấy link chứ không lấy link trực tiếp trong frame được như Imageschip. Và theo kinh nghiệm sử dụng thì Upanh làm mất khá nhiều ảnh của người dùng, trong đó có mình)