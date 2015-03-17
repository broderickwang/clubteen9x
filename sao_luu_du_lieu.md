Đặt tiêu đề cho hấp dẫn tí, để dụ dỗ một số bạn lo lắng vụ giao diện khi chuyển về phpBB3
Mình thấy có nhiều bạn vẫn còn đang hỏi vấn đề này, một số phải thuê người backup hộ, trong khi nó cũng không đến nỗi phức tạp.

Bước 1: Download 3 file sau:

  1. **Python**: http://www.python.org/download/releases/2.7.3/#download
> > Tùy theo hệ điều hành mà chọn tương ứng, download xong cài luôn, cứ next... next là xong.
  1. **Forumotion Converter**: https://www.phpbb.com/community/download/file.php?id=139170&sid=34f14bcd54d8db5cc2c58e53642c375f
> > Chương trình này có tác dụng dẫn đường cho chú Python chạy backup database.
  1. **BBtheme**: 'ACP >> Display >> Skins >> Themes management >> Export your skin'
> > Current skin + Whole style => Nhấn Export
> > Đây là file giao diện của diễn đàn bao gồm CSS, các icon, button, logo...



Bước 2: Cấu hình diễn đàn

  1. 'Profile (lý lịch) >> Preferences (giao diện)':
> > Ngôn ngữ sử dụng(Board Language) : English (Từ giờ giao diện là tiếng anh nên dường dẫn mình ghi tiếng anh luôn)
> > Date format : yyyy-mm-dd, hh:mm (Cái dòng cuối dùng) VD: 2012-12-10, 21:00
    1. 'ACP >> General >> Forum >> Configuration':
> > > Cookies deletion link : Yes
    1. 'ACP >> General >> Messages and e-mails >> Configuration':
> > > Posts Per Page : 50
> > > Always show the first post in the topics : No
> > > Number of posts from previous page to display on last page : 0
> > > Separate announcements and stickies from the messages : With a table
    1. 'ACP >> Display >> Skins >> Choose a theme >> Version': phpBB3
> > > Nếu 4rum bạn đang là phpBB3 thì không cần làm bước này. Những bạn xài phiên bản khác cũng không cần lo mất giao diện, xong việc ta chỉ cần chuyển lại version cũ và Import file BBtheme đã download ở bước 1 là xong.



Bước 3: Sau khi download file **Forumotion Converter** ở bước 1, bạn giải nén ra, mở thư mục **forumotion**, nhấp chuột phải vào file settings (Type: Python File - 3Kb) chọn **Edit with IDLE** (nếu chưa cài Python, bạn sẽ không thấy dòng này, mà mình thấy edit bằng Notepad cũng được). Điều chỉnh như sau:

  1. _table\_prefix='phpbb**'** Để nguyên
  1. **COOKIEDATA=''** Nhập cookie của forum vào giữa 2 dấu nháy. Cách lấy cookie như sau:

> > Đầu tiên xóa cookie forum bằng cách nhấp vào link Delete the forum cookies ở gần cuối forum (trên cái bảng thống kê). **URL\_FORUM/?mode=delete\_cookies**
> > Đăng nhập lại bằng nick admin chính, vào ACP rồi thoát ra trang chủ, mục đích là làm mới cookie ID và PW
> > Nhập dòng sau vào thanh địa chỉ trình duyệt_

```


javascript:document.write(document.cookie)
```


> Nó sẽ cho ra toàn bộ cookie của forum bạn, còn nếu không thấy gì (như khi dùng trình duyệt Firefox) thì bạn tạo một trang HTML rồi nhập code sau vào:

```


<script type="text/javascript">javascript:document.write(document.cookie)

Unknown end tag for &lt;/script&gt;


```

> ... Nhấn Preview, bạn sẽ thấy cookie của forum.
  1. **URL='http://myboard.forumotion.com/'** Thay myboard.forumotion.com bằng địa chỉ gốc của diễn đàn bạn, nếu không nhớ có thể xem lại tại 'ACP >> General >> Forum Address'
  1. **sticky=[.md](.md)** Nhập ID của bài viết trong phần Sticky của các chuyên mục (thông báo, chú ý), cách nhau bằng dấu phẩy "," VD [1,2,3,4] nếu không có thì để trống.
  1. **lockimage='![http://illiweb.com/fa/prosilver/button_topic_locked_en.png](http://illiweb.com/fa/prosilver/button_topic_locked_en.png)'** thay bằng link ảnh button khóa bài viết của bạn. 'ACP >> Display >> Pictures and Colors >> Pics management >> Advanced Mode >> Button >> New posts [Locked ](.md)' : Lấy link ảnh trong này.
  1. **RANDOMNUMBER=12345678** Để số ngẫu nhiên, nó dùng để tạo mật khẩu mới cho thành viên trong file backup (do backup sẽ mất mật khẩu), cứ để nguyên cũng được.
    * UMUSERS=200**Thay số 200 bằng số thành viên diễn đàn bạn, có thể xem số ID của thành viên mới đăng ký. Xem ở bảng thống kê forum không chính xác đâu, vì có một số thành viên bị xóa.
    1.**PROFILE\_DATEFMT="%Y-%m-%d"**Để nguyên
    1.**ADMINS=[1](1.md)**Để nguyên
    1.**waittime=1**Đây là thời gian giữa 2 lần gửi mật khẩu mới cho thành viên tính bằng giây.**


Mấy dòng dưới là thông báo đổi mật khẩu cho thành viên mới, thích thì dịch ra tiếng việt, còn mình chỉ backup thì chưa cần quan tâm làm gì. Xong, Lưu lại. Nhấp đôi vào file **members\_topics\_posts\_phpBB3**, đợi nó chạy xong nhấn ENTER để kết thúc.
Forum cũ của mình 5k bài viết, 1k thành viên mất khoảng hơn 3 giờ.
Sau khi backup xong, bạn chuyển diễn đàn về version cũ, sau đó Import file BBtheme bạn lưu ở bước 1 để phục hồi giao diện. 'ACP >> Display >> Skins >> Themes management >> Import the skin'

Nguồn: https://www.phpbb.com/community/viewtopic.php?f=65&t=861505