/**
 * This could be done with the help of a map. Where each event has a name and an array associated with it.
 *
 * However if we add the same event listener with the same callback on the same event name twice, should have no effect - and we shouldn't add a new event listener.
 *
 * {
 * 	'click': Set([callback1, callback2, callback3]),
 * 	'otherEvent': Set([...])
 * }
 */

class EventTarget {
  constructor() {
    this.map = new Map();
  }

  addEventListener(name, callback) {
    if (!this.map.has(name)) this.map.set(name, new Set([callback]));
    else {
      const set = this.map.get(name);
      set.add(callback);
    }
    console.log(this.map);
  }

  removeEventListener(name, callback) {
    const set = map.get(name);
    if (set) {
      set.delete(callback);
    }
  }

  dispatchEvent(name) {
    const set = map.get(name);
    for (let callback of set) callback();
  }
}

// Do not edit the line below.
exports.EventTarget = EventTarget;

describe("event target", () => {
  test("should should work", () => {
    const target = new EventTarget();
    const hello = () => console.log("hello");
    const world = () => console.log("world");
    target.addEventListener("click", hello);
    target.addEventListener("click", world);
  });
});
