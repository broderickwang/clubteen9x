<?php
//////////////////////////////////////////
///    PHP Tool hỗ trợ chèn nhạc !     ///
///    HNVT V2                         ///
///    Develop by Error!               ///
///    Website : Hanoivatoi.com        ///
///    Yahoo :   Error_vnw             ///
//////////////////////////////////////////
header("Content-Type: application/xml; charset=utf-8");
$string = $_GET['id'];
function grab_link($url,$type)
{
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HEADER, $type);
$result = curl_exec($ch);
curl_close($ch);
return $result;
}
    $url= grab_link('http://www.nhaccuatui.com/l/'.$string,1);
    
 $xml= explode ('?file=',$url);
$xml = trim ($xml[1]);

    $data = str_replace(array("<![CDATA[","]]>"),"",file_get_contents($xml));
$link=explode('<location>',$data);
$link=explode('</location>',$link[1]);
    $song = explode('<track>',$data);
    
    $xml = '<?xml version="1.0" encoding="utf-8"?>
    <playlist version="1" xmlns="http://xspf.org/ns/0/"><trackList>';
    for($i=0;$i<count($song);$i++)
    {
    if(preg_match('#<title>(.*?)<\/title>(.*?)<creator>(.*?)<\/creator>(.*?)<location>(.*?)<\/location>#is',$song[$i],$name))
$xml .= '<track>'.
'<annotation>'.htmlspecialchars($name[3]).' </annotation>'.
'<location>'.htmlspecialchars($name[5]).'</location>'.
'</track>';
}    
    $xml .='</trackList></playlist>';

    echo $xml;
?>








