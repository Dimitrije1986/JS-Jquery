class Vehicle {
  type;
  color;
  speed;
  weigth;

  static TYPE_OF_VEHICLE = ["automobil", "plovilo", "letelica"];

  constructor(type, color, speed, weigth) {
    if (
      (typeof speed === "undefined",
      typeof color === "undefined",
      typeof type === "undefined",
      typeof weigth === "undefined")
    ) {
      throw new Error(
        "Podaci nisu tacno uneti. Morate uneti tip, boju, brzinu i tezinu vozila. "
      );
    }

    if (!Vehicle.TYPE_OF_VEHICLE.includes(type)) {
      throw new Error("Tip vozila mora biti automobil, plovilo ili letelica");
    }

    this.type = type;
    this.color = color;
    this.speed = speed;
    this.weigth = weigth;
  }
}

class Cars extends Vehicle {
  brand;
  model;
  numberOfDoors;
  fuel;

  static BRAND = ["audi", "bmw", "mercedes"];
  static NUMBER_OF_DOORS = [3, 5];
  static FUEL = ["benzin", "dizel"];

  constructor(brand, model, numberOfDoors, fuel, color, speed, weigth) {
    super("automobil", color, speed, weigth);

    if (!Cars.BRAND.includes(brand)) {
      throw new Error("Marka vozila moze biti audi, bmw ili mercedes.");
    }

    if (brand === "audi") {
      if (model === "A4" || model === "A6") {
        this.model = model;
      } else {
        throw new Error("Dostupni modeli za audi su A4 i A6.");
      }
    } else if (brand === "bmw") {
      if (model === "M5" || model === "M3" || model === "X1") {
        this.model = model;
      } else {
        throw new Error("Dostupni modeli za bmw su M5, M3 i X1");
      }
    } else if (brand === "mercedes") {
      if (model === "s-klasa" || model === "c-klasa" || model === "sls amg") {
        this.model = model;
      } else {
        throw new Error(
          "Dostupni modeli za mercedes su s-klasa, c-klasa i sls amg"
        );
      }
    }

    if (!Cars.NUMBER_OF_DOORS.includes(numberOfDoors)) {
      throw new Error("Broj vrata je 3 ili 5.");
    }

    if (!Cars.FUEL.includes(fuel)) {
      throw new Error("Vrsta goriva moze biti benzin ili dizel.");
    }

    this.brand = brand;
    this.model = model;
    this.numberOfDoors = numberOfDoors;
    this.fuel = fuel;
  }
}

class Vessel extends Vehicle {
  type_Of_Vessel;
  static TYPE_OF_VESSEL = ["jahta", "jedrenjak", "fregata"];

  constructor(type_Of_Vessel, color, speed, weigth) {
    super("plovilo", color, speed, weigth);

    if (typeof type_Of_Vessel === "undefined")
      throw new Error("Morate uneti tip plovila");

    if (!Vessel.TYPE_OF_VESSEL.includes(type_Of_Vessel))
      throw new Error("Tip plovila moze biti jahta, jedrenjak ili fregata");

    this.type_Of_Vessel = type_Of_Vessel;
  }
}

class Aircraft extends Vehicle {
  type_Of_Aircraft;
  is_Driveless;

  static TIPE_OF_AIRCRAFT = ["avion", "helikopter"];
  static IS_DRIVELESS = [true, false];

  constructor(type_Of_Aircraft, is_Driveless, color, speed, weigth) {
    super("letelica", color, speed, weigth);

    if (
      typeof type_Of_Aircraft === "undefined" ||
      typeof is_Driveless === "undefined"
    )
      throw new Error(
        "Morate uneti tip letelice i da li je bespilotna ili ne."
      );

    if (!Aircraft.TIPE_OF_AIRCRAFT.includes(type_Of_Aircraft))
      throw new Error("Tip letelice moze biti avion ili helikopter");

    this.type_Of_Aircraft = type_Of_Aircraft;
    this.is_Driveless = is_Driveless;
  }
}

