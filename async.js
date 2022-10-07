//synchronous method
// console.log("I");
// console.log("Eat");
// console.log("Ice cream");
// console.log("With a");
// console.log("Spoon");

//asynchronous method

// console.log("I");
// console.log("Eat");
// setTimeout(() => {
//     console.log("Ice cream");
// }, 3000);
// console.log("With a");
// setTimeout(() => {
//     console.log("spoon");
// }, 1000);

//Call Back
//example 1
// function one(Call_two){
//     console.log("Step 1 completed plz call step 2");
//     Call_two();
// }
// function two(){
//     console.log("Step 2");
// }
// one(two);

//example 2

let stocks = {
    Fruits:["straberry","grapes","banana","Apples"],
    liquid:["water","ice"],
    Holders:["cone","Cup","Sticks"],
    topings:["chocolate","Peanuts"]
};
let order = (Fruit_name,call_production) => 
{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();},)
    
};
let production = () => {
    setTimeout(()=>{
        console.log("Production Has started");
        setTimeout(()=>{
            console.log("The food has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(()=>{
                    console.log("the machine has been started")
                    setTimeout(()=>{
                        console.log(`${stocks.Holders[0]}  Is Placed Under Ice Cream`)
                        setTimeout(()=>{
                            console.log(`${stocks.topings[0]} was added as topping`)
                            setTimeout(()=>{
                                console.log(`Serving Your Ice Cream`)
                            },) 
                        },) 
                    },)        
                },)
            },)        
        },)
    },)
};
order(0 ,production);
