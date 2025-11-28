 document.querySelectorAll("[data-scroll]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = btn.getAttribute("data-scroll");
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Theme toggle (dark / light)
    const themeToggle = document.getElementById("themeToggle");
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Load stored theme or system preference
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme === "light") {
      document.body.classList.add("light");
      themeToggle.textContent = "☀";
    } else if (storedTheme === "dark") {
      document.body.classList.remove("light");
      themeToggle.textContent = "☾";
    } else if (!prefersDark) {
      // system light
      document.body.classList.add("light");
      themeToggle.textContent = "☀";
    }

    themeToggle.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light");
      themeToggle.textContent = isLight ? "☀" : "☾";
      localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    });

    // Set current year in footer
    document.getElementById("year").textContent =
      new Date().getFullYear().toString();

// زر الرجوع للأعلى
const toTopBtn = document.getElementById("toTopBtn");

// كيبان ملي المستخدم يهبط تحت 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

// كيطلع للـ TOP بـ scroll smooth
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const imagePro = document.getElementById("image_pro");
const overlay = document.getElementById("imageOverlay");
const overlayImage = document.getElementById("overlayImage");

// منين تضغط على الصورة الأصلية
imagePro.addEventListener("click", () => { 
  overlayImage.src = "./img/profile1.jpg"; 
  overlay.classList.add("show");   // نظهر overlay
});

// منين تكليكّي برا
overlay.addEventListener("click", () => {

  overlay.classList.remove("show");
});
