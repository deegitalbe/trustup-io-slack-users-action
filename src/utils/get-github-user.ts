import {getInput} from '@actions/core'
import {GITHUB_USER, GithubUser, INPUT} from '../enums'

const getGithubUser = (): GithubUser | undefined => {
  const username = getInput(INPUT.USERNAME)
  const usernames = Object.values(GITHUB_USER)
  return usernames.find(name => name === username)
}

export default getGithubUser
