// Animasi menggunakan GSAP
const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

// ----------assets audio
const audioMasuk = document.getElementById("audio-masuk");
const audioKeluar = document.getElementById("audio-keluar");
const audioKecepatan = document.getElementById("audio-kecepatan");
const audioClick = document.getElementById("audio-click");
// -----------------Navbar menu--------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
	const navigationLinks = document.querySelectorAll("nav a");

	navigationLinks.forEach((link) => {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			audioKecepatan.play();
			const targetId = link.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const targetOffset = targetElement.offsetTop - 20;

				// Scroll halus ke elemen target dengan durasi 0.5 detik
				window.scrollTo({
					top: targetOffset,
					behavior: "smooth",
				});
			}
		});
	});
});

// --------------------------- Tags

const tagsContainers = document.querySelectorAll(".menu .item .tags");
const menuItem = document.querySelector(".menu .item");

tagsContainers.forEach((tags, index) => {
	const tagsStyle = window.getComputedStyle(tags);
	const tagsMaxHeight = tagsStyle.getPropertyValue("max-height");
	const tagsMaxHeightNumericValue = parseFloat(tagsMaxHeight);

	if (tags.scrollHeight > tagsMaxHeightNumericValue) {
		const btnShowMore = document.createElement("a");
		btnShowMore.setAttribute("class", "btn-show-more");
		btnShowMore.innerHTML =
			'<i class="fa-solid fa-caret-left" style="z-index:2;"></i>';
		tags.parentNode.appendChild(btnShowMore);

		btnShowMore.addEventListener("click", (e) => {
			e.preventDefault();
			audioClick.play();
			const tagsElementChilds = Array.from(tags.querySelectorAll("a"));

			if (!tags.classList.contains("show-more")) {
				tags.classList.add("show-more");
				const timeline = gsap.timeline({
					defaults: { ease: "power2.inOut" },
				});

				tagsElementChilds.forEach((tag, index) => {
					timeline.fromTo(
						tag,
						{ opacity: 0, visibility: "hidden" },
						{ opacity: 1, visibility: "visible", duration: 0.5 },
						index * 0.2
					);
				});

				btnShowMore.style.transform = "rotate(-90deg)";
			} else {
				tags.classList.remove("show-more");
				const timeline = gsap.timeline({
					defaults: { ease: "power2.inOut" },
				});

				tagsElementChilds.forEach((tag, index) => {
					timeline.to(
						tag,
						{ opacity: 1, visibility: "visible", duration: 0.1 },
						index * 0.2
					);
				});

				btnShowMore.style.transform = "rotate(0deg)";
			}
		});
	}
});

// -------------------- Hire Me!
const hireBtns = document.querySelectorAll(".hire-me");
const hirePopup = document.getElementById("hirePopup");
const whatsappBtn = document.getElementById("whatsappBtn");
const emailBtn = document.getElementById("emailBtn");
const btnCloseHirePopup = document.getElementById("btn-close-hire-popup");

hireBtns.forEach((hireBtn, index) => {
	hireBtn.addEventListener("click", function () {
		audioMasuk.play();
		hirePopup.style.display = "block";
		gsap.to(hirePopup, {
			duration: 0.5,
			opacity: 1,
			ease: "expo.inOut",
			y: "-180%",
		});
	});
});

btnCloseHirePopup.addEventListener("click", () => {
	audioKeluar.play();
	gsap.to(hirePopup, {
		duration: 0.5,
		opacity: 0,
		ease: "expo.inOut",
		y: "-255%",
	});
	setTimeout(() => {
		hirePopup.style.display = "none";
	}, 500);
});

whatsappBtn.addEventListener("click", function () {
	window.open("https://wa.me/+6283808165175", "_blank");
	audioKeluar.play();
	gsap.to(hirePopup, {
		duration: 0.5,
		opacity: 0,
		ease: "expo.inOut",
		y: "-255%",
	});
	setTimeout(() => {
		hirePopup.style.display = "none";
	}, 500);
});

emailBtn.addEventListener("click", function () {
	window.open("mailto:muhammadedowarday4@gmail.com", "_blank"); // Ganti dengan alamat email Anda
	audioKeluar.play();
	gsap.to(hirePopup, {
		duration: 0.5,
		opacity: 0,
		ease: "expo.inOut",
		y: "-255%",
	});
	setTimeout(() => {
		hirePopup.style.display = "none";
	}, 500);
});

// --------------- navbar

const btnBurger = document.querySelector(".btn-burger");
const navMenu = document.querySelector("header nav ul");
btnBurger.addEventListener("click", () => {
	navMenu.classList.toggle("active");
	if (navMenu.classList.contains("active")) {
		btnBurger.innerHTML =
			'<i class="fa-solid fa-xmark fa-beat-fade" style="transform:scale(2)"></i>';
	} else {
		btnBurger.innerHTML = '<i class="fa-solid fa-bars"></i>';
	}
});

if (navMenu.classList.contains("active")) {
	btnBurger.innerHTML = '<i class="fa-solid fa-xmark fa-beat-fade"></i>';
} else {
	btnBurger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}
