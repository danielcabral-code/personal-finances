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
        currencyContainer.innerHTML = `<p>USD ${usdConvert}</p><p>GBP ${gbpConvert}</p>`

    } else if (selectedCurrency === "USD") {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,GBP`)
        myJson = await response.json()
        euroConvert = Math.floor(myJson.rates.EUR * 100) * value / 100
        gbpConvert = Math.floor(myJson.rates.GBP * 100) * value / 100
        currencyContainer.innerHTML = `<p>EUR ${euroConvert}</p><p>GBP ${gbpConvert}</p>`

    } else {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,USD`)
        myJson = await response.json()
        euroConvert = Math.floor(myJson.rates.EUR * 100) * value / 100
        usdConvert = Math.floor(myJson.rates.USD * 100) * value / 100
        currencyContainer.innerHTML = `<p>EUR ${euroConvert}</p><p>USD ${usdConvert}</p>`
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
        document.querySelector(".moneyAndSymbol").style.color = "green"
    } else {
        document.querySelector(".moneyAndSymbol").style.color = "red"
    }
} else {
    money;
}

// Função que verifica se o utilizador está a tentar carregar no saldo um valor negativo 
function checkNegativeValue() {

    let value = parseFloat(document.getElementById("addMoney").value);
    if (value < 0) {
        alert("Não são permitidos valores negativos aqui");
        document.querySelector("#addMoney").value = 0
    }
}

// Botão que acrescenta o saldo do utilizador; verifica depois de acrescentar se o saldo está negativo ou positivo.
btnAddMoney.addEventListener("click", function () {

    checkNegativeValue();
    let mon = +document.querySelector("#currentMoney").value
    let actmon = +document.querySelector("#addMoney").value

    sum = mon + actmon

    document.querySelector("#currentMoney").value = sum

    money += parseInt(document.getElementById("addMoney").value)
    localStorage.setItem("money", JSON.stringify(money))

    if (money >= 0) {
        document.querySelector("#currentMoney").style.color = "green"
    } else {
        document.querySelector("#currentMoney").style.color = "red"
    }
    document.querySelector("#addMoney").value = null
})