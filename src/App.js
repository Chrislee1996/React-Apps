import logo from './logo.svg';
import './App.css';
import Pages from "./pages/Pages"
import Category from "./components/Category"
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Search/>
        <Category/>
        <Pages />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
