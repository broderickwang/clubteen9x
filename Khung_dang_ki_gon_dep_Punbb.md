Hướng dẫn:
Bước 1: Thêm vào CSS
ACP >> Display >> Pictures and Colors >> Colors >> CSS Stylesheet:

```

.main-content.standalone{border-color:#000 #c7c7c7 #c7c7c7 #000;border-style:solid;border-width:1px;padding:10px 15px}
```

Bước 2: Sửa template
ACP >> Display >> Templates >> Ganeral >> agreement:

```

<!-- BEGIN switch_user_logged_in -->
<div id="pun-visit" class="clearfix">
<ul>
<li>
<a href="{U_SEARCH_NEW}">{L_SEARCH_NEW}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;


<li>
<a href="{U_SEARCH_SELF}">{L_SEARCH_SELF}

Unknown end tag for &lt;/a&gt;




Unknown end tag for &lt;/li&gt;




Unknown end tag for &lt;/ul&gt;


<p>{LOGGED_AS}. {LAST_VISIT_DATE}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_in -->
<!-- BEGIN switch_user_logged_out -->
<div id="pun-visit">
<p>{L_NOT_CONNECTED} {L_LOGIN_REGISTER}

Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_user_logged_out -->
<div class="pun-crumbs">
<p class="crumbs">
<a href="{U_INDEX}">{L_INDEX}

Unknown end tag for &lt;/a&gt;


<strong>{NAV_CAT_DESC}

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/p&gt;




Unknown end tag for &lt;/div&gt;


<!-- BEGIN switch_fb_explain -->
<div class="main-content standalone">
<img src="http://illiweb.com/fa/admin/icones/big_ico/warning.png" class="left" alt="" />
<div id="fb_explain">Để kết nối tới diễn đàn {SITENAME} thông qua Facebook Connect, bạn phải đăng ký.
<br />Hãy bắt đầu việc đăng ký của bạn bằng cách chấp nhận những quy tắc này.

Unknown end tag for &lt;/div&gt;


<div
class="clear">

Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_fb_explain -->
<div class="main-content standalone">
<fieldset class="main-content standalone">
<legend style="color: red; font-size: 20px; font-weight: bold; font-variant: small-caps; font-family: Trebuchet MS; text-shadow: 1px 1px 1px rgb(0, 0, 0); margin-top: -10px;">Nội quy diễn đàn

Unknown end tag for &lt;/legend&gt;


<div style="height: 265px; overflow-y: scroll; overflow-x: hidden; text-align: justify; margin-right: -10px; padding-right: 15px;">
<br />{MY_RULES}
<br />Ban quản trị {SITENAME} sẽ cố gắng hết sức để chỉnh sửa hoặc xóa bài viết sai phạm càng sớm càng tốt. Tuy nhiên, đôi khi chúng tôi không thể xem xét tất cả các bài viết. Mỗi bài viết được đăng trên diễn đàn {SITENAME} thể hiện tầm nhìn và ý kiến ​​của tác giả tương ứng, nó không thuộc về quan điểm chung của {SITENAME} (ngoại trừ các bài viết của chúng tôi). Và do đó, chúng tôi không chịu trách nhiệm về nội dung thành viên đăng tải.
<br />
<br />Diễn đàn {SITENAME} sử dụng cookie để lưu trữ thông tin trên máy tính của bạn. Những cookie này sẽ không chứa bất kỳ thông tin cá nhân, chúng chỉ được sử dụng nhằm tạo sự thoải mái cho bạn và bạn có thể dễ dàng xóa bỏ nó bất kỳ lúc nào. Địa chỉ e-mail chỉ được sử dụng để xác nhận các chi tiết đăng ký của bạn như mật khẩu của bạn (và cũng để gửi cho bạn mật khẩu của bạn trong trường hợp bạn quên nó).
<br />
<br />Những bài viết vi phạm sẽ được chỉnh sửa hoặc loại bỏ mà không thông báo trước. Thành viên vi phạm nghiêm trọng sẽ lập tức bị chặn truy cập vĩnh viễn.
<br />
<br />Internet là không phải một không gian vô danh, cũng không phải một không gian không có luật lệ! Chúng tôi giữ cho mình khả năng thông báo cho các cơ quan pháp luật khi bạn có hành vi phạm pháp. Một địa chỉ IP của người viết sẽ được ghi lại, vì thế bạn cần tôn trọng những điều kiện này.
<br />
<br />
<center>------------------------------------------------------------

Unknown end tag for &lt;/center&gt;


<br />Khi đã chấp nhận các điều khoản trên và đồng ý tham gia diễn đàn, bạn đã :
<br />- Thừa nhận mình có đầy đủ các điều kiện để tham gia diễn đàn;
<br />- Cam kết tôn trọng và thực hiện đầy đủ các quy định hiện hành;
<br />- Cho phép những ban quản trị {SITENAME} có quyền xóa, di chuyển hoặc chỉnh sửa các bài viết của bạn bất kỳ lúc nào.
<br />
<br />


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/fieldset&gt;


<div class="main-content standalone">
<form action="{U_AGREE_OVER13}" name="agreeform" onsubmit="return checkform(this);" method="post">
<div>
<input type="checkbox" value="1" id="cb_rules_agree" name="agree" />
<label for="cb_rules_agree">
<strong> Tôi đã đọc và đồng ý với nội quy của diễn đàn {SITENAME}

Unknown end tag for &lt;/strong&gt;




Unknown end tag for &lt;/label&gt;


<input type="submit" style="float: right !important" value="Tiếp tục đăng ký" name="ok" />


Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/form&gt;




Unknown end tag for &lt;/div&gt;




Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
function checkform(form) {
if (form.agree.checked == false) {
alert('Bạn phải Đồng Ý những điều lệ của diễn đàn để tiếp tục đăng ký!');
return false;
}
}


Unknown end tag for &lt;/script&gt;



```

Bước 3: Thêm nội quy, dưới đây là mẫu ví dụ, bạn có thể thay đổi tùy ý.
ACP >> Ganeral >> Rules and FAQ >> Additional Rules:

```

<b>I. Nội quy thành viên
<br />


Unknown end tag for &lt;/b&gt;


<br />- Đăng kí thành viên: Không được lấy tên, biệt danh... của các vị lãnh tụ cách mạng, các vị lãnh đạo đảng, nhà nước, những kẻ xấu như khủng bố, phát xít ... hoặc có ý nghĩa không lành mạnh.
<br />- Không được để chữ kí, hình đại diện hoặc thông tin cá nhân có liên quan đến các vấn đề chính trị, kinh tế và tôn giáo có thể gây bất lợi cho diễn đàn & có nội dung không lành mạnh.
<br />- Không để chữ ký to quá khổ.
<br />- Không đăng ký ID bằng các ký tự đặc biệt như: [ * ¤ ° ´ ¯ )]
<br />
<br />
<br />
<b>II. Những quy định chung
<br />


Unknown end tag for &lt;/b&gt;


<br />
<i>1.Lập chủ đề
<br />


Unknown end tag for &lt;/i&gt;

- Chủ đề phải xúc tích, nêu bật được ý cần nói.
<br />- Không lập các chủ đề có nội dung sai lệch với tiêu chí hoạt động chung của chuyên mục đó.
<br />- Không lặp lại một chủ đề đã có hoặc lập một chủ đề có nội dung tương tự.
<br />- Không lập các chủ đề mới một cách tràn lan, các chủ đề có nhiều ảnh, hạn chế tối đa mở nhiều chủ đề, làm mọi người khó theo dõi.
<br />
<br />
<i>2. Về nội dung bài viết :
<br />


Unknown end tag for &lt;/i&gt;

- Không lạm dụng các chức năng bài viết, không để text size quá lớn.
<br />- Những hành vi sau đây được gọi là câu bài: Gửi nhiều bài liền nhau bằng cách cố ý chia nhỏ nội dung một bài ra làm nhiều phần.
<br />- Gửi bài phù hợp, đúng với chủ đề, không được cố tình làm loãng chủ đề bằng cách gửi những bài có nội dung không liên quan đến chủ đề của chủ đề.
<br />- Tránh việc lạm dụng các emoticon.
<br />- Bài viết nếu là tiếng Việt phải có dấu.
<br />- Không gửi nhiều bài cùng một nội dung ở các chủ đề khác nhau.
<br />- Không dùng chữ quá to, quá nhỏ hoặc lạm dụng font chữ, màu sắc.
<br />- Không được gửi các bài có virus lên diễn đàn.
<br />- Không viết bài vi phạm thuần phong mỹ tục, pháp luật, văn hoá Việt Nam...
<br
/>- Không viết bài bêu xấu, miệt thị hoặc xúc phạm các thành viên khác.
<br />
<br />
<i>3. Qui định chung:
<br />


Unknown end tag for &lt;/i&gt;

- Nghiêm cấm sử dụng những từ ngữ, hình ảnh, thông tin không lành mạnh, thiếu văn hóa.
<br />- Tránh những nội dung phản động về chính trị, tôn giáo. Nghiêm cấm tuyên truyền, khích động những hành vi bạo lực, tuyên truyền phản động hoặc các hành vi phá hoại.
<br />- Không cãi nhau, gây mất đoàn kết diễn đàn. Nếu bất kì một thành viên nào muốn phản đối về cách làm việc của điều hành viên thì có thể gửi vào chuyên mục Góp ý về điều hành viên hoặc gửi tin nhắn cho Ban quản trị.
<br />- Nhằm tôn trong tác giả, và tránh những rắc rối về bản quyền bài viết sau này, nếu là bài viết sưu tầm, thành viên gửi bài cần ghi rõ là sưu tầm và ghi nguồn gốc bài viết đó.
<br />
<br />
<i>4. Hình thức Kỷ luật cho Thành viên vi phạm:
<br />


Unknown end tag for &lt;/i&gt;

* Nhẹ : Nhắc nhở
<br />* Vừa : Nhắc nhở + Hạ bậc
<br />* Nặng : Tùy vào mức độ vi phạm sẽ chặn truy cập trong một thời gian và xóa bài viết.
<br />* Rất nặng : Chặn truy cập vĩnh viễn.
<br />
<br />
<center>------------------------------------------------------------

Unknown end tag for &lt;/center&gt;



```

Viết bởi baivong - www.FMvi.org