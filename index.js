let store = {drivers: [], passengers: [], trips: []}
// initialize store with key of items and users that each point to an empty array

let driverId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name

    // insert in the user to the store
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.driverId === this.id
    }.bind(this))
  }

  passengers () {
    let myPassengers = [];
    this.trips().forEach(function(trip) {
      myPassengers.push(trip.passenger())
    })
    return myPassengers;
  }
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name

    // insert in the user to the store
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter((trip) => trip.passengerId === this.id)
  }

  drivers() {
    let myDrivers = [];
    this.trips().forEach((trip) => myDrivers.push(trip.driver()))
    return myDrivers;
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    // insert in the user to the store
    store.trips.push(this)
  }
  passenger() {
    return store.passengers.find(function(passenger){
     return this.passengerId  === passenger.id
   }.bind(this))
 }

 driver() {
   return store.drivers.find(function(driver) {
     return this.driverId === driver.id
   }.bind(this))
 }
}
