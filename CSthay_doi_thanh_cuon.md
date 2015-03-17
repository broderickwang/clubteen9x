```

/*----------------------------Style-by-DesignART----------------------------*/
/* Turn on a 10x10 scrollbar */
::-webkit-scrollbar {width:10px;height:10px;}

/* Place The scroll button*//*:Vertical:*//*:Horizontal:*//*:start:decrement*/ /*:start:increment*//*:end:decrement*//*:end:increment*/
::-webkit-scrollbar-button {
background-image: url(http://i44.servimg.com/u/f44/15/64/85/86/box210.png);}

::-webkit-scrollbar-button:hover {
background-image: url(http://i44.servimg.com/u/f44/15/64/85/86/box510.png);}

/*The thumb itself*//*:Vertical*//*:Horizontal*/
::-webkit-scrollbar-thumb{
height: 10px; -webkit-border-image: url(http://i44.servimg.com/u/f44/15/64/85/86/box11.png) 8 8 8 8 stretch stretch;
border-width: 8 8 8 8;}


::-webkit-scrollbar-track-piece:{
background-image: url(http://i44.servimg.com/u/f44/15/64/85/86/box610.png), url(http://i44.servimg.com/u/f44/15/64/85/86/box610.png);    background-repeat: repeat-x, repeat-y;}```