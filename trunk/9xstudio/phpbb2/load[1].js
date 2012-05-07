//
<!--
Dim Bar, Line, SP
Bar = 0
Line = "|"
SP = 100
Function Window_onLoad()
Bar = 95
SP = 10
End Function
Function Count()
If Bar < 100 Then
Bar = Bar + 1
Window.Status = "Website  Đang Tải Về  " & Bar & "%" & " " & String(Bar, Line)
setTimeout "Count()", SP
Else
Window.Status = "|He Thong Am Nhac Tinh Ban Thuoc Website wWw.letrieuthien.com | Chuc Moi Nguoi Vui Ve |"
Document.Body.Style.Display = ""
End If
End Function
Call Count()
-->
