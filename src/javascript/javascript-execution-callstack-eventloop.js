/**
 * Javascript is single threaded, meaning that it can only run one command at a time. Due to this, commands are not run in parallel, Because the execution happens line by line, each command is considered synchronous - hence blocking.
 * Stack: Function calls form a STACK of frames.
 * Heap: objects are allocated in a heap, which is just a name to denote a large (mostly unstructured) region of memory;
 * Queue: JS runtime uses a message queue, which is a list of messages to be processed, each message as an associated function which gets called in order to handle the message.
 * At some point during the event loop the runtime starts handling messages on the queue, with a FIFO structure. The messages are removed from the queue and its corresponding function is called with the message as an input parameter.
 */

// for example set time out:
/**
 * The function setTimeout is called with 2 arguments: a message to add to the queue, and a time value (optional; defaults to 0). The time value represents the (minimum) delay after which the message will actually be pushed into the queue. If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. However, if there are messages, the setTimeout message will have to wait for other messages to be processed. For this reason, the second argument indicates a minimum time—not a guaranteed time.
 */

console.log("Before Function");
setTimeout(function () {
  console.log("Inside Function");
}, 3000);
console.log("After Function");


// what is the output of:
const array = [5, 11, 18, 25];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("Element: " + array[i] + ", at index: " + i);
  }, 3000);
}

// it will be element undefined at index 4

// two ways of solving it is by using let, or wrapping the set time out in a IIFE

const array = [5, 11, 18, 25];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("Element: " + array[i] + ", at index: " + i);
  }, 3000);
}

const array = [5, 11, 18, 25];
for (var i = 0; i < array.length; i++) {
  setTimeout(function (localI) {
    return function() {
      console.log("Element: " + array[localI] + ", at index: " + localI);
    }
  }(i), 3000);
}