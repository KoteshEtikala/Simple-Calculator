var color = document.getElementById("color")
var body = document.querySelector("body")
color.addEventListener("change",()=>{
    body.style.backgroundColor=color.value
})
let addition = (a,b)=> Math.floor(a+b)
let subtraction = (a,b)=> Math.floor(a-b)
let multiplication = (a,b)=> Math.floor(a*b)
let division= (a,b)=> Math.floor(a/b)
let button = document.querySelector("button")
let h3 = document.querySelector("h3")
// let form=document.querySelector("form")
button.addEventListener("click",()=>{
    let value1 = Number.parseInt(document.getElementById("first-num").value)
    let value2 = Number.parseInt(document.getElementById("second-num").value)
    let select = document.querySelector("#mathametic").value
    switch (select) {
        case 'Addition':
            h3.innerHTML=`Reslut: ${addition(value1,value2)}`
            break;
        case 'Subtraction':
            h3.innerHTML=`Reslut: ${subtraction(value1,value2)}`
            break;
        case 'Multiplication':
            h3.innerHTML=`Reslut: ${multiplication(value1,value2)}`
            break;
        case 'Division':
            h3.innerHTML=`Reslut: ${division(value1,value2)}`
            break;
        default:
            alert("please select the mathematic operation")
            break;
    }
})
