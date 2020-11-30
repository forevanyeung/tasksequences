Function ConvertTo-TaskSequenceJSON($XML, [int]$StartID = 0) {
    $sequence = [System.Collections.ArrayList]@()
    foreach($stepXML in $XML) {
        if($stepXML.LocalName -eq "group") {
            $step = [ordered]@{
                id = $StartID
                name = $stepXML.Name
                type = "group"
                children = $(ConvertTo-TaskSequenceJSON -XML $stepXML.ChildNodes -StartID $($StartID+1))
            }

            $StartID += $step.children.count+1
        } else {
            $step = [ordered]@{
                id = $StartID
                name = $stepXML.Name
                type = $stepXML.type
                data = @{}
            }
    
            foreach($prop in $stepXML.defaultVarList.variable) {
                if($prop."#text") {
                    $null = $step.data.Add($prop.name, $prop."#text")
                }
            }

            $StartID++
        }
    
        $null = $sequence.Add($step)
    }
    
    $sequence
}