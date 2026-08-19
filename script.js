if (window.innerWidth >= 768) {
  document.body.style.zoom = "125%";
} else {
  document.body.style.zoom = "100%";
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeId = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${activeId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// ========= progress bar ========= //

const progressBar = document.querySelector(".prog");
const indicator = document.querySelector(".indicator span");

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = Math.round((scrolled / documentHeight) * 100);
  progressBar.style.height = `${scrollPercentage}%`;
  indicator.textContent = `${Number(scrollPercentage)}%`;

  if (scrollPercentage >= 100) {
    indicator.textContent = "completed!";
  }
});

// ========== typing animaition ============= //

let title = document.querySelector(".animaition-typing");

const texts = [
  "Front-End Developer",
  "Web Developer",
  "Responsive Web Designer",
];

type (texts[0],0);



function type(text, i) {
  if (i > text.length) {
    setTimeout(() => {
      return erase(text, i);
    }, 1000);
    return;
  }
  setTimeout(() => {
    let sliced = text.slice(0, i);
    title.textContent = sliced;
    type(text, ++i);
  }, 200);
}

function erase(text, i) {
  setTimeout(() => {
    i--;

    let sliced = text.slice(0, i);
    title.textContent = sliced;

    if (i === 0) {
      setTimeout(() => {
         let randomIndex = Math.floor(Math.random() * texts.length);
         type(texts[randomIndex], 0);
      }, 1000);

      return;
    }

    erase(text, i);
  }, 200);
}