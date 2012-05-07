document.write('<div id="loading"><br><br><img src="http://i62.servimg.com/u/f62/14/32/36/49/loadin14.gif></div>');

//Created by: Simon Willison | http://simon.incutio.com/
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

