console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8, 0.05, 0)";
//let aCard = document.querySelector(".card");
//console.log(aCard);
//aCard.addEventListener("click", function () {
//console.log("클릭!");
//aCard.classList.toggle("card--state-clicked");
//console.log(aCard.classList);
//});
let cards = document.querySelectorAll(".card");
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let eachcard = cards[i];
  eachcard.addEventListner("click", function () {
    eachcard.classList.toggle("card--state-clicked");
  });
}
