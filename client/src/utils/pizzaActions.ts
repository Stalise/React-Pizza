import { IPizza } from 'types/typesPizza';

interface ISorted {
   (
      type: string,
      sort: string,
      pizzas: IPizza[],
      setSortedPizza: (arr: IPizza[]) => void,
   ): void,
}

export const sorted: ISorted = (type, sort, pizzas, setSortedPizza) => {

   // const currentType = type;
   let mass: IPizza[] = [];

   // если тип all, то просто разворачиваем первоначальный массив
   if (type === 'all') {
      mass = [...pizzas];
   } else if (type !== 'all') {
      // фильтруем пиццы по параметру из табов
      mass = [...pizzas].filter(pizza => pizza.type[type] === true);
   }

   // далее сортируем массив по выбранному селекту
   if (sort === 'min') {
      mass.sort((a, b) => {
         return a.price.average - b.price.average;
      });
   } else if (sort === 'max') {
      mass.sort((a, b) => {
         return b.price.average - a.price.average;
      });
   }

   // по итогу отдаем в стейт отсортированный массив и по табам, и по селекту
   setSortedPizza([...mass]);
};

export const price = (pizza: IPizza, size: number): number => {

   const sizeName: string = Object.entries(pizza.size).reduce((accum, elem) => {
      if (elem[1] === size) return accum = elem[0];
      return accum;
   }, '');

   const currentPrice: number = pizza.price[sizeName];

   return currentPrice;
};