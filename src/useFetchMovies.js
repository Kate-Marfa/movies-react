import React, { useState, useEffect } from "react";

function useFetchMovies({ apiUrl }, initialPage = 1) {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (page) => {
    setLoading(true);
    setError(null);
    const url = `${apiUrl}&page=${page}`;
    console.log("fetching:", apiUrl);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setData(data.results || []);
        setTotal(data.total_pages || 1);
        setCurrentPage(page);
        setLoading(false);
      })
      .catch((err) => {
        setError("Не вдалося завантажити дані.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(initialPage);
  }, [apiUrl]);

  const changePage = (newPage) => {
    fetchData(newPage);
  };
  return { data, total, currentPage, loading, error, changePage };
}
export default useFetchMovies;
