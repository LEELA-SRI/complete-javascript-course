'use strict';
//execution context=variable environment+scope chain + this key word


//hoisting is basically making things accessible before they r declared
//variables declared with var are hoisted but are set to undefined

//variables declared with let,const are not hoisted and hence throws error
//technically they r hoisted but they are in a certain temporal dead zone meaning 
//tho they are block scoped they wont be actually accessible until
//they r declared
//so the stuff before declaration is a TDZ
//like in the example below 
//job and year are declared but not by the time we tried to access it
//hence all the lines before the declaration is a TDZ


/*
console.log(nam);
console.log(job);
console.log(year);
var nam='maze'
let job='binging'
const year=2003*/


//functions declarations are hoisted
//but not expressions and arrow funcs

//to spice up things,try declaring the expressions and arrow funcs with var
//u'd think u'll get undefined but no
//so essentially when u declare it with var,the function is now a var declared and is hoisted and set to 
//undefined
//however when u try to call the now undefined 
//ull get an error
//makes sense cuz ya cant call sth u didnt declare
//so very obvi,if we r just console.logging the function instead of actually calling it
//then we'll get an undefined

/*
console.log(add(2,3));
console.log(sub(5,3));
console.log(mult(6,3));

//func declaration
function add(a,b){
    return a+b
}

//function exp
let sub=function(a,b){
    return a-b
}

//arrow func
 let mult=(a,b)=> a*b
 */

//so hoisting can be really dangerous
//example
//so here i declared passcode attemps with a var
//when i run it,i got the alert msg tho passcodeattempts=3
//since i tried to access a var variable before declaring
//it is hoiseted and set to undefined.and undefined is a falsy value
//to avoid catching bugs,its best not to use var carelessly

/*
if (!passcodeattempts) passalert();
var passcodeattempts=3
function passalert(){
    console.log('aight go to the bank and fuck urself');
 }*/


 //variables declared with var will  create a prop on the global window object
 //may lead to some implications
 /*
 let x=1
 var y=2
 const z=3*/

 //method=function attached to an obj
 //this key word belongs to the function which is calling another func
//ex


//here hell is an object
//name,age,printname are the keys and printname's property happened to be a function
//such is called method
//as per the above desc, thiskey word belong to the owner where the function is called
//hence this key word belongs to the method hell
//hell.year gives the same result as this.year
/*
let hell={
    name:'fiona',
    age:20,
    printName: function(){
        return 2022-this.age
    }

}*/

//simple function call also has this key word and is set to undefined in strict mode
//other wise the this keyword will be of the owner's i.e, window object's


//arrow functions dont get their a this key word.when we do try ....
//theyll get a lexical this keyword
//meaning the this keyword will now belong to the parent function

//if a function is called as an event listener,then the this keyword will point 
//to the dom elt the handler func is attached to

//this keyword will not point to the function in which we r using it
// nor the variable environment

/*
console.log(this);

//here the this keyword is its own but set to undefined cuz no owner calling
let age=function(year){
    console.log(2022-year);
    console.log(this);
}
age(1980)

//the this key word here doesnt belong to the arrow function instead it belongs
//to one in the outerscope that is the global window
let ageArrow =year =>{
    console.log(2022-year);
    console.log(this);
}
ageArrow(1980)

//u know what gon happen
//it points to hell
//cuz hell is the object that is calling printname
//not cuz printname is inside hell
let hell={
    name:'fiona',
    age:20,
    printName: function(){
       // console.log(this);
        console.log(2021-this.age);
    }
}
hell.printName()


//proof
let hello={
    age:2020
}

//method borrowing
hello.printName=hell.printName
hello.printName()

//this belongs to whoever calls the method

*/


//hell is just an object.not a block of code.this is in the global scope
//since var creates props on the window obj
//this.name will be wiona
//var name='wiona ryder'
/*
let hell={
    name:'fiona',
    age:20,
    printName: function(){
        console.log(this);
        console.log(2021-this.age);
        let mil=function(){
            console.log(this.age >25);
        }
        mil()
    },
    greet:() => console.log(`my ${this.name}`)
}
hell.greet()
//console.log(this.name);
hell.printName()
*/


//just like this kw,argument func is also available for reg func

/*
let sub=function(a,b){
    console.log(arguments);
    console.log(a/b); 
}
sub(98,319,12)


let mult=(a,b)=> {
    console.log(arguments);
    return a*b
}
mult(1,2,3)
*/
