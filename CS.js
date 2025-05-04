const modal = document.getElementById('authModal');
  const openModalBtn = document.getElementById('loginBtn');
  const closeModalBtn = document.querySelector('.close-btn');

  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginToggle = document.getElementById('loginToggle');
  const signupToggle = document.getElementById('signupToggle');

  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable scroll
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scroll
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restore scroll
    }
  });

  loginToggle.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginToggle.classList.add('active');
    signupToggle.classList.remove('active');
  });

  signupToggle.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupToggle.classList.add('active');
    loginToggle.classList.remove('active');
  });