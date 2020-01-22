let expenses = [];
if (localStorage.getItem('expenses')) {
    expenses = JSON.parse(localStorage.getItem('expenses'))

} else {
    alert("vazio")
}
let list = document.getElementById("selectDate")
 
   
function selectExpense() {
    let arr = JSON.parse(localStorage.getItem('expenses'));
  
    for (let i = 0; i < expenses.length; i++) {
        let savedItem = expenses[i]
       console.log(savedItem);  
 
      }
      
      
   
      arr.forEach(function (savedItem) {
            
  
        let option = document.createElement("option");
        option.text = savedItem.date;
        list.add(option);

    })
}

selectExpense();

list.onchange = function()
{
    let foundDate = false;
    let savedItem;
    let compareDate = document.querySelector("#selectDate").value;
    for (let i = 0; i < expenses.length; i++)
    {
        savedItem = expenses[i];

        if (savedItem.date === compareDate)
        {
            foundDate = true;
            break;
        }
    }

    if (foundDate)
        LoadData(savedItem);
}

function LoadData(savedItem)
{
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

    document.getElementById("informations").style.display = "block";
    document.getElementById("divData").style.display = "none";
}
