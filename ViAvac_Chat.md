Vì chuẩn bị tết nên mình làm màu đỏ
Hướng dẫn :{Trả lời để thấy nội dung}

Bước 1 :

ACP --> Modules --> HTML & JAVASCRIPT --> Javascript codes management --> Create a new javascript

• Title **: ViAvac Chat
• Placement : In all the pages
• Javascript Code** :

```

var avacweb_chat_config = {
version : '1-5',
new_chat_title : 'ViAvac Chatbox',
light_up_color : 'orange',
auto_log_in : 'open',
archives : 1,
sound_file : 'http://www.freesfx.co.uk/rx2/mp3s/2/1305_1256857800.mp3',
at_replacement : '',
stylesheet : 'http://chat.avacweb.net/avacweb_chat.css',
disable_timeout : 0,
allow_private_messaging : 1,
onload : [],
message_hook : [],
user_hook : [],
commands : {}

};
document.write('<script type="text/javascript" src="http://chat.avacweb.net/v' + avacweb_chat_config.version + '.js">

Unknown end tag for &lt;/script&gt;

');
```


Bước 2 :
ACP --> Modules --> HTML & JAVASCRIPT --> Javascript codes management --> Create a new javascript

• Title **: Feather Chat
• Placement : In all the pages
• Javascript Code** :

```

avacweb_chat_translation = {
'log in' : 'Đăng Nhập',
'log out': 'Thoát',
'chat'  : 'Chat',
'on'    : 'Bật',
'off'    : 'Tắt',
'close'  : 'Đóng',
'smilies': '<img src="http://illiweb.com/fa/subsilver/wysiwyg/smilie.gif"/>',
'colors' : 'Màu chữ',
'send'  : 'Gửi',
'archives' : 'Lịch sử Chatbox ',
'message': 'Nội dung',
'refresh': 'Xóa toàn bộ',
'you are disconnected. click log in to join the chat.' : 'Bạn chưa đăng nhập Chatbox. Ấn "Đăng nhập" để vào chatbox',
'user options' : 'BB Code',
'color' : 'Color',
'sound' : 'Sound <img src="http://png-1.findicons.com/files/icons/1035/human_o2/16/preferences_desktop_text_to_speech.png" ',
'bold' : 'Bold <img src="http://illiweb.com/fa/subsilver/wysiwyg/bold.gif"/> ',
'underline' : 'Underline <img src="http://illiweb.com/fa/subsilver/wysiwyg/underline.gif"/> ',
'strike' : 'Strike <img src="http://illiweb.com/fa/subsilver/wysiwyg/strike.gif"/>',
'italic' : 'Italic <img src="http://illiweb.com/fa/subsilver/wysiwyg/italic.gif"/> ',
'private message' : 'Tin nhắn riêng',
'loading smilies...' : 'Đang tải...',
'this command is not available or does not exist' : 'Mệnh lệnh này không có sẵn hoặc không tồn tại',
'user not found' : 'Không tìm thấy tên người dùng',
'view profile' : 'Xem lý lịch',
'send private message' : 'Gửi tin nhắn',
'kick from chat' : 'Đá ra phòng chat',
'remove from moderators' : 'Hạ chức ',
'send friend request' : 'Gửi yêu cầu kết bạn',
'add to moderators' : 'Thăng chức',
'away' : 'Away',
'reading' : 'Chế độ : Xem'
};

```

Bước 3 :

ACP --> Display --> Pictures and Colors --> Colors --> CSS Stylesheet :

```

/* ViAvac Chat  */
#achat_login{display:none}
#avacweb_chat iframe {
border: 2px solid #ff0000!important;
}
#avacweb_chat_button {
right: 29px!important;
padding: 5px 7px!important;
}
#chatbox_header, #chatbox_footer {

background-color: #ff0000!important;
box-shadow: inset 0 0px 0px #cc0000 !important;
-moz-box-shadow: inset 0 0px 0px #cc0000 !important;
-webkit-box-shadow: inset 0 0px 0px #cc0000 !important;
text-shadow: 0 1px #cc0000!important;
}
.chatbox_row_1 {
background-color: #f7e4e4 !important;
font-size: 1.1em!important;
}
.chatbox_row_2 {
background-color: #ffffff!important;
font-size: 1.1em!important;
}

.member-title {
background-color: #ff0000!important;
color: #FFFFFF!important;
border: 1px solid #ff0000!important;
box-shadow: inset 0 10px 10px #f7d7d7!important;
-moz-box-shadow: inset 0 10px 10px #f7d7d7!important;
-webkit-box-shadow: inset 0 10px 10px #f7d7d7!important;
text-shadow: 0 1px #cc0000!important;
}
#chatbox_members .online-users li{background-image:url(http://i.imgur.com/6A6tt.png);background-position:left;background-repeat:no-repeat;background-size:13%;padding-left:20px}

#achat_contextmenu{background-image : url(http://i14.servimg.com/u/f14/16/58/45/96/banner13.png)!important}

```

Bước 4:

ACP --> Modules --> Chatbox --> Cấu hình diễn đàn --> ChatBox configuration

Activate the ChatBox : Yes/Có
ChatBox display : Do not display/Không hiện chatbox

Vậy là xong

Chúc các bạn thành công

Ghi rõ nguồn hotrofm khi copy bài viết


