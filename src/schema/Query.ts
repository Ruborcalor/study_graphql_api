import { gql } from 'apollo-server-express'

const Query = gql`
  extend type Query {
    """
    Query file by id or url
    """
    helloWorld(name: String): String
    """
    Get a user's stats
    """
    getUserStats(userId: ID): UserStats
    """
    Get the leaderboard
    """
    getLeaderboard(timeInterval: TimeInterval!): [LeaderboardRow]
  }
`

export default Query
