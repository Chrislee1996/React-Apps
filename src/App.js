import logo from './logo.svg';
import './App.css';
import Pages from "./pages/Pages"
import Category from "./components/Category"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Category/>
        <Pages />
      </header>
    </div>
  );
}

export default App;
