// ChatBox function
function Init_pref()
{
	if (document.getElementById('divbold'))
	{
		if ( my_getcookie('CB_bold') == 1)
		{
			pref = my_getcookie('CB_bold');
			document.post.sbold.value = pref;
			document.getElementById('divbold').className = 'fontbutton fontbutton_selected';
			document.post.message.style.fontWeight = 'bold';
		}
		if ( my_getcookie('CB_italic') == 1 )
		{
			pref = my_getcookie('CB_italic');
			document.post.sitalic.value = pref;
			document.getElementById('divitalic').className = (pref == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
			document.post.message.style.fontStyle = 'italic';
		}
		if ( my_getcookie('CB_under') == 1 )
		{
			pref = my_getcookie('CB_under');
			document.post.sunderline.value = pref;
			document.getElementById('divunderline').className = (pref == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
			document.post.message.style.textDecoration = 'underline';
		}
		if ( my_getcookie('CB_strike') == 1 )
		{
			pref = my_getcookie('CB_strike');
			document.post.sstrike.value = pref;
			document.getElementById('divstrike').className = (pref == '1' ) ? 'fontbutton fontbutton_selected' : 'fontbutton fontbutton_normal';
			document.post.message.style.textDecoration = document.post.message.style.textDecoration + ' line-through';
		}
		if ( show_color = document.getElementById('show_color') )
		{
			if ( pref = my_getcookie('CB_color') )
			{
				show_color.style.backgroundColor = '#' + pref;
				document.post.scolor.value = pref;
				document.post.message.style.color = '#' + pref;
			}
			else if ( template_color.length > 2 )
			{
				show_color.style.backgroundColor = template_color;
			}
		}
	}
}

function submitmsg(params)
{
	document.post.sent.value = document.post.message.value;
	document.post.message.value = '';
	document.post.message.focus();
	ajax_submit_chatbox(params);
	return false;
}

function do_style(dostyle)
{
	switch (dostyle)
	{
		case 'bold' :
		{
			document.getElementById('divbold').style.fontWeight = ( document.post.sbold.value == '0' ) ? 'bold' : '';
			document.post.message.style.fontWeight = document.getElementById('divbold').style.fontWeight;
			document.post.sbold.value = ( document.post.sbold.value == '0' ) ? '1' : '0';
			SetCookie('CB_bold',document.post.sbold.value);
			break;
		}
		case 'italic' :
		{
			document.getElementById('divitalic').style.fontStyle = ( document.post.sitalic.value == '0' ) ? 'italic' : '';
			document.post.message.style.fontStyle = document.getElementById('divitalic').style.fontStyle;
			document.post.sitalic.value = ( document.post.sitalic.value == '0' ) ? '1' : '0';
			SetCookie('CB_italic',document.post.sitalic.value);
			break;
		}
		case 'underline' :
		{
			document.getElementById('divunderline').style.textDecoration = ( document.post.sunderline.value == '0' ) ? document.post.message.style.textDecoration + ' underline' : document.post.message.style.textDecoration.replace('underline', '');
			document.post.message.style.textDecoration = document.getElementById('divunderline').style.textDecoration;
			document.post.sunderline.value = ( document.post.sunderline.value == '0' ) ? '1' : '0';
			SetCookie('CB_under',document.post.sunderline.value);
			break;
		}
		case 'strike' :
		{
			document.getElementById('divstrike').style.textDecoration = ( document.post.sstrike.value == '0' ) ? document.post.message.style.textDecoration + ' line-through' : document.post.message.style.textDecoration.replace('line-through', '');
			document.post.message.style.textDecoration = document.getElementById('divstrike').style.textDecoration;
			document.post.sstrike.value = ( document.post.sstrike.value == '0' ) ? '1' : '0';
			SetCookie('CB_strike',document.post.sstrike.value);
			break;
		}
	}
}

function fetch_object(obj)
{
	return document.getElementById(obj);
}

function do_selectcolor(event)
{
	var scrX = (event.screenX - 270);
	var scrY = (event.screenY - 270);
	window.open('/chatbox/chatbox_selectcolor.htm', 'color','toolbar=no,menubar=no,personalbar=no,width=250,height=200,scrollbars=no,resizable=yes,left=' + scrX + ',top=' + scrY);
}

function do_selectsmilies(event)
{
	var scrX = (event.screenX - 270);
	var scrY = (event.screenY - 380);
	if ( window.open )
	{
		window.open('/post.forum?mode=smilies_chatbox' + smilies_sid, 'chatbox_smilies','toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY);
	}
	else
	{
//		open('/post.forum?mode=smilies_chatbox' + smilies_sid, 'chatbox_smilies','toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY);
	}
}

function SetCookie (name, value) {
	var expire = '';
	var path = "/";
	var domain = '';

	document.cookie = name + "=" + value + "; path=" + path + expire + domain + ';';

}

/* copy the user name in the message field */
function copy_user_name (user_name)
{
	if (document.post.message)
	{
		document.post.message.value += user_name;
		document.post.message.focus();
	}

	return false;
}

// Ajax function
function js_urlencode(text)
{
	text = text.toString();

	// this escapes 128 - 255, as JS uses the unicode code points for them.
	// This causes problems with submitting text via AJAX with the UTF-8 charset.
	var matches = text.match(/[\x90-\xFF]/g);
	if (matches)
	{
		for (var matchid = 0; matchid < matches.length; matchid++)
		{
			var char_code = matches[matchid].charCodeAt(0);
			text = text.replace(matches[matchid], '%u00' + (char_code & 0xFF).toString(16).toUpperCase());
		}
	}

	return escape(text).replace(/\+/g, "%2B");
}

function ajax_submit_chatbox(params)
{
	// Restart to count
	number_of_refresh = 0 ;
	// Send data
	var msg_sent = document.post.sent.value;
	if ( params == '' || params == undefined )
	{
		params = '?achives=0';
	}
	while(msg_sent.indexOf('&') >= 0){
		msg_sent = msg_sent.replace('&', '%26');
	};
	while(msg_sent.indexOf('+') >= 0){
		msg_sent = msg_sent.replace('+', '%2B');
	};

	var data = '&mode=send';
	data += '&sent=' + msg_sent;
	data += '&sbold=' + document.post.sbold.value;
	data += '&sitalic=' + document.post.sitalic.value;
	data += '&sunderline=' + document.post.sunderline.value;
	data += '&sstrike=' + document.post.sstrike.value;
	data += '&scolor=' + document.post.scolor.value;

	if ( ( msg_sent.indexOf('/away') == 0 ) || ( msg_sent.indexOf('/abs') == 0 ) )
	{
		document.getElementById('refresh_auto').checked = false;
	}
	if( document.post.sent.value == '/banlist' )
	{
		window.open('/chatbox/chatbox_banlist.forum' + params, 'banlist','toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=no,resizable=yes');
		return false;
	}

	if (window.XMLHttpRequest)
	{
		var http_request = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		var http_request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	http_request.onreadystatechange = function()
	{
		if (http_request.readyState == 4 && http_request.status == 200)
		{
			var parsed_text = http_request.responseText;
			eval(parsed_text);

			// Make refresh
			if ( chatbox_last_update > chatbox_updated )
			{
				document.getElementById('chatbox').innerHTML = chatbox_messages;
				document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;
				document.getElementById('chatbox').scrollTop = 999999;

				chatbox_updated = chatbox_last_update;
			}
		}
	};

	http_request.open('POST', '/chatbox/chatbox_actions.forum' + params, true);
	http_request.setRequestHeader('Content-Type','application/x-www-form-urlencoded;');
	http_request.send(data);
}

chatbox_messages_old = '';

function ajax_refresh_chatbox(params, force)
{
	if ( params == '' || params == undefined )
	{
		params = '?achives=0';
	}
	// Send-Request
	if (window.XMLHttpRequest)
	{
		var http_request = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		var http_request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	http_request.onreadystatechange = function()
	{
		if (http_request.readyState == 4 && http_request.status == 200)
		{
			// destroy
			var parsed_text = http_request.responseText;
			eval(parsed_text);

			// refresh
			if ( chatbox_last_update > chatbox_updated || force )
			{
				if ( document.getElementById('chatbox').innerHTML != null )
				{
					if ( chatbox_messages_old != chatbox_messages )
					{
						document.getElementById('chatbox').innerHTML = chatbox_messages;
						chatbox_messages_old = chatbox_messages;
						// Scrolling
						document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight + document.getElementById('chatbox').offsetHeight;
						document.getElementById('chatbox').scrollTop = 999999;
					}
				}
				if ( document.getElementById('chatbox_members').innerHTML != null ) document.getElementById('chatbox_members').innerHTML = chatbox_memberlist;

				chatbox_updated = chatbox_last_update;
			}
		}
	};

	http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=refresh', true);
	http_request.send(null);
}

function ajax_connect(params, mode)
{
	if ( params == '' || params == undefined )
	{
		params = '?achives=0';
	}
	if (window.XMLHttpRequest)
	{
		var http_request = new XMLHttpRequest();
	}
	else if (window.ActiveXObject)
	{
		var http_request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	http_request.onreadystatechange = function()
	{
		if (http_request.readyState == 4 && http_request.status == 200)
		{
			// destroyer
			var parsed_text = http_request.responseText;

			if ( parsed_text )
			{
				if ( mode == 'connect' )
				{
					document.getElementById('chatbox_option_co').style.display = 'none';
					document.getElementById('chatbox_option_disco').style.display = '';
					document.getElementById('refresh_auto').checked = true;
					document.getElementById('chatbox_option_autorefresh').style.display = '';
					document.getElementById('chatbox_messenger_form').style.display = '';
					document.getElementById('chatbox_footer').style.display = 'block';
					connected = 1;
					number_of_refresh = 0;
				}
				else if ( mode == 'disconnect' )
				{
					document.getElementById('chatbox_option_co').style.display = '';
					document.getElementById('chatbox_option_disco').style.display = 'none';
					document.getElementById('chatbox_option_autorefresh').style.display = 'none';
					document.getElementById('chatbox_messenger_form').style.display = 'none';
					document.getElementById('chatbox_footer').style.display = 'none';
					connected = 0;
				}
				refresh_chatbox(params);
			}
		}
	};

	http_request.open('GET', '/chatbox/chatbox_actions.forum' + params + '&mode=' + mode, true);
	http_request.send(null);
}

// Starting refresh count or not
number_of_refresh = 0;
// Refresh working :
function refresh_chatbox(params)
{
	if ( params == '' || params == undefined )
	{
		params = '?achives=0';
	}
	if ( document.getElementById('refresh_auto').checked == true )
	{
		ajax_refresh_chatbox(params);
	}
}