import axios from "axios";

const baseURL = "https://frameworks-web.herokuapp.com/api/albuns";
const headers = { matricula: "2021000000" };

export const lerAlbuns = (categoria) =>
  axios
    .get(categoria ? `${baseURL}?categoria=${categoria}` : baseURL, { headers })
    .catch(onError);

export const inserirAlbum = (data) =>
  axios
    .post(baseURL, data, { headers })
    .then(() => onSuccess("cadastrado"))
    .catch(onError);

export const atualizarAlbum = (id, data) =>
  axios
    .put(`${baseURL}/${id}`, data, { headers })
    .then(() => onSuccess("alterado"))
    .catch(onError);

export const excluirAlbum = (id) =>
  axios
    .delete(`${baseURL}/${id}`, { headers })
    .then(() => onSuccess("deletado"))
    .catch(onError);

const onSuccess = (op) => {
  alert(`Álbum ${op} com sucesso`);
  window.location.reload();
};

const onError = (e) => {
  alert("Ocorreu um erro");
  console.log(e);
};
