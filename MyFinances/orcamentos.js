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