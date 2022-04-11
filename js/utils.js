const getRandomPositiveInteger = (min, max) => {
  const from = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const to = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (to - from + 1) + from);
};

const getRandomPositiveFloat = (min, max, amountFloat = 1) => {
  const from = Math.min(Math.abs(min), Math.abs(max));
  const to = Math.max(Math.abs(min), Math.abs(max));
  return +(Math.random() * (to - from) + from).toFixed(amountFloat);
};

const getRandomUniquePositiveInteger = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

const getRandomUniquePositiveIntegerNotRange = (amount) => {
  const uniqueNumbers = Array.from({length: amount}).map((value, index) => index);
  uniqueNumbers.sort(() => Math.random() - 0.5);
  return () => {
    if (uniqueNumbers.length === 0) {
      return;
    }
    return uniqueNumbers.pop();
  };
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomUniquePositiveInteger, getRandomUniquePositiveIntegerNotRange};
