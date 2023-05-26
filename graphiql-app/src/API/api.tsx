import { ApiMsg } from '../languages/apiMsg';
import { ISchema } from '../@types/graphql';
import { IGetRescourcesRet } from '../@types/api';

const BASE_URL = 'https://rickandmortyapi.com/graphql';

export async function getResources(
  sourcesQuery: string,
  sourcesVariables: string,
  sourcesHeaders: string
): Promise<IGetRescourcesRet> {
  const parsSourcesVariables = () => sourcesVariables && JSON.parse(sourcesVariables);
  const parsSourcesHeader = () => sourcesHeaders && JSON.parse(sourcesHeaders);
  try {
    parsSourcesHeader();
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: 'error',
        contents: error.message,
        formatId: ApiMsg.apiGenError,
      };
    }
    return {
      type: 'error',
      contents: '',
      formatId: ApiMsg.apiErrorHeaders,
    };
  }
  try {
    parsSourcesVariables();
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: 'error',
        contents: error.message,
        formatId: ApiMsg.apiGenError,
      };
    }
    return {
      type: 'error',
      contents: '',
      formatId: ApiMsg.apiErrorVars,
    };
  }
  try {
    const results = await fetch(BASE_URL, {
      method: 'POST',
      headers: parsSourcesHeader(),
      body: JSON.stringify({
        query: sourcesQuery,
        variables: parsSourcesVariables(),
      }),
    });
    const data = await results.json();
    return {
      type: 'ok',
      contents: JSON.stringify(data, null, 2),
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        type: 'error',
        contents: error.message,
        formatId: ApiMsg.apiGenError,
      };
    }
    return {
      type: 'error',
      contents: 'Unknown error',
      formatId: ApiMsg.apiErrorUnknown,
    };
  }
}

export function getSchema(query: string) {
  let status = 'pending';
  let result: ISchema | Error;
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
