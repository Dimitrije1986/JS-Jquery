class Vehicle {
  static VRSTE = ["automobil", "plovilo", "letelica"];

  constructor(color, type) {
    if (
      typeof color === "undefined" ||
      typeof type === "undefined" 
    )
      throw new Error("Morate uneti boju, tip vozila");

    if (!Vehicle.VRSTE.includes(type)) {
      throw new Error(
        "Neispravno unet tip vozila. Tip vozila moze biti automobil, letelica ili plovilo."
      );
    }
    this.color = color;
    this.type = type;
   
  }
}

class Cars extends Vehicle {
  model;

  static BRAND = ["Audi", "BMW", "Mercedes"];
  static NUMBER_OF_DOORS = [3, 5];
  static FUEL = ["benzin", "dizel", "metan"];

  constructor(brand, model, numberOfDoors, fuel, color, type) {
    super(color, type);

    if (
      typeof brand === "undefined" ||
      typeof model === "undefined" ||
      typeof numberOfDoors === "undefined" ||
      typeof fuel === "undefined"
    )
      throw new Error(
        "Neispravno uneti podaci. Morate uneti marku, model, broj vrata i gorivo"
      );

    if (!Cars.BRAND.includes(brand)) {
      throw new Error(
        "Marka automobila moze biti samo Audi, BMW, ili Mercedes"
      );
    }

    if (!Cars.NUMBER_OF_DOORS.includes(numberOfDoors)) {
      throw new Error("Broj vrata moze biti 3 ili 5");
    }

    if (!Cars.FUEL.includes(fuel)) {
      throw new Error("Gorivo moze bit benzin, dizel ili metan.");
    }

    this.brand = brand;
    this.model = model;
    this.numberOfDoors = numberOfDoors;
    this.fuel = fuel;
  }
}

const vrsteVozila = document.querySelector("#vrsta");
const brojVrataSelect = document.querySelector("#brojVrata");
const gorivoSelect = document.querySelector("#gorivo");

Vehicle.VRSTE.forEach((vrsta) => {
  const option = document.createElement("option");
  option.text = vrsta;
  option.value = vrsta;

  vrsteVozila.append(option);
});

Cars.NUMBER_OF_DOORS.forEach((broj) => {
  const option = document.createElement("option");
  option.text = broj;
  option.value = broj;

  brojVrataSelect.append(option);
});

Cars.FUEL.forEach((gorivo) => {
  const option = document.createElement("option");
  option.text = gorivo;
  option.value = gorivo;

  gorivoSelect.append(option);
});

const audi = new Cars("Audi", "A4", 3, "benzin", "plava", "automobil");

console.log(audi);

const cars = [];

document.querySelector("#kreirajVozilo").addEventListener("click", (e) => {
  const vrsteVozila = document.querySelector("#vrsta").value;
  const brojVrata = document.querySelector("#brojVrata").value;
  const gorivo = document.querySelector("#gorivo").value;

  const vozilo = new Vehicle("plava", vrsteVozila);
  cars.push(vozilo);
  console.log(cars);
});
