Ghi chú: Hướng dẫn này sẽ giúp bạn tạo nút chia sẽ ở tất cả các trang trong diễn đàn mà không cần sử dụng plugin của mạng xã hội đó.

Demo: ![http://i48.servimg.com/u/f48/16/58/89/73/3-21-210.jpg](http://i48.servimg.com/u/f48/16/58/89/73/3-21-210.jpg)

Hướng dẫn:
ACP - Display - Templates - Ganeral - Overall\_header (hoặc Overall\_footer\_begin)
Đặt code vào vị trí muốn hiển thị.

> Yahoo! Messager

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" title="Gửi trang này cho bạn bè qua yahoo" href="ymsgr:im?+&msg=Xem trang này hay lắm nè: {PAGE_TITLE} - ' + location.href + '"><img border="0" src="http://i48.servimg.com/u/f48/16/58/89/73/yahoo10.png" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;



```
> Zing Me

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://link.apps.zing.vn/share?url=' + location.href + '&t={PAGE_TITLE}&desc={SITENAME_TITLE}&images={LOGO}&media=&width=0&height=0" title="Chia sẻ lên Zing Me"><img src="http://i48.servimg.com/u/f48/16/58/89/73/zing10.png" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;



```
> Mạng Việt Nam

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://my.go.vn/GoShare.aspx?url=' + location.href + '&amp;title={PAGE_TITLE}&amp;picture={LOGO}&amp;message={SITENAME_TITLE}" title="Go.vn"><img src="http://my.go.vn/img/go.vn20x20.gif" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;


```

> Mạng bạn bè

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://plugins.banbe.net/share/post?href=' + location.href + '&title={PAGE_TITLE}&feed_img={LOGO}" title="banbe.net"><img src="http://ngoisao.net/Images/icon/icon-ban-be.jpg" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;


```

> Yume

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://yume.vn/share_partners/link?u=' + location.href + '&t={PAGE_TITLE}http://static2.tailieu.vn/08052011j/images/icons/ico16x16_05.gif" title="Chia sẽ lên Yume"><img src="http://i48.servimg.com/u/f48/16/58/89/73/logo_610.png" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;



```
> Link hay

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://linkhay.com/submit?link_url=' + location.href + '&link_title={PAGE_TITLE}" title="Chia sẽ lên Link hay"><img src="http://linkhay.com/templates/images/guide/button5.jpg" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;


```

> Google Bookmark

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="https://www.google.com.vn/bookmarks/mark?op=edit&output=popup&bkmk=' + location.href + '&title={PAGE_TITLE}&annotation=" title="Bookmark lên Google"><img src="http://i48.servimg.com/u/f48/16/58/89/73/bookma10.gif" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;


```

> Facebook

```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://www.facebook.com/share.php?u=' + location.href + '" title="Chia sẽ lên Facebook"><img src="http://i48.servimg.com/u/f48/16/58/89/73/facebo10.png" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;



```
> Twitter
```

<script type="text/javascript">
document.write('<a style="padding: 0 5px" target="_blank" href="http://twitter.com/share?url=' + location.href + '&via=AddThis&text={PAGE_TITLE}" title="Chia sẻ lên Twitter"><img src="http://i48.servimg.com/u/f48/16/58/89/73/01690_10.png" />

Unknown end tag for &lt;/a&gt;

')


Unknown end tag for &lt;/script&gt;


```

> ... sẽ cập nhật thêm.
