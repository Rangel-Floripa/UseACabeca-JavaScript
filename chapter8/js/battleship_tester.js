// Testing MVC's Objects

function testModel() {
  model.fire("53");

  model.fire("06");
  model.fire("16");
  model.fire("26");

  model.fire("34");
  model.fire("24");
  model.fire("44");

  model.fire("12");
  model.fire("11");
  model.fire("10");
};

function testParseGuess() {
  console.log(parseGuess("A0"));
  console.log(parseGuess("B6"));
  console.log(parseGuess("G3"));
  console.log(parseGuess("H0"));
  console.log(parseGuess("A7"));
};

function testController() {
  controller.processGuess("A0");

  controller.processGuess("A6");
  controller.processGuess("B6");
  controller.processGuess("C6");

  controller.processGuess("C4");
  controller.processGuess("D4");
  controller.processGuess("E4");

  controller.processGuess("B0");
  controller.processGuess("B1");
  controller.processGuess("B2");
};

// testModel();
// testParseGuess();
testController();
