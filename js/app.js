'use strict';
const hamburger = document.querySelector('.hamburger');
const linksMenu = document.querySelector('.links-menu');

const gallery = [...document.querySelectorAll('.img')];
const screenBox = document.querySelector('.screen-box');
const previewImg = screenBox.querySelector('img');
const closeScreen = document.querySelector('.icon');

// for (let i = 0; i < gallery.length; i++) {
//   //console.log(i);
//   //let cardGallery = gallery[i];

//   gallery[i].onclick = () => {
//     console.log(i);
//     function preview() {
//       let selectImg = gallery[i].querySelector("img").src;
//       previewImg.src = selectImg;
//       console.log(selectImg);
//     }

//     preview();
//     screenBox.classList.add("show-screen");

//     closeScreen.onclick = () => {
//       screenBox.classList.remove("show-screen");
//       console.log("clicou");
//     };
//   };
// }

// gallery.addEventListener("click", () =>{
//   for(let i =0; i<gallery.length; i++){
//     console.log()
//   }
// })

console.log(gallery);

gallery.map(elem => {
	elem.addEventListener('click', e => {
		screenBox.classList.add('show-screen');

		closeScreen.onclick = () => {
			screenBox.classList.remove('show-screen');
		};

		return console.log(e.target);
	});
	return console.log('click');
});

hamburger.addEventListener('click', () => {
	linksMenu.classList.toggle('toggle-menu');
});
