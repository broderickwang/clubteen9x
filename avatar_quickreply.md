Cho cai nay vao css
![http://i70.servimg.com/u/f70/18/14/82/31/110.jpg](http://i70.servimg.com/u/f70/18/14/82/31/110.jpg)


```


/*smiley-box e quickreply*/
#smiley-box iframe{height: 230px;}
#smilies_categ{padding: 0px 0}
#smiley-box{border:1px solid #DDD;margin:5px 0!important;padding:5px}
.pun .frm .frm-buttons input {
background-image: url(http://i.imgur.com/Qt4G6.png);
border: 1px solid #CCC;
border-bottom: 1px solid #BBB;
border-image: initial;
border-radius: 4px;
box-shadow: 0 1px 2px #ccc;
color: #333;
cursor: pointer;
margin: 0 2px 16px;
padding: 7px 22px;
}

.pun .main-head a.exthelp, .pun .main-head a.exthelp:link, .pun .main-head a.exthelp:visited {
background-image: url(http://cdn2.iconfinder.com/data/icons/humano2/16x16/apps/gnome-help.png);
background-position: left;
background-repeat: no-repeat;
color: white;
padding-left: 20px;
}

#quick_reply fieldset.frm-set dl dd {
background: white;
border: solid 1px #CCC;
margin: 0 auto;
}
#quick_reply .frm-buttons {
-moz-border-radius-bottomleft: 5px;
-moz-border-radius-bottomright: 5px;
-webkit-border-bottom-left-radius: 5px;
-webkit-border-bottom-right-radius: 5px;
background-color: #EEE;
border: solid 1px #CCC;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
border-top: 0;
margin: 0 auto;
padding: 5px;
text-align: center;
}

.pun .frm-form {
background: #F5F6F7;
border: none;
}

.main .main-content.frm {
background-color: #F5F6F7;
}

#textarea_content dt {display:none}

a.button2, body:last-child a.button1, button.button2, input.button1, input.button2 {
-webkit-transition: all 0.218s;
border: 1px solid;
border-radius: 3px;
padding: 0px 0.91em;
}
button.button2, input.button2 {
background-position: 50% 0%;
background-repeat: repeat-x;
border: 1px solid #BCBCBC;
}
a.button2, body:last-child a.button1, button.button2, input.button1, input.button2 {
padding: 1px 0px;
}
button.button2, input.button2 {
background-position: 50% 0%;
background-repeat: repeat-x;
border: 1px solid #BCBCBC;
margin: 0px 0.25em;
overflow: visible;
padding: 2px 3px;
}

/* Avatar */
#quick-avatar {
float: left;
}
#quick-avatar img {
min-width: 60px;
min-height: 100px;
max-height: 100px;
max-width: 60px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
-o-box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);box-shadow: 0px 0px 0px gray;
border-radius: 4px;
}
```

tao 1 js moi

```


jQuery(document).ready(function() {
jQuery('#quick_reply').before('<div id="quick-avatar">

Unknown end tag for &lt;/div&gt;

 ');
});
jQuery(document).ready(function(){
jQuery.get('/profile?mode=editprofile&page_profil=avatars', function(data) {
link = jQuery('.frm dl dd img', data).attr('src');
if(link){
jQuery('#quick-avatar').html('<center><img src="'+link+'" alt="">

Unknown end tag for &lt;/center&gt;

');
}else{
jQuery('#quick-avatar').html('');
}
});
});

```