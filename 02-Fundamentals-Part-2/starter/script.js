"use strict";
/*

let has_a_license=false;
const pass_test =true;
if (pass_test) has_a_license=true;
if (has_a_license) console.log('me can drive lolz')
//const interface='what'
//const new ='sip'
//const private='uh huh'   
//const if ='ohh'

*/
////////////////////////////////////////////////////////functions
/*

function square(a) {
    console.log(a**2);
}
square(5);// calling/running/invoking a function

function cube(b=6) {
    let n
    n=b+1
    console.log((n+1))
    return n**3;
}cube(5);
//printing the output directly
console.log(cube(10))

//storing the output of a function

let math=cube(12);
console.log(math)


//valid cuz provided a default value already
console.log(cube())

//whats declared only in the function stays only in the function
//console.log(n+1)

//cannot add stuff after the return statement in the same block level

//number and console.log are built in funcs


/////////////////////////////assignment
function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity} `
}
console.log(describeCountry('s.korea',52,'seoul'))
console.log(describeCountry('england',53,'london'))
console.log(describeCountry('japan',126,'tokyo'))
*/

/////////////////////////////////////////////////////function expression

//diff bw dec and exp is,in case of dec u can call the func first ,then the dec
//whereas in exp u cant call before initialization

/*

let next_num= function(n){
    return n+1
}
console.log(next_num(2))



//////////////////////assignment
describeCountry=function(population){
    return `${population*100/1440}%`
}
console.log(describeCountry(52))
console.log(describeCountry(53))
console.log(describeCountry(126))
*/

///////////////////////////////////////arrow function

/*

//let [func name] = [function parameter] => [what to return]
let fourth_power=num => num**4

//also can save the value of the variable declared to another var

//storing the output to any variable and printing that
let ans=fourth_power(3)
console.log(ans)

//directly printing the output of func
console.log(fourth_power(2))

//single param,multiple lines in the func body

let half_of_half= val=>{
    let half=val/2
    let fourth=half/2
    return fourth
}
console.log(half_of_half(8))

//2 params,multiple lines in func body

let half_of_half_and_name= (age,name)=>{
    let half=age/2
    let fourth=half/2
    return `i am ${name} and was ${fourth} years old in ${2022-age-fourth}`
}
console.log(half_of_half_and_name(18,'mazzikin'))



let describe_population=(country,population)=> `${country} has ${population} million people,which is about ${percentage_of_world(population)}% of the world`

//////////////////////////////assignment

let percentage_of_world=population=> (population*100)/7900

console.log(describe_population('china',1441))

console.log(describe_population('southkorea',51.78))

console.log(describe_population('japan',125.76))

*/
/*

///////////////////////////////////////
// Coding Challenge #1


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), 
// and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀 

let calcAverage=(score1,score2,score3) => (score1+score2+score3)/3
let avgDolphins=calcAverage(23, 34,27)
let avgKoalas=calcAverage(85,41,54,)
let checkWinner=function (){
    if (avgDolphins >= 2*avgKoalas) console.log(`Dolphins win with a score of ${avgDolphins} vs ${avgKoalas}`)
    else if (avgKoalas >= avgDolphins*2 ) console.log(`Koalas win with a score of ${avgKoalas} vs ${avgDolphins}`)
    else {
        console.log('nobody wins')}
}
checkWinner()

////////////////////////////////assignment

let describePoPulation=(country,population) => `${country} has ${population} million peops,which is about ${percentage_of_world(population)}% of the world`
let percentage_of_world=population=> (population*100)/7900
console.log(describePoPulation('japan',125.76))
console.log(describePoPulation('china',1441))
console.log(describePoPulation('southkorea',51.78))
*/

///////////////////////////////arrays
//const doesnt let re assignment of primitive values.but array is not a primitive value.but like u cannot change the total const <array name>
/*

let movies=['lucifer','eternals','jjk','venom']
console.log(movies)

let movie=new Array('aot','shang-chi','good doctor','spider man')
console.log(movie)
console.log(movie[1],movie[3])
console.log(movie.length)
console.log(movie[movie.length-1])

movie[2]='venom2'
console.log(movie)
let fav='ragnarok'
let marvel=['ironman',22-11,movies,movie,fav]
console.log(marvel)

///////////////////////////////assignment
let percentage_of_world = (population) => (population * 100) / 7900;
let populations = [51.78, 125.76, 67, 5.98];
console.log(populations.length === 4);

let percentages = new Array(
  percentage_of_world(populations[0]),
  percentage_of_world(populations[1]),
  percentage_of_world(populations[2]),
  percentage_of_world(populations[3])
);
console.log(percentages);

////////////////////////////////Basic Array Operations (Methods)
let homo=['sapiens']
console.log(homo)
//pop removes the last element
homo.pop()//returns an empty array
console.log(homo)//printing the array
console.log(homo.pop())//returns undefined since no elements to pop

let homos=new Array('phobes')
console.log(homos)

let join=word=>'homo'+word

let homs=new Array(join(homos))
//push to last place
//push is just another function.it returns the new length of the array
homs.push('neanderthals')
console.log(homs.push('anchovies'))
let len=homs.push('homosphere')
console.log(len)
//unshift at first place
homs.unshift('stars')
console.log(homs.unshift('galaxies'))//alsom returns the length of new array
//pop removes the last element
homs.pop()
console.log(homs)//printing the array
console.log(homs.pop())//printing the return value of the array
homs.shift()//remove first element
console.log(homs)
console.log(homs.indexOf('hela'))//doesnt exist gives -1
console.log(homs.indexOf('stars'))
//to check if the array has an element.another method
//this method uses === not ==.
console.log(homs.includes('thor'))
if (homs.includes('ragnarok')) {
    console.log('woman of culture')
}else {
    console.log('include ragnarok')
    homs.push('ragnarok')
}
console.log(homs)


////////////////////////assignment
let neigh=new Array('china','bhutan','sri lanka')
neigh.push('utopia')
console.log(neigh)
neigh.pop()
console.log(neigh)
if (!neigh.includes('germany')) console.log('not european')
let reqin=neigh.indexOf('sri lanka')
console.log(reqin)
neigh[reqin]='s.korea'
console.log(neigh)

*/

///////////////////////////////////////
// Coding Challenge #2

/*

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
 calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
  Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function!
 So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀

/////////////////////method-1/////////////////////////
let tip;
let calcTip=function(value) {
    if (50<=value<=300){
        tip=0.15*value
    }else{
        tip=0.2*value
    }
    return tip;
}
///////////////////////method-2/////////////////////////////////////
 let calcTip=function(value) {
     return 50<=value<=300? 0.15*value :0.2*value
//}
////////////////////////method-3//////////////////////////////////////
let calcTip=value => 50<=value<=300? 0.15*value :0.2*value

let bills=[125,555,44]
let tips= new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]))
let total=new Array(calcTip(bills[0])+bills[0],bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2]))
console.log(bills,tips,total)
*/

////////////////////////////////objects
//////////////u get undefined when u access a property on an object that doesnt exist
/*

let marvel={
    avengers2:'age of ultron',
    thor3:'ragnarok',
    avengers3:'infinity war',
    avengers4:'end game',
    thor2:'dark world',
    watchtime:3000,
    ironman:[1,2,3],
    luckyLoves:'ironman'
}
//thor2,.... are properties,ragnarok,... are values
// console.log(marvel)
// //////<object name>.<property>
// console.log(marvel.thor3)
// ////////////<object name>['<property>']
// console.log(marvel['thor2'])

// let time='watch'
// ////////////can put expression in []. dot notation cant do this
// console.log(marvel[time+'time'])
// let fav=prompt('fav movie?')
// console.log(marvel[fav])

marvel.spiderman='homecoming'
marvel['spiderman2']='far away from home'

// console.log(`${marvel.luckyLoves} has ${marvel.ironman.length} movies.the first one is ${marvel.ironman[0]}`)
console.log(marvel)


////////////////////////assignment
let my_country={
    country:'s.korea',
    capital:'seoul',
    language:'han-guk',
    population:53,
    neighs:['n.korea','japan','china']
}
console.log(my_country)
console.log(`${my_country.country} has ${my_country.population} million ${my_country.language}-speaking folks, ${my_country.neighs.length} neigh countries and capital called ${my_country.capital}`)
console.log(`${my_country.country} has ${my_country.population+2} million ${my_country.language}-speaking folks, ${my_country.neighs.length} neigh countries and capital called ${my_country.capital}`)
console.log(`${my_country.country} has ${my_country['population']+2} million ${my_country.language}-speaking folks, ${my_country.neighs.length} neigh countries and capital called ${my_country.capital}`)
*/
/*
let my_country={
    country:'s.korea',
    capital:'seoul',
    language:'han-guk',
    population:53,
    neighs:0,
    // neighs:['n.korea','japan','china'],
    pop_diff:function (population){
        //*this* is just the object which is calling the method here
        // console.log(this)
        // return 144-this.population;
        //we  just created a new property.cuz *this* reps the obj here 
        this.diff=144-this.population
        return this.diff;
    },
    getSummary:function(){
        return `${this.country} has ${this['population']} million ${this.language}-speaking folks, ${this.neighs ? `has ${this.neighs.length}` : 'has no'} neigh countries and capital called ${this.capital}`;
    }
};
//*this* is used instead of my_country here to imprve code reusability
//ex:change the obj name ,hence will call the obj with the latest name.ofc my_cuntry.diff wouldnt work anymore
//but this.diff will
console.log(my_country.pop_diff())
///////////my_country.pop_diff gets the value which here happened to be function,then u pass in the argument
// console.log(my_country['pop_diff'](99))
console.log(my_country.diff)
console.log(my_country.getSummary())
*/
///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
 This time, let's use objects to implement the calculations! 
 Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their
full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI
 (the same method on both objects). 
Store the BMI value to a property, and also return it from 
the method.
3. Log to the console who has the higher BMI, together with 
the full name and the respective BMI.
 Example: "John Smith's BMI (28.3) is higher 
 than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.BMI =this. mass / this.height ** 2;
      return this.BMI;
    }
  };

  let John = {
    fullName: 'John smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.BMI = this.mass / this.height ** 2;
      return this.BMI;
    }
  };
  //here mark.BMI wont work in the first line because mark.calcbmi isnt called yet.hence 
  //mark.calcbmi in the first line and mark,BMI in the second line works
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is ${mark.calcBMI() > John.calcBMI ()? 'higher':'lower'} than ${John.fullName}'s BMI (${John.calcBMI()})`)
  console.log(mark.BMI,John.BMI)
  
mark.calcBMI()
John.calcBMI()
console.log(`${mark.fullName}'s BMI (${mark.BMI}) is ${mark.BMI > John.BMI ? 'higher': 'lower'} than ${John.fullName}'s BMI (${John.BMI})`)
    
*/

///////////////////////////////for loop
/*
for (let i=1;i<=10;i++){
    console.log(`lifting weights rep ${i}`)
}

let movie=['thor',
'chris hemmy',
 5-2,
 'op',
'great',
[1,'dark world','ragnarok']]
let types=[]
for (let i=0;i < movie.length;i++) {
    console.log(movie[i],typeof movie[i])
    // types[i]=movie[i]
    types.push(movie[i])
}
console.log(types)

let years=[1991,2007,1969,2020]
let ages=[]
for(let i=0;i< years.length;i++){
    
    ages.push(2037-years[i])
}
console.log(ages)

let types=[]
for (let i=0;i < movie.length;i++) {
     //continue here refers to skip this part of the loop and move to next elt
    if (typeof movie[i]!== 'string') continue;
    console.log(movie[i],typeof movie[i])

}
for (let i=0;i < movie.length;i++) {
    //break terminates the whole iteration then and there
    if (typeof movie[i]=== 'number') break;
    console.log(movie[i],typeof movie[i])

}
for (let i=movie.length-1;i>=0;i--){
    console.log(movie[i],typeof movie[i])
}
 for (let i=1;i<4;i++){
     console.log(`--------exercise-${i}----------`)
     for (let j=1;j<6;j++){
         console.log(`----------${i}-rep-${j}------`)
     }
 }
*/
///////////////////////////: Looping Arrays, Breaking and Continuing assignment

/*
percentage_of_world = (population) => (population * 100) / 7900;
populations = [51.78, 125.76, 67, 5.98];
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentage_of_world(populations[i]));
}
console.log(percentages2);
*/

///////////////Looping Backwards and Loops in Loops assignment

/*
let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  if (listOfNeighbours[i].length == 1) {
    console.log(`Neighbour:${listOfNeighbours[i]}`);
  } else {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
      console.log(`Neighbour:${listOfNeighbours[i][j]}`);
    }
  }
}

*/

///////////////////while loop

/*
let j=1//explicit dec
while (j<3){//runs while the condition is true
    console.log(`-------rep-${j}------`)
    j+=1//explicit dec
}
 let dice=Math.trunc(Math.random()*7);
while (dice!==6){
    console.log(`rolled a ${dice}`)
    dice=Math.trunc(Math.random()*7);
    if (dice===6)console.log('yay 6')
}
*/
///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more,
 this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals 
('tips' and 'totals')
3. Use the 'calcTip' function we wrote before 
(no need to repeat) to calculate tips and total values 
(bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method
 to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an 
array called 'arr' as an argument. 
This function calculates the average of all numbers 
in the given array. This is a DIFFICULT challenge 
(we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array.
   To do the addition, start by creating a variable 'sum' 
   that starts at 0. Then loop over the array using a for loop.
   In each iteration, add the current value to the 'sum' variable. 
   This way, by the end of the loop, you have all values added
    together
  4.2. To calculate the average, 
  divide the sum you calculated before by the length of the array
   (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀

let bills=new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52 )
let tips=[]
let totals=[]
let calcTip=value =>  value>=50 && value<=300 ? 0.15*value : 0.2*value
for (let i=0;i<bills.length;i++) {
    tips.push(calcTip(bills[i]))
    totals.push(tips[i]+bills[i])
}
console.log(tips,totals)

let calcAverage=function(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        
        sum=sum+arr[i];
}return sum/arr.length
}
console.log(calcAverage(totals))*/

/////////////////The while Loop assignment

/*
let percentage_of_world = (population) => (population * 100) / 7900;
let populations = [51.78, 125.76, 67, 5.98];
let percentages2 = [];
let i = 0;
while (i < populations.length) {
  percentages2.push(percentage_of_world(populations[i]));
  i++;
}
console.log(percentages2);
*/
