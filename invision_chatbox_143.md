Chào đón Giáng sinh sắp tới, Cáo share cho mọi người bản dùng thử Chatbox 1.4.3
Nói là dùng thử nhưng dùng tốt í mà IFC có dùng rồi đấy... cơ mà nặng quá nên bỏ rồi

Cho mọi phiên bản

Đấy nhá~~~ Nói rồi đấy~~~ Nặng đấy nhá
Ai muốn làm thì bắt tay vào nào:



Demo: http://invision.chinhphuc.info/h103-page

Hướng dẫn: Trả lời hoặc bấm Thank cho bài viết này để xem toàn bộ nội dung.

Bước 1: ACP - Modules - Chatbox - Configuration:
ChatBox configuration

> Activate the ChatBox: Yes
> ChatBox display: Do not display



Bước 2: ACP - Display - Avatars - Smilies - Add:
Hình 1:

> Smilie Code: **:buzz:**
> Smilie Emotion: **:buzz:**
> Add smile mớí bạn chọn một hình ảnh từ máy tính của bạn, có thể dùng ảnh này ![http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif](http://r12.imgfast.net/users/1215/11/75/00/smiles/2270249841.gif)


Hình 2:

> Smilie Code: **:login:**
> Smilie Emotion: **:login:**
> Add smile mớí bạn chọn một hình ảnh từ máy tính của bạn, có thể dùng ảnh này
![http://leeds.netimpact.org.uk/wp-content/themes/newscast/images/skin1/login.png](http://leeds.netimpact.org.uk/wp-content/themes/newscast/images/skin1/login.png)


Hình 3:

> Smilie Code: **:logout:**
> Smilie Emotion: **:logout:**
> Add smile mớí bạn chọn một hình ảnh từ máy tính của bạn, có thể dùng ảnh này
![http://strong-bag.ucoz.org/logout-1-.gif](http://strong-bag.ucoz.org/logout-1-.gif)



Bước 3: ACP - Modules - HTML & JAVASCRIPT - HTML pages management - Create new HTML page:

> Title **: Script Chatbox 1.4.3
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** : ```
function submitmsg(params){document.post.sent.value=document.post.message.value;code=document.post.sent.value;if(code.slice(0,5)=="/chat"){var viewUrr=code.slice(6);var chatyy='* '+my_getcookie('usernamefmvi')+' đã tắt chức năng chat riêng với thành viên khác';if($("#chatbox .msg:contains('"+chatyy+"')").length==0){if(viewUrr==my_getcookie("usernamefmvi")){$("#tipchatbox14").text("Bạn không thể thực hiện thao tác này với chính mình");document.post.sent.value='/me không thể hiển thị riêng tin nhắn với chính mình'}else if($("#chatbox .msg:contains('* "+my_getcookie("usernamefmvi")+" đã hạn chế tin nhắn của mình đối với thành viên "+viewUrr+"')").length>0){$("#tipchatbox14").text("Không thể thực hiện vì bạn đã hạn chế "+viewUrr+" đọc tin của mình");document.post.sent.value='/me đã hạn chế '+viewUrr+' nên không thể thực hiện thao tác này'}else if(viewUrr=="{off}"){$("#tipchatbox14").text("Bạn đã tắt chức năng chat riêng với thành viên khác");document.post.sent.value='/me đã tắt chức năng chat riêng với thành viên khác'}else{$("#tipchatbox14").text("Từ lúc này, chỉ thành viên "+viewUrr+" được phép xem tin của bạn");document.post.sent.value='/me đã ẩn tin nhắn của mình, chỉ hiển thị với '+viewUrr}}else{$("#tipchatbox14").text("Bạn đã hủy chức năng chat riêng nên không thể lặp lại thao tác này");document.post.sent.value='/me đã hủy chức năng chat riêng nên không thể lặp lại thao tác này'}}else if(code.slice(0,5)=="/hide"){var viewU=code.slice(6);var hideyy='* '+my_getcookie('usernamefmvi')+' đã tắt chức năng hạn chế tin nhắn với thành viên khác';if($("#chatbox .msg:contains('"+hideyy+"')").length==0){if(viewU==my_getcookie("usernamefmvi")){$("#tipchatbox14").text("Bạn không thể chặn tin nhắn của chính mình");document.post.sent.value='/me không thể thực hiện thực hiện chặn tin nhắn của chính mình'}else if(viewU=="{off}"){$("#tipchatbox14").text("Bạn đã tắt chức năng hạn chế tin nhắn với thành viên khác");document.post.sent.value='/me đã tắt chức năng hạn chế tin nhắn với thành viên khác'}else if($("#chatbox .msg:contains('* "+my_getcookie("usernamefmvi")+" đã ẩn tin nhắn của mình, chỉ hiển thị với "+viewU+"')").length>0){$("#tipchatbox14").text("Không thể thực hiện vì bạn đã cho phép "+viewU+" đọc tin của mình");document.post.sent.value='/me đã cho phép '+viewU+' nên không thể thực hiện thao tác này'}else if($("#chatbox .msg:contains('* "+my_getcookie("usernamefmvi")+" đã hạn chế tin nhắn của mình đối với thành viên "+viewU+"')").length>0){$("#tipchatbox14").text("Không thể thực hiện vì bạn đã hạn chế "+viewU+" đọc tin của mình");document.post.sent.value='/me đã hạn chế '+viewU+' nên không thể thực hiện thao tác này'}else{$("#tipchatbox14").text("Bạn đã ngăn cấm thành viên "+viewU+" đọc tin của mình");document.post.sent.value='/me đã hạn chế tin nhắn của mình đối với thành viên '+viewU}}else{$("#tipchatbox14").text("Bạn đã hủy chức năng ẩn tin nhắn nên không thể lặp lại thao tác này");document.post.sent.value='/me đã hủy chức năng ẩn tin nhắn nên không thể lặp lại thao tác này'}}else if(code.slice(0,3)=="/pm"){var onlyU=code.slice(4,code.indexOf("{")-1);var onlytext=code.slice(code.indexOf("{")+1,code.indexOf("}"));if(code.indexOf("{")==-1||code.indexOf("}")==-1){document.post.sent.value='';$("#tipchatbox14").text("Sai cú pháp, gõ /help để xem lại hướng dẫn gửi tin riêng")}else{$("#tipchatbox14").text("Bạn vừa gửi tin nhắn riêng cho "+onlyU);document.post.sent.value='[Tin nhắn riêng cho '+onlyU+'][table summary="'+onlyU+'" class="only" border="0"][tr][td]'+onlytext+'[/td][/tr][/table]'}}else if(code.slice(0,11)=="/fullscreen"){if(top.location!="http://invision.chinhphuc.info/h12-"){document.post.sent.value='/me đã chọn chế độ hiển thị mở rộng cho ChatBox';$("#tipchatbox14").text("Bạn đã chọn chế độ hiển thị mở rộng cho ChatBox")}else{$("#tipchatbox14").text("Bạn không thể bật chế độ hiển thị mở rộng ChatBox lúc này");document.post.sent.value=''}}else if(code.slice(0,7)=="/window"){if(top.location!="http://invision.chinhphuc.info/h12-"){document.post.sent.value='/me đã chọn chế độ hiển thị thu gọn cho ChatBox';$("#tipchatbox14").text("Bạn đã chọn chế độ hiển thị thu gọn cho ChatBox")}else{$("#tipchatbox14").text("Bạn không thể bật chế độ hiển thị thu gọn ChatBox lúc này");document.post.sent.value=''}}else if(code.slice(0,6)=="/popup"){if(top.location!="http://invision.chinhphuc.info/h12-"){document.post.sent.value='/me đã sử dụng Pop-up ChatBox';$("#tipchatbox14").text("Bạn đã sử dụng Pop-up ChatBox")}else{$("#tipchatbox14").text("Bạn không thể sử dụng Pop-up ChatBox lúc này");document.post.sent.value=''}}else if(code.slice(0,5)=="/help"){document.post.sent.value='/me đang xem [color=red]hướng dẫn sử dụng chatbox[/color][table class=helpchat][tr][td][/td][/tr][tr][td][hr]/help : Xem thông tin trợ giúp[/td][/tr][tr][td]/close : Đóng danh sách thành viên[/td][/tr][tr][td]/open : mở danh sách thành viên[/td][/tr][tr][td]/fullscreen : Hiển thị mở rộng ChatBox[/td][/tr][tr][td]/window : Hiển thị thu gọn ChatBox[/td][/tr][tr][td]/popup : Hiển thị Pop-up ChatBox[/td][/tr][tr][td]/gift : Tặng quà trên ChatBox[/td][/tr][tr][td][hr]/yahoo [nick yahoo] : Lấy avatar yahoo[/td][/tr][tr][td]/avatar [nick forum] : Lấy avatar thành viên[/td][/tr][tr][td]/friend [nick forum] : Đăng ký kết bạn[/td][/tr][tr][td]/foe [nick forum] : Thêm vào sổ đen[/td][/tr][tr][td]/track [nick forum] : Theo dõi tin nhắn[/td][/tr][tr][td][hr]/hide [nick forum]: Hạn chế thành viên đọc tin[/td][/tr][tr][td]/chat [nick forum]: Chỉ hiển thị tin với thành viên[/td][/tr][tr][td]/pm [nick forum] {[Nội dung]}: Gửi tin riêng cho thành viên[/td][/tr][/table]';$("#tipchatbox14").text("Bạn đang xem hướng dẫn sử dụng ChatBox")}else if(code.slice(0,5)=="/open"){if($("#chatbox_onlyU").css("display")!="none"){$("#chatbox_members").css("left","361px")}else{$("#chatbox_members").css("left","0")}my_setcookie("chatboxver1-4","open",true);if($("#chatbox_members").width()==0){document.post.sent.value='';$("#tipchatbox14").text("Bạn đã mở danh sách thành viên trên ChatBox");$("#chatbox_members").animate({width:'+=180'},500);$("#chatbox").animate({left:'+=180'},500)}else{document.post.sent.value='';$("#tipchatbox14").text("Danh sách thành viên trên ChatBox hiện đang mở")}}else if(code.slice(0,6)=="/close"){my_setcookie("chatboxver1-4","close",true);if($("#chatbox_members").width()==180){document.post.sent.value='';$("#tipchatbox14").text("Bạn đã đóng danh sách thành viên");$("#chatbox_members").animate({width:'-=180'},500);$("#chatbox").animate({left:'-=180'},500)}else{document.post.sent.value='';$("#tipchatbox14").text("Danh sách thành viên trên ChatBox hiện đang đóng")}}else if(code.slice(0,6)=="/yahoo"){var yahoo=document.post.sent.value.slice("7");document.post.sent.value="/me nhận được avatar yahoo của [color=yellow]"+yahoo+"[/color] [img]http://img.msg.yahoo.com/avatar.php?yids="+yahoo+"[/img]";$("#tipchatbox14").text("Bạn đã lấy avatar yahoo của "+yahoo+" thành công")}else if(code.slice(0,7)=="/avatar"){var avafor=document.post.sent.value.slice("8");document.post.sent.value='';$("<div />").load("/profile.forum?mode=viewprofile&u="+avafor.replace(/ /g,'+')+" #profile-advanced-right .module:first .main-content img:first",function(){var vs=$(this).find("img").attr("src");if($(this).find("img").length==1){document.post.sent.value="/me nhận được avatar forum của [color=yellow]"+avafor+"[/color] [img]"+vs+"[/img]";$("#tipchatbox14").text("Bạn đã lấy avatar forum của "+avafor+" thành công")}else{document.post.sent.value='';$("#tipchatbox14").text("Nickname "+avafor+" không tồn tại, vui lòng kiểm tra lại")};submitchat142()})}else if(code.slice(0,7)=="/friend"){var friend=document.post.sent.value.slice("8");$("#tipchatbox14").text("Bạn vừa đăng ký kết bạn với "+friend);$.post("/profile?mode=editprofile&page_profil=friendsfoes",{'friend':document.post.sent.value.slice("8")},function(data){var namefr=$(data).find(".frm-set dd:eq(1) #friend").val();var dtfriend=$(data).find(".frm-set dd:eq(1) span").text();if(dtfriend=="The member that you wish to add is already present in Foes list.You need to delete the friend from this list before to add him to the other one."){$("#tipchatbox14").text("Bạn không thể kết bạn với "+namefr+" vì người này đang ở trong danh sách đen");document.post.sent.value="/me không thể kết bạn với [color=green]"+namefr+"[/color] vào lúc này"}else if(dtfriend=="Request done"){$("#tipchatbox14").text("Bạn đã thực hiện đăng ký kết bạn thành công");document.post.sent.value="/me đã thực hiện đăng ký kết bạn thành công"}else if(dtfriend=="Request already done"){$("#tipchatbox14").text("Bạn đã đăng ký kết bạn với "+namefr+" từ trước");document.post.sent.value="/me đã đăng ký kết bạn với [color=green]"+namefr+"[/color] từ trước"}else if(dtfriend=="The member that you wish to add is already present in Friends list."){document.post.sent.value="/me đã kết bạn với [color=green]"+namefr+"[/color] trước đây";$("#tipchatbox14").text("Bạn đã kết bạn với "+namefr+" từ trước")}else if(dtfriend=="Member added"){$("#tipchatbox14").text("Bạn và "+namefr+" vừa trở thành bạn bè với nhau");document.post.sent.value="/me và [color=green]"+namefr+"[/color]  vừa trở thành bạn bè với nhau"}else if(dtfriend=="This user does not exist"){$("#tipchatbox14").text("Nickname "+namefr+" không tồn tại, vui lòng kiểm tra lại");document.post.sent.value="/me không thể kết bạn với [color=green]"+namefr+"[/color] vào lúc này"}else if(dtfriend=="You cannot add yourself in this list"){$("#tipchatbox14").text("Bạn không thể kết bạn với chính mình");document.post.sent.value="/me không thể kết bạn với chính mình"};submitchat142()});document.post.sent.value="/me vừa đăng ký kết bạn với [color=green]"+friend+"[/color]"}else if(code.slice(0,4)=="/foe"){var ffoe=document.post.sent.value.slice("5");$("#tipchatbox14").text("Bạn vừa lựa chọn thêm "+ffoe+" vào sổ đen của mình");$.post("/profile?mode=editprofile&page_profil=friendsfoes",{'foe':document.post.sent.value.slice("5")},function(data){var foefr=$(data).find(".frm-set dd:eq(5) #foe").val();var dtfoe=$(data).find(".frm-set dd:eq(5) span").text();if(dtfoe=="The member that you wish to add is already present in Friends list.You need to delete the friend from this list before to add him to the other one."){$("#tipchatbox14").text("Không thể thực hiện vì "+foefr+" đang là bạn bè của bạn");document.post.sent.value=''}else if(dtfoe=="The member that you wish to add is already present in Foes list."){document.post.sent.value='';$("#tipchatbox14").text("Bạn đã thêm "+foefr+" vào sổ đen từ trước")}else if(dtfoe=="Member added"){$("#tipchatbox14").text("Bạn đã thêm người này vào sổ đen thành công");document.post.sent.value="/me đã thêm một thành viên forum vào sổ đen của mình"}else if(dtfoe=="This user does not exist"){$("#tipchatbox14").text("Nickname "+foefr+" không tồn tại, vui lòng kiểm tra lại")}else if(dtfoe.indexOf("You cannot add")!=-1){$("#tipchatbox14").text("Không thể đưa "+foefr+" vào sổ đen vì đây là thành viên ban quản lý")}else if(dtfoe=="You cannot add yourself in this list"){$("#tipchatbox14").text("Bạn không thể thêm chính mình vào danh sách đen")};submitchat142()});document.post.sent.value=''}else if(code.slice(0,6)=="/track"){var chmem=document.post.sent.value.slice("7");if(chmem.match(/(\S)+/g)==null){$("#tipchatbox14").text("Bạn chưa nhập nick thành viên muốn theo dõi");document.post.sent.value=''}else{openshare();if($("#chatbox_onlyU #tinchatrieng").length==0){$("#chatbox_onlyU").append('<h4 id="closemess" class="tieudeonlyu">Tin nhắn của <span style="color:#FFF"><strong id="tinnhacua">'+chmem+'</strong></span><span style="float:right" class="closechatrieng"><img title="Đóng" alt="Đóng" src="http://illiweb.com/fa/admin/icones/supprimer.png"/></span></h4><div id="tinchatrieng"></div>').show();document.post.sent.value="/me đã đăng ký theo dõi tin nhắn của [color=yellow]"+chmem+"[/color]";$("#tipchatbox14").text("Bạn đã đăng ký theo dõi tin nhắn của "+chmem)}else{document.post.sent.value='/me đã ngưng theo dõi [color=cyan]'+$("#chatbox_onlyU #tinnhacua").text()+'[/color] và đăng ký xem tin nhắn của [color=yellow]'+chmem+'[/color]';$("#tipchatbox14").text("Bạn đã đăng ký theo dõi tin nhắn của "+chmem);$("#chatbox_onlyU #tinnhacua").text(chmem)};closeonlyu()}}else if(code.slice(0,5)=="/gift"){var txt=navigator.appVersion;var txte=txt.slice(txt.indexOf("MSIE")+5,txt.indexOf("MSIE")+7);if(txte<9){$("#tipchatbox14").text("Bạn không thể sử dụng chức năng này trên trình duyệt Internet Explorer"+txte)}else{if($("#giftchatbox").height()==0){$("#tipchatbox14").text("Bạn đã mở chức năng tặng quà trên ChatBox");quachat()}else{$("#tipchatbox14").text("Chức năng tặng quà trên ChatBox hiện đang mở")}};document.post.sent.value=''};submitchat142()}$(function(){my_setcookie("numbuzzchat",$("#chatbox .msg img[alt='buzz']").length,true);$("#chatbuzz img:first").click(function(){document.post.sent.value=':buzz:';submitchat142();$("#chatbuzz img").toggle();setTimeout('$("#chatbuzz img").toggle()',10000);$("#tipchatbox14").text("Lạm dụng nút BUZZ có thể bị ban nick trên ChatBox")});$("#chatbuzz img:last").click(function(){$("#tipchatbox14").text("Bạn không được phép BUZZ liên tiếp trong vòng 10 giây")});if(top.location=="http://invision.chinhphuc.info/h12-"){$("#tipchatbox14").html('Bạn đang sử dụng <font color="red">ChatBox ver 1.4.2</font> ở chế độ cửa sổ')};ajax_refresh_chatbox(params);$("#closegiftbox").click(function(){if($("#giftchatbox h4 input:checked").length==1&&$("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến'):has(a)").length>0||$("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến'):has(a)").length==0){$("#tipchatbox14").text("Bạn đã đóng chức năng tặng quà trên ChatBox");$("#giftchatbox").animate({height:'-=100'},500,function(){$("#giftchatbox").hide()});$("#chatbox, #chatbox_members, #chatbox_onlyU").animate({bottom:'-=100'},500)}else{$("#tipchat14").html('Hãy <font color="red">check vào ô bên cạnh</font> nếu muốn bỏ chức năng tự cập nhật quà tặng')}});if(my_getcookie("giftchatauto")=="no"){$("#giftchatbox h4 input").attr("checked",true)};$("#giftchatbox h4 input").click(function(){if($("#giftchatbox h4 input:checked").length==1){$("#tipchat14").html('<font color="red">Không sử dụng</font> chức năng tự cập nhật khi có quà tặng trên ChatBox');my_setcookie("giftchatauto","no",true)}else{$("#tipchat14").html('<font color="red">Sử dụng</font> chức năng tự cập nhật khi có quà tặng trên ChatBox');my_setcookie("giftchatauto","yes",true)}});$("#sendgiftchat img").hover(function(){if($("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến'):has(a)").length<5){var linktip;if($(this).attr("id")=="youtube"){linktip="http://www.youtube.com"}else if($(this).attr("id")=="nhaccuatui"){linktip="http://www.nhaccuatui.com"}else if($(this).attr("id")=="zingmp3"){linktip="http://mp3.zing.vn"}else if($(this).attr("id")=="trochoiviet"){linktip="http://www.trochoiviet.com"};$("#tipchat14").html('Sử dụng liên kết của <font color="red">'+linktip+'</font> trên thanh địa chỉ trình duyệt')}else{$("#tipchat14").html('<font color="red">Không</font> thể gửi thêm quà tặng ChatBox lúc này.')}},function(){if(my_getcookie("thongbaodatangqua")=="no"){$("#tipchat14").html('<font color="red">Bắt đầu</font> gửi quà cho bạn bè ngay trên ChatBox')}else{$("#tipchat14").html('Bạn chỉ được phép gửi <font color="red">một</font> món quà ChatBox vào lúc này')}});$("#sendgiftchat img").click(function(){if($("#sendgiftchat").width()==500&&$("#seachuserchat").width()==0){if($("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến'):has(a)").length<5&&my_getcookie("thongbaodatangqua")=="no"){var linkg,linkna;if($(this).attr("id")=="youtube"){linkg="http://www.youtube.com";linkna="Youtube"}else if($(this).attr("id")=="nhaccuatui"){linkg="http://www.nhaccuatui.com";linkna="Nhaccuatui"}else if($(this).attr("id")=="zingmp3"){linkg="http://mp3.zing.vn";linkna="Zingmp3"}else if($(this).attr("id")=="trochoiviet"){linkg="http://www.trochoiviet.com/games/module-pnFlashGames-display-id-";linkna="Trochoiviet"};$("#seachgiftchat td, #seachuserchat td").empty();$("#seachgiftchat td").append('<input class="'+linkna+'" name="'+linkg+'" size="30" type="text"/><button type="button"  id="chatfindgift" class="search"><img src="http://i48.servimg.com/u/f48/16/58/89/73/seach10.gif"/>Gift</button><button type="button" class="cancel"><img src="http://particletree.com/examples/buttons/cross.png" alt=""/> Cancel </button><button type="button" class="check"><img src="http://particletree.com/examples/buttons/tick.png" alt=""/> Ok </button>');$("#seachuserchat td").append('<input id="findchatu" name="userchat" size="30" type="text"/><button type="button"  id="chatfinduser" class="search"><img src="http://i48.servimg.com/u/f48/16/58/89/73/seach10.gif"/>User</button><button type="button" class="cancel"><img src="http://particletree.com/examples/buttons/cross.png" alt=""/> Cancel </button><button type="button" class="check"><img src="http://particletree.com/examples/buttons/tick.png" alt=""/> Ok </button>');$("#seachuserchat #chatfinduser").click(function(){if($("#seachuserchat #loadusergift select[name='username_list']").length==0){$("#seachuserchat #findchatu").hide().after('<div id="loadusergift"><img src="http://i48.servimg.com/u/f48/16/58/89/73/loadin11.gif" id="findusergich"/></div>');$("#seachuserchat #loadusergift").load('/search?mode=searchuser&search_username='+$("#seachuserchat #findchatu").val()+' select[name="username_list"]',function(){if($("#seachuserchat #loadusergift select[name='username_list'] option").length==1){var erouser=$("#seachuserchat #loadusergift select[name='username_list'] option:selected").val();if(erouser=="Không tìm thấy"||erouser=="No matches found."){$("#seachuserchat #findchatu").val("").fadeIn(1500)}else{$("#seachuserchat #findchatu").val($("#seachuserchat #loadusergift select[name='username_list'] option:selected").val()).fadeIn(1500)};$("#seachuserchat #loadusergift").remove()}else{$(this).hide().fadeIn(1000);$("#seachuserchat .check").click(function(){if($("#seachuserchat #loadusergift select[name='username_list']").length==1){$("#seachuserchat #findchatu").val($("#seachuserchat #loadusergift select[name='username_list'] option:selected").val())}})}})}else{$("#tipchat14").html('<font color="red">Chức năng tìm thành viên</font> hiện đang hoạt động')}});$("#seachgiftchat #chatfindgift").click(function(){var sgiftg=$("#seachgiftchat input").val();if(sgiftg!=""){openshare();if($("#chatbox_onlyU #ifraseach").length==0){$("#chatbox_onlyU").append('<h4 id="searchgiftg" class="tieudeonlyu">Search : <span style="color:#FFF"><strong id="sgiftgoogle">'+sgiftg+'</strong></span><span style="float:right" class="closechatrieng"><img title="Đóng" alt="Đóng" src="http://illiweb.com/fa/admin/icones/supprimer.png"></span></h4><div id="ifraseach"><iframe width="345px" height="1500px" frameborder="0" style="padding: 0pt; overflow: hidden;" src="http://www.fmvi.vn/h84-search?q=site:'+$("#seachgiftchat input").attr("name")+' '+sgiftg+'"></iframe></div>')}else{$("#chatbox_onlyU #sgiftgoogle").text(sgiftg);$("#chatbox_onlyU #ifraseach").html('<iframe width="345px" height="1500px" frameborder="0" style="display:none; padding: 0pt; overflow: hidden;" src="http://www.fmvi.vn/h84-search?q=site:'+$("#seachgiftchat input").attr("name")+' '+sgiftg+'"></iframe>')}$("#chatbox_onlyU #ifraseach iframe").load(function(){setTimeout(function(){setTimeout(function(){$("#chatbox_onlyU #ifraseach iframe").contents().find("#cse .gsc-control-wrapper-cse #resInfo-0").text("");var heightgsc=$("#chatbox_onlyU #ifraseach iframe").contents().find("body").height()-80;$("#chatbox_onlyU #ifraseach iframe").css("height",heightgsc+"px");$("#chatbox_onlyU #ifraseach iframe").contents().find("body").css("overflow","hidden")},1);$("#chatbox_onlyU #ifraseach iframe").contents().find("#cse .gsc-control-wrapper-cse .gsc-wrapper .gsc-resultsbox-visible .gsc-resultsRoot>div div.gsc-webResult").click(function(){$("#seachgiftchat input").val($(this).find("a.gs-title").attr("data-ctorig"));if($("#chatbox_onlyU .tieudeonlyu").length==1){$("#chatbox_onlyU").hide().empty();fmviclose()}else if($("#chatbox_onlyU .tieudeonlyu").length>1){$("#chatbox_onlyU #searchgiftg, #chatbox_onlyU #ifraseach").remove()}return false});$("#chatbox_onlyU #ifraseach iframe").fadeIn(1000)},1000)});closeonlyu()}else{$("#tipchat14").html('Bạn chưa nhập nội dung cần tìm, phải có <font color="red">ít nhất 1 ký tự</font> để bắt đầu');return false}});$("#seachuserchat input, #seachuserchat button").hover(function(){if($(this).attr("id")=="findchatu"){$("#tipchat14").html('<font color="red">Nhập nick</font> người bạn muốn gửi quà hoặc ký tự để bắt đầu tìm kiếm')}else if($(this).attr("class")=="check"){var dkf=my_getcookie("usernamefmvi"),vkf=$("#seachuserchat #findchatu").val();if(dkf==vkf){$("#tipchat14").html("Bạn <font color='red'>không</font> thể tự gửi quà cho mình");$("#seachuserchat #findchatu").val("")}else{$("#tipchat14").html('<font color="red">Xác nhận</font> nick người nhận quà')}}else if($(this).attr("class")=="cancel"){$("#tipchat14").html('<font color="red">Bỏ qua</font> việc nhập nick người nhận quà')}else if($(this).attr("class")=="search"){$("#tipchat14").html('<font color="red">Tìm nick</font> thành viên diễn đàn theo ký tự đã nhập. Dùng dấu * để đại diện cho một nhóm từ')}},function(){$("#tipchat14").html('Hãy <font color="red">nhập nick người nhận</font> quà hoặc bỏ qua nếu muốn gửi đến tất cả')});if($("#sendgiftchat").width()==500&&$("#seachuserchat").width()==0){$("#sendgiftchat").css("width","0");$("#seachuserchat").hide().css("width","500px").fadeIn(1500)};$("#seachuserchat button:not('.search')").click(function(){if($("#seachgiftchat").width()==0&&$("#seachuserchat").width()==500){$("#seachgiftchat").hide().css("width","500px").fadeIn(1500);$("#seachuserchat").css("width","0")}if($(this).attr("class")=="cancel"||$("#seachuserchat #findchatu").val()==""){$("#seachuserchat #findchatu").val("tất cả thành viên")};$("#tipchat14").html('Bạn đã chọn gửi quà đến <font color="red">'+$("#seachuserchat #findchatu").val()+'</font>')});$("#seachgiftchat input, #seachgiftchat button").hover(function(){if($(this).attr("class")=="check"){$("#tipchat14").html('<font color="red">Xác nhận</font> việc gửi quà tặng trên ChatBox')}else if($(this).attr("class")=="cancel"){$("#tipchat14").html('<font color="red">Hủy bỏ</font> việc gửi quà tặng trên ChatBox')}else if($(this).attr("class")=="search"){$("#tipchat14").html('<font color="red">Tìm kiểm</font> quà tặng theo các ký tự đã nhập')}else{$("#tipchat14").html('Sử dụng liên kết của <font color="red">'+linkna+'</font> trên thanh địa chỉ trình duyệt')}},function(){$("#tipchat14").html('<font color="cyan">Đây là bước cuối cùng để tặng một món quà trên ChatBox</font>')});$("#seachgiftchat .check").click(function(){var checkgift=$("#seachgiftchat input").attr("name");var tipcheck=$("#seachgiftchat input").attr("class");var sendgift=$("#seachgiftchat input").val();if(sendgift.indexOf("http://")!=0){sendgift="http://"+sendgift}if(sendgift.indexOf(checkgift)!=0){$("#tipchat14").html("Liên kết <font color='red'>"+tipcheck+"</font> bạn nhập vào không đúng")}else{document.post.sent.value="/me đã gửi một quà tặng [url="+sendgift+"] "+tipcheck+"[/url] đến [color=#FF9933]"+$("#seachuserchat input").val()+"[/color]";cancelg();submitchat142()}});$("#seachgiftchat .cancel").click(function(){cancelg();$("#tipchat14").html('Bạn <font color="red">đã hủy</font> việc gửi quà tặng trên ChatBox')})}else{if(my_getcookie("thongbaodatangqua")=="no"){$("#tipchat14").html('Chỉ được gửi tối đa <font color="red">5</font> quà tặng ChatBox.')}else{$("#tipchat14").html('Bạn đã <font color="red">hết lượt</font> gửi quà trên ChatBox')}}}});$("#togglegiftbox").hover(function(){$(this).children().toggle();$("#tipchat14").html('Click để <font color="red">Đóng / Mở</font> danh sách quà tặng ChatBox')},function(){$("#tipchat14").html('Bạn đang sử dụng <font color="red">ChatBox ver 1.4.2</font> phát triển bởi <font color="cyan">FMvi</font>');$(this).children().toggle()});$("#togglegiftbox").click(function(){giftchat();if($("#listgiftchat").width()===0){moquachat()}else if($("#sendgiftchat").width()==0&&$("#listgiftchat").width()==500){$("#sendgiftchat").hide().css("width","500px").fadeIn(1500);$("#listgiftchat").css("width","0");$("#tipchat14").html('Hãy <font color="red">Click chọn một quà tặng</font> bạn muốn gửi')}});if(my_getcookie("chatboxver1-4")=="close"){$("#chatbox_members").css("width","0");$("#chatbox").css("left","1px")}});function openshare(){if($("#chatbox_members").width()==0&&$("#chatbox_onlyU").css("display")=="none"){$("#chatbox").animate({right:'+=360'},500)}else if($("#chatbox_members").width()==180&&$("#chatbox_onlyU").css("display")=="none"){$("#chatbox_members").animate({width:'-=180'},500,function(){$("#chatbox_members").css("right","361px")});$("#chatbox").animate({right:'+=181'},500)};$("#chatbox_onlyU").fadeIn(1500)}function openWin(a,b,c){width=b;height=c;top_val=(screen.height-height)/2-30;0>top_val&&(top_val=0);left_val=(screen.width-width)/2-18;window.open(a,null,"toolbar=0,location=0,status=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+", top="+top_val+",left="+left_val)}function closeonlyu(){$("#chatbox_onlyU .closechatrieng").click(function(){if($(this).parent().attr("id")=="closemess"){$("#tipchatbox14").text('Bạn đã ngưng theo dõi tin nhắn của '+$("#chatbox_onlyU #tinnhacua").text())}else if($(this).parent().attr("id")=="closegift"){$("#tipchatbox14").text("Bạn đã đóng chức năng xem quà tặng trên ChatBox")}if($("#chatbox_onlyU .tieudeonlyu").length==1){$("#chatbox_onlyU").hide().empty();fmviclose()}else if($("#chatbox_onlyU .tieudeonlyu").length>1){$(this).parent().next().remove();$(this).parent().remove()}})}function fmviclose(){if($("#chatbox_members").width()!=0){$("#chatbox_members, #chatbox").animate({right:'-=361'},500)}else{$("#chatbox_members").animate({width:'+=180',right:'-=361'},500);$("#chatbox").animate({right:'-=180'},500)}my_setcookie("chatboxver1-4","open",true)}function quachat(){$("#giftchatbox").show().animate({height:'+=100'},500);$("#chatbox, #chatbox_members, #chatbox_onlyU").animate({bottom:'+=100'},500)}function moquachat(){$("#giftchatbox div:not('#listgiftchat')").each(function(){if($(this).width()==500){$(this).css("width","0")}});$("#listgiftchat").hide().css("width","500px").fadeIn(1500);$("#tipchat14").html('<font color="red">Danh sách các quà tặng</font> đang được gửi trên ChatBox')}function submitchat142(){document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);ajax_refresh_chatbox(params)return false}function Init_pref(){if(document.getElementById('divbold')){if(my_getcookie('CB_bold')==1){pref=my_getcookie('CB_bold');document.post.sbold.value=pref;document.getElementById('divbold').className='fontbutton fontbutton_selected';document.post.message.style.fontWeight='bold'}if(my_getcookie('CB_italic')==1){pref=my_getcookie('CB_italic');document.post.sitalic.value=pref;document.getElementById('divitalic').className=(pref=='1')?'fontbutton fontbutton_selected':'fontbutton fontbutton_normal';document.post.message.style.fontStyle='italic'}if(my_getcookie('CB_under')==1){pref=my_getcookie('CB_under');document.post.sunderline.value=pref;document.getElementById('divunderline').className=(pref=='1')?'fontbutton fontbutton_selected':'fontbutton fontbutton_normal';document.post.message.style.textDecoration='underline'}if(my_getcookie('CB_strike')==1){pref=my_getcookie('CB_strike');document.post.sstrike.value=pref;document.getElementById('divstrike').className=(pref=='1')?'fontbutton fontbutton_selected':'fontbutton fontbutton_normal';document.post.message.style.textDecoration=document.post.message.style.textDecoration+' line-through'}if(show_color=document.getElementById('show_color')){if(pref=my_getcookie('CB_color')){show_color.style.backgroundColor='#'+pref;document.post.scolor.value=pref;document.post.message.style.color='#'+pref}else if(template_color.length>2){show_color.style.backgroundColor=template_color}}}}function bid(){if(jQuery("#chatbox p:last img").attr('src')=='http://r24.imgfast.net/users/2416/30/79/20/smiles/3783939235.gif'){$("#bid")[0].play()}else{$("#bid3")[0].play()}}function lin(){if(jQuery("#chatbox p:last img").attr('src')=='http://r24.imgfast.net/users/2416/30/79/20/smiles/699312721.png'){$("#bid1")[0].play()}}function lout(){if(jQuery("#chatbox p:last img").attr('src')=='http://r24.imgfast.net/users/2416/30/79/20/smiles/1403619377.gif'){$("#bid2")[0].play()}}function do_style(dostyle){switch(dostyle){case'bold':{document.getElementById('divbold').style.fontWeight=(document.post.sbold.value=='0')?'bold':'';document.post.message.style.fontWeight=document.getElementById('divbold').style.fontWeight;document.post.sbold.value=(document.post.sbold.value=='0')?'1':'0';SetCookie('CB_bold',document.post.sbold.value);break}case'italic':{document.getElementById('divitalic').style.fontStyle=(document.post.sitalic.value=='0')?'italic':'';document.post.message.style.fontStyle=document.getElementById('divitalic').style.fontStyle;document.post.sitalic.value=(document.post.sitalic.value=='0')?'1':'0';SetCookie('CB_italic',document.post.sitalic.value);break}case'underline':{document.getElementById('divunderline').style.textDecoration=(document.post.sunderline.value=='0')?document.post.message.style.textDecoration+' underline':document.post.message.style.textDecoration.replace('underline','');document.post.message.style.textDecoration=document.getElementById('divunderline').style.textDecoration;document.post.sunderline.value=(document.post.sunderline.value=='0')?'1':'0';SetCookie('CB_under',document.post.sunderline.value);break}case'strike':{document.getElementById('divstrike').style.textDecoration=(document.post.sstrike.value=='0')?document.post.message.style.textDecoration+' line-through':document.post.message.style.textDecoration.replace('line-through','');document.post.message.style.textDecoration=document.getElementById('divstrike').style.textDecoration;document.post.sstrike.value=(document.post.sstrike.value=='0')?'1':'0';SetCookie('CB_strike',document.post.sstrike.value);break}}}function fetch_object(obj){return document.getElementById(obj)}function do_selectcolor(event){var scrX=(event.screenX-270);var scrY=(event.screenY-270);window.open('/chatbox/chatbox_selectcolor.htm','color','toolbar=no,menubar=no,personalbar=no,width=250,height=200,scrollbars=no,resizable=yes,left='+scrX+',top='+scrY)}function do_selectsmilies(event){var scrX=(event.screenX-270);var scrY=(event.screenY-380);if(window.open){window.open('/post.forum?mode=smilies_chatbox'+smilies_sid,'chatbox_smilies','toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left='+scrX+',top='+scrY)}else{}}function SetCookie(name,value){var expire='';var path="/";var domain='';document.cookie=name+"="+value+"; path="+path+expire+domain+';'}function copy_user_name(user_name){if(document.post.message){document.post.message.value+=user_name;document.post.message.focus()}return false}function js_urlencode(text){text=text.toString();var matches=text.match(/[\x90-\xFF]/g);if(matches){for(var matchid=0;matchid<matches.length;matchid++){var char_code=matches[matchid].charCodeAt(0);text=text.replace(matches[matchid],'%u00'+(char_code&0xFF).toString(16).toUpperCase())}}return escape(text).replace(/\+/g,"%2B")}function ajax_submit_chatbox(params){number_of_refresh=0;var msg_sent=document.post.sent.value;if(params==''||params==undefined){params='?achives=1'}while(msg_sent.indexOf('&')>=0){msg_sent=msg_sent.replace('&','%26')};while(msg_sent.indexOf('+')>=0){msg_sent=msg_sent.replace('+','%2B')};var data='&mode=send';data+='&sent='+msg_sent;data+='&sbold='+document.post.sbold.value;data+='&sitalic='+document.post.sitalic.value;data+='&sunderline='+document.post.sunderline.value;data+='&sstrike='+document.post.sstrike.value;data+='&scolor='+document.post.scolor.value;if((msg_sent.indexOf('/away')==0)||(msg_sent.indexOf('/abs')==0)){document.getElementById('refresh_auto').checked=false}if(document.post.sent.value=='/banlist'){window.open('/chatbox/chatbox_banlist.forum'+params,'banlist','toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=yes,resizable=yes');return false}if(window.XMLHttpRequest){var http_request=new XMLHttpRequest()}else if(window.ActiveXObject){var http_request=new ActiveXObject("Microsoft.XMLHTTP")}http_request.onreadystatechange=function(){if(http_request.readyState==4&&http_request.status==200){var parsed_text=http_request.responseText;eval(parsed_text);if(chatbox_last_update>chatbox_updated){document.getElementById('chatbox').innerHTML=chatbox_messages;document.getElementById('chatbox_members').innerHTML=chatbox_memberlist;lin();lout();bid();chatbox_updated=chatbox_last_update}}};http_request.open('POST','/chatbox/chatbox_actions.forum'+params,true);http_request.setRequestHeader('Content-Type','application/x-www-form-urlencoded;');http_request.send(data)}chatbox_messages_old='';function ajax_refresh_chatbox(params,force){capnhatgift();buzzchat();if(params==''||params==undefined){params='?achives=1'}if(window.XMLHttpRequest){var http_request=new XMLHttpRequest()}else if(window.ActiveXObject){var http_request=new ActiveXObject("Microsoft.XMLHTTP")}http_request.onreadystatechange=function(){if(http_request.readyState==4&&http_request.status==200){var parsed_text=http_request.responseText;eval(parsed_text);if(chatbox_last_update>chatbox_updated||force){if(document.getElementById('chatbox').innerHTML!=null){if(chatbox_messages_old!=chatbox_messages){document.getElementById('chatbox').innerHTML=chatbox_messages;chatbox_messages_old=chatbox_messages;lin();lout();if(my_getcookie('uname')!=jQuery('#chatbox p:eq(0) .user a strong').html()){bid()}document.getElementById('chatbox').scrollTop=document.getElementById('chatbox').scrollHeight+document.getElementById('chatbox').offsetHeight;document.getElementById('chatbox').scrollTop=999999;$("table.only:not('table.only[summary=\'"+my_getcookie("usernamefmvi")+"\']')").remove();$("table.only[summary='"+my_getcookie("usernamefmvi")+"']").each(function(){$(this).prev("p").find("span.msg").html('<span style="color: rgb(41, 254, 74); font-family: Comic Sans MS; font-size: 16px;">'+$(this).text()+'</span>');$(this).prev("p").find("span.user").html('<span style="color: red; font-variant: small-caps; padding-right: 10px;">Tin riêng :</span>');$(this).remove()});$("#chatbox .msg:contains('*'):contains('đã hạn chế tin nhắn của mình đối với thành viên')").each(function(index){var hideU=$(this).text();var ublock=hideU.slice(hideU.indexOf("viên")+5);var blockxx=hideU.slice(2,hideU.indexOf("đã")-1);var ggg='* '+blockxx+' đã tắt chức năng hạn chế tin nhắn với thành viên khác';if($("#chatbox .msg:contains('"+ggg+"')").length==0){if(my_getcookie("usernamefmvi")==ublock&&$("#chatbox .msg:contains('* '+blockxx+' đã tắt chức năng hạn chế tin nhắn với thành viên khác')").length==0){$("#chatbox .user a:contains('"+blockxx+"')").parents("p").remove()}}});$("#chatbox .msg:contains('*'):contains('đã ẩn tin nhắn của mình, chỉ hiển thị với')").each(function(index){var hideUrr=$(this).text();var ublockrr=hideUrr.slice(hideUrr.indexOf("với")+4);var blockxxrr=hideUrr.slice(2,hideUrr.indexOf("đã")-1);var yyy='* '+blockxxrr+' đã tắt chức năng chat riêng với thành viên khác';if($("#chatbox .msg:contains('"+yyy+"')").length==0){if(my_getcookie("usernamefmvi")!=ublockrr&&my_getcookie("usernamefmvi")!=blockxxrr){$("#chatbox .user a:contains('"+blockxxrr+"')").parents("p").hide()}else if(my_getcookie("usernamefmvi")==ublockrr||my_getcookie("usernamefmvi")==blockxxrr){$("#chatbox .user a:contains('"+blockxxrr+"')").parents("p").show()}}});if($("#chatbox_onlyU").css("display")=="block"&&$("#tinnhacua").length!=0){var tec=$("#chatbox_onlyU #tinnhacua").text();if($("#chatbox p .user:contains('"+tec+"')").length>0){$("#chatbox_onlyU #tinchatrieng").html($("#chatbox p .user:contains('"+tec+"')").parent().parent().clone())}else{$("#chatbox_onlyU #tinchatrieng").html('<p class="chatbox_row_1 clearfix"><span class="msg"><strong>Không tìm thấy tin nhắn của <span style="color:#FF0F6F; padding-left: 10px"><strong>'+tec+'</strong></span></strong></span></p>')}}giftchat()}}if(document.getElementById('chatbox_members').innerHTML!=null)document.getElementById('chatbox_members').innerHTML=chatbox_memberlist;chatbox_updated=chatbox_last_update}}};http_request.open('GET','/chatbox/chatbox_actions.forum'+params+'&mode=refresh',true);http_request.send(null)}number_of_refresh=0;function refresh_chatbox(params){if(params==''||params==undefined){params='?achives=1'}if(document.getElementById('refresh_auto').checked==true){ajax_refresh_chatbox(params)}}function giftchat(){var giftcode=$("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến'):has(a)");if(giftcode.length>0){$("#listgiftchat td").html(giftcode.clone());$("#listgiftchat td .msg").each(function(){var namegift=$(this).text().slice(2,$(this).text().indexOf("đã gửi một quà tặng")-1);var giftfriend=$(this).text().slice($(this).text().indexOf("đến")+4);var srcgift=$(this).find("a").attr("href");if(srcgift.indexOf("http://www.youtube.com")==0){$(this).replaceWith('<a href="'+srcgift+'" alt="'+namegift+'" title="'+giftfriend+'"><img id="youtube" src="http://i48.servimg.com/u/f48/16/58/89/73/youtub13.png">')}else if(srcgift.indexOf("http://www.nhaccuatui.com")==0){$(this).replaceWith('<a href="'+srcgift+'" alt="'+namegift+'" title="'+giftfriend+'"><img id="nhaccuatui" src="http://i48.servimg.com/u/f48/16/58/89/73/62515210.png">')}else if(srcgift.indexOf("http://mp3.zing.vn")==0){$(this).replaceWith('<a href="'+srcgift+'" alt="'+namegift+'" title="'+giftfriend+'"><img id="zingmp3" src="http://i48.servimg.com/u/f48/16/58/89/73/avatar10.jpg">')}else if(srcgift.indexOf("http://www.trochoiviet.com/games/module-pnFlashGames-display-id-")==0){$(this).replaceWith('<a href="'+srcgift+'" alt="'+namegift+'" title="'+giftfriend+'"><img id="trochoiviet" src="http://i48.servimg.com/u/f48/16/58/89/73/gamepa10.png">')};$("#listgiftchat a").hover(function(){if($(this).attr("href").slice(0,18)=="http://www.youtube"){linktip="Youtube"}else if($(this).attr("href").slice(0,18)=="http://www.nhaccua"){linktip="Nhaccuatui"}else if($(this).attr("href").slice(0,18)=="http://mp3.zing.vn"){linktip="Zingmp3"}else if($(this).attr("href").slice(0,18)=="http://www.trochoi"){linktip="Trochoiviet"};$("#tipchat14").html('Click để phát quà tặng <font color="#FF3333">'+linktip+'</font> của <font color="cyan">'+$(this).attr("alt")+'</font> gửi đến <font color="#FF33CC">'+$(this).attr("title")+'</font>')},function(){$("#tipchat14").html('<font color="red">Danh sách các quà tặng</font> đang được gửi trên ChatBox')});$("#listgiftchat a").click(function(){openshare();if($("#chatbox_onlyU #xemquatang").length==0){$("#chatbox_onlyU").append('<h4 id="closegift" class="tieudeonlyu">Quà tặng ChatBox của <span style="color:#FFF"><strong id="quatangcua">'+$(this).attr("title")+'</strong></span><span style="float:right" class="closechatrieng"><img title="Đóng" alt="Đóng" src="http://illiweb.com/fa/admin/icones/supprimer.png"/></span></h4><div id="xemquatang"></div>')}else{$("#quatangcua").text($(this).attr("title"))}closeonlyu();if($(this).attr("href").slice(0,18)=="http://www.youtube"){if($(this).attr("href").indexOf("list=")!=-1){var ay=$(this).attr("href").slice($(this).attr("href").indexOf("list=")+5)+"&";var by=ay.slice(0,ay.indexOf("&"));$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:201px;overflow:hidden"><iframe width="358" height="201" src="http://www.youtube.com/embed/videoseries?list='+by+'&theme=light&color=white&amp;hl=vi_VN&autoplay=1" frameborder="0" allowfullscreen></iframe></div>')}else{var ax=$(this).attr("href").slice($(this).attr("href").indexOf("v=")+2,$(this).attr("href").indexOf("v=")+13);$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:201px;overflow:hidden"><iframe width="358" height="201" src="http://www.youtube.com/v/'+ax+'&autoplay=1" frameborder="0" allowfullscreen></iframe></div>')}}else if($(this).attr("href").slice(0,18)=="http://www.nhaccua"){if($(this).attr("href").indexOf("http://www.nhaccuatui.com/nghe?L=")==0){var xlistnct=this.href.slice(33,45);var listnct='http://www.nhaccuatui.com/l/'+xlistnct;$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:150px;overflow:hidden"><div style="margin:-350px 0 0 0;padding:0"><object width="100%" height="500"><param name="movie" value="'+listnct+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="&autostart=true" /><embed src="'+listnct+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" flashvars="&autostart=true" width="100%" height="500"></embed></object><br></div></div>')}else if($(this).attr("href").indexOf("http://www.nhaccuatui.com/nghe?M=")==0){var imgnct=this.href.slice(33,43);var linknct='http://www.nhaccuatui.com/m/'+imgnct;$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:50px;overflow:hidden" align="center"><object width="100%" height="50"><param name="movie" value="'+linknct+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="&autostart=true" /><embed src="'+linknct+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" flashvars="&autostart=true" width="100%" height="50"></embed></object></div>')}else if($(this).attr("href").indexOf("http://www.nhaccuatui.com/mv4u/xem-clip/")==0){var zimgnct=this.href.slice(40,52);var zlinknct='http://www.nhaccuatui.com/mv/xem-clip/'+zimgnct;$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:201px;overflow:hidden" align="center"><object width="100%" height="201"><param name="movie" value="'+zlinknct+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="&autostart=true" /><embed src="'+zlinknct+'" quality="high" wmode="transparent" type="application/x-shockwave-flash" flashvars="&autostart=true" width="100%" height="201"></embed></object></div>')}}else if($(this).attr("href").slice(0,18)=="http://mp3.zing.vn"){if($(this).attr("href").indexOf("http://mp3.zing.vn/bai-hat")==0){var baihatzing=this.href.slice(this.href.indexOf(".html")-8,this.href.indexOf(".html"));var musiczing='http://static.mp3.zing.vn/skins/mp3_main/flash/mp3Player_new.swf?songID=0&autoplay=true&xmlURL=http://mp3.zing.vn/play/?pid='+baihatzing+'||4';$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:75px;overflow:hidden" align="center"><object width="100%" height="75"><param name="movie" value="'+musiczing+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="&autoplay=true" /><embed width="100%" height="75" src="'+musiczing+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>')}else if($(this).attr("href").indexOf("http://mp3.zing.vn/video-clip")==0){var videozing=this.href.slice(this.href.indexOf(".html")-8,this.href.indexOf(".html"));var clipzing='http://static.mp3.zing.vn/skins/mp3_main/flash/channelzPlayer.swf?xmlURL=http://mp3.zing.vn/play/?pid='+videozing+'||6&autoplay=true&wmode=transparent&1';$("#xemquatang").html('<div style="margin:0;padding:0;width:358px;height:201px;overflow:hidden" align="center"><object width="100%" height="201"><param name="movie" value="'+clipzing+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="&autoplay=true" /><embed width="100%" height="201" src="'+clipzing+'" quality="high" wmode="transparent" type="application/x-shockwave-flash"></embed></object><br /></div>')}else if($(this).attr("href").indexOf("http://mp3.zing.vn/album")==0||$(this).attr("href").indexOf("http://mp3.zing.vn/playlist")==0){var albumzing=this.href.slice(this.href.indexOf(".html")-8,this.href.indexOf(".html"));var playlistzing='http://static.mp3.zing.vn/skins/mp3_main/flash/mp3playlist.swf?xmlURL=http://mp3.zing.vn/play/?pid='+albumzing+'||1&autoplay=true&wmode=transparent';$("#xemquatang").html('<div style="padding: 0pt; width: 358px; height: 150px; overflow: hidden;"><div style="padding: 0pt; margin: -151px 0 0 0;"><object width="100%" height="300"><param name="movie" value="'+playlistzing+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="flashvars" value="autoplay=true" /><embed width="100%" height="300" src="'+playlistzing+'" quality="high" wmode="transparent" type="application/x-shockwave-flash">

Unknown end tag for &lt;/embed&gt;



Unknown end tag for &lt;/object&gt;

<br>

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;

')}else if($(this).attr("href").indexOf("http://photo.apps.zing.vn/")==0&&$(this).attr("href").indexOf("/slide/id/")!=-1){var slidezing=this.href.replace("/slide/slide/","/slide/get-slide/");var srcslidezing='xml_path='+slidezing;$("#xemquatang").html('<div style="padding: 0pt; width: 358px; height: 201px; overflow: hidden;"><embed height="100%" width="201" wmode="transparent" flashvars="'+srcslidezing+'" allowfullscreen="true" quality="high" bgcolor="#333333" name="flickr_lung" id="flickr_lung" src="http://img-photo.apps.zing.vn/swf/slideshow.swf" type="application/x-shockwave-flash">

Unknown end tag for &lt;/div&gt;

')}}else if($(this).attr("href").slice(0,18)=="http://www.trochoi"){var ftcv=$(this).attr("href").slice($(this).attr("href").indexOf("display-id")+11);var xsf=ftcv.slice(ftcv.indexOf("-")+6,ftcv.indexOf(".phtml")).toLowerCase();$("#xemquatang").html('<div style="padding: 0pt; width: 358px; height: 201px; overflow: hidden;"><embed width="100%" height="201" name="plugin" src="http://hn.trochoiviet.com/games/modules/pnFlashGames/games/'+xsf+'.swf" type="application/x-shockwave-flash">

Unknown end tag for &lt;/div&gt;

<p align="center"><span style="padding: 5px 40px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_d10.gif"/><a id="popupgc" style="color:cyan" href="http://hn.trochoiviet.com/games/modules/pnFlashGames/games/'+xsf+'.swf">550 x 450

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span style="padding: 5px 40px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_d10.gif"/><a id="popupla" style="color:cyan" href="http://hn.trochoiviet.com/games/modules/pnFlashGames/games/'+xsf+'.swf">825 x 675

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p style="padding: 20px; cursor: pointer; color:#FF0066" id="fixupgc"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_g10.png"/>Click vào đây nếu bạn không chơi được

Unknown end tag for &lt;/p&gt;

');popupgame();$("#fixupgc").click(function(){var sdsg=$("#xemquatang embed").attr("src").replace(/-/g,"");var edsg=$("#xemquatang a").attr("href").replace(/-/g,"");$("#xemquatang").html('<div style="padding: 0pt; width: 358px; height: 201px; overflow: hidden;"><embed width="100%" height="201" name="plugin" src="'+sdsg+'" type="application/x-shockwave-flash">

Unknown end tag for &lt;/div&gt;

<p align="center"><span style="padding: 5px 40px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_d10.gif"/><a id="popupgc" style="color:cyan" href="'+edsg+'">550 x 450

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;

<span style="padding: 5px 40px;"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_d10.gif"/><a id="popupla" style="color:cyan" href="'+edsg+'">825 x 675

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/p&gt;

<p style="padding: 20px; cursor: pointer; color:#FF0066"><img src="http://i48.servimg.com/u/f48/16/58/89/73/icon_g10.png"/>Liên hệ Admin nếu vẫn không chơi được

Unknown end tag for &lt;/p&gt;

');popupgame()})};return false})})}else if(giftcode.length==0){$("#listgiftchat td").html('<font color="violet"><font face="Comic Sans Ms"><span style="font-size: 18px; line-height: normal"><strong>Không có quà tặng nào được gửi.

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/font&gt;



Unknown end tag for &lt;/font&gt;

')}}function popupgame(){$("#popupgc").click(function(){openWin($(this).attr("href"),550,450);return false});$("#popupla").click(function(){openWin($(this).attr("href"),825,675);return false})}function cancelg(){if($("#sendgiftchat").width()==0&&$("#seachgiftchat").width()==500){$("#sendgiftchat").hide().css("width","500px").fadeIn(1500);$("#seachgiftchat").css("width","0")}}function capnhatgift(){if($("#giftchatbox input:checked").length==0&&$("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến'):has(a)").length>0){if($("#giftchatbox").height()==0){quachat()};if($("#listgiftchat").width()===0){moquachat()}};var dban=my_getcookie("usernamefmvi"),slibannhan=$("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến "+dban+"'):has(a)"),tatca=$("#chatbox p .msg:contains('*'):contains('đã gửi một quà tặng'):contains('đến tất cả thành viên'):has(a)");if($("#listgiftchat a[alt='"+dban+"']").length>0){my_setcookie("thongbaodatangqua","yes",true)}else{my_setcookie("thongbaodatangqua","no",true)};var tonggiftC=(slibannhan.length+tatca.length);if(tonggiftC!=my_getcookie("numgiftchat")&&$("#giftchatbox input:checked").length==0){if(tonggiftC==1){var jjj=slibannhan.text().slice(2,slibannhan.text().indexOf("đã gửi")),ttt=tatca.text().slice(2,tatca.text().indexOf("đã gửi")),ccc=slibannhan.find("a").text();$("#tipchatbox14").text("Bạn nhận được một món quà ChatBox"+ccc+" từ "+jjj+ttt);my_setcookie("numgiftchat",1,false)}else if(tonggiftC>1&&$("#giftchatbox input:checked").length==0){$("#tipchatbox14").text("Bạn nhận được "+tonggiftC+" món quà trên ChatBox");my_setcookie("numgiftchat",tonggiftC,false)}};$("#listgiftchat td a img").css({"border-color":"black","opacity":0.7});$("#listgiftchat td a[title='"+dban+"'] img").css({"border-color":"red","opacity":1});$("#listgiftchat td a[title='tất cả thành viên'] img").css({"border-color":"red","opacity":1})}function transformL(){$("#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members").css({'transform':'rotate(-10deg)','-moz-transform':'rotate(-10deg)','-webkit-transform':'rotate(-10deg)','-o-transform':'rotate(-10deg)'})};function transformR(){$("#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members").css({'transform':'rotate(10deg)','-moz-transform':'rotate(10deg)','-webkit-transform':'rotate(10deg)','-o-transform':'rotate(10deg)'})};function buzzchat(){var zzz=$("#chatbox .msg img[alt='buzz']").length;if(zzz>my_getcookie("numbuzzchat")){$("#audiobuzz").html('<embed type="application/x-shockwave-flash" src="http://baivong.do.am/dewplayer-mini_68.swf" flashvars="mp3=http://baivong.do.am/buzz.mp3&autoplay=1" width="1" height="1" />');setTimeout(function(){$("#audiobuzz").empty()},3000);transformL();setTimeout("transformR()",100);setTimeout("transformL()",200);setTimeout("transformR()",300);setTimeout("transformL()",400);setTimeout("transformR()",500);setTimeout("transformL()",600);setTimeout("transformR()",700);setTimeout("$('#chatbox_header, #chatbox_footer, #chatbox, #chatbox_members').css({'transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)', '-o-transform': 'rotate(0deg)'})",800);my_setcookie("numbuzzchat",zzz,true)}else if(zzz<my_getcookie("numbuzzchat")){my_setcookie("numbuzzchat",0,true)}}function zoo(){document.post.sent.value=":login:";document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);return false}function raa(){document.post.sent.value=":logout:";document.post.message.value='';document.post.message.focus();ajax_submit_chatbox(params);return false}```


> Trong đoạn code trên, thay:

> ![http://r24.imgfast.net/users/2416/30/79/20/smiles/3783939235.gif](http://r24.imgfast.net/users/2416/30/79/20/smiles/3783939235.gif) thành link hình vui buzz của bạn
> ![http://r24.imgfast.net/users/2416/30/79/20/smiles/699312721.png](http://r24.imgfast.net/users/2416/30/79/20/smiles/699312721.png) thành link hình vui login của bạn
> ![http://r24.imgfast.net/users/2416/30/79/20/smiles/1403619377.gif](http://r24.imgfast.net/users/2416/30/79/20/smiles/1403619377.gif) thành link hình vui logout của bạn



Bước 4: ACP - Modules - HTML & JAVASCRIPT - HTML pages management - Create new HTML page:

> Title **: Chatbox 1.4.3
> Do you wish to use your forum header and footer ? No
> Use this page as homepage ? No
> HTML source** :

```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>Chatbox IFC

Unknown end tag for &lt;/title&gt;


<link rel="shortcut icon" type="image/x-icon" href="http://illiweb.com/fa/favicon/write.ico"
/>
<meta http-equiv="content-script-type" content="text/javascript" />
<meta http-equiv="content-style-type" content="text/css" />
<link rel="stylesheet" href="/1-ltr.css" type="text/css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script src="http://illiweb.com/rsc/41/frm/lang/vi.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<script type="text/javascript">
//<![CDATA[
var params = '?archives=1';
var smilies_sid = ''; //]]>


Unknown end tag for &lt;/script&gt;


<script src="/h97-" type="text/javascript">

Unknown end tag for &lt;/script&gt;


<style type="text/css">
.chatfmvi{z-index: 999;width:100%;height:100%;position:fixed;left:0;top:0;display:block;border:1px solid #999;margin:0;padding:0}
#mes_chat,#onl_chat,#away_chat{color:red}
#show_color{display:block}
#chatbox img, #chatbox_onlyU img{max-height: 75px}
.date-and-time{font-size:8px;float:right;color:#f80}
form[name=post] input[type=text]{font-size:12px;height:20px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid #717171;padding:5px;width:300px!important}
input[type=submit]{width:46px;height:40px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid #717171;}
*{margin:0;padding:0}
html,body{overflow:hidden}
body{background:#fff url('http://i40.servimg.com/u/f40/17/70/31/89/santa510.png') no-repeat bottom right!important;margin:0;padding:0}
#chatbox_header{height:30px}
#chatbox_header.main-head{background-color:#1a1919;color:#dedfdf;padding:0 1.3em}
.chatbox-title,.chatbox-title a.chat-title{color:#dedfdf;text-decoration:none}
.chatbox-options{float:right;font-size:11px;list-style:none;margin:.7em .5em .5em}
#chatbox_footer{border-top:1px dashed #ccc;bottom:0;left:0;position:absolute;right:0;height:70px;background:url(http://i40.servimg.com/u/f40/17/70/31/89/xmasba12.jpg) no-repeat left!important}
#message,#submit_button{border-width:1px}
* html #chatbox-members{height:expression((document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 3px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 0 ) 0 px)}
* html #chatbox{height:expression((document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 3px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 0 ) 0 px);width:expression((document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 10px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 1px 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 1.3px ) 0 px)}
* html #chatbox-footer{width:expression((document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth) 0 ((parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 0 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 0 0 (parseInt(document.body.currentStyle.fontSize) * 1.3333333px * 2px * 0 ) 0 px)}
#chatbox_contextmenu{background-color:#1a1919;border:2px solid #000}
#chatbox_contextmenu p{background:#2b2a2a;border-bottom:1px solid #777;font-family:verdana, arial, sans-serif;margin:0;padding:1px 4px}
#chatbox_contextmenu p.hover{background:#242424}
#chatbox_contextmenu p.close{background:url();color:#fff;font-size:95%;padding:1px}
#chatbox_contextmenu p.close img{padding-left:20px;vertical-align:middle}
#chatbox_contextmenu a{color:#d9c8ae;font-size:95%;text-decoration:none}
#tinchatrieng .msg{color: Orange; font-family: Comic Sans MS;}
#chatbox .helpchat{border:1px solid;box-shadow:0 0 1px #aaa!important;line-height:1.2em;width:99%;margin:0 5px;padding:0 10px 10px;color:#000!important;font-size:11px}
#giftchatbox #listgiftchat img, #giftchatbox #sendgiftchat img{border:3px solid;border-radius:3px 3px 3px 3px;height:50px;margin:2px 15px;padding:5px}
#giftchatbox #listgiftchat img:hover, #giftchatbox #sendgiftchat img:hover{cursor: pointer;border:3px solid LightSkyBlue}
#giftchatbox input{font-size:15px;text-shadow:0 1px 0 #fff;outline:none;none repeat scroll 0 50% #F5F5F5;height:20px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid #717171;-webkit-box-shadow:1px 1px 0 #efefef;-moz-box-shadow:1px 1px 0 #efefef;box-shadow:1px 1px 0 #efefef;padding:5px;}
#giftchatbox input{font-size:12px;color:#000!important;height:20px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid #717171;-webkit-box-shadow:1px 1px 0 #efefef;-moz-box-shadow:1px 1px 0 #efefef;box-shadow:1px 1px 0 #efefef;padding:5px}
#giftchatbox button, #loadusergift{border-radius:3px;display:block;float:right;background-color:#f5f5f5;border:1px solid #dedede;border-top:1px solid #eee;border-left:1px solid #eee;font-family:"Lucida Grande", Tahoma, Arial, Verdana, sans-serif;font-size:100%;line-height:130%;text-decoration:none;font-weight:bold;color:#565656;cursor:pointer;margin:0 7px 0 0;padding:5px 10px 6px 7px;}
#giftchatbox button[type]{line-height:17px;width:auto;padding:5px 10px 5px 7px;}
#giftchatbox button.check:hover{background-color:#E6EFC2;border:1px solid #C6D880;color:#529214;}
#giftchatbox button.cancel{color:#D12F19;}
#giftchatbox button.cancel:hover{background:none repeat scroll 0 0 #FBE3E4;border:1px solid #FBC2C4;color:#D12F19;}
#giftchatbox button.cancel:active{background-color:#D12F19;border:1px solid #D12F19;color:#FFFFFF;}
#giftchatbox button.check,#seachgiftchat button.check:active{color:#529214;}
#giftchatbox button.search:active{background-color:#6299C5;border:1px solid #6299C5;color:#FFF}
#giftchatbox button.search:hover{background-color:#DFF4FF;border:1px solid #C2E1EF;color:#369}
#find_username{width:412px;border-radius:5px}
#find_username .pun{width:390px;}
#chatbox_onlyU .tieudeonlyu{background-color: rgb(26, 25, 25); background-image: none; color: rgb(217, 200, 174); font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; padding: 0.5em 1em;}
#loadusergift{float: left; margin: 0pt 40px;}
#chatbox_onlyU{border: 1px dashed #CCCCCC;bottom: 30px;overflow-x: hidden;position: absolute;top: 30px;width: 360px;display:none;right:0}
#giftchatbox{border-top: 1px dashed rgb(204, 204, 204); left: 0pt; position: absolute; right: 0pt; background: none repeat scroll 0pt 0pt rgb(43, 42, 42); bottom: 82px; opacity: 1; height: 0; display: none;}
#giftchatbox h4{background-color: rgb(26, 25, 25); background-image: none; color: rgb(217, 200, 174); font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 12px; padding: 0.5em 1em;}
#sendgiftchat,#listgiftchat,#seachgiftchat,#seachuserchat{display: inline-block; width:0; overflow: auto; position: absolute; left: 50%;margin-left: -250px;}
#giftchatbox input[type=checkbox]{border:0;padding:0;height:16px}
.fontbutton{background: #F4F5F4 url(http://i23.servimg.com/u/f23/16/03/04/56/tabbg112.png);cursor: pointer;border: 1px solid #A9B8C2 !important;-moz-border-radius: 3px; border-radius: 3px;font-size: 11px;font-family: Tahoma,Verdana,Arial,Helvetica,sans-serif;border:medium none;color:#000;cursor:pointer;float:left;margin-right:10px;text-align:left;padding:1px;}
.fontbutton_normal {background: #F4F5F4 url(http://i23.servimg.com/u/f23/16/03/04/56/tabbg112.png);cursor: pointer}
.fontbutton_clicked {background: #959595;border: 1px solid #22229C;}
.fontbutton{border:0;}
#divcolor,#divsmilies{display:block!important}
#chatbox .only{display:none}
#chatbox_main_options li{display:inline!important}
.chatbox-title{width:650px!important;float:left;margin:0;padding:2px 5px 0}
#chatbox_members{font-size: 11px;border:1px dashed #ccc;bottom:30px;overflow:auto;position:absolute;top:30px;width:180px;right:0}
#chatbox_members ul{lfont-size: 11px;list-style:square url("http://illiweb.com/fa/Online.png");margin: 0px 0px 0px 20px}
#chatbox_members ul li{font-size: 11px;margin:.5em .5em .5em 0;padding:4px}
#chatbox{bottom:75px;line-height:10px;overflow:auto;position:absolute;left:0;top:30px;right:183px}
#chatbox p{line-height:1.2em}
.chatbox_row_1{background-color:#ffffff;padding:4px}
.chatbox_row_2{background-color:#F0F9FB;padding:4px}
.chatbox_row_3{background-color:#CFE9FF;padding:4px}
.chatbox_row_1,.chatbox_row_2,.chatbox_row_3 {font-size: 11px;min-height: 25px;}
#bid,#bid1,#bid2,#bid3{display:none!important}


Unknown end tag for &lt;/style&gt;


<script>
function tryfu() {
if(jQuery('#smile').html() == '') {
jQuery('#chatbox,#chatbox_members').animate({
top: '150px'
}, 0);
jQuery('#smile').animate({
height: '100px',
overflow: 'auto'
}, 0);
jQuery.ajax({
url: '/h90-',
success: function (hkt) {
jQuery('#smile').html(hkt).show("slow");
},
});
} else {
jQuery('#chatbox,#chatbox_members').animate({
top: '30px'
}, 0);
jQuery('#smile').html('');
jQuery('#smile').animate({
height: '0px'
}, 0);
};
}


Unknown end tag for &lt;/script&gt;


<script type="text/javascript">//<![CDATA[
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-26966514-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();//]]>

Unknown end tag for &lt;/script&gt;


<script>jQuery(document).ready(function(){my_setcookie('mytid',jQuery("#logout").attr("href"),1,0);})

Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/head&gt;


<audio controls preload="auto" id='bid'>
<source src="http://diendan.a20tpo.info/buzz.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<audio controls preload="auto" id='bid1'>
<source src="http://diendan.a20tpo.info/online.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<audio controls preload="auto" id='bid2'>
<source src="http://diendan.a20tpo.info/offline.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<audio controls preload="auto" id='bid3'>
<source src="http://diendan.a20tpo.info/message.wav" controls>

Unknown end tag for &lt;/source&gt;




Unknown end tag for &lt;/audio&gt;


<body>
<div id="chatbox_header" class="main-head">
<h2 class="chatbox-title" style="width:650px">
<font color="cyan" style="color: cyan; font-size: 14px; font-family: cursive; padding-left: 15px;">Welcome to ChatBox IFC

Unknown end tag for &lt;/font&gt;

   (<span id="tipchatbox14" style="color: yellow; font-size: 14px; font-family: cursive;">
<font color="red">ChatBox ver 1.4.3

Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/span&gt;

)


Unknown end tag for &lt;/h2&gt;


<ul class="chatbox-options" id="chatbox_main_options" style="display:block">
<li>
<a href="javascript:void(0)" onclick="ajax_refresh_chatbox('?archives=1', 1);">Refresh

Unknown end tag for &lt;/a&gt;

 | 

Unknown end tag for &lt;/li&gt;


<li id="chatbox_option_autorefresh" style="display: block;"
onclick="refresh_chatbox('?archives=1');">
<label>Auto refresh
<input type="checkbox" name="refresh_auto" id="refresh_auto"
checked="checked" style="background: transparent;" />


Unknown end tag for &lt;/label&gt;

 | 

Unknown end tag for &lt;/li&gt;


<li style="display: block;">
<a href="javascript:void(0)" onclick="CB_disconnect();" class="log"><span id="chatbox_option_co" style="display: ;" onclick="zoo();"><strong>Đăng Nhập

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/span&gt;

<span id="chatbox_option_disco" style="display: none;" onclick="raa();">Thoát

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;




Unknown end tag for &lt;/div&gt;


<div increment="10" pageincrement="144" maxpos="460" curpos="0" id="chatbox_onlyU">

Unknown end tag for &lt;/div&gt;


<div id="chatbox_members" curpos="0" maxpos="460" pageincrement="144"
increment="10">

Unknown end tag for &lt;/div&gt;


<div id="chatbox" curpos="188" maxpos="325" pageincrement="0" increment="10">

Unknown end tag for &lt;/div&gt;


<div id="giftchatbox">
<h4>
<span style="color:#FFF">
<strong>TIP :

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;


<span style="padding-left:20px; color:yellow" id="tipchat14">Hãy chọn một quà tặng bạn muốn gửi

Unknown end tag for &lt;/span&gt;


<input style="float: right;"
type="checkbox" />
<span id="closegiftbox" style="float:right; padding-right: 7px">
<img src="http://illiweb.com/fa/admin/icones/supprimer.png" alt="Đóng"
title="Đóng" />


Unknown end tag for &lt;/span&gt;


<span id="togglegiftbox" style="float: right; padding-right: 10px; cursor: pointer">
<img src="http://i48.servimg.com/u/f48/16/58/89/73/toggle10.gif" alt="toggle"
/>
<img style="display:none" src="http://i48.servimg.com/u/f48/16/58/89/73/toggle11.png"
alt="toggle" />


Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/h4&gt;


<div id="sendgiftchat" style="width:500px" align="left">
<table width="500px" height="70px" align="center">
<tbody>
<tr>
<td align="center" valign="middle">
<img id="youtube" src="http://i48.servimg.com/u/f48/16/58/89/73/youtub13.png">
<img id="nhaccuatui" src="http://i48.servimg.com/u/f48/16/58/89/73/62515210.png">
<img id="zingmp3" src="http://i48.servimg.com/u/f48/16/58/89/73/avatar10.jpg">
<img id="trochoiviet" src="http://i48.servimg.com/u/f48/16/58/89/73/gamepa10.png">


Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="listgiftchat" align="left">
<table width="500px" height="70px" align="center">
<tbody>
<tr>
<td valign="middle" align="center">
<font color="violet">
<font face="Comic Sans Ms">
<span style="font-size: 18px; line-height: normal">
<strong>Không có quà tặng nào được gửi.

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/font&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="seachgiftchat" align="left">
<table width="500px" height="70px" align="center">
<tbody>
<tr>
<td valign="middle" align="center">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;


<div id="seachuserchat" align="left">
<table width="500px" height="70px" align="center">
<tbody>
<tr>
<td valign="middle" align="center">

Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id='smile' align='center' style="width: 100%; overflow: auto; margin-top: 6px; display: block; height: 250px;">

Unknown end tag for &lt;/div&gt;


<div id="chatbox_footer" style="display:none">
<table align="right">
<tbody>
<tr>
<td>
<table><tbody>
<tr><td>
<div class="right">
<div id="divbold" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sbold.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('bold');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sbold.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif" width="21"
height="20" alt="Bold" title="Bold" />


Unknown end tag for &lt;/div&gt;


<div id="divitalic" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sitalic.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('italic');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sitalic.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif" width="21"
height="20" alt="Ital." title="Ital." />


Unknown end tag for &lt;/div&gt;


<div id="divunderline" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sunderline.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('underline');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sunderline.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif" width="21"
height="20" alt="Underl." title="Underl." />


Unknown end tag for &lt;/div&gt;


<div id="divstrike" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className=( document.post.sstrike.value == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'"
onclick="do_style('strike');" onmousedown="this.className='fontbutton fontbutton_clicked';"
onmouseup="this.className=( document.post.sstrike.value != '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal'">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif" width="21"
height="20" alt="Strike" title="Strike" />


Unknown end tag for &lt;/div&gt;


<div id="divcolor" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectcolor(event);">
<span width="21" height="21" title="Màu font" id="show_color" style="font-family: Georgia; font-weight: bold; font-size: 16px; padding: 1px 5px;">A

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;


<div id="divsmilies" class="fontbutton" onmouseover="this.className='fontbutton fontbutton_hover'"
onmouseout="this.className='fontbutton fontbutton_normal'" onclick="do_selectsmilies(event);">
<img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21"
height="20" alt="Emoticons" title="Emoticons" />


Unknown end tag for &lt;/div&gt;


<div id="redtube" class="fontbutton fontbutton_normal" onmouseover="this.className='fontbutton fontbutton_hover'" onmouseout="this.className='fontbutton fontbutton_normal'" onclick="tryfu();"><img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif" width="21" height="20" alt="Biểu tượng" title="Biểu tượng" /><img src="http://illiweb.com/fa/subsilver/wysiwyg/menupop.gif" width="11" height="20" alt="Biểu tượng" title="Biểu tượng" />

Unknown end tag for &lt;/div&gt;


<div onmouseout="this.className='fontbutton fontbutton_normal'" onmouseover="this.className='fontbutton fontbutton_hover'"
class="fontbutton fontbutton_normal" style="padding:5px 2px" id="chatbuzz">
<img alt="buzz" src="/users/2315/72/47/45/smiles/3783939235.gif">
<img alt="buzz" src="/users/2315/72/47/45/smiles/3783939235.gif" style="display:none">


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;


<span id="hideuserchat" style="display:none">

Unknown end tag for &lt;/span&gt;


<div id="audiobuzz" style="position: absolute; left: 0pt; bottom: 0pt; overflow: hidden; width: 0pt; height: 0pt;">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;


<tr><td>
<form name="post" action="/chatbox/index.forum" method="post" onsubmit="submitmsg('?archives=1');refresh_chatbox('?archives=1');return false;">
<div id="chatbox_messenger_form" style="display: ">
<div class="right">
<input type="hidden" name="sbold" value="0" />
<input type="hidden" name="sitalic" value="0" />
<input type="hidden" name="sunderline" value="0" />
<input type="hidden" name="sstrike" value="0" />
<input type="hidden" name="scolor" id="scolor" value="#000" />
<div onclick="document.post.message.focus();">
<label>
<span>     

Unknown end tag for &lt;/span&gt;


<input type="text" id="message"
name="message" size="35" maxlength="1024" class="post" autocomplete="off"
onkeydown="number_of_refresh=0;" />


Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;



Unknown end tag for &lt;/table&gt;




Unknown end tag for &lt;/td&gt;


<td>
<input type="hidden" name="sent" value="" />
<input style="margin-bottom:60px!important" type="submit" name="submit_button" value="Send" id="submit_button"
/> 

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;


<td>
<div class="guilen" align="center">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/td&gt;




Unknown end tag for &lt;/tr&gt;




Unknown end tag for &lt;/tbody&gt;




Unknown end tag for &lt;/table&gt;


<script type="text/javascript">
//<![CDATA[
function ajax_connect(params, mode) {
if(params == '' || params == undefined) {
params = '?achives=0';
}
if(window.XMLHttpRequest) {
var http_request = new XMLHttpRequest();
} else if(window.ActiveXObject) {
var http_request = new ActiveXObject("Microsoft.XMLHTTP");
}
http_request.onreadystatechange = function () {
if(http_request.readyState == 4 && http_request.status == 200) {
var parsed_text = http_request.responseText;
if(parsed_text) {
if(mode == 'connect') {
document.getElementById('chatbox_option_co').style.display = 'none';
document.getElementById('chatbox_option_disco').style.display = '';
document.getElementById('refresh_auto').checked = true;
document.getElementById('chatbox_option_autorefresh').style.display = '';
document.getElementById('chatbox_messenger_form').style.display = '';
document.getElementById('chatbox_footer').style.display = 'block';
connected = 1;
number_of_refresh = 0;
} else if(mode == 'disconnect') {
document.getElementById('chatbox_option_co').style.display = '';
document.getElementById('chatbox_option_disco').style.display = 'none';
document.getElementById('chatbox_option_autorefresh').style.display = 'none';
document.getElementById('chatbox_messenger_form').style.display = 'none';
document.getElementById('chatbox_footer').style.display = 'none';
connected = 0;
}
refresh_chatbox(params);
}
}
};
http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=' + mode + my_getcookie('mytid').substr(my_getcookie('mytid').indexOf('&tid='), 37), true);
http_request.send(null);
}
function CB_disconnect() {
if(connected) {
ajax_connect('?archives=1', 'disconnect');
clearInterval(refresh_interval);
} else {
ajax_connect('?archives=1', 'connect');
try {
refresh_interval = setInterval("refresh_chatbox('?archives=1');", 5000);
} catch(err) {}
}
}
if(document.location.href.indexOf('chatbox', 1) == -1) {
jQuery('#divcolor').css('display', 'none');
jQuery('#divsmilies').css('display', 'none');
}
var connected = false;
var chatbox_updated = 1310441470;
var chatbox_last_update = 1310441470;
var template_color = '#000000';
var refresh_interval;
if(connected) {
try {
refresh_interval = setInterval("refresh_chatbox('?archives=1');", 5000);
} catch(err) {}
} else {
try {
refresh_chatbox('?archives=1');
} catch(err) {}
}
//]]>


Unknown end tag for &lt;/script&gt;




Unknown end tag for &lt;/body&gt;




Unknown end tag for &lt;/html&gt;


```

> Trong đoạn code trên, thay:

> /h97- thành link trang HTML ở Bước 3.
> /h90- thành link trang HTML hình vui, để đơn giản có thể thay trực tiếp thành cái này: /post?mode=smilies\_chatbox. Hoặc ai am hiểu thì có thể tạo 1 HTML mới của hình vui rồi lấy link thay vào.


> Ghi chú: Trong bước 3, các bạn thay tất cả các link http://invision.chinhphuc.info/h12- thành link trang HTML ở bước 4 của các bạn (có 4 vị trí thay)



Bước 5: ACP - Modules - Forum Widgets Management:
Tạo 1 widget, phân quyền cho member, mod và admin. Nhét vào widget đó đoạn code sau:

```


<script type="text/javascript" src="h102-">

Unknown end tag for &lt;/script&gt;

<div class="tuychinh_chat" onmouseover="hien_tuychinh();" onmouseout="an_tuychinh();"><div class="anhientuychinh_chat">
<input class="autologinchatvds" type="checkbox" checked="checked" /><span class="gensmall"> Auto Login

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/div&gt;

<div class="chatvds_menu" style="display:inline;" onclick="chatvds_login();">Chatbox IFC [<span id="mes_chatvds">Off

Unknown end tag for &lt;/span&gt;

] - Online [<span id="onl_chatvds">?

Unknown end tag for &lt;/span&gt;

] Away [<span id="away_chatvds">?

Unknown end tag for &lt;/span&gt;

]

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<iframe id="chatvds" src="/h12-">

Unknown end tag for &lt;/iframe&gt;


<style>
.chatvds_menu{display:inline;cursor:pointer;background-color:#333;color:#ff0;text-align:center;border:1px solid #999;padding:5px;font-size:12px}
.chatvds_menu:hover{background-color:#000}
.chatvds_menu span{font-weight:700}
.thongdiep_chat{position:fixed;bottom:30px;right:80px}
.anhientuychinh_chat{display:none;margin-right:5px;background:#000;border:1px solid #999;padding:5px;color:#fff;font-size:11px}
.tuychinh_chat{z-index:999;height:20px;position:fixed;bottom:-1px;right:5px;font-family:Tahoma, Arial;font-size:12px}
#chatvds{background-image:url(http://i48.servimg.com/u/f48/13/58/60/43/mainco13.png);z-index:999;position:fixed;right:5px;bottom:30px;width:70%;height:53%;display:none;border:1px solid #999;margin:0;padding:0}
#mes_chatvds,#onl_chatvds,#away_chatvds{color:#fff}


Unknown end tag for &lt;/style&gt;


```

> Trong đoạn code trên, thay:

> /h12- thành link trang HTML ở Bước 5.



/h102- ```
if(my_getcookie('check_loginchat') != 'off') {
setTimeout('chatvds_login_on();', 2000)
} else {
$('.autologinchatvds').removeAttr('checked')
}

function trangthai_chatvds() {
old_tn = my_getcookie('old_messenger');
new_tn = $('#chatvds').contents().find('#chatbox p').length;
new_messenger = parseInt(new_tn) - parseInt(old_tn);
if($('#chatvds').contents().find('#chatbox_option_co').css('display') != 'none') {
new_messenger = 'Off'
} else if((new_messenger < 0) || ($('#chatvds').css('display') != 'none')) {
new_messenger = '?'
};
$('#mes_chatvds').html(new_messenger);
onl = $('#chatvds').contents().find('#chatbox_members ul:eq(0) li');
away = $('#chatvds').contents().find('#chatbox_members ul:eq(1) li');
if(away[0]) {
$('#onl_chatvds').html(onl.length);
$('#away_chatvds').html(away.length)
} else {
tt = $('#chatvds').contents().find('#chatbox_members h4').text();
if(tt == 'Online') {
$('#onl_chatvds').html(onl.length);
$('#away_chatvds').html('0')
};
if(tt == 'Away') {
$('#onl_chatvds').html('0');
$('#away_chatvds').html(onl.length)
}
};
if($('#chatvds').css('display') != 'none' && $('#chatvds').contents().find('#chatbox_option_disco').css('display') != 'none') {
luutru_tn()
};
if(new_messenger != 'Off') {
setTimeout('trangthai_chatvds();', 3000)
}
}

function chatvds_login() {
$('#chatvds').slideToggle(function () {
if($('#chatvds').css('display') != 'none') {
chatvds_login_on()
};
if($('#chatvds').contents().find('#chatbox_option_disco').css('display') != 'none') {
luutru_tn()
}
})
}

function chatvds_login_on() {
if($('#chatvds').contents().find('#chatbox_option_co').css('display') != 'none') {
$('#chatvds')[0].contentWindow.CB_disconnect()
};
setTimeout('trangthai_chatvds();', 2000)
}

function luutru_tn() {
old_messenger = $('#chatvds').contents().find('#chatbox p').length;
my_setcookie('old_messenger', old_messenger, 1)
}

function hien_tuychinh() {
$('.anhientuychinh_chat').css('display', 'inline');
if($('.autologinchatvds').attr('checked')) {
my_setcookie('check_loginchat', 'on', 1)
} else {
my_setcookie('check_loginchat', 'off', 1)
}
}

function an_tuychinh() {
$('.anhientuychinh_chat').css('display', 'none')
}```
Chấm hết thưa các bô lão Mắc cỡ