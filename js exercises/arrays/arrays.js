
let user = {
    name: "John",
    age: 30,
    "likes birds": true 
  };
let arr1= [2,34,64,54,79,45];

// E1  Write a JavaScript function to check whether an `input` is an array or not.
function isArray(value) {
    if (Object.prototype.toString.call(value) == '[object Array]') {
        return true;
        } else {
        return false;
        }
}
console.log(isArray(user));


// E2 Write a JavaScript function to clone an array
function clone (array) {
    let clonedArr=array.slice();
  return clonedArr;
}
console.log(clone(arr1));

// E3Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array

function firstElem (array,n) {
    if (array==null) {
        return undefined;
    }
    else if(n==undefined){
        return array[0];
    }else {
        return array.splice(0,n);
    }
}
console.log(firstElem(arr1,5));

// E4 Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array
function lastElem (array, n) {
    if (array==null) {
        return undefined;
    } else if (n==undefined){
        return array[array.length - 1];
    } else {
        return array.splice(-n);
    }
}
console.log(lastElem(arr1,3));


let myColor = ["Red", "Green", "White", "Black"];

//E 5Write a simple JavaScript program to join all elements of the following array into a string.
  function arrToStr(array) {
       return array.join("-");
  }
  console.log(arrToStr(myColor));

  //E6 Write a JavaScript program which accept a number as input and insert
  // dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. 
  function addDashOddNums (value) {
        let arr=value.toString().split("").map((item) => parseInt(item));
        let result=[];
        for (let i=0; i<arr.length; i++) {
            if (arr[i-1]%2==0&&arr[i]%2==0){
               result.push("-", arr[i])
            } else {
                result.push(arr[i]);
            }
        }
       return result.join("");       
  }
  console.log(addDashOddNums(1255468));
 
  //E 7  Write a JavaScript program to sort the items of an array
  let arr2 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  function sortArr(array){
         for (let i = 0; i < array.length; i++)
            for (let j = 0; j < i; j++)
                if (array[i] < array[j]) {
                let x = array[i];
                array[i] = array[j];
                array[j] = x;
                }
           return array;
  }
  console.log(sortArr(arr2));

  // E 8  Write a JavaScript program which accept a string as input and swap the case of each character. 
  //For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

  function changeCase(string){
    let arrStrings=string.split("");
    result=[];
    for (let i=0; i<arrStrings.length;i++) {
        if(arrStrings[i]===arrStrings[i].toUpperCase()){
            result.push(arrStrings[i].toLowerCase());
        }
        else if(arrStrings[i]===arrStrings[i].toLowerCase()){
            result.push(arrStrings[i].toUpperCase());
        }
    }
    return result.join("");
  }
console.log(changeCase("hellOThere"));

// E9  Write a JavaScript program which prints the elements of the following array.
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printArrElems(array) {
        for( let i=0; i<array.length;i++) {
            console.log(" Row:",[i]);
            for ( let j=0; j<array[i].length; j++){
                console.log( array[i][j]);
            }
        }
}
printArrElems(a);
"use strict";
// E 12  Write a JavaScript program to compute the sum and product of an array of integers
let arr2 = [8, 8, 99, 2, 3, 5, 5, 6, 7];

function calcSumAndProduct(array) {
  console.log(array.reduce((a, b) => a + b, 0));

  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  console.log("Product is:", result);
}
calcSumAndProduct(arr2);

// E 13 Remove duplicate items from an array, ignore case sensitivity
function removeDuplicates(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let exists = false;
    console.log(array[i]);
    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(array[i]);
    }
  }
  console.log("removed duplicaes with for loop;", result);
  // set lets store only unique values
  console.log("removed duplicates:", [...new Set(array)]);
}
removeDuplicates(arr);


let arr = function getRandomArbitrary(min, max) {
    let n = Math.floor(Math.random() * (max - min) + min);
    console.log("N:", n);
    const randomArrayInRange = (min, max, n) =>
      Array.from(
        { length: n },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
    return (x = randomArrayInRange(-20000, 20000, n));
    // Example
  };
  
  function isOddNumber(number) {
    return !(number % 2 == 0);
  }
  
  function isDivBySix(number) {
    return number % 6 == 0;
  }
  
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    console.log(sum);
  }
  
  const newArr = arr(5000, 10000);
  console.log("New arr:", newArr);
  
  let copiedArray = newArr.slice();
  
  //1. sort array i ispiši najmanji i najveći element
  let sortedArr = copiedArray.sort((a, b) => a - b);
  console.log("1.a) Sorted array:", sortedArr);
  console.log("1.b) The lowest number is:", sortedArr[0]);
  console.log("1.c) The highest number is:", sortedArr.slice(-1)[0]);
  console.log("1.c) The highest number is:", sortedArr[sortedArr.length - 1]);
  
  //2.
  //a)map
  
  let mapedArr = copiedArray.map((number) => (isOddNumber(number) ? number : 0));
  console.log("2.a) Maped sum is:");
  sumArray(mapedArr);
  
  //b)filter
  
  let filteredArr = copiedArray.filter((number) => isOddNumber(number));
  console.log("2.a) Filtered sum is:");
  sumArray(filteredArr);
  
  //c)reduce
  function filteredOdds() {
    let oddsArray = [];
  
    for (let i = 0; i < copiedArray.length; i++) {
      let number = copiedArray[i];
      if (isOddNumber(number)) {
        oddsArray.push(number);
      }
    }
  
    let reducedSum = oddsArray.reduce((sum, number) => sum + number, 0);
    console.log("2.c) Reduced sum is:", reducedSum);
    return oddsArray;
  }
  filteredOdds();
  
  //d)-map/reduce/filter
  function filterSumOdd() {
    let reducedSum = copiedArray.reduce((sum, number) => {
      return sum + (isOddNumber(number) ? number : 0);
    }, 0);
  
    let reducedSum2 = copiedArray.reduce(
      (sum, number) => sum + (isOddNumber(number) ? number : 0)
    );
  
    console.log("Reduced sum in filterSumOdd:", reducedSum);
    console.log("Reduced sum2 in filterSumOdd:", reducedSum2);
    let sum = 0;
    for (let i = 0; i < copiedArray.length; i++) {
      let number = copiedArray[i];
      if (isOddNumber(number)) {
        //oddsArray.push(number);
        sum += number;
      }
    }
    console.log("2.d) Filtered and sumed sum is:", sum);
  }
  filterSumOdd();
  
  //3. U nesortiranom arrayu (onom početnom), koristeći find pronađi prvi element koji zadovoljava ove uvjete:- paran broj- djeljiv sa 6- veći od 1000 Ako nema takvog neka se ispiše "Nema..."
  let firstFoundResult = newArr.find(function (number) {
    if (number > 1000 && !isOddNumber(number) && isDivBySix(number)) {
      console.log("3. The number is:", number);
      return number;
    } else {
      console.log("number not found!");
    }
  });
  