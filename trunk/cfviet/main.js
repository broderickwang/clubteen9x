$(document).ready(function(){
						   
		//--------------------------------------------------------------------------------------//
		// INFORMATION/RESOURCES                                                                //
		// Need info about a plugin?                                                            //
		//                                                                                      //
		// - jquery home @ http://www.jquery.com                                                //
		// - slider @ http://malsup.com/jquery/cycle/                                           //
		// - lightbox @ http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-        //
		//   lightbox-clone/documentation/                                                      //
		// - tooltip @ http://onehackoranother.com/projects/jquery/tipsy/                       //
		// - pngfix @ http://allinthehead.com/retro/338/supersleight-jquery                     //
		// - twitter @ http://remysharp.com/2007/05/18/add-twitter-to-your-blog-step-by-step/   //
		//                                                                                      //
		//--------------------------------------------------------------------------------------//	
	
        //-----------------------------------//
        // SETTINGS                          //
		// You can change the settings here! //
		//-----------------------------------//
		
		// slider(s) effects
		var s_slider_main = 'scrollVert';// main slider
		var s_slider_sub = 'scrollHorz';// sub slider(work)
		// blindX / blindY / blindZ / cover / curtainX / curtainY / fade / fadeZoom / uncover / wipe
        // growX / growY / none / scrollUp / scrollDown / scrollLeft / scrollRight / scrollHorz / zoom
        // scrollVert / shuffle / slideX / slideY / toss / turnUp / turnDown / turnLeft / turnRight
		//		
		// show animated copyright bar?
		var s_copyright = 'yes';// show yes/no
		//
		// the opacity of the menu icons/images
		var s_fade_img = 'yes';// fade yes/no
		var s_opacity = '0.8';// opacity of the images, use 0.5 till 1.0 
		//
		// show tooltips(menu and form)?
		var s_tooltip_menu = 'yes';// show tooltip menu yes/no
		var s_tooltip_logo = 'yes';// show tooltip logo yes/no
		var s_tooltip_form = 'yes';// show tooltip forms yes/no
		//
		// focus on image(social) and fade the rest?
		var s_focus_img = 'yes';// focus yes/no
		//
		// slide the social btn on hover?
		var s_slide_social = 'yes';// slide social btn yes/no	
		//
		// use a lightbox for previewing images?
		var s_lightbox = 'yes';// lightbox btn yes/no	
		
		//---------------//
		// FUNCTIONS     //
		// Do not change //
		//---------------//
		
	    md_slider();// slider
		md_slider_work();// slider
		md_lightbox();// lightbox
        md_fade_all_img();// basic jquery show and hide
		md_logo_ani();// animate the logo
		md_fade_menu();// fade menu images
        md_css();// add extra css
		md_tooltip();// tooltip
	    md_move_to();// basic jquery animate
		md_pngfix();// pngfix
		
		//-----------------------------------------------------//
		// THE CODE                                            //
		// Do not change, only if you know what you are doing! // 
		//-----------------------------------------------------//
		
		function md_slider(){
			$('#content').cycle({
				fx:     s_slider_main,// see more options at http://malsup.com/jquery/cycle/options.html
				timeout: 0, // time of the rotation
				speed:   400, // speed of the rotation
				cleartype:     !$.support.opacity,
				cleartypeNoBg: true     
				//easing: 'easeInElastic'// use for fx @ http://gsgd.co.uk/sandbox/jquery/easing/
			});
		}
		function md_slider_work(){
			$('#slider-in').cycle({
				fx:      s_slider_sub,// see more options at http://malsup.com/jquery/cycle/options.html
				timeout:  0, // time of the rotation
				speed:   800, // speed of the rotation
				prev:    'a#prev',
				next:    'a#next'		
			});
		}
        function md_logo_ani(){
			$("img#logo-bg").animate({
				marginTop: "300px"       
			}, 2500 );
	    }
		function md_fade_menu(){
			if(s_fade_img == "yes"){
				$("ul#menu li a img").fadeTo("slow", s_opacity); 
				$("ul#menu img").hover(function(){
						$(this).stop().fadeTo("fast", 1.0); 
					},function(){
						$(this).stop().fadeTo("fast", s_opacity);
				});
			}
		}
 	    function md_css() {
			$(".corners").css({
				"-moz-border-radius" : "5px", 
				"-webkit-border-radius" : "5px" 
			});
			$(".corners-r").css({
				 "-moz-border-radius-topright" : "5px",
				 "-moz-border-radius-bottomright" : "5px",
				 "-webkit-border-top-right-radius" : "5px",
				 "-webkit-border-bottom-right-radius" : "5px"
	         });		
	    }				
		function md_lightbox(){
			if(s_lightbox == "yes"){
        		$(".w-box a, #map").prettyPhoto();
			}
		}
		function md_move_to(){
			// social
			if(s_slide_social == "yes"){
				$('.social-box-left, .social-box-right').hover(function() {
					$(this).find("img").stop().animate({ marginLeft: '10px' }, 400);	
				}, function() { //mouse out
					$(this).find("img").stop().animate({ marginLeft: "4px" }, 400);
				});
			}
			// copyright bar
			setTimeout(function(){ $("#copyright").animate({ right: 0 }, 400).animate({ right: '10px' }, 400) }, 1800);
			if(s_copyright == 'yes'){
				$('#copyright').hover(function() {
					$(this).stop().animate({ right: '-170px' }, 400);	
				}, function() { //mouse out
					$(this).stop().animate({right: '20px' }, 400).animate({ right: '10px' }, 400);
				});
			}else{
				$('#copyright').hide();	
		    }
		}		
		function md_fade_all_img(){
			if(s_focus_img == "yes"){
				$('.social-box-left, .social-box-right').hover(function() {
					$('.social-box-left, .social-box-right').stop().fadeTo("fast", 0.5);
					$(this).stop().fadeTo("fast", 1.0);
				}, function() { //mouse out
					$('.social-box-left, .social-box-right').stop().fadeTo("fast", 1.0);	
				});
			}
		}
        function md_tooltip(){
			// menu
			if(s_tooltip_menu == 'yes'){
				$('.tip').tipsy({
					//fade: true,
					gravity: 'e'
				});
			}
			// logo
			if(s_tooltip_logo == 'yes'){
				$('.tip_logo').tipsy({
					//fade: true,
					gravity: 's'
				});
			}			
			// form
			if(s_tooltip_form == 'yes'){
				$('.tip-form').tipsy({
					//fade: true,
					gravity: 'w'
				});
        	}		
		}
		function md_pngfix(){
	    	$('#logo-frame, #i1, #i2, #i3, #i4, #i5, #work-nav, #logo-bg').supersleight();
		}
		
		getTwitters('tweets', {
			id: 'MarkDijkstra', 
			prefix: '<a href="http://twitter.com/%screen_name%">%name%</a> said: ', 
			clearContents: false, // leave the original message in place
			count: 1, 
			withFriends: true,
			ignoreReplies: false,
			newwindow: true
		});
	
});
		//-----------------------------//
		// Do not change this location //
		//-----------------------------//
		
		// goto slide(thumbs)
		// code = <a href="javascript:gotoslide(0);">
		// first slide = 0, second slide = 1
		function goto(ID) {
			$('#content').cycle(ID); 
		}				
		
		
		