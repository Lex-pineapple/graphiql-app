import { ITypeField, IType } from './graphql';

export interface IQueryDetailsProps {
  queryDetails: ITypeField;
  onClick: (field: IArg | ITypeField) => void;
}

export interface IQueryTypeProps {
  returnType: IType;
  onClick: (field: IArg | ITypeField) => void;
  mode?: string;
}

export interface IQueryListQueryProps {
  key: number;
  query: ITypeField;
  onClick: (query: ITypeField) => void;
}
