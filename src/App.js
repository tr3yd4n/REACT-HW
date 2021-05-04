import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import FilterBar from './components/FilterBar';
import Main from './components/Main'
import singleCard from './components/SingleCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      {/* <Search /> */}
      <FilterBar />
      {/* <singleCard /> */}
    </div>
  );
}

export default App;
