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

//coloca a data com o mes/ano atual
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
  foodBudgetLabel.innerHTML = ` ${foodBudget.value}€`
  homeBudgetLabel.innerHTML = ` ${homeBudget.value}€`
  lazerBudgetLabel.innerHTML = ` ${lazerBudget.value}€`
  healthBudgetLabel.innerHTML = ` ${healthBudget.value}€`
  vehicleBudgetLabel.innerHTML = ` ${vehicleBudget.value}€`
  totalMaxBudget.innerHTML = ` ${+foodBudget.value + +homeBudget.value + +lazerBudget.value + +healthBudget.value + +vehicleBudget.value}€`
})

let expenses;

if (localStorage.getItem('expenses')) {
  expenses = JSON.parse(localStorage.getItem('expenses'))
  console.log(expenses);
  console.log(expenses[0].date);
  
}

let dataPick = document.getElementById("date");

//função que ou mete os valores dos inputs a zero, ou, lê os dados da local storage caso existam
dataPick.onchange = function () {

  let savedItem;
  let compareDate = document.querySelector("#date").value;
  for (let i = 0; i < expenses.length; i++) {
    savedItem = expenses[i];

    if (savedItem.date === compareDate) {
      console.log("ola");
      
      foundDate = true;
      break;
    }
  }
}