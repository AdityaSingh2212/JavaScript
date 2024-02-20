                                  //1. WAYS TO WRITE IN JAVASCRIPT:

// console.log("Hello World");                 //We will be able to write or print in console
// alert("Me");                                //For alerting message
// document.write("This is document write")    //We will be able to write in document



                                //2. JAVASCRIPT CONSOLE API:
//console.log("Hello World");
//console.warn("This is a warning");
//console.error("This is an error");
//console.assert(4 == 6);   //It will show 'assertion failed' because statement is wrong.
//console.clear();          //It will clear the console



                                   //3. JAVASCRIPT VARIABLES:
// What are variables? --> Containers to store data values.
var num1 = 64;
var num2 = 56;
// console.log(num1+num2);



                                //4. Data Types in Java Script
//Number
var num1 = 78;
var num2 = 89.7;

//String
var str1 = "This is a string";
var str2 = "This is a string";

//Objects
var marks = {
  Ravi: 34,
  Yash: 87,
  Aditya: 77,
};
// console.log(marks);

//Booleans
var a = true;
var b = false;
// console.log(a,b);

//Undefined
// It means that we made a variable but we have put it empty.
//var und= undefined;
var und; //By default it will also give undefined in console
// console.log(und);

//Null    It means we are saying it is always empty
var n = null;
// console.log(n);

//Symbol-->It will always give unique value or key when it is used.

/*
At a very high level there are two types of data types in JavaScript
1. Primitive Data type: --> (undefined,null,string,number,boolean,symbol)
2. Reference Data type: -->(Arrays and Objects)
*/



                                                //5.Arrays
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(2);   // (2)--> Index value



                                           //6. Operators in JavaScript
/*

//Arithmetic Operators
var c=100;
var d=50;
console.log("The value of a+b is ",a+b);
console.log("The value of a-b is ",a-b);
console.log("The value of a*b is ",a*b);
console.log("The value of a/b is ",a/b);

//Assignment operators
var f=d;
f +=2; //f=f+2
f -=2; //f=f-2
console.log(f);

//Comparison operators(==,<=,>=,<,>)
var x=40;
var y=60;
console.log(x==y); //It will give false as a output.
console.log(x<=y); //It will give true as a output.

//Logical operators
//AND
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

//OR
console.log(true || true);
console.log(true || true);
console.log(false ||false);
console.log(false || true);

//NOT
console.log(!false);  //It will give true as a output
console.log(!true);   //It will give false as a output



                                        //7.Functions in JS
//Dry--> Do not repeat yourself
function avg(a,b){
    c= (a+b)/2;
    return c;
}
c1=avg(4,6);
c2=avg(14,16);
// console.log(c1,c2);

                                           */



                                           //8.Conditionals in JS

/*
var age = 34;
//Single if statement
// if (age > 18) {
//   console.log("You can drink");
// }

//if - else statement
if (age > 18) {
  console.log("You can drink");
}
else{
    console.log("You cannot drink");
}

//if-else ladder
//Here it satisfies all the condition but only one condition will execute, others will not.
if (age>32) {
    console.log('You are a man');
}
else if(age>20){
    console.log("You are a teenage");
}
else if(age>10){
    console.log("You are a boy");
}
else{
    console.log("I am Adi");
}
console.log("End of ladder")

                                                */



                                            //9. LOOPS IN JS
// var arr=[1,2,3,4,5];
// console.log(arr);

// First method of implementing loop in JS
// arr.forEach(function(element){
// console.log(element)
// })

// a is constant and cannot be changed
// const a=0;

// let j=0;
// while (j<<arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j<<arr.length);

// for(var i=0;i<arr.length;i++){
//     //Break statement--> Used to break loop at specified condition.
//     if (i==2){
//         break;

//     /* Continue statement--> It will print all the numbers except 3 because it cancel the iteration             when i==2 (index value) and start the next iteration */
//     // continue;
//     }
//     console.log(arr[i])
// }



                                         // 10. Array Methods

// let myArr =["Fan, Camera,22,null,true"];
// console.log(myArr.length);
// We pop last item of the array
// myArr.pop()

// We push the item in the array from the last
// myArr.push("Cooler");

// We pop the first item from the array
// myArr.shift()

// In this we push the item in the array from the beginning
// myArr.unshift("Chair")

// It prints new length of the array
// let newLen = myArr.unshift("Chair");
// console.log(newLen);

// It will convert the array in the String.
// myArr.toString()

// For sorting
// myArr.sort()
// console.log(myArr);



                                          //11. Strings method in JS

// let myLovelyString="Adi is a good boy good";
// console.log(myLovelyString.length);

// It will give you the index of first occurrence
// console.log(myLovelyString.indexOf("good"));

// It will give you the index of last occurrence
// console.log(myLovelyString.lastIndexOf("good"));

// It will give the string which lies between given index
// console.log(myLovelyString.slice(0,2));

// It will replace Adi with Ram in the String.
// d= myLovelyString.replace("Adi", "Ram");

// It will replace good with bad in (d) statement.
// d= d.replace("good", "bad");

// It will print both the string old one and the new one
// console.log(d, myLovelyString);



                                              //12. Dates in JS
// let myDate = new Date();
// console.log(myDate) ;
// console.log(myDate.getTime) ;
// console.log(myDate.getFullYear) ;
// console.log(myDate.getDay) ;
// console.log(myDate.getMinutes) ;
// console.log(myDate.getHours) ;



                                          //13. DOM Manipulation
let elem = document.getElementById("click");
// console.log(elem);
let elemClass  = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";

// To add new class(bg-primary) to elem [0]
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

//For removing
// elemClass[0].classList.remove("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn=document.getElementsByTagName('div');
// console.log(tn);
createdElement=document.createElement('p');
createdElement.innerText= 'This is a created para.';
tn[0].appendChild(createdElement);

createdElement2=document.createElement('b');
createdElement2.innerText= 'This is a created bold.';
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element);-->removes an element



                                    //14.SELECTING USING QUERY
//gives one element
sel = document.querySelector('.container');
// console.log(sel);

//Gives all the containers
sel = document.querySelectorAll('.container');
// console.log(sel);


//Button methods
function clicked(){
    // console.log('The button was clicked');
}

window.onload= function(){
    // console.log('The document was loaded');
}


                                            //15. Events in JS
// firstContainer.addEventListener('click', function(){
//     console.log('click on container')
// })


//It will change the inner text of the container if we click on the button.
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML=  "<b> We have clicked</b>"
//         console.log('click on container')
//     })

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container')
// })


// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse out of container')
// })


// firstContainer.addEventListener('mouseup', function(){
//     console.log('Mouse up when clicked on container')
// })


// firstContainer.addEventListener('mousedown', function(){
//     console.log('Mouse down when clicked on container')
// })



                                        //16. Arrow function
// function summ(a,b){
// return(a+b);
// }
// We can also write function in this way
// summ=(a,b)=>{
//     return a+b;
// }




                                //17. setInterval and setTimeout
logKaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML=  "<b> Set time out fired</b>"
    // console.log('I am your log')
}
setTimeout(logKaro, 2000);
//If you want to use function(logKaro) repeatedly then you will use setInterval
setInterval(logKaro,2000);

//  clearInterval/clearTimeout is used to cancel setInterval and setTimeout after giving them id
    // clr=setInterval(logKaro,2000);
    // clearInterval(clr);
    

                            
                                    // 18. Local Storage of JS
// localStorage.setItem('name', 'Krishna')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name');
// localStorage.clear();



                            //19. JSON(Doesn't support single quote)
// obj ={name:"Shiva",length: 1, a:{this: "that"}}
// jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof jso)
// parsed =JSON.parse(`{"name":"Shiva","length":1,"a":{"this":"that"}}`);
// console.log(parsed);