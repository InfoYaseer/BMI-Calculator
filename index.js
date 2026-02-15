const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {

let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);

if(!height || !weight){
alert("Please enter height and weight");
return;
}

height = height / 100;

let bmi = (weight / (height * height)).toFixed(2);

document.getElementById("result").textContent = bmi;

let status="";

if(bmi < 18.5) status="Underweight";
else if(bmi < 25) status="Healthy";
else if(bmi < 30) status="Overweight";
else status="Obese";

document.getElementById("comment").textContent = status;

});
