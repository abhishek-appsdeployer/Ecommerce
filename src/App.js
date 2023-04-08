import logo from './logo.svg';
import './App.css';
import LandingPage from './Component/LandingPage';
import { BrowserRouter ,Routes,Route,HashRouter} from 'react-router-dom';
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
import GetProdocut from './Component/GetProdocut';
import AdminLogin from './Component/Admin/AdminLogin';
import AdminDashboard from './Component/Admin/AdminDashboard';

function App() {
  return (
    <>
      {/* <LandingPage/> */}
      <HashRouter>
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
      <Route path="/get" element={<GetProdocut/>} />
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/adminDashobard" element={<AdminDashboard/>} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
