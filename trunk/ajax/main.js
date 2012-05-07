;jQuery.preloadCssImages = function(settings){
	settings = jQuery.extend({
		statusTextEl: null,
		statusBarEl: null,
		errorDelay: 999, // handles 404-Errors in IE
		simultaneousCacheLoading: 2
	}, settings);
	var allImgs = [],
		loaded = 0,
		imgUrls = [],
		thisSheetRules,	
		errorTimer;
	
	function onImgComplete(){
		clearTimeout(errorTimer);
		if (imgUrls && imgUrls.length && imgUrls[loaded]) {
			loaded++;
			if (settings.statusTextEl) {
				var nowloading = (imgUrls[loaded]) ? 
					'Now Loading: <span>' + imgUrls[loaded].split('/')[imgUrls[loaded].split('/').length - 1] : 
					'Loading complete'; // wrong status-text bug fixed
				jQuery(settings.statusTextEl).html('<span class="numLoaded">' + loaded + '</span> of <span class="numTotal">' + imgUrls.length + '</span> loaded (<span class="percentLoaded">' + (loaded / imgUrls.length * 100).toFixed(0) + '%</span>) <span class="currentImg">' + nowloading + '</span></span>');
			}
			if (settings.statusBarEl) {
				var barWidth = jQuery(settings.statusBarEl).width();
				jQuery(settings.statusBarEl).css('background-position', -(barWidth - (barWidth * loaded / imgUrls.length).toFixed(0)) + 'px 50%');
			}
			loadImgs();
		}
	}
	
	function loadImgs(){
		//only load 1 image at the same time / most browsers can only handle 2 http requests, 1 should remain for user-interaction (Ajax, other images, normal page requests...)
		// otherwise set simultaneousCacheLoading to a higher number for simultaneous downloads
		if(imgUrls && imgUrls.length && imgUrls[loaded]){
			var img = new Image(); //new img obj
			img.src = imgUrls[loaded];	//set src either absolute or rel to css dir
			if(!img.complete){
				jQuery(img).bind('error load onreadystatechange', onImgComplete);
			} else {
				onImgComplete();
			}
			errorTimer = setTimeout(onImgComplete, settings.errorDelay); // handles 404-Errors in IE
		}
	}
	
	function parseCSS(sheets, urls) {
		var w3cImport = false,
			imported = [],
			importedSrc = [],
			baseURL;
		var sheetIndex = sheets.length;
		while(sheetIndex--){//loop through each stylesheet
			
			var cssPile = '';//create large string of all css rules in sheet
			
			if(urls && urls[sheetIndex]){
				baseURL = urls[sheetIndex];
			} else {
				var csshref = (sheets[sheetIndex].href) ? sheets[sheetIndex].href : 'window.location.href';
				var baseURLarr = csshref.split('/');//split href at / to make array
				baseURLarr.pop();//remove file path from baseURL array
				baseURL = baseURLarr.join('/');//create base url for the images in this sheet (css file's dir)
				if (baseURL) {
					baseURL += '/'; //tack on a / if needed
				}
			}
			if(sheets[sheetIndex].cssRules || sheets[sheetIndex].rules){
				thisSheetRules = (sheets[sheetIndex].cssRules) ? //->>> http://www.quirksmode.org/dom/w3c_css.html
					sheets[sheetIndex].cssRules : //w3
					sheets[sheetIndex].rules; //ie 
				var ruleIndex = thisSheetRules.length;
				while(ruleIndex--){
					if(thisSheetRules[ruleIndex].style && thisSheetRules[ruleIndex].style.cssText){
						var text = thisSheetRules[ruleIndex].style.cssText;
						if(text.toLowerCase().indexOf('url') != -1){ // only add rules to the string if you can assume, to find an image, speed improvement
							cssPile += text; // thisSheetRules[ruleIndex].style.cssText instead of thisSheetRules[ruleIndex].cssText is a huge speed improvement
						}
					} else if(thisSheetRules[ruleIndex].styleSheet) {
						imported.push(thisSheetRules[ruleIndex].styleSheet);
						w3cImport = true;
					}
					
				}
			}
			//parse cssPile for image urls
			var tmpImage = cssPile.match(/[^\("]+\.(gif|jpg|jpeg|png)/g);//reg ex to get a string of between a "(" and a ".filename" / '"' for opera-bugfix
			if(tmpImage){
				var i = tmpImage.length;
				while(i--){ // handle baseUrl here for multiple stylesheets in different folders bug
					var imgSrc = (tmpImage[i].charAt(0) == '/' || tmpImage[i].match('://')) ? // protocol-bug fixed
						tmpImage[i] : 
						baseURL + tmpImage[i];
					
					if(jQuery.inArray(imgSrc, imgUrls) == -1){
						imgUrls.push(imgSrc);
					}
				}
			}
			
			if(!w3cImport && sheets[sheetIndex].imports && sheets[sheetIndex].imports.length) {
				for(var iImport = 0, importLen = sheets[sheetIndex].imports.length; iImport < importLen; iImport++){
					var iHref = sheets[sheetIndex].imports[iImport].href;
					iHref = iHref.split('/');
					iHref.pop();
					iHref = iHref.join('/');
					if (iHref) {
						iHref += '/'; //tack on a / if needed
					}
					var iSrc = (iHref.charAt(0) == '/' || iHref.match('://')) ? // protocol-bug fixed
						iHref : 
						baseURL + iHref;
					
					importedSrc.push(iSrc);
					imported.push(sheets[sheetIndex].imports[iImport]);
				}
				
				
			}
		}//loop
		if(imported.length){
			parseCSS(imported, importedSrc);
			return false;
		}
		var downloads = settings.simultaneousCacheLoading;
		while( downloads--){
			setTimeout(loadImgs, downloads);
		}
	}
	parseCSS(document.styleSheets);
	return imgUrls;
};
$(document).ready(function() {
    $.preloadCssImages();
    if($.browser.msie && parseInt($.browser.version) < 7){
        setTimeout(function() {window.location.href = defaultURL},1000);
    }
    else{
        $(window).load(function() {
            // Show content
            $('#wrapper').fadeIn(1000, function() {
                showLogo();
            });
        });
        $('.button').hide();
        $('#chooser .nav').each(function(){
            $('h4:first',$(this)).show();
        }).click(function(){
            sendPage($(this))
        })
        animating = false;
    }
});

function showLogo(){
    // Canh vi tri logo
    $('#logo img').position({
      my: "center",
      at: "center",
      of: document
    }).show('puff',{easing:'easeOutCirc'},1000,function(){
        $('#logosmall img').fadeIn(500);
        var pos = $('#logosmall img').offset();
        var left = pos.left;
        var top = pos.top;
        var width = $('#logosmall img').width();
        var height = $('#logosmall img').height();
        $('#logo img').animate({
            'top': top,
            'left': left,
            'opacity': 'hide',
            'width': width,
            'height': height
        },function(){
            showChooser();
        })
    })
}
function showChooser(){
    $('#chooser').delay(500).show("slide", { direction: "down", easing: "easeOutBounce" }, 1000,function(){
        var offset = $(this).offset();
        var width = ($(document).width() - $('.nav',$(this)).width() * $('.nav',$(this)).length)/2
        $(this).css({
            'position': 'absolute',
            'top': offset.top,
            'left': width,
            'width': $('.nav',$(this)).width() * $('.nav',$(this)).length + 5
        })
        slideList();
    })
    $('#chooser li.nav').each(function(){
        $(this).hoverIntent(function() {
            $('.chooseractive',$(this)).show("slide", { direction: "down", easing: "easeInQuad" }, 300);
            $(this).addClass('hover');
            animating = false;
            slideHeader($(this));
        }, function() {
            $('.chooseractive',$(this)).hide("slide", { direction: "down", easing: "easeOutQuad" }, 300);
            $(this).removeClass('hover');
            stopSlideHeader($(this));
        });
    });
}
function slideList(){
    slide("#menu1 ul", 30, 15, 250, .8);
    slide("#menu2 ul", 30, 15, 250, .8);
    $('.button').delay(1500).fadeIn();
}
function slideHeader(ele,header){
    if(animating) return;
    if(!header){
        header = 0;
    };
    $('h4',ele).eq(header).delay(150).hide("slide", { direction: "right", easing: "easeInQuad" }, 250,function(){
        //console.log(header+','+$('h4',ele).length)
        if(header < $('h4',ele).length-1){
            header = header + 1;
        }
        else{
            header = 0;
        };
        //console.log(header+','+$('h4',ele).length)
        $('h4',ele).eq(header).show("slide", { direction: "left", easing: "easeOutBack" }, 1000,function(){
            slideHeader(ele,header);
        });
    });
}
function stopSlideHeader(ele){
    animating = true;
    $('h4',ele).stop(true,true).hide().filter(':first').show("slide", { direction: "right", easing: "easeOutBounce" }, 1000);
}
function sendPage(ele){
    $('#chooser').hide("explode", 1000);
    setTimeout(function() {window.location.href = ele.find('a').attr('href')}, 1000);
}
function slide(navigation_id, pad_out, pad_in, time, multiplier) {
	// creates the target paths
	var list_elements = navigation_id + " li";

	// initiates the timer used for the sliding animation
	var timer = 0;

	// creates the slide animation for all list elements 
	$(list_elements).each(function(i) {
		// margin left = - ([width of element] + [total vertical padding of element])
		$(this).css("margin-left", "-180px");
		$(navigation_id).show();
		// updates timer
		timer = (timer * multiplier + time);
		$(this).animate({
			marginLeft: pad_in
		},
		timer);
		$(this).animate({
			marginLeft: pad_out
		},
		timer);
		$(this).animate({
			marginLeft: pad_in
		},
		timer);
		$(this).hoverIntent(
		function() {
			$(this).animate({
				marginLeft: pad_out
			},
			200, 'easeInQuad');
		},
		function() {
			$(this).animate({
				marginLeft: pad_in
			},
			200, 'easeInQuad');
		});
	});
}