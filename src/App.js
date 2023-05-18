import './App.css';
import './media.css';
import { langSources } from "../src/app/data";
import Rutas from './components/Router/Rutas';

function App() {

  return (
    <>
      <Rutas langSources={langSources}></Rutas>
    </>
  );
}

export default App;
