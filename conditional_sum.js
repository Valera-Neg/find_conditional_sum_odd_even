const conditionalSum = function(values, condition) {
  if(condition === "even") {
   const res = values.filter(e=> e % 2 === 0 )
   const initialValue = 0;
   const newRes = res.reduce((prev, curr) => prev + curr, initialValue);
   return newRes;
  }
  
  if (condition === "odd") {
    const res = values.filter(e=> e % 2 !== 0 )
    const initialValue = 0;
    const newRes = res.reduce((prev, curr) => prev + curr, initialValue);
    return newRes;
  }
  
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));