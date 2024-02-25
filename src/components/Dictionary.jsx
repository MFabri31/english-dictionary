import { Alert } from "react-bootstrap";
import Loading from "./Loading";
import NounDefinitions from "./NounDefinitions";
import VerbDefinitions from "./VerbDefinitions";

const Dictionary = ({ wordData, loading, error }) => {
  if (loading) return <Loading />;

  if (error) {
    return (
      <Alert className="mt-3 fs-5 fw-bold inline-block" variant="warning">
        <i class="bi bi-exclamation-triangle-fill mx-3"></i>
        {error} for that word!
      </Alert>
    );
  }

  if (!wordData) return;

  const definitionsOfWord = wordData?.meanings[0]?.definitions.map(
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
