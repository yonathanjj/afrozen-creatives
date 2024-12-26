function toggleNav() {
    const navbar = document.querySelector('.navbar-center');
    navbar.classList.toggle('active');
}


// GSAP Animation for NavBar
gsap.from(".navbar", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
});

gsap.from(".nav-links a", {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "power3.out",
});

gsap.from(".cta-button", {
    duration: 0.8,
    opacity: 0,
    scale: 0.9,
    ease: "back.out(1.7)",
    delay: 1,
});

// GSAP Animation
document.addEventListener("DOMContentLoaded", () => {
  // Animate the Hero Header (Title)
  gsap.from(".hero-header", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    ease: "power4.out",
  });

  // Animate the Hero Images (slightly bounce and rotate in)
  gsap.from(".hero-image-left", {
    opacity: 0,
    y: 100,
    rotate: -30,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5,
  });

  gsap.from(".hero-image-right", {
    opacity: 0,
    y: 100,
    rotate: 30,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5,
  });
});


document.addEventListener("DOMContentLoaded", function() {
  gsap.from(".about-section", {
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from(".about-header span", {
    opacity: 0,
    duration: 1.5,
    delay: 1,
    stagger: 0.1,
    ease: "power2.out",
    color: "transparent",
    textShadow: "0 0 20px #32cd32",
  });

  gsap.from(".about-paragraph span", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
    stagger: 0.05,
    ease: "power2.out",
    color: "transparent",
    textShadow: "0 0 20px #32cd32",
  });

  gsap.from(".more-button", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
    ease: "power2.out",
    textShadow: "0 0 10px #32cd32",
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // GSAP animation for fade-in effect
  gsap.to(".games-section", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });

  gsap.to(".games-header", {
    opacity: 1,
    y: -30,
    duration: 1,
    delay: 1,
    ease: "power2.out"
  });

  gsap.to(".game-card", {
    opacity: 1,
    y: -30,
    duration: 1,
    delay: 1.5,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.to(".discover-button", {
    opacity: 1,
    y: -20,
    duration: 1,
    delay: 2,
    ease: "power2.out"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const gamesSection = document.querySelector('.games-section');

  // Initialize the IntersectionObserver to detect when the section is in view
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the section enters the viewport, add the 'visible' class
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after it becomes visible
      }
    });
  }, {
    threshold: 0.5 // Trigger the animation when 50% of the section is visible
  });

  // Start observing the games section
  observer.observe(gamesSection);
});


// Function to scroll the slider left or right
function scrollSlider(direction) {
  const sliderWrapper = document.querySelector('.events-slider-wrapper'); // Select the correct wrapper
  const scrollAmount = 400; // Amount to scroll each time

  const currentTransform = getComputedStyle(sliderWrapper).transform;
  const matrix = currentTransform === 'none' ? [1, 0, 0, 1, 0, 0] : currentTransform.split('(')[1].split(')')[0].split(','); // Parse the matrix transform
  const currentTranslateX = parseInt(matrix[4], 10) || 0; // Get the current translateX value

  sliderWrapper.style.transform = `translateX(${currentTranslateX + direction * scrollAmount}px)`; // Scroll left or right based on direction
}

// Adding event listeners to the navigation buttons
document.querySelector('.slider-prev').addEventListener('click', function() {
  scrollSlider(-1); // Scroll left when previous button is clicked
});

document.querySelector('.slider-next').addEventListener('click', function() {
  scrollSlider(1); // Scroll right when next button is clicked
});
