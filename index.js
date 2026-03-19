let randomNumber1 = Math.floor(Math.random() * 6 + 1); // 1 ile 6 arasında random numara oluşturmak için böyle kullanılır.
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

function setTheImg(randomNumber, imgClass) {
  // imgClass parametresi aşaıda fonksiyonu çağırdığımızda geliyor buraya.
  switch (
    randomNumber // return ve break aynı yerde kullanılmaz returnlar çalıştığı an fonksiyon zaten biter.
  ) {
    case 1:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice1.png");

    case 2:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice2.png");

    case 3:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice3.png");

    case 4:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice4.png");

    case 5:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice5.png");

    case 6:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice6.png");

    default:
      return document
        .querySelector(imgClass)
        .setAttribute("src", "./images/dice1.png");
  }
}

setTheImg(randomNumber1, ".img1");
setTheImg(randomNumber2, ".img2");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins !"; // document objesinden h1 elementini query et ve bunun iç htmlini player 1 winse ayarla demek.
  // player 1 random numberı daha büyük geldi
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins !";
  // player ikinin random numberı daha büyük geldi
} else {
  document.querySelector("h1").innerHTML = "Draw !";
  // berabere biten oyun
}
