import asyncio

# With a blocking code block.
async def async_function():
    await asyncio.sleep(2)
    print("Hello from blocking code block")

# With a non-blocking code block.
async def async_function2():
    print("Hello from non-blocking code block")

# To run asynchronous code in python, you need a runner
asyncio.run(async_function2())
asyncio.run(async_function())


# Its simple, if there's any asynchronous code
# Keep it in runner.