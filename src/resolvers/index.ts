import { IResolvers } from 'graphql-tools'

import { helloWorld, getUserStats } from './queries'
import { mock } from './mutations'

const resolvers: IResolvers = {
  Query: {
    helloWorld,
    getUserStats,
  },
  Mutation: {
    mock,
  },
}

export default resolvers
