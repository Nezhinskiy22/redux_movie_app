import axios from "axios";
// import key from "../apis/movieApiKey";
export default axios.create({
  //   baseURL: `http://www.omdbapi.com/?i=tt3896198&apikey=${key}`,
  baseURL: "http://www.omdbapi.com/",
});
