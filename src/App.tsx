import './App.css';
import { List } from "./components/generics/List"

function App() {
  return (
    <div className="App">
        <List
          items={['Home Alone', 'Harry Potter', 'The Hobbit']}
          onClick={(item) => console.log(item)}
        />
        <List
          items={[1,2,3]}
          onClick={(item) => console.log(item)}
        />
        <list
          items={[
            {
              id: 1,
              first: 'johnny',
              last: 'Depp'
            },
            {
              id: 2,
              first: 'Brad',
              last: 'Pitt'
            },
            {
              id: 3,
              first: 'Matt',
              last: 'Damon'
            }
          ]}
        />
    </div>
  );
}

export default App;
