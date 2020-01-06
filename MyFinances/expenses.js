let compareDate = document.querySelector("#date").value
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

  //botao que guarda os valores da secção de lazer

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



  //botao que guarda os valores da secção da casa


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


  //botao que guarda os valores da secção de saude


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


  //criação dos dados na local storage
  for (let i = 0; i < expenses.length; i++) {
    const savedItem = expenses[i]



    if ( /* i === expenses.length - 1 && */ savedItem.date === compareDate) {


      savedItem.generalFood = savedItem.generalFood + 100
      //savedItem.restaurant = +document.querySelector("#actualAwayFood").value
      /*  newExpense.electricity = +document.querySelector("#actualElect").value
       newExpense.water = +document.querySelector("#actualWater").value
       newExpense.income = +document.querySelector("#actualIncome").value
       newExpense.internet = +document.querySelector("#actualNet").value
       newExpense.otherHousePay = +document.querySelector("#actualOtherPay").value
       newExpense.movies = +document.querySelector("#actualCin").value
       newExpense.sports = +document.querySelector("#actualSport").value
       newExpense.gym = +document.querySelector("#actualGym").value
       newExpense.nightOut = +document.querySelector("#actualOut").value
       newExpense.trip = +document.querySelector("#actualTrip").value
       newExpense.pharm = +document.querySelector("#actualPharm").value
       newExpense.doctor = +document.querySelector("#actualDoctor").value
       newExpense.otherHealthPay = +document.querySelector("#actualOtherHealth").value
       newExpense.fuel = +document.querySelector("#actualFuel").value
       newExpense.carMaintenance = +document.querySelector("#actualMaintenance").value
       newExpense.carInsurance = +document.querySelector("#actualInsurance").value
       newExpense.carFine = +document.querySelector("#actualCarFine").value
       expenses[expenses.length] = newExpense */

      localStorage.setItem("expenses", JSON.stringify(expenses))

    } 
    else{
      let newExpense = {}
      newExpense.date = document.querySelector("#date").value
      newExpense.generalFood = +document.querySelector("#actualFood").value
      newExpense.restaurant = +document.querySelector("#actualAwayFood").value
      newExpense.electricity = +document.querySelector("#actualElect").value
      newExpense.water = +document.querySelector("#actualWater").value
      newExpense.income = +document.querySelector("#actualIncome").value
      newExpense.internet = +document.querySelector("#actualNet").value
      newExpense.otherHousePay = +document.querySelector("#actualOtherPay").value
      newExpense.movies = +document.querySelector("#actualCin").value
      newExpense.sports = +document.querySelector("#actualSport").value
      newExpense.gym = +document.querySelector("#actualGym").value
      newExpense.nightOut = +document.querySelector("#actualOut").value
      newExpense.trip = +document.querySelector("#actualTrip").value
      newExpense.pharm = +document.querySelector("#actualPharm").value
      newExpense.doctor = +document.querySelector("#actualDoctor").value
      newExpense.otherHealthPay = +document.querySelector("#actualOtherHealth").value
      newExpense.fuel = +document.querySelector("#actualFuel").value
      newExpense.carMaintenance = +document.querySelector("#actualMaintenance").value
      newExpense.carInsurance = +document.querySelector("#actualInsurance").value
      newExpense.carFine = +document.querySelector("#actualCarFine").value
      expenses[expenses.length] = newExpense 
     
      localStorage.setItem("expenses", JSON.stringify(expenses))

    }
    
      
    
  }
  
  let newExpense = {}
  newExpense.date = document.querySelector("#date").value
  newExpense.generalFood = +document.querySelector("#actualFood").value
  newExpense.restaurant = +document.querySelector("#actualAwayFood").value
  newExpense.electricity = +document.querySelector("#actualElect").value
  newExpense.water = +document.querySelector("#actualWater").value
  newExpense.income = +document.querySelector("#actualIncome").value
  newExpense.internet = +document.querySelector("#actualNet").value
  newExpense.otherHousePay = +document.querySelector("#actualOtherPay").value
  newExpense.movies = +document.querySelector("#actualCin").value
  newExpense.sports = +document.querySelector("#actualSport").value
  newExpense.gym = +document.querySelector("#actualGym").value
  newExpense.nightOut = +document.querySelector("#actualOut").value
  newExpense.trip = +document.querySelector("#actualTrip").value
  newExpense.pharm = +document.querySelector("#actualPharm").value
  newExpense.doctor = +document.querySelector("#actualDoctor").value
  newExpense.otherHealthPay = +document.querySelector("#actualOtherHealth").value
  newExpense.fuel = +document.querySelector("#actualFuel").value
  newExpense.carMaintenance = +document.querySelector("#actualMaintenance").value
  newExpense.carInsurance = +document.querySelector("#actualInsurance").value
  newExpense.carFine = +document.querySelector("#actualCarFine").value
  expenses[expenses.length] = newExpense 
 
  localStorage.setItem("expenses", JSON.stringify(expenses))


  /* let retrievedData = localStorage.getItem("expenses");
    let playerData = JSON.parse(retrievedData);

    console.log(playerData);
     */


  document.querySelector("#geneFood").value = 0
  document.querySelector("#awayFood").value = 0
  document.querySelector("#cinema").value = 0
  document.querySelector("#sport").value = 0
  document.querySelector("#gym").value = 0
  document.querySelector("#nightOut").value = 0
  document.querySelector("#trip").value = 0
  document.querySelector("#elect").value = 0
  document.querySelector("#water").value = 0
  document.querySelector("#income").value = 0
  document.querySelector("#net").value = 0
  document.querySelector("#otherPay").value = 0
  document.querySelector("#pharm").value = 0
  document.querySelector("#doctor").value = 0
  document.querySelector("#otherHealth").value = 0
  document.querySelector("#Fuel").value = 0
  document.querySelector("#maintenance").value = 0
  document.querySelector("#insurance").value = 0
  document.querySelector("#carFine").value = 0

  //making sure it still is an array
  //alert(playerData.length);
  //console.log(playerData);

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