const random = (seed: number) => {
  seed++
  let x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const makeid = (length: number) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const generateUsername = () => {
  return makeid(8)
}

const generateLeaderboard = (scale: number) => {
  // generate usernames
  Array.from({ length: 10 }, (_, i) => i + 1)
  const usernames = Array.from({ length: 50000 }, _ => generateUsername())

  const generateScaledLeaderboard = (scale: number) =>
    usernames
      .map((username: string) => {
        let studyTimeInMinutes = Math.round(Math.random() * scale)
        return {
          username,
          studyTimeInMinutes,
        }
      })
      .sort((a, b) => (a.studyTimeInMinutes >= b.studyTimeInMinutes ? -1 : 1))

  return generateScaledLeaderboard(scale)
}

// const generateLeaderboard = () => {
//   // generate usernames
//   Array.from({ length: 10 }, (_, i) => i + 1)
//   const usernames = Array.from({ length: 50000 }, _ => generateUsername())

//   const generateScaledLeaderboard = (scale: number) =>
//     usernames
//       .map((username: string) => {
//         let studyTimeInMinutes = Math.round(Math.random() * scale)
//         return {
//           username,
//           studyTimeInMinutes,
//         }
//       })
//       .sort((a, b) => (a.studyTimeInMinutes >= b.studyTimeInMinutes ? -1 : 1))

//   const pastDayLeaderboard = generateScaledLeaderboard(360)
//   const pastWeekLeaderboard = generateScaledLeaderboard(360 * 7)
//   const pastMonthLeaderboard = generateScaledLeaderboard(360 * 30)
//   const allTimeLeaderboard = generateScaledLeaderboard(360 * 360)

//   return {
//     pastDayLeaderboard,
//     pastWeekLeaderboard,
//     pastMonthLeaderboard,
//     allTimeLeaderboard,
//   }
// }

export default generateLeaderboard
