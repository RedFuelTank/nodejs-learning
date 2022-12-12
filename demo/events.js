import * as eventsEmitter from 'events'
import {EventEmitter} from "events";
const emitter = new EventEmitter();

// emitter.on('anything', data => {
//   console.log('ON anything', data)
// })
//
// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})
//
// setTimeout(() => {
//   emitter.emit('anything', {c: 3})
// }, 2000)

class Dispatcher extends EventEmitter {
  subscribe(eventName, cd) {
    console.log('Discribe')
    this.on(eventName, cd)
  }

  dispatch(eventName, data) {
    console.log('Dispatch')
    this.emit(eventName, data)
  }
}

const dispatch = new Dispatcher();

dispatch.subscribe('aa', data => {
  console.log('ON: aa', data)
})

dispatch.dispatch('aa', {a: 22})
