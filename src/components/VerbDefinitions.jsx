const VerbDefinitions = ({ definitionsOfVerb }) => {
  return (
    <>
      <p className="fw-semibold lead">verb</p>
      <p className="lead">Meaning</p>
      <ul className="">{definitionsOfVerb ? definitionsOfVerb : "---"}</ul>
    </>
  );
};
export default VerbDefinitions;
