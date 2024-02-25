import Loading from "./Loading";
import NounDefinitions from "./NounDefinitions";
import VerbDefinitions from "./VerbDefinitions";

const Dictionary = ({ wordData, loading, error }) => {
  if (!wordData) return null;

  if (loading) return <Loading />;

  const definitionsOfWord = wordData.meanings[0]?.definitions.map(
    (meanings) => {
      return (
        <li className="h5" key={meanings.index}>
          {meanings.definition}
        </li>
      );
    }
  );

  const definitionsOfVerb = wordData.meanings[1]?.definitions.map(
    (meanings) => {
      return (
        <li className="h5" key={meanings.index}>
          {meanings.definition}
        </li>
      );
    }
  );

  return (
    <div className="text-start">
      <p className="fw-bold display-5 fst-italic text-capitalize">
        <span className="fw-bold">{wordData.word}</span>
      </p>
      <NounDefinitions definitionsOfWord={definitionsOfWord} />
      <hr />
      <VerbDefinitions definitionsOfVerb={definitionsOfVerb} />
    </div>
  );
};

export default Dictionary;
