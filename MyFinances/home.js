


let currencyContainer=document.getElementById("test")
let currency = document.getElementById("currency")
let selectedCurrency


async function convert() {
    selectedCurrency = currency.options[currency.selectedIndex].text

    if (selectedCurrency === "EUR") {

        const response = await fetch(`https://api.exchangeratesapi.io/latest?&symbols=USD,GBP`)
        myJson = await response.json()

        console.log(myJson);
        console.log(selectedCurrency);
        currencyContainer.innerHTML=`<p>USD ${Math.floor(myJson.rates.USD*100)/100}</p><p>GBP ${Math.floor(myJson.rates.GBP*100)/100}</p>`

    } 
    else if (selectedCurrency==="USD") {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,GBP`)
        myJson = await response.json()

        console.log(myJson);


        console.log(selectedCurrency);
        currencyContainer.innerHTML=`<p>EUR ${Math.floor(myJson.rates.EUR*100)/100}</p><p>GBP ${Math.floor(myJson.rates.GBP*100)/100}</p>`
    }
    else{
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=EUR,USD`)
        myJson = await response.json()

        console.log(myJson);


        console.log(selectedCurrency);
        currencyContainer.innerHTML=`<p>EUR ${Math.floor(myJson.rates.EUR*100)/100}</p><p>USD ${Math.floor(myJson.rates.USD*100)/100}</p>`
    }



}


convert();

let money = 0

if (localStorage.getItem('money')) {
    money = JSON.parse(localStorage.getItem('money'))
    document.querySelector("#currentMoney").value = money

    if (money >= 0) {

        document.querySelector("#currentMoney").style.color = "green"
    } else {
        document.querySelector("#currentMoney").style.color = "red"
    }
} else {
    money
}


let btnAddMoney = document.getElementById("btnAddMoney")

btnAddMoney.addEventListener("click", function () {

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