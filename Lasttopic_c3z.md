[FM](FM.md) Simple mod\_recent\_topics

```
<!-- BEGIN classical_row -->
<div class="module main">
<div class="main-head">
<h3>{L_RECENT_TOPICS}

Unknown end tag for &lt;/h3&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content">
<ol id="c3lastest">
<!-- BEGIN recent_topic_row -->
<li>
<a href="{classical_row.recent_topic_row.U_TITLE}" title="{classical_row.recent_topic_row.S_POSTTIME}">{classical_row.recent_topic_row.L_TITLE}

Unknown end tag for &lt;/a&gt;


<!-- BEGIN switch_poster -->
<a class="rlink" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}

Unknown end tag for &lt;/a&gt;


<!-- END switch_poster -->
<!-- BEGIN switch_poster_guest -->
<span class="rlink">{classical_row.recent_topic_row.switch_poster_guest.S_POSTER}

Unknown end tag for &lt;/span&gt;


<!-- END switch_poster_guest -->


Unknown end tag for &lt;/li&gt;


<!-- END recent_topic_row -->


Unknown end tag for &lt;/ol&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END classical_row -->```


[FM](FM.md) CSS Simple mod\_recent\_topics


```
/*c3z_Latest_topics_by_Việt_K*/
#content-container div#left {float:none;margin-bottom:10px;width:100%}
.rlink{float:right;display:inline-block;text-align:right}
#c3lastest{padding-left:22px}
#c3lastest li{border-bottom:1px dotted #ccc}```