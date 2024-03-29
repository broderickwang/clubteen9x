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
menuBGColor="#";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=170; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="#000000";
hdrBGColor="black";
hdrAlign="left";
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
barWidth=30; // no quotes!!
barText=""; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Lý lịch của bạn"] //create header
ssmItems[1]=["", "/index.htm", ""]
ssmItems[2]=["Thông tin của bạn", "/profile.forum?mode=editprofile", ""]
ssmItems[3]=["Tùy chỉnh giao diện", "/profile.forum?mode=editprofile&amp;page_profil=preferences", ""]
ssmItems[4]=["Sửa chữ ký", "/profile.forum?mode=editprofile&amp;page_profil=signature", ""]
ssmItems[5]=["Sửa ảnh đại diện", "/profile.forum?mode=editprofile&amp;page_profil=avatars",""]
ssmItems[6]=["Danh sách bạn & thù", "/profile.forum?mode=editprofile&amp;page_profil=friendsfoes", ""]
ssmItems[7]=["Hộp thư đến", "/msg.forum?folder=inbox", ""]
ssmItems[8]=["Hộp thư đi", "/msg.forum?folder=outbox", ""]
ssmItems[9]=["Tin đã gửi", "/msg.forum?folder=sentbox", ""]
ssmItems[10]=["Tin nháp", "/msg.forum?folder=savebox", ""]
ssmItems[11]=["", "/index.htm", ""]

ssmItems[12]=["Khác", "", ""] //create header
ssmItems[13]=["", "/index.htm", ""]
ssmItems[14]=["Gallery", "/gallery/index.htm", ""] 
ssmItems[15]=["Ảnh thành viên", "/forum-f30", ""]
ssmItems[16]=["Clip", "/forum-f34", ""]
ssmItems[17]=["Đọc báo", "/html-h17.htm", ""]
ssmItems[18]=["Game", "/html-h18.htm", ""]
ssmItems[19]=["Xem tivi", "/html-h1.htm", ""]
ssmItems[20]=["Photoshop online", "/html-h10.htm", ""]
ssmItems[21]=["", "/index.htm", ""]

ssmItems[22]=["Đang cập nhật"] //create header

buildMenu();

//-->

