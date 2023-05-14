function getIntrospectionQuery() {
  return `
  query IntrospectionQuery {
    __schema {
      queryType { name }
      types { ...FullType }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: false) {
      name
      description
      args { ...InputValue }
      type { ...TypeRef }
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  `;
}

export default getIntrospectionQuery;
