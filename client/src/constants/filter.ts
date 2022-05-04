
interface IFilterItem {
   title: string,
   type: string,
}

export interface IOptionsItem {
   value: string,
   label: string,
}

export const filterItems: IFilterItem[] = [
   { title: 'Все', type: 'all' },
   { title: 'Мясные', type: 'meat' },
   { title: 'Сырные', type: 'cheese' },
   { title: 'Вегетарианские', type: 'vegan' },
   { title: 'Острые', type: 'sharp' },
]

export const selectOptions: IOptionsItem[] = [
   { value: 'popular', label: 'популярности' },
   { value: 'max', label: 'цене (макс)' },
   { value: 'min', label: 'цене (мин)' }
]