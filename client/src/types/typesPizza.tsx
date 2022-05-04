import { KeyType } from './keyType'

export interface IPizzaType {
   meat: boolean,
   cheese: boolean,
   sharp: boolean,
   vegan: boolean,
}

export interface IPizzaPrice extends KeyType<number> {
   low: number,
   average: number,
   high: number,
}

export interface IPizzaSize {
   low: number,
   average: number,
   high: number,
}

export interface IPizzaDough {
   traditional: boolean,
   thin: boolean,
}

//! Main interface
export interface IPizza {
   id: string,
   type: IPizzaType,
   name: string,
   img: string,
   price: IPizzaPrice,
   size: IPizzaSize,
   dough: IPizzaDough,
}