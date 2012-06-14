<?php
// Get link zing V1.0 by Error!
// Yh : nhocpro_clubteen9x// Website : Http://ClubTeen9x.Us.To	
	
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
    $url= grab_link('http://mp3.zing.vn/'.$string,1);
    
 $xml = explode  ("?xmlURL=",$url);
 $xml = explode  ("&",$xml[1]);
$xml1 =   $xml[0];
$data = str_replace(array("<![CDATA[","]]>"),"",file_get_contents($xml1));
$link=explode('<source>',$data);
$link=explode('</source>',$link[1]);
$song = explode('<item type="mp3">',$data);
    
    $xml = '<?xml version="1.0" encoding="utf-8"?>
    <playlist version="1" xmlns="http://xspf.org/ns/0/"><trackList>';
    for($i=0;$i<count($song);$i++)
    {
    if(preg_match('#<title>(.*?)<\/title>(.*?)<performer>(.*?)<\/performer>(.*?)<source>(.*?)<\/source>#is',$song[$i],$name))
$xml .= '<track>'.
'<creator>'.htmlspecialchars($name[3]).' - '.htmlspecialchars($name[1]).'</creator>'.
'<location>'.htmlspecialchars($name[5].".mp3").'</location>'.
'</track>';
}    
    $xml .='</trackList></playlist>';
    echo $xml;
?>