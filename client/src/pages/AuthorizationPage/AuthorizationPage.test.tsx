import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { ToastContainer } from 'react-toastify';
import userEvent from '@testing-library/user-event';

import { instance } from "api/api";
import { renderWithReduxAndRouter } from 'tests/helpers/renderWithReduxAndRouter';
import { apiResponsesMessage } from "constants/api";

import AuthorizationPage from "./AuthorizationPage";

const mockedAxios = new MockAdapter(instance);

it('AuthorizationPage check tabs switching', () => {
   render(renderWithReduxAndRouter(<AuthorizationPage />));

   const signInTab = screen.getByText(/sign in/i);
   const registerForm = screen.getByTestId(/register-form/i);
   const authForm = screen.getByTestId(/auth-form/i);

   expect(registerForm).toHaveAttribute('class', expect.stringMatching(/_active/i));
   expect(authForm).toHaveAttribute('class', expect.not.stringMatching(/_active/i));

   expect(signInTab).toBeInTheDocument();
   userEvent.click(signInTab);

   expect(registerForm).toHaveAttribute('class', expect.not.stringMatching(/_active/i));
   expect(authForm).toHaveAttribute('class', expect.stringMatching(/_active/i));
});

describe('AuthorizationPage api requests', () => {
   it('attempt register user with existing email', async () => {
      mockedAxios.onPost('user/reg').reply(401, { message: apiResponsesMessage.existingEmail });

      render(renderWithReduxAndRouter(<>
         <AuthorizationPage />
         <ToastContainer />
      </>));

      const emailInput = screen.getByPlaceholderText(/Example: example22@gmail.com/i);
      const passwordInput = screen.getByPlaceholderText(/Example: bend12AW/i);
      const submitButton = screen.getByRole('button', { name: /registration/i });

      userEvent.type(emailInput, "sayonara@mail.ru");
      userEvent.type(passwordInput, "fff555");
      userEvent.click(submitButton);

      expect(await screen.findByText(apiResponsesMessage.existingEmail)).toBeInTheDocument();
   });
});