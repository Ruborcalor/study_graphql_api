const random = (seed: number) => {
  seed++
  let x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const generatePastDayTimeSeries = (userId: number) => {
  // use UTC in the backend
  const now = new Date()
  let res = []
  let d = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  for (; d <= now; d.setTime(d.getTime() + 1 * 60 * 60 * 1000)) {
    res.push({
      datetime: d.toISOString(),
      y: random(d.getHours() + userId) * 60,
    })
  }
  return res
}

const generatePastMonthTimeSeries = (userId: number) => {
  // use UTC in the backend
  const now = new Date()
  let res = []
  let d = new Date()
  d.setMonth(d.getMonth() - 1)
  d.setHours(0, 0, 0, 0)
  for (; d <= now; d.setDate(d.getDate() + 1)) {
    res.push({
      datetime: d.toISOString(),
      y: random(d.getDate() + userId) * 12,
    })
  }
  return res
}

const generateUserStats = (userId: number) => {
  const pastDayTimeSeries = generatePastDayTimeSeries(userId)
  const pastMonthTimeSeries = generatePastMonthTimeSeries(userId)
  const pastWeekTimeSeries = pastMonthTimeSeries.slice(
    pastMonthTimeSeries.length - 7
  )

  // get studyTime
  let pastDay = pastMonthTimeSeries[pastMonthTimeSeries.length - 1].y
  let pastWeek = pastWeekTimeSeries.reduce((total, cur) => total + cur.y, 0)
  let pastMonth = pastMonthTimeSeries.reduce((total, cur) => total + cur.y, 0)
  const studyTime = {
    pastDay,
    pastWeek,
    pastMonth,
  }

  // get leaderboardPlacement
  pastDay = Math.round(random(userId++) * 300)
  pastWeek = Math.round(random(userId++) * 300)
  pastMonth = Math.round(random(userId++) * 300)
  const leaderboardPlacement = {
    pastDay,
    pastWeek,
    pastMonth,
  }

  // get studyRole
  const currentStudyRole = '@master (80-120h)'
  const nextStudyRole = '@grandmaster (120-160h)'
  const studyTimeToPromotion = 0.5
  const roleRank = Math.round(random(userId++) * 50)
  const studyRole = {
    currentStudyRole,
    nextStudyRole,
    studyTimeToPromotion,
    roleRank,
  }

  const user = {
    pastDayTimeSeries,
    pastWeekTimeSeries,
    pastMonthTimeSeries,
    studyTime,
    leaderboardPlacement,
    studyRole,
  }

  return user
}

export default generateUserStats

// console.log(generatePastDayTimeSeries(0))
// console.log(generatePastMonthTimeSeries(0))
// console.log(generateUserData(2))
