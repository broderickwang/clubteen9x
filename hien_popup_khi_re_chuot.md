Đầu tiên, thêm đoạn sau vào css

```


.thumbnail{position: relative;z-index: 0;}.thumbnail:hover{background-color: transparent;z-index: 50;}.thumbnail span{ /*CSS for enlarged image*/position: absolute;background-color: lightyellow;padding: 5px;left: -1000px;border: 1px dashed black;visibility: hidden;color: black;text-decoration: none;}.thumbnail span img{ /*CSS for enlarged image*/border-width: 0;padding: 2px;}.thumbnail:hover span{ /*CSS for enlarged image on hover*/visibility: visible;top: 0;left: 150px; /*position where enlarged image should offset horizontally */}


```
chỉ cần hiểu 1 chút tiếng Anh, có thể tùy chỉnh css trên theo chú thích.

Bước 2, thêm liên kết kèm ảnh.


```

<a class="thumbnail" href="link liên kết"> text hoặc ảnh hiển thị (nếu là ảnh thì phải là code ảnh hẳn hòi)<span><img src="link ảnh muốn hiện ra" /><br />Chú thích nếu muốn

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/a&gt;




```

Ứng dụng đưa vào nút + -:


```


<a class="thumbnail" href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}">+
<span>Mình thích bài viết này<br>
<img src=/users/2315/72/47/45/smiles/90652.gif>    

Unknown end tag for &lt;/span&gt;




Unknown end tag for &lt;/a&gt;



```

Trong đó
{postrow.displayed.switch\_vote\_active.switch\_vote.U\_VOTE\_PLUS} là link bầu chọn +
+ là text hiển thị
Mình thích bài viết này <img src='/users/2315/72/47/45/smiles/90652.gif'> là ảnh và chú thích hiện ra.<br>
<br>
Nguồn:<br>
/<b>Credits: Dynamic Drive CSS Library</b>/<br>
/<b>URL: <a href='http://www.dynamicdrive.com/style/'>http://www.dynamicdrive.com/style/</a></b>/