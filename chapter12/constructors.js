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
