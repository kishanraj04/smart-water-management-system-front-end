import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Body */}
      <div className="flex  w-full">
        <Sidebar />

        <main className="flex-1 p-6 bg-[#0F172B] absolute left-60 w-[80%] py-[100px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;