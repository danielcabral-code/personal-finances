/* função que soma o nosso gasto atual*/
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
})

/*função para o botão collapse*/
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })}