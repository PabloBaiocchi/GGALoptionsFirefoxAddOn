getSpotPrice=()=>{
    element=document.getElementById('IdTitulo')
    priceString=element.innerText
    priceString=priceString.substring(priceString.indexOf(' '))
    return numStringToFloat(priceString)
}