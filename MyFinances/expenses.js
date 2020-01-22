//coloca a data com o mes/ano atual
document.querySelector("#date").valueAsDate = new Date();

let compareDate = document.querySelector("#date").value
//console.log("compareDate: " + compareDate);

if (localStorage.getItem('money')) {
  money = JSON.parse(localStorage.getItem('money'))


} else {
  money = 0
}

let expenses = [];
if (localStorage.getItem('expenses')) {
  expenses = JSON.parse(localStorage.getItem('expenses'))



  for (let i = 0; i < expenses.length; i++) {
    const savedItem = expenses[i]



    if ( /* i === expenses.length - 1 && */ savedItem.date === compareDate) {

      //console.log(savedItem.date);

      document.getElementById("actualFood").value = savedItem.generalFood
      document.querySelector("#actualAwayFood").value = savedItem.restaurant
      document.querySelector("#actualCin").value = savedItem.movies
      document.querySelector("#actualSport").value = savedItem.sports
      document.querySelector("#actualGym").value = savedItem.gym
      document.querySelector("#actualOut").value = savedItem.nightOut
      document.querySelector("#actualTrip").value = savedItem.trip
      document.querySelector("#actualElect").value = savedItem.electricity
      document.querySelector("#actualWater").value = savedItem.water
      document.querySelector("#actualIncome").value = savedItem.income
      document.querySelector("#actualNet").value = savedItem.internet
      document.querySelector("#actualOtherPay").value = savedItem.otherHousePay
      document.querySelector("#actualPharm").value = savedItem.pharm
      document.querySelector("#actualDoctor").value = savedItem.doctor
      document.querySelector("#actualOtherHealth").value = savedItem.otherHealthPay
      document.querySelector("#actualFuel").value = savedItem.fuel
      document.querySelector("#actualMaintenance").value = savedItem.carMaintenance
      document.querySelector("#actualInsurance").value = savedItem.carInsurance
      document.querySelector("#actualCarFine").value = savedItem.carFine

    }
  }


} else {
  expenses = []
}

/* variavel que soma o nosso gasto atual*/
let sum = 0


let totalMoney = 0


save.addEventListener("click", function () {

  //calculo da alimentação geral
  let generalFood = +document.querySelector("#geneFood").value
  let actF = +document.querySelector("#actualFood").value
  sum = actF + generalFood
  document.querySelector("#actualFood").value = sum



  //calculo dos gastos em restaurante
  let awayFood = +document.querySelector("#awayFood").value
  let actAFood = +document.querySelector("#actualAwayFood").value
  sum = actAFood + awayFood
  document.querySelector("#actualAwayFood").value = sum


  //calculo dos gastos em cinema
  let movies = +document.querySelector("#cinema").value
  let actMovies = +document.querySelector("#actualCin").value
  sum = actMovies + movies
  document.querySelector("#actualCin").value = sum


  //calculo gastos desporto
  let sports = +document.querySelector("#sport").value
  let actSports = +document.querySelector("#actualSport").value
  sum = actSports + sports
  document.querySelector("#actualSport").value = sum


  //calculo gastos ginásio
  let gym = +document.querySelector("#gym").value
  let actGym = +document.querySelector("#actualGym").value
  sum = actGym + gym
  document.querySelector("#actualGym").value = sum

  //calculo gastos das saidas
  let nightOut = +document.querySelector("#nightOut").value
  let actOut = +document.querySelector("#actualOut").value
  sum = actOut + nightOut
  document.querySelector("#actualOut").value = sum


  //calculo gastos das viagens
  let trip = +document.querySelector("#trip").value
  let actTrip = +document.querySelector("#actualTrip").value
  sum = actTrip + trip
  document.querySelector("#actualTrip").value = sum


  //calculo dos gastos em luz
  let elect = +document.querySelector("#elect").value
  let actElect = +document.querySelector("#actualElect").value
  sum = actElect + elect
  document.querySelector("#actualElect").value = sum


  //calculo gastos da água
  let water = +document.querySelector("#water").value
  let actWater = +document.querySelector("#actualWater").value
  sum = actWater + water
  document.querySelector("#actualWater").value = sum


  //calculo gastos da renda
  let income = +document.querySelector("#income").value
  let actInc = +document.querySelector("#actualIncome").value
  sum = actInc + income
  document.querySelector("#actualIncome").value = sum


  //calculo gastos da Internet

  let net = +document.querySelector("#net").value
  let actNet = +document.querySelector("#actualNet").value
  sum = actNet + net
  document.querySelector("#actualNet").value = sum

  //calculo de outros gastos 

  let otherPay = +document.querySelector("#otherPay").value
  let actOther = +document.querySelector("#actualOtherPay").value
  sum = actOther + otherPay
  document.querySelector("#actualOtherPay").value = sum


  //calculo da farmacia
  let pharm = +document.querySelector("#pharm").value
  let actualPharm = +document.querySelector("#actualPharm").value
  sum = actualPharm + pharm
  document.querySelector("#actualPharm").value = sum


  //calculo dos gastos em consultas
  let doctor = +document.querySelector("#doctor").value
  let actualDoctor = +document.querySelector("#actualDoctor").value
  sum = actualDoctor + doctor
  document.querySelector("#actualDoctor").value = sum


  //calculo de outros gastos na saúde

  let otherHealth = +document.querySelector("#otherHealth").value
  let actualOtherHealth = +document.querySelector("#actualOtherHealth").value
  sum = actualOtherHealth + otherHealth
  document.querySelector("#actualOtherHealth").value = sum


  //calculo do combustivel
  let Fuel = +document.querySelector("#Fuel").value
  let actualFuel = +document.querySelector("#actualFuel").value
  sum = actualFuel + Fuel
  document.querySelector("#actualFuel").value = sum


  //calculo dos gastos em manutenção
  let maintenance = +document.querySelector("#maintenance").value
  let actualMaintenance = +document.querySelector("#actualMaintenance").value
  sum = actualMaintenance + maintenance
  document.querySelector("#actualMaintenance").value = sum

  //calculo dos gastos em seguro

  let insurance = +document.querySelector("#insurance").value
  let actualInsurance = +document.querySelector("#actualInsurance").value
  sum = actualInsurance + insurance
  document.querySelector("#actualInsurance").value = sum


  //calculo dos gastos em multas

  let carFine = +document.querySelector("#carFine").value
  let actualCarFine = +document.querySelector("#actualCarFine").value
  sum = actualCarFine + carFine
  document.querySelector("#actualCarFine").value = sum



  let foundDate = false;
  let savedItem;
  let compareDate = document.querySelector("#date").value;



  //ciclo for que compara se a data escolhida já existe na local storage, se existir substitui os dados, senão cria uns novos

  for (let i = 0; i < expenses.length; i++) {
    savedItem = expenses[i];

    if (savedItem.date === compareDate) {
      SaveItem(savedItem);
      alert("Dados alterados com sucesso!")
      foundDate = true;
    }
  }

  if (!foundDate) {
    let newExpense = {};
    SaveItem(newExpense, foundDate);
    alert("Nova lista de despesa criada com sucesso!")


  }

  total = generalFood + awayFood + movies + sports + gym + nightOut + trip + elect + water + income + net + otherPay + pharm + doctor + otherHealth + Fuel + maintenance + insurance + carFine
  money = money - total
  localStorage.setItem('money', JSON.stringify(money))

  location.reload();
})

/*função para o botão collapse*/
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

// função que guarda os valores na localstorage
function SaveItem(savedItem, foundDate = true) {
  savedItem.date = document.querySelector("#date").value;
  savedItem.generalFood = +document.querySelector("#actualFood").value
  savedItem.restaurant = +document.querySelector("#actualAwayFood").value
  savedItem.electricity = +document.querySelector("#actualElect").value
  savedItem.water = +document.querySelector("#actualWater").value
  savedItem.income = +document.querySelector("#actualIncome").value
  savedItem.internet = +document.querySelector("#actualNet").value
  savedItem.otherHousePay = +document.querySelector("#actualOtherPay").value
  savedItem.movies = +document.querySelector("#actualCin").value
  savedItem.sports = +document.querySelector("#actualSport").value
  savedItem.gym = +document.querySelector("#actualGym").value
  savedItem.nightOut = +document.querySelector("#actualOut").value
  savedItem.trip = +document.querySelector("#actualTrip").value
  savedItem.pharm = +document.querySelector("#actualPharm").value
  savedItem.doctor = +document.querySelector("#actualDoctor").value
  savedItem.otherHealthPay = +document.querySelector("#actualOtherHealth").value
  savedItem.fuel = +document.querySelector("#actualFuel").value
  savedItem.carMaintenance = +document.querySelector("#actualMaintenance").value
  savedItem.carInsurance = +document.querySelector("#actualInsurance").value
  savedItem.carFine = +document.querySelector("#actualCarFine").value



  if (!foundDate) {
    expenses[expenses.length] = savedItem;
  }

  localStorage.setItem("expenses", JSON.stringify(expenses))
}

//função que vai meter os inputs todos a zero se nao existir a data na localstorage
function ResetValues() {
  var elements = document.querySelectorAll("input[type=number]")

  for (var i = 0, element; element = elements[i++];) {
    element.value = 0;
  }
}

//função para lê os dados na local storage
function LoadData(savedItem) {
  document.getElementById("actualFood").value = savedItem.generalFood
  document.querySelector("#actualAwayFood").value = savedItem.restaurant
  document.querySelector("#actualCin").value = savedItem.movies
  document.querySelector("#actualSport").value = savedItem.sports
  document.querySelector("#actualGym").value = savedItem.gym
  document.querySelector("#actualOut").value = savedItem.nightOut
  document.querySelector("#actualTrip").value = savedItem.trip
  document.querySelector("#actualElect").value = savedItem.electricity
  document.querySelector("#actualWater").value = savedItem.water
  document.querySelector("#actualIncome").value = savedItem.income
  document.querySelector("#actualNet").value = savedItem.internet
  document.querySelector("#actualOtherPay").value = savedItem.otherHousePay
  document.querySelector("#actualPharm").value = savedItem.pharm
  document.querySelector("#actualDoctor").value = savedItem.doctor
  document.querySelector("#actualOtherHealth").value = savedItem.otherHealthPay
  document.querySelector("#actualFuel").value = savedItem.fuel
  document.querySelector("#actualMaintenance").value = savedItem.carMaintenance
  document.querySelector("#actualInsurance").value = savedItem.carInsurance
  document.querySelector("#actualCarFine").value = savedItem.carFine
}

let dataPick = document.getElementById("date");

//função que ou mete os valores dos inputs a zero, ou, lê os dados da local storage caso existam
dataPick.onchange = function () {

  let foundDate = false;
  let savedItem;
  let compareDate = document.querySelector("#date").value;
  for (let i = 0; i < expenses.length; i++) {
    savedItem = expenses[i];

    if (savedItem.date === compareDate) {
      foundDate = true;
      break;
    }
  }

  if (!foundDate)
    ResetValues();
  else
    LoadData(savedItem);
}