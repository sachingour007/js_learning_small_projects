const searchInput = document.getElementById("searchInput");

const getApiData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const data = await res.json();
	console.log(data);
	return data;
};

function debounce(fn, delay) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}

const debounced = debounce(getApiData, 500);

searchInput.addEventListener("input", function (e) {
	debounced();
});
