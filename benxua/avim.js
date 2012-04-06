/**
 *  AVIM JavaScript Vietnamese Input Method Source File dated 28-07-2008
 *
 *	Copyright (C) 2004-2008 Hieu Tran Dang <lt2hieu2004 (at) users (dot) sf (dot) net
 *	Website:	http://noname00.com/hieu
 *
 *	You are allowed to use this software in any way you want providing:
 *		1. You must retain this copyright notice at all time
 *		2. You must not claim that you or any other third party is the author
 *		   of this software in any way.
 */

/******************************************************************************/

/**
 *  AVIM-Reloaded (Advanced Vietnamese Input Method) dated 11-06-2009
 *
 *	Copyright (C) 2009 Minh Quan TRAN contact (at) link2caro (dot) com
 *	Website: http://link2caro.net
 *
 *	Redistribution and use of AVIM-Reloaded, with or without modification,
 *  are permitted provided that the following conditions are met:
 *		1. Redistributions of this software must retain the above copyright
 *         notice, this list of conditions and the following disclaimer.
 *		2. You must not claim that you or any other third party is the author
 *		   of this software in any way.
 *
 *  AVIM-Reloaded is also distributed under the terms of the GNU
 *  General Public License as published by the Free Software Foundation,
 *  version 3 of the License, or any later version if there is at
 *  the time you redistribute this software.
 *
 *  AVIM-Reloaded is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with AVIM-Reloaded.  If not, see <http://www.gnu.org/licenses/>.
 */

if('undefined' === typeof(AVIMGlobalConfig)) {
	var AVIMGlobalConfig = {
		method: 0, //Default input method: 0=AUTO, 1=TELEX, 2=VNI, 3=VIQR, 4=VIQR*
		onOff: 1, //Default state: 0=Off, 1=On
		ckSpell: 1, //Default Spell Check: 0=Off, 1=On
		oldAccent: 1, //0: New way (oa`, oe`, uy`), 1: The good old day (o`a, o`e, u`y)
		useCookie: 1, //Cookies: 0=Off, 1=On
		exclude: ["email","mail","password","passwd","pass"], //IDs of the fields you DON'T want to let users type Vietnamese in
		useControl: 1, //Use built-in control panel: 0=Off, 1=On. If you turn this on, you will have a floating control panel
		controlCSS: "21-ltr.css", //URL to avimr.css with relative path does not work
		controlHiddable: 1, //Allow the control to hide?
		controlHidden: 0 //Hide the control panel by default
	};
	//Set to true the methods which you want to be included in the AUTO method
	var AVIMAutoConfig = {
		telex: true,
		vni: true,
		viqr: false,
		viqrStar: false
	};
}
if('undefined' === typeof(controlHTML)) {
var controlHTML = '<span id="AVIMRControl"><p class="AVIMRControl">'
				+ '<input id="avimr_auto" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(0);" />Tự động'
				+ '<input id="avimr_telex" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(1);" />TELEX'
				+ '<input id="avimr_vni" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(2);" />VNI'
/*
 				+ '<input id="avimr_viqr" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(3);" />VIQR'
				+ '<input id="avimr_viqr2" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(4);" />VIQR*'
*/
				+ '<input id="avimr_off" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(-1);" />Tắt'
				+ '<span id="separator"></span>'
				+ '';
}

if(AVIMGlobalConfig.controlHiddable == 1)
	controlHTML += '<div class="AVIMRControl_r"><a id="AVIMRlink" onclick="{ document.getElementById(' + "'AVIMRControl').style.display='none'; AVIMObj.setHidden(); }" + '">[Ẩn (Alt+F12)]</a></div>';
	controlHTML += '</p></span>';

function AVIM(){this.radioID="avimr_auto,avimr_telex,avimr_vni,avimr_viqr,avimr_viqr2,avimr_off,avimr_ckspell,avimr_daucu".split(",");this.attached=[];this.changed=false;this.agt=navigator.userAgent.toLowerCase();this.alphabet="QWERTYUIOPASDFGHJKLZXCVBNM ";this.support=true;this.ver=0;this.specialChange=false;this.is_ie=((this.agt.indexOf("msie")!=-1)&&(this.agt.indexOf("opera")==-1));this.is_opera=false;this.isKHTML=false;this.kl=0;this.skey=[97,226,259,101,234,105,111,244,417,117,432,121,65,194,258,69,202,73,79,212,416,85,431,89];this.fID=document.getElementsByTagName("iframe");this.range=null;this.whit=false;this.db1=[273,272];this.ds1=["d","D"];this.os1="o,O,ơ,Ơ,ó,Ó,ò,Ò,ọ,Ọ,ỏ,Ỏ,õ,Õ,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ".split(",");this.ob1="ô,Ô,ô,Ô,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ".split(",");this.mocs1="o,O,ô,Ô,u,U,ó,Ó,ò,Ò,ọ,Ọ,ỏ,Ỏ,õ,Õ,ú,Ú,ù,Ù,ụ,Ụ,ủ,Ủ,ũ,Ũ,ố,Ố,ồ,Ồ,ộ,Ộ,ổ,Ổ,ỗ,Ỗ".split(",");this.mocb1="ơ,Ơ,ơ,Ơ,ư,Ư,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ,ứ,Ứ,ừ,Ừ,ự,Ự,ử,Ử,ữ,Ữ,ớ,Ớ,ờ,Ờ,ợ,Ợ,ở,Ở,ỡ,Ỡ".split(",");this.trangs1="a,A,â,Â,á,Á,à,À,ạ,Ạ,ả,Ả,ã,Ã,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ".split(",");this.trangb1="ă,Ă,ă,Ă,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ".split(",");this.as1="a,A,ă,Ă,á,Á,à,À,ạ,Ạ,ả,Ả,ã,Ã,ắ,Ắ,ằ,Ằ,ặ,Ặ,ẳ,Ẳ,ẵ,Ẵ,ế,Ế,ề,Ề,ệ,Ệ,ể,Ể,ễ,Ễ".split(",");this.ab1="â,Â,â,Â,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ,ấ,Ấ,ầ,Ầ,ậ,Ậ,ẩ,Ẩ,ẫ,Ẫ,é,É,è,È,ẹ,Ẹ,ẻ,Ẻ,ẽ,Ẽ".split(",");this.es1="e,E,é,É,è,È,ẹ,Ẹ,ẻ,Ẻ,ẽ,Ẽ".split(",");this.eb1="ê,Ê,ế,Ế,ề,Ề,ệ,Ệ,ể,Ể,ễ,Ễ".split(",");this.english="ĐÂĂƠƯÊÔ";this.lowen="đâăơưêô";this.arA="á,à,ả,ã,ạ,a,Á,À,Ả,Ã,Ạ,A".split(",");this.mocrA="ó,ò,ỏ,õ,ọ,o,ú,ù,ủ,ũ,ụ,u,Ó,Ò,Ỏ,Õ,Ọ,O,Ú,Ù,Ủ,Ũ,Ụ,U".split(",");this.erA="é,è,ẻ,ẽ,ẹ,e,É,È,Ẻ,Ẽ,Ẹ,E".split(",");this.orA="ó,ò,ỏ,õ,ọ,o,Ó,Ò,Ỏ,Õ,Ọ,O".split(",");this.aA="ấ,ầ,ẩ,ẫ,ậ,â,Ấ,Ầ,Ẩ,Ẫ,Ậ,Â".split(",");this.oA="ố,ồ,ổ,ỗ,ộ,ô,Ố,Ồ,Ổ,Ỗ,Ộ,Ô".split(",");this.mocA="ớ,ờ,ở,ỡ,ợ,ơ,ứ,ừ,ử,ữ,ự,ư,Ớ,Ờ,Ở,Ỡ,Ợ,Ơ,Ứ,Ừ,Ử,Ữ,Ự,Ư".split(",");this.trangA="ắ,ằ,ẳ,ẵ,ặ,ă,Ắ,Ằ,Ẳ,Ẵ,Ặ,Ă".split(",");this.eA="ế,ề,ể,ễ,ệ,ê,Ế,Ề,Ể,Ễ,Ệ,Ê".split(",");this.oA="ố,ồ,ổ,ỗ,ộ,ô,Ố,Ồ,Ổ,Ỗ,Ộ,Ô".split(",");this.skey2="a,a,a,e,e,i,o,o,o,u,u,y,A,A,A,E,E,I,O,O,O,U,U,Y".split(",");this.fcc=function(a){return String.fromCharCode(a)};this.getEL=function(a){return document.getElementById(a)};this.getSF=function(){var b=[],a;for(a=0;a<this.skey.length;a++){b[b.length]=this.fcc(this.skey[a])}return b};if(AVIMGlobalConfig.useControl){this.css=document.createElement("link");this.css.rel="stylesheet";this.css.type="text/css";this.css.href=AVIMGlobalConfig.controlCSS;document.getElementsByTagName("head")[0].appendChild(this.css);document.write(controlHTML);if(AVIMGlobalConfig.controlHidden){document.getElementById("AVIMRControl").style.display="none"}}if(!this.is_ie){if(this.agt.indexOf("opera")>=0){this.operaV=this.agt.split(" ");this.operaVersion=parseInt(this.operaV[this.operaV.length-1]);if(this.operaVersion>=8){this.is_opera=true}else{this.operaV=this.operaV[0].split("/");this.operaVersion=parseInt(this.operaV[1]);if(this.operaVersion>=8){this.is_opera=true}}}else{if(this.agt.indexOf("khtml")>=0){this.isKHTML=true}else{this.ver=this.agt.substr(this.agt.indexOf("rv:")+3);this.ver=parseFloat(this.ver.substr(0,this.ver.indexOf(" ")));if(this.agt.indexOf("mozilla")<0){this.ver=0}}}}this.nospell=function(a,b){return false};this.ckspell=function(n,y){n=this.unV(n);var u="UOU,IEU".split(","),l,v=true,d="UU,UOU,UOI,IEU,AO,IA,AI,AY,AU,AO".split(","),C="YEU";var H=true,M="UE,UYE,IU,EU,UY".split(","),g="AY,AU".split(","),G="UA",p=-1,B="IAO";var i=this.up(n),K=i,j=false,F="IO",L="OE,OO,AO,EO,IA,AI".split(","),A="OA",E,J,I;var m="AA,AE,EE,OU,YY,YI,IY,EY,EA,EI,II,IO,YO,YA,OOO".split(","),q=this.up(y),f,c=this.unV2(i);var e="B,C,D,G,H,K,L,M,N,P,Q,R,S,T,V,X".split(","),s="CH,GI,KH,NGH,GH,NG,NH,PH,QU,TH,TR".split(",");var h="CH,NG,NH".split(","),x="C,P,T,CH".split(","),o="C,M,N,P,T".split(",");var r="O,U,IE,Ô,Ơ,Ư,IÊ,Ă,Â,UYE,UYÊ,UO,ƯƠ,ƯO,UƠ,UA,ƯA,OĂ,OE,OÊ".split(","),D="UU,UOU".split(",");if(this.FRX.indexOf(q)>=0){for(J=0;J<x.length;J++){if(i.substr(i.length-x[J].length,x[J].length)==x[J]){return true}}}for(J=0;J<i.length;J++){if("FJZW1234567890".indexOf(i.substr(J,1))>=0){return true}for(I=0;I<m.length;I++){if(c.substr(J,m[I].length)==m[I]){for(l=0;l<u.length;l++){if(c.indexOf(u[l])>=0){v=false}}if(v&&((F.indexOf(m[I])<0)||(J<=0)||(c.substr(J-1,1)!="G"))){return true}}}}for(I=0;I<s.length;I++){if(K.indexOf(s[I])==0){K=K.substr(s[I].length);j=true;p=I;break}}if(!j){for(I=0;I<e.length;I++){if(K.indexOf(e[I])==0){K=K.substr(1);break}}}j=false;f=K;for(I=0;I<h.length;I++){if(K.substr(K.length-h[I].length)==h[I]){K=K.substr(0,K.length-h[I].length);if(I==2){for(l=0;l<r.length;l++){if(K==r[l]){return true}}if((q==this.trang)&&((K=="OA")||(K=="A"))){return true}}j=true;break}}if(!j){for(I=0;I<o.length;I++){if(K.substr(K.length-1)==o[I]){K=K.substr(0,K.length-1);break}}}if(K){for(J=0;J<s.length;J++){for(I=0;I<K.length;I++){if(K.substr(I,s[J].length)==s[J]){return true}}}for(J=0;J<e.length;J++){if(K.indexOf(e[J])>=0){return true}}}E=K.substr(0,1);if((p==3)&&((E=="A")||(E=="O")||(E=="U")||(E=="Y"))){return true}if((p==5)&&((E=="E")||(E=="I")||(E=="Y"))){return true}c=this.unV2(K);if(c==B){return true}if(K!=f){for(l=0;l<d.length;l++){if(c==d[l]){return true}}}if((K!=i)&&(c==C)){return true}if(q!=this.moc){for(l=0;l<D.length;l++){if(K==D[l]){return true}}}if((c.indexOf("UYE")>0)&&(q=="E")){H=false}if((this.them.indexOf(q)>=0)&&H){for(J=0;J<L.length;J++){if(c.indexOf(L[J])>=0){return true}}if(q!=this.trang){if(c==A){return true}}if((q==this.trang)&&(this.trang!="W")){if(c==G){return true}}if(q==this.moc){for(J=0;J<M.length;J++){if(c==M[J]){return true}}}if((q==this.moc)||(q==this.trang)){for(J=0;J<g.length;J++){if(c==g[J]){return true}}}}this.tw5=K;if((c.charCodeAt(0)==272)||(c.charCodeAt(0)==273)){if(c.length>4){return true}}else{if(c.length>3){return true}}return false};this.noCookie=function(){};this.doSetCookie=function(){var a=";expires="+new Date(11245711156480).toGMTString()+";path=/";document.cookie="AVIMR_on_off="+AVIMGlobalConfig.onOff+a;document.cookie="AVIMR_method="+AVIMGlobalConfig.method+a;document.cookie="AVIMR_ckspell="+AVIMGlobalConfig.ckSpell+a;document.cookie="AVIMR_daucu="+AVIMGlobalConfig.oldAccent+a;if(AVIMGlobalConfig.useControl==1&&AVIMGlobalConfig.controlHiddable==1){document.cookie="AVIMR_hidden="+AVIMGlobalConfig.controlHidden+a}};this.doGetCookie=function(){var a=document.cookie,c=/AVIMR_method/.test(a),e,b,d=a.split(";");if(!c||(a.indexOf("AVIMR_ckspell")<0)){this.setCookie();return}for(b=0;b<d.length;b++){e=d[b].split("=");e[0]=e[0].replace(/^\s+/g,"");e[1]=parseInt(e[1]);if(e[0]=="AVIMR_on_off"){AVIMGlobalConfig.onOff=e[1]}else{if(e[0]=="AVIMR_method"){AVIMGlobalConfig.method=e[1]}else{if(e[0]=="AVIMR_ckspell"){if(e[1]==0){AVIMGlobalConfig.ckSpell=0;this.spellerr=this.nospell}else{AVIMGlobalConfig.ckSpell=1;this.spellerr=this.ckspell}}else{if(e[0]=="AVIMR_daucu"){AVIMGlobalConfig.oldAccent=parseInt(e[1])}else{if(e[0]=="AVIMR_hidden"){AVIMGlobalConfig.controlHidden=parseInt(e[1]);document.getElementById("AVIMRControl").style.display=(AVIMGlobalConfig.controlHidden==0||AVIMGlobalConfig.controlHiddable==0)?"block":"none"}}}}}}};if(AVIMGlobalConfig.useCookie==1){this.setCookie=this.doSetCookie;this.getCookie=this.doGetCookie}else{this.setCookie=this.noCookie;this.getCookie=this.noCookie}this.setMethod=function(a){if(a==-1){AVIMGlobalConfig.onOff=0;if(this.getEL(this.radioID[5])){this.getEL(this.radioID[5]).checked=true}}else{AVIMGlobalConfig.onOff=1;AVIMGlobalConfig.method=a;if(this.getEL(this.radioID[a])){this.getEL(this.radioID[a]).checked=true}}this.setSpell(AVIMGlobalConfig.ckSpell);this.setDauCu(AVIMGlobalConfig.oldAccent);this.setCookie()};this.setDauCu=function(a){if(typeof(a)=="number"){AVIMGlobalConfig.oldAccent=a;if(this.getEL(this.radioID[7])){this.getEL(this.radioID[7]).checked=a}}else{AVIMGlobalConfig.oldAccent=(a.checked)?1:0}this.setCookie()};this.setHidden=function(){AVIMGlobalConfig.controlHidden=(document.getElementById("AVIMRControl").style.display=="block")?0:1;this.setCookie()};this.setSpell=function(a){if(typeof(a)=="number"){this.spellerr=(a==1)?this.ckspell:this.nospell;if(this.getEL(this.radioID[6])){this.getEL(this.radioID[6]).checked=a}}else{if(a.checked){this.spellerr=this.ckspell;AVIMGlobalConfig.ckSpell=1}else{this.spellerr=this.nospell;AVIMGlobalConfig.ckSpell=0}}this.setCookie()};if(this.is_ie||(this.ver>=1.3)||this.is_opera||this.isKHTML){this.getCookie();if(AVIMGlobalConfig.onOff==0){this.setMethod(-1)}else{this.setMethod(AVIMGlobalConfig.method)}this.setSpell(AVIMGlobalConfig.ckSpell);this.setDauCu(AVIMGlobalConfig.oldAccent)}else{this.support=false}this.mozGetText=function(d){var b,e,a="",c=1;b=(d.data)?d.data:d.value;if(b.length<=0){return false}if(!d.data){if(!d.setSelectionRange){return false}e=d.selectionStart}else{e=d.pos}if(d.selectionStart!=d.selectionEnd){return["",e]}while(1){if(e-c<0){break}else{if(this.notWord(b.substr(e-c,1))){if(b.substr(e-c,1)=="\\"){a=b.substr(e-c,1)+a}break}else{a=b.substr(e-c,1)+a}}c++}return[a,e]};this.ieGetText=function(b){var c=b.document.selection.createRange(),a="";if(c.text){c.text=""}else{while(1){c.moveStart("character",-1);if(a.length==c.text.length){break}a=c.text;if(this.notWord(a.charAt(0))){if(a.charCodeAt(0)==13){a=a.substr(2)}else{if(a.charAt(0)!="\\"){a=a.substr(1)}}break}}}if(a.length){c.collapse(false);c.moveStart("character",-a.length);b.cW=c.duplicate();return b}else{return false}};this.start=function(l,v){var i="",c=AVIMGlobalConfig.method,e=AVIMGlobalConfig.ckSpell,t,u=false,s=false,q=false;this.oc=l;var d="D,A,E,O,W,W".split(","),j="9,6,6,6,7,8".split(","),n="D,^,^,^,+,(".split(","),o="D,^,^,^,*,(".split(","),r,h;if(c==0){var b=[],p=[AVIMAutoConfig.telex,AVIMAutoConfig.vni,AVIMAutoConfig.viqr,AVIMAutoConfig.viqrStar];var k=[d,j,n,o],m=[t,u,s,q],f=["DAWEO","6789","D^+(","D^*("];for(r=0;r<p.length;r++){if(p[r]){b[b.length]=k[r]}else{f[r]=""}}for(r=0;r<b.length;r++){m[r]=b[r]}t=m[0];u=m[1];s=m[2];q=m[3];this.D2=f.join();if(!t){return}}else{if(c==1){t=d;this.D2="DAWEO"}else{if(c==2){t=j;this.D2="6789"}else{if(c==3){t=n;this.D2="D^+("}else{if(c==4){t=o;this.D2="D^*("}}}}}if(!this.is_ie){v=this.fcc(v.which);i=this.mozGetText(l);if(!i||l.sel){return}if(this.D2.indexOf(this.up(v))>=0){h=true}else{h=false}this.main(i[0],v,i[1],t,h);if(!e){i=this.mozGetText(l)}if(i&&u&&!this.changed){this.main(i[0],v,i[1],u,h)}if(!e){i=this.mozGetText(l)}if(i&&s&&!this.changed){this.main(i[0],v,i[1],s,h)}if(!e){i=this.mozGetText(l)}if(i&&q&&!this.changed){this.main(i[0],v,i[1],q,h)}}else{l=this.ieGetText(l);if(l){var g=l.cW.text;i=this.main(g,v,0,t,false);if(u&&((i==g)||(typeof(i)=="undefined"))){i=this.main(g,v,0,u,false)}if(s&&((i==g)||(typeof(i)=="undefined"))){i=this.main(g,v,0,s,false)}if(q&&((i==g)||(typeof(i)=="undefined"))){i=this.main(g,v,0,q,false)}if(i){l.cW.text=i}}}if(this.D2.indexOf(this.up(v))>=0){if(!this.is_ie){i=this.mozGetText(l);if(!i){return}this.normC(i[0],v,i[1])}else{if(typeof(l)=="object"){l=this.ieGetText(l);if(l){i=l.cW.text;if(!this.changed){i+=v;this.changed=true}l.cW.text=i;i=this.normC(i,v,0);if(i){l=this.ieGetText(l);l.cW.text=i}}}}}};this.findC=function(q,D,J){var i=AVIMGlobalConfig.method;if(((i==3)||(i==4))&&(q.substr(q.length-1,1)=="\\")){return[1,D.charCodeAt(0)]}var A="",L,y="",a="",b="",e=[],x="ÂĂÊÔƠƯêâăơôư",H=0,B=false,n=this.up(q),K,F;var r=this.up(this.aA.join()+this.eA.join()+this.mocA.join()+this.trangA.join()+this.oA.join()+this.english),E,C;for(F=0;F<J.length;F++){if(this.nan(J[F])){A+=J[F]}else{A+=this.fcc(J[F])}}var u=this.up(D),G=this.repSign(D),p=this.up(this.unV2(this.unV(q))),m="ƯA,ƯU".split(",");if(this.DAWEO.indexOf(u)>=0){if(u==this.moc){if((p.indexOf("UU")>=0)&&(this.tw5!=m[1])){if(p.indexOf("UU")==(q.length-2)){L=2}else{return false}}else{if(p.indexOf("UOU")>=0){if(p.indexOf("UOU")==(q.length-3)){L=2}else{return false}}}}if(!L){for(F=1;F<=q.length;F++){y=q.substr(q.length-F,1);a=this.up(q.substr(q.length-F-1,1));C=this.up(y);for(E=0;E<m.length;E++){if((this.tw5==m[E])&&(this.tw5==this.unV(a+C))){B=true}}if(B){B=false;continue}if(A.indexOf(C)>=0){if(((u==this.moc)&&(this.unV(C)=="U")&&(this.up(this.unV(q.substr(q.length-F+1,1)))=="A"))||((u==this.trang)&&(this.unV(C)=="A")&&(this.unV(a)=="U"))){if(this.unV(C)=="U"){K=1}else{K=2}var o=this.up(q.substr(q.length-F-K,1));if(o!="Q"){L=F+K-1}else{if(u==this.trang){L=F}else{if(this.moc!=this.trang){return false}}}}else{L=F}if(!this.whit||(n.indexOf("Ư")<0)||(n.indexOf("W")<0)){break}}else{if(r.indexOf(C)>=0){if(u==this.D){if(y=="đ"){L=[F,"d"]}else{if(y=="Đ"){L=[F,"D"]}}}else{L=this.DAWEOF(y,u,F)}if(L){break}}}}}}if((u!=this.Z)&&(this.DAWEO.indexOf(u)<0)){var l=this.retKC(u);for(F=0;F<l.length;F++){b+=this.fcc(l[F])}}for(F=1;F<=q.length;F++){if(this.DAWEO.indexOf(u)<0){y=this.up(q.substr(q.length-F,1));a=this.up(q.substr(q.length-F-1,1));if(A.indexOf(y)>=0){if(y=="U"){if(a!="Q"){H++;e[e.length]=F}}else{if(y=="I"){if((a!="G")||(H<=0)){H++;e[e.length]=F}}else{H++;e[e.length]=F}}}else{if(u!=this.Z){for(E=0;E<G.length;E++){if(G[E]==q.charCodeAt(q.length-F)){if(this.spellerr(q,D)){return false}return[F,l[E%24]]}}for(E=0;E<l.length;E++){if(l[E]==q.charCodeAt(q.length-F)){return[F,this.fcc(this.skey[E])]}}}}}}if((u!=this.Z)&&(typeof(L)!="object")){if(this.spellerr(q,D)){return false}}if(this.DAWEO.indexOf(u)<0){for(F=1;F<=q.length;F++){if((u!=this.Z)&&(x.indexOf(q.substr(q.length-F,1))>=0)){return F}else{if(b.indexOf(q.substr(q.length-F,1))>=0){for(E=0;E<l.length;E++){if(q.substr(q.length-F,1).charCodeAt(0)==l[E]){return[F,this.fcc(this.skey[E])]}}}}}}if(L){return L}if((H==1)||(u==this.Z)){return e[0]}else{if(H==2){var t=2;if(q.substr(q.length-1)==" "){t=3}var j=this.up(q.substr(q.length-t,2));if((AVIMGlobalConfig.oldAccent==0)&&((j=="UY")||(j=="OA")||(j=="OE"))){return e[0]}var z=0,f,d="BCD"+this.fcc(272)+"GHKLMNPQRSTVX",I="CH,GI,KH,NGH,GH,NG,NH,PH,QU,TH,TR".split(",");for(E=1;E<=q.length;E++){f=false;for(F=0;F<I.length;F++){if(this.up(q.substr(q.length-E-I[F].length+1,I[F].length)).indexOf(I[F])>=0){z++;f=true;if(I[F]!="NGH"){E++}else{E+=2}}}if(!f){if(d.indexOf(this.up(q.substr(q.length-E,1)))>=0){z++}else{break}}}if((z==1)||(z==2)){return e[0]}else{return e[1]}}else{if(H==3){return e[1]}else{return false}}}};this.ie_replaceChar=function(a,f,e){var d="",b=0;if(isNaN(e)){b=this.up(e)}if(this.whit&&(this.up(a.substr(a.length-f-1,1))=="U")&&(f!=1)&&(this.up(a.substr(a.length-f-2,1))!="Q")){this.whit=false;if((this.up(this.unV(this.fcc(e)))=="Ơ")||(b=="O")){if(a.substr(a.length-f-1,1)=="u"){d=this.fcc(432)}else{d=this.fcc(431)}}if(b=="O"){if(e=="o"){e=417}else{e=416}}}if(!isNaN(e)){this.changed=true;d+=this.fcc(e);return a.substr(0,a.length-f-d.length+1)+d+a.substr(a.length-f+1)}else{return a.substr(0,a.length-f)+e+a.substr(a.length-f+1)}};this.replaceChar=function(b,i,h){var g=false;if(!this.nan(h)){var f=this.fcc(h),e=this.up(this.unV(this.fcc(h)));this.changed=true}else{var f=h;if((this.up(h)=="O")&&this.whit){g=true}}if(!b.data){var d=b.selectionStart,j=b.scrollTop;if((this.up(b.value.substr(i-1,1))=="U")&&(i<d-1)&&(this.up(b.value.substr(i-2,1))!="Q")){if((e=="Ơ")||g){if(b.value.substr(i-1,1)=="u"){var a=this.fcc(432)}else{var a=this.fcc(431)}}if(g){this.changed=true;if(h=="o"){f="ơ"}else{f="Ơ"}}}b.value=b.value.substr(0,i)+f+b.value.substr(i+1);if(a){b.value=b.value.substr(0,i-1)+a+b.value.substr(i)}b.setSelectionRange(d,d);b.scrollTop=j}else{if((this.up(b.data.substr(i-1,1))=="U")&&(i<b.pos-1)){if((e=="Ơ")||g){if(b.data.substr(i-1,1)=="u"){var a=this.fcc(432)}else{var a=this.fcc(431)}}if(g){this.changed=true;if(h=="o"){f="ơ"}else{f="Ơ"}}}b.deleteData(i,1);b.insertData(i,f);if(a){b.deleteData(i-1,1);b.insertData(i-1,a)}}if(this.whit){this.whit=false}};this.tr=function(d,o,j,h,e){var a,n=this.findC(o,d,h),f;if(n){if(n[1]){if(this.is_ie){return this.ie_replaceChar(o,n[0],n[1])}else{return this.replaceChar(this.oc,e-n[0],n[1])}}else{var l,b=o.substr(o.length-n,1),m;a=h;for(f=0;f<a.length;f++){if(this.nan(a[f])||(a[f]=="e")){m=b}else{m=b.charCodeAt(0)}if(m==a[f]){if(!this.nan(j[f])){l=j[f]}else{l=j[f].charCodeAt(0)}if(this.is_ie){return this.ie_replaceChar(o,n,l)}else{return this.replaceChar(this.oc,e-n,l)}}}}}return false};this.main=function(s,d,e,q,r){var o=this.up(d),v=[this.db1,this.ab1,this.eb1,this.ob1,this.mocb1,this.trangb1],p=false,u="d,D,a,A,a,A,o,O,u,U,e,E,o,O".split(",");var c=[this.ds1,this.as1,this.es1,this.os1,this.mocs1,this.trangs1],n=[],l=[],b=AVIMGlobalConfig.method,f,j;if((b==2)||((b==0)&&(q[0]=="9"))){this.DAWEO="6789";this.SFJRX="12534";this.S="1";this.F="2";this.J="5";this.R="3";this.X="4";this.Z="0";this.D="9";this.FRX="234";this.AEO="6";this.moc="7";this.trang="8";this.them="678";this.A="^";this.E="^";this.O="^"}else{if((b==3)||((b==0)&&(q[4]=="+"))){this.DAWEO="^+(D";this.SFJRX="'`.?~";this.S="'";this.F="`";this.J=".";this.R="?";this.X="~";this.Z="-";this.D="D";this.FRX="`?~";this.AEO="^";this.moc="+";this.trang="(";this.them="^+(";this.A="^";this.E="^";this.O="^"}else{if((b==4)||((b==0)&&(q[4]=="*"))){this.DAWEO="^*(D";this.SFJRX="'`.?~";this.S="'";this.F="`";this.J=".";this.R="?";this.X="~";this.Z="-";this.D="D";this.FRX="`?~";this.AEO="^";this.moc="*";this.trang="(";this.them="^*(";this.A="^";this.E="^";this.O="^"}else{if((b==1)||((b==0)&&(q[0]=="D"))){this.SFJRX="SFJRX";this.DAWEO="DAWEO";this.D="D";this.S="S";this.F="F";this.J="J";this.R="R";this.X="X";this.Z="Z";this.FRX="FRX";this.them="AOEW";this.trang="W";this.moc="W";this.A="A";this.E="E";this.O="O"}}}}if(this.SFJRX.indexOf(o)>=0){var m=this.sr(s,d,e);p=true;if(m){return m}}else{if(o==this.Z){l=this.repSign(null);for(f=0;f<this.english.length;f++){l[l.length]=this.lowen.charCodeAt(f);l[l.length]=this.english.charCodeAt(f)}for(f=0;f<5;f++){for(j=0;j<this.skey.length;j++){n[n.length]=this.skey[j]}}for(f=0;f<u.length;f++){n[n.length]=u[f]}p=true}else{for(f=0;f<q.length;f++){if(q[f]==o){p=true;n=n.concat(v[f]);l=l.concat(c[f])}}}}if(o==this.moc){this.whit=true}if(!p){if(r){return}else{return this.normC(s,d,e)}}return this.DAWEOZ(d,s,n,l,e,o)};this.DAWEOZ=function(b,a,f,e,c,d){if((this.DAWEO.indexOf(d)>=0)||(this.Z.indexOf(d)>=0)){return this.tr(b,a,f,e,c)}};this.normC=function(s,e,l){var o=this.up(e),v=this.repSign(null),t,p,f,m,b=(e.charCodeAt(0)==32)?true:false;if(!this.is_ie&&b){return}for(f=1;f<=s.length;f++){for(m=0;m<v.length;m++){if(v[m]==s.charCodeAt(s.length-f)){if(m<=23){t=this.S}else{if(m<=47){t=this.F}else{if(m<=71){t=this.J}else{if(m<=95){t=this.R}else{t=this.X}}}}p=this.skey[m%24];if((this.alphabet.indexOf(o)<0)&&(this.D2.indexOf(o)<0)){return s}s=this.unV(s);if(!b&&!this.changed){s+=e}if(!this.is_ie){var d=this.oc.selectionStart,q=d;if(!this.changed){var x=this.oc.scrollTop;q+=e.length;if(!this.oc.data){this.oc.value=this.oc.value.substr(0,d)+e+this.oc.value.substr(this.oc.selectionEnd);this.changed=true;this.oc.scrollTop=x}else{this.oc.insertData(this.oc.pos,e);this.oc.pos++;this.range.setEnd(this.oc,this.oc.pos);this.specialChange=true}}if(!this.oc.data){this.oc.setSelectionRange(q,q)}if(!this.ckspell(s,t)){this.replaceChar(this.oc,l-f,p);if(!this.oc.data){var r=[this.D];this.main(s,t,q,r,false)}else{var g=this.mozGetText(this.oc),r=[this.D];this.main(g[0],t,g[1],r,false)}}}else{var n=this.sr(s,t,0);if(b&&n){n+=this.fcc(32)}if(n){return n}}}}}};this.DAWEOF=function(c,e,f){var h=[f],l=[this.A,this.moc,this.trang,this.E,this.O],i,j;var d=[this.aA,this.mocA,this.trangA,this.eA,this.oA],b=[this.arA,this.mocrA,this.arA,this.erA,this.orA];for(j=0;j<l.length;j++){if(e==l[j]){for(i=0;i<d[j].length;i++){if(c==d[j][i]){h[1]=b[j][i]}}}}if(h[1]){return h}else{return false}};this.retKC=function(a){if(a==this.S){return[225,7845,7855,233,7871,237,243,7889,7899,250,7913,253,193,7844,7854,201,7870,205,211,7888,7898,218,7912,221]}if(a==this.F){return[224,7847,7857,232,7873,236,242,7891,7901,249,7915,7923,192,7846,7856,200,7872,204,210,7890,7900,217,7914,7922]}if(a==this.J){return[7841,7853,7863,7865,7879,7883,7885,7897,7907,7909,7921,7925,7840,7852,7862,7864,7878,7882,7884,7896,7906,7908,7920,7924]}if(a==this.R){return[7843,7849,7859,7867,7875,7881,7887,7893,7903,7911,7917,7927,7842,7848,7858,7866,7874,7880,7886,7892,7902,7910,7916,7926]}if(a==this.X){return[227,7851,7861,7869,7877,297,245,7895,7905,361,7919,7929,195,7850,7860,7868,7876,296,213,7894,7904,360,7918,7928]}};this.unV=function(e){var f=this.repSign(null),c,d;for(d=1;d<=e.length;d++){for(c=0;c<f.length;c++){if(f[c]==e.charCodeAt(e.length-d)){e=e.substr(0,e.length-d)+this.fcc(this.skey[c%24])+e.substr(e.length-d+1)}}}return e};this.unV2=function(e){var d,c;for(d=1;d<=e.length;d++){for(c=0;c<this.skey.length;c++){if(this.skey[c]==e.charCodeAt(e.length-d)){e=e.substr(0,e.length-d)+this.skey2[c]+e.substr(e.length-d+1)}}}return e};this.repSign=function(e){var g=[],f=[],d,c;for(d=0;d<5;d++){if((e==null)||(this.SFJRX.substr(d,1)!=this.up(e))){g=this.retKC(this.SFJRX.substr(d,1));for(c=0;c<g.length;c++){f[f.length]=g[c]}}}return f};this.sr=function(a,b,d){var e=this.getSF(),g=this.findC(a,b,e);if(g){if(g[1]){if(!this.is_ie){this.replaceChar(this.oc,d-g[0],g[1])}else{return this.ie_replaceChar(a,g[0],g[1])}}else{var f=this.retUni(a,b,g);if(!this.is_ie){this.replaceChar(this.oc,d-g,f)}else{return this.ie_replaceChar(a,g,f)}}}return false};this.retUni=function(i,b,g){var j=this.retKC(this.up(b)),d,e,f=i.charCodeAt(i.length-g),h,l=this.fcc(f);for(h=0;h<this.skey.length;h++){if(this.skey[h]==f){if(h<12){e=h;d=h+12}else{e=h-12;d=h}if(l!=this.up(l)){return j[e]}return j[d]}}};this.ifInit=function(a){var b=a.getSelection();this.range=b?b.getRangeAt(0):document.createRange()};this.ifMoz=function(g){var d=g.which,f=this.AVIM,a=g.target.parentNode.wi;if(typeof(a)=="undefined"){a=g.target.parentNode.parentNode.wi}if(g.ctrlKey||(g.altKey&&(d!=92)&&(d!=126))){return}f.ifInit(a);var c=f.range.endContainer,b;f.sk=f.fcc(d);f.saveStr="";if(f.checkCode(d)||!f.range.startOffset||(typeof(c.data)=="undefined")){return}c.sel=false;if(c.data){f.saveStr=c.data.substr(f.range.endOffset);if(f.range.startOffset!=f.range.endOffset){c.sel=true}c.deleteData(f.range.startOffset,c.data.length)}f.range.setEnd(c,f.range.endOffset);f.range.setStart(c,0);if(!c.data){return}c.value=c.data;c.pos=c.data.length;c.which=d;f.start(c,g);c.insertData(c.data.length,f.saveStr);b=c.data.length-f.saveStr.length+f.kl;f.range.setEnd(c,b);f.range.setStart(c,b);f.kl=0;if(f.specialChange){f.specialChange=false;f.changed=false;c.deleteData(c.pos-1,1)}if(f.changed){f.changed=false;g.preventDefault()}};this.FKeyPress=function(){var a=this.findF();this.sk=this.fcc(a.event.keyCode);if(this.checkCode(a.event.keyCode)||(a.event.ctrlKey&&(a.event.keyCode!=92)&&(a.event.keyCode!=126))){return}this.start(a,this.sk)};this.checkCode=function(a){if(((AVIMGlobalConfig.onOff==0)||((a<45)&&(a!=42)&&(a!=32)&&(a!=39)&&(a!=40)&&(a!=43))||(a==145)||(a==255))){return true}};this.notWord=function(a){var b=" \r\n#,\\;.:-_()<>+-*/=?!\"$%{}[]'~|^@&\t"+this.fcc(160);return(b.indexOf(a)>=0)};this.nan=function(a){if(isNaN(a)||(a=="e")){return true}else{return false}};this.up=function(a){a=a.toUpperCase();if(this.isKHTML){var d="êôơâăưếốớấắứềồờầằừễỗỡẫẵữệộợậặự",b="ÊÔƠÂĂƯẾỐỚẤẮỨỀỒỜẦẰỪỄỖỠẪẴỮỆỘỢẶỰ",c,e;for(c=0;c<a.length;c++){e=d.indexOf(a.substr(c,1));if(e>=0){a=a.substr(0,c)+b.substr(e,1)+a.substr(c+1)}}}return a};this.findIgnore=function(b){var c=AVIMGlobalConfig.exclude,a;for(a=0;a<c.length;a++){if((b.id==c[a])&&(c[a].length>0)){return true}}};this.findF=function(){var a;for(a=0;a<this.fID.length;a++){if(this.findIgnore(this.fID[a])){return}this.frame=this.fID[a];if(typeof(this.frame)!="undefined"){try{if(this.frame.contentWindow.document&&this.frame.contentWindow.event){return this.frame.contentWindow}}catch(b){if(this.frame.document&&this.frame.event){return this.frame}}}}};this.keyPressHandler=function(c){if(!this.support){return}if(!this.is_ie){var a=c.target,b=c.which;if(c.ctrlKey){return}if(c.altKey&&(b!=92)&&(b!=126)){return}}else{var a=window.event.srcElement,b=window.event.keyCode;if(window.event.ctrlKey&&(b!=92)&&(b!=126)){return}}if(((a.type!="textarea")&&(a.type!="text"))||this.checkCode(b)){return}this.sk=this.fcc(b);if(this.findIgnore(a)){return}if(!this.is_ie){this.start(a,c)}else{this.start(a,this.sk)}if(this.changed){this.changed=false;return false}return true};this.attachEvt=function(d,a,c,b){if(this.is_ie){d.attachEvent("on"+a,c)}else{d.addEventListener(a,c,b)}};this.keyDownHandler=function(b){if("iframe"==b){this.frame=this.findF();var a=this.frame.event.keyCode}else{var a=(!this.is_ie)?b.which:window.event.keyCode}if((123==a)&&(1==AVIMGlobalConfig.controlHiddable)){document.getElementById("AVIMRControl").style.display=(document.getElementById("AVIMRControl").style.display=="none")?"block":"none";AVIMObj.setHidden()}}}function AVIMInit(b){var g=false;if(b.support&&!b.isKHTML){if(b.is_opera){if(b.operaVersion<9){return}}for(b.g=0;b.g<b.fID.length;b.g++){if(b.findIgnore(b.fID[b.g])){continue}if(b.is_ie){var f;try{b.frame=b.fID[b.g];if(typeof(b.frame)!="undefined"){if(b.frame.contentWindow.document){f=b.frame.contentWindow.document}else{if(b.frame.document){f=b.frame.document}}}}catch(d){}if(f&&((b.up(f.designMode)=="ON")||f.body.contentEditable)){for(var a=0;a<b.attached.length;a++){if(f==b.attached[a]){g=true;break}}if(!g){b.attached[b.attached.length]=f;b.attachEvt(f,"keydown",function(){b.keyDownHandler("iframe")},false);b.attachEvt(f,"keypress",function(){b.FKeyPress();if(b.changed){b.changed=false;return false}},false)}}}else{var c;try{b.wi=b.fID[b.g].contentWindow;c=b.wi.document;c.wi=b.wi;if(c&&(b.up(c.designMode)=="ON")){c.AVIM=b;b.attachEvt(c,"keypress",b.ifMoz,false);b.attachEvt(c,"keydown",b.keyDownHandler,false)}}catch(d){}}}}}AVIMObj=new AVIM();function AVIMAJAXFix(){var b=50;while(b<5000){setTimeout("AVIMInit(AVIMObj)",b);b+=50}}AVIMAJAXFix();AVIMObj.attachEvt(document,"mousedown",AVIMAJAXFix,false);AVIMObj.attachEvt(document,"keydown",AVIMObj.keyDownHandler,true);AVIMObj.attachEvt(document,"keypress",function(c){var b=AVIMObj.keyPressHandler(c);if(b==false){if(AVIMObj.is_ie){window.event.returnValue=false}else{c.preventDefault()}}},true);
var AVIMGlobalConfig = {
		method: 1, //Default input method: 0=AUTO, 1=TELEX, 2=VNI, 3=VIQR, 4=VIQR*
		onOff: 1, //Default state: 0=Off, 1=On
		ckSpell: 1, //Default Spell Check: 0=Off, 1=On
		oldAccent: 1, //0: New way (oa`, oe`, uy`), 1: The good old day (o`a, o`e, u`y)
		useCookie: 1, //Cookies: 0=Off, 1=On
		exclude: ['email','e-mail','mail','password','pass','recaptcha_response_field'], //IDs of the fields you DON'T want to let users type Vietnamese in
		useControl: 1, //Use built-in control panel: 0=Off, 1=On. If you turn this on, you will have a floating control panel
		controlCSS: "21-ltr.css", //URL to avimr.css
		controlHiddable: 1, //Allow the control to hide?
		controlHidden: 0 //Hide the control panel by default
	};
	//Set to true the methods which you want to be included in the AUTO method
	var AVIMAutoConfig = {
		telex: true, vni: true, viqr: false, viqrStar: false
	};

	var controlHTML = '<span id="AVIMRControl"><p class="AVIMRControl">'
					+ '<input id="avimr_auto" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(0);" />Tự động'
					+ '<input id="avimr_telex" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(1);" />TELEX'
					+ '<input id="avimr_vni" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(2);">VNI'
					+ '<input id="avimr_off" type="radio" name="AVIMMethod" onclick="AVIMObj.setMethod(-1);" />Tắt'
					+ '<span id="separator"></span>'
					;
