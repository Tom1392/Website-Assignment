

let slideIndex = 1;

document.querySelectorAll(".gallery a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop opening in new tab
    });
  });

function openLightbox() {
  document.getElementById("lightboxModal").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function setCurrentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = slides[slideIndex - 1].querySelector("img").alt;
}

document.addEventListener("DOMContentLoaded", function () {
    // Only run if contact form exists
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your query");
      });
    }
  
    //Safe toggle
    const toggle = document.getElementById("toggleMode");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.toggle("light-mode");
  
        // store theme preference
        if (document.body.classList.contains("light-mode")) {
          localStorage.setItem("theme", "light");
        } else {
          localStorage.setItem("theme", "dark");
        }
      });
    }
  
    //Load stored theme 
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.body.classList.add("light-mode");
    }
  });