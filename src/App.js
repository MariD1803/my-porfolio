
import { Provider } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import { store } from './components/redux/store';

function App() {
  return (
    <>
    <Provider  store={store}><Form></Form></Provider>
      
    </>
  );
}

export default App;
