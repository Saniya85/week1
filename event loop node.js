console.log(" Start of the script");

setTimeout(() => {
    console.log(" setTimeout Callback (Executed after the synchronous code)");
}, 0);
setTimeout(()=>{console.log("setTimeout");},3000);



setImmediate(() => {
    console.log("setImmediate Callback (Executed after I/O tasks)");
});


Promise.resolve().then(() => {
    console.log("Promise Callback (Executed before setTimeout/setImmediate)");
});

console.log(" End of the script");
