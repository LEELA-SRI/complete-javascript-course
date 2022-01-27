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
  order: function (start, main) {
    //cant return comma sep 2 items
    return [this.starterMenu[start], this.mainMenu[main]];
  },
  //sometimes when we need to pass in arguments...what if we dont know
  //what order to pass it in------destructuring
  //ofc can provide default values
  delivery: function ({ start = 1, main = 0, address, time }) {
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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is yo pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  ///////another way of writing functions
  orderPizza(maining, ...others) {
    //packing
    console.log(maining, ...others); //unpacking
  },
};

//let teams = ['team1', 'team2'];
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//////////////////////////////////looping
console.log(Object.keys(restaurant));
let values=Object.values(restaurant.openingHours);
console.log(values);
for (let day of Object.keys(restaurant)) console.log(day);
for (let days of Object.values(openingHours)) console.log(days);

let ents=Object.entries(restaurant.openingHours); 
for(let [key,{open,close}] of ents) console.log(`on ${key} we open at ${open} and close at ${close}`);
*/

/*
/////////////////////////////optional chaining
///conventional way
if (restaurant.openingHours.thu && restaurant.openingHours.thu.open)
console.log(restaurant.openingHours.thu.open);

//chaining method
console.log(restaurant.openingHours?.mon?.open);

//wih methods
console.log(restaurant.orderPizza?.('tomato','pepparoni') ?? 'not der bruh');

console.log(restaurant.order?.('tomato','pepparoni') ?? 'not der bruh');

//arrays
let countries=[]
console.log(countries?.[0] ?? 'nopes');

///////////////////////////////////////for of loop
let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (let item of menu) console.log(item);
for (let [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

let days=['mon','tue','wed','thu','fri','sat']
for (let i of days) console.log(restaurant.openingHours[i]?.open);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, 
  you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way,
 exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object,
 don't hardcode them (except for "draw"). 
 HINT: Note how the odds and the game objects
  have the same property names 😉

BONUS: Create an object called 'scorers' which contains
 the names of the players who scored as properties, and 
 the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀



for (let [num,player] of game.scored.entries()) console.log(`goal ${Number(num )+1} :${player}`);
let i=0
let odd=Object.values(game.odds)
let key=Object.keys(game.odds)
for (let scores of odd) i=i+scores
console.log(i/odd.length);
//for (let score of odd) console.log(`odd of ${key==='x' ? 'draw' : 'victory'} ${game[key]} : ${score}`);
for ( let [k,v] of Object.entries(game.odds) ) console.log(`odd of ${ k==='x' ? 'draw' :'victory'} ${game[k] || ''}:${v}`);

let scorers={}
for (let p of game.scored) {
  scorers[p] ? scorers[p]++ : scorers[p]=1;
  console.log(scorers[p]);
}
console.log(scorers);
*/

/*
restaurant.orderPizza('cheese','pepparoni','balogna')
restaurant.delivery({
  time:'2230',
  start:2,
  main:3,
  address:'lane street'
})




/*

//////////////////short circuiting of OR op
// or operates return the first truthy value and terminates
console.log('' || 0 || 'senor' || "whatup yo");
//if all false returns the last
console.log(""|| undefined||0);

restaurant.numguests=0
//default way
let customers=restaurant.numguests ? restaurant.numguests:5
//short circuit way
let count=restaurant.numguests || 11
console.log(count);

//the problem here is that we do have the data of how many customers i.e,0
//but its returning 11 cuz...duh 0 is falsy
restaurant.numguests=0
let count=restaurant.numguests || 11
console.log(count);

//nullish coalescing operator works with either null or undefined values rather than falsy
//?? instead of ||
let customers=restaurant.numguests ?? 6
console.log(customers);

let rest1={
  nameOfRest:'papa johns',
  guestCount:0
}

let rest2={
  nameOfRest:'arbys',
  owner:'arby'
}

/////////////////////////////////////////// logical or assignment op
/*
rest1.guestCount= rest1.guestCount || 15
rest2.guestCount= rest2.guestCount || 15
console.log(rest1.guestCount,rest2.guestCount);*/

//so now... like c=c+1 == c+=1 .... x =x||y == x||=y.makes sense.right
//wonder why we need allthe shortcuts
//and yes dont work with 0
//no space bw = and ||
/*rest1.guestCount ||= 5
rest2.guestCount ||= 1
console.log(rest1.guestCount,rest2.guestCount);*/

//////////////////////////nullish assignment operator
/*rest1.guestCount ??= 5
rest2.guestCount ??= 1
console.log(rest1.guestCount,rest2.guestCount);*/

/*

/////////////////////short circuiting of AND op
//return the first falsy value
console.log('' && 0 && 'senor' && "whatup yo");
//returns the last truthy value if all are true
console.log('senor' && "whatup yo");
//finds a falsy value,terminates and returns it
console.log('senor' && "whatup yo" &&'');

//default way
if (restaurant.orderPizza){
  restaurant.orderPizza('cheese','pepparoni','chicken')
}
//shortcircuting way
restaurant.orderPizza && restaurant.orderPizza('cheese','chicken','mushrooms');


///////////////////////////////////////////// logical and assignment op
//assigns a value to a var if it is currently truthy

rest1.owner &&= 'nonamela'
rest2.owner &&= 'nonamela'
console.log(rest1.owner,rest2.owner); 



////spread and rest work the same depending on where its used
//like spread: right side of '=' and cc,function calls
//rest:left of '=' and function parameters,basically where we would otherwise
//write cs var names *not csv* *csvars*

///////////rest is like ','.join()
// if ...operator on the left side of '='

let arr=[1,4,16,9,25]
//destructuring+...
let [a,b,...c]=arr
console.log(a,b,c);

let [d,...e]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(d,e);
//obj
let {sat,...weekdays}=restaurant.openingHours
console.log(sat,weekdays);

/////////////rest on funcs
let add=function(...nums){//packing here
  let sum=0;
  for (let i=0;i<nums.length;i++) sum+=nums[i]
  console.log(sum);

}
add(2,3)
add(5,6,3,9)
add(...[1,5,8,6],2,3)//unpacking here


//////////spread op:it does stuff inplace,doesnt create new variables
//doesnt work in a template literal
//cuz {} expects multiple csv
//spread operation if ...on the right side of '='

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

let wholeMenu=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(wholeMenu);

//iterables:arrays,strings,maps,sets
let str='jonas'
console.log(...str);

////////////spread operator on objects
//let ings=[prompt('whatcha want'),prompt('whatcha want'),prompt('whatcha want')]
//restaurant.orderPasta(...ings)

//copying objects
let newrest={...restaurant}
console.log(newrest);
//adding/modifying
newrest={...restaurant,michellin_stars:5}
newrest.name='verdad'
console.log(newrest.name,restaurant.name);
console.log(newrest);

////////////////////destructuring is like * operation.unpacks an iterable
//and assigns each one of em to a variable
//like in python a,b=2,3
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

///////////////////obj destructuring
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

/////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players.
 So create a new array ('players1Final') containing
  all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


let [players1,players2]=game.players
//console.log(players1,players2);
let [gk,...fieldplayers]=players1
//console.log(gk,fieldplayers);
let allPlayers=[...players1,...players2]
//console.log(allPlayers);
let players1Final=[...players1,'thiago','coutinho','perisic']
//console.log(players1Final);
let {team1,x:draw,team2}={...game.odds}
//console.log(team1,draw,team2);
let printGoals=function(...num){
  console.log(...num,num.length);
}
printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich')
printGoals(...game.scored)
console.log(((team1 > team2) && 'team2') ||((team2 > team1) && 'team1') || 'draw' );

*/
