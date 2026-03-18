// Wrapping because I dont want to comment out the whole block
async function main_with_non_blocking_code_block() {
  async function async_function() {
    // With a non-blocking(async) code block.
    // But still we are using async funtion to see what happening.
    return "Returned string that we are getting from the async function with a non-blocking(asynchronous) code block";
  }

  // Improper way: Returns a promise
  let returned_string_without_await = async_function();

  // Proper way: Returns a string
  let returned_string_with_await = await async_function();

  console.log("Improper Way:", returned_string_without_await);
  console.log("Proper Way:", returned_string_with_await);
}

async function main_with_blocking_code_block() {
  async function async_function() {
    // With a blocking(async) code block.
    // But still we are using async funtion to see what happening.
    setTimeout(() => {
      return "Returned string that we are getting from the async function with a blocking(synchronous) code block";
    }, 2000);
  }

  // Improper way: Returns a promise
  let returned_string_without_await = async_function();

  // Proper way: Returns a string
  let returned_string_with_await = await async_function();

  console.log("Improper Way:", returned_string_without_await);
  console.log("Proper Way:", returned_string_with_await);
}

await main_with_blocking_code_block();
