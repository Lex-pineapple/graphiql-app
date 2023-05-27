import { styleType } from '../../graphql/parseDocsSchema';
import { IArg, ITypeField } from '../../@types/graphql';

function styleFieldWithLinks(
  fields: IArg[] | ITypeField[],
  className: string,
  onClick: (field: IArg | ITypeField) => void
) {
  return fields.map((field, idx) => {
    return (
      <div className={`${className}__item`} key={idx}>
        <p className={`${className}__item-name`}>{`${field.name}: `}</p>
        <p className={`${className}__item-type clickable`} onClick={() => onClick(field)}>
          {styleType(field.type)}
        </p>
      </div>
    );
  });
}

export default styleFieldWithLinks;
