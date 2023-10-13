import {Developer, GITHUB_USER} from '../enums'
import outputSlackValue from './output-slack-value'

const outputDeveloper = <TDeveloper extends Developer>(
  developer: TDeveloper
): void => {
  const githubUser = GITHUB_USER[developer]
  outputSlackValue(developer, githubUser)
}

export default outputDeveloper
