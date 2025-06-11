// Scroll Animation
const animatedEls = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

animatedEls.forEach(el => observer.observe(el));

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Profile Image Upload
const profileUpload = document.getElementById('profileUpload');
const profileImage = document.getElementById('profileImage');

profileUpload.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    profileImage.src = URL.createObjectURL(file);
  }
});

// EmailJS Contact Form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => alert('Message Sent Successfully!'))
    .catch(() => alert('Failed to send message. Please try again later.'));
});
