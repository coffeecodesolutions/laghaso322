const btnSwitch = document.querySelector('#switch');
const imgLogo = document.querySelector("figure img");

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	imgLogo.src="./imagenes/coffecode.png";
	// Guardamos el modo en localstorage.

	if (document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
		imgLogo.src="./imagenes/coffecode.png";
	} else {
		localStorage.setItem('dark-mode', 'false');
		imgLogo.src="./imagenes/coffecode_dark.png";
	}
});

// Obtenemos el modo actual.
if (localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	imgLogo.src="./imagenes/coffecode.png";
	btnSwitch.classList.add('active');

} else {
	document.body.classList.remove('dark');
	imgLogo.src="./imagenes/coffecode_dark.png";
	btnSwitch.classList.remove('active');
}