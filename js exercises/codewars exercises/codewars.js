

//Exercises from codewars
//Replace With Alphabet Position
function alphabetPosition(text) {
  let char;
  let arr = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < text.length; i++) {
    char = text[i].toLowerCase();
    //console.log(char);
    if (alphabet.indexOf(char) !== -1) {
      //console.log(alphabet.indexOf(char)+1);
      arr.push(alphabet.indexOf(char) + 1);
    }
  }
  let newArr = arr.join(" ");

  console.log(newArr);
}
alphabetPosition("hello");

//Bit Counting
function countBits(n) {
  let binNum = (n >>> 0).toString(2).split("");
  var NumArr = binNum.map((elem) => parseInt(elem));
  console.log("Bin num is:", NumArr);
  const result = binNum.reduce((sum, num) => sum + Number(num), 0);
  return result;
}
countBits(22);

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(value) {
  let str1 = value
    .substr(0, value.length - 4)
    .split("")
    .map((elem) => (elem = "#"));
  console.log(str1);

  let str2 = value.substr(-4, value.length).split("");
  console.log(str2);
  let newArray = [str1, str2];
  var mergedArray = [].concat.apply([], newArray);
  let newValue = mergedArray.join("");
  return newValue;
}
maskify("Hellothere");

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskifyB(value) {
  /*let str1 = value
    .substr(0, value.length - 4)
    .split("")
    .map((elem) => (elem = "#"))
    .join("");*/
  let str1 = value
    .substr(0, value.length - 4)
    .split("")
    .fill("#", 0, value.length - 4)
    .join("");
  console.log(str1);
  let newValue = str1 + value.substr(-4, value.length);
  console.log(newValue);
  return newValue;
}
maskifyB("Hellothere");
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(n) {
  let strFromNum = n
    .toString()
    .split("")
    .map((elem) => parseInt(elem * elem))
    .join("");
  let numToStr = parseInt(strFromNum);
  return numToStr;
}
squareDigits(242);

/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a 
function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will,
 of course, return you to your starting point. Return false otherwise. */

function isValidWalk(walk) {
  let posX = 0;
  let posY = 0;
  let path = walk.length;
  for (let i = 0; i < path; i++) {
    switch (walk[i]) {
      case "n":
        posY--;
        break;
      case "s":
        posY++;
        break;
      case "e":
        posX++;
        break;
      case "w":
        posX--;
        break;
    }
  }
  console.log(path == 10 && posX == 0 && posY == 0);
}
isValidWalk(["e", "w", "e", "w", "e", "w", "e", "w", "e", "w"]);

//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let vowels = str.split("").filter((item) =>
    //item == "a" || item == "e" || item == "i" || item == "o" || item == "u"
    "aeiou".includes(item)
  );
  return vowels.length;
}
getCount("bristol");

//he Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that
//will tell prospective members which category they will be placed.To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
//In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.Input will consist of a list of lists containing two items each.
// Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(data) {
  let membershipArr = [];

  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data[i].length; j++) {
      if (data[i][0] >= 55 && data[i][j] > 7) {
        console.log(data[i][0], data[i][j]);

        let membership = "Senior";
        membershipArr.push(membership);
      } else {
        console.log(data[i][0], data[i][j]);
        let membership = "Open";
        membershipArr.push(membership);
      }
    }
  }
  return membershipArr;
}

openOrSenior([
  [45, 12],
  [87, 8],
  [23, 1],
]);

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function sumMultiples(num) {
  let numArr = [];
  for (let i = 0; i < num; i++) {
    if (i < 0) {
      return 0;
    }
    numArr.push(i);
  }
  let multiplesArr = numArr
    .filter(
      (item) =>
        item % 3 == 0 || item % 5 == 0 || (item % 3 == 0 && item % 5 == 0)
    )
    .reduce((sum, value) => sum + value, 0);
  return multiplesArr;
}
sumMultiples(16);

/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3] */
function arrayDiff(a, b) {
  if ((a || b) == 0) {
    return a || b;
  } else {
    let filteredArr = a.filter((elem) => a.includes(elem) !== b.includes(elem));
    console.log(filteredArr);
  }
}
arrayDiff([2, 4], [4, 5]);

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
//If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
findEvenIndex([1, 2, 3, 4, 3, 2, 1]);

//You will be given a number and you will need to return it as a string in Expanded Form.
function expandedForm(num) {
  let numArr = num
    .toString()
    .split("")
    .reverse()
    .map((item, i) => item * Math.pow(10, i))
    .reverse()
    .filter((item) => item !== 0)
    .join(" + ");

  console.log(numArr);
}
expandedForm(40709);

//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//It’s guaranteed that array contains at least 3 numbers.
//The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
  let newArr = arr.filter((item, i, arr) => arr.indexOf(item) !== i);
  console.log(newArr);
  let uniqElem = arr.filter(
    (item) => arr.includes(item) !== newArr.includes(item)
  );
  console.log(parseFloat(uniqElem.toString()));
}
findUniq([1, 1, 1, 2, 1, 1]);

//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let newArr = arr.filter((item) => item !== 0);

  let arrOfZeros = arr.filter(
    (item) => arr.includes(item) !== newArr.includes(item)
  );

  console.log(newArr.concat(arrOfZeros));
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

function validParentheses(value) {
  if (
    !(
      value.length > 0 &&
      value.length <= 100 &&
      value.length % 2 == 0 &&
      value[0] == "(" &&
      value[value.length - 1] == ")"
    )
  ) {
    return false;
  }

  let parensArr = value.split("");
  console.log("Parens arr", parensArr);

  let leftParens = parensArr.filter((item) => item == "(");
  let rightParens = parensArr.filter((item) => item == ")");
  if (leftParens.length !== rightParens.length) return false;

  for (let i = 0; i < parensArr.length; i++) {
    if (parensArr[i] == "(" && parensArr[i + 1] == ")") {
      parensArr.splice(i, 2);
      i--;
    }
  }

  if (parensArr.length == 0) return true;

  if (parensArr[0] == ")" || parensArr[parensArr.length - 1] == "(")
    return false;

  return true;
}

console.log(validParentheses("(()))(()()"));

//Format a string of names like 'Bart, Lisa & Maggie'.
function list(name) {
  let arrOfNames = name.map((item) => item["name"]);
  console.log(arrOfNames);
  if (arrOfNames.length == 0) {
    return arrOfNames.join();
  } else if (arrOfNames.length == 1) {
    return arrOfNames[0];
  } else {
    let newArr =
      arrOfNames.slice(0, -1).join(", ") +
      " & " +
      arrOfNames[arrOfNames.length - 1];
    return newArr;
  }
}

//
function digPow(n, p) {
  if (!(n > 0 && p > 0)) return false;

  let numArr = n.toString().split("");
  let powArr = [];
  for (let i = 0; i < numArr.length; i++) {
    let x = parseInt(numArr[i]);
    let result = Math.pow(x, p++);
    powArr.push(result);
  }
  let sum = powArr.reduce((sum, value) => sum + value, 0);
  let quotient = sum / n;
  if (Number.isInteger(quotient)) {
    return quotient;
  } else {
    return -1;
  }
}
/* another way
function digPow(n, p) {
  if (!(n > 0 && p > 0)) return false;
  let numArr = n
    .toString()
    .split("")
    .map((num) => Math.pow(num, p++))
    .reduce((sum, num) => sum + num, 0);
  return numArr % n === 0 ? numArr / n : -1;
  
} */
digPow(92, 1);
