import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const loginUsuario = async (email, senha) => {
  try {
    const resposta = await api.post("/auth/login", { email, senha });

    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.message,
      };
    } else {
      return {
        message: "erro inesperado",
      };
    }
  }
};

export const postUsuario = async (body) => {
  try {
    const resposta = await api.post("/usuarios", body);
    return resposta.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteUsuario = async (id) => {
  try {
    const resposta = await api.delete(`/usuarios/${id}`);
    return resposta;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.message,
      };
    } else {
      return {
        message: "Erro inesperado",
      };
    }
  }
};

export const updateUsuario = async (id, nome, email, cpf, senha, telefone) => {
  try {
    const resposta = await api.patch(`/usuarios/${id}`, {
      id,
      nome,
      email,
      cpf,
      senha,
      telefone,
    });
    return resposta;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.message,
      };
    } else {
      return {
        message: "Erro inesperado",
      };
    }
  }
};

export const getUsuario = async (id) => {
  console.log(id);
  try {
    const resposta = await api.get(`/usuarios/${id}`);
    console.log(resposta)

    return resposta;
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      return {
        message: error.response.message,
      };
    } else {
      return {
        message: "Erro inesperado",
      };
    }
  }
};
