//? Anagram Algorithm
const anagrams = (word1, word2) => {
  // Regex to remove punctuation and spaces
  let str1 = word1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
  let str2 = word2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")

  const arr1 = str1.split("").sort().join("");
  const arr2 = str2.split("").sort().join("");
  console.log(arr1 === arr2)
}

anagrams("wor_d!","dr o w")


//? Find Duplicates Algorithm
const findDuplicates = (arr) => {
  let count = 0
  for (let num of arr) {
    if ()
  }
}

findDuplicates([1,1,2,3,4])