// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
export default class DummyClass {

}

interface Clock {
  currentTime: Date
}

interface Clocks {
  currentTime: Date
  name:string
}

const clock1:Clocks = {
  currentTime: new Date(),
  name: 'hx',
}
const clock2: Clock = clock1
