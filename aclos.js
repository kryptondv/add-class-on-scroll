const data = [];

// Function for selecting elements and specyfying name of the class to add

const addElements = (classToSelect, classToAdd, offset) => {
  const elementData = {
    [classToSelect]: classToAdd,
    offset,
  };
  return elementData;
};

// Function for adding class on scroll
const aclos = () => {
  const nodeListArr = data.map(entry =>
    document.querySelectorAll(`.${entry.classToSelect}`)
  );
  const positions = nodeListArr.map(list =>
    Array.from(list).map(el => el.getBoundingClientRect().y)
  );

  console.log(nodeListArr, positions);
  window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    nodeListArr.forEach((list, listIndex) => {
      list.forEach((element, elementIndex) => {
        if (
          scrollPosition + data[listIndex].offset >
          positions[listIndex][elementIndex]
        ) {
          element.classList.add(data[listIndex].classToAdd);
        }
      });
    });
  });
};
