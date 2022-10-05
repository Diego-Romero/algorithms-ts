/**
 * Need to call the debounce function after n amount of seconds have passed in the delay parameter.
 * If the immediate flag is set to true, it should trigger the callback function, but only the first time around - then it should call it again only after the delay has passed.
 * We should return the debounce function after it has been called again every time.
 *
 * Note, we should also have the this context of the debounced function callers here.
 */

// if the function gets called again. we need to remove the timeout that is already in place and start it over
// in this case every time the user types we are calling this debounce function.

function debounce(callback, delay, immediate = false) {
  let timerId;

  return function (...args) {
    // in this case we need to use an anonymous function and not an arrow function to keep the 'this' context of this right
    clearTimeout(timerId);
    if (immediate) callback.apply(this, ...args);
    timerId = setTimeout(() => {
      callback.apply(this, ...args);
    }, delay);
  };
}

exports.debounce = debounce;
