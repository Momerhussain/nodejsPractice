// console.log('Hello, world!')
// let arr1=[1,2,3,4,5]
// let arr2=[3,4,5,6,7]
	
// let arr3 =arr1.concat(arr2);
// console.log('without filter',arr3)
// arr3=arr3.filter((item,index)=>{
// 	return (arr3.indexOf(item)==index)
// })
// console.log('with filter',arr3);

// let arr = [
//   { id: 15 },
//   { id: -1 },
//   { id: 0 },
//   { id: 3 },
//   { id: 12.2 },
//   { },
//   { id: null },
//   { id: NaN },
//   { id: 'undefined' }
// ]

// let invalidEntries = 0

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true
//   }
//   invalidEntries++
//   return false;
// }

// let arrByID = arr.filter(filterByID)

// console.log('Filtered Array\n', arrByID)
// // Filtered Array
// // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

// console.log('Number of Invalid Entries = ', invalidEntries)


// a=[8,7,6,5,4,-1]
// l=a.length
// sort=a.sort();
// console.log(a);
// console.log("second highest",sort[l-2]);

// a2=[8,7,6,5,4,-1]
// l=a2.length
// sort=a2.sort();
// console.log(a);
// rev=sort.reverse();
// console.log("second lowest",rev[l-2]);

// let map=a2.map(a=>a+1)
// console.log("without map",a2);
// console.log("with map",map);


// let n=[1,4,9]
// let root=n.map(function(num){
//     return Math.sqrt(num)
// })
// console.log('without root',n);
// console.log('root',root);

// let kvArray = 
// [
//     {key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30}
// ]

// let re=kvArray.map(obj=>{
//     let reMap={}
//     reMap[obj.key]=obj.value;
//     return reMap
// })
// console.log(re);
// console.log(kvArray);


// var filter = {
//     address: 'England',
//     name: 'Mark'
//   };
//   var users = [
//       {
//       name: 'John',
//       email: 'johnson@mail.com',
//       age: 25,
//       address: 'USA'
//     },
//     {
//       name: 'Tom',
//       email: 'tom@mail.com',
//       age: 35,
//       address: 'England'
//     },
//     {
//       name: 'Mark',
//       email: 'mark@mail.com',
//       age: 28,
//       address: 'England'
//     }
//   ];


//   users=users.filter(function(item){
//       for(var key in filter){
//           if(item[key]===undefined || item[key]!=filter[key]){
//             return false;
//           }
//       }
//       return true;

//   })
//   console.log(users);
  

//   let arr4=[1,2,3,4,5]
//   let map2=arr3.map(x=>x*x.length)
//   console.log(map2);

//   const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

//   coldday=weeklyReadings.filter(days=>{
//       return days<20
//   })
//   console.log(coldday);

//   const redArray=[1,2,3,4,5]
//   const fact=redArray.reduce((acc,item)=> acc*item,1)
//   console.log('factorial',fact);

//   const sum=redArray.reduce((acc,item)=> acc+item,0)
//   console.log(sum);

//   const lineItems = [
//     { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
//     { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
//     { description: 'Butter', quantity: 2, price: 6, total: 12 }
//   ];

//   const total=lineItems.reduce((sum,li)=>sum+li.total,0)
//   console.log(total);
  
//   var rmap=lineItems.map(li=>li.total).reduce((sum,val)=>sum+val,0)
//   console.log(rmap);

//   const persons = [
//     {
//         name: 'Person 1',
//         age: 32
//     },
    
//     {
//         name: 'Person 2',
//         age: 40
//     },
// ];

// if(persons.some(person=>{
//     return person.age>30
// }))
// {
//     console.log('exist');

// }
// const fruits = ['apple', 'banana', 'mango', 'guava'];
// if(fruits.some(fruit=>{
//     return fruit=='appleaa'
// })){
// console.log('fruit exist');
// }
// else{
//     console.log("fruit does not exist");
// }


// const entries = [
//     {
//         id: 1
//     },
    
//     {
//         id: 2
//     },
    
//     {
//         id: 3
//     },
// ];

// if(entries.every(e=>{
//     return Number.isInteger(e.id) && e.id>0;
// })){

//     console.log('correct entries');
// }

// // duplicate element in array

// p=["Java", "JavaScript", "Python", "C", "Ruby", "Java"]

// for(i=0;i<p.length;i++){
//     for(j=i+1;j<p.length;j++){
//         if(p[i]===p[j]){
//             dup=p[j];
//             console.log(dup,'dup');
//             break;
            
//         }
//     }
// }


// // first non repeating element in string 

// s='Who is your friend?'
// for(i=0;i<s.length;i++){
//     var c=s.charAt(i);
//     if(s.indexOf(c)==i && s.indexOf(c,i+1)==-1){
//         console.log(c);
//         return c;
//     }
// }
// console.log(c);


// addition 
var first=5
var second=1
console.log(first-(-second))

//subtraction
console.log(first+~second+1)


//swap values without using 3rd varibale
let a = 5, b = 6;
// [a, b] = [b, a];
// console.log("before a:",a,'b:',b);

// b = [a, a = b][0];
// console.log("a:",a,'b:',b);
console.log("a",a,"b",b);
a=a+b;
console.log("a=a+b ,a=",a);
b=a-b;
console.log("b=a-b ,b=",b);
a=a-b;
console.log("a=a-b ,a=",a);
console.log("a=",a,"b=",b);


