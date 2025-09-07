// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("Sep 20, 2025 09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Conference has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Reveal on Scroll (Intersection Observer)
  const reveals = document.querySelectorAll(".reveal");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 });
  
  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

// Staggered entrance for avatars
const avatars = document.querySelectorAll(".avatar");
avatars.forEach((avatar, i) => {
  if (avatar.classList.contains("more")) {
    // Special animation for the "+245" bubble stays consistent
    avatar.style.animationDelay = "0s";
  } else {
    // Random delay between 0 and 2s for others
    const delay = Math.random() * 2;
    avatar.style.animationDelay = `${delay}s`;
  }
});

  // FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const icon = item.querySelector(".icon");
  const answer = item.querySelector("p");

  function toggleItem() {
    const isActive = item.classList.contains("active");

    // Close all other items
    faqItems.forEach(i => {
      const ans = i.querySelector("p");
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
      i.setAttribute("aria-expanded", "false");
      ans.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      icon.textContent = "–";
      item.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px"; // expand
    } else {
      item.classList.remove("active");
      icon.textContent = "+";
      item.setAttribute("aria-expanded", "false");
      answer.style.maxHeight = null; // collapse
    }
  }

  // Mouse click
  item.addEventListener("click", toggleItem);

  // Keyboard (Enter or Space)
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem();
    }
  });
});

const iframe = document.querySelector("#venue iframe");
  const mapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        iframe.src = iframe.dataset.src;
        mapObserver.disconnect();
      }
    });
  });
  mapObserver.observe(iframe);

  // Background Carousel for Hero Section
const hero = document.querySelector(".hero");

const bgImages = [
  "assets/hero-imgs/hero1.jpg",
  "assets/hero-imgs/hero2.jpg",
  "assets/hero-imgs/hero3.jpg",
  "assets/hero-imgs/hero4.jpg",
  "assets/hero-imgs/hero5.jpg",
  "assets/hero-imgs/hero6.jpg",
  "assets/hero-imgs/hero7.jpg",
  "assets/hero-imgs/hero8.jpg",
];

let currentIndex = 0;
const gradient = 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)';

// Start rotation after 3 seconds
setTimeout(() => {
  setInterval(() => {
    hero.style.backgroundImage = `
      url('${bgImages[currentIndex]}'), ${gradient}
      `;
    currentIndex = (currentIndex + 1) % bgImages.length;
  }, 5000); // change every 5s
}, 3000); // initial delay

// Registration form handling
const form = document.getElementById("reg-form");
console.log('Form', form)
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Stop default page reload

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.textContent = "🎉 Thank you for registering! We’ll contact you soon.";
      status.className = "form-status success";
      form.reset(); // Clear the form
    } else {
      status.textContent = "⚠️ Oops! Something went wrong. Please try again.";
      status.className = "form-status error";
    }
  } catch (error) {
    status.textContent = "❌ Network error. Please check your connection.";
    status.className = "form-status error";
  }
});

const reserveBtn = document.getElementById("reserve-spot");

reserveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (reserveBtn && form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

