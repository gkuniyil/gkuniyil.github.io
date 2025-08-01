
  // scroll to top
  let button = document.querySelector('.back-to-top');
  if (button) {
    button.onclick = function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // like button logic
  document.querySelectorAll('.likeButton').forEach(button => {
    button.onclick = function () {
      const counter = this.querySelector('.likeCount');
      counter.textContent = Number(counter.textContent) + 1;
    };
  });

  const darkModeToggle = document.getElementById('toggleDarkMode');
  const body = document.body;
  
  if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {

          body.classList.toggle('dark-mode');
      });
  }
