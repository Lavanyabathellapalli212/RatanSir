import { Fragment } from "react";

//function App()
//{
  //return(
   // <react:Fragment>
 // <h1> chicken mutton   </h1>
 // <h2> chicken mutton 

 // </h2>
 // </react:Fragment>
 // )
//}
//export default App;

//declare  varibles.....

 //function App()
 //{
  //const username="lavanya";
  //const posword="lavanya@212";
  //return(
    //<>
    //<h1>Login Details</h1>
    //<p>username:{username}</p>
    //<p>userposword:{posword}</p>
   // </>
 // )
 //}
 //export default App;

 //declare only one object...

//  function App()
//  {
//   const employee={id:101,name:"lavanya",salary:10000.45}
//    return(
//     <>
//     <h1>employee data </h1>
//     <p> employee id:{employee.id}</p>
//     <p>employee name:{employee.name}</p>
//     <p>employee salary:{employee.salary}</p>
//     </>
//    )

//  }
// export default App;


//products data .....
// function App()
// {
//   const products={id:121,name:"phone" ,price:250000,available:"false"};
//     return (
//       <>
//       <h1>product details</h1>
//       <p>products id:{products.id}</p>
//       <p>products name:{products.name}</p>
//       <p>products price:{products.price}</p>
//       <p>products available:{products.available==true ? "in stock" : "out of stock"}</p>

//       </>
//     );
// }
// export default App;



//var key word using...


// function App()
// {
//   const food=[
//     {id:101,name:"Chicken",category:"Non veg"},
//     {id:102,name:"Bringal",category:"Veg"},
//     {id:103,name:"Egg",category:"Non veg"},
//     {id:104,name:"ladesfinger,category:veg"}

    
//   ];
//   const fooditems=food.map(food=>
//                     <li key={food.id}
//           style= {{colour:food.category=="veg"?"green":"red"}}> 
//           id:{food.id},name:{food.name},category:{food.category}</li>
//   );
//   return(
//     <>
//     <h1>food Data</h1>
//     <ul>{ fooditems}</ul>
//     </>
//   );

                    
  

// }
// export default App;





//  function App() {
// const items = [
//     { id: 101, name: "Chicken", category: "Non veg" },
//     { id: 102, name: "Mutton", category: "Non veg" },
//      { id: 103, name: "Egg", category: "Non veg" },
//    ];

// // //   // Filter non-veg items correctly (correcting filter condition)
//   const nonvegitems2 = items.filter((item) => item.category == "veg");

// // //   // Map non-veg items into a list
//   const Nonvegitems3 = nonvegitems2.length > 0 ? (
//     nonvegitems2.map((item) => <li key={item.id}>{item.name}</li>)
//   ) : (
//     <li>No non-veg items available</li>
//   );

//    return (
//      <>
//       <h1>Non-Veg Data</h1>
//      <ul>{Nonvegitems3}</ul>
//    </>
//   );
//  }

// export default App;


//veg and non veg items printing ....
function App()
{
  const items=[
    {id:101,name:"chicken",category:"nonveg"},
    {id:102,name:"mutton",category:"nonveg"},
    // {id:103,name:"panner-curry,category",category:"veg"},
    // {id:104,name:"vegbiryani",category:"veg"}
  ];
  const   listitems=items.map(item=>
                (<li key ={item.id}
                  style={{color:item.category=="veg" ? "green":"red"}}>
                  id:{item.id},name:{item.name},category:{item.category}

                </li>
  ));

  const vegitems=items.filter(item=>items.category=="veg").map(item=>
                      (<li key={item.id} style={{color:"blue"}}>
                        id:{item.id}name:{item.name},category:{item.category}
                      </li>
                      )
  );

  const nonvegitems=items.filter(item=>items.category=="nonveg").map(item=>
           (<li key={item.id}
            style={{color:"brown"}}>
            id:{item.id}name:{item.name}category:{item.category}
            </li>

           )
  );
  const checkvegitems=items.filter(item=>item.category=="veg");
  const vegitems2=checkvegitems.length> 0 ? checkvegitems.map(item=>
  (<li key={item.id}>id:{item.id}name:{item.name}cattegory:{item.category}</li>

  )
  )
  :'veg products not there';

  const checknonvegitems=items.filter(item=>item.category=="veg");
  const nonvegitems2=checknonvegitems.length >0 ? checknonvegitems.map(item=>(
    <li key={item.id}>id:{item.id}name:{item.name} category:{item.category}

    </li>
  ))
  :'nonveg oroducts not there ';
  return(
    <>
  

    <h1  style={{color:"red"}}>food items</h1>
    <ul>{listitems}</ul>
    <h1 style={{color:"brown"}}>veg items</h1>
    <ul>{vegitems}</ul>
    <h1 style={{color:"purple"}}>non veg items </h1>
    <ul style={{color:"pink"}}>{nonvegitems}</ul>
    <h1>checkveg items</h1>
    <ul>{vegitems2}</ul>
    <h1>checking nonveg items</h1>
    <ul>{nonvegitems2}</ul>
    </>
  );
}
export default App;
