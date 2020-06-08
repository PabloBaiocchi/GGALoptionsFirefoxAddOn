computeGapCall=(strikePrice,premium,spotPrice)=>{
    return strikePrice+premium-spotPrice
}

computeGapPut=(strikePrice,premium,spotPrice)=>{
    return spotPrice-strikePrice+premium
}

computeGap=(option,premium,spotPrice)=>{
    switch(option.type){
        case 'call':
            return computeGapCall(option.strikePrice,premium,spotPrice)
        case 'put':
            return computeGapPut(option.strikePrice,premium,spotPrice)
    }
}

toggleVisibility=(row,sellPrice)=>{
    if(sellPrice>0){
        row.style.display='table-row'
        return true
    } 
    row.style.display='none'
    return false
}

updateGaps=(options,spotPrice)=>{
    options.forEach(option => {
        row=document.getElementById(option.rowId)
        sellPrice=numStringToFloat(row.children[3].innerText)
        if(!toggleVisibility(row,sellPrice)){
            return 
        }
        buyPrice=numStringToFloat(row.children[2].innerText)
        buyGapTd=row.children[row.children.length-2]
        sellGapTd=row.children[row.children.length-1]
        buyGapTd.innerText=computeGap(option,buyPrice,spotPrice).toFixed(2)
        sellGapTd.innerText=computeGap(option,sellPrice,spotPrice).toFixed(2)
    });
}

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
