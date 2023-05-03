import logo from './logo.svg';
import './App.css';
import Posts from './posts';

function App() {
  const name='kkr technologies'
  return (

    <>
    <div className="App">
      <header className="App-header">
          
          <h1>welcome to <strong> {name}</strong></h1>
      </header>
    </div>

    <Posts />

    </>
  );
}

export default App;
