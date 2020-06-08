addColumnName=(columnName,thead)=>{
    th=document.createElement('th')
    th.innerText=columnName
    thead.children[0].appendChild(th)
}

addColumn=(colName,table)=>{
    thead=table.children[0]
    tbody=table.children[1]

    addColumnName(colName,thead)

    rows=tbody.children
    rows=slice(rows,1)
    rows.forEach((row)=>{
        td=document.createElement('td')
        row.appendChild(td)
    })
}

addColumns=(colNames,table)=>{
    colNames.forEach((name)=>{
        addColumn(name,table)
    })
}