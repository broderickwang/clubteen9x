Demo: ![http://a.imageshack.us/img38/4935/walllibee.png](http://a.imageshack.us/img38/4935/walllibee.png)

Hướng dẫn:
Bước 1: ACP >> Display >> Pictures and Colors >> Colors >> CSS stylesheet: Thêm vào cuối

```


/* wall gray - www.fmvi.vn */
#profile-advanced-details ol li{margin-bottom:10px}
#main-content{margin-top:50px}
#profile-advanced-add a{border:1px solid #DDD;line-height:30px;text-shadow:1px 1px 1px #000;padding:3px 22px 3px 3px}
#profile-advanced-add a[href^='/profile?friend']{background:url(http://i48.servimg.com/u/f48/16/58/89/73/icon710.png) no-repeat scroll right center #FCFEE8}
#profile-advanced-add a[href^='/profile?foe']{background:url(http://i48.servimg.com/u/f48/16/58/89/73/icon810.png) no-repeat scroll right center #FFEDED}
#profile-advanced-add a[href^='/profile?mode=editprofile&page_profil=friendsfoes']{background:url(http://i48.servimg.com/u/f48/16/58/89/73/icon410.png) no-repeat scroll right center #E3FBFF}
#profile-advanced-details .stats-field{margin:4px 4px 15px}
#profile-advanced-details .stats-field{border:1px solid #DDD}
#profile-advanced-details .stats-field legend{background-color:#F4F4F4;border:1px solid #DDD;color:#097BC2;font-size:16px;font-variant:small-caps;font-weight:700;padding:3px 10px 5px}
#profile-advanced-right .main-content.center{color:#FFF}
#profile-advanced-right .main-content.center img{width:150px}
#profile-advanced-layout #new-message{margin-top:0}
#profile-advanced-details .new-message.bottom{display:none}
#profile-advanced-details{margin-right:0!important}
#profile-advanced-details .pagination{background:url(http://i48.servimg.com/u/f48/16/58/89/73/36054_10.png) no-repeat scroll 2px center #E8F9FF;border:1px solid #E4E4E4;float:right!important;margin:5px 0 10px!important;padding:5px 10px 5px 20px}
#tabs ul li a{background-color:#000;border:0 none;color:#DDD;font-weight:700}
#tabs ul li.activetab a,#tabs ul li a:hover{background-color:#DDD;border-radius:5px 5px 0 0;color:#000;font-weight:700;margin-top:-5px;padding-top:5px}
#tabs ul li{padding:0}
#profile-advanced-right{width:230px}
#profile-advanced-left{margin-right:232px}
#profile-advanced-layout{float:left;margin-right:-232px;width:100%}
#profile-advanced-details .message-block{margin-left:63px;border:1px solid #DDD;padding:5px}
#profile-advanced-details .message-footer{margin-right:-3px;padding-bottom:3px;padding-top:10px;text-align:right}
#profile-advanced-details .message-header{border:1px solid #DDD}
#profile-advanced-details .message-footer li:after{content:""!important}
#profile-advanced-details .message-footer li{background:url(http://i48.servimg.com/u/f48/16/58/89/73/view_d10.png) no-repeat scroll 2px center #FCFEE8;border:1px solid #DDD;text-shadow:1px 1px 1px #000;padding:2px 3px 2px 20px}
#profile-advanced-details .message-footer li.last{background:url(http://i48.servimg.com/u/f48/16/58/89/73/remove10.png) no-repeat scroll 2px center #FFEDED;border:1px solid #DDD;padding:2px 3px 2px 20px}
```

Bước 2: ACP >> Display >> Templates >> QLTT >> overall\_footer\_end: Thêm vào cuối, trước ```


Unknown end tag for &lt;/body&gt;

```

```


<script type="text/javascript">
$(function(){
$("#profile-advanced-details .message-header").prepend('<img src="http://i48.servimg.com/u/f48/16/58/89/73/tip14.png" style="margin-right: 10px; margin-left: -19px;" />')
})


Unknown end tag for &lt;/script&gt;





```