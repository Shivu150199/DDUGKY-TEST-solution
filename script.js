const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "devi", age: 22, profession: "developer" },
  { name: "satish", age: 23, profession: "data-scientist" },
  { name: "dharmendra", age: 20, profession: "product-manager" },
  { name: "dharmendra", age: 20, profession: "manager" },
  
];

// 1. Print Developers
function printDeveloper() {
  let a=data.filter((item)=>item.profession=='developer')
  console.log(a)
}

// 2. Add Data
function addData() {
let obj={}
obj.name=prompt('enter your name')
obj.age=Number(prompt('enter your age'))
obj.profession=prompt('tell me your profession')
data.push(obj)
console.log(data)
}

// 3. Remove Admins
function removeAdmin() {
  let result=data.filter((item)=>item.profession!='admin')
  console.log(result)
}

// 4. Concatenate Array
function concatenateArray() {
let dummy = [
  { name: 'devi', age: 24, profession: 'developer' },
  { name: 'jane', age: 27, profession: 'admin' },
]
let result=[...data,...dummy]
console.log(result)

}

// 5. Average Age
function averageAge() {
let sum=0;
// data.forEach((item)=>sum=sum+item.age)
// let avg=sum/data.length
// console.log(avg)
for (let item in data){
  sum=sum+data[item].age
}
let avg=sum/data.length
console.log(avg)

}

// 6. Age Check
function checkAgeAbove25() {
  let result=data.filter((item)=>item.age>25)
  if(result.length>=1){
    console.log('valid')
  }else{
    console.log('invalid')
  }
}

// 7. Unique Professions
function uniqueProfessions() {
let unique=[];
  data.forEach((item)=>{
 if (!unique.includes(item.profession)) {
   unique.push(item.profession)
 }
  }
  
 
  
  
  )
console.log(unique)

}

// 8. Sort by Age
function sortByAge() {

data.sort((a,b)=>
b.name.localeCompare(a.name)
// if (a.name > b.name) {
//   return 1
// } else if (a.name < b.name) {
//   return -1
// }else{
//   return 0
// }





)
console.log(data)
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((item)=>{
    if(item.name=='john'){
      item.profession='manager'
    }
  })
  console.log(data)
}

// 10. Profession Count
function getTotalProfessions() {
  let unique = []
  data.forEach((item) => {
    if (!unique.includes(item.profession)) {
      unique.push(item.profession)
    }
  })
console.log(unique.length)
  
}
