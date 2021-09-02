'use strict';
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

*/

/////////////////////////////////////////////////////function expression

//diff bw dec and exp is,in case of dec u can call the func first ,then the dec
//whereas in exp u cant call before initialization

/*

let next_num= function(n){
    return n+1
}
console.log(next_num(2))

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
let percentage_of_world=population=> (population*100)/7900
let populations=[51.78,125.76,67,5.98]
console.log(populations.length===4)

let percentages=new Array(percentage_of_world(populations[0]),percentage_of_world(populations[1]),percentage_of_world(populations[2]),percentage_of_world(populations[3]))
console.log(percentages)

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
//////////////u get defined when u access a property on an object that doesnt exist
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
*/
