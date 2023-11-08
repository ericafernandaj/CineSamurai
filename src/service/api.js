import axios from "axios";

const api = axios.create({
  baseURL: "https://cinesamuraiapi-v2-lucasrls98.onrender.com",
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
    let newUser = {
      nome,
      email,
      cpf,
      senha,
      telefone,
    }

    //this removes all undefined values from the user
    Object.keys(newUser).forEach(key => {
      if (!newUser[key]) {
        delete newUser[key];
      }
    });

    const resposta = await api.patch(`/usuarios/${id}`, newUser);
    
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
  try {
    const resposta = await api.get(`/usuarios/${id}`);
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

export const getFilmes = async () => {
  try {
    const resposta = await api.get("/filmes")
    return resposta
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
}