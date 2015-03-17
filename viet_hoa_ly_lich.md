Demo:



![http://i44.servimg.com/u/f44/17/54/30/53/210.png](http://i44.servimg.com/u/f44/17/54/30/53/210.png)
Bước 1:
ACP->Quản lý người dùng và quản lý nhóm->Special rights->Special rights
View the profile : Quản Trị Viên

Bước 2:
ACP->Display->Homepage->Headers & Navigation
Tạo 1 menu mới với cấu hình như sau:
Menu: Lý lịch
Picture: đây là link ảnh của menu (có hoặc không có cũng đc)
Text: Lý lịch
Redirection URL: /profile?mode=editprofile&page\_profil=preferences

Rights Display: Tích tất vào các ô trừ ô Guests và Open in a new window.


Bước 3:
ACP->Display->Templates->lý lịch->profile\_add\_body
thay toàn bộ temp trong đó bằng temp sau.

```

<script src="{JSPWD}">

Unknown end tag for &lt;/script&gt;


{ERROR_BOX}
<!-- BEGIN switch_user_logged_in -->
<div id="pun-visit" class="clearfix">
<ul>
<li><a href="{U_SEARCH_NEW}">{L_SEARCH_NEW}

Unknown end tag for &lt;/a&gt;



Unknown end tag for &lt;/li&gt;


<li><a href="{U_SEARCH_SELF}">{L_SEARCH_SELF}

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

{ERROR_BOX}

<div class="main">
<!-- BEGIN switch_display_menu -->
{UCP_TABS}
<!-- END switch_display_menu -->

<form action="{S_PROFILE_ACTION}" {S_FORM_ENCTYPE} method="post" name="post" id="ucp" class="frm-form">
<p><input type="hidden" name="email" value="{EMAIL}" />

Unknown end tag for &lt;/p&gt;


<!-- BEGIN switch_informations_menu -->
<div class="main-head"><div class="subtitle">{L_REGISTRATION_INFO}{L_MY_PROFILE}

Unknown end tag for &lt;/div&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content frm">
<p class="frm-info">{L_ITEMS_REQUIRED}

Unknown end tag for &lt;/p&gt;


<fieldset class="frm-set multi">
<!-- BEGIN switch_namechange_disallowed -->
<dl>
<dt><label>{L_USERNAME} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="hidden" name="username" value="{USERNAME}" class="inputbox" /><strong>{USERNAME}

Unknown end tag for &lt;/strong&gt;



Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_namechange_disallowed -->
<!-- BEGIN switch_namechange_allowed -->
<dl>
<dt><label>{L_USERNAME} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="username" value="{USERNAME}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_namechange_allowed -->
<!-- BEGIN switch_emailchange_disallowed -->
<dl>
<dt><label>{L_EMAIL_ADDRESS} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="hidden" name="email" value="{EMAIL}" />{EMAIL}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_emailchange_disallowed -->
<!-- BEGIN switch_emailchange_allowed -->
<dl>
<dt><label>{L_EMAIL_ADDRESS} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="email" value="{EMAIL}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_emailchange_allowed -->

<!-- BEGIN switch_change_password -->
<dl>
<dt><label>Thay đổi mật khẩu của bạn : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input class="mainoption" type="submit" name="change_password" value="Đổi mật khẩu" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_change_password -->


Unknown end tag for &lt;/fieldset&gt;


<!-- BEGIN switch_span_div -->
<!-- END switch_span_div -->

<!-- BEGIN switch_website -->
<dl>
<dt><label>{L_WEBSITE} : {MUST_LABEL_2}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="website" value="{WEBSITE}" class="inputbox" />
<br /><span class="italic">{L_WEB_EXPLAIN}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_website -->
<!-- BEGIN switch_location -->
<dl>
<dt><label>{L_LOCATION} : {MUST_LABEL_1}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="location" value="{LOCATION}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_location -->
<!-- BEGIN switch_occupation -->
<dl>
<dt><label>{L_HUMOR} : {MUST_LABEL_3}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="occupation" value="{OCCUPATION}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_occupation -->
<!-- BEGIN switch_interests -->
<dl>
<dt><label>{L_INTERESTS} : {MUST_LABEL_4}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="interests" value="{INTERESTS}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_interests -->
<!-- BEGIN switch_gender -->
<dl>
<dt><label>{L_GENDER} : {MUST_GENDER}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<label><input type="radio" name="gender" value="1" {GENDER_MALE_CHECKED} /><span class="cont">{L_GENDER_MALE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="gender" value="2" {GENDER_FEMALE_CHECKED} /><span class="cont">{L_GENDER_FEMALE}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_gender -->
<!-- BEGIN switch_birthday -->
<dl>
<dt><label>{L_BIRTHDAY} :{BIRTHDAY_REQUIRED}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>{S_BIRTHDAY_NEW}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_birthday -->





Unknown end tag for &lt;/fieldset&gt;



<!-- BEGIN switch_profile_fields -->
<div class="sub-head"><span>{L_PROFILE_FIELDS}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/div&gt;


<fieldset class="frm-set">
<!-- BEGIN field -->
<dl>
<dt><label>{switch_informations_menu.switch_profile_fields.field.NAME}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
{switch_informations_menu.switch_profile_fields.field.OBJECT}<br />
<em>{switch_informations_menu.switch_profile_fields.field.DESCRIPTION}

Unknown end tag for &lt;/em&gt;

<br />


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END field -->


Unknown end tag for &lt;/fieldset&gt;


<!-- END switch_profile_fields -->

<!-- BEGIN switch_profile_fields_register -->
<fieldset class="frm-set">

<!-- BEGIN field -->
<dl>
<dt><label>{switch_informations_menu.switch_profile_fields_register.field.NAME} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>{switch_informations_menu.switch_profile_fields_register.field.OBJECT}<br /><br />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END field -->


Unknown end tag for &lt;/fieldset&gt;



<!-- END switch_profile_fields_register -->
<!-- END switch_informations_menu -->

<!-- BEGIN switch_confirm_password -->
<div class="main-head"><h1 class="page-title">{L_REGISTRATION_INFO}

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content frm">
<fieldset class="frm-set">
<dl>
<dt><label>{L_CURRENT_PASSWORD} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="password" name="cur_password" value="{CUR_PASSWORD}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_confirm_password -->
<!-- BEGIN switch_confirm_password_new -->
<div class="main-content frm">
<fieldset class="frm-set">
<dl>
<dt><label>{L_NEW_PASSWORD} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="password" name="new_password" value="{NEW_PASSWORD}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_CONFIRM_PASSWORD} : *

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="password" name="password_confirm" value="{PASSWORD_CONFIRM}" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/div&gt;


<!-- END switch_confirm_password_new -->

<!-- BEGIN switch_preferences_menu -->
<div class="main-head"><h1 class="page-title">{L_PREFERENCES}

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content frm">
<fieldset class="frm-set">
<dl>
<dt><label>{L_PUBLIC_VIEW_EMAIL} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<label><input type="radio" name="viewemail" value="2" {VIEW_EMAIL_FORM} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<!-- BEGIN switch_enable_mail_view --><label><input type="radio" name="viewemail" value="2" {VIEW_EMAIL_FORM} /><span class="cont">{L_FORM}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="viewemail" value="1" {VIEW_EMAIL_MAILTO} /><span class="cont">{L_MAILTO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<!-- END switch_enable_mail_view --><label><input type="radio" name="viewemail" value="0" {VIEW_EMAIL_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- BEGIN switch_view_pm -->
<dl>
<dt><label>Cho phép thành viên gửi tin nhắn :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<label><input type="radio" name="view_pm" value="1" {VIEW_MP_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="view_pm" value="0" {VIEW_MP_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_view_pm -->
<!-- BEGIN switch_profile_advanced -->
<dl>
<dt><label>Cho phép viết lên tường nhà:

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<label><input type="radio" name="profilemsgs" value="2" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_ALL} />Tất cả thành viên

Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="profilemsgs" value="1" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_FRIENDS} />bạn bè của tôi

Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="profilemsgs" value="0" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_NONE} />Không ai

Unknown end tag for &lt;/label&gt;





Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_profile_advanced -->
<!-- BEGIN switch_fb_connect -->
<dl>
<dt><label>{switch_preferences_menu.switch_fb_connect.L_FB_LINK_ACCOUNT} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<!-- BEGIN switch_fb_account_linked -->
<span class="italic">{switch_preferences_menu.switch_fb_connect.switch_fb_account_linked.L_FB_ACCOUNT_LINKED}

Unknown end tag for &lt;/span&gt;


<!-- END switch_fb_account_linked -->

<!-- BEGIN switch_fb_account_not_linked -->
<fb:login-button size="medium" onlogin="facebook_link()" v="2">{switch_preferences_menu.switch_fb_connect.switch_fb_account_not_linked.L_FB_LOGIN_BUTTON}

Unknown end tag for &lt;/login-button&gt;


<!-- END switch_fb_account_not_linked -->


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- BEGIN switch_fb_account_linked -->
<dl>
<dt><label>{switch_preferences_menu.switch_fb_connect.switch_fb_account_linked.L_UNLINK_FB_ACCOUNT_EXPLAIN} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<label><input type="radio" name="unlink_fb_account" value="1" /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="unlink_fb_account" value="0" checked="checked" /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_fb_account_linked -->
<!-- END switch_fb_connect -->
<dl>
<dt><label>Cho phép bản tin :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="newsletter" value="1" {NEWSLETTER_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="newsletter" value="0" {NEWSLETTER_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<br /><span class="italic">Bản tin là văn bản lớn bằng sẽ được gửi bằng email<br />bởi quản trị viên của diễn đàn này. Nếu thiết lập là có,<br />bạn sẽ nhận được trong hộp thư đến e-mail của bạn.

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_HIDE_USER} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="hideonline" value="1" {HIDE_USER_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="hideonline" value="0" {HIDE_USER_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_NOTIFY_ON_REPLY} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="notifyreply" value="1" {NOTIFY_REPLY_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="notifyreply" value="0" {NOTIFY_REPLY_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<br /><span class="italic">Diễn Đàn sẽ gửi email thông báo khi có người trả lời bài viết,<br />tuỳ chọn này có thể thay đổi khi gửi bài viết.

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_NOTIFY_ON_PRIVMSG} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="notifypm" value="1" {NOTIFY_PM_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="notifypm" value="0" {NOTIFY_PM_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- BEGIN switch_can_disable_mass_pm -->
<dl>
<dt><label>Thông báo bằng e-mail khi một quản trị viên / Điều phối viên gửi cho tôi một tin nhắn cá nhân: : 

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="allow_mass_pm" value="4" {ALLOW_MASS_PM_NOTIFY_CHECKED} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="allow_mass_pm" value="2" {ALLOW_MASS_PM_CHECKED} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<br /><span class="italic">Thông báo qua email bất cứ khi nào một<br />quản trị viên / Điều phối viên gửi cho bạn một tin nhắn.

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_can_disable_mass_pm -->
<dl>
<dt><label>{L_POPUP_ON_PRIVMSG} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="popup_pm" value="1" {POPUP_PM_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="popup_pm" value="0" {POPUP_PM_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<br /><span class="italic">{L_POPUP_ON_PRIVMSG_EXPLAIN}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>Hiển thị một thông báo khi trả lời mới được viết :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="post_prevent" value="1" {POST_PREVENT_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="post_prevent" value="0" {POST_PREVENT_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<br /><span class="italic">Bạn sẽ được cảnh báo nếu trả lời đã được đăng<br /> trong khi bạn viết một trả lời cùng một chủ đề

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- BEGIN switch_report -->
<dl>
<dt><label>Mở báo cáo pop-up cho các báo cáo mới: :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="no_report_popup" value="0" {switch_preferences_menu.switch_report.NO_REPORT_POPUP_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="no_report_popup" value="1" {switch_preferences_menu.switch_report.NO_REPORT_POPUP_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>Thông báo cho tôi qua email nếu có ai đó báo cáo một bài viết: :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="no_report_mail" value="0" {switch_preferences_menu.switch_report.NO_REPORT_MAIL_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="no_report_mail" value="1" {switch_preferences_menu.switch_report.NO_REPORT_MAIL_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_report -->
<!-- BEGIN switch_cke_editor -->
<dl>
<dt><label>{L_DISPLAY_WYSIWYG} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
<label><input type="radio" name="user_wysiwyg" value="1" {USER_WYSIWYG_YES} />{L_YES}

Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="user_wysiwyg" value="0" {USER_WYSIWYG_NO} />{L_NO}

Unknown end tag for &lt;/label&gt;


<br /><span class="italic">{L_DISPLAY_WYSIWYG_EXPLAIN}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_cke_editor -->
<dl>
<dt><label>{L_ALWAYS_ADD_SIGNATURE} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="attachsig" value="1" {ALWAYS_ADD_SIGNATURE_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="attachsig" value="0" {ALWAYS_ADD_SIGNATURE_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_ALWAYS_ALLOW_BBCODE} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="allowbbcode" value="1" {ALWAYS_ALLOW_BBCODE_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="allowbbcode" value="0" {ALWAYS_ALLOW_BBCODE_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_ALWAYS_ALLOW_HTML} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="allowhtml" value="1" {ALWAYS_ALLOW_HTML_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="allowhtml" value="0" {ALWAYS_ALLOW_HTML_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_ALWAYS_ALLOW_SMILIES} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><label><input type="radio" name="allowsmilies" value="1" {ALWAYS_ALLOW_SMILIES_YES} /><span class="cont">{L_YES}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;


<label><input type="radio" name="allowsmilies" value="0" {ALWAYS_ALLOW_SMILIES_NO} /><span class="cont">{L_NO}

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/label&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_BOARD_LANGUAGE} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>{LANGUAGE_SELECT}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>{L_TIMEZONE} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>{TIMEZONE_SELECT}

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<dl>
<dt><label>Định dạng ngày :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>{DATE_FORMAT}
<br /><span class="italic">{CURRENT_TIME}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;



<!-- END switch_preferences_menu -->

<!-- BEGIN switch_avatar_block -->
<div class="main-head"><h1 class="page-title">{L_AVATAR_PANEL}

Unknown end tag for &lt;/h1&gt;



Unknown end tag for &lt;/div&gt;


<div class="main-content frm">
<p class="frm-info">{L_AVATAR_EXPLAIN}

Unknown end tag for &lt;/p&gt;


<fieldset class="frm-set">
<dl>
<dt><label>{L_CURRENT_IMAGE} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd>
{AVATAR}
<br /><input type="checkbox" name="avatardel" />{L_DELETE_AVATAR}


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- BEGIN switch_avatar_local_upload -->
<dl>
<dt><label>{L_UPLOAD_AVATAR_FILE} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="file" name="avatar" class="inputbox" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_avatar_local_upload -->
<!-- BEGIN switch_avatar_remote_upload -->
<dl>
<dt><label>{L_UPLOAD_AVATAR_URL} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="avatarurl" class="inputbox" />
<br /><span class="italic">{L_UPLOAD_AVATAR_URL_EXPLAIN}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_avatar_remote_upload -->
<!-- BEGIN switch_avatar_remote_link -->
<dl>
<dt><label>{L_LINK_REMOTE_AVATAR} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="text" name="avatarremoteurl" class="inputbox" />
<br /><span class="italic">{L_LINK_REMOTE_AVATAR_EXPLAIN}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_avatar_remote_link -->
<!-- BEGIN switch_avatar_local_gallery -->
<dl>
<dt><label>{L_AVATAR_GALLERY} :

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="submit" name="avatargallery" value="{L_SHOW_GALLERY}" class="button" />

Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_avatar_local_gallery -->


Unknown end tag for &lt;/fieldset&gt;


<!-- END switch_avatar_block -->

<fieldset class="frm-set">
<!-- BEGIN switch_informations_menu -->
<!-- BEGIN switch_register_not_display -->
<!-- BEGIN switch_unsubscribe_allowed -->
<dl class="frm-buttons">
<dt><label>{L_DELETE}

Unknown end tag for &lt;/label&gt;



Unknown end tag for &lt;/dt&gt;


<dd><input type="checkbox" name="delete_user" /><span class="italic">{L_DELETE_EXPLAIN}

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;


<!-- END switch_unsubscribe_allowed -->
<!-- END switch_register_not_display -->
<!-- END switch_informations_menu -->

<dl class="frm-buttons">
<dt> 

Unknown end tag for &lt;/dt&gt;


<dd>
{S_HIDDEN_FIELDS}
<input class="button2" type="submit" name="submit" value="{L_SUBMIT}" />
<input class="button2" type="reset" name="reset" value="{L_RESET}" />


Unknown end tag for &lt;/dd&gt;




Unknown end tag for &lt;/dl&gt;




Unknown end tag for &lt;/fieldset&gt;




Unknown end tag for &lt;/form&gt;



<script type="text/javascript">
$(function(){
$('input[name=reset]').click(function(){
$("#pwd_good,#pwd_middle,#pwd_bad").hide();
});
$('input[name=new_password],input[name=username]').keyup(function() {
if ( $('input[name=new_password]').val() != "" )
{
var level = passwordStrength($('input[name=new_password]').val(),$('input[name=username]').val());
switch(level)
{
case 'bad' :
$("#pwd_middle,#pwd_good").hide();
$("#pwd_bad").show();
break;
case 'good' :
$("#pwd_good,#pwd_bad").hide();
$("#pwd_middle").show();
break;
case 'strong' :
$("#pwd_middle,#pwd_bad").hide();
$("#pwd_good").show();
break;
}
}
else
{
$("#pwd_middle,#pwd_good,#pwd_bad").hide();
}
});
});


Unknown end tag for &lt;/script&gt;


<!-- BEGIN switch_preferences_menu -->
<!-- BEGIN switch_fb_connect -->
<div id="fb-root">

Unknown end tag for &lt;/div&gt;


<script type="text/javascript">
//<![CDATA[
FB.init({
appId: '{switch_preferences_menu.switch_fb_connect.FACEBOOK_APP_ID}',
status: true,
cookie: true,
xfbml: true,
oauth: true
});
//]]>


Unknown end tag for &lt;/script&gt;


<!-- END switch_fb_connect -->
<!-- END switch_preferences_menu -->


<code>