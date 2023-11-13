const Dictionary = ({ wordData }) => {
  if (!wordData) return null;

  const definitionsOfWord = wordData.meanings[0]?.definitions.map(
    (meanings) => {
      return <li key={meanings.index}>{meanings.definition}</li>;
    }
  );

  const definitionsOfVerb = wordData.meanings[1]?.definitions.map(
    (meanings) => {
      return <li key={meanings.index}>{meanings.definition}</li>;
    }
  );

  return (
    <div className="text-start">
      <p className="fw-bold display-6 fst-italic text-capitalize">
        <span className="fw-bold">{wordData.word}</span>
      </p>
      <p className="fw-semibold">noun</p>
      <p className="text-muted">Meaning</p>
      <ul className="">{definitionsOfWord}</ul>
      <hr />
      <p className="fw-semibold">verb</p>
      <p className="text-muted">Meaning</p>
      <ul className="">{definitionsOfVerb}</ul>
    </div>
  );
};

export default Dictionary;
