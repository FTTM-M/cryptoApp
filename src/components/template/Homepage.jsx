import { useEffect, useState } from "react";
import CoinTable from "../module/CoinTable";

function Homepage() {
  const [coins,setCoins]=useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=CG-JdkEKVciWpxtDK5ADdTzxwD1",
    )
      .then((res) => res.json())
      .then((json)=>setCoins(json));
  }, []);


  return <div><CoinTable coins={coins} /></div>;
}

export default Homepage;
