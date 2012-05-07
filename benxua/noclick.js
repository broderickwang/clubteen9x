//----------------- Disable select -------------------------------
document.onselectstart=new Function('return false');
function ds(e){return false;}
function ra(){return true;}
document.onmousedown=ds;
document.onclick=ra;

//---------------- Disable rightclick ----------------------------
document.oncontextmenu = function (){ return false};