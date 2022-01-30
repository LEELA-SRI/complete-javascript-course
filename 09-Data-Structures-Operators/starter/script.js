'use strict';

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

///////////////////////////////////////Working With Strings
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';


//retrieving elt at an index
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

//length of string
console.log(airline.length);
console.log('B737'.length);

//index of an elt
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
//-1 = not found

//slicing
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));


const airline = 'TAP Air Portugal';

//changing cases
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();

//for cutting spaces
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('boo', 'gate'));

//replacing all instances
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
//check for a subtring
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written 
in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM 
(see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
 Some_Variable 
 calculate_AGE
 delayed_departure
 
 SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
 underscoreCase      ✅
 firstName           ✅✅
 someVariable        ✅✅✅
 calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words,
like a_b
HINT 3: Start without worrying about the ✅.
Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose,
so start watching the solution in case you're stuck. 
Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//let count=0
let btn=document.querySelector('button')

btn.addEventListener('click',function(){
  let text=document.querySelector('textarea').value
  let elts=text.split('\n');
  for (let [count,content] of elts.entries()){
    // let parts=[...content.split('_')]
    // let toreturn=[]
    // toreturn.push(parts[0].toLowerCase()+parts[1][0].toUpperCase()+parts[1].slice(1).toLowerCase());
    // for (let i of toreturn){
      //   count+=1  
      //   console.log(i.trim()+`${'✅'.repeat(count)}`)
      let [one,two]=content.toLowerCase().trim().split('_')
      let final=one+two[0].toUpperCase()+two.slice(1)
      console.log(`${final.padEnd(20)}${'✅'.repeat(count+1)}`);
    }
  })
  
  */
 
 // Data needed for a later exercise
 const flights =
   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  let elts=flights.split('+');
  for (let i of elts){
    i=i.split(';')
    let symbol=i[0].indexOf('_Delayed') ? '':'🛑'

    let op=`${symbol} ${i[0].replaceAll('_',' ')} from ${i[1].slice(0,3).toUpperCase()} to ${i[2].slice(0,3).toUpperCase()} (${i[3].replace(':','h')})`;
    console.log(op.padStart(50));
  }
/*
////////////////////////////////////set
let newset= new Set([1,2,3,4,5,4])
console.log(newset);

console.log(new Set('leela'));

//length of a set
console.log(newset.size);

//checking for an elt
console.log(newset.has(8));

//adding to a set
console.log(newset.add('hola'));

//deleteing an elt
newset.delete(4)

//deleting all the elts
//newset.clear()
console.log(newset);

//looping
for (let i of newset) console.log(i);

//conversion from set to array
let array=[...newset]
console.log(array);
*/

/*
/////////////////////////////////////////map
let newmap=new Map()

//adding elts
newmap.set(1,2)
newmap.set('how','are you')
newmap.set('who','r u')
newmap.set('my','name').set('is','nirvana').set(true,'human').set(false,'plutonian')
console.log(newmap);

///////////////////reading data
console.log(newmap.get(1));
console.log(newmap.get(newmap.get('who')== 'r u'));

///checking for an elt
console.log(newmap.has('is'));

///deleting an elt using a key
newmap.delete(2)
console.log(newmap);

//deleting all using .clear()
//length using .size

// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);


// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));


////converting back to arrays
let newarr=[...question]
console.log(newarr);
console.log(question.entries());
console.log(question.keys());
console.log([...question.values()]);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time,
 we have a map with a log of the events that happened during the game.
  The values are the events themselves, and the keys are the minutes 
  in which each event happened (a football game has 90 minutes plus 
    some extra time).

1. Create an array 'events' of the different game events that happened
 (no duplicates)
2. After the game has finished, is was found that the yellow card from 
minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened,
 on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
marking whether it's in the first half or second half 
(after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

let events=[...new Set(gameEvents.values())]
console.log(events);

gameEvents.delete(64)
let time=[...gameEvents.keys()].pop()
console.log(`an event happened every ${time/gameEvents.size} mins`);

for(let [k,v] of gameEvents){
  console.log(k<45 ? `[FIRST HALF] ${k}:${v}` :`[SECOND HALF] ${k}:${v}`);
}
*/

/*

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

/*

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
