import { ApolloServer } from 'apollo-server-express'
import { buildFederatedSchema } from '@apollo/federation'
import { applyMiddleware } from 'graphql-middleware'
import { graphqlUploadExpress } from 'graphql-upload'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

import { default as resolvers } from './resolvers'
import { default as typeDefs } from './schema'

// import { permissions } from './config'
// import { verifyUser } from './utils'

const app = express().use(graphqlUploadExpress())

// const context = ({ req }: any) => {
//   const token = req.headers.authorization || ''
//
//   const user = verifyUser(token)
//
//   return {
//     user,
//   }
// }

const server = new ApolloServer({
  uploads: false,
  schema: applyMiddleware(
    buildFederatedSchema([
      { resolvers: resolvers as any, typeDefs: typeDefs as any },
    ])
    // permissions
  ),
  // context,
})

server.applyMiddleware({ app, path: '/study_api' })

const port = process.env.PORT || 4001

app.listen(port, () =>
  console.log(`🚀 File service ready at http://localhost:${port}/study_api`)
)
