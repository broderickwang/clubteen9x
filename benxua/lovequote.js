


<!-- Begin
var howMany = 7
var quote = new Array(howMany+1)
quote[0]="Để xem thông tin của một thành viên các bạn Bấm vào tên nick của thành viên đó."
quote[1]="Khi xem thông tin của một thành viên các bạn có thể sử dụng chức năng thêm bạn [Add to my friends list],càng nhiều bạn càng vui." 
quote[2]="Các bạn có thể gửi tin nhắn vào Profile của một thành viên [Visitor messages] nếu thành viên đó cho phép bạn dùng chức năng này."
quote[3]="Để cho phép các thành viên khác gửi tin nhắn vào Profile của mình các bạn vào phần 'Lý lịch' =>'Giao diện" ='Allow visitors messages on my profile :' chọn tất cả thành viên."
quote[4]="Các bạn nên thương xuyên vào "Lý lịch =>Friends and foes " để kiểm tra xem có ai muốn kết bạn với bạn không. Và thay đổi danh sách bạn bè hiện tại của bạn."
quote[5]="Các bạn nên chịu khó cập nhật thông tin trong phần "Lý lịch" thường xuyên để mọi người dễ làm quen nha."
quote[6]="Khi xem một bài viết của các thành viên khác, các bạn hãy chú ý đến nút Thanks khi bài viết của thành viên đó có ý nghĩa. Bấm nút Thanks sẽ khích lệ thành viên viết bài nhiều hơn.^.^"
quote[7]="Trong khi xem bài viết các bạn nên chú ý đến các công cụ trên bài viết, nó có ích lắm đó."
 




function rndnumber(){
var randscript = -1
while (randscript < 0 || randscript > howMany || isNaN(randscript)){
randscript = parseInt(Math.random()*(howMany+1))
}
return randscript
}
quo = rndnumber()
quox = quote[quo]
document.write(quox)
// End -->
   