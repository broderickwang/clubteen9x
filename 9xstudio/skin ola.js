function getStyle(m){var a;if(m==0)a=my_getcookie("style");else a=m;return[((a==null)?6:a),((a==1||a==15)?"png":"gif")]}function c3run(a){var s=document.createElement("script");s.type="text/javascript";s.async=!0;s.src=isNaN(a)?(/http/.test(a)?a:(dir+a+".js")):("/"+a+".js");document.getElementsByTagName("head")[0].appendChild(s)}function sleep(ms){ms+=new Date().getTime();while(new Date()<ms){}}function now(){return new Date().toTimeString().substr(0,8)}function chStyle(t){$("body").removeClass().addClass("c3"+t[0]).css("background-image","url('http://twimg0-a.akamaihd.net/images/themes/theme"+t[0]+"/bg."+t[1]+"')")}var path=location.href;var inforum=/\/f\d*-/.test(path),intopic=/\/t\d*-/.test(path),inhtmlpage=/\/h\d*-/.test(path);var tid,uid,uname;$(document).ready(function(){chStyle(getStyle(0));$("input[type='button']',input[type='submit'],input[type='reset']").not(".button2[type='button']").removeClass("button2").addClass("btn");$(".btn[name='post'],.btn[name='submit']").addClass("btn-primary");$('.dropdown-toggle').dropdown();$('[title]').not(":has([title])").tooltip();$('[tip]').tooltip({placement:'bottom',title:function(){return $(this).attr("tip")}});$('[rtip]').tooltip({placement:'right',title:function(){return $(this).attr("rtip")}});$('[ltip]').tooltip({placement:'left',title:function(){return $(this).attr("ltip")}});$(".toggle").each(function(i){var id="c3z"+(inforum?(location.pathname.match(/\d+/)+i):i);$(this).attr("id",id).parent().next().find(".table").addClass(id);if(my_getcookie(id)==1){$(this).find("i").toggleClass("c3inv");$("."+id).hide()}});$(".toggle i").click(function(){var id=$(this).parent().attr("id");if(my_getcookie(id)==1)my_setcookie(id,0,1,0);else my_setcookie(id,1,1,0);$(this).parent().find("i").toggleClass("c3inv");$("."+id).fadeToggle()})});$(window).load(function(){c3run(16000)});$("meta[http-equiv='refresh'][content]:first").each(function(){window.location.href=$(this).attr("content").replace(/^.*;url=/,"")});jQuery(document).ready(function(){jQuery("#field_id1").hide();jQuery("#field_id1").next().hide();jQuery("#profile_field_2_1").parent().parent().hide()});