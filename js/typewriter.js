// Sticky nav background on scroll
(function () {
  var header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();

// Hamburger menu toggle
(function () {
  var btn = document.getElementById("hamburger");
  var nav = document.getElementById("main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
  });

  // Close menu when a link is tapped
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      btn.classList.remove("open");
      nav.classList.remove("open");
    });
  });
})();

// Typewriter
(function () {
  var texts = [
    "The Social Market Co.",
    "Community · Creativity · Connection",
    "shop local. gather often.",
  ];
  var speed = 60;
  var deleteSpeed = 30;
  var waitTime = 2000;

  var el = document.getElementById("typewriter-text");
  if (!el) return;

  var textIndex = 0;
  var charIndex = 0;
  var isDeleting = false;

  function tick() {
    var current = texts[textIndex];

    if (isDeleting) {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, deleteSpeed);
    } else {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        setTimeout(function () {
          isDeleting = true;
          tick();
        }, waitTime);
        return;
      }
      setTimeout(tick, speed);
    }
  }

  // Small initial delay before starting
  setTimeout(tick, 400);
})();
