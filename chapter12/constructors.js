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
  }
}
