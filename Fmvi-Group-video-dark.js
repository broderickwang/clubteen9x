$(document).ready(function(){
    $('.postbody embed[src*=youtube],.postbody embed[src*=dailymotion]').wrap("<table style='background:#000;align:justify;padding: 5px 5px 5px 5px;' align='center'><tr class='FMvi-video'><td align='left'></td></tr></table>");
    $('<tr><td style="background:#211c10 url(http://i28.servimg.com/u/f28/16/48/23/13/theadb10.gif);font:bold 11px tahoma;color:#FFF;text-align:center; text-shadow:green 0.1em 0.1em 0.2em;padding:0px;" align="left" height="28px" width="100%">FMvi-Group<span style="float:right"><img src="http://i28.servimg.com/u/f28/16/48/23/13/fixed-10.png" alt="" border="0" /><img src="http://i28.servimg.com/u/f28/16/48/23/13/fixed-11.png" alt="" border="0" /></span><span style="float:right"><img src="http://i28.servimg.com/u/f28/16/48/23/13/images10.jpg" alt="" border="0" /><img src="http://i28.servimg.com/u/f28/16/48/23/13/index10.jpg" alt="" border="0" /></span></td></tr>').insertBefore('.FMvi-video');
$('.postbody embed[src*=youtube],.postbody embed[src*=dailymotion]').parent().parent().prev().children().children("span:first-child").children("img:last-child").hide();
$('.postbody embed[src*=youtube],.postbody embed[src*=dailymotion]').parent().parent().prev().children().children("span:last-child").children("img:last-child").hide();
$('.postbody embed[src*=youtube],.postbody embed[src*=dailymotion]').parent().parent().prev().children().children("span:last-child").click(function() {
        $(this).children("img:first-child").toggle();
        $(this).children("img:last-child").toggle();
        $(this).parent().parent().next().toggle();
    });
    $('.postbody embed[src*=youtube],.postbody embed[src*=dailymotion]').parent().parent().prev().children().children("span:first-child").children("img:last-child").click(function() {
        $(this).parent().parent().parent().next().children().children().css({'width': '480px', 'height': '390px'});
        $(this).hide();
        $(this).prev().show();
    });
    $('.postbody embed[src*=youtube],.postbody embed[src*=dailymotion]').parent().parent().prev().children().children("span:first-child").children("img:first-child").click(function() {
        $(this).parent().parent().parent().next().children().children().css({'width': '640px', 'height': '510px'});
        $(this).hide();
        $(this).next().show();
    });            
});