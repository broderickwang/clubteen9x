![http://i.imgur.com/M8deb.png](http://i.imgur.com/M8deb.png)
CSS Code:

```
        input[type="checkbox"]{background-image:-webkit-linear-gradient(hsla(0,0%,0%,.1),hsla(0,0%,100%,.1)),-webkit-linear-gradient(left,#f66 50%,#6cf 50%);background-size:100% 100%,200% 100%;background-position:0 0,5px 0;border-radius:25px;box-shadow:inset 0 1px 4px hsla(0,0%,0%,.5),inset 0 0 10px hsla(0,0%,0%,.5),0 0 0 1px hsla(0,0%,0%,.1),0 -1px 2px 1px hsla(0,0%,0%,.25),0 2px 2px 1px hsla(0,0%,100%,.75),0 -2px 10px 2px hsla(0,0%,100%,.75),0 2px 10px 2px hsla(0,0%,0%,.25);height:10px;padding-right:10px;position:relative;width:20px;-webkit-appearance:none;-webkit-transition:.15s}
input[type="checkbox"]:after{background-color:#eee;background-image:-webkit-linear-gradient(hsla(0,0%,100%,.1),hsla(0,0%,0%,.1));border-radius:25px;box-shadow:inset 0 1px 1px 1px hsla(0,0%,100%,1),inset 0 -1px 1px 1px hsla(0,0%,0%,.25),0 1px 3px 1px hsla(0,0%,0%,.5),0 0 2px hsla(0,0%,0%,.25);content:'';display:block;height:10px;left:0;position:relative;top:0;width:10px}
input[type="checkbox"]:checked{   background-position:0 0,15px 0;   padding-left:10px;   padding-right:0}
input[type="checkbox"]:hover:before{background:hsla(0,0%,0%,.7);border-radius:10px;color:#e4ded4;content:'✘';font:12px/20px sans-serif;height:20px;left:25px;letter-spacing:1px;position:absolute;text-align:center;text-transform:uppercase;top:-5px;width:20px;display:block}
input[type="checkbox"]:checked:hover:before{content:'✔'}```