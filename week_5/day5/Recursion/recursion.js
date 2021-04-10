//* Recursion
/**
 * Recursion the act of a function invoking itself.
 * The most difficult part of Recursion is keeping track of all the function calls that are made.
 */

//? Count Down Function
// Regular function using a loop
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i)
  }
  console.log("Hooray")
}
countDown(3)

// Recursive version
function countDownRecursive(n) {
  // First thing you should do in a recursive function is implement a condition to break out of the loop.
  if (n <= 0) {
    console.log("Hooray")
    return
  }
  console.log(n)
  countDownRecursive(n - 1)
}
countDownRecursive(3)


//? Sum of Range Function
// Regular function using a loop
function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i
  }
  return total
}

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total
  }
  return sumRangeRecursive(n - 1, total + n)
}

/* What's Happening?
sumRangeRecursive(3, 0)
  sumRangeRecursive(2, 3)
    sumRangeRecursive(1, 5)
      sumRangeRecursive(0, 6)
      return 6
    return 6
  return 6
return 6
*/   


//? Function That prints out every value in in a object(including the nested ones)

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: []
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Zach", children: [] }
      ]
    }
  ]
}

// This type of situation will always require a recursive function.
function printChildren(t) {
  // Can't be done with a loop
}

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return
  }
  t.children.forEach(child => {
    console.log(child.name)
    printChildrenRecursive(child)
  })
}

printChildrenRecursive(tree)