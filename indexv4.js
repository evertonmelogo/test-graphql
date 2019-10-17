const app = require("express")();
const expressGraphql = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, buildSchema } = require("graphql");

// const schema = buildSchema(`
//   type User {
//     id: ID
//     name: String
//     repo: String
//     age: Int
//   }

//   type Query {
//     user(id: ID!): User
//     users: [User]
//     getUserByName(name: String!): [User]
//   }

//   type Mutation {
//     createUser(name: String!, repo: String!, age: Int!): User
//   }

// `);

//  
const schema = new GraphQLSchema({

  query: new GraphQLObjectType({

    name: 'Query',
    fields: () => ({
      hello: {
        type: GraphQLString,
      }
    })

  }),

  mutation: new GraphQLObjectType({

    name: 'Mutation',
    fields: () => ({
      createHello: {
        type: GraphQLString,
        description: 'Create a new hello',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (value, {id} ) => {
          console.log(id)
          return "teste";
        }
      }
    })

  })

});

const providers = {
    users: []
};

let id = 0;

const resolvers = {

  user({ id }) {
    return providers.users.find(item => item.id === Number(id));
  },

  users() {
    return providers.users;
  },

  getUserByName({ name }) {
    return [
      { id: 1, name: name, repo: "git", age: 32 },
      { id: 2, name: name, repo: "git", age: 33 }
    ]
  },

  createUser({ name, repo, age }) {
    const user = {
      id: id++,
      name,
      repo,
      age
    };

    providers.users.push(user);

    return user;
  },

  hello() {
    return 'Hello!'
  }

};

app.use(
    "/graphql",
    expressGraphql({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

app.listen(3000);