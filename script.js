// Toggle mobile navigation
    function toggleMenu() {
      const menu = document.querySelector("nav ul");
      menu.classList.toggle("show");
    }

    const images = document.querySelectorAll(".sample-images img");
images.forEach(img => {
  img.addEventListener("click", () => {
    // Open the image in a modal or lightbox
    console.log("Image clicked:", img.src);
  });
});

// Form Validation Function
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.style.display = 'none');

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate name
  if (name === '') {
    document.getElementById('name-error').style.display = 'block';
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById('email-error').style.display = 'block';
    isValid = false;
  }

  // Validate message
  if (message === '') {
    document.getElementById('message-error').style.display = 'block';
    isValid = false;
  }

  // If form is valid, submit it (this example doesn't actually submit anywhere)
  if (isValid) {
    alert('Form submitted successfully!');
    // You can replace this with actual form submission logic, like sending data to a server.
  }
});
// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
  
});
    document.getElementById('menu-toggle').addEventListener('click', function () {
      document.getElementById('nav-menu').classList.toggle('show');
    });