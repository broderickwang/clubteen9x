function selectCode(a){var e=jQuery(a).closest('tr').next().find('.cont_code')[0];if(window.getSelection){var s=window.getSelection();if(s.setBaseAndExtent){s.setBaseAndExtent(e,0,e,e.innerText.length-1)}else{if(window.opera&&e.innerHTML.substring(e.innerHTML.length-4)=='<BR>'){e.innerHTML=e.innerHTML+' '}var r=document.createRange();r.selectNodeContents(e);s.removeAllRanges();s.addRange(r)}}else if(document.getSelection){var s=document.getSelection();var r=document.createRange();r.selectNodeContents(e);s.removeAllRanges();s.addRange(r)}else if(document.selection){var r=document.body.createTextRange();r.moveToElementText(e);r.select()}}jQuery(function(){jQuery('div.postbody td.code').parent().prev().find('b').html('Code:<a href="javascript:void()"onClick="selectCode(this)"><font face="verdana"color="red"></font> Chọn nội dung </a>')});