import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext} from "../shared/contexts";
import { useEffect } from "react";
import {
   Dashbord,
   ListagemDePessoas,
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
        label: 'Pessoas',
        icon: 'people',
        path: './pessoas',
      }    
    ]);   
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashbord/>} />

      <Route path="/pessoas" element={<ListagemDePessoas/>} />

      <Route path ="*" element = {<Navigate to = "/pagina-inicial"/>} />
    </Routes>
  );
};
