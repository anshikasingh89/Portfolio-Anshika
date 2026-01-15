function Result({ result }) {
  if (!result) return null;

  if (result.message) {
    return <p>{result.message}</p>;
  }

  return (
    <div>
      <h3>{result.productname}</h3>
      <p><strong>Brand:</strong> {result.brand}</p>
      <p>{result.description}</p>
    </div>
  );
}

export default Result;
