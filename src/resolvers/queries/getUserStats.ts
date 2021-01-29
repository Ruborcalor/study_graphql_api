import { ApolloError } from 'apollo-server-express'
import { generateUserStats } from '../../utils'

/**
 * Gets a users state
 */
const getUserStats = async (
  _: any,
  args: {
    userId: string
  }
) => {
  const { userId } = args

  const user = generateUserStats(parseInt(userId))
  console.log(user)

  return user
}

export default getUserStats
