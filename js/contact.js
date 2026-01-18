document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#555";

    emailjs
      .sendForm(
        "service_dg03bm4",
        "template_7nsxlbi",
        this
      )
      .then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
      })
      .catch((error) => {
        status.textContent = "Failed to send message. Please try again.";
        status.style.color = "red";
        console.error("EmailJS error:", error);
      });
  });
});
