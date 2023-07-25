const fieldText = document.querySelector('#fieldText')
const upperBTN = document.querySelector('.upperCaseToLowerCaseBTN')
const lowerBTN = document.querySelector('.lowerCaseToUpperCaseBTN')
const firstLBTN = document.querySelector('.firstLetterBTN')

function firstEachLetter() {
    let fieldTextValue = (fieldText.value ).toLowerCase()
    const textArr = fieldTextValue.split(' ')
    let firstLetterUpperCaseTransform = []
    for(let firstLetterUpper in textArr) {
        let transformText = (textArr[firstLetterUpper][0]).toUpperCase()
        let restText = textArr[firstLetterUpper].slice(1)
        firstLetterUpperCaseTransform.push(`${transformText}${restText}`)
    }
    let firstLetterTransform = firstLetterUpperCaseTransform.join(' ')
    fieldText.value = firstLetterTransform
}
function lowerToUpper() {
    let fieldTextValue = fieldText.value
    const upperCaseTotal = String(fieldTextValue).toUpperCase()
    return fieldText.value= upperCaseTotal
}
function upperToLower() {
    let fieldTextValue = fieldText.value
    const lowerCaseTotal = String(fieldTextValue).toLowerCase()
    return fieldText.value= lowerCaseTotal
} 
firstLBTN.addEventListener('click', firstEachLetter)
lowerBTN.addEventListener('click', lowerToUpper)
upperBTN.addEventListener('click', upperToLower)