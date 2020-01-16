/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function barFunction() {
    let x = document.getElementById("homeTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


let money =[]

if (localStorage.getItem('currentMoney')) {
    money = JSON.parse(localStorage.getItem('currentMoney'))


} else {
    money =[]
}


document.getElementById("btnAddMoney").addEventListener("click", function () {

    money= +document.getElementById("addMoney").value + money


    localStorage.setItem("money", JSON.stringify(money))

    document.querySelector("#currentMoney").value =  money
})