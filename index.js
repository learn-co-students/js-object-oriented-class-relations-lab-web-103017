let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.driverId === this.id;
    }.bind(this))
  }

  passengers() {
    return this.trips().map(function(trip) {
      return trip.passenger()
    })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(function(el) {
      return el.passengerId === this.id
    }.bind(this));
  }

  drivers() {
    return this.trips().map(function(trip) {
      return trip.driver();
    })
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;

    if(driver) {
      this.driverId = driver.id;
    }

  if(passenger) {
    this.passengerId = passenger.id;
  }
  store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(function(el) {
      return el.id === this.passengerId;
    }.bind(this));
  }

  driver() {
    return store.drivers.find(function(el) {
      return el.id === this.driverId;
    }.bind(this));
  }


}