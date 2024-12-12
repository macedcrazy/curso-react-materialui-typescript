import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashbord = () => {
  return (
    <LayoutBaseDePagina
      titulo='Pagina Inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe mostrarBotaoSalvarEfechar mostrarBotaoSalvarEfecharCarregando />
      )}>
      Testando
    </LayoutBaseDePagina>
  );
};
