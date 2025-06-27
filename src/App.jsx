// import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Counter from "./pages/counter";
// import FetchExample from "./pages/FetchExample";
// import AxiosExample from "./pages/AxiosExample";
import Home from "./pages/Home";
import{loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentPage from './pages/PaymentPage';
const stripePromise=loadStripe("pk_test_51Re7KMB3l1zYJo66RhCp2VwyJz0HerLPWE7NL3lTCquVaYOaACQhMs169oOxMezL3OKzWNU35btfTZeyApawW5Qr00UNs0aXMf");

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        
        <Elements stripe={stripePromise}>
          <PaymentPage/>
        </Elements>

      </div>
      {/* <Counter />
      <AxiosExample/>
      <FetchExample/> */}
      
    </Router>
  );
}

export default App;
