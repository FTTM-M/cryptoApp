const BASE_URL="https://api.coingecko.com/api/v3/";
const key="CG-JdkEKVciWpxtDK5ADdTzxwD1";



const getApi=()=>{
    return(`${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=${key}`);
}   


export {getApi}