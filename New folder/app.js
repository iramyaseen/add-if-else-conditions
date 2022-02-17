var days = document.getElementById('days');
var hours = document.getElementById('hours');
var mint = document.getElementById('mint');
var second = document.getElementById('second');

// For display days

let displayDays = new Date();      // Date store in this veriable
let day = displayDays.getDay();     // create a new variable bcz days store in this veriable

if(day == 0){
    day = "Sunday"
}
else if(day == 1){
    day = "Monday"
}
else if(day == 2){
    day = "Tuesday"
}else if(day == 3){
    day = "Wednesday"
}
else if(day == 4){
    day = "Thursday"
}
else if(day == 5){
    day = "Friday"
}
else if(day == 6){
    day = "Saturday"
}
else{
    document.write("Something Wrong! ")
}
days.innerHTML = day;

// For display hours

let totalHours = displayDays.getHours()
hours.innerHTML = totalHours + " AM "; 

// For display mints

let totalmints = displayDays.getMinutes()
mint.innerHTML = " : " + totalmints; 

// For display seconds

let totalSecond = displayDays.getSeconds()
second.innerHTML = " : " + totalSecond; 


// Question no 2
// 2:Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
var Addbtn = document.getElementById('Addbtn');
var MultiplayBtn = document.getElementById('MultiplayBtn');
var result = document.getElementById('result');

// For add to numbers
function AddNum(){
    var num1 = prompt("Enter your First number");
    var num2 = prompt("Enter your Second number");
    var addToNum = parseInt(num1) + parseInt(num2);
    result.innerHTML = `The sum of ${num1} and ${num2} is ${addToNum}`;
    console.log(addToNum);
}
// For multiply two numbers
function multiplayNum(){
    var num1 = prompt("Enter your First number");
    var num2 = prompt("Enter your Second number");
    var addToNum = parseInt(num1) * parseInt(num2);
    result.innerHTML = `The Multiplay of ${num1} and ${num2} is ${addToNum}`;
    console.log(addToNum);
}

// Question No 3
// 3:how to push data in array?
var inputUser = document.getElementById('inputUser');
array = []
var demo = document.getElementById('demo').innerHTML =array;
function AddItems(){
    var inputUser = document.getElementById('inputUser').value;
    array.push(inputUser + "<br />");
    document.getElementById('demo').innerHTML =array;

}

// Question No 4 
var object = {
    name:"Kinza",
    age : "21",
    country: "Pakistan"
}
var arry = []
arry.push(object);
console.log(arry)

// Question No 5
console.log("This is Question No 4 \nHow to push data in Array of object")
var object2 = {
    name:"Kinza",
    age : "21",
    country: "Pakistan",
    moreName : [
        "Iram", "Isha", "Kinza"
    ]
}
var arry2 = []
arry2.push(object2);
console.log(arry2)