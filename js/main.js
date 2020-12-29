function clicked() {
    document.getElementById("thanks").innerHTML = "<b>Thank you for click</b>";
    //console.log(document.getElementById("thanks"));
    //alert("Thank you for click");
}

function redirect() {
    window.open ("https://digitalinnovation.one/") // Abre uma segunda janela
    //window.location.href = "https://digitalinnovation.one/"; // Abre na própria janela
}

function exchange(element) {
    //document.getElementById("mousemove").innerHTML = "Thanks for pass the mouse";
    element.innerHTML = "Thanks for pass the mouse";
    //alert("Exchange text")
}

function back(element) {
    //document.getElementById("mousemove").innerHTML = "Mouse over here";
    element.innerHTML = "Mouse over here";
}

function load() {
    alert("Page loaded")
}

function functionChange(element) {
    console.log(element.value)    
}

/*
function soma(n1, n2) {
    return n1 + n2;
}
*/
/*
var validate = 0;
function validateAge(age) {
    if(age >= 18) {
        validate = true 
    } else {
        validate = false 
    }
    return validate;
}

var age = prompt("Qual a sua idade?");
validateAge(age);
console.log(validate);
*/
//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};
*/
/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count ++;
};
*/
/*
var age = prompt("Qual sua idade?");
if (age >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
};
*/


/*
var fruits = [{name:"apple", color:"red"}, {name:"grape", color:"purple"}];
console.log(fruits);
alert(fruits[1].name);
*/
/*
var fruit = {name:"apple", color:"red"};
console.log(fruit.name);
alert(fruit.color);
*/


//var list = ["apple", "pear", "orange"];
//list.push("grape");
//list.pop();

//console.log(list);
//console.log(list.toString());
//console.log(list.join(" - "));

//var name = "Tiago Curvelo";
//var n1 = 5;
//var n2 = 10;
//var phrase = "Japan is the best team in the world";
//alert(name + " tem " + age + " anos");
//alert(age + age2);
//console.log(name);
//console.log(n1 + n2);
//console.log(phrase.toLowerCase());
