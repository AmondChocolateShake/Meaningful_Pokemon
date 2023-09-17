import './App.css';
import CollectBox from './components/CollectBox';
import PokemonList from './components/PokemonList';
import Top from './components/Top/Top';


function App() {
  return (
    <div className='MainBoxCss'>
      <Top/>
      <CollectBox/>
    </div>
  );
}

export default App;
