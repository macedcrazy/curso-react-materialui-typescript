import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { useEffect, useMemo } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebouce } from "../../shared/hooks";




export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebouce(3000 , false);


  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);


  useEffect(() => {

    debounce(() => {
      PessoasService.getAll()
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);
          }
        });
    });

  }, [busca]);

  return (
    <LayoutBaseDePagina
      titulo='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo="Nova"
          mostrarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >
      {/* Aqui você pode adicionar o conteúdo da página */}
      Conteúdo da listagem de cidades

    </LayoutBaseDePagina>
  )
}