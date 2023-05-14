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
  type: IFinType | IType;
}

export interface IArg {
  name: string;
  description: string;
  type: IFinType | IType;
}

export interface IFinType {
  kind: string;
  name: string | null;
  ofType: IFinType | null;
}

export interface IParsedQuery {
  name: string;
  description: string;
  args: [
    {
      name: 'id';
      description: '';
      type: {
        kind: 'SCALAR';
        name: 'ID';
        description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.';
        fields: null;
      };
    }
  ];
  type: {
    kind: 'OBJECT';
    name: 'Character';
    description: '';
    fields: [
      {
        name: 'id';
        description: 'The id of the character.';
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'ID';
          description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.';
          fields: null;
        };
      },
      {
        name: 'name';
        description: 'The name of the character.';
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      },
      {
        name: 'status';
        description: "The status of the character ('Alive', 'Dead' or 'unknown').";
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      },
      {
        name: 'species';
        description: 'The species of the character.';
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      },
      {
        name: 'type';
        description: 'The type or subspecies of the character.';
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      },
      {
        name: 'gender';
        description: "The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').";
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      },
      {
        name: 'origin';
        description: "The character's origin location";
        args: [];
        type: {
          kind: 'OBJECT';
          name: 'Location';
          description: '';
          fields: [[Object], [Object], [Object], [Object], [Object], [Object]];
        };
      },
      {
        name: 'location';
        description: "The character's last known location";
        args: [];
        type: {
          kind: 'OBJECT';
          name: 'Location';
          description: '';
          fields: [[Object], [Object], [Object], [Object], [Object], [Object]];
        };
      },
      {
        name: 'image';
        description: "Link to the character's image.\nAll images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.";
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      },
      {
        name: 'episode';
        description: 'Episodes in which this character appeared.';
        args: [];
        type: {
          kind: 'OBJECT';
          name: 'Episode';
          description: '';
          fields: [[Object], [Object], [Object], [Object], [Object], [Object]];
        };
      },
      {
        name: 'created';
        description: 'Time at which the character was created in the database.';
        args: [];
        type: {
          kind: 'SCALAR';
          name: 'String';
          description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.';
          fields: null;
        };
      }
    ];
  };
}
