const myObject = {
  hello: "world",
  size: "small",
  lipstick: "little",
  ghost: 0,
};

const objectPropertyChecker = (object, key) => {
  const hasProperty = object.hasOwnProperty(key);
  const boolean = !hasProperty
    ? (console.log(` property does not exist`), false)
    : !object[`${key}`]
      ? (console.log(` property exists but has a value of 0, null or empty`),
        false)
      : (console.log(`property exists and has a value of ${object[`${key}`]}`),
        true);
  return boolean;
};

console.log(objectPropertyChecker(myObject, "ghost"));
