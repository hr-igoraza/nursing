// Function to load common components
function includeHTML() {
  document.querySelectorAll("[data-include]").forEach((el) => {
    fetch(el.getAttribute("data-include"))
      .then((response) => response.text())
      .then((data) => (el.innerHTML = data));
  });
}
document.addEventListener("DOMContentLoaded", includeHTML);

//============= nav

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  const linkPath = new URL(link.href, window.location.origin).pathname;
  if (window.location.pathname.endsWith(linkPath.replace("./", "/pages/"))) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// ==========slider

const testimonials = [
  {
    img: "/assets/images/home/testimonial/sam.png",
    name: "sam",
    review:
      '"KochinLifecare’s nurses truly cared, They took the time to understand my
preferences and created a care plan that felt truly personalized. I'm so
grateful for their compassionate and dedicated service."',
  },
  {
    img: "/assets/images/home/testimonial/alex.png",
    name: "Ronalssi Samuel",
    review:
      '"We needed skilled nursing careservice, At Kochin LifeCare exceeded our expectations. The nurses were highly professional, knowledgeable, and
reliable. They managed medications and wound care expertly, and their
communication was excellent. I highly recommend their services for anyone
needing top-notch nursing care."',
  },
  {
    img: "/assets/images/home/testimonial/sofia.png",
    name: "Raji Umesh",
    review:
      '"Kochin LifeCare provided invaluable support for our family during a difficult time. Their excellent care at home gave us immense peace of mind. The
nurses were not only skilled but also kind and patient, and they went above
and beyond to support our entire family. They truly understand the
importance of providing holistic care."',
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

// ===============whatsapp

document
  .querySelector(".book-on-whatsapp")
  .addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value;
    const service = document.getElementById("service").value;
    const bookingDate = document.getElementById("bookingDate").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!fullName || !bookingDate || !country || !phone || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    const adminNumber = "+918281213626"; // Replace with the admin's WhatsApp number (with country code, no spaces)
    const text = `Booking Request:%0AName: ${fullName}%0ARequested Service: ${service}%0ABooking Date: ${bookingDate}%0ACountry: ${country}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${adminNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  });
