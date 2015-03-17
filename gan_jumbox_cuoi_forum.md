Mẹo này giúp bạn gắn jumpbox vào footer trên phiên bản phpbb3.
1 đoạn ngắn thôi.

> Demo :![http://a.imageshack.us/img830/7264/jubf.jpg](http://a.imageshack.us/img830/7264/jubf.jpg)

> Thực hiện : Vào Modules ~> Javascript codes management :
> > Enable Javascript code management : Yes
> > Create a new javascript :
> > • Title : jumpbox
> > • Placement : In all the pages
> > • Javascript Code **:**```

$(function () {
$('.linklist .footer-home').load('/faq select[name=selected_id],input[value=Go]').wrap('<form action="/viewforum" method="get" name="jumpbox">

Unknown end tag for &lt;/form&gt;

');
});```