var passengers = [
  {name: "Jane Doloop", paid: true, ticket: "coach"},
  {name: "Dr. Evel", paid: true, ticket: "firstclass"},
  {name: "Sue Property", paid: false, ticket: "firstclass"},
  {name: "Jhon Funcal", paid: true, ticket: "coach"}
]

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
  return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: Not everyone has paid.");
}

function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
      alert("Would you like a cocktail or wine?");
    };
  } else {
    orderFunction = function() {
      alert("Your choice is cola or water?");
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();
  // pegar o pedido de comida
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  // Exibir filme
  getDrinkOrderFunction();
  // Recolher o lixo
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);
