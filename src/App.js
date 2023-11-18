import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersContainer from './components/UsersContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
      <div
      className="header"
      >
      <h1
      className='header-title'
      >Team Creator</h1>
      <p>
        {/* cool slogan */}
        Create your own team with your own members

      </p>
      </div>
        <UsersContainer />
        <Footer/>
      </div>
    </Provider>
  );
};

export default App;
