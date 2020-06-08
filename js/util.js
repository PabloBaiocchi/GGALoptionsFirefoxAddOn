numStringToFloat=(numString)=>{
    numString=numString.replace('.','')
    numString=numString.replace(',','.')
    return parseFloat(numString)
}

slice=(collection,startIndex)=>{
    output=[]
    for(let i=startIndex;i<collection.length;++i){
        output.push(collection[i])
    }
    return output
}