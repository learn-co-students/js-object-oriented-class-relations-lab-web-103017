//has many trips
//has many passengers though trips
let userId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver{
  constructor(name){
    this.name = name
    this.id = ++userId
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(each => {
      return each.driverId === this.id
    })
  }

  passengers() {
    return this.trips().map(each => {
      return each.passenger()
     })
   }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    });
  }

  drivers(){
    return this.trips().map(each => {
      return each.driver()
    })
  }
}



//this is the "through" table
class Trip{
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(function(each){
      return each.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    }.bind(this))
  }
}
