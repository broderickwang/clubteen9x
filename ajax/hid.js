jQuery.noConflict();
(function($) {
//msgbox
    var $msgbox = function(o) {

        if(typeof(o) == 'string'){ o = { content:{type:'text', content:o} } }   // å¦‚æ?œå‚æ•°ç»™å‡ºå­—ç¬¦ä¸²ï¼Œ åˆ™ç›´æ?¥è¿›è¡Œæç¤ºï¼ˆtextï¼‰
        opts = o || {};                                                         // ç”¨äº?æ?¥æ”¶å‚æ•°
        
        opts.width             = o.width             || 360;                    // æç¤ºæ¡†ç?„å®½åº¦
        opts.height            = o.height            || 200,                    // æç¤ºæ¡†ç?„é«˜åº¦
        opts.autoClose         = o.autoClose         || 0;                      // è‡ªå?¨å…³é—­ç?„æ—¶é—´, 0åˆ™ä¸ä¼?è‡ªå?¨å…³é—­
        opts.title             = o.title             || '',                 // æç¤ºæ¡†æ ‡é¢˜
        opts.wrapperClass      = o.wrapperClass      || 'msgbox_wrapper';       // æç¤ºæ¡†å¤–æ¡†class
        opts.titleClass        = o.titleClass        || 'msgbox_title';         // æç¤ºæ¡†æ ‡é¢˜class
        opts.closeClass        = o.closeClass        || 'msgbox_close';         // æç¤ºæ¡†å…³é—­æŒ‰é’®class
        opts.titleWrapperClass = o.titleWrapperClass || 'msgbox_title_wrapper'; // æç¤ºæ¡†æ ‡é¢˜è¡Œclass
        opts.mainClass         = o.mainClass         || 'msgbox_main';          // å†…å®¹æ¡†class
        opts.bgClass           = o.bgClass           || 'msgbox_bg';            // èƒŒæ™¯å±‚class
        opts.buttonClass       = o.buttonClass       || 'msgbox_button';        // å†…å®¹æ¡†ä¸­buttonç?„class
        opts.inputboxClass     = o.inputboxClass     || 'msgbox_inputbox';      // å†…å®¹æ¡†ä¸­input boxç?„class
        opts.content           = typeof o.content == 'string' ? {type:'text', content:o.content} : (o.content || {type:'text',content:''});
        opts.content.type      = o.content.type      || 'text';
        opts.content.content   = o.content.content   || '';
        // support:  text, url(=get,ajax), iframe, confirm, alert; confirm, alert is added in version 4.0, input added in V5.0
        opts.onClose           = o.onClose           || function(){};           // å…³é—­æ—¶æ‰§è¡Œç?„äº‹ä»¶ 
        opts.closeIcon         = typeof o.closeIcon == 'string' ? {type:'string', content:o.closeIcon} : (o.closeIcon || {type:'string',content:'A—'});
        opts.closeIcon.type    = o.closeIcon.type    || 'string';
        opts.closeIcon.content = o.closeIcon.content || 'A—'; 
        opts.closeIcon.content = opts.closeIcon.type == 'icon' ? '<img src="' + opts.closeIcon.content + '" border="0" />' : opts.closeIcon.content;
        opts.bgOpacity         = o.bgOpacity         || 0.6;                    // from 0 to 1  èƒŒæ™¯é€æ˜?åº¦
        opts.onAjaxed          = o.onAjaxed          || function(){};           // ajaxæ‰§è¡Œå®Œä¹‹å?ç?„äº‹ä»¶ 
        opts.onInputed         = o.onInputed         || function(){};           // è¾“å…¥æ¡†å…³é—­å?ç?„äº‹ä»¶
        opts.drag              = typeof o.drag != 'boolean' ? true : o.drag; // é»˜è®¤å…è®¸æ‹–æ‹½
        opts.animation         = typeof o.animation != 'number' ? 1 : o.animation
        
        var returnValue = false;        // è¿”å›?å€¼, ç”¨äº?confirmå’Œinput
        var relTop      = 0;            // æç¤ºæ¡†ç¦»çª—å£ä¸?è¾¹ç?„è·ç¦»
        var relLeft     = 0;            // æç¤ºæ¡†ç¦»çª—å£å·¦è¾¹ç?„è·ç¦», ç”¨äº?é¡µé¢æ»?å?¨æ—¶ä¿æŒçª—å£ä¸å?¨
        
        var $background = $("<div>")
            .css({
                 'position' : 'absolute',
                 'top'      : '0',
                 'left'     : '0',
                 'z-index'  : '9999',
                 'opacity'  : '0'
            })
            .addClass(opts.bgClass)
            .dblclick(closeMe)          // åŒå‡»å…³é—­æç¤ºæ¡†
            .click(function(){          // å•å‡»é—ªçƒæç¤ºæ¡†
                flashTitle(0.5, 4, 80);
            });

        var $wrapper = $("<div>")
            .css({
                'width'     : opts.width + 'px',
                'height'     : opts.height + 'px',
                'position'     : 'absolute',
                'z-index'    : '10000',
                'display'   : 'none'
            })
            .addClass(opts.wrapperClass)
        
        var $titleWrapper = $('<div class=msgTips><p> Bạn chưa <span class=tip_highlight>Đăng kí </span>hoặn <span class=tip_highlight>Đăng nhập</span></p><p>Hãy gia nhập cùng chúng tôi</p></div><div class=tipBtns><a href=/register class=tipsReg><span>Đăng kí</span></a><a href=/login class=tipsLogin><span>Đăng nhập</span></a></div><div class=msgTips><p>Thông báo tự đóng sau 5s</p></div><div class=timer></div>')
            .addClass(opts.titleWrapperClass)
            .appendTo($wrapper);
		var $login = $(".tipsLogin",$titleWrapper)	
		    .mousedown(closeMe);
            
        var $titleLi = $(".timer", $wrapper)
            .html(opts.title)
            .addClass(opts.titleClass);
            
        var $closeLi = $titleLi.next()
            .addClass(opts.closeClass)
            .html(opts.closeIcon.content)
            .mousedown(closeMe);
                        
        var $main = $(document.createElement("div"))
            .addClass(opts.mainClass)
            .appendTo($wrapper);
            
        $main.height( opts.height - $titleWrapper.outerHeight(true) - $main.outerHeight(true) + $main.height() ); // è®¡ç®—å†…å®¹æ¡†é«˜åº¦
        
        function animation(act, t){
            switch(t){
                case 1:
                    if(act=='open'){
                        $background.animate({'opacity':opts.bgOpacity});
                        $wrapper.slideDown('slow'); 
                    } else {
                        $background.fadeOut('slow', $background.remove);
                        $wrapper.slideUp('slow', $wrapper.remove);
                    }
                    break;
                case 2:
                    if(act=='open'){
                        $background.animate({'opacity':opts.bgOpacity});
                        $wrapper.animate({'width':'toggle'}, 'slow', 'swing'); 
                    } else {
                        $background.fadeOut('slow', $background.remove);
                        $wrapper.animate({'width':'toggle'}, 'slow', 'swing', $wrapper.remove);
                    }
                    break;
                case 3:
                    if(act=='open'){
                        $background.animate({'opacity':opts.bgOpacity});
                        $wrapper.animate({'width':'toggle', 'height':'toggle'}, 'slow', 'swing'); 
                    } else {
                        $background.fadeOut('slow', $background.remove);
                        $wrapper.animate({'width':'toggle', 'height':'toggle'}, 'slow', 'swing', $wrapper.remove);
                    }                
                    break;
                default:
                    if(act=='open'){
                        $background.css('opacity',opts.bgOpacity);
                        $wrapper.css('display', '');
                    } else {
                        $background.remove();
                        $wrapper.remove();
                    }
            }
        }
        
        function closeMe(){
            animation('close', opts.animation);
            opts.onClose(returnValue);                
        }
        
        function isVisible(){
            return    $background.is(":visible") &&
                    $wrapper.is(":visible");
        }

        function autoCloseMe(autoClose){            
            if( autoClose > 0 && isVisible() ){  // é˜²æ­¢äººä¸ºå…³é—­å?,è®¡æ—¶å™¨è¿˜åœ¨è¿è¡Œ
                autoCloseStr = "BA i viáº¿t sáº½ hiá»ƒn thá»‹ sau " + autoClose + " giA¢y ná»¯a.";
                $titleLi.html(opts.title + " &nbsp; " + autoCloseStr);        
                autoClose --;
                if( autoClose == 0 ) 
                    closeMe();    
                setTimeout(function(){ autoCloseMe(autoClose) }, 1000);    
            }        
        }
        
        function resetPosition() {
            $background.css({
                 'width'    : document.documentElement.scrollWidth + 'px',
                 'height'    : document.documentElement.scrollHeight + 'px'
            });
            relLeft = ($(window).width() - opts.width)/2;
            relTop = ($(window).height() - opts.height)/2;
            fixBox();     // å®?ä½åˆå§‹ä½ç½®
        }
        
        function flashTitle(opacity, times, interval, flag){ // é—ªçƒæ ‡é¢˜(æ¨¡æ‹Ÿwindows)
            if( times > 0 ) {
                flag = !flag;
                op = flag ? opacity : 1;
                $titleWrapper.css('opacity',op);    
                setTimeout(function(){ flashTitle(opacity, times-1, interval, flag) }, interval);
            }
        }
        
        function fixBox(){  // å®?ä½box
            $wrapper.css({
                'top'        : $(window).scrollTop() + relTop + 'px',
                'left'         : $(window).scrollLeft() + relLeft + 'px'             
            });    
        }
        
        function msgbox(ctt){    // æŒ‰ç±»å?‹å¡«å……å†…å®¹
            switch(ctt.type){
                case 'input':
                    $main.html("<p>" + ctt.content + "</p>");
                    var $inputbox = $("<input type='text' />")
                        .appendTo($main)
                        .addClass(opts.inputboxClass);
                    var $buttonWrapper = $("<div>")
                        .css({
                            'text-align':'center',
                            'padding':'15px 0'
                        })
                        .appendTo($main);
                    var $yesButton = $("<input type=button value=' OK '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .after(" &nbsp; &nbsp; ")
                        .click(function(){
                            opts.onInputed($inputbox.val());  // è¿”å›?è¾“å…¥ç?„å€¼
                            closeMe();
                        });
                    var $noButton = $("<input type=button value=' Cancel '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .click(closeMe);
                    break;
                case 'alert':
                    $main.html("<p>" + ctt.content + "</p>");
                    var $buttonWrapper = $("<div>")
                        .css({
                            'text-align':'center',
                            'padding':'15px 0'
                        })
                        .appendTo($main);
                    var $OKButton = $("<input type=button value=' OK '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .click(closeMe);
                    break;
                case 'confirm':
                    $main.html("<p>" + ctt.content + "</p>");
                    var $buttonWrapper = $("<div>")
                        .css({
                            'text-align':'center',
                            'padding':'15px 0'
                        })
                        .appendTo($main);
                    var $yesButton = $("<input type=button value=' Yes '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .after(" &nbsp; &nbsp; ")
                        .click(function(){
                            returnValue = true;
                            closeMe();
                        });
                    var $noButton = $("<input type=button value=' No '>")
                        .appendTo($buttonWrapper)
                        .addClass(opts.buttonClass)
                        .click(function(){
                            returnValue = false;
                            closeMe();
                        });
                    break;                    
                case 'get':
                case 'ajax':
                case 'url':
                    $main.html("Loading ...").load(
                        ctt.content,
                        function(data){
                            (opts.onAjaxed)(data);    
                        }
                    );
                    break;            
                case 'iframe':
                    $("<iframe frameborder=0 marginheight=0 marginwidth=0></iframe>")
                        .appendTo($main)
                        .attr({
                            'width'         : '100%',
                            'height'        : '100%',
                            'scrolling'     : 'auto',
                            'src'           : ctt.content
                        });
                    break;
                default:
                    $main.html("" + ctt.content + "");
            }    

        }
        
        function allowDrag(flag){
            if(flag)
                $wrapper.Drags({  // å…è®¸æ‹–æ‹½
                    handler : $titleWrapper,
                    onMove: function(){ $(window).unbind('scroll') },
                    onDrop: function(){
                        relTop = $wrapper.getCss('top') - $(window).scrollTop();
                        relLeft = $wrapper.getCss('left') - $(window).scrollLeft();
                        $(window).scroll(fixBox);
                    }
                }); 
        }
        
        function showMe(){   // show the box
        
            $('body').append($background).append($wrapper);
            animation('open', opts.animation);
            
            resetPosition();
            
            $(window)
                .load(resetPosition)        // just in case user is changing size of page while loading
                .resize(resetPosition)
                .scroll(fixBox);

            msgbox(opts.content);    //å¡«å……å†…å®¹
            
            if( opts.autoClose > 0 )  // è‡ªå?¨å…³é—­
                autoCloseMe(opts.autoClose);
            
            //allowDrag(opts.drag);

        }
        
        showMe();
        
        // public properties and functions:  
        this.value           = returnValue;
        this.close           = closeMe;    
        this.setAutoClose    = function(v){ opts.autoClose = v; autoCloseMe(v); return this; }
        this.setHeight       = function(v){ opts.height = v; $wrapper.css( 'height', v + 'px' ); return this; }
        this.setWidth        = function(v){ opts.width = v; $wrapper.css( 'width', v + 'px' ); return this; }
        this.setTitle        = function(v){ opts.title = v; $titleLi.html(v); return this; }
        this.setWrapperClass = function(v){ opts.wrapperClass = v; $wrapper.removeClass().addClass(v); return this; }
        this.setTitleClass   = function(v){ opts.titleClass = v; $titleLi.removeClass().addClass(v); return this; }
        this.setCloseClass   = function(v){ opts.closeClass = v; $closeLi.removeClass().addClass(v); return this; }
        this.setTitleWrapperClass = function(v){ opts.titleWrapperClass = v; $titleWrapper.removeClass().addClass(v); return this; }
        this.setMainClass    = function(v){ opts.mainClass = v; $main.removeClass().addClass(v); return this; }
        this.setBgClass      = function(v){ opts.bgClass = v; $background.removeClass().addClass(v); return this; }
        this.setButtonClass  = function(v){ opts.buttonClass = v; $(":input(input[type=button], input[type=submit], input[type=reset])", $main).removeClass().addClass(v); return this; }
        this.setInputboxClass= function(v){ opts.inputboxClass = v; $("input[type=text]", $main).removeClass().addClass(v); return this; }
        this.setContent      = function(v){ 
            v = typeof v == 'string' ? {type:'text', content:v} : v;
            v.type = v.type || 'text';
            v.content = v.content || opts.content.content || '';
            opts.content = v;
            msgbox(v); 
            return this; 
        }
        this.setBgOpacity    = function(v){ opts.bgOpacity = v; $background.css('opacity', v); return this; }         
        this.setOnClose      = function(v){ opts.onClose = v; return this; }
        this.setOnAjaxed     = function(v){ opts.onAjaxed = v; return this; }
        this.setOnInputed    = function(v){ opts.onInputed = v; return this; }
        this.setAnimation    = function(v){ opts.animation = v; return this; }
        this.setCloseIcon    = function(v){  
            v         = typeof v == 'string' ? {type:'string', content:v} : v;
            v.type    = v.type    || 'string';
            v.content = v.content || 'A—'; 
            v.content = v.type == 'icon' ? '<img src="' + v.content + '" border="0" />' : v.content;        
            opts.closeIcon = v;
            $closeLi.html(v.content);
            return this; 
        }
        
    }
    
    $.msgbox = function(o){ return new $msgbox(o); }    
    return $.msgbox;
  
})(jQuery);