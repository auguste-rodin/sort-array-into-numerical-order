
// a simple way to turn an array into ascending order, keeping the original array intact.

//with the spread operator


const transactions = [16.37, 2.33, 4.55, 13.44, 1.25];
  const verySorted = [...transactions].sort((a,b)=>a-b)
    console.log(verySorted);


//Using Array.prototype.slice()

const sorted = transactions.slice().sort((a,b)=>a-b)
  console.log(sorted);


//Using Object.assign()

const alsoSorted = Object.assign([], transactions)
  alsoSorted.sort((a,b)=>a-b)
    console.log(alsoSorted);

//And for descending order turn a-b to b-a 

const stillSorted = transactions.slice().sort((a,b)=>b-a)
  console.log(stillSorted); 

