window.startCarousel=(carouselId) =>{
	var myCarousel = document.getElementById(carouselId);
	var carousel = new bootstrap.Carousel(myCarousel);
	carousel.cycle(); // NOTE: this will cause the carousel to start immediately
}
window.alertMessage = (message) => {
	alert("Hello World");
}