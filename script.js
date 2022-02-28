let but = document.querySelectorAll('.font__button');
let tab = document.querySelectorAll('.tab');

for (let i = 0; i < but.length; i++) {
	but[i].addEventListener('click', function () {
		if (!but[i].classList.contains('active')) {
			for (let j = 0; j < tab.length; j++) {
				tab[j].classList.toggle('active');
			}
			for (let i = 0; i < but.length; i++) {
				but[i].classList.toggle('active');
			}
		}
	});
}

// url parser

let linker = 'https://www.youtube.com/watch?v=apEEuVCIZ8A'

function parseUrl(url) {
	return new URL(url);
}

let obj = parseUrl(linker);

console.log(obj);
console.log(obj.pathname);
console.log(obj.protocol);
console.log(obj.search);