import React from "react";
import "./App.css";

function App() {


  //-------------------------------------------------task-1-----------------------------------------------//

  // let arrName = [
  //   { name: "kishan", product: "mobile", qty: 5 },
  //   { name: "kishan", product: "mobile", qty: 5 },
  //   { name: "jay", product: "tv", qty: 5 },
  //   { name: "jay", product: "tv", qty: 5 },
  //   { name: "gaurang", product: "watch", qty: 5 },
  //   {name : "meet" , product : "computer" , qty : 10},
  //   {name : "meet" , product : "computer" , qty : 10}
  // ];
  // console.log("arrName", arrName);

  // let newArrName2 = [];
  // const handle = () => {
  //   for (let i = 0; i < arrName.length; i++) {
  //     const element = arrName[i];
  //     console.log("element", element);
  //     if (newArrName2.length === 0) {
  //       newArrName2.push({name: element.name,product: element.product,qty: element.qty});
  //       console.log("newArrName2",newArrName2);
  //     }
  //     else{
  //       const findIn = newArrName2.findIndex((elem)=>elem.name === element.name)
  //        console.log("findIn",findIn);

  //       if(findIn === -1)
  //       {
  //         newArrName2.push({name: element.name,product: element.product,qty: element.qty})
  //       }
  //       else{
  //         newArrName2.map((item)=>{
  //             if(item.name === element.name)
  //             {
  //               return ( item.qty +=element.qty)
  //             }
  //         }
  //         )
  //       }

  //     }
  //   };
  // }
  // handle();
  // console.log("newArrName2", newArrName2);


///---------------------------------------------------------------task-2-------------------------------------------------//

  // let newbanktask = [
  //   { amount: 100, payment: "cash" },
  //   { amount: 200, payment: "cash" },
  //   { amount: 200, payment: "card" },
  //   { amount: 100, payment: "cash" },
  //   { amount: 150, payment: "cash" },
  //   { amount: 100, payment: "card" },
  //   { amount: 200, payment: "cash" },
  //   { amount: 100, payment: "card" },
  //   { amount: 100, payment: "card" },
  //   { amount: 200, payment: "cash" }
  // ];
  // console.log("newbanktask", newbanktask);
  

  // let newbanktask6 = [];
  // let finalobject = {};

  // for (let i = 0; i < newbanktask.length; i++) {
  //   const element3 = newbanktask[i];  
  //   const findIn = newbanktask.findIndex((item) => item.payment === element3.payment);
  //   console.log("findIn", findIn);
    
  //   if (findIn === 0) {
  //       newbanktask6.push({ amount: element3.amount, payment: element3.payment });
  //     }
  //   }
    
  //   console.log("newbanktask6", newbanktask6);
  //   const mulvalue = newbanktask6.reduce(function (total, currentValue) {
  //     return total + currentValue.amount;
  //   }, 0);
  // console.log("amount : ", mulvalue);

  // finalobject.payment = "cash";
  // finalobject.amount = mulvalue;
  // console.log("finaobject", finalobject);
  
  //----------------------------------------------------------reduce(samjavu)----------------------------------------//
  // const filtervalue = newbanktask.filter((elem)=>elem.payment === "cash")
  // console.log("filtervalue",filtervalue);
  //  newbanktask6.push({amount : filtervalue.amount , payment : filtervalue.payment})
  //----------------------------------------------------------reduce(samjavu)---task - 3 -----------------------------------//

let a = [1,2,3,4]
//syntax:array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//total1 = 1
//total2= 2,3,4
//total3=current index(1,2,3)
//total4=all value assign kare [1,2,3,4]

let text =(total1, total2 , total3, total4) =>{
  console.log("toatl1 : ",total1);
  console.log("toatl2 : ",total2);
  console.log("toatl3 : ",total3);
  console.log("toatl4 : ",total4);
  return total1 - total2
}
let b = a.reduce(text)
console.log("b",b);


  return (
    <div className="App">
      <h1>Create All Task </h1>
      {/* <h1>{finalobject.amount}</h1>  
      <h1>{finalobject.payment}</h1>   */}
    </div>
  );
}
export default App;
