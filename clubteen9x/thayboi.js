function submitmsg(params)
{
	document.post.sent.value = document.post.message.value;
kkk=document.post.sent.value;
if (kkk.slice(0,6)== "/thay ")
{var r = Math.random(); 
str=kkk.slice(6,1024);
document.post.sent.value="@Thầy:" +str;
document.post.message.focus();ajax_submit_chatbox(params);
outt=1500;
traloi = new Array(
"Bây giờ thì có, nhưng sau này thì chưa chắc.",
"Bây giờ thì chưa, nhưng cũng sắp sửa",
"Bây giờ thì chưa, nhưng sau này thì có",
"Cái này cũng còn tùy ",
"Cái này khó à nha. Nhưng 80% là có ",
"Cẩn thận. Không được đâu ",
"Có gái không giới thiệu cho thầy một em rồi tính típ",
"Có. Nhưng sau này phải cẩn thận. Thầy nhìn thấy có sự thay đổi.",
"Con chưa đủ tuổi để hỏi câu hỏi này đâu, đừng liều",
"Con đang phê à, hay tính chơi nhau đấy?",
"Cũng được đấy nhưng phải cẩn thận",
"Cũng được. Nhưng đợi đến tết Công-gô thì mong ước sẽ thành.",
"Cũng ngang chuẩn quốc tế đấy",
"Kute mà sao hỏi khó qua dzậy?",
"Chiến hết con ạ!",
"Chơi luôn đi tại sao phải xoắn",
"Chuẩn không cần chỉnh!",
"Dân châu Phi cũng phải mê con ạ",
"Để mai tính",
"Đưa thầy ít tiền đi rồi thầy nói cho nghe",
"Hỏi gì mà ngu thế con?",
"Hỏi khó quá coi chừng ra đường chó cắn à nha",
"Hỏi thế thì bố thầy cũng hem dám trả lời",
"Khó đó à nha",
"Không",
"Mi đi chết đi. Dám đánh đố thầy à?",
"Mọi việc chỉ có 50% như mong muốn thôi",
"Nghe muốn ói quá",
"Nghĩ sao mà hỏi vậy? Định thử thầy à",
"Nhiều khách, thầy đang bận quá. Lát thầy trả lời",
"Ôi giời! Tất nhiên là có",
"Sao giống thầy dzậy",
"Thầy con mê nữa huống chi ai",
"Thầy đang đông khách quá, để lúc khác",
"Thầy thần thông quảng đại lắm cái gì cũng biết hết",
"Theo thầy tính là không",
"Theo thầy thì chắc chắn là không.",
"Thích thì chiều thôi",
"Trả tiền đây đi rồi hỏi tiếp",
"Uhm uhm, điều đó chắc chắn sẽ xảy ra",
"Việc này tưởng dễ nhưng mà khó đấy",
"Yên tâm đi, chắc chắn là có",
"Tùy, thiên thời địa lợi đủ cả, chỉ chờ lòng người ủng hộ là được con ạ",
"Thầy bấm đốt thì ra tầm dăm hôm nữa con ạ",
"Cái này thì mẹ con biết rõ hơn thầy",
"Câu này thầy phải hỏi con mới đúng",
"Quẻ nói con cứ chờ 10 năm khắc biết",
"Thầy bấm ra ít lắm con ạ",
"Con vứt cái máy tính đi là vừa",
"Cũng được, nếu con muốn vậy",
"Nói có thì thày áy náy lắm >.< ", 
"Cũng không sớm, nhưng con cũng không việc gì phải vội",
"Cũng có lẽ là nên thế",
"Tầm mấy hôm nữa con ạ, cứ yên tâm",
"Cái này á, cũng khó nghĩ, nhưng có vẻ là có",
"Chơi xoáy nhau àh, hỏi vậy bố thầy cũng ko trả lời được"
);
boibai = new Array(
"Con bốc được lá [color=red][size=20]6♦[/size][/color] Để thầy xem...Uhmm… quân này à, báo điềm trục trặc, cãi vã, chia ly con ạ. Thời gian này chuyện tình cảm dễ xảy ra mâu thuẫn, thế nên thày nghĩ là con cứ phải bình tĩnh, điềm đạm vào. Có chuyện gì xảy ra cũng đừng nổi giận mà tổn hại sức khỏe, nhan sắc nhé.",
"Con bốc được lá [color=red][size=20]5♦[/size][/color] Để thầy xem...À, quân bài báo hiệu thành công và hạnh phúc đấy con ạ. Theo thày tính thì sắp tới con sẽ có vài thay đổi theo hướng tốt. Thày nghĩ là thời gian này rất thích hợp để có em bé hoặc là làm dự án mới.",
"Con bốc được lá [color=red][size=20]5♥[/size][/color] Để thầy xem...Hmmm, quân này báo con biết là có đứa đang ghen với con đấy. Cũng phải, người đáng yêu thì bao giờ chả có đứa ghen tức hả con. Thày nghĩ là con cứ đề phòng một tí, cũng chả hại gì.",
"Con bốc được lá [color=black][size=20]5♠[/size][/color] Để thầy xem...À, con này cũng khá được con ạ. Theo thày nghĩ thì con hơi bi quan với tình hình thôi. Chuyên đâu nó có đấy, khó khăn bây giờ chỉ là tạm thời thôi con ạ. Con cứ lạc quan mà vui sống nhé!",
"Con bốc được lá [color=red][size=20]Q♥[/size][/color] Để thầy xem...Quân này nó mang hình người đàn bà hiền lành, tốt bụng đó con ạ. Thày nghĩ là con sắp nhận được những lời khuyên tốt từ một người phụ nữ ấm áp và tình cảm. Đôi lúc thì con bài này ám chỉ hình mẫu của người mẹ, người chị hoặc người bạn tâm giao nữ giới. Gặp người phụ nữ tốt tâm, lắng nghe lời nói sẽ làm con vui. Nếu mà đang gặp chuyện xui, có người phụ nữ biến xui hóa lành. P/s: Nghe thày nói này, nếu mà con đang muốn cưa ai ý, thì phải cưa mẹ, chị gái, em gái hay bạn gái thân của người ta trước nghe không, sẽ lợi đủ đường đấy con ạ.",
"Con bốc được lá [color=black][size=20]2♣[/size][/color] Để thầy xem...Hmm, quân này báo hiệu trở ngại con ạ. Con sẽ có vài khó khăn trước khi thành công, và phải đề phòng có kẻ tung tin đồn xấu xa. Thày nghĩ là con phải kín đáo hơn, làm mọi việc một cách cẩn thận và chu đáo.",
"Con bốc được lá [color=red][size=20]A♦[/size][/color] Để thầy xem...À, quân này thường báo tin tốt con ạ. Nó tượng trung cho sự thay đổi, một thông điệp tốt, thường là về tiền bạc. Thày tính thì có thể con sắp được tăng lương đấy. Cứ cố gắng học hành làm việc chăm chỉ nhé, rồi con sẽ nhận được tin vui sớm thôi.",
"Con bốc được lá [color=black][size=20]J♣[/size][/color] Để thầy xem...J nhép, một người bạn ngang tuổi tính tình sốc nổi nhưng vui vẻ và tốt bụng. Thày tính là con sắp có dịp đi chơi vui vẻ rồi, nếu chưa có người yêu thì đây cũng là cơ hội tốt đấy.",
"Con bốc được lá [color=black][size=20]3♣[/size][/color] Để thầy xem...Oh, một quân bài báo hiệu tình yêu và hạnh phúc. Nếu con muốn cầu hôn ai thì đây là thời điểm thích hợp đấy. Ngoài ra, nó còn mang ý nghĩa là cơ hội thứ hai nữa. Vậy nên nếu có việc gì trước đây chưa thành, mà con muốn thử lại thì hãy tiến lên nhé.",
"Con bốc được lá [color=red][size=20]Q♦[/size][/color] Để thầy xem...À, quân này nó mang hình một người phụ nữ thống trị quyền lực của Đất, mang ý nghĩa là có chuyện đang xảy ra con ạ. Tin đồn thì hay thất thiệt, nhưng mà cũng phải nói rằng có lửa thì mới có khói. Thày nghĩ là con nên trò chuyện nhiều hơn với bạn bè, đồng nghiệp mà biết người ta đang bàn tán cái gì, sẽ có lợi cho con.",
"Con bốc được lá [color=black][size=20]Q♣[/size][/color] Để thầy xem...Oh, quân này mang hình một phụ nữ tốt bụng, nhiệt tình và cởi mở. Con sẽ gặp được giúp đỡ từ một người phụ nữ đấy. Thày nghĩ có thể là con sẽ nhận được một lời khuyên bổ ích từ người ấy, nhớ lắng nghe con nhé.",
"Con bốc được lá [color=black][size=20]7♣[/size][/color] Để thầy xem...Ấy, quân này báo hiệu công việc làm ăn, học hành thuận lợi con ạ. Thày tính là chẳng mấy chốc mà con sẽ thăng chức hoặc tăng lương. Tuy nhiên con có thể có vài rắc rối nho nhỏ với người khác giới.",
"Con bốc được lá [color=red][size=20]2♦[/size][/color] Để thầy xem...Hmm, quân này nó có khá nhiều ý nghĩa đấy. Có thể là điềm báo về đối tác làm ăn, cũng có khi là thay đổi trong quan hệ. Thày nghĩ con nên nói chuyện với bạn bè và đồng nghiệp để hiểu rõ hơn chuyện gì đang xảy ra con ạ.",
"Con bốc được lá [color=red][size=20]7♦[/size][/color] Để thầy xem...Chậc chậc…. Quân này nó báo điềm là sắp tới con sẽ phải cãi nhau về chuyện tiền bạc hoặc công việc. Thày nghĩ là con nên chuẩn bị trước tinh thần với cả lý lẽ một chút. Thường là chuyện này cũng sẽ êm thắm đâu ra đấy thôi con ạ, không cần lo lắng lắm đâu.",
"Con bốc được lá [color=black][size=20]4♣[/size][/color] Để thầy xem...Đây là một quân bài cảnh báo. Theo thày tính thì thời gian này con phải cẩn thận không có đứa gian dối, phản bội đấy. Nếu con mà kí cọt gì cũng phải đọc lại, không chủ quan nghe chưa. Chúc con may mắn!",
"Con bốc được lá [color=black][size=20]10♠[/size][/color] Để thầy xem...Chẹp, con mười bích này không được tốt lắm con ạ. Con có điều ưu tư, có thể sẽ nhận được tin không tốt lắm. Thày nghĩ là thời gian này con nên nghỉ ngơi, thư giãn, đừng quá lo lắng rồi sẽ ổn thôi con ạ.",
"Con bốc được lá [color=red][size=20]3♥[/size][/color] Để thầy xem...Chà, quân này à, khó đây. Nó thường báo hiệu chuyện tình tay ba con ạ. Con sẽ thấy khó chọn lựa tình yêu đích thực của mình. Tình cảm không gượng ép được, thế nên con hãy thư giãn và để cho chuyện gì đến sẽ đến.",
"Con bốc được lá [color=red][size=20]10♦[/size][/color] Để thầy xem...À, quân bài tốt đây. Chất rô vốn tượng trưng cho tiền tài danh vọng, điểm mười thường báo tin tốt đẹp. Gặp quân này thì thày nghĩ là con sắp có thay đổi chuyện tiền bạc, thường là tốt con ạ. Theo thày tính thì túi tiền rủng rỉnh đến nơi rồi. Nhớ chăm chỉ làm ăn và tính toán chi tiêu một chút nhé, cơ hội đang đến đấy.",
"Con bốc được lá [color=black][size=20]3♣[/size][/color] Để thầy xem...Oh, một quân bài báo hiệu tình yêu và hạnh phúc. Nếu con muốn cầu hôn ai thì đây là thời điểm thích hợp đấy. Ngoài ra, nó còn mang ý nghĩa là cơ hội thứ hai nữa. Vậy nên nếu có việc gì trước đây chưa thành, mà con muốn thử lại thì hãy tiến lên nhé.",
"Con bốc được lá [color=black][size=20]7♠[/size][/color] Để thầy xem...Chà chà, để thày nghĩ đã... Con bảy bích này nó là điềm báo rằng con sắp có chút khó khăn. Có thể là con không nghe lời người khác khuyên nên mất đi cơ hội. Khó khăn xảy ra cũng chỉ do con chuốc lấy thôi. Thế nên thày nghĩ chỉ cần cẩn thận và chịu lắng nghe thì sẽ ổn con ạ.",
"Con bốc được lá [color=red][size=20]4♥[/size][/color] Để thầy xem...Hmmm, quân này báo hiệu thay đổi trong công tác, nhà cửa con ạ. Có thể sắp tới con sẽ có thuyên chuyển nơi công tác hoặc là chuyển nhà. Thày nghĩ là con cứ nên dự tính trước không nó lại cập rập.. ",
"Con bốc được lá [color=red][size=20]6♥[/size][/color] Để thầy xem...Ái chà, quân này báo hiệu may mắn con ạ. May mắn này tiếp may mắn kia. Có người muốn chăm sóc cho con. Có người yêu mến con. Con sẽ thấy ấm áp và tràn đầy hạnh phúc. Mỗi tội là con đừng nên đánh bạc lúc này, đỏ tình thì đen bạc mà.",
"Con bốc được lá [color=black][size=20]9♠[/size][/color] Để thầy xem...Uhmm, chín bích không phải là quân bài tốt lành cho lắm con ạ. Thời điểm này có thể nói là vận hạn của con đang đến, thế nên thày khuyên con nên giữ gìn sức khỏe, cẩn thận đường xá, không tiêu nhiều tiền. Rồi mấy hôm nữa điềm dữ nó bơn bớt đi thì con sẽ lại vô tư thôi con ạ. Thày chúc con may mắn nhiều hơn.",
"Con bốc được lá [color=black][size=20]6♠[/size][/color] Để thầy xem...Uhmm... thày nghĩ là sắp tới con có vài thay đổi nhỏ mang tính tích cực. Tuy nhiên cũng không lớn lắm con ạ. Thày tính sắp tới mọi chuyện sẽ ổn định và an lành, con an tâm nhé!",
"Con bốc được lá [color=red][size=20]A♥[/size][/color] Để thầy xem...Quân này nó báo điềm lành về tình yêu đó con. Vốn dĩ nó là tượng trưng cho gia đình mới cả thư tình. Bắt được quân này thì kiểu gì thì rắc rối muộn phiền cũng đều tan biến, tin vui tới tấp đưa về con ạ. Nếu mà chưa có ai yêu, gặp ngay người ấy buổi chiều hôm sau. Nếu mà tình ái u sầu, việc may sẽ đến rơi đầu con ngay.",
"Con bốc được lá [size=20][color=black]3♠[/color][/size] Để thầy xem...Uhmm, quân này không được tốt, nó tượng trưng cho quan hệ đổ vỡ con ạ. Thày nghĩ là có thể có đứa định chen ngang vào mối quan hệ của con. Trong thời gian này con nên cẩn thận, tránh va chạm hay cãi cọ làm đổ vỡ tỉnh cảm.",
"Con bốc được lá [size=20][color=black]4♣[/color][/size] Để thầy xem...Đây là một quân bài cảnh báo. Theo thày tính thì thời gian này con phải cẩn thận không có đứa gian dối, phản bội đấy. Nếu con mà kí cọt gì cũng phải đọc lại, không chủ quan nghe chưa. Chúc con may mắn!",
"Con bốc được lá [size=20][color=black]4♠[/color][/size] Để thầy xem...Con à, quân này nó hay đi liền với cả muộn phiền, rắc rối. Thày nghĩ con nên cẩn thận trong chi tiêu, với cả đề phòng mất của. Nói chung thì cũng không có gì nguy hiểm lắm, con cứ an tâm đừng lo nghĩ nhiều, mấy hôm nữa vận chuyển sao dời mọi thứ sẽ đâu vào đấy thôi.",
"Con bốc được lá [size=20][color=black]5♣[/color][/size] Để thầy xem...Quân này báo điềm lành con ạ. Sắp tới con sẽ có nhiều bạn mới, nhiều người giúp đõ, nhiều bằng hữu tốt bụng. Thày tính thì con nên bỏ nhiều thời gian giao lưu bạn bè, mở rộng quan hệ và thiết chặt tình bạn cũ. Điều đó sẽ làm con vui vẻ và thoải mái.",
"Con bốc được lá [size=20][color=black]6♣[/color][/size] Để thầy xem...Hmm, quân này nó báo rằng con sắp có thành công trong tài chính. Thày tính thì con sắp được ai đó cho tiền, tài trợ hoặc giúp đỡ tài chính rồi. Cố gắng làm việc và học hành chăm chỉ nhé!",
"Con bốc được lá [size=20][color=red]7♥[/color][/size] Để thầy xem...Chậc, quân này tượng trưng cho người không chung thủy, tình cảm hay thay đổi. Có thể sắp tới con sẽ thấy hơi bị 'thất tình' một tí, nhớ nhung người ta nhiều một tí mà nhận lại chả được bao nhiêu... Nhưng không sao, bôi cao sẽ khỏi, thày nghĩ là chuyện đó qua cũng nhanh thôi con ạ. Lúc này tâm trạng người ta cũng không ổn định, nhưng rồi dần dà thì tỉnh cảm cũng sẽ chắc chắn hơn...",
"Con bốc được lá [size=20][color=red]8♥[/color][/size] Để thầy xem...Hehe, quân này báo rằng con sắp được tặng quà hoặc được rủ đi chơi. Vui lên con nhá, thày nghĩ là con sắm sửa quần áo, chỉnh trang đầu tóc đi, sắp được đi chơi rồi mà.",
"Con bốc được lá [size=20][color=red]8♦[/color][/size] Để thầy xem...Uhmm… Quân này nó là điềm báo thay đổi trong công việc con ạ. Có thể là con sẽ tìm thấy một công việc mới, hoặc là tình hình công việc bây giờ sẽ khác. Nếu con đi du lịch hay công tác trong thời gian này thì rất có thể sẽ tìm thấy một người khác giới hấp dẫn. Nói chung thày nghĩ là con sẽ thấy một vài thay đổi nho nhỏ và dễ chịu đấy.",
"Con bốc được lá [size=20][color=black]8♣[/color][/size] Để thầy xem...Chà, quân này không được tốt con ạ. Con phải cẩn thận có kẻ ghen ghét trong công việc. Công việc của con có thể sẽ không được thuận lợi lắm, nhưng đừng lo lắng quá vì chỉ cần con tỉnh táo thì sẽ ổn.",
"Con bốc được lá [size=20][color=black]8♠[/color][/size] Để thầy xem...Chẹc, tám bích à, để thày nghĩ... Con này nó nghĩa là sự tham lam, không may, nguy hiểm, buồn rầu. Nếu con đang suy tính chuyện gì thì cũng nên ghi nhớ mình phải cẩn thận hơn nha. Thày nghĩ là có gì cản trở thì cũng sẽ qua, miễn là con suy nghĩ thấu đáo và chấp nhận khó khăn.",
"Con bốc được lá [size=20][color=red]9♥[/color][/size] Để thầy xem...Quân bài của mơ mộng, ước mong, niềm hy vọng. Gặp quân 9 cơ là điềm báo ước mơ thành hiện thực con ạ. Thày tính rồi, con chỉ cần cố gắng hết sức rồi chuyện gì cũng sẽ đạt được. Ước mong đau đáu trong lòng, Chỉ cần tiến tới thì không sợ gì.",
"Con bốc được lá [size=20][color=red]9♦[/color][/size] Để thầy xem...Để thày xem… Quân này nó mang điềm báo là con sắp có thương vụ mới, có thể sẽ phải đi công tác xa nhà. Thời gian này chắc con sẽ khá bận rộn, luôn chân luôn tay và có thể phải chuyển nơi ở một thời gian.",
"Con bốc được lá [size=20][color=black]9♣[/color][/size] Để thầy xem...Uhmm, quân này mang điềm báo thành công. Nếu mà con chưa kết hôn thì thày nghĩ rất có thể là con sắp cưới con nhà đại gia con ạ, không thì người yêu con cũng sắp trúng số lớn đấy. Ngoài ra thì nó cũng báo rằng con sắp gặp của trời cho, tiền bạc từ đâu rơi xuống.",
"Con bốc được lá [size=20][color=red]10♥[/color][/size] Để thầy xem...Ấy, quân bài này tượng trưng cho may mắn và thành công con ạ. Gặp quân 10 cơ thì đích thị là hoạn nạn sẽ vượt qua, phong ba là con muỗi. Nếu vừa gặp khó khăn việc gì thì con cứ yên tâm là sẽ ổn. Làm ăn, học hành, công danh sự nghiệp sẽ tấn tới. Mười cơ là dấu điềm lành, Khó khăn đến mấy cũng giành vẻ vang. Dẫu cho cơ sự tan tành, Vượt lên phút chốc trở thành đại gia.",
"Con bốc được lá [size=20][color=black]10♣[/color][/size] Để thầy xem...Quân bài tốt con ạ. Báo hiệu làm ăn may mắn thành đạt. Nếu con đi du lịch hay làm ăn xa nhà bây giờ thì rất có thể sẽ gặp được bạn mới, nếu chưa có người yêu thì có khi tìm được người yêu đấy.",
"Con bốc được lá [size=20][color=red]J♥[/color][/size] Để thầy xem...Quân bài mang hình người bạn tốt, đôi khi ám chỉ một người mến mộ trẻ tuổi. Gặp quân bài này, thày nghĩ con sắp gặp được một người có tính cách rất hay ho, vui tính và thân thiện. Người này có vẻ mến mộ con. Nếu con là nữ giới đang muốn có người yêu, rất có thể đây là cơ hội tốt. Nếu là nam giới, con sắp gặp một người bạn chơi được. Người ái mộ trẻ tuổi, Mang bông hồng và cả trái tim, Gặp con một ngày không đợi, Là tri kỉ và có thể tình yêu.",
"Con bốc được lá [size=20][color=red]J♦[/color][/size] Để thầy xem...Để thày coi… J Rô à, một chàng trai trẻ chỉnh tề nhưng cũng có thể là một con người đố kỵ không đáng tin tưởng. Thày tính thì con sắp có người báo tin không được tốt lành, nhưng mà cũng không có gì quan trọng to tát lắm. Con nên tỉnh táo khi nghe lời người khác vào thời gian này nhé.",
"Con bốc được lá [size=20][color=black]J♠[/color][/size] Để thầy xem...Quân bài mang hình tượng của một kẻ thù địch và hay ghen tị. Thày nghĩ là thời gian này con nên cảnh giác hơn trong chuyện tiền nong cũng như tình cảm, đề phòng những kẻ tiểu nhân ghen ghét, thù địch.",
"Con bốc được lá [size=20][color=black]Q♠[/color][/size] Để thầy xem...Quân bài tượng trưng cho một góa phụ áo đen. Một quân bài nguy hiểm. Con phải tránh bẫy tình và đề phòng những kẻ chen ngang. Trong chuyện tình cảm, cần phải mềm mỏng nhưng tỉnh táo. Trong công việc, con phải sáng suốt không quyết định theo tình cảm riêng.",
"Con bốc được lá [size=20][color=red]K♥[/color][/size] Để thầy xem...A, quân này nó mang hình ông già tốt bụng, nghĩa hiệp, thông thái, hiểu biết. Gặp quân bài này báo điềm lành rằng con có quý nhân phù trợ, giúp đỡ con ngay cả khi con chưa cần nhờ vả gì. Chờ tin tốt nha con! Ông già mang đến tin vui, khó khăn giúp đỡ vận xui sẻ cùng. Dẫu khó khăn đến muôn trùng, có ông gìa béo đỡ cùng với con.",
"Con bốc được lá [size=20][color=red]K♦[/color][/size] Để thầy xem...Uhmm, thày xem nào…. Quân này nó mang hình một người đàn ông thống trị quyền lực của Đất, một người đầy quyền lực, địa vị và ảnh hưởng. Bốc được quân bài này, con sẽ sớm có tin tốt lành, thường là được thăng chức con ạ. Thời gian này con nên đối tốt với các sếp trên cũng như đồng nghiệp, sẽ dễ có cơ hội lắm đấy.",
"Con bốc được lá [size=20][color=black]K♣[/color][/size] Để thầy xem...Oh, quân này mang hình một ông già tốt bụng, hào sảng, nhiệt tình. Con sẽ gặp được giúp đỡ từ cấp trên, thày cô, bố mẹ hay họ hàng chú bác đấy. Thày nghĩ có thể là con sắp được việc làm mới có lương cao hơn, thăng chức hay người khác cho tiền.",
"Con bốc được lá [size=20][color=black]K♠[/color][/size] Để thầy xem...Uhm, thày xem nào.... Quân bài này tượng trưng cho người giàu tham vọng và có thể ích kỷ. Nó là điềm báo cho con biết phải đề phòng kẻ tiểu nhân tránh sự ghen ghét, bon chen. Con nên nhường nhịn chuyện nhỏ, nhưng đừng để ai động đến quyền lợi của mình.",
"Con bốc được lá [size=20][color=black]2♠[/color][/size] Để thầy xem...Chậc…. Quân này nó ứng với dối lừa, đổ vỡ quan hệ. Sắp tới con có thể sẽ phải tạm dừng một việc quan trọng, một mối quan hệ quan trọng nào đó. Điều đó có thể làm con buồn nhưng là nó cần thiết. Nếu con đang băn khoăn về một mối tình, thì quân này nó là điềm báo con sắp phải chia ly hoặc người ấy làm con thất vọng. Thày nghĩ con nên thu xếp để được nghỉ ngơi và thư giãn một thời gian, rồi con sẽ ổn.",
"Con bốc được lá [size=29][color=red]2♥[/color][/size] Để thầy xem...Uhmm, một quân bài rất tốt. Nó báo hiệu rằng con sẽ được người yêu hoặc một người mến mộ ủng hộ và giúp đỡ. Thế nên là an tâm con nhá, có khó khăn gì thì người ấy cũng thông cảm và giúp con mà",
"Con bốc được lá [size=20][color=red]2♦[/color][/size] Để thầy xem...Hmm, quân này nó có khá nhiều ý nghĩa đấy. Có thể là điềm báo về đối tác làm ăn, cũng có khi là thay đổi trong quan hệ. Thày nghĩ con nên nói chuyện với bạn bè và đồng nghiệp để hiểu rõ hơn chuyện gì đang xảy ra con ạ.",
"Con bốc được lá [size=20][color=red]A♦[/color][/size] Để thầy xem...À, quân này thường báo tin tốt con ạ. Nó tượng trung cho sự thay đổi, một thông điệp tốt, thường là về tiền bạc. Thày tính thì có thể con sắp được tăng lương đấy. Cứ cố gắng học hành làm việc chăm chỉ nhé, rồi con sẽ nhận được tin vui sớm thôi."
);
function phangi(str){
if (str == " " || str == "")
	return "Chơi xoáy nhau àh, con không hỏi bố thầy cũng không trả lời được";
else if(/mở/.test(str)) 
{jQuery("#chatbox_members").toggle("slow");
jQuery("#chatbox").animate({left:168},1000);
return "Đã mở!";
}       
else if(/tắt/.test(str)) 
{jQuery("#chatbox_members").toggle("slow");
jQuery("#chatbox").animate({left:0},1000);
return "Đã tắt!";
}     
else if(/bói|boi/i.test(str)&&/bài|bai/i.test(str))
return boibai[Math.round(r*51)];
else if(/bye|tạm biệt|g9|good night|Good night|pye|ngủ ngon/.test(str))
	return "Ừ, phắn ra khỏi Shoutbox cho đẹp trời đi con ;))";
else if(/cứt|cức|shit|Cứt|Cức|Shit|mông|thúi|thối|bứt lông/.test(str))
	return "Con phê thuốc à? Nói năng mất vệ sinh";
else if(/yêu thầy|iu thầy|love thầy/.test(str))
	return "Thầy có bạn gái rồi, con quỳ xuống cầu xin thì may ra thầy cho con 1 chân.... xách dép :P";
else if(/bồ|người yêu|người iu/.test(str))
	return "Con còn nhỏ lắm, quan tâm chuyện bồ bịch làm chi? ;))";
else if(/view|viewsource/.test(str))
	return "Thầy đang view mà view ko ra đây nè, tránh sang 1 bên để thầy view tiếp coi, cái này khó wá à! @@";
else if(/get|chôm|xin/i.test(str)&&/avatar|ava/i.test(str))
	return "Đợi tí thầy mò trong túi xem ...  :idea: À! Đây: [img]http://img.msg.yahoo.com/avatar.php?yids="+str.substr(str.lastIndexOf(' ')+1)+"[/img]";
else if(/kute|cute|cutie|kutie/.test(str))
	return "Nói thật nha con, thầy mà chết đi thì trên đời chả còn ai kute nữa đấy con ạ ;))";
else if(/lồn|đụ|cặc|địt|cac|con cu|fuck|loz|nhậu/.test(str))
	return "Cái đấy chỉ dành cho người lớn thôi, tuổi của con chưa đụng vào được đâu!";
else if(/mù|đui|câm|điếc/.exec(str)!=null) {rec=/mù|đui|câm|điếc/.exec(str);
return "Ta thấy con mới " + rec + " đấy :|"}
else if(/buzz|BUZZ|Buzz|buz|Buz/.test(str))
	return "Buzz quá thì ban nick thôi, có gì mà phải xoắn ;))";
else if(/help/.test(str))
	return "Hướng dẫn :[list][*]Nhập cú pháp [u]/thay[/u]-khoảng trắng-câu hỏi để \"thỉnh\" Thầy[*]Nhập [u]/thay get avatar + nickyahoo[/u] để lấy avatar yahoo.[*]Nhập [u]/thay bói bài[/u] để được \"Thầy\" bói bài.[*]Nhập [u]/about[/u] để xem thông tin \"Thầy\"[/list]";
else if(/hám gái|mê gái|khoái gái/.test(str))
	return "Gái thì tất nhiên thằng nào cũng khoái rồi con ạ ;))";
else if(/qq|ww|ee|rr|tt|yy|uu|ii|oo|pp|yt|yu|hg|aa|dd|ff|gg|hh|jj|kk|ll|zz|cc|vv|bb|nn|mm|fa|af|sd|ds|df|fd|kl|lk|hj|jh|qw|wr|hs|bm|vd|xc|zx|xz|cx|cb|bv|bc|ar|er|dg|gd|hd|dh|fk|dj|fl|sw|wh|rt|net|mz|zm|mx|xm|vm|mv|tv|cw|67|ls|sl|lx|xl|lc|cl|ql|lz|hb|bh|cg|gc|fg|gf|ad|fc|cf|zl|lt|ps|sp|ol|py|px|xp|mq|qm|rm|mr|cp|pc|fz|zf|sm|ms/.test(str))
	return "Con nói tiếng Campuchia đấy à? Thầy chỉ biết tiếng I-rắc thôi 8-|";
else if(/con có đẹp|đẹp hơn thầy|con có ẹp|con đẹp|con ẹp/.test(str))
	return "Tất nhiên là xấu rồi, nhìn thầy mà làm hình tượng đi con ;))";
else if(/đẹp trai nhất|đẹp trai hơn|đẹp nhất|đẹp hơn|xấu trai hơn|xấu trai nhất|xấu hơn|xấu nhất|đẹp không|xấu không|đẹp ko|xấu ko|đẹp k|xấu k|thầy xấu|Thầy xấu/.test(str))
	return "Đừng hỏi câu đó thêm đau lòng con ạ, ở đây chỉ có mỗi thầy là đẹp nhất thôi :))";
else if(/hello|helu|chào/.test(str))
	return "Chào con! Hôm nay con muốn hỏi cái chi ?";
else if(/thầy có đẹp|thầy đẹp trai|Thầy có đẹp|Thầy đẹp trai|đẹp trai ko thầy|Thầy đẹp zai|thầy đẹp zai/.test(str))
	return "Sao? Con ghen tị với vẻ đẹp của ta à??";
else if(/số/.test(str) && /con|Con/.test(str) && /giàu|hên|chết|may|sống lâu/.test(str))
	return "Con phải là girl thì thầy mới trả lời câu này ah` nha :x";
else if(/số có giàu|số có hên|số có may|số có chết|sốcó sống lâu|số giàu|số hên|số may|số chết/.test(str))
	return "Không đâu con ạ :))";
else if(/bạn trai|bạn zai/.test(str) && /con|Con/.test(str))
	return "Bọn con trai bây giờ ko tốt đâu con ạ, nếu mà con vừa ý thì... thầy đây con thấy sao? ;))";
else if(/thầy có vợ/.test(str))
	return "Con lo thân con trước đi rồi hãy hỏi đến thầy ;))";
else if(/bạn gái/.test(str) && /con|Con/.test(str))
	return "Con nên từ bỏ ý định thì hơn, con gái bây giờ ghê lắm. Nó dụ người ta có bầu rồi... nó bỏ =))";

else if(/vợ|Vợ/.test(str) && /con|Con/.test(str))
	return "Nói đến vợ thì thầy khuyên con nên đi tu là vừa =))";
else if(/con có chồng|chồng của con|Chồng của con|Chồng con|chồng con|chồng tương lai con|chồng tương lai của con/.test(str))
	return "Chồng con gì hở con?? Đàn ông toàn 1 lũ như thầy cả thôi, thế con có muốn lấy không?";
else if(/thầy biết không|Thầy biết không|thầy bít không|Thầy bít không|thầy biết ko|Thầy biết ko|thầy bít ko|Thầy bít ko|thầy biết k|Thầy biết k|thầy bít k|Thầy bít k/.test(str))
	return "Thầy thần thông quảng đại lắm, gì cũng biết hết, nhưng có điều ko nói cho con biết đâu ;))";
else if(/gà|pro|Pro/.test(str) && /thằng|thằg|tên|Thằng|Thằg|admin|Admin|Thịnh|Đỗ Thịnh|thịnh|dothinh|đỗ thịnh/.test(str))
	return "Nhìn qua nhìn lại, ở đây có mình con là gà thôi :))";
else if(/ban|ban nick/.test(str) && /thầy|Thầy/.test(str))
	return "Ấy ấy, ban ai thì ban, đừng ban nick thầy con nhé :|";
else if(/ban nick/.test(str))
	return "Cứ thẳng tay đi con, chả tiếc gì chúng nó đâu con ạ ;))";
else if(/gà|pro|Pro/.test(str) && /thầy|Thầy|con|Con/.test(str))
	return "Quẻ nói Thầy pờ-dzồ nhất 4rum này đấy con ạ ;))";
else if(/xạo/.test(str))
	return "Chưa thấy ai xạo nhưng ở đây thầy thấy con xạo rồi 8-|";
else if(/mặt thầy|mặt của thầy|mặt Thầy|mặt của Thầy/.test(str))
	return "Ít ra thì ta cũng đẹp hơn con ;))";
else if(/Thầy tuổi gì|thầy tuổi gì|thầy nhiêu tuổi|Thầy nhiêu tuổi|thầy nhiu tuổi|Thầy nhiu tuổi|thầy mấy tuổi|Thầy mấy tuổi|thầy mấy tủi|Thầy mấy tủi/.test(str))
	return "Thế con mấy tuổi mà hỏi thầy câu đó ;))";
else if(/nhiêu tuổi|nhiu tuổi|nhiêu tủi|nhiu tủi|mấy tủi|mấy tuổi/.test(str))
	return "Kute mà sao hỏi khó wá zậy? :|";
else if(/tụt quần thầy/.test(str))
	return "Để thầy mặc quần vào đã rồi con hãy tụt!";
else if(/tụt quần/.test(str))
	return "Con cứ tụt đi, thầy tin là này nó sắp lộ hàng rồi =))";
else if(/thầy có mấy|Thầy có mấy|vợ của thầy|vợ thầy|Vợ thầy|Vợ của thầy|Con thầy|Con của thầy|con của thầy|con thầy/.test(str))
	return "Xoi mói quá coi chừng ra đường sét đánh trúng nghen con!";
else if(/ngu|điên|khùng|stupid/.test(str) && /tên|thằng|đứa|bố|mẹ|má/.test(str))
	return "Nói có thì thầy ngại lắm @@";
else if(/thầy dâm|thầy ngu|thầy stupid|Thầy stupid|thầy ngốc|thầy điên|thầy khùng|Thầy dâm|Thầy ngu|Thầy ngốc|Thầy điên|Thầy khùng|Thầy điên/.test(str))
	return "Con phê à? Tát cho 1 cái bây giờ, dám dỗn với thầy??";
if(/dâm|ngu|stupid|ngốc|điên|khùng/.test(str) && /Thầy có bị|thầy có bị|Thầy bị|thầy bị/.test(str))
	return "Đá xoáy nhau ah`? Hỏi câu này đến ông nội thầy cũng ko dám trả lời";
else if(/gay|pede|bede|bd|pd|gay|pêđê|les/.test(str))
	return "Trước khi hỏi người khác, con hãy hỏi lại mình đi đã =))";
else if(/thầy kỳ|Thầy kỳ/.test(str))
	return "Kì gì con, thầy tắm rồi, sạch lắm, có bẩn đầu mà kì??? =))";
else if(/thầy tên gì|tên thầy|Thầy tên gì|tên Thầy/.test(str))
	return "Tên ko quan trọng, con muốn cho là gì cũng dc :))";
else if(/vô duyên|dô diên|dzô dziên|vô dziên/.test(str))
	return "Con xem lại mình đi, có duyên đâu mà nói người khác :))";
else if(/ngu hơn|ngu không|ngu ko|ngu k|ngu nhất|stupid/.test(str))
	return "Nói về khoản ngu thì ở đây thầy... thông minh nhất ;))";
else if(/thông minh|thôg minh/.test(str))
	return "Sao? Con bảo ta thông minh à? Ngại quá đi mất :> :>";
else if(/thầy bị chó cắn|thầy bị té giếng|thầy bị xe đụng|thầy bị xe tông|thầy bị xe hun|thầy bị sét đánh|xe đụng thầy|xe tông thầy|xe hun thầy/.test(str))
	return "Muốn hại người tốt ko dễ đâu con, thầy cũng cầu cho con bị té giếng!";
else if(/dis|shit|dis|fuk|vl|VKL|vkl|vcl|mịa|DKM|dkm|dm|dcm|mie|fucking|địt|nồn|đít|đĩ|chó|láo|phắc du|phắc zu|fắc du|fắc zu|lông/.test(str))
	return "Nói bậy àh? Coi chừng ra đường chó cắn nha con";
else if(/Shoutbox|shoutbox|chatbox|Sbox|SBox|Chatbox|Cbox|CBox/.test(str) && /thầy|Thầy/.test(str))
	return "Shoutbox là lãnh địa của thầy, ko hỏi thì đi chỗ khác chơi cho thầy làm ăn nhá :|";
else if(/yêu Thịnh|iu Thịnh|yêu thịnh|iu thịnh|iu đỗ thịnh|yêu đỗ thịnh|yêu Đỗ Thịnh|iu Đỗ Thịnh/.test(str))
	return "Con hỏi gì thầy nghe ko rõ? À, con yêu Thịnh hả? Tốt thôi con ạ ;))";
else if(/Thịnh|Đỗ Thịnh|dothinh|thinh|đỗ thịnh|do thinh/.test(str))
	return "Con nói Thịnh hả, thầy yêu lắm cơ :x";
else if(/alo|hello|helu|chào|ê thầy|chào thầy/i.test(str))
	return "Chào con! Hôm nay con muốn hỏi cái chi :S";
else if(/chém|đánh|oánh|quýnh|chem|danh|quynh|đá|đập|cắn|tát|đạp/i.test(str))
	return "Chơi luôn đi con, có gì đâu mà phải xoắn? ;))";
else if(/Ngu|Dốt|dâm|điên|khùng|ngu|ngốc|xàm|nhảm|nhảm nhí|dở hơi|hâm|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/.exec(str)!=null)
{rec=/Ngu|Dốt|dâm|điên|khùng|ngu|ngốc|xàm|nhảm|nhảm nhí|dở hơi|hâm|thần kinh|đần độn|kìn|khìn|dở người|ngu si|dê|đê tiện|bệnh|tũn|dại gái|bã đậu|tâm thần/.exec(str);
return "Ta thấy con còn " + rec + " hơn !"}
else if(/buồn|chán|bùn|nản/.exec(str)!=null) {rec=/buồn|chán|bùn|nản/.exec(str);
return "Ta còn " + rec + " hơn con nhiều, than thở làm gì? :("}
else if(/thay|admin|thầy/.test(str) && /bố|mẹ|cắn|đi đâu|làm gì|ở đâu/.test(str))
	return "Con chưa đủ tuổi để hỏi câu đó đâu, coi chừng đấy !";
else if(/yêu|iu/.test(str))
	return "Con tuổi gì mà hỏi câu này? Lớn thêm tí nữa hãy hỏi câu này nha con :))";
else if(str.substr(str.length-1)!="?")
	return "Con đang hỏi thầy àh? Sao không thấy dấu chấm hỏi";
else 
	return traloi[Math.round(r*56)];
}
sss= "/me được [color=brown]Thầy phán[/color]: " +"[color=blue]" + phangi(str)+ "[/color]" ;document.post.message.value = '';
setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}

else if(/được thầy phán|được Thầy phán/.test(kkk))
	{sss= "/me được thầy phán: Tự sướng hả con? Trình gì mà đòi giả danh thầy? :))" ;
document.post.sent.value=kkk;document.post.message.value = '';
document.post.message.focus();ajax_submit_chatbox(params);
setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false
}
else if(/ngu|láo|dốt|hâm|dâm/.test(kkk) && /thầy|Thầy/.test(kkk))
	{sss= "/me được thầy phán: Tát cho 1 cái bây giờ, dám hỗn với thầy ah`???" ;
document.post.sent.value=kkk;document.post.message.value = '';
document.post.message.focus();ajax_submit_chatbox(params);
setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}
else if(/thầy|Thầy/.test(kkk))
	{sss= "/me được thầy phán: Con vừa nhắc đến thầy đấy à?" ;
document.post.sent.value=kkk;document.post.message.value = '';
document.post.message.focus();ajax_submit_chatbox(params);
setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}

if (kkk.slice(0,5)== "/help")
{document.post.sent.value="@Thầy:help";sss= "/me được [color=brown]Thầy phán[/color]: [color=blue]Hướng dẫn :[list][*]Nhập cú pháp [u]/thay[/u]-khoảng trắng-câu hỏi để \"thỉnh\" Thầy[*]Nhập [u]/thay get avatar + nickyahoo[/u] để lấy avatar yahoo.[*]Nhập [u]/thay bói bài[/u] để được \"Thầy\" bói bài.[*]Nhập [u]/about[/u] để xem thông tin \"Thầy\"[/list][/color]" ;document.post.message.value = '';ajax_submit_chatbox(params);
setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}
if (kkk.slice(0,6)== "/about")
{document.post.sent.value="@Thầy:about";sss= "/me được [color=brown]Thầy phán[/color]: [color=blue]Thầy được viết bởi [color=red][/color]  [color=orange][/color]. Bản quyền của[/color]" ;document.post.message.value = '';ajax_submit_chatbox(params);
setTimeout("document.post.sent.value=sss;document.post.message.focus();ajax_submit_chatbox(params);",1000);return false}
else{
document.post.message.value = '';
	document.post.message.focus();
	ajax_submit_chatbox(params);
	return false;}
}