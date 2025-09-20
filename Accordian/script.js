let head = document.querySelectorAll(".accordianHead");
let accordianContent = document.querySelectorAll(".accordianContent");

accordianContent[0].classList.toggle("show");

head.forEach((acc, index) => {
  acc.addEventListener("click", function (e) {
    if (accordianContent[index].classList.contains("show")) {
      accordianContent[index].classList.remove("show");
    } else {
      accordianContent.forEach((c) => c.classList.remove("show"));
      accordianContent[index].classList.add("show");
    }
  });
});
