document.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".slide");
	const nextBtn = document.getElementById("next");
	const prevBtn = document.getElementById("prev");

	let currentIndex = 0;
	let slideInterval;

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

	nextBtn.addEventListener("click", () => {
		nextSlide();
		resetInterval();
	});

	prevBtn.addEventListener("click", () => {
		prevSlide();
		resetInterval();
	});

	function resetInterval() {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, 5000);
	}

	showSlide(currentIndex);
	slideInterval = setInterval(nextSlide, 5000);
});
