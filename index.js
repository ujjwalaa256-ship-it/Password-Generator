
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const symbol = document.querySelector("#symbols")
const upperCase = document.querySelector("#uppercase")
const Numbers = document.querySelector("#numbers")
const copy = document.querySelector("#copybtn")

form.addEventListener(`submit`, (e) => {
    e.preventDefault()

    let uppercheck = "ASDFGHHJKLLPIUYTREZXCVBNM"
    let symbolcheck = "!@#$%^&*()?/_-"
    let numbercheck = "1234567890"


    let char = "asdfghjkweyuiocvbnm"

    if (uppercheck && upperCase.checked) {
        char += uppercheck
    }
    if (numbercheck && Numbers.checked) {
        char += numbercheck
    }
    if (symbolcheck && symbol.checked) {
        char += symbolcheck
    }



    let generatePassword = ""

    let passwaorLength = 14


    for (let i = 0; i < passwaorLength; i++) {
        let randomIndex = Math.floor(Math.random() * char.length)

        generatePassword += char[randomIndex]
    }

    input.value = generatePassword



});


copy.addEventListener(`click`, () => {

    const originalContent = copy.innerHTML

    navigator.clipboard.writeText(input.value)

    if (input.value === "") {
        copy.innerHTML = "No password"
    } else {
        copy.innerHTML = "Password Copied"

    }

    setTimeout(() => {
        copy.innerHTML = originalContent;
    }, 1000)


})





