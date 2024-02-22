
import './App.css';
import navbar from './components/navbar';
import ItemlistContainer from './components/ItemListContainer/itemlistcontainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
    <navbar />
    <ItemlistContainer greetings={"Bienvenidos"}/>
    <ItemDetailContainer/>
    </div>
  );
}
 
function App() {
  return(
    <div className='App'> 
     <navbar/>
  <ItemlistContainer greetings={'Bienvenidos'}/>
  <Itemcount initial={1} stock={1} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
     </div>
  )
} 

function App (){
  return(
    <div className='App'>
      <BrowserRouter>
      <navbar/>
      <Routes>
        <Route path="/" element={<ItemlistContainer/>}/>
        <Route path='/category/:categoryId' element {<ItemlistContainer/>} />
        <Route path='/item/:itemId' element {<ItemlistContainer/>}/>
        <Route path='*' element {<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
