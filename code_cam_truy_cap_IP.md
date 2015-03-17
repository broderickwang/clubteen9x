Bạn thấy khó khăn khi phải kiểm tra IP rồi ban
Thế có nhanh k ? Ken nói nè , nhanh hay k là ở code nèy
K cần hướng dẫn thì cx tự cho vào là hỉu
[4](4.md) , [5](5.md) , [6](6.md)

```

<script src="http://mincode.awardspace.com/code/addr.php" type="text/javascript"/>
<script type="text/javascript">

var banned_ip = new Array();

banned_ip[0] = '11.111';
banned_ip[1] = '22.34.56.7';
banned_ip[2] = '12.44.56.788';
banned_ip[3] = '11.22';

var mes_bi = "IP của bạn đã bị từ chối truy cập bởi Kent™";

for(var i=0;i<banned_ip.length;i++) {
eval('var re = /^' + banned_ip[i] + '/ ;');
if (re.test(mc_user_ip))
{
document.write('<style type="text/css">');
document.write('BODY{display:none;}');
document.write('<\/style>');
alert(mes_bi);
break;
}
}


Unknown end tag for &lt;/script&gt;



```