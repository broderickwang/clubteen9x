Ẩn nút gửi bài mới, nút trả lời và khung quickrep trong box và topic chứa TDYT. Chắc ko cần demo, làm cho punbb.

Tạo 1 trang js cho hiện ở subforum và topic

```

$(function(){$(".nav:contains('Thông điệp yêu thương')").each(function(){$(".posting, #pun-qpost").remove();});});

```
Thay "Thông điệp yêu thương" thành cái tên box của bạn, ví dụ TDYT.