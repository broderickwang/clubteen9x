demo ngay tại hotrofm
bạn thông cảm dạo này mình có chút việc lên ko chup dc demo bạn nào chup demo hộ mình

đầu tiên các bạn xóa code fancy box cũ đang dùng nhé hihi

tiếp theo
đây là code

css

```

/*! fancyBox v2.1.0 fancyapps.com | fancyapps.com/fancybox/#license */
.fancybox-wrap,
.fancybox-skin,
.fancybox-outer,
.fancybox-inner,
.fancybox-image,
.fancybox-wrap iframe,
.fancybox-wrap object,
.fancybox-nav,
.fancybox-nav span,
.fancybox-tmp
{
padding: 0;
margin: 0;
border: 0;
outline: none;
vertical-align: top;
}

.fancybox-wrap {
position: absolute;
top: 0;
left: 0;
z-index: 999;
}

.fancybox-skin {
position: relative;
background: #f9f9f9;
color: #444;
text-shadow: none;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
}

.fancybox-opened {
z-index: 999;
}

.fancybox-opened .fancybox-skin {
-webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
-moz-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.fancybox-outer, .fancybox-inner {
position: relative;
}

.fancybox-inner {
overflow: hidden;
}

.fancybox-type-iframe .fancybox-inner {
-webkit-overflow-scrolling: touch;
}

.fancybox-error {
color: #444;
font: 14px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
margin: 0;
padding: 15px;
white-space: nowrap;
}

.fancybox-image, .fancybox-iframe {
display: block;
width: 100%;
height: 100%;
}

.fancybox-image {
max-width: 100%;
max-height: 100%;
}

#fancybox-loading, .fancybox-close, .fancybox-prev span, .fancybox-next span {
background-image: url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/fancybox_sprite.png');
}

#fancybox-loading {
position: fixed;
top: 50%;
left: 50%;
margin-top: -22px;
margin-left: -22px;
background-position: 0 -108px;
opacity: 0.8;
cursor: pointer;
z-index: 999;
}

#fancybox-loading div {
width: 44px;
height: 44px;
background: url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/fancybox_loading.gif') center center no-repeat;
}

.fancybox-close {
position: absolute;
top: -18px;
right: -18px;
width: 36px;
height: 36px;
cursor: pointer;
z-index: 999;
}

.fancybox-nav {
position: absolute;
top: 0;
width: 40%;
height: 100%;
cursor: pointer;
text-decoration: none;
background: transparent url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/blank.gif'); /* helps IE */
-webkit-tap-highlight-color: rgba(0,0,0,0);
z-index: 999;
}

.fancybox-prev {
left: 0;
}

.fancybox-next {
right: 0;
}

.fancybox-nav span {
position: absolute;
top: 50%;
width: 36px;
height: 34px;
margin-top: -18px;
cursor: pointer;
z-index: 999;
visibility: hidden;
}

.fancybox-prev span {
left: 10px;
background-position: 0 -36px;
}

.fancybox-next span {
right: 10px;
background-position: 0 -72px;
}

.fancybox-nav:hover span {
visibility: visible;
}

.fancybox-tmp {
position: absolute;
top: -9999px;
left: -9999px;
visibility: hidden;
}

/* Overlay helper */

.fancybox-lock {
overflow: hidden;
}

.fancybox-overlay {
position: absolute;
top: 0;
left: 0;
overflow: hidden;
display: none;
z-index: 999;
background: url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/fancybox_overlay.png');
}

.fancybox-overlay-fixed {
position: fixed;
bottom: 0;
right: 0;
}

.fancybox-lock .fancybox-overlay {
overflow: auto;
overflow-y: scroll;
}

/* Title helper */

.fancybox-title {
visibility: hidden;
font: normal 13px/20px "Helvetica Neue",Helvetica,Arial,sans-serif;
position: relative;
text-shadow: none;
z-index: 999;
}

.fancybox-opened .fancybox-title {
visibility: visible;
}

.fancybox-title-float-wrap {
position: absolute;
bottom: 0;
right: 50%;
margin-bottom: -35px;
z-index: 999;
text-align: center;
}

.fancybox-title-float-wrap .child {
display: inline-block;
margin-right: -100%;
padding: 2px 20px;
background: transparent; /* Fallback for web browsers that doesn't support RGBa */
background: rgba(0, 0, 0, 0.8);
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
border-radius: 15px;
text-shadow: 0 1px 2px #222;
color: #FFF;
font-weight: bold;
line-height: 24px;
white-space: nowrap;
}

.fancybox-title-outside-wrap {
position: relative;
margin-top: 10px;
color: #fff;
}

.fancybox-title-inside-wrap {
padding-top: 10px;
}

.fancybox-title-over-wrap {
position: absolute;
bottom: 0;
left: 0;
color: #fff;
padding: 10px;
background: #000;
background: rgba(0, 0, 0, .8);
}

.resizebox, .resizebox .resize_content, .resizebox .resize_border, .resizebox .resize_filler {display: none !important;}
a.fancybox img {cursor: url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/default/zoomin.cur'), pointer !important;}
#fancybox-overlay {cursor: url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/default/zoomout.cur'), pointer !important;}
a.fancybox .iconPlayer {background:url('http://scripts-giobanii.googlecode.com/svn/trunk/css/images/play-overlay.png') no-repeat scroll center center transparent;opacity:0.8;z-index:99;padding:40px !important;bottom: 150px;position: absolute;right: 200px;}
.post-entry div a.fancybox .iconPlayer {bottom: -20px;}
.post-entry .entry-content a.fancybox .iconPlayer {bottom: 150px;}

/*-- Bloque LogIn facyBox --*/
.login-box-fancybox {height: 145px; border-left-color: rgb(0, 0, 0); border-right-color: rgb(0, 0, 0); background-color: transparent; padding: 10px 20px 0; overflow: auto; width: 310px;}
.login-box-fancybox-content{width: 310px; height: 126px; background: none repeat scroll 0% 0% transparent;}
.login-form-fancybox {background: url("http://scripts-giobanii.googlecode.com/svn/trunk/css/images/lock.png") no-repeat scroll left center transparent;margin: 0 auto;padding: 20px 0 0 60px;width: 250px;}
.login-form-fancybox label {font-family: Verdana;display: block;font-size: 12px;padding-bottom: 5px;text-align: right;}
.login-form-fancybox label em {color: #000000;font-family: Verdana;display: block;float: left;font-style: normal;font-size: 12px;text-align: right;}
.login-form-fancybox input {border: 1px solid #CCCCCC;height: 22px;width: 146px;}
.login-form-fancybox input.submit {padding: 3px 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;font-size: 15px;border: 1px solid #CCCCCC;float: right;height: auto;width: auto;}
.login-form-fancybox input.submit:hover, .login-form-fancybox input.submit:focus {cursor:pointer;}
.login-form-fancybox input.submit:active, .login-box-fancybox .rpass a:active {position:relative; top: 1px;}
.login-box-fancybox .rpass a {text-decoration: none;}
.login-box-fancybox .rpass {text-align: right;background: url("http://scripts-giobanii.googlecode.com/svn/trunk/css/images/user_key.png") no-repeat scroll left top transparent;float: right;height: 16px;margin: -1px auto 0;padding: 2px 0 0 12px;width: 150px;}
/*-- Bloque LogIn facyBox --*/

```


cho vào head hoặc footer

```

<script src="http://hotro.4forum.biz/44483.js" type="text/javascript">

Unknown end tag for &lt;/script&gt;



```

code trên mình làm nhanh lên có thể có chút thiếu sót j đó
nếu ai phát hiện thì thông báo ngay để mình fix lỗi nhé hihi

44483.js ```
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(//,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(f(2C,1S,$,2a){"7m 7n";B W=$(2C),D=$(1S),F=$.l=f(){F.4D.4E(C,4F)},31=G,1q=1S.7o!==2a,2D=f(E){H E&&E.7p&&E 7q $},1T=f(1J){H 1J&&$.n(1J)==="7r"},2o=f(1J){H 1T(1J)&&1J.35(\'%\')>0},5D=f(1i){H(1i&&!(1i.1r.2E&&1i.1r.2E===\'4G\')&&((1i.4H&&1i.7s>1i.4H)||(1i.4I&&1i.7t>1i.4I)))},M=f(1w,2F){B 3Z=7u(1w,10);4(2F&&2o(1w)){3Z=F.36()[2F]/1K*3Z}H 1c.7v(3Z)},1L=f(1w,2F){H M(1w,2F)+\'41\'};$.1f(F,{7w:\'2.1.0\',3u:{1j:15,I:20,7:7x,m:7y,1k:1K,1l:1K,1s:4J,1t:4J,5E:t,1Z:z,2p:z,7z:!1q,42:!1q,43:t,3v:z,44:0.5,45:0.5,1m:\'1M\',5F:\'\',4K:t,3w:t,2G:z,4L:z,4M:t,4N:z,5G:7A,3a:3,5H:z,3b:t,2H:{7B:\'2b\',7C:{\'X-7D\':t}},U:{1m:\'1M\',3a:t},3c:{7E:\'7F\',7G:\'t\',7H:\'7I\'},1N:{1D:{13:\'17\',34:\'3d\',39:\'17\',40:\'3d\'},1U:{8:\'2c\',33:\'3e\',37:\'2c\',38:\'3e\'},2I:[27],46:[32],5I:[70]},O:{1D:\'17\',1U:\'2c\'},5J:t,J:0,n:G,k:G,r:G,S:G,2q:{q:\'<A Q="l-q" 7J="-1"><A Q="l-Z"><A Q="l-2d"><A Q="l-P"></A></A></A></A>\',21:\'<V Q="l-21" 1x="{k}" 4O="" />\',U:\'<U 3x="l-5K{4P}" 22="l-5K{4P}" Q="l-U" 7K="0" 7L="0" 7M="0"\'+($.5L.5M?\' 7N="t"\':\'\')+\'></U>\',3y:\'<p Q="l-3y">7O 7P r 7Q 7R 7S.<7T/>7U 4Q 7V 7W.</p>\',3w:\'<a S="7X" Q="l-2e l-2I" k="4R:;"></a>\',1D:\'<a S="7Y" Q="l-3z l-1D" k="4R:;"><1g></1g></a>\',1U:\'<a S="7Z" Q="l-3z l-1U" k="4R:;"><1g></1g></a>\'},4S:\'4T\',5N:47,5O:\'48\',5P:t,5Q:\'5R\',4U:\'4T\',5S:47,5T:\'48\',5U:t,5V:\'5W\',4V:\'1n\',5X:47,5Y:\'48\',5Z:\'60\',4W:\'1n\',61:47,62:\'48\',4X:\'63\',23:{Y:{2G:t,64:3A,65:t,14:{}},S:{n:\'66\'}},49:$.2r,4Y:$.2r,67:$.2r,3B:$.2r,4Z:$.2r,68:$.2r,51:$.2r,4a:$.2r},N:{},K:{},1d:G,j:G,6:G,1O:z,2f:z,2J:z,q:G,Z:G,2d:G,P:G,1y:{52:G,1O:z},3C:G,3D:G,3E:{},23:{},4D:f(N,K){4(!N){H}4(!$.80(K)){K={}}4(z===F.2I(t)){H}4(!$.81(N)){N=2D(N)?$(N).69():[N]}$.2g(N,f(i,T){B E={},k,S,r,n,16,4b,1E;4($.n(T)==="53"){4(T.82){T=$(T)}4(2D(T)){E={k:T.18(\'k\'),S:T.18(\'S\'),3F:t,T:T};4($.6a){$.1f(t,E,T.6a())}}L{E=T}}k=K.k||E.k||(1T(T)?T:G);S=K.S!==2a?K.S:E.S||\'\';r=K.r||E.r;n=r?\'2b\':(K.n||E.n);4(!n&&E.3F){n=T.24(\'l-n\');4(!n){16=T.25(\'Q\').4c(/l\\.(\\w+)/);n=16?16[1]:G}}4(1T(k)){4(!n){4(F.6b(k)){n=\'21\'}L 4(F.6c(k)){n=\'3c\'}L 4(k.83(0)===\'#\'){n=\'3G\'}L 4(1T(T)){n=\'2b\';r=T}}4(n===\'2H\'){4b=k.84(/\\s+/,2);k=4b.6d();1E=4b.6d()}}4(!r){4(n===\'3G\'){4(k){r=$(1T(k)?k.54(/.*(?=#[\\s]+$)/,\'\'):k)}L 4(E.3F){r=T}}L 4(n===\'2b\'){r=k}L 4(!n&&!k&&E.3F){n=\'3G\';r=T}}$.1f(E,{k:k,n:n,r:r,S:S,1E:1E});N[i]=E});F.K=$.1f(t,{},F.3u,K);4(K.1N!==2a){F.K.1N=K.1N?$.1f({},F.3u.1N,K.1N):z}F.N=N;H F.55(F.K.J)},3H:f(){B j=F.j;4(!j||z===F.11(\'49\')){H}F.3I();4(F.3C){F.3C.6e()}F.3C=G;4(F.3D){F.3D.4d=F.3D.4e=G}4(j.q){j.q.1P(t).11(\'2s\').1Q()}4(!F.6){F.11(\'4a\')}F.j=G},2I:f(6f){F.3H();4(z===F.11(\'51\')){H}F.56();4(!F.2f||6f===t){$(\'.l-q\').1P(t).11(\'2s\').1Q();F.57()}L{F.2f=F.2J=z;F.58=t;$(\'.l-2e, .l-3z\').1Q();F.q.1P(t,t).2K(\'l-59\');4(F.q.14(\'1V\')===\'1F\'){F.q.14(F.3J(t))}F.3E[F.6.5V]()}},46:f(2L){B 4f=f(){6g(F.1y.52)},5a=f(){4f();4(F.6&&F.1y.1O){F.1y.52=6h(F.1D,F.6.5G)}},1P=f(){4f();$(\'1a\').2M(\'.1y\');F.1y.1O=z;F.11(\'85\')},2h=f(){4(F.6&&(F.6.3b||F.6.J<F.N.1u-1)){F.1y.1O=t;$(\'1a\').1v({\'4Z.1y 4g.1y\':5a,\'49.1y 51.1y\':1P,\'4Y.1y\':4f});5a();F.11(\'86\')}};4(2L===t||(!F.1y.1O&&2L!==z)){2h()}L{1P()}},1D:f(O){B 6=F.6;4(6){4(!1T(O)){O=6.O.1D}F.3K(6.J+1,O,\'1D\')}},1U:f(O){B 6=F.6;4(6){4(!1T(O)){O=6.O.1U}F.3K(6.J-1,O,\'1U\')}},3K:f(J,O,2N){B 6=F.6;4(!6){H}J=M(J);F.O=O||6.O[(J>=6.J?\'1D\':\'1U\')];F.2N=2N||\'3K\';4(6.3b){4(J<0){J=6.N.1u+(J%6.N.1u)}J=J%6.N.1u}4(6.N[J]!==2a){F.3H();F.55(J)}},5b:f(e,4h){B 1e;4(F.2f){1e=F.3J(4h);4(e&&e.n===\'2O\'){6i 1e.1V;F.q.1P(t,t).3L(1e,3A)}L{F.q.14(1e)}}},2P:f(e){B n=(e&&e.n),4i=!n||n===\'6j\';4(4i){6g(31);31=G}4(!F.2f||31){H}4(4i||1q){F.q.87(\'1r\').2Q(\'l-2R\');F.11(\'4g\')}31=6h(f(){B 6=F.6;4(!6){H}F.q.2K(\'l-2R\');4(n!==\'2O\'){F.5c()}4(!(n===\'2O\'&&6.3f)){F.5b(e)}F.11(\'4g\');31=G},(1q?88:(4i?20:89)))},5I:f(2L){4(F.2f){F.6.43=$.n(2L)==="8a"?2L:!F.6.43;F.2P()}},3I:f(){D.2M(\'6k.12\');$(\'#l-6l\').1Q()},4j:f(){B 1i,R;F.3I();D.1v(\'6k.12\',f(e){4((e.6m||e.6n)===27){e.3M();F.3H()}});1i=$(\'<A 3x="l-6l"><A></A></A>\').26(F.3H).1W(\'1a\');4(!F.3u.1F){R=F.36();1i.14({1V:\'6o\',1h:(R.h*0.5)+R.y,17:(R.w*0.5)+R.x})}},36:f(){B 3g=F.6?F.6.3h:z,16={x:W.8b(),y:W.8c()};4(3g){16.w=3g[0].4H;16.h=3g[0].4I}L{16.w=1q&&2C.4k?2C.4k:W.7();16.h=1q&&2C.6p?2C.6p:W.m()}H 16},56:f(){4(F.q&&2D(F.q)){F.q.2M(\'.12\')}D.2M(\'.12\');W.2M(\'.12\')},6q:f(){B 6=F.6,1N;4(!6){H}W.1v(\'6j.12\'+(1q?\'\':\' 8d.12\')+(6.42&&!6.3h?\' 2O.12\':\'\'),F.2P);1N=6.1N;4(1N){D.1v(\'8e.12\',f(e){B 4l=e.6m||e.6n,1b=e.1b||e.8f;4(!e.6r&&!e.6s&&!e.6t&&!e.6u&&!(1b&&(1b.n||$(1b).2i(\'[8g]\')))){$.2g(1N,f(i,2S){4(6.N.1u>1&&2S[4l]!==2a){F[i](2S[4l]);e.3M();H z}4($.8h(4l,2S)>-1){F[i]();e.3M();H z}})}})}4($.6v.6w&&6.4M){F.q.1v(\'6w.12\',f(e,6x,5d,3N){B 1b=e.1b||G,1o=$(1b),4m=z;6y(1o.1u){4(4m||1o.2i(\'.l-Z\')||1o.2i(\'.l-q\')){2j}4m=5D(1o[0]);1o=$(1o).1o()}4(6x!==0&&!4m){4(F.N.1u>1&&!6.3f){4(3N>0||5d>0){F.1U(3N>0?\'3e\':\'17\')}L 4(3N<0||5d<0){F.1D(3N<0?\'3d\':\'2c\')}e.3M()}}})}},11:f(2t,o){B 5e,E=o||F.j||F.6;4(!E){H}4($.6z(E[2t])){5e=E[2t].4E(E,8i.8j.4n.8k(4F,1))}4(5e===z){H z}4(2t===\'49\'&&!F.2J){F.1O=z}4(E.23){$.2g(E.23,f(4o,K){4(K&&F.23[4o]&&$.6z(F.23[4o][2t])){F.23[4o][2t](K,E)}})}$.2t.11(2t+\'.12\')},6b:f(1J){H 1T(1J)&&1J.4c(/\\.(8l(e|g|8m)|3O|3P|8n|8o)((\\?|#).*)?$/i)},6c:f(1J){H 1T(1J)&&1J.4c(/\\.(3c)((\\?|#).*)?$/i)},55:f(J){B j={},E,k,n,I,1j;J=M(J);E=F.N[J]||G;4(!E){H z}j=$.1f(t,{},F.K,E);I=j.I;1j=j.1j;4($.n(I)===\'6A\'){j.I=[I,I,I,I]}4($.n(1j)===\'6A\'){j.1j=[1j,1j,1j,1j]}4(j.5H){$.1f(t,j,{3w:z,2G:z,4L:z,4K:z,4M:z,1N:G,23:{Y:{2G:z}}})}4(j.5E){j.2p=j.1Z=t}4(j.7===\'1M\'){j.2p=t}4(j.m===\'1M\'){j.1Z=t}j.N=F.N;j.J=J;F.j=j;4(z===F.11(\'4Y\')){F.j=G;H}n=j.n;k=j.k;4(!n){F.j=G;4(F.6&&F.2N&&F.2N!==\'3K\'){F.6.J=J;H F[F.2N](F.O)}H z}F.1O=t;4(n===\'21\'||n===\'3c\'){j.1Z=j.2p=z;j.1m=\'5f\'}4(n===\'21\'){j.3v=t}4(n===\'U\'&&1q){j.1m=\'2O\'}j.q=$(j.2q.q).2Q(\'l-\'+(1q?\'8p\':\'8q\')+\' l-n-\'+n+\' l-2R \'+j.5F).1W(j.1o);$.1f(j,{Z:$(\'.l-Z\',j.q),2d:$(\'.l-2d\',j.q),P:$(\'.l-P\',j.q)});$.2g(["8r","8s","8t","8u"],f(i,v){j.Z.14(\'1j\'+v,1L(j.1j[i]))});F.11(\'6B\');4(n===\'3G\'||n===\'2b\'){4(!j.r||!j.r.1u){H F.3Q(\'r\')}}L 4(!k){H F.3Q(\'k\')}4(n===\'21\'){F.6C()}L 4(n===\'2H\'){F.6D()}L 4(n===\'U\'){F.6E()}L{F.2T()}},3Q:f(n){$.1f(F.j,{n:\'2b\',2p:t,1Z:t,1k:0,1l:0,1m:\'6F\',8v:n,r:F.j.2q.3y});F.2T()},6C:f(){B V=F.3D=5g 5h();V.4d=f(){C.4d=C.4e=G;F.j.7=C.7;F.j.m=C.m;F.2T()};V.4e=f(){C.4d=C.4e=G;F.3Q(\'21\')};V.1x=F.j.k;4(V.3i===2a||!V.3i){F.4j()}},6D:f(){B j=F.j;F.4j();F.3C=$.2H($.1f({},j.2H,{8w:j.k,3y:f(6G,4p){4(F.j&&4p!==\'6e\'){F.3Q(\'2H\',6G)}L{F.3I()}},6H:f(24,4p){4(4p===\'6H\'){j.r=24;F.2T()}}}))},6E:f(){B j=F.j,U=$(j.2q.U.54(/\\{4P\\}/g,5g 8x().8y())).18(\'1m\',1q?\'1M\':j.U.1m).18(\'1x\',j.k);$(j.q).1v(\'2s\',f(){4Q{$(C).3j(\'U\').5i().18(\'1x\',\'//6I:8z\').5j().8A()}6J(e){}});4(j.U.3a){F.4j();U.8B(\'6K\',f(){$(C).24(\'4q\',1);4(!1q){$(C).1v(\'6K.12\',F.2P)}$(C).8C(\'.l-q\').7(\'1K%\').2K(\'l-2R\').5k();F.2T()})}j.r=U.1W(j.P);4(!j.U.3a){F.2T()}},6L:f(){B N=F.N,6=F.6,5l=N.1u,6M=6.3a?1c.2u(6.3a,5l-1):0,2e,i;8D(i=1;i<=6M;i+=1){2e=N[(6.J+i)%5l];4(2e.n===\'21\'&&2e.k){5g 5h().1x=2e.k}}},2T:f(){B j=F.j,1d=F.6,2U=\'l-2U\',6,r,n,1m,k,2V;F.3I();4(!j||F.1O===z){H}4(z===F.11(\'67\',j,1d)){j.q.1P(t).11(\'2s\').1Q();F.j=G;H}4(1d){F.11(\'68\',1d);1d.q.1P(t).2K(\'l-59\').3j(\'.l-2e, .l-3z\').1Q();4(1d.q.14(\'1V\')===\'1F\'){1d.q.14(F.3J(t))}}F.56();6=j;r=j.r;n=j.n;1m=j.1m;$.1f(F,{q:6.q,Z:6.Z,2d:6.2d,P:6.P,6:6,1d:1d});k=6.k;6N(n){2v\'3G\':2v\'2H\':2v\'2b\':4(6.1E){r=$(\'<A>\').2b(r).3j(6.1E)}L 4(2D(r)){4(!r.24(2U)){r.24(2U,$(\'<A Q="\'+2U+\'"></A>\').8E(r).5i())}r=r.5k().8F();6.q.1v(\'2s\',f(){4($(C).3j(r).1u){r.5i().8G(r.24(2U)).24(2U,z)}})}2j;2v\'21\':r=6.2q.21.54(\'{k}\',k);2j;2v\'3c\':r=\'<53 8H="8I:8J-8K-8L-8M-8N" 7="1K%" m="1K%"><4r 22="8O" 1w="\'+k+\'"></4r>\';2V=\'\';$.2g(6.3c,f(22,2S){r+=\'<4r 22="\'+22+\'" 1w="\'+2S+\'"></4r>\';2V+=\' \'+22+\'="\'+2S+\'"\'});r+=\'<2V 1x="\'+k+\'" n="8P/x-8Q-8R" 7="1K%" m="1K%"\'+2V+\'></2V></53>\';2j}4(!(2D(r)&&r.1o().2i(6.P))){6.P.5m(r)}F.11(\'3B\');6.P.14(\'2E\',1m===\'8S\'?\'2O\':(1m===\'6F\'?\'4G\':1m));F.5c();6.q.2K(\'l-2R\');6.1e=$.1f({},6.2F,F.3J(t));F.2f=z;F.j=G;F.6q();4(!F.2J){$(\'.l-q\').2W(6.q).1P(t).11(\'2s\').1Q()}L 4(1d.4X){F.3E[1d.4X]()}F.3E[F.2J?6.5Z:6.5Q]();F.6L()},5c:f(){B R=F.36(),6O=0,3f=z,3R=z,q=F.q,Z=F.Z,P=F.P,6=F.6,7=6.7,m=6.m,1k=6.1k,1l=6.1l,1s=6.1s,1t=6.1t,1m=6.1m,3S=6.5J?6.3k:0,I=6.I,5n=I[1]+I[3],5o=I[0]+I[2],1z,28,3l,3m,1X,1R,4s,4t,1p,2w,2k,3n,3T,U,1a;q.6P(Z).6P(P).7(\'1M\').m(\'1M\');1z=Z.6Q(t)-Z.7();28=Z.5p(t)-Z.m();3l=5n+1z;3m=5o+28;1X=2o(7)?(R.w-3l)*M(7)/1K:7;1R=2o(m)?(R.h-3m)*M(m)/1K:m;4(6.n===\'U\'){U=6.r;4(6.1Z&&U.24(\'4q\')===1){4Q{4(U[0].8T.1S.6R){P.7(1X).m(4J);1a=U.8U().3j(\'1a\');4(3S){1a.14(\'2E-x\',\'4G\')}1R=1a.m()}}6J(e){}}}L 4(6.2p||6.1Z){P.2Q(\'l-2R\');4(!6.2p){P.7(1X)}4(!6.1Z){P.m(1R)}4(6.2p){1X=P.7()}4(6.1Z){1R=P.m()}P.2K(\'l-2R\')}7=M(1X);m=M(1R);1p=1X/1R;1k=M(2o(1k)?M(1k,\'w\')-3l:1k);1s=M(2o(1s)?M(1s,\'w\')-3l:1s);1l=M(2o(1l)?M(1l,\'h\')-3m:1l);1t=M(2o(1t)?M(1t,\'h\')-3m:1t);4s=1s;4t=1t;3n=R.w-5n;3T=R.h-5o;4(6.3v){4(7>1s){7=1s;m=7/1p}4(m>1t){m=1t;7=m*1p}4(7<1k){7=1k;m=7/1p}4(m<1l){m=1l;7=m*1p}}L{7=1c.2x(1k,1c.2u(7,1s));m=1c.2x(1l,1c.2u(m,1t))}4(6.43){1s=1c.2u(R.w-3l,1s);1t=1c.2u(R.h-3m,1t);P.7(M(7)).m(M(m));q.7(M(7+1z));2w=q.7();2k=q.m();4(6.3v){6y((2w>3n||2k>3T)&&7>1k&&m>1l){4(6O++>19){2j}m=1c.2x(1l,1c.2u(1t,m-10));7=m*1p;4(7<1k){7=1k;m=7/1p}4(7>1s){7=1s;m=7/1p}P.7(M(7)).m(M(m));q.7(M(7+1z));2w=q.7();2k=q.m()}}L{7=1c.2x(1k,1c.2u(7,7-(2w-3n)));m=1c.2x(1l,1c.2u(m,m-(2k-3T)))}}4(3S&&1m===\'1M\'&&m<1R&&(7+1z+3S)<3n){7+=3S}P.7(M(7)).m(M(m));q.7(M(7+1z));2w=q.7();2k=q.m();3f=(2w>3n||2k>3T)&&7>1k&&m>1l;3R=6.3v?(7<4s&&m<4t&&7<1X&&m<1R):((7<4s||m<4t)&&(7<1X||m<1R));$.1f(6,{2F:{7:1L(2w),m:1L(2k)},1X:1X,1R:1R,3f:3f,3R:3R,1z:1z,28:28,3U:2k-Z.5p(t),4u:Z.m()-m});4(!U&&6.1Z&&m>1l&&m<1t&&!3R){P.m(\'1M\')}},3J:f(4h){B 6=F.6,R=F.36(),I=6.I,7=F.q.7()+I[1]+I[3],m=F.q.m()+I[0]+I[2],16={1V:\'6o\',1h:I[0],17:I[3]};4(6.42&&6.1F&&!4h&&m<=R.h&&7<=R.w){16.1V=\'1F\'}L 4(!6.3h){16.1h+=R.y;16.17+=R.x}16.1h=1L(1c.2x(16.1h,16.1h+((R.h-m)*6.44)));16.17=1L(1c.2x(16.17,16.17+((R.w-7)*6.45)));H 16},4v:f(){B 6=F.6;4(!6){H}F.2f=F.2J=t;F.q.2Q(\'l-59\').14(\'2E\',\'5f\');F.5b();4(6.2G||6.4L){F.P.14(\'6S\',\'6T\').1v(\'26.12\',f(e){4(!$(e.1b).2i(\'a\')&&!$(e.1b).1o().2i(\'a\')){F[6.2G?\'2I\':\'1D\']()}})}4(6.3w){$(6.2q.3w).1W(F.Z).1v(\'26.12\',F.2I)}4(6.4K&&F.N.1u>1){4(6.3b||6.J>0){$(6.2q.1U).1W(F.2d).1v(\'26.12\',F.1U)}4(6.3b||6.J<F.N.1u-1){$(6.2q.1D).1W(F.2d).1v(\'26.12\',F.1D)}}F.11(\'4Z\');4(!6.3b&&6.J===6.N.1u-1){F.46(z)}L 4(F.K.4N&&!F.1y.1O){F.K.4N=z;F.46()}},57:f(){B 6=F.6;$(\'.l-q\').1P(t).11(\'2s\').1Q();$.1f(F,{N:{},K:{},2N:z,6:G,1O:z,2J:z,2f:z,58:z,q:G,Z:G,2d:G,P:G});F.11(\'4a\',6)}});F.3E={5q:f(){B 6=F.6,T=6.T,1Y=6.1Y,1e={},7=50,m=50,28=6.28,1z=6.1z,R=F.36();4(!1Y&&6.3F&&T.2i(\':5f\')){1Y=T.3j(\'V:8V\');4(!1Y.1u){1Y=T}}4(2D(1Y)){1e=1Y.8W();4(1Y.2i(\'V\')){7=1Y.6Q();m=1Y.5p()}}L{1e.1h=R.y+(R.h-m)*6.44;1e.17=R.x+(R.w-7)*6.45}4(6.3h){1e.1h-=R.y;1e.17-=R.x}1e={1h:1L(1e.1h-28*6.44),17:1L(1e.17-1z*6.45),7:1L(7+1z),m:1L(m+28)};H 1e},3V:f(5r,2X){B 1p,1j,1w,25=2X.25,6=F.6,3U=6.3U,4u=6.4u;4(25===\'7\'||25===\'m\'){1p=2X.5j===2X.2h?1:(5r-2X.2h)/(2X.5j-2X.2h);4(F.58){1p=1-1p}1j=25===\'7\'?6.1z:6.28;1w=5r-1j;F.Z[25](M(25===\'7\'?1w:1w-(3U*1p)));F.P[25](M(25===\'7\'?1w:1w-(3U*1p)-(4u*1p)))}},5R:f(){B 6=F.6,1G=6.1e,1H=6.4S,1n=1H===\'1n\',1A=$.1f({2y:1},1G);6i 1A.1V;4(1n){1G=C.5q();4(6.5P){1G.2y=0.1}}L 4(1H===\'4T\'){1G.2y=0.1}F.q.14(1G).3L(1A,{4w:1H===\'3W\'?0:6.5N,4x:6.5O,3V:1n?C.3V:G,3i:F.4v})},5W:f(){B 6=F.6,1H=6.4U,1n=1H===\'1n\',1A={2y:0.1};4(1n){1A=C.5q();4(6.5U){1A.2y=0.1}}F.q.3L(1A,{4w:1H===\'3W\'?0:6.5S,4x:6.5T,3V:1n?C.3V:G,3i:F.57})},60:f(){B 6=F.6,1H=6.4V,1G=6.1e,1A={2y:1},O=F.O,2Y=3A,2z;1G.2y=0.1;4(1H===\'1n\'){2z=O===\'3e\'||O===\'3d\'?\'1h\':\'17\';4(O===\'3e\'||O===\'2c\'){1G[2z]=1L(M(1G[2z])-2Y);1A[2z]=\'+=\'+2Y+\'41\'}L{1G[2z]=1L(M(1G[2z])+2Y);1A[2z]=\'-=\'+2Y+\'41\'}}4(1H===\'3W\'){F.4v()}L{F.q.14(1G).3L(1A,{4w:6.5X,4x:6.5Y,3i:F.4v})}},63:f(){B 1d=F.1d,1H=1d.4W,1A={2y:0.1},O=F.O,2Y=3A;4(1H===\'1n\'){1A[O===\'3e\'||O===\'3d\'?\'1h\':\'17\']=(O===\'3d\'||O===\'17\'?\'-\':\'+\')+\'=\'+2Y+\'41\'}1d.q.3L(1A,{4w:1H===\'3W\'?0:1d.61,4x:1d.62,3i:f(){$(C).11(\'2s\').1Q()}})}};F.23.Y={Y:G,2P:f(){B 7=\'1K%\',3X;C.Y.7(7).m(\'1K%\');4($.5L.5M){3X=1c.2x(1S.8X.3X,1S.1a.3X);4(D.7()>3X){7=D.7()}}L 4(D.7()>W.7()){7=D.7()}C.Y.7(7).m(D.m())},6B:f(K,E){$(\'.l-Y\').1P(t,t);4(!C.Y){$.1f(C,{Y:$(\'<A Q="l-Y"></A>\').1W(E.1o),I:D.m()>W.m()||$(\'1a\').14(\'2E-y\')===\'2O\'?$(\'1a\').14(\'I-2c\'):z,1i:1S.8Y&&!1S.8Z?$(\'2b\'):$(\'1a\')})}4(E.1F&&!1q){C.Y.2Q(\'l-Y-1F\');4(E.42){C.Y.5m(E.q);E.3h=C.Y}}4(K.65===t){C.3B.4E(C,4F)}},3B:f(K,E){B Y=C.Y.2M(\'.12\').7(\'1M\').m(\'1M\').14(K.14);4(K.2G){Y.1v(\'26.12\',f(e){4($(e.1b).90(\'l-Y\')){F.2I()}})}4(E.1F&&!1q){4(E.3h){C.1i.2Q(\'l-3g\');4(C.I!==z){$(\'1a\').14(\'I-2c\',M(C.I)+E.3k)}}}L{C.2P()}Y.5k()},4g:f(K,E){4(!E.1F||1q){C.2P()}},4a:f(K){B 29=C,6U=K.64||0;4(29.Y&&!F.1O){29.Y.91(6U||0,f(){$(\'1a\').14(\'I-2c\',29.I);29.1i.2K(\'l-3g\');29.Y.1Q();29.Y=G})}}};F.23.S={3B:f(K){B 2Z=F.6.S,n=K.n,S,1b;4(!1T(2Z)||$.92(2Z)===\'\'){H}S=$(\'<A Q="l-S l-S-\'+n+\'-q">\'+2Z+\'</A>\');6N(n){2v\'93\':1b=F.Z;2j;2v\'94\':1b=F.q;2j;2v\'95\':1b=F.P;2j;96:1b=F.Z;S.1W(\'1a\').7(S.7()).97(\'<1g Q="4y"></1g>\');F.6.I[2]+=1c.98(M(S.14(\'I-9a\')));2j}4(K.1V===\'1h\'){S.9b(1b)}L{S.1W(1b)}}};$.6v.l=f(2A){B J,29=$(C),1E=C.1E||\'\',5s=f(e){B 2l=$(C).9c(),5t=J,3o,2B;4(!(e.6r||e.6s||e.6t||e.6u)&&!2l.2i(\'.l-q\')){3o=2A.9d||\'24-l-N\';2B=2l.18(3o);4(!2B){3o=\'5u\';2B=2l.69(0)[3o]}4(2B&&2B!==\'\'&&2B!==\'9e\'){2l=1E.1u?$(1E):29;2l=2l.9f(\'[\'+3o+\'="\'+2B+\'"]\');5t=2l.J(C)}2A.J=5t;4(F.4D(2l,2A)!==z){e.3M()}}};2A=2A||{};J=2A.J||0;4(!1E||2A.9g===z){29.2M(\'26.12-2h\').1v(\'26.12-2h\',5s)}L{D.9h(1E,\'26.12-2h\').9i(1E+":2W(\'.l-2e, .l-3z\')",\'26.12-2h\',5s)}H C};D.4q(f(){4($.3k===2a){$.3k=f(){B 1o=$(\'<A 1r="7:6V;m:6V;2E:1M"><A/></A>\').1W(\'1a\'),4y=1o.9j(),7=4y.4k()-4y.m(99).4k();1o.1Q();H 7}}4($.5v.5w===2a){$.5v.5w=(f(){B 4z=$(\'<A 1r="1V:1F;1h:6W;"></A>\').1W(\'1a\'),1F=(4z[0].6X===20||4z[0].6X===15);4z.1Q();H 1F}())}$.1f(F.3u,{3k:$.3k(),1F:$.5v.5w,1o:$(\'1a\')})})}(2C,1S,9k));$(1S).4q(f(){B 9l="©6Y 6Z 9m. ©6Y 6Z 9n.3Y. 9o 9p 9q.";$(\'30 .1B A V, .1B .r V, .1C-r V, .2m-1C A V\').3y(f(){$(C).18(\'1x\',\'1I://4A.4B/9r\').18(\'4O\',\'5h 2W 9s\')});$(\'30 .1B A V, .1B .r V, .1C-r V, .2m-1C A V\').2g(f(){$(C).2W(\'V[1x*="9t"], a V\').q(\'<a k="\'+$(C).18(\'1x\')+\'" Q="l" 5u="l"></a>\')});$(\'30 .1B A a[k$=".3P"], 30 .1B A a[k$=".3p"], 30 .1B A a[k$=".3O"], .1B .r a[k$=".3P"], .1B .r a[k$=".3p"], .1B .r a[k$=".3O"], .1C-r a[k$=".3P"], .1C-r a[k$=".3p"], .1C-r a[k$=".3O"], .2m-1C A a[k$=".3P"], .2m-1C A a[k$=".3p"], .2m-1C A a[k$=".3O"]\').2W(\'a.l\').2g(f(){$(C).2Q(\'l\').18(\'5u\',\'l\')});$(\'30 .1B A a.l, .1B .r a.l, .1C-r a.l, .2m-1C A a.l\').l({4S:\'1n\',4U:\'1n\',4V:\'1n\',4W:\'1n\',});$(\'30 .1B A a[k^="1I://3q.3r"][k*="v="], .1B .r a[k^="1I://3q.3r"][k*="v="], .1C-r a[k^="1I://3q.3r"][k*="v="], .2m-1C A a[k^="1I://3q.3r"][k*="v="]\').2g(f(){B a=$(C);B b=a.18(\'k\').4n(a.18(\'k\').35(\'v=\')+2,a.18(\'k\').35(\'v=\')+13);4(a.18(\'k\').35(\'5x=\')!=-1){B c=a.18(\'k\').4n(a.18(\'k\').35(\'5x=\')+5)+\'&\';B d=c.4n(0,c.35("&"));a.71(\'<a 1r="1V: 72" Q="l l.U" k="1I://3q.3r.3Y/2V/9u?5x=\'+d+\'&73;74=75&76=1"><V Q="2W-77" 1x="1I://78.79.3Y/7a/\'+b+\'/0.3p" /><1g Q="7b"></1g></a>\')}L{a.71(\'<a 1r="1V: 72" Q="l l.U" k="1I://3q.3r.3Y/v/\'+b+\'&73;74=75&76=1"><V Q="2W-77" 1x="1I://78.79.3Y/7a/\'+b+\'/0.3p" /><1g Q="7b"></1g></a>\')}});B u=1S.6R.k;$(\'1a\').5m(\'<A 1r="9v:3W"><A 3x="5y" Q="2n-7c-l"><A Q="2n-7c-l-r"><A Q="2n-5z-l"><5z 7d="2m" 7d="2m" 2L="/2n?9w=\'+u+\'"><3s><3t>9x : </3t><4C n="2Z" 22="9y"></3s><3s><3t>9z : </3t><4C n="7e" 22="7e"></3s><3s 1r="66: 17; I-1h: 9A; 2Z-7f: 17;"><3t 1r="I-2c: 7g; I-1h: 9B; 7: 9C; I-17: 9D;">9E : </3t><4C n="9F" 22="9G" 9H="t" 1r="7: 6W;"></3s><4C n="5A" 22="2n" 1w="9I" Q="5A"></5z></A></A><A Q="9J"><a k="9K?9L=9M">9N 9O 9P&9Q;a</a></A></A></A>\');$(\'a[k="/2n"], a[k="/2n?9R"]\').18(\'3x\',\'2n\').18(\'k\',\'#5y\');$(\'a#2n\').l();$("#5y").1v("5A");$(\'a V#9S\').2g(f(){B 7h=$(C).18("4O").4c(/[0-9]+/);$.l(\'<A 3x="9T" 1r="7: 9U;2Z-7f: 9V"><a k="/9W?9X=9Y"><V 1r="6S:6T" 7="3A" m="9Z" a0="C.1x=\\\'1I://4A.4B/7i\\\'" 1x="1I://4A.4B/7i" a1="C.1x=\\\'1I://4A.4B/a2\\\'" /></a><p 1r="7j-a3: a4;7j-a5: a6;1j-1h: 7g;">a7 <1g 1r="a8: a9;">\'+7h+\'</1g> aa ab</p></A>\')});$(\'<1g><a k="1I://ac.ad/ae" 1b="af">ag!</a>&#32;&#ah;&#32;</1g>\').ai(\'#aj-6I 7k 5B 1g.5C, .ak 1g.5C, #al-7l .am .an 5B.ao 1g.5C, #ap .7l-aq 7k 5B a[k*="ar"]\')});',62,648,'||||if||current|width||||||||function||||coming|href|fancybox|height|type|||wrap|content||true||||||false|div|var|this||obj||null|return|margin|index|opts|else|getScalar|group|direction|inner|class|viewport|title|element|iframe|img|||overlay|skin||trigger|fb||css||rez|left|attr||body|target|Math|previous|pos|extend|span|top|el|padding|minWidth|minHeight|scrolling|elastic|parent|ratio|isTouch|style|maxWidth|maxHeight|length|bind|value|src|player|wPadding|endPos|postbody|entry|next|selector|fixed|startPos|effect|http|str|100|getValue|auto|keys|isActive|stop|remove|origHeight|document|isString|prev|position|appendTo|origWidth|orig|autoHeight||image|name|helpers|data|prop|click||hPadding|that|undefined|html|right|outer|item|isOpen|each|start|is|break|height_|what|post|login|isPercentage|autoWidth|tpl|noop|onReset|event|min|case|width_|max|opacity|field|options|relVal|window|isQuery|overflow|dim|closeClick|ajax|close|isOpened|removeClass|action|unbind|router|scroll|update|addClass|tmp|val|_afterLoad|placeholder|embed|not|fx|distance|text|table|didUpdate||||indexOf|getViewport||||preload|loop|swf|up|down|canShrink|lock|locked|complete|find|scrollbarWidth|wSpace|hSpace|maxWidth_|relType|jpg|www|youtube|label|em|defaults|aspectRatio|closeBtn|id|error|nav|200|beforeShow|ajaxLoad|imgPreload|transitions|isDom|inline|cancel|hideLoading|_getPosition|jumpto|animate|preventDefault|deltaY|gif|png|_error|canExpand|scrollOut|maxHeight_|wrapSpace|step|none|offsetWidth|com|value_||px|autoCenter|fitToView|topRatio|leftRatio|play|250|swing|onCancel|afterClose|hrefParts|match|onload|onerror|clear|onUpdate|onlyAbsolute|anyway|showLoading|innerWidth|code|canScroll|slice|helper|textStatus|ready|param|origMaxWidth|origMaxHeight|skinSpace|_afterZoomIn|duration|easing|child|elem|goo|gl|input|open|apply|arguments|hidden|clientWidth|clientHeight|9999|arrows|nextClick|mouseWheel|autoPlay|alt|rnd|try|javascript|openEffect|fade|closeEffect|nextEffect|prevEffect|prevMethod|beforeLoad|afterShow||beforeClose|timer|object|replace|_start|unbindEvents|_afterZoomOut|isClosing|opened|set|reposition|_setDimension|deltaX|ret|visible|new|Image|hide|end|show|len|append|wMargin|hMargin|outerHeight|getOrigPosition|now|run|idx|rel|support|fixedPosition|list|login_form|form|submit|li|gensmall|isScrollable|autoSize|wrapCSS|playSpeed|modal|toggle|scrollOutside|frame|browser|msie|openSpeed|openEasing|openOpacity|openMethod|zoomIn|closeSpeed|closeEasing|closeOpacity|closeMethod|zoomOut|nextSpeed|nextEasing|nextMethod|changeIn|prevSpeed|prevEasing|changeOut|speedOut|showEarly|float|afterLoad|beforeChange|get|metadata|isImage|isSWF|shift|abort|immediately|clearTimeout|setTimeout|delete|orientationchange|keypress|loading|which|keyCode|absolute|innerHeight|bindEvents|ctrlKey|altKey|shiftKey|metaKey|fn|mousewheel|delta|while|isFunction|number|onReady|_loadImage|_loadAjax|_loadIframe|no|jqXHR|success|about|catch|load|_preloadImages|cnt|switch|steps|add|outerWidth|location|cursor|pointer|speed|50px|20px|offsetTop|Copyright|by||replaceWith|relative|amp|hl|vi_VN|autoplay|fancyImg|i1|ytimg|vi|iconPlayer|box|method|password|align|10px|nmp|uf09H|font|ul|footer|use|strict|createTouch|hasOwnProperty|instanceof|string|scrollWidth|scrollHeight|parseInt|ceil|version|800|600|autoResize|3000|dataType|headers|fancyBox|wmode|transparent|allowfullscreen|allowscriptaccess|always|tabIndex|frameborder|vspace|hspace|allowtransparency|The|requested|cannot|be|loaded|br|Please|again|later|Close|Next|Previous|isPlainObject|isArray|nodeType|charAt|split|onPlayEnd|onPlayStart|removeAttr|500|300|boolean|scrollLeft|scrollTop|resize|keydown|srcElement|contenteditable|inArray|Array|prototype|call|jp|eg|bmp|webp|mobile|desktop|Top|Right|Bottom|Left|hasError|url|Date|getTime|blank|empty|one|parents|for|insertAfter|detach|replaceAll|classid|clsid|D27CDB6E|AE6D|11cf|96B8|444553540000|movie|application|shockwave|flash|yes|contentWindow|contents|first|offset|documentElement|all|querySelector|hasClass|fadeOut|trim|inside|outside|over|default|wrapInner|abs||bottom|prependTo|blur|groupAttr|nofollow|filter|live|undelegate|delegate|children|jQuery|Copyrights|giObanii|toxigeek|All|Rights|Reserved|XIZ7a|avaliable|smiles|videoseries|display|redirect|Tên truy cập|username|Mật Khẩu|5px|3px|85px|7px|Ghi nhớ|checkbox|autologin|checked|Đăng nhập|rpass|profile|mode|sendpassword|Quên|mật|khẩu|ntilde|connexion|i_icon_mini_new_message|FancyboxMP|220px|center|privmsg|folder|inbox|171|onmouseout|onmouseover|D88fp|size|13px|weight|700|Tienes|color|red|Nuevo|Mensaje|adf|ly|BqNyN|_blank|ToxiGeek|124|insertBefore|pun|gen|page|navbar|linklist|rightside|gfooter|links|invision'.split('|'),0,{}))```