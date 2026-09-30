document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("#year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("show"));
  }

  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project");

  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      projects.forEach(project => {
        project.style.display =
          filter === "all" || project.dataset.category === filter
            ? "block"
            : "none";
      });
    });
  });
});
