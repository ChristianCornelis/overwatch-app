import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from '../src/components/UserList';
import { Provider } from 'react-redux';
import { store } from '../src/reducers/RootReducer';
function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
        <UserList/> {/* TODO This is temporary - only for devving while we don't have storybook : )*/}
      </div>
    </Provider>
  );
}

export default App;
