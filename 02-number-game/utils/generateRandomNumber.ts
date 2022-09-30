const generateRandomNumber = (min: number, max: number, exclude: number): number | any => {
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return random;
  }
};

export default generateRandomNumber;
