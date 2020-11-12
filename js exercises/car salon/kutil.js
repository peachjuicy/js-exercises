//search
function search(arr, searchColumnName, searchValue, searchType) {
  let foundCars =
    searchType == "equals"
      ? arr.filter((car) => car[searchColumnName] === searchValue)
      : searchType == "contains"
      ? arr.filter((car) => car[searchColumnName].includes(searchValue))
      : console.log("There is no such car in a salon!");
  console.log("Found cars are", foundCars);
  return foundCars;
}

// get property with max value

function getPropertyWithMaxValueInArray(arr, searchColumnName) {
  let foundPropertyValues = arr.map((item) => item[searchColumnName]);
  console.log("Found props are", foundPropertyValues);
  let propValuesCount = foundPropertyValues.reduce((propSum, propValue) => {
    if (propValue in propSum) {
      propSum[propValue]++;
    } else {
      propSum[propValue] = 1;
    }
    return propSum;
  }, {});
  console.log("List of props with values are:", propValuesCount);

  getPropertyWithMaxValue(propValuesCount);
}

//get property with max value
function getPropertyWithMaxValue(obj) {
  let maxValue = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  console.log("The prop with max value is:", maxValue);
}
