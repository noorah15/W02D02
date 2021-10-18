//CHALLENGE 1

const addOne = (arr) => {
  const arr2 = [];
  arr.forEach((element) => {
    arr2.push(++element);
  });

  return arr2;
};
addOne([1, 2, 3]); // => [2,3,4]
addOne([10, 11, 12]); // => [11,12,13]

//CHALLENGE 2

const addExclamation = (arr) => {
  const arr2 = [];
  arr.forEach((element) => {
    arr2.push(element + "!");
  });

  return arr2;
};

addExclamation(["one", "two", "three"]); // => ["one!","two!","three!"]

//CHALLENGE 3

const addOneByMap = (arr) => {
  arr = arr.map((element) => {
    return ++element;
  });

  return arr;
};
addOneByMap([1, 2, 3]); // => [2,3,4]
addOneByMap([10, 11, 12]); // => [11,12,13]

//CHALLENGE 4

const addQuestion = (arr) => {
  const arr2 = arr.map((element) => {
    return element + "?";
  });

  return arr2;
};

addQuestion(["one", "two", "three"]); // => ["one?","two?","three?"]

//CHALLENGE 5

const forLoopTwoToThe = (arr) => {
  const arr2 = arr.map((element) => {
    return Math.pow(2, element);
  });

  return arr2;
};

forLoopTwoToThe([1, 2, 3]); // => [2,4,8]

//CHALLENGE 6

const typeNum = (arr) => {
  const arr2 = arr.filter((element) => {
    return typeof element === "number";
  });

  return arr2;
};

typeNum([1, "bob", 3]); // => [1,3]

//CHALLENGE 7

const containsAnd = (arr) => {
  const arr2 = arr.filter((element) => {
    return element.includes("and");
  });

  return arr2;
};

containsAnd(["panda", "ran", "and"]);

//CHALLENGE 8

const oddValues = (arr) => {
  const arr2 = arr.filter((element) => {
    return element % 2 == 1;
  });

  return arr2;
};

oddValues([1, 2, 3]);

//CHALLENGE 9

const addValues = (arr) => {
  const sum = arr.reduce(function (acc, item) {
    acc += item;
    return acc;
  }, 0);
  return sum;
};

addValues([1, 2, 3, 4]); // => 10
addValues([15, 10, 15, 5]); // => 45

//CHALLENGE 10

const countNumberOfElements = (arr) => {
  const length = arr.reduce(function (acc) {
    return ++acc;
  }, 0);
  return length;
};
countNumberOfElements([1, 2, 3, 4]); // => 10
countNumberOfElements([15, 10, 15, 5, 90, 8]); // => 45

//exra

//CHALLENGE 1

const items = [
  {
    item: "switch",
    purchasePrice: 399,
  },
  {
    item: "nike",
    purchasePrice: 150,
  },
];

const addPurchases = (arr) => {
  const sum = arr.reduce((acc, item) => {
    acc += item.purchasePrice;
    return acc;
  }, 0);

  return sum;
};

addPurchases(items); // => 549

//CHALLENGE 2

const sortNumbers = (arr) => {
  arr.sort();
  return arr;
};

sortNumbers([3, 2, 1, 5, 7]);

//CHALLENGE 3

const sortBackwards = (arr) => {
  arr.sort(function (item1, item2) {
    return item2 - item1;
  });
  return arr;
};
sortBackwards([3, 2, 1, 5, 7]);

//additional

const editOnEvenOdd = (arr) => {
  const arr2 = arr.map((element) => {
    if (element % 2 === 0) return element * 2;
    return element * 3;
  });

  return arr2;
};

editOnEvenOdd([1, 2, 3, 4]); // [3, 4, 9, 8]
