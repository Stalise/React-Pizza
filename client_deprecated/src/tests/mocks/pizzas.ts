import { IPizza } from "types/pizza";

export const pizzasMock: IPizza[] = [
   {
      id: 'pepperoni',
      type: {
         meat: true,
         cheese: true,
         vegan: false,
         sharp: false,
      },
      name: 'Пепперони',
      img: 'pepperoni.jpeg',
      price: {
         low: 395,
         average: 639,
         high: 789,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'cheese',
      type: {
         cheese: true,
         vegan: true,
         meat: false,
         sharp: false,
      },
      name: 'Сырная U+1F331',
      img: 'cheese.jpeg',
      price: {
         low: 245,
         average: 449,
         high: 589,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'ham_cheese',
      type: {
         meat: true,
         cheese: true,
         vegan: false,
         sharp: false,
      },
      name: 'Ветчина и грибы',
      img: 'ham-cheese.jpeg',
      price: {
         low: 345,
         average: 539,
         high: 699,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'double_chicken',
      type: {
         meat: true,
         cheese: true,
         vegan: false,
         sharp: false,
      },
      name: 'Двойной цыпленок',
      img: 'double-chicken.jpeg',
      price: {
         low: 295,
         average: 449,
         high: 589,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'cheese_chiken',
      type: {
         meat: true,
         cheese: true,
         vegan: false,
         sharp: false,
      },
      name: 'Сырный цыпленок',
      img: 'cheese-chiken.jpg',
      price: {
         low: 395,
         average: 639,
         high: 789,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'mexican',
      type: {
         meat: true,
         cheese: true,
         sharp: true,
         vegan: false,
      },
      name: 'Мексиканская',
      img: 'mexican.jpg',
      price: {
         low: 445,
         average: 699,
         high: 849,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'pepperoni_fresh',
      type: {
         meat: true,
         cheese: true,
         vegan: false,
         sharp: false,
      },
      name: 'Пепперони фреш',
      img: 'pepperoni-fresh.jpeg',
      price: {
         low: 245,
         average: 449,
         high: 589,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'four_cheese',
      type: {
         cheese: true,
         vegan: true,
         meat: false,
         sharp: false,
      },
      name: 'Четыре сыра',
      img: 'four-cheese.jpeg',
      price: {
         low: 445,
         average: 699,
         high: 849,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'veg_mush',
      type: {
         cheese: true,
         vegan: true,
         meat: false,
         sharp: false,
      },
      name: 'Овощи и грибы',
      img: 'veg-mush.jpeg',
      price: {
         low: 395,
         average: 639,
         high: 789,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
   {
      id: 'pizza_pie',
      type: {
         vegan: true,
         sharp: false,
         meat: false,
         cheese: false,
      },
      name: 'Пицца-пирог',
      img: 'pizza-pie.jpg',
      price: {
         low: 345,
         average: 539,
         high: 699,
      },
      size: {
         low: 25,
         average: 30,
         high: 35,
      },
      dough: {
         traditional: true,
         thin: true,
      },
   },
];