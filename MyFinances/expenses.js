/* função que soma o nosso gasto atual*/
let sum=0
btn.addEventListener("click", function () {
    let inp = +document.querySelector("#food").value
    let act=+document.querySelector("#actual").value
    sum=act+inp
   document.querySelector("#actual").value=sum 

})