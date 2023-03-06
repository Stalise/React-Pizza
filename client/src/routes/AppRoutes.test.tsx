import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';

import { renderWithReduxAndRouter } from 'tests/helpers/renderWithReduxAndRouter';
import { pizzasMock } from "tests/mocks/pizzas";
import { instance } from "api/api";
import { apiResponsesMessage } from "constants/api";

import AppRoutes from './AppRoutes';

const mockedAxios = new MockAdapter(instance);

describe('App routes', () => {
   beforeAll(() => {
      const mockGet = jest.spyOn(mockedAxios, 'onGet');
      mockedAxios
         .onGet("user").reply(401, { message: apiResponsesMessage.needAuth })
         .onGet("products").reply(200, { products: pizzasMock, message: apiResponsesMessage.success });

      expect(mockGet).toBeCalledTimes(2);
   });

   it('auth page link', async () => {
      render(renderWithReduxAndRouter(<AppRoutes />));

      const authLink = await screen.findByText(/войти/i);
      expect(authLink).toBeInTheDocument();

      userEvent.click(authLink);
      expect(screen.getByText(/registration/i)).toBeInTheDocument();
   });

   it('cart page link', async () => {
      render(renderWithReduxAndRouter(<AppRoutes />));

      const cartLink = await screen.findByAltText(/cart/i);
      expect(cartLink).toBeInTheDocument();

      userEvent.click(cartLink);
      expect(screen.getByText(/корзина пустая/i)).toBeInTheDocument();
   });

   it('main page link', async () => {
      render(renderWithReduxAndRouter(<AppRoutes />, ['/cart']));

      expect(await screen.findByText(/корзина пустая/i)).toBeInTheDocument();

      const mainLink = await screen.findByText(/самая вкусная пицца/i);
      expect(mainLink).toBeInTheDocument();

      userEvent.click(mainLink);
      expect(screen.getByTestId("main-page")).toBeInTheDocument();
   });
});