
function today(){
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    alert(`it is: ${day}/${month}/${year}`)
}
today()

function area(){
    let A = prompt("Enter side value = ");
    let ara = A*A;
    let per = 4 * A;
    alert(`area of this square is ${ara} and the parameter is = ${per}`);

}
area()
function currency(){
    let mad= prompt("Enter amount of moroccan dirham : ");
    let R = mad/ 10.87;
    alert(mad+ " MAD to EUR is " +R.toFixed(2));
}
currency()

let hours = +prompt("Hours : ");
let minutes = +prompt("Minutes : ");
let second = +prompt("Seconds : ");
let Res = hours*3600 + minutes*60 + second;
alert("the result is " + Res)

const arr = ["Jan", "Feb", "March", "Apr", "May", "June", "July","Aug", "Sep", "Oct", "Nov", "Dec"];
let i = prompt("What month");
let m = i - 1;
if(i == 2){
    alert("this month is only 28days")
}
else if(i >12)
{
    alert("Month not found 404");
}
else if(i == 4 || i == 6 || i == 9 || i == 11){
    alert(`the month ${arr[m]} has 30days`);
}
else{
    alert(`the month ${arr[m]} has 31days`);
}


let av = prompt("Enter your Average");
if (av < 10)
{
    alert("FAILED");
}
else if(av >= 10 && av < 12)
{
    alert("Received");
}
else{
    alert("Received With Honor");
}

let age = prompt("Enter your Age");
if (age < 13)
{
    alert("Lilo &Stitch");
}
else if(age >= 13 && age < 18)
{
    alert("Matrix");
}
else{
    alert("Evil Dead");
}

let nmb = prompt("First number : ");
let nbr = prompt("Second number : ");
let T = nbr*nmb;
if(T > 0)
{
    alert(`the product of ${nmb} and ${nbr} is positive`);
}
else{
    alert(`the product of ${nmb} and ${nbr} is negative`);    
}
function add() {
    var num1 = parseFloat(document.getElementById("inp1").value);
    var num2 = parseFloat(document.getElementById("inp2").value);
    document.getElementById("inp3").value = num1 + num2;
}

function min() {
    var num1 = parseFloat(document.getElementById("inp1").value);
    var num2 = parseFloat(document.getElementById("inp2").value);
    document.getElementById("inp3").value = num1 - num2;
}

function pro() {
    var num1 = parseFloat(document.getElementById("inp1").value);
    var num2 = parseFloat(document.getElementById("inp2").value);
    document.getElementById("inp3").value = num1 * num2;
}

function div() {
    var num1 = parseFloat(document.getElementById("inp1").value);
    var num2 = parseFloat(document.getElementById("inp2").value);
    if (num2 !== 0) {
        document.getElementById("inp3").value = num1 / num2;
    } else {
        document.getElementById("inp3").value = "Cannot divide by zero";
    }
}

function calculate() {
    var operator = document.querySelector('input[name="operator"]:checked').value;
    switch (operator) {
        case '+':
            add();
            break;
        case '-':
            min();
            break;
        case '*':
            pro();
            break;
        case '/':
            div();
            break;
        default:
            alert("Please select an operator.");
    }
}