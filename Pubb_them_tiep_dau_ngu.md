Nơi quậy phá: Templates>>Post&tin nhắn>>posting\_body
Tìm:
```

<!-- BEGIN switch_subject -->
```
Chèn vào sau nó :
```

<dl>
<dt><label>Chọn tiếp đầu ngữ

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<input type="button" value="[Thắc mắc]" onclick="set_solved(this.form.elements['subject'],'[Thắc mắc]')" style="display:none" id="button_ask" />
<script type="text/javascript">document.getElementById('button_ask').style.display = 'inline';

Unknown end tag for &lt;/script&gt;



Unknown end tag for &lt;/dd&gt;



Unknown end tag for &lt;/dl&gt;


```
Để thêm nút với tiếp đầu ngữ khác thay
```

1. value="[Thắc mắc]" --> value="[xxx]"
2. '[Thắc mắc]' --> '[xxx]'
3. id="button_ask"-->id="yyy"
```
Thay cái gì thì tùy bạn.
Chỗ
```

<script type="text/javascript">document.getElementById('button_ask').style.display = 'inline';

Unknown end tag for &lt;/script&gt;

```
thêm 1 đoạn code nữa:
```

document.getElementById('yyy').style.display = 'inline';
```
Save lại là xong.

Mình chưa học javascript nên không rõ chỗ thêm đoạn code khúc cuối có cần thiết ko hay có thể chèn thêm id vào là được, ai biết mong chỉ giúp.
Đối với phpBB2, chắc tương tự thôi.