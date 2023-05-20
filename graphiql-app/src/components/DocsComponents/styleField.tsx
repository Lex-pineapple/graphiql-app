import { styleType } from '../../graphql/parseDocsSchema';
import { IArg, ITypeField } from '../../@types/graphql';

function styleField(fields: IArg[] | ITypeField[], className: string) {
  return fields.map((field, idx) => {
    return (
      <div className={`${className}__item`} key={idx}>
        <p className={`${className}__item-name`}>{`${field.name}: `}</p>
        <p className={`${className}__item-type`}>{styleType(field.type)}</p>
      </div>
    );
  });
}

export default styleField;
