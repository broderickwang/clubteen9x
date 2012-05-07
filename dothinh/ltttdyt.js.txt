var offsetfromcursorX = 12;
var offsetfromcursorY = 10;
var offsetdivfrompointerX = 10;
var offsetdivfrompointerY = 15;
document.write('<div id="dhtmltooltip"></div>');
document.write('<img id="dhtmlpointer" src="http://i816.photobucket.com/albums/zz89/phphap1411/skin%20trung%20thu/tooltiparrow.gif">');
var ie = document.all;
var ns6 = document.getElementById && ! document.all;
var enabletip = false;
var  tipobj = document.getElementById("dhtmltooltip");
var pointerobj = document.getElementById("dhtmlpointer");
function ietruebody() {
	return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}
String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*&#36;/, "");
}
function showtip(thetext, thewidth, thecolor) {
	if (ns6 || ie) {
		if (typeof thewidth != "undefined")
			tipobj.style.width = thewidth + "px";
		if (typeof thecolor != "undefined" && thecolor != "")
			tipobj.style.backgroundColor = thecolor;
		thetext = thetext.trim();
		var arr = thetext.split(" ");
		for(i=0;i<arr.length;i++)
			if(arr[i].length>=40)
				thetext=thetext.replace(arr[i],arr[i].substr(0,40)+"...");
		tipobj.innerHTML = thetext;
		enabletip = true;
		return false;
	}
}
function positiontip(e) {
	if (enabletip) {
		var nondefaultpos = false;
		var curX = (ns6) ? e.pageX : event.clientX + ietruebody().scrollLeft;
		var curY = (ns6) ? e.pageY : event.clientY + ietruebody().scrollTop;
		var winwidth = ie && ! window.opera ? ietruebody().clientWidth : window.innerWidth - 20;
		var winheight = ie && ! window.opera ? ietruebody().clientHeight : window.innerHeight - 20;
		var rightedge = ie && ! window.opera ? winwidth - event.clientX - offsetfromcursorX : winwidth - e.clientX - offsetfromcursorX;
		var bottomedge = ie && ! window.opera ? winheight - event.clientY - offsetfromcursorY : winheight - e.clientY - offsetfromcursorY;
		var leftedge = (offsetfromcursorX < 0) ? offsetfromcursorX * (- 1) : - 1000;
		if (rightedge < tipobj.offsetWidth) {
			tipobj.style.left = curX - tipobj.offsetWidth + "px";
			nondefaultpos = true;
		}
		else if (curX < leftedge)
			tipobj.style.left = "5px";
		else {
			tipobj.style.left = curX + offsetfromcursorX - offsetdivfrompointerX + "px";
			pointerobj.style.left = curX + offsetfromcursorX + "px";
		}
		if (bottomedge < tipobj.offsetHeight) {
			tipobj.style.top = curY - tipobj.offsetHeight - offsetfromcursorY + "px";
			nondefaultpos = true;
		}
		else {
			tipobj.style.top = curY + offsetfromcursorY + offsetdivfrompointerY + "px";
			pointerobj.style.top = curY + offsetfromcursorY + "px";
		}
		tipobj.style.visibility = "visible";

		if (! nondefaultpos)
			pointerobj.style.visibility = "visible";
		else
			pointerobj.style.visibility = "hidden";
	}
}
function hidetip() {
	if (ns6 || ie) {
		enabletip = false;
		tipobj.style.visibility = "hidden";
		pointerobj.style.visibility = "hidden";
		tipobj.style.left = "-1000px";
		tipobj.style.backgroundColor = '';
		tipobj.style.width = '';
	}
}
document.onmousemove = positiontip;
    $(function(){
        $(".lttluvmes").colorbox({width:"50%", inline:true, href:"#c3_luvmes"});
        $("[style$='(34, 201, 154);'],[style*='#22c99a'],[style*='#22C99A']").addClass('c3vip');
        $("[style$='(54, 194, 46);'],[style*='#36c22e'],[style*='#36C22E']").addClass('c3tm');
        $("[style$='(0, 0, 0);'],[style*='#000000']").addClass('c3bn');
        $("[style$='(131, 27, 191);'],[style*='#831bbf'],[style*='#831BBF']").addClass('c3ad');
        $("[style$='(0, 51, 255);'],[style*='#0033ff'],[style*='#0033FF']").addClass('c3dn');
        $("[style$='(236, 109, 37);'],[style*='#ec6d25'],[style*='#EC6d25']").addClass('c3lop');
        $("div.c3zonee:contains('»')").empty();
        $(".vbmenu_control2 a:first-child").html("<a href=/forum.htm>Diễn đ`n</a>");
        $.get('/profile.forum?mode=editprofile&page_profil=friendsfoes', function(data) {
        c3moi= $('.forumline:eq(2) .row2', data).html();c3ban= $('.forumline:eq(0) .row2', data).html();
        $('#c3zfriend').html(c3moi);$('#c3zfriends').html(c3ban);
        var i = 0, ii = 0;
        $('.forumline:eq(2) .row2 .friends-foes-list',data).each(function(index){i++;});
        $('#c3dem').text($('#c3dem').text()+i+" ");
        $('.forumline:eq(0) .row2 .friends-foes-list',data).each(function(index){ii++;});
        $('#nban').text($('#nban').text()+ii+" ");
});
    })