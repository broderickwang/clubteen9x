function flip(){var result=flipString(document.f.original.value);document.f.flipped.value=result;}
function flipString(aString){var last=aString.length-1;var result=new Array(aString.length)
for(var i=last;i>=0;--i){var c=aString.charAt(i)
var r=flipTable[c]
result[i]=r}
return result.join('')}
var flipTable={'ơ':'̶ơ̶','Ơ':'̶Ơ̶','ó':'̶ó̶','Ó':'̶Ó̶','ò':'̶ò̶','Ò':'̶Ò̶','ọ':'̶ọ̶','Ọ':'̶Ọ̶','ỏ':'̶ỏ̶','Ỏ':'̶Ỏ̶','õ':'̶õ̶','Õ':'̶Õ̶','ớ':'̶ớ̶','Ớ':'̶Ớ̶','ờ':'̶ờ̶','Ờ':'̶Ờ̶','ợ':'̶ợ̶','Ợ':'̶Ợ̶','ở':'̶ở̶','Ở':'̶Ở̶','ỡ':'̶ỡ̶','Ỡ':'̶Ỡ̶','ô':'̶ô̶','Ô':'̶Ô̶','ố':'̶ố̶','Ố':'̶Ố̶','ồ':'̶ồ̶','Ồ':'̶Ồ̶','ộ':'̶ộ̶','Ộ':'̶Ộ̶','ổ':'̶ổ̶','Ổ':'̶Ổ̶','ỗ':'̶ỗ̶','Ỗ':'̶Ỗ̶','ú':'̶ú̶','Ú':'̶Ú̶','ù':'̶ù̶','Ù':'̶Ù̶','ụ':'̶ụ̶','Ụ':'̶Ụ̶','ủ':'̶ủ̶','Ủ':'̶Ủ̶','ũ':'̶ũ̶','Ũ':'̶Ũ̶','ư':'̶ư̶','Ư':'̶Ư̶','ứ':'̶ứ̶','Ứ':'̶Ứ̶','ừ':'̶ừ̶','Ừ':'̶Ừ̶','ự':'̶ự̶','Ự':'̶Ự̶','ử':'̶ử̶','Ử':'̶Ử̶','ữ':'̶ữ̶','Ữ':'̶Ữ̶','â':'̶â̶','Â':'̶Â̶','á':'̶á̶','Á':'̶Á̶','à':'̶à̶','À':'̶À̶','ạ':'̶ạ̶','Ạ':'̶Ạ̶','ả':'̶ả̶','Ả':'̶Ả̶','ã':'̶ã̶','Ã':'̶Ã̶','ấ':'̶ấ̶','Ấ':'̶Ấ̶','ầ':'̶ầ̶','Ầ':'̶Ầ̶','ậ':'̶ậ̶','Ậ':'̶Ậ̶','ẩ':'̶ẩ̶','Ẩ':'̶Ẩ̶','ẫ':'̶ẫ̶','Ẫ':'̶Ẫ̶','ă':'̶ă̶','Ă':'̶Ă̶','ắ':'̶ắ̶','Ắ':'̶Ắ̶','ằ':'̶ằ̶','Ằ':'̶Ằ̶','ặ':'̶ặ̶','Ặ':'̶Ặ̶','ẳ':'̶ẳ̶','Ẳ':'̶Ẳ̶','ẵ':'̶ẵ̶','Ẵ':'̶Ẵ̶','ế':'̶ế̶','Ế':'̶Ế̶','ề':'̶ề̶','Ề':'̶Ề̶','ệ':'̶ệ̶','Ệ':'̶Ệ̶','ể':'̶ể̶','Ể':'̶Ể̶','ễ':'̶ễ̶','Ễ':'̶Ễ̶','é':'̶é̶','É':'̶É̶','è':'̶è̶','È':'̶È̶','ẹ':'̶ẹ̶','Ẹ':'̶Ẹ̶','ẻ':'̶ẻ̶','Ẻ':'̶Ẻ̶','ẽ':'̶ẽ̶','Ẽ':'̶Ẽ̶','ê':'̶ê̶','Ê':'̶Ê̶','í':'̶í̶','Í':'̶Í̶','ì':'̶ì̶̶','Ì':'̶Ì̶','ỉ':'̶ỉ̶','Ỉ':'̶Ỉ̶','ĩ':'̶ĩ̶','Ĩ':'̶Ĩ̶','ị':'̶ị̶','Ị':'̶Ị̶','ý':'̶ý̶','Ý':'̶Ý̶','ỳ':'̶ỳ̶','Ỳ':'̶Ỳ̶','ỷ':'̶ỷ̶','Ỷ':'̶Ỷ̶','ỹ':'̶ỹ̶','Ỹ':'̶Ỹ̶','ỵ':'̶ỵ̶','Ỵ':'̶Ỵ̶','đ':'̶đ̶','Đ':'̶Đ̶',1:'̶1̶',2:'̶2̶',3:'̶3̶',4:'̶4̶',5:'̶5̶',6:'̶6̶',7:'̶7̶',8:'̶8̶',9:'̶9̶',0:'̶0̶',a:'̶a̶',b:'̶b̶',c:'̶c̶',d:'̶d̶',e:'̶e̶',f:'̶f̶',g:'̶g̶',h:'̶h̶',i:'̶i̶',j:'̶j̶',k:'̶k̶',o:'̶o̶',m:'̶m̶',n:'̶n̶',q:'̶q̶',r:'̶r̶',i:'̶i̶',p:'̶p̶',l:'̶l̶',z:'̶z̶',x:'̶x̶',u:'̶u̶',t:'̶t̶',s:'̶s̶',v:'̶v̶',w:'̶w̶',y:'̶y̶',A:'̶A̶',B:'̶B̶',C:'̶C̶',D:'̶D̶',E:'̶E̶',F:'̶F̶',G:'̶G̶',H:'̶H̶',I:'̶I̶',J:'̶J̶',K:'̶K̶',O:'̶O̶',M:'̶M̶',N:'̶N̶',Q:'̶Q̶',R:'̶R̶',I:'̶I̶',P:'̶P̶',L:'̶L̶',Z:'̶Z̶',X:'̶X̶',U:'̶U̶',T:'̶T̶',S:'̶S̶',V:'̶V̶',W:'̶W̶',Y:'̶Y̶',' ':' ','.':'̶.̶','[':'̶[̶','(':'̶(̶','{':'̶{̶','?':'̶?̶','!':'̶!̶',"\'":'̶\̶','<':'̶<̶','_':'̶_̶',';':'̶;̶','\u203F':'̶\u203F̶','\u2045':'̶\u2045̶','\u2234':'̶\u2234̶','\r':'̶\r'}
for(i in flipTable){flipTable[flipTable[i]]=i}