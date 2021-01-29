import { gql } from 'apollo-server-express'

const UserStats = gql`
  type UserStats {
    """
    The Stats of a User
    """
    studyTime: StudyTime
    leaderboardPlacement: LeaderboardPlacement
    studyRole: StudyRole
    pastDayTimeSeries: [TimePoint]
    pastWeekTimeSeries: [TimePoint]
    pastMonthTimeSeries: [TimePoint]
    allTimeTimeSeries: [TimePoint]
  }
`

const StudyTime = gql`
  type StudyTime {
    """
    Basic study time info
    """
    pastDay: Float
    pastWeek: Float
    pastMonth: Float
    allTime: Float
  }
`

const LeaderboardPlacement = gql`
  type LeaderboardPlacement {
    """
    Basic leaderboard info for a user
    """
    pastDay: Int
    pastWeek: Int
    pastMonth: Int
    allTime: Int
  }
`

const StudyRole = gql`
  type StudyRole {
    """
    Basic study role info for a user
    """
    currentStudyRole: String
    nextStudyRole: String
    studyTimeToPromotion: Float
    roleRank: Int
  }
`

const TimePoint = gql`
  type TimePoint {
    """
    For plotting. Time paired with size
    """
    datetime: String
    y: Float
  }
`

// https://www.smashingmagazine.com/2019/03/realtime-charts-graphql-postgres/

export default [
  UserStats,
  StudyTime,
  LeaderboardPlacement,
  StudyRole,
  TimePoint,
]
