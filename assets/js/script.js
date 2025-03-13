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
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est expedita fuga neque obcaecati iure exercitationem veniam blanditiis, aspernatur accusantium eaque unde aut porro, mollitia reprehenderit qui doloribus, minus eum."',
  },
  {
    img: "/assets/images/home/testimonial/alex.png",
    name: "Alex",
    review:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est expedita fuga neque obcaecati iure exercitationem veniam blanditiis, asperndoloribus, minus eum.!"',
  },
  {
    img: "/assets/images/home/testimonial/sofia.png",
    name: "sophia",
    review:
      '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est expedita fuga neque obcaecati iure exercitationem veniam blanditiis, aspernatur accibus, minus eum.."',
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
