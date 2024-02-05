import { useState } from "react";

const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en";

const useDictionary = () => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWordData = async ({ search }) => {
    try {
      setLoading(true);
      const response = await fetch(`${endpoint}/${search}`);
      const data = await response.json();

      if (!response.ok) throw { title: data.title };

      setWordData(data[0]);
    } catch (error) {
      setError(error.title);
      console.error("Error fetching word data:", error);
    } finally {
      setLoading(false);
      // setError(null);
    }
  };

  return { wordData, loading, error, getWordData };
};

export default useDictionary;
