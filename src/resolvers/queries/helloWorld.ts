import { ApolloError } from 'apollo-server-express'

/**
 * Prints hello world
 */
const helloWorld = async (
  _: any,
  args: {
    name: string
  }
) => {
  return `Hello ${args.name || 'World!'}`
}

export default helloWorld
