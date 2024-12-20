import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme, } from '@mui/material';

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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Salvar
          </Typography>
        </Button>
      )}

      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEfechar && !mostrarBotaoSalvarEfecharCarregando && !smDown && !mdDown) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmSalvarEfechar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Salvar e fechar
          </Typography>
        </Button>
      )}

      {(mostrarBotaoSalvarEfecharCarregando && !smDown && !mdDown) && (
        <Skeleton width={180} height={60} />
      )}


      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Apagar
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarreagando && !smDown) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {(mostrarBotaoNovoCarreagando && !smDown) && (
        <Skeleton width={72} height={60} />
      )}

      {mostrarBotaoVoltar &&
        (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEfechar) &&
          (
            <Divider variant='middle' orientation='vertical' />
          )}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Voltar
          </Typography>
        </Button>
      )}

      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={90} height={60} />
      )}
    </Box>
  );
};