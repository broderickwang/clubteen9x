Hôm nay rảnh rỗi viết được bộ rank này lấy tên là Smooth, chia ra làm 4 kiểu để anh em chọn và xài cho dễ.

-1: Bộ rank thứ nhất có dùng phông chữ để làm đẹp
Demo ảnh:![http://i1245.photobucket.com/albums/gg587/vhuyphong/jerum/rank-set-1.png](http://i1245.photobucket.com/albums/gg587/vhuyphong/jerum/rank-set-1.png)

Demo sống: http://jerm-hub.jforum.biz/h4-smooth-1
Cách dùng:
Vì dùng phông nên để code này vô trước thẻ 

Unknown end tag for &lt;/head&gt;

 trong overall\_header mới hiện dc phông:

```

<link href='http://fonts.googleapis.com/css?family=Sansita+One' rel='stylesheet' type='text/css'>
```

HTML: chọn và thay vào phần Tiêu đề cấp bậc ở QLND&QLN - Cấp bậc - quản lý cấp bậc - Ấn edit ở rank muốn sửa, code đây (mỗi dòng là 1 rank):

```

<span class="the-rank designer"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Designer

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank administrator"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Administrator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank supermod"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Super Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank modera"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank member"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Member

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank coder"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Coder

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank banned"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Banned

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;


```

CSS:

```

.the-rank {margin:6px;margin-bottom: 14px;
display:block;
border-radius: 4px;
font: 13px 'Sansita One', cursive;
}
#lstar {padding: 2px;padding-right:4px;display: inline;}
#rstar {padding: 2px;padding-left:4px;display: inline;}
#rkct {padding:8px;line-height:10px;display:inline-block;}
.designer{max-width:94px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #00e450 00%, #00ab3c 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.designer #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.designer #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.administrator{min-width:128px;width:125px;max-width:145px;box-shadow: 0px 0px 5px #ff0000;
border: 1px solid #800000;color: #770000;text-shadow: 0px 1px 0px #f70000;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #ea0606 00%, #c80000 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.administrator #lstar {background: #800000;box-shadow: 1px 0px 0px #f70000;}
.administrator #rstar {background: #800000;box-shadow: -1px 0px 0px #f70000;}
.supermod{max-width:148px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #0ec800 00%, #0b9500 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.supermod #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.supermod #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.modera{max-width:107px;box-shadow: 0px 0px 5px #1036ed;
border: 1px solid #061354;color: #061354;text-shadow: 0px 1px 0px #1c39c9;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #233bb6 00%, #14257b 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.modera #lstar {background: #061354;box-shadow: 1px 0px 0px #1c39c9;}
.modera #rstar {background: #061354;box-shadow: -1px 0px 0px #1c39c9;}
.member{max-width:90px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3d3d3d;color: #3d3d3d;text-shadow: 0px 1px 0px #cccccc;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #bbbbbb 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.member #lstar {background: #3d3d3d;box-shadow: 1px 0px 0px #cccccc;}
.member #rstar {background: #3d3d3d;box-shadow: -1px 0px 0px #cccccc;}
.coder{max-width:76px;box-shadow: 0px 0px 5px #ff7e00;
border: 1px solid #603812;color: #603812;text-shadow: 0px 1px 0px #ff7e00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #f07f11 00%, #b96514 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.coder #lstar {background: #603812;box-shadow: 1px 0px 0px #ff7e00;}
.coder #rstar {background: #603812;box-shadow: -1px 0px 0px #ff7e00;}
.banned{max-width:85px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3b3b3b;color: #3b3b3b;text-shadow: 0px 1px 0px #949494;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #494949 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.banned #lstar {background: #3b3b3b;box-shadow: 1px 0px 0px #949494;}
.banned #rstar {background: #3b3b3b;box-shadow: -1px 0px 0px #949494;}

```

-2: Bộ rank thứ hai cũng dùng phông chữ để làm đẹp và rộng bằng nhau


Demo sống: http://jerm-hub.jforum.biz/h5-smooth-2

Vì dùng phông nên để code này vô trước thẻ 

Unknown end tag for &lt;/head&gt;

 trong overall\_header mới hiện dc phông:

```

<link href='http://fonts.googleapis.com/css?family=Sansita+One' rel='stylesheet' type='text/css'>
```


HTML: chọn và thay vào phần Tiêu đề cấp bậc ở QLND&QLN - Cấp bậc - quản lý cấp bậc - Ấn edit ở rank muốn sửa, code đây (mỗi dòng là 1 rank):

```

<span class="the-rank designer"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Designer

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank administrator"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Administrator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank supermod"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Super Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank modera"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank member"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Member

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank coder"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Coder

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank banned"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Banned

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;


```

CSS:

```

.the-rank {margin:6px;margin-bottom: 14px;
display:block;
border-radius: 4px;
font: 13px 'Sansita One', cursive;
}
#lstar {padding: 2px;padding-right:4px;display: inline;}
#rstar {padding: 2px;padding-left:4px;display: inline;}
.designer{max-width:148px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #00e450 00%, #00ab3c 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.designer #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.designer #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.designer #rkct {padding:8px;padding-left: 35px;padding-right: 35px;line-height:10px;display:inline-block;}
.administrator{min-width:148px;width:125px;max-width:145px;box-shadow: 0px 0px 5px #ff0000;
border: 1px solid #800000;color: #770000;text-shadow: 0px 1px 0px #f70000;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #ea0606 00%, #c80000 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.administrator #lstar {background: #800000;box-shadow: 1px 0px 0px #f70000;}
.administrator #rstar {background: #800000;box-shadow: -1px 0px 0px #f70000;}
.administrator #rkct {padding:8px;padding-left: 18px;padding-right: 18px;line-height:10px;display:inline-block;}
.supermod{max-width:148px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #0ec800 00%, #0b9500 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.supermod #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.supermod #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.supermod #rkct {padding:8px;line-height:10px;display:inline-block;}
.modera{max-width:148px;box-shadow: 0px 0px 5px #1036ed;
border: 1px solid #061354;color: #061354;text-shadow: 0px 1px 0px #1c39c9;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #233bb6 00%, #14257b 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.modera #lstar {background: #061354;box-shadow: 1px 0px 0px #1c39c9;}
.modera #rstar {background: #061354;box-shadow: -1px 0px 0px #1c39c9;}
.modera #rkct {padding:8px;padding-left: 28px;padding-right: 29px;line-height:10px;display:inline-block;}
.member{max-width:148px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3d3d3d;color: #3d3d3d;text-shadow: 0px 1px 0px #cccccc;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #bbbbbb 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.member #lstar {background: #3d3d3d;box-shadow: 1px 0px 0px #cccccc;}
.member #rstar {background: #3d3d3d;box-shadow: -1px 0px 0px #cccccc;}
.member #rkct {padding:8px;padding-left: 37px;padding-right: 37px;line-height:10px;display:inline-block;}
.coder{max-width:148px;box-shadow: 0px 0px 5px #ff7e00;
border: 1px solid #603812;color: #603812;text-shadow: 0px 1px 0px #ff7e00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #f07f11 00%, #b96514 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.coder #lstar {background: #603812;box-shadow: 1px 0px 0px #ff7e00;}
.coder #rstar {background: #603812;box-shadow: -1px 0px 0px #ff7e00;}
.coder #rkct {padding:8px;padding-left: 44px;padding-right: 44px;line-height:10px;display:inline-block;}
.banned{max-width:148px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3b3b3b;color: #3b3b3b;text-shadow: 0px 1px 0px #949494;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #494949 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.banned #lstar {background: #3b3b3b;box-shadow: 1px 0px 0px #949494;}
.banned #rstar {background: #3b3b3b;box-shadow: -1px 0px 0px #949494;}
.banned #rkct {padding:8px;padding-left: 39px;padding-right: 40px;line-height:10px;display:inline-block;}

```

-3: bộ rank thứ 3 dùng phông mặc định


Demo sống: http://jerm-hub.jforum.biz/h6-smooth-3

HTML: chọn và thay vào phần Tiêu đề cấp bậc ở QLND&QLN - Cấp bậc - quản lý cấp bậc - Ấn edit ở rank muốn sửa, code đây (mỗi dòng là 1 rank):

```

<span class="the-rank designer"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Designer

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank administrator"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Administrator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank supermod"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Super Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank modera"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank member"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Member

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank coder"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Coder

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank banned"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Banned

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;


```

CSS:

```

.the-rank {margin:6px;margin-bottom: 14px;
display:block;
border-radius: 4px;
font: 13px 'Tahoma', serif;font-weight: bold;
}
#lstar {padding: 2px;padding-right:4px;display: inline;}
#rstar {padding: 2px;padding-left:4px;display: inline;}
#rkct {padding:8px;line-height:10px;display:inline-block;}
.designer{max-width:98px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #00e450 00%, #00ab3c 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.designer #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.designer #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.administrator{min-width:131px;width:125px;max-width:145px;box-shadow: 0px 0px 5px #ff0000;
border: 1px solid #800000;color: #770000;text-shadow: 0px 1px 0px #f70000;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #ea0606 00%, #c80000 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.administrator #lstar {background: #800000;box-shadow: 1px 0px 0px #f70000;}
.administrator #rstar {background: #800000;box-shadow: -1px 0px 0px #f70000;}
.supermod{max-width:152px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #0ec800 00%, #0b9500 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.supermod #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.supermod #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.modera{max-width:110px;box-shadow: 0px 0px 5px #1036ed;
border: 1px solid #061354;color: #061354;text-shadow: 0px 1px 0px #1c39c9;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #233bb6 00%, #14257b 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.modera #lstar {background: #061354;box-shadow: 1px 0px 0px #1c39c9;}
.modera #rstar {background: #061354;box-shadow: -1px 0px 0px #1c39c9;}
.member{max-width:93px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3d3d3d;color: #3d3d3d;text-shadow: 0px 1px 0px #cccccc;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #bbbbbb 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.member #lstar {background: #3d3d3d;box-shadow: 1px 0px 0px #cccccc;}
.member #rstar {background: #3d3d3d;box-shadow: -1px 0px 0px #cccccc;}
.coder{max-width:79px;box-shadow: 0px 0px 5px #ff7e00;
border: 1px solid #603812;color: #603812;text-shadow: 0px 1px 0px #ff7e00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #f07f11 00%, #b96514 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.coder #lstar {background: #603812;box-shadow: 1px 0px 0px #ff7e00;}
.coder #rstar {background: #603812;box-shadow: -1px 0px 0px #ff7e00;}
.banned{max-width:89px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3b3b3b;color: #3b3b3b;text-shadow: 0px 1px 0px #949494;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #494949 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.banned #lstar {background: #3b3b3b;box-shadow: 1px 0px 0px #949494;}
.banned #rstar {background: #3b3b3b;box-shadow: -1px 0px 0px #949494;}

```

-4: bộ rank cuối cũng phông mặc định và rộng bằng nhau


Demo sống: http://jerm-hub.jforum.biz/h7-smooth-4

HTML: chọn và thay vào phần Tiêu đề cấp bậc ở QLND&QLN - Cấp bậc - quản lý cấp bậc - Ấn edit ở rank muốn sửa, code đây (mỗi dòng là 1 rank):

```

<span class="the-rank designer"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Designer

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank administrator"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Administrator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank supermod"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Super Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank modera"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Moderator

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank member"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Member

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank coder"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Coder

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



<span class="the-rank banned"><span id="lstar">

Unknown end tag for &lt;/span&gt;

<span id="rkct">» Banned

Unknown end tag for &lt;/span&gt;

<span id="rstar">

Unknown end tag for &lt;/span&gt;



Unknown end tag for &lt;/span&gt;



```
CSS:

```

.the-rank {margin:6px;margin-bottom: 14px;
display:block;
border-radius: 4px;
font: 13px 'Tahoma', serif;font-weight: bold;
}
#lstar {padding: 2px;padding-right:4px;display: inline;}
#rstar {padding: 2px;padding-left:4px;display: inline;}
.designer{max-width:152px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #00e450 00%, #00ab3c 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.designer #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.designer #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.designer #rkct {padding:8px;padding-left: 35px;padding-right: 35px;line-height:10px;display:inline-block;}
.administrator{min-width:152px;width:125px;max-width:145px;box-shadow: 0px 0px 5px #ff0000;
border: 1px solid #800000;color: #770000;text-shadow: 0px 1px 0px #f70000;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #ea0606 00%, #c80000 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.administrator #lstar {background: #800000;box-shadow: 1px 0px 0px #f70000;}
.administrator #rstar {background: #800000;box-shadow: -1px 0px 0px #f70000;}
.administrator #rkct {padding:8px;padding-left: 18px;padding-right: 18px;line-height:10px;display:inline-block;}
.supermod{max-width:152px;box-shadow: 0px 0px 5px #0db500;
border: 1px solid #006000;color: #006000;text-shadow: 0px 1px 0px #10dc00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #0ec800 00%, #0b9500 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.supermod #lstar {background: #006000;box-shadow: 1px 0px 0px #10dc00;}
.supermod #rstar {background: #006000;box-shadow: -1px 0px 0px #10dc00;}
.supermod #rkct {padding:8px;line-height:10px;display:inline-block;}
.modera{max-width:152px;box-shadow: 0px 0px 5px #1036ed;
border: 1px solid #061354;color: #061354;text-shadow: 0px 1px 0px #1c39c9;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #233bb6 00%, #14257b 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.modera #lstar {background: #061354;box-shadow: 1px 0px 0px #1c39c9;}
.modera #rstar {background: #061354;box-shadow: -1px 0px 0px #1c39c9;}
.modera #rkct {padding:8px;padding-left: 28px;padding-right: 29px;line-height:10px;display:inline-block;}
.member{max-width:152px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3d3d3d;color: #3d3d3d;text-shadow: 0px 1px 0px #cccccc;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #bbbbbb 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.member #lstar {background: #3d3d3d;box-shadow: 1px 0px 0px #cccccc;}
.member #rstar {background: #3d3d3d;box-shadow: -1px 0px 0px #cccccc;}
.member #rkct {padding:8px;padding-left: 37px;padding-right: 37px;line-height:10px;display:inline-block;}
.coder{max-width:152px;box-shadow: 0px 0px 5px #ff7e00;
border: 1px solid #603812;color: #603812;text-shadow: 0px 1px 0px #ff7e00;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #f07f11 00%, #b96514 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.coder #lstar {background: #603812;box-shadow: 1px 0px 0px #ff7e00;}
.coder #rstar {background: #603812;box-shadow: -1px 0px 0px #ff7e00;}
.coder #rkct {padding:8px;padding-left: 44px;padding-right: 44px;line-height:10px;display:inline-block;}
.banned{max-width:152px;box-shadow: 0px 0px 5px #666666;
border: 1px solid #3b3b3b;color: #3b3b3b;text-shadow: 0px 1px 0px #949494;
background-image: -o-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -moz-linear-gradient(top, #494949 00%, #8d8d8d 100%);
background-image: -webkit-linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
background-image: -linear-gradient(top, #e7e7e7 00%, #f1f1f1 01%, #dcdcdc 100%);
}
.banned #lstar {background: #3b3b3b;box-shadow: 1px 0px 0px #949494;}
.banned #rstar {background: #3b3b3b;box-shadow: -1px 0px 0px #949494;}
.banned #rkct {padding:8px;padding-left: 39px;padding-right: 40px;line-height:10px;display:inline-block;}```