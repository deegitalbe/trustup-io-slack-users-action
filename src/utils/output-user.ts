import {GithubUser} from '../enums'
import outputSlackValue from './output-slack-value'

const outputUser = <TGithubUser extends GithubUser>(
  githubUser?: TGithubUser
): void => {
  outputSlackValue('USER', githubUser)
}

export default outputUser
