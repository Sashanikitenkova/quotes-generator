import React, { useState, useEffect } from "react";
import axios from "axios";

export default function QuotesGenerator() {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);

    try {
      const result = await axios.get(
        "https://quoteslate.vercel.app/api/quotes/random"
      );
      setQuote(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://quoteslate.vercel.app/api/quotes/random")
    //   .then((result) => {
    //     console.log(result.data);
    //     setQuote(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    fetchQuote();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : quote ? (
        <>
          <p>"{quote.quote}"</p>
          <p className="author">{quote.author}</p>
        </>
      ) : (
        <p>No quote available</p>
      )}
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}
