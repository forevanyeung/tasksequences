Function Get-TaskSequenceData($TaskSequenceID) {
    $folder = 'tasksequence1'
    $path = "$folder/SMS_TaskSequencePackage/RSC002A6/object.xml"

    # save for later use
    # $start = ""
    # $stop = ""

    $xpath = '/INSTANCE[@CLASSNAME="SMS_TaskSequencePackage"]//PROPERTY[@NAME="Sequence"]/VALUE'
    $sequenceXML = Select-Xml -Path $path -XPath $xpath
    $sequenceXML = [xml]$sequenceXML.Node.InnerText

    $validNodes = @("group", "step", "subtasksequence")
    $sequenceXML = $sequenceXML.sequence.ChildNodes | Where-Object { $_.LocalName -in $validNodes }

    # maxiumum depth of ConvertTo-Json is 100, https://github.com/PowerShell/PowerShell/issues/8393
    ConvertTo-TaskSequenceJSON -XML $sequenceXML | ConvertTo-Json -Depth 100
}

Get-TaskSequenceData