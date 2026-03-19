import { setTimeout } from 'timers/promises';
// This setTimeout function is a promise-based version of the traditional setTimeout, which allows us to use it with async/await syntax.

// With a blocking code block.
async function async_function(){
    await setTimeout(2000)
    console.log("Hello from blocking code block")
}

// With a non-blocking code block.
async function async_function2(){
    console.log("Hello from non-blocking code block")
}

// To run asynchronous code in python, you need a runner
await async_function2()
await async_function()