vào ACP -> dislay -> structure and hierarchy -> chọn medium ở dưới ( ở phần Split categories on index : ). ớ dưới cùng Sub-level links on index : chọn With pics
vào index box tìm

```

{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

```
thay bằng

```

<div id="smallrum">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}

Unknown end tag for &lt;/div&gt;


```

cuối cùng thêm vào CSS :

```

#smallrum{padding: 0.4em 1em;margin: 3px 1px; background: none; -webkit-box-shadow: -0px 0px 0px #ffffff;box-shadow: -0px 0px 0px #ffffff;color: #ffffff;width: 360px;} #smallrum a img{vertical-align: middle; padding-right: 2px;} #smallrum a.gensmall { display: inline-block; text-align: left; width: 160px; }

```