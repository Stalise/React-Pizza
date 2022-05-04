
//! Main interface
export interface IPizzaCart {
   id: string,
   dough: string,
   size: number,
   cost: number,
   img: string,
   name: string,
   totalCount: number,
   totalCost: number,
}

// id: currentId,
// dough: currentParams.dough,
// size: currentParams.size,
// cost: currentPrice,
// img: './images/' + pizza.img,
// name: pizza.name,
// totalCount: 1,
// totalCost: currentPrice,