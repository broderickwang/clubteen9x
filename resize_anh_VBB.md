```
        <script>window.onload = function resizeImagesForumotion()
{
if (document.images.length > 0)
{

var maxWidth =768;
var imgHeight;
var imgWidth;
for (var i = 0; i < document.images.length; i++)
{
imgWidth = document.images[i].width;
imgHeight = document.images[i].height;
if (document.images[i].width > maxWidth && document.images[i].src != "http://i81.servimg.com/u/f81/14/01/69/16/banner14.jpg")  {
image = new Image();
image = document.images[i];

newImage = image.cloneNode( true )  ;

newImage.origHeight = image.height;
newImage.origWidth = image.width;


newImage.width = maxWidth ;

imgHeight = imgHeight / (imgWidth/ maxWidth );
newImage.height = imgHeight;

newImage.style.cursor = 'pointer';


if( image.outerHTML )
{
newImage.onclick = "var altHeight; var altWidth;  altHeight = this.height ; altWidth = this.width; this.width = this.origWidth;    this.height = this.origHeight; this.origWidth = altWidth; this.origHeight = altHeight;    ";
} else {
newImage.onclick = function () {
var altHeight;
var altWidth;

altHeight = this.height ;
altWidth = this.width;

this.width = this.origWidth;
this.height = this.origHeight;

this.origWidth = altWidth;
this.origHeight = altHeight;
};
}


if( parentNode = image.parentNode )
{
textMessage = document.createTextNode(' Hình ảnh đã được thu nhỏ, click vào để xem với kích thước thật');

elem = document.createElement("td");
elem.setAttribute( "align", "center");
elem.style.backgroundColor = '#FFFFCC';
elem.style.color = '#000';
elem.style.fontSize = '10pt';

elem.appendChild( textMessage );
elem.appendChild( document.createElement("br"));
elem.appendChild( newImage );


tableRow = document.createElement("tr");
tableRow.appendChild(elem);

TableElem = document.createElement("table");
TableElem.setAttribute( "border", "0");
TableElem.appendChild( tableRow );

frag = document.createElement("div");
frag.appendChild( TableElem );

if( image.outerHTML )
{
image.outerHTML = frag.innerHTML;
} else {
parentNode.replaceChild( TableElem, image );
}
}
} }
}
} 

Unknown end tag for &lt;/script&gt;


```