class Osoba {
  constructor(ime, prezime, pol) {

    if(typeof ime === "undefined" || typeof prezime === 'undefined' || typeof pol === "undefined") {
      throw new Error ('Podaci nisu dobro uneti');
    }

    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
  }

  tezina;
  visina;
  bojaOciju;

  greetings() {
    if (this.pol === "zenski")
      console.log(
        `Pozdrav ja se zovem ${this.ime} ${this.prezime}, visoka sam: ${this.visina}, a teska: ${this.tezina}`
      );
    else
      console.log(
        `Pozdrav ja se zovem ${this.ime} ${this.prezime}, visok sam: ${this.visina}, a tezak: ${this.tezina}`
      );
  }
}

const petar = new Osoba( 'Pera', 'Peric', 'musko' );

petar.tezina = 90;
petar.visina = 180;

petar.bojaOciju = "braon";
petar.greetings();

const kiki = new Osoba('Kiki', 'Krnic', "zensko");
kiki.tezina = 20;
kiki.visina = 130;
kiki.bojaOciju = "zelene";
kiki.greetings();

console.log(petar, kiki);
