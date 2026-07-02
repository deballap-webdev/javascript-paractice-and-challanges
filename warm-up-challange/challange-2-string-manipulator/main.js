const toProperCase = (string) => {
  const cleanString = string.trim();
  return (
    cleanString.charAt(0).toUpperCase() + cleanString.slice(1).toLowerCase()
  );
};

console.log(toProperCase("      deBoraH Allaputa "));
