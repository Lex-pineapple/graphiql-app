const BASE_URL = 'https://rickandmortyapi.com/graphql';

export async function getResources(
  sourcesQuery: string,
  sourcesVariables: string
): Promise<string> {
  const parsSourcesVariables = () => sourcesVariables && JSON.parse(sourcesVariables);
  try {
    parsSourcesVariables();
  } catch (error) {
    return 'Error parsing variables data';
  }
  try {
    const results = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: sourcesQuery,
        variables: parsSourcesVariables(),
      }),
    });
    const data = await results.json();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    return 'Error response';
  }
}
