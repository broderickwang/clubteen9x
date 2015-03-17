(Giao vien Yen Bai)-Tạo sitemap áp dụng cho forummotion, forum tạo từ nguồn khác cũng tương tự 50%
Đầu tiên bạn vào trang :

```


https://www.google.com/webmasters/tools/home?hl=vi

```
Vui đăng nhập bằng tài khoản gmail
Vui nhấp nút thêm một trang web nhập địa chỉ forum của bạn vào ,ví dụ của tôi là wWw.GiaoVienYenBai.7Forum.Net bấm tiếp tục
Vui sau đó đến phần xác minh trang web bạn làm như sau :
:**phương thức xác minh chọn: thẻ meta.
:** copy đoạn code phía dưới có dạng


&lt;meta name="google-site-verification" content="-hERSJzEpbIA1ju7Iu2e8peJ2AqLmyvccWb2G1WkazQ" /&gt;


đó là code của tôi của các bạn sẽ khác.
:**bây giờ vào phần Quản lý > display >Templates > Quản Lý Tổng Thể > overall\_header
tìm :

Unknown end tag for &lt;/head&gt;


và dán phía trước thẻ này ví dụ:**

&lt;meta name="google-site-verification" content="-hERSJzEpbIA1ju7Iu2e8peJ2AqLmyvccWb2G1WkazQ" /&gt;



Unknown end tag for &lt;/head&gt;


Rồi lưu lại!!
Quay lại trang vừa nãy : nhấp xác minh Đợi Khoảng Vài giây Là được Rồi. Trang web của bạn đã được đăng kí với google.
tiếp theo để google dễ dàng hơn trong việc khám phá trong site của bạn bạn phải có tập tin sitemap.xml
Thông thường bạn phải tạo file này ,và tải lên thư mục chính trên host cài đặt site của bạn , X-( bạn sẽ cười tôi , dùng diễn đàn này thì làm gì có host phải của mình đâu mà up. Nhưng bạn yên tâm forummotion đã tạo sẵn file này cho bạn rồi bạn chỉ cần gõ địa chỉ forum của bạn.Dang: http://tenforum/sitemap.xml
ví dụ: của tôi là http://giaovienyenbai.7forum.net/sitemap.xml sẽ thấy kết quả.
Vui để đăng kí file này với google bạn làm như sau:
: