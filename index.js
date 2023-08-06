// Task 1

function makeObjectDeepCopy(sourceObj) {
  let copyObj;

  if (Array.isArray(sourceObj)) {
    copyObj = [];
  } else if (typeof sourceObj === 'object' && !(sourceObj instanceof Date)) {
    copyObj = {};
  } else {
    return sourceObj;
  }

  for (let key in sourceObj) {
    if (sourceObj[key] instanceof Date) {
      copyObj[key] = new Date(sourceObj[key])
    } else if (Array.isArray(sourceObj[key])) {
      copyObj[key] = sourceObj[key].map((item) => item instanceof Object ? makeObjectDeepCopy(item) : item)
    } else if (sourceObj[key] instanceof Object) {
      copyObj[key] = makeObjectDeepCopy(sourceObj[key]);
    } else {
      copyObj[key] = sourceObj[key];
    }
  }
  return copyObj;
}

// Version 2 improved

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
  const isValid = typeof start === 'number' && typeof end === 'number';

  if (!Array.isArray(arr) || !isValid) {
    throw new Error('Error!');
  }

  if (start > end) {
    return arr.filter((num) => num <= start && num >= end);
  } else if (start < end) {
    return arr.filter((num) => num <= end && num >= start);
  }

}
