let searchInput = document.querySelector("#searchInput");

// Step 1 => debounce function define karte hain (higher-order function)
function debounce(callback, delay) {
	let timer; // previous timeout store karega

	return function (...args) {
		console.log("→ debounce function run hua");

		// Step 5 => har baar naya input aate hi purana timer clear karo
		clearTimeout(timer);
		console.log("→ purana timer clear kar diya (typing again)");

		// Step 6 => naya timer set karo jo delay ke baad callback ko call kare
		timer = setTimeout(() => {
			console.log("→ delay complete, ab original callback chalega");
			callback.apply(this, args); // yahan callback = handleSearch
		}, delay);
	};
}

// Step 2 => ye wo function hai jo actual kaam karega (API call ya console log)
function handleSearch(args) {
	console.log("✅ handleSearch called with:", args);
}

// Step 3 => debounce ko call karte hain aur ek debounced version bana lete hain
// debounce(handleSearch, 500) => ek new function return karta hai (closure)
// jise hum debouncedSearch me store kar lete hain
const debouncedSearch = debounce(handleSearch, 500);

// Step 4 => input event listener lagate hain
searchInput.addEventListener("input", (e) => {
	// jab bhi user type karega, ye arrow function chalega
	// aur debouncedSearch ko call karega with argument (e.target.value)
	console.log("→ listener triggered, calling debouncedSearch with:", e.target.value);
	debouncedSearch(e.target.value);

	/*
		Step-by-step after this:
		------------------------------------------------
		1️⃣ debouncedSearch() actually wo returned function hai from debounce()
		    → to control inside debounce() return function {...} me chala jata hai
		
		2️⃣ debounce() ke andar:
		     - clearTimeout(timer) hota hai (purana timer delete)
		     - naya timer setTimeout(...) lagta hai
		
		3️⃣ agar user fir se type kare → step 1 repeat hoga (purana timer clear, naya set)
		
		4️⃣ jab user typing stop kare for 500ms → timer complete hoga
		     → callback.apply(this, args) chalega
		     → matlab handleSearch(e.target.value) call hoga

		5️⃣ handleSearch() print karega ya API call karega with final input value.
	*/
});




