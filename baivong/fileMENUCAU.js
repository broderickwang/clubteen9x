var flashvars = {
				tcolor: "0xFF9900",
				tcolor2: "0xFF9900",
				hicolor: "0xFF9900",
				tspeed: "100",
				distr: "true",
				mode: "tags"
			};
			var params = {
				allowScriptAccess: "always"
			};
		
			params.wmode = "transparent";
			
			d="<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f17/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;' target='_blank'>Điểm tin</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f8/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Cập nhật</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f3/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Báo danh</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f4/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Điểm danh</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f6/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Kỹ thuật</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f15/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Thư giãn</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f28/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Hình ảnh</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f7/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Clip</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f29/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Quân trang</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f30/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Tuyển quân</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f31/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Quảng trường</a>"+
			"<a href='"+encodeURIComponent("http://cfviet.co.cc/forum-f32/")+"' class='tag-link-24' title='15 topics' style='font-size: 8pt;'target='_blank'>Tòa án</a>";
			flashvars.tagcloud = "<tags>"+d+"</tags>";
			
			swfobject.embedSWF("http://users6.jabry.com/tuyetson08/Tag%20Cloud/Tagcloud.swf", "wpcumuluscontent5733682", "220", "220", "9", "expressInstall.swf", flashvars, params);