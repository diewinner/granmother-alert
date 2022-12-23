let count = 0;
let greet = prompt("ПРИВЕТ СЫНОК!! ЧТО ХОЧЕШЬ ОТ БАБУШКИ");
function getRandomDate(min, max) {
  min = Math.ceil(1900);
  max = Math.floor(1980);
  return Math.floor(Math.random() * (max - min)) + min;
}

while (count < 3) {
  if (greet !== greet.toUpperCase) {
    alert("ЧЕГО?? ГОВОРИ ПОГРОМЧЕ!");
  } else {
    alert(`НЕТ, УЖЕ КАК С ${getRandomDate(1900, 1980)} ГОДА`);
    if (count < 3 && greet === "ПОКА") {
      count++;
    } else {
      count = 0;
    }
  }
}
alert("ПОКА, ВНУЧОК!");
