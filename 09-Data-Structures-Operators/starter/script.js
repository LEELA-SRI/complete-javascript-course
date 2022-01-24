'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(start,main){
    //cant return comma sep 2 items
    return [this.starterMenu[start],this.mainMenu[main]]
  },
//sometimes when we need to pass in arguments...what if we dont know 
//what order to pass it in------destructuring
//ofc can provide default values
  delivery:function({start=1,main=0,address,time}){
    //console.log(main);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
restaurant.delivery({
  time:'2230',
  start:2,
  main:3,
  address:'lane street'
})

//spread op:it does stuff inplace,doesnt create new variables
let arr=[2,3,4]
//default way
let defarr=[5,6,arr[0],arr[1],arr[2]]
//spread way
let sparr=[7,8,...arr]
console.log(sparr);
//like using a for loop to unpack em
console.log(...sparr);

let newMenu=[...restaurant.mainMenu,'beef wellington']
console.log(...newMenu);

//copying array
let newMenucopy=[...restaurant.mainMenu]

/*
//obj destructuring
let {name,openingHours,categories}=restaurant

//renaming the properties
let {name :restaurantName,openingHours:timings,categories:stuff}=restaurant
console.log(restaurantName,timings,stuff);

//default values assigning and renaming
let {menu=[],starterMenu:starters=[]}=restaurant
console.log(menu,starters);
/*
//overriding vars
let a=100
let b=200
let obj={a:23,b:7,c:14}
({a,b}=obj)
console.log(a,b);

//nested objs

//works cuz now timings is a seperate variable
let {fri}=timings
//returns fri object

let {fri:{open,close}}=timings
console.log(open,close);
//returns values of fri obj

let {fri:{open:o,close:c}}=timings
//renaming the values
*/


/*
//destructuring is like * operation.unpacks an iterable
//traditional way
const arr=[1,2,3]
const a=arr[0]
const b=arr[1]
const c=arr[2]
//destructuring way
let [x, ,y]=arr
console.log(x,y);

//traditional way
const temp=x
x=y
y=temp
console.log(x,y);

//destruct way
[x,y]=[y,x]
console.log(x,y);

let [starter,mainone]=restaurant.order(2,0); 
console.log(starter,mainone);

///nested destruct
let nest=[2,[1,2,3],3,4]
let [h,[o,p,f], ,k]=nest
console.log(h,o,p,f,k);

//default vals
let [d=1,e=1]=[8]
console.log(d,e);
*/
