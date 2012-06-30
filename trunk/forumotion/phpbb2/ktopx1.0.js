var ktopx_insert='.inner:eq(0)';
var ktopx_hide='.inner:eq(0)';
var ktopx_ChiHienTrangChu=true;
var ktopx={
	start: function(num){
		ktopx.topic();
		setTimeout('ktopx.newest_mem(num)',500);
		setTimeout('ktopx.top_poster(num)',550);
	},
	newest_mem: function(num){
		var url='./eazy-api.php?get=user&sortf=date&sorto=desc&num=';
		num=$('#soluong').val(); url+=num;
		$('#loading_box_1').fadeIn();
		$.getJSON(url, function (items) {
		var ketqua='';
		   $(items.output).each(function (i, item) {
			var user = '<tr><td><span><a href="/memberlist.php?mode=viewprofile&u=' + item.user_id + '"style="color: #'+item.user_colour+'" class="username-coloured">' + item.username + '</a></span></td>';
			user += '<td align="right">&nbsp;<span>'+ktopx.doingay(item.user_regdate)+'</span></td></tr>';
			ketqua+=user;
		   });
		ktopx.show(ketqua,'#box_1');
		}).success(function() { $('#loading_box_1').fadeOut(); });
	},
	top_poster: function(num){
		var url='./eazy-api.php?get=user&sortf=posts&sorto=desc&num=';
		num=$('#soluong').val(); url+=num;
		$('#loading_box_2').fadeIn();
		$.getJSON(url, function (items) {
		var ketqua='';
		   $(items.output).each(function (i, item) {
			var user = '<tr><td><span><a href="/memberlist.php?mode=viewprofile&u=' + item.user_id + '"style="color: #'+item.user_colour+'" class="username-coloured">' + item.username + '</a></span></td>';
			user += '<td align="right">&nbsp;<span>'+item.user_posts+'</span></td></tr>';
			ketqua+=user;
		   });
		ktopx.show(ketqua,'#box_2');
		}).success(function() { $('#loading_box_2').fadeOut(); });
	},
	topic: function(url){
		if(!url) url='./eazy-api.php?get=topic&sortf=date&sorto=desc&num=';
		num=$('#soluong').val(); url+=num;
		if (ktopx_forumx) url+='&forumx'+ktopx_forumx;
		ketqua='';
		$('#loading_box_3').fadeIn();
		$.getJSON(url, function (items) {
  		$(items.output).each(function (i, item) {
          var forumUrl = '/viewforum.php?f=' + item.forum_id;
          var newPostUrl = '/viewtopic.php?f=' + item.forum_id + '&p=' + item.topic_last_post_id + '#p' + item.topic_last_post_id;
		  var topic_title = ktopx.cat_chuoi(item.topic_title);
		  var forum_name = ktopx.cat_chuoi(item.forum_name);
		var	html ='<tr><td><img src="http://plugin.hnsv.com/sinhvat/stat/post_new.png" />';
			html +='<span><a title="'+item.topic_title+'" href="' + newPostUrl + '">▼ '+topic_title+'</a></span></td>';
			html +='<td><span><a href="/memberlist.php?mode=viewprofile&u=' + item.topic_last_poster_id + '"style="color: #'+item.topic_last_poster_colour+'" class="username-coloured">' + item.topic_last_poster_name + '</a>&nbsp;</span></td>';
			html +='<td align="right"><span>'+item.topic_replies+'&nbsp;</span></td>';
			html +='<td align="right"><span>' +item.topic_views+ '&nbsp;</span></td>';
			html +='<td><span><a href="' +forumUrl+ '" title="' +item.forum_name+ '">' +forum_name+ '</a></span></td></tr>';
			ketqua+=html;
		});
		})
		.success(function() {$('#loading_box_3').fadeOut()})
		.complete(function() {ktopx.show(ketqua,'#box_3')});
	},
	show: function(html,id) {
		$(id).empty();
		$(id).html(html).slideDown('slow');
	},
	event: function(){
		$('#soluong').change(function(){
			ktopx.reload();
		});
		$('#list a').click(function(){
			$(this).parent().addClass('active').
			siblings().removeClass('active');
		});
	},
	reload: function(){
		$('#box_1').html('');
		$('#box_2').html('');
		$('#box_3').html('');
		ktopx.start($('#soluong').val());
	},
	doingay: function(unix_date){
		var a = new Date(unix_date*1000);
		var month = a.getMonth();
		var date = a.getDate();
		return date+'-'+month;
	},
	cat_chuoi: function(str,num){
		if (!num) num=35;
		if (str.length>num) {
			str=str.substring(0,num-3);
			str+='...';
		}
		return str;
	},
	trangchu: function(){
		diachi=$(location).attr('href');
		host=$(location).attr('host');
		if (diachi=='http://'+host+'/') return true;
		else if (diachi=='http://'+host) return true;
		else if (diachi.search('index.php')>-1) return true;
		else return false;
	},
	ini: function(){
		var diachi=window.location.toString();
		if (ktopx.trangchu() && !(diachi.search('adm')>-1)){
			$('#ktopx').insertAfter(ktopx_insert);
			$(ktopx_hide).hide();
		}
		if (ktopx_ChiHienTrangChu && !(ktopx.trangchu() || diachi.search('adm')>-1))
		{
			$('#ktopx').slideUp('fast');
		}
		else
		{
			ktopx.start();
			$('#ktopx').insertAfter($('#ktopx').parent());
			ktopx.event();
		}
	}
}
$(document).ready(function(){
	ktopx.ini();
});