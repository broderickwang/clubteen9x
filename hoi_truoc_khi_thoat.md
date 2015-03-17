Cách làm :
![http://i11.servimg.com/u/f11/17/98/40/25/1210.jpg](http://i11.servimg.com/u/f11/17/98/40/25/1210.jpg)
Admin Panel -> Modules -> JavaScript Codes Management -> Make sure it's on -> Create new -> Title it "Logout" - > Select "In all pages" ->


```

$(document).ready(function() {
var x = document.getElementById('logout');
$(x).click(function(cLogout) {
var y = confirm("Are you sure you want to logout?");
if (y == true) {
return true;
} else { cLogout.preventDefault(); }
});
});



```