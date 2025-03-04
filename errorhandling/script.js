document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let messageElement = document.getElementById("message");

    try {
        //  Step 1: Validate Input
        if (!username || !password) {
            throw new Error("Username and password are required!");
        }

        // Step 2: Call the "backend" (simulated with setTimeout)
        let userData = await fakeLoginAPI(username, password);
        
        // Step 3: Success Message
        messageElement.innerText = `Welcome, ${userData.username}!`;
        messageElement.style.color = "green";

    } catch (error) {
        // Step 4: Handle Errors
        messageElement.innerText = error.message;
        messageElement.style.color = "red";
        console.error("Error:", error.message);
    } finally {
        console.log("Login process completed.");
    }
});

// Fake Backend API (Simulating a Server)
function fakeLoginAPI(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating database user
            const fakeUser = { username: "admin", password: "12345" };

            if (username === fakeUser.username && password === fakeUser.password) {
                resolve(fakeUser); // Successful Login
            } else {
                reject(new Error("Invalid username or password!"));
            }
        }, 2000); // Simulating delay
    });
}
