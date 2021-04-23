//? What will this output produce?
const array1 = [33, 4, 88, 1, 25];

console.log(array1.map(i => i + 5).filter(i => i % 2).length)

// map will return a new array with 5 added to each item [38, 9, 93, 6, 30]
// filter will check if for items that are not divisble by 2
// .length will check how many of these items exist
// result => 2


//? Substrings
const substring = (str1, str2) => {
  const newStr1 = str1.replace(/\s/g, "").repeat(2)
  const newStr2
}

substring("concept","cep")
substring("aaabbbaababab", "aaba")
substring("the brown cow jumped over the moon", "moonthe brown cow")
substring("baananana", "nab")
substring("this wont work", "r u shore")


//? Missing Digit
const findX = (equation) => {
  const split = equation.split(" ")
  const cache = {
    num1: split[0],
    num2: split[2],
    operator: split[1],
    answer: split[4]
  }
  const operatorObject = {
    "*": "/",
    "/": "*",
    "-": "+",
    "+": "-"
  }

  let answer;
  let intendedAnswer;

  if (cache.answer.includes("x")) {
    answer = cache.answer;
    intendedAnswer = eval(split.slice(0, 3)).join(" ")
  } else if (cache.num1.includes("x")) {
    answer = cache.num1
    intendedAnswer = eval(`${cache.answer} ${operatorObject[cache.operator]} ${cache.num2}`)
  } else if (cache.num2.includes("x")) {
    correctAnswer = num2
    intendedAnswer = eval(`${cache.answer} ${operatorObject[cache.operator]} ${cache.num1}`)
  }
  
  const xIndex = cache.answer.indexOf("x")

  return intendedAnswer.toString().charAt(xIndex)
  
}


console.log(findX("10 * x = 20"))