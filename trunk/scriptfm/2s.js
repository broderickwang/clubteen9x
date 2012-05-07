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
menuBGColor=&quot;#&quot;;
menuIsStatic=&quot;yes&quot;; //this sets whether menu should stay static on the screen
menuWidth=160; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily=&quot;verdana&quot;;
hdrFontSize=&quot;2&quot;;
hdrFontColor=&quot;#000000&quot;;
hdrBGColor=&quot;#&quot;;
hdrAlign=&quot;left&quot;;
hdrVAlign=&quot;center&quot;;
hdrHeight=&quot;32&quot;;
linkFontFamily=&quot;Verdana&quot;;
linkFontSize=&quot;2&quot;;
linkBGColor=&quot;white&quot;;
linkOverBGColor=&quot;#000000&quot;;
linkTarget=&quot;_top&quot;;
linkAlign=&quot;Left&quot;;
barBGColor=&quot;#&quot;;
barFontFamily=&quot;Verdana&quot;;
barFontSize=&quot;2&quot;;
barFontColor=&quot;#cc9933&quot;;
barVAlign=&quot;center&quot;;
barWidth=30; // no quotes!!
barText=&quot;MENU NHANH&quot;; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=[&quot;<img src=http://i832.photobucket.com/albums/zz244/a1tg3/setting.png> Lý lịch của bạn&quot;] //create header
ssmItems[1]=[&quot;&quot;, &quot;/index.htm&quot;, &quot;&quot;]
ssmItems[2]=[&quot;Thông tin của bạn&quot;, &quot;/profile.forum?mode=editprofile&quot;, &quot;&quot;]
ssmItems[3]=[&quot;Tùy chỉnh giao diện&quot;, &quot;/profile.forum?mode=editprofile&amp;amp;amp;page_profil=preferences&quot;, &quot;&quot;]
ssmItems[4]=[&quot;Sửa chữ ký&quot;, &quot;/profile.forum?mode=editprofile&amp;amp;amp;page_profil=signature&quot;, &quot;&quot;]
ssmItems[5]=[&quot;Sửa ảnh đại diện&quot;, &quot;/profile.forum?mode=editprofile&amp;amp;amp;page_profil=avatars&quot;,&quot;&quot;]
ssmItems[6]=[&quot;Danh sách bạn &amp;amp; thù&quot;, &quot;/profile.forum?mode=editprofile&amp;amp;amp;page_profil=friendsfoes&quot;, &quot;&quot;]
ssmItems[7]=[&quot;Hộp thư đến&quot;, &quot;/msg.forum?folder=inbox&quot;, &quot;&quot;]
ssmItems[8]=[&quot;&quot;, &quot;/index.htm&quot;, &quot;&quot;,&quot;&quot;]

ssmItems[9]=[&quot;<img src=http://i832.photobucket.com/albums/zz244/a1tg3/Other.png> Khác&quot;, &quot;&quot;, &quot;&quot;] //create header
ssmItems[10]=[&quot;&quot;, &quot;/index.htm&quot;, &quot;&quot;]
ssmItems[11]=[&quot;Gallery&quot;, &quot;/gallery/index.htm&quot;, &quot;&quot;] 
ssmItems[12]=[&quot;Ảnh thành viên&quot;, &quot;/forum-f30&quot;, &quot;&quot;]
ssmItems[13]=[&quot;Clip&quot;, &quot;/forum-f34&quot;, &quot;&quot;]
ssmItems[14]=[&quot;Đọc báo&quot;, &quot;/html-h17.htm&quot;, &quot;&quot;]
ssmItems[15]=[&quot;Game&quot;, &quot;/html-h18.htm&quot;, &quot;&quot;]
ssmItems[16]=[&quot;Xem tivi&quot;, &quot;/html-h1.htm&quot;, &quot;&quot;]
ssmItems[17]=[&quot;Photoshop online&quot;, &quot;/html-h10.htm&quot;, &quot;&quot;]
ssmItems[18]=[&quot;&quot;, &quot;/index.htm&quot;, &quot;&quot;]
 //create header

buildMenu();

//-->