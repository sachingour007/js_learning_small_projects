let parent = document.querySelector("#parent");
let child = document.querySelectorAll(".child");
console.log(child);

// child.forEach((btn) => {
// 	btn.addEventListener("click", function () {
// 		console.log(btn.innerHTML);
// 	});
// });


parent.addEventListener("click", function(e){
    console.log(e.target.innerHTML);
    
})