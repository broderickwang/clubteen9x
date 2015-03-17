selectWysiwyg là một javascript plugin mặc định của Forumotion dùng trong việc ẩn hiện menu chức năng BBcode trong trình soạn thảo, nó có tác dụng mở phần tử ẩn ngay bên dưới phần tử sự kiện.

[+] Nếu bạn muốn sử dụng selectWysiwyg cho phần tử nào thì hãy thược hiện 3 bước sau:

Bước 1: Thêm thuộc tính sau cho phần tử muốn sử dụng:

```

class="select" style="visibility: hidden;"
```

... nếu phần tử này chưa có id thì đặt id cho nó và ghi nhớ id này để thực hiện bước tiếp theo:

Bước 2: Sử dụng script sau để hiện ẩn phần tử:

```

selectWysiwyg(this,'id-Element')

```
Bạn có thể dùng nó với tất cả các sự kiện trong javascript

Bước 3: Thay id-Element trong bước 2 bằng id của phần tử bạn muốn sử dụng trong bước 1.

Ví dụ: Bạn có một thẻ div có id là FMvi-group

```

<div id="FMvi-group">

Unknown end tag for &lt;/div&gt;



```
...đang ẩn và muốn hiện nó ngay bên dưới thẻ span

```

<span>FMvi-group

Unknown end tag for &lt;/span&gt;



```
...bạn chỉ cần làm theo hướng dẫn trên, thêm class="select" style="visibility: hidden;" và thay đổi id-Element trong script:

```

<div id="FMvi-group" class="select" style="visibility: hidden;">

Unknown end tag for &lt;/div&gt;


```

Ví dụ với sự kiện onClick cho phần tử span:

```

<span onclick="selectWysiwyg(this, 'FMvi-group');">FMvi-group

Unknown end tag for &lt;/span&gt;



```

Demo: http://www.fmvi.org/h59-demo-selectwysiwyg