import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext} from "../shared/contexts";
import { useEffect } from "react";
import {
   Dashbord,
   ListagemDeCidade,
   } from "../pages";


export const AppRoutes = () => {
  const {setDrawerOptions} = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Paginal Inicial',
        icon: 'home',
        path: './pagina-inicial',
      } ,
      {
        label: 'Cidades',
        icon: 'location_city',
        path: './cidades',
      }    
    ]);   
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashbord/>} />

      <Route path="/cidades" element={<ListagemDeCidade/>} />

      <Route path ="*" element = {<Navigate to = "/pagina-inicial"/>} />
    </Routes>
  );
};
