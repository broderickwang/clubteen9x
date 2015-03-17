```
$(function(){
var a=$('.postprofile').get();
for(i=0;i<a.length;i++) {
var b=a[i].getElementsByTagName('dt')[0].getElementsByTagName('a')[1];
var unm=$(b).text(); var uid=b.href.substring(b.href.indexOf('/u')+2);
$(a[i]).append('<a href="/profile?friend=' + unm + '&mode=editprofile&page_profil=friendsfoes">Add as Friend

Unknown end tag for &lt;/a&gt;

<br><a href="/u' + uid + 'wall">'+unm+'\'s Wall

Unknown end tag for &lt;/a&gt;

');
}
});```