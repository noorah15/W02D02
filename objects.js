//CHALLENGE 1

const checkValues = (obj, value) => {
  const a = Object.values(obj);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === value) return true;
  }
  return false;
};

checkValues({ name: "ahmed", age: 15 }, 15); // => true
checkValues({ name: "ahmed", age: 15 }, 20); // => false

//CHALLENGE 2

const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  const a = Object.keys(obj);
  return a;
};

getCourseKeys(courseInfo); // => ['name', 'duration', 'topics', 'finalExam']

//CHALLENGE 3

const obj = {
  "Grace Hopper": "222-303-5938",
  "Ada Lovelace": "222-349-9842",
  "Alan Turing": "222-853-5933",
};

const updateNumbers = (obj) => {
  const a = [];
  const copy = Object.entries(obj);
  console.log(copy);
  for (let i = 0; i < copy.length; i++) {
    a.push("" + copy[i][0] + ": " + copy[i][1] + "");
  }

  return a;
};

updateNumbers(obj);

//CHALLENGE 4

const PassedOrFailed = function (studentGrades) {
  const copy = Object.values(studentGrades);
  for (let i = 0; i < copy.length; i++) {
    if (copy[i].grade / copy[i].total < 0.5) return "The student have failed";
  }

  return "The student have passed";
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

PassedOrFailed(studentOne); // =>  "The student have passed"
PassedOrFailed(studentTwo); // =>  "The student have failed"

// CHALLENGE 5

const totalCharacters = (arr) => {
  const sum = arr.reduce((acc, item) => {
    acc += item.length;
    return acc;
  }, 0);

  return sum;
};

totalCharacters(["abc", "yz"]); // => 5

//CHALLENGE 6

const houseSize = (arr) => {
  const sizes = [];
  for (let i = 0; i < arr.length; i += 2) {
    const obj = {};
    obj["house"] = arr[i];
    obj["members"] = arr[i + 1];
    sizes.push(obj);
  }

  return sizes;
};

houseSize(["Stark", 7, "Arryn", 3]); //[{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]

//CHALLENGE 7

const uniqueDogs = {
  max: { breed: "Labrador Retriever", color: "blond" },
  rex: { breed: "German Shepherd", color: "black and brown" },
  lucy: { breed: "Bulldog", color: "white" },
  lucifer: { breed: "Chihuahua", color: "brown" },
};

const createDog = function (name, dogBreed, furColor) {
  /* for (const key in uniqueDogs) {
    if (key === name) return "The dog isn't unique enough :(";
  }*/

  let copy = Object.keys(uniqueDogs);
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] === name) return "The dog isn't unique enough :(";
  }
  uniqueDogs[name] = { breed: dogBreed, color: furColor };

  return "Added the dog successfully";
};

//createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
//createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("
