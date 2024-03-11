import {Container} from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom';
import {Home}  from './pages/Home'
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {Store} from './pages/Store'
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import MyNavbar from './components/Navbar';


function App() {
  return (
    <>
    <ShoppingCartProvider>
        <MyNavbar />
    </ShoppingCartProvider>
    <Container>
    

        <Routes>
          
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/store' element={<Store />}></Route>

        </Routes>

    
    </Container>
    </>
    
    
      
       
   
   
  );
}

export default App;
