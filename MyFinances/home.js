/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function barFunction() {
    let x = document.getElementById("homeTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


let money = 0

if (localStorage.getItem('money')) {
    money = JSON.parse(localStorage.getItem('money'))
    document.querySelector("#currentMoney").value = money

    if (money >= 0) {

        document.querySelector("#currentMoney").style.color ="green"
    } else {
        document.querySelector("#currentMoney").style.color ="red"
    }
} else {
    money
}



 document.getElementById("btnAddMoney").addEventListener("click", function () {

    let mon = +document.querySelector("#currentMoney").value
    let actmon = +document.querySelector("#addMoney").value
    sum = mon + actmon

    document.querySelector("#currentMoney").value = sum

    money += parseInt(document.getElementById("addMoney").value)
    localStorage.setItem("money", JSON.stringify(money))
    document.querySelector("#addMoney").value = null
    
     
}) 