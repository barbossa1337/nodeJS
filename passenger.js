const Booking = require("./booking");
class Passenger {
  constructor(name, location) {
    this.name = name;
    this.bookings = [];
    this.location = location;
  }
  // Methods
  book(driver, origin, destination) {
    const booking = new Booking(driver, this, origin, destination);
    this.bookings.push(booking);
    return booking;
  }
  pringBookingHistory() {
    this.bookings.forEach(printBooking);
  }
}

module.exports = Passenger;
