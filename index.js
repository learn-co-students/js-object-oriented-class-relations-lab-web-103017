let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => driverId === this.id)
  }

  passengers() {
    const passengers = []

    for (const i in store.trips) {

      if (store.trips[i].driver() === this) {
        passengers.push(store.trips[i].passenger())
      }
    }

    return passengers
  }
}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips() {
    const trips = []

    for (const i in store.trips) {
      if (store.trips[i].passenger() === this) {
        trips.push(store.trips[i])

      }
    }
    debugger
    return trips
  }

  drivers() {
    const drivers = []
    for (const i in this.trips()) {
      drivers.push(this.trips()[i].driver())
    }
    debugger
    return drivers
  }

}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId

    if(driver) {
      this.driverId = driver.id
    }

    if (passenger) {
      this.passengerId = passenger.id
    }
    // debugger
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
