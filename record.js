// fill in javascript code here
document.querySelector("form").addEventListener("submit", myfunction)
function myfunction(event){
event.preventDefault()

let name = document.querySelector("#name").value;

let emp = document.querySelector("#employeeID").value;

let dept = document.querySelector("#department").value;

let exp = document.querySelector("#exp").value;

let email = document.querySelector("#email").value;

let mbl = document.querySelector("#mbl").value;

let tr = document.createElement("tr");

let td1 = document.createElement("td");
td1.innerText = name;

let td2 = document.createElement("td");
td2.innerText = emp;

let td3 = document.createElement("td");
td3.innerText= dept

let td4 = document.createElement("td");
td4.innerText= exp;

let td5 = document.createElement("td");
td5.innerText = email;

let td6 = document.createElement("td");
td6.innerText = mbl

let td7 = document.createElement("td");
if(exp > 5){
    td7.innerText = "Senior";
    td7.style.backgroundcolor = "red"
}
else if(exp >=2 && exp <=5){
    td7.innerText= "Junior";
    td7.style.backgroundcolor = "green"
}
else{
    td7.innerText = "Fresher"
    td7.style.backgroundcolor = "orange"
}

let td8 = document.createElement("td");
td9.innerText= "DELETE"
td7.style.backgroundcolor = "red"
td7.style.cursor = "Pointer"
td8.addEventListener("click" , deleterow)
  
tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
document.querySelector("tbody").append(tr);

}
function deleterow(){
    event.target.parentNode.remove()
}


