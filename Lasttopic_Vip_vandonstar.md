DEMO: http://www.vandonstar.com/

Chú ý:
- Dành cho Punbb.
- Chiều rộng diễn đàn là 980-1000px.
- Lastpost ko liên quan gì đến last mặc định có sẵn nên bạn hãy bỏ last mặc định đi.
- Không hỗ trợ bất cứ gì trên yahoo và diễn đàn vds, mọi thắc mắc vui lòng post tại topic này.

Hướng dẫn:

Đầu tiên vào overall\_header và tìm

Code: Chọn nội dung

> <div></li></ul>


Thêm vào phía trên code sau:<br>
<br>
<pre><code><br>
<br>
<br>
&lt;div id="Load"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div id="last-posts"&gt;<br>
&lt;div id="option-lastpost"&gt;<br>
&lt;div class="op-last" onclick="Op1Last('')"&gt;Toàn bộ<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-choice"&gt;<br>
&lt;div class="op-last" onclick="Op1Last('c1')"&gt;Đại sảnh<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('c2')"&gt;Du lịch VĐ<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f60')"&gt;Làm quen<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f156')"&gt;Thư viện<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f16')"&gt;Thư giãn<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f117')"&gt;Trường xưa<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-choice"&gt;<br>
&lt;div class="op-last" onclick="Op1Last('f13')"&gt;Âm nhạc<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f14')"&gt;Phim ảnh<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f59')"&gt;Thời trang<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f198')"&gt;Cuộc sống<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f85')"&gt;Tâm sự<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f80')"&gt;Chém gió<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-choice"&gt;<br>
&lt;div class="op-last" onclick="Op1Last('f63')"&gt;Năng khiếu<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f53')"&gt;DJ-Club<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f239')"&gt;Bang hội<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f62')"&gt;CLB<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f15')"&gt;Đố vui<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f17')"&gt;Trò chơi<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-choice"&gt;<br>
&lt;div class="op-last" onclick="Op1Last('f157')"&gt;Tin tức<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f84')"&gt;Kỳ thú<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f92')"&gt;Tin học<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f158')"&gt;Ảnh đẹp<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('f121')"&gt;Học tập<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last" onclick="Op1Last('c8')"&gt;Linh tinh<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-change"&gt;&lt;div class="op-prew"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
&lt;div class="op-next"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div id="name-lastpost"&gt;&lt;span class="lp2"&gt;Tiêu đề<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
&lt;span class="lp3"&gt;Sáng lập<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
&lt;span class="lp4"&gt;Gửi cuối<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
&lt;span class="lp5"&gt;Chuyên mục<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
&lt;span class="lp6"&gt;Bình<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
&lt;span class="lp7"&gt;Xem<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div id="main-lastpost"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div id="option2-lastpost"&gt;<br>
&lt;div class="op-last-bottom op-last-bottom2" onclick="Op2Last('/search?search_author=*+*&amp;search_keywords')"&gt;Bài gửi sau cùng<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last-bottom" onclick="Op2Last('/search?search_id=newposts')"&gt;Bài từ lần truy cập trước<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last-bottom" onclick="Op2Last('/search?search_id=egosearch')"&gt;Bài bạn đã tham gia thảo luận<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="op-last-bottom" onclick="Op2Last('/search?search_id=unanswered')"&gt;Bài chưa ai trả lời<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div id="trang-lastpost"&gt;<br>
&lt;div class="TrangTruoc" title="Tải dữ liệu trang trước"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
&lt;div class="TrangHT"&gt;&lt;input id="SoTrangLT" value="1" maxlength="2" title="Trang hiện tại" /&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
&lt;div class="TrangSau" title="Tải dữ liệu trang tiếp theo"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div id="dl-lastpost"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
&lt;div class="clear"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
<br>
<br>
</code></pre>

Trong overall_footer_begin tìm:<br>
<br>
<br>
<pre><code><br>
{S_JUMPBOX_SELECT}&amp;nbsp;&lt;input type="submit" value="{L_GO}" /&gt;<br>
<br>
</code></pre>
Thay bằng:<br>
<br>
<pre><code><br>
<br>
&lt;span id="jumpbox-last"&gt;{S_JUMPBOX_SELECT}<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
&amp;nbsp;&lt;input type="submit" value="{L_GO}" /&gt;<br>
<br>
<br>
</code></pre>
Tiếp theo thêm vào CSS:<br>
<br>
<pre><code><br>
<br>
#last-posts{width:100%;}<br>
#select-lastpost{float:right;cursor:pointer;}<br>
#option-lastpost{height:18px;}<br>
<br>
.op-last{float:left;border:1px solid #999;padding:2px 0;cursor:pointer;height:18px;background-color:white;margin:-5px 2px 0;width:80px;text-align:center;background-color:#DDD;}<br>
.op-last2{height:28px;margin-top:-12px;font-weight:bold;line-height:250%;border-radius:5px 5px 0 0;border-bottom:0;color:red;background-color:#FFF;}<br>
.op-last-bottom{float:left;border:1px solid #999;margin:-1px 2px 0;padding:5px;cursor:pointer;height:15px;background-color:#DDD;}<br>
.op-last-bottom2{height:23px;font-weight:bold;border-radius:0 0 5px 5px;border-top:0;background-color:white;margin-top:-4px;color:red;background-color:#FFF;}<br>
.op-last-select{font-weight:bold!important;color:red;}<br>
.op-choice{float:left;display:none;}<br>
.op-change{float:left;margin-left:5px;}<br>
.op-prew,.op-next{width:20px;height:20px;cursor:pointer;float:left;margin:0 2px;}<br>
.op-prew{background:url(http://i48.servimg.com/u/f48/13/58/60/43/contro18.png) 50% 50%;}<br>
.op-next{background:url(http://i48.servimg.com/u/f48/13/58/60/43/contro20.png) 50% 50%;}<br>
#main-lastpost{border:1px solid #999;padding:20px 10px 5px;background-color:white;min-height:300px;}<br>
#dl-lastpost{display:none;}<br>
#name-lastpost,.name-lastpost {<br>
position: absolute;<br>
padding: 5px 25px;<br>
font-style: italic;<br>
}<br>
<br>
.dl-post {<br>
height: 15px;<br>
}<br>
lp1,.lp2,.lp3,.lp4,.lp5,.lp6,.lp7,.lp8,.imglp{<br>
overflow: hidden;<br>
text-overflow: ellipsis;<br>
white-space: nowrap;<br>
position: absolute;<br>
}<br>
.dl-post:hover{<br>
background-color:#DDD;<br>
}<br>
<br>
.lp1 img {<br>
height: 14px;<br>
}<br>
.lp2 {<br>
margin-left: 10px;<br>
width: 380px;<br>
}<br>
.lp3 {<br>
margin-left: 400px;<br>
width: 120px;<br>
}<br>
.lp4 {<br>
margin-left: 525px;<br>
width: 120px;<br>
}<br>
.lp5 {<br>
margin-left: 650px;<br>
width: 190px;<br>
}<br>
.lp6 {<br>
margin-left: 840px;<br>
font-style: italic;<br>
}<br>
.lp7 {<br>
margin-left: 880px;<br>
font-style: italic;<br>
}<br>
.lp8 {<br>
margin-left: 940px;<br>
}<br>
.imglp {<br>
margin-left: 930px;<br>
margin-top:1px;<br>
}<br>
#trang-lastpost {<br>
float: right;<br>
}<br>
.TrangTruoc,.TrangSau,.TrangHT{font:12px Courier;cursor:pointer;color:red;float: left;height:30px;width:30px;opacity:0.6;}<br>
.TrangTruoc:hover,.TrangSau:hover,.TrangHT:hover{opacity:1;}<br>
.TrangTruoc{display:none;background:url(http://i48.servimg.com/u/f48/16/58/89/73/fancy_12.png) no-repeat;}<br>
.TrangSau{background:url(http://i48.servimg.com/u/f48/13/58/60/43/fancy_10.png) no-repeat;}<br>
#SoTrangLT{width:25px;height:22px;text-align:center;font-weight:bold;border:3px dashed white;}<br>
#SoTrangLT:hover{border:3px dashed black;color:red;}<br>
<br>
#Load {<br>
display:none;<br>
background: white url(http://i48.servimg.com/u/f48/13/58/60/43/loadaj10.gif) 50% 50% no-repeat;<br>
position: fixed;<br>
left: 50%;<br>
top: 40%;<br>
width: 50px;<br>
height: 50px;<br>
border: 10px solid #82D23D;<br>
border: 20px solid rgba(130, 210, 60, .3);<br>
border-radius: 50px;<br>
margin-left: -25px;<br>
}<br>
<br>
<br>
</code></pre>
jQuery Script:<br>
<br>
In all the pages<br>
<br>
<br>
<pre><code><br>
Link = '/search?search_author=*+*&amp;search_keywords';<br>
Start = '&amp;start=';<br>
Where = '';<br>
Trang = 20;<br>
<br>
$(function(){<br>
<br>
op_choice = Math.floor(Math.random()*4);<br>
OpChoice(op_choice);<br>
<br>
$('.op-prew').click(function(){<br>
op_choice -= 1;<br>
if (op_choice &lt; 0) op_choice = 3;<br>
OpChoice(op_choice);<br>
});<br>
$('.op-next').click(function(){<br>
op_choice += 1;<br>
if (op_choice &gt; 3) op_choice = 0;<br>
OpChoice(op_choice);<br>
});<br>
<br>
$('#jumpbox-last select').clone().appendTo('#option-lastpost');<br>
$('#option-lastpost select').removeAttr('name').removeAttr('onchange').attr('id','select-lastpost');<br>
<br>
$('.op-last-bottom').click(function(){<br>
$('.op-last-bottom').removeClass('op-last-bottom2');<br>
$(this).addClass('op-last-bottom2');<br>
});<br>
<br>
$('#option-lastpost .op-last').click(function(){<br>
$('#option-lastpost .op-last').removeClass('op-last2');<br>
$('#select-lastpost').removeClass('op-last-select');<br>
$(this).addClass('op-last2');<br>
});<br>
<br>
$('#select-lastpost').live('change',function(){<br>
$('#option-lastpost .op-last').removeClass('op-last2');<br>
$(this).addClass('op-last-select');<br>
if ($(this).val()=='1')<br>
{<br>
Where = '';<br>
LoadLastPost(0);<br>
}<br>
else if ($(this).val()!='-1')<br>
{<br>
Where = '&amp;search_where='+$(this).val();<br>
LoadLastPost(0);<br>
}<br>
});<br>
<br>
$('.TrangTruoc').click(function(){<br>
st = parseInt($('#SoTrangLT').val())-1;<br>
$('#SoTrangLT').val(st);<br>
LoadLastPost(st-1);<br>
});<br>
<br>
$('.TrangSau').click(function(){<br>
st = parseInt($('#SoTrangLT').val())+1;<br>
$('#SoTrangLT').val(st);<br>
LoadLastPost(st-1);<br>
});<br>
<br>
$('#SoTrangLT').change(function(){<br>
ltval = parseInt($(this).val());<br>
if (ltval &lt; 1 || ltval &gt; 20)<br>
{<br>
$(this).val(1);<br>
}<br>
else<br>
{<br>
LoadLastPost(ltval-1);<br>
}<br>
});<br>
<br>
});<br>
<br>
function LoadLastPost(page){<br>
page &gt; 0 ? $('.TrangTruoc').show() : $('.TrangTruoc').hide();<br>
if (page == 0){$('#SoTrangLT').val(1);}<br>
LinkLastPost = Link + Where + Start + page*Trang;<br>
$('#Load').show();<br>
$('#dl-lastpost').load(LinkLastPost+' form.frm-form .main-content .table .statused tr',function(){<br>
$('#main-lastpost').empty();<br>
$(this).find('tr').length &lt; 20 ? $('.TrangSau').hide() : $('.TrangSau').show();<br>
if ($(this).is(':empty'))<br>
{<br>
$('#main-lastpost').text('Không có dữ liệu');<br>
}<br>
else<br>
{<br>
$(this).find('tr').each(function(){<br>
$('&lt;div class="dl-post"&gt;<br>
<br>
Unknown end tag for &lt;/div&gt;<br>
<br>
').appendTo('#main-lastpost');<br>
$('&lt;span class="lp1"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
').html($(this).find('span.status').html()).appendTo('#main-lastpost .dl-post:last');<br>
$('&lt;span class="lp2" title="'+$(this).find('td:first h2.topic-title').text()+'"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
').html('&lt;a href="'+$(this).find('td:last a:last').attr('href')+'"&gt;'+$(this).find('td:first h2.topic-title').text()+'<br>
<br>
Unknown end tag for &lt;/a&gt;<br>
<br>
').appendTo('#main-lastpost .dl-post:last');<br>
$(this).find('td:first a.gensmall').appendTo('#main-lastpost .dl-post:last').wrap('&lt;span class="lp3"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
');<br>
$(this).find('td:eq(4) a.gensmall').appendTo('#main-lastpost .dl-post:last').wrap('&lt;span class="lp4"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
');<br>
$('&lt;span class="lp5"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
').html($(this).find('td:eq(1)').html()).appendTo('#main-lastpost .dl-post:last');<br>
$('&lt;span class="lp6"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
').html($(this).find('td:eq(2)').text()).appendTo('#main-lastpost .dl-post:last');<br>
$('&lt;span class="lp7"&gt;<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
').html($(this).find('td:eq(3)').text()).appendTo('#main-lastpost .dl-post:last');<br>
$('&lt;img src="http://illiweb.com/fa/m/icon_minitime1.gif" class="imglp" title="'+$(this).find('td:eq(4)').text().replace(' by','')+'"&gt;<br>
<br>
Unknown end tag for &lt;/img&gt;<br>
<br>
').appendTo('#main-lastpost .dl-post:last');<br>
if ($(this).find('td:first img[alt*="posted in this topic"]').length)<br>
{<br>
$('&lt;span class="lp8"&gt;&lt;img src="'+$(this).find('td:first img[alt*="posted in this topic"]').attr('src')+'" title="Bạn đã tham gia thảo luận tại chủ đề này"&gt;<br>
<br>
Unknown end tag for &lt;/img&gt;<br>
<br>
<br>
<br>
Unknown end tag for &lt;/span&gt;<br>
<br>
').appendTo('#main-lastpost .dl-post:last');<br>
}<br>
});<br>
$('#dl-lastpost').empty();<br>
}<br>
$('#Load').fadeOut();<br>
});<br>
}<br>
<br>
function OpChoice(eq){<br>
$('#option-lastpost .op-choice').hide();<br>
$('#option-lastpost .op-choice').filter(':eq('+eq+')').show();<br>
}<br>
<br>
function Op1Last(forum){<br>
forum =='' ? Where = '' : Where = '&amp;search_where='+forum;<br>
LoadLastPost(0);<br>
}<br>
<br>
function Op2Last(op){<br>
Link = op;<br>
LoadLastPost(0);<br>
}<br>
<br>
</code></pre>

In the home page<br>
<br>
<pre><code><br>
<br>
$(function(){<br>
$('#option-lastpost .op-last:first').addClass('op-last2');<br>
LoadLastPost(0);<br>
});<br>
</code></pre>


In the topics<br>
<br>
<pre><code><br>
<br>
$(function(){<br>
<br>
$('#select-lastpost option').each(function(){<br>
if ($(this).text().search(/\|\s\s\s\|--/) == 0){$(this).addClass('select-intopic');}<br>
});<br>
<br>
sl_op = $('#select-lastpost option.select-intopic').length;<br>
ClickLast = Math.floor(Math.random()*sl_op);<br>
$('#select-lastpost option.select-intopic').filter(':eq('+ClickLast+')').attr('selected', 'selected');<br>
$('#select-lastpost').addClass('op-last-select');<br>
Where = '&amp;search_where='+$('#select-lastpost').val();<br>
LoadLastPost(0);<br>
<br>
});</code></pre>