Demo: Mục Tài sản của IFC Mắc cỡ

Đầu tiên, bạn chọn mục Tài sản hiển thị In the profile
Rồi chèn đoạn này vào 1 js, đặt In the topics :


```


$(function () {
$(".post-entry").not('.rules.post-entry').after('<br><fieldset class="taisan"><legend><span style="width:100;height:30;text-align:center;color:black;filter:glow(color=#56CDE0)"><b>Tài sản

Unknown end tag for &lt;/b&gt;



Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/legend&gt;

 <div class="taisana" style="overflow:auto;max-height:130px">

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/fieldset&gt;

');
$(".taisana").each(function () {
var profileUser = $(this).parent().parent('.postbody').children('.postbody-head.postdetails.post-header').children('.author').children('a').attr("href");
$(this).load(profileUser + ' #field_id3 .field_uneditable')
});
});

```
> Thay field\_id3 thành id mục Tài sản của bạn....



TUT mở màn cho IFC năm 2013 đây
Có lẽ mai sẽ tung ra một MOD mở màn 2013, tìm cái skin để tung ra nữa nhờ
Nhiều quá

Dù sao thì cx chúc cả làng năm mới vui vẻ nhá
Mong mọi người có thể quên đi nhx gì cần quên, nhận được nhx gì các bạn đáng được nhận
Me XO