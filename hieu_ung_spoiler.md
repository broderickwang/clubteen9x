![http://i.imm.io/UWhW.gif](http://i.imm.io/UWhW.gif)
phpbb2:

```

jQuery(document).ready(function(){ jQuery(".spoiler td:eq(0)").click(function(){ jQuery(this).parent().parent().parent().find(".spoiler_content").toggle(500);  jQuery(".spoiler_closed").toggle(0); return false; }); });

```
punBB

```

jQuery(document).ready(function(){ jQuery(".spoiler").click(function(){ jQuery(this).find(".spoiler_content").toggle(500); return false; }); });

```
phpBB3 / Invision

```

jQuery(document).ready(function(){ jQuery(".spoiler dt").click(function(){ jQuery(this).parent().find(".spoiler_content").toggle(500); return false; }); });


```