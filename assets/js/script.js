// Function to load common components
function includeHTML() {
  document.querySelectorAll("[data-include]").forEach((el) => {
    fetch(el.getAttribute("data-include"))
      .then((response) => response.text())
      .then((data) => (el.innerHTML = data));
  });
}
document.addEventListener("DOMContentLoaded", includeHTML);

// ==========slider

const testimonials = [
  {
    img: "/assets/images/home/testimonial/sam.png",
    name: "sam",
    review:
      "\"Exceptional care and compassionate service – highly recommend this home nursing team!\"",
  },
  {
    img: "/assets/images/home/testimonial/alex.png",
    name: "Alex",
    review: "\"Great experience, the team was professional and very helpful!\"",
  },
  {
    img: "/assets/images/home/testimonial/sofia.png",
    name: "sophia",
    review:
      "\"Highly skilled professionals who genuinely care about their patients.\"",
  },
];
let currentIndex = 0;

function changeTestimonial(i) {
  currentIndex = i;
  updateTestimonial();
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
}

function updateTestimonial() {
  document.getElementById("main-img").src = testimonials[currentIndex].img;
  document.getElementById("name").innerText = testimonials[currentIndex].name;
  document.getElementById("review").innerText =
    testimonials[currentIndex].review;

  const leftIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (currentIndex + 1) % testimonials.length;

  document.getElementById("left-img").src = testimonials[leftIndex].img;
  document.getElementById("right-img").src = testimonials[rightIndex].img;
}

function autoSlide() {
  nextTestimonial();
  setTimeout(autoSlide, 4000);
}

setTimeout(autoSlide, 4000);
