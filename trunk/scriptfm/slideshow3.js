  window.addEvent('load', function(){
    new JASlideshow2('ja-slide-60', {	
                startItem: 0,
                showItem: 4,
                itemWidth: 60,
                itemHeight: 60,
                mainWidth: 265,
                mainHeight: 130,
                duration: 400,
                transition: Fx.Transitions.linear,
                animation: 'fade',
                thumbOpacity:0.5,			
                maskOpacity: 0.8,
                buttonOpacity: 0.7,
                showDesc: 'desc-readmore',
                descMode: 'mouseover',
                readmoretext: 'Change style',
                overlap: 1,
                navigation:'',
                urls:['?ja_color=summer','?ja_color=sexy','?ja_color=autumn','?ja_color=spring','?ja_color=jean','?ja_color=winter','?ja_color=default'],
								autoPlay: 0,
								interval: 5000              });
  });