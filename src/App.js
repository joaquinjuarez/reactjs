
import './App.css';
import navbar from './components/navbar';
import ItemlistContainer from './components/ItemListContainer/itemlistcontainer';
function App() {
  return (
    <div className="App">
    <navbar />
    <ItemlistContainer greetings={"Bienvenidos"}/>
    </div>
  );
}

export default App;
