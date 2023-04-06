import './App.css';
import { Counter } from './components/state/Counter';
import {ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

function App() {
  const personName = {
    first: 'Prakash',
    last: 'Subba'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Peter',
      last: 'Griffin'
    },
    {
      first: 'The',
      last: 'Rock'
    },

  ]
  return (
    <div className="App">
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
