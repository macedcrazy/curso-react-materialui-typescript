import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { useMemo } from "react";




export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();


  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBaseDePagina
      titulo='Listagem de cidades'
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo="Nova"
          mostrarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true})}
        />
      }
    >
      {/* Aqui você pode adicionar o conteúdo da página */}
      <div>Conteúdo da listagem de cidades</div>

    </LayoutBaseDePagina>
  )
}