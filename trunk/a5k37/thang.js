change = "#mtlast";
  jQuery(".c3zonee:contains('»')").remove();
jQuery(document).ready(function() {
 $(function(){$("#number").change(function(){
  sel = $(this).val();
  if (sel=='v1')$(change).animate({height:"237px"},600);
  else if (sel=='v2')$(change).animate({height:"437px"},600);
  else if (sel=='v3')$(change).animate({height:"537px"},600);
  else if (sel=='v4')$(change).animate({height:"637px"},600);
  });
  });
});



$(function() {$(".newltopic").each(function(a) {$(this);$(this).attr("id", "newlast" + a);a = $(this).attr("id");$(this).find(".ltitletopic").next().attr("alt", a);$(this).find(".ltitletopic").attr("alt", a);$(this).find(".lpostertopic").attr("alt", a);$(this).find(".ltimetopic").attr("alt", a);$(this).hover(function() {var b = $(this).find(".ltitletopic[alt='" + a + "']").text(),tieude = $(this).find(".ltitletopic[alt='" + a + "']").text(),d = $(this).find(".ltimetopic[alt='" + a + "']").text(),thoigian = $(this).find(".ltimetopic[alt='" + a + "']").text(),e = b.replace(/ /gi, "+"),f = $(this).find(".ltitletopic[alt='" + a + "']").next();f.load("/search?mode=searchbox&search_keywords=" + e + '&show_results=topics tr.layemno:contains("' + b + '"):contains("' + d + '")', function() {var d = $(this).find("#tacgiamt a[href^='/u']").text(),e = $(this).find(".row3:first").text(),f = $(this).find(".row2:first").text(),g = $(this).find(".row2:last").text(),j = $(".lpostertopic[alt='" + a + "']").text();$(this).html('<span style="background:#94A2FF;color:#000">Info- MTMY</span><br><span class="tiplFMvi">Tiêu &#273;&#7873;:</span> ' + tieude + '<br><span class="tiplFMvi">T&#7841;o ch&#7911; &#273;&#7873;:</span> ' + d + '<br><span class="tiplFMvi">G&#7917;i cu&#7889;i:</span> ' + j + '<br><span class="tiplFMvi">Vào lúc:</span> ' + thoigian + '<br><span class="tiplFMvi">Thu&#7897;c chuyên m&#7909;c:</span> ' + e + '<br><span class="tiplFMvi">L&#432;&#7907;t xem:</span> ' + g + '<br><span class="tiplFMvi">Tr&#7843; l&#7901;i:</span> ' + f + "<br>");$(".ltitletopic").mousemove(function(e){var a = $(this).next();a.show();}).mouseleave(function(){$(".tooltipFMvi").hide()})})})})});


