/* função que soma o nosso gasto atual*/
let sum = 0
btn.addEventListener("click", function () {
    let inp = +document.querySelector("#food").value
    let act = +document.querySelector(".actual").value
    sum = act + inp
    document.querySelector(".actual").value = sum
    document.querySelector("#food").value = 0
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