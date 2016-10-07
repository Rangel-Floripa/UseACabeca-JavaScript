function makeCars(make, model, year, color, passengers, convertible, mileage) {
  var car = {
    make: make,
    model: model,
    year: year,
    color: color,
    passengers: passengers,
    convertible: convertible,
    mileage: mileage,
    started: false,

    start: function() {
      this.started = true;
    },

    stop: function() {
      this.started = false;
    },

    drive: function() {
      if (this.started) {
        alert("Zoom zoom!");
      } else {
        alert("You need to start the engine first.")
      }
    }
  };

  return car
}

var taxi = makeCars("Webville Motors", "Taxi", 1955, "Yellow", 4, false, 281341);
var cadi = makeCars("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var fiat = makeCars("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
var chevy = makeCars("Chevy", "Bel Air", 1957, "red", 2, false, 1021);

var frota = [taxi, cadi, fiat, chevy]
