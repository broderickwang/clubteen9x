![http://i.imgur.com/nmsqY.png](http://i.imgur.com/nmsqY.png)

phpBB3

```

<script>
jQuery.get('/profile.forum?mode=viewprofile&u={USERNAME}', function(data) {
html = jQuery('#profile-advanced-right .module:eq(1) .inner div:eq(1)', data).html();
jQuery('#friends_list').html(html);
});


Unknown end tag for &lt;/script&gt;

<center><div id="friends_list">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/center&gt;



```
phpbb2

```

<script>
jQuery.get('/profile.forum?mode=viewprofile&u={USERNAME}', function(data) {
html = jQuery('.forumline:eq(3) .row1', data).html();
jQuery('#friends_list').html(html);
});


Unknown end tag for &lt;/script&gt;

<center><div id="friends_list">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/center&gt;


```
punbb

```

<script>
jQuery.get('/profile.forum?mode=viewprofile&u={USERNAME}', function(data) {
html = jQuery('#profile-advanced-right .module:eq(2) .main-content', data).html();
jQuery('#friends_list').html(html);
});


Unknown end tag for &lt;/script&gt;

<center><div id="friends_list">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/center&gt;


```
invision

```

<script>
jQuery.get('/profile.forum?mode=viewprofile&u={USERNAME}', function(data) {
html = jQuery('#profile-advanced-right .module:eq(2) .box-content', data).html();
jQuery('#friends_list').html(html);
});


Unknown end tag for &lt;/script&gt;

<center><div id="friends_list">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/center&gt;


```

todo