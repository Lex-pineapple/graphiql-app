import { IType } from '../../@types/graphql';

function QueryTypeNonObj({ returnType }: { returnType: IType }) {
  return (
    <>
      <div className="query-ret-type-descr">{returnType.description}</div>
      <div className="query-ret-type-kindType-container">
        <div className="query-ret-type-kind">{returnType.kind}</div>
        <div className="query-ret-type-type">{returnType?.name}</div>
      </div>
    </>
  );
}

export default QueryTypeNonObj;
