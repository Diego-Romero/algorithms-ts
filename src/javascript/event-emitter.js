/**
 * Create an event emitter class, it needs to have 3 methods, on, emit and removeListener
 * on("event name", callbackFn) a function that takes an eventName and a should save the callbackFn to be called when the event with eventName is emitted
 * emit("eventName", data) a function that takes the name and the data object, should call the callbackFNs associated with that event and pass them the data object.
 * removeListener("eventName", callbackFn)
 */

class EventEmitter {

  constructor() {
    this.events = {}
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  emit(eventName, data) {
    if (!this.events[eventName]) return
    this.events[eventName].forEach(fn => fn(data))
  }

  removeListener(eventName, callback){
    const index = this.events[eventName].indexOf(callback)
    if (index === -1) return;
    this.events[eventName].splice(index, 1);
  }
}


const superBowl = new EventEmitter()

const cheer = function (eventData) {
  console.log('goooooo' + eventData.scoringTeam)
}

const jeer = function (eventData) {
  console.log('boooo' + eventData.scoringTeam)
}

superBowl.on('touchdown', cheer)
superBowl.on('touchdown', jeer)

superBowl.emit('touchdown', { scoringTeam: 'pats' })

superBowl.removeListener('touchdown', jeer)

superBowl.emit('touchdown', { scoringTeam: 'Steelers' })