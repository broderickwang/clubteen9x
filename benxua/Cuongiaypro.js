/*
  Kết hợp Javascript và Flash để tạo banner quảng cáo hiệu ứng lật trang.
  Bạn đã download file từ Blog giáo viên Thái Bình http://caobang83.violet.vn
  Mời bạn tham gia thảo luận và trao đổi về Tin học tại blog
  [Vun đầy kiến thức - Đắp đầy chuyên môn]
 */
   
 var esel = new Object();
 // ---------------------------------------------------------  THAY ĐỔI ĐỊA CHỈ ĐÍCH
 esel.ad_url = escape('http://caobang83.violet.vn');     // Nhập vào địa chỉ mà bạn muốn trỏ đến sau khi click vô quảng cáo
 // ---------------------------------------------------------  END TARGET URL
   
 esel.small_path = 'http://caobang83.webng.com/playlist/bloggiaovienthaibinh_s.swf';         //    đường dẫn file flash mép giấy (nhỏ)
 esel.small_image = escape('http://caobang83.webng.com/playlist/anhnho.jpg');      //   đường dẫn hình ảnh nằm dưới mép giấy (khi chưa rê chuột)
 esel.big_path = 'http://caobang83.webng.com/playlist/bloggiaovienthaibinhtb.swf';                                //   đường dẫn file flash lúc kéo mép giấy
 esel.big_image = escape(' http://trunghoalan.110mb.com/cc.jpg');     //   đường dẫn file quảng cáo chính
   
   
 // KHÔNG chỉnh gì thêm ở dưới này---------------FINISHED----STOP---------------------------------------------------
   
 esel.small_width = '100';
 esel.small_height = '100';
 esel.small_params = 'ico=' + esel.small_image;
 esel.big_width = '650';
 esel.big_height = '650';
 esel.big_params = 'big=' + esel.big_image + '&ad_url=' + esel.ad_url;
 function sizeup987(){
        document.getElementById('eselcornerBig').style.top = '0px';
        document.getElementById('eselcornerSmall').style.top = '-1000px';
 }
 function sizedown987(){
      document.getElementById("eselcornerSmall").style.top = "0px";
  document.getElementById("eselcornerBig").style.top = "-1000px";
 }
 esel.putObjects = function () {
 document.write('<div id="eselcornerSmall" style="position:absolute;width:'+ esel.small_width +'px;height:'+ esel.small_height +'px;z-index:9999;right:0px;top:0px;">');
 document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
 document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"');
 document.write(' id="eselcornerSmallObject" width="'+esel.small_width+'" height="'+esel.small_height+'">');
 document.write(' <param name="allowScriptAccess" value="always"/> ');
 document.write(' <param name="movie" value="'+ esel.small_path +'?'+ esel.small_params +'"/>');
 document.write(' <param name="wmode" value="transparent" />');
 document.write(' <param name="quality" value="high" /> ');
 document.write(' <param name="FlashVars" value="'+esel.small_params+'"/>');
 document.write('<embed src="'+ esel.small_path + '?' + esel.small_params +'" name="eselcornerSmallObject" wmode="transparent" quality="high" width="'+ esel.small_width +'" height="'+ esel.small_height +'" flashvars="'+ esel.small_params +'" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
 document.write('</object></div></script>');
 document.write('<div id="eselcornerBig" style="position:absolute;width:'+ esel.big_width +'px;height:'+ esel.big_height +'px;z-index:9999;right:0px;top:0px;">');
 document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
 document.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"');
 document.write(' id="eselcornerBigObject" width="'+ esel.big_width +'" height="'+ esel.big_height +'">');
 document.write(' <param name="allowScriptAccess" value="always"/> ');
 document.write(' <param name="movie" value="'+ esel.big_path +'?'+ esel.big_params +'"/>');
 document.write(' <param name="wmode" value="transparent"/>');
 document.write(' <param name="quality" value="high" /> ');
 document.write(' <param name="FlashVars" value="'+ esel.big_params +'"/>');
 document.write('<embed src="'+ esel.big_path + '?' + esel.big_params +'" id="eselcornerBigEmbed" name="eselcornerBigObject" wmode="transparent" quality="high" width="'+ esel.big_width +'" height="'+ esel.big_height +'" flashvars="'+ esel.big_params +'" swliveconnect="true" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
 document.write('</object></div>');
 setTimeout('document.getElementById("eselcornerBig").style.top = "-1000px";',1000);
 }
 esel.putObjects();