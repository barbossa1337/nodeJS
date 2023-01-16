const Passenger = require("./passenger");
const Driver = require("./driver");

// Passengers
const berk = new Passenger("Berk", "Izmir");
const burak = new Passenger("Burak", "Ankara");
const umut = new Passenger("Umut", "İstanbul");

// Drivers
const niyazi = new Driver("Niyazi", "Adana");
const serkan = new Driver("Serkan", "Ankara");

// Bookings
const booking1 = berk.book(serkan, "Menemen", "Karşıyaka");
const booking2 = burak.book(niyazi, "Adana", "Antalya");
const booking3 = berk.book(serkan, "Istanbul", "Bursa");
const booking4 = berk.book(serkan, "Ankara", "Kars");
const booking5 = burak.book(niyazi, "Çankaya", "Kızılay");
const booking6 = umut.book(niyazi, "Istanbul", "Tekirdağ");

// Functions

function pringBookingHistory(passenger) {
  passenger.bookings.forEach(printBooking);
}

function printBooking(booking) {
  console.log(
    `${booking.passenger.name} booked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}.`
  );
}

// Invoke functions
pringBookingHistory(berk);
pringBookingHistory(burak);
pringBookingHistory(umut);
