Demo: http://tomkute.forumvi.com/h7-

Chèn code sau vào 1 trang HTML và "ngâm cứu" hihi
Đã ẩn. Reply để thấy Mắc cỡ...
```


<div id="gui">
<label>effect

Unknown end tag for &lt;/label&gt;


<select id="effect">
<option value=0>none</option>
<option value=1>blur</option>
<option value=2>blink</option>
<option value=3>earthquake</option>


Unknown end tag for &lt;/select&gt;


<label>global pulsation

Unknown end tag for &lt;/label&gt;


<select id="globalPulsation">
<option value=0>no</option>
<option value=1>yes</option>


Unknown end tag for &lt;/select&gt;


<label>pulsation speed

Unknown end tag for &lt;/label&gt;


<select id="pulsationSpeed">
<option value=100>0.1 s

Unknown end tag for &lt;/option&gt;


<option value=250>0.25 s

Unknown end tag for &lt;/option&gt;


<option value=500 selected>0.5 s

Unknown end tag for &lt;/option&gt;


<option value=1000>1 s

Unknown end tag for &lt;/option&gt;


<option value=1500>1.5 s

Unknown end tag for &lt;/option&gt;




Unknown end tag for &lt;/select&gt;


<label>radius

Unknown end tag for &lt;/label&gt;


<select id="particleRadius">
<option value=2>2</option>
<option value=5 selected>5

Unknown end tag for &lt;/option&gt;


<option value=7>7</option>
<option value=10>10</option>
<option value=15>15</option>


Unknown end tag for &lt;/select&gt;


<label>shapes

Unknown end tag for &lt;/label&gt;


<select id="shape">
<option value=0>circles</option>
<option value=1>rectangles</option>


Unknown end tag for &lt;/select&gt;


<label>blending

Unknown end tag for &lt;/label&gt;


<select id="blending">
<option value=1 selected>yes

Unknown end tag for &lt;/option&gt;


<option value=0>no</option>


Unknown end tag for &lt;/select&gt;




Unknown end tag for &lt;/div&gt;


<canvas id="canvas" width="600" height="300">

Unknown end tag for &lt;/canvas&gt;


<style>
body{background:#003;text-align:center}
canvas{left:50%;position:absolute;top:50%;margin-top:-150px;margin-left:-300px}
#gui{background:rgba(0,60,60,0.5);border-bottom:1px solid rgba(0,0,0,0.5);padding:4px}
label{color:#0aa;font-size:11px;max-width:60px;display:inline-block;vertical-align:middle}
select{background:rgba(0,0,0,0.5);color:#0ff;border-radius:7px;border:0;font-size:13px;padding:2px}
option{background:#012}


Unknown end tag for &lt;/style&gt;


<script>
/* play with these values */
BLUR = false;
PULSATION = true;
PULSATION_PERIOD = 500;
PARTICLE_RADIUS = 5;
/* disable blur before using blink */
BLINK = false;
GLOBAL_PULSATION = false;
QUALITY = 2; /* 0 - 5 */
/* set false if you prefer rectangles */
ARC = true;
/* trembling + blur = fun */
TREMBLING = 0; /* 0 - infinity */
FANCY_FONT = "arial";
BACKGROUND = "#003";
BLENDING = true;
/* ------------------ */
QUALITY_TO_FONT_SIZE = [10, 20, 50, 100, 200, 350];
QUALITY_TO_SCALE = [20, 14, 6, 3, 1.5, 0.9];
QUALITY_TO_TEXT_POS = [10, 18, 43, 86, 170, 280];
window.onload = function () {
document.body.style.backgroundColor = BACKGROUND;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = canvas.width;
var H = canvas.height;
var tcanvas = document.createElement("canvas");
var tctx = tcanvas.getContext("2d");
tcanvas.width = W;
tcanvas.height = H;
total_area = W * H;
total_particles = 800;
single_particle_area = total_area / total_particles;
area_length = Math.sqrt(single_particle_area);
console.log(area_length);
var particles = [];
for(var i = 1; i <= total_particles; i++) {
particles.push(new particle(i));
}
function particle(i) {
this.r = Math.round(Math.random() * 255 | 0);
this.g = Math.round(Math.random() * 255 | 0);
this.b = Math.round(Math.random() * 255 | 0);
this.alpha = 1;
this.x = (i * area_length) % W;
this.y = (i * area_length) / W * area_length;
/* randomize delta to make particles sparkling */
this.deltaOffset = Math.random() * PULSATION_PERIOD | 0;
this.radius = 0.1 + Math.random() * 2;
}
var positions = [];
function new_positions() {
tctx.fillStyle = "white";
tctx.fillRect(0, 0, W, H)
tctx.fill();
tctx.font = "bold " + QUALITY_TO_FONT_SIZE[QUALITY] + "px " + FANCY_FONT;
var text = String(Math.random()).substr(-3);
tctx.strokeStyle = "black";
tctx.strokeText(text, (QUALITY + 1) * 5, QUALITY_TO_TEXT_POS[QUALITY]);
image_data = tctx.getImageData(0, 0, W, H);
pixels = image_data.data;
positions = [];
for(var i = 0; i < pixels.length; i = i + 4) {
if(pixels[i] != 255) {
position = {
x: (i / 4 % W | 0) * QUALITY_TO_SCALE[QUALITY] | 0,
y: (i / 4 / W | 0) * QUALITY_TO_SCALE[QUALITY] | 0
}
positions.push(position);
}
}
get_destinations();
}
function draw() {
var now = Date.now();
ctx.globalCompositeOperation = "source-over";
if(BLUR) ctx.globalAlpha = 0.1;
else if(!BLUR && !BLINK) ctx.globalAlpha = 1.0;
ctx.fillStyle = BACKGROUND;
ctx.fillRect(0, 0, W, H)
if(BLENDING) ctx.globalCompositeOperation = "lighter";
for(var i = 0; i < particles.length; i++) {
p = particles[i];
/* in lower qualities there is not enough full pixels for all of  them - dirty hack*/
if(isNaN(p.x)) continue
ctx.beginPath();
ctx.fillStyle = "rgb(" + p.r + ", " + p.g + ", " + p.b + ")";
ctx.fillStyle = "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.alpha + ")";
if(BLINK) ctx.globalAlpha = Math.sin(Math.PI * mod * 1.0);
if(PULSATION) { /* this would be 0 -> 1 */
var mod = ((GLOBAL_PULSATION ? 0 : p.deltaOffset) + now) % PULSATION_PERIOD / PULSATION_PERIOD;
/* lets make the value bouncing with sinus */
mod = Math.sin(mod * Math.PI);
} else var mod = 1;
var offset = TREMBLING ? TREMBLING * (-1 + Math.random() * 2) : 0;
var radius = PARTICLE_RADIUS * p.radius;
if(!ARC) {
ctx.fillRect(offset + p.x - mod * radius / 2 | 0, offset + p.y - mod * radius / 2 | 0, radius * mod, radius * mod);
} else {
ctx.arc(offset + p.x | 0, offset + p.y | 0, radius * mod, Math.PI * 2, false);
ctx.fill();
}
p.x += (p.dx - p.x) / 10;
p.y += (p.dy - p.y) / 10;
}
}
function get_destinations() {
for(var i = 0; i < particles.length; i++) {
pa = particles[i];
particles[i].alpha = 1;
var distance = [];
nearest_position = 0;
if(positions.length) {
for(var n = 0; n < positions.length; n++) {
po = positions[n];
distance[n] = Math.sqrt((pa.x - po.x) * (pa.x - po.x) + (pa.y - po.y) * (pa.y - po.y));
if(n > 0) {
if(distance[n] <= distance[nearest_position]) {
nearest_position = n;
}
}
}
particles[i].dx = positions[nearest_position].x;
particles[i].dy = positions[nearest_position].y;
particles[i].distance = distance[nearest_position];
var po1 = positions[nearest_position];
for(var n = 0; n < positions.length; n++) {
var po2 = positions[n];
distance = Math.sqrt((po1.x - po2.x) * (po1.x - po2.x) + (po1.y - po2.y) * (po1.y - po2.y));
if(distance <= 5) {
positions.splice(n, 1);
}
}
} else {
//particles[i].alpha = 0;
}
}
}
function init() {
new_positions();
setInterval(draw, 16.67);
setInterval(new_positions, 2000);
}
init();
}
/* GUI */
document.getElementById("globalPulsation").addEventListener("change", function () {
switch(this.value | 0) {
case 0:
GLOBAL_PULSATION = false;
break;
case 1:
GLOBAL_PULSATION = true;
break;
}
});
document.getElementById("effect").addEventListener("change", function () {
TREMBLING = 0;
switch(this.value | 0) {
case 0:
BLUR = false;
BLINK = false;
break;
case 1:
BLUR = true;
BLINK = false;
break;
case 2:
BLUR = false;
BLINK = true;
break;
case 3:
BLUR = true;
TREMBLING = 5;
break;
}
});
document.getElementById("pulsationSpeed").addEventListener("change", function () {
PULSATION_PERIOD = this.value;
});
document.getElementById("particleRadius").addEventListener("change", function () {
PARTICLE_RADIUS = this.value;
});
document.getElementById("shape").addEventListener("change", function () {
ARC = !parseInt(this.value);
});
document.getElementById("blending").addEventListener("change", function () {
BLENDING = parseInt(this.value);
});


Unknown end tag for &lt;/script&gt;



```

Nguồn: http://cssdeck.com/

Tài sản