Chèn code nì vào CSS

```


#loading {    width: 200px;    height: 100px;    background-color: #c0c0c0;    position: absolute;    left: 50%;    top: 50%;    margin-top: -50px;    margin-left: -100px;    text-align: center;}

```

Chèn đoạn này vào trang muốn có hiệu ứng

```


<script type="text/javascript"
document.write('<div id="loading"><br><br>Vui lòng đợi chút nhé ...

Unknown end tag for &lt;/div&gt;

');

function addLoadEvent(func) {
var oldonload = window.onload;
if (typeof window.onload != 'function') {
window.onload = func;
} else {
window.onload = function() {
if (oldonload) {
oldonload();
}
func();
}
}
}

addLoadEvent(function() {
document.getElementById("loading").style.display="none";
});

Unknown end tag for &lt;/script&gt;

```