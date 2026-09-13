import './App.css'
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies, { type TechItem } from "./components/Technologies"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const techPromiseFetch = async (): Promise<TechItem[]> => {
  const res = await fetch("/data.json");
  const data: TechItem[] = await res.json();
  return data;
}

const techPromise = techPromiseFetch();

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies techPromise={techPromise} />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}