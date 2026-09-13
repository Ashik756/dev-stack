import './App.css'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Navbar ></Navbar >
      <Footer></Footer>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}