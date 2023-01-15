import './App.css';
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'


import HomePage from "./components/HomePage"
import BookingPage from "./components/BookingPage"
import ConfirmedBookingPage from './components/ConfirmedBookingPage';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Nav/>
        <div style={{height:"4.5em"}}></div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/booking" element={<BookingPage/>}></Route>
            <Route path="/confirmed-booking" element={<ConfirmedBookingPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
