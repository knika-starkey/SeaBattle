let guess; // координата ячейки
let hits = 0; // попадания
let randomLoc = Math.floor(Math.random() * 5);
let loc = [randomLoc];
for (let i = 0; i < 2; i++) {
  randomLoc++;
  loc.push(randomLoc);
}

let player = [0, 0, 0, 0, 0, 0];
let guesses = 0; // попытки
let isSunk = false;
while (isSunk == false) {
  guess = prompt("Ваш выстрел! (введите число от 0 до 6):");
  if (guess < 0 || guess > 6) {
    alert("Введите правильный номер!");
  } else if (player[guess] == 1) {
    alert("Введите другое число");
  } else {
    guesses = guesses + 1;
    if (guess == loc[0] || guess == loc[1] || guess == loc[2]) {
      alert("Попал!");
      hits = hits + 1;
      player[guess] = 1;
      if (hits == 3) {
        isSunk = true;
        alert("Вы утопили корабль!");
      }
    } else {
      alert("Промах!");
    }
  }
}
let stats =
  "Вы предприняли " +
  guesses +
  " попыток, чтобы утопить корабль, " +
  "что означает, что общая точность была " +
  3 / guesses;
alert(stats);
