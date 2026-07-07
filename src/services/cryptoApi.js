const BASE_URL = "https://api.coingecko.com/api/v3/";
const key = "CG-JdkEKVciWpxtDK5ADdTzxwD1";

const getApi = (page, currency) => {
  return `${BASE_URL}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&x_cg_demo_api_key=${key}`;
};

const searchUrl = (query) => {
  return `${BASE_URL}search?query=${query}&x_cg_demo_api_key=${key}`;
};

const marketChart = (id) => {
  return `${BASE_URL}coins/${id}/market_chart?vs_currency=usd&days=7`;
};

export { getApi, searchUrl, marketChart };
