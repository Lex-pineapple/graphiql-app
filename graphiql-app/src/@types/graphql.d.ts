export interface ISchema {
  data: {
    __schema: {
      queryType: IQueryType;
      types: IType[];
    };
  };
}

export interface IQueryType {
  name: string;
}

export interface IType {
  kind: string;
  name: string;
  description: string;
  fields: ITypeField[] | null;
}

export interface ITypeField {
  name: string;
  description: string;
  args: IArg[];
  type: IFinType;
}

export interface IArg {
  name: string;
  description: string;
  type: IFinType;
}

export interface IFinType {
  kind: string;
  name: string | null;
  ofType: IFinType | null;
}

export interface IParsedQuery {
  name: string;
  description: string;
  args: IArg[];
  type: IType;
}
