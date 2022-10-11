/**
Calling the debounce function should return a new debounced version of the callback function, which takes in the same parameter
as the calback, and which, when executed should call the callback after 'delay' in milliseconds ahve passed since
the last call to this debounced function.


- Need to have a set timeout that will be triggered after the delay.
- whenever this function is called again, I need to reset that timeout and start over, if the timeout
finally expires I need to call the callback function
- This needs to return a function that needs to be called with the callback that we are provided
- I need to bind the this context into how the function is called


*/
function debounce(callback, delay, immediate = false) {
  let timeout;
  let shouldCallImmediately = immediate;

  return (...params) => {
    if (timeout) clearTimeout(timeout);
    if (shouldCallImmediately) {
      callback.apply(this, params); // binding the this context to the callback function
      shouldCallImmediately = false;
    }

    timeout = setTimeout(() => {
      callback.apply(this, params); // binding the this context to the callback function
    }, delay);
  };
}

// Do not edit the line below.
exports.debounce = debounce;
