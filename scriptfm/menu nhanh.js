<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=150; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="white";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=150; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="#cc9933";
hdrBGColor="black";
hdrAlign="center";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="Verdana";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#ff6699";
linkTarget="_top";
linkAlign="Left";
barBGColor="black";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="#cc9933";
barVAlign="center";
barWidth=20; // no quotes!!
barText="MENU NHANH"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["Đăng Nhập", "/login.forum?connexion", ""]
ssmItems[2]=["Đăng kí", "/profile.forum?mode=register",""]
ssmItems[3]=["Forum", "/forum.htm", ""]
ssmItems[4]=["Trang tin", "/portal.htm", ""]
ssmItems[5]=["Sự kiện", "/calendar.forum", ""]
ssmItems[6]=["Trợ giúp", "/faq.htm", ""]
ssmItems[7]=["Tìm kiếm", "/search.forum", ""]

ssmItems[8]=["Hộp thư", "", ""] //create header
ssmItems[9]=["Inbox", "/msg.forum?folder=inbox", ""] 
ssmItems[10]=["Sentbox", "/msg.forum?folder=sentbox", ""]

ssmItems[11]=["Lí Lịch", "", ""] //create header
ssmItems[12]=["Thông tin", "/profile.forum?mode=editprofile", ""]
ssmItems[13]=["Giao diện", "/profile.forum?mode=editprofile&page_profil=preferences", ""]
ssmItems[14]=["Chữ kí", "/profile.forum?mode=editprofile&page_profil=signature", ""]
ssmItems[15]=["Ảnh đại diện", "/profile.forum?mode=editprofile&page_profil=avatars", ""]

ssmItems[16]=["Bạn bè", "", ""] //create header
ssmItems[17]=["Thành Viên", "/memberlist.forum", ""]
ssmItems[18]=["Nhóm", "/groupcp.forum", ""]
ssmItems[19]=["Bạn thù", "/profile.forum?mode=editprofile&page_profil=friendsfoes", ""]

ssmItems[20]=["Khác", "", ""] //create header
ssmItems[21]=["Bài viết đã xem", "/search.forum?search_id=watchsearche", ""]
ssmItems[22]=["Thoát", "/login.forum?logout=true", ""]

ssmItems[23]=["Cập nhật sau"] //create header

buildMenu();

//-->