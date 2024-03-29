    $(function(){
        Reg_KyTu = new RegExp(/^([^~!@#\$%\^&\*()_\+|\-=\\{}:"<>\?\[\];',\.\/0123456789])+$/);
        Reg_KyTuSo = new RegExp(/^([^~!@#\$%\^&\*()_\+|\-=\\{}:"<>\?\[\];',\.\/])+$/);
        Reg_DiaChi = new RegExp(/^([^~!@#\$%\^&\*=:"<>\?']){10,}$/);
        Reg_SoNguyen = new RegExp(/^[0-9]+$/);
        Red_SDT = new RegExp(/^0[1-9]{2,4}[-.]?[0-9]{3}[-.]?[0-9]{3}$/);
        Reg_Email = new RegExp(/^[A-z]+[A-z0-9]+\.?[A-z0-9]+@[A-z0-9]{2,}\.[A-z]{2,4}$/);
        Reg_MXN = new RegExp(/^[A-z0-9]{5}$/);
        // Lấy dữ liệu sản phẩm ban đầu
        DulieuDau = Math.floor(Math.random()*7);
        LayDuLieu('#DuLieuPhai','',0,0,0,0,DulieuDau,0,15,2,0);
        DuLieuTren(0,0);
        // Tùy chọn chế độ tìm kiếm nhanh
        $('#KieuTimKiem').change(function(){
            $('#TimTheoTen').val('');
            if ($(this).val()==1)
            {
                $('#TimKiemText').show();
                $('#TimKiemFull').hide();
            }
            else
            {
                $('#TimKiemText').hide();
                $('#TimKiemFull').show();
            }
        });
        // Ẩn-Hiện input khi thay đổi select chọn giá
        $('#ChonGia_SP').change(function(){
            $('#Gia_Truoc,#Gia_Sau').val('');
            if ($(this).val()==0)
            {
                $('#Gia_Truoc,#Gia_Sau,.ChonGia_SP').hide();
            }
            else if ($(this).val()==1 || $(this).val()==2)
            {
                $('#Gia_Sau,.ChonGia_SP').hide();
                $('#Gia_Truoc').show();
            }
            else if ($(this).val()==3)
            {
                $('#Gia_Truoc,#Gia_Sau,.ChonGia_SP').show();
            }
        });
        // Bật-Tắt chế độ tìm kiếm nhanh
        $('.Search').click(function(){
            $('#TimKiemNhanh').show();
            $('.C_Search').show();
            $(this).hide();
        });
        $('.C_Search').click(function(){
            $('#TimKiemNhanh').hide();
            $('.Search').show();
            $(this).hide();
        });
        // Hủy bỏ class lỗi trong các phần nhập liệu lỗi
        $('.NhapLieuLoi').live('focus',function(){
            $(this).removeClass('NhapLieuLoi');
        });
        // Bắt đầu tìm kiếm nhanh
        $('#LayDuLieu').click(function(){
            $('#Load').fadeIn();
            $(this).hide();
            NhapLieuLoi = 0;
            if ($('#KieuTimKiem').val() == 1)
            {
                if (!Reg_KyTuSo.test($('#TimTheoTen').val()))
                {
                    $('#TimTheoTen').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;

                }
            }
            else
            {
                if (!Reg_SoNguyen.test($('#Gia_Truoc').val().replace(/\.|,/g,'')) && $('#ChonGia_SP').val() != 0)
                {
                    $('#Gia_Truoc').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                if (!Reg_SoNguyen.test($('#Gia_Sau').val().replace(/\.|,/g,'')) && $('#ChonGia_SP').val() == 3)
                {
                    $('#Gia_Sau').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                ChonLoai_SP = '';
                $('#MenuShopMin select:visible').each(function(){
                    ChonLoai_SP += $(this).val();
                });
            }
            if (NhapLieuLoi==0)
            {
                LayDuLieu('#DuLieuPhai',$('#TimTheoTen').val(),ChonLoai_SP,$('#ChonGia_SP').val(),$('#Gia_Truoc').val().replace(/\.|,/g,''),$('#Gia_Sau').val().replace(/\.|,/g,''),$('#SapXep_SP').val(),0,$('#PhanTrang_SP').val(),$('#TimTu_SP').val(),1);
            }
            else
            {
                $('#Load').fadeOut();
                $('#LayDuLieu').show();
            }
        });
        // Chuyển chế độ hiển thị Ngang/Dọc
        XepNgang = 1;
        if (XepNgang)
        {
            $('#XepNgang').css('background-position','0 22px');
            $('#XepDoc').css('background-position','23px 22px');
        }
        else
        {
            $('#XepDoc').css('background-position','23px 0');
            $('#XepNgang').css('background-position','0 0');
        }
        $('#XepNgang').click(function(){
            XepNgang = 1;
            $(this).css('background-position','0 22px');
            $('#XepDoc').css('background-position','23px 22px');
            $('#DuLieuPhai .SanPham').addClass('SanPhamNgang');
        });
        $('#XepDoc').click(function(){
            XepNgang = 0;
            $(this).css('background-position','23px 0');
            $('#XepNgang').css('background-position','0 0');
            $('#DuLieuPhai .SanPham').removeClass('SanPhamNgang');
        });
        // Bắt đầu việc chọn mua một sản phẩm và chuyển dữ liệu vào ô xem trước
        $('.SanPham').live('click',function(){
            $('#XemSanPham').html($(this).html());
            $('#XemTruoc_SP,#ChiTiet').show();
            if ($(this).find('.VDShop').length)
            {
                $('#ChonMua').show();
            }
            else
            {
                $('#ChonMua').hide();
                $('.TVShop').clone().appendTo('#XemSanPham');
                $('#XemSanPham .TVShop .TVDang').text($(this).find('.NguoiDang').text());
            }
        });
        // Chọn mua một sản phẩm, tính toán và đưa vào giỏ hàng
        $('#ChonMua').click(function(){
            KiemTraMa = $('#XemSanPham .ma_sp').text();
            SL_Con = parseInt($('#XemSanPham .soluong_sp').text().replace('Số lượng sản phẩm: ',''));
            if ($('#DuLieuTrai .GioHang').length)
            {
            $('#DuLieuTrai .GioHang .ma_sp').each(function(){
                MaHang = $(this).text();
                if (KiemTraMa == MaHang)
                {
                    $(this).parent().find('.SL_Mua').val(parseInt($(this).parent().find('.SL_Mua').val())+1);
                    SL_Mua = $(this).parent().find('.SL_Mua').val();
                    KiemTraMa = 1;
                }
            });
            }
            if (!$('#DuLieuTrai .GioHang').length || KiemTraMa != 1)
            {
                $('<div class="GioHang"><div class="K_SL_Mua">Số lượng<br /><input class="SL_Mua" value="1" maxlength="5" title="Sửa số lượng" /></div><div class="TraLai">Trả lại »</div></div>').prependTo('#DuLieuTrai');
                $('#XemSanPham .ten_sp,#XemSanPham img,#XemSanPham .gia_sp,#XemSanPham .ma_sp,#XemSanPham .soluong_sp').prependTo('#DuLieuTrai .GioHang:first');
                SL_Mua = 1;
            }
            if (SL_Mua>SL_Con || isNaN(SL_Con)) MuaQuaSL(SL_Mua,SL_Con);
            $('#XemTruoc_SP').hide();
            $('#XemSanPham').html('');
            TinhTong();
        });
        // Lấy dữ liệu chi tiết một sản phẩm
        $('#ChiTiet').click(function(){
            $('#Load').fadeIn();
            $(this).hide();
            ChiTiet_SP = parseInt($('#XemSanPham .ma_sp .id_sp').text());
            $.ajax({
            type:'POST',
            data:{ChiTiet_SP:ChiTiet_SP},
                url:'AjaxChiTiet.php',
                success:function(data){
                    $('#Load').fadeOut();
                    $(data).appendTo('#XemSanPham');
                    $('#XemSanPham').scrollTop(400);
                },
                error:function(){
                    $('#Load').fadeOut();
                    ThongBao('Quá trình lấy dữ liệu bị lỗi');
                }
            });
        });
        // Thoát chế độ xem thông tin sản phẩm
        $('#ThoatXem').click(function(){
            $('#XemTruoc_SP').hide();
            $('#XemSanPham').html('');
        });
        // Trả lại một sản phẩm
        $('#DuLieuTrai .GioHang .TraLai').live('click',function(){
            $(this).parent().remove();
            TinhTong();
        });
        // Chỉnh số lượng sản phẩm
        $('#DuLieuTrai .GioHang .SL_Mua').live('change',function(){
            if (parseInt($(this).val())<=0)
            {
                $(this).parent().parent().remove();
            }
            else if (isNaN(parseInt($(this).val())))
            {
                $(this).val('1');
            }
            else
            {
                $(this).val(parseInt($(this).val()));
            }
            SL_Con = parseInt($(this).parent().parent().find('.soluong_sp').text().replace('Số lượng sản phẩm: ',''));
            SL_Mua = $(this).val();
            if (SL_Mua>SL_Con || isNaN(SL_Con)) MuaQuaSL(SL_Mua,SL_Con);
            TinhTong();
        });
        $('#DuLieuTrai .GioHang .SL_Mua').live('click',function(){
            $(this).select();
        });
        // Bắt đầu việc đặt hàng, chuyển dữ liệu vào khung đặt hàng và xử lý các tình huống đặt hàng
        $('#DatNgay').click(function(){
            $('#MXN img').attr('src','CaptchaSecurityImages.php?r='+Math.random());
            $(this).hide();
            $('#XacNhan_DH').show();
            $('#DuLieuTrai .GioHang').each(function(){
                $('<div class="DaChonMua"></div>').appendTo('#SanPham_DH');
                $(this).find('.ten_sp').clone().appendTo('.DaChonMua:last');
                $(this).find('.gia_sp').clone().appendTo('.DaChonMua:last');
                $(this).find('.SL_Mua').clone().appendTo('.DaChonMua:last').attr('disabled','disabled');
                $('#DatHang').show();
            });
            $('#Tong_DH').html($('.TongTien').html().replace(/div/g,'span'));
        });
        $('#RF_MXN').click(function(){
            $('#MXN img').attr('src','CaptchaSecurityImages.php?r='+Math.random());
        });
        $('#Huy_DH').click(function(){
            $('#DatHang').hide();
            $('#DatNgay').show();
            $('#SanPham_DH,#Tong_DH').empty();
        });
        $('#XacNhan_DH').click(function(){
            $('#Load').fadeIn();
            NhapLieuLoi = 0;
            $(this).hide();
            if ($('#TenNguoi_DH').val().length < 10 || !Reg_KyTu.test($('#TenNguoi_DH').val()))
            {
                $('#TenNguoi_DH').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if (!Reg_DiaChi.test($('#DiaChi_DH').val()))
            {
                $('#DiaChi_DH').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if (!Red_SDT.test($('#SDT_DH').val()))
            {
                $('#SDT_DH').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if (!Reg_Email.test($('#Email_DH').val()))
            {
                $('#Email_DH').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if (!Reg_MXN.test($('#MXN_DH').val()))
            {
                $('#MXN_DH').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if (NhapLieuLoi)
            {
                $('#Load').fadeOut();
                $(this).show();
                NhapLieuLoi = 0;
            }
            else
            {
                TenNguoi_DH = $('#TenNguoi_DH').val();
                DiaChi_DH = $('#DiaChi_DH').val();
                SDT_DH = $('#SDT_DH').val();
                Email_DH = $('#Email_DH').val();
                ThongTin_DH = $('#ThongTin_DH').val();
                SanPham_DH = '';
                MXN_DH = $('#MXN_DH').val();
                
                $('#DuLieuTrai .GioHang').each(function(){
                    SanPham_DH = SanPham_DH+$(this).find('.ten_sp').text();
                    SanPham_DH = SanPham_DH+' - '+$(this).find('.ma_sp').text();
                    SanPham_DH = SanPham_DH+' - Giá: '+$(this).find('.gia_sp').text();
                    SanPham_DH = SanPham_DH+' - SL: '+$(this).find('.SL_Mua').val()+'\n';
                });
                SanPham_DH = SanPham_DH+'\n\n'+$('#Tong_DH').text();
                
                $.ajax({
                    type:'POST',
                    data:{
                        TenNguoi_DH:TenNguoi_DH,
                        DiaChi_DH:DiaChi_DH,
                        SDT_DH:SDT_DH,
                        Email_DH:Email_DH,
                        ThongTin_DH:ThongTin_DH,
                        SanPham_DH:SanPham_DH,
                        MXN_DH:MXN_DH
                        },
                    url:'XacNhan_DH.php',
                    success:function(data){
                        $('#Load').fadeOut();
                        if (data==1)
                        {
                            $('#DatNgay').show();
                            $('#TenNguoi_DH,#DiaChi_DH,#SDT_DH,#Email_DH,#ThongTin_DH,#MXN_DH').val('');
                            ThongBao('Thành công! Cảm ơn bạn đã mua hàng tại VDShop, một email về thông tin đặt hàng sẽ được gửi cho bạn','Đồng ý','Đặt hàng thành công!');
                        }
                        else
                        {
                            $('#XacNhan_DH').show();
                            ThongBao(data);
                        }
                    },
                    error:function(){
                        $('#Load').fadeOut();
                        ThongBao('Quá trình lấy dữ liệu bị lỗi');
                    }
                });
            }
        });
        // Bắt đầu đăng ký, đăng nhập
        $('#ButtonDK').live('click',function(){
           $('#CaptchaDK').attr('src','CaptchaSecurityImages.php?r='+Math.random());
           $('#DangKy,#XN_DangKy,#HDDK').show();
           $('#XN_DangNhap,#HDDN').hide();
        });
        $('#ButtonDN').live('click',function(){
           $('#DangKy,#XN_DangNhap,#HDDN').show();
           $('#XN_DangKy,#HDDK,.KhungDK').hide();
        });
        $('#XN_Huy').click(function(){
            $('#DangKy').hide();
            $('#XN_DangNhap,#XN_DangKy,.KhungDK').show();
        });
        // Đăng ký thành viên
        $('#XN_DangKy').click(function(){
            $('#Load').fadeIn();
            $('#DangKy').hide();
            NhapLieuLoi = 0;
                if ($('#Ten_DK').val().length < 10 || !Reg_KyTu.test($('#Ten_DK').val()))
                {
                    $('#Ten_DK').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                if (!Reg_DiaChi.test($('#DiaChi_DK').val()))
                {
                    $('#DiaChi_DK').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                if (!Red_SDT.test($('#SDT_DK').val()))
                {
                    $('#SDT_DK').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                if (!Reg_Email.test($('#Email_DK').val()))
                {
                    $('#Email_DK').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                if (!Reg_MXN.test($('#MXN_DK').val()))
                {
                    $('#MXN_DK').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
                if ($('#Password').val()!=$('#Verify_Password').val() || $('#Password').val().length < 5 || $('#Verify_Password').val().length < 5)
                {
                    $('#Password,#Verify_Password').addClass('NhapLieuLoi');
                    NhapLieuLoi = 1;
                }
            if (!NhapLieuLoi)
            {
                $.ajax({
                    type:'POST',
                    data:{
                        MXN_DK:$('#MXN_DK').val(),
                        Email_DK:$('#Email_DK').val(),
                        SDT_DK:$('#SDT_DK').val(),
                        DiaChi_DK:$('#DiaChi_DK').val(),
                        Ten_DK:$('#Ten_DK').val(),
                        Password:$('#Password').val(),
                        Verify_Password:$('#Verify_Password').val()
                        },
                    url:'DangKy.php',
                    success:function(data){
                        $('#Load').fadeOut();
                        if(data==1)
                        {
                            ThongBao('Đăng ký thành công, chào mừng '+$('#Ten_DK').val()+' đã gia nhập VDShop. Để hoàn tất việc đăng ký vui lòng KÍCH HOẠT tài khoản từ email gửi về hòm thư của bạn','Đồng ý','Đăng ký thành công!');
                            $('#DangKy input').val('');
                        }
                        else
                        ThongBao(data);
                    },
                    error:function(){
                        $('#Load').fadeOut();
                        ThongBao('Quá trình đăng ký bị lỗi');
                    }
                });
            }
            else
            {
                $('#Load').fadeOut();
                $('#DangKy').show();
            }
        });
        // Đăng nhập thành viên
        $('#XN_DangNhap').click(function(){
            $('#Load').fadeIn();
            $('#DangKy').hide();
            NhapLieuLoi = 0;
            if (!Reg_Email.test($('#Email_DK').val()))
            {
                $('#Email_DK').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if ($('#Password').val().length < 5)
            {
                $('#Password').addClass('NhapLieuLoi');
                NhapLieuLoi = 1;
            }
            if (!NhapLieuLoi)
            {
                $.ajax({
                    type:'POST',
                    data:{
                        Email_DK:$('#Email_DK').val(),
                        Password:$('#Password').val()
                        },
                    url:'DangNhap.php',
                    success:function(data){
                        $('#Load').fadeOut();
                        if(data==1)
                        {
                            $('<a id="ThanhVienShop" href="javascript:void(0)">Thoát ['+$('#Email_DK').val()+']</a>').appendTo('.MenuTop');
                            $('#DangKy input').val('');
                            $('#ButtonDN,#ButtonDK').hide();
                        }
                        else
                        ThongBao(data);
                    },
                    error:function(){
                        $('#Load').fadeOut();
                        ThongBao('Quá trình đăng nhập bị lỗi');
                    }
                });
            }
            else
            {
                $('#Load').fadeOut();
                $('#DangKy').show();
            }
        });
        // Thoát thành viên
        $('#ThanhVienShop').live('click',function(){
            $('#Load').fadeOut();
            $(this).remove();
            if (!$('#ButtonDN').length)
            {
                $('<a href="javascript:void(0)" id="ButtonDN">Đăng Nhập</a>').appendTo('.MenuTop');
                $('<a href="javascript:void(0)" id="ButtonDK">Đăng Ký</a>').appendTo('.MenuTop');
            }
            else
            {
                $('#ButtonDK,#ButtonDN').show();
            }
            $.ajax({
                url:'Thoat.php',
                success:function(data){
                    $('#Load').fadeOut();
                }
            });
        });
        // Đăng sản phẩm
        $('#DangSanPham').click(function(){
            if ($('#ThanhVienShop').length)
            {
                DangSanPham = window.open('/DangSanPham.php','DSP-VDShop','width=700,height=600,left=200');
                DangSanPham.focus();
            }
            else
            {
                ThongBao('Bạn phải đăng nhập mới có thể sử dụng chức năng này','','Cảnh báo!');
            }
        });
        // Hiệu ứng chuyển trang
        $('#PhanTrang .Trang').live('click',function(){
            $('#Load').fadeIn();
            $('#PhanTrang .TrangChon').removeClass('TrangChon').addClass('Trang');
            $(this).removeClass('Trang').addClass('TrangChon');
            ChuyenTrang = (parseInt($(this).text())-1)*$('#PhanTrang_SP').val();
            LayDuLieu('#DuLieuPhai',$('#TimTheoTen').val(),ChonLoai_SP,$('#ChonGia_SP').val(),$('#Gia_Truoc').val(),$('#Gia_Sau').val(),$('#SapXep_SP').val(),ChuyenTrang,$('#PhanTrang_SP').val(),$('#TimTu_SP').val(),0);
        });
    });

    // Dữ liệu phía trên, chuyển đổi sau 15s
    function DuLieuTren(x,TrangMax){
        max = TrangMax;
        z = x*10;
        y = x+1;
        LayDuLieu('#SanPhamMoi','',0,0,0,0,0,z,10,2,0);
        if (max>0)
        {
            if (y>=max){y=0}
            setTimeout('DuLieuTren(y,max);',15000);
        }
    }   
    // Lấy dữ liệu bằng ajax các sản phẩm từ sever
    function LayDuLieu(NapDuLieu,TimTheoTen,Loai_SP,Gia_SP,Gia_Truoc,Gia_Sau,SapXep,Trang_BD,Trang_SP,TimTu_SP,PhanTrang){
        $.ajax({
            type:'POST',
            data:{
                TimTheoTen:TimTheoTen,
                Loai_SP:Loai_SP,
                Gia_SP:Gia_SP,
                Gia_Truoc:Gia_Truoc,
                Gia_Sau:Gia_Sau,
                SapXep:SapXep,
                Trang_BD:Trang_BD,
                Trang_SP:Trang_SP,
                TimTu_SP:TimTu_SP,
                PhanTrang:PhanTrang
                },
                url:'AjaxData.php',
                success:function(data){
                    $('#Load').fadeOut();
                    if (data=='Không tìm thấy sản phẩm nào phù hợp')
                    {
                        ThongBao(data);
                        $('#LayDuLieu').show();
                    }
                    else
                    {
                        $(NapDuLieu).html(data);
                        if (PhanTrang == 1)
                        {
                            $('#CotPhai .TieuDe_Shop #PhanTrang').remove();
                            $('#DuLieuPhai #PhanTrang').prependTo('#CotPhai .TieuDe_Shop');
                        }
                        if (XepNgang == 1)
                        {
                            $('#DuLieuPhai .SanPham').addClass('SanPhamNgang');
                        }
                        $('#LayDuLieu').show();
                    }
                },
                error:function(){
                    $('#Load').fadeOut();
                    ThongBao('Quá trình lấy dữ liệu bị lỗi');
                }
        });
    }
    // Tính tổng tiền các sản phẩm đã chọn mua
    function TinhTong(){
        Tong = 0;
        $('#DuLieuTrai .GioHang .gia_sp').each(function(){
            Tong+=parseInt($(this).text().replace(/\./g,''))*parseInt($(this).parent().find('.SL_Mua').val());
        });
        if (Tong>0)
        {
            $('.TongTien,.DatHang').show();
            $('#KhongSP').hide();
        }
        else
        {
            $('.TongTien,.DatHang').hide();
            $('#KhongSP').show();
        }
        Tong = FormatTienTe(Tong,0,' VNĐ');
        $('#TongTien').text(Tong);
    }
    // Chuyển đổi tiền tệ
    function FormatTienTe(SoTien_FM,SoDu,DonViTien) {
        FM_Tien = SoTien_FM.toFixed(SoDu).split('.');
        FM_Tien[0] = FM_Tien[0].split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1.').split('').reverse().join('');
        return FM_Tien.join(',') + DonViTien;
    }
    // Thông báo khi mua vượt số lượng
    function MuaQuaSL(M,C){
        if (!isNaN(C)) ThongBao('Bạn đã mua vượt số lượng sản phẩm, số lượng sản phẩm này còn lại là '+C+' - Nếu bạn muốn mua với số lượng là '+M+' có thể sẽ phải đợi một thời gian chúng tôi mới có đủ hàng chuyển cho bạn.','Đồng ý','Lưu ý!');
        else ThongBao('Sản phẩm này đã hết hàng, nếu bạn thật sự muốn mua có thể sẽ phải đợi một thời gian chúng tôi mới có đủ hàng chuyển cho bạn','Đồng ý','Lưu ý!');
    }
    // Thông báo
    function ThongBao(NoiDung_TB,Thoat_TB,TieuDe_TB){
        $('#NoiDung_TB').text(NoiDung_TB);
        if (Thoat_TB) $('#Thoat_TB').text(Thoat_TB); else $('#Thoat_TB').text('Xác nhận');
        if (TieuDe_TB) $('#TieuDe_TB').text(TieuDe_TB); else $('#TieuDe_TB').text('Thông báo!');
        $('#ThongBao').show();
        $('#Thoat_TB').click(function(){
            $('#ThongBao').hide();
        });
    }