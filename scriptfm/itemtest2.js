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
barWidth=32; // no quotes!!
barText=""; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["Home", "http://nhuxuan.com/", ""]
ssmItems[2]=["Music", "http://nhuxuanmusic.tk/", ""]
ssmItems[3]=["Ð?ng Nh?p", "http://nhuxuan.com/login.forum?connexion", ""]
ssmItems[4]=["Ð?ng kí", "http://nhuxuan.com/profile.forum?mode=register",""]
ssmItems[5]=["Forum", "http://nhuxuan.com/forum.htm", ""]
ssmItems[6]=["Trang tin", "/portal.htm", ""]
ssmItems[7]=["S? ki?n", "/calendar.forum", ""]
ssmItems[8]=["Tr? giúp", "/faq.htm", ""]
ssmItems[9]=["Tìm ki?m", "/search.forum", ""]

ssmItems[10]=["H?p th?", "", ""] //create header
ssmItems[11]=["Inbox", "/msg.forum?folder=inbox", ""] 
ssmItems[12]=["Sentbox", "/msg.forum?folder=sentbox", ""]

ssmItems[13]=["Lí L?ch", "", ""] //create header
ssmItems[14]=["Thông tin", "/profile.forum?mode=editprofile", ""]
ssmItems[15]=["Giao di?n", "/profile.forum?mode=editprofile&page_profil=preferences", ""]
ssmItems[16]=["Ch? kí", "/profile.forum?mode=editprofile&page_profil=signature", ""]
ssmItems[17]=["?nh ??i di?n", "/profile.forum?mode=editprofile&page_profil=avatars", ""]

ssmItems[18]=["B?n bè", "", ""] //create header
ssmItems[19]=["Thành Viên", "/memberlist.forum", ""]
ssmItems[20]=["Nhóm", "/groupcp.forum", ""]
ssmItems[21]=["B?n thù", "http://nhuxuan.com/profile.forum?mode=editprofile&page_profil=friendsfoes", ""]

ssmItems[22]=["Khác", "", ""] //create header
ssmItems[23]=["Bài vi?t dã xem", "/search.forum?search_id=watchsearche", ""]
ssmItems[24]=["Thoát", "/login.forum?logout=true", ""]

ssmItems[25]=["C?p nh?t sau"] //create header

buildMenu();

//-->

