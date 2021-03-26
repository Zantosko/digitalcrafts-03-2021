let chessboard = "";

for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0) {
      console.log("divisible by two", i);
      chessboard += " ";
    }
    else {
      console.log("not divisible by two", j);
      chessboard += "#";
    }
  }
  chessboard += "\n"
}

console.log(chessboard)