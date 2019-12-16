/* variavel que soma o nosso gasto atual*/
let sum = 0

//botao que guarda os valores da secção de alimentação
btnFood.addEventListener("click", function () {
  //calculo da alimentação geral
  let generalFood = +document.querySelector("#geneFood").value
  let actF = +document.querySelector("#actualFood").value
  sum = actF + generalFood
  document.querySelector("#actualFood").value = sum
  document.querySelector("#geneFood").value = 0
 
  //calculo dos gastos em restaurante
  let awayFood = +document.querySelector("#awayFood").value
  let actAFood = +document.querySelector("#actualAwayFood").value
  sum = actAFood + awayFood
  document.querySelector("#actualAwayFood").value = sum
  document.querySelector("#awayFood").value = 0

  console.log( document.querySelector("#date").value);
})

//botao que guarda os valores da secção de lazer

btnLazer.addEventListener("click", function () {
  //calculo dos gastos em cinema
  let movies = +document.querySelector("#cinema").value
  let actMovies = +document.querySelector("#actualCin").value
  sum = actMovies + movies
  document.querySelector("#actualCin").value = sum
  document.querySelector("#cinema").value = 0

  //calculo gastos desporto
  let sports = +document.querySelector("#sport").value
  let actSports = +document.querySelector("#actualSport").value
  sum = actSports + sports
  document.querySelector("#actualSport").value = sum
  document.querySelector("#sport").value = 0

  //calculo gastos ginásio
  let gym = +document.querySelector("#gym").value
  let actGym = +document.querySelector("#actualGym").value
  sum = actGym + gym
  document.querySelector("#actualGym").value = sum
  document.querySelector("#gym").value = 0

  //calculo gastos das saidas
  let nightOut = +document.querySelector("#nightOut").value
  let actOut = +document.querySelector("#actualOut").value
  sum = actOut + nightOut
  document.querySelector("#actualOut").value = sum
  document.querySelector("#nightOut").value = 0

  //calculo gastos das viagens
  let trip = +document.querySelector("#trip").value
  let actTrip = +document.querySelector("#actualTrip").value
  sum = actTrip + trip
  document.querySelector("#actualTrip").value = sum
  document.querySelector("#trip").value = 0
})

//botao que guarda os valores da secção da casa

btnHouse.addEventListener("click", function () {
  //calculo dos gastos em luz
  let elect = +document.querySelector("#elect").value
  let actElect = +document.querySelector("#actualElect").value
  sum = actElect + elect
  document.querySelector("#actualElect").value = sum
  document.querySelector("#elect").value = 0

  //calculo gastos da água
  let water = +document.querySelector("#water").value
  let actWater = +document.querySelector("#actualWater").value
  sum = actWater + water
  document.querySelector("#actualWater").value = sum
  document.querySelector("#water").value = 0

  //calculo gastos da renda
  let income = +document.querySelector("#income").value
  let actInc = +document.querySelector("#actualIncome").value
  sum = actInc + income
  document.querySelector("#actualIncome").value = sum
  document.querySelector("#income").value = 0

  //calculo gastos da Internet

  let Net = +document.querySelector("#Net").value
  let actNet = +document.querySelector("#actualNet").value
  sum = actNet + Net
  document.querySelector("#actualNet").value = sum
  document.querySelector("#Net").value = 0

  //calculo de outros gastos 

  let otherPay = +document.querySelector("#otherPay").value
  let actOther = +document.querySelector("#actualOtherPay").value
  sum = actOther + otherPay
  document.querySelector("#actualOtherPay").value = sum
  document.querySelector("#otherPay").value = 0
})

//botao que guarda os valores da secção de saude

btnHealth.addEventListener("click", function () {
  //calculo da farmacia
  let pharm = +document.querySelector("#pharm").value
  let actualPharm = +document.querySelector("#actualPharm").value
  sum = actualPharm + pharm
  document.querySelector("#actualPharm").value = sum
  document.querySelector("#pharm").value = 0

  //calculo dos gastos em consultas
  let doctor = +document.querySelector("#doctor").value
  let actualDoctor = +document.querySelector("#actualDoctor").value
  sum = actualDoctor + doctor
  document.querySelector("#actualDoctor").value = sum
  document.querySelector("#doctor").value = 0

  //calculo de outros gastos 

  let otherHealth = +document.querySelector("#otherHealth").value
  let actualOtherHealth = +document.querySelector("#actualOtherPay").value
  sum = actualOtherHealth + otherHealth
  document.querySelector("#actualOtherHealth").value = sum
  document.querySelector("#otherHealth").value = 0
})

//botao que guarda os valores da secção do veiculo

btnVehicle.addEventListener("click", function () {
  //calculo do combustivel
  let Fuel = +document.querySelector("#Fuel").value
  let actualFuel = +document.querySelector("#actualFuel").value
  sum = actualFuel + Fuel
  document.querySelector("#actualFuel").value = sum
  document.querySelector("#Fuel").value = 0

  //calculo dos gastos em manutenção
  let maintenance = +document.querySelector("#maintenance").value
  let actualMaintenance = +document.querySelector("#actualMaintenance").value
  sum = actualMaintenance + maintenance
  document.querySelector("#actualMaintenance").value = sum
  document.querySelector("#maintenance").value = 0

  //calculo dos gastos em seguro

  let insurance = +document.querySelector("#insurance").value
  let actualInsurance = +document.querySelector("#actualInsurance").value
  sum = actualInsurance + insurance
  document.querySelector("#actualInsurance").value = sum
  document.querySelector("#insurance").value = 0

  //calculo dos gastos em multas

  let carFine = +document.querySelector("#carFine").value
  let actualCarFine = +document.querySelector("#actualCarFine").value
  sum = actualCarFine + carFine
  document.querySelector("#actualCarFine").value = sum
  document.querySelector("#carFine").value = 0
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