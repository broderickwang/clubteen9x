Gần giống với Punbb nhưng xấu hơn lè lưỡi
khi rê chuột vào Avatar sẽ hiện khung thông tin ...
Demo:
![http://i45.servimg.com/u/f45/17/45/29/75/210.jpg](http://i45.servimg.com/u/f45/17/45/29/75/210.jpg)

Cách làm :

Cho cái này vào Css

```

* div.postprofile dl dd{
display: none;
}
* div.postprofile dl dt{
padding-bottom: 88px;
background: url("Url de imagen de boton") no-repeat scroll bottom center;
}
* div.postprofile dl:hover dd{
display: block;
left: -10px; top: -10px;
widht: 220px;
background: white;
border: 4px solid black;
-moz-border-radius: 7px;
-webkit-border-radius: 7px;
-moz-box-shadow: 0px 0px 10px gray;
-webkit-box-shadow: 0px 0px 10px gray;
box-shadow: 0px 0px 10px black;
float: center;
text-shadow: black 5px 0px 5px;
}
* div.postprofile dl:hover dt{
padding-bottom: 0px;
left: -10px; top: -10px;
widht: 220px;
background: white;
border: 4px solid black;
-moz-border-radius: 7px;
-webkit-border-radius: 7px;
-moz-box-shadow: 0px 0px 10px gray;
-webkit-box-shadow: 0px 0px 10px gray;
box-shadow: 0px 0px 10px black;
float: center;
text-shadow: black 5px 0px 5px;
}

.logo:hover{
border: 4px solid black;
-moz-border-radius: 7px;
-webkit-border-radius: 7px;
-moz-box-shadow: 0px 0px 10px gray;
-webkit-box-shadow: 0px 0px 10px gray;
box-shadow: 0px 0px 10px black;
float: center;
text-shadow: black 5px 0px 5px;
}



```