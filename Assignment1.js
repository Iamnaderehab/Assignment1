//Question 1
let x=123;
console.log(Number(x)+7);

//Question 2
let y=0;
console.log(Boolean(y));

//Question 3
for (let index = 1; index < 10; index++) {
 if(index %2==0){
   continue;
 }

    console.log(index);
    
}

//Question 4
let arr =[1,2,3,4,5];
 let arr2= arr.filter(a => a%2==0)
 console.log(arr2);

//Question 5
let arr3=[1,2,3];
let arr4=[4,5,6];
let merge=[...arr3,...arr4];
console.log(merge);

//question 6
let day=7;
switch (day){
   case 1: {
   console.log("sunday");
    break;
   }
   case 2: {
   console.log("monday");
    break;
   }
   case 3: {
   console.log("tuesday");
    break;
   }
   case 4: {
   console.log("wesnsday");
    break;
   }
   case 5: {
   console.log("thursday");
    break;
   }
   case 6: {
   console.log("friday");
    break;
   }
   case 7: {
   console.log("saturday");
    break;
   }
   default:
    console.log("not valid");
    break;


}

//Question 7
let arr5=["a","bc","def"];
let newarr=arr5.map(a=>a.length)
console.log(newarr);


//Question 8
function div(a){
   if(a%3==0 && a%5==0){
      console.log("Divisible by both");
      
   }
   else{
    console.log("Not divisible by them");
    
   }
}
div(5);

//Question 9
const squarenum =(b)=>{
     console.log(b**2);
      
}
squarenum(4);

//Question 10

let name="john";
let age =25;
function join(){
    console.log(`${name} is ${age} years old`);
    
}
join();

//Question 11
function sum(...params) {
    let summ=0;
  
    for (let index = 0; index < params.length; index++) {
    
        summ+=params[index];
        
    }
    return summ;
    
}
console.log(sum(10,5,7));


//Question 12
setTimeout(()=>{

console.log("Success");



},3);

//Question 13
let arr7=[1,3,7,2,4];
let larage =arr7[0];
arr7.forEach(element => {
    if (element>larage) {
        larage=element;
    }
});
console.log(larage);

//Question 14
let obj={
    name:"john",
    age:30,
};
console.log(Object.keys(obj));
 

//Question 15
function cut(){
  console.log("The Quick Brown Fox".split(" "));
  

}
cut();


/*Part 2 */

//Question 1
/*for -each => builtin function dont modfiy new array but its perform on it its action of all array
for of =>  perform action pn its item or value
 */


//Question 2
/* hoisting => that trying to call variable before define it
   console.log(5);
   let x=5;

   TDZ=> in scope cant call variable before define it
   function add(){
     console.log(x)
     let x=5;
     let y=1;
   }
 */



//Question 3
/* == > is make acomparison between 2 number and make casting to values
but === > is make comparison acc to datatype and value
*/



//Question 4
/*
try=>its may be occur error 
catch=> handle error if occur
important bec dont make any error
*/


//Question 5
/*
conversion=> like casting but manually but change manually like string to number 
ex: let s=5;
let a=number(s)
console.log(a)

correction => casting but auto js will try to make it auto
ex: function sub(a,b){
  return a-b;

}
  console.log("1"-2)

*/
