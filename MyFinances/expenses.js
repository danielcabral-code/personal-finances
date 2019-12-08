/* função que mete na primeira label o valor que introduzimos na input text */

function foodValue() {
    let fdd = document.getElementById("food").value;
    if (isNaN(fdd)) {
        alert("coloque um número")
       
        
        
    }
    else{    
        document.getElementById("actual").innerHTML =+fdd +"€";
}
  }
