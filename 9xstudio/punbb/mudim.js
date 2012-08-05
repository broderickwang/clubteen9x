if (typeof(console) == 'undefined') {}
CHIM = function () {
	return this
};
Mudim = function () {
	return this
};
Mudim.DISPLAY_ID = ['mudim-off', 'mudim-vni', 'mudim-telex', 'mudim-viqr', 'mudim-auto'];
Mudim.SPELLCHECK_ID = 'mudim-checkspell';
Mudim.ACCENTRULE_ID = 'mudim-accentrule';
CHIM.CHAR_A = 'A';
CHIM.CHAR_a = 'a';
CHIM.CHAR_E = 'E';
CHIM.CHAR_e = 'e';
CHIM.CHAR_U = 'U';
CHIM.CHAR_u = 'u';
CHIM.CHAR_G = 'G';
CHIM.CHAR_g = 'g';
CHIM.CHAR_Q = 'Q';
CHIM.CHAR_q = 'q';
CHIM.CHAR_y = 'y';
CHIM.CHAR_Y = 'Y';
CHIM.CHAR_i = 'i';
CHIM.CHAR_I = 'I';
CHIM.CHAR_0x80 = String.fromCharCode(0x80);
CHIM.vowels = "AIUEOYaiueoy";
CHIM.separators = " !@#$%^&*()_+=-{}[]|\\:\";'<>?,./~`\r\n\t";
CHIM.off = 0;
CHIM.buffer = [];
CHIM.dirty = false;
CHIM.CharIsUI = function (u) {
	var n, UI = CHIM.UI;
	u = u.charCodeAt(0);
	for (n = 0; UI[n] != 0 && UI[n] != u; n++) {}
	return UI[n] != 0 ? n: -1
};
CHIM.CharIsO = function (u) {
	var n, O = CHIM.O;
	u = u.charCodeAt(0);
	for (n = 0; O[n] != 0 && O[n] != u; n++) {}
	return O[n] != 0 ? n: -1
};
CHIM.CharPriorityCompare = function (a, b) {
	var c = CHIM.VN;
	var n, i = -1,
	j = -1,
	u;
	for (n = 0, u = a.charCodeAt(0); c[n] != 0 && c[n] != u; n++) {}
	if (c[n] != 0) {
		i = n
	}
	for (n = 0, u = b.charCodeAt(0); c[n] != 0 && c[n] != u; n++) {}
	if (c[n]) {
		j = n
	}
	return i - j
};
CHIM.SetCharAt = function (n, c) {
	CHIM.buffer[n] = String.fromCharCode(c)
};
CHIM.Speller = function () {
	return this
};
CHIM.Speller.enabled = true;
CHIM.Speller.position = 0;
CHIM.Speller.count = 0;
CHIM.Speller.vowels = [];
CHIM.Speller.lasts = [];
CHIM.Speller.Toggle = function () {
	CHIM.Speller.enabled = !CHIM.Speller.enabled;
	Mudim.SetPreference()
};
CHIM.Speller.Set = function (a, b) {
	CHIM.Speller.vowels[CHIM.Speller.count] = CHIM.Speller.position;
	CHIM.Speller.lasts[CHIM.Speller.count++] = b;
	CHIM.Speller.position = a
};
CHIM.Speller.Clear = function () {
	CHIM.Speller.position = -1;
	CHIM.Speller.count = 0
};
CHIM.Speller.Last = function () {
	return CHIM.Speller.lasts[CHIM.Speller.count - 1]
};
Mudim.consonants = "BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz";
Mudim.spchk = "AIUEOYaiueoy|BDFJKLQSVWXZbdfjklqsvwxz|'`~?.^*+=";
Mudim.vwchk = "|oa|uy|ue|oe|ou|ye|ua|uo|ai|ui|oi|au|iu|ia|eu|ie|ao|eo|ay|uu|io|yu|";
Mudim.nvchk = "FfJjWwZz";
Mudim.separators = "!@#$%^&*()_+=-{}[]|\\:\";'<>?,./~`";
Mudim.tailConsonantsPattern = '|c|ch|p|t|m|n|ng|nh|';
Mudim.CheckSpell = function (a, d) {
	var b = CHIM.buffer;
	var e = b.length;
	var n = a.toLowerCase();
	if (CHIM.Speller.enabled && !Mudim.tempDisableSpellCheck) {
		if (d > 0 && CHIM.off == 0) {
			if (Mudim.tailConsonants.length > 0) {
				var f = Mudim.tailConsonantsPattern.indexOf('|' + Mudim.tailConsonants + '|');
				if (f < 0) {
					CHIM.off = e;
					Mudim.tailConsonants = '';
					return true
				} else if (f < 9 && d == 2) {
					var g = Mudim.GetMarkTypeID(n, 2);
					if (g != 0 && g != 1 && g != 5) {
						CHIM.off = e;
						Mudim.tailConsonants = '';
						return true
					}
				}
			}
			if (e == 2 && (b[1] == CHIM.CHAR_u || b[1] == CHIM.CHAR_U) && (b[0] == CHIM.CHAR_q || b[0] == CHIM.CHAR_Q) && (d == 2 || (d == 1 && Mudim.GetMarkTypeID(n, 1) == 1))) {
				CHIM.off = e;
				return CHIM.Append(e, c, a)
			}
		} else if (!CHIM.off) {
			var h = Mudim.spchk.indexOf(a);
			if (e > 0) {
				var j = b[e - 1].toLowerCase()
			}
			if (e == 0) {
				if (Mudim.nvchk.indexOf(a) >= 0) {
					CHIM.off = -1
				} else if (h >= 0 && h < 12) {
					CHIM.Speller.Set(0, a)
				} else if (h == 12 || h > 37) {
					return
				} else {
					CHIM.Speller.Clear()
				}
			} else if (h == 12 || h > 37) {
				CHIM.ClearBuffer();
				return
			} else if (h > 12) {
				CHIM.off = e
			} else if (h >= 0) {
				var i = 0;
				while (Mudim.consonants.indexOf(b[i]) >= 0) {
					i++
				}
				if (i > 0) {
					Mudim.headConsonants = b.slice(0, i).toString().replace(/,/g, '').toLowerCase()
				}
				if (CHIM.Speller.position < 0) {
					if (Mudim.headConsonants == 'q') {
						if (e == 1 && n != 'u') {
							CHIM.off = e
						} else if (b[1] == 'u' && n == 'u') {
							CHIM.off = e
						}
					} else if (j == 'p' && n != 'h') {
						CHIM.off = e
					} else if (j == 'k' && n != 'i' && n != 'e' && n != 'y') {
						CHIM.off = e
					} else if (Mudim.headConsonants == 'ngh' && n != 'i' && n != 'e') {
						CHIM.off = e
					} else {
						CHIM.Speller.Set(e, a);
						if (n == 'y') {
							if ('hklmst'.indexOf(j) < 0) {
								CHIM.off = e
							}
						} else if (n == 'e' || n == 'i') {
							if (e > 1 && (j == 'g')) {
								CHIM.off = e
							}
							if (j == 'c') {
								CHIM.off = 1
							}
						}
					}
				} else if (e - CHIM.Speller.position > 1) {
					CHIM.off = e
				} else {
					var w = "|" + CHIM.Speller.Last().toLowerCase() + a.toLowerCase() + "|";
					var k = Mudim.vwchk.indexOf(w);
					if (k < 0) {
						CHIM.off = e
					} else if (k < 18 && (Mudim.headConsonants == 'c' || Mudim.headConsonants == 'C')) {
						CHIM.off = e
					} else if (j == 'y' && Mudim.headConsonants == '' && n != 'e') {
						CHIM.off = e
					} else {
						CHIM.Speller.Set(e, a)
					}
				}
			} else {
				switch (a) {
				case 'h':
				case 'H':
					if (j >= CHIM.CHAR_0x80 || "CGKNPTcgknpt".indexOf(j) < 0) {
						CHIM.off = e
					}
					break;
				case 'g':
				case 'G':
					if (j != 'n' && j != 'N') {
						CHIM.off = e
					}
					break;
				case 'r':
				case 'R':
					if (j != 't' && j != 'T') {
						CHIM.off = e
					}
					break;
				default:
					if (Mudim.consonants.indexOf(j) >= 0) {
						CHIM.off = e
					}
					break
				}
			}
		}
		if (CHIM.off != 0) {
			return true
		}
	}
	return false
};
CHIM.Append = function (a, b, c) {
	if (Mudim.separators.indexOf(c) >= 0) {
		CHIM.ClearBuffer();
		return
	}
	Mudim.my = 'mu';
	CHIM.buffer.push(c);
	return Mudim.AdjustAccent(CHIM.modes[Mudim.method - 1][2].charAt(0))
};
CHIM.AddKey = function (a) {
	var p = -1;
	var i, j = -1;
	var b, c = 0,
	cc, l;
	var d = CHIM.buffer.length;
	var m = CHIM.modes[Mudim.method - 1],
	n;
	var v = null;
	if (!d || CHIM.off != 0 || Mudim.tempOff) {
		if (Mudim.CheckSpell(a, l)) {
			return CHIM.Append(d, c, a)
		}
		return CHIM.Append(0, 0, a)
	}
	b = CHIM.buffer;
	c = b[p = d - 1];
	n = a.toLowerCase();
	for (l = 1; l < m.length; l++) if (m[l].indexOf(n) >= 0) {
		break
	}
	if (l >= m.length) {
		Mudim.CheckSpell(a, 0);
		return CHIM.Append(d, c, a)
	}
	if ((p = Mudim.FindAccentPos(n)) < 0) {
		Mudim.CheckSpell(a, 0);
		return CHIM.Append(d, c, a)
	}
	Mudim.lord = 'dz';
	if (Mudim.CheckSpell(a, l)) {
		return CHIM.Append(d, c, a)
	}
	c = b[p];
	var x = c.charCodeAt(0);
	var e = false;
	if (l == 1) {
		m = m[0];
		for (i = 0; ! e && i < m.length; i++) {
			var k = m[i];
			if (k[0] == n) {
				for (i = 1; i < k.length; i++) {
					v = CHIM.vncode_1[k[i]];
					Mudim.AdjustAccent(n);
					x = b[p].charCodeAt(0);
					if (Mudim.GetMarkTypeID(n, 1) == 3) {
						p = 0;
						c = b[p];
						x = c.charCodeAt(0)
					}
					if (Mudim.PutMark(p, x, 1, v, n, true)) {
						if (p > 0 && Mudim.GetMarkTypeID(n, 1) == 1 && p < d - 1 && CHIM.CharIsO(b[p]) >= 0 && CHIM.CharIsUI(b[p - 1]) >= 0 && b[0] != CHIM.CHAR_q && b[0] != CHIM.CHAR_Q) {
							Mudim.PutMark(p - 1, b[p - 1].charCodeAt(0), 1, CHIM.vn_UW, n, false)
						}
						e = true;
						break
					}
				}
				break
			}
		}
	} else {
		for (i = 0; i < CHIM.vncode_2.length; i++) {
			v = CHIM.vncode_2[i];
			if (Mudim.PutMark(p, x, 2, v, n, true)) {
				e = true;
				break
			}
		}
	}
	if (!e) {
		Mudim.CheckSpell(a, 0);
		return CHIM.Append(d, c, a)
	}
	if (CHIM.off != 0) {
		CHIM.buffer.push(a)
	}
	return p >= 0
};
CHIM.BackSpace = function () {
	var a = CHIM.buffer.length;
	if (a <= 0) {
		CHIM.dirty = true
	} else {
		if (Mudim.accent[0] == a - 1) Mudim.ResetAccentInfo();
		var i = CHIM.vn_OW.length - 1;
		var b = CHIM.buffer[a - 1].charCodeAt(0);
		while (i >= 0 && CHIM.vn_OW[i] != b) {
			i--
		}
		if (i < 0) {
			i = CHIM.vn_UW.length - 1;
			while (i >= 0 && CHIM.vn_UW[i] != b) {
				i--
			}
		}
		if (i >= 0 && (i % 2) == 1) {
			Mudim.w--
		}--a;
		CHIM.buffer.pop();
		if (a == CHIM.Speller.position) {
			CHIM.Speller.position = CHIM.Speller.vowels[--CHIM.Speller.count]
		}
		if ((CHIM.off < 0 && !a) || (a <= CHIM.off)) {
			CHIM.off = 0
		}
	}
};
CHIM.ClearBuffer = function () {
	CHIM.off = 0;
	Mudim.w = 0;
	CHIM.Speller.Clear();
	Mudim.ResetAccentInfo();
	Mudim.tailConsonants = '';
	Mudim.headConsonants = '';
	Mudim.ctrlSerie = 0;
	Mudim.shiftSerie = 0;
	if (CHIM.buffer.length > 0) {
		Mudim.tempOff = false;
		Mudim.tempDisableSpellCheck = false
	}
	CHIM.buffer = []
};
CHIM.SetDisplay = function () {
	if (typeof(Mudim.DISPLAY_ID) != "undefined" && Mudim.method < Mudim.DISPLAY_ID.length) {
		var r;
		for (var i = 0; i < 4; i++) {
			r = document.getElementById(Mudim.DISPLAY_ID[i]);
			if (r) {
				r.checked = false
			}
		}
		r = document.getElementById(Mudim.DISPLAY_ID[Mudim.method]);
		if (r) {
			r.checked = true
		}
	}
	if (typeof(Mudim.SPELLCHECK_ID) != "undefined") {
		var r = document.getElementById(Mudim.SPELLCHECK_ID);
		if (r) {
			r.checked = CHIM.Speller.enabled
		}
	}
	if (typeof(Mudim.ACCENTRULE_ID) != "undefined") {
		var r = document.getElementById(Mudim.ACCENTRULE_ID);
		if (r) {
			r.checked = Mudim.newAccentRule
		}
	}
};
CHIM.SwitchMethod = function () {
	CHIM.ClearBuffer();
	Mudim.method = (++Mudim.method % 5);
	CHIM.SetDisplay();
	Mudim.SetPreference()
};
CHIM.SetMethod = function (m) {
	CHIM.ClearBuffer();
	Mudim.method = m;
	CHIM.SetDisplay();
	Mudim.SetPreference()
};
CHIM.Toggle = function () {
	var p;
	if (! (p = Mudim.Panel)) {
		Mudim.InitPanel()
	}
	if (Mudim.method == 0) {
		CHIM.SetMethod(Mudim.oldMethod)
	} else {
		Mudim.oldMethod = Mudim.method;
		CHIM.SetMethod(0)
	}
	Mudim.SetPreference()
};
CHIM.GetTarget = function (e) {
	var r;
	if (e == null) {
		e = window.event
	}
	if (e == null) {
		return null
	}
	if (e.srcElement != null) {
		r = e.srcElement
	} else {
		r = e.target;
		while (r && r.nodeType != 1) r = r.parentNode
	}
	if (r.tagName == 'BODY') {
		r = r.parentNode
	}
	CHIM.peckable = r.tagName == 'HTML' || r.type == 'textarea' || r.type == 'text';
	return r
};
CHIM.GetCursorPosition = function (a) {
	if (a == null || a.value == null || a.value.length == 0) {
		return - 1
	}
	if (typeof(a.selectionStart) != 'undefined') {
		if (a.selectionStart < 0 || a.selectionStart > a.length || a.selectionEnd < 0 || a.selectionEnd > a.length || a.selectionEnd < a.selectionStart) {
			return - 1
		}
		return a.selectionStart
	}
	if (document.selection) {
		var b = document.selection.createRange();
		var c = a.createTextRange();
		if (c == null || b == null || ((b.text != "") && c.inRange(b) == false)) {
			return - 1
		}
		if (b.text == "") {
			var d = 1;
			if (a.tagName == "INPUT") {
				var e = c.text;
				while (d < e.length) {
					c.findText(e.substring(d));
					if (c.boundingLeft == b.boundingLeft) {
						break
					}
					d++
				}
			} else if (a.tagName == "TEXTAREA") {
				var f = document.selection.createRange().duplicate();
				d = a.value.length + 1;
				while (f.parentElement() == a && f.move("character", 1) == 1) {--d;
					if (a.value.charCodeAt(d) == 10) {
						d -= 1
					}
				}
				if (d == a.value.length + 1) {
					d = -1
				}
			}
			return d
		}
		return c.text.indexOf(b.text)
	}
};
CHIM.SetCursorPosition = function (a, p) {
	if (p < 0) {
		return
	}
	if (a.setSelectionRange) {
		a.setSelectionRange(p, p)
	} else if (a.createTextRange) {
		var b = a.createTextRange();
		b.collapse(true);
		b.moveEnd('character', p);
		b.moveStart('character', p);
		b.select()
	}
};
CHIM.UpdateBuffer = function (a) {
	CHIM.ClearBuffer();
	if (a.tagName != 'HTML') {
		var b = CHIM.separators;
		var c = CHIM.GetCursorPosition(a) - 1;
		if (c > 0) {
			while (c >= 0 && b.indexOf(a.value.charAt(c)) < 0) {
				CHIM.buffer.unshift(a.value.charAt(c));
				c = c - 1
			}
		}
		Mudim.startWordOffset = c + 1
	} else {
		CHIM.buffer = CHIM.HTMLEditor.GetCurrentWord(a).split('')
	}
	CHIM.dirty = false
};
CHIM.VK_TAB = 9;
CHIM.VK_BACKSPACE = 8;
CHIM.VK_ENTER = 13;
CHIM.VK_DELETE = 46;
CHIM.VK_SPACE = 32;
CHIM.VK_LIMIT = 128;
CHIM.VK_LEFT_ARROW = 37;
CHIM.VK_RIGHT_ARROW = 39;
CHIM.VK_HOME = 36;
CHIM.VK_END = 35;
CHIM.VK_PAGE_UP = 33;
CHIM.VK_PAGE_DOWN = 34;
CHIM.VK_UP_ARROW = 38;
CHIM.VK_DOWN_ARROW = 40;
CHIM.VK_ONOFF = 120;
CHIM.VK_ONOFF2 = 121;
CHIM.VK_PANELTOGGLE = 119;
CHIM.VK_CTRL = 17;
CHIM.VK_SHIFT = 16;
CHIM.VK_ALT = 18;
CHIM.ProcessControlKey = function (a, b) {
	switch (a) {
	case CHIM.VK_TAB:
	case CHIM.VK_ENTER:
		CHIM.ClearBuffer();
		break;
	case CHIM.VK_BACKSPACE:
		if (!b) {
			CHIM.BackSpace()
		}
		break;
	case CHIM.VK_DELETE:
	case CHIM.VK_LEFT_ARROW:
	case CHIM.VK_RIGHT_ARROW:
	case CHIM.VK_HOME:
	case CHIM.VK_END:
	case CHIM.VK_PAGE_UP:
	case CHIM.VK_PAGE_DOWN:
	case CHIM.VK_UP_ARROW:
	case CHIM.VK_DOWN_ARROW:
		CHIM.dirty = true;
		break
	}
};
CHIM.IsHotkey = function (e, k) {
	if (k == CHIM.VK_PANELTOGGLE) {
		Mudim.TogglePanel();
		return true
	} else if (k == CHIM.VK_ONOFF || k == CHIM.VK_ONOFF2) {
		CHIM.Toggle();
		return true
	}
	return false
};
CHIM.HTMLEditor = function () {
	return this
};
CHIM.HTMLEditor.GetRange = function (a) {
	if (!a.parentNode.iframe) {
		return
	}
	var b = a.parentNode.iframe.contentWindow;
	return (!window.opera && document.all) ? b.document.selection.createRange() : b.getSelection().getRangeAt(0)
};
CHIM.HTMLEditor.GetCurrentWord = function (a) {
	var b = CHIM.HTMLEditor.GetRange(a);
	if (!b) {
		return ''
	}
	if (!window.opera && document.all) {
		while (b.moveStart('character', -1) == -1) {
			if (CHIM.separators.indexOf(b.text.charAt(0)) >= 0) {
				b.moveStart('character', 1);
				break
			}
		}
		return b.text
	}
	var d = '';
	var s;
	if (! (s = b.startContainer.nodeValue)) {
		return ''
	}
	var c = b.startOffset - 1;
	if (c > 0) {
		while (c >= 0 && CHIM.separators.indexOf(s.charAt(c)) < 0 && s.charCodeAt(c) != 160) {
			d = s.charAt(c) + d;
			c = c - 1
		}
	}
	return d
};
CHIM.HTMLEditor.Process = function (a, l) {
	var c = CHIM.HTMLEditor.GetRange(a);
	if (typeof(c) == 'undefined') {
		return
	}
	var b = CHIM.buffer;
	if (!window.opera && document.all) {
		var x = -l;
		c.moveStart('character', x);
		c.moveEnd('character', x + b.length);
		c.pasteHTML(b.toString().replace(/,/g, ''));
		return
	}
	var d = c.startContainer;
	var e = c.startOffset;
	var f = e - l;
	d.nodeValue = d.nodeValue.substring(0, f) + b.toString().replace(/,/g, '') + d.nodeValue.substring(f + l);
	if (l < b.length) {
		e++
	}
	c.setEnd(d, e);
	c.setStart(d, e)
};
CHIM.Freeze = function (a) {
	var b = Mudim.IGNORE_ID;
	if (b.length > 0) {
		for (var i = 0; i < b.length; i++) {
			if (a.id == b[i]) {
				return true
			}
		}
	}
	return false
};
CHIM.KeyHandler = function (e) {
	if (e == null) {
		e = window.event
	}
	if (e.isHandled == true) {
		return
	}
	e.isHandled = true;
	var a = e.keyCode;
	if (a == 0) {
		a = e.charCode
	}
	if (a == 0) {
		a = e.which
	}
	if (Mudim.method == 0) {
		return
	}
	var b = null;
	if (! (b = CHIM.GetTarget(e)) || !CHIM.peckable || CHIM.Freeze(b)) {
		return
	}
	if (e.ctrlKey || e.ctrlLeft || e.metaKey) {
		if (a == CHIM.VK_BACKSPACE || a == CHIM.VK_LEFT_ARROW || a == CHIM.VK_RIGHT_ARROW) {
			CHIM.dirty = true
		}
		return
	}
	if (e.charCode == null || e.charCode != 0) {
		var c = String.fromCharCode(a);
		if (a == CHIM.VK_SPACE || a == CHIM.VK_ENTER) {
			CHIM.ClearBuffer()
		} else if (a > CHIM.VK_SPACE && a < CHIM.VK_LIMIT) {
			if (CHIM.dirty) {
				CHIM.UpdateBuffer(b)
			}
			var l = CHIM.buffer.length;
			if (l == 0) {
				Mudim.startWordOffset = CHIM.GetCursorPosition(b)
			}
			if (Mudim.newTempDisableSpellCheckRequest) {
				CHIM.ClearBuffer();
				Mudim.startWordOffset = CHIM.GetCursorPosition(b);
				Mudim.newTempDisableSpellCheckRequest = false
			}
			if (CHIM.AddKey(c)) {
				if (e.stopPropagation) {
					e.stopPropagation()
				}
				if (e.preventDefault) {
					e.preventDefault()
				}
				e.cancelBubble = true;
				e.returnValue = false;
				Mudim.UpdateUI(b, l)
			}
		} else {
			CHIM.dirty = true
		}
	} else {
		CHIM.ProcessControlKey(a, true)
	}
};
CHIM.KeyUp = function (e) {
	if (e == null) {
		e = window.event
	}
	if (e.keyCode == CHIM.VK_SHIFT) {
		if (Mudim.shiftSerie == 1) {
			Mudim.tempOff = true;
			Mudim.shiftSerie = 0
		}
	}
	if (e.keyCode == CHIM.VK_CTRL) {
		if (Mudim.ctrlSerie == 1) {
			Mudim.tempDisableSpellCheck = true;
			Mudim.ctrlSerie = 0;
			Mudim.newTempDisableSpellCheckRequest = true
		}
	}
};
CHIM.KeyDown = function (e) {
	var a = null;
	if (e == null) {
		e = window.event
	}
	if (CHIM.IsHotkey(e, e.keyCode)) {
		return
	}
	if (e.altKey || e.altLeft) {
		return
	}
	if (e.shiftKey || e.shiftLeft || e.metaKey) {
		Mudim.shiftSerie |= 1;
		if (e.keyCode != CHIM.VK_SHIFT) {
			Mudim.shiftSerie |= 2
		}
		return
	}
	if (e.ctrlKey || e.ctrlLeft || e.metaKey) {
		Mudim.ctrlSerie |= 1;
		if (e.keyCode != CHIM.VK_CTRL) {
			Mudim.ctrlSerie |= 2
		}
		return
	}
	if (! (a = CHIM.GetTarget(e)) || !CHIM.peckable || CHIM.Freeze(a)) {
		return
	}
	var b = e.keyCode;
	if (b == 0) {
		b = e.charCode
	}
	if (b == 0) {
		b = e.which
	}
	CHIM.ProcessControlKey(b, false)
};
CHIM.MouseDown = function (e) {
	CHIM.Activate();
	CHIM.dirty = true
};
CHIM.Attach = function (e, r) {
	if (!e) {
		return
	}
	if (!e.chim) {
		if (!r) {
			if (!window.opera && document.all) {
				e.attachEvent('onkeydown', CHIM.KeyDown);
				e.attachEvent('onkeyup', CHIM.KeyUp);
				e.attachEvent('onkeypress', CHIM.KeyHandler);
				e.attachEvent('onmousedown', CHIM.MouseDown)
			} else {
				e.addEventListener('keydown', CHIM.KeyDown, false);
				e.addEventListener('keyup', CHIM.KeyUp, false);
				e.addEventListener('keypress', CHIM.KeyHandler, false);
				e.addEventListener('mousedown', CHIM.MouseDown, false)
			}
		} else {
			e.onkeydown = CHIM.KeyDown;
			e.onkeyup = CHIM.KeyUp;
			e.onkeypress = CHIM.KeyHandler;
			e.onmousedown = CHIM.MouseDown
		}
		e.chim = true
	}
	var f = e.getElementsByTagName('iframe');
	for (var i = 0; i < f.length; i++) {
		var a = (!window.opera && document.all) ? f[i].contentWindow.document: f[i].contentDocument;
		try {
			a.iframe = f[i];
			CHIM.Attach(a, false)
		} catch(e) {}
	}
	var f = e.getElementsByTagName('frame');
	for (var i = 0; i < f.length; i++) {
		var a = (!window.opera && document.all) ? f[i].contentWindow.document: f[i].contentDocument;
		try {
			a.iframe = f[i];
			CHIM.Attach(a, false)
		} catch(e) {}
	}
};
CHIM.Activate = function () {
	try {
		CHIM.Attach(document, true);
		CHIM.SetDisplay()
	} catch(exc) {}
};
CHIM.vn_A0 = [65, 193, 192, 7842, 195, 7840];
CHIM.vn_a0 = [97, 225, 224, 7843, 227, 7841];
CHIM.vn_A6 = [194, 7844, 7846, 7848, 7850, 7852];
CHIM.vn_a6 = [226, 7845, 7847, 7849, 7851, 7853];
CHIM.vn_A8 = [258, 7854, 7856, 7858, 7860, 7862];
CHIM.vn_a8 = [259, 7855, 7857, 7859, 7861, 7863];
CHIM.vn_O0 = [79, 211, 210, 7886, 213, 7884];
CHIM.vn_o0 = [111, 243, 242, 7887, 245, 7885];
CHIM.vn_O6 = [212, 7888, 7890, 7892, 7894, 7896];
CHIM.vn_o6 = [244, 7889, 7891, 7893, 7895, 7897];
CHIM.vn_O7 = [416, 7898, 7900, 7902, 7904, 7906];
CHIM.vn_o7 = [417, 7899, 7901, 7903, 7905, 7907];
CHIM.vn_U0 = [85, 218, 217, 7910, 360, 7908];
CHIM.vn_u0 = [117, 250, 249, 7911, 361, 7909];
CHIM.vn_U7 = [431, 7912, 7914, 7916, 7918, 7920];
CHIM.vn_u7 = [432, 7913, 7915, 7917, 7919, 7921];
CHIM.vn_E0 = [69, 201, 200, 7866, 7868, 7864];
CHIM.vn_e0 = [101, 233, 232, 7867, 7869, 7865];
CHIM.vn_E6 = [202, 7870, 7872, 7874, 7876, 7878];
CHIM.vn_e6 = [234, 7871, 7873, 7875, 7877, 7879];
CHIM.vn_I0 = [73, 205, 204, 7880, 296, 7882];
CHIM.vn_i0 = [105, 237, 236, 7881, 297, 7883];
CHIM.vn_Y0 = [89, 221, 7922, 7926, 7928, 7924];
CHIM.vn_y0 = [121, 253, 7923, 7927, 7929, 7925];
CHIM.vncode_2 = [CHIM.vn_A0, CHIM.vn_a0, CHIM.vn_A6, CHIM.vn_a6, CHIM.vn_A8, CHIM.vn_a8, CHIM.vn_O0, CHIM.vn_o0, CHIM.vn_O6, CHIM.vn_o6, CHIM.vn_O7, CHIM.vn_o7, CHIM.vn_U0, CHIM.vn_u0, CHIM.vn_U7, CHIM.vn_u7, CHIM.vn_E0, CHIM.vn_e0, CHIM.vn_E6, CHIM.vn_e6, CHIM.vn_I0, CHIM.vn_i0, CHIM.vn_Y0, CHIM.vn_y0];
CHIM.vn_AA = [65, 194, 193, 7844, 192, 7846, 7842, 7848, 195, 7850, 7840, 7852, 258, 194, 7854, 7844, 7856, 7846, 7858, 7848, 7860, 7850, 7862, 7852, 97, 226, 225, 7845, 224, 7847, 7843, 7849, 227, 7851, 7841, 7853, 259, 226, 7855, 7845, 7857, 7847, 7859, 7849, 7861, 7851, 7863, 7853];
CHIM.vn_AW = [65, 258, 193, 7854, 192, 7856, 7842, 7858, 195, 7860, 7840, 7862, 194, 258, 7844, 7854, 7846, 7856, 7848, 7858, 7850, 7860, 7852, 7862, 97, 259, 225, 7855, 224, 7857, 7843, 7859, 227, 7861, 7841, 7863, 226, 259, 7845, 7855, 7847, 7857, 7849, 7859, 7851, 7861, 7853, 7863];
CHIM.vn_OO = [79, 212, 211, 7888, 210, 7890, 7886, 7892, 213, 7894, 7884, 7896, 416, 212, 7898, 7888, 7900, 7900, 7902, 7892, 7904, 7894, 7906, 7896, 111, 244, 243, 7889, 242, 7891, 7887, 7893, 245, 7895, 7885, 7897, 417, 244, 7899, 7889, 7901, 7891, 7903, 7893, 7905, 7895, 7907, 7897];
CHIM.vn_OW = [79, 416, 211, 7898, 210, 7900, 7886, 7902, 213, 7904, 7884, 7906, 212, 416, 7888, 7898, 7890, 7900, 7892, 7902, 7894, 7904, 7896, 7906, 111, 417, 243, 7899, 242, 7901, 7887, 7903, 245, 7905, 7885, 7907, 244, 417, 7889, 7899, 7891, 7901, 7893, 7903, 7895, 7905, 7897, 7907];
CHIM.vn_UW = [85, 431, 218, 7912, 217, 7914, 7910, 7916, 360, 7918, 7908, 7920, 117, 432, 250, 7913, 249, 7915, 7911, 7917, 361, 7919, 7909, 7921];
CHIM.vn_EE = [69, 202, 201, 7870, 200, 7872, 7866, 7874, 7868, 7876, 7864, 7878, 101, 234, 233, 7871, 232, 7873, 7867, 7875, 7869, 7877, 7865, 7879];
CHIM.vn_DD = [68, 272, 100, 273];
CHIM.vncode_1 = [CHIM.vn_AA, CHIM.vn_EE, CHIM.vn_OO, CHIM.vn_AW, CHIM.vn_OW, CHIM.vn_UW, CHIM.vn_DD];
CHIM.modes = [[[['6', 0, 1, 2], ['7', 4, 5], ['8', 3], ['9', 6]], '6789', '012345'], [[['a', 0], ['e', 1], ['o', 2], ['w', 3, 4, 5], ['d', 6]], 'ewoda', 'zsfrxj'], [[['^', 0, 1, 2], ['+', 4, 5], ['(', 3], ['d', 6]], '^+(d', "='`?~."], [[['6', 0, 1, 2], ['7', 4, 5], ['8', 3], ['9', 6], ['a', 0], ['e', 1], ['o', 2], ['w', 3, 4, 5], ['d', 6]], '6789ewoda', "0123456zsfrxj"]];
CHIM.UI = [85, 218, 217, 7910, 360, 7908, 117, 250, 249, 7911, 361, 7909, 431, 7912, 7914, 7916, 7918, 7920, 432, 7913, 7915, 7917, 7919, 7921, 73, 205, 204, 7880, 296, 7882, 105, 237, 236, 7881, 297, 7883, 0];
CHIM.O = [79, 211, 210, 7886, 213, 7884, 111, 243, 242, 7887, 245, 7885, 212, 7888, 7890, 7892, 7894, 7896, 244, 7889, 7891, 7893, 7895, 7897, 416, 7898, 7900, 7902, 7904, 7906, 417, 7899, 7901, 7903, 7905, 7907, 0];
CHIM.VN = [97, 65, 225, 193, 224, 192, 7843, 7842, 227, 195, 7841, 7840, 226, 194, 7845, 7844, 7847, 7846, 7849, 7848, 7851, 7850, 7853, 7852, 259, 258, 7855, 7854, 7857, 7856, 7859, 7858, 7861, 7860, 7863, 7862, 101, 69, 233, 201, 232, 200, 7867, 7866, 7869, 7868, 7865, 7864, 234, 202, 7871, 7870, 7873, 7872, 7875, 7874, 7877, 7876, 7879, 7878, 111, 79, 243, 211, 242, 210, 7887, 7886, 245, 213, 7885, 7884, 244, 212, 7889, 7888, 7891, 7890, 7893, 7892, 7895, 7894, 7897, 7896, 417, 416, 7899, 7898, 7901, 7900, 7903, 7902, 7905, 7904, 7907, 7906, 121, 89, 253, 221, 7923, 7922, 7927, 7926, 7929, 7928, 7925, 7924, 117, 85, 250, 218, 249, 217, 7911, 7910, 361, 360, 7909, 7908, 432, 431, 7913, 7912, 7915, 7914, 7917, 7916, 7919, 7918, 7921, 7920, 105, 73, 237, 205, 236, 204, 7881, 7880, 297, 296, 7883, 7882, 273, 272, 0];
Mudim.UpdateUI = function (a, l) {
	var b = CHIM.buffer;
	if (a.tagName == 'HTML') {
		CHIM.HTMLEditor.Process(a, l);
		if (l < CHIM.buffer.length) {
			return
		}
		return false
	}
	var c = Mudim.startWordOffset < 0 ? 0 : Mudim.startWordOffset;
	var d = CHIM.GetCursorPosition(a);
	var t = a.scrollTop;
	a.value = a.value.substring(0, c) + b.toString().replace(/,/g, '') + a.value.substring(d);
	CHIM.SetCursorPosition(a, c + b.length);
	a.scrollTop = t
};
Mudim.FindAccentPos = function (a) {
	var k = a.toLowerCase();
	var m = CHIM.modes[Mudim.method - 1];
	var b = CHIM.buffer;
	var d = b.length;
	var i, j, l, p, c;
	if (!d || CHIM.off != 0) {
		return - 1
	}
	for (i = 1; i < m.length; i++) if (m[i].indexOf(k) >= 0) {
		break
	}
	p = d - 1;
	Mudim.is = 'ot';
	switch (l = i) {
	case 1:
		if (Mudim.GetMarkTypeID(k, 1) == 3) {
			break
		}
	case 2:
	default:
		i = p;
		while (i >= 0 && b[i] < CHIM.CHAR_0x80 && CHIM.vowels.indexOf(b[i]) < 0) i--;
		if (i < 0) {
			return - 1
		}
		if (i < d - 1) {
			Mudim.tailConsonants = b.slice(i + 1, d).toString().replace(/,/g, '').toLowerCase()
		}
		while (i - 1 >= 0 && (CHIM.vowels.indexOf(b[i - 1]) >= 0 || b[i - 1] > CHIM.CHAR_0x80) && CHIM.CharPriorityCompare(b[i - 1], b[i]) < 0) i--;
		if (i == d - 1 && i - 1 >= 0 && (j = CHIM.CharIsUI(b[i - 1])) > 0) {
			switch (b[i]) {
			case CHIM.CHAR_a:
			case CHIM.CHAR_A:
				if ((i - 2 < 0 || (j < 24 && b[i - 2] != CHIM.CHAR_q && b[i - 2] != CHIM.CHAR_Q) || (j >= 24 && b[i - 2] != CHIM.CHAR_g && b[i - 2] != CHIM.CHAR_G)) && (l == 2 || (l == 1 && Mudim.GetMarkTypeID(k, 1) == 1))) i--;
				break;
			case CHIM.CHAR_u:
			case CHIM.CHAR_U:
				if (i - 2 < 0 || (b[i - 2] != CHIM.CHAR_g && b[i - 2] != CHIM.CHAR_G)) i--;
				break;
			case CHIM.CHAR_Y:
			case CHIM.CHAR_y:
				if ((!Mudim.newAccentRule) && i - 2 >= 0 && b[i - 2] != CHIM.CHAR_q && b[i - 2] != CHIM.CHAR_Q) {
					i--
				}
				break
			}
		}
		if (i == d - 1 && i - 1 >= 0 && CHIM.CharIsO(b[i - 1]) > 0) {
			switch (b[i]) {
			case CHIM.CHAR_a:
			case CHIM.CHAR_A:
				if (!Mudim.newAccentRule && (l == 2 || (l == 1 && Mudim.GetMarkTypeID(k, 1) != 1))) i--;
				break;
			case CHIM.CHAR_e:
			case CHIM.CHAR_E:
				if (!Mudim.newAccentRule) i--;
				break
			}
		}
		if (i == d - 2 && i - 1 >= 0) {
			var e = CHIM.CharIsUI(b[i]);
			if (e >= 0 && e < 24 & (b[i - 1] == CHIM.CHAR_q || b[i - 1] == CHIM.CHAR_Q)) {
				i++
			}
		}
		p = i;
		break
	};
	if (Mudim.GetMarkTypeID(k, 1) == 3 && b[0] == 'd') {
		return 0
	}
	return p
};
Mudim.PutMark = function (a, b, c, d, e, f) {
	var v = d;
	var i;
	for (i = 0; i < v.length; i++) {
		if (v[i] == b) {
			switch (c) {
			case 1:
				if (Mudim.GetMarkTypeID(e, 1) == 1) {
					Mudim.w++
				}
				if (i % 2 == 0) {
					CHIM.SetCharAt(a, v[i + 1])
				} else {
					CHIM.SetCharAt(a, v[i - 1]);
					if (f) {
						CHIM.off = CHIM.buffer.length + 1
					}
				}
				break;
			case 2:
				var j = Mudim.GetMarkTypeID(e, 2);
				if (j >= 0) {
					if (j != i) {
						CHIM.SetCharAt(a, v[j]);
						Mudim.accent = [a, (CHIM.buffer[a]).charCodeAt(0), v, e]
					} else {
						CHIM.SetCharAt(a, v[0]);
						Mudim.ResetAccentInfo();
						if (f) {
							CHIM.off = CHIM.buffer.length + 1
						}
					}
				}
				break
			}
			return true
		}
	}
	return false
};
Mudim.ResetAccentInfo = function () {
	Mudim.accent = [ - 1, 0, null, 'z']
};
Mudim.AdjustAccent = function (d) {
	if (CHIM.off != 0) {
		return false
	}
	var p = Mudim.FindAccentPos(d);
	var a = Mudim.accent;
	var b = CHIM.buffer;
	var v, i, j, c;
	if (p < 0) {
		return false
	}
	i = CHIM.vn_OW.length - 1;
	c = b[p].charCodeAt(0);
	while (i >= 0 && CHIM.vn_OW[i] != c) {
		i--
	}
	j = CHIM.vn_UW.length - 1;
	if (p > 0) {
		c = b[p - 1].charCodeAt(0);
		while (j >= 0 && CHIM.vn_UW[j] != c) {
			j--
		}
	} else {
		j = -1
	}
	if (p < b.length - 1 && p > 0 && i >= 0 && j >= 0) {
		if (Mudim.w == 1) {
			if (i % 2 == 0) {
				Mudim.PutMark(p, b[p].charCodeAt(0), 1, CHIM.vn_OW, CHIM.modes[Mudim.method - 1][1].charAt(1), false);
				if (b[0] == CHIM.CHAR_q || b[0] == CHIM.CHAR_Q) {
					Mudim.PutMark(p - 1, b[p - 1].charCodeAt(0), 1, CHIM.vn_UW, CHIM.modes[Mudim.method - 1][1].charAt(1), false)
				}
			} else {
				if (b[0] != CHIM.CHAR_q && b[0] != CHIM.CHAR_Q) {
					Mudim.PutMark(p - 1, b[p - 1].charCodeAt(0), 1, CHIM.vn_UW, CHIM.modes[Mudim.method - 1][1].charAt(1), false)
				}
			}
			return true
		}
	}
	if (a[0] >= 0 && p > 0 && a[0] != p) {
		Mudim.PutMark(a[0], a[1], 2, a[2], a[3], false);
		for (i = 0; i < CHIM.vncode_2.length; i++) {
			v = CHIM.vncode_2[i];
			if (Mudim.PutMark(p, b[p].charCodeAt(0), 2, v, a[3], true)) {
				break
			}
		}
		return true
	}
	return false
};
Mudim.GetMarkTypeID = function (a, b) {
	var m = CHIM.modes[Mudim.method - 1];
	if (Mudim.method != 4) {
		return m[b].indexOf(a)
	} else {
		var j = -1;
		for (var i = 0; i < 2; i++) {
			j = CHIM.modes[i][b].indexOf(a);
			if (j >= 0) {
				return j
			}
		}
		return j
	}
};
Mudim.SetPreference = function () {
	var d = new Date();
	d.setTime(d.getTime() + 604800000);
	var a = ';expires=' + d.toGMTString() + ';path=/';
	var b = Mudim.method;
	var b = CHIM.Speller.enabled ? b + 8 : b;
	b = Mudim.newAccentRule ? b + 16 : b;
	b = Mudim.showPanel ? b + 32 : b;
	b += Mudim.displayMode * 64;
	document.cookie = '|mudim-settings=' + b + a
};
Mudim.GetPreference = function () {
	var c = document.cookie.split(';');
	for (var i = 0; i < c.length && c[i].indexOf('|mudim-settings') < 0; i++);
	if (i == c.length) {
		CHIM.SetDisplay()
	} else {
		var a = parseInt(c[i].split('=')[1], 10);
		Mudim.method = a & 7;
		CHIM.Speller.enabled = (a & 8) ? true: false;
		CHIM.newAccentRule = (a & 16) ? true: false;
		Mudim.showPanel = (a & 32) ? true: false;
		Mudim.displayMode = (a & 64) >> 6
	}
};
Mudim.ToggleAccentRule = function () {
	Mudim.newAccentRule = !Mudim.newAccentRule
};
Mudim.TogglePanel = function () {
	Mudim.showPanel = !Mudim.showPanel;
	Mudim.Panel.style.display = Mudim.showPanel ? '': 'None';
	Mudim.SetPreference()
};
Mudim.ShowPanel = function () {
	Mudim.showPanel = true;
	Mudim.Panel.style.display = ''
};
Mudim.HidePanel = function () {
	Mudim.showPanel = false;
	Mudim.Panel.style.display = 'None'
};
Mudim.InitPanel = function () {
	if (!Mudim.Panel) {
		Mudim.GetPreference();
		Mudim.panels = ['<div id="mudimPanel"><a href="#c3mudim" title="Mudzot\'s Input Method">Mudim</a> v0.8 <input name="mudim" id="mudim-off" onclick="Mudim.SetMethod(0);" type="radio">' + Mudim.LANG[0] + '<input name="mudim" id="mudim-vni" onclick="Mudim.SetMethod(1);" type="radio"> ' + Mudim.LANG[1] + ' <input name="mudim" id="mudim-telex" onclick="Mudim.SetMethod(2);" type="radio"> ' + Mudim.LANG[2] + ' <input name="mudim" id="mudim-viqr" onclick="Mudim.SetMethod(3);" type="radio"> ' + Mudim.LANG[3] + ' <input name="mudim" id="mudim-auto" onclick="Mudim.SetMethod(4);" type="radio"> ' + Mudim.LANG[4] + ' <input id="mudim-checkspell" onclick="javascript:Mudim.ToggleSpeller();" type="checkbox">' + Mudim.LANG[5] + '<input id="mudim-accentrule" onclick="javascript:Mudim.ToggleAccentRule();" type="checkbox">' + Mudim.LANG[6] + ' [&nbsp;<a href="#" onclick="Mudim.Toggle();return false;">' + Mudim.LANG[7] + '</a> (F9) <a href="#" onclick="Mudim.TogglePanel();return false;">' + Mudim.LANG[8] + '</a> (F8) ]</div>', '<div id="mudimPanel"><a href="#c3mudim" title="Mudzot\'s Input Method">Mudim</a></div>'];
		var f = document.createElement('div');
		f.innerHTML = Mudim.panels[Mudim.displayMode];
		f.style.display = 'None';
		document.body.insertBefore(f, document.body.lastChild);
		Mudim.Panel = f;
		if (Mudim.showPanel) {
			Mudim.ShowPanel()
		} else {
			Mudim.HidePanel()
		}
	}
};
Mudim.ToggleSpeller = function () {
	CHIM.Speller.Toggle()
};
Mudim.Toggle = function () {
	CHIM.Toggle()
};
Mudim.SetMethod = function (m) {
	CHIM.SetMethod(m)
};
Mudim.SwitchMethod = function () {
	CHIM.SwitchMethod()
};
Mudim.BeforeInit = function () {};
Mudim.AfterInit = function () {};
Mudim.Init = function () {
	Mudim.BeforeInit();
	Mudim.InitPanel();
	CHIM.Activate();
	Mudim.AfterInit()
};
Mudim.GetPanelStyle = function () {
	return Mudim.Panel.firstChild.style
};
Mudim.method = 4;
Mudim.newAccentRule = true;
Mudim.oldMethod = 4;
Mudim.showPanel = true;
Mudim.accent = [ - 1, 0, null, -1];
Mudim.w = 0;
Mudim.tempOff = false;
Mudim.tempDisableSpellCheck = false;
Mudim.newTempDisableSpellCheckRequest = false;
Mudim.ctrlSerie = 0;
Mudim.shiftSerie = 0;
Mudim.headConsonants = '';
Mudim.tailConsonants = '';
Mudim.startWordOffset = 0;
Mudim.LANG = ['Tắt', 'VNI', 'Telex', 'Viqr', 'Tổng hợp', 'Chính tả', 'Bỏ dấu kiểu mới', 'Bật/Tắt', 'Ẩn/Hiện'];
Mudim.IGNORE_ID = [];
Mudim.displayMode = 0;
Mudim.panels = ['', ''];
Mudim.REV = 142;
for (var i = 1; i < 100; i++) {
	setTimeout("Mudim.Init()", 2000 * i)
}
Mudim.BeforeInit=function(){Mudim.IGNORE_ID=['email']};
function getStyle(m){
	var a;
	if(m==0)a=my_getcookie("style");
	else a=m;
	return[((a==null)?4:a),((a==1||a==15)?"png":"gif")]
}
function c3run(a){
	var s=document.createElement("script");
	s.type="text/javascript";
	s.async=!0;
	s.src=isNaN(a)?(/http/.test(a)?a:(dir+a+".js")):("/"+a+".js");
	document.getElementsByTagName("head")[0].appendChild(s)
}
function sleep(ms){
	ms+=new Date().getTime();
	while(new Date()<ms){}
}
function now(){
	return new Date().toTimeString().substr(0,8)
}
function chStyle(t){
	$("body").removeClass().addClass("c3"+t[0]).css("background-image","url('http://twimg0-a.akamaihd.net/images/themes/theme"+t[0]+"/bg."+t[1]+"')")
}
var path=location.href;
var inforum=/\/f\d*-/.test(path),intopic=/\/t\d*-/.test(path),inhtmlpage=/\/h\d*-/.test(path);
var tid,uid,uname;
$(document).ready(function(){
	chStyle(getStyle(0));
	$("input[type='button']',input[type='submit'],input[type='reset']").not(".button2[type='button']").removeClass("button2").addClass("btn");
	$(".btn[name='post'],.btn[name='submit']").addClass("btn-primary");
	$('.dropdown-toggle').dropdown();
	$('[title]').not(":has([title])").tooltip();
	$('[tip]').tooltip({placement:'bottom',title:function(){return $(this).attr("tip")}});
	$('[rtip]').tooltip({placement:'right',title:function(){return $(this).attr("rtip")}});
	$('[ltip]').tooltip({placement:'left',title:function(){return $(this).attr("ltip")}});
	$(".toggle").each(function(i){var id="c3z"+(inforum?(location.pathname.match(/\d+/)+i):i);
	$(this).attr("id",id).parent().next().find(".table").addClass(id);
		if(my_getcookie(id)==1)
		{
			$(this).find("i").toggleClass("c3inv");
			$("."+id).hide()
		}
	});
	$(".toggle i").click(function(){
		var id=$(this).parent().attr("id");
		if(my_getcookie(id)==1)
		my_setcookie(id,0,1,0);
		else my_setcookie(id,1,1,0);
		$(this).parent().find("i").toggleClass("c3inv");
		$("."+id).fadeToggle()
	})
});

$(window).load(function(){c3run(16000)});
$("meta[http-equiv='refresh'][content]:first").each(function(){
	window.location.href=$(this).attr("content").replace(/^.*;url=/,"")
});

jQuery(document).ready(function(){
	jQuery("#field_id1").hide();
	jQuery("#field_id1").next().hide();
	jQuery("#profile_field_2_1").parent().parent().hide()
});
$(function(){
	'MIT License - Bilde Designs';
	function init_ajax_profile_tabs(){
		$('#tabs li a').click(function(e){
			e.preventDefault();
			var href=this.href;
			if(history.pushState)
			{
				history.pushState(null,null,href)
			}
			$('#main-content').load(href+' #main-content',function(){init_ajax_profile_tabs()}
		)}
	)}
	init_ajax_profile_tabs()
});
