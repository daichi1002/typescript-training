export {};

const bmi = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(1.74, 65));