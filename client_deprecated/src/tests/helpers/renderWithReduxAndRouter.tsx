import { ReactElement } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { AppStore, setupStore } from "store/store";

interface IArguments {
   (
      component: ReactElement,
      currentPaths?: string[],
      currentStore?: AppStore | Record<string, any>
   ): ReactElement,
}

export const renderWithReduxAndRouter: IArguments = (component, currentPaths = ['/'], currentStore = {}) => {

   const store = setupStore(currentStore);

   return (
      <Provider store={store}>
         <MemoryRouter initialEntries={currentPaths}>
            {component}
         </MemoryRouter>
      </Provider>
   );
};