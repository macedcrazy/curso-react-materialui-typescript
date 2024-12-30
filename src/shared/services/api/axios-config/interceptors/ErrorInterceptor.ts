import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  // Verifica se é um erro de rede
  if (!error.response) {
    if (error.message === 'Network Error') {
      // Erro de conexão com a rede
      return Promise.reject(new Error('Erro de conexão com o servidor. Verifique sua rede.'));
    }
    // Caso o erro não tenha resposta, mas seja de rede
    return Promise.reject(new Error('Erro desconhecido de rede.'));
  }

  // Verifica o status de erro
  const { status, data } = error.response;
  switch (status) {
    case 401:
      // Aqui você pode redirecionar o usuário para a tela de login ou outra ação
      console.error('Erro 401 - Não autorizado. Redirecionando para login...');
      break;
    case 404:
      // Caso o recurso não seja encontrado
      console.error(`Erro 404 - Recurso não encontrado. URL: ${error.config?.url}`);
      break;
    case 500:
      // Erro no servidor
      console.error('Erro 500 - Problema interno no servidor.');
      break;
    default:
      console.error(`Erro desconhecido: ${status}`);
  }

  // Adiciona o erro ao log para depuração
  console.error('Detalhes do erro:', error.response);

  // Retorna o erro para que a requisição continue com erro
  return Promise.reject(error);
};
