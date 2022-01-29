import { useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/lib/api";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: laodedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centerd">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!laodedQuotes || laodedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={laodedQuotes} />;
};

export default AllQuotes;
