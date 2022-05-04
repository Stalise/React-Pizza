import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './assest/styles/index.css';
import { setupStore } from './store/store';

import App from './App';

const store = setupStore()

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);

