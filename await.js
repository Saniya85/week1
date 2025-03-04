function orderFood(foodName) {
    return new Promise((resolve, reject) => {
        console.log(`Ordering ${foodName}....`);
        
        setTimeout(() => {
            if (foodName === "Burger") {
                reject("Sorry, Burger is out of stock ");
            } else {
                console.log(`${foodName} is ready!`);
                resolve(foodName);
            }
        }, 3000);
    });
}

async function orderProcess() {
    try {
        let food1 = await orderFood("Pizza");
        console.log(`Eating the delicious ${food1} `);

        let food2 = await orderFood("Shake");
        console.log(`Drinking the refreshing ${food2} `);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

// Calling the async function
orderProcess();

