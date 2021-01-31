import { ApolloError } from 'apollo-server-express'
import { generateLeaderboard } from '../../utils'
import { TimeInterval } from '../../types'

/**
 * Gets a users state
 */
const getLeaderboard = async (
  _: any,
  args: {
    timeInterval: TimeInterval
  }
) => {
  const { timeInterval } = args

  const timeIntervalToScale = {
    pastDay: 360,
    pastWeek: 360 * 7,
    pastMonth: 360 * 30,
    allTime: 360 * 360,
  }

  const leaderboard = generateLeaderboard(timeIntervalToScale[timeInterval])

  // return null
  return leaderboard
}

export default getLeaderboard
