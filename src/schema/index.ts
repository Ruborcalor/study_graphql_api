import { mergeTypeDefs } from '@graphql-tools/merge'

// Mutations and Queries
// import Mutation from './Mutation'
import Query from './Query'

import UserTypes from './User'

import LeaderboardTypes from './Leaderboard'

// Schema in alphabetical order
const schema = mergeTypeDefs([Query, ...UserTypes, ...LeaderboardTypes])

export default schema
