ở đây share cho các bạn 4 cách chuyển link thông dụng khi cần đổi tên miền
bạn sử dụng 1 code trong 4 thui nhé :d
an
1.

```

<meta HTTP-EQUIV="REFRESH" content="0; url=http://hotro.4forum.biz/">

```

Và đây là code bạn sẽ chuyển qua trang web trực tiếp. Và content="0: bạn có thể thay đổi số giây để chuyển sang trang.

2.

```

<iframe src="http://hotro.4forum.biz/" width="100%" height="99%">

Unknown end tag for &lt;/iframe&gt;





```

height="99%": bạn để kích cỡ này thì thanh trượt của trình duyệt sẽ mất, còn nếu để 100% bạn sẽ thấy 2 thanh trượt nếu blog và web của bạn quá dài.

3.


```


<script type="text/javascript">

window.location = "http://hotro.4forum.biz/"



Unknown end tag for &lt;/script&gt;



```


4.


```

<script language="javascript" type="text/javascript">


window.location.href = "http://hotro.4forum.biz/";




Unknown end tag for &lt;/script&gt;



```