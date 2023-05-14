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

export function getSchema(query: string) {
  let status = 'pending';
  let result: string | Error;
  const fetching = fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      status = 'fulfilled';
      result = data;
    })
    .catch((err) => {
      status = 'rejected';
      result = err;
    });
  return () => {
    if (status === 'rejected') {
      return result; // Result is an error
    } else if (status === 'fulfilled') {
      return result; // Result is a fulfilled promise
    }
    throw fetching;
  };
}
