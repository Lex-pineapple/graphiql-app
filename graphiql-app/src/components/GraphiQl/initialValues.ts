const initVariable = `{
  "characterId": "1"
}`;

const initQuery = `query Test($characterId: ID!) {
  character(id: $characterId) {
    name
    status
    species
  }
}`;

export { initVariable, initQuery };
