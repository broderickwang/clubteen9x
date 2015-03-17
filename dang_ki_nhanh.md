![http://i12.servimg.com/u/f12/17/70/81/78/12-27-10.png](http://i12.servimg.com/u/f12/17/70/81/78/12-27-10.png)
```
    $("#register").leanModal({
top: 200,
overlay: 0.4,
closeButton: ".modal_close"
});
var shortPass = "bad",
badPass = "bad",
goodPass = "good",
strongPass = "strong";

function passwordStrength(a, b) {
score = 0;
if ("" == a) return null;
if (4 > a.length) return shortPass;
if (void 0 != b && a.toLowerCase() == b.toLowerCase()) return badPass;
score += 4 * a.length;
score += 1 * (checkRepetition(1, a).length - a.length);
score += 1 * (checkRepetition(2, a).length - a.length);
score += 1 * (checkRepetition(3, a).length - a.length);
score += 1 * (checkRepetition(4, a).length - a.length);
a.match(/(.*[0-9].*[0-9].*[0-9])/) && (score += 5);
a.match(/(.*[!,@,#,$,%,,&,*,?,_,~].*[!,@,#,$,%,,&,*,?,_,~])/) && (score += 5);
a.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (score += 10);
a.match(/([a-zA-Z])/) && a.match(/([0-9])/) && (score += 15);
a.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && a.match(/([0-9])/) && (score += 15);
a.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && a.match(/([a-zA-Z])/) && (score += 15);
if (a.match(/\w+$/) || a.match(/\d+$/)) score -= 10;
0 > score && (score = 0);
100 < score && (score = 100);
return 34 > score ? badPass : 68 > score ? goodPass : strongPass
}
function checkRepetition(a, b) {
res = "";
for (i = 0; i < b.length; i++) {
repeated = !0;
for (j = 0; j < a && j + i + a < b.length; j++) repeated = repeated && b.charAt(j + i) == b.charAt(j + i + a);
j < a && (repeated = !1);
repeated ? (i += a - 1, repeated = !1) : res += b.charAt(i)
}
return res
}
function submit_reg() {
$("#qick_reg .reg_er").each(function () {
"block" == $(this).css("display") && $(this).parent().parent().addClass("error")
});
$("#qick_reg input").each(function () {
"" == $(this).val() && $(this).parent().addClass("error")
});
$("#qick_reg .error").length ? alert("L\u1ed7i th\u00f4ng tin \u0111\u0103ng k\u00fd.") : $.post("/register?agreed=true&step=2", {
username: $("#qick_reg #username_reg").val(),
email: $("#qick_reg #email").val(),
"profile_field_3_-10": $("#qick_reg #profile_field_3_-10").val(),
password: $("#qick_reg #password_reg").val(),
submit: "Save"
}, function (a) {
$(a).find("#form_confirm").length ? ($("#qick_reg .frm-buttons input[name='confirm_pass'], #qick_reg .frm-buttons input[name='auth[]']").remove(), $(a).find("input[name='confirm_pass'], input[name='auth[]']").prependTo("#qick_reg .frm-buttons"), $.post("/register?agreed=true&step=2", {
password_confirm: $("#qick_reg #password_confirm").val(),
"auth[]": $("#qick_reg input[name='auth[]']:first").val(),
username: $("#qick_reg #username_reg").val(),
email: $("#qick_reg #email").val(),
"profile_field_3_-10": $("#qick_reg #profile_field_3_-10").val(),
password: $("#qick_reg #password_reg").val(),
confirm_pass: $("#qick_reg input[name='confirm_pass']").val(),
submit: "Save"
}, function (a) {
if ($(a).find("p.message a[href='/forum']").length) window.location.replace("http://" + location.host + "/login?password=" + $("#qick_reg #password_reg").val() + "&username=" + $("#qick_reg #username_reg").val() + "&autologin=true&redirect=" + location.href + "&login=true");
else if ("Sorry, but this e-mail address is invalid." == $(a).find("p.center:first span").text() || "Sorry, but that e-mail address is already registered to a user." == $(a).find("p.center:first span").text()) alert("\u0110\u1ecba ch\u1ec9 E-mail kh\u00f4ng h\u1ee3p l\u1ec7 ho\u1eb7c \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng."), $("#qick_reg #email").parent().addClass("error"), $("#email_reg .reg_er").show().next().hide()
})) : 0 == $(a).find("p.center:first span").text().indexOf("Sorry, but this username has") ? (alert("T\u00e0i kho\u1ea3n \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng ho\u1eb7c b\u1ecb c\u1ea5m."), $("#qick_reg #username_reg").parent().addClass("error"), $("#name_reg div").hide(), $("#name_reg .reg_er.loi").show()) : 0 == $(a).find("p.center:first span").text().indexOf("Your password") && (alert("M\u1eadt kh\u1ea9u ph\u1ea3i t\u1eeb 6 - 32 k\u00fd t\u1ef1 v\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c tr\u00f9ng t\u00e0i kho\u1ea3n."), $("#qick_reg #password_reg, #qick_reg #password_confirm").val("").parent().addClass("error"), $("#qick_reg #cont_pwd div, #qick_reg #pass_co div").hide())
})
}
function url_reg() {
"" != $("#qick_reg #profile_field_3_-10").val() ? ($("#qick_reg #profile_field_3_-10").parent().removeClass("error"), isURL($("#qick_reg #profile_field_3_-10").val()) ? $("#web_reg .reg_er").hide().next().show() : $("#web_reg .reg_er").show().next().hide()) : $("#web_reg div").hide()
}
function conpass() {
"" != $("#qick_reg #password_confirm").val() ? ($("#qick_reg #password_confirm").parent().removeClass("error"), $("#password_reg").val() != $("#qick_reg #password_confirm").val() ? $("#pass_co .reg_er").show().next().hide() : $("#pass_co .reg_er").hide().next().show()) : $("#pass_co div").hide()
}
function check_ma_reg() {
"" != $("#qick_reg #email").val() ? ($("#qick_reg #email").parent().removeClass("error"), isEmail($("#qick_reg #email").val()) ? $("#email_reg .reg_er").hide().next().show() : $("#email_reg .reg_er").show().next().hide()) : $("#email_reg div").hide()
}
function check_un_reg() {
setTimeout(function () {
"" != $("#qick_reg #username_reg").val() ? ($("#qick_reg #username_reg").parent().removeClass("error"), 6 > $("#qick_reg #username_reg").val().length ? ($("#name_reg .reg_er.kytu").show(), $("#name_reg .reg_er.loi, #name_reg .reg_ok").hide()) : $.get("/search?mode=searchuser&fieldname=username", {
search_username: $("#qick_reg #username_reg").val(),
time: timestamp()
}, function (a) {
$("#name_reg div").hide();
$(a).find("#username_list").val() == $("#qick_reg #username_reg").val() ? $("#name_reg .reg_er.loi").show() : $("#name_reg .reg_ok").show()
})) : $("#name_reg div").hide()
}, 1500)
}
function isURL(a) {
return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/.test(a)
}
function isEmail(a) {
return /((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\_{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(a)
}
$("#qick_reg input[name='reset']").click(function () {
$("#qick_reg dd").removeClass("error");
$("#qick_reg .pwd_img").hide()
});
$("#qick_reg #username_reg").keyup(function () {
check_un_reg();
$("#qick_reg #username_reg").focus(function () {
check_un_reg()
})
});
$("#qick_reg #email").keyup(function () {
check_ma_reg();
$("#qick_reg #email").focus(function () {
check_ma_reg()
})
});
$("#qick_reg #profile_field_3_-10").focus(function () {
url_reg();
"" == $(this).val() && $(this).val("http://")
}).keyup(function () {
url_reg()
});
$("#qick_reg #password_confirm").keyup(function () {
conpass()
});
$("#qick_reg #password_reg, #qick_reg #username_reg").keyup(function () {
if ("" != $("#qick_reg #password_reg").val()) if ($("#qick_reg #password_reg").parent().removeClass("error"), 6 > $("#qick_reg #password_reg").val().length) $("#cont_pwd div").hide(), $("#cont_pwd .reg_er.kytu").show();
else if ($("#cont_pwd .reg_er.kytu").hide(), $("#qick_reg #password_reg").val() == $("#qick_reg #username_reg").val()) $("#cont_pwd div").hide(), $("#cont_pwd .reg_er.trung").show();
else switch ($("#cont_pwd .reg_er.trung").hide(), passwordStrength($("#qick_reg #password_reg").val(), $("#qick_reg #username_reg").val())) {
case "bad":
$("#pwd_middle,#pwd_good").hide();
$("#pwd_bad").show();
break;
case "good":
$("#pwd_good,#pwd_bad").hide();
$("#pwd_middle").show();
break;
case "strong":
$("#pwd_middle,#pwd_bad").hide(), $("#pwd_good").show()
} else $("#cont_pwd div, #pass_co div").hide(), $("#qick_reg #password_confirm").val("");
"" != $("#qick_reg #password_confirm").val() && conpass()
});```