const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema/index');

const PORT = 3000;

const app = express();

// Graphql 用以构建Graph服务器
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// Graphiql 用以展示查询客户端
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

app.listen(PORT, () => console.log(`GraphiQL is running on http://localhost:${PORT}/graphiql`));