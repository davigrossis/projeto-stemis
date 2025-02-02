import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

const apiBinance = axios.create({
  baseURL: "https://api.binance.com/api/v3",
});

export default { api, apiBinance };
