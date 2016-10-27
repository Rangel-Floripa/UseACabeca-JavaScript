// Dog
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name.concat(" says Woof!"));
    } else {
      alert(this.name.concat(" says Yip!"));
    }
  };
}

// Cups of coffee
function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;

  this.getSize = function() {
    var size;
    if (this.ounces === 8) {
      size = "small"
    } else if (this.ounces === 12){
      size = "medium";
    } else {
      size = "large";
    }
    return size;
  }

  this.toString = function() {
    return "You've ordered a ".concat(this.getSize(), " ", roast, " coffee.");
  }
}

// Cars...
function Car(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };

  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("Start the engine first!");
    }
  };
}

// Cats...
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
