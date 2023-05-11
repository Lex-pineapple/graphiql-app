function GraphiQLResponse({ result }) {
  const formattedResult = Object.keys(result).length ? JSON.stringify(result, null, 2) : '';
  return (
    <section className="graphiQLPage__response">
      <div>
        <div>response</div>
        {formattedResult && <pre>{formattedResult}</pre>}
      </div>
    </section>
  );
}

export default GraphiQLResponse;
