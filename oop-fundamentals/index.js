const board = [
  100,
  -10,
  0,
  0,
  -40,
  -10,
  -10,
  5,
  0,
  -10,
  -50,
  -10,
  0,
  0,
  -50,
  -10,
];

// console.log(this);

function letsGoToTheMall() {
  console.log(this.innerHeight);
}
// letsGoToTheMall();

let dice = () => Math.floor(Math.random() * 6) + 1;

function thisHere() {
  console.log(this);
}

const dimitri = {
  name: "Dimitri",
  position: 0,
  cash: 200,
  drawDice() {
    this.position += dice();
    this.cash += board[this.position];
  },
  getInfo() {
    console.log(this);
  },
  sayMyName: function () {
    console.log(this.name);
  },
  countriesLived: ["russia", "germany", "thailand", "tanzania"],
  whereHasLived() {
    console.log(this.countriesLived);
    this.countriesLived.forEach((element) => {
      console.log(this.name);
      console.log(`${this.name} has also lived in ${element}`);
    });
  },
};

dimitri.whereHasLived();

// const marta = {
//   name: "Marta",
//   position: 0,
//   cash: 200,
//   drawDice() {
//     this.position += dice();
//     this.cash += board[this.position];
//   },
// };
// const rosana = {
//   name: "Rosana",
//   position: 0,
//   cash: 200,
//   drawDice() {
//     this.position += dice();
//     this.cash += board[this.position];
//   },
// };

// rosana.drawDice();

// // DRY -> Dont repeat yourself

console.clear();
const rosana = {
  name: "Rosana",
  position: 0,
  cash: 200,
  drawDice() {
    this.position += dice();
    this.cash += board[this.position];
  },
};

//  camelCase -> firstWordIsNotCapitalizedEveryOtherIs
//  PascalCase -> EveryFirstLetterIsCapitalized

class Student {
  constructor(name, age) {
    this.name = name;
    this.position = 0;
    this.cash = 200;
    this.age = age;
  }

  drawDice() {
    console.log("DRAWING A DICE");
    this.position += dice();
    this.cash += board[this.position];
  }
}

// WebDevStudent = new Student + whatever new properties we want to add

class WebDevStudent extends Student {
  constructor(name, age, favoriteLab, position) {
    super();
    this.age = age * 7;
    this.favoriteLab = favoriteLab;
    this.position = position;
    this.cash = 100000000;
  }

  hackWindows() {
    console.log("Pff, easy peasy");
  }
}

class DoesntDrawDice extends Student {
  constructor() {
    super();
    this.drawDice = undefined;
  }
}

let student = new Student("Rosana", 21);
console.log("student:", student);
let student2 = new WebDevStudent("Marta", 17, "GreatestMoviesLab", 10000);
console.log("student2:", student2);
student2.drawDice();
student2.hackWindows();
