function addBasic(n1: number, n2: number, showResult: boolean, pharse: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(pharse + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 3.8;
const printResul = true;
const resultPharse = "Result is: ";

addBasic(number1, number2, printResul, resultPharse);
