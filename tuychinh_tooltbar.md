Reminder
How to put CSS codes?
Go to
Administration Panel  Display  Colors & Pics  Colors  CSS Stylesheet
And paste your code.


How to put Javascript codes?
Go to
Administration Panel  Modules  HTML & Javascript  Javascript codes management
And click on   "create a new javascript". Be sure that the Javascript are activated.



You can remove the search and share links by putting this in your CSS:
```

#fa_search, #fa_share {
display: none !important;
}
```

You can even change the toggle type to slide, fade, etc:
Put this in your CSS StyleSheet:
```

#fa_right.welcome #fa_menu ul {
display: none;
}```


And this in a JavaScript placed in all pages for the slide effect:
```

$(window).load(function () {
$('#fa_welcome').click(function () {
$('#fa_menulist').slideToggle();
});
});```


Or this for a fade effect:
```

$(window).load(function () {
$('#fa_welcome').click(function () {
$('#fa_menulist').fadeToggle();
});
});

```
The personalization of the toolbar color is possible through the CSS stylesheet:

- Case of a color as background for the toolbar:
```

#fa_toolbar, #fa_toolbar_hidden {background-color: #xxxxxx !important;}

```
#xxxxxx is corresponding to the hexadecimal code of the color.

- Using a background image as the background of the toolbar:
```

#fa_toolbar, #fa_toolbar_hidden {background: url('http://image_url');}

```
You can also hide the toolbar from members and guests:
```

$('head').append('<style id="toolbar_style" type="text/css">#fa_toolbar { display: none; }

Unknown end tag for &lt;/style&gt;

');
$(window).load(function () {
if (_userdata.user_level == 0) $('#fa_toolbar').remove();
else $('#toolbar_style').remove();
});

```

Here's a function that can replace the user profile list text:
```

function changeToolbar(word, replacement) {
for (var name in word) {
document.getElementById('fa_menulist').innerHTML = document.getElementById('fa_menulist').innerHTML.replace(RegExp(name, 'g'), word[name]);
}
}

$(window).load(function () {
changeToolbar({
'All my Messages': 'Messages',
'All my Topics': 'Topics'
});
});

```
You can add on to the list by following the syntax:

For just "All My Messages" it would be:
```

function changeToolbar(word, replacement) {
for (var name in word) {
document.getElementById('fa_menulist').innerHTML = document.getElementById('fa_menulist').innerHTML.replace(RegExp(name, 'g'), word[name]);
}
}

$(window).load(function () {
changeToolbar({
'All my Messages': 'Messages'
});
});
```
Notice the use of the comma when specifying multiple strings.