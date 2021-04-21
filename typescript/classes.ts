interface Humain {
  firstName: string;
  lastName: string;
  age: number;
  adress?: string;
}

abstract class Personne implements Humain {
  firstName: string;
  lastName: string;
  age: number = 8;
  adress?: string;
  private eyeColor: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    adress?: string,
    eyeColor: string = "black"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.adress = adress;
    this.eyeColor = eyeColor;
  }

  whoami() {
    console.log(
      `${this.firstName} ${this.lastName} and i have ${this.age} with ${this.eyeColor} eyes color, leaving at ${this.adress}`
    );
  }
}

class Man extends Personne {}

let man1 = new Man("Moussa", "Ouédraogo", 18, "Ouagadougou");
console.log(man1);
man1.whoami();
