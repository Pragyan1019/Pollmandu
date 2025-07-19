import Image from "next/image";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <div className="sticky top-5 w-[70%]  mx-auto">
    <Navbar/></div>
   <Dashboard/>
   
   </>
  );
}
