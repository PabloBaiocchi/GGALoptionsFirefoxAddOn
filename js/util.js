numStringToFloat=(numString)=>{
    numString=numString.replace('.','')
    numString=numString.replace(',','.')
    return parseFloat(numString)
}

getRows=(tbody)=>{
    return Array.from(tbody.children).filter((element)=>{
        return element.nodeName=='TR'
    })
}