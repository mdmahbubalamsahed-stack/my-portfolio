
document.addEventListener("DOMContentLoaded", () => {
  // Current Year
  const year = document.querySelectorAll("#year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  // Mobile Menu
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // Project Filters
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

  // EmailJS Contact Form
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const sendBtn = document.getElementById("send-btn");

  if (form && status && sendBtn && typeof emailjs !== "undefined") {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";
      status.textContent = "";

      emailjs.sendForm(
        "service_khlvxhg",
        "template_ykn2lz7",
        form
      )
      .then(() => {
        status.textContent = "Message sent successfully!";
        form.reset();
      })
      .catch(error => {
        console.error("EmailJS Error:", error);
        status.textContent =
          "Message could not be sent. Please try again.";
      })
      .finally(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = "Send Message →";
      });
    });
  }
});
