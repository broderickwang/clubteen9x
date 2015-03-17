BƯớc 1: Tạo site jquery trong DW. ( ngay từ đầu chả hiểu cái này)

Bước 2 : Download jquery.js từ jquery.com bỏ vào site jquery
(cái phần bỏ vào site jquery nghĩa là mình chèn link vô chỗ có tên là jquery à?)
BƯớc 3 : Download file easing.js .Bỏ vào site.

http://demo_lab.freevnn.com/js/easing.js

Download file bouncing.js .Bỏ vào site

http://demo_lab.freevnn.com/js/bouncing.js

Bước 4 : Tạo trang index.php (cái này chỉ dành cho vbb thế forumtion bước này bỏ hả?)

BƯớc 5 : Trong body . Chèn đoạn code sau (TRong 

&lt;body&gt;

 hay sao nhỉ? trong footer\_bèin phải không nhỉ)

```


<a class="link">Login

Unknown end tag for &lt;/a&gt;



<div id="login">

<form>

Username : <input type="text" /><br /><br />

Password : <input type="password"/><br />

<input type="submit" value="Login" />



Unknown end tag for &lt;/form&gt;





Unknown end tag for &lt;/div&gt;



```

"link": là cái link nào?

Bước 6 :

Định dạng CSS . TRong 

&lt;head&gt;



&lt;/head&gt;

. CHèn đoạn code sau :

```


<style>

.darkCover {height: 1000px;width: 100%;background-color: #CCC;position: absolute;top:0px;left:0px}

.darkContent{border:5px solid white;position: absolute;}



Unknown end tag for &lt;/style&gt;


```


Chứ không phải mình chèn vào Css rồi gọi nó ra à?

BƯớc 7 : Chèn code jquery .

Trong 

&lt;head&gt;



&lt;/head&gt;

,Chèn đoạn code sau :

```


<script src="jquery.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script src="easing.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script src="bouncing.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



<script>

$(document).ready(function(){

$(".link").each(function(){

$("#login").hide();

$(this).click(function(){

hienForm($("#login"));

});

});

});



Unknown end tag for &lt;/script&gt;



```

Nêu cái này mà chuyển sang forumtion thì ta nên chuyển phần nào..( ý là làm sao để đúng, hợp với forumtion)
HỎi: Thế cái này dùng cho phbb2, punbb, Invision thì khác phần nào?

em đang làm, nhưng thấy thắc mắc nên hỏi, để hoàn thành..hee