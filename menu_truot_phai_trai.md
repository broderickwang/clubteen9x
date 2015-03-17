Chuyên viên
Trả biết gọi là gì nên đặt tạm cái tiêu đề hơi cùi bắp cười ngoác miệng , ai biết thì đặt lại cái tên nhá
cái này mình tách từ skin hạt dẻ ra ai thích thì dùng
demo:   ![http://i43.servimg.com/u/f43/15/93/33/76/610.jpg](http://i43.servimg.com/u/f43/15/93/33/76/610.jpg)



Hướng dẫn :

Bước 1 :
Thêm đoạn sau vào Css :

```

#vertical_slider  a{
text-decoration:none;
color:#999;}

#vertical_slider li{
height: 90px;
padding: 0px;
margin:0 15px 0 0;
list-style:none;
display:inline;}

#vertical_slider li a{
display: inline-block!important;
overflow: hidden;
height: 90px;
line-height:90px;
width: 128px;
white-space:nowrap;
text-align:left;}


#vertical_slider li a p {
padding:0 0 0 135px;
line-height:normal;}

#vertical_slider li a p strong {
font-size:24px;
color:#336600;}


#vertical_slider  li a.rss_feed {
background:url(http://i36.servimg.com/u/f36/11/96/49/61/rss10.png) top left no-repeat;}

#vertical_slider li a.news {
background:url(http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/skin%20fg-coding/3.png) top left no-repeat;}


#vertical_slider li a.suport {
background:url(http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/skin%20fg-coding/2.png) top left no-repeat;}


#vertical_slider li a.portfolio {
background:url(http://i1129.photobucket.com/albums/m513/nguyenanhdung_2010/skin%20fg-coding/4.png) top left no-repeat;}

```

Bước 2 : Vào Header tìm : và thêm code này đằng sau nó ( hoặc thêm vào đầu index\_body )

```


<ul id="vertical_slider">

<li><a href="/f5-forum" class="rss_feed"><p><strong>Thông báo mới nhất

Unknown end tag for &lt;/strong&gt;

<br />Cập nhật thông báo mới nhất<br />từ forum {SITENAME_TITLE}<br> 

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/f11-forum" class="news"><p><strong style="font-size:24px;">Thủ thuật - Phần mềm

Unknown end tag for &lt;/strong&gt;

<br />Tổng hợp những thủ thuật,phần mềm <br>cần thiết cho máy tính của bạn {SITENAME_TITLE}.<br> 

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/f10-forum" class="suport"><p><strong>Ebook

Unknown end tag for &lt;/strong&gt;

<br />Tổng hợp sách điện tử, <br>những cuốn sách hay<br>về PC cần khám phá

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="/c2-category" class="portfolio"><p><strong>Forumotion

Unknown end tag for &lt;/strong&gt;

<br />Tất cả về Forumotion <br>Code,skin,Hỏi đáp ... tại đây <br> 

Unknown end tag for &lt;/p&gt;



Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;



```

ok thế là xong cười nhăn răng ai ko làm được thì reply mình nhá