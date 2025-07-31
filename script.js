// scrolling to top when button clicked 
let buttons = document.querySelector('.back-to-top');
if (buttons) {
  buttons.onclick = function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}