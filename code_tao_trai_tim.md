```

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="author" content="Diễn Đàn Ca3" />
<meta name="keywords" content="Ca3 forum" />
<meta name="description" content="Diễn Đàn Ca3 http://www.ca3vt.tk" />




<script type="text/javascript">
function createHeart(sourceId, resultId) {
objSource = window.document.getElementById(sourceId);
objResult = window.document.getElementById(resultId);

if(objSource.value.length == 0) {
alert("Bạn chưa nhập đoạn text cần tạo hình trái tim vào ô trống!");
return false;
} else {alert("Trái tim sắp ra lò, hãy copy và chèn vào blog của bạn nhé ^^!");}

string = objSource.value;

heart = "";
heart += "_________" + partString(string, 8) + "____________" + partString(string, 9) + "\n";
heart += "______" + partString(string, 12) + "_______" + partString(string, 15) + "\n";
heart += "____" + partString(string, 17) + "___" + partString(string, 18) + "\n";
heart += "___" + partString(string, 41) + "\n";
heart += "__" + partString(string, 44) + "\n";
heart += "_" + partString(string, 46) + "\n";
heart += "_" + partString(string, 46) + "\n";
heart += partString(string, 47) + "\n";
heart += partString(string, 47) + "\n";
heart += partString(string, 46) + "\n";
heart += partString(string, 45) + "\n";
heart += "_" + partString(string, 43) + "\n";
heart += "__" + partString(string, 41) + "\n";
heart += "____" + partString(string, 38) + "\n";
heart += "______" + partString(string, 34) + "\n";
heart += "_________" + partString(string, 28) + "\n";
heart += "____________" + partString(string, 22) + "\n";
heart += "______________" + partString(string, 18) + "\n";
heart += "_________________" + partString(string, 13) + "\n";
heart += "___________________" + partString(string, 9) + "\n";
heart += "_____________________" + partString(string, 6) + "\n";
heart += "______________________" + partString(string, 4) + "\n";
heart += "_______________________" + partString(string, 2) + "\n";

objResult.value = heart;
}
function partString(string, num) {
if(string.length >= num)
return string.substring(0, num);

repeat = Math.ceil(num / string.length);

newString = "";

for(i = 0; i < repeat; i++)
newString += string;

return newString.substring(0, num);
}



Unknown end tag for &lt;/script&gt;


<p align="center"><a href="http://code1k.com" target="_blank"><img src="http://ca0.upanh.com/upload/6/906/CS0.11092226_29781_1.png" style="border:0px;"/>

Unknown end tag for &lt;/a&gt;

 Nhập thông điệp tình yêu vào đây:<br /><input id="text" name="text" size="37">

Unknown end tag for &lt;/p&gt;

<p align="center"><input name="Create Heart" accesskey="g" onclick="return createHeart('text', 'result');" value="Tạo trái tim" type="button">

Unknown end tag for &lt;/p&gt;

<p align="center">
<textarea cols="45" rows="23" readonly="readonly" wrap="OFF" id="result" onclick="this.focus(); this.select();">

Unknown end tag for &lt;/textarea&gt;



```