// Função para o botão collapse do Total
let collTotal = document.getElementsByClassName("collapsibleTotal");
let iTotal;

for (iTotal = 0; iTotal < collTotal.length; iTotal++) {
  collTotal[iTotal].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

// Função para o botão collapse
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

// Somas orçamento total -> Alimentação
btnFood = document.getElementById("btnFood")
let foodBudget = document.getElementById("foodBudget")
let foodBudgetLabel = document.getElementById("alimentacaoMaxBudget")

btnFood.addEventListener("click", function () {

  foodBudgetLabel.innerHTML = ` ${foodBudget.value}€`
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}€`

})

// Somas orçamento total -> Habitação
btnHome = document.getElementById("btnHome")
let homeBudget = document.getElementById("homeBudget")
let homeBudgetLabel = document.getElementById("habitacaoMaxBudget")

btnHome.addEventListener("click", function () {

  homeBudgetLabel.innerHTML = ` ${homeBudget.value}€`
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}€`

})

// Somas orçamento total -> Lazer
btnLazer = document.getElementById("btnLazer")
let lazerBudget = document.getElementById("entertainmentBudget")
let lazerBudgetLabel = document.getElementById("lazerMaxBudget")

btnLazer.addEventListener("click", function () {

  lazerBudgetLabel.innerHTML = ` ${lazerBudget.value}€`
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}€`

})

// Somas orçamento total -> Saúde
btnSaude = document.getElementById("btnHealth")
let healthBudget = document.getElementById("healthBudget")
let healthBudgetLabel = document.getElementById("saudeMaxBudget")

btnSaude.addEventListener("click", function () {

  healthBudgetLabel.innerHTML = ` ${healthBudget.value}€`
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}€`

})

// Somas orçamento total -> Veículo
btnVehicle = document.getElementById("btnVehicle")
const vehicleBudget = document.getElementById("vehicleBudget")
const vehicleBudgetLabel = document.getElementById("vehicleMaxBudget")

btnVehicle.addEventListener("click", function () {

  vehicleBudgetLabel.innerHTML = ` ${vehicleBudget.value}€`
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}€`

})

let totalMaxBudget = document.getElementById("totalMaxBudget")