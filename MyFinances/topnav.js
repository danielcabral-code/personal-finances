/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function barFunction() {
    let x = document.getElementById("homeTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}