import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import { renderWithReduxAndRouter } from 'tests/helpers/renderWithReduxAndRouter';

import AuthorizationForm from "./AuthorizationForm";

describe('Authorization form', () => {
   it('showing error with incorrect writed email in registration form', async () => {
      render(renderWithReduxAndRouter(<AuthorizationForm tabStatus={true} />));

      const emailInput = screen.getByRole("textbox", { name: /email/i });
      expect(emailInput).toBeInTheDocument();

      userEvent.type(emailInput, 'wrong');
      expect(emailInput).toHaveFocus();
      emailInput.blur();
      expect(emailInput).not.toHaveFocus();

      expect(await screen.findByTestId(/auth-error-email/i)).toHaveTextContent(/Некорректный email./i);
      expect(emailInput).toHaveDisplayValue(/wrong/i);
   });

   it('showing error with incorrect writed password in registration form', async () => {
      render(renderWithReduxAndRouter(<AuthorizationForm tabStatus={true} />));

      const passwordInput = screen.getByPlaceholderText(/Your password/i);
      expect(passwordInput).toBeInTheDocument();

      userEvent.type(passwordInput, 'wr$#9k1');
      expect(passwordInput).toHaveFocus();
      passwordInput.blur();
      expect(passwordInput).not.toHaveFocus();

      expect(await screen.findByTestId(/auth-error-password/i)).toHaveTextContent(/Некорректный пароль./i);
      expect(passwordInput).toHaveDisplayValue("wr$#9k1");
   });

   it('checking submitting form with empty fields', async () => {
      render(renderWithReduxAndRouter(<AuthorizationForm tabStatus={true} />));

      const submitButton = screen.getByRole('button', { name: /authorization/i });
      expect(submitButton).toBeInTheDocument();
      userEvent.click(submitButton);

      expect(await screen.findAllByText(/Обязательное поле./i)).toHaveLength(2);
   });
});