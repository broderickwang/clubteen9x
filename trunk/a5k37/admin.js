var versionMinor=parseFloat(navigator.appVersion);var versionMajor=parseInt(versionMinor);var IE=document.all&&!window.opera&&versionMajor<7;var IE7=document.all&&!window.opera&&versionMajor>=7;var OP=window.opera;var FF=document.getElementById;var NS=document.layers;function get_item(name,opener){if(IE){return(opener)?window.opener.document.all[name]:document.all[name]}else if(FF){return(opener)?window.opener.document.getElementById(name):document.getElementById(name)}else if(NS){return(opener)?window.opener.document.layers[name]:document.layers[name]}}function change_display(name,value,opener){if(IE){element=(opener==true)?window.opener.document.all[name].style:document.all[name].style}else if(FF){element=(opener==true)?window.opener.document.getElementById(name).style:document.getElementById(name).style}else if(NS){element=(opener==true)?window.opener.document.layers[name]:document.layers[name]}element.display=value}function reverse_display(name,opener){element=get_item(name);if(!element){return false}var display=(element.style.display!='block')?'block':'none';change_display(name,display,opener)}