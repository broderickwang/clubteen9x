document.write('<div id="loading"><br><br>N?i 
dung mu?n hi?n th? </div>');

//Lam on giu dum cai dong nay 
trong code Created by: Simon Willison | http://simon.incutio.com/
function
 addLoadEvent(func) {
  var oldonload = window.onload;
  if 
(typeof window.onload != 'function') {
    window.onload = func;
 
 } else {
    window.onload = function() {
      if (oldonload) {
 
      oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function()
 {
  document.getElementById("loading").style.display="none";
});