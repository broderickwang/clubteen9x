CÀI ĐẶT
**B1: Chèn vào CSS**

```

/*1*/{position:fixed;top:0;z-index:999;right:0;margin-right:314px;border:4px solid #DDD}
/*2*/{font-weight:normal;line-height:124%;font-size:12px;position:fixed;right:0;padding:5px;top:0;width:300px;height:100px;background:rgba(0, 0, 0, 0.85);border:4px solid #DDD;color:white;text-shadow: 1px 1px 2px white;z-index:999;text-align:justify}
```

**B2: Thay đổi link thành viên trong code sau rồi thay vào vị trí /**1**/ trong code B1**

```

a[href="/u6290"]:hover::before
```

**B3: Thay đổi link thành viên trong code sau rồi thay vào vị trí /**2**/ trong code B1**

```

a[href="/u6290"]:hover::after
```

**Lưu ý 1: Khi muốn thêm nhiều thành viên bạn thay đổi link như ở B2 và B3 rồi chèn code như trên, mỗi thành viên cách nhau bằng một dấu phẩy (,)**B4: Chèn code sau vào tiếp bên dưới những code trên, thay link thành viên, và avatar cho phù hợp, kích thước avatar chiều cao khoảng 105px~110px là đẹp

```

a[href="/u6290"]:hover::before{content:url(http://i44.servimg.com/u/f44/12/24/45/65/13-9811.jpg)}

```
**B5: Chèn tiếp code sau dưới những code trên, thay thông tin thành viên cho phù hợp**

```

a[href="/u6290"]:hover::after{content:"-X-- THÔNG TIN -------X-------X------X-------- @handsomevip007 là một trong những thành viên xuất sắc của Chinh Phục nắm giữ các trọng trách quan trọng như: CPContributor, CPDeveloper, CPSecurity. Hoạt động chính trong các lĩnh hỗ trợ, sửa lỗi code, phát triển các mods trang trí và làm đẹp cho diễn đàn."}
```

