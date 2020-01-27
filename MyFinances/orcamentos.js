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

let date = document.getElementById("date").value;
console.log(date);

//Dados para posteriormente carregar valores
savedDate = document.getElementById("date");
let expensesData = JSON.parse(localStorage.getItem('expenses'))

let actualExpenseFood = document.getElementById("food")
let actualExpenseHome = document.getElementById("home")
let actualExpenseEntertainment = document.getElementById("entertainment")
let actualExpenseHealth = document.getElementById("health")
let actualExpenseVehicle = document.getElementById("vehicle")
let totalActual = document.getElementById("totalActual")


let compareDate = document.querySelector("#date").value

// Carrega valores da localStorage das despesas quando se abre a página
window.onload = function () {
  for (let i = 0; i < expensesData.length; i++) {

    let savedItem = expensesData[i];

    if (savedItem.date === savedDate.value && (
        savedItem.generalFood > 0 || savedItem.restaurant > 0 ||
        savedItem.electricity > 0 || savedItem.water > 0 || savedItem.rent > 0 || savedItem.internet > 0 || savedItem.otherHousePay > 0 ||
        savedItem.movies > 0 || savedItem.sports > 0 || savedItem.gym > 0 || savedItem.nightOut > 0 || savedItem.trip > 0 ||
        savedItem.pharm > 0 || savedItem.doctor > 0 || savedItem.otherHealthPay > 0 ||
        savedItem.fuel > 0 || savedItem.carMaintenance > 0 || savedItem.carInsurance > 0 || savedItem.carFine > 0)) {

      actualExpenseFood.value = savedItem.generalFood + savedItem.restaurant;
      actualExpenseHome.value = savedItem.electricity + savedItem.water + savedItem.rent + savedItem.internet + savedItem.otherHousePay;
      actualExpenseEntertainment.value = savedItem.movies + savedItem.sports + savedItem.gym + savedItem.nightOut + savedItem.trip;
      actualExpenseHealth.value = savedItem.pharm + savedItem.doctor + savedItem.otherHealthPay;
      actualExpenseVehicle.value = savedItem.fuel + savedItem.carMaintenance + savedItem.carInsurance + savedItem.carFine;
      totalActual.innerHTML = ` ${+actualExpenseFood.value + +actualExpenseHome.value + +actualExpenseEntertainment.value + +actualExpenseHealth.value + +actualExpenseVehicle.value}`;
      break;

    } else if (savedItem.date !== savedDate.value) {
      actualExpenseFood.value = 0;
      actualExpenseHome.value = 0;
      actualExpenseEntertainment.value = 0;
      actualExpenseHealth.value = 0;
      actualExpenseVehicle.value = 0;
    }
  }
  checkOverflow()
}

if (localStorage.getItem("budgets")) {
  budgets = JSON.parse(localStorage.getItem("budgets"))

  for (let i = 0; i < budgets.length; i++) {
    const savedItem = budgets[i]



    if (savedItem.date === compareDate) {


      document.getElementById("alimentacaoMaxBudget").value = savedItem.food
      document.querySelector("#habitacaoMaxBudget").value = savedItem.home
      document.querySelector("#lazerMaxBudget").value = savedItem.entertainment
      document.querySelector("#saudeMaxBudget").value = savedItem.health
      document.querySelector("#vehicleMaxBudget").value = savedItem.vehicle


    }
  }
} else {
  budgets = []
}

let sum = 0


// Botão guardar orçamentos



saveBudget.addEventListener("click", function () {

  //calculo do orçamento da alimentação
  let foodBudget = +document.getElementById("foodBudget").value
  console.log(foodBudget);

  let foodMaxBudget = +document.querySelector("#alimentacaoMaxBudget").value
  sum = foodMaxBudget + foodBudget
  document.querySelector("#alimentacaoMaxBudget").value = sum


  //calculo do orçamento da casa
  let homeBudget = +document.getElementById("homeBudget").value
  console.log(homeBudget);
  let homeMaxBudget = +document.querySelector("#habitacaoMaxBudget").value
  sum = homeMaxBudget + homeBudget
  document.querySelector("#habitacaoMaxBudget").value = sum

  //calculo do orçamento do lazer
  let entertainmentBudget = +document.getElementById("entertainmentBudget").value
  console.log(entertainmentBudget);
  let entertainmentMaxBudget = +document.querySelector("#lazerMaxBudget").value
  sum = entertainmentBudget + entertainmentMaxBudget
  document.querySelector("#lazerMaxBudget").value = sum

  //calculo do orçamento da saude
  let healthBudget = +document.getElementById("healthBudget").value
  console.log(healthBudget);
  let healthtMaxBudget = +document.querySelector("#saudeMaxBudget").value
  sum = healthtMaxBudget + healthBudget
  document.querySelector("#saudeMaxBudget").value = sum

  //calculo do orçamento do veiculo
  let vehicleBudget = +document.getElementById("vehicleBudget").value
  console.log(vehicleBudget);
  let veichleMaxBudget = +document.querySelector("#vehicleMaxBudget").value
  sum = veichleMaxBudget + vehicleBudget
  document.querySelector("#vehicleMaxBudget").value = sum


  //calculo do orçamento total
  let totalBudget = +document.getElementById("totalBudget").value
  totalBudget = +document.querySelector("#alimentacaoMaxBudget").value + +document.querySelector("#habitacaoMaxBudget").value + +document.querySelector("#lazerMaxBudget").value + +document.querySelector("#saudeMaxBudget").value + +document.querySelector("#vehicleMaxBudget").value
  console.log(totalBudget);
  document.getElementById("totalBudget").value = totalBudget




  let foundDate = false;
  let savedItem;
  let compareDate = document.querySelector("#date").value;

  //ciclo for que compara se a data escolhida já existe na local storage, se existir substitui os dados, senão cria uns novos

  for (let i = 0; i < budgets.length; i++) {
    savedItem = budgets[i];

    if (savedItem.date === compareDate) {
      SaveItem(savedItem);
      alert("Dados alterados com sucesso!")
      foundDate = true;
    }
  }

  if (!foundDate) {
    let newBudgets = {};
    SaveItem(newBudgets, foundDate);
    alert("Nova lista de despesa criada com sucesso!")


  }

  location.reload();
})


// função que guarda os valores na localstorage
function SaveItem(savedItem, foundDate = true) {
  savedItem.date = document.querySelector("#date").value;
  savedItem.food = +document.querySelector("#alimentacaoMaxBudget").value
  savedItem.home = +document.querySelector("#habitacaoMaxBudget").value
  savedItem.entertainment = +document.querySelector("#lazerMaxBudget").value
  savedItem.health = +document.querySelector("#saudeMaxBudget").value
  savedItem.vehicle = +document.querySelector("#vehicleMaxBudget").value
  savedItem.total = +document.querySelector("#totalBudget").value




  if (!foundDate) {
    budgets[budgets.length] = savedItem;
  }

  localStorage.setItem("budgets", JSON.stringify(budgets))
}



// Escolher cor das despesas conforme ultrapasse ou não o orçamento - não funciona ainda
function checkOverflow() {
  if (+actualExpenseFood.value > +foodBudgetLabel.value) {
    actualExpenseFood.style.color = "red"
  } else if (+actualExpenseFood.value <= +foodBudgetLabel.value) {
    actualExpenseFood.style.color = "green"
  }

  if (+actualExpenseHome.value > +homeBudgetLabel.value) {
    actualExpenseHome.style.color = "red"
  } else if (+actualExpenseHome.value <= +homeBudgetLabel.value) {
    actualExpenseHome.style.color = "green"
  }

  if (+actualExpenseEntertainment.value > +lazerBudgetLabel.value) {
    actualExpenseHome.style.color = "red"
  } else if (+actualExpenseEntertainment.value <= +lazerBudgetLabel.value) {
    actualExpenseEntertainment.style.color = "green"
  }

  if (+actualExpenseHealth.value > +healthBudgetLabel.value) {
    actualExpenseHealth.style.color = "red"
  } else if (+actualExpenseHealth.value <= +healthBudgetLabel.value) {
    actualExpenseHealth.style.color = "green"
  }

  if (+actualExpenseVehicle.value > +vehicleBudgetLabel.value) {
    actualExpenseVehicle.style.color = "red"
  } else if (+actualExpenseVehicle.value <= +vehicleBudgetLabel.value) {
    actualExpenseVehicle.style.color = "green"

  }
}



// Carrega valores de cada mês ao mudar mês
savedDate.onchange = function () {
  for (let i = 0; i < expensesData.length; i++) {

    let savedItem = expensesData[i];

    if (savedItem.date === savedDate.value && (
        savedItem.generalFood > 0 || savedItem.restaurant > 0 ||
        savedItem.electricity > 0 || savedItem.water > 0 || savedItem.rent > 0 || savedItem.internet > 0 || savedItem.otherHousePay > 0 ||
        savedItem.movies > 0 || savedItem.sports > 0 || savedItem.gym > 0 || savedItem.nightOut > 0 || savedItem.trip > 0 ||
        savedItem.pharm > 0 || savedItem.doctor > 0 || savedItem.otherHealthPay > 0 ||
        savedItem.fuel > 0 || savedItem.carMaintenance > 0 || savedItem.carInsurance > 0 || savedItem.carFine > 0)) {

      actualExpenseFood.value = savedItem.generalFood + savedItem.restaurant;
      actualExpenseHome.value = savedItem.electricity + savedItem.water + savedItem.rent + savedItem.internet + savedItem.otherHousePay;
      actualExpenseEntertainment.value = savedItem.movies + savedItem.sports + savedItem.gym + savedItem.nightOut + savedItem.trip;
      actualExpenseHealth.value = savedItem.pharm + savedItem.doctor + savedItem.otherHealthPay;
      actualExpenseVehicle.value = savedItem.fuel + savedItem.carMaintenance + savedItem.carInsurance + savedItem.carFine;
      totalActual.innerHTML = ` ${+actualExpenseFood.value + +actualExpenseHome.value + +actualExpenseEntertainment.value + +actualExpenseHealth.value + +actualExpenseVehicle.value}`;
      break;

    } else if (savedItem.date !== savedDate.value) {
      actualExpenseFood.value = 0;
      actualExpenseHome.value = 0;
      actualExpenseEntertainment.value = 0;
      actualExpenseHealth.value = 0;
      actualExpenseVehicle.value = 0;
    }
  }
  checkOverflow()

}