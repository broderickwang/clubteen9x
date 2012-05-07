//Inline HTML Tooltip script: By JavaScript Kit: http://www.javascriptkit.com
//Created: July 10th, 08'

var htmltooltip={
	tipclass: 'htmltooltip',
	fadeeffect: [true, 500],
	anchors: [],
	tooltips: [], //array to contain references to all tooltip DIVs on the page

	positiontip:function($, tipindex, e){
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
	},

	showtip:function($, tipindex, e){
		var tooltip=this.tooltips[tipindex]
		if (this.fadeeffect[0])
			$(tooltip).hide().fadeIn(this.fadeeffect[1])
		else
			$(tooltip).show()
	},

	hidetip:function($, tipindex, e){
		var tooltip=this.tooltips[tipindex]
		if (this.fadeeffect[0])
			$(tooltip).fadeOut(this.fadeeffect[1])
		else
			$(tooltip).hide()	
	},

	updateanchordimensions:function($){
		var $anchors=$('*[@rel="'+htmltooltip.tipclass+'"]')
		$anchors.each(function(index){
			this.dimensions={w:this.offsetWidth, h:this.offsetHeight, offsetx:$(this).offset().left, offsety:$(this).offset().top}
		})
	},

	render:function(){
		jQuery(document).ready(function($){
			htmltooltip.iebody=(document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
			var $anchors=$('*[@rel="'+htmltooltip.tipclass+'"]')
			var $tooltips=$('div[@class="'+htmltooltip.tipclass+'"]')
			$anchors.each(function(index){ //find all links with "title=htmltooltip" declaration
				this.dimensions={w:this.offsetWidth, h:this.offsetHeight, offsetx:$(this).offset().left, offsety:$(this).offset().top} //store anchor dimensions
				this.tippos=index+' pos' //store index of corresponding tooltip
				var tooltip=$tooltips.eq(index).get(0) //ref corresponding tooltip
				if (tooltip==null) //if no corresponding tooltip found
					return //exist
				tooltip.dimensions={w:tooltip.offsetWidth, h:tooltip.offsetHeight}
				$(tooltip).remove().appendTo('body') //add tooltip to end of BODY for easier positioning
				htmltooltip.tooltips.push(tooltip) //store reference to each tooltip
				htmltooltip.anchors.push(this) //store reference to each anchor
				var $anchor=$(this)
				$anchor.hover(
					function(e){ //onMouseover element
						htmltooltip.positiontip($, parseInt(this.tippos), e)
						htmltooltip.showtip($, parseInt(this.tippos), e)
					},
					function(e){ //onMouseout element
						htmltooltip.hidetip($, parseInt(this.tippos), e)
					}
				)
				$(window).bind("resize", function(){htmltooltip.updateanchordimensions($)})
			})
		})
	}
}

htmltooltip.render()