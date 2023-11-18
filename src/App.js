import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersContainer from './components/UsersContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
      <div
      className="header"
      >
      <h1
      className='header-title'
      >Team Picker</h1>
      </div>
        <UsersContainer />
      </div>
    </Provider>
  );
};

export default App;
