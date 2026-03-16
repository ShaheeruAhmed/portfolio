const roles = [
  "Senior QA Engineer",
  "Automation Specialist",
  "Quality Advocate",
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  currentRole = roles[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent = currentRole.substring(0, j);

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;

    setTimeout(type, 1500);

    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;

    i++;

    if (i === roles.length) {
      i = 0;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Navbar: hide on scroll down, show on scroll up
var navbar = document.querySelector(".navbar");
var lastScrollY = window.scrollY || 0;
var scrollThreshold = 80;

function onScroll() {
  var currentScrollY = window.scrollY || 0;
  if (currentScrollY <= scrollThreshold) {
    navbar.classList.remove("navbar--hidden");
  } else if (currentScrollY > lastScrollY) {
    navbar.classList.add("navbar--hidden");
  } else {
    navbar.classList.remove("navbar--hidden");
  }
  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", onScroll, { passive: true });

// Initialize AOS (Animate On Scroll) and tsParticles
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 600,
    offset: 80,
    once: false,
    easing: "ease-out-cubic",
    delay: 100,
    mirror: false,
    anchorPlacement: "top-bottom",
    anchorClass: "aos-animate",
    disable: false,
    startEvent: "DOMContentLoaded",
    endEvent: "load",
  });

  // Subtle moving background particles (tsParticles)
  if (typeof tsParticles !== "undefined") {
    tsParticles
      .load({
        id: "tsparticles",
        options: {
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 45 },
            color: { value: "#a47864" },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: true,
              straight: false,
            },
            size: { value: { min: 1, max: 2.5 } },
            opacity: { value: { min: 0.2, max: 0.5 } },
            shape: { type: "circle" },
          },
          interactivity: {
            events: { onHover: { enable: false } },
            modes: {},
          },
        },
      })
      .catch(function (err) {
        console.error("tsParticles error:", err);
      });
  }

  // Animate skill bars when Metrics section enters view (0 → percent transition)
  var metricsSection = document.getElementById("metrics");
  if (metricsSection) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var bars = entry.target.querySelectorAll(".skill-bar");
          // Defer to next frame so browser paints width: 0 first, then we transition to target
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              bars.forEach(function (bar) {
                var fill = bar.querySelector(".skill-fill");
                if (fill) {
                  var percent = fill.getAttribute("data-percent") || "0";
                  fill.style.setProperty("--fill-width", percent + "%");
                  bar.classList.add("animated");
                }
              });
            });
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px" },
    );
    observer.observe(metricsSection);
  }
});
