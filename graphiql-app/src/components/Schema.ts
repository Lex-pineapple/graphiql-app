// import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

// export interface Droid {
//   type: 'Droid';
//   id: string;
//   name: string;
//   primaryFunction: string;
// }

// const threepio: Droid = {
//   type: 'Droid',
//   id: '2000',
//   name: 'C-3PO',
//   primaryFunction: 'Protocol',
// };

// const artoo: Droid = {
//   type: 'Droid',
//   id: '2001',
//   name: 'R2-D2',
//   primaryFunction: 'Astromech',
// };

// const droidData: { [id: string]: Droid } = {
//   [threepio.id]: threepio,
//   [artoo.id]: artoo,
// };

// function getDroid(id: string): Droid | null {
//   return droidData[id];
// }

// const droidType = new GraphQLObjectType({
//   name: 'Droid',
//   description: 'A mechanical creature in the Star Wars universe.',
//   fields: () => ({
//     id: {
//       type: new GraphQLNonNull(GraphQLString),
//       description: 'The id of the droid.',
//     },
//     name: {
//       type: GraphQLString,
//       description: 'The name of the droid.',
//     },
//     secretBackstory: {
//       type: GraphQLString,
//       description: 'Construction date and the name of the designer.',
//       resolve() {
//         throw new Error('secretBackstory is secret.');
//       },
//     },
//     primaryFunction: {
//       type: GraphQLString,
//       description: 'The primary function of the droid.',
//     },
//   }),
// });

// const queryType = new GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     droid: {
//       type: droidType,
//       args: {
//         id: {
//           description: 'id of the droid',
//           type: new GraphQLNonNull(GraphQLString),
//         },
//       },
//       resolve: (_source, { id }) => getDroid(id),
//     },
//   }),
// });

// export const schema: GraphQLSchema = new GraphQLSchema({
//   query: queryType,
//   types: [droidType],
// });
