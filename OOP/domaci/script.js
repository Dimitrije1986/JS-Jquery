class Vehicle {
  constructor(color, type) {
    if (typeof color === "undefined" || typeof type === "undefined")
      throw new Error("Morate uneti boju i tip vozila");

    if (type !== "automobil" && type !== "letelica" && type !== "plovilo")
      throw new Error(
        "Neispravno unet tip vozila. Tip vozila moze biti automobil, letelica ili plovilo."
      );

    this.color = color;
    this.type = type;
  }
}

class Cars {
  constructor(brand, model, numberOfDoors, fuel) {
    if (
      typeof brand === "undefined" ||
      typeof model === "undefined" ||
      typeof numberOfDoors === "undefined" ||
      typeof fuel === "undefined"
    )
      throw new Error(
        "Neispravno uneti podaci. Morate uneti marku, model, broj vrata i gorivo"
      );

    if (brand === "Audi" || brand === "BMW" || brand === "Mercedes") {
      this.brand = brand;
    } else {
      throw new Error(
        "Marka automobila moze biti samo Audi, BMW, ili Mercedes"
      );
    }

    if (brand === "Audi") {
      if (model === "A4" || model === "A6") {
        this.model = model;
      } else {
        throw new Error("Za Audi, dostupni modeli su A4 i A6.");
      }
    }

    if (brand === "BMW") {
      if (model === "M5" || model === "M3" || model === "X1") {
        this.model = model;
      } else {
        throw new Error("Za BMW, dostupni modeli su M5, M3 i X1.");
      }
    }

    if (brand === "Mercedes") {
      if (model === "S-Class" || model === "SLS AMG" || model === "G-Class") {
        this.model = model;
      } else {
        throw new Error(
          "Za Mercedesa, dostupni modeli su S klasa, G klasa i SLS AMG."
        );
      }
    }

    if (numberOfDoors === 3 || numberOfDoors === 5) {
      this.numberOfDoors = numberOfDoors;
    } else {
      throw new Error("Broj vrata moze biti 3 ili 5");
    }

    if (fuel === "benzin" || fuel === "dizel" || fuel === "metan") {
      this.fuel = fuel;
    } else {
      throw new Error("Gorivo moze bit benzin, dizel ili metan.");
    }
  }
}

const vozilo = new Vehicle("bela", "letelica");

const audi = new Cars("Audi", "A4", 3, "benzin");
const mercedes = new Cars("Mercedes", "S-Class", 3, "benzin");
const bmw = new Cars("BMW", "M5", 5, "dizel");

console.log(vozilo, audi, mercedes, bmw);
