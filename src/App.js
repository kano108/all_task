import React from 'react'; 
import './App.css';

function App() {

    
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
  
  
  let newbanktask = [
    {amount : 100, payment : "cash"},
    {amount : 200, payment : "cash"},
    {amount : 200 , payment : "card"},
    {amount : 100, payment : "cash"},
    {amount : 150, payment : "cash"},
    {amount : 20, payment : "cash"},
    {amount : 100 , payment : "card"},
    {amount : 100 , payment : "card"},
    {amount : 100 , payment : "card"},

  ]
  console.log("newbanktask", newbanktask);
  let newbanktask2 = []
  const Handle = () => {
  
    for (let i = 0; i < newbanktask.length; i++) {
      const element2 = newbanktask[i]
      // console.log("element2",element2);
      const findIndex2 = newbanktask2.findIndex((elem)=>elem.payment === element2.payment)
       console.log("findIndex2",findIndex2);
      if(findIndex2 == -1)
      {
        
        newbanktask2.push({amount : element2.amount , payment : element2.payment})
      }
      else{
       
        // newbanktask2.map((item2)=>{
        //   if(item2.payment ===  element2.payment)
        //   {
        //        return item2.amount += element2.amount
          
        //   }
      //})
      
        newbanktask2.map((item2)=>{
          if (item2.payment === "cash") {
            return  item2.amount += element2.amount
            
          }
        })
        

      }
      
    }
  }
  Handle()
  console.log("newbanktask2",newbanktask2);
  
  return (
    <div className="App">
     <h1>Create All Task </h1>
    
  
    </div>
  );
}
export default App;
