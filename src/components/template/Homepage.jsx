import { useEffect } from "react";

function Homepage() {
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&x_cg_demo_api_key=CG-JdkEKVciWpxtDK5ADdTzxwD1",
    )
      .then((res) => res.json())
      .then((json)=>console.log(json));
  }, []);

  return <div>Home page</div>;
}

export default Homepage;
