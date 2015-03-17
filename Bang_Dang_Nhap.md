![http://i84.servimg.com/u/f84/12/84/54/56/quickl10.png](http://i84.servimg.com/u/f84/12/84/54/56/quickl10.png)
```


<form action="/login.forum" method="post"><table cellspacing="1" cellpadding="3" border="0"><tr><td width="45%" align="right">Kí danh:<input type="text" name="username" size="25" maxlength="40" />Mật khẩu:<input type="password" name="password" size="25" maxlength="32" /><td colspan="2">Tự động đăng nhập: <input type="checkbox" name="autologin" checked="true" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2"><input type="submit" class="mainoption" name="login" value="Đăng nhập" />

Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;



```

> 2.
![http://i84.servimg.com/u/f84/12/84/54/56/quickl11.png](http://i84.servimg.com/u/f84/12/84/54/56/quickl11.png)

```

<form action="/login.forum" method="post"><table cellspacing="1" cellpadding="3" border="0"><tr><td width="45%" align="right">Kí danh

Unknown end tag for &lt;/td&gt;

<td><input type="text" name="username" size="25" maxlength="40" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr><td align="right">Mật khẩu:

Unknown end tag for &lt;/td&gt;

<td><input type="password" name="password" size="25" maxlength="32" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2">Tự động đăng nhập: <input type="checkbox" name="autologin" checked="true" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2"><input type="submit" class="mainoption" name="login" value="Đăng nhập" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/form&gt;



```
> 3.
![http://i84.servimg.com/u/f84/12/84/54/56/quickl12.png](http://i84.servimg.com/u/f84/12/84/54/56/quickl12.png)
```


<form action="/login.forum" method="post"> Kí danh:

Unknown end tag for &lt;/td&gt;

<td><input type="text" name="username" size="25" maxlength="40" /><td align="right">Mật khẩu:

Unknown end tag for &lt;/td&gt;

<td><input type="password" name="password" size="25" maxlength="32" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

 <tr align="center"><td colspan="2"><br><center>Tự động đăng nhập: <input type="checkbox" name="autologin" checked="true" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;

<tr align="center"><td colspan="2"><input type="submit" class="mainoption" name="login" value="Đăng nhập" />

Unknown end tag for &lt;/td&gt;



Unknown end tag for &lt;/tr&gt;



Unknown end tag for &lt;/table&gt;



Unknown end tag for &lt;/center&gt;



Unknown end tag for &lt;/form&gt;




```
> Để bảng đăng nhập chỉ hiện với khách, bạn phải chèn vào template và chèn code bảng đăng nhập trên vào giữa <!-- BEGIN switch\_user\_logged\_out --> và <!-- END switch\_user\_logged\_out --> như sau:

```

<!-- BEGIN switch_user_logged_out -->

code khung đăng nhập

<!-- END switch_user_logged_out -->```