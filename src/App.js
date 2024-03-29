
import './App.css';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App (){
  return(
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemlistContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemlistContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/> 
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
