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
menuBGColor="#e1eebb";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=150; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="Tahoma";
hdrFontSize="2";
hdrFontColor="white";
hdrBGColor="#6cc417";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="18";
linkFontFamily="Tahoma";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#";
linkTarget="_top";
linkAlign="Left";
barBGColor="#254117";
barFontFamily="Tahoma";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="MENU NHANH"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["Trang Chủ", "http://www.a1tinhgia3.co.cc", ""]
ssmItems[2]=["Diễn Đàn", "http://www.a1tinhgia3.co.cc/forum.htm",""]
ssmItems[3]=["Hồ sơ", "http://www.a1tinhgia3.co.cc/profile.forum?mode=editprofile", ""]
ssmItems[4]=["Thành Viên", "http://www.a1tinhgia3.co.cc/memberlist.forum", ""]
ssmItems[5]=["Tìm Kiếm", "http://www.a1tinhgia3.co.cc/search.forum", ""]
ssmItems[6]=["Trợ Giúp", "http://www.a1tinhgia3.co.cc/faq.htm", ""]

ssmItems[7]=["", "http://www.a1tinhgia3.co.cc/index.htm", ""]
ssmItems[8]=["Hộp thư", "http://www.a1tinhgia3.co.cc/msg.forum?folder=inbox", ""]

ssmItems[9]=["For 12A1", "", ""] //create header
ssmItems[10]=["Gallery", "http://www.a1tinhgia3.co.cc/gallery/index.htm", ""]
ssmItems[11]=["Ảnh post", "http://www.a1tinhgia3.co.cc/forum-f30", ""]
ssmItems[12]=["Clip post", "http://www.a1tinhgia3.co.cc/forum-f34", ""]

ssmItems[13]=["Tiện Ích", "", ""] //create header
ssmItems[14]=["Xem Tivi", "http://www.a1tinhgia3.co.cc/html-h1.htm", ""]
ssmItems[15]=["Ðộc Báo", "http://www.a1tinhgia3.co.cc/html-h17.htm", ""]
ssmItems[16]=["Choi Game", "http://www.a1tinhgia3.co.cc/html-h18.htm", ""]
ssmItems[17]=["Photoshop", "http://www.a1tinhgia3.co.cc/html-h10.htm", ""]

buildMenu();

//-->