import { gql } from 'apollo-server-express'

const Leaderboard = gql`
  type Leaderboard {
    """
    Represents a leaderboard on a time interval
    """
    pastDayLeaderboard: [LeaderboardRow]
    pastWeekLeaderboard: [LeaderboardRow]
    pastMonthLeaderboard: [LeaderboardRow]
    allTimeLeaderboard: [LeaderboardRow]
  }
`

const LeaderboardRow = gql`
  type LeaderboardRow {
    """
    One row from a leaderboard
    """
    username: String
    studyTimeInMinutes: Int
  }
`

const TimeInterval = gql`
  enum TimeInterval {
    """
    Time interval enum
    """
    pastDay
    pastWeek
    pastMonth
    allTime
  }
`

export default [Leaderboard, LeaderboardRow, TimeInterval]
