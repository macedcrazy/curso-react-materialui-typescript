import { Api } from "../axios-config";
import { Environment } from "../../../environment";

// Tipagem de pessoas
export interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

export interface IDetalhePessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
}

// Classe personalizada de erro
class ApiError extends Error {
  statusCode: number;
  endpoint: string;

  constructor(message: string, statusCode: number, endpoint: string) {
    super(message);
    this.statusCode = statusCode;
    this.endpoint = endpoint;
    this.name = 'ApiError';
  }
}

// Função para listar todas as pessoas
const getAll = async (page = 1, filter = ' '): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new ApiError('Erro ao listar os registros: resposta vazia', 404, urlRelativa);
  } catch (error) {
    console.error('Erro ao listar registros:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao listar os registros';
    return new ApiError(errorMessage, 500, '/pessoas');
  }
};

// Função para buscar uma pessoa pelo ID
const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await Api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new ApiError('Erro ao consultar o registro', 404, `/pessoas/${id}`);
  } catch (error) {
    console.error('Erro ao consultar o registro:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao consultar o registro';
    return new ApiError(errorMessage, 500, `/pessoas/${id}`);
  }
};

// Função para criar uma nova pessoa
const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
  // Validação básica
  if (!dados.nomeCompleto || !dados.email) {
    return new ApiError('Nome e Email são obrigatórios', 400, '/pessoas');
  }

  try {
    const { data } = await Api.post<IDetalhePessoa>('/pessoas', dados);

    if (data) {
      return data.id;
    }

    return new ApiError('Erro ao criar o registro', 400, '/pessoas');
  } catch (error) {
    console.error('Erro ao criar registro:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao criar o registro';
    return new ApiError(errorMessage, 500, '/pessoas');
  }
};

// Função para atualizar uma pessoa pelo ID
const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
  // Validação básica
  if (!dados.nomeCompleto || !dados.email) {
    return new ApiError('Nome e Email são obrigatórios', 400, `/pessoas/${id}`);
  }

  try {
    await Api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.error('Erro ao atualizar registro:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao atualizar o registro';
    return new ApiError(errorMessage, 500, `/pessoas/${id}`);
  }
};

// Função para deletar uma pessoa pelo ID
const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.error('Erro ao deletar registro:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao deletar o registro';
    return new ApiError(errorMessage, 500, `/pessoas/${id}`);
  }
};

// Exportando as funções
export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
