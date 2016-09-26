/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker(replaced by material)
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

//Your code here
var product1 = {
	name:"adidas Originals Women's Stan Smith W Fashion Sneaker",
	price:90.00,
	material:"Leather"
}
var product2 = {
	name:"adidas NEO Women's Baseline W Fashion Sneaker",
	price:64.95,
	material:"Leather"
}
var product3 = {
	name:"adidas Performance Women's Mana RC Bounce Running Shoes",
	price:79.90,
	material:"Textile/Synthetic"
}
var product4 = {
	name:"JACKSHIBO Men Women Unisex Couple Casual Fashion Sneakers Breathable Athletic Sports Shoes",
	price:49.99,
	material:"fabric"
}
productList.push(product1,product2,product3,product4);
//Hint: productList.push(newObject) will add the object you just created to the array

console.log(productList);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    //Your code here
    if(productList[i].price<50.00){   
	    console.log("The product "+productList[i].name+" costs $"+productList[i].price+", and is a match"); 
	}
}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

//3.2 then, divide total price by the number of products, using proudctList.length
var totalPrice=0;
for(var i=0; i<productList.length;i++){
 	totalPrice+=productList[i].price;
 }
var averagePrice=totalPrice/productList.length;
console.log("The average price of all the products is $"+averagePrice);
/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */


function comparePrice(p){

    var numOfMatchingProducts = 0;

    //Your code here
    for(var i=0; i<productList.length;i++){
    	if(productList[i].price<p){
    		numOfMatchingProducts+=1;
    	}
    }
    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
