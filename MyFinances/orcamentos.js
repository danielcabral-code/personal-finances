/* window.onscroll = function () {
  scrollHeader()
}

const topNav = document.getElementById("homeTopNav");

const sticky = topNav.offsetTop;

function scrollHeader() {
  if (window.pageYOffset > sticky) {
    topNav.classList.add("sticky");
  } else {
    topNav.classList.remove("sticky");
  }
} */

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

// Altera a data para o mês e ano atual
document.querySelector("#date").valueAsDate = new Date();

// Botão guardar orçamentos
saveButton = document.querySelector(".saveButtonTotal")
let foodBudget = document.getElementById("foodBudget")
let foodBudgetLabel = document.getElementById("alimentacaoMaxBudget")
let homeBudget = document.getElementById("homeBudget")
let homeBudgetLabel = document.getElementById("habitacaoMaxBudget")
let lazerBudget = document.getElementById("entertainmentBudget")
let lazerBudgetLabel = document.getElementById("lazerMaxBudget")
let healthBudget = document.getElementById("healthBudget")
let healthBudgetLabel = document.getElementById("saudeMaxBudget")
const vehicleBudget = document.getElementById("vehicleBudget")
const vehicleBudgetLabel = document.getElementById("vehicleMaxBudget")

saveButton.addEventListener("click", function () {
  foodBudgetLabel.value = foodBudget.value
  homeBudgetLabel.value = homeBudget.value
  lazerBudgetLabel.value = lazerBudget.value
  healthBudgetLabel.value = healthBudget.value
  vehicleBudgetLabel.value = vehicleBudget.value
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}`
  checkOverflow()
})

// Escolher cor das despesas conforme ultrapasse ou não o orçamento - não funciona ainda
function checkOverflow() {
  if (+actualExpenseFood.value > +foodBudgetLabel.value) {
    actualExpenseFood.style.color = "red"
  } else if (+actualExpenseFood.value <= +foodBudgetLabel.value) {
    actualExpenseFood.style.color = "green"
  }
}

// Dados para posteriormente carregar valores
let date = document.getElementById("date");
let expensesData = JSON.parse(localStorage.getItem('expenses'))

let actualExpenseFood = document.getElementById("food")
let actualExpenseHome = document.getElementById("home")
let actualExpenseEntertainment = document.getElementById("entertainment")
let actualExpenseHealth = document.getElementById("health")
let actualExpenseVehicle = document.getElementById("vehicle")
let totalActual = document.getElementById("totalActual")

// Carrega valores quando se abre a página
window.onload = function () {
  for (let i = 0; i < expensesData.length; i++) {

    let savedItem = expensesData[i];

    if (savedItem.date === date.value && (
        savedItem.generalFood > 0 || savedItem.restaurant > 0 ||
        savedItem.electricity > 0 || savedItem.water > 0 || savedItem.income > 0 || savedItem.internet > 0 || savedItem.otherHousePay > 0 ||
        savedItem.movies > 0 || savedItem.sports > 0 || savedItem.gym > 0 || savedItem.nightOut > 0 || savedItem.trip > 0 ||
        savedItem.pharm > 0 || savedItem.doctor > 0 || savedItem.otherHealthPay > 0 ||
        savedItem.fuel > 0 || savedItem.carMaintenance > 0 || savedItem.carInsurance > 0 || savedItem.carFine > 0)) {

      actualExpenseFood.value = savedItem.generalFood + savedItem.restaurant;
      actualExpenseHome.value = savedItem.electricity + savedItem.water + savedItem.income + savedItem.internet + savedItem.otherHousePay;
      actualExpenseEntertainment.value = savedItem.movies + savedItem.sports + savedItem.gym + savedItem.nightOut + savedItem.trip;
      actualExpenseHealth.value = savedItem.pharm + savedItem.doctor + savedItem.otherHealthPay;
      actualExpenseVehicle.value = savedItem.fuel + savedItem.carMaintenance + savedItem.carInsurance + savedItem.carFine;
      totalActual.innerHTML = ` ${+actualExpenseFood.value + +actualExpenseHome.value + +actualExpenseEntertainment.value + +actualExpenseHealth.value + +actualExpenseVehicle.value}`;
      break;

    } else if (savedItem.date !== date.value) {
      actualExpenseFood.value = 0;
      actualExpenseHome.value = 0;
      actualExpenseEntertainment.value = 0;
      actualExpenseHealth.value = 0;
      actualExpenseVehicle.value = 0;
    }
  }
  checkOverflow()
}

// Carrega valores de cada mês
date.onchange = function () {
  for (let i = 0; i < expensesData.length; i++) {

    let savedItem = expensesData[i];

    if (savedItem.date === date.value && (
        savedItem.generalFood > 0 || savedItem.restaurant > 0 ||
        savedItem.electricity > 0 || savedItem.water > 0 || savedItem.income > 0 || savedItem.internet > 0 || savedItem.otherHousePay > 0 ||
        savedItem.movies > 0 || savedItem.sports > 0 || savedItem.gym > 0 || savedItem.nightOut > 0 || savedItem.trip > 0 ||
        savedItem.pharm > 0 || savedItem.doctor > 0 || savedItem.otherHealthPay > 0 ||
        savedItem.fuel > 0 || savedItem.carMaintenance > 0 || savedItem.carInsurance > 0 || savedItem.carFine > 0)) {

      actualExpenseFood.value = savedItem.generalFood + savedItem.restaurant;
      actualExpenseHome.value = savedItem.electricity + savedItem.water + savedItem.income + savedItem.internet + savedItem.otherHousePay;
      actualExpenseEntertainment.value = savedItem.movies + savedItem.sports + savedItem.gym + savedItem.nightOut + savedItem.trip;
      actualExpenseHealth.value = savedItem.pharm + savedItem.doctor + savedItem.otherHealthPay;
      actualExpenseVehicle.value = savedItem.fuel + savedItem.carMaintenance + savedItem.carInsurance + savedItem.carFine;
      totalActual.innerHTML = ` ${+actualExpenseFood.value + +actualExpenseHome.value + +actualExpenseEntertainment.value + +actualExpenseHealth.value + +actualExpenseVehicle.value}`;
      break;

    } else if (savedItem.date !== date.value) {
      actualExpenseFood.value = 0;
      actualExpenseHome.value = 0;
      actualExpenseEntertainment.value = 0;
      actualExpenseHealth.value = 0;
      actualExpenseVehicle.value = 0;
    }
  }
  checkOverflow()
}