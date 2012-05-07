document.write('<div id="loading"><br><br>Ðang t?i d? li?u, d?i xíu nhé! </div>');


function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
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

addLoadEvent(function() {
  document.getElementById("loading").style.display="none";
});