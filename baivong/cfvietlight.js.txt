/*Slimbox v2.02 */
(function(w){var E=w(window),u,g,F=-1,o,x,D,v,y,L,s,n=!window.XMLHttpRequest,e=window.opera&&(document.compatMode=="CSS1Compat")&&(w.browser.version>=9.3),m=document.documentElement,l={},t=new Image(),J=new Image(),H,a,h,q,I,d,G,c,A,K;w(function(){w("body").append(w([H=w('<div id="lbOverlay" />')[0],a=w('<div id="lbCenter" />')[0],G=w('<div id="lbBottomContainer" />')[0]]).css("display","none"));h=w('<div id="lbImage" />').appendTo(a).append(q=w('<div style="position: relative;" />').append([I=w('<a id="lbPrevLink" href="#" />').click(B)[0],d=w('<a id="lbNextLink" href="#" />').click(f)[0]])[0])[0];c=w('<div id="lbBottom" />').appendTo(G).append([w('<a id="lbCloseLink" href="#" />').add(H).click(C)[0],A=w('<div id="lbCaption" />')[0],K=w('<div id="lbNumber" />')[0],w('<div style="clear: both;" />')[0]])[0]});w.slimbox=function(O,N,M){u=w.extend({loop:false,overlayOpacity:0.8,overlayFadeDuration:400,resizeDuration:400,resizeEasing:"swing",initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},M);if(typeof O=="string"){O=[[O,N]];N=0}y=E.scrollTop()+((e?m.clientHeight:E.height())/2);L=u.initialWidth;s=u.initialHeight;w(a).css({top:Math.max(0,y-(s/2)),width:L,height:s,marginLeft:-L/2}).show();v=n||(H.currentStyle&&(H.currentStyle.position!="fixed"));if(v){H.style.position="absolute"}w(H).css("opacity",u.overlayOpacity).fadeIn(u.overlayFadeDuration);z();k(1);g=O;u.loop=u.loop&&(g.length>1);return b(N)};w.fn.slimbox=function(M,P,O){P=P||function(Q){return[Q.href,Q.title]};O=O||function(){return true};var N=this;return N.unbind("click").click(function(){var S=this,U=0,T,Q=0,R;T=w.grep(N,function(W,V){return O.call(S,W,V)});for(R=T.length;Q<R;++Q){if(T[Q]==S){U=Q}T[Q]=P(T[Q],Q)}return w.slimbox(T,U,M)})};function z(){var N=E.scrollLeft(),M=e?m.clientWidth:E.width();w([a,G]).css("left",N+(M/2));if(v){w(H).css({left:N,top:E.scrollTop(),width:M,height:E.height()})}}function k(M){w("object").add(n?"select":"embed").each(function(O,P){if(M){w.data(P,"slimbox",P.style.visibility)}P.style.visibility=M?"hidden":w.data(P,"slimbox")});var N=M?"bind":"unbind";E[N]("scroll resize",z);w(document)[N]("keydown",p)}function p(O){var N=O.keyCode,M=w.inArray;return(M(N,u.closeKeys)>=0)?C():(M(N,u.nextKeys)>=0)?f():(M(N,u.previousKeys)>=0)?B():false}function B(){return b(x)}function f(){return b(D)}function b(M){if(M>=0){F=M;o=g[F][0];x=(F||(u.loop?g.length:0))-1;D=((F+1)%g.length)||(u.loop?0:-1);r();a.className="lbLoading";l=new Image();l.onload=j;l.src=o}return false}function j(){a.className="";w(h).css({backgroundImage:"url("+o+")",visibility:"hidden",display:""});w(q).width(l.width);w([q,I,d]).height(l.height);w(A).html(g[F][1]||"");w(K).html((((g.length>1)&&u.counterText)||"").replace(/{x}/,F+1).replace(/{y}/,g.length));if(x>=0){t.src=g[x][0]}if(D>=0){J.src=g[D][0]}L=h.offsetWidth;s=h.offsetHeight;var M=Math.max(0,y-(s/2));if(a.offsetHeight!=s){w(a).animate({height:s,top:M},u.resizeDuration,u.resizeEasing)}if(a.offsetWidth!=L){w(a).animate({width:L,marginLeft:-L/2},u.resizeDuration,u.resizeEasing)}w(a).queue(function(){w(G).css({width:L,top:M+s,marginLeft:-L/2,visibility:"hidden",display:""});w(h).css({display:"none",visibility:"",opacity:""}).fadeIn(u.imageFadeDuration,i)})}function i(){if(x>=0){w(I).show()}if(D>=0){w(d).show()}w(c).css("marginTop",-c.offsetHeight).animate({marginTop:0},u.captionAnimationDuration);G.style.visibility=""}function r(){l.onload=null;l.src=t.src=J.src=o;w([a,h,c]).stop(true);w([I,d,h,G]).hide()}function C(){if(F>=0){r();F=x=D=-1;w(a).hide();w(H).stop().fadeOut(u.overlayFadeDuration,k)}return false}})(jQuery);
// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
jQuery(function($) {
	$("a[href]").filter(function() {
		return /\.(jpg|png|gif)$/i.test(this.href);
	}).slimbox({}, null, function(el) {
		return (this == el) || (this.parentNode && (this.parentNode == el.parentNode));
	});
});
function resizeimg() {
  if (document.getElementsByTagName) {
    for (i=0; i<document.getElementById('page-body').getElementsByTagName('img').length; i++){
      im = document.getElementById('page-body').getElementsByTagName('img')[i];
      if (im.id != "i_logo"){
      if (im.className != "default"){
      if (im.width > 400){
        eval("pop" + String(i) + " = new Function(\"pop = jQuery.slimbox('" + im.src + "', 'Full Size Image Preview'); pop.focus();\")");
        eval("im.onclick = pop" + String(i) + ";");
        if (document.all) im.style.cursor = 'hand';
        if (!document.all) im.style.cursor = 'pointer';
        im.title = 'Click Here To See Image Full Size ';
      }
      }
      }
	}
  }
}
var topicnumber="";
var add="1";
  function createCookie(name,value,days) {
    if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  function eraseCookie(name) {
  createCookie(name,"",-1);
  }
 //block ie6 users and teach them how to take care of their fucking old haggy browser.
  var IE6 = (navigator.userAgent.indexOf("MSIE 6")>=0) ? true : false;
if(IE6){
     document.body.style.overflow='hidden';
	 document.body.scroll="no";
	$(function(){
	
		$("<div>")
			.css({
				'position': 'absolute',
				'top': '0px',
				'left': '0px',
				'overflow-x':'hidden',
                'overflow-y':'hidden',
				backgroundColor: 'black',
				'opacity': '0.75',
				'width': '100%',
				'height': $(window).height(),
				zIndex: 5000
			})
			.appendTo("body");
			
		$("<div><img src='http://i68.servimg.com/u/f68/13/98/42/59/no-ie610.jpg' alt='' style='float: left;'/><p><br /><strong><font color='black'>Sorry! DA07TT doesn't support Internet Explorer 6.</strong><br /><br />If you'd like to read our content please <a href='http://www.firefoxsupport.net'>upgrade your browser to firefox</a> now.</font></p>")
			.css({
				backgroundColor: 'white',
				'top': '50%',
				'left': '50%',
				marginLeft: -210,
				marginTop: -100,
				width: 410,
				paddingRight: 10,
				height: 200,
				'position': 'absolute',
				zIndex: 6000
			})
			.appendTo("body");
	});		
}
  
  function hcgstart() {
    $(document).ready(function(){
      resizeimg();
    });
}
function hcg_wait() {
  if(typeof jQuery == 'undefined') { 
  window.setTimeout(hcg_wait,100); 
  }else {
  hcgstart(); 
  }
}
hcg_wait();
window.onload = resizeimg;
function treatvar(nom) { var trouve= xhr.responseText.replace(RegExp("^.+<li style=\"margin-bottom:5px;direction:ltr;text-align:left;\"><strong>&#123;"+nom+"&#125;<\/strong>&nbsp;:&nbsp;(.*?)&nbsp;<span style='direction:ltr'>\(.*?\)<\/span><br \/><\/li>.+$"),'$1'); if(xhr.responseText==trouve) return; var children = document.getElementsByTagName('*') || document.all; var v= new Array(); var i = -1; while(++i < children.length) { var child = children[i]; var classNames = child.className.split(' '); for (var j = 0; j < classNames.length; j++) { if (classNames[j] == nom) { v.push(child); break; } } } i=-1; while(++i!=v.length) if(v[i].tagName=='INPUT'||v[i].tagName=='TEXTAREA')v[i].value+= trouve; else v[i].innerHTML+=trouve;}; if (window.ActiveXObject) { var xhr = new ActiveXObject("Microsoft.XMLHTTP"); } else if (window.XMLHttpRequest) { var xhr = new XMLHttpRequest(); } if(xhr!=null) { xhr.onreadystatechange = function() { if(xhr.readyState == 4) { treatvar('FORUMURL'); treatvar('FORUMURLINK'); treatvar('FORUMNAME'); treatvar('FORUMNAMELINK'); treatvar('FORUMDESC');treatvar('FORUMBIRTHDAY'); treatvar('FORUMAGE'); treatvar('FORUMCOUNTFORUM'); treatvar('FORUMCOUNTOPIC'); treatvar('FORUMCOUNTPOST');treatvar('FORUMCOUNTUSER');treatvar('FORUMONLINEUSER'); treatvar('FORUMONLINEDATE'); treatvar('FORUMLASTUSER'); treatvar('FORUMLASTUSERLINK'); treatvar('USERNAME'); treatvar('USERLINK'); treatvar('USERBIRTHDAY'); treatvar('USERAGE'); treatvar('USERREGDATE'); treatvar('USERLASTVISIT'); treatvar('USERCOUNTPOST'); } }; xhr.open("GET","/popup_help.forum?l=miscvars", true); xhr.send(null); }