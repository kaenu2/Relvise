import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/



const iconMenu = document.querySelector('.menu__icon')

if (iconMenu) {
	const navMenu = document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		navMenu.classList.toggle("_active");
	});
}