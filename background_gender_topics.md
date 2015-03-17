1. Definition :

So that this tip works, it is necessary that the field "gender" is visible in the messages profile and this, with a picture and not only the text ! We are going to create a CSS additional class fa\_postbody\_xy (for the boys) and fa\_postbody\_xx (for the girls) to the message body according to the informed gender, and with this new class, we'll be able to personalize the design of the post by manipulating its CSS.

2. The codes :

Administration Panel Modules HTML & Javascript Javascript codes management

Create a new Javascript to apply "in the topics".


> Title : (What you want)
> Placement : in the topics
> Javascript code :

```


$(function() {

//Indicate here the version of your forum.
var version = "phpBB3";

if(version.toLowerCase() == "phpbb2"){
$(".postdetails img[title='Male']").closest('.postdetails').parent('td').next('td').addClass("fa_postbody_xy");
$(".postdetails img[title='Female']").closest('.postdetails').parent('td').next('td').addClass("fa_postbody_xx");
}else if(version.toLowerCase() == "phpbb3"){
$(".postprofile img[title='Male']").closest('.postprofile').prev('.postbody').addClass("fa_postbody_xy");
$(".postprofile img[title='Female']").closest('.postprofile').prev('.postbody').addClass("fa_postbody_xx");
}else if(version.toLowerCase() == "punbb"){
$(".user-info img[title='Male']").closest('.postmain').addClass("fa_postbody_xy");
$(".user-info img[title='Female']").closest('.postmain').addClass("fa_postbody_xx");
}else if(version.toLowerCase() == "invision"){
$(".postprofile img[title='Male']").closest('.post-container').addClass("fa_postbody_xy");
$(".postprofile img[title='Female']").closest('.post-container').addClass("fa_postbody_xx");
}
});

```


Important!: To make it works you absolutely need to indicate the version of your forum by editing the value of the variable version, you have the choice between phpBB2, phpBB3, punBB and Invision.


3. Personalization of the CSS :

For example, here we have a CSS which act on the 2 classes that we have set up, thanks to the javascript a background picture will be applied, different depending on your skill and your imagination. Smile

Administration Panel Display Colors and pics Colors CSS stylesheet



```


.fa_postbody_xy{
background: url("http://i45.servimg.com/u/f45/17/45/19/77/xy10.png");
min-height: 500px;
}

.fa_postbody_xx {
background: url("http://i45.servimg.com/u/f45/17/45/19/77/xx10.png");
min-height: 500px;
}


```
4. The results :

![http://i45.servimg.com/u/f45/17/45/19/77/sin_ta37.jpg](http://i45.servimg.com/u/f45/17/45/19/77/sin_ta37.jpg)