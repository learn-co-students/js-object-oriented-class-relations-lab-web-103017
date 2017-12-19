let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(t => t.driverId === this.id)
  }

  passengers(){
    let result = []
    this.trips().forEach(t => {
      result.push(store.passengers.find(p => t.passengerId === p.id))
    })
    return result
  }
}

let passengerId = 0

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(t => t.passengerId === this.id)
  }

  drivers(){
    let result = []
    this.trips().forEach(t => {
      result.push(store.drivers.find(d => t.driverId === d.id))
    })
    return result
  }
}

let tripId = 0
class Trip {
  constructor(driv, pass){
    this.id = ++tripId
    if(driv && pass){
    this.driverId = driv.id
    this.passengerId = pass.id
  }
    store.trips.push(this)
  }

  driver(){
   return store.drivers.find(d => d.id === this.driverId)
  }

  passenger(){
    return store.passengers.find(p => p.id === this.passengerId)
  }
}
