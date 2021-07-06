// html 

const { css } = require("styled-components");



// <div class="slider-container">
// 	<h1>The best for<br/>
// 		the brightest.</h1>
// 	<div class="slide" style="background-image: url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')"></div>
	
// 	<div class="slide" style="background-image: url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')"></div>
	
// 	<div class="slide" style="background-image: url('https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80')"></div>
	
// 	<div class="controls-container">
// 		<div class="control"></div>
// 		<div class="control"></div>
// 		<div class="control"></div>
// 	</div>
// </div>


// ---------------------------------------------------
// css
// @import url('https://fonts.googleapis.com/css?family=Roboto:900&display=swap');

// * {
// 	box-sizing: border-box;
// }

// body {
// 	font-family: 'Roboto', sans-serif;
// 	margin: 0;
// }

// .slider-container {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	overflow: hidden;
// 	position: relative;
// 	height: 100vh;
// 	width: 100vw;
// }

// .slider-container h1 {
// 	color: #fff;
// 	font-size: 100px;
// 	letter-spacing: 5px;
// 	position: relative;
// 	z-index: 100;
// 	text-align: center;
// }

// .slider-container::after {
// 	background-color: #000;
// 	content: '';
// 	position: absolute;
// 	opacity: 0.3;
// 	top: 0;
// 	left: 0;
// 	height: 100%;
// 	width: 100%;
// 	z-index: 1;
// }

// .slide {
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	background-position: center center;
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	opacity: 0;
// 	height: 100%;
// 	width: 100%;
// 	transform: scale(1.15);
// 	transition: opacity .6s ease;
// }

// .slide.active {
// 	animation: grow 4s linear forwards;
// 	opacity: 1;
// }

// @keyframes grow {
// 	0%, 20% {
// 		transform: scale(1);
// 	}
	
// 	75%, 100% {
// 		transform: scale(1.15);
// 	}
// }

// .controls-container {
// 	position: absolute;
// 	top: 50%;
// 	right: 10px;
// 	display: flex;
// 	flex-direction: column;
// 	transform: translateY(-50%);
// 	z-index: 2;
// }

// .control {
// 	background-color: #fff;
// 	cursor: pointer;
// 	opacity: 0.5;
// 	margin: 6px;
// 	height: 40px;
// 	width: 5px;
// 	transition: opacity 0.3s, background-color 0.3s, transform 0.3s;
// }

// .control.active, .control:hover {
// 	background-color: #fff;
// 	opacity: 1;
// 	transform: scale(1.2);
// }
// -------------------------------------------------
// Javascript 
// const slides = document.querySelectorAll('.slide');
// const controls = document.querySelectorAll('.control');
// let activeSlide = 0;
// let prevActive = 0;

// changeSlides();
// let int = setInterval(changeSlides, 4000);

// function changeSlides() {
// 	slides[prevActive].classList.remove('active');
// 	controls[prevActive].classList.remove('active');

// 	slides[activeSlide].classList.add('active');
// 	controls[activeSlide].classList.add('active');
	
// 	prevActive = activeSlide++;
	
// 	if(activeSlide >= slides.length) {
// 		activeSlide = 0;
// 	}
	
// 	console.log(prevActive, activeSlide);
// }

// controls.forEach(control => {
// 	control.addEventListener('click', () => {
// 		let idx = [...controls].findIndex(c => c === control);
// 		activeSlide = idx;

// 		changeSlides();

// 		clearInterval(int);
// 		int = setInterval(changeSlides, 4000);
// 	});
// });