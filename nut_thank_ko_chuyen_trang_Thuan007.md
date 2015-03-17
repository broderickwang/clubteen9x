người làm: Exterminator & Thuan007
tìm trong view\_topic đoạn

```

<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}">

```
thay thành

```

<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" target="thanks" onclick="exec_refresh();">
```


sau đó dán đoạn sau vào cuối view\_topic

```

<script type="text/javascript">
<!--
function exec_refresh()
{
myvar = myvar + ' .';
var timerID = setTimeout('exec_refresh();', 20);
if (timeout > 0)
{
timeout -= 1;
}
else
{
clearTimeout(timerID);
window.status = '';
window.location.reload();

}
}

var myvar = '';
var timeout = 50;
//-->


Unknown end tag for &lt;/script&gt;


<iframe name="thanks" height="0" width="0" frameborder="0">

Unknown end tag for &lt;/iframe&gt;



```