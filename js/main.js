console.log('starting...')
window.addEventListener('load',()=>{
    tables=document.getElementsByTagName('table')
    callTable=tables[1]
    putTable=tables[2]
    newColumns=['Buy Gap','Sell Gap']
    addColumns(newColumns,callTable)
    addColumns(newColumns,putTable)
    calls=getOptions(callTable)
    puts=getOptions(putTable)

    window.setInterval(()=>{
        spotPrice=getSpotPrice()
        updateGaps(calls,spotPrice)
        updateGaps(puts,spotPrice)
    },3000)
})
