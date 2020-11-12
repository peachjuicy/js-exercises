function Car(model, type, color, speed, price) {
  (this.model = model.toLowerCase()),
    (this.type = type.toLowerCase()),
    (this.color = color.toLowerCase()),
    (this.speed = speed),
    (this.price = price);
}

let carSalon = [];

function addCar(model, type, color, speed, price) {
  let car = new Car(model, type, color, speed, price);
  carSalon.push(car);
}

addCar("Audi", "Family", "Red", 240, 120000);
addCar("BMW", "City", "Green", 180, 180000);
addCar("BMW", "Sport", "Red", 220, 120000);
addCar("BMW", "Family", "Green", 180, 180000);
addCar("BMW", "City", "Green", 200, 100000);
addCar("Audi", "Sport", "Blue", 220, 150000);

console.log("Car salon is:", carSalon);

function getMostPopularColor(cars) {
  return getPropertyWithMaxValueInArray(cars, "color");
}

getMostPopularColor(carSalon);

function getMostPopularModel(cars) {
  return getPropertyWithMaxValueInArray(cars, "model");
}

getMostPopularModel(carSalon);
