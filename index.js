let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => return trip.driverId === this.id);
  }

  passengers(){
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}


class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id);
  }

  drivers() {
    return this.trips().map(trip => trip.driver());
  }
}

class Trip {
  constructor(passenger, driver) {
    this.id = ++tripId;

    if(driver && passenger) {
      this.passengerId = passenger.id;
      this.driverId = driver.id;
    }
  // store.trips.push(this);
  store['trips'].push(this);
  }

  driver() {
    return store.drivers.find(driver => this.driverId === driver.id);
  }
  passenger() {
    return store.passengers.find(passenger => this.passengerId === passenger.id);
  }

}
