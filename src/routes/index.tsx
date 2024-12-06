import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext} from "../shared/contexts";
import { useEffect } from "react";
import { Dashbord } from "../pages";


export const AppRoutes = () => {
  const {setDrawerOptions} = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Paginal Inicial',
        icon: 'home',
        path: './pagina-inicial',
      }    
    ]);   
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashbord/>} />


      <Route path ="*" element = {<Navigate to = "/pagina-inicial"/>} />
    </Routes>
  );
};
