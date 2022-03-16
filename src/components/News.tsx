import axios from "axios";
import { useEffect } from "react";
// ${process.env.REACT_APP_NEWS_API_KEY}

function News() {
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-02-15&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((response: any) => {
        console.log(response);
      });
  });
  return (
    <address>
      You can find us here:
      <br />
      ReactEnvironment
      <br />
      5th 6th Floor, Royal, A- 118, <br />
      Sector- 13, Noida (201305)
    </address>
  );
}

export default News;
