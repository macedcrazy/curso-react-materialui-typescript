import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashbord = () => {
  return (
    <LayoutBaseDePagina
      titulo='Pagina Inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe 
        mostrarBotaoNovo
        mostrarBotaoSalvar
        mostrarBotaoSalvarEfecharCarregando
        mostrarBotaoVoltar = {false}
        />        
      )}>
      Testando
    </LayoutBaseDePagina>
  );
};
