const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Project {
      id: Int!
      name: String!
      tasks: [Task]
  }
  type Task {
      id: Int!
      title: String!
      project: Project
      completed: Boolean!
  }
  type User {
      id: String!
      name: String!
      sex: String!
  }
  type Query {
      projectByName(name: String!): Project
      fetchTasks: [Task]
      getTask(id: Int!): Task
      getUsers: [User]
  }
  type Mutation {
      markAsCompleted(taskID: Int!): Task
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });