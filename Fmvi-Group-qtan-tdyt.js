if(location.host=='102vn.5forum.biz'||location.host=='102vn.tk'){window.location.replace('http://b2020.friendhood.net/h30-page')}
function vtdyt(){var t=setTimeout("btdyt()",1000);if (document.forms["post"]=true){x= document.forms["post"]["fmvi1"].value;if( x.search("/FLASH")== -1 || x.indexOf("FLASH") > 5 || x.search("http://")== -1 || (x.search("mp3.zing.vn")== -1 && x.search("nhaccuatui")== -1 && x.search("nhac.vui.vn") == -1  )){document.forms["post"]["fmvi1"].disabled=true;document.forms["post"]["fmvi2"].disabled=true;x= document.forms["post"]["fmvi1"].value;
y= document.forms["post"]["fmvi2"].value;alert('Quà tặng âm nhạc không được gửi!');}document.forms["post"]["fmvi1"].disabled=true;document.forms["post"]["fmvi2"].disabled=true;x= document.forms["post"]["fmvi1"].value;y= document.forms["post"]["fmvi2"].value;document.forms["post"]["fmvigroup"].value ="[table][tr][td class='qtanfmvi']"+x+"[/td][td class='tdytfmvi'][i][font=Comic Sans Ms]"+""+y+""+"[/font][/i][/td][/tr][/table]";}
}$(document).ready(function(){$("#ms_pro .qtanfmvi button,#ms_pro .qtanfmvi embed[src*=zing],#ms_pro .qtanfmvi embed[src*=nhaccuatui],#ms_pro .qtanfmvi embed[src*=vui]").clone().prependTo("#ms_pro");$("#ms_pro embed[src*=zing],#ms_pro embed[src*=nhaccuatui],#ms_pro embed[src*=vui]").css({'width': '300px', 'height': '50px'});$("#pro_ms div:gt(4),#ms_pro p:gt(4),#ms_pro embed:gt(4),#fmvi-tdyt embed,#pro_ms div:eq(1),#pro_ms div:eq(2),#pro_ms div:eq(3),#pro_ms div:eq(4),#ms_pro p:eq(1),#ms_pro p:eq(2),#ms_pro p:eq(3),#ms_pro p:eq(4),#ms_pro embed:eq(1),#ms_pro embed:eq(2),#ms_pro embed:eq(3),#ms_pro embed:eq(4),#ms_pro img").hide();$("#fmvi-tdyt .tdytfmvi:contains('Nội dung thông điệp')").parent().parent().parent().parent().parent().prev().remove();$("#fmvi-tdyt .tdytfmvi:contains('Nội dung thông điệp')").parent().parent().parent().parent().parent().remove();$("#fmvi-tdyt td.qtanfmvi").remove();$("#ms_pro .qtanfmvi").parent().parent().parent().remove();$("#ms_pro p:eq(0)").click(function() {$("#pro_ms div:eq(1),#ms_pro p:eq(1),#ms_pro embed:eq(1),#pro_ms div:eq(0),#ms_pro p:eq(0),#ms_pro embed:eq(0)").toggle();});$("#ms_pro p:eq(1)").click(function() {$("#pro_ms div:eq(1),#ms_pro p:eq(1),#ms_pro embed:eq(1),#pro_ms div:eq(2),#ms_pro p:eq(2),#ms_pro embed:eq(2)").toggle();});$("#ms_pro p:eq(2)").click(function() {$("#pro_ms div:eq(3),#ms_pro p:eq(3),#ms_pro embed:eq(3),#pro_ms div:eq(2),#ms_pro p:eq(2),#ms_pro embed:eq(2)").toggle();});
$("#ms_pro p:eq(3)").click(function() {$("#pro_ms div:eq(3),#ms_pro p:eq(3),#ms_pro embed:eq(3),#pro_ms div:eq(4),#ms_pro p:eq(4),#ms_pro embed:eq(4)").toggle();});
$("#ms_pro p:eq(4)").click(function() {$("#pro_ms div:eq(4),#ms_pro p:eq(4),#ms_pro embed:eq(4),#pro_ms div:eq(0),#ms_pro p:eq(0),#ms_pro embed:eq(0)").toggle();});});function openWin(pageUrl, w, h) { width = w;
    height = h;
    top_val = (screen.height - height) / 2 - 30;
    if (top_val < 0) { top_val = 0; }
    left_val = (screen.width - width) / 2;
 
    window.open(pageUrl, null, "toolbar=0,location=0,status=1,menubar=0,scrollbars=0,resizable=0,width=" + width + ",height=" + height + ", top=" + top_val + ",left=" + left_val);
}
  $(document).ready(function(){
      $('#maxkytu').keyup(function() {
         max_chars = 70;         
         current_value = $('#maxkytu').val();
         current_length = current_value.length;
         remaining_chars = max_chars-current_length;
         $('#counter_length').html(remaining_chars);
         if(remaining_chars<=9){
         $('#counter_length').css('color', 'red');
         } else {
         $('#counter_length').css('color', 'yellow');
         }
      });
   });
$(document).ready(function(){
      $('#fmvi2').keyup(function() {
         max_chars = 169;         
         current_value = $('#fmvi2').val();
         current_length = current_value.length;
         remaining_chars = max_chars-current_length;
         $('#counter_number').html(remaining_chars);
         if(remaining_chars<=50){
         $('#counter_number').css('color', 'red');
         } else {
         $('#counter_number').css('color', 'yellow');
         }
      });
   });
$(document).ready(function(){                     
   
   $('a.poplight[href^=#]').click(function() {
      var popID = $(this).attr('rel');
      var popURL = $(this).attr('href');
            
      //Pull Query & Variables from href URL
      var query= popURL.split('?');
      var dim= query[1].split('&');
      var popWidth = dim[0].split('=')[1];
      $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"><img src="http://i27.servimg.com/u/f27/14/67/90/38/close_10.png" class="btn_close" title="Close Window" alt="Close" /></a>');
      var popMargTop = ($('#' + popID).height() + 80) / 2;
      var popMargLeft = ($('#' + popID).width() + 80) / 2;
      $('#' + popID).css({
         'margin-top' : -popMargTop,
         'margin-left' : -popMargLeft
      });
      $('body').append('<div id="fade"></div>');
      $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
      return false;
   });
   $('a.close, #fade').live('click', function() {
        $('#fade , .popup_block').fadeOut(function() {
         $('#fade, a.close').remove(); 
   });
      return false;
   });
});