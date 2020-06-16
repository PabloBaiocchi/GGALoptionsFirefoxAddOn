formatType=(char)=>{
    switch(char){
        case 'C':
            return 'call'
        case 'V':
            return 'put'
    }
}

disectName=(optionName)=>{
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

getOption=(row)=>{
    tds=row.children
    option=disectName(tds[0].innerText)
    option.buyQuantity=parseInt(tds[1].innerText)
    option.buyPrice=numStringToFloat(tds[2].innerText)
    option.sellPrice=numStringToFloat(tds[3].innerText)
    option.sellQuantity=parseInt(tds[4].innerText)
    option.lastOperated=numStringToFloat(tds[5].innerText)   
    option.open=numStringToFloat(tds[7].innerText)
    option.max=numStringToFloat(tds[8].innerText)
    option.min=numStringToFloat(tds[9].innerText)
    option.lastClose=numStringToFloat(tds[10].innerText)
    option.row=row
    return option
}

getOptions=(table)=>{
    tbody=table.getElementsByTagName('tbody')[0]
    rows=getRows(tbody)

    return rows.map((row)=>{
        return getOption(row)
    })
}

hideUnavailable=(options)=>{
    options.forEach((option)=>{
        if(option.sellPrice==0){
            option.row.style.display='none'
        }   
    })
}

hideMonth=(month)=>{
    options.forEach((option)=>{
        if(option.month==month){
            option.row.style.display='none'
        }   
    })
}