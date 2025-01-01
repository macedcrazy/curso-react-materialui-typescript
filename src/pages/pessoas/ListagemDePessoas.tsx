import { useSearchParams } from "react-router-dom"
import { useEffect, useMemo, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebouce } from "../../shared/hooks";





export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebouce();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);


  useEffect(() => {
    setLoading(true);

    debounce(() => {
      PessoasService.getAll(1, busca)
        .then((result) => {
          setLoading(false);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result);

            setTotalCount(result.totalCount);
            setRows(result.data);
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
      <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome completo </TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  )
}