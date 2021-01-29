import { mergeTypeDefs } from '@graphql-tools/merge'

// Mutations and Queries
// import Mutation from './Mutation'
import Query from './Query'

import User from './User'

// Schema in alphabetical order
const schema = mergeTypeDefs([Query, ...User])

export default schema
