/**
 * * Important Clarification:
 * ! setTimeOut or setInterval doesn't return a promise.
*/

// =====================================================================>

// Wrapping because I dont want to comment out the whole block
async function main_with_non_blocking_code_block() {
  async function async_function() {
    // With a non-blocking code block.
    // But still we are using async funtion to see what happening.
    return "Returned string that we are getting from the async function with a non-blocking code block";
  }

  // Improper way: Returns a promise
  let returned_string_without_await = async_function();

  // Proper way: Returns a string
  let returned_string_with_await = await async_function();

  console.log("Improper Way(Without await):", returned_string_without_await);
  console.log("Proper Way(With await):", returned_string_with_await);
}

// =====================================================================>

// main_with_blocking_code_block
async function main_with_blocking_code_block() {
  async function async_function() {
    // With a blocking code block.
    // But still we are using async funtion to see what happening.
    function returnsPromise() { // Similar to sleep function
      return new Promise((resolve) =>
        setTimeout(
          resolve("Returned string that we are getting from the async function with a blocking code block",),
          2000,
        )
      );
    }

    let string = await returnsPromise();
    return string;
  }

  // Improper way: Returns a promise
  let returned_string_without_await = async_function();

  // Proper way: Returns a string
  let returned_string_with_await = await async_function();

  console.log("Improper Way(Without await):", returned_string_without_await);
  console.log("Proper Way(With await):", returned_string_with_await);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("=======================  The Start ============================\n");

console.log("With a non-blocking code block:");
await main_with_non_blocking_code_block();

console.log("\n====================== Line after first main =============================");

console.log("\nWith a blocking code block:\n");
await main_with_blocking_code_block();

console.log("\n====================== The End ==============================");