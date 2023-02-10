import './App.css';
import Navbar from './components/Navbar/Navbar';
import Allindexs from './components/Allindexs/Allindexs';
import {Routes,Route} from 'react-router-dom'
import Explorepage from './components/Explorepage/Explorepage';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AutherPage from './components/AutherPage/AutherPage';
import CreateYours from './components/CreateYours/CreateYours';
function App() {
  return (
    <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/' element={
              <Allindexs/>
          }/>
          <Route path='explorepage' element={<Explorepage/>}/>
          <Route path='details' element={<ItemDetails/>}/>
          <Route path='author' element={<AutherPage/>}/>
          <Route path='creat' element={<CreateYours/>}/>
        </Routes>      
    </div>
  );
}

export default App;
