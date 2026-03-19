# Synchronous vs Asynchronous Code Difference between Node JS vs Python

## Default Behavior

- <h3 style="background: #F0DB4F; color: #323330; padding: 5px; border-radius: 5px"> JavaScript</h3>

  - JavaScript runs **synchronously** by default.
  - But to be short, it creates more of a illusion, which makes it look like as if JS runs **asynchronously** otherwise they say Javascript also runs .
  - It creates that illusion with the help of "Event Loop".

</br>

- To run the javascript file:
  ```
  node async_function_and_await.js
  ```
  ---

- <h3 style="background: #4B8BBE; color: #fff; padding: 5px; border-radius: 5px"> Python</h3>

  - Python also **synchronously** by default.
  - But there is no illusion, it runs as you expect synchronous code should run.
  - Although, you can use libraries like **asyncio** to make your code asynchronous, and then you can make **async functions** with it and can use **await** inside.
  - But there's a catch, asynchronous programming in python needs some overhead, you would need to introduce yourself with a concept of **"runner"** and would also need to learn a little about coroutines or coroutine objects.
  - Some popular libraries like **FastAPI**
are already asynchronous, so in order to learn them, you'll need to learn asynchronous programming in python.

</br>

- To run the python file:
  ```
    python async_function_and_await.py
  ```

---