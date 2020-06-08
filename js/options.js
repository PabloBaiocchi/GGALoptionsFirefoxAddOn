formatType=(char)=>{
    switch(char){
        case 'C':
            return 'call'
        case 'V':
            return 'put'
    }
}

getOption=(optionName)=>{
    type=formatType(optionName[3])
    strikePrice=parseFloat(optionName.substring(4,optionName.length-2))
    month=optionName.substring(optionName.length-2)
    return {
        option: optionName,
        type: type,
        strikePrice: strikePrice,
        month: month
    }
}

getOptions=(table)=>{
    tbody=table.getElementsByTagName('tbody')[0]
    rows=tbody.children
    rows=slice(rows,1)

    return rows.map((row)=>{
        option=getOption(row.children[0].innerText)
        option.rowId=option.option
        row.setAttribute('id',option.rowId)
        return option
    })
}