$(function(){$(".capnhatsta").click(function(){if($(this).attr("alt")=="chan"){$(this).parent().removeClass("open");$(this).attr("alt","1")}else{$(this).attr("alt","chan");$(this).parent().addClass("open")}$("#statustb").load("/u"+$(".depgiaiketao a").attr("href").split("u=")[1]+" input#profile_field_13_-8",function(a){$("#statusinput").val($("#statustb input").val());$("#statustb").empty()});return false});if($("#heheava").length){$(".c3avatar").html($("#heheava").html());my_setcookie("avatar",$(".c3avatar img").attr("src"),0,0)}else{$(".c3avatar").html("<img src="+my_getcookie("avatar")+" />")}$(".c3username").html($(".depgiaiketao a").html());$("a.c3userlink").attr("href","/u"+$(".depgiaiketao a").attr("href").split("u=")[1]);if($("#i_icon_mini_new_message").length){pm=$("#i_icon_mini_new_message").attr("alt").match(/\d+/);$(".noticon.newpm").text(pm).fadeIn("slow")}else $("a#newmes").attr("href","/privmsg?folder=inbox");$("#newmes").click(function(){pm=Number(pm);if($("#pmload").length){$.get("/privmsg?folder=inbox",function(data){$("#pmload").fadeOut("slow").remove();$(data).find("td.tdtopics:lt("+pm+")").each(function(){var p=$(this).find("a:first").attr("href");var s=$(this).find("a:last").html();var c=$(this).text().replace('by','-').split(" - ");$("ul.newpms").prepend("<li><a href='"+p+"' rtip='"+c[2]+"'><b>"+c[0]+"</b> từ "+s+"</b></a></li>");$('[rtip]').tooltip({placement:'right',title:function(){return $(this).attr("rtip")}})})})}})});function statusup(){var name=document.getElementById("statusinput").value;if(name.length>6){var uid=$(".depgiaiketao a").attr("href").split("u=")[1];var c="active=1&user="+uid,d=document.getElementById("logout").href,d=d.substring(d.indexOf("tid=")+4,d.indexOf("&key")),c=c+('&tid='+d+'&content=[["profile_field_13_-8", "'+name+'"]]&id=8');jQuery.post("/ajax_profile.forum?jsoncallback=jQuery1",c,function(a){0<a.indexOf("-8")?(document.getElementById("statustb").innerHTML='Cập nhật thành công <img src=http://r20.imgfast.net/users/2012/10/88/45/smiles/989655519.gif>'):document.getElementById("statustb").innerHTML='Lại đi em!'})}else{document.getElementById("statustb").innerHTML="Hơi Bị Ngắn Đấy <img src=http://r20.imgfast.net/users/2012/10/88/45/smiles/761190430.gif><br>Trên 6 kí tự nhá ."}}var prefixes=["Âm Nhạc","Chém Gió","Radio","Clip Hài","Tin Tức","Thông Báo","Hình Vui","Quảng Cáo","♥"];var _pm=false;var chk=false;function toMenu(a){var htmlpre='<select style="margin-right:5px" id="prefix" size="1"><option value="">(None)</option>';for(i in a)htmlpre+='<option value="'+a[i]+'">'+a[i]+'</option>';htmlpre+='</select>';return htmlpre}function checkpre(ar,input){for(i in ar){var p=new RegExp("\\"+ar[i],"g");var title=input.substr(0,input.indexOf(']'));if(p.test(title))return ar[i]}return""}$(function(){if(_pm)chk=/\privmsg/.test(location.href);if(/\/post/.test(location.href)||chk){$(toMenu(prefixes)).insertBefore("input[name=subject][type=text]");var mw=$("#prefix").width()+5;$("input[name=subject]").css("width",$("input[name=subject]").width()-mw);var t=$("[name=subject]").val();var cur=checkpre(prefixes,t);if(cur!=""){$("[value="+cur+"]").attr("selected","selected");$("input[name=subject]").val(t.replace('['+cur+']','').trim())}$("input[name=post]").click(function(){var sub=$("input[name=subject]").val().trim();if(sub!=""&&$("#prefix").val()!="")$("input[name=subject]").val("["+$("#prefix").val()+"] "+sub)})}});