import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const loginUsuario = async (email, senha) => {
  try {
    // const config = {
    //     headers: {
    //         'X-password': senha,
    //     },
    // };

    const resposta = await api.post("/auth/login", { email, senha });
    console.log(resposta);
    return resposta.data;
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.message
      };
    } else {
      return {
        message: "erro inesperado",
      };
    }
  }
};

export const postUsuario = async (body, senha) => {
  // const config = {
  //   headers: {
  //     'X-password': senha,
  //   },
  // }
  try {
    const resposta = await api.post("/usuarios", { ...body, senha });
    return resposta.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteUsuario = async (id) => {
  try {
    const resposta = await api.delete(`/usuarios/${id}`)
    return resposta
  } catch (error) {
    if (error.response) {
      return {
        message: error.response.message
      }
    } else {
      return {
        message: 'Erro inesperado',
      }
    }
  }
}
