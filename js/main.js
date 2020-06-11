console.log('starting...')

columns=[sellBreakEven,sellBreakEvenGap]

window.addEventListener('load',()=>{
    tables=document.getElementsByTagName('table')
    callTable=tables[1]
    putTable=tables[2]
    
    calls=getOptions(callTable)
    puts=getOptions(putTable)
    options=calls.concat(puts)
    hideUnavailable(options)

    spotPrice=getSpotPrice()

    processColumns(columns,spotPrice,options,[callTable,putTable])
})
