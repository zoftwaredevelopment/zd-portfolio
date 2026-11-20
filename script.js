/* =============================
   Project data
   ============================= */
const projects = [
  {
    name: "Tarizika",
    url: "https://tarizika.vercel.app",
    category: "Food · Bakery",
    tag: "Live site",
    description:
      "Cakes, small chops and snacks worth gathering around — a sweet storefront for celebrations and everyday treats.",
  },
  {
    name: "MooluxBeuti",
    url: "https://mooluxbeuti.vercel.app",
    category: "Beauty · Wellness",
    tag: "Live site",
    description:
      "Loc care and styling studio in the GTA, Canada. Thoughtful loc maintenance, expert styling and scalp care from a specialist with over a decade of experience.",
  },
  {
    name: "Larisalefleur Florals",
    url: "https://llf-beta.vercel.app",
    category: "Florals · Gifting",
    tag: "Live site",
    description:
      "Preserved Ecuadorian roses and luxury flower boxes in Abuja. Real blooms that hold their beauty for up to a year, arranged by hand.",
  },
  {
    name: "Winnie's Chinchin & More",
    url: "https://winnieschinchin.vercel.app",
    category: "Food · Bakery",
    tag: "Live site",
    description:
      "Homemade Nigerian snacks baked fresh in small batches — golden chin chin, moist banana bread and party-ready boxes.",
  },
];

/* =============================
   Render project cards
   ============================= */
const grid = document.getElementById("project-grid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <div class="card-meta">
      <span class="tag">${project.category}</span>
      <span class="tag url">${project.tag}</span>
    </div>
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div class="card-actions">
      <a href="${project.url}" target="_blank" rel="noopener" class="btn btn-primary">Visit site →</a>
      <a href="${project.url}" target="_blank" rel="noopener" class="btn secondary icon-link" aria-label="Open ${project.name}">↗</a>
    </div>
  `;
  grid.appendChild(card);
});

/* =============================
   Footer year
   ============================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =============================
   Mobile menu toggle
   ============================= */
const toggle = document.createElement("button");
toggle.className = "menu-toggle";
toggle.setAttribute("aria-label", "Open menu");
toggle.innerHTML = "☰";

const headerInner = document.querySelector(".header-inner");
const navLinks = document.querySelector(".nav-links");
const cta = headerInner.querySelector('a.btn-primary');

headerInner.insertBefore(toggle, cta);

toggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.innerHTML = open ? "✕" : "☰";
});

// Close menu when clicking a nav link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.innerHTML = "☰";
    toggle.setAttribute("aria-expanded", "false");
  });
});