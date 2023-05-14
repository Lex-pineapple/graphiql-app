import { ITypeField } from './../@types/graphql.d';
import { IArg, IFinType, ISchema, IType } from '../@types/graphql';

const schema = {
  data: {
    __schema: {
      queryType: {
        name: 'Query',
      },
      types: [
        {
          kind: 'OBJECT',
          name: 'Query',
          description: '',
          fields: [
            {
              name: 'character',
              description: 'Get a specific character by ID',
              args: [
                {
                  name: 'id',
                  description: '',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'Character',
                ofType: null,
              },
            },
            {
              name: 'characters',
              description: 'Get the list of all characters',
              args: [
                {
                  name: 'page',
                  description: '',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
                {
                  name: 'filter',
                  description: '',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'FilterCharacter',
                    ofType: null,
                  },
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'Characters',
                ofType: null,
              },
            },
            {
              name: 'charactersByIds',
              description: 'Get a list of characters selected by ids',
              args: [
                {
                  name: 'ids',
                  description: '',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'SCALAR',
                          name: 'ID',
                          ofType: null,
                        },
                      },
                    },
                  },
                },
              ],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Character',
                  ofType: null,
                },
              },
            },
            {
              name: 'location',
              description: 'Get a specific locations by ID',
              args: [
                {
                  name: 'id',
                  description: '',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'Location',
                ofType: null,
              },
            },
            {
              name: 'locations',
              description: 'Get the list of all locations',
              args: [
                {
                  name: 'page',
                  description: '',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
                {
                  name: 'filter',
                  description: '',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'FilterLocation',
                    ofType: null,
                  },
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'Locations',
                ofType: null,
              },
            },
            {
              name: 'locationsByIds',
              description: 'Get a list of locations selected by ids',
              args: [
                {
                  name: 'ids',
                  description: '',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'SCALAR',
                          name: 'ID',
                          ofType: null,
                        },
                      },
                    },
                  },
                },
              ],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Location',
                  ofType: null,
                },
              },
            },
            {
              name: 'episode',
              description: 'Get a specific episode by ID',
              args: [
                {
                  name: 'id',
                  description: '',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'SCALAR',
                      name: 'ID',
                      ofType: null,
                    },
                  },
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'Episode',
                ofType: null,
              },
            },
            {
              name: 'episodes',
              description: 'Get the list of all episodes',
              args: [
                {
                  name: 'page',
                  description: '',
                  type: {
                    kind: 'SCALAR',
                    name: 'Int',
                    ofType: null,
                  },
                },
                {
                  name: 'filter',
                  description: '',
                  type: {
                    kind: 'INPUT_OBJECT',
                    name: 'FilterEpisode',
                    ofType: null,
                  },
                },
              ],
              type: {
                kind: 'OBJECT',
                name: 'Episodes',
                ofType: null,
              },
            },
            {
              name: 'episodesByIds',
              description: 'Get a list of episodes selected by ids',
              args: [
                {
                  name: 'ids',
                  description: '',
                  type: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'LIST',
                      name: null,
                      ofType: {
                        kind: 'NON_NULL',
                        name: null,
                        ofType: {
                          kind: 'SCALAR',
                          name: 'ID',
                          ofType: null,
                        },
                      },
                    },
                  },
                },
              ],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Episode',
                  ofType: null,
                },
              },
            },
          ],
        },
        {
          kind: 'SCALAR',
          name: 'ID',
          description:
            'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
          fields: null,
        },
        {
          kind: 'OBJECT',
          name: 'Character',
          description: '',
          fields: [
            {
              name: 'id',
              description: 'The id of the character.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            {
              name: 'name',
              description: 'The name of the character.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'status',
              description: "The status of the character ('Alive', 'Dead' or 'unknown').",
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'species',
              description: 'The species of the character.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'type',
              description: 'The type or subspecies of the character.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'gender',
              description:
                "The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').",
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'origin',
              description: "The character's origin location",
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'Location',
                ofType: null,
              },
            },
            {
              name: 'location',
              description: "The character's last known location",
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'Location',
                ofType: null,
              },
            },
            {
              name: 'image',
              description:
                "Link to the character's image.\nAll images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.",
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'episode',
              description: 'Episodes in which this character appeared.',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Episode',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'created',
              description: 'Time at which the character was created in the database.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'SCALAR',
          name: 'String',
          description:
            'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
          fields: null,
        },
        {
          kind: 'OBJECT',
          name: 'Location',
          description: '',
          fields: [
            {
              name: 'id',
              description: 'The id of the location.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            {
              name: 'name',
              description: 'The name of the location.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'type',
              description: 'The type of the location.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'dimension',
              description: 'The dimension in which the location is located.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'residents',
              description: 'List of characters who have been last seen in the location.',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Character',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'created',
              description: 'Time at which the location was created in the database.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: 'Episode',
          description: '',
          fields: [
            {
              name: 'id',
              description: 'The id of the episode.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            {
              name: 'name',
              description: 'The name of the episode.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'air_date',
              description: 'The air date of the episode.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'episode',
              description: 'The code of the episode.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'characters',
              description: 'List of characters who have been seen in the episode.',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Character',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'created',
              description: 'Time at which the episode was created in the database.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'SCALAR',
          name: 'Int',
          description:
            'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
          fields: null,
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'FilterCharacter',
          description: '',
          fields: null,
        },
        {
          kind: 'OBJECT',
          name: 'Characters',
          description: '',
          fields: [
            {
              name: 'info',
              description: '',
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'Info',
                ofType: null,
              },
            },
            {
              name: 'results',
              description: '',
              args: [],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Character',
                  ofType: null,
                },
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: 'Info',
          description: '',
          fields: [
            {
              name: 'count',
              description: 'The length of the response.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'pages',
              description: 'The amount of pages.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'next',
              description: 'Number of the next page (if it exists)',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
            {
              name: 'prev',
              description: 'Number of the previous page (if it exists)',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'Int',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'FilterLocation',
          description: '',
          fields: null,
        },
        {
          kind: 'OBJECT',
          name: 'Locations',
          description: '',
          fields: [
            {
              name: 'info',
              description: '',
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'Info',
                ofType: null,
              },
            },
            {
              name: 'results',
              description: '',
              args: [],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Location',
                  ofType: null,
                },
              },
            },
          ],
        },
        {
          kind: 'INPUT_OBJECT',
          name: 'FilterEpisode',
          description: '',
          fields: null,
        },
        {
          kind: 'OBJECT',
          name: 'Episodes',
          description: '',
          fields: [
            {
              name: 'info',
              description: '',
              args: [],
              type: {
                kind: 'OBJECT',
                name: 'Info',
                ofType: null,
              },
            },
            {
              name: 'results',
              description: '',
              args: [],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Episode',
                  ofType: null,
                },
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: '__Schema',
          description:
            'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
          fields: [
            {
              name: 'types',
              description: 'A list of all types supported by this server.',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__Type',
                      ofType: null,
                    },
                  },
                },
              },
            },
            {
              name: 'queryType',
              description: 'The type that query operations will be rooted at.',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            {
              name: 'mutationType',
              description:
                'If this server supports mutation, the type that mutation operations will be rooted at.',
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            {
              name: 'subscriptionType',
              description:
                'If this server support subscription, the type that subscription operations will be rooted at.',
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            {
              name: 'directives',
              description: 'A list of all directives supported by this server.',
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__Directive',
                      ofType: null,
                    },
                  },
                },
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: '__Type',
          description:
            'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
          fields: [
            {
              name: 'kind',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'ENUM',
                  name: '__TypeKind',
                  ofType: null,
                },
              },
            },
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'fields',
              description: null,
              args: [
                {
                  name: 'includeDeprecated',
                  description: null,
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                },
              ],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Field',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'interfaces',
              description: null,
              args: [],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Type',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'possibleTypes',
              description: null,
              args: [],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Type',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'enumValues',
              description: null,
              args: [
                {
                  name: 'includeDeprecated',
                  description: null,
                  type: {
                    kind: 'SCALAR',
                    name: 'Boolean',
                    ofType: null,
                  },
                },
              ],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__EnumValue',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'inputFields',
              description: null,
              args: [],
              type: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                    ofType: null,
                  },
                },
              },
            },
            {
              name: 'ofType',
              description: null,
              args: [],
              type: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'ENUM',
          name: '__TypeKind',
          description: 'An enum describing what kind of type a given `__Type` is.',
          fields: null,
        },
        {
          kind: 'SCALAR',
          name: 'Boolean',
          description: 'The `Boolean` scalar type represents `true` or `false`.',
          fields: null,
        },
        {
          kind: 'OBJECT',
          name: '__Field',
          description:
            'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
          fields: [
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'args',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__InputValue',
                      ofType: null,
                    },
                  },
                },
              },
            },
            {
              name: 'type',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            {
              name: 'isDeprecated',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: '__InputValue',
          description:
            'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
          fields: [
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'type',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            {
              name: 'defaultValue',
              description:
                'A GraphQL-formatted string representing the default value for this input value.',
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: '__EnumValue',
          description:
            'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
          fields: [
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'isDeprecated',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
              },
            },
            {
              name: 'deprecationReason',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: '__Directive',
          description:
            "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          fields: [
            {
              name: 'name',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
              },
            },
            {
              name: 'description',
              description: null,
              args: [],
              type: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            {
              name: 'locations',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'ENUM',
                      name: '__DirectiveLocation',
                      ofType: null,
                    },
                  },
                },
              },
            },
            {
              name: 'args',
              description: null,
              args: [],
              type: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'LIST',
                  name: null,
                  ofType: {
                    kind: 'NON_NULL',
                    name: null,
                    ofType: {
                      kind: 'OBJECT',
                      name: '__InputValue',
                      ofType: null,
                    },
                  },
                },
              },
            },
          ],
        },
        {
          kind: 'ENUM',
          name: '__DirectiveLocation',
          description:
            'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
          fields: null,
        },
        {
          kind: 'ENUM',
          name: 'CacheControlScope',
          description: '',
          fields: null,
        },
        {
          kind: 'SCALAR',
          name: 'Upload',
          description: 'The `Upload` scalar type represents a file upload.',
          fields: null,
        },
      ],
    },
  },
};

function cycleType(type: IFinType): IFinType {
  if (type.ofType) return cycleType(type.ofType);
  return type;
}

function findType(type: string, schemaTypes: IType[]) {
  const foundType = schemaTypes.filter((schemaType) => schemaType.name == type);
  if (foundType.length > 0) return foundType[0];
}

export function parseQuery(queryName: string, schemaTypes: IType[]) {
  const query = findType(queryName, schemaTypes);
  if (query?.fields) {
    for (const field of query.fields) {
      parseArgs(field.args, schemaTypes);
      parseType(field, schemaTypes);
    }
  }
  return query;
}

function parseArgs(args: IArg[], schemaTypes: IType[]) {
  for (const arg of args) {
    const finType = cycleType(arg.type as IFinType);
    if (finType.name && finType.kind !== 'OBJECT') {
      const TypeDetails = parseQuery(finType.name, schemaTypes);
      if (TypeDetails) arg.type = TypeDetails;
    }
  }
}

function parseType(type: ITypeField, schemaTypes: IType[]) {
  const finType = cycleType(type.type as IFinType);
  if (finType.name && finType.kind !== 'OBJECT') {
    const TypeDetails = parseQuery(finType.name, schemaTypes);
    if (TypeDetails) type.type = TypeDetails;
  } else {
    if (finType.name) {
      const foundType = findType(finType.name, schemaTypes);
      if (foundType) {
        type.type = foundType;
        if (type.type.fields) {
          for (const field of type.type.fields) {
            const finType = cycleType(field.type as IFinType);
            if (finType.name) {
              const foundType = findType(finType.name, schemaTypes);
              if (foundType) {
                field.type = foundType;
              }
            }
          }
        }
      }
    }
  }
}
