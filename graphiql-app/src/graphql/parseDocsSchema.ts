import { IFinType, ISchema, IType } from '../@types/graphql';

export function getQueries(schema: ISchema) {
  const queryName = schema.data.__schema.queryType.name;
  const schemaTypes = schema.data.__schema.types;
  const query = findTypeByName(queryName, schemaTypes);
  return query?.fields;
}

export function findTypeByObject(type: IFinType, schemaTypes: IType[]) {
  const finalTypeName = cycleType(type);
  const foundType = schemaTypes.filter((schemaType) => schemaType.name == finalTypeName);
  if (foundType.length > 0) return foundType[0];
}

export function findTypeByName(type: string, schemaTypes: IType[]) {
  const foundType = schemaTypes.filter((schemaType) => schemaType.name == type);
  if (foundType.length > 0) return foundType[0];
}

export function styleType(type: IFinType) {
  const typeKinds = getTypeKinds(type);
  let styledType = cycleType(type);
  for (let i = typeKinds.length - 1; i >= 0; i--) {
    if (typeKinds[i] == 'LIST') styledType = `[${styledType}]`;
    if (typeKinds[i] == 'NON_NULL') styledType = `${styledType}!`;
  }
  return styledType;
}

export function getTypeKind(type: IFinType) {
  const finType = cycleTypeObj(type);
  return finType.kind;
}

export function cycleType(type: IFinType): string | null {
  if (type.ofType) return cycleType(type.ofType);
  return type.name;
}

export function cycleTypeObj(type: IFinType): IFinType {
  if (type.ofType) return cycleTypeObj(type.ofType);
  return type;
}

function getTypeKinds(type: IFinType): string[] {
  return type.ofType ? [type.kind, ...getTypeKinds(type.ofType)] : [type.kind];
}
