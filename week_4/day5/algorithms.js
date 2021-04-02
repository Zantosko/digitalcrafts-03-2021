// const string = "string";

const reverseString = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  console.log(reversedStr);
  return reversedStr;
}

reverseString("zach");


const reverseNumber = (num) => {
  const numReversed = parseFloat(
    num
    .toString()
    .split("")
    .reverse()
    .join("")
  ) * Math.sign(num)
  
  console.log(numReversed)
}

reverseNumber(231.0);
