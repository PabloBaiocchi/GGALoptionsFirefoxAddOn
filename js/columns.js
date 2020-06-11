breakEven=(option)=>{
    switch(option.type){
        case 'call':
            return option.sellPrice+option.strikePrice
        case 'put':
            return option.strikePrice-option.sellPrice
    }
}

sellBreakEven={
    colName: 'Sell Break Even',
    operation: (option,spotPrice)=>{
        return breakEven(option)
    }
}

sellBreakEvenGap={
    colName: 'Sell Break Even Gap',
    operation: (option,spotPrice)=>{
        switch(option.type){
            case 'call':
                return breakEven(option)-spotPrice
            case 'put':
                return spotPrice-breakEven(option)
        }
    }
}

processColumns=(columns,spotPrice,options,tables)=>{
    columns.forEach((column,i)=>{
        tables.forEach((table)=>{
            addColumn(column.colName,table)
        })

        options.forEach((option)=>{
            option.row.children[14+i].innerText=column.operation(option,spotPrice).toFixed(2)
        })
    })
}

