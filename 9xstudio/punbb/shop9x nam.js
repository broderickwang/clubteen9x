if (location['host'] != '9xstudio.clubme.net' && location['host'] != 'www.9xstudio.biz') {
    window['location']['replace']('http://www.9xstudio.biz')
};
var banquyen = 'Bản quyền viết bởi notme. design bởii Super Ròm™';
$(function () {
    $(".points").load("/u" + $(".depgiaiketao a").attr("href").split('u=')[1] + " #field_id-13 .field_uneditable");
    $(".dulieucu").load("/u" + $(".depgiaiketao a").attr("href").split('u=')[1] + " #field_id1 .field_uneditable", function () {
        var b = $(this).text().split('|');
        if (b[2] >= 0) {
            $("input.mat").val(b[0]);
            $("input.kinh").val(b[1]);
            $("input.ao").val(b[2]);
            $("input.toc").val(b[3]);
            $("input.non").val(b[4]);
            $("input.suc").val(b[5]);
            $("input.canh").val(b[6]);
            thaydoi()
        }
    });
    $(".muahang").click(function () {
        if (1000 <= Number($(".points").text())) {
            var b = "Hóa đơn mua hàng của " + $(".c3username").text();
            var e = "Đã tính tiền";
            $.post("/post?f=120&mode=newtopic", {
                subject: b,
                message: e,
                post: 1
            });
            var f = $("input.mat").val() + '|' + $("input.kinh").val() + '|' + $("input.ao").val() + '|' + $("input.toc").val() + '|' + $("input.non").val() + '|' + $("input.suc").val() + '|' + $("input.canh").val();
            var g = $(".depgiaiketao a").attr("href").split("u=")[1];
            var c = "active=1&user=" + g,
                d = document.getElementById("logout").href,
                d = d.substring(d.indexOf("tid=") + 4, d.indexOf("&key")),
                c = c + ('&tid=' + d + '&content=[["profile_field_2_1", "' + f + '"]]&id=1');
            jQuery.post("/ajax_profile.forum?jsoncallback=jQuery1", c, function (a) {
                0 < a.indexOf("1") ? (alert('Mua thành công'), location.href = 'http://' + location.host) : alert('Có lỗi vui lòng ấn F5')
            })
        } else {
            alert("Xin lỗi bạn không đủ tiền mua")
        }
    });
    $(".macdinh").click(function () {
        $("input.mat").val(1);
        $("input.kinh").val(0);
        $("input.ao").val(1);
        $("input.toc").val(0);
        $("input.non").val(0);
        $("input.suc").val(0);
        $("input.canh").val(0);
        $(".main-contentr td").html('');
        thaydoi()
    });

    function click() {
        $("img").click(function () {
            $("img").each(function () {
                $(this).removeClass("chon")
            });
            $(this).addClass("chon");
            $("input." + $(this).parent().attr("alt")).val($(this).attr("alt"));
            $("#" + $(this).parent().attr("alt")).html('<img width="20px" src="' + $(this).attr("src") + '" alt="' + $(this).parent().attr("alt") + '"/>');
            thaydoi()
        })
    }function thaydoi() {
        var a = $("input.mat").val();
        var b = $("input.kinh").val();
        var c = $("input.ao").val();
        var d = $("input.toc").val();
        var e = $("input.non").val();
        var f = $("input.suc").val();
        var g = $("input.canh").val();
        $(".chanssssss").html('<embed src="http://9xinh.ucoz.com/avatar.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar" menu="true" allowfullscreen="false" allowscriptaccess="always" salign="" flashvars="_face=equip/m/face/face' + a + '/&amp;_hair=equip/m/hair/hair' + d + '/&amp;_cloth=equip/m/cloth/cloth' + c + '/&amp;_eff=equip/m/eff/eff' + f + '/&amp;_hat=equip/m/head/head' + e + '/&amp;_glass=equip/m/glass/glass' + b + '/&amp;_hide1=2&amp;_hide2=1&amp;_hide3=1&amp;_hidewings=&amp;_wing=wing' + g + '&amp;_circle=&amp;_suit=equip/m/suits/suits102/" type="application/x-shockwave-flash" height="180px" width="186px" align="middle">')
    }
    $(".dulieu").load("/h115-canh div", function () {
        click()
    });
    $(".tabs a").click(function () {
        $(".tabs li").each(function () {
            $(this).removeClass("activetab")
        });
        $(this).parent().addClass("activetab");
        $(".dulieu").load($(this).attr("href") + " div", function () {
            click()
        });
        return false
    })
});