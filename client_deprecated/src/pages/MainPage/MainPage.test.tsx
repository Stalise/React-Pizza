import { fireEvent, render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';

import { renderWithReduxAndRouter } from 'tests/helpers/renderWithReduxAndRouter';
import { productsSlice } from "tests/mocks/productsSlice";

import MainPage from "./MainPage";

describe('MainPage products functional', () => {
   it('must be 10 pizzas in page', () => {
      render(renderWithReduxAndRouter(<MainPage />, ['/'], { productsSlice }));

      expect(screen.getAllByTestId(/pizza-item/i)).toHaveLength(10);
   });

   it('checking filter operability', () => {
      render(renderWithReduxAndRouter(<MainPage />, ['/'], { productsSlice }));

      const meatFilterBtn = screen.getByRole('button', { name: /мясные/i });
      fireEvent.click(meatFilterBtn);
      expect(screen.getAllByTestId(/pizza-item/i)).toHaveLength(6);

      const veganFilterBtn = screen.getByRole('button', { name: /вегетарианские/i });
      fireEvent.click(veganFilterBtn);
      expect(screen.getAllByTestId(/pizza-item/i)).toHaveLength(4);
   });

   it('checking sorter operability', async () => {
      const { container } = render(renderWithReduxAndRouter(<MainPage />, ['/'], { productsSlice }));

      await selectEvent.select(screen.getByText('популярности'), ['цене (макс)']);
      expect(container).toMatchSnapshot();
   });
});