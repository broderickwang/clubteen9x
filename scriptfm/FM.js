
function treatvar(nom) { var trouve= xhr.responseText.replace(RegExp("^.+<li style=\"margin-bottom:5px;direction:ltr;text-align:left;\"><strong>&#123;"+nom+"&#125;<\/strong>&nbsp;:&nbsp;(.*?)&nbsp;<span style='direction:ltr'>\(.*?\)<\/span><br \/><\/li>.+$"),'$1'); if(xhr.responseText==trouve) return; var children = document.getElementsByTagName('*') || document.all; var v= new Array(); var i = -1; while(++i < children.length) { var child = children[i]; var classNames = child.className.split(' '); for (var j = 0; j < classNames.length; j++) { if (classNames[j] == nom) { v.push(child); break; } } } i=-1; while(++i!=v.length) if(v[i].tagName=='INPUT'||v[i].tagName=='TEXTAREA')v[i].value+= trouve; else v[i].innerHTML+=trouve;}; if (window.ActiveXObject) { var xhr = new ActiveXObject("Microsoft.XMLHTTP"); } else if (window.XMLHttpRequest) { var xhr = new XMLHttpRequest(); } if(xhr!=null) { xhr.onreadystatechange = function() { if(xhr.readyState == 4) { treatvar('FORUMURL'); treatvar('FORUMURLINK'); treatvar('FORUMNAME'); treatvar('FORUMNAMELINK'); treatvar('FORUMDESC');treatvar('FORUMBIRTHDAY'); treatvar('FORUMAGE'); treatvar('FORUMCOUNTFORUM'); treatvar('FORUMCOUNTOPIC'); treatvar('FORUMCOUNTPOST');treatvar('FORUMCOUNTUSER');treatvar('FORUMONLINEUSER'); treatvar('FORUMONLINEDATE'); treatvar('FORUMLASTUSER'); treatvar('FORUMLASTUSERLINK'); treatvar('USERNAME'); treatvar('USERLINK'); treatvar('USERBIRTHDAY'); treatvar('USERAGE'); treatvar('USERREGDATE'); treatvar('USERLASTVISIT'); treatvar('USERCOUNTPOST'); } }; xhr.open("GET","/popup_help.forum?l=miscvars", true); xhr.send(null); }