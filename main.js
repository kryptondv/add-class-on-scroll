// Creates function for selecting elements and specyfying name of the class to add

const addElements = (classToSelect, classToAdd, offset) => {
    const elementData = {
      [classToSelect]: classToAdd,
      offset
    };
    return elementData;
};


const aclos = () => {
  const nodeListArr = data.map(entry =>
    document.querySelectorAll(`.${entry.classToSelect}`)
  );
  const positions = nodeListArr.map(list =>
    Array.from(list).map(el => el.getBoundingClientRect().y)
  );

  console.log(positions);
};



