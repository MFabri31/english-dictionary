import { useState } from "react";

const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en";

const useDictionary = () => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWordData = async ({ search }) => {
    try {
      setLoading(true);
      const response = await fetch(`${endpoint}/${search}`);
      const data = await response.json();

      if (!response.ok) throw { title: data.title };

      setWordData(data[0]);
      setError(false);
    } catch (error) {
      setError(error.title);
      setWordData(null);
      console.error("Error fetching word data:", error);
    } finally {
      setLoading(false);
    }
  };

  return { wordData, loading, error, getWordData };
};

export default useDictionary;
