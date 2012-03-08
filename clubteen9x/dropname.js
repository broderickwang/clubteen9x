function hienmenu(a, b, c) {
    
    var d = document.getElementById(b);
    var e = d.style.visibility;
    if (e == 'hidden') {
         
        var f = FindXY(a);
        d.style.visibility = 'visible';
        overFlowX = f['x'] + d.offsetWidth - document.body.offsetWidth;
        f['x'] = overFlowX > 0 ? f['x'] - overFlowX : f['x'];
        d.style.left = (f['x'] - 30) + 'px';
        d.style.top = (f['y'] - 105) + 'px';

        $(function () {
            $('#hienhinh a:eq(0)').attr('href', '/u' + c);
            $('#hienhinh a:eq(1)').attr('href', '/u' + c + 'wall');
            $('#hienhinh a:eq(2)').attr('href', '/u' + c + 'stats');
            $('#hienhinh a:eq(3)').attr('href', '/u' + c + 'friends');
            $('#hienhinh a:eq(4)').attr('href', '/privmsg?mode=post&u=' + c);
            $('#hienhinh a:eq(5)').attr('href', '/postp/' + c)
        });
   
    } else { 
        var f = FindXY(a);
        d.style.visibility = 'visible';
        overFlowX = f['x'] + d.offsetWidth - document.body.offsetWidth;
        f['x'] = overFlowX > 0 ? f['x'] - overFlowX : f['x'];
        d.style.left = (f['x'] - 30) + 'px';
        d.style.top = (f['y'] - 105) + 'px';

        $(function () {
            $('#hienhinh a:eq(0)').attr('href', '/u' + c);
            $('#hienhinh a:eq(1)').attr('href', '/u' + c + 'wall');
            $('#hienhinh a:eq(2)').attr('href', '/u' + c + 'stats');
            $('#hienhinh a:eq(3)').attr('href', '/u' + c + 'friends');
            $('#hienhinh a:eq(4)').attr('href', '/privmsg?mode=post&u=' + c);
            $('#hienhinh a:eq(5)').attr('href', '/postp/' + c)
        });
     
    }
};
function an() {
    var b = document.getElementById('hienhinh');
    b.style.visibility = 'hidden'
};
$(function () {
   
    $(".username a[href^='/u']").click(function () {
        hienmenu(this, 'hienhinh', $(this).attr('href').slice(2));
        return false
    })
});

