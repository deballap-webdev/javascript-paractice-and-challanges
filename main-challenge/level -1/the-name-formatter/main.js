const capitalizeEachWord = (string) => {
  let newString = string.split(" ");
  newString = getEachItem(newString);
  newString = joinItems(newString);
  return newString;
};

const getEachItem = (array) => {
  const eachItemArray = [];
  for (let i = 0; i < array.length; i++) {
    let eachItem = array[i];
    eachItem = toProperCase(eachItem);
    if (!eachItem) {
      continue;
    }
    eachItemArray.push(eachItem);
  }
  return eachItemArray;
};

const toProperCase = (string) => {
  let cleanString = string.trim();
  if (string === "") {
    return false;
  }
  return cleanString[0].toUpperCase() + cleanString.slice(1).toLowerCase();
};

const joinItems = (array) => {
  return array.join(" ");
};

console.log(capitalizeEachWord("   lIttLe pePPEr     picKeR    "));
