import { IResolvers } from 'graphql-tools'

import { helloWorld, getUserStats, getLeaderboard } from './queries'
import { mock } from './mutations'

const resolvers: IResolvers = {
  Query: {
    helloWorld,
    getUserStats,
    getLeaderboard,
  },
  Mutation: {
    mock,
  },
}

export default resolvers
