CÀI ĐẶT
**B1: Chèn vào CSS**

```

/*1*/{position:fixed;top:0;z-index:999;right:0;margin-right:314px;border:4px solid #DDD}
/*2*/{white-space:normal!important;font-weight:normal;line-height:124%;font-size:12px;position:fixed;right:0;padding:5px;top:0;width:300px;height:100px;background:rgba(0, 0, 0, 0.85);border:4px solid #DDD;color:white;text-shadow: 1px 1px 2px white;z-index:999;text-align:justify}

```
**B2: Thay đổi link thành viên trong code sau rồi thay vào vị trí /**1**/ trong code B1**

```

a[href="/u6290"]:hover strong::before
```

**B3: Thay đổi link thành viên trong code sau rồi thay vào vị trí /**2**/ trong code B1**

```

a[href="/u6290"]:hover strong::after

```
**Lưu ý 1: Khi muốn thêm nhiều thành viên bạn thay đổi link như ở B2 và B3 rồi chèn code như trên, mỗi thành viên cách nhau bằng một dấu phẩy (,)**B4: Chèn code sau vào tiếp bên dưới những code trên, thay link thành viên, và avatar cho phù hợp, kích thước avatar chiều cao khoảng 105px~110px là đẹp



Unknown end tag for &lt;/code&gt;


> a[href="/u6290"]:hover  strong::before{content:url(![http://i44.servimg.com/u/f44/12/24/45/65/13-9811.jpg](http://i44.servimg.com/u/f44/12/24/45/65/13-9811.jpg))}



Unknown end tag for &lt;/code&gt;


**B5: Chèn tiếp code sau dưới những code trên, thay thông tin thành viên cho phù hợp**

```

a[href="/u6290"]:hover  strong::after{content:"-X-- THÔNG TIN -------X-------X------X-------- @handsomevip007 là một trong những thành viên xuất sắc của Chinh Phục nắm giữ các trọng trách quan trọng như: CPContributor, CPDeveloper, CPSecurity. Hoạt động chính trong các lĩnh hỗ trợ, sửa lỗi code, phát triển các mods trang trí và làm đẹp cho diễn đàn."}

```
**Lưu ý 2: Nếu làm cho nhiều thành viên, thì lập lại B4 và B5.
Bạn cần kiên nhẫn để cài đặt code này Rose Mọi thắc mắc để lại dưới topic này**```
    a[href="/u1"]:hover::before,[href="/u7"]:hover::before{position:fixed;top:0;z-index:999;right:0;margin-right:314px;border:4px solid #DDD}
a[href="/u1"]:hover::after,[href="/u7"]:hover::after{font-weight:normal;line-height:124%;font-size:12px;position:fixed;right:0;padding:5px;top:0;width:300px;height:100px;background:rgba(0, 0, 0, 0.85);border:4px solid #DDD;color:white;text-shadow: 1px 1px 2px white;z-index:999;text-align:justify}

a[href="/u7"]:hover::before{content:url(http://r22.imgfast.net/users/2212/30/31/16/avatars/7-9.jpg)}
a[href="/u7"]:hover::after{content:"-X-- THÔNG TIN -------X-------X------X-------- @_vo_cam_ là một trong những thành viên xuất sắc của teen 9x nắm giữ các trọng trách quan trọng như: a1mod, . Hoạt động chính trong các lĩnh vực, thông báo, dọn dep, quản lí box, kiêm cảnh sát forum."}
a[href="/u1"]:hover::before{content:url(http://r22.imgfast.net/users/2212/30/31/16/avatars/1-72.jpg)}
a[href="/u1"]:hover::after{content:"-X-- THÔNG TIN -------X-------X------X-------- @bacxoay là một trong những thành viên Sáng lập teen 9x nắm giữ các trọng trách quan trọng như: a1admin, a1Developer, a1Security. Hoạt động chính trong các lĩnh vực quản lí và làm đẹp cho diễn đàn."}```