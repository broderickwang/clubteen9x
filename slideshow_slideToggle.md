Demo: http://www.fmvi.vn/h158-slide-slidetoggle
```
        <style>
#fmvislide > div:first-child {
display: block
}
#fmvislide>div {
display: none;
line-height: 300px;
border: 0 none;
color: #FFFFFF;
font-size: 50px;
height: 300px;
text-align: center;
}
#fmvislide > p {
line-height: 16px;
}
#button span {
background-color: green;
border: 1px solid #000000;
font-size: 7px;
margin: 0 5px;
padding: 0 5px;
}
#button span.active {
background-color:red
}
#pause {
border-color: transparent #000000;
border-style: solid;
border-width: 0 5px;
float: left;
margin: 2px 5px 2px 0;
padding: 6px 2px;
}
#play {
border-color: transparent transparent transparent rgb(0, 0, 0);
border-style: solid;
padding: 0px;
margin: 2px 3px 2px 0;
float: left;
border-width: 6px 6px 6px 10px;
}
#next, #prev, #next2, #prev2 {
border-style: solid;
border-width: 5px 5px 0 0;
display: inline-block;
float: left;
font-size: 6px;
height: 8px;
margin: 0 10px;
padding: 0 4px;
width: 0;
-moz-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
}
#next, #next2 {
-moz-transform: rotate(135deg);
-o-transform: rotate(135deg);
-webkit-transform: rotate(135deg);
}
#plus, #minus {
float: left;
font-family: cursive;
font-size: 30px;
margin-top: -3px;
}


Unknown end tag for &lt;/style&gt;


<div id="fmvislide">
<div style="background-color: #31813A;">1

Unknown end tag for &lt;/div&gt;


<div style="background-color: #1B94BC;">2

Unknown end tag for &lt;/div&gt;


<div style="background-color: #8B15A2;">3

Unknown end tag for &lt;/div&gt;


<div style="background-color: #31813A;">4

Unknown end tag for &lt;/div&gt;


<div style="background-color: #1B94BC;">5

Unknown end tag for &lt;/div&gt;


<div style="background-color: #8B15A2;">6

Unknown end tag for &lt;/div&gt;


<div style="background-color: #31813A;">7

Unknown end tag for &lt;/div&gt;


<div style="background-color: #1B94BC;">8

Unknown end tag for &lt;/div&gt;


<div style="background-color: #8B15A2;">9

Unknown end tag for &lt;/div&gt;


<div style="background-color: #31813A;">10

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<div id="button">
<strong id="pause" style="display:none" onclick="fmvipause()">

Unknown end tag for &lt;/strong&gt;


<strong id="play" onclick="fmviplay()">

Unknown end tag for &lt;/strong&gt;


<strong id="prev" style="margin-top: 4px" onclick="fmviprev()">

Unknown end tag for &lt;/strong&gt;


<strong id="next" onclick="fmvinext()" style="margin-top: -1px;">

Unknown end tag for &lt;/strong&gt;


<strong id="plus" onclick="plus()">+

Unknown end tag for &lt;/strong&gt;


<strong id="minus" onclick="minus()"  style="margin-top: -5px">-

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/div&gt;



<script>
var z = n = 0,
k = $("#fmvislide>div").length;

$("#fmvislide>div").each(function () {
$("#button").append('<span onclick="fmviItem(' + (n++) + ')">

Unknown end tag for &lt;/span&gt;

');
$("#button span:first").addClass("active");
});

function plus() {
$("#fmvislide").append('<div style="background-color: #000;">' + (k + 1) + '

Unknown end tag for &lt;/div&gt;

');
$("#button").append('<span onclick="fmviItem(' + (k) + ')">

Unknown end tag for &lt;/span&gt;

');
k = k + 1
}

function minus() {
$("#fmvislide>div:last, #button span:last").remove();
k = k - 1
}

function fmviItem(a) {
button(a);
$("#fmvislide>div").hide();
$("#fmvislide>div:eq(" + a + ")").show();
z = a
}

function button(a) {
$("#button span").removeClass("active");
$("#button span:eq(" + a + ")").addClass("active");
}

function fmvinext() {
if (z < k - 1) {
$("#fmvislide>div:eq(" + (z + 1) + ")").slideToggle();
$("#fmvislide>div:eq(" + z + ")").slideToggle();
z = z + 1;
} else if (z >= k - 1) {
z = k - 1
}
button(z)
}

function fmviprev() {
if (z > 0) {
$("#fmvislide>div:eq(" + z + ")").slideToggle();
$("#fmvislide>div:eq(" + (z - 1) + ")").slideToggle();
z = z - 1;
} else if (z <= 0) {
z = 0
}
button(z)
}

function fmviplay() {
z = n = 0;
button(0);
$("#pause, #play").toggle();
$("#fmvislide>div").hide();
$("#fmvislide>div:eq(0)").show();
var fmvislide = setInterval(function () {
if (n == 0) {
$("#next").click();
if (z == (k - 1)) {
n = 1
}
} else if (n == 1) {
$("#prev").click();
if (z == 0) {
n = 0
}
}
button(z)
}, 1000);
$("#pause").click(function () {
$("#pause").hide();
$("#play").show();
clearInterval(fmvislide)
})
}


Unknown end tag for &lt;/script&gt;

```