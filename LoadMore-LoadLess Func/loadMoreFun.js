let box = document.querySelectorAll(".box");
let btn = document.getElementById("btn");

let visibleCards = 4; //initial no of cards
let isLoadingMore = true; // to track the button state
let showCardValue = 4;

// Initially hide all cards beyond the visible count
for (let i = visibleCards; i < box.length; i++) {
  box[i].classList.add("hidden");
}

btn.addEventListener("click", () => {
  if (isLoadingMore) {
    visibleCards += showCardValue;

    for (let i = 0; i < visibleCards && i < box.length; i++) {
      box[i].classList.remove("hidden");
    }

    if (visibleCards >= box.length) {
      btn.innerText = "load less";
      isLoadingMore = false;
    }
  } else {
    visibleCards -= showCardValue;

    for (let i = visibleCards; i < box.length; i++) {
      box[i].classList.add("hidden");
    }

    if (visibleCards <= showCardValue) {
      visibleCards = 4; // Ensure the minimum visible cards are 4
      btn.innerText = "load more";
      isLoadingMore = true;
    }
  }
});
