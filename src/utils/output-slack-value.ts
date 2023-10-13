import {setOutput} from '@actions/core'
import {Developer, GithubUser, OUTPUT} from '../enums'
import getSlackMention from './get-slack-mention'
import getSlackUser from './get-slack-user'

const outputSlackValue = <
  TGithubUser extends GithubUser,
  TOutputKey extends Developer | 'USER'
>(
  outputKey: TOutputKey,
  githubUser?: TGithubUser
): void => {
  const slackIdOutputKey = OUTPUT[`${outputKey}_SLACK_ID`]
  const slackMentionOutputKey = OUTPUT[`${outputKey}_MENTION`]
  const slackUser = githubUser ? getSlackUser(githubUser) : undefined
  const slackMention = slackUser ? getSlackMention(slackUser) : undefined
  setOutput(slackIdOutputKey, slackUser)
  setOutput(slackMentionOutputKey, slackMention)
}

export default outputSlackValue
