import { IHeaderListType } from '../@types/headersList';
import { GraphiQlMsg } from '../languages/graphiQlMsg';
import '../styles/headerList.scss';

import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

export function HeaderList({ textAreaHeaders }: IHeaderListType) {
  const [headerIndex, setHeaderIndex] = useState(1);
  const [headersKey, setHeadersKey] = useState<Record<string, string>>({});
  const [headersValue, setHeadersValue] = useState<Record<string, string>>({});

  useEffect(() => {
    handleAddHeader();
    setHeadersValue((prevHeaders) => ({ ...prevHeaders, [1]: 'application/json' }));
    setHeadersKey((prevHeaders) => ({ ...prevHeaders, [1]: 'Content-Type' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const combinedHeaders = Object.fromEntries(
      Object.entries(headersKey).map(([key, value]) => [value, headersValue[key]])
    );
    textAreaHeaders(JSON.stringify(combinedHeaders));
  }, [headersValue, headersKey, textAreaHeaders]);

  const handleHeaderValueChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setHeadersValue((prevHeaders) => ({ ...prevHeaders, [key]: event.target.value }));
  };
  const handleHeaderKeyChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setHeadersKey((prevHeaders) => ({ ...prevHeaders, [key]: event.target.value }));
  };

  const handleAddHeader = () => {
    setHeadersKey((prevHeaders) => ({ ...prevHeaders, [`${headerIndex}`]: '' }));
    setHeaderIndex(headerIndex + 1);
  };

  const handleHeaderDelete = (key: string) => {
    setHeadersKey((prevHeaders) => {
      const newHeaders = { ...prevHeaders };
      delete newHeaders[key];
      return newHeaders;
    });
  };

  return (
    <div className="headers-section">
      {Object.keys(headersKey).map((key) => (
        <div key={key} className="headers-section__inputs">
          <input
            placeholder="Header Key"
            defaultValue={key === '1' ? 'Content-Type' : headersKey[key]}
            onChange={(event) => handleHeaderKeyChange(event, key)}
            className="headers-section__input"
          />
          <input
            placeholder="Header Value"
            defaultValue={key === '1' ? 'application/json' : headersValue[key]}
            className="headers-section__input"
            onChange={(event) => handleHeaderValueChange(event, key)}
          />
          <div className="headers-section__delete" onClick={() => handleHeaderDelete(key)}></div>
        </div>
      ))}
      <button className="headers-section__btn-add" onClick={handleAddHeader}>
        <FormattedMessage id={GraphiQlMsg.addHeaderBtn} />
      </button>
    </div>
  );
}

export default HeaderList;
