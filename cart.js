///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const sum = [9.99, 8.99, 7.99].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, tax, couponValue) {
    // this is the function body
    console.log( "Final Bill!!");
    const total = cartTotal * (1 + tax) -couponValue;
    return total;
  }
  const myTotal = calcFinalPrice(100, .06, 2);
  console.log(myTotal);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
what is the object is going to have it it
//the cart that i will design will have the customers name because we need to know who the order is for.
then will be and email so we can give updates on the order
then weill have have address of the customer to see if delievery is an option
we will hae a phone property becuase we want to call if any issues come up
then finally we will have the total price so the customer will know what to pay.
the first properties will be string with the final two be numbers
i fell that this will benefit the customers with the cart page

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const order = {
    name: 'Jon Sno',
    email: "jonsno@thewall.com",
    address: "24 wall Drive",
    phone: 867-5309,
    total: 20
};