const NounDefinitions = ({ definitionsOfWord }) => {
  return (
    <>
      <p className="fw-semibold lead">noun</p>
      <p className="lead">Meaning</p>
      <ul className="">{definitionsOfWord}</ul>
    </>
  );
};
export default NounDefinitions;
