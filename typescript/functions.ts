let sendToLog = (input: string) => {
  log(input);
};

function log(message: string): void {
  console.log(message);
}

const simpleSquareFn = (x: number, y: number): number => {
  return x * y;
};

let square: (x: number, y: number) => number = (x, y) => {
  return x * y;
};

sendToLog("Hello Agular training!!!");
console.log("Square of 12 and 14 = ", square(12, 14));
console.log("SimpleSquareFn of 12 and 14 = ", simpleSquareFn(12, 14));
