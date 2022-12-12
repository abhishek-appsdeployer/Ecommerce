import logo from './logo.svg';
import './App.css';
import LandingPage from './Component/LandingPage';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Mobile from './Component/Mobile';
import ProductDetail from './Component/ProductDetail';
import Dress from './Component/Dress';
import DressDetail from './Component/DressDetail';
import Address from './Component/Address';
import Payment from './Component/Payment';
import Thanks from './Component/Thanks';
import AddProduct from './Component/AddProduct';

function App() {
  return (
    <>
      {/* <LandingPage/> */}
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/mobile" element={<Mobile/>}/>

      <Route path="/mobile/:id" element={<ProductDetail />}/>
      {/* <Route path="/ddetail/:id" render={(props)=><DressDetail {...props}/>}/> */}
      <Route path="/ddetail/:id" element={<DressDetail/>}/>
      <Route path="/dress" element={<Dress/>} />
      <Route path="/adress/:id" element={<Address/>} />
      <Route path="/adress/:id/pay" element={<Payment/>} />
      <Route path="/thanks" element={<Thanks/>} />
      <Route path="/add" element={<AddProduct/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
