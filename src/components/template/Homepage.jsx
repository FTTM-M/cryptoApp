import { useEffect } from "react";

function Homepage() {
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/market?vs_currency=usd&order=market_cap_desc&per_page=20&page1&x_cg_demo_api_key=CG-JdkEKVciWpxtDK5ADdTzxwD1",
    )
      .then((res) => res.json)
      .then(json);
  }, []);

  return <div>Home page</div>;
}

export default Homepage;
