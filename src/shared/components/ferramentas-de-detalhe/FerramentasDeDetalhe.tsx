import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEfechar?: boolean;

  
  mostrarBotaoNovoCarreagando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEfecharCarregando?: boolean;


  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEfechar?: () => void;
}


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEfechar = false,

  mostrarBotaoNovoCarreagando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEfecharCarregando = false,


  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEfechar,

}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando)&& (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >Salvar</Button>
      )}
      
      {mostrarBotaoSalvarCarregando &&(
        <Skeleton width={110} height={60}/>
      )}

      {(mostrarBotaoSalvarEfechar && !mostrarBotaoSalvarEfecharCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEfechar}
          startIcon={<Icon>save</Icon>}
        >Salvar e fechar</Button>
      )}

      {mostrarBotaoSalvarEfecharCarregando &&(
         <Skeleton width={180} height={60}/>
      )}
     

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >Apagar</Button>
      )}
       {mostrarBotaoApagarCarregando &&(
        <Skeleton width={110} height={60}/>
       )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarreagando) && (
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmNovo}
        startIcon={<Icon>add</Icon>}
      >{textoBotaoNovo}</Button>
    )}
     { mostrarBotaoNovoCarreagando &&(
      <Skeleton width={72}height={60}/>
     )}

      <Divider variant='middle' orientation='vertical' />

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
      <Button
        color='primary'
        disableElevation
        variant='outlined'
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}
      >Voltar</Button>
    )}
     
     {mostrarBotaoVoltarCarregando &&(
      <Skeleton width={90}height={60}/>      
     )}
    </Box>
  );
};