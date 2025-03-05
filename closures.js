function coffeeShop() {
    let count = 0; // Private variable (not accessible from outside)

    return function sellCoffee() {
        count++; // Increments count
        console.log(`Cups sold: ${count}`);
    };
}

const orderCoffee = coffeeShop(); // Create a closure

orderCoffee(); 
orderCoffee(); 
orderCoffee(); 
