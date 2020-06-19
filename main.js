// Selects elements
const selectedElements = document.querySelectorAll('.aclos');

// Calculates selectedElements vertical positions and stores it in new array
const elPositions = Array.from(selectedElements).map(
  el => el.getBoundingClientRect().y
);

// Listenes for scroll event
const aclos = (name) => {
  window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    selectedElements.forEach((el, index) => {
      if (scrollPosition > elPositions[index]) {
        el.classList.add('classname');
      }
    });
  });
}
