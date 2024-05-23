console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8, 0.05, 0)";

let aCard = document.querySelectorAll(".card");
for (let i 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;
  eachCard.addEventListner('click', function(evt){
    container.dataset.selected = evt.currentTarget.dataset.nth;
  })
}

