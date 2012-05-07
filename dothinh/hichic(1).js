<html>
<head>
<title>Love</title>

<script language="JavaScript">
<!-- Begin
var flag = 1;
function t() {
if(flag == 1) {
N.style.top = "120px";
N.style.left = "320px";
}
if(flag == 2) {
N.style.top = "120px";
N.style.left = "500px";
}
flag = flag + 1;
if(flag == 3) {
flag = 1;
}
}
function al() {
alert("t0' cug~ thjx ay^' nua~");
alert("Hy vong ay^' se~ vuj");
alert("Tam. biet^. Ay^' !");
alert("Chuc' Ay^' lun zuj ze & hp ^^ !");
}
// End -->
</script>
</head>

<body>
<br>
<center>
<form>
<p>
<b>
<font color="red" size='8'>t0' h0j~ nhe' Ay^' c0' thjx t0' hem zdy h0~ ...?</font></b>

</p><div id="N" style="height: 120px; left: 500px; position: absolute; top: 120px; width: 100px;">
<input onmouseover="t()" value=" Không " type="button"></div><div id="Y" style="height: 120px; left: 410px; position: absolute; top: 120px; width: 100px;">
<input onclick="al()" value=" Có " type="button"></div>
</form><br><br><br><font color='gray' size='1' face='tahoma'><b>Design by Tú Ðình</b></font>
</center>
</body>
</html>

<script language=JavaScript>
<!--

//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="I love you forever";

///////////////////////////////////
function clickIE4(){
if (event.button==2){
alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")

// -->
</script>