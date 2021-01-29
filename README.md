# Study Api

This is the graphql api for study together.

It has a query for getting a user's study statistics. Soon to add a query for getting leaderboard information.

### Queries:

#### Example `getUserStats` query:
```graphql
query {
  getUserStats(userId:"5"){
    studyTime{ 
      pastDay
      pastWeek
      pastMonth
      allTime
    }
    leaderboardPlacement{
      pastDay
      pastWeek
      pastMonth
      allTime
    }
    studyRole{
      currentStudyRole
      nextStudyRole
      studyTimeToPromotion
      roleRank
    }
    pastDayTimeSeries {
      datetime
      y
    }
    
    pastWeekTimeSeries {
      datetime
      y
    }
    
    pastMonthTimeSeries {
      datetime
      y
    }
    allTimeTimeSeries {
      datetime
      y
    }
  }
}
```

#### Example `getLeaderboard` query:
Coming soon...
