// Task 1

function makeObjectDeepCopy(sourceObj) {
  if (Array.isArray(sourceObj)) {
    return sourceObj.map(item => makeObjectDeepCopy(item));
  }

  if (sourceObj && typeof sourceObj === 'object' && !(sourceObj instanceof Date)) {
    const copyObj = {};
    for (let key in sourceObj) {
      copyObj[key] = makeObjectDeepCopy(sourceObj[key]);
    }
    return copyObj;
  }

  return sourceObj;
}

// Task 2

function selectFromInterval(arr, start, end) {
  const validNumber = (num) => typeof num === 'number' && !isNaN(num);
  const isValidRange = validNumber(start) && validNumber(end);
  const isValidArray = Array.isArray(arr) && arr.every(validNumber);

  if (!isValidRange || !isValidArray) {
    throw new Error('Ошибка!');
  }

  if (start > end) {
    return arr.filter((num) => num <= start && num >= end);
  } else {
    return arr.filter((num) => num <= end && num >= start);
  }
}

// Task 3

const myIterable = {
  from: 2,
  to: 9,
};

myIterable[Symbol.iterator] = function() {
  const validNumber = (num) => typeof num === 'number' && !isNaN(num);
  const isValid = validNumber(this.from) && validNumber(this.to);
  
  if (!isValid || this.to < this.from) {
    throw new Error('Ошибка!');
  };

  return {
    start: this.from,
    end: this.to,
    next() {
      if (this.start <= this.end) {
        return { done: false, value: this.start++ };
      } else {
        return { done: true };
      }
    }
  }
}
