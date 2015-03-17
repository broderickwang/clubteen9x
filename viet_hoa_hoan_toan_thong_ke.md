```

{L_CONNECTED_MEMBERS}
{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

```
> Với phpBB2 th

Unknown end tag for &lt;/code&gt;

ay bằng :

```

<table id="c3stats">{L_CONNECTED_MEMBERS}
{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/table&gt;


```

> Với punBB thay bằng :

```

<div id="c3stats">{L_CONNECTED_MEMBERS}
{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}

Unknown end tag for &lt;/div&gt;



```
> Sau đó thêm vào ngay sau đoạn vừa thay đoạn code sau:

```

<script type="text/javascript">
document.getElementById('c3stats').innerHTML=document.getElementById('c3stats').innerHTML.replace(/Members connected during last (.+) hours/,'Thành viên truy cập trong $1 giờ').replace(/Users having a birthday today/,'Thành viên có sinh nhật hôm nay').replace(/No users have a birthday today/,'Không có thành viên có sinh nhật vào hôm nay').replace(/Users with a birthday within the next (.+) days/,'Thành viên có sinh nhật trong $1 ngày kế tiếp').replace(/No users are having a birthday in the upcoming (.+) days/,'Không có thành viên nào có sinh nhật trong $1 ngày kế tiếp');


Unknown end tag for &lt;/script&gt;

```

Không có tác dụng trên trình duyệt Internet Explorer