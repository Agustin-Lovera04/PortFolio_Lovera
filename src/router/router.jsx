import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Index from "../components/index";
import NavBar from "../components/navbar/navbar";
  
  export default function Router() {
    return (
      <BrowserRouter basename="https://Agustin-Lovera04.github.io/PortFolio_Lovera">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobremi" element={<Index />} />
          <Route path="/proyectos" element={<Index />} />
          <Route path="/estudios" element={<Index />} />
          <Route path="/contacto" element={<Index />} />
        </Routes>
      </BrowserRouter>
    );
  }