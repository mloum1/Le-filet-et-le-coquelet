document.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".slide");
	const nextBtn = document.getElementById("next");
	const prevBtn = document.getElementById("prev");
	const menuToggle = document.getElementById("menuToggle");
	const mobileNav = document.getElementById("mobileNav");

	let currentIndex = 0;
	let slideInterval;

	// Affiche la diapositive demandée
	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.remove("active");
			slide.style.opacity = "0";
			if (i === index) {
				slide.classList.add("active");
				slide.style.opacity = "1";
			}
		});
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		showSlide(currentIndex);
	}

	function resetInterval() {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, 5000);
	}

	nextBtn.addEventListener("click", () => {
		nextSlide();
		resetInterval();
	});

	prevBtn.addEventListener("click", () => {
		prevSlide();
		resetInterval();
	});

	// Bouton de menu mobile
	menuToggle.addEventListener("click", () => {
		mobileNav.classList.toggle("open");
		menuToggle.classList.toggle("open");
	});

	// Lancer le diaporama automatiquement
	showSlide(currentIndex);
	slideInterval = setInterval(nextSlide, 5000);
});
