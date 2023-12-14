let inputs = document.querySelectorAll("input");
let errors = {
  ime_prezime: [],
  korisnicko_ime: [],
  email: [],
  lozinka: [],
  ponovi_lozinku: [],
};

inputs.forEach((element) => {
  element.addEventListener("change", (e) => {
    let currentInput = e.target;
    let inputValue = currentInput.value;
    let inputName = currentInput.getAttribute("name");

    errors[inputName] = [];

    if (inputValue.length < 4) {
      errors[inputName] = ["Polje ne moze imati manje od 5 karaktera!"];
    }

    switch (inputName) {
      case "ime_prezime":
        let validation = inputValue.trim();
        validation = validation.split(" ");
        if (validation.length < 2) {
          errors[inputName].push("Moras napisati ime i prezime!");
        }

        break;

      case "email":
        if (!emailValidation(inputValue))
          errors[inputName].push("Neispravna email adresa!");
        break;

      case "ponovi_lozinku":
        let password = document.querySelector(`input[name="lozinka"]`).value;
        if (inputValue !== password)
          errors[inputName].push("Lozinke se ne poklapaju!");
        break;
    }

    populateErrors();
  });
});

const populateErrors = () => {
  for (let elem of document.querySelectorAll("ul")) elem.remove();

  for (let key of Object.keys(errors)) {
    let input = document.querySelector(`input[name='${key}']`);
    let parentElement = input.parentElement;
    let errorsElement = document.createElement("ul");
    parentElement.appendChild(errorsElement);

    errors[key].forEach((error) => {
      let li = document.createElement("li");
      li.innerText = error;
      errorsElement.appendChild(li);
    });
  }
};

const emailValidation = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};
