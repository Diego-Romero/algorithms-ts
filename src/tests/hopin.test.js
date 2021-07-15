// Here is a simple event emitter implementation.

export class EventHandlers {
  handlers = {};

  trigger = (type, ...args) => {
    const functions = this.handlers[type];
    if (functions) {
      for (let func of functions) {
        func(...args);
      }
    }
  };

  on = (type, handler) => {
    if (typeof type === "string") {
      this.setHandlerType(type, handler);
    }
    if (typeof type === "object") {
      // double check the validity of this
      const keys = Object.keys(type); // array of keys
      for (let key of keys) {
        // foo, bar, etc.
        const func = type[key];
        this.setHandlerType(key, func);
      }
    }
  };

  setHandlerType = (key, func) => {
    const functions = this.handlers[key];
    if (functions) this.handlers[key] = [...functions, func];
    else this.handlers[key] = [func];
  };

  off = (type, handler) => {
    const functions = this.handlers[type];
    if (functions) {
      const index = functions.findIndex((func) => func === handler); // todo: refactor to use filter
      functions.splice(index, 1);
    }
  };
}

const handlers = {}; // map

const trigger = (type, ...args) => {
  const functions = handlers[type];
  if (functions) {
    for (let func of functions) {
      // iterate through the functions if they exist on the handlers
      // func.apply(this, args);
      func(...args);
      // func(); // args match the function then call it with arguments
    }
  }
};

const on = (type, handler) => {
  if (typeof type === "string") {
    setHandlerType(type, handler);
  }
  if (typeof type === "object") {
    // double check the validity of this
    const keys = Object.keys(type); // array of keys
    console.log(keys);
    for (let key of keys) {
      // foo, bar, etc.
      const func = type[key];
      setHandlerType(key, func);
    }
  }
};

function setHandlerType(key, func) {
  const functions = handlers[key];
  if (functions) handlers[key] = [...functions, func];
  else handlers[key] = [func];
}

const off = (type, handler) => {
  const functions = handlers[type];
  if (functions) {
    const index = functions.findIndex((func) => func === handler); // get the index of the function we are trying to remove from the array
    functions.splice(index, 1);
  }
};

const onFoo = () => {
  console.log("Do foo 1");
};

on("foo", (arg1, arg2) => {
  console.log("here are my args", arg1, arg2);
});

trigger("foo", "diego", "romero");

on("foo", () => {
  console.log("Do foo 0");
});
on("foo", onFoo);
on("foo", () => {
  console.log("Do foo 2");
});

on({
  foo: () => {
    console.log("with an object");
  },
  bar: () => {
    console.log("with an object 2");
  },
});

off("foo", onFoo); // index 0

trigger("foo"); // only trigger the second function
// log: Do foo
