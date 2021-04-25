const pwLengthVal = document.getElementById('pwLength')
const pwLowerVal = document.getElementById('pwLower')
const pwNumberVal = document.getElementById('pwNumber')
const pwUpperVal = document.getElementById('pwUpper')
const pwSpecialVal = document.getElementById('pwSpecial')

const form = document.getElementById('pwGenform')

const UP_CHARCODES = arrayFromLowToHigh(65, 90)
const LOW_CHARCODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHARCODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHARCODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

// pwLength.addEventListener('input')

form.addEventListener('submit', e => {
    e.preventDefault()
    const pwLength = pwLengthVal.value
    const pwLower = pwLowerVal.checked
    const pwNumber = pwNumberVal.checked
    const pwUpper = pwUpperVal.checked
    const pwSpecial = pwSpecialVal.checked
    const password = generatePassword(pwLength, pwLower, pwNumber, pwUpper, pwSpecial)
})

function generatePassword(pwLength, pwLower, pwUpper, pwSpecial) {
    if (pwLower) charCodes = charCodes.concat(pwLower)
    if (pwUpper) charCodes = charCodes.concat(pwUpper)
    if (pwNumber) charCodes = charCodes.concat(pwNumber)
    if (pwSpecial) charCodes = charCodes.concat(pwSpecial)
    
    const pwCharacters = []
    for (let i = 0; i < pwLength; i++) {
        const character = charCodes[Math.floor(Math.random() * pwLength)]
        pwCharacters.push(character)
    }
    
    console.log(UP_CHARCODES)
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array

}