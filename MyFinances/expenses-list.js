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