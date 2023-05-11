const BASE_URL = 'https://rickandmortyapi.com/graphql';

export async function getResources(source: string): Promise<string> {
  const results = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: source,
    }),
  });
  const data = await results.json();
  return JSON.stringify(data, null, 2);
}
