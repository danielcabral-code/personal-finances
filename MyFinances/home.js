// Variáveis globais
let currencyContainer = document.getElementById("converted")
let currency = document.getElementById("currency")
let selectedCurrency
let euroConvert = 0
let usdConvert = 0
let gbpConvert = 0

// Função que vai buscar os valores da moeda à API e atribui a variáveis consoante a pesquisa do utilizador
async function convert(value) {
    selectedCurrency = currency.options[currency.selectedIndex].text

    if (selectedCurrency === "EUR") {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?&symbols=USD,GBP`)
        myJson = await response.json()
        usdConvert = Math.floor(myJson.rates.USD * 100) * value / 100
        gbpConvert = Math.floor(myJson.rates.GBP * 100) * value / 100
        currencyContainer.innerHTML = `<div>USD:&nbsp;&nbsp;${usdConvert}</div><div>GBP:&nbsp;&nbsp;${gbpConvert}</div>`

    } else if (selectedCurrency === "USD") {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,GBP`)
        myJson = await response.json()
        euroConvert = Math.floor(myJson.rates.EUR * 100) * value / 100
        gbpConvert = Math.floor(myJson.rates.GBP * 100) * value / 100
        currencyContainer.innerHTML = `<div>EUR:&nbsp;&nbsp;${euroConvert}</div><div>GBP:&nbsp;&nbsp;${gbpConvert}</div>`

    } else {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,USD`)
        myJson = await response.json()
        euroConvert = Math.floor(myJson.rates.EUR * 100) * value / 100
        usdConvert = Math.floor(myJson.rates.USD * 100) * value / 100
        currencyContainer.innerHTML = `<div>EUR:&nbsp;&nbsp;${euroConvert}</div><div>USD:&nbsp;&nbsp;${usdConvert}</div>`
    }
}

// Botão que vai executar a função de converter a moeda
doConversion.addEventListener("click", function () {
    let valueToConvert = +document.getElementById("valueToConvert").value
    convert(valueToConvert);
})

// Verificação se o localStorage onde é guardado o saldo do utilizador existe; se existir é carregado senão é criado um novo com o valor de 0
// Aplica cor vermnelha se estiver negativo e cor verde se estiver positivo ou 0
let money = 0
if (localStorage.getItem('money')) {

    money = JSON.parse(localStorage.getItem('money'))
    document.querySelector("#currentMoney").value = money

    if (money >= 0) {
        document.querySelector(".middleInput").style.color = "green"
    } else {
        document.querySelector(".middleInput").style.color = "red"
    }
} else {
    money;
}

// Botão que acrescenta o saldo do utilizador; verifica depois de acrescentar se o saldo está negativo ou positivo
btnAddMoney.addEventListener("click", function () {

    let mon = document.querySelector("#currentMoney").value
    let addMoney = document.querySelector("#addMoney").value

    if (!addMoney) {
        addMoney = 0
    } else {
        sum = Number(mon) + Number(addMoney)
        document.querySelector("#currentMoney").value = sum

        money += parseInt(document.getElementById("addMoney").value)
        localStorage.setItem("money", JSON.stringify(money))

        if (money >= 0) {
            document.querySelector("#currentMoney").style.color = "green"
        } else {
            document.querySelector("#currentMoney").style.color = "red"
        }
        document.querySelector("#addMoney").value = null
    }
})