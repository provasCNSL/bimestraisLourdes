var alunos9A;
var alunos9B;
var alunos1A;
var alunos1B;
var alunos2A;
var alunos2B;
var alunos3A;
var alunos3B;
var distribuicao = {
  "9A": "a",
  "9B": "a",
  "1A": "a",
  "1B": "a",
  "2A": "a",
  "2B": "a",
  "3A": "a",
  "3B": "a",
};
var inseriuCorretamente = false;
var distribuiuCorretamente = false;
var qtd9A = [];
var qtd9B = [];
var qtd1A = [];
var qtd1B = [];
var qtd2A = [];
var qtd2B = [];
var qtd3A = [];
var qtd3B = [];

var turmas = {};
var capacidades = {};
const salas = {};
function gerar() {
  if (!distribuiuCorretamente || !inseriuCorretamente) {
    alert("Insira os alunos e distribua antes de gerar distribuição");
  } else {
    var res9A = document.getElementById("res9A");
    var res9B = document.getElementById("res9B");
    var res1A = document.getElementById("res1A");
    var res1B = document.getElementById("res1B");
    var res2A = document.getElementById("res2A");
    var res2B = document.getElementById("res2B");
    var res3A = document.getElementById("res3A");
    var res3B = document.getElementById("res3B");
    res9A.innerHTML = "";
    res9B.innerHTML = "";
    res1A.innerHTML = "";
    res1B.innerHTML = "";
    res2A.innerHTML = "";
    res2B.innerHTML = "";
    res3A.innerHTML = "";
    res3B.innerHTML = "";

    var sala9A = [];
    var sala9B = [];
    var sala1A = [];
    var sala1B = [];
    var sala2A = [];
    var sala2B = [];
    var sala3A = [];
    var sala3B = [];

    var alunos9A9A = [];
    var alunos9A9B = []; // alunos 9b na sala 9a
    var alunos9A1A = [];
    var alunos9A1B = [];
    var alunos9A2A = [];
    var alunos9A2B = [];
    var alunos9A3A = [];
    var alunos9A3B = [];

    var alunos9B9A = [];
    var alunos9B9B = [];
    var alunos9B1A = [];
    var alunos9B1B = [];
    var alunos9B2A = [];
    var alunos9B2B = [];
    var alunos9B3A = [];
    var alunos9B3B = [];

    var alunos1A9A = [];
    var alunos1A9B = [];
    var alunos1A1A = [];
    var alunos1A1B = [];
    var alunos1A2A = [];
    var alunos1A2B = [];
    var alunos1A3A = [];
    var alunos1A3B = [];

    var alunos1B9A = [];
    var alunos1B9B = [];
    var alunos1B1A = [];
    var alunos1B1B = [];
    var alunos1B2A = [];
    var alunos1B2B = [];
    var alunos1B3A = [];
    var alunos1B3B = [];

    var alunos2A9A = [];
    var alunos2A9B = [];
    var alunos2A1A = [];
    var alunos2A1B = [];
    var alunos2A2A = [];
    var alunos2A2B = [];
    var alunos2A3A = [];
    var alunos2A3B = [];

    var alunos2B9A = [];
    var alunos2B9B = [];
    var alunos2B1A = [];
    var alunos2B1B = [];
    var alunos2B2A = [];
    var alunos2B2B = [];
    var alunos2B3A = [];
    var alunos2B3B = [];

    var alunos3A9A = [];
    var alunos3A9B = [];
    var alunos3A1A = [];
    var alunos3A1B = [];
    var alunos3A2A = [];
    var alunos3A2B = [];
    var alunos3A3A = [];
    var alunos3A3B = [];

    var alunos3B9A = [];
    var alunos3B9B = [];
    var alunos3B1A = [];
    var alunos3B1B = [];
    var alunos3B2A = [];
    var alunos3B2B = [];
    var alunos3B3A = [];
    var alunos3B3B = [];

    //   definindoAlunos();

    inserir();

    function randomArrayShuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    }

    // function randomArrayShuffle2(array) {
    //   array.sort(() => Math.random() - 0.5);
    // }

    // function randomArrayShuffle3(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    // }

    function randomizingTheOrderOfTheStudents() {
      randomArrayShuffle(alunos9A);

      randomArrayShuffle(alunos9B);

      randomArrayShuffle(alunos1A);

      randomArrayShuffle(alunos1B);

      randomArrayShuffle(alunos2B);

      randomArrayShuffle(alunos2A);

      randomArrayShuffle(alunos3A);

      randomArrayShuffle(alunos3B);
    }

    randomizingTheOrderOfTheStudents();

    function addStudentsAt9A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala9A.push(room[i])
        if (room == alunos9A) {
          alunos9A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos9A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos9A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos9A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos9A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos9A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos9A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos9A3B.push(room[i]);
        }
        // alunos9A9A.sort();
        // alunos9A9B.sort();
        // alunos9A1A.sort();
        // alunos9A1B.sort();
        // alunos9A2A.sort();
        // alunos9A2B.sort();
        // alunos9A3A.sort();
        // alunos9A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    addStudentsAt9A(alunos9A, qtd9A["9A"]);
    addStudentsAt9A(alunos9B, qtd9A["9B"]);
    addStudentsAt9A(alunos1A, qtd9A["1A"]);
    addStudentsAt9A(alunos1B, qtd9A["1B"]);
    addStudentsAt9A(alunos2A, qtd9A["2A"]);
    addStudentsAt9A(alunos2B, qtd9A["2B"]);
    addStudentsAt9A(alunos3A, qtd9A["3A"]);
    addStudentsAt9A(alunos3B, qtd9A["3B"]);
    randomizingTheOrderOfTheStudents();

    function addStudentsAt9B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala9B.push(room[i])
        if (room == alunos9A) {
          alunos9B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos9B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos9B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos9B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos9B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos9B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos9B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos9B3B.push(room[i]);
        }
        // alunos9B9A.sort();
        // alunos9B9B.sort();
        // alunos9B1A.sort();
        // alunos9B1B.sort();
        // alunos9B2A.sort();
        // alunos9B2B.sort();
        // alunos9B3A.sort();
        // alunos9B3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt9B(alunos9A, qtd9B["9A"]);
    addStudentsAt9B(alunos9B, qtd9B["9B"]);
    addStudentsAt9B(alunos1A, qtd9B["1A"]);
    addStudentsAt9B(alunos1B, qtd9B["1B"]);
    addStudentsAt9B(alunos2A, qtd9B["2A"]);
    addStudentsAt9B(alunos2B, qtd9B["2B"]);
    addStudentsAt9B(alunos3A, qtd9B["3A"]);
    addStudentsAt9B(alunos3B, qtd9B["3B"]);

    randomizingTheOrderOfTheStudents();

    function addStudentsAt1A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala1A.push(room[i])
        if (room == alunos9A) {
          alunos1A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos1A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos1A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos1A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos1A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos1A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos1A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos1A3B.push(room[i]);
        }
        // alunos1A9A.sort();
        // alunos1A9B.sort();
        // alunos1A1A.sort();
        // alunos1A1B.sort();
        // alunos1A2A.sort();
        // alunos1A2B.sort();
        // alunos1A3A.sort();
        // alunos1A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt1A(alunos9A, qtd1A["9A"]);
    addStudentsAt1A(alunos9B, qtd1A["9B"]);
    addStudentsAt1A(alunos1A, qtd1A["1A"]);
    addStudentsAt1A(alunos1B, qtd1A["1B"]);
    addStudentsAt1A(alunos2A, qtd1A["2A"]);
    addStudentsAt1A(alunos2B, qtd1A["2B"]);
    addStudentsAt1A(alunos3A, qtd1A["3A"]);
    addStudentsAt1A(alunos3B, qtd1A["3B"]);

    randomizingTheOrderOfTheStudents();

    //SALA 1B:
    function addStudentsAt1B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala1B.push(room[i])
        if (room == alunos9A) {
          alunos1B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos1B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos1B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos1B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos1B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos1B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos1B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos1B3B.push(room[i]);
        }
        // alunos1B9A.sort();
        // alunos1B9B.sort();
        // alunos1B1A.sort();
        // alunos1B1B.sort();
        // alunos1B2A.sort();
        // alunos1B2B.sort();
        // alunos1B3A.sort();
        // alunos1B3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt1B(alunos9A, qtd1B["9A"]);
    addStudentsAt1B(alunos9B, qtd1B["9B"]);
    addStudentsAt1B(alunos1A, qtd1B["1A"]);
    addStudentsAt1B(alunos1B, qtd1B["1B"]);
    addStudentsAt1B(alunos2A, qtd1B["2A"]);
    addStudentsAt1B(alunos2B, qtd1B["2B"]);
    addStudentsAt1B(alunos3A, qtd1B["3A"]);
    addStudentsAt1B(alunos3B, qtd1B["3B"]);

    randomizingTheOrderOfTheStudents();

    //SALA 2A:
    function addStudentsAt2A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala2A.push(room[i])
        if (room == alunos9A) {
          alunos2A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos2A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos2A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos2A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos2A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos2A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos2A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos2A3B.push(room[i]);
        }
        // alunos2A9A.sort();
        // alunos2A9B.sort();
        // alunos2A1A.sort();
        // alunos2A1B.sort();
        // alunos2A2A.sort();
        // alunos2A2B.sort();
        // alunos2A3A.sort();
        // alunos2A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt2A(alunos9A, qtd2A["9A"]);
    addStudentsAt2A(alunos9B, qtd2A["9B"]);
    addStudentsAt2A(alunos1A, qtd2A["1A"]);
    addStudentsAt2A(alunos1B, qtd2A["1B"]);
    addStudentsAt2A(alunos2A, qtd2A["2A"]);
    addStudentsAt2A(alunos2B, qtd2A["2B"]);
    addStudentsAt2A(alunos3A, qtd2A["3A"]);
    addStudentsAt2A(alunos3B, qtd2A["3B"]);

    randomizingTheOrderOfTheStudents();

    //SALA 2B:
    function addStudentsAt2B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala2B.push(room[i])
        if (room == alunos9A) {
          alunos2B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos2B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos2B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos2B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos2B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos2B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos2B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos2B3B.push(room[i]);
        }
        // alunos2B9A.sort();
        // alunos2B9B.sort();
        // alunos2B1A.sort();
        // alunos2B1B.sort();
        // alunos2B2A.sort();
        // alunos2B2B.sort();
        // alunos2B3A.sort();
        // alunos2B3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt2B(alunos9A, qtd2B["9A"]);
    addStudentsAt2B(alunos9B, qtd2B["9B"]);
    addStudentsAt2B(alunos1A, qtd2B["1A"]);
    addStudentsAt2B(alunos1B, qtd2B["1B"]);
    addStudentsAt2B(alunos2A, qtd2B["2A"]);
    addStudentsAt2B(alunos2B, qtd2B["2B"]);
    addStudentsAt2B(alunos3A, qtd2B["3A"]);
    addStudentsAt2B(alunos3B, qtd2B["3B"]);
    console.log("qtd de cada turma na 2b");
    console.log(qtd2B["9A"]);
    console.log(qtd2B["9B"]);
    console.log(qtd2B["1A"]);
    console.log(qtd2B["1B"]);
    console.log(qtd2B["2A"]);
    console.log(qtd2B["2B"]);
    console.log(qtd2B["3A"]);
    console.log(qtd2B["3B"]);

    randomizingTheOrderOfTheStudents();

    //SALA 3A:
    function addStudentsAt3A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala3A.push(room[i])
        if (room == alunos9A) {
          alunos3A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos3A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos3A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos3A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos3A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos3A2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos3A3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos3A3B.push(room[i]);
        }
        // alunos3A9A.sort();
        // alunos3A9B.sort();
        // alunos3A1A.sort();
        // alunos3A1B.sort();
        // alunos3A2A.sort();
        // alunos3A2B.sort();
        // alunos3A3A.sort();
        // alunos3A3B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt3A(alunos9A, qtd3A["9A"]);
    addStudentsAt3A(alunos9B, qtd3A["9B"]);
    addStudentsAt3A(alunos1A, qtd3A["1A"]);
    addStudentsAt3A(alunos1B, qtd3A["1B"]);
    addStudentsAt3A(alunos2A, qtd3A["2A"]);
    addStudentsAt3A(alunos2B, qtd3A["2B"]);
    addStudentsAt3A(alunos3A, qtd3A["3A"]);
    addStudentsAt3A(alunos3B, qtd3A["3B"]);

    randomizingTheOrderOfTheStudents();

    /*
                                9A: 5 5 6 4 4 4 4 4
                                9B: 5 6 6 5 4 4 4 5
                                1A: 5 5 4 4 4 4 4 4
                                1B: 5 5 4 5 3 3 3 4
                                2A: 4 4 3 4 3 3 3 4
                                2B: 4 4 4 3 3 3 3 3
                                3A: 4 5 3 3 3 3 3 3
                                3B: 4 5 4 4 4 3 3 5
                                */

    //SALA 3B:
    function addStudentsAt3B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala3B.push(room[i])
        if (room == alunos9A) {
          alunos3B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos3B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos3B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos3B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos3B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos3B2B.push(room[i]);
        } else if (room == alunos3A) {
          alunos3B3A.push(room[i]);
        } else if (room == alunos3B) {
          alunos3B3B.push(room[i]);
        }
      }
      room.splice(0, numberOfStudents);
    }

    addStudentsAt3B(alunos9A, qtd3B["9A"]);
    addStudentsAt3B(alunos9B, qtd3B["9B"]);
    addStudentsAt3B(alunos1A, qtd3B["1A"]);
    addStudentsAt3B(alunos1B, qtd3B["1B"]);
    addStudentsAt3B(alunos2A, qtd3B["2A"]);
    addStudentsAt3B(alunos2B, qtd3B["2B"]);
    addStudentsAt3B(alunos3A, qtd3B["3A"]);
    addStudentsAt3B(alunos3B, qtd3B["3B"]);

    randomizingTheOrderOfTheStudents();

    sala9A.push(
      ...alunos9A9A,
      ...alunos9A9B,
      ...alunos9A1A,
      ...alunos9A1B,
      ...alunos9A2A,
      ...alunos9A2B,
      ...alunos9A3A,
      ...alunos9A3B
    );

    sala9B.push(
      ...alunos9B9A,
      ...alunos9B9B,
      ...alunos9B1A,
      ...alunos9B1B,
      ...alunos9B2A,
      ...alunos9B2B,
      ...alunos9B3A,
      ...alunos9B3B
    );

    sala1A.push(
      ...alunos1A9A,
      ...alunos1A9B,
      ...alunos1A1A,
      ...alunos1A1B,
      ...alunos1A2A,
      ...alunos1A2B,
      ...alunos1A3A,
      ...alunos1A3B
    );

    sala1B.push(
      ...alunos1B9A,
      ...alunos1B9B,
      ...alunos1B1A,
      ...alunos1B1B,
      ...alunos1B2A,
      ...alunos1B2B,
      ...alunos1B3A,
      ...alunos1B3B
    );

    sala2A.push(
      ...alunos2A9A,
      ...alunos2A9B,
      ...alunos2A1A,
      ...alunos2A1B,
      ...alunos2A2A,
      ...alunos2A2B,
      ...alunos2A3A,
      ...alunos2A3B
    );

    sala2B.push(
      ...alunos2B9A,
      ...alunos2B9B,
      ...alunos2B1A,
      ...alunos2B1B,
      ...alunos2B2A,
      ...alunos2B2B,
      ...alunos2B3A,
      ...alunos2B3B
    );

    sala3A.push(
      ...alunos3A9A,
      ...alunos3A9B,
      ...alunos3A1A,
      ...alunos3A1B,
      ...alunos3A2A,
      ...alunos3A2B,
      ...alunos3A3A,
      ...alunos3A3B
    );

    sala3B.push(
      ...alunos3B9A,
      ...alunos3B9B,
      ...alunos3B1A,
      ...alunos3B1B,
      ...alunos3B2A,
      ...alunos3B2B,
      ...alunos3B3A,
      ...alunos3B3B
    );

    console.log(sala9A.length);
    console.log(sala9B.length);
    console.log(sala1A.length);
    console.log(sala1B.length);
    console.log(sala2A.length);
    console.log(sala2B.length);
    console.log(sala3A.length);
    console.log(sala3B.length);
    console.log(sala9B);

    // console.log(alunos3A3A);
    for (var i = 0; i < sala9A.length; i++) {
      if (i == 0) {
        res9A.innerHTML += `<h2>SALA 9A</h2>`;
      }
      res9A.innerHTML += `${sala9A[i]} <br>`;
    }

    for (var i = 0; i < sala9B.length; i++) {
      if (i == 0) {
        res9B.innerHTML += `<h2>SALA 9B</h2>`;
      }
      res9B.innerHTML += `${sala9B[i]} <br>`;
    }

    for (var i = 0; i < sala1A.length; i++) {
      if (i == 0) {
        res1A.innerHTML += `<h2>SALA 1A</h2>`;
      }
      res1A.innerHTML += `${sala1A[i]} <br>`;
    }

    for (var i = 0; i < sala1B.length; i++) {
      if (i == 0) {
        res1B.innerHTML += `<h2>SALA 1B</h2>`;
      }
      res1B.innerHTML += `${sala1B[i]} <br>`;
    }

    for (var i = 0; i < sala2A.length; i++) {
      if (i == 0) {
        res2A.innerHTML += `<h2>SALA 2A</h2>`;
      }
      res2A.innerHTML += `${sala2A[i]} <br>`;
    }

    for (var i = 0; i < sala2B.length; i++) {
      if (i == 0) {
        res2B.innerHTML += `<h2>SALA 2B</h2>`;
      }
      res2B.innerHTML += `${sala2B[i]} <br>`;
    }

    for (var i = 0; i < sala3A.length; i++) {
      if (i == 0) {
        res3A.innerHTML += `<h2>SALA 3A</h2>`;
      }
      res3A.innerHTML += `${sala3A[i]} <br>`;
    }

    for (var i = 0; i < sala3B.length; i++) {
      if (i == 0) {
        res3B.innerHTML += `<h2>SALA 3B</h2>`;
      }
      res3B.innerHTML += `${sala3B[i]} <br>`;
    }
    /*
  console.log(sala9A.length);
  console.log(sala9B.length);
  console.log(sala1A.length);
  console.log(sala1B.length);
  console.log(sala2A.length);
  console.log(sala2B.length);
  console.log(sala3A.length);
  console.log(sala3B.length);
  */
    function arrayParaStringComQuebrasDeLinha(arr) {
      // Use o método join() para juntar os elementos do array em uma única string
      // e adicione "\n" (quebra de linha) entre eles
      return arr.join("<br>");
    }
    const a9A9A = arrayParaStringComQuebrasDeLinha(alunos9A9A);
    const a9A9B = arrayParaStringComQuebrasDeLinha(alunos9A9B);
    const a9A1A = arrayParaStringComQuebrasDeLinha(alunos9A1A);
    const a9A1B = arrayParaStringComQuebrasDeLinha(alunos9A1B);
    const a9A2A = arrayParaStringComQuebrasDeLinha(alunos9A2A);
    const a9A2B = arrayParaStringComQuebrasDeLinha(alunos9A2B);
    const a9A3A = arrayParaStringComQuebrasDeLinha(alunos9A3A);
    const a9A3B = arrayParaStringComQuebrasDeLinha(alunos9A3B);

    const a9B9A = arrayParaStringComQuebrasDeLinha(alunos9B9A);
    const a9B9B = arrayParaStringComQuebrasDeLinha(alunos9B9B);
    const a9B1A = arrayParaStringComQuebrasDeLinha(alunos9B1A);
    const a9B1B = arrayParaStringComQuebrasDeLinha(alunos9B1B);
    const a9B2A = arrayParaStringComQuebrasDeLinha(alunos9B2A);
    const a9B2B = arrayParaStringComQuebrasDeLinha(alunos9B2B);
    const a9B3A = arrayParaStringComQuebrasDeLinha(alunos9B3A);
    const a9B3B = arrayParaStringComQuebrasDeLinha(alunos9B3B);

    const a1A9A = arrayParaStringComQuebrasDeLinha(alunos1A9A);
    const a1A9B = arrayParaStringComQuebrasDeLinha(alunos1A9B);
    const a1A1A = arrayParaStringComQuebrasDeLinha(alunos1A1A);
    const a1A1B = arrayParaStringComQuebrasDeLinha(alunos1A1B);
    const a1A2A = arrayParaStringComQuebrasDeLinha(alunos1A2A);
    const a1A2B = arrayParaStringComQuebrasDeLinha(alunos1A2B);
    const a1A3A = arrayParaStringComQuebrasDeLinha(alunos1A3A);
    const a1A3B = arrayParaStringComQuebrasDeLinha(alunos1A3B);

    const a1B9A = arrayParaStringComQuebrasDeLinha(alunos1B9A);
    const a1B9B = arrayParaStringComQuebrasDeLinha(alunos1B9B);
    const a1B1A = arrayParaStringComQuebrasDeLinha(alunos1B1A);
    const a1B1B = arrayParaStringComQuebrasDeLinha(alunos1B1B);
    const a1B2A = arrayParaStringComQuebrasDeLinha(alunos1B2A);
    const a1B2B = arrayParaStringComQuebrasDeLinha(alunos1B2B);
    const a1B3A = arrayParaStringComQuebrasDeLinha(alunos1B3A);
    const a1B3B = arrayParaStringComQuebrasDeLinha(alunos1B3B);

    const a2A9A = arrayParaStringComQuebrasDeLinha(alunos2A9A);
    const a2A9B = arrayParaStringComQuebrasDeLinha(alunos2A9B);
    const a2A1A = arrayParaStringComQuebrasDeLinha(alunos2A1A);
    const a2A1B = arrayParaStringComQuebrasDeLinha(alunos2A1B);
    const a2A2A = arrayParaStringComQuebrasDeLinha(alunos2A2A);
    const a2A2B = arrayParaStringComQuebrasDeLinha(alunos2A2B);
    const a2A3A = arrayParaStringComQuebrasDeLinha(alunos2A3A);
    const a2A3B = arrayParaStringComQuebrasDeLinha(alunos2A3B);

    const a2B9A = arrayParaStringComQuebrasDeLinha(alunos2B9A);
    const a2B9B = arrayParaStringComQuebrasDeLinha(alunos2B9B);
    const a2B1A = arrayParaStringComQuebrasDeLinha(alunos2B1A);
    const a2B1B = arrayParaStringComQuebrasDeLinha(alunos2B1B);
    const a2B2A = arrayParaStringComQuebrasDeLinha(alunos2B2A);
    const a2B2B = arrayParaStringComQuebrasDeLinha(alunos2B2B);
    const a2B3A = arrayParaStringComQuebrasDeLinha(alunos2B3A);
    const a2B3B = arrayParaStringComQuebrasDeLinha(alunos2B3B);

    const a3A9A = arrayParaStringComQuebrasDeLinha(alunos3A9A);
    const a3A9B = arrayParaStringComQuebrasDeLinha(alunos3A9B);
    const a3A1A = arrayParaStringComQuebrasDeLinha(alunos3A1A);
    const a3A1B = arrayParaStringComQuebrasDeLinha(alunos3A1B);
    const a3A2A = arrayParaStringComQuebrasDeLinha(alunos3A2A);
    const a3A2B = arrayParaStringComQuebrasDeLinha(alunos3A2B);
    const a3A3A = arrayParaStringComQuebrasDeLinha(alunos3A3A);
    const a3A3B = arrayParaStringComQuebrasDeLinha(alunos3A3B);

    const a3B9A = arrayParaStringComQuebrasDeLinha(alunos3B9A);
    const a3B9B = arrayParaStringComQuebrasDeLinha(alunos3B9B);
    const a3B1A = arrayParaStringComQuebrasDeLinha(alunos3B1A);
    const a3B1B = arrayParaStringComQuebrasDeLinha(alunos3B1B);
    const a3B2A = arrayParaStringComQuebrasDeLinha(alunos3B2A);
    const a3B2B = arrayParaStringComQuebrasDeLinha(alunos3B2B);
    const a3B3A = arrayParaStringComQuebrasDeLinha(alunos3B3A);
    const a3B3B = arrayParaStringComQuebrasDeLinha(alunos3B3B);

    var res = document.getElementById("res");
    res.innerHTML = `<table border="1"> 
  <tr>
  <td></td> 
  <td><strong>Alunos do 9ºA</strong></td>
  <td><strong>Alunos do 9ºB</strong></td>
  <td><strong>Alunos do 1ºA</strong></td> 
  <td><strong>Alunos do 1ºB</strong></td>
  <td><strong>Alunos do 2ºA</strong></td>
  <td><strong>Alunos do 2ºB</strong></td>
  <td><strong>Alunos do 3ºA</strong></td>
  <td><strong>Alunos do 3ºB</strong></td>
  </tr>
  <tr>
  <td><strong>Local: <br> Sala 9A</strong></td>
  <td> 
  ${a9A9A}
  </td> 
  
  <td> 
  ${a9A9B}
  </td>
  
  <td> 
  ${a9A1A}
  </td>
  <td> 
  ${a9A1B} <br>
  </td>
  <td> 
  ${a9A2A} <br>
  </td>
  
  <td> 
  ${a9A2B} <br>
  </td>
  <td>
  ${a9A3A} <br>
  </td>
  <td> 
  ${a9A3B} <br>
  </td>
  </tr>
  <tr>
  <td><strong>Local: <br> Sala 9B</strong></td> 
  <td> 
  ${a9B9A} <br>
  </td> 
  
  <td> 
  ${a9B9B} <br>
  </td>
  <td> 
  ${a9B1A} <br>
  </td>
  <td> 
  ${a9B1B} <br>
  </td>
  <td> 
  ${a9B2A} <br>
  </td>
  
  <td> 
  ${a9B2B} <br>
  </td>
  <td> 
  ${a9B3A} <br>
  </td>
  <td> 
  ${a9B3B} <br>
  </td>
  </tr>
  <tr>
  <td><strong>Local: <br> Sala 1A</strong></td>
  <td> 
  ${a1A9A} <br>
  </td> 
  
  <td> 
  ${a1A9B} <br>
  </td>
  <td>
  ${a1A1A} <br>
  </td>
  <td> 
  ${a1A1B} <br>
  </td>
  <td> 
  ${a1A2A} <br>
  </td>
  
  <td> 
  ${a1A2B} <br>
  </td>
  <td> 
  ${a1A3A} <br>
  </td>
  <td> 
  ${a1A3B} <br>
  </td>
  </tr>
    
  <tr>
  <td><strong>Local: <br> Sala 1B</strong></td>
  <td>
  
  ${a1B9A} <br>
  </td> 
  
  <td> 
  ${a1B9B} <br>
  </td>
  <td> 
  ${a1B1A} <br>
  </td>
  <td> 
  ${a1B1B} <br>
  </td>
  <td> 
  ${a1B2A} <br>
  </td>
  
  <td> 
  ${a1B2B} <br>
  </td>
  <td> 
  ${a1B3A} <br>
  </td>
  <td> 
  ${a1B3B} <br>
  </td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 2A</strong></td>
  <td> 
  ${a2A9A} <br>
  </td> 
  
  <td> 
  ${a2A9B} <br>
  </td>
  <td> 
  ${a2A1A} <br>
  </td>
  <td> 
  ${a2A1B} <br>
  </td>
  <td> 
  ${a2A2A} <br>
  </td>
  
  <td> 
  ${a2A2B} <br>
  </td>
  <td> 
  ${a2A3A} <br>
  </td>
  <td> 
  ${a2A3B} <br>
  </td>
  </tr>
  <tr>
  <td><strong>Local: <br> Sala 2B</strong></td>
  <td> 
  ${a2B9A} <br>
  </td> 
  
  <td> 
  ${a2B9B} <br>
  </td>
  <td> 
  ${a2B1A} <br>
  </td>
  <td> 
  ${a2B1B} <br>
  </td>
  <td> 
  ${a2B2A} <br>
  </td>
  
  <td> 
  ${a2B2B} <br>
  </td>
  <td> 
  ${a2B3A} <br>
  </td>
  <td> 
  ${a2B3B} <br>
  </td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 3A</strong></td>
  <td> 
  ${a3A9A} <br>
  </td> 
  
  <td> 
  ${a3A9B} <br>
  </td>
  <td> 
  ${a3A1A} <br>
  </td>
  <td> 
  ${a3A1B} <br>
  </td>
  <td> 
  ${a3A2A} <br>
  </td>
  
  <td> 
  ${a3A2B} <br>
  </td>
  <td> 
  ${a3A3A} <br>
  </td>
  <td> 
  ${a3A3B} <br>
  </td>
  </tr>
  
  <tr>
  <td><strong>Local: <br> Sala 3B</strong></td>
  <td> 
  ${a3B9A} <br>
  </td> 
  
  <td> 
  ${a3B9B} <br>
  </td>
  <td> 
  ${a3B1A} <br>
  </td>
  <td> 
  ${a3B1B} <br>
  </td>
  <td> 
  ${a3B2A} <br>
  </td>
  
  <td> 
  ${a3B2B} <br>
  </td>
  <td> 
  ${a3B3A} <br>
  </td>
  <td> 
  ${a3B3B} <br>
  </td>
  </tr>
  </table>`;
  }
}
function gerarPDF() {
  var dados = res.innerHTML;
  var janela = window.open("", "", "width=1200, height=1200");
  janela.document.write("<html><head><style>");
  janela.document.write(
    "table, tr, td { border: 1px solid black; border-collapse: collapse; font-size: 10px;} td {padding: 5px;} body {font-family: Helvetica;} "
  );
  janela.document.write("</style>");
  janela.document.write("</head>");
  janela.document.write("<body>");
  janela.document.write(dados);
  janela.document.write("</body></html>");
  janela.document.close();
  janela.print();
}
function inserir() {
  inseriuCorretamente = true;
  const entrada = document.getElementById("names").value;
  const linhas = entrada.split("\n");

  let salaAtual = null;

  linhas.forEach((linha) => {
    if (linha.match(/^\d+[A-Z]$/)) {
      // Se a linha corresponder ao formato da sala (por exemplo, 9A), crie um novo array para a sala
      salaAtual = linha;
      salas[salaAtual] = [];
    } else if (salaAtual && linha.trim() !== "") {
      // Se a linha não estiver em branco e tiver uma sala atual, adicione o aluno ao array da sala
      salas[salaAtual].push(linha);
    }
  });

  // Exemplo de como acessar os arrays de alunos por sala
  console.log("Alunos da sala 9A:", salas["9A"]);
  console.log("Alunos da sala 9B:", salas["9B"]);
  console.log("Alunos da sala 1A:", salas["1A"]);
  console.log("Alunos da sala 1B:", salas["1B"]);
  console.log("Alunos da sala 2A:", salas["2A"]);
  console.log("Alunos da sala 2B:", salas["2B"]);
  console.log("Alunos da sala 3A:", salas["3A"]);
  console.log("Alunos da sala 3B:", salas["3B"]);

  alert(`
    Alunos adicionados: 
    9A: ${salas["9A"].length} alunos.
    9B: ${salas["9B"].length} alunos.
    1A: ${salas["1A"].length} alunos.
    1B: ${salas["1B"].length} alunos.
    2A: ${salas["2A"].length} alunos.
    2B: ${salas["2B"].length} alunos.
    3A: ${salas["3A"].length} alunos.
    3B: ${salas["3B"].length} alunos.
  `);

  turmas = {
    "9A": salas["9A"].length,
    "9B": salas["9B"].length,
    "1A": salas["1A"].length,
    "1B": salas["1B"].length,
    "2A": salas["2A"].length,
    "2B": salas["2B"].length,
    "3A": salas["3A"].length,
    "3B": salas["3B"].length,
  };

  capacidades = {
    "9A": salas["9A"].length,
    "9B": salas["9B"].length,
    "1A": salas["1A"].length,
    "1B": salas["1B"].length,
    "2A": salas["2A"].length,
    "2B": salas["2B"].length,
    "3A": salas["3A"].length,
    "3B": salas["3B"].length,
  };

  alunos9A = salas["9A"];
  alunos9B = salas["9B"];
  alunos1A = salas["1A"];
  alunos1B = salas["1B"];
  alunos2A = salas["2A"];
  alunos2B = salas["2B"];
  alunos3A = salas["3A"];
  alunos3B = salas["3B"];
}
function distribuir() {
  function distribuirAlunosUniformemente(turmas, capacidades) {
    const salas = {
      "9A": [],
      "9B": [],
      "1A": [],
      "1B": [],
      "2A": [],
      "2B": [],
      "3A": [],
      "3B": [],
    };

    // Transforma as capacidades em uma matriz de índices repetidos
    const capacidadeIndices = Object.keys(capacidades).reduce((arr, sala) => {
      for (let i = 0; i < capacidades[sala]; i++) {
        arr.push(sala);
      }
      return arr;
    }, []);

    // Distribuição aleatória de alunos
    Object.keys(turmas).forEach((turma) => {
      const quantidade = turmas[turma];
      for (let i = 0; i < quantidade; i++) {
        let sala = null;

        // Escolha aleatória de uma sala da matriz de capacidadeIndices
        const indice = Math.floor(Math.random() * capacidadeIndices.length);
        sala = capacidadeIndices.splice(indice, 1)[0];

        salas[sala].push(turma);
      }
    });

    console.log("Distribuição Aleatória:");
    console.log(salas);

    // Função para calcular a diferença de alunos entre duas salas
    function diferencaAlunos(sala1, sala2) {
      const diferenca = {};
      Object.keys(turmas).forEach((turma) => {
        const alunosSala1 = salas[sala1].filter(
          (aluno) => aluno === turma
        ).length;
        const alunosSala2 = salas[sala2].filter(
          (aluno) => aluno === turma
        ).length;
        diferenca[turma] = alunosSala1 - alunosSala2;
      });
      return diferenca;
    }

    // Trocas para equilibrar as salas
    let trocaRealizada = true;
    let iteracoes = 0;

    while (trocaRealizada && iteracoes < 1000) {
      trocaRealizada = false;

      Object.keys(salas).forEach((salaAtual) => {
        Object.keys(salas).forEach((salaAlvo) => {
          if (salaAtual !== salaAlvo) {
            const diferenca = diferencaAlunos(salaAtual, salaAlvo);

            // Verifica se há turmas com excesso em salaAtual e falta em salaAlvo
            const turmasExcesso = Object.keys(diferenca).filter(
              (turma) => diferenca[turma] > 0
            );
            const turmasFalta = Object.keys(diferenca).filter(
              (turma) => diferenca[turma] < 0
            );

            // Se houver turmas para trocar, faça a troca
            if (turmasExcesso.length > 0 && turmasFalta.length > 0) {
              for (let i = 0; i < turmasExcesso.length; i++) {
                const turmaExcesso = turmasExcesso[i];
                const turmaFalta = turmasFalta[i % turmasFalta.length];

                const alunoTrocaSalaAtual = salas[salaAtual].findIndex(
                  (aluno) => aluno === turmaExcesso
                );
                const alunoTrocaSalaAlvo = salas[salaAlvo].findIndex(
                  (aluno) => aluno === turmaFalta
                );

                // Realiza a troca
                if (
                  alunoTrocaSalaAtual !== -1 &&
                  alunoTrocaSalaAlvo !== -1 &&
                  salas[salaAtual].length > 0 &&
                  salas[salaAlvo].length > 0
                ) {
                  salas[salaAtual][alunoTrocaSalaAtual] = turmaFalta;
                  salas[salaAlvo][alunoTrocaSalaAlvo] = turmaExcesso;
                  trocaRealizada = true;
                }
              }
            }
          }
        });
      });

      iteracoes++;
    }

    console.log("Número de alunos de cada turma em cada sala após trocas:");

    Object.keys(salas).forEach((sala) => {
      const turmasNestaSala = {};

      Object.keys(turmas).forEach((turma) => {
        const numAlunos = salas[sala].filter((aluno) => aluno === turma).length;
        turmasNestaSala[turma] = numAlunos;
      });

      console.log(`${sala}: ${JSON.stringify(turmasNestaSala)}`);
      distribuicao[sala] = JSON.stringify(turmasNestaSala);
    });

    console.log(distribuicao);

    console.log(
      "Quantidade total de alunos presentes em cada sala após trocas:"
    );
    Object.keys(salas).forEach((sala) => {
      const totalAlunosSala = salas[sala].length;
      console.log(`${sala}: ${totalAlunosSala}`);
    });

    return salas;
  }

  if (inseriuCorretamente) {
    const resultado = distribuirAlunosUniformemente(turmas, capacidades);

    qtd9A = JSON.parse(distribuicao["9A"]);
    qtd9B = JSON.parse(distribuicao["9B"]);
    qtd1A = JSON.parse(distribuicao["1A"]);
    qtd1B = JSON.parse(distribuicao["1B"]);
    qtd2A = JSON.parse(distribuicao["2A"]);
    qtd2B = JSON.parse(distribuicao["2B"]);
    qtd3A = JSON.parse(distribuicao["3A"]);
    qtd3B = JSON.parse(distribuicao["3B"]);

    var total = 0;
    document.getElementById("a9A9A").textContent = qtd9A["9A"];
    document.getElementById("a9A9B").textContent = qtd9A["9B"];
    document.getElementById("a9A1A").textContent = qtd9A["1A"];
    document.getElementById("a9A1B").textContent = qtd9A["1B"];
    document.getElementById("a9A2A").textContent = qtd9A["2A"];
    document.getElementById("a9A2B").textContent = qtd9A["2B"];
    document.getElementById("a9A3A").textContent = qtd9A["3A"];
    document.getElementById("a9A3B").textContent = qtd9A["3B"];
    total +=
      qtd9A["9A"] +
      qtd9A["9B"] +
      qtd9A["1A"] +
      qtd9A["1B"] +
      qtd9A["2A"] +
      qtd9A["2B"] +
      qtd9A["3A"] +
      qtd9A["3B"];
    document.getElementById("a9A").textContent = total;
    total = 0;

    document.getElementById("a9B9A").textContent = qtd9B["9A"];
    document.getElementById("a9B9B").textContent = qtd9B["9B"];
    document.getElementById("a9B1A").textContent = qtd9B["1A"];
    document.getElementById("a9B1B").textContent = qtd9B["1B"];
    document.getElementById("a9B2A").textContent = qtd9B["2A"];
    document.getElementById("a9B2B").textContent = qtd9B["2B"];
    document.getElementById("a9B3A").textContent = qtd9B["3A"];
    document.getElementById("a9B3B").textContent = qtd9B["3B"];
    total +=
      qtd9B["9A"] +
      qtd9B["9B"] +
      qtd9B["1A"] +
      qtd9B["1B"] +
      qtd9B["2A"] +
      qtd9B["2B"] +
      qtd9B["3A"] +
      qtd9B["3B"];
    document.getElementById("a9B").textContent = total;
    total = 0;

    document.getElementById("a1A9A").textContent = qtd1A["9A"];
    document.getElementById("a1A9B").textContent = qtd1A["9B"];
    document.getElementById("a1A1A").textContent = qtd1A["1A"];
    document.getElementById("a1A1B").textContent = qtd1A["1B"];
    document.getElementById("a1A2A").textContent = qtd1A["2A"];
    document.getElementById("a1A2B").textContent = qtd1A["2B"];
    document.getElementById("a1A3A").textContent = qtd1A["3A"];
    document.getElementById("a1A3B").textContent = qtd1A["3B"];
    total +=
      qtd1A["9A"] +
      qtd1A["9B"] +
      qtd1A["1A"] +
      qtd1A["1B"] +
      qtd1A["2A"] +
      qtd1A["2B"] +
      qtd1A["3A"] +
      qtd1A["3B"];
    document.getElementById("a1A").textContent = total;
    total = 0;

    document.getElementById("a1B9A").textContent = qtd1B["9A"];
    document.getElementById("a1B9B").textContent = qtd1B["9B"];
    document.getElementById("a1B1A").textContent = qtd1B["1A"];
    document.getElementById("a1B1B").textContent = qtd1B["1B"];
    document.getElementById("a1B2A").textContent = qtd1B["2A"];
    document.getElementById("a1B2B").textContent = qtd1B["2B"];
    document.getElementById("a1B3A").textContent = qtd1B["3A"];
    document.getElementById("a1B3B").textContent = qtd1B["3B"];
    total +=
      qtd1B["9A"] +
      qtd1B["9B"] +
      qtd1B["1A"] +
      qtd1B["1B"] +
      qtd1B["2A"] +
      qtd1B["2B"] +
      qtd1B["3A"] +
      qtd1B["3B"];
    document.getElementById("a1B").textContent = total;
    total = 0;

    document.getElementById("a2A9A").textContent = qtd2A["9A"];
    document.getElementById("a2A9B").textContent = qtd2A["9B"];
    document.getElementById("a2A1A").textContent = qtd2A["1A"];
    document.getElementById("a2A1B").textContent = qtd2A["1B"];
    document.getElementById("a2A2A").textContent = qtd2A["2A"];
    document.getElementById("a2A2B").textContent = qtd2A["2B"];
    document.getElementById("a2A3A").textContent = qtd2A["3A"];
    document.getElementById("a2A3B").textContent = qtd2A["3B"];
    total +=
      qtd2A["9A"] +
      qtd2A["9B"] +
      qtd2A["1A"] +
      qtd2A["1B"] +
      qtd2A["2A"] +
      qtd2A["2B"] +
      qtd2A["3A"] +
      qtd2A["3B"];
    document.getElementById("a2A").textContent = total;
    total = 0;

    document.getElementById("a2B9A").textContent = qtd2B["9A"];
    document.getElementById("a2B9B").textContent = qtd2B["9B"];
    document.getElementById("a2B1A").textContent = qtd2B["1A"];
    document.getElementById("a2B1B").textContent = qtd2B["1B"];
    document.getElementById("a2B2A").textContent = qtd2B["2A"];
    document.getElementById("a2B2B").textContent = qtd2B["2B"];
    document.getElementById("a2B3A").textContent = qtd2B["3A"];
    document.getElementById("a2B3B").textContent = qtd2B["3B"];
    total +=
      qtd2B["9A"] +
      qtd2B["9B"] +
      qtd2B["1A"] +
      qtd2B["1B"] +
      qtd2B["2A"] +
      qtd2B["2B"] +
      qtd2B["3A"] +
      qtd2B["3B"];
    document.getElementById("a2B").textContent = total;
    total = 0;

    document.getElementById("a3A9A").textContent = qtd3A["9A"];
    document.getElementById("a3A9B").textContent = qtd3A["9B"];
    document.getElementById("a3A1A").textContent = qtd3A["1A"];
    document.getElementById("a3A1B").textContent = qtd3A["1B"];
    document.getElementById("a3A2A").textContent = qtd3A["2A"];
    document.getElementById("a3A2B").textContent = qtd3A["2B"];
    document.getElementById("a3A3A").textContent = qtd3A["3A"];
    document.getElementById("a3A3B").textContent = qtd3A["3B"];
    total +=
      qtd3A["9A"] +
      qtd3A["9B"] +
      qtd3A["1A"] +
      qtd3A["1B"] +
      qtd3A["2A"] +
      qtd3A["2B"] +
      qtd3A["3A"] +
      qtd3A["3B"];
    document.getElementById("a3A").textContent = total;
    total = 0;

    document.getElementById("a3B9A").textContent = qtd3B["9A"];
    document.getElementById("a3B9B").textContent = qtd3B["9B"];
    document.getElementById("a3B1A").textContent = qtd3B["1A"];
    document.getElementById("a3B1B").textContent = qtd3B["1B"];
    document.getElementById("a3B2A").textContent = qtd3B["2A"];
    document.getElementById("a3B2B").textContent = qtd3B["2B"];
    document.getElementById("a3B3A").textContent = qtd3B["3A"];
    document.getElementById("a3B3B").textContent = qtd3B["3B"];
    total +=
      qtd3B["9A"] +
      qtd3B["9B"] +
      qtd3B["1A"] +
      qtd3B["1B"] +
      qtd3B["2A"] +
      qtd3B["2B"] +
      qtd3B["3A"] +
      qtd3B["3B"];
    document.getElementById("a3B").textContent = total;
    total = 0;
    distribuiuCorretamente = true;
  } else {
    alert("Insira os alunos antes de gerar a distribuição");
  }
}
