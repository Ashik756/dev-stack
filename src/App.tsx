import { Suspense } from 'react';
import './App.css'
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies, { type TechItem } from "./components/Technologies"
import TechSkeleton from "./components/TechSkeleton";

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

      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TechSkeleton />
            <TechSkeleton />
            <TechSkeleton />
          </div>
        </div>
      }>
        <Technologies techPromise={techPromise} />
      </Suspense>

      <Footer />
    </div>
  )
}