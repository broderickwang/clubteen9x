![http://i16.servimg.com/u/f16/17/75/13/98/test_h10.png](http://i16.servimg.com/u/f16/17/75/13/98/test_h10.png)
> 2.Nhập pass

![http://i16.servimg.com/u/f16/17/75/13/98/test_110.png](http://i16.servimg.com/u/f16/17/75/13/98/test_110.png)
> 3. Nếu nhập sai

![http://i16.servimg.com/u/f16/17/75/13/98/test_410.png](http://i16.servimg.com/u/f16/17/75/13/98/test_410.png)

Hướng dẫn:{Trả lời để thấy nội dung}

Bài viết này mình sẽ hướng dẫn cụ thể.
Bước 1 : Mở địa chỉ của 1 chuyên mục mà bạn cần khóa và lấy số id của nó:
Trong ví dụ này mình sẽ lấy "chuyên mục test" làm chuyên mục bị khóa

![http://i16.servimg.com/u/f16/17/75/13/98/test11.png](http://i16.servimg.com/u/f16/17/75/13/98/test11.png)


sau đó click vào chuyên mục được địa chỉ /f1-forum

![http://i16.servimg.com/u/f16/17/75/13/98/test2210.png](http://i16.servimg.com/u/f16/17/75/13/98/test2210.png)

MÌnh sẽ lấy con số 1 (sau chữ f)
Còn đối vs các bạn có chuyên mục cần khóa địa chỉ là /f2-forum; /f3-forum;......
thì hãy lấy con số sau f đó
Hãy nhớ con số ở Bước 1 này nhé

Bước 2 :

Vào **ACP-->Modules--> HTML & JAVASCRIPT --> Javascript codes management**

Enable Javascript code management : Có / Yes

Chọn Create a new javascript
Tạo 1 javascript mới :

Title **: Password categories
Placement : In all the pages
Javascript Code** :

```

var fpass={add:function(a,b,c){a=RegExp("f"+a+"-");a.test(window.location.pathname.substr(1))&&!my_getcookie("forumpass_"+window.location.pathname.substring(1,window.location.pathname.indexOf("-")))&&
(window.stop(),prompt(b)==c?my_setcookie("forumpass_"+window.location.pathname.substring(1,window.location.pathname.indexOf("-")),!1):alert("Mật khẩu không hợp lệ"),window.location.pathname="/forum")}};
fpass.add('1', 'Do chuyên mục có tính bảo mật nên bạn hãy nhập mật khẩu :', 'PASSWORD');

```


Tìm "1" để thay thành con số địa chỉ chuyên mục của bạn trong bước 1.
Tìm

```

PASSWORD```

và thay thành password bạn đặt cho chuyên mục đó

Nhấn Sumbit

Ngoài ra để đặt mật khẩu cho nhiều chuyên mục bạn thêm code sau :
```

fpass.add('Con số trong địa chỉ chuyên mục của bạn', 'Nội dung bạn muốn nhắn', 'mật khẩu bạn đặt cho chuyên mục đó ');
```


Vậy là xong
Chúc các bạn một năm mới tốt lành và hạnh phúc. Thân doannamthai!
Quên các bạn nhớ like cho mình nhé

Không share bài viết hướng dẫn đi nơi khác


Viết bởi doannamthai - www.hotrofm.com