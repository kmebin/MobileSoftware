const checkInvalidNumber = (value: number) => {
  return isNaN(value) || value <= 0 || value > 99;
};

export default checkInvalidNumber;
