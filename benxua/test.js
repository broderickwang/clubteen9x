{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1507;}\viewkind4\uc1\pard\f0\fs20 /******************************************************************************\par
Name:    Highslide JS\par
Version: 4.0.10 (November 25 2008)\par
Config:  default +slideshow +positioning +transitions\par
Author:  Torstein H nsi\par
Support: http://highslide.com/support\par
\par
Licence:\par
Highslide JS is licensed under a Creative Commons Attribution-NonCommercial 2.5\par
License (http://creativecommons.org/licenses/by-nc/2.5/).\par
\par
You are free:\par
\tab * to copy, distribute, display, and perform the work\par
\tab * to make derivative works\par
\par
Under the following conditions:\par
\tab * Attribution. You must attribute the work in the manner  specified by  the\par
\tab   author or licensor.\par
\tab * Noncommercial. You may not use this work for commercial purposes.\par
\par
* For  any  reuse  or  distribution, you  must make clear to others the license\par
  terms of this work.\par
* Any  of  these  conditions  can  be  waived  if  you  get permission from the \par
  copyright holder.\par
\par
Your fair use and other rights are in no way affected by the above.\par
******************************************************************************/\par
\par
var hs = \{\par
// Language strings\par
lang : \{\par
\tab cssDirection: 'ltr',\par
\tab loadingText : 'Loading...',\par
\tab loadingTitle : 'Click to cancel',\par
\tab focusTitle : 'Click to bring to front',\par
\tab fullExpandTitle : 'Expand to actual size (f)',\par
\tab creditsText : 'Powered by <i>Highslide JS</i>',\par
\tab creditsTitle : 'Go to the Highslide JS homepage',\par
\tab previousText : 'Previous',\par
\tab nextText : 'Next', \par
\tab moveText : 'Move',\par
\tab closeText : 'Close', \par
\tab closeTitle : 'Close (esc)', \par
\tab resizeTitle : 'Resize',\par
\tab playText : 'Play',\par
\tab playTitle : 'Play slideshow (spacebar)',\par
\tab pauseText : 'Pause',\par
\tab pauseTitle : 'Pause slideshow (spacebar)',\par
\tab previousTitle : 'Previous (arrow left)',\par
\tab nextTitle : 'Next (arrow right)',\par
\tab moveTitle : 'Move',\par
\tab fullExpandText : 'Full size',\par
\tab number: 'Image %1 of %2',\par
\tab restoreTitle : 'Click to close image, click and drag to move. Use arrow keys for next and previous.'\par
\},\par
// See http://highslide.com/ref for examples of settings  \par
graphicsDir : 'highslide/graphics/',\par
expandCursor : 'zoomin.cur', // null disables\par
restoreCursor : 'zoomout.cur', // null disables\par
expandDuration : 250, // milliseconds\par
restoreDuration : 250,\par
marginLeft : 15,\par
marginRight : 15,\par
marginTop : 15,\par
marginBottom : 15,\par
zIndexCounter : 1001, // adjust to other absolutely positioned elements\par
loadingOpacity : 0.75,\par
allowMultipleInstances: true,\par
numberOfImagesToPreload : 5,\par
outlineWhileAnimating : 2, // 0 = never, 1 = always, 2 = HTML only \par
outlineStartOffset : 3, // ends at 10\par
fullExpandPosition : 'bottom right',\par
fullExpandOpacity : 1,\par
padToMinWidth : false, // pad the popup width to make room for wide caption\par
showCredits : true, // you can set this to false if you want\par
creditsHref : 'http://highslide.com',\par
enableKeyListener : true,\par
transitions : [],\par
transitionDuration: 500,\par
dimmingOpacity: 0, // Lightbox style dimming background\par
dimmingDuration: 50, // 0 for instant dimming\par
\par
anchor : 'auto', // where the image expands from\par
align : 'auto', // position in the client (overrides anchor)\par
targetX: null, // the id of a target element\par
targetY: null,\par
dragByHeading: true,\par
minWidth: 200,\par
minHeight: 200,\par
allowSizeReduction: true, // allow the image to reduce to fit client size. If false, this overrides minWidth and minHeight\par
outlineType : 'drop-shadow', // set null to disable outlines\par
wrapperClassName : 'highslide-wrapper', // for enhanced css-control\par
skin : \{\par
\tab controls:\par
\tab\tab '<div class="highslide-controls"><ul>'+\par
\tab\tab\tab '<li class="highslide-previous">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.previousTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.previousText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-play">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.playTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.playText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-pause">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.pauseTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.pauseText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-next">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.nextTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.nextText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-move">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.moveTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.moveText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-full-expand">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.fullExpandTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.fullExpandText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-close">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.closeTitle\}" >'+\par
\tab\tab\tab\tab '<span>\{hs.lang.closeText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab '</ul></div>'\par
\},\par
// END OF YOUR SETTINGS\par
\par
\par
// declare internal properties\par
preloadTheseImages : [],\par
continuePreloading: true,\par
expanders : [],\par
overrides : [\par
\tab 'allowSizeReduction',\par
\tab 'anchor',\par
\tab 'align',\par
\tab 'targetX',\par
\tab 'targetY',\par
\tab 'outlineType',\par
\tab 'outlineWhileAnimating',\par
\tab 'captionId',\par
\tab 'captionText',\par
\tab 'captionEval',\par
\tab 'captionOverlay',\par
\tab 'headingId',\par
\tab 'headingText',\par
\tab 'headingEval',\par
\tab 'headingOverlay',\par
\tab 'dragByHeading',\par
\tab 'autoplay',\par
\tab 'numberPosition',\par
\tab 'transitions',\par
\tab 'dimmingOpacity',\par
\tab\par
\tab 'wrapperClassName',\par
\tab 'minWidth',\par
\tab 'minHeight',\par
\tab 'maxWidth',\par
\tab 'maxHeight',\par
\tab 'slideshowGroup',\par
\tab 'easing',\par
\tab 'easingClose',\par
\tab 'fadeInOut',\par
\tab 'src'\par
],\par
overlays : [],\par
idCounter : 0,\par
oPos : \{\par
\tab x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],\par
\tab y: ['above', 'top', 'middle', 'bottom', 'below']\par
\},\par
mouse: \{\},\par
headingOverlay: \{\},\par
captionOverlay: \{\},\par
faders : [],\par
\par
slideshows : [],\par
\par
pendingOutlines : \{\},\par
clones : \{\},\par
ie : (document.all && !window.opera),\par
safari : /Safari/.test(navigator.userAgent),\par
geckoMac : /Macintosh.+rv:1\\.[0-8].+Gecko/.test(navigator.userAgent),\par
\par
$ : function (id) \{\par
\tab return document.getElementById(id);\par
\},\par
\par
push : function (arr, val) \{\par
\tab arr[arr.length] = val;\par
\},\par
\par
createElement : function (tag, attribs, styles, parent, nopad) \{\par
\tab var el = document.createElement(tag);\par
\tab if (attribs) hs.setAttribs(el, attribs);\par
\tab if (nopad) hs.setStyles(el, \{padding: 0, border: 'none', margin: 0\});\par
\tab if (styles) hs.setStyles(el, styles);\par
\tab if (parent) parent.appendChild(el);\tab\par
\tab return el;\par
\},\par
\par
setAttribs : function (el, attribs) \{\par
\tab for (var x in attribs) el[x] = attribs[x];\par
\},\par
\par
setStyles : function (el, styles) \{\par
\tab for (var x in styles) \{\par
\tab\tab if (hs.ie && x == 'opacity') \{\par
\tab\tab\tab if (styles[x] > 0.99) el.style.removeAttribute('filter');\par
\tab\tab\tab else el.style.filter = 'alpha(opacity='+ (styles[x] * 100) +')';\par
\tab\tab\}\par
\tab\tab else el.style[x] = styles[x];\par
\tab\}\par
\},\par
\par
ieVersion : function () \{\par
\tab var arr = navigator.appVersion.split("MSIE");\par
\tab return arr[1] ? parseFloat(arr[1]) : null;\par
\},\par
\par
getPageSize : function () \{\par
\tab var d = document, w = window, iebody = d.compatMode && d.compatMode != 'BackCompat' \par
\tab\tab ? d.documentElement : d.body;\tab\par
\tab\par
\tab\par
\tab var b = d.body;\par
\tab var xScroll = (w.innerWidth && w.scrollMaxX) \par
\tab\tab\tab ? w.innerWidth + w.scrollMaxX : Math.max(b.scrollWidth, b.offsetWidth),\par
\tab\tab yScroll = (w.innerHeight && window.scrollMaxY) \par
\tab\tab\tab ? w.innerHeight + w.scrollMaxY : Math.max(b.scrollHeight, b.offsetHeight),\par
\tab\tab pageWidth = hs.ie ? iebody.scrollWidth :\par
\tab\tab\tab (d.documentElement.clientWidth || self.innerWidth),\par
      \tab pageHeight = hs.ie ? Math.max(iebody.scrollHeight, iebody.clientHeight) : \par
\tab\tab\tab (d.documentElement.clientHeight || self.innerHeight);\par
\tab\par
\tab var width = hs.ie ? iebody.clientWidth : \par
\tab\tab\tab (d.documentElement.clientWidth || self.innerWidth),\par
\tab\tab height = hs.ie ? iebody.clientHeight : self.innerHeight;\par
\tab\par
\tab return \{\par
\tab\tab pageWidth: Math.max(pageWidth, xScroll),\par
\tab\tab pageHeight: Math.max(pageHeight, yScroll),\par
\tab\tab width: width,\par
\tab\tab height: height,\tab\tab\par
\tab\tab scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,\par
\tab\tab scrollTop: hs.ie ? iebody.scrollTop : pageYOffset\par
\tab\}\par
\},\par
\par
getPosition : function(el)\tab\{\par
\tab var p = \{ x: el.offsetLeft, y: el.offsetTop \};\par
\tab while (el.offsetParent)\tab\{\par
\tab\tab el = el.offsetParent;\par
\tab\tab p.x += el.offsetLeft;\par
\tab\tab p.y += el.offsetTop;\par
\tab\tab if (el != document.body && el != document.documentElement) \{\par
\tab\tab\tab p.x -= el.scrollLeft;\par
\tab\tab\tab p.y -= el.scrollTop;\par
\tab\tab\}\par
\tab\}\par
\tab return p;\par
\},\par
expand : function(a, params, custom, type) \{\par
\tab if (!a) a = hs.createElement('a', null, \{ display: 'none' \}, hs.container);\par
\tab if (typeof a.getParams == 'function') return params;\tab\par
\tab try \{\tab\par
\tab\tab new hs.Expander(a, params, custom);\par
\tab\tab return false;\par
\tab\} catch (e) \{ return true; \}\par
\},\par
getElementByClass : function (el, tagName, className) \{\par
\tab var els = el.getElementsByTagName(tagName);\par
\tab for (var i = 0; i < els.length; i++) \{\par
    \tab if ((new RegExp(className)).test(els[i].className)) \{\par
\tab\tab\tab return els[i];\par
\tab\tab\}\par
\tab\}\par
\tab return null;\par
\},\par
replaceLang : function(s) \{\par
\tab s = s.replace(/\\s/g, ' ');\par
\tab var re = /\{hs\\.lang\\.([^\}]+)\\\}/g,\par
\tab\tab matches = s.match(re),\par
\tab\tab lang;\par
\tab if (matches) for (var i = 0; i < matches.length; i++) \{\par
\tab\tab lang = matches[i].replace(re, "$1");\par
\tab\tab if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang]);\par
\tab\}\par
\tab return s;\par
\},\par
\par
\par
focusTopmost : function() \{\par
\tab var topZ = 0, topmostKey = -1;\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i]) \{\par
\tab\tab\tab if (hs.expanders[i].wrapper.style.zIndex && hs.expanders[i].wrapper.style.zIndex > topZ) \{\par
\tab\tab\tab\tab topZ = hs.expanders[i].wrapper.style.zIndex;\par
\tab\tab\tab\tab\par
\tab\tab\tab\tab topmostKey = i;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\tab if (topmostKey == -1) hs.focusKey = -1;\par
\tab else hs.expanders[topmostKey].focus();\par
\},\par
\par
getParam : function (a, param) \{\par
\tab a.getParams = a.onclick;\par
\tab var p = a.getParams ? a.getParams() : null;\par
\tab a.getParams = null;\par
\tab\par
\tab return (p && typeof p[param] != 'undefined') ? p[param] : \par
\tab\tab (typeof hs[param] != 'undefined' ? hs[param] : null);\par
\},\par
\par
getSrc : function (a) \{\par
\tab var src = hs.getParam(a, 'src');\par
\tab if (src) return src;\par
\tab return a.href;\par
\},\par
\par
getNode : function (id) \{\par
\tab var node = hs.$(id), clone = hs.clones[id], a = \{\};\par
\tab if (!node && !clone) return null;\par
\tab if (!clone) \{\par
\tab\tab clone = node.cloneNode(true);\par
\tab\tab clone.id = '';\par
\tab\tab hs.clones[id] = clone;\par
\tab\tab return node;\par
\tab\} else \{\par
\tab\tab return clone.cloneNode(true);\par
\tab\}\par
\},\par
\par
discardElement : function(d) \{\par
\tab hs.garbageBin.appendChild(d);\par
\tab hs.garbageBin.innerHTML = '';\par
\},\par
dim : function(exp) \{\par
\tab if (!hs.dimmer) \{\par
\tab\tab hs.dimmer = hs.createElement ('div', \par
\tab\tab\tab\{ \par
\tab\tab\tab\tab className: 'highslide-dimming',\par
\tab\tab\tab\tab owner: '',\par
\tab\tab\tab\tab onclick: function() \{\par
\tab\tab\tab\tab\tab  \par
\tab\tab\tab\tab\tab\tab hs.close();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}, \par
\tab\tab\tab\{ position: 'absolute', left: 0 \}, hs.container, true);\par
\tab\tab hs.addEventListener(window, 'resize', hs.setDimmerSize);\par
\tab\}\par
\tab hs.dimmer.style.display = '';\par
\tab hs.setDimmerSize();\par
\tab hs.dimmer.owner += '|'+ exp.key;\par
\tab if (hs.geckoMac && hs.dimmingGeckoFix) \par
\tab\tab hs.dimmer.style.background = 'url('+ hs.graphicsDir + 'geckodimmer.png)';\tab\tab\par
\tab else\par
\tab\tab hs.fade(hs.dimmer, 0, exp.dimmingOpacity, hs.dimmingDuration); \par
\},\par
undim : function(key) \{\par
\tab if (!hs.dimmer) return;\par
\tab if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|'+ key, '');\par
\tab\par
\tab if (\par
\tab\tab (typeof key != 'undefined' && hs.dimmer.owner != '')\par
\tab\tab || (hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity'))\par
\tab ) return;\par
\tab if (hs.geckoMac && hs.dimmingGeckoFix) \par
\tab\tab hs.setStyles(hs.dimmer, \{ background: 'none', width: 0, height: 0 \});\par
\tab else hs.fade(hs.dimmer, hs.dimmingOpacity, 0, hs.dimmingDuration, function() \{\par
\tab\tab hs.setStyles(hs.dimmer, \{ display: 'none', width: 0, height: 0 \});\par
\tab\});\par
\},\par
setDimmerSize : function(exp) \{\par
\tab if (!hs.dimmer) return;\par
\tab var page = hs.getPageSize();\par
\tab var h = (hs.ie && exp && exp.wrapper) ? \par
\tab\tab parseInt(exp.wrapper.style.top) + parseInt(exp.wrapper.style.height)+ (exp.outline ? exp.outline.offset : 0) : 0; \par
\tab hs.setStyles(hs.dimmer, \{ \par
\tab\tab width: page.pageWidth +'px', \par
\tab\tab height: Math.max(page.pageHeight, h) +'px'\par
\tab\});\par
\},\par
\par
previousOrNext : function (el, op) \{\par
\tab hs.updateAnchors();\par
\tab var exp = hs.last = hs.getExpander(el);\par
\tab try \{\par
\tab\tab var adj = hs.upcoming =  exp.getAdjacentAnchor(op);\par
\tab\tab adj.onclick(); \tab\tab\par
\tab\} catch (e)\{\par
\tab\tab hs.last = hs.upcoming = null;\par
\tab\}\par
\tab try \{ exp.close(); \} catch (e) \{\}\par
\tab return false;\par
\},\par
\par
previous : function (el) \{\par
\tab return hs.previousOrNext(el, -1);\par
\},\par
\par
next : function (el) \{\par
\tab return hs.previousOrNext(el, 1);\tab\par
\},\par
\par
keyHandler : function(e) \{\par
\tab if (!e) e = window.event;\par
\tab if (!e.target) e.target = e.srcElement; // ie\par
\tab if (typeof e.target.form != 'undefined') return true; // form element has focus\par
\tab var exp = hs.getExpander();\par
\tab\par
\tab var op = null;\par
\tab switch (e.keyCode) \{\par
\tab\tab case 70: // f\par
\tab\tab\tab if (exp) exp.doFullExpand();\par
\tab\tab\tab return true;\par
\tab\tab case 32: // Space\par
\tab\tab\tab op = 2;\par
\tab\tab\tab break;\par
\tab\tab case 34: // Page Down\par
\tab\tab case 39: // Arrow right\par
\tab\tab case 40: // Arrow down\par
\tab\tab\tab op = 1;\par
\tab\tab\tab break;\par
\tab\tab case 8:  // Backspace\par
\tab\tab case 33: // Page Up\par
\tab\tab case 37: // Arrow left\par
\tab\tab case 38: // Arrow up\par
\tab\tab\tab op = -1;\par
\tab\tab\tab break;\par
\tab\tab case 27: // Escape\par
\tab\tab case 13: // Enter\par
\tab\tab\tab op = 0;\par
\tab\}\par
\tab if (op !== null) \{if (op != 2)hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);\par
\tab\tab if (!hs.enableKeyListener) return true;\par
\tab\tab\par
\tab\tab if (e.preventDefault) e.preventDefault();\par
    \tab else e.returnValue = false;\par
    \tab\par
    \tab if (exp) \{\par
\tab\tab\tab if (op == 0) \{\par
\tab\tab\tab\tab exp.close();\par
\tab\tab\tab\} else if (op == 2) \{\par
\tab\tab\tab\tab if (exp.slideshow) exp.slideshow.hitSpace();\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab if (exp.slideshow) exp.slideshow.pause();\par
\tab\tab\tab\tab hs.previousOrNext(exp.key, op);\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\}\par
\tab return true;\par
\},\par
\par
\par
registerOverlay : function (overlay) \{\par
\tab hs.push(hs.overlays, overlay);\par
\},\par
\par
\par
addSlideshow : function (options) \{\par
\tab var sg = options.slideshowGroup;\par
\tab if (typeof sg == 'object') \{\par
\tab\tab for (var i = 0; i < sg.length; i++) \{\par
\tab\tab\tab var o = \{\};\par
\tab\tab\tab for (var x in options) o[x] = options[x];\par
\tab\tab\tab o.slideshowGroup = sg[i];\par
\tab\tab\tab hs.push(hs.slideshows, o);\par
\tab\tab\}\par
\tab\} else \{\par
\tab\tab hs.push(hs.slideshows, options);\par
\tab\}\par
\},\par
\par
getWrapperKey : function (element, expOnly) \{\par
\tab var el, re = /^highslide-wrapper-([0-9]+)$/;\par
\tab // 1. look in open expanders\par
\tab el = element;\par
\tab while (el.parentNode)\tab\{\par
\tab\tab if (el.id && re.test(el.id)) return el.id.replace(re, "$1");\par
\tab\tab el = el.parentNode;\par
\tab\}\par
\tab // 2. look in thumbnail\par
\tab if (!expOnly) \{\par
\tab\tab el = element;\par
\tab\tab while (el.parentNode)\tab\{\par
\tab\tab\tab if (el.tagName && hs.isHsAnchor(el)) \{\par
\tab\tab\tab\tab for (var key = 0; key < hs.expanders.length; key++) \{\par
\tab\tab\tab\tab\tab var exp = hs.expanders[key];\par
\tab\tab\tab\tab\tab if (exp && exp.a == el) return key;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab el = el.parentNode;\par
\tab\tab\}\par
\tab\}\par
\tab return null; \par
\},\par
\par
getExpander : function (el, expOnly) \{\par
\tab if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;\par
\tab if (typeof el == 'number') return hs.expanders[el] || null;\par
\tab if (typeof el == 'string') el = hs.$(el);\par
\tab return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;\par
\},\par
\par
isHsAnchor : function (a) \{\par
\tab return (a.onclick && a.onclick.toString().replace(/\\s/g, ' ').match(/hs.(htmlE|e)xpand/));\par
\},\par
\par
reOrder : function () \{\par
\tab for (var i = 0; i < hs.expanders.length; i++)\par
\tab\tab if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();\par
\},\par
\par
mouseClickHandler : function(e) \par
\{\tab\par
\tab if (!e) e = window.event;\par
\tab if (e.button > 1) return true;\par
\tab if (!e.target) e.target = e.srcElement;\par
\tab\par
\tab var el = e.target;\par
\tab while (el.parentNode\par
\tab\tab && !(/highslide-(image|move|html|resize)/.test(el.className)))\par
\tab\{\par
\tab\tab el = el.parentNode;\par
\tab\}\par
\tab var exp = hs.getExpander(el);\par
\tab if (exp && (exp.isClosing || !exp.isExpanded)) return true;\par
\tab\tab\par
\tab if (exp && e.type == 'mousedown') \{\par
\tab\tab if (e.target.form) return true;\par
\tab\tab var match = el.className.match(/highslide-(image|move|resize)/);\par
\tab\tab if (match) \{\par
\tab\tab\tab hs.dragArgs = \{ exp: exp , type: match[1], left: exp.x.pos, width: exp.x.size, top: exp.y.pos, \par
\tab\tab\tab\tab height: exp.y.size, clickX: e.clientX, clickY: e.clientY \};\par
\tab\tab\tab\par
\tab\tab\tab\par
\tab\tab\tab hs.addEventListener(document, 'mousemove', hs.dragHandler);\par
\tab\tab\tab if (e.preventDefault) e.preventDefault(); // FF\par
\tab\tab\tab\par
\tab\tab\tab if (/highslide-(image|html)-blur/.test(exp.content.className)) \{\par
\tab\tab\tab\tab exp.focus();\par
\tab\tab\tab\tab hs.hasFocused = true;\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\} else if (e.type == 'mouseup') \{\par
\tab\tab\par
\tab\tab hs.removeEventListener(document, 'mousemove', hs.dragHandler);\par
\tab\tab\par
\tab\tab if (hs.dragArgs) \{\par
\tab\tab\tab if (hs.dragArgs.type == 'image')\par
\tab\tab\tab\tab hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;\par
\tab\tab\tab var hasDragged = hs.dragArgs.hasDragged;\par
\tab\tab\tab\par
\tab\tab\tab if (!hasDragged &&!hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) \{\par
\tab\tab\tab\tab exp.close();\par
\tab\tab\tab\} \par
\tab\tab\tab else if (hasDragged || (!hasDragged && hs.hasHtmlExpanders)) \{\par
\tab\tab\tab\tab hs.dragArgs.exp.doShowHide('hidden');\par
\tab\tab\tab\}\par
\tab\tab\tab if (hasDragged) hs.setDimmerSize(exp);\par
\tab\tab\tab\par
\tab\tab\tab hs.hasFocused = false;\par
\tab\tab\tab hs.dragArgs = null;\par
\tab\tab\par
\tab\tab\} else if (/highslide-image-blur/.test(el.className)) \{\par
\tab\tab\tab el.style.cursor = hs.styleRestoreCursor;\tab\tab\par
\tab\tab\}\par
\tab\}\par
\tab return false;\par
\},\par
\par
dragHandler : function(e)\par
\{\par
\tab if (!hs.dragArgs) return true;\par
\tab if (!e) e = window.event;\par
\tab var a = hs.dragArgs, exp = a.exp;\par
\tab\par
\tab a.dX = e.clientX - a.clickX;\par
\tab a.dY = e.clientY - a.clickY;\tab\par
\tab\par
\tab var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));\par
\tab if (!a.hasDragged) a.hasDragged = (a.type != 'image' && distance > 0)\par
\tab\tab || (distance > (hs.dragSensitivity || 5));\par
\tab\par
\tab if (a.hasDragged && e.clientX > 5 && e.clientY > 5) \{\par
\tab\tab\par
\tab\tab if (a.type == 'resize') exp.resize(a);\par
\tab\tab else \{\par
\tab\tab\tab exp.moveTo(a.left + a.dX, a.top + a.dY);\par
\tab\tab\tab if (a.type == 'image') exp.content.style.cursor = 'move';\par
\tab\tab\}\par
\tab\}\par
\tab return false;\par
\},\par
\par
wrapperMouseHandler : function (e) \{\par
\tab try \{\par
\tab\tab if (!e) e = window.event;\par
\tab\tab var over = /mouseover/i.test(e.type); \par
\tab\tab if (!e.target) e.target = e.srcElement; // ie\par
\tab\tab if (hs.ie) e.relatedTarget = \par
\tab\tab\tab over ? e.fromElement : e.toElement; // ie\par
\tab\tab var exp = hs.getExpander(e.target);\par
\tab\tab if (!exp.isExpanded) return;\par
\tab\tab if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget, true) == exp \par
\tab\tab\tab || hs.dragArgs) return;\par
\tab\tab for (var i = 0; i < exp.overlays.length; i++) \{\par
\tab\tab\tab var o = hs.$('hsId'+ exp.overlays[i]);\par
\tab\tab\tab if (o && o.hideOnMouseOut) \{\par
\tab\tab\tab\tab var from = over ? 0 : o.opacity,\par
\tab\tab\tab\tab\tab to = over ? o.opacity : 0;\tab\tab\tab\par
\tab\tab\tab\tab hs.fade(o, from, to);\par
\tab\tab\tab\}\par
\tab\tab\}\tab\par
\tab\} catch (e) \{\}\par
\},\par
\par
addEventListener : function (el, event, func) \{\par
\tab try \{\par
\tab\tab el.addEventListener(event, func, false);\par
\tab\} catch (e) \{\par
\tab\tab try \{\par
\tab\tab\tab el.detachEvent('on'+ event, func);\par
\tab\tab\tab el.attachEvent('on'+ event, func);\par
\tab\tab\} catch (e) \{\par
\tab\tab\tab el['on'+ event] = func;\par
\tab\tab\}\par
\tab\} \par
\},\par
\par
removeEventListener : function (el, event, func) \{\par
\tab try \{\par
\tab\tab el.removeEventListener(event, func, false);\par
\tab\} catch (e) \{\par
\tab\tab try \{\par
\tab\tab\tab el.detachEvent('on'+ event, func);\par
\tab\tab\} catch (e) \{\par
\tab\tab\tab el['on'+ event] = null;\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
preloadFullImage : function (i) \{\par
\tab if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') \{\par
\tab\tab var img = document.createElement('img');\par
\tab\tab img.onload = function() \{ \par
\tab\tab\tab img = null;\par
\tab\tab\tab hs.preloadFullImage(i + 1);\par
\tab\tab\};\par
\tab\tab img.src = hs.preloadTheseImages[i];\par
\tab\}\par
\},\par
preloadImages : function (number) \{\par
\tab if (number && typeof number != 'object') hs.numberOfImagesToPreload = number;\par
\tab\par
\tab var arr = hs.getAnchors();\par
\tab for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) \{\par
\tab\tab hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));\par
\tab\}\par
\tab\par
\tab // preload outlines\par
\tab if (hs.outlineType)\tab new hs.Outline(hs.outlineType, function () \{ hs.preloadFullImage(0)\} );\par
\tab else\par
\tab\par
\tab hs.preloadFullImage(0);\par
\tab\par
\tab // preload cursor\par
\tab var cur = hs.createElement('img', \{ src: hs.graphicsDir + hs.restoreCursor \});\par
\},\par
\par
\par
init : function () \{\par
\tab if (!hs.container) \{\par
\tab\tab hs.container = hs.createElement('div', \{\par
\tab\tab\tab\tab className: 'highslide-container'\par
\tab\tab\tab\}, \{\par
\tab\tab\tab\tab position: 'absolute', \par
\tab\tab\tab\tab left: 0, \par
\tab\tab\tab\tab top: 0, \par
\tab\tab\tab\tab width: '100%', \par
\tab\tab\tab\tab zIndex: hs.zIndexCounter,\par
\tab\tab\tab\tab direction: 'ltr'\par
\tab\tab\tab\}, \par
\tab\tab\tab document.body,\par
\tab\tab\tab true\par
\tab\tab );\par
\tab\tab hs.loading = hs.createElement('a', \{\par
\tab\tab\tab\tab className: 'highslide-loading',\par
\tab\tab\tab\tab title: hs.lang.loadingTitle,\par
\tab\tab\tab\tab innerHTML: hs.lang.loadingText,\par
\tab\tab\tab\tab href: 'javascript:;'\par
\tab\tab\tab\}, \{\par
\tab\tab\tab\tab position: 'absolute',\par
\tab\tab\tab\tab top: '-9999px',\par
\tab\tab\tab\tab opacity: hs.loadingOpacity,\par
\tab\tab\tab\tab zIndex: 1\par
\tab\tab\tab\}, hs.container\par
\tab\tab );\par
\tab\tab hs.garbageBin = hs.createElement('div', null, \{ display: 'none' \}, hs.container);\par
\tab\tab\par
\tab\tab // http://www.robertpenner.com/easing/ \par
\tab\tab Math.linearTween = function (t, b, c, d) \{\par
\tab\tab\tab return c*t/d + b;\par
\tab\tab\};\par
\tab\tab Math.easeInQuad = function (t, b, c, d) \{\par
\tab\tab\tab return c*(t/=d)*t + b;\par
\tab\tab\};\par
\tab\tab Math.easeInOutQuad = function (t, b, c, d) \{\par
\tab\tab\tab if ((t/=d/2) < 1) return c/2*t*t + b;\par
\tab\tab\tab return -c/2 * ((--t)*(t-2) - 1) + b;\par
\tab\tab\};\par
\tab\tab for (var x in hs.langDefaults) \{\par
\tab\tab\tab if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];\par
\tab\tab\tab else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined') \par
\tab\tab\tab\tab hs.lang[x] = hs.langDefaults[x];\par
\tab\tab\}\par
\tab\tab\par
\tab\tab hs.hideSelects = (hs.ie && hs.ieVersion() < 7);\par
\tab\tab hs.hideIframes = ((window.opera && navigator.appVersion < 9) || navigator.vendor == 'KDE' \par
\tab\tab\tab || (hs.ie && hs.ieVersion() < 5.5));\par
\tab\}\par
\},\par
domReady : function() \{\par
\tab hs.isDomReady = true;\par
\tab if (hs.onDomReady) hs.onDomReady();\par
\},\par
\par
updateAnchors : function() \{\par
\tab var els = document.all || document.getElementsByTagName('*'), all = [], images = [],groups = \{\}, re;\par
\tab\par
\tab for (var i = 0; i < els.length; i++) \{\par
\tab\tab re = hs.isHsAnchor(els[i]);\par
\tab\tab if (re) \{\par
\tab\tab\tab hs.push(all, els[i]);\par
\tab\tab\tab if (re[0] == 'hs.expand') hs.push(images, els[i]);\par
\tab\tab\tab var g = hs.getParam(els[i], 'slideshowGroup') || 'none';\par
\tab\tab\tab if (!groups[g]) groups[g] = [];\par
\tab\tab\tab hs.push(groups[g], els[i]);\par
\tab\tab\}\par
\tab\}\par
\tab hs.anchors = \{ all: all, groups: groups, images: images \};\par
\tab\par
\tab return hs.anchors;\par
\},\par
\par
getAnchors : function() \{\par
\tab return hs.anchors || hs.updateAnchors();\par
\},\par
\par
\par
fade : function (el, o, oFinal, dur, fn, i, dir) \{\par
\tab if (typeof i == 'undefined') \{ // new fader\par
\tab\tab if (typeof dur != 'number') dur = 250;\par
\tab\tab if (dur < 25) \{ // instant\par
\tab\tab\tab hs.setStyles( el, \{ opacity: oFinal\tab\});\par
\tab\tab\tab if (fn) fn();\par
\tab\tab\tab return;\par
\tab\tab\}\par
\tab\tab i = hs.faders.length;\par
\tab\tab dir = oFinal > o ? 1 : -1;\par
\tab\tab var step = (25 / (dur - dur % 25)) * Math.abs(o - oFinal);\par
\tab\}\par
\tab o = parseFloat(o);\par
\tab var skip = (el.fade === 0 || el.fade === false || (el.fade == 2 && hs.ie));\par
\tab el.style.visibility = ((skip ? oFinal : o) <= 0) ? 'hidden' : 'visible';\par
\tab if (skip || o < 0 || (dir == 1 && o > oFinal)) \{ \par
\tab\tab if (fn) fn();\par
\tab\tab return;\par
\tab\}\par
\tab if (el.fading && el.fading.i != i) \{\par
\tab\tab clearTimeout(hs.faders[el.fading.i]);\par
\tab\tab o = el.fading.o;\par
\tab\}\par
\tab el.fading = \{i: i, o: o, step: (step || el.fading.step)\};\par
\tab el.style.visibility = (o <= 0) ? 'hidden' : 'visible';\par
\tab hs.setStyles(el, \{ opacity: o \});\par
\tab hs.faders[i] = setTimeout(function() \{\par
\tab\tab hs.fade(el, o + el.fading.step * dir, oFinal, null, fn, i, dir);\par
\tab\}, 25);\par
\},\par
\par
close : function(el) \{\par
\tab var exp = hs.getExpander(el);\par
\tab if (exp) exp.close();\par
\tab return false;\par
\}\par
\}; // end hs object\par
\par
\par
hs.Outline =  function (outlineType, onLoad) \{\par
\tab this.onLoad = onLoad;\par
\tab this.outlineType = outlineType;\par
\tab var v = hs.ieVersion(), tr;\par
\tab\par
\tab this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;\par
\tab if (!outlineType) \{\par
\tab\tab if (onLoad) onLoad();\par
\tab\tab return;\par
\tab\}\par
\tab\par
\tab hs.init();\par
\tab this.table = hs.createElement(\par
\tab\tab 'table', \{ \par
\tab\tab\tab cellSpacing: 0 \par
\tab\tab\}, \{\par
\tab\tab\tab visibility: 'hidden',\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab borderCollapse: 'collapse',\par
\tab\tab\tab width: 0\par
\tab\tab\},\par
\tab\tab hs.container,\par
\tab\tab true\par
\tab );\par
\tab var tbody = hs.createElement('tbody', null, null, this.table, 1);\par
\tab\par
\tab this.td = [];\par
\tab for (var i = 0; i <= 8; i++) \{\par
\tab\tab if (i % 3 == 0) tr = hs.createElement('tr', null, \{ height: 'auto' \}, tbody, true);\par
\tab\tab this.td[i] = hs.createElement('td', null, null, tr, true);\par
\tab\tab var style = i != 4 ? \{ lineHeight: 0, fontSize: 0\} : \{ position : 'relative' \};\par
\tab\tab hs.setStyles(this.td[i], style);\par
\tab\}\par
\tab this.td[4].className = outlineType +' highslide-outline';\par
\tab\par
\tab this.preloadGraphic(); \par
\};\par
\par
hs.Outline.prototype = \{\par
preloadGraphic : function () \{\par
\tab var src = hs.graphicsDir + (hs.outlinesDir || "outlines/")+ this.outlineType +".png";\par
\tab\tab\tab\tab\par
\tab var appendTo = hs.safari ? hs.container : null;\par
\tab this.graphic = hs.createElement('img', null, \{ position: 'absolute', \par
\tab\tab top: '-9999px' \}, appendTo, true); // for onload trigger\par
\tab\par
\tab var pThis = this;\par
\tab this.graphic.onload = function() \{ pThis.onGraphicLoad(); \};\par
\tab\par
\tab this.graphic.src = src;\par
\},\par
\par
onGraphicLoad : function () \{\par
\tab var o = this.offset = this.graphic.width / 4,\par
\tab\tab pos = [[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],\par
\tab\tab dim = \{ height: (2*o) +'px', width: (2*o) +'px' \};\par
\tab for (var i = 0; i <= 8; i++) \{\par
\tab\tab if (pos[i]) \{\par
\tab\tab\tab if (this.hasAlphaImageLoader) \{\par
\tab\tab\tab\tab var w = (i == 1 || i == 7) ? '100%' : this.graphic.width +'px';\par
\tab\tab\tab\tab var div = hs.createElement('div', null, \{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden'\}, this.td[i], true);\par
\tab\tab\tab\tab hs.createElement ('div', null, \{ \par
\tab\tab\tab\tab\tab\tab filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+ this.graphic.src + "')", \par
\tab\tab\tab\tab\tab\tab position: 'absolute',\par
\tab\tab\tab\tab\tab\tab width: w, \par
\tab\tab\tab\tab\tab\tab height: this.graphic.height +'px',\par
\tab\tab\tab\tab\tab\tab left: (pos[i][0]*o)+'px',\par
\tab\tab\tab\tab\tab\tab top: (pos[i][1]*o)+'px'\par
\tab\tab\tab\tab\tab\}, \par
\tab\tab\tab\tab div,\par
\tab\tab\tab\tab true);\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab hs.setStyles(this.td[i], \{ background: 'url('+ this.graphic.src +') '+ (pos[i][0]*o)+'px '+(pos[i][1]*o)+'px'\});\par
\tab\tab\tab\}\par
\tab\tab\tab\par
\tab\tab\tab if (window.opera && (i == 3 || i ==5)) \par
\tab\tab\tab\tab hs.createElement('div', null, dim, this.td[i], true);\par
\tab\tab\tab\par
\tab\tab\tab hs.setStyles (this.td[i], dim);\par
\tab\tab\}\par
\tab\}\par
\tab this.graphic = null;\par
\tab if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();\par
\tab hs.pendingOutlines[this.outlineType] = this;\par
\tab if (this.onLoad) this.onLoad();\par
\},\par
\tab\par
setPosition : function (exp, pos, vis) \{\par
\tab pos = pos || \{\par
\tab\tab x: exp.x.pos,\par
\tab\tab y: exp.y.pos,\par
\tab\tab w: exp.x.size + exp.x.p1 + exp.x.p2,\par
\tab\tab h: exp.y.size + exp.y.p1 + exp.y.p2\par
\tab\};\par
\tab if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset) \par
\tab\tab ? 'visible' : 'hidden';\par
\tab hs.setStyles(this.table, \{\par
\tab\tab left: (pos.x - this.offset) +'px',\par
\tab\tab top: (pos.y - this.offset) +'px',\par
\tab\tab width: (pos.w + 2 * (exp.x.cb + this.offset)) +'px'\par
\tab\});\par
\tab\par
\tab pos.w += 2 * (exp.x.cb - this.offset);\par
\tab pos.h += + 2 * (exp.y.cb - this.offset);\par
\tab hs.setStyles (this.td[4], \{\par
\tab\tab width: pos.w >= 0 ? pos.w +'px' : 0,\par
\tab\tab height: pos.h >= 0 ? pos.h +'px' : 0\par
\tab\});\par
\tab if (this.hasAlphaImageLoader) this.td[3].style.height \par
\tab\tab = this.td[5].style.height = this.td[4].style.height;\par
\},\par
\tab\par
destroy : function(hide) \{\par
\tab if (hide) this.table.style.visibility = 'hidden';\par
\tab else hs.discardElement(this.table);\par
\}\par
\};\par
\par
hs.Dimension = function(exp, dim) \{\par
\tab this.exp = exp;\par
\tab this.dim = dim;\par
\tab this.ucwh = dim == 'x' ? 'Width' : 'Height';\par
\tab this.wh = this.ucwh.toLowerCase();\par
\tab this.uclt = dim == 'x' ? 'Left' : 'Top';\par
\tab this.lt = this.uclt.toLowerCase();\par
\tab this.ucrb = dim == 'x' ? 'Right' : 'Bottom';\par
\tab this.rb = this.ucrb.toLowerCase();\par
\};\par
hs.Dimension.prototype = \{\par
get : function(key) \{\par
\tab switch (key) \{\par
\tab\tab case 'loadingPos':\par
\tab\tab\tab return this.tpos + this.tb + (this.t - hs.loading['offset'+ this.ucwh]) / 2;\par
\tab\tab case 'loadingPosXfade':\par
\tab\tab\tab return this.pos + this.cb+ this.p1 + (this.size - hs.loading['offset'+ this.ucwh]) / 2;\par
\tab\tab case 'wsize':\par
\tab\tab\tab return this.size + 2 * this.cb + this.p1 + this.p2;\par
\tab\tab case 'fitsize':\par
\tab\tab\tab return this.clientSize - this.marginMin - this.marginMax;\par
\tab\tab case 'opos':\par
\tab\tab\tab return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);\par
\tab\tab case 'osize':\par
\tab\tab\tab return this.get('wsize') + (this.exp.outline ? 2*this.exp.outline.offset : 0);\par
\tab\tab case 'imgPad':\par
\tab\tab\tab return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;\par
\tab\tab\par
\tab\}\par
\},\par
calcBorders: function() \{\par
\tab // correct for borders\par
\tab this.cb = (this.exp.content['offset'+ this.ucwh] - this.t) / 2;\par
\tab this.marginMax = hs['margin'+ this.ucrb] + 2 * this.cb;\par
\},\par
calcThumb: function() \{\par
\tab this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : \par
\tab\tab this.exp.el['offset'+ this.ucwh];\par
\tab this.tpos = this.exp.tpos[this.dim];\par
\tab this.tb = (this.exp.el['offset'+ this.ucwh] - this.t) / 2;\par
\tab this.p1 = this.p2 = 0;\par
\tab if (this.tpos == 0) \{\par
\tab\tab this.tpos = (hs.page[this.wh] / 2) + hs.page['scroll'+ this.uclt];\tab\tab\par
\tab\};\par
\},\par
calcExpanded: function() \{\par
\tab this.justify = 'auto';\par
\tab\par
\tab // get alignment\par
\tab if (this.exp.align == 'center') this.justify = 'center';\par
\tab else if (new RegExp(this.lt).test(this.exp.anchor)) this.justify = null;\par
\tab else if (new RegExp(this.rb).test(this.exp.anchor)) this.justify = 'max';\par
\tab\par
\tab\par
\tab // size and position\par
\tab this.pos = this.tpos - this.cb + this.tb;\par
\tab this.size = Math.min(this.full, this.exp['max'+ this.ucwh] || this.full);\par
\tab this.minSize = this.exp.allowSizeReduction ? \par
\tab\tab Math.min(this.exp['min'+ this.ucwh], this.full) : this.full;\par
\tab if (hs.padToMinWidth && this.dim == 'x') this.minSize = this.exp.minWidth;\par
\tab this.target = this.exp['target'+ this.dim.toUpperCase()];\par
\tab this.marginMin = hs['margin'+ this.uclt];\par
\tab this.scroll = hs.page['scroll'+ this.uclt];\par
\tab this.clientSize = hs.page[this.wh];\par
\},\par
setSize: function(i) \{\par
\tab this.size = i;\par
\tab this.exp.content.style[this.wh] = i +'px';\par
\tab this.exp.wrapper.style[this.wh] = this.get('wsize') +'px';\par
\tab if (this.exp.outline) this.exp.outline.setPosition(this.exp);\par
\tab if (this.dim == 'x' && this.exp.overlayBox) this.exp.sizeOverlayBox(true);\par
\tab if (this.dim == 'x' && this.exp.slideshow && this.exp.isImage) \{\par
\tab\tab if (i == this.full) this.exp.slideshow.disable('full-expand');\par
\tab\tab else this.exp.slideshow.enable('full-expand');\par
\tab\}\par
\},\par
setPos: function(i) \{\par
\tab this.pos = i;\par
\tab this.exp.wrapper.style[this.lt] = i +'px';\tab\par
\tab\par
\tab if (this.exp.outline) this.exp.outline.setPosition(this.exp);\par
\tab\par
\}\par
\};\par
\par
hs.Expander = function(a, params, custom, contentType) \{\par
\tab if (document.readyState && hs.ie && !hs.isDomReady) \{\par
\tab\tab hs.onDomReady = function() \{\par
\tab\tab\tab new hs.Expander(a, params, custom, contentType);\par
\tab\tab\};\par
\tab\tab return;\par
\tab\} \par
\tab this.a = a;\par
\tab this.custom = custom;\par
\tab this.contentType = contentType || 'image';\par
\tab this.isImage = !this.isHtml;\par
\tab\par
\tab hs.continuePreloading = false;\par
\tab this.overlays = [];\par
\tab this.last = hs.last;\par
\tab hs.last = null;\par
\tab hs.init();\par
\tab var key = this.key = hs.expanders.length;\par
\tab // override inline parameters\par
\tab for (var i = 0; i < hs.overrides.length; i++) \{\par
\tab\tab var name = hs.overrides[i];\par
\tab\tab this[name] = params && typeof params[name] != 'undefined' ?\par
\tab\tab\tab params[name] : hs[name];\par
\tab\}\par
\tab if (!this.src) this.src = a.href;\par
\tab // get thumb\par
\tab var el = (params && params.thumbnailId) ? hs.$(params.thumbnailId) : a;\par
\tab el = this.thumb = el.getElementsByTagName('img')[0] || el;\par
\tab this.thumbsUserSetId = el.id || a.id;\par
\tab\par
\tab // check if already open\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i] && hs.expanders[i].a == a \par
\tab\tab\tab && !(this.last && this.transitions[1] == 'crossfade')) \{\par
\tab\tab\tab hs.expanders[i].focus();\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\}\tab\par
\tab // cancel other\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) \{\par
\tab\tab\tab hs.expanders[i].cancelLoading();\par
\tab\tab\}\par
\tab\}\par
\tab hs.expanders[this.key] = this;\par
\tab if (!hs.allowMultipleInstances) \{\par
\tab\tab if (hs.expanders[key-1]) hs.expanders[key-1].close();\par
\tab\tab if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])\par
\tab\tab\tab hs.expanders[hs.focusKey].close();\par
\tab\}\par
\tab\par
\tab\par
\tab // initiate metrics\par
\tab this.el = el;\par
\tab this.tpos = hs.getPosition(el);\par
\tab hs.page = hs.getPageSize();\par
\tab var x = this.x = new hs.Dimension(this, 'x');\par
\tab x.calcThumb();\par
\tab var y = this.y = new hs.Dimension(this, 'y');\par
\tab y.calcThumb();\par
\tab\par
\tab // instanciate the wrapper\par
\tab this.wrapper = hs.createElement(\par
\tab\tab 'div', \{\par
\tab\tab\tab id: 'highslide-wrapper-'+ this.key,\par
\tab\tab\tab className: this.wrapperClassName\par
\tab\tab\}, \{\par
\tab\tab\tab visibility: 'hidden',\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab zIndex: hs.zIndexCounter++\par
\tab\tab\}, null, true );\par
\tab\par
\tab this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;\par
\tab if (this.contentType == 'image' && this.outlineWhileAnimating == 2)\par
\tab\tab this.outlineWhileAnimating = 0;\par
\tab\par
\tab // get the outline\par
\tab if (!this.outlineType \par
\tab\tab || (this.last && this.isImage && this.transitions[1] == 'crossfade')) \{\par
\tab\tab this[this.contentType +'Create']();\par
\tab\par
\tab\} else if (hs.pendingOutlines[this.outlineType]) \{\par
\tab\tab this.connectOutline();\par
\tab\tab this[this.contentType +'Create']();\par
\tab\par
\tab\} else \{\par
\tab\tab this.showLoading();\par
\tab\tab var exp = this;\par
\tab\tab new hs.Outline(this.outlineType, \par
\tab\tab\tab function () \{\par
\tab\tab\tab\tab exp.connectOutline();\par
\tab\tab\tab\tab exp[exp.contentType +'Create']();\par
\tab\tab\tab\} \par
\tab\tab );\par
\tab\}\par
\tab return true;\par
\};\par
\par
hs.Expander.prototype = \{\par
\par
connectOutline : function() \{\par
\tab var o = this.outline = hs.pendingOutlines[this.outlineType];\par
\tab o.table.style.zIndex = this.wrapper.style.zIndex;\par
\tab hs.pendingOutlines[this.outlineType] = null;\par
\},\par
\par
showLoading : function() \{\par
\tab if (this.onLoadStarted || this.loading) return;\par
\tab\par
\tab this.loading = hs.loading;\par
\tab var exp = this;\par
\tab this.loading.onclick = function() \{\par
\tab\tab exp.cancelLoading();\par
\tab\};\par
\tab var exp = this, \par
\tab\tab l = this.x.get('loadingPos') +'px',\par
\tab\tab t = this.y.get('loadingPos') +'px';\par
\tab if (!tgt && this.last && this.transitions[1] == 'crossfade') \par
\tab\tab var tgt = this.last; \par
\tab if (tgt) \{\par
\tab\tab l = tgt.x.get('loadingPosXfade') +'px';\par
\tab\tab t = tgt.y.get('loadingPosXfade') +'px';\par
\tab\tab this.loading.style.zIndex = hs.zIndexCounter++;\par
\tab\}\par
\tab setTimeout(function () \{ \par
\tab\tab if (exp.loading) hs.setStyles(exp.loading, \{ left: l, top: t, zIndex: hs.zIndexCounter++ \})\}\par
\tab , 100);\par
\},\par
\par
imageCreate : function() \{\par
\tab var exp = this;\par
\tab\par
\tab var img = document.createElement('img');\par
    this.content = img;\par
    img.onload = function () \{\par
    \tab if (hs.expanders[exp.key]) exp.contentLoaded(); \par
\tab\};\par
    if (hs.blockRightClick) img.oncontextmenu = function() \{ return false; \};\par
    img.className = 'highslide-image';\par
    hs.setStyles(img, \{\par
    \tab visibility: 'hidden',\par
    \tab display: 'block',\par
    \tab position: 'absolute',\par
\tab\tab maxWidth: '9999px',\par
\tab\tab zIndex: 3\par
\tab\});\par
    img.title = hs.lang.restoreTitle;\par
    if (hs.safari) hs.container.appendChild(img);\par
    if (hs.ie && hs.flushImgSize) img.src = null;\par
\tab img.src = this.src;\par
\tab\par
\tab this.showLoading();\par
\},\par
\par
contentLoaded : function() \{\par
\tab try \{\tab\par
\tab\tab if (!this.content) return;\par
\tab\tab this.content.onload = null;\par
\tab\tab if (this.onLoadStarted) return;\par
\tab\tab else this.onLoadStarted = true;\par
\tab\tab\par
\tab\tab var x = this.x, y = this.y;\par
\tab\tab\par
\tab\tab if (this.loading) \{\par
\tab\tab\tab hs.setStyles(this.loading, \{ top: '-9999px' \});\par
\tab\tab\tab this.loading = null;\par
\tab\tab\}\par
\tab\tab //this.marginBottom = hs.marginBottom;\tab\par
\tab\tab\tab x.full = this.content.width;\par
\tab\tab\tab y.full = this.content.height;\par
\tab\tab\tab\par
\tab\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab\tab width: this.x.t +'px',\par
\tab\tab\tab\tab height: this.y.t +'px'\par
\tab\tab\tab\});\par
\tab\tab\par
\tab\tab this.wrapper.appendChild(this.content);\par
\tab\tab hs.setStyles (this.wrapper, \{\par
\tab\tab\tab left: this.x.tpos +'px',\par
\tab\tab\tab top: this.y.tpos +'px'\par
\tab\tab\});\par
\tab\tab hs.container.appendChild(this.wrapper);\par
\tab\tab\par
\tab\tab x.calcBorders();\par
\tab\tab y.calcBorders();\par
\tab\tab\par
\tab\tab\par
\tab\tab this.initSlideshow();\par
\tab\tab this.getOverlays();\par
\tab\tab\par
\tab\tab var ratio = x.full / y.full;\par
\tab\tab\par
\tab\tab x.calcExpanded();\par
\tab\tab this.justify(x);\par
\tab\tab\par
\tab\tab y.calcExpanded();\par
\tab\tab this.justify(y);\par
\tab\tab if (this.overlayBox) this.sizeOverlayBox(0, 1);\par
\tab\tab\par
\tab\tab if (this.allowSizeReduction) \{\par
\tab\tab\tab\tab this.correctRatio(ratio);\par
\tab\tab\tab var ss = this.slideshow;\tab\tab\tab\par
\tab\tab\tab if (ss && this.last && ss.controls && ss.fixedControls) \{\par
\tab\tab\tab\tab var pos = ss.overlayOptions.position || '', p;\par
\tab\tab\tab\tab for (var dim in hs.oPos) for (var i = 0; i < 5; i++) \{\par
\tab\tab\tab\tab\tab p = this[dim];\par
\tab\tab\tab\tab\tab if (pos.match(hs.oPos[dim][i])) \{\par
\tab\tab\tab\tab\tab\tab p.pos = this.last[dim].pos \par
\tab\tab\tab\tab\tab\tab\tab + (this.last[dim].p1 - p.p1)\par
\tab\tab\tab\tab\tab\tab\tab + (this.last[dim].size - p.size) * [0, 0, .5, 1, 1][i];\par
\tab\tab\tab\tab\tab\tab if (ss.fixedControls == 'fit') \{\par
\tab\tab\tab\tab\tab\tab\tab if (p.pos + p.size + p.p1 + p.p2 > p.scroll + p.clientSize - p.marginMax)\par
\tab\tab\tab\tab\tab\tab\tab\tab p.pos = p.scroll + p.clientSize - p.size - p.marginMin - p.marginMax - p.p1 - p.p2;\par
\tab\tab\tab\tab\tab\tab\tab if (p.pos < p.scroll + p.marginMin) p.pos = p.scroll + p.marginMin; \par
\tab\tab\tab\tab\tab\tab\} \par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\tab\tab\par
\tab\tab\tab\par
\tab\tab\tab if (this.isImage && this.x.full > this.x.size) \{\par
\tab\tab\tab\tab this.createFullExpand();\par
\tab\tab\tab\tab if (this.overlays.length == 1) this.sizeOverlayBox();\tab\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab this.show();\par
\tab\tab\par
\tab\} catch (e) \{\par
\tab\tab window.location.href = this.src;\par
\tab\}\par
\},\par
\par
justify : function (p, moveOnly) \{\par
\tab var tgtArr, tgt = p.target, dim = p == this.x ? 'x' : 'y';\par
\tab\par
\tab if (tgt && tgt.match(/ /)) \{\par
\tab\tab tgtArr = tgt.split(' ');\par
\tab\tab tgt = tgtArr[0];\par
\tab\}\par
\tab if (tgt && hs.$(tgt)) \{\par
\tab\tab p.pos = hs.getPosition(hs.$(tgt))[dim];\par
\tab\tab if (tgtArr && tgtArr[1] && tgtArr[1].match(/^[-]?[0-9]+px$/)) \par
\tab\tab\tab p.pos += parseInt(tgtArr[1]);\par
\tab\tab\par
\tab\} else if (p.justify == 'auto' || p.justify == 'center') \{\par
\tab\par
\tab\tab var hasMovedMin = false;\par
\tab\tab\par
\tab\tab var allowReduce = hs.allowSizeReduction;\par
\tab\tab if (p.justify == 'center') p.pos = Math.round(p.scroll + (p.clientSize - p.marginMax - p.get('wsize')) / 2);\par
\tab\tab else\par
\tab\tab\tab p.pos = Math.round(p.pos - ((p.get('wsize') - p.t) / 2));\par
\tab\tab if (p.pos < p.scroll + p.marginMin) \{\par
\tab\tab\tab p.pos = p.scroll + p.marginMin;\par
\tab\tab\tab hasMovedMin = true;\tab\tab\par
\tab\tab\}\par
\tab\tab if (!moveOnly && p.size < p.minSize) \{\par
\tab\tab\tab p.size = p.minSize;\par
\tab\tab\tab allowReduce = false;\par
\tab\tab\}\par
\tab\tab if (p.pos + p.get('wsize') > p.scroll + p.clientSize - p.marginMax) \{\par
\tab\tab\tab if (!moveOnly && hasMovedMin && allowReduce) \{\par
\tab\tab\tab\tab p.size = p.get('fitsize'); // can't expand more\par
\tab\tab\tab\} else if (p.get('wsize') < p.get('fitsize')) \{\par
\tab\tab\tab\tab p.pos = p.scroll + p.clientSize - p.marginMax - p.get('wsize');\par
\tab\tab\tab\} else \{ // image larger than viewport\par
\tab\tab\tab\tab p.pos = p.scroll + p.marginMin;\par
\tab\tab\tab\tab if (!moveOnly && allowReduce) p.size = p.get('fitsize');\par
\tab\tab\tab\}\tab\tab\tab\par
\tab\tab\}\par
\tab\tab\par
\tab\tab if (!moveOnly && p.size < p.minSize) \{\par
\tab\tab\tab p.size = p.minSize;\par
\tab\tab\tab allowReduce = false;\par
\tab\tab\}\par
\tab\tab\par
\tab\par
\tab\} else if (p.justify == 'max') \{\par
\tab\tab p.pos = Math.floor(p.pos - p.size + p.t);\par
\tab\}\par
\tab\par
\tab\tab\par
\tab if (p.pos < p.marginMin) \{\par
\tab\tab var tmpMin = p.pos;\par
\tab\tab p.pos = p.marginMin; \par
\tab\tab\par
\tab\tab if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);\par
\tab\tab\par
\tab\}\par
\},\par
\par
correctRatio : function(ratio) \{\par
\tab var x = this.x, y = this.y;\par
\tab var changed = false;\par
\tab if (x.size / y.size > ratio) \{ // width greater\par
\tab\tab x.size = y.size * ratio;\par
\tab\tab if (x.size < x.minSize) \{ // below minWidth\par
\tab\tab\tab if (hs.padToMinWidth) x.imgSize = x.size;\tab\tab\tab\par
\tab\tab\tab x.size = x.minSize;\par
\tab\tab\tab if (!x.imgSize)\par
\tab\tab\tab y.size = x.size / ratio;\par
\tab\tab\}\par
\tab\tab changed = true;\par
\tab\par
\tab\} else if (x.size / y.size < ratio) \{ // height greater\par
\tab\tab var tmpHeight = y.size;\par
\tab\tab y.size = x.size / ratio;\par
\tab\tab changed = true;\par
\tab\}\par
\tab this.fitOverlayBox(ratio);\par
\tab\par
\tab if (changed) \{\par
\tab\tab x.pos = x.tpos - x.cb + x.tb;\par
\tab\tab x.minSize = x.size;\par
\tab\tab this.justify(x, true);\par
\tab\par
\tab\tab y.pos = y.tpos - y.cb + y.tb;\par
\tab\tab y.minSize = y.size;\par
\tab\tab this.justify(y, true);\par
\tab\tab if (this.overlayBox) this.sizeOverlayBox();\par
\tab\}\par
\},\par
fitOverlayBox : function(ratio) \{\par
\tab var x = this.x, y = this.y;\par
\tab if (this.overlayBox) \{\par
\tab\tab while (y.size > this.minHeight && x.size > this.minWidth \par
\tab\tab\tab\tab &&  y.get('wsize')  > y.get('fitsize')) \{\par
\tab\tab\tab y.size -= 10;\par
\tab\tab\tab if (ratio) x.size = y.size * ratio;\par
\tab\tab\tab this.sizeOverlayBox(0, 1);\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
show : function () \{\par
\tab this.doShowHide('hidden');\par
\tab // Apply size change\par
\tab this.changeSize(\par
\tab\tab 1,\par
\tab\tab\{ \par
\tab\tab\tab xpos: this.x.tpos + this.x.tb - this.x.cb,\par
\tab\tab\tab ypos: this.y.tpos + this.y.tb - this.y.cb,\par
\tab\tab\tab xsize: this.x.t,\par
\tab\tab\tab ysize: this.y.t,\par
\tab\tab\tab xp1: 0,\par
\tab\tab\tab xp2: 0,\par
\tab\tab\tab yp1: 0,\par
\tab\tab\tab yp2: 0,\par
\tab\tab\tab ximgSize: this.x.t,\par
\tab\tab\tab ximgPad: 0,\par
\tab\tab\tab o: hs.outlineStartOffset\par
\tab\tab\},\par
\tab\tab\{\par
\tab\tab\tab xpos: this.x.pos,\par
\tab\tab\tab ypos: this.y.pos,\par
\tab\tab\tab xsize: this.x.size,\par
\tab\tab\tab ysize: this.y.size,\par
\tab\tab\tab xp1: this.x.p1,\par
\tab\tab\tab yp1: this.y.p1,\par
\tab\tab\tab xp2: this.x.p2,\par
\tab\tab\tab yp2: this.y.p2,\par
\tab\tab\tab ximgSize: this.x.imgSize,\par
\tab\tab\tab ximgPad: this.x.get('imgPad'),\par
\tab\tab\tab o: this.outline ? this.outline.offset : 0\par
\tab\tab\},\par
\tab\tab hs.expandDuration\par
\tab );\par
\},\par
\par
changeSize : function(up, from, to, dur) \{\par
\tab // transition\par
\tab var trans = this.transitions,\par
\tab other = up ? (this.last ? this.last.a : null) : hs.upcoming,\par
\tab t = (trans[1] && other \par
\tab\tab\tab && hs.getParam(other, 'transitions')[1] == trans[1]) ?\par
\tab\tab trans[1] : trans[0];\par
\tab\tab\par
\tab\par
\tab if (this[t] && t != 'expand') \{\par
\tab\tab this[t](up, from, to); \par
\tab\tab return;\par
\tab\}\par
\tab if (up) hs.setStyles(this.wrapper, \{ opacity: 1 \});\par
\tab\par
\tab if (this.outline && !this.outlineWhileAnimating) \{\par
\tab\tab if (up) this.outline.setPosition(this);\par
\tab\tab else this.outline.destroy();\par
\tab\}\par
\tab\par
\tab\par
\tab if (!up && this.overlayBox) \{\par
\tab\tab if (this.slideshow) \{\par
\tab\tab\tab var c = this.slideshow.controls;\par
\tab\tab\tab if (c && hs.getExpander(c) == this) c.parentNode.removeChild(c);\par
\tab\tab\}\par
\tab\tab hs.discardElement(this.overlayBox);\par
\tab\}\par
\tab if (this.fadeInOut) \{\par
\tab\tab from.op = up ? 0 : 1;\par
\tab\tab to.op = up;\par
\tab\}\par
\tab var t,\par
\tab\tab exp = this,\par
\tab\tab easing = Math[this.easing] || Math.easeInQuad,\par
\tab\tab steps = (up ? hs.expandSteps : hs.restoreSteps) || parseInt(dur / 25) || 1;\par
\tab if (!up) easing = Math[this.easingClose] || easing;\par
\tab for (var i = 1; i <= steps ; i++) \{\par
\tab\tab t = Math.round(i * (dur / steps));\par
\tab\tab\par
\tab\tab (function()\{\par
\tab\tab\tab var pI = i, size = \{\};\par
\tab\tab\tab\par
\tab\tab\tab for (var x in from) \{\par
\tab\tab\tab\tab size[x] = easing(t, from[x], to[x] - from[x], dur);\par
\tab\tab\tab\tab if (isNaN(size[x])) size[x] = to[x];\par
\tab\tab\tab\tab if (!/^op$/.test(x)) size[x] = Math.round(size[x]);\par
\tab\tab\tab\}\par
\tab\tab\tab setTimeout ( function() \{\par
\tab\tab\tab\tab if (up && pI == 1) \{\par
\tab\tab\tab\tab\tab exp.content.style.visibility = 'visible';\par
\tab\tab\tab\tab\tab exp.a.className += ' highslide-active-anchor';\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab exp.setSize(size);\par
\tab\tab\tab\}, t);\tab\tab\tab\tab\par
\tab\tab\})();\par
\tab\}\par
\tab\par
\tab if (up) \{ \par
\tab\tab\tab\par
\tab\tab setTimeout(function() \{\par
\tab\tab\tab if (exp.outline) exp.outline.table.style.visibility = "visible";\par
\tab\tab\}, t);\par
\tab\tab setTimeout(function() \{\par
\tab\tab\tab exp.afterExpand();\par
\tab\tab\}, t + 50);\par
\tab\}\par
\tab else setTimeout(function() \{ exp.afterClose(); \}, t);\par
\},\par
\par
setSize : function (to) \{\par
\tab try \{\tab\tab\par
\tab\tab if (to.op) hs.setStyles(this.wrapper, \{ opacity: to.op \});\par
\tab\tab hs.setStyles ( this.wrapper, \{\par
\tab\tab\tab width : (to.xsize +to.xp1 + to.xp2 +\par
\tab\tab\tab\tab 2 * this.x.cb) +'px',\par
\tab\tab\tab height : (to.ysize +to.yp1 + to.yp2 +\par
\tab\tab\tab\tab 2 * this.y.cb) +'px',\par
\tab\tab\tab left: to.xpos +'px',\par
\tab\tab\tab top: to.ypos +'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab top: to.yp1 +'px',\par
\tab\tab\tab left: (to.xp1 + to.ximgPad) +'px',\par
\tab\tab\tab width: (to.ximgSize ||to.xsize) +'px',\par
\tab\tab\tab height: to.ysize +'px'\par
\tab\tab\});\par
\tab\tab\par
\tab\tab if (this.outline && this.outlineWhileAnimating) \{\par
\tab\tab\tab var o = this.outline.offset - to.o;\par
\tab\tab\tab this.outline.setPosition(this, \{\par
\tab\tab\tab\tab x: to.xpos + o, \par
\tab\tab\tab\tab y: to.ypos + o, \par
\tab\tab\tab\tab w: to.xsize + to.xp1 + to.xp2 + - 2 * o, \par
\tab\tab\tab\tab h: to.ysize + to.yp1 + to.yp2 + - 2 * o\par
\tab\tab\tab\}, 1);\par
\tab\tab\}\par
\tab\tab\tab\par
\tab\tab this.wrapper.style.visibility = 'visible';\par
\tab\tab\par
\tab\} catch (e) \{\par
\tab\tab window.location.href = this.src;\tab\par
\tab\}\par
\},\par
\par
fade : function(up, from, to) \{\par
\tab this.outlineWhileAnimating = false;\par
\tab var exp = this,\tab t = up ? 250 : 0;\par
\tab\par
\tab if (up) \{\par
\tab\tab hs.setStyles(this.wrapper, \{ opacity: 0 \});\par
\tab\tab this.setSize(to);\par
\tab\tab this.content.style.visibility = 'visible';\par
\par
\tab\tab hs.fade (this.wrapper, 0, 1);\par
\tab\}\par
\tab\par
\tab if (this.outline) \{\par
\tab\tab this.outline.table.style.zIndex = this.wrapper.style.zIndex;\par
\tab\tab var dir = up || -1;\par
\tab\tab for (var i = from.o; dir * i <= dir * to.o; i += dir, t += 25) \{\par
\tab\tab\tab (function() \{\par
\tab\tab\tab\tab var o = up ? to.o - i : from.o - i;\par
\tab\tab\tab\tab setTimeout(function() \{\par
\tab\tab\tab\tab\tab exp.outline.setPosition(exp, \{\par
\tab\tab\tab\tab\tab\tab x: (exp.x.pos + o), \par
\tab\tab\tab\tab\tab\tab y: (exp.y.pos + o),\par
\tab\tab\tab\tab\tab\tab w: (exp.x.size - 2 * o + exp.x.p1 + exp.x.p2), \par
\tab\tab\tab\tab\tab\tab h: (exp.y.size - 2 * o + exp.y.p1 + exp.y.p2)\par
\tab\tab\tab\tab\tab\}, 1);\par
\tab\tab\tab\tab\}, t);\par
\tab\tab\tab\})();\par
\tab\tab\}\par
\tab\}\par
\tab\par
\tab\par
\tab if (up) setTimeout(function() \{ exp.afterExpand(); \}, t+50);\par
\tab else \{\par
\tab\tab setTimeout( function() \{\par
\tab\tab\tab if (exp.outline) exp.outline.destroy(exp.preserveContent);\par
\tab\tab\tab hs.fade (exp.wrapper, 1, 0);\par
\tab\tab\tab setTimeout( function() \{\par
\tab\tab\tab\tab exp.afterClose();\par
\tab\tab\tab\}, 250);\par
\tab\tab\}, t);\tab\tab\par
\tab\}\par
\},\par
\par
crossfade : function (up, from, to) \{\par
\tab if (!up) return;\par
\tab var exp = this, steps = parseInt(hs.transitionDuration / 25) || 1, last = this.last;\par
\tab hs.removeEventListener(document, 'mousemove', hs.dragHandler);\par
\tab\par
\tab hs.setStyles(this.content, \{ \par
\tab\tab width: (to.ximgSize || to.xsize) +'px', \par
\tab\tab height: to.ysize +'px'\tab\tab\par
\tab\});\par
\tab this.outline = this.last.outline;\par
\tab this.last.outline = null;\par
\tab this.fadeBox = hs.createElement('div', \{\par
\tab\tab\tab className: 'highslide-image'\par
\tab\tab\}, \{ \par
\tab\tab\tab position: 'absolute', \par
\tab\tab\tab zIndex: 4,\par
\tab\tab\tab overflow: 'hidden',\par
\tab\tab\tab display: 'none'\par
\tab\tab\}\par
\tab );\par
\tab var names = \{ oldImg: last, newImg: this \};\par
\tab for (var x in names) \{ \tab\par
\tab\tab this[x] = names[x].content.cloneNode(1);\par
\tab\tab hs.setStyles(this[x], \{\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab border: 0,\par
\tab\tab\tab visibility: 'visible'\par
\tab\tab\});\par
\tab\tab this.fadeBox.appendChild(this[x]);\par
\tab\}\par
\tab this.wrapper.appendChild(this.fadeBox);\par
\tab from = \{\par
\tab\tab xpos: last.x.pos,\par
\tab\tab xsize: last.x.size,\par
\tab\tab xp1: last.x.p1,\par
\tab\tab xp2: last.x.p2,\par
\tab\tab ximgSize: last.x.imgSize || last.x.size,\par
\tab\tab ximgPad: last.x.get('imgPad'),\par
\tab\tab ypos: last.y.pos,\par
\tab\tab ysize: last.y.size,\par
\tab\tab yp1: last.y.p1,\par
\tab\tab yp2: last.y.p2,\par
\tab\tab o: 1 / steps\par
\tab\};\par
\tab to.ysize = this.y.size;\par
\tab to.o = 1;\par
\tab if (!to.ximgSize) to.ximgSize = to.xsize;\par
\tab var t, easing = Math.easeInOutQuad;\par
\tab\par
\tab if (steps > 1) this.crossfadeStep(from);\par
\tab function prep() \{\par
\tab\tab if (exp.overlayBox) \{\par
\tab\tab\tab exp.overlayBox.className = '';\par
\tab\tab\tab exp.wrapper.appendChild(exp.overlayBox);\par
\tab\tab\tab\tab\par
\tab\tab\tab for (var i = 0; i < exp.last.overlays.length; i++) \{\par
\tab\tab\tab\tab var oDiv = hs.$('hsId'+ exp.last.overlays[i]);\par
\tab\tab\tab\tab if (oDiv.reuse === exp.key) exp.overlayBox.appendChild(oDiv);\par
\tab\tab\tab\tab else hs.fade(oDiv, oDiv.opacity, 0);\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab exp.fadeBox.style.display = '';\par
\tab\tab exp.last.content.style.display = 'none';\par
\tab\};\par
\tab if (/rv:1\\.[0-8].+Gecko/.test(navigator.userAgent)) setTimeout(prep, 0);\par
\tab else prep();\par
\tab if (hs.safari) \{\par
\tab\tab var match = navigator.userAgent.match(/Safari\\/([0-9]\{3\})/);\par
\tab\tab if (match && parseInt(match[1]) < 525) this.wrapper.style.visibility = 'visible';\par
\tab\}  \par
\tab\par
\tab for (var i = 1; i <= steps; i++) \{\par
\tab\tab t = Math.round(i * (hs.transitionDuration / steps));\par
\tab\tab\par
\tab\tab (function()\{\par
\tab\tab\tab var size = \{\}, pI = i;\par
\tab\tab\tab for (var x in from)\tab\{\par
\tab\tab\tab\tab var val = easing(t, from[x], to[x] - from[x], hs.transitionDuration);\par
\tab\tab\tab\tab if (isNaN(val)) val = to[x];\par
\tab\tab\tab\tab size[x] = (x != 'o') ? Math.round(val) : val;\par
\tab\tab\tab\}\par
\tab\tab\tab\par
\tab\tab\tab setTimeout ( function() \{\par
\tab\tab\tab\tab exp.crossfadeStep(size);\par
\tab\tab\tab\}, t);\tab\tab\tab\tab\par
\tab\tab\})();\par
\tab\}\par
\tab setTimeout ( function () \{\par
\tab\tab exp.crossfadeEnd();\par
\tab\}, t + 100);\par
\par
\},\par
\par
crossfadeStep : function (size) \{\par
\tab try \{\par
\tab\tab if (this.outline) this.outline.setPosition(this, \{ \par
\tab\tab\tab x: size.xpos, \par
\tab\tab\tab y: size.ypos, \par
\tab\tab\tab w: size.xsize + size.xp1 + size.xp2, \par
\tab\tab\tab h: size.ysize + size.yp1 + size.yp2\par
\tab\tab\}, 1);\par
\tab\tab this.last.wrapper.style.clip = 'rect('\par
\tab\tab\tab + (size.ypos - this.last.y.pos)+'px, '\par
\tab\tab\tab + (size.xsize + size.xp1 + size.xp2 + size.xpos + 2 * this.last.x.cb - this.last.x.pos) +'px, '\par
\tab\tab\tab + (size.ysize + size.yp1 + size.yp2 + size.ypos + 2 * this.last.y.cb - this.last.y.pos) +'px, '\par
\tab\tab\tab + (size.xpos - this.last.x.pos)+'px)';\par
\tab\tab\tab\par
\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab top: size.yp1 +'px',\par
\tab\tab\tab left: (size.xp1 + this.x.get('imgPad')) +'px',\par
\tab\tab\tab marginTop: (this.y.pos - size.ypos) +'px',\par
\tab\tab\tab marginLeft: (this.x.pos - size.xpos) +'px'\par
\tab\tab\});\par
\tab\tab\par
\tab\tab hs.setStyles(this.wrapper, \{\par
\tab\tab\tab top: size.ypos +'px',\par
\tab\tab\tab left: size.xpos +'px',\par
\tab\tab\tab width: (size.xp1 + size.xp2 + size.xsize + 2 * this.x.cb)+ 'px',\par
\tab\tab\tab height: (size.yp1 + size.yp2 + size.ysize + 2 * this.y.cb) + 'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.fadeBox, \{\par
\tab\tab\tab width: (size.ximgSize || size.xsize) + 'px',\par
\tab\tab\tab height: size.ysize +'px',\par
\tab\tab\tab left: (size.xp1 + size.ximgPad)  +'px',\par
\tab\tab\tab top: size.yp1 +'px',\par
\tab\tab\tab visibility: 'visible'\par
\tab\tab\});\par
\tab\tab\par
\tab\tab hs.setStyles(this.oldImg, \{\par
\tab\tab\tab top: (this.last.y.pos - size.ypos + this.last.y.p1 - size.yp1)+'px',\par
\tab\tab\tab left: (this.last.x.pos - size.xpos + this.last.x.p1 - size.xp1 + this.last.x.get('imgPad') - size.ximgPad)+'px'\par
\tab\tab\});\tab\tab\par
\tab\tab\par
\tab\tab hs.setStyles(this.newImg, \{\par
\tab\tab\tab opacity: size.o,\par
\tab\tab\tab top: (this.y.pos - size.ypos + this.y.p1 - size.yp1) +'px',\par
\tab\tab\tab left: (this.x.pos - size.xpos + this.x.p1 - size.xp1 + this.x.get('imgPad') - size.ximgPad) +'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.overlayBox, \{\par
\tab\tab\tab width: size.xsize + 'px',\par
\tab\tab\tab height: size.ysize +'px',\par
\tab\tab\tab left: (size.xp1 + this.x.cb)  +'px',\par
\tab\tab\tab top: (size.yp1 + this.y.cb) +'px'\par
\tab\tab\});\par
\tab\} catch (e) \{\}\par
\},\par
crossfadeEnd : function() \{\par
\tab this.wrapper.style.background = this.wrapperBG || '';\par
\tab\par
\tab this.wrapper.style.visibility = this.content.style.visibility = 'visible';\par
\tab this.fadeBox.style.display = 'none';\par
\tab this.a.className += ' highslide-active-anchor';\par
\tab this.afterExpand();\par
\tab this.last.afterClose();\par
\},\par
reuseOverlay : function(o, el) \{\par
\tab if (!this.last) return false;\par
\tab for (var i = 0; i < this.last.overlays.length; i++) \{\par
\tab\tab var oDiv = hs.$('hsId'+ this.last.overlays[i]);\par
\tab\tab if (oDiv && oDiv.hsId == o.hsId) \{\par
\tab\tab\tab this.genOverlayBox();\par
\tab\tab\tab oDiv.reuse = this.key;\par
\tab\tab\tab hs.push(this.overlays, this.last.overlays[i]);\par
\tab\tab\tab return true;\par
\tab\tab\}\par
\tab\}\par
\tab return false;\par
\},\par
\par
\par
afterExpand : function() \{\par
\tab this.isExpanded = true;\tab\par
\tab this.focus();\par
\tab\par
\tab if (this.dimmingOpacity) hs.dim(this);\par
\tab if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;\par
\tab this.prepareNextOutline();\par
\tab\par
\tab\par
\tab var p = hs.page, mX = hs.mouse.x + p.scrollLeft, mY = hs.mouse.y + p.scrollTop;\par
\tab this.mouseIsOver = this.x.pos < mX && mX < this.x.pos + this.x.get('wsize')\par
\tab\tab && this.y.pos < mY && mY < this.y.pos + this.y.get('wsize');\par
\tab\par
\tab if (this.overlayBox) this.showOverlays();\par
\tab\par
\},\par
\par
\par
prepareNextOutline : function() \{\par
\tab var key = this.key;\par
\tab var outlineType = this.outlineType;\par
\tab new hs.Outline(outlineType, \par
\tab\tab function () \{ try \{ hs.expanders[key].preloadNext(); \} catch (e) \{\} \});\par
\},\par
\par
\par
preloadNext : function() \{\par
\tab var next = this.getAdjacentAnchor(1);\par
\tab if (next && next.onclick.toString().match(/hs\\.expand/)) \par
\tab\tab var img = hs.createElement('img', \{ src: hs.getSrc(next) \});\par
\},\par
\par
\par
getAdjacentAnchor : function(op) \{\par
\tab var current = this.getAnchorIndex(), as = hs.anchors.groups[this.slideshowGroup || 'none'];\par
\tab\par
\tab /*< ? if ($cfg->slideshow) : ?>s*/\par
\tab if (!as[current + op] && this.slideshow && this.slideshow.repeat) \{\par
\tab\tab if (op == 1) return as[0];\par
\tab\tab else if (op == -1) return as[as.length-1];\par
\tab\}\par
\tab /*< ? endif ?>s*/\par
\tab return as[current + op] || null;\par
\},\par
\par
getAnchorIndex : function() \{\par
\tab var arr = hs.anchors.groups[this.slideshowGroup || 'none'];\par
\tab for (var i = 0; i < arr.length; i++) \{\par
\tab\tab if (arr[i] == this.a) return i; \par
\tab\}\par
\tab return null;\par
\},\par
\par
\par
getNumber : function() \{\par
\tab if (this[this.numberPosition]) \{\par
\tab\tab var arr = hs.anchors.groups[this.slideshowGroup || 'none'];\par
\tab\tab var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);\par
\tab\tab this[this.numberPosition].innerHTML = \par
\tab\tab\tab '<div class="highslide-number">'+ s +'</div>'+ this[this.numberPosition].innerHTML;\par
\tab\}\par
\},\par
initSlideshow : function() \{\par
\tab if (this.slideshow) return;\par
\tab\par
\tab if (!this.last) \{\par
\tab\tab for (var i = 0; i < hs.slideshows.length; i++) \{\par
\tab\tab\tab var ss = hs.slideshows[i], sg = ss.slideshowGroup;\par
\tab\tab\tab if (typeof sg == 'undefined' || sg === null || sg === this.slideshowGroup) \par
\tab\tab\tab\tab this.slideshow = new hs.Slideshow(ss);\par
\tab\tab\} \par
\tab\} else \{\par
\tab\tab this.slideshow = this.last.slideshow;\par
\tab\}\par
\tab var ss = this.slideshow;\par
\tab if (!ss) return;\par
\tab var exp = ss.exp = this;\par
\tab\par
\tab ss.checkFirstAndLast();\par
\tab ss.disable('full-expand');\par
\tab if (ss.controls) \{\par
\tab\tab var o = ss.overlayOptions || \{\};\par
\tab\tab o.overlayId = ss.controls;\par
\tab\tab o.hsId = 'controls';\tab\tab\par
\tab\tab this.createOverlay(o);\par
\tab\}\par
\tab if (!this.last && this.autoplay) ss.play(true);\par
\tab if (ss.autoplay) \{\par
\tab\tab ss.autoplay = setTimeout(function() \{\par
\tab\tab\tab hs.next(exp.key);\par
\tab\tab\}, (ss.interval || 500));\par
\tab\}\par
\},\par
\par
cancelLoading : function() \{\tab\par
\tab hs.expanders[this.key] = null;\par
\tab if (hs.upcoming == this.a) hs.upcoming = null;\par
\tab hs.undim(this.key);\par
\tab if (this.loading) hs.loading.style.left = '-9999px';\par
\},\par
\par
writeCredits : function () \{\par
\tab if (this.credits) return;\par
\tab this.credits = hs.createElement('a', \{\par
\tab\tab href: hs.creditsHref,\par
\tab\tab className: 'highslide-credits',\par
\tab\tab innerHTML: hs.lang.creditsText,\par
\tab\tab title: hs.lang.creditsTitle\par
\tab\});\par
\tab this.createOverlay(\{ \par
\tab\tab overlayId: this.credits, \par
\tab\tab position: 'top left', \par
\tab\tab hsId: 'credits' \par
\tab\});\par
\},\par
\par
getInline : function(types, addOverlay) \{\par
\tab for (var i = 0; i < types.length; i++) \{\par
\tab\tab var type = types[i], s = null;\par
\tab\tab if (!this[type +'Id'] && this.thumbsUserSetId)  \par
\tab\tab\tab this[type +'Id'] = type +'-for-'+ this.thumbsUserSetId;\par
\tab\tab if (this[type +'Id']) this[type] = hs.getNode(this[type +'Id']);\par
\tab\tab if (!this[type] && !this[type +'Text'] && this[type +'Eval']) try \{\par
\tab\tab\tab s = eval(this[type +'Eval']);\par
\tab\tab\} catch (e) \{\}\par
\tab\tab if (!this[type] && this[type +'Text']) \{\par
\tab\tab\tab s = this[type +'Text'];\par
\tab\tab\}\par
\tab\tab if (!this[type] && !s) \{\par
\tab\tab\tab var next = this.a.nextSibling;\par
\tab\tab\tab while (next && !hs.isHsAnchor(next)) \{\par
\tab\tab\tab\tab if ((new RegExp('highslide-'+ type)).test(next.className || null)) \{\par
\tab\tab\tab\tab\tab this[type] = next.cloneNode(1);\par
\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab next = next.nextSibling;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab if (!this[type] && !s && this.numberPosition == type) s = '\\n';\par
\tab\tab\par
\tab\tab if (!this[type] && s) this[type] = hs.createElement('div', \par
\tab\tab\tab\tab\{ className: 'highslide-'+ type, innerHTML: s \} );\par
\tab\tab\par
\tab\tab if (addOverlay && this[type]) \{\par
\tab\tab\tab var o = \{ position: (type == 'heading') ? 'above' : 'below' \};\par
\tab\tab\tab for (var x in this[type+'Overlay']) o[x] = this[type+'Overlay'][x];\par
\tab\tab\tab o.overlayId = this[type];\par
\tab\tab\tab this.createOverlay(o);\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
\par
// on end move and resize\par
doShowHide : function(visibility) \{\par
\tab if (hs.hideSelects) this.showHideElements('SELECT', visibility);\par
\tab if (hs.hideIframes) this.showHideElements('IFRAME', visibility);\par
\tab if (hs.geckoMac) this.showHideElements('*', visibility);\par
\},\par
showHideElements : function (tagName, visibility) \{\par
\tab var els = document.getElementsByTagName(tagName);\par
\tab var prop = tagName == '*' ? 'overflow' : 'visibility';\par
\tab for (var i = 0; i < els.length; i++) \{\par
\tab\tab if (prop == 'visibility' || (document.defaultView.getComputedStyle(\par
\tab\tab\tab\tab els[i], "").getPropertyValue('overflow') == 'auto'\par
\tab\tab\tab\tab || els[i].getAttribute('hidden-by') != null)) \{\par
\tab\tab\tab var hiddenBy = els[i].getAttribute('hidden-by');\par
\tab\tab\tab if (visibility == 'visible' && hiddenBy) \{\par
\tab\tab\tab\tab hiddenBy = hiddenBy.replace('['+ this.key +']', '');\par
\tab\tab\tab\tab els[i].setAttribute('hidden-by', hiddenBy);\par
\tab\tab\tab\tab if (!hiddenBy) els[i].style[prop] = els[i].origProp;\par
\tab\tab\tab\} else if (visibility == 'hidden') \{ // hide if behind\par
\tab\tab\tab\tab var elPos = hs.getPosition(els[i]);\par
\tab\tab\tab\tab elPos.w = els[i].offsetWidth;\par
\tab\tab\tab\tab elPos.h = els[i].offsetHeight;\par
\tab\tab\tab\tab if (!this.dimmingOpacity) \{ // hide all if dimming\par
\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab var clearsX = (elPos.x + elPos.w < this.x.get('opos') \par
\tab\tab\tab\tab\tab\tab || elPos.x > this.x.get('opos') + this.x.get('osize'));\par
\tab\tab\tab\tab\tab var clearsY = (elPos.y + elPos.h < this.y.get('opos') \par
\tab\tab\tab\tab\tab\tab || elPos.y > this.y.get('opos') + this.y.get('osize'));\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab var wrapperKey = hs.getWrapperKey(els[i]);\par
\tab\tab\tab\tab if (!clearsX && !clearsY && wrapperKey != this.key) \{ // element falls behind image\par
\tab\tab\tab\tab\tab if (!hiddenBy) \{\par
\tab\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', '['+ this.key +']');\par
\tab\tab\tab\tab\tab\tab els[i].origProp = els[i].style[prop];\par
\tab\tab\tab\tab\tab\tab els[i].style[prop] = 'hidden';\par
\tab\tab\tab\tab\tab\} else if (!hiddenBy.match('['+ this.key +']')) \{\par
\tab\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', hiddenBy + '['+ this.key +']');\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} else if ((hiddenBy == '['+ this.key +']' || hs.focusKey == wrapperKey)\par
\tab\tab\tab\tab\tab\tab && wrapperKey != this.key) \{ // on move\par
\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', '');\par
\tab\tab\tab\tab\tab els[i].style[prop] = els[i].origProp || '';\par
\tab\tab\tab\tab\} else if (hiddenBy && hiddenBy.match('['+ this.key +']')) \{\par
\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', hiddenBy.replace('['+ this.key +']', ''));\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
focus : function() \{\par
\tab this.wrapper.style.zIndex = hs.zIndexCounter++;\par
\tab // blur others\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i] && i == hs.focusKey) \{\par
\tab\tab\tab var blurExp = hs.expanders[i];\par
\tab\tab\tab blurExp.content.className += ' highslide-'+ blurExp.contentType +'-blur';\par
\tab\tab\tab\tab blurExp.content.style.cursor = hs.ie ? 'hand' : 'pointer';\par
\tab\tab\tab\tab blurExp.content.title = hs.lang.focusTitle;\par
\tab\tab\}\par
\tab\}\par
\tab\par
\tab // focus this\par
\tab if (this.outline) this.outline.table.style.zIndex \par
\tab\tab = this.wrapper.style.zIndex;\par
\tab this.content.className = 'highslide-'+ this.contentType;\par
\tab\tab this.content.title = hs.lang.restoreTitle;\par
\tab\tab\par
\tab\tab if (hs.restoreCursor) \{\par
\tab\tab\tab hs.styleRestoreCursor = window.opera ? 'pointer' : 'url('+ hs.graphicsDir + hs.restoreCursor +'), pointer';\par
\tab\tab\tab if (hs.ie && hs.ieVersion() < 6) hs.styleRestoreCursor = 'hand';\par
\tab\tab\tab this.content.style.cursor = hs.styleRestoreCursor;\par
\tab\tab\}\par
\tab\tab\par
\tab hs.focusKey = this.key;\tab\par
\tab hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);\tab\par
\},\par
\par
moveTo: function(x, y) \{\par
\tab this.x.setPos(x);\par
\tab this.y.setPos(y);\par
\},\par
resize : function (e) \{\par
\tab var w, h, r = e.width / e.height;\par
\tab w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));\par
\tab if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;\par
\tab h = w / r;\par
\tab if (h < Math.min(this.minHeight, this.y.full)) \{\par
\tab\tab h = Math.min(this.minHeight, this.y.full);\par
\tab\tab if (this.isImage) w = h * r;\par
\tab\}\par
\tab this.resizeTo(w, h);\par
\},\par
resizeTo: function(w, h) \{\par
\tab this.y.setSize(h);\par
\tab this.x.setSize(w);\par
\},\par
\par
close : function() \{\par
\tab if (this.isClosing || !this.isExpanded\par
\tab\tab  || (hs.upcoming && this.transitions[1] == 'crossfade')\par
\tab\tab ) return;\par
\tab this.isClosing = true;\par
\tab if (this.slideshow && !hs.upcoming) this.slideshow.pause();\par
\tab\par
\tab hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);\par
\tab\par
\tab try \{\par
\tab\tab this.content.style.cursor = 'default';\par
\tab\tab this.changeSize(\par
\tab\tab\tab 0, \{\par
\tab\tab\tab\tab xpos: this.x.pos,\par
\tab\tab\tab\tab ypos: this.y.pos,\par
\tab\tab\tab\tab xsize: this.x.size,\par
\tab\tab\tab\tab ysize: this.y.size,\par
\tab\tab\tab\tab xp1: this.x.p1,\par
\tab\tab\tab\tab yp1: this.y.p1,\par
\tab\tab\tab\tab xp2: this.x.p2,\par
\tab\tab\tab\tab yp2: this.y.p2,\par
\tab\tab\tab\tab ximgSize: this.x.imgSize,\par
\tab\tab\tab\tab ximgPad: this.x.get('imgPad'),\par
\tab\tab\tab\tab o: this.outline ? this.outline.offset : 0\par
\tab\tab\tab\}, \{\par
\tab\tab\tab\tab xpos: this.x.tpos - this.x.cb + this.x.tb,\par
\tab\tab\tab\tab ypos: this.y.tpos - this.y.cb + this.y.tb,\par
\tab\tab\tab\tab xsize: this.x.t,\par
\tab\tab\tab\tab ysize: this.y.t,\par
\tab\tab\tab\tab xp1: 0,\par
\tab\tab\tab\tab yp1: 0,\par
\tab\tab\tab\tab xp2: 0,\par
\tab\tab\tab\tab yp2: 0,\par
\tab\tab\tab\tab ximgSize: this.x.imgSize ? this.x.t : null,\par
\tab\tab\tab\tab ximgPad: 0,\par
\tab\tab\tab\tab o: hs.outlineStartOffset\par
\tab\tab\tab\},\par
\tab\tab\tab hs.restoreDuration\par
\tab\tab );\par
\tab\tab\par
\tab\} catch (e) \{ this.afterClose(); \} \par
\},\par
\par
createOverlay : function (o) \{\par
\tab var el = o.overlayId;\par
\tab if (typeof el == 'string') el = hs.getNode(el);\par
\tab if (!el || typeof el == 'string') return;\par
\tab el.style.display = 'block';\par
\tab o.hsId = o.hsId || o.overlayId; \par
\tab if (this.transitions[1] == 'crossfade' && this.reuseOverlay(o, el)) return;\par
\tab this.genOverlayBox();\par
\tab var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';\par
\tab if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';\par
\tab\par
\tab var overlay = hs.createElement(\par
\tab\tab 'div', \{ \par
\tab\tab\tab id: 'hsId'+ hs.idCounter++, hsId: o.hsId\par
\tab\tab\}, \{\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab visibility: 'hidden',\par
\tab\tab\tab width: width,\par
\tab\tab\tab direction: hs.lang.cssDirection || ''\par
\tab\tab\},\par
\tab\tab this.overlayBox,\par
\tab\tab true\par
\tab );\par
\tab\par
\tab overlay.appendChild(el);\par
\tab hs.setAttribs(overlay, \{\par
\tab\tab hideOnMouseOut: o.hideOnMouseOut,\par
\tab\tab opacity: o.opacity || 1,\par
\tab\tab hsPos: o.position,\par
\tab\tab fade: o.fade\par
\tab\});\par
\tab\par
\tab if (this.gotOverlays) \{\par
\tab\tab this.positionOverlay(overlay);\par
\tab\tab if (!overlay.hideOnMouseOut || this.mouseIsOver) hs.fade(overlay, 0, overlay.opacity);\par
\tab\}\par
\tab hs.push(this.overlays, hs.idCounter - 1);\par
\},\par
positionOverlay : function(overlay) \{\par
\tab var p = overlay.hsPos || 'middle center';\par
\tab if (/left$/.test(p)) overlay.style.left = 0; \par
\tab if (/center$/.test(p))\tab hs.setStyles (overlay, \{ \par
\tab\tab left: '50%',\par
\tab\tab marginLeft: '-'+ Math.round(overlay.offsetWidth / 2) +'px'\par
\tab\});\tab\par
\tab if (/right$/.test(p))\tab overlay.style.right = 0;\par
\tab\par
\tab if (/^leftpanel$/.test(p)) \{ \par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab right: '100%',\par
\tab\tab\tab marginRight: this.x.cb +'px',\par
\tab\tab\tab top: - this.y.cb +'px',\par
\tab\tab\tab bottom: - this.y.cb +'px',\par
\tab\tab\tab overflow: 'auto'\par
\tab\tab\});\tab\tab  \par
\tab\tab this.x.p1 = overlay.offsetWidth;\par
\tab\par
\tab\} else if (/^rightpanel$/.test(p)) \{\par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab left: '100%',\par
\tab\tab\tab marginLeft: this.x.cb +'px',\par
\tab\tab\tab top: - this.y.cb +'px',\par
\tab\tab\tab bottom: - this.y.cb +'px',\par
\tab\tab\tab overflow: 'auto'\par
\tab\tab\});\par
\tab\tab this.x.p2 = overlay.offsetWidth;\par
\tab\}\par
\tab if (/^top/.test(p)) overlay.style.top = 0; \par
\tab if (/^middle/.test(p))\tab hs.setStyles (overlay, \{ \par
\tab\tab top: '50%', \par
\tab\tab marginTop: '-'+ Math.round(overlay.offsetHeight / 2) +'px'\par
\tab\});\tab\par
\tab if (/^bottom/.test(p)) overlay.style.bottom = 0;\par
\tab if (/^above$/.test(p)) \{\par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab left: (- this.x.p1 - this.x.cb) +'px',\par
\tab\tab\tab right: (- this.x.p2 - this.x.cb) +'px',\par
\tab\tab\tab bottom: '100%',\par
\tab\tab\tab marginBottom: this.y.cb +'px',\par
\tab\tab\tab width: 'auto'\par
\tab\tab\});\par
\tab\tab this.y.p1 = overlay.offsetHeight;\par
\tab\par
\tab\} else if (/^below$/.test(p)) \{\par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab position: 'relative',\par
\tab\tab\tab left: (- this.x.p1 - this.x.cb) +'px',\par
\tab\tab\tab right: (- this.x.p2 - this.x.cb) +'px',\par
\tab\tab\tab top: '100%',\par
\tab\tab\tab marginTop: this.y.cb +'px',\par
\tab\tab\tab width: 'auto'\par
\tab\tab\});\par
\tab\tab this.y.p2 = overlay.offsetHeight;\par
\tab\tab overlay.style.position = 'absolute';\par
\tab\}\par
\},\par
\par
getOverlays : function() \{\tab\par
\tab this.getInline(['heading', 'caption'], true);\par
\tab this.getNumber();\par
\tab if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';\par
\tab if (hs.showCredits) this.writeCredits();\par
\tab for (var i = 0; i < hs.overlays.length; i++) \{\par
\tab\tab var o = hs.overlays[i], tId = o.thumbnailId, sg = o.slideshowGroup;\par
\tab\tab if ((!tId && !sg) || (tId && tId == this.thumbsUserSetId)\par
\tab\tab\tab\tab || (sg && sg === this.slideshowGroup)) \{\par
\tab\tab\tab this.createOverlay(o);\par
\tab\tab\}\par
\tab\}\par
\tab var os = [];\par
\tab for (var i = 0; i < this.overlays.length; i++) \{\par
\tab\tab var o = hs.$('hsId'+ this.overlays[i]);\par
\tab\tab if (/panel$/.test(o.hsPos)) this.positionOverlay(o);\par
\tab\tab else hs.push(os, o);\par
\tab\}\par
\tab /*\par
\tab var curW = this.x.p1 + this.x.full + this.x.p2;\par
\tab if (hs.padToMinWidth && curW < hs.minWidth) \{\par
\tab\tab this.x.p1 += (hs.minWidth - curW) / 2;\par
\tab\tab this.x.p2 += (hs.minWidth - curW) / 2;\par
\tab\}\par
\tab */\par
\tab for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);\par
\tab this.gotOverlays = true;\par
\},\par
genOverlayBox : function() \{\par
\tab if (!this.overlayBox) this.overlayBox = hs.createElement (\par
\tab\tab 'div', \{\par
\tab\tab\tab className: this.wrapperClassName\par
\tab\tab\}, \{\par
\tab\tab\tab position : 'absolute',\par
\tab\tab\tab width: this.x.size ? this.x.size +'px' : this.x.full +'px',\par
\tab\tab\tab height: 0,\par
\tab\tab\tab visibility : 'hidden',\par
\tab\tab\tab overflow : 'hidden',\par
\tab\tab\tab zIndex : hs.ie ? 4 : null\par
\tab\tab\},\par
\tab\tab hs.container,\par
\tab\tab true\par
\tab );\par
\},\par
sizeOverlayBox : function(doWrapper, doPanels) \{\par
\tab hs.setStyles( this.overlayBox, \{\par
\tab\tab width: this.x.size +'px', \par
\tab\tab height: this.y.size +'px'\par
\tab\});\par
\tab if (doWrapper || doPanels) \{\par
\tab\tab for (var i = 0; i < this.overlays.length; i++) \{\par
\tab\tab\tab var o = hs.$('hsId'+ this.overlays[i]);\par
\tab\tab\tab if (o && /^(above|below)$/.test(o.hsPos)) \{\par
\tab\tab\tab\tab if (hs.ie && (hs.ieVersion() <= 6 || document.compatMode == 'BackCompat')) \{\par
\tab\tab\tab\tab\tab o.style.width = (this.overlayBox.offsetWidth + 2 * this.x.cb\par
\tab\tab\tab\tab\tab\tab + this.x.p1 + this.x.p2) +'px';\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab this.y[o.hsPos == 'above' ? 'p1' : 'p2'] = o.offsetHeight;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\tab if (doWrapper) \{\par
\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab top: this.y.p1 +'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.overlayBox, \{\par
\tab\tab\tab top: (this.y.p1 + this.y.cb) +'px'\par
\tab\tab\});\par
\tab\}\par
\},\par
\par
showOverlays : function() \{\par
\tab var b = this.overlayBox;\par
\tab b.className = '';\par
\tab hs.setStyles(b, \{\par
\tab\tab top: (this.y.p1 + this.y.cb) +'px',\par
\tab\tab left: (this.x.p1 + this.x.cb) +'px',\par
\tab\tab overflow : 'visible'\par
\tab\});\par
\tab if (hs.safari) b.style.visibility = 'visible';\par
\tab this.wrapper.appendChild (b);\par
\tab for (var i = 0; i < this.overlays.length; i++) \{\par
\tab\tab var o = hs.$('hsId'+ this.overlays[i]);\par
\tab\tab o.style.zIndex = o.hsId == 'controls' ? 5 : 4;\par
\tab\tab if (!o.hideOnMouseOut || this.mouseIsOver) hs.fade(o, 0, o.opacity);\par
\tab\}\par
\},\par
\par
\par
\par
createFullExpand : function () \{\par
\tab if (this.slideshow && this.slideshow.controls) \{\par
\tab\tab this.slideshow.enable('full-expand');\par
\tab\tab return;\par
\tab\}\par
\tab this.fullExpandLabel = hs.createElement(\par
\tab\tab 'a', \{\par
\tab\tab\tab href: 'javascript:hs.expanders['+ this.key +'].doFullExpand();',\par
\tab\tab\tab title: hs.lang.fullExpandTitle,\par
\tab\tab\tab className: 'highslide-full-expand'\par
\tab\tab\}\par
\tab );\par
\tab\par
\tab this.createOverlay(\{ \par
\tab\tab overlayId: this.fullExpandLabel, \par
\tab\tab position: hs.fullExpandPosition, \par
\tab\tab hideOnMouseOut: true, \par
\tab\tab opacity: hs.fullExpandOpacity\par
\tab\});\par
\},\par
\par
doFullExpand : function () \{\par
\tab try \{\par
\tab\tab if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);\par
\tab\tab\par
\tab\tab this.focus();\par
\tab\tab\par
\tab\tab var xpos = this.x.pos - (this.x.full - this.x.size) / 2;\par
\tab\tab if (xpos < hs.marginLeft) xpos = hs.marginLeft;\par
\tab\tab\par
\tab\tab this.moveTo(xpos, this.y.pos);\par
\tab\tab this.resizeTo(this.x.full, this.y.full);\par
\tab\tab this.doShowHide('hidden');\par
\tab\tab hs.setDimmerSize(this);\par
\tab\par
\tab\} catch (e) \{\par
\tab\tab window.location.href = this.content.src;\par
\tab\}\par
\},\par
\par
\par
afterClose : function () \{\par
\tab this.a.className = this.a.className.replace('highslide-active-anchor', '');\par
\tab\par
\tab this.doShowHide('visible');\par
\tab\tab if (this.outline && this.outlineWhileAnimating) this.outline.destroy();\par
\tab\par
\tab\tab hs.discardElement(this.wrapper);\par
\tab if (this.dimmingOpacity) hs.undim(this.key);\par
\tab hs.expanders[this.key] = null;\tab\tab\par
\tab hs.reOrder();\par
\}\par
\par
\};\par
\par
\par
hs.Slideshow = function (options) \{\par
\tab hs.updateAnchors();\par
\tab for (var x in options) this[x] = options[x];\par
\tab if (this.useControls) this.getControls();\par
\};\par
hs.Slideshow.prototype = \{\par
getControls: function() \{\par
\tab this.controls = hs.createElement('div', \{ innerHTML: hs.replaceLang(hs.skin.controls) \}, \par
\tab\tab null, hs.container);\par
\tab\par
\tab var buttons = ['play', 'pause', 'previous', 'next', 'move', 'full-expand', 'close'];\par
\tab this.btn = \{\};\par
\tab var pThis = this;\par
\tab for (var i = 0; i < buttons.length; i++) \{\par
\tab\tab this.btn[buttons[i]] = hs.getElementByClass(this.controls, 'li', 'highslide-'+ buttons[i]);\par
\tab\tab this.enable(buttons[i]);\par
\tab\}\par
\tab this.btn.pause.style.display = 'none';\par
\tab //this.disable('full-expand');\par
\},\par
checkFirstAndLast: function() \{\par
\tab if (this.repeat || !this.controls) return;\par
\tab var cur = this.exp.getAnchorIndex(), re = /disabled$/;\par
\tab if (cur == 0) \par
\tab\tab this.disable('previous');\par
\tab else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className))\par
\tab\tab this.enable('previous');\par
\tab if (cur + 1 == hs.anchors.groups[this.exp.slideshowGroup || 'none'].length) \{\par
\tab\tab this.disable('next');\par
\tab\tab this.disable('play');\par
\tab\} else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) \{\par
\tab\tab this.enable('next');\par
\tab\tab this.enable('play');\par
\tab\}\par
\},\par
enable: function(btn) \{\par
\tab if (!this.btn) return;\par
\tab var sls = this, a = this.btn[btn].getElementsByTagName('a')[0], re = /disabled$/;\par
\tab a.onclick = function() \{\par
\tab\tab sls[btn]();\par
\tab\tab return false;\par
\tab\};\par
\tab if (re.test(a.className)) a.className = a.className.replace(re, '');\par
\},\par
disable: function(btn) \{\par
\tab if (!this.btn) return;\par
\tab var a = this.btn[btn].getElementsByTagName('a')[0];\par
\tab a.onclick = function() \{ return false; \};\par
\tab if (!/disabled$/.test(a.className)) a.className += ' disabled';\par
\},\par
hitSpace: function() \{\par
\tab if (this.autoplay) this.pause();\par
\tab else this.play();\par
\},\par
play: function(wait) \{\par
\tab if (this.btn) \{\par
\tab\tab this.btn.play.style.display = 'none';\par
\tab\tab this.btn.pause.style.display = '';\par
\tab\}\par
\tab\par
\tab this.autoplay = true;\tab\par
\tab if (!wait) hs.next(this.exp.key);\par
\},\par
pause: function() \{\par
\tab if (this.btn) \{\par
\tab\tab this.btn.pause.style.display = 'none';\par
\tab\tab this.btn.play.style.display = '';\par
\tab\}\par
\tab\par
\tab clearTimeout(this.autoplay);\par
\tab this.autoplay = null;\par
\},\par
previous: function() \{\par
\tab this.pause();\par
\tab hs.previous(this.btn.previous);\par
\},\par
next: function() \{\par
\tab this.pause();\par
\tab hs.next(this.btn.next);\par
\},\par
move: function() \{\},\par
'full-expand': function() \{\par
\tab hs.getExpander().doFullExpand();\par
\},\par
close: function() \{\par
\tab hs.close(this.btn.close);\par
\}\par
\par
\};\par
if (document.readyState && hs.ie) \{\par
\tab (function () \{\par
\tab\tab try \{\par
\tab\tab\tab document.documentElement.doScroll('left');\par
\tab\tab\} catch (e) \{\par
\tab\tab\tab setTimeout(arguments.callee, 50);\par
\tab\tab\tab return;\par
\tab\tab\}\par
\tab\tab hs.domReady();\par
\tab\})();\par
\}\par
hs.langDefaults = hs.lang;\par
// history\par
var HsExpander = hs.Expander;\par
\par
// set handlers\par
hs.addEventListener(window, 'load', function() \{\par
\tab var sel = '.highslide img', \par
\tab\tab dec = 'cursor: url('+ hs.graphicsDir + hs.expandCursor +'), pointer !important;';\par
\tab\tab\par
\tab var style = hs.createElement('style', \{ type: 'text/css' \}, null, \par
\tab\tab document.getElementsByTagName('HEAD')[0]);\par
\par
\tab if (!hs.ie) \{\par
\tab\tab style.appendChild(document.createTextNode(sel + " \{" + dec + "\}"));\par
\tab\} else \{\par
\tab\tab var last = document.styleSheets[document.styleSheets.length - 1];\par
\tab\tab if (typeof(last.addRule) == "object") last.addRule(sel, dec);\par
\tab\}\par
\});\par
hs.addEventListener(document, 'mousemove', function(e) \{\par
\tab hs.mouse = \{ x: e.clientX, y: e.clientY\tab\};\par
\});\par
hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);\par
hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);\par
hs.addEventListener(window, 'load', hs.preloadImages);\par
\par
HSImageResizer.IMAGE_ID_BASE = 'hs_imageresizer_container_';\par
\par
function HSImageResizer(id, img) \{\par
\tab this.id = id;\par
\tab this.img = img;\par
\tab this.originalWidth = 0;\par
\tab this.originalHeight = 0;\par
\tab this.warning = null;\par
\tab this.warningTextNode = null;\par
\tab\par
\tab img.id = HSImageResizer.IMAGE_ID_BASE+id;\par
\}\par
\par
HSImageResizer.getNextId = function() \{\par
\tab id = 1;\par
\tab while(document.getElementById(HSImageResizer.IMAGE_ID_BASE+id) != null) \{\par
\tab\tab id++;\par
\tab\}\par
\tab return id;\par
\}\par
\par
HSImageResizer.createOn = function(img) \{\par
\tab isRecovery = false; // if this is a recovery from QuickEdit, which only restores the HTML, not the OO structure\par
\tab if(img.id && img.id.indexOf(HSImageResizer.IMAGE_ID_BASE) == 0 && document.getElementById(HSImageResizer.WARNING_ID_BASE+img.id.substr(HSImageResizer.IMAGE_ID_BASE.length)) != null) \{\par
\tab\tab newid = img.id.substr(HSImageResizer.IMAGE_ID_BASE.length);\par
\tab\tab resizer = new HSImageResizer(newid, img);\par
\tab\tab isRecovery = true;\par
\tab\tab resizer.restoreImage();\par
\tab\} else \{\par
\tab\tab newid = HSImageResizer.getNextId();\par
\tab\tab resizer = new HSImageResizer(id, img);\par
\tab\}\par
\tab\par
\tab if (resizer.originalWidth == 0) resizer.originalWidth = img.width;\par
\tab if (resizer.originalHeight == 0) resizer.originalHeight = img.height;\par
\tab\par
\tab if((HSImageResizer.MAXWIDTH > 0 && resizer.originalWidth > HSImageResizer.MAXWIDTH) || (HSImageResizer.MAXHEIGHT > 0 && resizer.originalHeight > HSImageResizer.MAXHEIGHT)) \{\par
\tab\tab if(isRecovery) \{\par
\tab\tab\tab resizer.reclaimWarning(warning);\par
\tab\tab\} else \{\par
\tab\tab\tab resizer.createWarning();\par
\tab\tab\}\par
\tab\tab resizer.scale();\par
\tab\}\par
\}\par
\par
HSImageResizer.prototype.restoreImage = function() \{\par
\tab newimg = document.createElement('IMG');\par
\tab newimg.src = this.img.src;\par
\tab this.img.width = newimg.width;\par
\tab this.img.height = newimg.height;\par
\}\par
\par
HSImageResizer.prototype.createWarning = function() \{\par
\tab mtable = document.createElement('TABLE');\par
\tab mtbody = document.createElement('TBODY');\par
\tab mtr = document.createElement('TR');\par
\tab mtd1 = document.createElement('TD');\par
\tab mtd2 = document.createElement('TD');\par
\tab mimg = document.createElement('IMG');\par
\tab mtext = document.createTextNode('');\par
\tab\par
\tab mimg.src = 'highslide/graphics/warning.gif';\par
\tab mimg.width = 350;\par
\tab mimg.height = 16;\par
\tab mimg.alt = '';\par
\tab mimg.border = 0;\par
\tab\par
\tab mtd1.width = 20;\par
\tab mtd1.className = 'td1';\par
\tab\par
\tab mtd2.unselectable = 'on';\par
\tab mtd2.className = 'td2';\par
\tab\par
\tab mtable.textNode = mtext;\par
\tab mtable.resize = this;\par
\tab\par
\tab mtable.textNode = mtext;\par
\tab mtable.resize = this;\par
\tab\par
\tab mtd1.appendChild(mimg);\par
\tab mtd2.appendChild(mtext);\par
\tab\par
\tab mtr.appendChild(mtd1);\par
\tab mtr.appendChild(mtd2);\par
\tab\par
\tab mtbody.appendChild(mtr);\par
\tab\par
\tab mtable.appendChild(mtbody);\par
\tab\par
\tab this.img.parentNode.insertBefore(mtable, this.img);\par
\tab\par
\tab this.warning = mtable;\par
\tab this.warningTextNode = mtext;\par
\}\par
\par
HSImageResizer.prototype.scale = function() \{\par
\tab if(HSImageResizer.MAXWIDTH > 0 && this.originalWidth > HSImageResizer.MAXWIDTH) \{\par
\tab\tab resized = true;\par
\tab\tab this.img.width = HSImageResizer.MAXWIDTH;\par
\tab\tab this.img.height = (HSImageResizer.MAXWIDTH / this.originalWidth) * this.originalHeight;\par
\tab\}\par
\tab if(HSImageResizer.MAXHEIGHT > 0 && this.originalHeight > HSImageResizer.MAXHEIGHT) \{\par
\tab\tab resized = true;\par
\tab\tab this.img.height = HSImageResizer.MAXHEIGHT;\par
\tab\tab this.img.width = (HSImageResizer.MAXHEIGHT / this.originalHeight) * this.originalWidth;\par
\tab\}\par
\tab\par
\tab this.warning.width = this.img.width;\par
\tab this.warning.onclick = function() \{ return this.resize.unScale(); \}\par
\par
\tab return false;\par
\}\par
/******************************************************************************\par
Name:    Highslide JS\par
Version: 4.0.10 (November 25 2008)\par
Config:  default +slideshow +positioning +transitions\par
Author:  Torstein H nsi\par
Support: http://highslide.com/support\par
\par
Licence:\par
Highslide JS is licensed under a Creative Commons Attribution-NonCommercial 2.5\par
License (http://creativecommons.org/licenses/by-nc/2.5/).\par
\par
You are free:\par
\tab * to copy, distribute, display, and perform the work\par
\tab * to make derivative works\par
\par
Under the following conditions:\par
\tab * Attribution. You must attribute the work in the manner  specified by  the\par
\tab   author or licensor.\par
\tab * Noncommercial. You may not use this work for commercial purposes.\par
\par
* For  any  reuse  or  distribution, you  must make clear to others the license\par
  terms of this work.\par
* Any  of  these  conditions  can  be  waived  if  you  get permission from the \par
  copyright holder.\par
\par
Your fair use and other rights are in no way affected by the above.\par
******************************************************************************/\par
\par
var hs = \{\par
// Language strings\par
lang : \{\par
\tab cssDirection: 'ltr',\par
\tab loadingText : 'Loading...',\par
\tab loadingTitle : 'Click to cancel',\par
\tab focusTitle : 'Click to bring to front',\par
\tab fullExpandTitle : 'Expand to actual size (f)',\par
\tab creditsText : 'Powered by <i>Highslide JS</i>',\par
\tab creditsTitle : 'Go to the Highslide JS homepage',\par
\tab previousText : 'Previous',\par
\tab nextText : 'Next', \par
\tab moveText : 'Move',\par
\tab closeText : 'Close', \par
\tab closeTitle : 'Close (esc)', \par
\tab resizeTitle : 'Resize',\par
\tab playText : 'Play',\par
\tab playTitle : 'Play slideshow (spacebar)',\par
\tab pauseText : 'Pause',\par
\tab pauseTitle : 'Pause slideshow (spacebar)',\par
\tab previousTitle : 'Previous (arrow left)',\par
\tab nextTitle : 'Next (arrow right)',\par
\tab moveTitle : 'Move',\par
\tab fullExpandText : 'Full size',\par
\tab number: 'Image %1 of %2',\par
\tab restoreTitle : 'Click to close image, click and drag to move. Use arrow keys for next and previous.'\par
\},\par
// See http://highslide.com/ref for examples of settings  \par
graphicsDir : 'highslide/graphics/',\par
expandCursor : 'zoomin.cur', // null disables\par
restoreCursor : 'zoomout.cur', // null disables\par
expandDuration : 250, // milliseconds\par
restoreDuration : 250,\par
marginLeft : 15,\par
marginRight : 15,\par
marginTop : 15,\par
marginBottom : 15,\par
zIndexCounter : 1001, // adjust to other absolutely positioned elements\par
loadingOpacity : 0.75,\par
allowMultipleInstances: true,\par
numberOfImagesToPreload : 5,\par
outlineWhileAnimating : 2, // 0 = never, 1 = always, 2 = HTML only \par
outlineStartOffset : 3, // ends at 10\par
fullExpandPosition : 'bottom right',\par
fullExpandOpacity : 1,\par
padToMinWidth : false, // pad the popup width to make room for wide caption\par
showCredits : true, // you can set this to false if you want\par
creditsHref : 'http://highslide.com',\par
enableKeyListener : true,\par
transitions : [],\par
transitionDuration: 500,\par
dimmingOpacity: 0, // Lightbox style dimming background\par
dimmingDuration: 50, // 0 for instant dimming\par
\par
anchor : 'auto', // where the image expands from\par
align : 'auto', // position in the client (overrides anchor)\par
targetX: null, // the id of a target element\par
targetY: null,\par
dragByHeading: true,\par
minWidth: 200,\par
minHeight: 200,\par
allowSizeReduction: true, // allow the image to reduce to fit client size. If false, this overrides minWidth and minHeight\par
outlineType : 'drop-shadow', // set null to disable outlines\par
wrapperClassName : 'highslide-wrapper', // for enhanced css-control\par
skin : \{\par
\tab controls:\par
\tab\tab '<div class="highslide-controls"><ul>'+\par
\tab\tab\tab '<li class="highslide-previous">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.previousTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.previousText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-play">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.playTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.playText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-pause">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.pauseTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.pauseText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-next">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.nextTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.nextText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-move">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.moveTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.moveText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-full-expand">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.fullExpandTitle\}">'+\par
\tab\tab\tab\tab '<span>\{hs.lang.fullExpandText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab\tab '<li class="highslide-close">'+\par
\tab\tab\tab\tab '<a href="#" title="\{hs.lang.closeTitle\}" >'+\par
\tab\tab\tab\tab '<span>\{hs.lang.closeText\}</span></a>'+\par
\tab\tab\tab '</li>'+\par
\tab\tab '</ul></div>'\par
\},\par
// END OF YOUR SETTINGS\par
\par
\par
// declare internal properties\par
preloadTheseImages : [],\par
continuePreloading: true,\par
expanders : [],\par
overrides : [\par
\tab 'allowSizeReduction',\par
\tab 'anchor',\par
\tab 'align',\par
\tab 'targetX',\par
\tab 'targetY',\par
\tab 'outlineType',\par
\tab 'outlineWhileAnimating',\par
\tab 'captionId',\par
\tab 'captionText',\par
\tab 'captionEval',\par
\tab 'captionOverlay',\par
\tab 'headingId',\par
\tab 'headingText',\par
\tab 'headingEval',\par
\tab 'headingOverlay',\par
\tab 'dragByHeading',\par
\tab 'autoplay',\par
\tab 'numberPosition',\par
\tab 'transitions',\par
\tab 'dimmingOpacity',\par
\tab\par
\tab 'wrapperClassName',\par
\tab 'minWidth',\par
\tab 'minHeight',\par
\tab 'maxWidth',\par
\tab 'maxHeight',\par
\tab 'slideshowGroup',\par
\tab 'easing',\par
\tab 'easingClose',\par
\tab 'fadeInOut',\par
\tab 'src'\par
],\par
overlays : [],\par
idCounter : 0,\par
oPos : \{\par
\tab x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],\par
\tab y: ['above', 'top', 'middle', 'bottom', 'below']\par
\},\par
mouse: \{\},\par
headingOverlay: \{\},\par
captionOverlay: \{\},\par
faders : [],\par
\par
slideshows : [],\par
\par
pendingOutlines : \{\},\par
clones : \{\},\par
ie : (document.all && !window.opera),\par
safari : /Safari/.test(navigator.userAgent),\par
geckoMac : /Macintosh.+rv:1\\.[0-8].+Gecko/.test(navigator.userAgent),\par
\par
$ : function (id) \{\par
\tab return document.getElementById(id);\par
\},\par
\par
push : function (arr, val) \{\par
\tab arr[arr.length] = val;\par
\},\par
\par
createElement : function (tag, attribs, styles, parent, nopad) \{\par
\tab var el = document.createElement(tag);\par
\tab if (attribs) hs.setAttribs(el, attribs);\par
\tab if (nopad) hs.setStyles(el, \{padding: 0, border: 'none', margin: 0\});\par
\tab if (styles) hs.setStyles(el, styles);\par
\tab if (parent) parent.appendChild(el);\tab\par
\tab return el;\par
\},\par
\par
setAttribs : function (el, attribs) \{\par
\tab for (var x in attribs) el[x] = attribs[x];\par
\},\par
\par
setStyles : function (el, styles) \{\par
\tab for (var x in styles) \{\par
\tab\tab if (hs.ie && x == 'opacity') \{\par
\tab\tab\tab if (styles[x] > 0.99) el.style.removeAttribute('filter');\par
\tab\tab\tab else el.style.filter = 'alpha(opacity='+ (styles[x] * 100) +')';\par
\tab\tab\}\par
\tab\tab else el.style[x] = styles[x];\par
\tab\}\par
\},\par
\par
ieVersion : function () \{\par
\tab var arr = navigator.appVersion.split("MSIE");\par
\tab return arr[1] ? parseFloat(arr[1]) : null;\par
\},\par
\par
getPageSize : function () \{\par
\tab var d = document, w = window, iebody = d.compatMode && d.compatMode != 'BackCompat' \par
\tab\tab ? d.documentElement : d.body;\tab\par
\tab\par
\tab\par
\tab var b = d.body;\par
\tab var xScroll = (w.innerWidth && w.scrollMaxX) \par
\tab\tab\tab ? w.innerWidth + w.scrollMaxX : Math.max(b.scrollWidth, b.offsetWidth),\par
\tab\tab yScroll = (w.innerHeight && window.scrollMaxY) \par
\tab\tab\tab ? w.innerHeight + w.scrollMaxY : Math.max(b.scrollHeight, b.offsetHeight),\par
\tab\tab pageWidth = hs.ie ? iebody.scrollWidth :\par
\tab\tab\tab (d.documentElement.clientWidth || self.innerWidth),\par
      \tab pageHeight = hs.ie ? Math.max(iebody.scrollHeight, iebody.clientHeight) : \par
\tab\tab\tab (d.documentElement.clientHeight || self.innerHeight);\par
\tab\par
\tab var width = hs.ie ? iebody.clientWidth : \par
\tab\tab\tab (d.documentElement.clientWidth || self.innerWidth),\par
\tab\tab height = hs.ie ? iebody.clientHeight : self.innerHeight;\par
\tab\par
\tab return \{\par
\tab\tab pageWidth: Math.max(pageWidth, xScroll),\par
\tab\tab pageHeight: Math.max(pageHeight, yScroll),\par
\tab\tab width: width,\par
\tab\tab height: height,\tab\tab\par
\tab\tab scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,\par
\tab\tab scrollTop: hs.ie ? iebody.scrollTop : pageYOffset\par
\tab\}\par
\},\par
\par
getPosition : function(el)\tab\{\par
\tab var p = \{ x: el.offsetLeft, y: el.offsetTop \};\par
\tab while (el.offsetParent)\tab\{\par
\tab\tab el = el.offsetParent;\par
\tab\tab p.x += el.offsetLeft;\par
\tab\tab p.y += el.offsetTop;\par
\tab\tab if (el != document.body && el != document.documentElement) \{\par
\tab\tab\tab p.x -= el.scrollLeft;\par
\tab\tab\tab p.y -= el.scrollTop;\par
\tab\tab\}\par
\tab\}\par
\tab return p;\par
\},\par
expand : function(a, params, custom, type) \{\par
\tab if (!a) a = hs.createElement('a', null, \{ display: 'none' \}, hs.container);\par
\tab if (typeof a.getParams == 'function') return params;\tab\par
\tab try \{\tab\par
\tab\tab new hs.Expander(a, params, custom);\par
\tab\tab return false;\par
\tab\} catch (e) \{ return true; \}\par
\},\par
getElementByClass : function (el, tagName, className) \{\par
\tab var els = el.getElementsByTagName(tagName);\par
\tab for (var i = 0; i < els.length; i++) \{\par
    \tab if ((new RegExp(className)).test(els[i].className)) \{\par
\tab\tab\tab return els[i];\par
\tab\tab\}\par
\tab\}\par
\tab return null;\par
\},\par
replaceLang : function(s) \{\par
\tab s = s.replace(/\\s/g, ' ');\par
\tab var re = /\{hs\\.lang\\.([^\}]+)\\\}/g,\par
\tab\tab matches = s.match(re),\par
\tab\tab lang;\par
\tab if (matches) for (var i = 0; i < matches.length; i++) \{\par
\tab\tab lang = matches[i].replace(re, "$1");\par
\tab\tab if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang]);\par
\tab\}\par
\tab return s;\par
\},\par
\par
\par
focusTopmost : function() \{\par
\tab var topZ = 0, topmostKey = -1;\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i]) \{\par
\tab\tab\tab if (hs.expanders[i].wrapper.style.zIndex && hs.expanders[i].wrapper.style.zIndex > topZ) \{\par
\tab\tab\tab\tab topZ = hs.expanders[i].wrapper.style.zIndex;\par
\tab\tab\tab\tab\par
\tab\tab\tab\tab topmostKey = i;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\tab if (topmostKey == -1) hs.focusKey = -1;\par
\tab else hs.expanders[topmostKey].focus();\par
\},\par
\par
getParam : function (a, param) \{\par
\tab a.getParams = a.onclick;\par
\tab var p = a.getParams ? a.getParams() : null;\par
\tab a.getParams = null;\par
\tab\par
\tab return (p && typeof p[param] != 'undefined') ? p[param] : \par
\tab\tab (typeof hs[param] != 'undefined' ? hs[param] : null);\par
\},\par
\par
getSrc : function (a) \{\par
\tab var src = hs.getParam(a, 'src');\par
\tab if (src) return src;\par
\tab return a.href;\par
\},\par
\par
getNode : function (id) \{\par
\tab var node = hs.$(id), clone = hs.clones[id], a = \{\};\par
\tab if (!node && !clone) return null;\par
\tab if (!clone) \{\par
\tab\tab clone = node.cloneNode(true);\par
\tab\tab clone.id = '';\par
\tab\tab hs.clones[id] = clone;\par
\tab\tab return node;\par
\tab\} else \{\par
\tab\tab return clone.cloneNode(true);\par
\tab\}\par
\},\par
\par
discardElement : function(d) \{\par
\tab hs.garbageBin.appendChild(d);\par
\tab hs.garbageBin.innerHTML = '';\par
\},\par
dim : function(exp) \{\par
\tab if (!hs.dimmer) \{\par
\tab\tab hs.dimmer = hs.createElement ('div', \par
\tab\tab\tab\{ \par
\tab\tab\tab\tab className: 'highslide-dimming',\par
\tab\tab\tab\tab owner: '',\par
\tab\tab\tab\tab onclick: function() \{\par
\tab\tab\tab\tab\tab  \par
\tab\tab\tab\tab\tab\tab hs.close();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}, \par
\tab\tab\tab\{ position: 'absolute', left: 0 \}, hs.container, true);\par
\tab\tab hs.addEventListener(window, 'resize', hs.setDimmerSize);\par
\tab\}\par
\tab hs.dimmer.style.display = '';\par
\tab hs.setDimmerSize();\par
\tab hs.dimmer.owner += '|'+ exp.key;\par
\tab if (hs.geckoMac && hs.dimmingGeckoFix) \par
\tab\tab hs.dimmer.style.background = 'url('+ hs.graphicsDir + 'geckodimmer.png)';\tab\tab\par
\tab else\par
\tab\tab hs.fade(hs.dimmer, 0, exp.dimmingOpacity, hs.dimmingDuration); \par
\},\par
undim : function(key) \{\par
\tab if (!hs.dimmer) return;\par
\tab if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|'+ key, '');\par
\tab\par
\tab if (\par
\tab\tab (typeof key != 'undefined' && hs.dimmer.owner != '')\par
\tab\tab || (hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity'))\par
\tab ) return;\par
\tab if (hs.geckoMac && hs.dimmingGeckoFix) \par
\tab\tab hs.setStyles(hs.dimmer, \{ background: 'none', width: 0, height: 0 \});\par
\tab else hs.fade(hs.dimmer, hs.dimmingOpacity, 0, hs.dimmingDuration, function() \{\par
\tab\tab hs.setStyles(hs.dimmer, \{ display: 'none', width: 0, height: 0 \});\par
\tab\});\par
\},\par
setDimmerSize : function(exp) \{\par
\tab if (!hs.dimmer) return;\par
\tab var page = hs.getPageSize();\par
\tab var h = (hs.ie && exp && exp.wrapper) ? \par
\tab\tab parseInt(exp.wrapper.style.top) + parseInt(exp.wrapper.style.height)+ (exp.outline ? exp.outline.offset : 0) : 0; \par
\tab hs.setStyles(hs.dimmer, \{ \par
\tab\tab width: page.pageWidth +'px', \par
\tab\tab height: Math.max(page.pageHeight, h) +'px'\par
\tab\});\par
\},\par
\par
previousOrNext : function (el, op) \{\par
\tab hs.updateAnchors();\par
\tab var exp = hs.last = hs.getExpander(el);\par
\tab try \{\par
\tab\tab var adj = hs.upcoming =  exp.getAdjacentAnchor(op);\par
\tab\tab adj.onclick(); \tab\tab\par
\tab\} catch (e)\{\par
\tab\tab hs.last = hs.upcoming = null;\par
\tab\}\par
\tab try \{ exp.close(); \} catch (e) \{\}\par
\tab return false;\par
\},\par
\par
previous : function (el) \{\par
\tab return hs.previousOrNext(el, -1);\par
\},\par
\par
next : function (el) \{\par
\tab return hs.previousOrNext(el, 1);\tab\par
\},\par
\par
keyHandler : function(e) \{\par
\tab if (!e) e = window.event;\par
\tab if (!e.target) e.target = e.srcElement; // ie\par
\tab if (typeof e.target.form != 'undefined') return true; // form element has focus\par
\tab var exp = hs.getExpander();\par
\tab\par
\tab var op = null;\par
\tab switch (e.keyCode) \{\par
\tab\tab case 70: // f\par
\tab\tab\tab if (exp) exp.doFullExpand();\par
\tab\tab\tab return true;\par
\tab\tab case 32: // Space\par
\tab\tab\tab op = 2;\par
\tab\tab\tab break;\par
\tab\tab case 34: // Page Down\par
\tab\tab case 39: // Arrow right\par
\tab\tab case 40: // Arrow down\par
\tab\tab\tab op = 1;\par
\tab\tab\tab break;\par
\tab\tab case 8:  // Backspace\par
\tab\tab case 33: // Page Up\par
\tab\tab case 37: // Arrow left\par
\tab\tab case 38: // Arrow up\par
\tab\tab\tab op = -1;\par
\tab\tab\tab break;\par
\tab\tab case 27: // Escape\par
\tab\tab case 13: // Enter\par
\tab\tab\tab op = 0;\par
\tab\}\par
\tab if (op !== null) \{if (op != 2)hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);\par
\tab\tab if (!hs.enableKeyListener) return true;\par
\tab\tab\par
\tab\tab if (e.preventDefault) e.preventDefault();\par
    \tab else e.returnValue = false;\par
    \tab\par
    \tab if (exp) \{\par
\tab\tab\tab if (op == 0) \{\par
\tab\tab\tab\tab exp.close();\par
\tab\tab\tab\} else if (op == 2) \{\par
\tab\tab\tab\tab if (exp.slideshow) exp.slideshow.hitSpace();\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab if (exp.slideshow) exp.slideshow.pause();\par
\tab\tab\tab\tab hs.previousOrNext(exp.key, op);\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\}\par
\tab return true;\par
\},\par
\par
\par
registerOverlay : function (overlay) \{\par
\tab hs.push(hs.overlays, overlay);\par
\},\par
\par
\par
addSlideshow : function (options) \{\par
\tab var sg = options.slideshowGroup;\par
\tab if (typeof sg == 'object') \{\par
\tab\tab for (var i = 0; i < sg.length; i++) \{\par
\tab\tab\tab var o = \{\};\par
\tab\tab\tab for (var x in options) o[x] = options[x];\par
\tab\tab\tab o.slideshowGroup = sg[i];\par
\tab\tab\tab hs.push(hs.slideshows, o);\par
\tab\tab\}\par
\tab\} else \{\par
\tab\tab hs.push(hs.slideshows, options);\par
\tab\}\par
\},\par
\par
getWrapperKey : function (element, expOnly) \{\par
\tab var el, re = /^highslide-wrapper-([0-9]+)$/;\par
\tab // 1. look in open expanders\par
\tab el = element;\par
\tab while (el.parentNode)\tab\{\par
\tab\tab if (el.id && re.test(el.id)) return el.id.replace(re, "$1");\par
\tab\tab el = el.parentNode;\par
\tab\}\par
\tab // 2. look in thumbnail\par
\tab if (!expOnly) \{\par
\tab\tab el = element;\par
\tab\tab while (el.parentNode)\tab\{\par
\tab\tab\tab if (el.tagName && hs.isHsAnchor(el)) \{\par
\tab\tab\tab\tab for (var key = 0; key < hs.expanders.length; key++) \{\par
\tab\tab\tab\tab\tab var exp = hs.expanders[key];\par
\tab\tab\tab\tab\tab if (exp && exp.a == el) return key;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab el = el.parentNode;\par
\tab\tab\}\par
\tab\}\par
\tab return null; \par
\},\par
\par
getExpander : function (el, expOnly) \{\par
\tab if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;\par
\tab if (typeof el == 'number') return hs.expanders[el] || null;\par
\tab if (typeof el == 'string') el = hs.$(el);\par
\tab return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;\par
\},\par
\par
isHsAnchor : function (a) \{\par
\tab return (a.onclick && a.onclick.toString().replace(/\\s/g, ' ').match(/hs.(htmlE|e)xpand/));\par
\},\par
\par
reOrder : function () \{\par
\tab for (var i = 0; i < hs.expanders.length; i++)\par
\tab\tab if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();\par
\},\par
\par
mouseClickHandler : function(e) \par
\{\tab\par
\tab if (!e) e = window.event;\par
\tab if (e.button > 1) return true;\par
\tab if (!e.target) e.target = e.srcElement;\par
\tab\par
\tab var el = e.target;\par
\tab while (el.parentNode\par
\tab\tab && !(/highslide-(image|move|html|resize)/.test(el.className)))\par
\tab\{\par
\tab\tab el = el.parentNode;\par
\tab\}\par
\tab var exp = hs.getExpander(el);\par
\tab if (exp && (exp.isClosing || !exp.isExpanded)) return true;\par
\tab\tab\par
\tab if (exp && e.type == 'mousedown') \{\par
\tab\tab if (e.target.form) return true;\par
\tab\tab var match = el.className.match(/highslide-(image|move|resize)/);\par
\tab\tab if (match) \{\par
\tab\tab\tab hs.dragArgs = \{ exp: exp , type: match[1], left: exp.x.pos, width: exp.x.size, top: exp.y.pos, \par
\tab\tab\tab\tab height: exp.y.size, clickX: e.clientX, clickY: e.clientY \};\par
\tab\tab\tab\par
\tab\tab\tab\par
\tab\tab\tab hs.addEventListener(document, 'mousemove', hs.dragHandler);\par
\tab\tab\tab if (e.preventDefault) e.preventDefault(); // FF\par
\tab\tab\tab\par
\tab\tab\tab if (/highslide-(image|html)-blur/.test(exp.content.className)) \{\par
\tab\tab\tab\tab exp.focus();\par
\tab\tab\tab\tab hs.hasFocused = true;\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\} else if (e.type == 'mouseup') \{\par
\tab\tab\par
\tab\tab hs.removeEventListener(document, 'mousemove', hs.dragHandler);\par
\tab\tab\par
\tab\tab if (hs.dragArgs) \{\par
\tab\tab\tab if (hs.dragArgs.type == 'image')\par
\tab\tab\tab\tab hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;\par
\tab\tab\tab var hasDragged = hs.dragArgs.hasDragged;\par
\tab\tab\tab\par
\tab\tab\tab if (!hasDragged &&!hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) \{\par
\tab\tab\tab\tab exp.close();\par
\tab\tab\tab\} \par
\tab\tab\tab else if (hasDragged || (!hasDragged && hs.hasHtmlExpanders)) \{\par
\tab\tab\tab\tab hs.dragArgs.exp.doShowHide('hidden');\par
\tab\tab\tab\}\par
\tab\tab\tab if (hasDragged) hs.setDimmerSize(exp);\par
\tab\tab\tab\par
\tab\tab\tab hs.hasFocused = false;\par
\tab\tab\tab hs.dragArgs = null;\par
\tab\tab\par
\tab\tab\} else if (/highslide-image-blur/.test(el.className)) \{\par
\tab\tab\tab el.style.cursor = hs.styleRestoreCursor;\tab\tab\par
\tab\tab\}\par
\tab\}\par
\tab return false;\par
\},\par
\par
dragHandler : function(e)\par
\{\par
\tab if (!hs.dragArgs) return true;\par
\tab if (!e) e = window.event;\par
\tab var a = hs.dragArgs, exp = a.exp;\par
\tab\par
\tab a.dX = e.clientX - a.clickX;\par
\tab a.dY = e.clientY - a.clickY;\tab\par
\tab\par
\tab var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));\par
\tab if (!a.hasDragged) a.hasDragged = (a.type != 'image' && distance > 0)\par
\tab\tab || (distance > (hs.dragSensitivity || 5));\par
\tab\par
\tab if (a.hasDragged && e.clientX > 5 && e.clientY > 5) \{\par
\tab\tab\par
\tab\tab if (a.type == 'resize') exp.resize(a);\par
\tab\tab else \{\par
\tab\tab\tab exp.moveTo(a.left + a.dX, a.top + a.dY);\par
\tab\tab\tab if (a.type == 'image') exp.content.style.cursor = 'move';\par
\tab\tab\}\par
\tab\}\par
\tab return false;\par
\},\par
\par
wrapperMouseHandler : function (e) \{\par
\tab try \{\par
\tab\tab if (!e) e = window.event;\par
\tab\tab var over = /mouseover/i.test(e.type); \par
\tab\tab if (!e.target) e.target = e.srcElement; // ie\par
\tab\tab if (hs.ie) e.relatedTarget = \par
\tab\tab\tab over ? e.fromElement : e.toElement; // ie\par
\tab\tab var exp = hs.getExpander(e.target);\par
\tab\tab if (!exp.isExpanded) return;\par
\tab\tab if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget, true) == exp \par
\tab\tab\tab || hs.dragArgs) return;\par
\tab\tab for (var i = 0; i < exp.overlays.length; i++) \{\par
\tab\tab\tab var o = hs.$('hsId'+ exp.overlays[i]);\par
\tab\tab\tab if (o && o.hideOnMouseOut) \{\par
\tab\tab\tab\tab var from = over ? 0 : o.opacity,\par
\tab\tab\tab\tab\tab to = over ? o.opacity : 0;\tab\tab\tab\par
\tab\tab\tab\tab hs.fade(o, from, to);\par
\tab\tab\tab\}\par
\tab\tab\}\tab\par
\tab\} catch (e) \{\}\par
\},\par
\par
addEventListener : function (el, event, func) \{\par
\tab try \{\par
\tab\tab el.addEventListener(event, func, false);\par
\tab\} catch (e) \{\par
\tab\tab try \{\par
\tab\tab\tab el.detachEvent('on'+ event, func);\par
\tab\tab\tab el.attachEvent('on'+ event, func);\par
\tab\tab\} catch (e) \{\par
\tab\tab\tab el['on'+ event] = func;\par
\tab\tab\}\par
\tab\} \par
\},\par
\par
removeEventListener : function (el, event, func) \{\par
\tab try \{\par
\tab\tab el.removeEventListener(event, func, false);\par
\tab\} catch (e) \{\par
\tab\tab try \{\par
\tab\tab\tab el.detachEvent('on'+ event, func);\par
\tab\tab\} catch (e) \{\par
\tab\tab\tab el['on'+ event] = null;\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
preloadFullImage : function (i) \{\par
\tab if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') \{\par
\tab\tab var img = document.createElement('img');\par
\tab\tab img.onload = function() \{ \par
\tab\tab\tab img = null;\par
\tab\tab\tab hs.preloadFullImage(i + 1);\par
\tab\tab\};\par
\tab\tab img.src = hs.preloadTheseImages[i];\par
\tab\}\par
\},\par
preloadImages : function (number) \{\par
\tab if (number && typeof number != 'object') hs.numberOfImagesToPreload = number;\par
\tab\par
\tab var arr = hs.getAnchors();\par
\tab for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) \{\par
\tab\tab hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));\par
\tab\}\par
\tab\par
\tab // preload outlines\par
\tab if (hs.outlineType)\tab new hs.Outline(hs.outlineType, function () \{ hs.preloadFullImage(0)\} );\par
\tab else\par
\tab\par
\tab hs.preloadFullImage(0);\par
\tab\par
\tab // preload cursor\par
\tab var cur = hs.createElement('img', \{ src: hs.graphicsDir + hs.restoreCursor \});\par
\},\par
\par
\par
init : function () \{\par
\tab if (!hs.container) \{\par
\tab\tab hs.container = hs.createElement('div', \{\par
\tab\tab\tab\tab className: 'highslide-container'\par
\tab\tab\tab\}, \{\par
\tab\tab\tab\tab position: 'absolute', \par
\tab\tab\tab\tab left: 0, \par
\tab\tab\tab\tab top: 0, \par
\tab\tab\tab\tab width: '100%', \par
\tab\tab\tab\tab zIndex: hs.zIndexCounter,\par
\tab\tab\tab\tab direction: 'ltr'\par
\tab\tab\tab\}, \par
\tab\tab\tab document.body,\par
\tab\tab\tab true\par
\tab\tab );\par
\tab\tab hs.loading = hs.createElement('a', \{\par
\tab\tab\tab\tab className: 'highslide-loading',\par
\tab\tab\tab\tab title: hs.lang.loadingTitle,\par
\tab\tab\tab\tab innerHTML: hs.lang.loadingText,\par
\tab\tab\tab\tab href: 'javascript:;'\par
\tab\tab\tab\}, \{\par
\tab\tab\tab\tab position: 'absolute',\par
\tab\tab\tab\tab top: '-9999px',\par
\tab\tab\tab\tab opacity: hs.loadingOpacity,\par
\tab\tab\tab\tab zIndex: 1\par
\tab\tab\tab\}, hs.container\par
\tab\tab );\par
\tab\tab hs.garbageBin = hs.createElement('div', null, \{ display: 'none' \}, hs.container);\par
\tab\tab\par
\tab\tab // http://www.robertpenner.com/easing/ \par
\tab\tab Math.linearTween = function (t, b, c, d) \{\par
\tab\tab\tab return c*t/d + b;\par
\tab\tab\};\par
\tab\tab Math.easeInQuad = function (t, b, c, d) \{\par
\tab\tab\tab return c*(t/=d)*t + b;\par
\tab\tab\};\par
\tab\tab Math.easeInOutQuad = function (t, b, c, d) \{\par
\tab\tab\tab if ((t/=d/2) < 1) return c/2*t*t + b;\par
\tab\tab\tab return -c/2 * ((--t)*(t-2) - 1) + b;\par
\tab\tab\};\par
\tab\tab for (var x in hs.langDefaults) \{\par
\tab\tab\tab if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];\par
\tab\tab\tab else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined') \par
\tab\tab\tab\tab hs.lang[x] = hs.langDefaults[x];\par
\tab\tab\}\par
\tab\tab\par
\tab\tab hs.hideSelects = (hs.ie && hs.ieVersion() < 7);\par
\tab\tab hs.hideIframes = ((window.opera && navigator.appVersion < 9) || navigator.vendor == 'KDE' \par
\tab\tab\tab || (hs.ie && hs.ieVersion() < 5.5));\par
\tab\}\par
\},\par
domReady : function() \{\par
\tab hs.isDomReady = true;\par
\tab if (hs.onDomReady) hs.onDomReady();\par
\},\par
\par
updateAnchors : function() \{\par
\tab var els = document.all || document.getElementsByTagName('*'), all = [], images = [],groups = \{\}, re;\par
\tab\par
\tab for (var i = 0; i < els.length; i++) \{\par
\tab\tab re = hs.isHsAnchor(els[i]);\par
\tab\tab if (re) \{\par
\tab\tab\tab hs.push(all, els[i]);\par
\tab\tab\tab if (re[0] == 'hs.expand') hs.push(images, els[i]);\par
\tab\tab\tab var g = hs.getParam(els[i], 'slideshowGroup') || 'none';\par
\tab\tab\tab if (!groups[g]) groups[g] = [];\par
\tab\tab\tab hs.push(groups[g], els[i]);\par
\tab\tab\}\par
\tab\}\par
\tab hs.anchors = \{ all: all, groups: groups, images: images \};\par
\tab\par
\tab return hs.anchors;\par
\},\par
\par
getAnchors : function() \{\par
\tab return hs.anchors || hs.updateAnchors();\par
\},\par
\par
\par
fade : function (el, o, oFinal, dur, fn, i, dir) \{\par
\tab if (typeof i == 'undefined') \{ // new fader\par
\tab\tab if (typeof dur != 'number') dur = 250;\par
\tab\tab if (dur < 25) \{ // instant\par
\tab\tab\tab hs.setStyles( el, \{ opacity: oFinal\tab\});\par
\tab\tab\tab if (fn) fn();\par
\tab\tab\tab return;\par
\tab\tab\}\par
\tab\tab i = hs.faders.length;\par
\tab\tab dir = oFinal > o ? 1 : -1;\par
\tab\tab var step = (25 / (dur - dur % 25)) * Math.abs(o - oFinal);\par
\tab\}\par
\tab o = parseFloat(o);\par
\tab var skip = (el.fade === 0 || el.fade === false || (el.fade == 2 && hs.ie));\par
\tab el.style.visibility = ((skip ? oFinal : o) <= 0) ? 'hidden' : 'visible';\par
\tab if (skip || o < 0 || (dir == 1 && o > oFinal)) \{ \par
\tab\tab if (fn) fn();\par
\tab\tab return;\par
\tab\}\par
\tab if (el.fading && el.fading.i != i) \{\par
\tab\tab clearTimeout(hs.faders[el.fading.i]);\par
\tab\tab o = el.fading.o;\par
\tab\}\par
\tab el.fading = \{i: i, o: o, step: (step || el.fading.step)\};\par
\tab el.style.visibility = (o <= 0) ? 'hidden' : 'visible';\par
\tab hs.setStyles(el, \{ opacity: o \});\par
\tab hs.faders[i] = setTimeout(function() \{\par
\tab\tab hs.fade(el, o + el.fading.step * dir, oFinal, null, fn, i, dir);\par
\tab\}, 25);\par
\},\par
\par
close : function(el) \{\par
\tab var exp = hs.getExpander(el);\par
\tab if (exp) exp.close();\par
\tab return false;\par
\}\par
\}; // end hs object\par
\par
\par
hs.Outline =  function (outlineType, onLoad) \{\par
\tab this.onLoad = onLoad;\par
\tab this.outlineType = outlineType;\par
\tab var v = hs.ieVersion(), tr;\par
\tab\par
\tab this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;\par
\tab if (!outlineType) \{\par
\tab\tab if (onLoad) onLoad();\par
\tab\tab return;\par
\tab\}\par
\tab\par
\tab hs.init();\par
\tab this.table = hs.createElement(\par
\tab\tab 'table', \{ \par
\tab\tab\tab cellSpacing: 0 \par
\tab\tab\}, \{\par
\tab\tab\tab visibility: 'hidden',\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab borderCollapse: 'collapse',\par
\tab\tab\tab width: 0\par
\tab\tab\},\par
\tab\tab hs.container,\par
\tab\tab true\par
\tab );\par
\tab var tbody = hs.createElement('tbody', null, null, this.table, 1);\par
\tab\par
\tab this.td = [];\par
\tab for (var i = 0; i <= 8; i++) \{\par
\tab\tab if (i % 3 == 0) tr = hs.createElement('tr', null, \{ height: 'auto' \}, tbody, true);\par
\tab\tab this.td[i] = hs.createElement('td', null, null, tr, true);\par
\tab\tab var style = i != 4 ? \{ lineHeight: 0, fontSize: 0\} : \{ position : 'relative' \};\par
\tab\tab hs.setStyles(this.td[i], style);\par
\tab\}\par
\tab this.td[4].className = outlineType +' highslide-outline';\par
\tab\par
\tab this.preloadGraphic(); \par
\};\par
\par
hs.Outline.prototype = \{\par
preloadGraphic : function () \{\par
\tab var src = hs.graphicsDir + (hs.outlinesDir || "outlines/")+ this.outlineType +".png";\par
\tab\tab\tab\tab\par
\tab var appendTo = hs.safari ? hs.container : null;\par
\tab this.graphic = hs.createElement('img', null, \{ position: 'absolute', \par
\tab\tab top: '-9999px' \}, appendTo, true); // for onload trigger\par
\tab\par
\tab var pThis = this;\par
\tab this.graphic.onload = function() \{ pThis.onGraphicLoad(); \};\par
\tab\par
\tab this.graphic.src = src;\par
\},\par
\par
onGraphicLoad : function () \{\par
\tab var o = this.offset = this.graphic.width / 4,\par
\tab\tab pos = [[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],\par
\tab\tab dim = \{ height: (2*o) +'px', width: (2*o) +'px' \};\par
\tab for (var i = 0; i <= 8; i++) \{\par
\tab\tab if (pos[i]) \{\par
\tab\tab\tab if (this.hasAlphaImageLoader) \{\par
\tab\tab\tab\tab var w = (i == 1 || i == 7) ? '100%' : this.graphic.width +'px';\par
\tab\tab\tab\tab var div = hs.createElement('div', null, \{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden'\}, this.td[i], true);\par
\tab\tab\tab\tab hs.createElement ('div', null, \{ \par
\tab\tab\tab\tab\tab\tab filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+ this.graphic.src + "')", \par
\tab\tab\tab\tab\tab\tab position: 'absolute',\par
\tab\tab\tab\tab\tab\tab width: w, \par
\tab\tab\tab\tab\tab\tab height: this.graphic.height +'px',\par
\tab\tab\tab\tab\tab\tab left: (pos[i][0]*o)+'px',\par
\tab\tab\tab\tab\tab\tab top: (pos[i][1]*o)+'px'\par
\tab\tab\tab\tab\tab\}, \par
\tab\tab\tab\tab div,\par
\tab\tab\tab\tab true);\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab hs.setStyles(this.td[i], \{ background: 'url('+ this.graphic.src +') '+ (pos[i][0]*o)+'px '+(pos[i][1]*o)+'px'\});\par
\tab\tab\tab\}\par
\tab\tab\tab\par
\tab\tab\tab if (window.opera && (i == 3 || i ==5)) \par
\tab\tab\tab\tab hs.createElement('div', null, dim, this.td[i], true);\par
\tab\tab\tab\par
\tab\tab\tab hs.setStyles (this.td[i], dim);\par
\tab\tab\}\par
\tab\}\par
\tab this.graphic = null;\par
\tab if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();\par
\tab hs.pendingOutlines[this.outlineType] = this;\par
\tab if (this.onLoad) this.onLoad();\par
\},\par
\tab\par
setPosition : function (exp, pos, vis) \{\par
\tab pos = pos || \{\par
\tab\tab x: exp.x.pos,\par
\tab\tab y: exp.y.pos,\par
\tab\tab w: exp.x.size + exp.x.p1 + exp.x.p2,\par
\tab\tab h: exp.y.size + exp.y.p1 + exp.y.p2\par
\tab\};\par
\tab if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset) \par
\tab\tab ? 'visible' : 'hidden';\par
\tab hs.setStyles(this.table, \{\par
\tab\tab left: (pos.x - this.offset) +'px',\par
\tab\tab top: (pos.y - this.offset) +'px',\par
\tab\tab width: (pos.w + 2 * (exp.x.cb + this.offset)) +'px'\par
\tab\});\par
\tab\par
\tab pos.w += 2 * (exp.x.cb - this.offset);\par
\tab pos.h += + 2 * (exp.y.cb - this.offset);\par
\tab hs.setStyles (this.td[4], \{\par
\tab\tab width: pos.w >= 0 ? pos.w +'px' : 0,\par
\tab\tab height: pos.h >= 0 ? pos.h +'px' : 0\par
\tab\});\par
\tab if (this.hasAlphaImageLoader) this.td[3].style.height \par
\tab\tab = this.td[5].style.height = this.td[4].style.height;\par
\},\par
\tab\par
destroy : function(hide) \{\par
\tab if (hide) this.table.style.visibility = 'hidden';\par
\tab else hs.discardElement(this.table);\par
\}\par
\};\par
\par
hs.Dimension = function(exp, dim) \{\par
\tab this.exp = exp;\par
\tab this.dim = dim;\par
\tab this.ucwh = dim == 'x' ? 'Width' : 'Height';\par
\tab this.wh = this.ucwh.toLowerCase();\par
\tab this.uclt = dim == 'x' ? 'Left' : 'Top';\par
\tab this.lt = this.uclt.toLowerCase();\par
\tab this.ucrb = dim == 'x' ? 'Right' : 'Bottom';\par
\tab this.rb = this.ucrb.toLowerCase();\par
\};\par
hs.Dimension.prototype = \{\par
get : function(key) \{\par
\tab switch (key) \{\par
\tab\tab case 'loadingPos':\par
\tab\tab\tab return this.tpos + this.tb + (this.t - hs.loading['offset'+ this.ucwh]) / 2;\par
\tab\tab case 'loadingPosXfade':\par
\tab\tab\tab return this.pos + this.cb+ this.p1 + (this.size - hs.loading['offset'+ this.ucwh]) / 2;\par
\tab\tab case 'wsize':\par
\tab\tab\tab return this.size + 2 * this.cb + this.p1 + this.p2;\par
\tab\tab case 'fitsize':\par
\tab\tab\tab return this.clientSize - this.marginMin - this.marginMax;\par
\tab\tab case 'opos':\par
\tab\tab\tab return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);\par
\tab\tab case 'osize':\par
\tab\tab\tab return this.get('wsize') + (this.exp.outline ? 2*this.exp.outline.offset : 0);\par
\tab\tab case 'imgPad':\par
\tab\tab\tab return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;\par
\tab\tab\par
\tab\}\par
\},\par
calcBorders: function() \{\par
\tab // correct for borders\par
\tab this.cb = (this.exp.content['offset'+ this.ucwh] - this.t) / 2;\par
\tab this.marginMax = hs['margin'+ this.ucrb] + 2 * this.cb;\par
\},\par
calcThumb: function() \{\par
\tab this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : \par
\tab\tab this.exp.el['offset'+ this.ucwh];\par
\tab this.tpos = this.exp.tpos[this.dim];\par
\tab this.tb = (this.exp.el['offset'+ this.ucwh] - this.t) / 2;\par
\tab this.p1 = this.p2 = 0;\par
\tab if (this.tpos == 0) \{\par
\tab\tab this.tpos = (hs.page[this.wh] / 2) + hs.page['scroll'+ this.uclt];\tab\tab\par
\tab\};\par
\},\par
calcExpanded: function() \{\par
\tab this.justify = 'auto';\par
\tab\par
\tab // get alignment\par
\tab if (this.exp.align == 'center') this.justify = 'center';\par
\tab else if (new RegExp(this.lt).test(this.exp.anchor)) this.justify = null;\par
\tab else if (new RegExp(this.rb).test(this.exp.anchor)) this.justify = 'max';\par
\tab\par
\tab\par
\tab // size and position\par
\tab this.pos = this.tpos - this.cb + this.tb;\par
\tab this.size = Math.min(this.full, this.exp['max'+ this.ucwh] || this.full);\par
\tab this.minSize = this.exp.allowSizeReduction ? \par
\tab\tab Math.min(this.exp['min'+ this.ucwh], this.full) : this.full;\par
\tab if (hs.padToMinWidth && this.dim == 'x') this.minSize = this.exp.minWidth;\par
\tab this.target = this.exp['target'+ this.dim.toUpperCase()];\par
\tab this.marginMin = hs['margin'+ this.uclt];\par
\tab this.scroll = hs.page['scroll'+ this.uclt];\par
\tab this.clientSize = hs.page[this.wh];\par
\},\par
setSize: function(i) \{\par
\tab this.size = i;\par
\tab this.exp.content.style[this.wh] = i +'px';\par
\tab this.exp.wrapper.style[this.wh] = this.get('wsize') +'px';\par
\tab if (this.exp.outline) this.exp.outline.setPosition(this.exp);\par
\tab if (this.dim == 'x' && this.exp.overlayBox) this.exp.sizeOverlayBox(true);\par
\tab if (this.dim == 'x' && this.exp.slideshow && this.exp.isImage) \{\par
\tab\tab if (i == this.full) this.exp.slideshow.disable('full-expand');\par
\tab\tab else this.exp.slideshow.enable('full-expand');\par
\tab\}\par
\},\par
setPos: function(i) \{\par
\tab this.pos = i;\par
\tab this.exp.wrapper.style[this.lt] = i +'px';\tab\par
\tab\par
\tab if (this.exp.outline) this.exp.outline.setPosition(this.exp);\par
\tab\par
\}\par
\};\par
\par
hs.Expander = function(a, params, custom, contentType) \{\par
\tab if (document.readyState && hs.ie && !hs.isDomReady) \{\par
\tab\tab hs.onDomReady = function() \{\par
\tab\tab\tab new hs.Expander(a, params, custom, contentType);\par
\tab\tab\};\par
\tab\tab return;\par
\tab\} \par
\tab this.a = a;\par
\tab this.custom = custom;\par
\tab this.contentType = contentType || 'image';\par
\tab this.isImage = !this.isHtml;\par
\tab\par
\tab hs.continuePreloading = false;\par
\tab this.overlays = [];\par
\tab this.last = hs.last;\par
\tab hs.last = null;\par
\tab hs.init();\par
\tab var key = this.key = hs.expanders.length;\par
\tab // override inline parameters\par
\tab for (var i = 0; i < hs.overrides.length; i++) \{\par
\tab\tab var name = hs.overrides[i];\par
\tab\tab this[name] = params && typeof params[name] != 'undefined' ?\par
\tab\tab\tab params[name] : hs[name];\par
\tab\}\par
\tab if (!this.src) this.src = a.href;\par
\tab // get thumb\par
\tab var el = (params && params.thumbnailId) ? hs.$(params.thumbnailId) : a;\par
\tab el = this.thumb = el.getElementsByTagName('img')[0] || el;\par
\tab this.thumbsUserSetId = el.id || a.id;\par
\tab\par
\tab // check if already open\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i] && hs.expanders[i].a == a \par
\tab\tab\tab && !(this.last && this.transitions[1] == 'crossfade')) \{\par
\tab\tab\tab hs.expanders[i].focus();\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\}\tab\par
\tab // cancel other\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) \{\par
\tab\tab\tab hs.expanders[i].cancelLoading();\par
\tab\tab\}\par
\tab\}\par
\tab hs.expanders[this.key] = this;\par
\tab if (!hs.allowMultipleInstances) \{\par
\tab\tab if (hs.expanders[key-1]) hs.expanders[key-1].close();\par
\tab\tab if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])\par
\tab\tab\tab hs.expanders[hs.focusKey].close();\par
\tab\}\par
\tab\par
\tab\par
\tab // initiate metrics\par
\tab this.el = el;\par
\tab this.tpos = hs.getPosition(el);\par
\tab hs.page = hs.getPageSize();\par
\tab var x = this.x = new hs.Dimension(this, 'x');\par
\tab x.calcThumb();\par
\tab var y = this.y = new hs.Dimension(this, 'y');\par
\tab y.calcThumb();\par
\tab\par
\tab // instanciate the wrapper\par
\tab this.wrapper = hs.createElement(\par
\tab\tab 'div', \{\par
\tab\tab\tab id: 'highslide-wrapper-'+ this.key,\par
\tab\tab\tab className: this.wrapperClassName\par
\tab\tab\}, \{\par
\tab\tab\tab visibility: 'hidden',\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab zIndex: hs.zIndexCounter++\par
\tab\tab\}, null, true );\par
\tab\par
\tab this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;\par
\tab if (this.contentType == 'image' && this.outlineWhileAnimating == 2)\par
\tab\tab this.outlineWhileAnimating = 0;\par
\tab\par
\tab // get the outline\par
\tab if (!this.outlineType \par
\tab\tab || (this.last && this.isImage && this.transitions[1] == 'crossfade')) \{\par
\tab\tab this[this.contentType +'Create']();\par
\tab\par
\tab\} else if (hs.pendingOutlines[this.outlineType]) \{\par
\tab\tab this.connectOutline();\par
\tab\tab this[this.contentType +'Create']();\par
\tab\par
\tab\} else \{\par
\tab\tab this.showLoading();\par
\tab\tab var exp = this;\par
\tab\tab new hs.Outline(this.outlineType, \par
\tab\tab\tab function () \{\par
\tab\tab\tab\tab exp.connectOutline();\par
\tab\tab\tab\tab exp[exp.contentType +'Create']();\par
\tab\tab\tab\} \par
\tab\tab );\par
\tab\}\par
\tab return true;\par
\};\par
\par
hs.Expander.prototype = \{\par
\par
connectOutline : function() \{\par
\tab var o = this.outline = hs.pendingOutlines[this.outlineType];\par
\tab o.table.style.zIndex = this.wrapper.style.zIndex;\par
\tab hs.pendingOutlines[this.outlineType] = null;\par
\},\par
\par
showLoading : function() \{\par
\tab if (this.onLoadStarted || this.loading) return;\par
\tab\par
\tab this.loading = hs.loading;\par
\tab var exp = this;\par
\tab this.loading.onclick = function() \{\par
\tab\tab exp.cancelLoading();\par
\tab\};\par
\tab var exp = this, \par
\tab\tab l = this.x.get('loadingPos') +'px',\par
\tab\tab t = this.y.get('loadingPos') +'px';\par
\tab if (!tgt && this.last && this.transitions[1] == 'crossfade') \par
\tab\tab var tgt = this.last; \par
\tab if (tgt) \{\par
\tab\tab l = tgt.x.get('loadingPosXfade') +'px';\par
\tab\tab t = tgt.y.get('loadingPosXfade') +'px';\par
\tab\tab this.loading.style.zIndex = hs.zIndexCounter++;\par
\tab\}\par
\tab setTimeout(function () \{ \par
\tab\tab if (exp.loading) hs.setStyles(exp.loading, \{ left: l, top: t, zIndex: hs.zIndexCounter++ \})\}\par
\tab , 100);\par
\},\par
\par
imageCreate : function() \{\par
\tab var exp = this;\par
\tab\par
\tab var img = document.createElement('img');\par
    this.content = img;\par
    img.onload = function () \{\par
    \tab if (hs.expanders[exp.key]) exp.contentLoaded(); \par
\tab\};\par
    if (hs.blockRightClick) img.oncontextmenu = function() \{ return false; \};\par
    img.className = 'highslide-image';\par
    hs.setStyles(img, \{\par
    \tab visibility: 'hidden',\par
    \tab display: 'block',\par
    \tab position: 'absolute',\par
\tab\tab maxWidth: '9999px',\par
\tab\tab zIndex: 3\par
\tab\});\par
    img.title = hs.lang.restoreTitle;\par
    if (hs.safari) hs.container.appendChild(img);\par
    if (hs.ie && hs.flushImgSize) img.src = null;\par
\tab img.src = this.src;\par
\tab\par
\tab this.showLoading();\par
\},\par
\par
contentLoaded : function() \{\par
\tab try \{\tab\par
\tab\tab if (!this.content) return;\par
\tab\tab this.content.onload = null;\par
\tab\tab if (this.onLoadStarted) return;\par
\tab\tab else this.onLoadStarted = true;\par
\tab\tab\par
\tab\tab var x = this.x, y = this.y;\par
\tab\tab\par
\tab\tab if (this.loading) \{\par
\tab\tab\tab hs.setStyles(this.loading, \{ top: '-9999px' \});\par
\tab\tab\tab this.loading = null;\par
\tab\tab\}\par
\tab\tab //this.marginBottom = hs.marginBottom;\tab\par
\tab\tab\tab x.full = this.content.width;\par
\tab\tab\tab y.full = this.content.height;\par
\tab\tab\tab\par
\tab\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab\tab width: this.x.t +'px',\par
\tab\tab\tab\tab height: this.y.t +'px'\par
\tab\tab\tab\});\par
\tab\tab\par
\tab\tab this.wrapper.appendChild(this.content);\par
\tab\tab hs.setStyles (this.wrapper, \{\par
\tab\tab\tab left: this.x.tpos +'px',\par
\tab\tab\tab top: this.y.tpos +'px'\par
\tab\tab\});\par
\tab\tab hs.container.appendChild(this.wrapper);\par
\tab\tab\par
\tab\tab x.calcBorders();\par
\tab\tab y.calcBorders();\par
\tab\tab\par
\tab\tab\par
\tab\tab this.initSlideshow();\par
\tab\tab this.getOverlays();\par
\tab\tab\par
\tab\tab var ratio = x.full / y.full;\par
\tab\tab\par
\tab\tab x.calcExpanded();\par
\tab\tab this.justify(x);\par
\tab\tab\par
\tab\tab y.calcExpanded();\par
\tab\tab this.justify(y);\par
\tab\tab if (this.overlayBox) this.sizeOverlayBox(0, 1);\par
\tab\tab\par
\tab\tab if (this.allowSizeReduction) \{\par
\tab\tab\tab\tab this.correctRatio(ratio);\par
\tab\tab\tab var ss = this.slideshow;\tab\tab\tab\par
\tab\tab\tab if (ss && this.last && ss.controls && ss.fixedControls) \{\par
\tab\tab\tab\tab var pos = ss.overlayOptions.position || '', p;\par
\tab\tab\tab\tab for (var dim in hs.oPos) for (var i = 0; i < 5; i++) \{\par
\tab\tab\tab\tab\tab p = this[dim];\par
\tab\tab\tab\tab\tab if (pos.match(hs.oPos[dim][i])) \{\par
\tab\tab\tab\tab\tab\tab p.pos = this.last[dim].pos \par
\tab\tab\tab\tab\tab\tab\tab + (this.last[dim].p1 - p.p1)\par
\tab\tab\tab\tab\tab\tab\tab + (this.last[dim].size - p.size) * [0, 0, .5, 1, 1][i];\par
\tab\tab\tab\tab\tab\tab if (ss.fixedControls == 'fit') \{\par
\tab\tab\tab\tab\tab\tab\tab if (p.pos + p.size + p.p1 + p.p2 > p.scroll + p.clientSize - p.marginMax)\par
\tab\tab\tab\tab\tab\tab\tab\tab p.pos = p.scroll + p.clientSize - p.size - p.marginMin - p.marginMax - p.p1 - p.p2;\par
\tab\tab\tab\tab\tab\tab\tab if (p.pos < p.scroll + p.marginMin) p.pos = p.scroll + p.marginMin; \par
\tab\tab\tab\tab\tab\tab\} \par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\tab\tab\par
\tab\tab\tab\par
\tab\tab\tab if (this.isImage && this.x.full > this.x.size) \{\par
\tab\tab\tab\tab this.createFullExpand();\par
\tab\tab\tab\tab if (this.overlays.length == 1) this.sizeOverlayBox();\tab\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab this.show();\par
\tab\tab\par
\tab\} catch (e) \{\par
\tab\tab window.location.href = this.src;\par
\tab\}\par
\},\par
\par
justify : function (p, moveOnly) \{\par
\tab var tgtArr, tgt = p.target, dim = p == this.x ? 'x' : 'y';\par
\tab\par
\tab if (tgt && tgt.match(/ /)) \{\par
\tab\tab tgtArr = tgt.split(' ');\par
\tab\tab tgt = tgtArr[0];\par
\tab\}\par
\tab if (tgt && hs.$(tgt)) \{\par
\tab\tab p.pos = hs.getPosition(hs.$(tgt))[dim];\par
\tab\tab if (tgtArr && tgtArr[1] && tgtArr[1].match(/^[-]?[0-9]+px$/)) \par
\tab\tab\tab p.pos += parseInt(tgtArr[1]);\par
\tab\tab\par
\tab\} else if (p.justify == 'auto' || p.justify == 'center') \{\par
\tab\par
\tab\tab var hasMovedMin = false;\par
\tab\tab\par
\tab\tab var allowReduce = hs.allowSizeReduction;\par
\tab\tab if (p.justify == 'center') p.pos = Math.round(p.scroll + (p.clientSize - p.marginMax - p.get('wsize')) / 2);\par
\tab\tab else\par
\tab\tab\tab p.pos = Math.round(p.pos - ((p.get('wsize') - p.t) / 2));\par
\tab\tab if (p.pos < p.scroll + p.marginMin) \{\par
\tab\tab\tab p.pos = p.scroll + p.marginMin;\par
\tab\tab\tab hasMovedMin = true;\tab\tab\par
\tab\tab\}\par
\tab\tab if (!moveOnly && p.size < p.minSize) \{\par
\tab\tab\tab p.size = p.minSize;\par
\tab\tab\tab allowReduce = false;\par
\tab\tab\}\par
\tab\tab if (p.pos + p.get('wsize') > p.scroll + p.clientSize - p.marginMax) \{\par
\tab\tab\tab if (!moveOnly && hasMovedMin && allowReduce) \{\par
\tab\tab\tab\tab p.size = p.get('fitsize'); // can't expand more\par
\tab\tab\tab\} else if (p.get('wsize') < p.get('fitsize')) \{\par
\tab\tab\tab\tab p.pos = p.scroll + p.clientSize - p.marginMax - p.get('wsize');\par
\tab\tab\tab\} else \{ // image larger than viewport\par
\tab\tab\tab\tab p.pos = p.scroll + p.marginMin;\par
\tab\tab\tab\tab if (!moveOnly && allowReduce) p.size = p.get('fitsize');\par
\tab\tab\tab\}\tab\tab\tab\par
\tab\tab\}\par
\tab\tab\par
\tab\tab if (!moveOnly && p.size < p.minSize) \{\par
\tab\tab\tab p.size = p.minSize;\par
\tab\tab\tab allowReduce = false;\par
\tab\tab\}\par
\tab\tab\par
\tab\par
\tab\} else if (p.justify == 'max') \{\par
\tab\tab p.pos = Math.floor(p.pos - p.size + p.t);\par
\tab\}\par
\tab\par
\tab\tab\par
\tab if (p.pos < p.marginMin) \{\par
\tab\tab var tmpMin = p.pos;\par
\tab\tab p.pos = p.marginMin; \par
\tab\tab\par
\tab\tab if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);\par
\tab\tab\par
\tab\}\par
\},\par
\par
correctRatio : function(ratio) \{\par
\tab var x = this.x, y = this.y;\par
\tab var changed = false;\par
\tab if (x.size / y.size > ratio) \{ // width greater\par
\tab\tab x.size = y.size * ratio;\par
\tab\tab if (x.size < x.minSize) \{ // below minWidth\par
\tab\tab\tab if (hs.padToMinWidth) x.imgSize = x.size;\tab\tab\tab\par
\tab\tab\tab x.size = x.minSize;\par
\tab\tab\tab if (!x.imgSize)\par
\tab\tab\tab y.size = x.size / ratio;\par
\tab\tab\}\par
\tab\tab changed = true;\par
\tab\par
\tab\} else if (x.size / y.size < ratio) \{ // height greater\par
\tab\tab var tmpHeight = y.size;\par
\tab\tab y.size = x.size / ratio;\par
\tab\tab changed = true;\par
\tab\}\par
\tab this.fitOverlayBox(ratio);\par
\tab\par
\tab if (changed) \{\par
\tab\tab x.pos = x.tpos - x.cb + x.tb;\par
\tab\tab x.minSize = x.size;\par
\tab\tab this.justify(x, true);\par
\tab\par
\tab\tab y.pos = y.tpos - y.cb + y.tb;\par
\tab\tab y.minSize = y.size;\par
\tab\tab this.justify(y, true);\par
\tab\tab if (this.overlayBox) this.sizeOverlayBox();\par
\tab\}\par
\},\par
fitOverlayBox : function(ratio) \{\par
\tab var x = this.x, y = this.y;\par
\tab if (this.overlayBox) \{\par
\tab\tab while (y.size > this.minHeight && x.size > this.minWidth \par
\tab\tab\tab\tab &&  y.get('wsize')  > y.get('fitsize')) \{\par
\tab\tab\tab y.size -= 10;\par
\tab\tab\tab if (ratio) x.size = y.size * ratio;\par
\tab\tab\tab this.sizeOverlayBox(0, 1);\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
show : function () \{\par
\tab this.doShowHide('hidden');\par
\tab // Apply size change\par
\tab this.changeSize(\par
\tab\tab 1,\par
\tab\tab\{ \par
\tab\tab\tab xpos: this.x.tpos + this.x.tb - this.x.cb,\par
\tab\tab\tab ypos: this.y.tpos + this.y.tb - this.y.cb,\par
\tab\tab\tab xsize: this.x.t,\par
\tab\tab\tab ysize: this.y.t,\par
\tab\tab\tab xp1: 0,\par
\tab\tab\tab xp2: 0,\par
\tab\tab\tab yp1: 0,\par
\tab\tab\tab yp2: 0,\par
\tab\tab\tab ximgSize: this.x.t,\par
\tab\tab\tab ximgPad: 0,\par
\tab\tab\tab o: hs.outlineStartOffset\par
\tab\tab\},\par
\tab\tab\{\par
\tab\tab\tab xpos: this.x.pos,\par
\tab\tab\tab ypos: this.y.pos,\par
\tab\tab\tab xsize: this.x.size,\par
\tab\tab\tab ysize: this.y.size,\par
\tab\tab\tab xp1: this.x.p1,\par
\tab\tab\tab yp1: this.y.p1,\par
\tab\tab\tab xp2: this.x.p2,\par
\tab\tab\tab yp2: this.y.p2,\par
\tab\tab\tab ximgSize: this.x.imgSize,\par
\tab\tab\tab ximgPad: this.x.get('imgPad'),\par
\tab\tab\tab o: this.outline ? this.outline.offset : 0\par
\tab\tab\},\par
\tab\tab hs.expandDuration\par
\tab );\par
\},\par
\par
changeSize : function(up, from, to, dur) \{\par
\tab // transition\par
\tab var trans = this.transitions,\par
\tab other = up ? (this.last ? this.last.a : null) : hs.upcoming,\par
\tab t = (trans[1] && other \par
\tab\tab\tab && hs.getParam(other, 'transitions')[1] == trans[1]) ?\par
\tab\tab trans[1] : trans[0];\par
\tab\tab\par
\tab\par
\tab if (this[t] && t != 'expand') \{\par
\tab\tab this[t](up, from, to); \par
\tab\tab return;\par
\tab\}\par
\tab if (up) hs.setStyles(this.wrapper, \{ opacity: 1 \});\par
\tab\par
\tab if (this.outline && !this.outlineWhileAnimating) \{\par
\tab\tab if (up) this.outline.setPosition(this);\par
\tab\tab else this.outline.destroy();\par
\tab\}\par
\tab\par
\tab\par
\tab if (!up && this.overlayBox) \{\par
\tab\tab if (this.slideshow) \{\par
\tab\tab\tab var c = this.slideshow.controls;\par
\tab\tab\tab if (c && hs.getExpander(c) == this) c.parentNode.removeChild(c);\par
\tab\tab\}\par
\tab\tab hs.discardElement(this.overlayBox);\par
\tab\}\par
\tab if (this.fadeInOut) \{\par
\tab\tab from.op = up ? 0 : 1;\par
\tab\tab to.op = up;\par
\tab\}\par
\tab var t,\par
\tab\tab exp = this,\par
\tab\tab easing = Math[this.easing] || Math.easeInQuad,\par
\tab\tab steps = (up ? hs.expandSteps : hs.restoreSteps) || parseInt(dur / 25) || 1;\par
\tab if (!up) easing = Math[this.easingClose] || easing;\par
\tab for (var i = 1; i <= steps ; i++) \{\par
\tab\tab t = Math.round(i * (dur / steps));\par
\tab\tab\par
\tab\tab (function()\{\par
\tab\tab\tab var pI = i, size = \{\};\par
\tab\tab\tab\par
\tab\tab\tab for (var x in from) \{\par
\tab\tab\tab\tab size[x] = easing(t, from[x], to[x] - from[x], dur);\par
\tab\tab\tab\tab if (isNaN(size[x])) size[x] = to[x];\par
\tab\tab\tab\tab if (!/^op$/.test(x)) size[x] = Math.round(size[x]);\par
\tab\tab\tab\}\par
\tab\tab\tab setTimeout ( function() \{\par
\tab\tab\tab\tab if (up && pI == 1) \{\par
\tab\tab\tab\tab\tab exp.content.style.visibility = 'visible';\par
\tab\tab\tab\tab\tab exp.a.className += ' highslide-active-anchor';\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab exp.setSize(size);\par
\tab\tab\tab\}, t);\tab\tab\tab\tab\par
\tab\tab\})();\par
\tab\}\par
\tab\par
\tab if (up) \{ \par
\tab\tab\tab\par
\tab\tab setTimeout(function() \{\par
\tab\tab\tab if (exp.outline) exp.outline.table.style.visibility = "visible";\par
\tab\tab\}, t);\par
\tab\tab setTimeout(function() \{\par
\tab\tab\tab exp.afterExpand();\par
\tab\tab\}, t + 50);\par
\tab\}\par
\tab else setTimeout(function() \{ exp.afterClose(); \}, t);\par
\},\par
\par
setSize : function (to) \{\par
\tab try \{\tab\tab\par
\tab\tab if (to.op) hs.setStyles(this.wrapper, \{ opacity: to.op \});\par
\tab\tab hs.setStyles ( this.wrapper, \{\par
\tab\tab\tab width : (to.xsize +to.xp1 + to.xp2 +\par
\tab\tab\tab\tab 2 * this.x.cb) +'px',\par
\tab\tab\tab height : (to.ysize +to.yp1 + to.yp2 +\par
\tab\tab\tab\tab 2 * this.y.cb) +'px',\par
\tab\tab\tab left: to.xpos +'px',\par
\tab\tab\tab top: to.ypos +'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab top: to.yp1 +'px',\par
\tab\tab\tab left: (to.xp1 + to.ximgPad) +'px',\par
\tab\tab\tab width: (to.ximgSize ||to.xsize) +'px',\par
\tab\tab\tab height: to.ysize +'px'\par
\tab\tab\});\par
\tab\tab\par
\tab\tab if (this.outline && this.outlineWhileAnimating) \{\par
\tab\tab\tab var o = this.outline.offset - to.o;\par
\tab\tab\tab this.outline.setPosition(this, \{\par
\tab\tab\tab\tab x: to.xpos + o, \par
\tab\tab\tab\tab y: to.ypos + o, \par
\tab\tab\tab\tab w: to.xsize + to.xp1 + to.xp2 + - 2 * o, \par
\tab\tab\tab\tab h: to.ysize + to.yp1 + to.yp2 + - 2 * o\par
\tab\tab\tab\}, 1);\par
\tab\tab\}\par
\tab\tab\tab\par
\tab\tab this.wrapper.style.visibility = 'visible';\par
\tab\tab\par
\tab\} catch (e) \{\par
\tab\tab window.location.href = this.src;\tab\par
\tab\}\par
\},\par
\par
fade : function(up, from, to) \{\par
\tab this.outlineWhileAnimating = false;\par
\tab var exp = this,\tab t = up ? 250 : 0;\par
\tab\par
\tab if (up) \{\par
\tab\tab hs.setStyles(this.wrapper, \{ opacity: 0 \});\par
\tab\tab this.setSize(to);\par
\tab\tab this.content.style.visibility = 'visible';\par
\par
\tab\tab hs.fade (this.wrapper, 0, 1);\par
\tab\}\par
\tab\par
\tab if (this.outline) \{\par
\tab\tab this.outline.table.style.zIndex = this.wrapper.style.zIndex;\par
\tab\tab var dir = up || -1;\par
\tab\tab for (var i = from.o; dir * i <= dir * to.o; i += dir, t += 25) \{\par
\tab\tab\tab (function() \{\par
\tab\tab\tab\tab var o = up ? to.o - i : from.o - i;\par
\tab\tab\tab\tab setTimeout(function() \{\par
\tab\tab\tab\tab\tab exp.outline.setPosition(exp, \{\par
\tab\tab\tab\tab\tab\tab x: (exp.x.pos + o), \par
\tab\tab\tab\tab\tab\tab y: (exp.y.pos + o),\par
\tab\tab\tab\tab\tab\tab w: (exp.x.size - 2 * o + exp.x.p1 + exp.x.p2), \par
\tab\tab\tab\tab\tab\tab h: (exp.y.size - 2 * o + exp.y.p1 + exp.y.p2)\par
\tab\tab\tab\tab\tab\}, 1);\par
\tab\tab\tab\tab\}, t);\par
\tab\tab\tab\})();\par
\tab\tab\}\par
\tab\}\par
\tab\par
\tab\par
\tab if (up) setTimeout(function() \{ exp.afterExpand(); \}, t+50);\par
\tab else \{\par
\tab\tab setTimeout( function() \{\par
\tab\tab\tab if (exp.outline) exp.outline.destroy(exp.preserveContent);\par
\tab\tab\tab hs.fade (exp.wrapper, 1, 0);\par
\tab\tab\tab setTimeout( function() \{\par
\tab\tab\tab\tab exp.afterClose();\par
\tab\tab\tab\}, 250);\par
\tab\tab\}, t);\tab\tab\par
\tab\}\par
\},\par
\par
crossfade : function (up, from, to) \{\par
\tab if (!up) return;\par
\tab var exp = this, steps = parseInt(hs.transitionDuration / 25) || 1, last = this.last;\par
\tab hs.removeEventListener(document, 'mousemove', hs.dragHandler);\par
\tab\par
\tab hs.setStyles(this.content, \{ \par
\tab\tab width: (to.ximgSize || to.xsize) +'px', \par
\tab\tab height: to.ysize +'px'\tab\tab\par
\tab\});\par
\tab this.outline = this.last.outline;\par
\tab this.last.outline = null;\par
\tab this.fadeBox = hs.createElement('div', \{\par
\tab\tab\tab className: 'highslide-image'\par
\tab\tab\}, \{ \par
\tab\tab\tab position: 'absolute', \par
\tab\tab\tab zIndex: 4,\par
\tab\tab\tab overflow: 'hidden',\par
\tab\tab\tab display: 'none'\par
\tab\tab\}\par
\tab );\par
\tab var names = \{ oldImg: last, newImg: this \};\par
\tab for (var x in names) \{ \tab\par
\tab\tab this[x] = names[x].content.cloneNode(1);\par
\tab\tab hs.setStyles(this[x], \{\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab border: 0,\par
\tab\tab\tab visibility: 'visible'\par
\tab\tab\});\par
\tab\tab this.fadeBox.appendChild(this[x]);\par
\tab\}\par
\tab this.wrapper.appendChild(this.fadeBox);\par
\tab from = \{\par
\tab\tab xpos: last.x.pos,\par
\tab\tab xsize: last.x.size,\par
\tab\tab xp1: last.x.p1,\par
\tab\tab xp2: last.x.p2,\par
\tab\tab ximgSize: last.x.imgSize || last.x.size,\par
\tab\tab ximgPad: last.x.get('imgPad'),\par
\tab\tab ypos: last.y.pos,\par
\tab\tab ysize: last.y.size,\par
\tab\tab yp1: last.y.p1,\par
\tab\tab yp2: last.y.p2,\par
\tab\tab o: 1 / steps\par
\tab\};\par
\tab to.ysize = this.y.size;\par
\tab to.o = 1;\par
\tab if (!to.ximgSize) to.ximgSize = to.xsize;\par
\tab var t, easing = Math.easeInOutQuad;\par
\tab\par
\tab if (steps > 1) this.crossfadeStep(from);\par
\tab function prep() \{\par
\tab\tab if (exp.overlayBox) \{\par
\tab\tab\tab exp.overlayBox.className = '';\par
\tab\tab\tab exp.wrapper.appendChild(exp.overlayBox);\par
\tab\tab\tab\tab\par
\tab\tab\tab for (var i = 0; i < exp.last.overlays.length; i++) \{\par
\tab\tab\tab\tab var oDiv = hs.$('hsId'+ exp.last.overlays[i]);\par
\tab\tab\tab\tab if (oDiv.reuse === exp.key) exp.overlayBox.appendChild(oDiv);\par
\tab\tab\tab\tab else hs.fade(oDiv, oDiv.opacity, 0);\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab exp.fadeBox.style.display = '';\par
\tab\tab exp.last.content.style.display = 'none';\par
\tab\};\par
\tab if (/rv:1\\.[0-8].+Gecko/.test(navigator.userAgent)) setTimeout(prep, 0);\par
\tab else prep();\par
\tab if (hs.safari) \{\par
\tab\tab var match = navigator.userAgent.match(/Safari\\/([0-9]\{3\})/);\par
\tab\tab if (match && parseInt(match[1]) < 525) this.wrapper.style.visibility = 'visible';\par
\tab\}  \par
\tab\par
\tab for (var i = 1; i <= steps; i++) \{\par
\tab\tab t = Math.round(i * (hs.transitionDuration / steps));\par
\tab\tab\par
\tab\tab (function()\{\par
\tab\tab\tab var size = \{\}, pI = i;\par
\tab\tab\tab for (var x in from)\tab\{\par
\tab\tab\tab\tab var val = easing(t, from[x], to[x] - from[x], hs.transitionDuration);\par
\tab\tab\tab\tab if (isNaN(val)) val = to[x];\par
\tab\tab\tab\tab size[x] = (x != 'o') ? Math.round(val) : val;\par
\tab\tab\tab\}\par
\tab\tab\tab\par
\tab\tab\tab setTimeout ( function() \{\par
\tab\tab\tab\tab exp.crossfadeStep(size);\par
\tab\tab\tab\}, t);\tab\tab\tab\tab\par
\tab\tab\})();\par
\tab\}\par
\tab setTimeout ( function () \{\par
\tab\tab exp.crossfadeEnd();\par
\tab\}, t + 100);\par
\par
\},\par
\par
crossfadeStep : function (size) \{\par
\tab try \{\par
\tab\tab if (this.outline) this.outline.setPosition(this, \{ \par
\tab\tab\tab x: size.xpos, \par
\tab\tab\tab y: size.ypos, \par
\tab\tab\tab w: size.xsize + size.xp1 + size.xp2, \par
\tab\tab\tab h: size.ysize + size.yp1 + size.yp2\par
\tab\tab\}, 1);\par
\tab\tab this.last.wrapper.style.clip = 'rect('\par
\tab\tab\tab + (size.ypos - this.last.y.pos)+'px, '\par
\tab\tab\tab + (size.xsize + size.xp1 + size.xp2 + size.xpos + 2 * this.last.x.cb - this.last.x.pos) +'px, '\par
\tab\tab\tab + (size.ysize + size.yp1 + size.yp2 + size.ypos + 2 * this.last.y.cb - this.last.y.pos) +'px, '\par
\tab\tab\tab + (size.xpos - this.last.x.pos)+'px)';\par
\tab\tab\tab\par
\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab top: size.yp1 +'px',\par
\tab\tab\tab left: (size.xp1 + this.x.get('imgPad')) +'px',\par
\tab\tab\tab marginTop: (this.y.pos - size.ypos) +'px',\par
\tab\tab\tab marginLeft: (this.x.pos - size.xpos) +'px'\par
\tab\tab\});\par
\tab\tab\par
\tab\tab hs.setStyles(this.wrapper, \{\par
\tab\tab\tab top: size.ypos +'px',\par
\tab\tab\tab left: size.xpos +'px',\par
\tab\tab\tab width: (size.xp1 + size.xp2 + size.xsize + 2 * this.x.cb)+ 'px',\par
\tab\tab\tab height: (size.yp1 + size.yp2 + size.ysize + 2 * this.y.cb) + 'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.fadeBox, \{\par
\tab\tab\tab width: (size.ximgSize || size.xsize) + 'px',\par
\tab\tab\tab height: size.ysize +'px',\par
\tab\tab\tab left: (size.xp1 + size.ximgPad)  +'px',\par
\tab\tab\tab top: size.yp1 +'px',\par
\tab\tab\tab visibility: 'visible'\par
\tab\tab\});\par
\tab\tab\par
\tab\tab hs.setStyles(this.oldImg, \{\par
\tab\tab\tab top: (this.last.y.pos - size.ypos + this.last.y.p1 - size.yp1)+'px',\par
\tab\tab\tab left: (this.last.x.pos - size.xpos + this.last.x.p1 - size.xp1 + this.last.x.get('imgPad') - size.ximgPad)+'px'\par
\tab\tab\});\tab\tab\par
\tab\tab\par
\tab\tab hs.setStyles(this.newImg, \{\par
\tab\tab\tab opacity: size.o,\par
\tab\tab\tab top: (this.y.pos - size.ypos + this.y.p1 - size.yp1) +'px',\par
\tab\tab\tab left: (this.x.pos - size.xpos + this.x.p1 - size.xp1 + this.x.get('imgPad') - size.ximgPad) +'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.overlayBox, \{\par
\tab\tab\tab width: size.xsize + 'px',\par
\tab\tab\tab height: size.ysize +'px',\par
\tab\tab\tab left: (size.xp1 + this.x.cb)  +'px',\par
\tab\tab\tab top: (size.yp1 + this.y.cb) +'px'\par
\tab\tab\});\par
\tab\} catch (e) \{\}\par
\},\par
crossfadeEnd : function() \{\par
\tab this.wrapper.style.background = this.wrapperBG || '';\par
\tab\par
\tab this.wrapper.style.visibility = this.content.style.visibility = 'visible';\par
\tab this.fadeBox.style.display = 'none';\par
\tab this.a.className += ' highslide-active-anchor';\par
\tab this.afterExpand();\par
\tab this.last.afterClose();\par
\},\par
reuseOverlay : function(o, el) \{\par
\tab if (!this.last) return false;\par
\tab for (var i = 0; i < this.last.overlays.length; i++) \{\par
\tab\tab var oDiv = hs.$('hsId'+ this.last.overlays[i]);\par
\tab\tab if (oDiv && oDiv.hsId == o.hsId) \{\par
\tab\tab\tab this.genOverlayBox();\par
\tab\tab\tab oDiv.reuse = this.key;\par
\tab\tab\tab hs.push(this.overlays, this.last.overlays[i]);\par
\tab\tab\tab return true;\par
\tab\tab\}\par
\tab\}\par
\tab return false;\par
\},\par
\par
\par
afterExpand : function() \{\par
\tab this.isExpanded = true;\tab\par
\tab this.focus();\par
\tab\par
\tab if (this.dimmingOpacity) hs.dim(this);\par
\tab if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;\par
\tab this.prepareNextOutline();\par
\tab\par
\tab\par
\tab var p = hs.page, mX = hs.mouse.x + p.scrollLeft, mY = hs.mouse.y + p.scrollTop;\par
\tab this.mouseIsOver = this.x.pos < mX && mX < this.x.pos + this.x.get('wsize')\par
\tab\tab && this.y.pos < mY && mY < this.y.pos + this.y.get('wsize');\par
\tab\par
\tab if (this.overlayBox) this.showOverlays();\par
\tab\par
\},\par
\par
\par
prepareNextOutline : function() \{\par
\tab var key = this.key;\par
\tab var outlineType = this.outlineType;\par
\tab new hs.Outline(outlineType, \par
\tab\tab function () \{ try \{ hs.expanders[key].preloadNext(); \} catch (e) \{\} \});\par
\},\par
\par
\par
preloadNext : function() \{\par
\tab var next = this.getAdjacentAnchor(1);\par
\tab if (next && next.onclick.toString().match(/hs\\.expand/)) \par
\tab\tab var img = hs.createElement('img', \{ src: hs.getSrc(next) \});\par
\},\par
\par
\par
getAdjacentAnchor : function(op) \{\par
\tab var current = this.getAnchorIndex(), as = hs.anchors.groups[this.slideshowGroup || 'none'];\par
\tab\par
\tab /*< ? if ($cfg->slideshow) : ?>s*/\par
\tab if (!as[current + op] && this.slideshow && this.slideshow.repeat) \{\par
\tab\tab if (op == 1) return as[0];\par
\tab\tab else if (op == -1) return as[as.length-1];\par
\tab\}\par
\tab /*< ? endif ?>s*/\par
\tab return as[current + op] || null;\par
\},\par
\par
getAnchorIndex : function() \{\par
\tab var arr = hs.anchors.groups[this.slideshowGroup || 'none'];\par
\tab for (var i = 0; i < arr.length; i++) \{\par
\tab\tab if (arr[i] == this.a) return i; \par
\tab\}\par
\tab return null;\par
\},\par
\par
\par
getNumber : function() \{\par
\tab if (this[this.numberPosition]) \{\par
\tab\tab var arr = hs.anchors.groups[this.slideshowGroup || 'none'];\par
\tab\tab var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);\par
\tab\tab this[this.numberPosition].innerHTML = \par
\tab\tab\tab '<div class="highslide-number">'+ s +'</div>'+ this[this.numberPosition].innerHTML;\par
\tab\}\par
\},\par
initSlideshow : function() \{\par
\tab if (this.slideshow) return;\par
\tab\par
\tab if (!this.last) \{\par
\tab\tab for (var i = 0; i < hs.slideshows.length; i++) \{\par
\tab\tab\tab var ss = hs.slideshows[i], sg = ss.slideshowGroup;\par
\tab\tab\tab if (typeof sg == 'undefined' || sg === null || sg === this.slideshowGroup) \par
\tab\tab\tab\tab this.slideshow = new hs.Slideshow(ss);\par
\tab\tab\} \par
\tab\} else \{\par
\tab\tab this.slideshow = this.last.slideshow;\par
\tab\}\par
\tab var ss = this.slideshow;\par
\tab if (!ss) return;\par
\tab var exp = ss.exp = this;\par
\tab\par
\tab ss.checkFirstAndLast();\par
\tab ss.disable('full-expand');\par
\tab if (ss.controls) \{\par
\tab\tab var o = ss.overlayOptions || \{\};\par
\tab\tab o.overlayId = ss.controls;\par
\tab\tab o.hsId = 'controls';\tab\tab\par
\tab\tab this.createOverlay(o);\par
\tab\}\par
\tab if (!this.last && this.autoplay) ss.play(true);\par
\tab if (ss.autoplay) \{\par
\tab\tab ss.autoplay = setTimeout(function() \{\par
\tab\tab\tab hs.next(exp.key);\par
\tab\tab\}, (ss.interval || 500));\par
\tab\}\par
\},\par
\par
cancelLoading : function() \{\tab\par
\tab hs.expanders[this.key] = null;\par
\tab if (hs.upcoming == this.a) hs.upcoming = null;\par
\tab hs.undim(this.key);\par
\tab if (this.loading) hs.loading.style.left = '-9999px';\par
\},\par
\par
writeCredits : function () \{\par
\tab if (this.credits) return;\par
\tab this.credits = hs.createElement('a', \{\par
\tab\tab href: hs.creditsHref,\par
\tab\tab className: 'highslide-credits',\par
\tab\tab innerHTML: hs.lang.creditsText,\par
\tab\tab title: hs.lang.creditsTitle\par
\tab\});\par
\tab this.createOverlay(\{ \par
\tab\tab overlayId: this.credits, \par
\tab\tab position: 'top left', \par
\tab\tab hsId: 'credits' \par
\tab\});\par
\},\par
\par
getInline : function(types, addOverlay) \{\par
\tab for (var i = 0; i < types.length; i++) \{\par
\tab\tab var type = types[i], s = null;\par
\tab\tab if (!this[type +'Id'] && this.thumbsUserSetId)  \par
\tab\tab\tab this[type +'Id'] = type +'-for-'+ this.thumbsUserSetId;\par
\tab\tab if (this[type +'Id']) this[type] = hs.getNode(this[type +'Id']);\par
\tab\tab if (!this[type] && !this[type +'Text'] && this[type +'Eval']) try \{\par
\tab\tab\tab s = eval(this[type +'Eval']);\par
\tab\tab\} catch (e) \{\}\par
\tab\tab if (!this[type] && this[type +'Text']) \{\par
\tab\tab\tab s = this[type +'Text'];\par
\tab\tab\}\par
\tab\tab if (!this[type] && !s) \{\par
\tab\tab\tab var next = this.a.nextSibling;\par
\tab\tab\tab while (next && !hs.isHsAnchor(next)) \{\par
\tab\tab\tab\tab if ((new RegExp('highslide-'+ type)).test(next.className || null)) \{\par
\tab\tab\tab\tab\tab this[type] = next.cloneNode(1);\par
\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab next = next.nextSibling;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab if (!this[type] && !s && this.numberPosition == type) s = '\\n';\par
\tab\tab\par
\tab\tab if (!this[type] && s) this[type] = hs.createElement('div', \par
\tab\tab\tab\tab\{ className: 'highslide-'+ type, innerHTML: s \} );\par
\tab\tab\par
\tab\tab if (addOverlay && this[type]) \{\par
\tab\tab\tab var o = \{ position: (type == 'heading') ? 'above' : 'below' \};\par
\tab\tab\tab for (var x in this[type+'Overlay']) o[x] = this[type+'Overlay'][x];\par
\tab\tab\tab o.overlayId = this[type];\par
\tab\tab\tab this.createOverlay(o);\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
\par
// on end move and resize\par
doShowHide : function(visibility) \{\par
\tab if (hs.hideSelects) this.showHideElements('SELECT', visibility);\par
\tab if (hs.hideIframes) this.showHideElements('IFRAME', visibility);\par
\tab if (hs.geckoMac) this.showHideElements('*', visibility);\par
\},\par
showHideElements : function (tagName, visibility) \{\par
\tab var els = document.getElementsByTagName(tagName);\par
\tab var prop = tagName == '*' ? 'overflow' : 'visibility';\par
\tab for (var i = 0; i < els.length; i++) \{\par
\tab\tab if (prop == 'visibility' || (document.defaultView.getComputedStyle(\par
\tab\tab\tab\tab els[i], "").getPropertyValue('overflow') == 'auto'\par
\tab\tab\tab\tab || els[i].getAttribute('hidden-by') != null)) \{\par
\tab\tab\tab var hiddenBy = els[i].getAttribute('hidden-by');\par
\tab\tab\tab if (visibility == 'visible' && hiddenBy) \{\par
\tab\tab\tab\tab hiddenBy = hiddenBy.replace('['+ this.key +']', '');\par
\tab\tab\tab\tab els[i].setAttribute('hidden-by', hiddenBy);\par
\tab\tab\tab\tab if (!hiddenBy) els[i].style[prop] = els[i].origProp;\par
\tab\tab\tab\} else if (visibility == 'hidden') \{ // hide if behind\par
\tab\tab\tab\tab var elPos = hs.getPosition(els[i]);\par
\tab\tab\tab\tab elPos.w = els[i].offsetWidth;\par
\tab\tab\tab\tab elPos.h = els[i].offsetHeight;\par
\tab\tab\tab\tab if (!this.dimmingOpacity) \{ // hide all if dimming\par
\tab\tab\tab\tab\par
\tab\tab\tab\tab\tab var clearsX = (elPos.x + elPos.w < this.x.get('opos') \par
\tab\tab\tab\tab\tab\tab || elPos.x > this.x.get('opos') + this.x.get('osize'));\par
\tab\tab\tab\tab\tab var clearsY = (elPos.y + elPos.h < this.y.get('opos') \par
\tab\tab\tab\tab\tab\tab || elPos.y > this.y.get('opos') + this.y.get('osize'));\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab var wrapperKey = hs.getWrapperKey(els[i]);\par
\tab\tab\tab\tab if (!clearsX && !clearsY && wrapperKey != this.key) \{ // element falls behind image\par
\tab\tab\tab\tab\tab if (!hiddenBy) \{\par
\tab\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', '['+ this.key +']');\par
\tab\tab\tab\tab\tab\tab els[i].origProp = els[i].style[prop];\par
\tab\tab\tab\tab\tab\tab els[i].style[prop] = 'hidden';\par
\tab\tab\tab\tab\tab\} else if (!hiddenBy.match('['+ this.key +']')) \{\par
\tab\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', hiddenBy + '['+ this.key +']');\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} else if ((hiddenBy == '['+ this.key +']' || hs.focusKey == wrapperKey)\par
\tab\tab\tab\tab\tab\tab && wrapperKey != this.key) \{ // on move\par
\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', '');\par
\tab\tab\tab\tab\tab els[i].style[prop] = els[i].origProp || '';\par
\tab\tab\tab\tab\} else if (hiddenBy && hiddenBy.match('['+ this.key +']')) \{\par
\tab\tab\tab\tab\tab els[i].setAttribute('hidden-by', hiddenBy.replace('['+ this.key +']', ''));\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\},\par
\par
focus : function() \{\par
\tab this.wrapper.style.zIndex = hs.zIndexCounter++;\par
\tab // blur others\par
\tab for (var i = 0; i < hs.expanders.length; i++) \{\par
\tab\tab if (hs.expanders[i] && i == hs.focusKey) \{\par
\tab\tab\tab var blurExp = hs.expanders[i];\par
\tab\tab\tab blurExp.content.className += ' highslide-'+ blurExp.contentType +'-blur';\par
\tab\tab\tab\tab blurExp.content.style.cursor = hs.ie ? 'hand' : 'pointer';\par
\tab\tab\tab\tab blurExp.content.title = hs.lang.focusTitle;\par
\tab\tab\}\par
\tab\}\par
\tab\par
\tab // focus this\par
\tab if (this.outline) this.outline.table.style.zIndex \par
\tab\tab = this.wrapper.style.zIndex;\par
\tab this.content.className = 'highslide-'+ this.contentType;\par
\tab\tab this.content.title = hs.lang.restoreTitle;\par
\tab\tab\par
\tab\tab if (hs.restoreCursor) \{\par
\tab\tab\tab hs.styleRestoreCursor = window.opera ? 'pointer' : 'url('+ hs.graphicsDir + hs.restoreCursor +'), pointer';\par
\tab\tab\tab if (hs.ie && hs.ieVersion() < 6) hs.styleRestoreCursor = 'hand';\par
\tab\tab\tab this.content.style.cursor = hs.styleRestoreCursor;\par
\tab\tab\}\par
\tab\tab\par
\tab hs.focusKey = this.key;\tab\par
\tab hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);\tab\par
\},\par
\par
moveTo: function(x, y) \{\par
\tab this.x.setPos(x);\par
\tab this.y.setPos(y);\par
\},\par
resize : function (e) \{\par
\tab var w, h, r = e.width / e.height;\par
\tab w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));\par
\tab if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;\par
\tab h = w / r;\par
\tab if (h < Math.min(this.minHeight, this.y.full)) \{\par
\tab\tab h = Math.min(this.minHeight, this.y.full);\par
\tab\tab if (this.isImage) w = h * r;\par
\tab\}\par
\tab this.resizeTo(w, h);\par
\},\par
resizeTo: function(w, h) \{\par
\tab this.y.setSize(h);\par
\tab this.x.setSize(w);\par
\},\par
\par
close : function() \{\par
\tab if (this.isClosing || !this.isExpanded\par
\tab\tab  || (hs.upcoming && this.transitions[1] == 'crossfade')\par
\tab\tab ) return;\par
\tab this.isClosing = true;\par
\tab if (this.slideshow && !hs.upcoming) this.slideshow.pause();\par
\tab\par
\tab hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);\par
\tab\par
\tab try \{\par
\tab\tab this.content.style.cursor = 'default';\par
\tab\tab this.changeSize(\par
\tab\tab\tab 0, \{\par
\tab\tab\tab\tab xpos: this.x.pos,\par
\tab\tab\tab\tab ypos: this.y.pos,\par
\tab\tab\tab\tab xsize: this.x.size,\par
\tab\tab\tab\tab ysize: this.y.size,\par
\tab\tab\tab\tab xp1: this.x.p1,\par
\tab\tab\tab\tab yp1: this.y.p1,\par
\tab\tab\tab\tab xp2: this.x.p2,\par
\tab\tab\tab\tab yp2: this.y.p2,\par
\tab\tab\tab\tab ximgSize: this.x.imgSize,\par
\tab\tab\tab\tab ximgPad: this.x.get('imgPad'),\par
\tab\tab\tab\tab o: this.outline ? this.outline.offset : 0\par
\tab\tab\tab\}, \{\par
\tab\tab\tab\tab xpos: this.x.tpos - this.x.cb + this.x.tb,\par
\tab\tab\tab\tab ypos: this.y.tpos - this.y.cb + this.y.tb,\par
\tab\tab\tab\tab xsize: this.x.t,\par
\tab\tab\tab\tab ysize: this.y.t,\par
\tab\tab\tab\tab xp1: 0,\par
\tab\tab\tab\tab yp1: 0,\par
\tab\tab\tab\tab xp2: 0,\par
\tab\tab\tab\tab yp2: 0,\par
\tab\tab\tab\tab ximgSize: this.x.imgSize ? this.x.t : null,\par
\tab\tab\tab\tab ximgPad: 0,\par
\tab\tab\tab\tab o: hs.outlineStartOffset\par
\tab\tab\tab\},\par
\tab\tab\tab hs.restoreDuration\par
\tab\tab );\par
\tab\tab\par
\tab\} catch (e) \{ this.afterClose(); \} \par
\},\par
\par
createOverlay : function (o) \{\par
\tab var el = o.overlayId;\par
\tab if (typeof el == 'string') el = hs.getNode(el);\par
\tab if (!el || typeof el == 'string') return;\par
\tab el.style.display = 'block';\par
\tab o.hsId = o.hsId || o.overlayId; \par
\tab if (this.transitions[1] == 'crossfade' && this.reuseOverlay(o, el)) return;\par
\tab this.genOverlayBox();\par
\tab var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';\par
\tab if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';\par
\tab\par
\tab var overlay = hs.createElement(\par
\tab\tab 'div', \{ \par
\tab\tab\tab id: 'hsId'+ hs.idCounter++, hsId: o.hsId\par
\tab\tab\}, \{\par
\tab\tab\tab position: 'absolute',\par
\tab\tab\tab visibility: 'hidden',\par
\tab\tab\tab width: width,\par
\tab\tab\tab direction: hs.lang.cssDirection || ''\par
\tab\tab\},\par
\tab\tab this.overlayBox,\par
\tab\tab true\par
\tab );\par
\tab\par
\tab overlay.appendChild(el);\par
\tab hs.setAttribs(overlay, \{\par
\tab\tab hideOnMouseOut: o.hideOnMouseOut,\par
\tab\tab opacity: o.opacity || 1,\par
\tab\tab hsPos: o.position,\par
\tab\tab fade: o.fade\par
\tab\});\par
\tab\par
\tab if (this.gotOverlays) \{\par
\tab\tab this.positionOverlay(overlay);\par
\tab\tab if (!overlay.hideOnMouseOut || this.mouseIsOver) hs.fade(overlay, 0, overlay.opacity);\par
\tab\}\par
\tab hs.push(this.overlays, hs.idCounter - 1);\par
\},\par
positionOverlay : function(overlay) \{\par
\tab var p = overlay.hsPos || 'middle center';\par
\tab if (/left$/.test(p)) overlay.style.left = 0; \par
\tab if (/center$/.test(p))\tab hs.setStyles (overlay, \{ \par
\tab\tab left: '50%',\par
\tab\tab marginLeft: '-'+ Math.round(overlay.offsetWidth / 2) +'px'\par
\tab\});\tab\par
\tab if (/right$/.test(p))\tab overlay.style.right = 0;\par
\tab\par
\tab if (/^leftpanel$/.test(p)) \{ \par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab right: '100%',\par
\tab\tab\tab marginRight: this.x.cb +'px',\par
\tab\tab\tab top: - this.y.cb +'px',\par
\tab\tab\tab bottom: - this.y.cb +'px',\par
\tab\tab\tab overflow: 'auto'\par
\tab\tab\});\tab\tab  \par
\tab\tab this.x.p1 = overlay.offsetWidth;\par
\tab\par
\tab\} else if (/^rightpanel$/.test(p)) \{\par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab left: '100%',\par
\tab\tab\tab marginLeft: this.x.cb +'px',\par
\tab\tab\tab top: - this.y.cb +'px',\par
\tab\tab\tab bottom: - this.y.cb +'px',\par
\tab\tab\tab overflow: 'auto'\par
\tab\tab\});\par
\tab\tab this.x.p2 = overlay.offsetWidth;\par
\tab\}\par
\tab if (/^top/.test(p)) overlay.style.top = 0; \par
\tab if (/^middle/.test(p))\tab hs.setStyles (overlay, \{ \par
\tab\tab top: '50%', \par
\tab\tab marginTop: '-'+ Math.round(overlay.offsetHeight / 2) +'px'\par
\tab\});\tab\par
\tab if (/^bottom/.test(p)) overlay.style.bottom = 0;\par
\tab if (/^above$/.test(p)) \{\par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab left: (- this.x.p1 - this.x.cb) +'px',\par
\tab\tab\tab right: (- this.x.p2 - this.x.cb) +'px',\par
\tab\tab\tab bottom: '100%',\par
\tab\tab\tab marginBottom: this.y.cb +'px',\par
\tab\tab\tab width: 'auto'\par
\tab\tab\});\par
\tab\tab this.y.p1 = overlay.offsetHeight;\par
\tab\par
\tab\} else if (/^below$/.test(p)) \{\par
\tab\tab hs.setStyles(overlay, \{\par
\tab\tab\tab position: 'relative',\par
\tab\tab\tab left: (- this.x.p1 - this.x.cb) +'px',\par
\tab\tab\tab right: (- this.x.p2 - this.x.cb) +'px',\par
\tab\tab\tab top: '100%',\par
\tab\tab\tab marginTop: this.y.cb +'px',\par
\tab\tab\tab width: 'auto'\par
\tab\tab\});\par
\tab\tab this.y.p2 = overlay.offsetHeight;\par
\tab\tab overlay.style.position = 'absolute';\par
\tab\}\par
\},\par
\par
getOverlays : function() \{\tab\par
\tab this.getInline(['heading', 'caption'], true);\par
\tab this.getNumber();\par
\tab if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';\par
\tab if (hs.showCredits) this.writeCredits();\par
\tab for (var i = 0; i < hs.overlays.length; i++) \{\par
\tab\tab var o = hs.overlays[i], tId = o.thumbnailId, sg = o.slideshowGroup;\par
\tab\tab if ((!tId && !sg) || (tId && tId == this.thumbsUserSetId)\par
\tab\tab\tab\tab || (sg && sg === this.slideshowGroup)) \{\par
\tab\tab\tab this.createOverlay(o);\par
\tab\tab\}\par
\tab\}\par
\tab var os = [];\par
\tab for (var i = 0; i < this.overlays.length; i++) \{\par
\tab\tab var o = hs.$('hsId'+ this.overlays[i]);\par
\tab\tab if (/panel$/.test(o.hsPos)) this.positionOverlay(o);\par
\tab\tab else hs.push(os, o);\par
\tab\}\par
\tab /*\par
\tab var curW = this.x.p1 + this.x.full + this.x.p2;\par
\tab if (hs.padToMinWidth && curW < hs.minWidth) \{\par
\tab\tab this.x.p1 += (hs.minWidth - curW) / 2;\par
\tab\tab this.x.p2 += (hs.minWidth - curW) / 2;\par
\tab\}\par
\tab */\par
\tab for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);\par
\tab this.gotOverlays = true;\par
\},\par
genOverlayBox : function() \{\par
\tab if (!this.overlayBox) this.overlayBox = hs.createElement (\par
\tab\tab 'div', \{\par
\tab\tab\tab className: this.wrapperClassName\par
\tab\tab\}, \{\par
\tab\tab\tab position : 'absolute',\par
\tab\tab\tab width: this.x.size ? this.x.size +'px' : this.x.full +'px',\par
\tab\tab\tab height: 0,\par
\tab\tab\tab visibility : 'hidden',\par
\tab\tab\tab overflow : 'hidden',\par
\tab\tab\tab zIndex : hs.ie ? 4 : null\par
\tab\tab\},\par
\tab\tab hs.container,\par
\tab\tab true\par
\tab );\par
\},\par
sizeOverlayBox : function(doWrapper, doPanels) \{\par
\tab hs.setStyles( this.overlayBox, \{\par
\tab\tab width: this.x.size +'px', \par
\tab\tab height: this.y.size +'px'\par
\tab\});\par
\tab if (doWrapper || doPanels) \{\par
\tab\tab for (var i = 0; i < this.overlays.length; i++) \{\par
\tab\tab\tab var o = hs.$('hsId'+ this.overlays[i]);\par
\tab\tab\tab if (o && /^(above|below)$/.test(o.hsPos)) \{\par
\tab\tab\tab\tab if (hs.ie && (hs.ieVersion() <= 6 || document.compatMode == 'BackCompat')) \{\par
\tab\tab\tab\tab\tab o.style.width = (this.overlayBox.offsetWidth + 2 * this.x.cb\par
\tab\tab\tab\tab\tab\tab + this.x.p1 + this.x.p2) +'px';\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab this.y[o.hsPos == 'above' ? 'p1' : 'p2'] = o.offsetHeight;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\tab if (doWrapper) \{\par
\tab\tab hs.setStyles(this.content, \{\par
\tab\tab\tab top: this.y.p1 +'px'\par
\tab\tab\});\par
\tab\tab hs.setStyles(this.overlayBox, \{\par
\tab\tab\tab top: (this.y.p1 + this.y.cb) +'px'\par
\tab\tab\});\par
\tab\}\par
\},\par
\par
showOverlays : function() \{\par
\tab var b = this.overlayBox;\par
\tab b.className = '';\par
\tab hs.setStyles(b, \{\par
\tab\tab top: (this.y.p1 + this.y.cb) +'px',\par
\tab\tab left: (this.x.p1 + this.x.cb) +'px',\par
\tab\tab overflow : 'visible'\par
\tab\});\par
\tab if (hs.safari) b.style.visibility = 'visible';\par
\tab this.wrapper.appendChild (b);\par
\tab for (var i = 0; i < this.overlays.length; i++) \{\par
\tab\tab var o = hs.$('hsId'+ this.overlays[i]);\par
\tab\tab o.style.zIndex = o.hsId == 'controls' ? 5 : 4;\par
\tab\tab if (!o.hideOnMouseOut || this.mouseIsOver) hs.fade(o, 0, o.opacity);\par
\tab\}\par
\},\par
\par
\par
\par
createFullExpand : function () \{\par
\tab if (this.slideshow && this.slideshow.controls) \{\par
\tab\tab this.slideshow.enable('full-expand');\par
\tab\tab return;\par
\tab\}\par
\tab this.fullExpandLabel = hs.createElement(\par
\tab\tab 'a', \{\par
\tab\tab\tab href: 'javascript:hs.expanders['+ this.key +'].doFullExpand();',\par
\tab\tab\tab title: hs.lang.fullExpandTitle,\par
\tab\tab\tab className: 'highslide-full-expand'\par
\tab\tab\}\par
\tab );\par
\tab\par
\tab this.createOverlay(\{ \par
\tab\tab overlayId: this.fullExpandLabel, \par
\tab\tab position: hs.fullExpandPosition, \par
\tab\tab hideOnMouseOut: true, \par
\tab\tab opacity: hs.fullExpandOpacity\par
\tab\});\par
\},\par
\par
doFullExpand : function () \{\par
\tab try \{\par
\tab\tab if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);\par
\tab\tab\par
\tab\tab this.focus();\par
\tab\tab\par
\tab\tab var xpos = this.x.pos - (this.x.full - this.x.size) / 2;\par
\tab\tab if (xpos < hs.marginLeft) xpos = hs.marginLeft;\par
\tab\tab\par
\tab\tab this.moveTo(xpos, this.y.pos);\par
\tab\tab this.resizeTo(this.x.full, this.y.full);\par
\tab\tab this.doShowHide('hidden');\par
\tab\tab hs.setDimmerSize(this);\par
\tab\par
\tab\} catch (e) \{\par
\tab\tab window.location.href = this.content.src;\par
\tab\}\par
\},\par
\par
\par
afterClose : function () \{\par
\tab this.a.className = this.a.className.replace('highslide-active-anchor', '');\par
\tab\par
\tab this.doShowHide('visible');\par
\tab\tab if (this.outline && this.outlineWhileAnimating) this.outline.destroy();\par
\tab\par
\tab\tab hs.discardElement(this.wrapper);\par
\tab if (this.dimmingOpacity) hs.undim(this.key);\par
\tab hs.expanders[this.key] = null;\tab\tab\par
\tab hs.reOrder();\par
\}\par
\par
\};\par
\par
\par
hs.Slideshow = function (options) \{\par
\tab hs.updateAnchors();\par
\tab for (var x in options) this[x] = options[x];\par
\tab if (this.useControls) this.getControls();\par
\};\par
hs.Slideshow.prototype = \{\par
getControls: function() \{\par
\tab this.controls = hs.createElement('div', \{ innerHTML: hs.replaceLang(hs.skin.controls) \}, \par
\tab\tab null, hs.container);\par
\tab\par
\tab var buttons = ['play', 'pause', 'previous', 'next', 'move', 'full-expand', 'close'];\par
\tab this.btn = \{\};\par
\tab var pThis = this;\par
\tab for (var i = 0; i < buttons.length; i++) \{\par
\tab\tab this.btn[buttons[i]] = hs.getElementByClass(this.controls, 'li', 'highslide-'+ buttons[i]);\par
\tab\tab this.enable(buttons[i]);\par
\tab\}\par
\tab this.btn.pause.style.display = 'none';\par
\tab //this.disable('full-expand');\par
\},\par
checkFirstAndLast: function() \{\par
\tab if (this.repeat || !this.controls) return;\par
\tab var cur = this.exp.getAnchorIndex(), re = /disabled$/;\par
\tab if (cur == 0) \par
\tab\tab this.disable('previous');\par
\tab else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className))\par
\tab\tab this.enable('previous');\par
\tab if (cur + 1 == hs.anchors.groups[this.exp.slideshowGroup || 'none'].length) \{\par
\tab\tab this.disable('next');\par
\tab\tab this.disable('play');\par
\tab\} else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) \{\par
\tab\tab this.enable('next');\par
\tab\tab this.enable('play');\par
\tab\}\par
\},\par
enable: function(btn) \{\par
\tab if (!this.btn) return;\par
\tab var sls = this, a = this.btn[btn].getElementsByTagName('a')[0], re = /disabled$/;\par
\tab a.onclick = function() \{\par
\tab\tab sls[btn]();\par
\tab\tab return false;\par
\tab\};\par
\tab if (re.test(a.className)) a.className = a.className.replace(re, '');\par
\},\par
disable: function(btn) \{\par
\tab if (!this.btn) return;\par
\tab var a = this.btn[btn].getElementsByTagName('a')[0];\par
\tab a.onclick = function() \{ return false; \};\par
\tab if (!/disabled$/.test(a.className)) a.className += ' disabled';\par
\},\par
hitSpace: function() \{\par
\tab if (this.autoplay) this.pause();\par
\tab else this.play();\par
\},\par
play: function(wait) \{\par
\tab if (this.btn) \{\par
\tab\tab this.btn.play.style.display = 'none';\par
\tab\tab this.btn.pause.style.display = '';\par
\tab\}\par
\tab\par
\tab this.autoplay = true;\tab\par
\tab if (!wait) hs.next(this.exp.key);\par
\},\par
pause: function() \{\par
\tab if (this.btn) \{\par
\tab\tab this.btn.pause.style.display = 'none';\par
\tab\tab this.btn.play.style.display = '';\par
\tab\}\par
\tab\par
\tab clearTimeout(this.autoplay);\par
\tab this.autoplay = null;\par
\},\par
previous: function() \{\par
\tab this.pause();\par
\tab hs.previous(this.btn.previous);\par
\},\par
next: function() \{\par
\tab this.pause();\par
\tab hs.next(this.btn.next);\par
\},\par
move: function() \{\},\par
'full-expand': function() \{\par
\tab hs.getExpander().doFullExpand();\par
\},\par
close: function() \{\par
\tab hs.close(this.btn.close);\par
\}\par
\par
\};\par
if (document.readyState && hs.ie) \{\par
\tab (function () \{\par
\tab\tab try \{\par
\tab\tab\tab document.documentElement.doScroll('left');\par
\tab\tab\} catch (e) \{\par
\tab\tab\tab setTimeout(arguments.callee, 50);\par
\tab\tab\tab return;\par
\tab\tab\}\par
\tab\tab hs.domReady();\par
\tab\})();\par
\}\par
hs.langDefaults = hs.lang;\par
// history\par
var HsExpander = hs.Expander;\par
\par
// set handlers\par
hs.addEventListener(window, 'load', function() \{\par
\tab var sel = '.highslide img', \par
\tab\tab dec = 'cursor: url('+ hs.graphicsDir + hs.expandCursor +'), pointer !important;';\par
\tab\tab\par
\tab var style = hs.createElement('style', \{ type: 'text/css' \}, null, \par
\tab\tab document.getElementsByTagName('HEAD')[0]);\par
\par
\tab if (!hs.ie) \{\par
\tab\tab style.appendChild(document.createTextNode(sel + " \{" + dec + "\}"));\par
\tab\} else \{\par
\tab\tab var last = document.styleSheets[document.styleSheets.length - 1];\par
\tab\tab if (typeof(last.addRule) == "object") last.addRule(sel, dec);\par
\tab\}\par
\});\par
hs.addEventListener(document, 'mousemove', function(e) \{\par
\tab hs.mouse = \{ x: e.clientX, y: e.clientY\tab\};\par
\});\par
hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);\par
hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);\par
hs.addEventListener(window, 'load', hs.preloadImages);\par
\par
HSImageResizer.IMAGE_ID_BASE = 'hs_imageresizer_container_';\par
\par
function HSImageResizer(id, img) \{\par
\tab this.id = id;\par
\tab this.img = img;\par
\tab this.originalWidth = 0;\par
\tab this.originalHeight = 0;\par
\tab this.warning = null;\par
\tab this.warningTextNode = null;\par
\tab\par
\tab img.id = HSImageResizer.IMAGE_ID_BASE+id;\par
\}\par
\par
HSImageResizer.getNextId = function() \{\par
\tab id = 1;\par
\tab while(document.getElementById(HSImageResizer.IMAGE_ID_BASE+id) != null) \{\par
\tab\tab id++;\par
\tab\}\par
\tab return id;\par
\}\par
\par
HSImageResizer.createOn = function(img) \{\par
\tab isRecovery = false; // if this is a recovery from QuickEdit, which only restores the HTML, not the OO structure\par
\tab if(img.id && img.id.indexOf(HSImageResizer.IMAGE_ID_BASE) == 0 && document.getElementById(HSImageResizer.WARNING_ID_BASE+img.id.substr(HSImageResizer.IMAGE_ID_BASE.length)) != null) \{\par
\tab\tab newid = img.id.substr(HSImageResizer.IMAGE_ID_BASE.length);\par
\tab\tab resizer = new HSImageResizer(newid, img);\par
\tab\tab isRecovery = true;\par
\tab\tab resizer.restoreImage();\par
\tab\} else \{\par
\tab\tab newid = HSImageResizer.getNextId();\par
\tab\tab resizer = new HSImageResizer(id, img);\par
\tab\}\par
\tab\par
\tab if (resizer.originalWidth == 0) resizer.originalWidth = img.width;\par
\tab if (resizer.originalHeight == 0) resizer.originalHeight = img.height;\par
\tab\par
\tab if((HSImageResizer.MAXWIDTH > 0 && resizer.originalWidth > HSImageResizer.MAXWIDTH) || (HSImageResizer.MAXHEIGHT > 0 && resizer.originalHeight > HSImageResizer.MAXHEIGHT)) \{\par
\tab\tab if(isRecovery) \{\par
\tab\tab\tab resizer.reclaimWarning(warning);\par
\tab\tab\} else \{\par
\tab\tab\tab resizer.createWarning();\par
\tab\tab\}\par
\tab\tab resizer.scale();\par
\tab\}\par
\}\par
\par
HSImageResizer.prototype.restoreImage = function() \{\par
\tab newimg = document.createElement('IMG');\par
\tab newimg.src = this.img.src;\par
\tab this.img.width = newimg.width;\par
\tab this.img.height = newimg.height;\par
\}\par
\par
HSImageResizer.prototype.createWarning = function() \{\par
\tab mtable = document.createElement('TABLE');\par
\tab mtbody = document.createElement('TBODY');\par
\tab mtr = document.createElement('TR');\par
\tab mtd1 = document.createElement('TD');\par
\tab mtd2 = document.createElement('TD');\par
\tab mimg = document.createElement('IMG');\par
\tab mtext = document.createTextNode('');\par
\tab\par
\tab mimg.src = 'highslide/graphics/warning.gif';\par
\tab mimg.width = 350;\par
\tab mimg.height = 16;\par
\tab mimg.alt = '';\par
\tab mimg.border = 0;\par
\tab\par
\tab mtd1.width = 20;\par
\tab mtd1.className = 'td1';\par
\tab\par
\tab mtd2.unselectable = 'on';\par
\tab mtd2.className = 'td2';\par
\tab\par
\tab mtable.textNode = mtext;\par
\tab mtable.resize = this;\par
\tab\par
\tab mtable.textNode = mtext;\par
\tab mtable.resize = this;\par
\tab\par
\tab mtd1.appendChild(mimg);\par
\tab mtd2.appendChild(mtext);\par
\tab\par
\tab mtr.appendChild(mtd1);\par
\tab mtr.appendChild(mtd2);\par
\tab\par
\tab mtbody.appendChild(mtr);\par
\tab\par
\tab mtable.appendChild(mtbody);\par
\tab\par
\tab this.img.parentNode.insertBefore(mtable, this.img);\par
\tab\par
\tab this.warning = mtable;\par
\tab this.warningTextNode = mtext;\par
\}\par
\par
HSImageResizer.prototype.scale = function() \{\par
\tab if(HSImageResizer.MAXWIDTH > 0 && this.originalWidth > HSImageResizer.MAXWIDTH) \{\par
\tab\tab resized = true;\par
\tab\tab this.img.width = HSImageResizer.MAXWIDTH;\par
\tab\tab this.img.height = (HSImageResizer.MAXWIDTH / this.originalWidth) * this.originalHeight;\par
\tab\}\par
\tab if(HSImageResizer.MAXHEIGHT > 0 && this.originalHeight > HSImageResizer.MAXHEIGHT) \{\par
\tab\tab resized = true;\par
\tab\tab this.img.height = HSImageResizer.MAXHEIGHT;\par
\tab\tab this.img.width = (HSImageResizer.MAXHEIGHT / this.originalHeight) * this.originalWidth;\par
\tab\}\par
\tab\par
\tab this.warning.width = this.img.width;\par
\tab this.warning.onclick = function() \{ return this.resize.unScale(); \}\par
\par
\tab return false;\par
\}\par
}
 